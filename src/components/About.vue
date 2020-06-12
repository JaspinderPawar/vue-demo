<template>
    <div >
      {{message}}
     
    </div>
</template>
<script>
export default {
  name: 'about',
  data(){
    return{message:"About page with props"}
  },
  props:['id'],
  mounted () {
  }
}
</script>