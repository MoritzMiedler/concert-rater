<template>
  <div>
    <v-row>
      <v-col class="col-1"></v-col>
      <v-col class="col-10"
        ><EventCards :concerts="concerts" @changeRouterView="changeRouterView"></EventCards></v-col
      ><v-col class="col-1"></v-col
    ></v-row>
    <v-btn fab dark large color="#002539" fixed right bottom @click="goToAddEvent">
      <v-icon dark>mdi-plus</v-icon>
    </v-btn>
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
    EventCards: () => import("../components/EventCards.vue"),
  },
  methods: {
    goToAddEvent() {
      this.$router.push("/addEvent");
    },
    changeRouterView(id) {
      this.$emit("changeRouterView", id);
    },
  },
};
</script>

<style lang="scss" scoped></style>
