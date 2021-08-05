<template>
  <div class="point">
    <div>
      <input type="radio" name="pointGroup">
      <span>中途点{{ number }}:</span>
      <span class="pList">
  {{ point.toString() }}
    </span>
    </div>
    <svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
          d="M12.0625 1.625H8.78125L8.50781 1.13281C8.39844 0.914062 8.17969 0.75 7.93359 0.75H4.78906C4.54297 0.75 4.32422 0.914062 4.21484 1.13281L3.96875 1.625H0.6875C0.441406 1.625 0.25 1.84375 0.25 2.0625V2.9375C0.25 3.18359 0.441406 3.375 0.6875 3.375H12.0625C12.2812 3.375 12.5 3.18359 12.5 2.9375V2.0625C12.5 1.84375 12.2812 1.625 12.0625 1.625ZM1.69922 13.5195C1.72656 14.2305 2.30078 14.75 3.01172 14.75H9.71094C10.4219 14.75 10.9961 14.2305 11.0234 13.5195L11.625 4.25H1.125L1.69922 13.5195Z"
          fill="#2157A9"/>
    </svg>
  </div>
</template>

<script>
export default {
  name: "Point",
  props: ["point", "number"]
}
</script>

<style scoped>
.point {
  display: flex;
  justify-content: space-between;
  width: 360px;
  height: 20px;
  line-height: 20px;
  margin: 0 auto;
  font-size: 12px;
}

.pList {
  color: #979797
}
</style>