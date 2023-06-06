<template>
  <div class="formulario">
    <v-container>
      <v-row no-gutters>
        <h2>Simulador Comparativo</h2>
        <p>
          Phasellus rhoncus est nunc, in laoreet nulla egestas ut. Praesent convallis sodales dui,
          nec ultrices risus interdum id. Aliquam placerat ex at lorem semper fringilla.
        </p>
        <v-col :sm="12" :md="12" class="mx-auto">
          <div class="rounded-xl pa-6 white">
            <v-form ref="form" v-model="valid" lazy-validation class="mt-6">
              <div class="d-flex justify-space-between">
                <span class="caption">Quantidade de Vãos</span>
                <span class="caption">10.234m2</span>
              </div>
              <v-slider
                hint="100m2"
                persistent-hint
                v-model="formData.params"
                :max="2000"
                :min="2"
                step="200"
                ticks="always"
                tick-size="2"
                color="#00D745"
                track-color="#E6E0E9"
                thumb-color="#00D745"
              >
                <template v-slot:thumb-label>
                  <v-icon dark class="caption">
                    {{ formData.params }}
                  </v-icon>
                </template>
              </v-slider>
              <v-btn
                x-large
                rounded
                class="enviar sedig_green--text mt-6"
                color="#370EA3"
                @click="send"
                block
                :loading="loading"
                >Comparar</v-btn
              >
            </v-form>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "FormularioSimulador",
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    formData: {
      params: "",
    },
    valid: false,
    emailRules: [
      (v) => !!v || "Esse campo é obrigatório",
      (v) => /.+@.+\..+/.test(v) || "Ensira um e-mail valido",
    ],
    genericRules: [(v) => !!v || "Esse campo é obrigatório"],
  }),
  methods: {
    validate() {
      this.$refs.form.validate();
    },
    send() {
      if (this.formValid) {
        this.$emit("login", this.formData);
      }
    },
  },
  computed: {
    formValid() {
      return this.$refs.form.validate();
    },
  },
};
</script>

<style lang="scss" scoped>
.formulario {
  h2 {
    color: #fff;
    font-weight: 500;
    font-size: 48px;
    line-height: 1.2;
    margin-bottom: 20px;
    @media screen and (max-width: 768px) {
      font-size: 18px;
      line-height: 22px;
    }
  }
  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 1.4;
    color: #fff;
    @media screen and (max-width: 768px) {
      font-size: 12px;
    }
    a {
      text-decoration-line: underline;
      color: #002b6b;
    }
  }
}
</style>
