<template>
  <SideNav />
  <HeaderNav />
  <div class="dashboard-container" v-if="User">
    <section>
      <SectionTitle title="blogs" paragraph="Your Blogs" />
      <div class="blogs">
        <div v-for="blog in blogs" :key="blog.id">
          <BlogContainer
            :code="blog.id"
            :title="blog.title"
            time="Jan 01, 2050"
            :image="blog.image"
          />
          <div v-if="User">
            <div class="actions">
              <router-link
                :to="{
                  path: '/dashboard/blog/update/' + blog.id,
                  state: { id: blog.id },
                }"
                ><fontIcon :icon="['fas', 'pen-to-square']"
              /></router-link>
              <button @click="deleteBlog(blog.id)">
                <fontIcon :icon="['fas', 'trash']" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <router-link to="/dashboard/blogs" class="btn">All Blogs</router-link>
      <div v-if="len == 0">
        <h2>No Blogs Yet</h2>
      </div>
    </section>
  </div>
</template>
<script>
import SideNav from "@/components/dashboard/SideNav.vue";
import HeaderNav from "@/components/dashboard/header.vue";
import BlogContainer from "@/components/sections/container/BlogContainer.vue";
import SectionTitle from "@/components/SectionTitle.vue";
import { mapGetters } from "vuex";
import axios from "axios";

export default {
  name: "MyCourses",
  data() {
    return {
      blogs: "",
      len: 0,
    };
  },
  components: {
    SideNav,
    HeaderNav,
    BlogContainer,
    SectionTitle,
  },
  computed: {
    ...mapGetters(["User"]),
  },
  async created() {
    await axios.get(`my-blogs/${this.User.id}`).then((response) => {
      this.blogs = response.data.blogs;
      this.len = response.data.blogs.length;
    });
  },
  methods: {
    async deleteBlog(id) {
      await axios.post(`delete-blog/${id}`).then(() => {
        this.$router.push("/dashboard/blogs");
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.btn {
  text-decoration: none;
  display: inline-block;
  margin: 40px auto 30px;
}
</style>
