<template>
  <div id="app">
    <student-dash-board></student-dash-board>
  </div>
</template>

<script>
//import CompanyComponent from "./components/CompanyComponent";
import StudentDashBoardVue from "./components/StudentDashBoard.vue";

export default {
  name: "App",
  components: {
    "student-dash-board": StudentDashBoardVue
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
  position: relative;
}
</style>
