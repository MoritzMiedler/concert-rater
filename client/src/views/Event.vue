<template>
  <div>
    <v-btn height="50px" width="50px" fab dark large color="#002539" fixed left top @click="goBack">
      <v-icon dark>mdi-arrow-left</v-icon>
    </v-btn>

    <v-row class="mt-16">
      <v-col class="col-1"></v-col>
      <v-col class="col-10"
        ><v-card elevation="2" class="mb-5 mx-2">
          <v-img :src="concert.image"></v-img>
          <div class="m-2 d-flex font-weight-medium text-h5">
            <div class="font-weight-bold mx-2">{{ concert.title }} <v-spacer></v-spacer></div>
          </div> </v-card
      ></v-col>
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
    },
  },
  methods: {
    getConcert() {
      this.$emit("concert", this.id);
    },
    goBack() {
      this.$router.push("/");
    },
  },
  async created() {
    this.concert = {};
    await this.getConcert();
    // eslint-disable-next-line
    this.image = this.concert.image;
  },
  data() {
    return {
      image: "",
    };
  },
};
</script>

<style lang="scss" scoped></style>
