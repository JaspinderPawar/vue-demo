<template>
    <div >
    {{message}}
    </div>
   
</template>
<script>
export default {
  name: 'home',
  data(){
    return{
       message: 'Home Page',
       } 
  },
  computed: {
    // a computed getter   
  },
  methods:{

  },
  mounted () {
    //
  }
}
</script>