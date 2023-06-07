<template>
  <div class="orcamento">
    <Headers />
    <FormularioOrcamento />
  </div>
</template>

<script>
import FormularioOrcamento from "@/components/pedir-orcamento/Formulario.vue";
import Headers from "@/layouts/Headers.vue";
export default {
  name: "PedirOrcamento",
  components: { Headers, FormularioOrcamento },
  beforeCreate() {
    if (this.$store.state.loggedIn === "deslogado") {
      this.$router.push({ path: "/login" });
    }
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
