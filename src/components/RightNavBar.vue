<template>
  <div id="right-bar">
   <router-link class="links" v-for="link in Links" :key="link.linkId" :to="{path:link.linkTo, params:{companyId}}">
      <span>{{link.name}}</span>
      <hr>
   </router-link>
  </div> 
</template>
<script>
import RightSBLinks from '../Store/RightSBLinks.js';

export default {  
  name: "RightSideBar",
  created(){
    console.log(RightSBLinks.data.Links);
  },
  data: function() {
    return{
      Links:RightSBLinks.data.Links
    };
  },
  props:{
    CompanyId:Number
  }
};
</script>

<style scoped>
.links {
  font-size: 15px;
  width: 90%;
  padding: 20px 5px;
  height: 20%;
  margin :10px;  
}

.links {
  text-decoration: none;
  color: lightslategray;
}

span{
  margin-bottom:20px;
}
</style>
