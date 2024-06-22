<template>
    <div class="UserManagement">
      <h1>User Create</h1>
      <form @submit.prevent="createUser">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="createData.name" required>
  
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="createData.email" required>
  
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="createData.password" required>
        
        <button type="submit">Create</button>
      </form>
  
      <h1>User Search</h1>
      <form @submit.prevent="readFiltered">
        <label for="searchName">Name:</label>
        <input type="text" id="searchName" v-model="searchData.name">
  
        <label for="searchEmail">Email:</label>
        <input type="email" id="searchEmail" v-model="searchData.email">
        
        <button type="submit">Search Filtered</button>
      </form>
      <button @click="readAll">Read All Users</button>
      
      <h1>User List</h1>
      <ul>
        <li v-for="(user, index) in users" :key="index">
          <form @submit.prevent>
              <label for="updateName">Name:</label>
              <input type="text" id="updateName" v-model="user.name" required>
  
              <label for="updateEmail">Email:</label>
              <input type="email" id="updateEmail" v-model="user.email" required>
              
              <button @click.prevent="updateUser(user)">Update</button>
              <button @click.prevent="deleteUser(user.id)">Delete</button>
          </form>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        users: [],
        createData: {
          name: '',
          email: '',
          password: ''
        },
        searchData: {
          name: '',
          email: ''
        }
      };
    },
    methods: {
      async createUser() {
        try {
            const response = await this.$axios.post('/users/create', this.createData);
            console.log('Response:', response.data);
            this.users.push(response.data);
        } catch (error) {
            console.error('Error:', error);
        }
      },
      async readAll() {
        try {
            const response = await this.$axios.get('/users/readAll');
            this.users = response.data;
        } catch (error) {
            console.error('Error:', error);
        }
      },
      async readFiltered() {
        try {
            const response = await this.$axios.post('/users/readFiltered', this.searchData);
            this.users = response.data;
        } catch (error) {
            console.error('Error:', error);
        }
      },
      async updateUser(user) {
        try {
            const response = await this.$axios.put('/users/update', user);
            console.log('Response:', response.data);
        } catch (error) {
            console.error('Error:', error);
        }
      },
      async deleteUser(id) {
        try {
          const response = await this.$axios.delete(`/users/delete/${id}`);
          console.log('Response:', response.data);
          // Remove the deleted user from the users[] array
          this.users = this.users.filter(user => user.id !== id);
        } catch (error) {
          console.error('Error:', error);
        }
      }
    },
    mounted() {
      this.readAll();
    }
  };
  </script>