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
      try {
        console.log("Started");
        const res = await axios({ url: "http://localhost:3000/concerts", method: "GET" });
        console.log("Done");
        this.concerts = res.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
  async created() {
    await this.getEvents();
  },
};
</script>

<style lang="css" scoped></style>
