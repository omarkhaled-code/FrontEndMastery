<template>
  <div>
    <NavBar />
    <TeacherSection type="all" />
    <AppFooter />
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
import TeacherSection from "@/components/sections/TeacherSection.vue";
import AppFooter from "@/components/AppFooter.vue";
export default {
  name: "TeachersView",
  components: {
    TeacherSection,
    NavBar,
    AppFooter,
  },
};
</script>
<style></style>
