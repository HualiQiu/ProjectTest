<template>
  <div class="welcome">
    <div class="setting">
      <SetBtn></SetBtn>
    </div>
    <div class="title">
      <span class="text1">Tesla</span>
      <span class="text2">Cybertruck</span>
    </div>
    <div class="speed">
      <span class="s297">297</span>
      <span class="km">km</span>
    </div>
    <Car class="car"></Car>
    <div class="text3">A/C is turned on</div>
    <div class="lockBtn" @click="toMain()">
      <ButtonLock><IconLock></IconLock></ButtonLock>
      <div class="text4">Tap to open the car</div>
    </div>
  </div>
</template>

<script>
import Car from "../components/Car";
import SetBtn from "../components/SetBtn";
import ButtonLock from "../components/ButtonLock";
import IconLock from "../components/Icon/IconLock";
export default {
  name: "Welcome",
  data() {
    return {};
  },
  methods: {
    toMain() {
      this.$router.push({ path: "main" });
    },
  },
  components: {
    Car,
    SetBtn,
    ButtonLock,
    IconLock,
  },
};
</script>

<style scoped>
.welcome {
  width: 100%;
}

.setting {
  display: flex;
  justify-content: flex-end;
}

.title {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 32px auto 0 auto;
  flex-direction: column;
  width: 300px;
  height: 88px;
}

.speed {
  display: flex;
  justify-content: center;
  margin: 0 auto;
  width: 355px;
  height: 138px;
  margin-top: 75px;
}

.lockBtn {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 169px;
  height: 162px;
  margin: 42px auto 34px auto;
}

.text1 {
  color: #7f8489;
  font-size: 24px;
  filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.25));
}

.text2 {
  color: #fdfdfd;
  font-size: 50px;
  filter: drop-shadow(0 0 4px rgba(255, 255, 255, 0.25));
}

.text3 {
  margin-top: 341px;
  color: #7f8489;
  font-size: 24px;
  text-align: center;
}

.text4 {
  font-size: 16px;
  text-align: center;
}

.km {
  font-size: 24px;
  line-height: 130px;
}

.car {
  position: absolute;
  top: 0;
}

.s297 {
  font-size: 188px;
}
</style>
