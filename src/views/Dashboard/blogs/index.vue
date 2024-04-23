<template>
  <SideNav />
  <HeaderNav />
  <div class="dashboard-container">
    <section>
      <SectionTitle title="blogs" paragraph="Our Popular blogs" />
      <BlogSection type="all" />
      <router-link
        to="/dashboard/blog/create"
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
import BlogSection from "@/components/sections/BlogSection.vue";
import { mapGetters } from "vuex";

export default {
  name: "AllBlogs",
  components: {
    BlogSection,
    HeaderNav,
    SideNav,
    SectionTitle,
  },

  computed: {
    ...mapGetters(["User", "Access"]),
  },
};
</script>
