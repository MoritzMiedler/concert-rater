<template>
  <div>
    <v-btn height="50px" width="50px" fab dark large color="#002539" fixed left top @click="goBack">
      <v-icon dark>mdi-arrow-left</v-icon>
    </v-btn>

    <div class="mt-16">
      <v-row
        ><v-col class="col-2"></v-col>
        <v-col class="col-8"
          ><v-text-field v-model="name" label="Name" hide-details="auto"></v-text-field
        ></v-col>
        <v-col class="col-2"></v-col>
      </v-row>
      <v-row>
        <v-col class="col-2"></v-col>
        <v-col class="col-8">
          <div class="d-flex justify-center">
            <v-btn large @click="openCamera"><v-icon color="#002539">mdi-camera</v-icon></v-btn>
          </div>
        </v-col>
        <v-col class="col-2"></v-col>
      </v-row>
      <v-row
        ><v-col class="col-2"></v-col
        ><v-col class="col-8">
          <v-rating
            color="warning"
            class="d-flex justify-center"
            hover
            length="5"
            size="30"
            v-model="rating"
          >
          </v-rating></v-col
        ><v-col class="col-2"></v-col>
      </v-row>
      <v-row>
        <v-col class="col-2"></v-col
        ><v-col class="col-8 d-flex justify-center"
          ><RecordAudio @audio="setAudio"></RecordAudio
        ></v-col>
        <v-col class="col-2"></v-col>
      </v-row>
      <v-row>
        <v-col class="col-2"></v-col
        ><v-col class="col-8 d-flex justify-center"
          ><v-btn @click="getLocation()">Location</v-btn></v-col
        >
        <v-col class="col-2"></v-col>
      </v-row>
      <v-row>
        <v-col class="col-2"></v-col
        ><v-col class="col-8 d-flex justify-center"
          ><v-btn @click="testInputs()">TestInputs</v-btn></v-col
        >
        <v-col class="col-2"></v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import RecordAudio from "../components/RecordAudio.vue";

export default {
  methods: {
    goBack() {
      this.$router.push("/");
    },
    openCamera() {
      this.$router.push("/camera");
    },
    getLocation() {
      this.$getLocation({
        enableHighAccuracy: true,
        timeout: Infinity,
      }).then((coordinates) => {
        this.locY = coordinates.lat;
        this.locX = coordinates.lng;
      });
    },
    testInputs() {
      console.log("NAME");
      console.log(this.name);
      console.log("////////////////");
      console.log("IMAGE");
      console.log(this.image);
      console.log("////////////////");
      console.log("RATING");
      console.log(this.rating);
      console.log("////////////////");
      console.log("AUDIO");
      console.log(this.audio);
      console.log("////////////////");
      console.log("COORDINATES");
      console.log(`${this.locY} und ${this.locX}`);
    },
    setAudio(audio) {
      this.audio = audio;
    },
  },
  data() {
    return {
      audio: "",
      rating: 0,
      date: "",
      name: "",
      locX: "",
      locY: "",
    };
  },
  components: {
    RecordAudio,
  },
  props: {
    image: {
      type: String,
    },
  },
};
</script>

<style lang="css" scoped></style>
