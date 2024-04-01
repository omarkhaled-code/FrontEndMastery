<template>
  <section>
    <SectionTitle title="Teachers" paragraph="Meet Our Teachers" />
    <TeacherSection />
  </section>
</template>
<script>
import SectionTitle from "@/components/SectionTitle.vue";
import TeacherSection from "@/components/sections/TeacherSection.vue";
export default {
  name: "TeachersView",
  components: {
    SectionTitle,
    TeacherSection,
  },
};
</script>
<style></style>
