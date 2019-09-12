<template>
  <div class="page-home">
    <Banner :imgs="bannerListImgs" />
    <van-tabs v-model="active">
      <van-tab title="正在热映">
        <FilmList :films="filmlist" />
      </van-tab>
      <van-tab title="即将上映">内容 2</van-tab>
    </van-tabs>
  </div>
</template>

<script>
import Banner from '../../components/Banner/Banner'
import FilmList from '../../components/FilmList/index'
import { mapActions, mapGetters, mapState } from 'vuex'
export default {
  components: {
    Banner,
    FilmList
  },
  data() {
    return {
      active: 0
    }
  },
  computed: {
    ...mapState('film', ['filmlist']),
    ...mapGetters('film', ['bannerListImgs'])
  },
  methods: {
    ...mapActions('film', ['getBannerList', 'getFilmList'])
  },
  created() {
    // this.getBannerList() //官网轮播图关闭暂不调用
    this.getFilmList()
  }
}
</script>

<style lang="scss" scoped>
</style>
