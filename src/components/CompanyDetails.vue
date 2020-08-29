<template>
<div>
  <div id="CompanyDetails" >
    <h2>{{companydetails.companyName}}</h2>
    <hr>
    <img v-bind:src="companydetails.imageUrl" v:bind:alt="companydetails.CompanyName">
    <p>{{companydetails.description}}</p>
    <br>    
    <bar-graph v-bind:companyId="CompanyId"></bar-graph>
  </div>  
  <div id="CompanyNavs">
    <right-nav-bar v-bind:CompanyId="CompanyId"></right-nav-bar>
  </div>
  </div>
</template>

<script>
import CompanyStore from "../Store/CompanyStore";
import BarGraph from './BarGraph';
import RightNavBar from "./RightNavBar.vue";
export default {
  name: "CompanyDetails",
  components: {
    'bar-graph':BarGraph,
    "right-nav-bar": RightNavBar
  },
  props: {
    companyId: String
  },
  data() {
    return {
      //CompanyId: this.$route.params.CompanyId
    };
  },
  computed: {
    CompanyId: function() {
      console.log("computed value is " + this.companyId);
      console.log("computed value is " + parseInt(this.companyId, 10));
      return parseInt(this.companyId, 10);
    },
    companydetails: function() {
      console.log(this.CompanyId);
      console.log(CompanyStore.methods.getCompany(this.CompanyId));
      return CompanyStore.methods.getCompany(this.CompanyId);
    }
  }
};
</script>

<style scoped>
#CompanyDetails {
  background-color: floralwhite;
  padding: 20px;
  width: 75%;
  float:left;
  display:inline-block;
}
img {
  margin: 2% 0%;
  width: 100%;
  height: 350px;
}
#CompanyNavs{
  background-color:#fff5ee;
  float:left;
  display:inline-block;
  width:18%;
  margin:1%;
  height:100%;
}

</style>
