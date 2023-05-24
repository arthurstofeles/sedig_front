<template>
  <div class="formulario">
    <v-container>
      <v-row no-gutters>
        <v-col :sm="12" :md="6" class="mx-auto">
          <div class="rounded-xl pa-6 white">
            <h2>Nova Senha</h2>
            <p>Você solicitou troca de senha para acessar o SEDig. Cadastre a nova senha abaixo.</p>
            <v-form ref="form" v-model="valid" lazy-validation class="mt-6">
              <v-text-field
                v-model="formData.email"
                label="E-mail"
                required
                :rules="emailRules"
                color="#370ea3"
              ></v-text-field>
              <v-text-field
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                :type="showPassword ? 'text' : 'password'"
                v-model="formData.password"
                label="Senha"
                required
                :rules="genericRules"
                color="#370ea3"
                @click:append="showPassword = !showPassword"
              ></v-text-field>
              <v-btn
                x-large
                rounded
                class="enviar sedig_green--text mt-6"
                color="#370EA3"
                @click="send"
                block
                >Cadastrar nova senha</v-btn
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
  name: "FormularioNovaSenha",
  data: () => ({
    formData: {
      email: "",
      senha: "",
    },
    showPassword: false,
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
        console.log(this.formData);
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
    color: #370ea3;
    @media screen and (max-width: 768px) {
      font-size: 12px;
    }
    span {
      text-decoration-line: underline;
      color: #002b6b;
    }
  }
}
</style>
