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
            ><v-col
              ><audio controls>
                <source :src="concert.audio" type="audio/mp3" />
                Your browser does not support the audio tag.
              </audio></v-col
            >
            <v-btn @click="testaudio"> testaudio</v-btn></v-row
          >
        </v-card>
      </v-col>
      <v-col class="col-1"></v-col>
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
      default() {
        return {};
      },
    },
  },
  methods: {
    getConcert() {
      this.$emit("concert", this.id);
    },
    goBack() {
      this.$router.push("/");
    },
    testaudio() {
      console.log(this.concert.audio);
    },
  },
  created() {
    this.getConcert();
    // eslint-disable-next-line
    this.image = this.concert.image;
  },
  data() {
    return {
      image: "",
      newdate: "",
    };
  },
  components: {},
};
</script>

<style lang="scss" scoped></style>
