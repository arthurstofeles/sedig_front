<template>
  <div class="orcamento">
    <Headers />
    <FormularioOrcamento :loading="loading" @contato="contato" />
    <AlertError :alertError="error" :messageError="message" />
  </div>
</template>

<script>
import { solicitarContato } from "@/utils/services";
import AlertError from "@/components/custom/AlertError";
import FormularioOrcamento from "@/components/pedir-orcamento/Formulario.vue";
import Headers from "@/layouts/Headers.vue";
export default {
  name: "PedirOrcamento",
  components: { Headers, FormularioOrcamento, AlertError },
  data: () => ({
    loading: false,
    error: false,
    message: "Ocorreu um erro",
  }),
  beforeCreate() {
    if (this.$store.state.loggedIn === "deslogado") {
      this.$router.push({ path: "/login" });
    }
  },
  methods: {
    async contato(event) {
      this.error = false;
      this.loading = true;
      try {
        await solicitarContato(event).then(() => {
          this.$router.push({ name: "Obrigado" });
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

<style lang="scss" scoped>
.orcamento {
  position: relative;
  background-color: #5628d2;
  z-index: 1;
  height: 100%;
  &:before {
    content: "";
    width: 100%;
    max-height: 400px;
    height: 100%;
    background-image: url("../assets/img/wave.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: bottom center;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
}
</style>
