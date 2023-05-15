<template>
  <header class="header">
    <nav>
      <img src="@/assets/img/logo.svg" alt="Logo" @click="goToRoute('Home')" />
      <ul>
        <li v-for="(link, index) in links" :key="index">
          <v-menu v-if="link.children.length" offset-y :open-on-hover="true">
            <template v-slot:activator="{ on, attrs }">
              <p v-bind="attrs" v-on="on">{{ link.title }} <v-icon>mdi-chevron-down</v-icon></p>
            </template>
            <v-list>
              <v-list-item
                v-for="(child, index) in link.children"
                :key="index"
                class="sub-link"
                @click="goToRoute(child.route)"
                :disabled="child.route === routeName"
              >
                <v-list-item-title>{{ child.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
          <p v-else @click="goToRoute(link.route)">{{ link.title }}</p>
        </li>
      </ul>
    </nav>
    <v-btn color="white" outlined solo @click="logout">
      Login
      <!-- <v-icon right> mdi-exit-to-app </v-icon> -->
    </v-btn>
  </header>
</template>

<script>
export default {
  name: "HeaderDesktop",
  props: {
    links: {
      type: Array,
      required: true,
    },
  },
  methods: {
    goToRoute(route) {
      this.$router.push({ name: route });
    },
    logout() {
      this.$router.push("/logincheck");
    },
  },
  computed: {
    routeName() {
      return this.$route.name;
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #343a40;
  padding: 16px;
  nav {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    img {
      max-width: 100px;
    }
    ul {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      list-style: none;
      gap: 1rem;
      p {
        margin: 0;
        color: #fff;
        i {
          color: #fff;
        }
        &:hover {
          color: rgba(255, 255, 255, 0.75);
          cursor: pointer;
          i {
            color: rgba(255, 255, 255, 0.5) !important;
          }
        }
      }
    }
  }
}
.sub-link:hover {
  cursor: pointer;
  color: rgba(0, 0, 0, 0.5) !important;
}
</style>
