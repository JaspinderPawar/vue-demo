<template>
  <div id="app" class="antialiased text-gray-900 flex flex-col min-h-screen">
  <Header/> 
 <router-view class="flex-1"></router-view>
  </div>
</template>
<script>

import Header from './components/Header.vue'
import './assets/css/tailwind.css'

export default {
  name: 'App',
  data(){
    return{
       open: false,
       } 
  },
  methods: {
  
  },
 components: {
   Header
  }
}
</script>


