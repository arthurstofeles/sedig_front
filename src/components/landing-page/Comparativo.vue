<template>
  <div class="comparativo">
    <v-container>
      <v-row no-gutters>
        <v-col :md="8" :sm="12" class="mb-16">
          <h2>
            Comparativo<br v-if="isMobile" />
            SE Digital x SE Convencional*
          </h2>
          <p>
            *considerando uma SE média com os seguintes parâmetros: tensão 500w, Vorem ipsum dolor
            sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac
            aliquet odio mattis.
          </p>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col cols="6" class="digital">
          <h3>Subestação Digital</h3>
          <ul>
            <li class="d-flex align-start mb-4" v-for="(item, index) in digitalList" :key="index">
              <v-icon class="mr-2 mt-2" color="#ffc30d"> mdi-check-circle </v-icon>
              <span>{{ item }}</span>
            </li>
          </ul>
        </v-col>
        <v-col cols="6" class="convencional">
          <h3>Subestação Convencional</h3>
          <ul>
            <li class="d-flex align-start mb-4" v-for="(item, index) in digitalList" :key="index">
              <v-icon class="mr-2 mt-2" color="#ffffff"> mdi-close-circle </v-icon>
              <span>{{ item }}</span>
            </li>
          </ul>
        </v-col>
        <v-btn x-large rounded class="call-to-action sedig_blue--text mt-10 mx-auto" color="#FFC30D"
          >comparar outros cenários</v-btn
        >
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Comparativo",
  props: {
    isMobile: {
      type: Boolean,
      required: true,
    },
  },
  data: () => ({
    digitalList: [
      "Custo de implementação médio: R$ 500.000,00",
      "Norem ipsum dolor sit amet, consectetur adipiscing elit. ",
      "Norem ipsum dolor sit amet, consectetur adipiscing elit. ",
      "Norem ipsum dolor sit amet, consectetur adipiscing elit. ",
    ],
  }),
};
</script>

<style lang="scss" scoped>
.comparativo {
  background: linear-gradient(
    180deg,
    rgba(55, 14, 163, 1) 0%,
    rgba(55, 14, 163, 1) 88%,
    rgba(255, 255, 255, 1) 88%,
    rgba(255, 255, 255, 1) 100%
  );
  position: relative;
  z-index: 1;
  &:after {
    content: "";
    width: 100%;
    max-height: 120px;
    height: 100%;
    background-image: url("../../assets/img/wave-bottom.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top center;
    position: absolute;
    bottom: -36px;
    left: 0;
    z-index: -1;
    transform: rotate(180deg);
    @media screen and (min-width: 600px) {
      bottom: -48px;
    }
    @media screen and (min-width: 768px) {
      bottom: -60px;
      max-height: 180px;
    }
    @media screen and (min-width: 1025px) {
      bottom: -180px;
      max-height: 240px;
    }
    @media screen and (min-width: 1540px) {
      bottom: -248px;
      max-height: 300px;
    }
  }
  @media screen and (min-width: 1025px) {
    background: linear-gradient(
      180deg,
      rgba(55, 14, 163, 1) 0%,
      rgba(55, 14, 163, 1) 95%,
      rgba(255, 255, 255, 1) 95%,
      rgba(255, 255, 255, 1) 100%
    );
  }
  h2 {
    color: #ffc30d;
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
    font-style: italic;
    font-weight: 300;
    font-size: 12px;
    line-height: 15px;
    color: #ffffff;
  }
  .digital {
    border: 2px solid #ffc30d;
    padding: 16px;
    border-radius: 0px 32px 32px 0px;
    @media screen and (max-width: 768px) {
      padding: 8px;
    }
    h3 {
      font-weight: 600;
      font-size: 24px;
      line-height: 2;
      color: #ffc30d;
      border-bottom: 2px solid #ffc30d;
      margin-bottom: 16px;
      @media screen and (max-width: 768px) {
        font-size: 12px;
      }
    }
    ul {
      list-style: none;
      margin: 0px;
      color: #ffc30d;
      padding: 0px;
      font-weight: 300;
      font-size: 24px;
      line-height: 1.4;
      @media screen and (max-width: 768px) {
        font-size: 12px;
        line-height: 15px;
      }
    }
  }
  .convencional {
    border: 2px solid #ffffff;
    border-left: none;
    padding: 16px;
    border-radius: 0px 32px 32px 0px;
    @media screen and (max-width: 768px) {
      padding: 8px;
    }
    h3 {
      font-weight: 600;
      font-size: 24px;
      line-height: 2;
      color: #ffffff;
      border-bottom: 2px solid #ffffff;
      margin-bottom: 16px;
      @media screen and (max-width: 768px) {
        font-size: 12px;
      }
    }
    ul {
      list-style: none;
      margin: 0px;
      color: #ffffff;
      padding: 0px;
      font-weight: 300;
      font-size: 24px;
      line-height: 1.4;
      @media screen and (max-width: 768px) {
        font-size: 12px;
        line-height: 15px;
      }
    }
  }
}
</style>
