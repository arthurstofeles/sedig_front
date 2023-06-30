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
            <img src="@/assets/img/alessandro.png" alt="Chief Technology Officer (CTO)" />
            <div>
              <h3>
                <a
                  href="https://www.linkedin.com/in/alessandro-cleber-rodrigues-6a36ab60"
                  target="_blank"
                  >Alessandro Cleber Rodrigues</a
                >
              </h3>
              <p>Chief Technology Officer (CTO)</p>
            </div>
          </div>
          <div class="perfil left">
            <img src="@/assets/img/daniel.png" alt="Daniel Alves Lara Fernandes" />
            <div>
              <h3>
                <a href="https://www.linkedin.com/in/fernandesdanielalves/" target="_blank"
                  >Daniel Alves Lara Fernandes</a
                >
              </h3>
              <p>Chief Operating Officer (COO)</p>
            </div>
          </div>
          <div class="perfil">
            <img src="@/assets/img/fausto.png" alt="Fausto Pereira Neto" />
            <div>
              <h3>
                <a href="https://www.linkedin.com/in/fausto-pereira-neto-1a08b888/" target="_blank"
                  >Fausto Pereira Neto</a
                >
              </h3>
              <p>Chief Financial Officer (CFO)</p>
            </div>
          </div>
          <div class="perfil left">
            <img src="@/assets/img/jesus.png" alt="Jesus Carlos da Silva" />
            <div>
              <h3>
                <a
                  href="https://www.linkedin.com/in/jesus-silva-b3b49b71?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bmg6bGkZbQ8GuhSx2LdV87Q%3D%3D"
                  target="_blank"
                  >Jesus Carlos da Silva</a
                >
              </h3>
              <p>Chief Marketing Officer (CMO)</p>
            </div>
          </div>
          <div class="perfil">
            <img src="@/assets/img/roberto.png" alt="Roberto Paulo da SIlva Pinto Junior" />
            <div>
              <h3>Roberto Paulo da SIlva Pinto Junior</h3>
              <p>Managing Director (MD)</p>
            </div>
          </div>
          <div class="perfil left">
            <img src="@/assets/img/thiago.png" alt="Thiago Pereira Soares" />
            <div>
              <h3>
                <a href="https://www.linkedin.com/in/thiago-soares-b5725a224" target="_blank"
                  >Thiago Pereira Soares</a
                >
              </h3>
              <p>Chief Executive Officer (CEO)</p>
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
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: space-between;
    gap: 32px;
    width: 100%;
    @media screen and (max-width: 768px) {
      display: flex;
      flex-direction: column;
      gap: 0px;
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
          font-size: 18px;
          line-height: 1.4;
          margin-bottom: 8px;
          @media screen and (max-width: 768px) {
            font-size: 14px;
            margin-bottom: 4px;
          }
          a {
            color: inherit;
            text-decoration: none;
          }
        }
        p {
          font-style: italic;
          font-weight: 300;
          font-size: 14px;
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
