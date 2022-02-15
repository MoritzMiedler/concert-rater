<template>
  <div>
    <div v-for="(concert, i) in concerts" :key="i"><EventCard :concert="concert"></EventCard></div>
  </div>
</template>

<script>
import EventCard from "./EventCard.vue";

export default {
  props: {
    concerts: {
      type: Array,
    },
  },
  components: {
    EventCard,
  },
};
</script>

<style lang="scss" scoped></style>
