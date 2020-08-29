<template>
  <div id="app">
    <top-nav-bar id="top-bar" v-on:searchEvent="search($event)"></top-nav-bar>
    <left-side-bar id="left-bar"></left-side-bar>
    <router-view class="CompanyDiv"></router-view>
    <!-- <company id="CompanyDiv" v-bind:searchString="searchString"></company> -->    
  </div>
</template>

<script>
import CompanyComponent from "./CompanyComponent";
import LeftSideBar from "./LeftSideBar.vue";
import TopNavBar from "./TopNavBar.vue";
import RightNavBar from "./RightNavBar.vue";

export default {
  name: "App",
  components: {
    company: CompanyComponent,
    "left-side-bar": LeftSideBar,
    "top-nav-bar": TopNavBar,
    "right-nav-bar": RightNavBar
  },
  data: function() {
    return {
      searchString: ""
    };
  },
  methods: {
    search(searchString) {
      console.log(searchString);
      this.searchString = searchString;
    }
  }
};
</script>

<style scoped>
.CompanyDiv {
  margin: 2%;
  left: 25%;
  width: 75%;
  display: block;
  float: left;
  box-shadow: (5px 5px 5px gray);
  border: #2c3e50;
  background-color: goldenrod;  
}

#left-bar {
  margin: 2%;
  width: 15%;
  left: 0;
  display: block;
  padding: 10px;
  background-color: aliceblue;
  float: left;
  
}

#right-bar {
  margin: 2% 0% 0% 2%;
  width: 15%;
  left: 0;
  display: block;
  padding: 10px;
  background-color: aliceblue;
  float: left;
}

#top-bar {
  padding-top: 25px;
  height: 50px;
  background-color: teal;
  padding-left: 10px;
  text-align: left;
  margin: 2%;
}
</style>
