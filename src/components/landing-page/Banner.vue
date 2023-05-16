<template>
  <div class="banner">
    <v-container>
      <v-row no-gutters>
        <v-col :md="8" :sm="12">
          <img src="@/assets/img/logo.svg" alt="Logo Sedig" class="logo" />
          <h1 class="mb-md-14">
            Subestações digitais, conexão com <br v-if="isMobile" /><span>o futuro</span>
          </h1>
          <img v-if="isMobile" src="@/assets/img/illustration.png" width="100%" class="mt-n12" />
          <p>
            A <span>subestação digital</span> é a inovação das subestações que possibilita redução
            de custos e aumenta a segurança. <br />
            Comparado com uma subestação convencional, as
            <span>vantagens da SE digital</span> vão além da economia na implementação. Confira no
            nosso simulador!
          </p>
          <v-btn x-large rounded class="call-to-action sedig_blue--text" color="#00D745"
            >abrir simulador</v-btn
          >
        </v-col>
      </v-row>
      <img
        v-if="!isMobile"
        src="@/assets/img/illustration.png"
        width="100%"
        class="illustration pt-16"
      />
    </v-container>
  </div>
</template>
<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Banner",
  props: {
    isMobile: {
      type: Boolean,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped>
.banner {
  position: relative;
  background-color: #5628d2;
  z-index: 1;
  &:before {
    content: "";
    width: 100%;
    max-height: 400px;
    height: 100%;
    background-image: url("../../assets/img/wave.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: bottom center;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
  &:after {
    content: "";
    width: 100%;
    max-height: 240px;
    height: 100%;
    background-image: url("../../assets/img/wave-bottom.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top center;
    position: absolute;
    bottom: -1px;
    left: 0;
    z-index: -1;
    @media screen and (min-width: 1540px) {
      max-height: 300px;
    }
  }
  .container {
    position: relative;
    padding-bottom: 240px;
    @media screen and (max-width: 768px) {
      padding-bottom: 40px;
    }
    .row {
      position: relative;
      @media screen and (max-width: 768px) {
        padding-bottom: 48px;
      }
    }
  }
}
.logo {
  width: 100%;
  max-width: 313px;
  margin-bottom: 64px;
  @media screen and (max-width: 768px) {
    max-width: 115px;
    margin-bottom: 24px;
  }
}
h1 {
  font-weight: 900;
  font-size: 64px;
  line-height: 77px;
  color: #ffffff;
  span {
    color: #00d745;
  }
  @media screen and (max-width: 768px) {
    font-size: 32px;
    line-height: 39px;
  }
}
p {
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  color: #ffffff;
  margin-bottom: 48px;
  span:first-child {
    font-weight: 600;
    color: #ffc30d;
  }
  span:nth-of-type(2) {
    font-weight: 600;
    color: #00d745;
  }
  @media screen and (max-width: 768px) {
    font-size: 14px;
    line-height: 17px;
    padding-right: 64px;
  }
}
.illustration {
  position: absolute;
  right: 0;
  bottom: 0px;
  width: 100%;
  max-width: 560px;
  @media screen and (min-width: 1024px) {
    max-width: 640px;
  }
}
.call-to-action {
  padding-left: 52px;
  padding-right: 52px;
  @media screen and (max-width: 768px) {
    padding-left: 16px;
    padding-right: 16px;
    position: absolute;
    right: 0;
    bottom: 0;
  }
}
</style>
