<template>
  <div class="home">
    <section class="landing">
      <div class="info">
        <h4>BEST ONLINE COURSES</h4>
        <h3>Best Education From Your Home</h3>
        <button>
          <router-link to="#"> Learn More </router-link>
        </button>
      </div>
    </section>
    <div class="about-section">
      <AboutSection />
    </div>
    <section>
      <SectionTitle title="Subjects" paragraph="Explore Top Subjects" />
      <CategorySection />
    </section>

    <section>
      <SectionTitle title="COURSES" paragraph="Our Popular Courses" />
      <CourseSection />
    </section>

    <section>
      <SectionTitle title="Teachers" paragraph="Meet Our Teachers" />
      <TeacherSection />
    </section>
    <section>
      <SectionTitle title="Our Blog" paragraph="Latest From Our Blog" />
      <BlogSection />
    </section>
  </div>
</template>

<script>
// @ is an alias to /src

import AboutSection from "@/components/sections/AboutSection.vue";
import CategorySection from "@/components/sections/CategorySection.vue";
import CourseSection from "@/components/sections/CourseSection.vue";
import TeacherSection from "@/components/sections/TeacherSection.vue";
import BlogSection from "@/components/sections/BlogSection.vue";
import SectionTitle from "@/components/SectionTitle.vue";

export default {
  name: "HomeView",
  components: {
    AboutSection,
    SectionTitle,
    CategorySection,
    CourseSection,
    TeacherSection,
    BlogSection,
  },
};
</script>

<style lang="scss">
section {
  width: 85%;
  margin: auto;
  padding: 70px 10px;
}
.landing {
  background-image: url("@/assets/carousel-2.jpg");
  padding: 0 70px;
  margin: 0;
  width: 100%;
  height: 100vh;
  position: relative;
  &::after {
    content: "";
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.42);
    position: absolute;
    left: 0;
    top: 0;
  }
  .info {
    position: relative;
    width: 90%;
    height: 100%;
    margin: auto;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
    gap: 10px;
    color: white;
    letter-spacing: 1px;
    line-height: 1.5;
    text-align: left;
    h3 {
      font-size: 40px;
      margin-bottom: 20px;
    }
    h4 {
      font-size: 20px;
    }
    button {
      background-color: #ff6600;
      border-radius: 10px;
      border: 1px solid transparent;
      transition: 0.3s;
      a {
        color: white;
        text-decoration: none;
        padding: 10px 20px;
        display: block;
        transition: 0.3s;
      }
      &:hover {
        background-color: transparent;
        border-color: #ff6600;
        a {
          color: #ff6600;
        }
      }
    }
  }
}
</style>
