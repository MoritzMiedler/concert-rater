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
  },
  data() {
    return {
      image: "",
      audio: "",
      rating: "",
      date: "",
      name: "",
    };
  },
};
</script>

<style lang="css" scoped></style>
