<script>
/* eslint-disable */
import NotesContainer from "src/components/NotesContainer.vue";
import NoteCard from "src/components/NoteCard.vue";
import { useLocalNotes } from "src/helper";
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
export default defineComponent({
  components: { NoteCard, NotesContainer },
  name: "PageIndex",
  setup() {
    const notes = useLocalNotes();
    const router = useRouter();
    return { router, notes };
  },
  methods: {
    deletenote(idx) {
      console.log(idx);
      this.notes.splice(idx, 1);
    },
    sharenote(idx) {
      console.log("Sharing note: " + idx);
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
</template>
