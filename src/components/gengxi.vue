<script setup>
</script>

<template>
  <div class="container">
    <h2>Update Information</h2>
    <form action="/update" method="POST">
      <input type="hidden" name="id" value="1" />
      <!-- Replace with actual ID -->
      <input type="text" name="name" placeholder="Name" required />
      <input type="email" name="email" placeholder="Email" required />
      <button type="submit">Save Changes</button>
    </form>
  </div>
</template>

<style scoped>
body {
  font-family: Arial, sans-serif;
}
.container {
  width: 400px;
  margin: 100px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
input[type="text"],
input[type="email"] {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
}
button {
  width: 100%;
  padding: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
}
</style>
