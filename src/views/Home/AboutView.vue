<template>
  <div>
    <NavBar />
    <AboutSection more="true" />

    <AppFooter />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import AboutSection from "@/components/sections/AboutSection.vue";
import AppFooter from "@/components/AppFooter.vue";
export default {
  name: "AboutView",
  components: {
    NavBar,
    AboutSection,
    AppFooter,
  },
};
</script>
