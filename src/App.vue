<template>
  <div id="app" >
    <Header v-if="status.loggedIn" />  
    <div >
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
