<template>
  <div class="tmpl">
    <div class="photo-bottom">
      <ul>
        <li class="photo-comment">
          <div>
            <span>提交评论</span>
            <span>
              <a>返回</a>
            </span>
          </div>
        </li>
        <li class="txt-comment">
          <textarea name id cols="30" rows="10"></textarea>
        </li>
        <li>发表评论按钮</li>
        <li class="photo-comment">
          <div>
            <span>评论列表</span>
            <span>44条评论</span>
          </div>
        </li>
      </ul>
      <ul class="comment-list">
        <li
          v-for="item in commentList"
          :key="item.id"
        >{{item.userName}} : {{item.content}} {{item.add_time | relativeTime}}</li>
      </ul>加载更多按钮
    </div>
  </div>
</template>

<script>
var commentList = [
  {
    id: 1,
    userName: "匿名用户",
    add_time: "2020-01-06T00:10:24.000Z",
    content: "看着真有食欲"
  },
  {
    id: 2,
    userName: "匿名用户",
    add_time: "2020-01-06T00:15:24.000Z",
    content: "八错八错"
  },
  {
    id: 3,
    userName: "匿名用户",
    add_time: "2020-01-06T00:30:24.000Z",
    content: "厉害"
  }
];
export default {
  name: "Comment",
  props: ["cid"],
  data() {
    return {
      commentList
    };
  },
  created() {
    //this.$axios.get('getApi/${this.cid}')
    console.log("getApi/" + this.cid);
    console.log(this.cid);
  }
};
</script>

<style lang="css" scoped>
.tmpl {
  padding-bottom: 100px;
}
.photo-comment > div span:nth-child(1) {
  float: left;
  font-weight: bold;
  margin-left: 5px;
}
.photo-comment > div span:nth-child(2) {
  float: right;
}
.photo-comment {
  height: 30px;
  border-bottom: 1px solid rgba(0, 0, 0, 4);
  line-height: 30px;
  margin-bottom: 5px;
}
.txt-comment {
  padding: 5 5;
}
.txt-comment textarea {
  margin-bottom: 5px;
}
.comment-list li {
  border-bottom: 1px solid rgba(0, 0, 0, 2);
  padding-bottom: 5px;
  padding-left: 5px;
  margin-bottom: 5px;
}
li {
  list-style: none;
}
ul {
  margin: 0;
  padding: 0;
}
textarea {
  width: 100%;
}
</style>