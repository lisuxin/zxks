<script setup>
</script>

<template>
  <div>
    <h2>Select and Delete Records</h2>
    <form action="/delete" method="POST">
      <table>
        <thead>
          <tr>
            <th>Select</th>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <!-- Example data rows -->
          <tr>
            <td><input type="checkbox" name="selectedIds" value="1" /></td>
            <td>1</td>
            <td>John Doe</td>
            <td>john@example.com</td>
          </tr>
          <tr>
            <td><input type="checkbox" name="selectedIds" value="2" /></td>
            <td>2</td>
            <td>Jane Smith</td>
            <td>jane@example.com</td>
          </tr>
          <!-- Add more rows as needed -->
        </tbody>
      </table>
      <button type="submit">Delete Selected</button>
    </form>
  </div>
</template>

<style scoped>
body {
  font-family: Arial, sans-serif;
}
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}
th,
td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}
th {
  background-color: #f2f2f2;
}
input[type="checkbox"] {
  margin-right: 10px;
}
</style>
