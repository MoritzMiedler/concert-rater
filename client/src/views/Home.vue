<template>
  <div>
    <EventCards :concerts="concerts"></EventCards>
  </div>
</template>

<script>
import EventCards from "../components/EventCards.vue";

export default {
  props: {
    concerts: {
      type: Array,
    },
  },
  components: {
    EventCards,
  },
};
</script>

<style lang="scss" scoped></style>
