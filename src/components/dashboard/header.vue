<template>
  <header v-if="User">
    <h3>
      {{ User.name }}
    </h3>
    <ul>
      <li @click="logout" style="cursor: pointer">
        <fontIcon
          :icon="['fas', 'arrow-right-from-bracket']"
          style="color: #ff6600"
        />
      </li>
      <li>
        <router-link to="/dashboard/profile" v-if="User.image"
          ><img :src="imgPath + User.image" alt="user avatar"
        /></router-link>
        <router-link to="/dashboard/profile" v-else
          ><img src="@/assets/avatar.png" alt="avatar"
        /></router-link>
      </li>
    </ul>
  </header>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "HeaderNav",
  data() {
    return {
      imgPath: "http://127.0.0.1:8000/storage/",
    };
  },
  computed: {
    ...mapGetters(["User"]),
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
      window.location.reload();
      this.$router.push("/");
    },
  },
};
</script>
<style lang="scss" scoped>
header {
  width: calc(100% - 200px);
  height: 60px;
  position: absolute;
  top: 0;
  left: 200px;
  box-shadow: 0 1px rgba(0, 0, 0, 0.12);
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: space-between;
  padding: 0 25px;
}
ul {
  display: flex;
  align-items: center;
  gap: 25px;
  li {
    list-style: none;
    img {
      width: 42px;
      height: 42px;
      border-radius: 50%;
      box-shadow: 0px 1px 10px #ff66008c;
    }
  }
}

@media (max-width: 380px) {
  header {
    padding: 0 10px;
  }
  ul li img {
    width: 35px;
    height: 35px;
  }
}
</style>
