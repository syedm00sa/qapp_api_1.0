<template>
  <div>
    <nav>
      <router-link to="/search">Search</router-link>
      <router-link to="/create">Create</router-link>
      <router-link to="/manage">Manage</router-link>
    </nav>
    <h1>Customer Page</h1>
    <p>Details for customer with ID: {{ $route.params.id }}</p>
  </div>
</template>
