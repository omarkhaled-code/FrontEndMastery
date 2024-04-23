<template>
  <SideNav />
  <HeaderNav />
  <div class="dashboard-container form-container">
    <section>
      <form @submit.prevent="handleSubmit">
        <h3>Create Course</h3>
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

        <button type="submit" class="btn">Create</button>
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
    };
  },
  async created() {
    let response = await axios.get("all-cat");
    this.category = response.data.allCategory;
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
          "create-blog",
          {
            title: this.form.title,
            content: this.form.content,
            image: this.form.image,
            category_id: this.form.category_id,
            user_id: this.User.id,
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
