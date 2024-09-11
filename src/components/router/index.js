import { createRouter, createWebHistory } from "vue-router";
import Search from "../../views/Search.vue";
import Ser from "../../views/ser.vue";
import Create from "../../views/Create.vue";
import Manage from "../../views/Manage.vue";
import LandingPage from "../../views/LandingPage.vue";
import Login from "../../views/LoginPage.vue";

const routes = [
  // { path: "/", redirect: "/login" }, // Redirect root to login
  {
    path: "/",
    name: "login",
    component: Login,
  },
  {
    path: "/landing",
    name: "landing",
    component: LandingPage,
  },
  {
    path: "/search/:customerId?",
    name: "search",
    component: Search,
  },
  {
    path: "/create",
    name: "create",
    component: Create,
  },
  {
    path: "/manage",
    name: "manage",
    component: Manage,
  },
];

const router = createRouter({
  history: createWebHistory("/"), // Use a hardcoded base URL or '/' if no base URL is needed
  routes,
});

export default router;

// import Vue from "vue";
// import Router from "vue-router";
// import LandingPage from "@/components/LandingPage.vue"; // Adjust the path as needed
// import LoginPage from "@/components/LoginPage.vue"; // Adjust the path as needed

// Vue.use(Router);

// export default new Router({
//   mode: "history",
//   routes: [
//     { path: "/", redirect: "/login" }, // Redirect root to login
//     { path: "/login", name: "login", component: LoginPage },
//     { path: "/landing", name: "landing", component: LandingPage },
//     { path: "/search", name: "search", component: SearchComponent }, // Assuming you have a SearchComponent
//   ],
// });
