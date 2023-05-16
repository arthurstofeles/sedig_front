<template>
  <div class="quem-somos">
    <v-container>
      <v-row no-gutters>
        <v-col cols="12" class="mb-10">
          <h2>Quem somos</h2>
          <p>
            A SEDIG surgiu em 2021 durante a II Olimpíada Nacional de Inovação das Empresas
            Eletrobras para conectar os grandes desafios das empresas às soluções inovadoras
            utilizando o que o grupo tem de melhor: seus mais de 10 mil colaboradores.
          </p>
        </v-col>
        <div class="colunas">
          <div class="perfil">
            <img
              src="@/assets/img/pexels-linkedin-sales-navigator-2182970.jpg"
              alt="Fulano de Tal"
            />
            <div>
              <h3>Fulano de Tal</h3>
              <p>Função Profissional da pessoal</p>
            </div>
          </div>
          <div class="perfil left">
            <img
              src="@/assets/img/pexels-linkedin-sales-navigator-2182970.jpg"
              alt="Fulano de Tal"
            />
            <div>
              <h3>Fulano de Tal</h3>
              <p>Função Profissional da pessoal</p>
            </div>
          </div>
          <div class="perfil">
            <img
              src="@/assets/img/pexels-linkedin-sales-navigator-2182970.jpg"
              alt="Fulano de Tal"
            />
            <div>
              <h3>Fulano de Tal</h3>
              <p>Função Profissional da pessoal</p>
            </div>
          </div>
          <div class="perfil left">
            <img
              src="@/assets/img/pexels-linkedin-sales-navigator-2182970.jpg"
              alt="Fulano de Tal"
            />
            <div>
              <h3>Fulano de Tal</h3>
              <p>Função Profissional da pessoal</p>
            </div>
          </div>
        </div>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "QuemSomos",
};
</script>

<style lang="scss" scoped>
.quem-somos {
  padding: 64px 0;
  background: #5628d2;
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
    font-weight: 400;
    font-size: 16px;
    line-height: 1.4;
    color: #ffc30d;
    @media screen and (max-width: 768px) {
      font-size: 12px;
    }
  }
  .colunas {
    display: flex;
    justify-content: space-between;
    width: 100%;
    @media screen and (max-width: 768px) {
      flex-direction: column;
    }
    .perfil {
      display: flex;
      align-items: center;
      flex-direction: column;
      text-align: center;
      gap: 16px;
      @media screen and (max-width: 768px) {
        flex-direction: row;
        text-align: left;
      }
      img {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        object-fit: cover;
        margin-bottom: 16px;
        @media screen and (max-width: 768px) {
          width: 80px;
          height: 80px;
        }
      }
      div {
        h3 {
          color: #ffc30d;
          font-weight: 500;
          font-size: 20px;
          line-height: 1.4;
          margin-bottom: 8px;
          @media screen and (max-width: 768px) {
            font-size: 14px;
            margin-bottom: 4px;
          }
        }
        p {
          font-style: italic;
          font-weight: 300;
          font-size: 16px;
          line-height: 1.4;
          @media screen and (max-width: 768px) {
            font-size: 12px;
          }
        }
      }
    }
    .left {
      @media screen and (max-width: 768px) {
        flex-direction: row-reverse;
        text-align: right;
      }
    }
  }
}
</style>
