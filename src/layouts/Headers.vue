<template>
  <div>
    <HeaderMobile
      :links="links"
      v-if="isMobile"
      @logout="
        $store.dispatch('setLoggedIn', 'deslogado');
        $router.push({ path: '/' });
      "
    />
    <HeaderDesktop
      :links="links"
      v-else
      @logout="
        $store.dispatch('setLoggedIn', 'deslogado');
        $router.push({ path: '/' });
      "
    />
  </div>
</template>

<script>
import HeaderMobile from "@/components/header/HeaderMobile.vue";
import HeaderDesktop from "@/components/header/HeaderDesktop.vue";
export default {
  name: "DefaultLayout",
  components: {
    HeaderMobile,
    HeaderDesktop,
  },
  data: () => ({
    isMobile: false,
    links: [
      {
        title: "PEDIR ORÇAMENTO",
        route: "PedirOrcamento",
        children: [],
      },
    ],
  }),
  created() {
    window.addEventListener("resize", () => {
      this.isMobile = window.innerWidth <= 768;
    });
    this.isMobile = window.innerWidth <= 768;
  },
};
</script>
