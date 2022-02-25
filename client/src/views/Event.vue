<template>
  <div>
    <v-btn height="50px" width="50px" fab dark large color="#002539" fixed left top @click="goBack">
      <v-icon dark>mdi-arrow-left</v-icon>
    </v-btn>

    <v-row class="">
      <v-col class="col-12"
        ><v-card class="mb-5">
          <v-img :src="concert.image" class="mb-2"></v-img>
          <v-row>
            <v-col>
              <div class="d-flex text-h5">
                <div class="font-weight-bold ml-2">{{ concert.title }} <v-spacer></v-spacer></div>
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="ml-2">
              <v-icon v-for="i in concert.rating" :key="i">mdi-star</v-icon>
            </v-col>
            <v-col></v-col>
          </v-row>
          <v-row>
            <v-col class="ml-2">{{ concert.date }}</v-col>
          </v-row>
          <v-row
            ><v-col class="d-flex justify-center">
              <av-line :line-width="2" line-color="#002539" :audio-src="concert.audio"></av-line
            ></v-col>
          </v-row>
          <v-row>
            <iframe style="border: 0px" class="col-12" loading="lazy" :src="src"> </iframe>
          </v-row>
          <v-row
            ><v-col class="d-flex justify-center"
              ><v-btn large v-if="delbutton" @click="deleteConcert" color="#002539"
                ><v-icon color="white">mdi-trash-can</v-icon></v-btn
              ></v-col
            ></v-row
          >
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
    },
    concert: {
      type: Object,
    },
  },
  methods: {
    getConcert(id) {
      this.$emit("concert", id);
    },
    goBack() {
      this.$router.push("/");
    },
    deleteConcert() {
      this.delbutton = false;
      this.$emit("delete", this.concert.id);
    },
  },
  data() {
    return { src: "", delbutton: true };
  },
  created() {
    if (this.concert.image === undefined) {
      this.$router.push("/");
    } else {
      this.src = `https://www.google.com/maps/embed/v1/place?key=AIzaSyA1AQ2uRN2iQbotNBzzrE5FutPW7zSMu8Q&q=${this.concert.locy},${this.concert.locx}`;
    }
  },
};
</script>

<style lang="scss" scoped></style>
