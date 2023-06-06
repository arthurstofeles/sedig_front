<template>
  <div class="simulador">
    <Headers />
    <FormularioSimulador />
    <Comparativo />
  </div>
</template>

<script>
import Comparativo from "@/components/simulador/Comparativo.vue";
import FormularioSimulador from "@/components/simulador/Formulario.vue";
import Headers from "@/layouts/Headers.vue";
export default {
  name: "Simulador",
  components: { Headers, FormularioSimulador, Comparativo },
  beforeCreate() {
    console.log(this.$store.state.loggedIn);
    if (this.$store.state.loggedIn === "deslogado") {
      this.$router.push({ path: "/login" });
    }
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
