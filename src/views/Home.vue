<template>
  <div>
    <Banner :isMobile="isMobile" />
    <Comparativo :isMobile="isMobile" />
    <div
      style="height: 80vh; background: #fff"
      class="lighten-3 d-flex justify-center align-center display-1"
    >
      Contato
    </div>
    <div style="height: 80vh" class="grey lighten-4 d-flex justify-center align-center display-1">
      Quem somos
    </div>
    <div style="height: 40vh" class="grey d-flex justify-center align-center display-1">Rodapé</div>
  </div>
</template>

<script>
import Banner from "@/components/landing-page/Banner.vue";
import Comparativo from "@/components/landing-page/Comparativo.vue";
export default {
  name: "HomeView",
  components: { Banner, Comparativo },
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
