<template>
  <div class="comparativo">
    <v-container>
      <v-row no-gutters>
        <h2>Resultado Simulação Comparativa</h2>
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
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Comparativo",
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
  h2 {
    color: #fff;
    font-weight: 500;
    font-size: 48px;
    line-height: 1.2;
    margin-bottom: 32px;
    @media screen and (max-width: 768px) {
      font-size: 18px;
      line-height: 22px;
    }
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
