<script setup>
</script>

<template>
  <div>
    <el-input
      v-model="inputId"
      style="width: 240px"
      placeholder="请输入要删除的ID"
      @keyup.enter="handleDelete"
    />
    <el-button type="primary" :disabled="isDeleting" @click="handleDelete">
      {{ isDeleting ? "正在删除..." : "删除" }}
    </el-button>

    <!-- 显示删除成功或失败的消息 -->
    <p v-if="message" class="message">{{ message }}</p>
  </div>
</template>

<style scoped>
.message {
  margin-top: 10px;
  color: green;
}

.message.error {
  color: red;
}
</style>