<template>
  <div class="criar-conta">
    <router-link to="/"> <img src="@/assets/img/logo.svg" alt="Logo Sedig" /></router-link>
    <FormularioCriarConta @criar="cadastrar" :loading="loading" />
    <AlertError :alertError="error" :messageError="message" />
    <AlertSuccess
      :dialog="sucess"
      :dialogMessage="message"
      dialogTextButton="Realizar Login"
      @close="$router.push({ name: 'Login' })"
    />
  </div>
</template>

<script>
import { criaConta } from "@/utils/services.js";
import AlertError from "@/components/custom/AlertError";
import AlertSuccess from "@/components/custom/AlertSuccess";
import FormularioCriarConta from "@/components/criar-conta/Formulario.vue";
export default {
  name: "CriarConta",
  components: { FormularioCriarConta, AlertError, AlertSuccess },
  data: () => ({
    isMobile: false,
    loading: false,
    error: false,
    sucess: false,
    message: "Ocorreu um erro inesperado.",
  }),
  created() {
    window.addEventListener("resize", () => {
      this.isMobile = window.innerWidth <= 768;
    });
    this.isMobile = window.innerWidth <= 768;
  },
  methods: {
    async cadastrar(event) {
      this.loading = true;
      this.sucess = false;
      this.error = false;
      try {
        await criaConta(event).then(() => {
          this.loading = false;
          this.sucess = true;
          this.message = "Cadastro concluído com sucesso!";
        });
      } catch (err) {
        this.error = true;
        this.loading = false;
        if (err.response.data.detail === "E-mail already registered") {
          this.message = "Este e-mail já está cadastrado.";
        }
        console.error(err);
      }
    },
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
