<template>
  <van-list :finished="finished" v-model="loading" @load="loadFilmList">
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
  </van-list>
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
      active: 0,
      finished: false, // 是否还有更多数据
      loading: false, // 是否正在请求数据
      pageNum: 0, //当前的页码
      pageSize: 10 //每页显示的条数
    }
  },
  computed: {
    ...mapState('film', ['filmlist', 'total']),
    ...mapGetters('film', ['bannerListImgs']),

    totalPage() {
      return Math.ceil(this.total / this.pageSize)
    }
  },
  methods: {
    ...mapActions('film', ['getBannerList', 'getFilmList']),

    /**
     * 记载更多的影片
     */
    loadFilmList() {
      console.log(123)
      this.pageNum++
      this.getFilmList({
        pageNum: this.pageNum,
        pageSize: this.pageSize,

        callback: () => {
          this.loading = false
          if (this.pageNum >= this.totalPage) {
            this.finished = true
          }
        }
      }) //获取电影数据
    }
  },
  created() {
    this.getBannerList() //获取轮播图数据，如果官网轮播图关闭时暂不调用
  }
}
</script>

<style lang="scss" scoped>
</style>
