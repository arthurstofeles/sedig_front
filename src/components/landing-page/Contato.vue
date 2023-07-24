<template>
  <div class="contato">
    <v-container>
      <v-row no-gutters>
        <v-col cols="12"
          ><h2>Contato</h2>
          <p>
            Gostaria de saber mais detalhes sobre os benefícios da subestação digital, ou quem sabe
            fazer um orçamento com a gente?
          </p>
          <!-- <p>
            Entre em contato com a gente através do e-mail contato@sedig.com.br ou no telefone (xx)
            xxxxx-xxxx (WhatsApp). Caso prefira, coloque seu e-mail ou telefone (com WhatsApp)
            abaixo, que entraremos em contato com você.
          </p> -->
          <v-form ref="form" v-model="valid" lazy-validation class="mt-6">
            <v-text-field
              v-model="formData.email"
              label="E-mail"
              required
              :rules="emailRules"
              color="#370ea3"
            ></v-text-field>
            <v-text-field
              v-model="formData.phone"
              label="Telefone (com WhatsApp)"
              required
              :rules="genericRules"
              color="#370ea3"
              v-mask="'(##) #####-####'"
            ></v-text-field>
          </v-form>
        </v-col>
        <v-btn
          x-large
          rounded
          class="enviar sedig_blue--text mt-6"
          color="#370EA3"
          outlined
          @click="send"
          :loading="loading"
          >Solicitar Contato</v-btn
        >
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Contato",
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    formData: {
      phone: "",
      email: "",
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
        this.$emit("contato", this.formData);
      }
    },
    reset() {
      this.formData.phone = "";
      this.formData.email = "";
      this.$refs.form.reset();
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
.contato {
  background: #fff;
  padding-top: 240px;
  padding-bottom: 64px;
  .row {
    position: relative;
    padding-bottom: 64px;
  }
  @media screen and (max-width: 768px) {
    padding-top: 80px;
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
  .enviar {
    position: absolute;
    right: 0;
    bottom: 0;
  }
}
</style>
