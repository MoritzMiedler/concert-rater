<template>
  <div>
    <v-easy-camera
      v-model="picture"
      :fullscreen="fullscreen"
      :mustApprove="approved"
      output="blob"
      @approve="sendpicture()"
    ></v-easy-camera>
  </div>
</template>

<script>
import EasyCamera from "easy-vue-camera";

export default {
  components: {
    "v-easy-camera": EasyCamera,
  },
  data() {
    return {
      picture: Blob,
      fullscreen: true,
      approved: true,
    };
  },
  methods: {
    async sendpicture() {
      await {};
      console.log(this.picture);
      const reader = new FileReader();
      reader.readAsDataURL(this.picture);
      // eslint-disable-next-line
      reader.onloadend = function () {
        const base64data = reader.result;
        console.log(base64data);
      };
    },
  },
};
</script>

<style lang="scss" scoped></style>
