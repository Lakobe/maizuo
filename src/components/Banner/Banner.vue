<template>
  <div class="film-bannerimg">
    <van-swipe :autoplay="1500" indicator-color="#ffff">
      <van-swipe-item v-for="img in imgs" :key="img.bannerId">
        <img :src="img" alt />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  props: {
    imgs: Array
  }
}
</script>

<style lang="scss">
.film-bannerimg {
  width: 100%;
  img {
    width: 100%;
    height: 100%;
  }
}
.van-swipe__indicators {
  left: auto !important;
  right: 12px !important;
}
</style>
