<template>
  <SideNav />
  <div class="dashboard-container form-container">
    <section>
      <form @submit.prevent="handleSubmit">
        <h3>Update Course</h3>
        <div class="input">
          <input type="text" placeholder="Course Title" v-model="form.title" />
          <input type="text" placeholder="Course Price" v-model="form.price" />
          <textarea
            placeholder="Course Details"
            v-model="form.description"
          ></textarea>
          <select v-model="form.category_id">
            <option :value="cat.id" v-for="cat in categories" :key="cat.id">
              {{ cat.name }}
            </option>
          </select>
        </div>
        <div class="input">
          <label for="course_img">Upload Img</label>
          <input
            type="file"
            @change="onFileChange"
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
import { mapGetters } from "vuex";
import axios from "axios";
export default {
  name: "UpdateCourse",
  components: {
    SideNav,
  },
  data() {
    return {
      id: "",
      categories: "",
      form: {
        title: "",
        price: "",
        description: "",
        image: "",
        category_id: "",
      },
    };
  },

  async created() {
    this.id = history.state && history.state.id;

    let catResponse = await axios.get("all-cat");
    this.categories = catResponse.data.allCategory;

    let courseResponse = await axios.post("edit-course", { id: this.id });

    this.form.title = courseResponse.data.course.title;
    this.form.price = courseResponse.data.course.price;
    this.form.description = courseResponse.data.course.description;
    this.form.category_id = courseResponse.data.course.belong_to.id;
  },
  computed: {
    ...mapGetters(["User"]),
  },
  methods: {
    onFileChange(e) {
      this.form.image = e.target.files[0];
    },

    async handleSubmit() {
      await axios
        .post(
          "update-course",
          {
            id: this.id,
            title: this.form.title,
            price: this.form.price,
            description: this.form.description,
            image: this.form.image,
            category_id: this.form.category_id,
            user_id: this.User.id,
          },
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        )
        .then(() => {
          this.$router.push("/dashboard/courses");
        });
    },
  },
};
</script>
<style lang=""></style>
