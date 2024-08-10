<template>
  <header>
    <div class="left">CUSTOMERS</div>
    <nav>
      <router-link to="/search">SEARCH</router-link>
      <router-link to="/create">CREATE</router-link>
      <!-- <router-link to="/manage">MANAGE</router-link> -->
    </nav>
    <div class="right">
      <router-link to="/"><i class="fas fa-home"></i></router-link>
    </div>
  </header>
</template>

<script>
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 10px;
  color: black;
}

.left {
  flex: 1;
  text-align: left;
  font-size: 20px;
  font-weight: bold;
}

.right {
  flex: 1;
  text-align: right;
}

nav {
  flex: 2;
  display: flex;
  justify-content: center;
  padding: 10px;
}

nav a {
  color: black;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 5px;
  /* font-weight: bold; */
  /* border: 1px solid black; */
  /* margin: 0 5px; */
  display: flex;
  align-items: center;
  justify-content: center;
}

nav a.router-link-active {
  background-color: gray;
  color: black;
}

nav a:not(:last-child) {
  border-right: none;
}

.fas.fa-home {
  font-size: 15px;
  color: black;
}
</style>

<!-- <template>
  <header>
    <nav>
      <router-link to="/search" exact>Search</router-link>
      <router-link to="/create">Create</router-link>
      <router-link to="/manage">Manage</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
header {
  background-color: #333;
  padding: 10px;
}

nav {
  display: flex;
  justify-content: center;
}

a {
  color: white;
  text-decoration: none;
  padding: 10px 20px;
  border: 1px solid black;
  margin: 0 5px;
}

a.router-link-active {
  background-color: gray;
  border-radius: 4px;
}
</style> -->
