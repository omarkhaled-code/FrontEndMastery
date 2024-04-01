<template lang="">
  <div class="courses">
    <div class="course">
      <RouterLink to="/courses/3">
        <img src="@/assets/course-6.jpg" alt="" />
      </RouterLink>
      <div class="info">
        <span class="student">25 Students</span>
        <span class="time"> 01h 30m </span>
      </div>
      <div class="title">
        <RouterLink to="/courses"
          ><h3>Web design & development courses for beginner</h3></RouterLink
        >
      </div>
      <div class="details">
        <span class="rating"> 4.5 (255) </span>
        <span class="price">$90</span>
      </div>
    </div>
    <div class="course">
      <RouterLink to="/courses">
        <img src="@/assets/course-5.jpg" alt="" />
      </RouterLink>
      <div class="info">
        <span class="student">25 Students</span>
        <span class="time"> 01h 30m </span>
      </div>
      <div class="title">
        <RouterLink to="/courses"
          ><h3>Web design & development courses for beginner</h3></RouterLink
        >
      </div>
      <div class="details">
        <span class="rating"> 4.5 (255) </span>
        <span class="price">$90</span>
      </div>
    </div>
    <div class="course">
      <RouterLink to="/courses">
        <img src="@/assets/course-1.jpg" alt="" />
      </RouterLink>
      <div class="info">
        <span class="student">25 Students</span>
        <span class="time"> 01h 30m </span>
      </div>
      <div class="title">
        <RouterLink to="/courses"
          ><h3>Web design & development courses for beginner</h3></RouterLink
        >
      </div>
      <div class="details">
        <span class="rating"> 4.5 (255) </span>
        <span class="price">$90</span>
      </div>
    </div>
    <div class="course">
      <RouterLink to="/courses">
        <img src="@/assets/course-2.jpg" alt="" />
      </RouterLink>
      <div class="info">
        <span class="student">25 Students</span>
        <span class="time"> 01h 30m </span>
      </div>
      <div class="title">
        <RouterLink to="/courses"
          ><h3>Web design & development courses for beginner</h3></RouterLink
        >
      </div>
      <div class="details">
        <span class="rating"> 4.5 (255) </span>
        <span class="price">$90</span>
      </div>
    </div>
    <div class="course">
      <RouterLink to="/courses">
        <img src="@/assets/course-4.jpg" alt="" />
      </RouterLink>
      <div class="info">
        <span class="student">25 Students</span>
        <span class="time"> 01h 30m </span>
      </div>
      <div class="title">
        <RouterLink to="/courses"
          ><h3>Web design & development courses for beginner</h3></RouterLink
        >
      </div>
      <div class="details">
        <span class="rating"> 4.5 (255) </span>
        <span class="price">$90</span>
      </div>
    </div>
    <div class="course">
      <RouterLink to="/courses">
        <img src="@/assets/course-1.jpg" alt="" />
      </RouterLink>
      <div class="info">
        <span class="student">25 Students</span>
        <span class="time"> 01h 30m </span>
      </div>
      <div class="title">
        <RouterLink to="/courses"
          ><h3>Web design & development courses for beginner</h3></RouterLink
        >
      </div>
      <div class="details">
        <span class="rating"> 4.5 (255) </span>
        <span class="price">$90</span>
      </div>
    </div>
    <div class="course">
      <RouterLink to="/courses">
        <img src="@/assets/course-3.jpg" alt="" />
      </RouterLink>
      <div class="info">
        <span class="student">25 Students</span>
        <span class="time"> 01h 30m </span>
      </div>
      <div class="title">
        <RouterLink to="/courses"
          ><h3>Web design & development courses for beginner</h3></RouterLink
        >
      </div>
      <div class="details">
        <span class="rating"> 4.5 (255) </span>
        <span class="price">$90</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CoursesSection",
  components: {},
};
</script>
<style lang="scss" scoped>
.courses {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
  gap: 30px 10px;
  .course {
    width: 320px;
    height: 420px;
    background: #f2f1f8;
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 25px;
    transition: 0.3s;
    &:hover {
      box-shadow: 0px 10px 10px #ff66003d;
      transform: translateY(-10px);
    }
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
      border-bottom: 1px solid #ff660060;
      a {
        text-decoration: none;
        transition: 0.2s;
        &:hover {
          text-decoration: underline;
          color: #ff6600;
          h3 {
            color: #ff6600;
          }
        }
      }
      h3 {
        font-size: 25px;
        font-weight: normal;
        margin-bottom: 20px;
        transition: 0.3s;
        color: black;
      }
    }
    .details {
      padding: 0 20px;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
