<template>
  <div class="item" :class="{active:active}">
    <div class="line"></div>
    <div class="cont">
      <svg v-show="!active" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M15.75 8.5C15.75 12.7802 12.2802 16.25 8 16.25C3.71978 16.25 0.25 12.7802 0.25 8.5C0.25 4.21978 3.71978 0.75 8 0.75C12.2802 0.75 15.75 4.21978 15.75 8.5ZM7.10356 12.6036L12.8536 6.85356C13.0488 6.65831 13.0488 6.34172 12.8536 6.14647L12.1465 5.43937C11.9512 5.24409 11.6346 5.24409 11.4393 5.43937L6.75 10.1287L4.56066 7.93934C4.36541 7.74409 4.04881 7.74409 3.85353 7.93934L3.14644 8.64644C2.95119 8.84169 2.95119 9.15828 3.14644 9.35353L6.39644 12.6035C6.59172 12.7988 6.90828 12.7988 7.10356 12.6036Z"
            fill="#697386"/>
      </svg>
      <svg v-show="active" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.5 0.75C4.21978 0.75 0.75 4.21978 0.75 8.5C0.75 12.7802 4.21978 16.25 8.5 16.25C12.7802 16.25 16.25 12.7802 16.25 8.5C16.25 4.21978 12.7802 0.75 8.5 0.75ZM11 8.5C11 9.8785 9.8785 11 8.5 11C7.1215 11 6 9.8785 6 8.5C6 7.1215 7.1215 6 8.5 6C9.8785 6 11 7.1215 11 8.5Z" fill="#4285F4"/>
      </svg>
      <span>{{ text }}</span></div>
  </div>
</template>

<script>
export default {
  name: "Step",
  props: ["active","text"]
}
</script>

<style scoped>
.item {
  width: 182px;
  height: 28px;
  margin-right: 4px;
}
.line {
  width: 182px;
  height: 4px;
  background: #697386;
  border-radius: 100px;
}
.active .line {
  background: #4285F4;
}
.item .cont {
  width: 182px;
  height: 28px;
  margin-top: 3px;
}
.item .cont > span {
  margin-left: 8px;
}
</style>