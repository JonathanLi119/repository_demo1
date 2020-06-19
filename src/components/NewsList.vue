<template>
  <div class="news">
    <div class="newList">
      <ul>
        <li v-for="item in list" :key="item.id">
          <!--item.detail_url.name ---- path mapping
          item.detail_url ---- name mapping-->
          <router-link :to="item.detail_url">
            <div class="new_img">
              <img :src="item.src" alt />
            </div>
            <div class="content">
              <p class="title">{{ item.title }}</p>
              <div class="news-desc">
                <p class="summary">{{ item.summary }}</p>
                <p>
                  <span class="praise">praise : {{ item.praise }}</span>
                  <span class="time">publish : {{ item.publish }}</span>
                </p>
              </div>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          id: 10,
          src: "/static/img/10.PNG",
          title: "China! My Motherland",
          summary: "祖国的江山如此多娇",
          praise: "233",
          publish: "2019/12/31",
          detail_url: { name: "news.detail1" }
        },
        {
          id: 9,
          src: "/static/img/9.PNG",
          title: "excellent harvest",
          summary: "又是一个丰收年",
          praise: "87",
          publish: "2019/12/20",
          detail_url: { name: "news.detail2" }
        },
        {
          id: 8,
          src: "/static/img/8.PNG",
          title: "haze weather",
          summary: "雾霾的危害",
          praise: "553",
          publish: "2019/11/01",
          detail_url: { name: "news.detail3" }
        }
      ]
    };
  }
};
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
.content .title {
  font-size: 20px;
  display: inline-block;
  color: #131f3c;
  letter-spacing: 0;
  padding-bottom: 7px;
  /* font-family: PingFangSC-Regular; */
  margin-top: 10px;
  margin-left: 300px;
}
.new-desc span {
  color: #ff6700;
  margin-left: 300px;
}
.summary {
  padding: 5px 0;
  margin-left: 300px;
}
.praise {
  margin-left: 300px;
  color: rgba(0, 153, 255, 0.863);
}
.time {
  margin-left: 20px;
  color: red;
}
</style>
