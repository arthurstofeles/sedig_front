import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "Home" */ "../views/Home.vue"),
  },
  {
    path: "/criar-conta",
    name: "CriarConta",
    component: () => import(/* webpackChunkName: "CriarConta" */ "../views/CriarConta.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import(/* webpackChunkName: "Login" */ "../views/Login.vue"),
  },
  {
    path: "/nova-senha",
    name: "NovaSenha",
    component: () => import(/* webpackChunkName: "NovaSenha" */ "../views/NovaSenha.vue"),
  },
  {
    path: "/simulador",
    name: "Simulador",
    component: () => import(/* webpackChunkName: "Simulador" */ "../views/Simulador.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
