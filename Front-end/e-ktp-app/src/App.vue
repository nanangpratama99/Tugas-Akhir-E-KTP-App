<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
.input-field::-webkit-inner-spin-button,
.input-field::-webkit-outer-spin-button {
  display: none;
}

thead {
  background: #4B56D2;
  color: whitesmoke;
}

th {
  font-weight: 500;
}
</style>
