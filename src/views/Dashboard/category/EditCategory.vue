<template>
  <div>
    <SideNav />
    <HeaderNav />
    <div class="dashboard-container form-container">
      <section>
        <form @submit.prevent="handleSubmit" enctype="multipart/form-data">
          <h3>Login</h3>
          <div class="input">
            <input type="text" placeholder="Name" v-model="name" />
          </div>
          <div class="input">
            <input type="file" @change="onFileChange" accept="image/*" />
          </div>

          <button type="submit" class="btn">Update</button>
        </form>
      </section>
    </div>
  </div>
</template>
<script>
import HeaderNav from "@/components/dashboard/header.vue";
import SideNav from "@/components/dashboard/SideNav.vue";
import axios from "axios";
export default {
  name: "EditCat",
  data() {
    return {
      id: "",
      name: "",
      image: "",
    };
  },
  components: {
    HeaderNav,
    SideNav,
  },
  async created() {
    this.id = history.state && history.state.id;
    let response = await axios.post("edit-cat", { id: this.id });

    let category = response.data.category[0];
    this.name = category.name;
    this.id = category.id;
  },
  methods: {
    onFileChange(e) {
      this.image = e.target.files[0];
    },

    async handleSubmit() {
      await axios
        .post(
          "update-cat",
          {
            name: this.name,
            image: this.image,
            id: this.id,
          },
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        )
        .then(() => {
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
