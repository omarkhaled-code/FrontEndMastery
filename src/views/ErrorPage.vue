<template>
  <NavBar />
  <section>
    <img src="@/assets/error.jpg" alt="error" />
  </section>
  <AppFooter />
</template>
<script>
import AppFooter from "@/components/AppFooter.vue";
import NavBar from "@/components/NavBar.vue";

export default {
  name: "ErrorPage",
  components: {
    AppFooter,
    NavBar,
  },
};
</script>
<style lang="scss" scoped>
section {
  padding: 0;
  margin: 0 auto;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
