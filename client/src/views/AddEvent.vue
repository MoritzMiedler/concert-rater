<template>
  <div>
    <v-btn fab dark large color="#002539" fixed left top @click="goBack">
      <v-icon dark>mdi-arrow-left</v-icon>
    </v-btn>
    <div><v-text-field label="Main input" :rules="rules" hide-details="auto"></v-text-field></div>
  </div>
</template>

<script>
export default {
  methods: {
    goBack() {
      this.$router.push("/");
    },
  },
};
</script>

<style lang="css" scoped></style>
