<template>
  <div>
    <v-card elevation="2" class="mb-5 mx-2">
      <v-img :src="concert.image"></v-img>
      <div class="m-2 d-flex justify-center font-weight-medium text-h5">
        <v-spacer></v-spacer>
        <div class="font-weight-bold">{{ concert.title }}</div>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
    },
    concertarr: {
      type: Array,
    },
  },
  methods: {
    getConcert() {
      this.$emit("concert", this.id);
    },
  },
  async created() {
    await this.getConcert();
    // eslint-disable-next-line
    this.concert = this.concertarr[0];
  },
  data() {
    return {
      concert: [],
    };
  },
};
</script>

<style lang="scss" scoped></style>
