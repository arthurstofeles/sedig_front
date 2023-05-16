<template>
  <div>
    <Banner :isMobile="isMobile" />
    <Comparativo :isMobile="isMobile" />
    <Contato :isMobile="isMobile" />
    <QuemSomos />
    <div style="height: 40vh" class="grey d-flex justify-center align-center display-1">Rodapé</div>
  </div>
</template>

<script>
import Banner from "@/components/landing-page/Banner.vue";
import Comparativo from "@/components/landing-page/Comparativo.vue";
import Contato from "@/components/landing-page/Contato.vue";
import QuemSomos from "@/components/landing-page/QuemSomos.vue";
export default {
  name: "HomeView",
  components: { Banner, Comparativo, Contato, QuemSomos },
  data: () => ({
    isMobile: false,
  }),
  created() {
    window.addEventListener("resize", () => {
      this.isMobile = window.innerWidth <= 768;
    });
    this.isMobile = window.innerWidth <= 768;
  },
};
</script>
