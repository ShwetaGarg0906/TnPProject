<template>
  <div id="CompanyDiv">
    <div>
      <h3 > Companies </h3>          
    <router-link :to="{name:'CompanyDetails', 
      params:{companyId:company.companyId}}"
      v-for="company in CompanyList" :key="company.companyId"
    >
      <company-card v-bind="company" class="company-card"></company-card>
    </router-link>
    </div>       
  </div>
</template>

<script>
import CompanyCard from "./CompanyCard";
import CompanyStore from "../Store/CompanyStore.js";


export default {
  name: "CompanyComponent",
  components: {
    "company-card": CompanyCard,
    
  },
  data: function() {
    return {
      companyList: CompanyStore.data.CompanyList,
      CompanyId: 0
    };
  },
  props: {
    searchString: String
  },
  computed: {
    CompanyList: function() {
      console.log(this.searchString);
      if (this.searchString === undefined || this.searchString === "") {
        return this.companyList;
      } else {
        return this.searchCompanyList(this.searchString);
      }
    }
  },
  methods: {
    searchCompanyList(keyword) {
      //var key = keyword.toLowerCase();
      console.log(keyword);
      return this.companyList.filter(company => {
        return (
          company.description.toLowerCase().includes(keyword.toLowerCase()) ||
          company.companyName.toLowerCase().includes(keyword.toLowerCase())
        );
      });
    },
  }
};
</script>

<style scoped>
.company-card {
  box-shadow: 10px 10px 10px gray;
  background-color: whitesmoke;
  color: darkslategrey;
  width: 25%;
  height: 200px;
  padding: 20px;
  border-radius: 5px;
  overflow: hidden;
  margin: 20px 10px;
  display: block;
  float: left;
}

#CompanyDiv {
  padding-left: 10%;
}
</style>
