import Vue from "vue";
import Router from "vue-router";

import DashboardLayout from "@/components/Layouts/Dashboard";
import AuthLayout from "@/components/Layouts/Auth";

import AuthRoutes from "./auth";
Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/dashboard",
      name: "dashboard",
      component: DashboardLayout
    },
    {
      path: "/auth",
      name: "auth",
      component: AuthLayout,
      children: AuthRoutes
    }
  ]
});
