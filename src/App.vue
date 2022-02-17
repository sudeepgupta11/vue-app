<template>
  <router-view />
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  <!-- <div class="bg-red-500">Hi</div> -->
  <!-- <UserList /> -->
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
// import UserList from "./components/Users.vue";
import "./assets/tailwind.css";
export default {
  name: "App",
  // components: {
  //   HelloWorld,
  //   UserList,
  // },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  background: #f9f9f9;
}
</style>
