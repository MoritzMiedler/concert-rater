<template>
  <div>
    <v-app>
      <v-main>
        <router-view
          :image="image"
          :concerts="concerts"
          @image="getImage"
          @addEvent="addEvent"
          :concert="concert"
          @changeRouterView="changeView"
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
        const concert = res.data;
        concert.date = this.splitdate(concert.date);
        // eslint-disable-next-line
        concert.audio = `data:audio/mpeg;${concert.audio.split(";").pop()}`;
        this.concert = concert;
      } catch (error) {
        console.log(error);
      }
    },
    splitdate(date) {
      const tempdate = date.split("T");
      tempdate.pop();
      // eslint-disable-next-line
      const ndate = tempdate[0].split("-").reverse();
      return `${ndate[0]}.${ndate[1]}.${ndate[2]}`;
    },
    changeView(id) {
      this.getConcert(id).then(() => {
        this.$router.push(`/event/${id}`);
      });
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
