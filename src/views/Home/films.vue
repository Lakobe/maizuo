<template>
  <div class="page-home">
    <Banner :imgs="bannerListImgs" />
    <van-tabs
      v-model="active"
      sticky
      color="#ff5f16"
      title-active-color="#ff5f16"
      title-inactive-color="#333333"
      line-width="55"
      line-height="2px"
    >
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
    this.getBannerList() //官网轮播图关闭暂不调用
    this.getFilmList()
  }
}
</script>

<style lang="scss" scoped>
</style>
