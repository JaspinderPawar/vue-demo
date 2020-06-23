<template>
<div
  class="h-screen font-sans login bg-cover"
  :style="{backgroundImage:'url(https://www.gstatic.com/webp/gallery/3.jpg)'}"
>
  <div class="container mx-auto h-full flex flex-1 justify-center items-center">
    <div class="w-full max-w-lg">
      <div class="leading-loose">
        <ValidationObserver v-slot="{ passes }">
          <form
            @submit.prevent="passes(handleSubmit)"
            class="max-w-xl m-4 p-10 bg-white rounded shadow-xl"
          >
            <p class="text-gray-800 font-medium text-center text-lg font-bold">Login</p>
            <TextInput rules="required" v-model="username" label="User Name" />
            <TextInput type="password" rules="required" v-model="password" label="Password" />
            <div class="mt-4 items-center justify-between">
              <button
                class="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded"
                type="submit"
              >Login</button>
              <!-- <a
                class="inline-block right-0 align-baseline font-bold text-sm text-500 hover:text-blue-800"
                href="#"
              >Forgot Password?</a>-->
            </div>
            <router-link
              to="/register"
              class="inline-block right-0 align-baseline font-bold text-sm text-500 hover:text-blue-800"
            >Not registered ?</router-link>
          </form>
        </ValidationObserver>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import {  mapActions } from "vuex";
import TextInput from "./TextInput";

export default {
  components: {
    TextInput
  },
  data() {
    return {
      username: "",
      password: ""
    };
  },
  computed: {},
  mounted() {},
  created() {
    // reset login status
    this.logout();
  },
  methods: {
    ...mapActions("account", ["login", "logout"]),
    handleSubmit() {
      const { username, password } = this;
      if (username && password) {
        this.login({ username, password });
      }
    }
  }
};
</script>

 <style>
.login {
  background: url("/images/login-new.jpeg");
}
</style>  