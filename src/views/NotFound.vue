<template>
  <div class="not-found">
    <v-container>
      <h2 class="text-center">Página não encontrada</h2>
      <v-btn
        x-large
        rounded
        class="enviar sedig_blue--text mb-6 d-flex mx-auto"
        color="sedig_green"
        @click="$router.go(-1)"
        >Voltar</v-btn
      >
    </v-container>
  </div>
</template>

<script>
export default {
  name: "NotFound",
};
</script>

<style lang="scss" scoped>
.not-found {
  position: relative;
  background-color: #5628d2;
  z-index: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
    color: #fff;
    font-weight: 900;
    font-size: 48px;
    line-height: 1.2;
    margin-bottom: 32px;
    @media screen and (max-width: 768px) {
      font-size: 18px;
      line-height: 22px;
    }
  }
}
</style>
