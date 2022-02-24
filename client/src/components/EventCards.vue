<template>
  <div>
    <div v-for="(concert, i) in concerts" :key="i">
      <EventCard :concert="concert" @changeRouterView="changeRouterView"></EventCard>
    </div>
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
  methods: {
    changeRouterView(id) {
      this.$emit("changeRouterView", id);
    },
  },
};
</script>

<style lang="scss" scoped></style>
