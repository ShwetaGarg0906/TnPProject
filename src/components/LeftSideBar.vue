<template>
  <div id="left-bar">
    <div class="links" v-for="linkSB in LeftSideBarList" :key="linkSB.linkId">
      <a v-bind:href="linkSB.url">{{linkSB.title}}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "LeftSideBar",
  data: function() {
    return {
      //Object with key as the link id and Object with url and title
      LeftSideBarList: [
        {
          linkId: 1,
          title: "Last Year Placement Trend",
          url: "https://vuejs.org/v2/guide/list.html"
        },
        {
          linkId: 2,
          title: "Company Trend",
          url: "https://vuejs.org/v2/guide/list.html"
        },
        {
          linkId: 3,
          title: "Current Year Plaement Details",
          url: "https://vuejs.org/v2/guide/list.html"
        },
        {
          linkId: 4,
          title: "Company to be visiting soon",
          url: "https://vuejs.org/v2/guide/list.html"
        }
      ]
    };
  }
};
</script>

<style scoped>
.links {
  font-size: 13px;
  width: 90%;
  border-bottom: 1px solid gray;
  padding: 20px 5px;
  height: 20%;
}

.links a {
  text-decoration: none;
  color: lightslategray;
}
</style>
