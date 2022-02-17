import { createWebHistory, createRouter } from "vue-router";
import UserList from "./components/UserList.vue";
import Posts from "./components/Posts.vue";
import PostDetail from "./components/PostDetail.vue";

const routes = [
  {
    name: "Home",
    path: "/",
    component: UserList,
  },
  {
    name: "UserPosts",
    path: "/posts/:userid",
    component: Posts,
  },
  {
    name: "PostDetail",
    path: "/postdetail/:postid",
    component: PostDetail,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
