<template>
  <div>
    <v-card elevation="2">
      <v-img :src="concert.image" height="100px"></v-img>
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
