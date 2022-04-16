<script>
/* eslint-disable */
import NotesContainer from "src/components/NotesContainer.vue";
import NoteCard from "src/components/NoteCard.vue";
import { useLocalNotes } from "src/helper";
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import { ref } from "vue";
import axios from "axios";

export default defineComponent({
  components: { NoteCard, NotesContainer },
  name: "PageIndex",
  setup() {
    const notes = useLocalNotes();
    const router = useRouter();
    const progress = ref(1);
    return {
      router,
      notes,
      sharebox: ref(false),
      recievebox: ref(false),
      progress,
      recieveotp: ref(""),
    };
  },
  methods: {
    deletenote(idx) {
      // console.log(idx);
      this.notes.splice(idx, 1);
    },
    sharenote(idx) {
      this.sharebox = true;

      axios
        .post(
          "https://a2mj.herokuapp.com/",
          {
            json: window.btoa(JSON.stringify(this.notes[idx])),
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          document.getElementById("share-requsting").hidden = true;
          document.getElementById("share-otp").hidden = false;
          document.getElementById("otp").innerHTML = response.data.data.otp;

          var countdown = 120;
          var x = setInterval(() => {
            countdown = countdown - 1;
            this.progress = (countdown / 120).toFixed(2);

            if (countdown == 0 || !this.sharebox) {
              clearInterval(x);
              this.progress = 1;
            }
          }, 1000);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    fetchNote(recieveotp) {
      console.log(recieveotp.loading);
      document.getElementById("recievebox-loading").hidden = false;
      document.getElementById("recievebox-error").hidden = true;
      document.getElementById("recievebox-success").hidden = true;

      axios
        .get("https://a2mj.herokuapp.com/json/?otp=" + recieveotp)
        .then((response) => {
          document.getElementById("recievebox-loading").hidden = true;
          document.getElementById("recievebox-success").hidden = false;
          document.getElementById("recievebox-success-message").innerHTML =
            "Success! Note recieved successfully.";
          // console.log(JSON.parse(window.atob(response.data.json)));
          const noteX = JSON.parse(window.atob(response.data.json));
          this.notes.push(noteX);
        })
        .catch((e) => {
          document.getElementById("recievebox-loading").hidden = true;
          document.getElementById("recievebox-error").hidden = false;
          document.getElementById("recievebox-error-message").innerHTML =
            e.response.data.error;
          // console.log(e.response);
        });
    },
  },
});
</script>

<template>
  <q-page padding>
    <NotesContainer>
      <div class="row items-center justify-between">
        <h4 class="q-mx-sm text-red-1">Your notes</h4>
        <div>
          <q-btn
            class="q-mx-sm"
            round
            color="positive"
            icon="save_alt"
            @click="(this.recievebox = true), (recieveotp = '')"
            title="Recieve Note"
          ></q-btn>
          <q-btn
            class="q-mx-sm"
            round
            color="positive"
            icon="add"
            to="/new"
            title="Add Note"
          ></q-btn>
        </div>
      </div>

      <NoteCard
        v-for="({ title, description, content }, idx) in notes"
        :key="idx"
        :title="title"
        :description="description"
        :content="content"
        :idx="idx"
        @click="router.push(`/note/${idx}`)"
        @deletenote="deletenote(idx)"
        @sharenote="sharenote(idx)"
        class="q-mx-sm"
      />
      <div class="q-mx-sm text-red-1" v-if="notes.length === 0">
        You have not created any notes.
      </div>
    </NotesContainer>
  </q-page>

  <q-dialog v-model="sharebox">
    <q-card class="full-width">
      <q-card-section>
        <div class="text-h6">Sharing Note:</div>
      </q-card-section>

      <q-card-section class="q-pt-none" id="share-requsting">
        <p class="q-mt-sm">
          Generating the One time password(OTP) for the note.
        </p>
        <q-linear-progress
          stripe
          rounded
          indeterminate
          size="20px"
          color="info"
          class="q-mt-md"
          width="100%"
          :value="progress"
        />
      </q-card-section>

      <q-card-section class="q-pt-none" id="share-otp" hidden>
        <p id="otp" class="text-center otp"></p>

        <p class="text-center">OTP valid for next 2 minutes:</p>
        <q-linear-progress
          rounded
          size="10px"
          color="warning"
          class="q-mt-sm"
          width="100%"
          :value="progress"
        />
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="Close" color="primary" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>

  <q-dialog v-model="recievebox" persistent>
    <q-card class="full-width">
      <q-card-section>
        <div class="text-h6">Enter the OTP</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-input
          id="recieveotp"
          v-model="recieveotp"
          autofocus
          mask="####"
          :error="false"
          :loading="false"
          hint="Enter a 4 digit OTP"
          :rules="[
            (val) => !!val || '* Required',
            (val) => val.length > 3 || 'Please enter 4 digit OTP',
          ]"
          maxlength="4"
          @keyup.enter="fetchNote(recieveotp)"
          input-class="text-center otp"
        />

        <q-linear-progress
          stripe
          rounded
          indeterminate
          size="20px"
          color="info"
          class="q-mt-md"
          width="100%"
          hidden
          id="recievebox-loading"
        />

        <div id="recievebox-error" hidden>
          <q-banner
            class="text-center text-white bg-red q-mt-md"
            id="recievebox-error-message"
            rounded
            dense
          >
          </q-banner>
        </div>
        <div id="recievebox-success" hidden>
          <q-banner
            class="text-center text-white bg-green q-mt-md"
            id="recievebox-success-message"
            rounded
            dense
          >
          </q-banner>
        </div>
      </q-card-section>

      <q-card-actions align="right" class="text-primary">
        <q-btn flat label="Close" v-close-popup />
        <q-btn flat label="Ok" @click="fetchNote(recieveotp)" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
