<template>
  <div>
    <v-card elevation="2" class="mb-5 mx-2">
      <v-img :src="`data:image/png;base64,${concert.image}`"></v-img>
      <div class="m-2 d-flex justify-center font-weight-medium text-h5">
        {{ newdate }} <v-spacer></v-spacer>
        <div class="font-weight-bold">{{ concert.title }}</div>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "EventCard",
  data() {
    return {
      newdate: "",
    };
  },
  props: {
    concert: {
      type: Object,
    },
  },
  methods: {
    displayDate() {
      const tempdate = this.concert.date.split("T");
      tempdate.pop();
      const date = tempdate[0].split("-").reverse();
      this.newdate = `${date[0]}.${date[1]}.${date[2]}`;
    },
  },
  created() {
    this.displayDate();
  },
};
</script>
