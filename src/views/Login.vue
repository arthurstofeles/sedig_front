<template>
  <div class="criar-conta">
    <router-link to="/"> <img src="@/assets/img/logo.svg" alt="Logo Sedig" /></router-link>
    <FormularioLogin @login="logar" :loading="loading" @recuperar="formModal = true" />
    <AlertError :alertError="error" :messageError="message" />
    <AlertSuccess
      :dialog="sucess"
      :dialogMessage="message"
      dialogTextButton="Fechar"
      @close="sucess = false"
    />
    <RecuperarSenha
      :dialog="formModal"
      @close="formModal = false"
      @recuperar="recuperar"
      :loading="loadingModal"
    />
  </div>
</template>

<script>
import { login, recuperarSenha } from "@/utils/services.js";
import AlertError from "@/components/custom/AlertError";
import AlertSuccess from "@/components/custom/AlertSuccess";
import FormularioLogin from "@/components/login/Formulario.vue";
import RecuperarSenha from "@/components/login/RecuperarSenha.vue";
export default {
  name: "Login",
  components: { FormularioLogin, AlertError, AlertSuccess, RecuperarSenha },
  data: () => ({
    isMobile: false,
    loading: false,
    error: false,
    sucess: false,
    message: "Ocorreu um erro inesperado.",
    formModal: false,
    loadingModal: false,
  }),
  beforeCreate() {
    if (this.$store.state.loggedIn === "logado") {
      this.$router.push({ path: "/simulador" });
    }
  },
  created() {
    window.addEventListener("resize", () => {
      this.isMobile = window.innerWidth <= 768;
    });
    this.isMobile = window.innerWidth <= 768;
  },
  methods: {
    async logar(event) {
      this.loading = true;
      this.error = false;
      try {
        await login(event).then((resp) => {
          this.loading = false;
          this.$router.push({ path: "/simulador" });
          window.localStorage.token = `Bearer ${resp.token}`;
          this.$store.dispatch("setLoggedIn", "logado");
        });
      } catch (err) {
        this.error = true;
        this.loading = false;
        console.error(err);
      }
    },
    async recuperar(event) {
      this.sucess = false;
      this.loadingModal = true;
      this.error = false;
      try {
        await recuperarSenha(event).then(() => {
          this.loadingModal = false;
          this.sucess = true;
          this.message = "Verifique seu e-mail e segua os próximos passos";
        });
      } catch (err) {
        this.loadingModal = false;
        this.formModal = false;
        this.error = true;
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
