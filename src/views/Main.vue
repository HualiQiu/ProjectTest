<template>
  <div class="main">
    <Header></Header>
    <div class="img">
      <img src="../assets/car2.png" alt="car2" />
    </div>
    <Status class="status"></Status>
    <div class="info">
      <div class="textInfo">Information</div>
      <div class="list">
        <div class="item bg1">
          <div class="text1">Engine</div>
          <div class="text2">Sleeping mode</div>
        </div>
        <div class="item bg2">
          <div class="text1">Climate</div>
          <div class="text2">A/C is ON</div>
        </div>
        <div class="item bg1">
          <div class="text1">Tires</div>
          <div class="text2">Sleeping mode</div>
        </div>
      </div>
    </div>
    <div class="navigation">
      <div class="text1 f24">Navigation</div>
      <div class="text1">History</div>
    </div>
    <Setting class="settings"></Setting>
  </div>
</template>

<script>
import Header from "../components/Header";
import Status from "../components/Status";
import Setting from "../components/Setting";

export default {
  name: "Main",
  components: {
    Header,
    Status,
    Setting,
  },
};
</script>

<style scoped>
.main {
  position: relative;
  width: 494px;
  height: 1074px;
}

.img {
  margin-top: 29px;
}

.status {
  margin-left: 43px;
}

.info {
  margin-left: 43px;
  margin-top: 56px;
}

.textInfo {
  width: 180px;
  height: 30px;
  font-size: 24px;
  filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.25));
}

.list {
  display: flex;
  margin-top: 30px;
  width: 100%;
  overflow-x: auto;
}

.item {
  flex-shrink: 0;
  width: 150px;
  height: 160px;
  box-sizing: border-box;
  padding-left: 15px;
  padding-top: 90px;
  border-radius: 8px;
  background-size: 100% 100%;
  margin-right: 25px;
}

.bg1 {
  background-image: url("../assets/itembg1.png");
}

.bg2 {
  background-image: url("../assets/itembg2.png");
}

.navigation {
  display: flex;
  justify-content: space-between;
  width: 411px;
  height: 30px;
  margin: 45px auto 20px auto;
}

.text1 {
  font-size: 18px;
  line-height: 28px;
  color: #ffffff;
  filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.25));
}

.text2 {
  font-size: 18px;
  line-height: 28px;
  color: #7f8489;
  filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.25));
}

.f24 {
  font-size: 24px;
}

/*.settings {*/
/*  position: sticky;*/
/*  bottom: 0;*/
/*}*/
</style>
