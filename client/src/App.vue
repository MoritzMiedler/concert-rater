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
          :concert="concert"
          @changeRouterView="showEvent"
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
      id: 0,
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
        this.concert = res.data;
        const tempdate = this.concert.date.split("T");
        tempdate.pop();
        const date = tempdate[0].split("-").reverse();
        this.concert.date = `${date[0]}.${date[1]}.${date[2]}`;
        // eslint-disable-next-line
        this.concert.audio = `data:audio/mpeg;${this.concert.audio.split(";").pop()}`;
        // (this.concert.console.logaudio);
      } catch (error) {
        console.log(error);
      }
    },
    showEvent(id) {
      console.log(id);
      this.$router.push(`/event/${id}`);
    },
  },
  async created() {
    await this.getEvents();
  },
};
</script>

<style lang="css" scoped>
body {
  overflow-x: hidden;
}
</style>
