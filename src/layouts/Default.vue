<template>
  <div>
    <!-- <HeaderMobile :links="links" v-if="isMobile" />
    <HeaderDesktop :links="links" v-else /> -->
    <main class="pa-0 ma-0">
      <router-view />
    </main>
  </div>
</template>

<script>
// import HeaderMobile from "@/components/header/HeaderMobile.vue";
// import HeaderDesktop from "@/components/header/HeaderDesktop.vue";
export default {
  name: "DefaultLayout",
  // components: {
  //   HeaderMobile,
  //   HeaderDesktop,
  // },
  data: () => ({
    isMobile: false,
    links: [
      {
        title: "Item 1",
        route: "",
        children: [],
      },
      {
        title: "Item 2",
        route: "",
        children: [],
      },
      {
        title: "Item 3",
        route: "",
        children: [],
      },
      {
        title: "Item 4",
        route: "",
        children: [],
      },
    ],
  }),
  created() {
    window.addEventListener("resize", () => {
      this.isMobile = window.innerWidth <= 768;
    });
    this.isMobile = window.innerWidth <= 768;
  },
};
</script>
