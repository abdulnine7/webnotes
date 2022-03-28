<script>
import { computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useLocalNotes } from "src/helper";
export default {
  props: {
    title: String,
    description: String,
    content: String,
    idx: Number,
  },
};
</script>

<template>
  <q-card
    flat
    bordered
    class="q-mb-sm cursor-pointer bg-red-1 row items-center justify-between"
    @click="$emit('click', $event)"
  >
    <q-card-section class="q-pt-xs">
      <div class="text-h5 q-mt-sm q-mb-xs text-blue-grey-10">{{ title }}</div>
      <div class="text-caption text-blue-grey-9">
        {{ description }}
      </div>
    </q-card-section>

    <div>
      <q-btn
        class="q-mx-sm"
        round
        color="blue"
        icon="share"
        title="Share"
        @click="$emit('sharenote', $event)"
        v-on:click.stop
      />
      <q-btn
        class="q-mx-sm"
        round
        color="red"
        icon="delete"
        title="Delete"
        @click="$emit('deletenote', $event)"
        v-on:click.stop
      />
    </div>
  </q-card>
</template>
