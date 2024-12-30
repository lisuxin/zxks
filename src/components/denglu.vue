<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
// 获取 router 实例
const router = useRouter();

// 定义响应式数据
const username = ref('');
const password = ref('');

// 处理登录逻辑
function handleLogin() {
  // 模拟登录成功后跳转到 /gonggo
  router.push('/gonggo');
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