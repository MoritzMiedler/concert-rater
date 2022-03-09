<template>
  <div>
    <v-app>
      <v-main>
        <v-alert dense outlined type="error" class="justify center" v-if="updateAv">
          Update verfügbar bittte die App <strong>RELOADEN</strong>
        </v-alert>
        <router-view
          :image="image"
          :concerts="concerts"
          @image="getImage"
          @addEvent="addConcert"
          :concert="concert"
          @changeRouterView="changeView"
          @delete="deleteConcert"
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
      updateAv: false,
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
        await axios({
          url: "http://127.0.0.1:3000/concerts",
          method: "POST",
          "content-type": "application/json",
          data: eventObject,
        });
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
    async deleteConcert(id) {
      await axios({ method: "DELETE", url: `http://127.0.0.1:3000/concerts/${id}` }).then(() => {
        this.getEvents().then(() => {
          this.$router.push("/");
        });
      });
    },
    addConcert(obj) {
      this.addEvent(obj).then(() => {
        this.getEvents().then(() => {
          this.$router.push("/");
        });
      });
    },
    updateAvailable() {
      this.updateAv = true;
      alert("RELOAD DAT BULLSHIT");
    },
  },
  async created() {
    document.addEventListener("swUpdated", this.updateAvailable, { once: true });
    await this.getEvents();
  },
};
</script>

<style lang="css" scoped>
body {
  overflow-x: hidden;
}
</style>
