<template>
  <div class="container" ref="cont"></div>
</template>

<script>
export default {
  name: "Item",
  props: ["bg"],
  mounted() {
    this.$refs.cont.style.backgroundImage = `url("../../public/itemBg1.png")`;
    console.log(this.$refs.cont.style.backgroundImage);
  },
};
</script>

<style scoped>
.container {
  width: 150px;
  height: 160px;
  background-size: 100% 100%;
  background-image: url("../assets/itemBg1.png");
}
</style>
