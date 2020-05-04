import Vue from "vue";
import VueRouter from "vue-router";
import ResumeContainer from "@/views/resume/Container.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Resume",
    component: ResumeContainer,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
