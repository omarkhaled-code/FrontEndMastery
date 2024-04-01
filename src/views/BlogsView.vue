<template>
  <section>
    <SectionTitle title="Our Blog" paragraph="Latest From Our Blog" />
    <BlogSection />
  </section>
</template>
<script>
import SectionTitle from "@/components/SectionTitle.vue";
import BlogSection from "@/components/sections/BlogSection.vue";

export default {
  name: "BlogsView",
  components: {
    BlogSection,
    SectionTitle,
  },
};
</script>
<style></style>
