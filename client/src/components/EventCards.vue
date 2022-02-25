<template>
  <div>
    <div v-for="(concert, i) in concerts" :key="i">
      <EventCard :concert="concert" @changeRouterView="changeRouterView"></EventCard>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    concerts: {
      type: Array,
    },
  },
  components: {
    EventCard: () => import("./EventCard.vue"),
  },
  methods: {
    changeRouterView(id) {
      this.$emit("changeRouterView", id);
    },
  },
};
</script>

<style lang="scss" scoped></style>
