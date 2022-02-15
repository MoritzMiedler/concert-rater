<template>
  <div>
    <v-app>
      <v-main>
        <router-view :concerts="concerts" />
      </v-main>
    </v-app>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      concerts: [],
    };
  },
  methods: {
    async getEvents() {
      const res = await axios({ url: "http://localhost:3000/concerts", method: "GET" });
      this.concerts = res.data;
    },
  },
  created() {
    this.getEvents();
    console.log(this.concerts);
  },
};
</script>

<style lang="scss" scoped></style>
