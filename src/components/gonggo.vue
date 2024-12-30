<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

// 定义响应式数据
const username = ref('');
const password = ref('');

// 获取路由实例
const router = useRouter();

// 定义处理登录的方法
const handleLogin = async () => {
  try {
    // 模拟API请求
    // 在实际应用中，你应该使用 axios 或 fetch 发送请求到后端 API
    // 例如：
    // const response = await axios.post('/api/login', { username: username.value, password: password.value });
    // if (response.data.success) {
    //   // 登录成功后的处理
    // }

    // 模拟登录成功
    // 登录成功后跳转到 "longgo" 页面
    router.push({ name: 'Gonggo' });
  } catch (err) {
    // 处理登录失败的情况
    router.push({ name: 'Gonggo' });
  }
};
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