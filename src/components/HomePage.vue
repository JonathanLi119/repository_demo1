<template>
  <div id="home">
    <mt-swipe :auto="4000" style="height:250px" class="swiper">
      <mt-swipe-item v-for="(item, index) in imgs" :key="index">
        <img :src="item" />
        <!-- <img src="/static/img/1.png" alt /> -->
        <!-- <img src="../assets/1.png" alt /> -->
      </mt-swipe-item>
    </mt-swipe>
    <div class="list">
      <ul>
        <li v-for="item in grids" :key="item.id">
          <!-- <a href="javascript:void(0);">
            <img :src="item.src" alt />
          </a>-->
          <!-- <router-link :to="item.router"> -->
          <!--:to绑定的时候后面用冒号，其他的时候用直接引用就行，所以这里name: 'item.router.name'就报错了-->
          <router-link :to="{name: item.router.name, params: {id: item.id}}">
            <img :src="item.src" alt />
          </router-link>
          <p>{{ item.title }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import pic1 from '../assets/praise.png'
import pic2 from '../assets/takeout.png'
import pic3 from '../assets/hotline.png'

var grids = [
  { id: 1, src: pic1, title: 'praise', router: { name: 'news.list' } },
  { id: 2, src: pic2, title: 'takeout', router: { name: 'takeout.list' } },
  { id: 3, src: pic3, title: 'hotline', router: { name: 'news.list' } }
]
export default {
  data() {
    return {
      imgs: [],
      grids
    }
  },
  created() {
    // this.imgs = ["../assets/1.png", "../assets/2.png"];、
    this.imgs = ['/static/img/1.png', '/static/img/2.png']
    console.log(this.imgs)
  }
}
</script>

<style lang="css" scoped>
.swiper img {
  width: 100%;
  height: 250px;
}

.list {
  width: 100%;
}
.list ul {
  display: flex;
  flex-wrap: wrap;
}
.list ul li {
  width: 33%;
  height: 100px;
  text-align: center;
}
</style>