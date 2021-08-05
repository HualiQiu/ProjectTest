<template>
  <div id="app">
    <el-container>
      <el-header height="52">
        <Header></Header>
      </el-header>
      <el-container>
        <el-aside width="248px">
          <Menu></Menu>
        </el-aside>
        <el-main>
          <div class="content">
            <div class="cont1">
              <Tip></Tip>
              <Robotic style="margin-top: 17px"></Robotic>
            </div>
            <div class="cont2">
              <Step1 v-show="stepActive === 0"></Step1>
              <Step2 v-show="stepActive === 1"></Step2>
              <Step3 v-show="stepActive === 2"></Step3>
              <Step4 v-show="stepActive === 3"></Step4>
            </div>
          </div>
          <div class="footer">
            <div class="text">路径规划名：</div>
            <div class="step">
              <Step :active="stepActive == 0" text="基本设置"></Step>
              <Step :active="stepActive == 1" text="抓取路径规划"></Step>
              <Step :active="stepActive == 2" text="放置路径规划"></Step>
              <Step :active="stepActive == 3" text="结束规划"></Step>
            </div>
            <div class="btnGroup">
              <button class="btn" :disabled="stepActive==0" @click="stepActive--"><i class="el-icon-arrow-left"></i>上一步
              </button>
              <button class="btn" :disabled="stepActive==3" @click="stepActive++">下一步<i class="el-icon-arrow-right"></i>
              </button>
            </div>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Header from "./components/Header";
import Menu from "./components/Menu";
import Tip from "./components/Tip";
import Robotic from "./components/Robotic";
import Step from "./components/Step";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";
export default {
  name: "App",
  data() {
    return {
      stepActive: 3,
    }
  },
  components: {
    Header,
    Menu,
    Tip,
    Robotic,
    Step,
    Step1,
    Step2,
    Step3,
    Step4
  },
};
</script>

<style>
body {
  margin: 0;
}

#app {
  width: 1440px;
  height: 750px;
  margin: 0 auto;
  background: #fafcff;
  font-size: 16px;
  filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.25));
}

.el-header,
.el-footer {
  height: 52px;
  line-height: 52px;
  padding: 0;
}

.el-aside {
  height: 713px;
}

.el-main {
  padding: 0;
  background: #fafcff;
}
body > .el-container {
  filter: drop-shadow(0 0 6px rgba(0, 0, 0, 0.25));
}

.content {
  display: flex;
  height: 610px;
  padding: 17px 34px 15px 15px;
  box-sizing: border-box;
}

.cont1 {
  width: 677px;
}

.cont2 {
  width: 450px;
  height: 610px;
  margin-left: 14px;
  background: #fff;
  filter: drop-shadow(0 0 6px rgba(0, 0, 0, 0.25));
}

.footer {
  width: 1192px;
  height: 73px;
  margin-top: 30px;
  background: #fff;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}

.footer .text {
  padding: 10px 25px;
}

.footer > div {
  float: left;
}

.footer .step {
  display: flex;
  height: 100%;
  align-items: center;
}

.footer .btnGroup {
  display: flex;
  float: right;
  margin-right: 34px;
  width: 230px;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}

.footer .btnGroup .btn {
  width: 100px;
  height: 36px;
  border: none;
  background: #FFFFFF;
  color: #4285F4;
  border-radius: 4px;
  filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.25));
}

.footer .btnGroup .btn:disabled {
  background-color: #979797;
  color: #FFFFFF;
}
</style>
