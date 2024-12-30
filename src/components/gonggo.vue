<script>
export default {};
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">
        <el-menu :default-active="activeIndex" router>
          <el-menu-item index="/chaxun" :route="{ name: 'chaxun' }">
            <i class="el-icon-search"></i>
            <span>查询</span>
          </el-menu-item>
          <el-menu-item index="/gengxi" :route="{ name: 'gengxi' }">
            <i class="el-icon-edit"></i>
            <span>更新</span>
          </el-menu-item>
          <el-menu-item index="/shancu" :route="{ name: 'shancu' }">
            <i class="el-icon-delete"></i>
            <span>删除</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<style scoped>
</style>