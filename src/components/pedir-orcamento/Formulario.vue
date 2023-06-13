<template>
  <div class="formulario">
    <v-container>
      <v-row no-gutters class="rounded-xl pa-6 white">
        <v-col cols="12"
          ><h2>Nós vamos até você!</h2>
          <p>
            Nós iremos até você, de acordo com a sua preferência, para continuarmos o trablaho e
            montarmos o orçamento preciso da sua implementação ou adequação, e esperamos que possa
            desfrutar em breve de todas as vantagens das suibestações digitais.
          </p>
          <v-form ref="form" v-model="valid" lazy-validation class="mt-6">
            <v-text-field
              v-model="formData.nome"
              label="Nome"
              required
              :rules="genericRules"
              color="#370ea3"
            ></v-text-field>
            <v-text-field
              v-model="formData.email"
              label="E-mail"
              required
              :rules="emailRules"
              color="#370ea3"
            ></v-text-field>
            <v-text-field
              v-model="formData.numero"
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
          class="enviar sedig_green--text my-6 d-flex mx-auto"
          color="sedig_blue"
          @click="send"
          block
          :loading="loading"
          >Solicitar orçamento</v-btn
        >
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "FormularioOrcamento",
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    formData: {
      nome: "",
      numero: "",
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
}
</style>
