<template>
  <div class="news">
    <div class="newList">
      <ul>
        <vue-preview :slides="slide1" @close="handleClose"></vue-preview>
      </ul>
    </div>
    <Comment :cid="$route.params.id" />
  </div>
</template>

<script>
export default {
  name: 'Takeout',
  data() {
    return {
      slide1: [
        {
          src: '/static/img/meishi1_big.PNG',
          msrc: '/static/img/meishi1.PNG',
          alt: 'picture1',
          title: 'Image Caption 1',
          w: 600,
          h: 400
        },
        {
          src: '/static/img/meishi2_big.PNG',
          msrc: '/static/img/meishi2.PNG',
          alt: 'picture2',
          title: 'Image Caption 2',
          w: 1200,
          h: 900
        },
        {
          src: '/static/img/meishi3_big.PNG',
          msrc: '/static/img/meishi3.PNG',
          alt: 'picture3',
          title: 'Image Caption 3',
          w: 1200,
          h: 900
        }
      ]
    }
  },
  methods: {
    handleClose() {
      console.log('close event')
    }
  }
}
</script>

<style lang="css" scoped>
.news {
  padding-bottom: 100px;
}
.newsList {
  width: 100%;
  border-bottom: 1px solid #cccccc;
  font-size: 12px;
}
.newsList ul li {
  position: relative;
}
.newList ul li a {
  display: block;
  width: 100%;
  height: 100%;
  color: #808080;
  display: flex;
  text-decoration: none;
}
.new_img {
  width: 10%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
