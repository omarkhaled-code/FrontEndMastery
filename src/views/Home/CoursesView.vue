<template>
  <div>
    <NavBar />
    <section>
      <SectionTitle title="Subjects" paragraph="Explore Top Subjects" />
      <CategorySection type="all" />
    </section>
    <section>
      <SectionTitle title="COURSES" paragraph="Our Popular Courses" />
      <CourseSection type="all" />
    </section>
    <AppFooter />
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
import CategorySection from "@/components/sections/CategorySection.vue";
import SectionTitle from "@/components/SectionTitle.vue";
import CourseSection from "@/components/sections/CourseSection.vue";
import AppFooter from "@/components/AppFooter.vue";

export default {
  name: "CoursesView",
  components: {
    NavBar,
    CategorySection,
    SectionTitle,
    CourseSection,
    AppFooter,
  },
};
</script>
<style lang=""></style>
