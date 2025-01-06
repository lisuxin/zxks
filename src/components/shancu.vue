<script setup>
import { ref } from 'vue';
import api from '../api';

const id = ref("");

const deleteid = async() =>{
try{

  // const data = {
  //   id:id.value,
  // };

  const response = await api.getsancuid(id.value)
alert("成功");
}catch(error){
  alert("失败");
}
}
</script>

<template>
  <div>
    <el-input v-model="id" style="width: 240px" placeholder="Please input" />
    <el-button @click="deleteid" type="primary">删除</el-button>
  </div>
</template>

<style scoped>

</style>