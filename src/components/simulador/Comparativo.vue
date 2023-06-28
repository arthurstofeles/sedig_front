<template>
  <div class="comparativo" id="resultado">
    <v-container>
      <h2 class="mt-4">Resultado Simulação Comparativa</h2>
      <div class="rounded-xl pa-6 white">
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-center">Items¹</th>
                <!-- <th class="text-left">Quantidade</th> -->
                <th class="text-center">Tradicional (R$)</th>
                <th class="text-center">Digital (R$)</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in resultado" :key="item.name">
                <td class="font-weight-medium sedig_green--text text-center itens">
                  {{ item.item }}
                </td>
                <!-- <td>{{ item.quantity }}</td> -->
                <td class="text-center tradicional">{{ formatarMoeda(item.price_tradicional) }}</td>
                <td class="font-weight-black sedig_blue--text subtitle-1 text-center digital">
                  {{ formatarMoeda(item.price_digital) }}
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        <p class="caption text-center mb-1 mt-6">
          ¹ Os módulos de infraestrutura de manobra estão considerados junto com os módulos de
          conexão.
        </p>
        <p class="caption text-center">
          ² O MIG contempla as parcelas referentes aos pátios 230 e 138 kV.
        </p>
      </div>
      <div class="d-flex">
        <v-btn
          x-large
          rounded
          class="enviar sedig_green my-6 mx-auto px-10"
          color="sedig_blue--text"
          to="/pedir-orcamento"
          >Enviar para orçamento</v-btn
        >
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Comparativo",
  props: {
    resultado: {
      type: Array,
    },
  },
  methods: {
    formatarMoeda(numero) {
      const formato = {
        style: "currency",
        currency: "BRL",
      };
      return numero.toLocaleString("pt-BR", formato);
    },
  },
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
  tbody > tr:nth-child(9) {
    background-color: #f2f2f2;
  }
}
@media screen and (max-width: 600px) {
  .v-data-table > .v-data-table__wrapper > table > thead > tr > th,
  .v-data-table > .v-data-table__wrapper > table > tbody > tr > td {
    padding: 0px;
  }
  .itens,
  .tradicional {
    font-size: 12px !important;
  }
  .digital {
    font-size: 14px !important;
  }
}
</style>
