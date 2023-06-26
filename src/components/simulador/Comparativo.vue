<template>
  <div class="comparativo">
    <v-container>
      <h2 class="mt-4">Resultado Simulação Comparativa</h2>
      <div class="rounded-xl pa-6 white">
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">Items¹</th>
                <th class="text-left">Quantidade</th>
                <th class="text-left">Tradicional (R$)</th>
                <th class="text-left">Digital (R$)</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in results" :key="item.name">
                <td class="font-weight-medium sedig_green--text">{{ item.name }}</td>
                <td>{{ item.quantidade }}</td>
                <td>{{ item.tradicional }}</td>
                <td class="font-weight-black sedig_blue--text subtitle-1">{{ item.digital }}</td>
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
      <v-btn
        x-large
        rounded
        class="enviar sedig_green my-6 d-flex mx-auto"
        color="sedig_blue--text"
        to="/pedir-orcamento"
        >Enviar para orçamento</v-btn
      >
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Comparativo",
  data: () => ({
    results: [
      {
        name: "MIG²",
        quantidade: "1",
        tradicional: "7.970.000,00",
        digital: "7.700.000,00",
      },
      {
        name: "IB 230",
        quantidade: "1",
        tradicional: "4.580.000,00",
        digital: "4.350.000,00",
      },
      {
        name: "EL 230",
        quantidade: "2",
        tradicional: "6.320.000,00",
        digital: "6.020.000,00",
      },
      {
        name: "CT 230",
        quantidade: "2",
        tradicional: "6.320.000,00",
        digital: "6.020.000,00",
      },
      {
        name: "AT",
        quantidade: "2",
        tradicional: "8.500.000,00",
        digital: "8.500.000,00",
      },
      {
        name: "CT 138",
        quantidade: "2",
        tradicional: "4.030.000,00",
        digital: "3.810.000,00",
      },
      {
        name: "EL 138",
        quantidade: "1",
        tradicional: "4.230.000,00",
        digital: "4.010.000,00",
      },
      {
        name: "IB 138",
        quantidade: "1",
        tradicional: "3.120.000,00",
        digital: "2.940.000,00",
      },
      {
        name: "Total",
        quantidade: "*",
        tradicional: "69.400.000,00",
        digital: "66.900.000,00",
      },
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
  tbody > tr:nth-child(9) {
    background-color: #f2f2f2;
  }
}
</style>
