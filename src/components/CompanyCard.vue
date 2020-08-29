<template>
  <div v-if="company!=null&&company!=undefined" id="company-card">
    {{company.CompanyId}}
    <h3>{{company.companyName}}</h3>
    <hr>
    <div>
      <p>{{Description}}</p>
    </div>
  </div>
</template>

<script>
import ExtraFunctions from "../Store/ExtraFunctions.js";
import CompanyStore from "../Store/CompanyStore";

export default {
  name: "CompanyCard",
  components: {},
  data: function() {
    return {
      path: "/company-details/1"
    };
  },
  props: {
    companyId: Number
    //company: Object,
  },
  computed: {
    Description() {
      return ExtraFunctions.methods.sliceText(this.company.description, 100);
    },
    company() {
      return CompanyStore.methods.getCompany(this.companyId);
    }
  }
};
</script>

<style scoped>
#company-card {
  text-align: center;
}
</style>
