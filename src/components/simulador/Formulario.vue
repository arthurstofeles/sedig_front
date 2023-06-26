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
              <v-subheader class="pl-0 mb-6"> Entrada de linha 230 kV </v-subheader>
              <v-slider
                persistent-hint
                v-model="formData.el_230"
                :max="10"
                :min="0"
                step="1"
                ticks="always"
                tick-size="4"
                color="#00D745"
                track-color="#E6E0E9"
                thumb-color="#00D745"
                thumb-label="always"
              >
                <template v-slot:thumb-label>
                  <v-icon dark class="caption">
                    {{ formData.el_230 }}
                  </v-icon>
                </template>
              </v-slider>

              <v-subheader class="pl-0 mb-6"> Conexão de transformador 230 kV </v-subheader>
              <v-slider
                persistent-hint
                v-model="formData.at"
                :max="5"
                :min="0"
                step="1"
                ticks="always"
                tick-size="4"
                color="#00D745"
                track-color="#E6E0E9"
                thumb-color="#00D745"
                thumb-label="always"
              >
                <template v-slot:thumb-label>
                  <v-icon dark class="caption">
                    {{ formData.at }}
                  </v-icon>
                </template>
              </v-slider>

              <v-subheader class="pl-0 mb-6">
                Autotransformador 230-138-13,8 kV, 40 MVA
              </v-subheader>
              <v-slider
                persistent-hint
                v-model="formData.at"
                :max="5"
                :min="0"
                step="1"
                ticks="always"
                tick-size="4"
                color="#00D745"
                track-color="#E6E0E9"
                thumb-color="#00D745"
                thumb-label="always"
              >
                <template v-slot:thumb-label>
                  <v-icon dark class="caption">
                    {{ formData.at }}
                  </v-icon>
                </template>
              </v-slider>

              <v-subheader class="pl-0 mb-6"> Entrada de linha 138 kV </v-subheader>
              <v-slider
                persistent-hint
                v-model="formData.el_138"
                :max="20"
                :min="0"
                step="1"
                ticks="always"
                tick-size="4"
                color="#00D745"
                track-color="#E6E0E9"
                thumb-color="#00D745"
                thumb-label="always"
              >
                <template v-slot:thumb-label>
                  <v-icon dark class="caption">
                    {{ formData.at }}
                  </v-icon>
                </template>
              </v-slider>

              <v-subheader class="pl-0 mb-6"> Conexão de transformador 138 kV </v-subheader>
              <v-slider
                persistent-hint
                v-model="formData.at"
                :max="5"
                :min="0"
                step="1"
                ticks="always"
                tick-size="4"
                color="#00D745"
                track-color="#E6E0E9"
                thumb-color="#00D745"
                thumb-label="always"
              >
                <template v-slot:thumb-label>
                  <v-icon dark class="caption">
                    {{ formData.at }}
                  </v-icon>
                </template>
              </v-slider>

              <v-switch
                v-model="formData.ib_230"
                label="Interligação de barras 230 kV, barra dupla 4 chaves"
                color="sedig_green"
              ></v-switch>

              <v-switch
                v-model="formData.ib_138"
                label="Interligação de barras 138 kV, barra principal e transferência."
                color="sedig_green"
              ></v-switch>

              <v-btn
                x-large
                rounded
                class="enviar sedig_green mt-6"
                color="sedig_blue--text"
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
      mig: 1,
      ib_230: 1,
      el_230: 2,
      ct_230: null,
      at: 2,
      ct_138: null,
      el_138: 1,
      ib_138: 1,
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
