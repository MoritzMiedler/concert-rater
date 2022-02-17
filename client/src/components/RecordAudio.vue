<template>
  <div><vue-record-audio color="#002539" mode="hold" @result="sendresult" /></div>
</template>

<script>
export default {
  data() {
    return {
      audio: "",
    };
  },
  methods: {
    sendresult(data) {
      const reader = new FileReader();
      reader.readAsDataURL(data);
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
