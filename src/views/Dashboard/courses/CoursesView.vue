<template>
  <SideNav />
  <HeaderNav />
  <div class="dashboard-container">
    <section>
      <SectionTitle title="COURSES" paragraph="Our Popular Courses" />
      <CourseSection type="all" class="white" />
      <router-link
        to="/dashboard/courses/create"
        class="btn create"
        v-if="Access != 'student'"
        >Create</router-link
      >
    </section>
  </div>
</template>
<script>
import SectionTitle from "@/components/SectionTitle.vue";
import HeaderNav from "@/components/dashboard/header.vue";
import SideNav from "@/components/dashboard/SideNav.vue";
import CourseSection from "@/components/sections/CourseSection.vue";
import { mapGetters } from "vuex";

export default {
  name: "ShowCategory",
  components: {
    CourseSection,
    HeaderNav,
    SideNav,
    SectionTitle,
  },
  data() {
    return {
      user: "",
    };
  },

  computed: {
    ...mapGetters(["User", "Access"]),
  },
};
</script>
<style lang="scss">
.courses {
  margin: 10px auto;
}

.actions {
  transition: 0.5s;
}
.actions:hover {
  background-color: white;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.22);
}
.btn.create {
  text-decoration: none;
  display: block;
  width: fit-content;
  margin: 40px auto 20px;
}

@media (max-width: 768px) {
  section {
    .white {
      .course {
        width: 280px;
      }
      .actions {
        width: 280px;
      }
    }
  }
}
@media (max-width: 568px) {
  section {
    .white {
      .course {
        width: 250px;
      }
      .actions {
        width: 250px;
      }
    }
  }
}
</style>
