<template>
  <div class="btn" :class="{ active: active }" @click="change()">
    <div class="Rectangle79 center"></div>
    <div class="Rectangle81 center"></div>
    <div class="Rectangle82 center"></div>
    <div class="Rectangle83 center"></div>
    <div class="icon centerIcon">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Button2",
  data() {
    return {
      active: this.status,
    };
  },
  methods: {
    change() {
      if (this.status == undefined) {
        return false;
      }
      this.active = !this.active;
    },
  },
  mounted() {
    if (this.status == undefined) {
      this.active = true;
    }
  },
  props: ["status"],
};
</script>

<style scoped>
.center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-180deg);
}

.centerIcon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.btn {
  position: relative;
  width: 80px;
  height: 80px;
}

.active .Rectangle79 {
  width: 79px;
  height: 79px;
  background: linear-gradient(318.21deg, #11a8fd 14.05%, #0081c9 85.29%);
  box-shadow: 10px 15px 40px #000000, -10px -15px 40px #2f393d;
  border-radius: 50%;
}

.active .Rectangle81 {
  width: 80px;
  height: 80px;
  background: linear-gradient(320.66deg, #11a8fd 14.75%, #0081c9 84.81%);
  filter: blur(1px);
  border-radius: 50%;
}

.active .Rectangle82 {
  width: 75px;
  height: 75px;
  background: linear-gradient(320.66deg, #005ea3 14.75%, #11a8fd 84.81%);
  border: 1px solid #058dd9;
  box-sizing: border-box;
  border-radius: 100px;
}

.active .Rectangle83 {
  width: 75px;
  height: 75px;
  background: linear-gradient(320.66deg, #016bb8 14.75%, #11a8fd 84.81%);
  filter: blur(1px);
  border-radius: 100px;
}

.Rectangle79 {
  width: 79px;
  height: 79px;
  background: linear-gradient(318.21deg, #1d2328 14.05%, #131314 85.29%);
  box-shadow: 14px 14px 40px rgba(16, 16, 18, 0.75), -7px -7px 30px #262e32;
  border-radius: 100px;
}

.Rectangle81 {
  width: 80px;
  height: 80px;
  background: linear-gradient(318.21deg, #1d2328 14.05%, #131314 85.29%);
  border-radius: 1000px;
}

.Rectangle82 {
  width: 72px;
  height: 72px;

  background: linear-gradient(320.66deg, #2f353a 14.75%, #1c1f22 84.81%);
  box-shadow: inset 0px 0px 3px rgba(63, 63, 63, 0.45);
  border-radius: 50%;
}

.Rectangle83 {
  width: 72px;
  height: 72px;
  background: linear-gradient(320.66deg, #2f353a 14.75%, #1c1f22 84.81%);
  filter: blur(1px);
  border-radius: 50%;
}
</style>
