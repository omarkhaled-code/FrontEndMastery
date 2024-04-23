<template>
  <SideNav />
  <HeaderNav />
  <div class="dashboard-container form-container">
    <section>
      <form @submit.prevent="handelSubmit" v-if="User">
        <h3>Update User</h3>

        <input type="text" placeholder="Name" v-model="form.name" />
        <input type="text" placeholder="Gender" v-model="form.gender" />
        <select v-model="form.access">
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
        </select>
        <label for="image"></label>
        <input type="file" id="image" @change="onChange" />
        <input
          type="text"
          placeholder="Instagram Account"
          v-model="form.instagram"
        />
        <input
          type="text"
          placeholder="Facebook Account"
          v-model="form.facebook"
        />
        <input
          type="text"
          placeholder="Twitter Account"
          v-model="form.twitter"
        />
        <input type="text" placeholder="Profession" v-model="form.profession" />

        <button type="submit" class="btn">Update</button>
      </form>
    </section>
    <AppFooter />
  </div>
</template>
<script>
import SideNav from "@/components/dashboard/SideNav.vue";
import HeaderNav from "@/components/dashboard/header.vue";
import axios from "axios";
import { mapGetters } from "vuex";

export default {
  name: "UpdateProfile",
  data() {
    return {
      form: {
        name: "",
        gender: "",
        access: "",
        image: "",
        facebook: "",
        instagram: "",
        twitter: "",
        profession: "",
      },
    };
  },
  components: {
    SideNav,
    HeaderNav,
  },
  computed: {
    ...mapGetters(["User", "Access"]),
  },
  async created() {
    this.form.name = this.User.name;
    this.form.email = this.User.email;
    this.form.gender = this.User.gender;
    this.form.access = this.Access;
    this.form.facebook = this.User.facebook;
    this.form.instagram = this.User.instagram;
    this.form.twitter = this.User.twitter;
    this.form.profession = this.User.profession;
  },
  methods: {
    onChange(e) {
      this.form.image = e.target.files[0];
    },
    async handelSubmit() {
      await axios
        .post(
          "update-user",
          {
            name: this.form.name,
            email: this.form.email,
            access: this.form.access,
            gender: this.form.gender,
            facebook: this.form.facebook,
            instagram: this.form.instagram,
            twitter: this.form.twitter,
            profession: this.form.profession,
            image: this.form.image,
            id: this.User.id,
          },
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        )
        .then(() => {
          this.$router.push("/dashboard/profile").then(() => {
            window.location.reload();
          });
        });
    },
  },
};
</script>
