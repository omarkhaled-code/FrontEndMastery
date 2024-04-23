<template>
  <SideNav />
  <HeaderNav />
  <div class="dashboard-container">
    <section>
      <SectionTitle title="Category" paragraph="" />
      <CategorySection type="all" />
      <router-link
        to="/dashboard/category/create"
        class="btn create"
        v-if="Access === 'admin'"
        >Create</router-link
      >
    </section>
  </div>
</template>
<script>
import HeaderNav from "@/components/dashboard/header.vue";
import SideNav from "@/components/dashboard/SideNav.vue";
import SectionTitle from "@/components/SectionTitle.vue";
import CategorySection from "@/components/sections/CategorySection.vue";
import { mapGetters } from "vuex";

export default {
  name: "ShowCategory",
  components: {
    HeaderNav,
    SideNav,
    CategorySection,
    SectionTitle,
  },
  data() {
    return {
      user: {},
    };
  },
  computed: {
    ...mapGetters(["User", "Access"]),
  },
  async created() {},
};
</script>
<style lang="scss">
.btn.create {
  text-decoration: none;
  display: block;
  width: fit-content;
  margin: 20px auto;
}
</style>
