<template>
  <footer>
    <v-container>
      <v-row no-gutters>
        <div class="links">
          <div class="left">
            <h4>Fale com a gente</h4>
            <a>(61) 99222-6646</a>
            <br />
            <a href="mailto:subestacoesdigitais@gmail.com">subestacoesdigitais@gmail.com</a>
          </div>
          <!-- <div class="right">
            <h4>Transparência</h4>
            <a href="">Termos de uso (política de privacidade)</a>
            <br />
            <a href="">LGPD</a>
          </div> -->
          <!-- <div class="social">
            <v-btn icon>
              <v-icon color="#ffc30d" large> mdi-linkedin </v-icon>
            </v-btn>
            <v-btn icon class="mx-4">
              <v-icon color="#ffc30d" large> mdi-instagram </v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon color="#ffc30d" large> mdi-facebook </v-icon>
            </v-btn>
          </div> -->
        </div>
      </v-row>
    </v-container>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped>
footer {
  background: #370ea3;
  color: #ffc30d;
  padding: 48px 0px;
  .links {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 100%;
    @media screen and (max-width: 768px) {
      grid-template-columns: 1fr 1fr;
    }
    h3 {
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
    }
    a {
      font-weight: 400;
      font-size: 12px;
      line-height: 15px;
      color: #ffc30d;
    }
    .right {
      @media screen and (max-width: 768px) {
        text-align: right;
      }
    }
  }
  .social {
    @media screen and (max-width: 768px) {
      grid-column: 2;
      margin-top: 16px;
      justify-self: end;
    }
  }
}
</style>
