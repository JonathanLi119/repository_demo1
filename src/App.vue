<template>
  <div id="app">
    <mt-header title="信息管理系统">
      <router-link to="/" slot="left">
        <mt-button icon="back">back</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <!-- default in-out   -->
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>

    <mt-tabbar v-model="selected">
      <mt-tab-item id="home">
        <img slot="icon" src="./assets/index.png" />home
      </mt-tab-item>
      <mt-tab-item id="order">
        <img slot="icon" src="./assets/order.png" />order
      </mt-tab-item>
      <mt-tab-item id="find">
        <img slot="icon" src="./assets/find.png" />find
      </mt-tab-item>
      <mt-tab-item id="my">
        <img slot="icon" src="./assets/my.png" />my
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      selected: ""
    };
  },
  watch: {
    selected: function(newV, oldV) {
      console.log(newV);
      this.$router.push({ name: newV });
    }
  }
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
