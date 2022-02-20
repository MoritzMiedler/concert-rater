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
            <v-btn large @click="openCamera" color="#002539"
              ><v-icon color="white">mdi-camera</v-icon></v-btn
            >
          </div>
        </v-col>
        <v-col class="col-2"></v-col>
      </v-row>
      <v-row
        ><v-col class="col-2"></v-col
        ><v-col class="col-8">
          <v-rating
            color="#002539"
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
          ><v-btn @click="getLocation()" color="#002539" class="white--text">Location</v-btn></v-col
        >
        <v-col class="col-2"></v-col>
      </v-row>

      <v-row>
        <v-col class="col-2"></v-col
        ><v-col class="col-8 d-flex justify-center"
          ><v-btn @click="addEvent()" color="#002539" class="white--text">AddEvent</v-btn></v-col
        >
        <v-col class="col-2"></v-col>
      </v-row>

      <v-row>
        <v-col class="col-1"></v-col>
        <v-col class="col-10"
          ><v-alert v-if="alert" border="bottom" color="red" elevation="6" type="error">
            Bitte alle Felder ausfüllen</v-alert
          ></v-col
        >
        <v-col class="col-1"></v-col>
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
        date: this.date,
        audio: this.audio,
        locy: this.locY,
        locx: this.locX,
      };
    },
    getDate() {
      const todaydate = new Date();
      // eslint-disable-next-line
      this.date = todaydate.toISOString().split("T")[0];
    },
    addEvent() {
      const eventObject = this.finalObject();
      if (
        eventObject.title === "" ||
        eventObject.rating === 0 ||
        eventObject.date === "" ||
        eventObject.image === "" ||
        eventObject.audio === "" ||
        eventObject.locY === "" ||
        eventObject.locX === ""
      ) {
        this.alert = true;
      } else {
        this.$emit("addEvent", eventObject);
      }
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
      alert: false,
    };
  },
  created() {
    this.getDate();
    this.getLocation();
  },
  props: {
    image: {
      type: String,
    },
  },
};
</script>

<style lang="css" scoped></style>
