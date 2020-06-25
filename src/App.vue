<template>
  <div id="app" class="antialiased text-gray-900 flex flex-col min-h-screen">
    <Header v-if="status.loggedIn" />  
    <div class="dashboardStyle">
       <router-view class="flex-1"></router-view>
      </div> 
   
  </div>
</template>
<script>

import Header from "./components/Header.vue";
import '@/assets/css/tailwind.css';
import { mapState } from "vuex";

export default {
  name: "app",
  components: {
    Header
  },
  computed: {
     ...mapState("account", ["status"])
  }, 
};
</script>
<style scoped>
.dashboardStyle{
background: #F3F4F5;
}

</style>


