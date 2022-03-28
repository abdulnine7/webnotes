<script>
export default {
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
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />

      <q-page-sticky position="bottom-right" :offset="[18, 18]">
        <q-btn fab icon="home" color="primary" class="shadow-3" to="/" />
      </q-page-sticky>
    </q-page-container>
  </q-layout>
</template>
