<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      helpbox: ref(false),
    };
  },
  methods: {
    goHome() {
      this.$router.push("/");
    },
  },
};
</script>

<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar class="q-pa-xs" @click="goHome">
        <svg
          viewBox="0 0 220 50"
          xmlns="http://www.w3.org/2000/svg"
          style="height: 55px; width: auto; border-radius: 15px"
          xmlns:bx="https://boxy-svg.com"
          class="shadow-0"
        >
          <rect
            x="0"
            y="0"
            width="220"
            height="45"
            rx="15"
            ry="15"
            style="fill: #00000000"
          />
          <text
            style="
              fill: rgb(255, 235, 238);
              font-family: Artifika;
              font-size: 28px;
              font-weight: 600;
            "
            x="10"
            y="35"
          >
            WebNotes.ml
          </text>
        </svg>

        <!-- <q-btn flat round dense icon="menu" /> -->
        <q-btn
          class="q-ml-auto q-mr-md text-h6 bg-primary q-px-sm q-py-none rounded-borders"
          style="border: 1px solid pink"
          @click="helpbox = true"
        >
          Help
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />

      <q-page-sticky position="bottom-right" :offset="[18, 18]">
        <q-btn fab icon="home" color="primary" class="shadow-3" to="/" />
      </q-page-sticky>
    </q-page-container>
  </q-layout>

  <q-dialog v-model="helpbox">
    <q-card>
      <q-card-section class="row items-center">
        <div class="text-h6 text-grey-9">Help</div>
        <q-space />
        <q-btn icon="close" flat round dense v-close-popup />
      </q-card-section>

      <q-card-section class="q-pt-none text-body1 text-grey-9">
        WebNotes is a free light weight notes tool to creates and saves notes.
        The notes created in WebNotes are auto saved and are locally available
        in same browser in same device.
        <br /><br />

        You can share the notes across devices using the share buttom. A OTP is
        generated each time you share a note, which is valid for next 2
        minutes.<br /><br />

        No notes are stored over any other server or cloud.<br /><br />

        Built using:<br />
        <a href="https://quasar.dev/" target="_blank" class="text-blue-9 link"
          >Quasar</a
        >,
        <a href="https://vuejs.org" target="_blank" class="text-blue-9 link"
          >Vue.js</a
        >
        and
        <a
          href="https://2minutejson.com/"
          target="_blank"
          class="text-blue-9 link"
          >2Minute{JSON}</a
        >
        <br /><br />

        License:<br />
        <a
          href="https://github.com/abdulnine7/webnotes/blob/master/LICENSE"
          target="_blank"
          class="text-blue-9 link"
          >MIT</a
        >
        ©
        <a href="https://abdul.co.in" target="_blank" class="text-blue-9 link"
          >Abdul Noushad Sheikh</a
        >
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="Close" color="primary" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
