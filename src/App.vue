<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
body {
  margin: 0;
}

#app {
  width: 494px;
  height: 1074px;
  background: linear-gradient(180deg, #353a40 0%, #32363c 10.3%, #16171b 100%);
  color: #fff;
}

.active svg path {
  fill: #ffffff;
  stroke: #ffffff;
}
</style>
