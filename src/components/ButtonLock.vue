<template>
  <div class="btn">
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
  name: "ButtonLock",
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
  width: 128px;
  height: 128px;
}
.Rectangle79 {
  width: 126px;
  height: 126px;
  background: linear-gradient(318.21deg, #11a8fd 14.05%, #0081c9 85.29%);
  box-shadow: 10px 15px 40px #000000, -10px -15px 40px #2f393d;
  border-radius: 100px;
}

.Rectangle81 {
  width: 128px;
  height: 128px;
  background: linear-gradient(320.66deg, #11a8fd 14.75%, #0081c9 84.81%);
  filter: blur(1px);
  border-radius: 100px;
}

.Rectangle82 {
  width: 120px;
  height: 120px;
  background: linear-gradient(320.66deg, #005ea3 14.75%, #11a8fd 84.81%);
  border: 1px solid #058dd9;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 100px;
}

.Rectangle83 {
  width: 120px;
  height: 120px;
  background: linear-gradient(320.66deg, #005ea3 14.75%, #11a8fd 84.81%);
  border-radius: 100px;
}
</style>
