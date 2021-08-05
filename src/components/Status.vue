<template>
  <div class="container">
    <div class="text1">Status</div>
    <div class="list">
      <div class="item">
        <svg
          width="9"
          height="15"
          viewBox="0 0 9 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 4.22222L1 12.7778C1 13.4528 1.52233 14 2.16667 14L6.83333 14C7.47767 14 8 13.4528 8 12.7778L8 4.22222C8 3.54721 7.47767 3 6.83333 3L2.16667 3C1.52233 3 1 3.54721 1 4.22222Z"
            fill="#7F8489"
            stroke="#7F8489"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6 1L3 1"
            stroke="#7F8489"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <div>
          <div class="text grey">Battery</div>
          <div class="text white">54%</div>
        </div>
      </div>
      <div class="item">
        <svg
          width="13"
          height="13"
          viewBox="0 0 13 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.71081 6.78297C0.799876 6.55523 0.676676 5.31105 1.52526 4.90909L11.4695 0.198641C12.3187 -0.2036 13.2036 0.681291 12.8014 1.53047L8.09091 11.4747C7.68895 12.3233 6.44477 12.2001 6.21703 11.2892L5.46131 8.2663C5.37174 7.90801 5.09199 7.62826 4.7337 7.53869L1.71081 6.78297Z"
            fill="#7F8489"
          />
        </svg>
        <div>
          <div class="text grey">Range</div>
          <div class="text white">297 km</div>
        </div>
      </div>
      <div class="item">
        <svg
          width="7"
          height="14"
          viewBox="0 0 7 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3.5 0C2.67157 0 2 0.671573 2 1.5V7.33682C0.817526 7.89855 0 9.1038 0 10.5C0 12.433 1.567 14 3.5 14C5.433 14 7 12.433 7 10.5C7 9.1038 6.18247 7.89855 5 7.33682V1.5C5 0.671573 4.32843 0 3.5 0Z"
            fill="#7F8489"
          />
        </svg>
        <div>
          <div class="text grey">Temperture</div>
          <div class="text white">27 C</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Status",
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 399px;
  height: 106px;
}

.list {
  display: flex;
}

.item {
  display: flex;
  width: auto;
  height: 52px;
  margin-right: 40px;
}

.item > div {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 7px;
}

.item svg {
  margin-top: 3px;
}

.text {
  font-size: 18px;
  filter: drop-shadow(0 4px 4px rgba(0, 0, 0, 0.25));
}

.text1 {
  font-size: 24px;
  filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.25));
}

.white {
  color: #ffffff;
}

.grey {
  color: #7f8489;
}
</style>
