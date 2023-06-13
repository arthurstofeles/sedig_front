<template>
  <div>
    <Banner :isMobile="isMobile" />
    <Comparativo :isMobile="isMobile" />
    <Contato :isMobile="isMobile" @contato="contato" :loading="loading" />
    <QuemSomos />
    <Footer />
    <AlertError :alertError="error" :messageError="message" />
    <AlertSuccess
      :dialog="sucess"
      :dialogMessage="message"
      dialogTextButton="Fechar"
      @close="sucess = false"
    />
  </div>
</template>

<script>
import AlertSuccess from "@/components/custom/AlertSuccess";
import AlertError from "@/components/custom/AlertError";
import { solicitarContato } from "@/utils/services";
import Banner from "@/components/landing-page/Banner.vue";
import Comparativo from "@/components/landing-page/Comparativo.vue";
import Contato from "@/components/landing-page/Contato.vue";
import QuemSomos from "@/components/landing-page/QuemSomos.vue";
import Footer from "@/components/landing-page/Footer.vue";
export default {
  name: "HomeView",
  components: { Banner, Comparativo, Contato, QuemSomos, Footer, AlertError, AlertSuccess },
  data: () => ({
    isMobile: false,
    loading: false,
    error: false,
    message: "Ocorreu um erro",
    sucess: false,
  }),
  created() {
    window.addEventListener("resize", () => {
      this.isMobile = window.innerWidth <= 768;
    });
    this.isMobile = window.innerWidth <= 768;
  },
  methods: {
    async contato(event) {
      this.error = false;
      this.loading = true;
      try {
        await solicitarContato(event).then(() => {
          this.message = "Solicitação de contato enviada com sucesso!";
          this.sucess = true;
        });
        this.loading = false;
      } catch (e) {
        this.loading = false;
        this.error = true;
        this.message = e.response.data.message;
      }
    },
  },
};
</script>
