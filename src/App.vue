<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <UserManagement></UserManagement>

</template>

<script>
import UserManagement from './components/UserManagement.vue'
export default {
  name: 'App',
  components: {
    UserManagement
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
