<template>
  <div class="criar-conta">
    <router-link to="/"> <img src="@/assets/img/logo.svg" alt="Logo Sedig" /></router-link>
    <FormularioLogin />
  </div>
</template>

<script>
import FormularioLogin from "@/components/login/Formulario.vue";
export default {
  name: "Login",
  components: { FormularioLogin },
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
<style lang="scss" scoped>
.criar-conta {
  position: relative;
  background-color: #5628d2;
  z-index: 1;
  height: 100%;
  // display: flex;
  // flex-direction: column;
  // justify-content: center;
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
  img {
    margin: 0 auto;
    padding: 16px;
    max-width: 180px;
    width: 100%;
    display: flex;
  }
}
</style>
