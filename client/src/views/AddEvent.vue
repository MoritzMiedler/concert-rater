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
          ><vue-record-audio color="#002539" mode="hold" @result="sendresult"
        /></v-col>
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
      console.log(this.finalObject());
    },
    sendresult(data) {
      const reader = new FileReader();
      reader.readAsDataURL(data);
      // eslint-disable-next-line
      reader.onloadend = () => {
        const base64data = reader.result;
        this.audio = base64data;
      };
    },
    finalObject() {
      return {
        title: this.name,
        image: this.image,
        rating: this.rating,
        date: new Date(),
        audio: this.audio,
        locationY: this.locY,
        locationX: this.locX,
      };
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
  props: {
    image: {
      type: String,
    },
  },
};
</script>

<style lang="css" scoped></style>
