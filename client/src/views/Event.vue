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
            <v-col></v-col>
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
  data() {
    return {};
  },
  components: {},
};
</script>

<style lang="scss" scoped></style>
