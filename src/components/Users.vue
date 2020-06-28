<template>
<div class="container mx-auto px-6 p-10">
<t-table
  :headers="['firstName', 'lastName', 'username', 'delete']"
  :data="users.items"
> 
 <template v-slot:row="props">
    <tr :class="[props.trClass, props.rowIndex % 2 === 0 ? 'bg-gray-100' : '']">
      <td :class="props.tdClass">{{ props.row.firstName }}</td>
      <td :class="props.tdClass">{{ props.row.lastName }}</td>
      <td :class="props.tdClass">{{ props.row.username }}</td>
      <td :class="props.tdClass">
       <a class=" text-red-400 hover:text-red-600 hover:text-red-700 cursor-pointer" @click="deleteUser( props.row.id)" >Delete</a>
    </td>
    </tr>
  </template>
</t-table>
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
th{
  text-align: left;
}
</style>