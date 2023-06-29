<template>
  <div class="comparativo">
    <v-container>
      <v-row no-gutters>
        <v-col :md="8" :sm="12" class="mb-6">
          <h2>
            Comparativo<br v-if="isMobile" />
            SE Digital x SE Convencional*
          </h2>
          <p>
            Utilizando valores reais de proposta vencedora de leilão ANEEL, e aplicando as reduções
            quantitativas calculadas sobre o projeto básico, verificamos uma redução significativa
            total de 3,6%, o que representa uma economia de aproximadamente R$ 2.500.000,00.
          </p>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" class="digital">
          <h3>Subestação Digital</h3>
        </v-col>
        <v-col cols="6" class="convencional">
          <h3>Subestação Convencional</h3>
        </v-col>
      </v-row>
      <div class="d-flex justify-center divisor">
        <p class="text-uppercase white--text py-2 px-8 font-weight-medium sedig_yellow">Total</p>
      </div>
      <v-row no-gutters>
        <v-col cols="6" class="digital">
          <ul>
            <li class="d-flex align-start mb-4">
              <v-icon class="mr-2 mt-2" color="#ffc30d"> mdi-check-circle </v-icon>
              <div>
                <span>Custo (Total)</span>
                <br />
                <span class="font-weight-black">R$ 66.900.000,00</span>
                <br />
                <p class="explication">
                  Redução de 3,6% do total , o que representa uma economia de aproximadamente R$
                  2.500.000,00.
                </p>
              </div>
            </li>
          </ul>
        </v-col>
        <v-col cols="6" class="convencional">
          <ul>
            <li class="d-flex align-start mb-4">
              <v-icon class="mr-2 mt-2" color="#ffffff"> mdi-close-circle </v-icon>
              <div>
                <span>Custo (Total)</span>
                <br />
                <span class="font-weight-black"> 69.400.000,00 BRL</span>
              </div>
            </li>
          </ul>
        </v-col>
      </v-row>
      <div class="d-flex justify-center divisor">
        <p class="text-uppercase white--text py-2 px-8 font-weight-medium sedig_yellow">
          Equipamentos
        </p>
      </div>
      <v-row no-gutters>
        <v-col cols="6" class="digital">
          <ul>
            <li class="d-flex align-start mb-4" v-for="(item, index) in digitalList" :key="index">
              <v-icon class="mr-2 mt-2" color="#ffc30d"> {{ item.icon }} </v-icon>
              <span>{{ item.name }}</span>
            </li>
          </ul>
        </v-col>
        <v-col cols="6" class="convencional">
          <ul>
            <li
              class="d-flex align-start mb-4"
              v-for="(item, index) in convencionalList"
              :key="index"
            >
              <v-icon class="mr-2 mt-2" color="#ffffff"> {{ item.icon }} </v-icon>
              <span>{{ item.name }}</span>
            </li>
          </ul>
        </v-col>
      </v-row>
      <div class="d-flex justify-center divisor">
        <p class="text-uppercase white--text py-2 px-8 font-weight-medium sedig_yellow">+ info</p>
      </div>
      <v-row no-gutters>
        <p class="sedig_yellow--text body-1 body-1">
          Redução de 2,9% (~ R$ 2.000.000,00) sobre o total do empreendimento com a redução de
          aproximadamente
          <span class="font-weight-bold">38% do fornecimento de cabos de cobre.</span>
        </p>
        <p class="sedig_yellow--text body-1">
          Redução de 1,4% (~ R$ 980.000,00) sobre o total do empreendimento após uma redução de
          <span class="font-weight-bold">
            33% dos serviços de lançamento e montagem dos cabos de cobre.</span
          >
        </p>
        <p class="sedig_yellow--text body-1">
          Redução de 0,5% (~ R$ 315.000,00) do total pela economia de mais de
          <span class="font-weight-bold">14% nas obras civis das casas de comando e relés.</span>
        </p>
        <p class="sedig_yellow--text body-1">
          Redução de aproximadamente 0,3% (~ R$ 170.000,00) sobre o total do empreendimento com a
          redução de
          <span class="font-weight-bold">4% do tempo de administração local</span>e canteiro em
          consequência da redução do tempo de comissionamento.
        </p>
        <p class="sedig_yellow--text body-1">
          Aumento de 1,2% (~ R$ 820.000,00) do total pelo aumento dos gastos com o SPCS em 30% .
        </p>
        <p class="sedig_yellow--text body-1">
          Aumento de 0,1% (~ R$ 75.000,00) do total pelo aumento em 27% dos serviços de lançamento e
          montagem de eletrodutos para passagem de cabos dielétricos.
        </p>
        <p class="font-italic">
          * para as comparações realizadas foi considerada uma subestação elevadora 230/138 kV que
          consiste em: 1 x módulo de infraestrutura geral completo; 2 x entrada de linha 230 kV; 2 x
          conexão de transformador 230 kV; 2 x autotransformador 230-138-13,8 kV, 40 MVA; 1 x
          interligação de barras 230 kV, barra dupla 4 chaves; 1 x entrada de linha 138 kV; 2 x
          conexão de transformador 138 kV; 1 x interligação de barras 138 kV, barra principal e
          transferência.
        </p>
        <p class="font-italic">
          ** os módulos de infraestrutura de manobra estão considerados junto com os módulos de
          conexão.
        </p>
        <p class="font-italic">
          *** o MIG contempla as parcelas referentes aos pátios 230 e 138 kV.
        </p>
      </v-row>
      <v-row>
        <v-btn
          x-large
          rounded
          class="call-to-action sedig_blue--text mt-10 mx-auto"
          color="#FFC30D"
          to="/criar-conta"
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
      {
        name: "MIG, Módulo de Infraestrutura Geral: R$ 7.700.000,00",
        icon: "mdi-check-circle",
      },
      {
        name: "IB230, Módulo de Conexão: R$ 4.350.000,00",
        icon: "mdi-check-circle",
      },
      {
        name: "EL230, Módulo de Conexão: R$ 6.020.000,00",
        icon: "mdi-check-circle",
      },
      {
        name: "CT230, Módulo de Conexão: R$ 5.620.000,00",
        icon: "mdi-check-circle",
      },
      {
        name: "AT, Módulo de Equipamento: R$ 8.500.000,00",
        icon: "mdi-check-circle",
      },
      {
        name: "IB138, Módulo de Conexão: R$ 2.940.000,00",
        icon: "mdi-check-circle",
      },
      {
        name: "EL138, Módulo de Conexão: R$ 4.010.000,00",
        icon: "mdi-check-circle",
      },
      {
        name: "CT138, Módulo de Conexão:R$ 3.810.000,00",
        icon: "mdi-check-circle",
      },
    ],
    convencionalList: [
      {
        name: "MIG, Módulo de Infraestrutura Geral: R$ 7.700.000,00",
        icon: "mdi-close-circle",
      },
      {
        name: "IB230, Módulo de Conexão: R$ 4.350.000,00",
        icon: "mdi-close-circle",
      },
      {
        name: "EL230, Módulo de Conexão: R$ 6.020.000,00",
        icon: "mdi-close-circle",
      },
      {
        name: "CT230, Módulo de Conexão: R$ 5.620.000,00",
        icon: "mdi-close-circle",
      },
      {
        name: "AT, Módulo de Equipamento: R$ 8.500.000,00",
        icon: "mdi-close-circle",
      },
      {
        name: "IB138, Módulo de Conexão: R$ 2.940.000,00",
        icon: "mdi-close-circle",
      },
      {
        name: "EL138, Módulo de Conexão: R$ 4.010.000,00",
        icon: "mdi-close-circle",
      },
      {
        name: "CT138, Módulo de Conexão:R$ 3.810.000,00",
        icon: "mdi-close-circle",
      },
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
    max-height: 300px;
    height: 100%;
    background-image: url("../../assets/img/wave-bottom.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top center;
    position: absolute;
    bottom: -30px;
    left: 0;
    z-index: -1;
    transform: rotate(180deg);
    @media screen and (min-width: 600px) {
      bottom: -48px;
    }
    @media screen and (min-width: 768px) {
      bottom: -50px;
      max-height: 300px;
    }
    @media screen and (min-width: 1025px) {
      bottom: -180px;
      max-height: 300px;
    }
    @media screen and (min-width: 1540px) {
      bottom: -248px;
      max-height: 400px;
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
    font-weight: 300;
    font-size: 12px;
    line-height: 1.3;
    color: #ffffff;
  }
  .digital {
    // border: 2px solid #ffc30d;
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
      // border-bottom: 2px solid #ffc30d;
      margin-bottom: 14px;
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
    // border: 2px solid #ffffff;
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
      // border-bottom: 2px solid #ffffff;
      margin-bottom: 14px;
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
  .explication {
    font-size: 11px;
    line-height: 1.4;
    margin-top: 10px;
    color: #ffc30d;
  }
  .divisor {
    position: relative;
    z-index: 9;
    &:after {
      content: " ";
      width: 50%;
      height: 2px;
      background: #ffc30d;
      position: absolute;
      top: 0;
      left: 0;
    }
    &:before {
      content: " ";
      width: 50%;
      height: 2px;
      background: #fff;
      position: absolute;
      top: 0;
      right: 0;
      z-index: -1;
    }
  }
}
</style>
