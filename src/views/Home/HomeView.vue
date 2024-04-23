<template>
  <div class="home">
    <NavBar />
    <section class="landing">
      <div class="info">
        <h4>BEST ONLINE COURSES</h4>
        <h3>Best Education From Your Home</h3>
        <button>
          <router-link to="#"> Learn More </router-link>
        </button>
      </div>
    </section>

    <AboutSection />

    <section>
      <SectionTitle title="Subjects" paragraph="Explore Top Subjects" />
      <CategorySection type="latest" />
    </section>
    <section>
      <SectionTitle title="COURSES" paragraph="Our Popular Courses" />
      <CourseSection type="latest" />
    </section>

    <OurOffer v-if="!User" />
    <section>
      <SectionTitle title="Our Blog" paragraph="Latest From Our Blog" />
      <BlogSection type="latest" />
    </section>
    <TeacherSection type="latest" />

    <TestimonialSection />
    <AppFooter />
  </div>
</template>

<script>
// @ is an alias to /src

import NavBar from "@/components/NavBar.vue";
import AboutSection from "@/components/sections/AboutSection.vue";
import CategorySection from "@/components/sections/CategorySection.vue";
import SectionTitle from "@/components/SectionTitle.vue";
import CourseSection from "@/components/sections/CourseSection.vue";
import OurOffer from "@/components/sections/OurOffer.vue";
import TeacherSection from "@/components/sections/TeacherSection.vue";
import TestimonialSection from "@/components/sections/TestimonialSection.vue";
import BlogSection from "@/components/sections/BlogSection.vue";
import AppFooter from "@/components/AppFooter.vue";
import { mapGetters } from "vuex";

export default {
  name: "HomeView",
  components: {
    AboutSection,
    CategorySection,
    SectionTitle,
    CourseSection,
    OurOffer,
    TeacherSection,
    TestimonialSection,
    BlogSection,
    NavBar,
    AppFooter,
  },
  computed: {
    ...mapGetters(["User"]),
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
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url("@/assets/landing.jpg");
  padding: 0 70px;
  margin: 0;
  width: 100%;
  height: 100vh;
  position: relative;
  &::after {
    content: "";
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.56);
    position: absolute;
    left: 0;
    top: 0;
  }
  .info {
    position: relative;
    width: 95%;
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

@media (max-width: 768px) {
  .landing {
    padding: 10px;
    .info {
      h3 {
        font-size: 35px;
      }
    }
  }
}
@media (max-width: 360px) {
  .landing {
    padding: 10px;
    .info {
      h3 {
        font-size: 30px;
      }
      h4 {
        font-size: 18px;
        color: #ff6600;
      }
    }
  }
}
</style>
