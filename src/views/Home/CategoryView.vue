<template>
  <NavBar />

  <section>
    <div class="cat">
      <img :src="path + category.image" alt="" />

      <div class="info">
        <h3>{{ category.name }}</h3>
        <p>{{ category.description }}</p>
      </div>
    </div>
    <SectionTitle title="COURSES" paragraph="Our Category Courses" />
    <div class="courses">
      <div class="" v-for="course in courses" :key="course.id">
        <CourseContainer
          :code="course.id"
          :image="course.image"
          :price="course.price"
          student="24"
          time="01h 30m"
          :title="course.title"
        />
      </div>
    </div>
  </section>
  <section>
    <SectionTitle title="blogs" paragraph="Our Category Blogs" />
    <div class="blogs">
      <div class="" v-for="blog in blogs" :key="blog.id">
        <BlogContainer
          :code="blog.id"
          :image="blog.image"
          :title="blog.title"
          time="01h 30m"
        />
      </div>
    </div>
  </section>
  <AppFooter />
</template>
<script>
import AppFooter from "@/components/AppFooter.vue";
import NavBar from "@/components/NavBar.vue";
import BlogContainer from "@/components/sections/container/BlogContainer.vue";

import CourseContainer from "@/components/sections/container/CourseContainer.vue";
import SectionTitle from "@/components/SectionTitle.vue";
import axios from "axios";
export default {
  name: "CatView",
  components: {
    NavBar,
    CourseContainer,
    BlogContainer,
    SectionTitle,
    AppFooter,
  },
  data() {
    return {
      id: "",
      category: "",
      courses: "",
      blogs: "",
      path: "http://127.0.0.1:8000/storage/",
    };
  },
  async created() {
    this.id = history.state && history.state.id;

    let response = await axios.post("show-cat", { id: this.id }).catch((e) => {
      console.log(e);
      this.$router.push("/");
      return;
    });
    if (response) {
      this.category = response.data.category;
      this.courses = this.category.course_created;
      this.blogs = this.category.blogs_created;
    }
  },
};
</script>
<style lang="scss" scoped>
section {
  display: flex;
  flex-direction: column;
  gap: 35px;
  align-items: start;
  width: 95%;
  margin: 10px auto;
  .cat {
    display: flex;
    flex-wrap: wrap;
    gap: 25px;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 30px;
    width: 100%;
    img {
      width: 350px;
      height: 250px;
      border-radius: 10px;
    }
    .info {
      text-align: left;
      h3 {
        margin-bottom: 12px;
        color: black;
        text-align: center;
      }
      p {
        line-height: 1.4;
        letter-spacing: 0.9px;
        color: #44425a;
      }
    }
  }
  .courses {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 30px 10px;
    justify-items: center;
  }
}

@media (min-width: 991px) {
  section {
    .cat {
      p {
        width: 600px;
      }
      img {
        width: 450px;
      }
    }
  }
}
@media (max-width: 390px) {
  section {
    .cat {
      img {
        width: 300px;
      }
    }
  }
}

@media (max-width: 330px) {
  section {
    .cat {
      img {
        width: 250px;
      }
    }
  }
}
</style>
