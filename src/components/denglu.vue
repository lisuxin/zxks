<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import api from "../api";

const router = useRouter();

const username = ref('');
const password = ref('');

const handleLogin = async () => {
  try {
    const response = await api.getddengluid({ username: username.value, password: password.value });
    if (response.data === 2) {
      router.push('/gonggo');
    }else if(response.data === 1){
      alert('密码错误');
    }else if(response.data === 0){
      alert('用户名错误');
    }
  } catch (error) {
    alert('登录过程中发生错误，请稍后再试');
  }
}
</script>

<template>
  <div class="container">
    <h2>Login</h2>
    <form @submit.prevent="handleLogin"> <!-- 使用 @submit.prevent 阻止表单默认提交行为 -->
      <input type="text" v-model="username" placeholder="Username" required />
      <input type="password" v-model="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<style scoped>
body {
  font-family: Arial, sans-serif;
}

.container {
  width: 300px;
  margin: 100px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
input[type="text"],
input[type="password"] {
  width: 90%;
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