<template>
  <SideNav />
  <HeaderNav />
  <div class="dashboard-container form-container">
    <section>
      <form @submit.prevent="handleSubmit">
        <h3>Create Category</h3>
        <div class="input">
          <input type="text" placeholder="Name" v-model="name" />
        </div>
        <div class="input">
          <input type="file" @change="onFileChange" accept="image/*" />
        </div>

        <button type="submit" class="btn">Create</button>
      </form>
    </section>
  </div>
</template>
<script>
import SideNav from "@/components/dashboard/SideNav";
import HeaderNav from "@/components/dashboard/header.vue";
import axios from "axios";
export default {
  name: "CreateCat",
  components: {
    SideNav,
    HeaderNav,
  },
  data() {
    return {
      name: "",
      image: null,
    };
  },
  methods: {
    onFileChange(e) {
      this.image = e.target.files[0];
    },

    async handleSubmit() {
      await axios
        .post(
          "create-cat",
          {
            name: this.name,
            image: this.image,
          },
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        )
        .then(() => {
          alert("category created successfully!");
          this.name = "";
          this.image = "";
          this.$router.push("/dashboard/category");
        })
        .catch((e) => {
          alert(e);
        });
    },
  },
};
</script>
<style lang=""></style>
