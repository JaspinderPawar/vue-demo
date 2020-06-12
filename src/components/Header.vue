<template>
<div>
  <b-navbar toggleable="lg" type="dark" variant="info">
   

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item >  <router-link to="/">Home</router-link></b-nav-item>
   
        <b-nav-item> <router-link to="/about/13">About</router-link></b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
        <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
     

      

        <b-navbar-nav>
         <login></login>
      </b-navbar-nav>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
import Login from './Login.vue'

export default {
  name: 'Header',
  components: {
    Login
  }
}
</script>

<style>
a {
  color: #FFFFFF;
}
</style>