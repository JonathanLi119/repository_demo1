// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import Axios from "axios";

Vue.config.productionTip = false;
// const service = Axios.create({
//     timeout: 20000
// });

// Axios.interceptors.request.use(config => {
//     config.url =
//         "http://9.119.110.171:9080/ppop-0.0.1-SNAPSHOT/rest/" + config.url;
//     return config;
// });

Vue.prototype.$axios = Axios;
// Axios.defaults.baseURL = "http://localhost:8080/rest/";

// error :    Access to XMLHttpRequest at 'http://9.119.110.171:9080/ppop-0.0.1-SNAPSHOT/rest/getComment' from origin 'http://9.119.110.171:9081' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
// Axios.defaults.baseURL = "http://9.119.110.171:9080/ppop-0.0.1-SNAPSHOT/rest";

// import all components
import Mint from "mint-ui";
Vue.use(Mint);

// import VuePreview from 'vue2-preview'
// Vue.use(VuePreview)

import VuePreview from "vue-preview";
// defalut install
Vue.use(VuePreview);

// Vue.prototype.$axios = Axios

// import {
//   Header,
//   Tabbar,
//   TabItem
// } from 'mint-ui';
// Vue.component(Header.name, Header);
// Vue.component(Tabbar.name, Tabbar);
// Vue.component(TabItem.name, TabItem);
import "mint-ui/lib/style.css";

import "../static/css/global.css";

/* eslint-disable no-new */
new Vue({
    el: "#app",
    router,
    components: {
        App
    },
    template: "<App/>"
});

// component could be registed after new Vue
import Comment from "@/components/com/Comment";
Vue.component(Comment.name, Comment);

import moment from "moment";
Vue.filter("relativeTime", function(date) {
    return moment(date).fromNow();
});

Vue.filter("formatTime", function(date) {
    console.log(moment(date).format("YYYY-MM-DD HH:mm:ss"));

    return moment().format("YYYY-MM-DD HH:mm:ss");
});