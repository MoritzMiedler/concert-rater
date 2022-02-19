<template>
  <div>
    <v-app>
      <v-main>
        <router-view :image="image" :concerts="concerts" @image="getImage" @addEvent="addEvent" />
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
      image: "",
    };
  },
  methods: {
    async getEvents() {
      try {
        console.log("Started");
        const res = await axios({ url: "http://127.0.0.1:3000/concerts", method: "GET" });
        console.log("Done");
        this.concerts = res.data;
      } catch (error) {
        console.log(error);
      }
    },
    getImage(picturebase64) {
      this.image = picturebase64;
    },
    async addEvent(eventObject) {
      try {
        await axios({ url: "http://127.0.0.1:3000/concerts", method: "POST" });
        console.log(eventObject);
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
