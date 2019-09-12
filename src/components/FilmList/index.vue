<template>
  <div class="film-list">
    <ul class="film-list__ul">
      <li class="film-list__item" v-for="item in films" :key="item.filmId">
        <a href="#">
          <div class="film-img">
            <img :src="item.poster" alt />
          </div>
          <div class="film-info">
            <p class="film-info-title">{{item.name}}</p>
            <p class="film-info-grade" :style="{visibility: item.grade? '':'hidden'}">
              观众评分
              <span>{{ item.grade }}</span>
            </p>
            <p class="film-info-actors">主演：</p>
            <p class="film-info-detail">{{item.nation}} | {{ item.runtime }}分钟</p>
          </div>
          <div class="film-btn">
            <button>购票</button>
            <!-- <button>预购</button> -->
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'FilmList',
  props: {
    films: Array
  }
}
</script>

<style lang="scss">
@import '../../assets/styles/common/mixin.scss';

.film-list {
  .film-list__ul {
    margin-left: 15px;
  }

  .film-list__item {
    @include border-bottom;
    height: 94px;
    padding: 15px 15px 15px 0;

    a {
      display: flex;
      align-items: center;
      width: 100%;
      height: 100%;
      font-size: 12px;
      color: #797d82;
    }
  }

  .film-img {
    width: 66px;

    img {
      width: 100%;
    }
  }

  .film-info {
    padding: 0 10px;
    flex: 1;
    overflow: hidden;
    line-height: 1.6;

    p {
      height: 20px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;

      span {
        color: #ff5f16;
      }
    }

    .film-info-title {
      height: 26px;
      font-size: 16px;
      color: #191a1b;
    }
  }

  .film-btn {
    height: 25px;
    button {
      width: 50px;
      height: 25px;
      border-radius: 2px;
      border: 1px solid #ff5f16;
      color: #ff5f16;
      background: none;
    }
  }
}
</style>
