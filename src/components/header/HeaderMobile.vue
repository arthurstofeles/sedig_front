<template>
  <div>
    <header class="header">
      <img src="@/assets/img/logo_branco.svg" alt="Logo" @click="goToRoute('Home')" />
      <v-icon @click.stop="drawer = !drawer" color="white">mdi-menu</v-icon>
    </header>
    <v-navigation-drawer v-model="drawer" absolute right temporary class="pa-2">
      <nav class="nav">
        <ul>
          <li v-for="(link, index) in links" :key="index">
            <v-list-group v-if="link.children.length" :value="true" color="fmq_black">
              <template v-slot:activator>
                <v-list-item-title>{{ link.title }}</v-list-item-title>
              </template>
              <v-list-item
                v-for="(child, index) in link.children"
                :key="index"
                link
                class="pl-6"
                :disabled="child.route === routeName"
              >
                <v-list-item-title @click="goToRoute(child.route)">{{
                  child.title
                }}</v-list-item-title>
              </v-list-item>
            </v-list-group>
            <v-list-item v-else @click="goToRoute(link.route)">{{ link.title }}</v-list-item>
          </li>
        </ul>
      </nav>
      <v-btn class="ma-2" color="fmq_black" outlined solo width="220px">
        Login
        <!-- <v-icon right> mdi-exit-to-app </v-icon> -->
      </v-btn>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "HeaderMobile",
  props: {
    links: {
      type: Array,
      required: true,
    },
  },
  data: () => ({
    drawer: false,
  }),
  methods: {
    goToRoute(route) {
      this.$router.push({ name: route });
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
  img {
    max-width: 100px;
  }
}
.nav {
  ul {
    list-style: none;
    padding: 0;
  }
}
</style>
