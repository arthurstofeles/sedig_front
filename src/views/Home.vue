<template>
  <div>
    <Banner :isMobile="isMobile" />
    <div
      style="height: 80vh; background: #370ea3"
      class="lighten-2 d-flex justify-center align-center display-1"
    >
      Comparativo
    </div>
    <div
      style="height: 80vh; background: #370ea3"
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
export default {
  name: "HomeView",
  components: { Banner },
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
