<script>
import { computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useLocalNotes } from "src/helper";
import NotesContainer from "src/components/NotesContainer.vue";
export default {
  components: { NotesContainer },
  setup() {
    const notes = useLocalNotes();
    const route = useRoute();
    const noteId = computed(() => parseInt(route.params.id));
    const note = computed(() => notes.value[noteId.value]);
    const router = useRouter();
    const remove = () => {
      notes.value.splice(noteId.value, 1);
      router.push("/");
    };
    const editing = ref(false);
    return { note, editing, remove };
  },
};
</script>

<template>
  <q-page padding>
    <NotesContainer>
      <div v-if="editing">
        <form @submit="editing = false">
          <q-input
            v-model="note.title"
            label="Title"
            class="bg-white rounded-borders"
            filled
          />
          <q-input
            v-model="note.description"
            label="Description"
            filled
            class="q-mt-sm bg-white rounded-borders"
            dense
          />

          <q-card flat bordered class="q-mt-sm">
            <q-editor v-model="note.content" min-height="20rem" />
          </q-card>

          <div class="q-mt-md">
            <q-btn class="q-ml-sm" color="positive" type="submit"> Done </q-btn>
          </div>
        </form>
      </div>

      <div v-else>
        <div class="row items-center justify-between">
          <h3 class="q-mx-sm q-mb-md q-mt-md text-red-1">{{ note.title }}</h3>
          <div class="">
            <q-btn
              class="q-ma-sm"
              round
              color="info"
              icon="edit"
              title="Edit"
              @click="editing = true"
            />
            <q-btn
              class="q-ma-sm"
              round
              color="red"
              icon="delete"
              title="Delete"
              @click="remove"
            />
          </div>
        </div>
        <div class="text-h6 text-red-1 q-mx-sm q-my-none">
          {{ note.description }}
        </div>
        <div class="q-mx-sm q-mt-md text-red-1" v-html="note.content" />
      </div>
    </NotesContainer>
  </q-page>
</template>
