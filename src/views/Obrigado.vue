<template>
  <div class="obrigado">
    <Headers />
    <v-container>
      <v-row no-gutters class="rounded-xl pa-6 white">
        <v-col cols="12"
          ><h2>Nós vamos até você!</h2>
          <p>
            Nós iremos até você, de acordo com a sua preferência, para continuarmos o trablaho e
            montarmos o orçamento preciso da sua implementação ou adequação, e esperamos que possa
            desfrutar em breve de todas as vantagens das suibestações digitais.
          </p>
        </v-col>
        <v-btn
          x-large
          rounded
          class="enviar sedig_blue--text mb-4 mt-6 d-flex mx-auto"
          color="sedig_blue"
          block
          to="/simulador"
          outlined
          >Fazer nova simulação</v-btn
        >
        <v-btn
          x-large
          rounded
          class="enviar sedig_green--text mb-6 d-flex mx-auto"
          color="sedig_blue"
          block
          @click="
            $store.dispatch('setLoggedIn', 'deslogado');
            $router.push({ path: '/' });
          "
          >Sair</v-btn
        >
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Headers from "@/layouts/Headers.vue";
export default {
  name: "Obrigado",
  components: { Headers },
  beforeCreate() {
    if (this.$store.state.loggedIn === "deslogado") {
      this.$router.push({ path: "/login" });
    }
  },
};
</script>

<style lang="scss" scoped>
.obrigado {
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
  h2 {
    color: #370ea3;
    font-weight: 900;
    font-size: 48px;
    line-height: 1.2;
    margin-bottom: 32px;
    @media screen and (max-width: 768px) {
      font-size: 18px;
      line-height: 22px;
    }
  }
  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 1.4;
    color: #370ea3;
    @media screen and (max-width: 768px) {
      font-size: 12px;
    }
  }
}
</style>
