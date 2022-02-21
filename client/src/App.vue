<template>
  <div>
    <v-app>
      <v-main>
        <router-view
          :image="image"
          :concerts="concerts"
          @image="getImage"
          @addEvent="addEvent"
          @concert="getConcert"
          :concertarr="concert"
        />
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
      concert: {},
    };
  },
  methods: {
    async getEvents() {
      try {
        console.log("Started");
        const res = await axios({ url: "http://127.0.0.1:3000/concerts", method: "GET" });
        this.concerts = res.data;
        console.log("Done");
      } catch (error) {
        console.log(error);
      }
    },
    getImage(picturebase64) {
      this.image = picturebase64;
    },
    async addEvent(eventObject) {
      try {
        const res = await axios({
          url: "http://127.0.0.1:3000/concerts",
          method: "POST",
          "content-type": "application/json",
          data: eventObject,
        });
        console.log(res);
        this.getEvents();
      } catch (error) {
        console.log(error);
      }
    },
    async getConcert(id) {
      try {
        const res = await axios({ url: `http://127.0.0.1:3000/concerts/${id}`, method: "GET" });
        // eslint-disable-next-line
        this.concert = res.data[0];
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
