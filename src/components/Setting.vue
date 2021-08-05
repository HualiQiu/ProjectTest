<template>
  <div class="container" :class="{ activeHeight: active }">
    <div class="line"></div>
    <div class="cont1">
      <div class="info">
        <div class="text1">A/C is ON</div>
        <div class="text2 mt-5" v-show="!active" style="width: 211px">
          Tap to turn off or swipe up for a fast setup
        </div>
        <div class="text2 mt-5" v-show="active">
          <div>Currently 27 C</div>
          <div>Will change in 2min</div>
        </div>
      </div>
      <div @click="active = !active">
        <Button>
          <IconOn></IconOn>
        </Button>
      </div>
    </div>
    <div v-show="active">
      <div class="ac">
        <Ac></Ac>
        <div class="speed">
          <div class="text1 center">Fan speed</div>
          <Slider class="svg"></Slider>
        </div>
        <div class="mode">
          <div class="text2 center">Mode</div>
          <div class="btnList">
            <div class="bt">
              <div>Auto</div>
              <Button :status="true">
                <IconAuto></IconAuto>
              </Button>
            </div>
            <div class="bt">
              <div>Dry</div>
              <Button :status="false">
                <IconCool></IconCool>
              </Button>
            </div>
            <div class="bt">
              <div>Cool</div>
              <Button :status="false">
                <IconCool>
                  <IconDry></IconDry>
                </IconCool>
              </Button>
            </div>
            <div class="bt">
              <div>Program</div>
              <Button :status="false">
                <IconProgram></IconProgram>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "./Button";
import Ac from "./Ac";
import Slider from "./Slider";
import IconAuto from "./Icon/IconAuto";
import IconCool from "./Icon/IconCool";
import IconDry from "./Icon/IconDry";
import IconProgram from "./Icon/IconProgram";
import IconOn from "../components/Icon/IconOn";

export default {
  name: "Setting",
  data() {
    return {
      active: false,
    };
  },
  methods: {
    open() {
      console.log(1);
      this.active = !this.active;
    },
  },
  components: {
    Button,
    Ac,
    Slider,
    IconAuto,
    IconCool,
    IconDry,
    IconProgram,
    IconOn,
  },
};
</script>

<style scoped>
.container {
  position: absolute;
  bottom: 0;
  width: 494px;
  height: 144px;
  border-radius: 50px 50px 0 0;
  background-image: linear-gradient(to bottom, #353a40, #16171b);
  overflow: hidden;
  box-shadow: 0 0 3px 1px #999;
  transition: height 0.4s ease;
}

.activeHeight {
  height: 931px;
}

.line {
  width: 60px;
  height: 4px;
  background: #17181c;
  border-radius: 20px;
  margin: 15px auto;
}

.cont1 {
  display: flex;
  justify-content: space-between;
  /*align-items: center;*/
  width: 414px;
  /*height: 81px;*/
  margin: 5px auto;
}

.text1 {
  font-size: 24px;
  color: #ffffff;
  filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.25));
}

.text2 {
  font-size: 18px;
  color: #7f8489;
  filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.25));
}

.mt-5 {
  margin-top: 5px;
}

.center {
  text-align: center;
}

.speed {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 146px;
  height: 102px;
  margin: 0 auto;
}

.speed .svg {
  margin-top: 24px;
}

.mode {
  width: 392px;
  height: 161px;
  margin: 0 auto;
}

.btnList {
  display: flex;
  justify-content: space-between;
  width: 392px;
  height: 114px;
  margin-top: 24px;
}

.btnList .bt {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 80px;
  height: 114px;
}
</style>
