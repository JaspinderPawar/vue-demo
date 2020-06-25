<template>
  <div class="px-3 py-4 flex justify-center">
    <table
      class="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5"
    >
      <thead class="text-gray-700">
        <tr
          class=" text-sm flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0"
        >
          <th class="p-3 text-left">First Name</th>
          <th class="p-3 text-left">Last Name</th>
          <th class="p-3 text-left">Email</th>
          <th class="p-3 text-left" width="110px">Actions</th>
        </tr>
      </thead>
      <tbody class="text-sm flex-1 sm:flex-none">
        <tr
          v-for="user in users.items"
          :key="user.id"
          class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0"
        >
          <td class="border-grey-light border hover:bg-gray-100 p-3">{{user.firstName }}</td>
          <td class="border-grey-light border hover:bg-gray-100 p-3">{{user.lastName }}</td>
          <td class="border-grey-light border hover:bg-gray-100 p-3">{{user.username }}</td>
          <td 
            class="border-grey-light border hover:bg-gray-100 p-3 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer"
          ><a @click="deleteUser(user.id)" class="text-danger">Delete</a></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Users",
  data() {
    return {
      message: "Users Page"
    };
  },
  computed: {
   
     ...mapState({
      users: state => state.users.all
    })
  },
  methods: {
      ...mapActions("users", {
      getAllUsers: "getAll",
      deleteUser: "delete"
    })
  },
  created() {
      this.getAllUsers();
  }
};
</script>


<style>
@media (min-width: 640px) {
  table {
    display: inline-table !important;
  }

  thead tr:not(:first-child) {
    display: none;
  }
}

td:not(:last-child) {
  border-bottom: 0;
}

th:not(:last-child) {
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
}
</style>