<template>
  <div class="page-home">
    <Banner :imgs="bannerListImgs" />
    <van-tabs v-model="active">
      <van-tab title="正在热映">
        <FilmList />
      </van-tab>
      <van-tab title="即将上映">内容 2</van-tab>
    </van-tabs>
  </div>
</template>

<script>
import Banner from '../../components/Banner/Banner'
import FilmList from '../../components/FilmList/index'
import { mapActions, mapGetters } from 'vuex'
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
    ...mapGetters('film', ['bannerListImgs'])
  },
  methods: {
    ...mapActions('film', ['getBannerList'])
  },
  created() {
    this.getBannerList()
  }
}
</script>
