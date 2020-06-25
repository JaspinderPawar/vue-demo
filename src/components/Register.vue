<template>
<div class="h-screen font-sans login bg-cover" :style="{backgroundImage:'url(https://www.gstatic.com/webp/gallery/3.jpg)'}">
    <div class="container mx-auto h-full flex flex-1 justify-center items-center" >
    <div class="w-full max-w-lg">
        <div class="leading-loose">
   
    <ValidationObserver v-slot="{ passes }">
      <form @submit.prevent="passes(handleSubmit)" class="max-w-xl m-4 p-10 bg-white rounded shadow-xl">
         <p class="text-gray-800 font-medium">Register</p>
        <TextInput rules="required"  v-model="user.firstName" label="First Name"/>
        <TextInput rules="required" v-model="user.lastName"  label="Last Name"/>
        <TextInput rules="required|email" v-model="user.username" label="Email Address" name="email"/>
        <TextInput rules="required|min:6|confirmed:pass"  v-model="user.password" label="Password" type="password"/>
        <TextInput rules="required" vid="pass"  label="Password Confirmation" type="password"/>

       <div class="mt-4">
                    <button class="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded" type="submit">Register</button>
                </div>
                 <router-link to="/login" class="inline-block right-0 align-baseline font-bold text-sm text-500 hover:text-blue-800">  Already have an account ?</router-link>
              
      </form>
    </ValidationObserver>
  </div>
   </div>
    </div>
</div>
</template>

<script>
import TextInput from "./TextInput";
import { mapState, mapActions } from 'vuex'



export default {
    components: {
    TextInput,
  },
    data () {
        return {
            user: {
                firstName: '',
                lastName: '',
                username: '',
                password: ''
            },
            submitted: false
        }
    },
    computed: {
        ...mapState('account', ['status'])
    },
    methods: {
        ...mapActions('account', ['register']),
        handleSubmit() {
            this.submitted = true;
            this.register(this.user);
        }
    }
};
</script>