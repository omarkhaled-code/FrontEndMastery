<template>
  <div>
    <NavBar />
    <section>
      <SectionTitle title="Our Blog" paragraph="From Our Blog" />
      <BlogSection type="all" />
    </section>
    <AppFooter />
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
import BlogSection from "@/components/sections/BlogSection.vue";
import AppFooter from "@/components/AppFooter.vue";
import SectionTitle from "@/components/SectionTitle.vue";
export default {
  name: "BlogsView",
  components: {
    NavBar,
    BlogSection,
    AppFooter,
    SectionTitle,
  },
};
</script>
<style>
section {
  text-align: center;
}
</style>
