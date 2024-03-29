<template>
  <div class="home">
    <section></section>
    <AboutSection />
    <section>
      <SectionTitle title="Subjects" paragraph="Explore Top Subjects" />
      <div class="top-courses">
        <router-link to="/courses" class="course">
          <img src="@/assets/cat-1.jpg" alt="" />

          <div class="info">
            <h3>Web Design</h3>
            <p>100 courses</p>
          </div>
        </router-link>
        <router-link to="/courses" class="course">
          <img src="@/assets/cat-2.jpg" alt="" />

          <div class="info">
            <h3>Web Develope</h3>
            <p>100 courses</p>
          </div>
        </router-link>
        <router-link to="/courses" class="course">
          <img src="@/assets/cat-3.jpg" alt="" />

          <div class="info">
            <h3>App Design</h3>
            <p>100 courses</p>
          </div>
        </router-link>
        <router-link to="/courses" class="course">
          <img src="@/assets/cat-4.jpg" alt="" />

          <div class="info">
            <h3>Web Design</h3>
            <p>100 courses</p>
          </div>
        </router-link>
        <router-link to="/courses" class="course">
          <img src="@/assets/cat-5.jpg" alt="" />

          <div class="info">
            <h3>Web Design</h3>
            <p>100 courses</p>
          </div>
        </router-link>
        <router-link to="/courses" class="course">
          <img src="@/assets/cat-6.jpg" alt="" />

          <div class="info">
            <h3>Web Design</h3>
            <p>100 courses</p>
          </div>
        </router-link>
        <router-link to="/courses" class="course">
          <img src="@/assets/cat-7.jpg" alt="" />

          <div class="info">
            <h3>Web Design</h3>
            <p>100 courses</p>
          </div>
        </router-link>
        <router-link to="/courses" class="course">
          <img src="@/assets/cat-8.jpg" alt="" />

          <div class="info">
            <h3>Web Design</h3>
            <p>100 courses</p>
          </div>
        </router-link>
      </div>
    </section>
    <section>
      <SectionTitle title="COURSES" paragraph="Our Popular Courses" />
      <div class="courses">
        <div class="course">
          <img src="@/assets/course-1.jpg" alt="" />
          <div class="info">
            <span class="student">25 Students</span>
            <span class="time"> 01h 30m </span>
          </div>
          <div class="title">
            <RouterLink to="/courses"
              ><h3>
                Web design & development courses for beginner
              </h3></RouterLink
            >
          </div>
          <div class="details">
            <span class="rating"> 4.5 (255) </span>
            <span class="price">$90</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src

import SectionTitle from "@/components/SectionTitle.vue";
import AboutSection from "@/components/AboutSection.vue";
export default {
  name: "HomeView",
  components: {
    SectionTitle,
    AboutSection,
  },
};
</script>

<style lang="scss">
section {
  width: 90%;
  margin: auto;
  padding: 70px 10px;
  .top-courses {
    margin-top: 50px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 25px;

    .course {
      width: 260px;
      height: 160px;
      position: relative;
      border-radius: 10px;
      overflow: hidden;
      &:hover img {
        height: 120%;
      }

      &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        background-color: rgba(0, 0, 0, 0.4);
        width: 100%;
        height: 100%;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        transition: 0.3s;
      }
      .info {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        h3 {
          font-weight: bold;
          margin-bottom: 8px;
          font-size: 20px;
        }
      }
    }
  }
  .courses {
    margin-top: 50px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 25px;
    .course {
      width: 290px;
      height: 430px;
      background: black;
      border-radius: 10px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      gap: 25px;
      img {
        width: 100%;
        height: 180px;
      }
      .info {
        display: flex;
        padding: 0 20px;
        justify-content: space-between;
        align-items: center;
        width: 100%;
      }
      .title {
        text-align: left;

        margin: 0 20px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.342);
        a {
          text-decoration: none;

          &:hover {
            text-decoration: underline;
            color: #ff6600;
          }
        }
        h3 {
          font-size: 25px;
          font-weight: normal;
          margin-bottom: 20px;
          transition: 0.3s;
        }
      }
      .details {
        padding: 0 20px;
        display: flex;
        justify-content: space-between;
      }
    }
  }
}
</style>
