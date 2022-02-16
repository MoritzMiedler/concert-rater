<template>
  <div>
    <EventCards :concerts="concerts"></EventCards>
    <v-btn fab dark large color="#002539" fixed right bottom @click="goToAddEvent">
      <v-icon dark>mdi-plus</v-icon>
    </v-btn>
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
  methods: {
    goToAddEvent() {
      this.$router.push("/addEvent");
    },
  },
};
</script>

<style lang="scss" scoped></style>
