<template>
  <section>
    <SectionTitle title="Subjects" paragraph="Explore Top Subjects" />
    <CategorySection />
  </section>

  <section>
    <SectionTitle title="COURSES" paragraph="Our Popular Courses" />
    <CourseSection />
  </section>
</template>
<script>
import CategorySection from "@/components/sections/CategorySection.vue";
import CourseSection from "@/components/sections/CourseSection.vue";
import SectionTitle from "@/components/SectionTitle.vue";
export default {
  name: "CoursesView",
  components: {
    CourseSection,
    CategorySection,
    SectionTitle,
  },
};
</script>
<style lang=""></style>
