<template>
  <div class="home">
    <AboutSection />
    <CategorySection />
    <CourseSection />
    <TeacherSection />
    <BlogSection />
  </div>
</template>

<script>
// @ is an alias to /src

import AboutSection from "@/components/sections/AboutSection.vue";
import CategorySection from "@/components/sections/CategorySection.vue";
import CourseSection from "@/components/sections/CourseSection.vue";
import TeacherSection from "@/components/sections/TeacherSection.vue";
import BlogSection from "@/components/sections/BlogSection.vue";

export default {
  name: "HomeView",
  components: {
    AboutSection,
    CategorySection,
    CourseSection,
    TeacherSection,
    BlogSection,
  },
};
</script>

<style lang="scss">
section {
  width: 85%;
  margin: auto;
  padding: 70px 10px;
}
</style>
