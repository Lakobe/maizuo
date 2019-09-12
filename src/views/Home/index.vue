<template>
  <div class="page-index">
    <van-tabbar v-model="active" route>
      <van-tabbar-item name="home" icon="wap-home" to="/films">电影</van-tabbar-item>
      <van-tabbar-item name="search" icon="video-o" to="/cinemas">影院</van-tabbar-item>
      <van-tabbar-item name="friends" icon="like" to="/brand">分类</van-tabbar-item>
      <van-tabbar-item name="setting" icon="friends-o" to="/center">我的</van-tabbar-item>
    </van-tabbar>

    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 'home'
    }
  }
}
</script>

<style lang="scss">
.page-index {
  margin-bottom: 50px;
}
.van-tabbar-item--active {
  color: #ff5f16;
}
</style>>
