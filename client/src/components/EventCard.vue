<template>
  <div>
    <v-card elevation="2" class="mb-5 mx-2">
      <v-img :src="concert.image"></v-img>
      <v-row
        ><v-col
          ><div class="font-weight-bold text-h4 ml-2">{{ concert.title }}</div></v-col
        ></v-row
      >
      <v-row
        ><v-col>
          <div class="font-weight-medium text-h6 ml-2">
            {{ newdate }}
          </div></v-col
        >
        <v-col>
          <v-btn @click="goToEvent" class="m-2 white--text" color="#002539"
            >Show Event</v-btn
          ></v-col
        ></v-row
      >
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
      this.$emit("changeRouterView", this.concert.id);
    },
  },
  created() {
    this.displayDate();
  },
};
</script>
