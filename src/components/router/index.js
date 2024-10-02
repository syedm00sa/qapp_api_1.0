import { createRouter, createWebHistory } from "vue-router";
import Search from "../../views/Search.vue";
import Create from "../../views/Create.vue";
import LandingPage from "../../views/LandingPage.vue";
import Login from "../../views/LoginPage.vue";

const routes = [
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
];

const router = createRouter({
  history: createWebHistory("/"), // Use a hardcoded base URL or '/' if no base URL is needed
  routes,
});

export default router;
