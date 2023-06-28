<template>
  <div class="simulador">
    <Headers />
    <FormularioSimulador @simular="simular" :loading="loadingBtn" />
    <Comparativo v-if="resultado.length > 0" :resultado="resultado" />
    <AlertError :alertError="error" :messageError="messageError" />
  </div>
</template>

<script>
import Comparativo from "@/components/simulador/Comparativo.vue";
import FormularioSimulador from "@/components/simulador/Formulario.vue";
import Headers from "@/layouts/Headers.vue";
import AlertError from "@/components/custom/AlertError";
import { resultadoSimulacao } from "@/utils/services.js";
export default {
  name: "Simulador",
  components: { Headers, FormularioSimulador, Comparativo, AlertError },
  data: () => ({
    resultado: [],
    loadingBtn: false,
    error: false,
    messageError: "Ocorreu um erro, tente novamente!",
  }),
  beforeCreate() {
    if (this.$store.state.loggedIn === "deslogado") {
      this.$router.push({ path: "/login" });
    }
  },
  methods: {
    async simular(event) {
      this.error = false;
      this.loadingBtn = true;
      try {
        const data = await resultadoSimulacao(event);
        this.resultado = data;
        const total = {
          item: "Total",
          price_digital: this.somarPrecos(this.resultado, "price_digital"),
          price_tradicional: this.somarPrecos(this.resultado, "price_tradicional"),
        };
        this.resultado.push(total);
        this.loadingBtn = false;
        this.scrollParaResultado();
      } catch (e) {
        this.loadingBtn = false;
        this.error = true;
      }
    },
    scrollParaResultado() {
      setTimeout(function () {
        const resultadoDiv = document.getElementById("resultado");
        resultadoDiv.scrollIntoView({ behavior: "smooth" });
      }, 500);
    },
    somarPrecos(array, chave) {
      let soma = 0;
      for (let i = 0; i < array.length; i++) {
        const item = array[i][chave];
        if (item) {
          soma += item;
        }
      }
      return soma;
    },
  },
};
</script>

<style lang="scss" scoped>
.simulador {
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
