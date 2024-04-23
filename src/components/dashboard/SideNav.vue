<template>
  <nav class="side-nav" v-if="User">
    <h3>O. K. I</h3>
    <ul>
      <li>
        <router-link to="/">
          <fontIcon :icon="['fas', 'home']" fade />
          <span>Home</span>
        </router-link>
      </li>
      <li>
        <router-link to="/dashboard/courses">
          <fontIcon :icon="['fas', 'graduation-cap']" />
          <span>Courses</span>
        </router-link>
      </li>
      <li>
        <router-link to="/dashboard/blogs">
          <fontIcon :icon="['fab', 'blogger-b']" />
          <span>Blogs</span>
        </router-link>
      </li>
      <li v-if="Access == 'admin'">
        <router-link to="/dashboard/category">
          <fontIcon :icon="['fas', 'table']" />
          <span>Category</span>
        </router-link>
      </li>

      <li>
        <router-link to="/dashboard/my-courses">
          <fontIcon :icon="['fas', 'layer-group']" />
          <span>My Courses</span></router-link
        >
      </li>
      <li>
        <router-link to="/dashboard/my-blogs">
          <fontIcon :icon="['fas', 'newspaper']" />
          <span> My Blogs </span>
        </router-link>
      </li>
      <li>
        <router-link to="/dashboard/profile">
          <fontIcon :icon="['fas', 'user']" />
          <span> Profile </span>
        </router-link>
      </li>
      <li v-if="status">
        <a @click="handleTestimonialBox">Add Testimonial</a>
      </li>
    </ul>
  </nav>
  <div class="form-container testimonial-box" v-if="box">
    <form @submit.prevent="handleSubmit">
      <h3>Testimonial</h3>
      <span @click="handleTestimonialBox" lass="close">
        <fontIcon :icon="['fas', 'close']" />
      </span>
      <p v-if="error" style="color: #ff0000a8" class="input">
        {{ error }}
      </p>
      <div class="input">
        <textarea
          v-model="form.content"
          placeholder="Testimonial..."
        ></textarea>
      </div>
      <button type="submit" class="btn">Send</button>
    </form>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import axios from "axios";
export default {
  name: "SideNav",
  data() {
    return {
      status: false,
      box: false,
      form: {
        content: "",
      },
    };
  },
  computed: {
    ...mapGetters(["User", "Access"]),
  },
  async created() {
    if (this.User) {
      let id = this.User.id;
      await axios.get(`testimonial/${id}`).then((response) => {
        if (response.data == 0) {
          this.status = true;
        } else {
          this.status = false;
        }
      });
    }
  },
  methods: {
    handleTestimonialBox() {
      this.box = !this.box;
    },
    async handleSubmit() {
      await axios
        .post("create-testimonial", {
          content: this.form.content,
          user_id: this.User.id,
        })
        .then((data) => {
          console.log(data);
          this.box = false;
          this.status = false;
          alert("thank you for your testimonial");
        });
    },
  },
};
</script>
<style lang="scss" scoped>
.side-nav {
  width: 200px;
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  background: #fff;
  box-shadow: 1px 0 10px #ff66001c;
  z-index: 1;
  h3 {
    margin-bottom: 70px;
    position: relative;
    &::after {
      content: "";
      position: absolute;
      left: 50%;
      right: 50%;
      transform: translateX(-50%);
      bottom: -10px;
      width: 50%;
      height: 1px;
      background-color: #ff6600;
      z-index: 1;
    }
    &::before {
      content: "";
      position: absolute;
      left: 50%;
      right: 50%;
      transform: translateX(-50%);
      bottom: -13.5px;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: #44425a;
      z-index: 2;
    }
  }
  ul {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 25px;
    margin: 25px auto;
    li {
      list-style: none;
      a {
        text-decoration: none;
        color: #44425a;
        padding: 6px;
        width: 100%;
        text-align: left;
        display: flex;
        align-items: start;
        gap: 10px;
        &.router-link-exact-active,
        &:hover {
          color: #ff6600;
        }
      }
    }
  }
}
.testimonial-box {
  position: relative;
  width: 100%;
  height: 100vh;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.52);
  form {
    position: relative;
    span {
      position: absolute;
      right: 15px;
      top: 15px;
      color: red;
      font-size: 18px;
    }
    button {
      margin: 0 auto;
    }
  }
}
</style>
