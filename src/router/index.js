import Vue from "vue";
import Router from "vue-router";
import HomePage from "@/components/HomePage";
import OrderPage from "@/components/Order";
import FindPage from "@/components/Find";
import MyPage from "@/components/My";
import NewsList from "@/components/NewsList";
import NewsDetail1 from "@/components/NewsDetail1";
import NewsDetail2 from "@/components/NewsDetail2";
import NewsDetail3 from "@/components/NewsDetail3";
import Takeout from "@/components/Takeout";

Vue.use(Router);

export default new Router({
    routes: [{
            path: "/",
            redirect: "/home"
        },
        {
            path: "/home",
            name: "home",
            component: HomePage
        },
        {
            path: "/order",
            name: "order",
            component: OrderPage
        },
        {
            path: "/find",
            name: "find",
            component: FindPage
        },
        {
            path: "/my",
            name: "my",
            component: MyPage
        },
        {
            path: "/news/list",
            name: "news.list",
            component: NewsList
        },
        {
            path: "/news/detail1",
            name: "news.detail1",
            component: NewsDetail1
        },
        {
            path: "/news/detail2",
            name: "news.detail2",
            component: NewsDetail2
        },
        {
            path: "/news/detail3",
            name: "news.detail3",
            component: NewsDetail3
        },
        {
            path: "/takeout/list",
            name: "takeout.list",
            component: Takeout
        }
    ]
});