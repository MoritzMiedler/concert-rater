<template>
  <div>
    <v-card elevation="2" class="my-5">
      <v-img :src="`data:image/png;base64,${concert.image}`"></v-img>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "EventCard",

  props: {
    concert: {
      type: Object,
    },
  },
};
</script>
