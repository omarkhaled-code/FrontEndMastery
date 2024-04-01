<template>
  <div class="category">
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
</template>
<script>
export default {
  name: "CategorySection",
  components: {},
};
</script>
<style lang="scss">
.category {
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
</style>
