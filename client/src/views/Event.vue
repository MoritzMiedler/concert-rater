<template>
  <div>
    <v-btn height="50px" width="50px" fab dark large color="#002539" fixed left top @click="goBack">
      <v-icon dark>mdi-arrow-left</v-icon>
    </v-btn>

    <v-row class="mt-16">
      <v-col class="col-1"></v-col>
      <v-col class="col-10"
        ><v-card elevation="2" class="mb-5 mx-2">
          <v-img :src="concert.image" class="my-2"></v-img>
          <v-row>
            <v-col>
              <div class="d-flex font-weight-medium text-h5">
                <div class="font-weight-bold mx-3">{{ concert.title }} <v-spacer></v-spacer></div>
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="mx-3">
              <v-icon v-for="i in concert.rating" :key="i">mdi-star</v-icon>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="mx-3">{{ concert.date }}</v-col>
          </v-row>
          <v-row
            ><v-col>
              <av-line :line-width="2" line-color="#002539" :audio-src="concert.audio"></av-line
            ></v-col>
          </v-row>
          <v-row>
            <v-col
              ><div>
                <iframe
                  width="600"
                  height="450"
                  style="border: 0"
                  loading="lazy"
                  allowfullscreen
                  :src="src"
                >
                </iframe></div
            ></v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col class="col-1"></v-col>
    </v-row>
  </div>
</template>

<script>
import { nextTick } from "vue";

export default {
  props: {
    id: {
      type: String,
    },
    concert: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    getConcert(id) {
      this.$emit("concert", id);
    },
    goBack() {
      this.$router.push("/");
    },
    async loader() {
      await nextTick();
    },
  },
  async created() {
    await this.loader();
    try {
      this.getConcert(this.id);
      // eslint-disable-next-line
      this.image = this.concert.image;
      this.audio = this.concert.audio;
    } catch (error) {
      console.log(error);
    }
    this.src = `https://www.google.com/maps/embed/v1/place?key=AIzaSyA1AQ2uRN2iQbotNBzzrE5FutPW7zSMu8Q&q=${this.concert.locy},${this.concert.locx}`;
  },
  data() {
    return {
      image: "",
      newdate: "",
      audio: "",
      src: "",
    };
  },
  components: {},
};
</script>

<style lang="scss" scoped></style>
