<script setup>
import { ref } from 'vue';
import api from '../api/index.js'; // 导入 API 模块
import { useRouter } from 'vue-router'; // 导入 Vue Router

const username = ref('');
const password = ref('');

const router = useRouter();

// 登录处理函数
const handleLogin = async () => {

  try {
    const requestBody = {
      firstName: username.value,
      encryptedPassword: password.value
    };

    // 发送 POST 请求
    const response = await api.getdengluid(requestBody);
    // 根据后端返回的状态码进行处理
    switch (response.data) {
      case 2:
        // 登录成功，跳转到主页或其他页面
        router.push('/gonggo'); // 替换为实际的目标路由
        break;
      case 1:
        // 密码错误
        alert('登录失败密码错误');
        break;
      case 0:
        // 用户名不存在
        alert('登录失败用户名不存在');
        break;
      default:
        // 其他错误
        alert('登录失败');
    }
  } catch (error) {
    alert('登录失败');
  }
};
</script>

<template>
  <div class="container">
    <h2>Login</h2>
    <form @submit.prevent="handleLogin">
      <!-- 使用 @submit.prevent 阻止表单默认提交行为 -->
      <input type="text" v-model="username" placeholder="Username" required />
      <input
        type="password"
        v-model="password"
        placeholder="Password"
        required
      />
      <button type="submit">Login
      </button>
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
.error-message {
  color: red;
  margin-top: 10px;
}
</style>