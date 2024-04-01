<template>
  <nav>
    <div class="subject">
      <h4 class="list-title" @click="handleList">Subject</h4>
      <ul v-if="List">
        <li>Web Design</li>
        <li>Apps Design</li>
        <li>Web Design</li>

        <li>Marketing</li>
        <li>Seo</li>
      </ul>
    </div>
    <div class="links">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/courses">Courses</router-link>
      <router-link to="/blogs">Blogs</router-link>
      <router-link to="/contact">Contact</router-link>
      <router-link to="/teachers">teachers</router-link>
    </div>
    <button class="btn">Join Now</button>
  </nav>
</template>
<script>
export default {
  name: "NavBar",
  data() {
    return {
      List: false,
    };
  },
  methods: {
    handleList() {
      this.List = !this.List;
    },
  },
};
</script>
<style lang="scss" scoped>
nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0px auto;
  height: 65px;
  box-shadow: 1px 0px 6px #ff660060;
  position: relative;
  z-index: 10;
  .subject {
    position: relative;
    h4 {
      font-size: 24px;
      color: #ff6600;
      cursor: pointer;
    }
    ul {
      position: absolute;
      top: 40px;
      left: -10px;
      padding: 10px 15px 0;
      background: white;
      box-shadow: 1px 1px 5px #ff660049;
      text-align: left;
      width: 250px;
      transition: 0.5s linear;
      border-radius: 6px;
      li {
        list-style: none;
        margin: 10px auto;
        font-weight: 600;
        padding: 10px;
        transition: 0.3s linear;
        border-bottom: 1px solid transparent;
        cursor: pointer;
        position: relative;
        &::before {
          content: "";
          position: absolute;
          bottom: 0px;
          left: 50%;
          transform: translateX(-50%);
          width: 0%;
          height: 1px;
          background-color: #ff6600;
          transition: 0.3s linear;
        }
        &:not(:last-child) {
          padding-bottom: 5px;
        }
        &:hover {
          transform: translateY(-5px);
          &::before {
            width: 100%;
          }
        }
      }
    }
  }
  .links {
    display: flex;
    gap: 15px;
    text-transform: Capitalize;
    letter-spacing: 1.5px;
  }
}
</style>
