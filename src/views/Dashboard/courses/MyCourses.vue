<template>
  <SideNav />
  <HeaderNav />
  <div class="dashboard-container" v-if="User">
    <section>
      <SectionTitle title="COURSES" paragraph="The courses you purchased" />
      <div class="courses white">
        <div class="" v-for="course in courses" :key="course.id">
          <CourseContainer
            :code="course.id"
            :image="course.image"
            :price="course.price"
            :student="students"
            time="01h 30m"
            :title="course.title"
          />
        </div>
      </div>
      <router-link to="/dashboard/courses" class="btn">All Courses</router-link>
      <SectionTitle
        title="COURSES"
        paragraph="Your own courses"
        v-if="Access != 'student'"
      />
      <div class="courses white" v-if="Access != 'student'">
        <div class="" v-for="course in course_created" :key="course.id">
          <CourseContainer
            :code="course.id"
            :image="course.image"
            :price="course.price"
            :student="students"
            time="01h 30m"
            :title="course.title"
          />
          <div v-if="User">
            <div class="actions">
              <router-link
                :to="{
                  path: '/dashboard/course/edit/' + course.id,
                  state: { id: course.id },
                }"
                ><fontIcon :icon="['fas', 'pen-to-square']"
              /></router-link>
              <button @click="deleteCourse(course.id)">
                <fontIcon :icon="['fas', 'trash']" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import SideNav from "@/components/dashboard/SideNav.vue";
import HeaderNav from "@/components/dashboard/header.vue";
import CourseContainer from "@/components/sections/container/CourseContainer.vue";
import SectionTitle from "@/components/SectionTitle.vue";
import { mapGetters } from "vuex";

import axios from "axios";
export default {
  name: "MyCourses",
  data() {
    return {
      courses: "",
      course_created: "",
    };
  },
  components: {
    SideNav,
    HeaderNav,
    CourseContainer,
    SectionTitle,
  },
  computed: {
    ...mapGetters(["User", "Access"]),
  },
  async created() {
    await axios.get(`my-courses/${this.User.id}`).then((response) => {
      this.courses = response.data.courses;
      this.course_created = response.data.course_created;
    });
  },
  methods: {
    async deleteCourse(code) {
      await axios.post("delete-course", {
        id: code,
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.courses {
  margin: 10px auto;
}
.course,
.actions {
  background-color: white;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.22);
}
.btn {
  text-decoration: none;

  display: inline-block;
  margin: 40px auto 30px;
}
</style>
