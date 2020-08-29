<template>
  <div id="company-card">Home Page</div>
</template>

<script>
import ExtraFunctions from "../Store/ExtraFunctions.js";
export default {
  name: "Home",
  components: {},
  props: {
    company: Object
  },
  computed: {
    Description() {
      return ExtraFunctions.methods.sliceText(this.company.description, 100);
    }
  }
};
</script>

<style scoped>
#company-card {
  text-align: center;
}
</style>
