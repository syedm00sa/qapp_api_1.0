import { createRouter, createWebHistory } from "vue-router";
import Search from "../../views/Search.vue";
import Create from "../../views/Create.vue";
import Manage from "../../views/Manage.vue";
import LandingPage from "../../views/LandingPage.vue";

const routes = [
  {
    path: "/",
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
