<template>
  <section>
    <SectionTitle title="Teachers" paragraph="Meet Our Teachers" />

    <div class="teachers">
      <div v-for="teacher in teachers" :key="teacher.id">
        <TeacherContainer
          :code="teacher.id"
          :image="teacher.image"
          :instagram="teacher.instagram"
          :facebook="teacher.facebook"
          :twitter="teacher.twitter"
          :name="teacher.name"
          :profession="teacher.profession"
        />
      </div>
    </div>
    <div v-if="len == 0">
      <h2>No Teacher Yet</h2>
    </div>
  </section>
</template>
<script>
import axios from "axios";
import SectionTitle from "@/components/SectionTitle.vue";
import TeacherContainer from "@/components/sections/container/TeacherContainer.vue";

export default {
  name: "TeachersSection",
  components: {
    SectionTitle,
    TeacherContainer,
  },
  data() {
    return {
      teachers: "",
      len: 0,
    };
  },

  props: ["type"],
  async created() {
    if (this.type == "all") {
      await axios.get("all-teacher").then((response) => {
        this.teachers = response.data.teachers;
        this.len = response.data.teachers.length;
      });
    } else if (this.type == "latest") {
      await axios.get("latest-teacher").then((response) => {
        this.teachers = response.data.latestTeacher;
        this.len = response.data.latestTeacher.length;
      });
    }
  },
};
</script>
