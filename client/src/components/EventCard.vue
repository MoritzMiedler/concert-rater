<template>
  <div>
    <v-card elevation="2" class="mb-5 mx-2">
      <v-img :src="concert.image"></v-img>
      <div class="m-2 d-flex justify-center font-weight-medium text-h6">
        {{ newdate }} <v-spacer></v-spacer>
        <div class="font-weight-bold">{{ concert.title }}</div>
        <v-spacer></v-spacer>
        <v-btn @click="goToEvent" class="m-2">Show Event</v-btn>
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
    goToEvent() {
      this.$router.push(`/event/${this.concert.id}`);
    },
  },
  created() {
    this.displayDate();
  },
};
</script>
