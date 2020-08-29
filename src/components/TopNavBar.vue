<template>
  <div id="top-bar">
    <router-link :to="{name:'Companies',params:{searchString:''}}">{{ProjectTitle}}</router-link>
    <button id="sort" v-on:click="SortData">Sort</button>
    <div id="search-bar">    
        <input
          type="text"
          placeholder="search company..."
          v-model="searchString"
          v-on:keyup.enter="search()"
        >
        <router-link :to="{name:'Companies',params:{searchString}}" class="btn"> s  
        </router-link>    
    </div>
  </div>
</template>

<script>
export default {
  name: "LeftSideBar",
  data: function() {
    return {
      ProjectTitle: "Training & Placmenet Cell",
      searchString: ""
    };
  },
  methods: {
    SortData() {
      console.log("function will be used for company sorting!");
    },
    // search() {
    //   console.log("text to search is " + this.searchString);
    //   this.$emit("searchEvent", this.searchString);
    // }
  }
};
</script>

<style scoped>

#search-bar {
  width: 15%;
  display: block;
  float: right;
  height: 40px;
  background-color:#191970;
}
input {
  
  height: 90%;
  border: 1px solid white;
  width: 75%;  
  float:right;
}
#sort {
  width: 5%;
  display: block;
  float: right;
  height: 30px;
  margin: 0px 10px;
}
.btn{
  text-align:center;
  float :right;
  width:21%;
  height: 90%;
  color:white;
  text-decoration:none;
}
</style>
