<template>
  <div class="form-container">
    <nav>
      <ul>
        <li>
          <router-link to="/"> Home </router-link>
        </li>
        <li>
          <router-link to="/register">Register</router-link>
        </li>
        <li>
          <router-link to="/login">Login</router-link>
        </li>
      </ul>
    </nav>
    <section>
      <form @submit.prevent="handleSubmit">
        <h3>Register</h3>

        <input type="text" placeholder="name" v-model="form.name" />

        <input type="email" placeholder="Email" v-model="form.email" />

        <input type="text" placeholder="gender" v-model="form.gender" />
        <select v-model="form.access">
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
        </select>
        <label for="image"></label>
        <div class="input">
          <label for="course_img">Upload Image</label>
          <input type="file" id="course_img" @change="onChange" />
        </div>
        <input
          type="text"
          placeholder="Instagram Account Default is: Null"
          v-model="form.instagram"
        />
        <input
          type="text"
          placeholder="Facebook Account Default is: Null"
          v-model="form.facebook"
        />
        <input
          type="text"
          placeholder="Twitter Account Default is: Null"
          v-model="form.twitter"
        />
        <input type="text" placeholder="Profession" v-model="form.profession" />
        <input type="password" placeholder="Password" v-model="form.password" />

        <button type="submit" class="btn">Register</button>
      </form>
    </section>
    <AppFooter />
  </div>
</template>
<script>
import axios from "axios";
import AppFooter from "@/components/AppFooter.vue";
export default {
  name: "RegisterView",
  data() {
    return {
      form: {
        name: "",
        email: "",
        gender: "",
        access: "Student",
        image: null,
        facebook: "",
        instagram: "",
        twitter: "",
        profession: "",
        password: "",
      },
    };
  },
  components: {
    AppFooter,
  },
  created() {
    if (localStorage.getItem("jwt")) {
      this.$router.push("/");
    }
  },
  methods: {
    onChange(e) {
      this.form.image = e.target.files[0];
    },
    async handleSubmit() {
      // this.$store.dispatch("register", this.form);
      await axios
        .post(
          "register",
          {
            name: this.form.name,
            email: this.form.email,
            gender: this.form.gender,
            access: this.form.access,
            image: this.form.image,
            facebook: this.form.facebook,
            instagram: this.form.instagram,
            twitter: this.form.twitter,
            profession: this.form.profession,
            password: this.form.password,
          },
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        )
        .then(() => {
          this.$router.push("/login");
        });
    },
  },
};
</script>
<style lang="scss">
.form-container {
  nav {
    ul {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 25px;
      width: 100%;
      height: 100%;
      li {
        list-style: none;
      }
    }
    box-shadow: 0 1px 5px #ff660041;
    height: 50px;
  }
  form {
    width: 350px;
    padding: 35px 25px;
    margin: 10px auto;
    background-color: #f2f1f8;
    border-radius: 10px;
    box-shadow: 0 1px 10px rgba(255, 102, 0, 0.514);
    h3 {
      margin-bottom: 25px;
      font-size: 26px;
    }

    input,
    textarea,
    select,
    .input {
      padding: 8px 12px;
      width: 100%;
      border: none;
      border-radius: 4px;
      outline: none;
      margin-bottom: 15px;
      #course_img,
      #course_video {
        appearance: none;
        display: none;
      }
      label {
        cursor: pointer;
        border-radius: 20px;
        background: #fff;
        padding: 8px 12px;
      }
      span {
        font-size: 15px;
        display: block;
        margin-bottom: 10px;
      }
    }
    button {
      margin-top: 15px;
      width: 100px;
    }
  }
}
@media (max-width: 768px) {
  .form-container form {
    width: 245px !important;
  }
}
</style>
