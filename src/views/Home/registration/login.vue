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
        <h3>Login</h3>

        <p v-if="error" style="color: #ff0000a8" class="input">
          {{ error }}
        </p>
        <div class="input">
          <input type="email" placeholder="Email" v-model="form.email" />
          <input
            type="password"
            placeholder="Password"
            v-model="form.password"
          />
        </div>
        <button type="submit" class="btn">Login</button>
      </form>
    </section>
    <AppFooter />
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import AppFooter from "@/components/AppFooter.vue";
export default {
  name: "LoginView",
  components: {
    AppFooter,
  },
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      error: "",
    };
  },
  computed: {
    ...mapGetters(["User"]),
  },
  created() {
    localStorage.getItem("jwt")
      ? this.$router.push("/dashboard/courses")
      : console.log("welcome");
  },
  methods: {
    async handleSubmit() {
      this.$store
        .dispatch("signIn", this.form)
        .then(() => {
          this.form = {};
          this.error = "";
          this.$router.push("/dashboard/courses");
        })
        .catch(() => {
          this.error = "invalid email or password";
        });
    },
  },
};
</script>
<style></style>
