// 需要调用 ajax 。那么引入封装好的 网络请求工具模块
import request from '../../utils/request'

export default {
  namespaced: true,

  state: {
    bannerList: [],// 热门影片轮播图数据
    filmlist: []// 热门影片数据
  },

  getters: {
    bannerListImgs(state) {
      return state.bannerList.map(item => item.imgUrl)
    }
  },

  mutations: {
    setBannerList(state, payload) {
      state.bannerList = payload
    },

    setfilmList(state, payload) {
      state.filmlist = payload.films
    }
  },

  actions: {
    getBannerList({ commit }) {
      // axios.get('/banner') http://localhost:8080/banner
      request.get('https://m.maizuo.com/gateway?type=2&cityId=440300&k=9728915',
        {
          headers: {
            'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1565228528352187318344"}',
            'X-Host': 'mall.cfg.common-banner'
          }
        }).then(data => {
          console.log(data.data)
          // 请求成功，还需将后台返回的数据存放到 state 中
          commit('setBannerList', data.data)
        })
    },

    //获取影片列表数据
    getFilmList({ commit }) {
      request.get('https://m.maizuo.com/gateway', {
        params: {
          cityId: 440300,
          pageNum: 1,
          pageSize: 10,
          type: 1,
          k: 3111049,
        },
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1565228528352187318344"}',
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then(res => {
        console.log(res);
        if (res.status === 0) {
          commit({
            type: 'setfilmList',
            films: res.data.films
          })
        }
      })
    }
  }
}
