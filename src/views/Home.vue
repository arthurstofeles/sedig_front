<template>
  <div>
    <Banner :isMobile="isMobile" />
    <Comparativo :isMobile="isMobile" />
    <Contato :isMobile="isMobile" />
    <QuemSomos />
    <Footer />
  </div>
</template>

<script>
import Banner from "@/components/landing-page/Banner.vue";
import Comparativo from "@/components/landing-page/Comparativo.vue";
import Contato from "@/components/landing-page/Contato.vue";
import QuemSomos from "@/components/landing-page/QuemSomos.vue";
import Footer from "@/components/landing-page/Footer.vue";
export default {
  name: "HomeView",
  components: { Banner, Comparativo, Contato, QuemSomos, Footer },
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
