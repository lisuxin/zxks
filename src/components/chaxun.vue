<script setup>
import { onMounted, ref } from "vue";
import api from "../api";

const tableData = ref([]);

onMounted(() => {
  fetchData();
});

const fetchData = async () => {
  
  try {
    const response = await api.getselect();
    tableData.value = response.data;
    console.log(tableData.value);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
</script>

<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="id" label="id" width="180" />
      <el-table-column prop="firstName" label="firstName" width="180" />
      <el-table-column prop="lastName" label="lastName" width="180" />
      <el-table-column prop="dateOfBirth" label="dateOfBirth" width="180" />
      <el-table-column prop="gender" label="gender" width="180" />
      <el-table-column prop="email" label="email" width="180" />
      <el-table-column prop="phoneNumber" label="phoneNumber" width="180" />
      <el-table-column prop="city" label="city" width="180" />
      <el-table-column prop="postalCode" label="postalCode" width="180" />
      <el-table-column prop="country" label="country" width="180" />
      <el-table-column prop="createdAt" label="createdAt" width="180" />
      <el-table-column prop="updatedAt" label="updatedAt" width="180" />
      <el-table-column prop="encryptedPassword" label="encryptedPassword" width="180" />
      <el-table-column prop="ssnHash" label="ssnHash" width="180" />
      <el-table-column prop="emergencyContactName" label="emergencyContactName" width="180" />
      <el-table-column prop="emergencyContactPhone" label="emergencyContactPhone" width="180" />
      <el-table-column prop="address" label="address" width="180" />
      <el-table-column prop="profilePicture" label="profilePicture" />
    </el-table>
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
</style>
