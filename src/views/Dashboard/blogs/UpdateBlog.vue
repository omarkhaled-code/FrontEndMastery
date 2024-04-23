<template>
  <SideNav />
  <HeaderNav />
  <div class="dashboard-container form-container">
    <section>
      <form @submit.prevent="handleSubmit">
        <h3>Update Blog</h3>
        <div class="input">
          <input type="text" placeholder="Blog Title" v-model="form.title" />
          <textarea
            placeholder="Blog Details"
            v-model="form.content"
          ></textarea>
          <select v-model="form.category_id">
            <option :value="cat.id" v-for="cat in category" :key="cat.id">
              {{ cat.name }}
            </option>
          </select>
        </div>
        <div class="input">
          <label for="course_img">Upload Img</label>
          <input
            type="file"
            @change="onImgFileChange"
            accept="image/*"
            id="course_img"
          />
        </div>

        <button type="submit" class="btn">Update</button>
      </form>
    </section>
  </div>
</template>
<script>
import SideNav from "@/components/dashboard/SideNav.vue";
import HeaderNav from "@/components/dashboard/header.vue";
import { mapGetters } from "vuex";
import axios from "axios";
export default {
  name: "CreateBlog",
  components: {
    SideNav,
    HeaderNav,
  },
  data() {
    return {
      form: {
        title: "",
        content: "",
        image: "",
        category_id: "",
      },
      category: "",
      blog_id: "",
    };
  },
  async created() {
    const id = history.state && history.state.id;
    let catResponse = await axios.get("all-cat");
    this.category = catResponse.data.allCategory;
    let blogResponse = await axios.get(`edit-blog/${id}`);
    this.form.title = blogResponse.data.blog.title;
    this.form.content = blogResponse.data.blog.content;
    this.form.category_id = blogResponse.data.blog.category_id;
    this.blog_id = id;
  },
  computed: {
    ...mapGetters(["User"]),
  },
  methods: {
    onImgFileChange(e) {
      this.form.image = e.target.files[0];
    },

    async handleSubmit() {
      await axios
        .post(
          "update-blog",
          {
            title: this.form.title,
            content: this.form.content,
            image: this.form.image,
            category_id: this.form.category_id,
            user_id: this.User.id,
            blog_id: this.blog_id,
          },
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        )
        .then(() => {
          this.$router.push("/dashboard/blogs");
        });
    },
  },
};
</script>
<style lang=""></style>
