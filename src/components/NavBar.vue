<template>
  <nav>
    <div class="subject">
      <h3 class="logo">O.K.I</h3>
      <h4 class="list-title" @click="handleList">Subject</h4>
      <ul v-if="List">
        <li v-for="cat in category" :key="cat.name">
          <router-link
            :to="{
              path: '/category/' + cat.name,
              state: { id: cat.id },
            }"
          >
            {{ cat.name }}</router-link
          >
        </li>
      </ul>
    </div>
    <div class="links">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/courses">Courses</router-link>
      <router-link to="/blogs">Blogs</router-link>
      <router-link to="/contact">Contact</router-link>
      <router-link to="/teachers">teachers</router-link>
      <router-link v-if="User" to="/dashboard/courses">Dashboard</router-link>
    </div>
    <fontIcon :icon="['fas', 'bars']" class="bar-icon" @click="bars = !bars" />
    <ul class="bars" v-if="bars">
      <span @click="bars = !bars" class="close">X</span>
      <li v-if="User">
        <router-link to="/dashboard/profile">Profile</router-link>
      </li>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
      <li>
        <router-link to="/courses">Courses</router-link>
      </li>
      <li>
        <router-link to="/blogs">Blogs</router-link>
      </li>
      <li>
        <router-link to="/contact">Contact</router-link>
      </li>
      <li>
        <router-link to="/teachers">teachers</router-link>
      </li>
      <li v-if="User">
        <router-link to="/dashboard/courses">Dashboard</router-link>
      </li>
      <li v-if="User">
        <a @click="handleLogout">Logout</a>
      </li>
      <li v-if="!User">
        <router-link to="/login">Join</router-link>
      </li>
    </ul>
    <div v-if="User" class="user">
      <button class="btn" @click="handleLogout">
        <fontIcon :icon="['fas', 'arrow-right-from-bracket']" />
      </button>
      <router-link to="/dashboard/profile">
        <img :src="path + User.image" :alt="User.name" />
      </router-link>
    </div>

    <button class="btn join" v-else>
      <router-link to="/login">Join Now</router-link>
    </button>
  </nav>
</template>
<script>
import { mapGetters } from "vuex";
import axios from "axios";
export default {
  name: "NavBar",
  data() {
    return {
      path: "http://127.0.0.1:8000/storage/",
      List: false,
      category: "",
      bars: false,
    };
  },
  async created() {
    await axios.get("get-links").then((response) => {
      this.category = response.data.category;
    });
  },
  computed: {
    ...mapGetters(["User", "Access"]),
  },
  methods: {
    handleList() {
      this.List = !this.List;
    },
    handleLogout() {
      this.$store.dispatch("logout");
    },
  },
};
</script>
<style lang="scss" scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px auto;
  height: 65px;
  box-shadow: 1px 0px 6px #ff660060;
  position: relative;
  z-index: 10;
  .subject {
    position: relative;
    h4,
    .logo {
      font-size: 24px;
      color: #ff6600;
      cursor: pointer;
    }
    .logo {
      display: none;
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
  .bar-icon {
    font-size: 23px;
    cursor: pointer;
    display: none;
  }
  .user {
    display: flex;
    gap: 25px;
    align-items: center;
    justify-content: center;
    img {
      width: 42px;
      height: 42px;
      border-radius: 50%;
      box-shadow: 0px 1px 10px #ff66008c;
    }
    button {
      padding: 8px 10px;
    }
  }
  .btn a {
    color: white;
    text-decoration: none;
  }
}

@media (max-width: 992px) {
  nav {
    .subject {
      .logo {
        font-size: 20px;
        display: block;
      }

      ul,
      h4 {
        display: none;
      }
    }
    .links,
    .user,
    .join {
      display: none;
    }
    .bar-icon {
      display: block;
    }
    .bars {
      padding: 15px 10px;
      width: 260px;
      margin: 10px;
      position: fixed;
      right: 0px;
      top: 60px;
      background-color: white;
      display: flex;
      flex-direction: column;
      justify-content: start;
      align-items: center;
      box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.15);

      .close {
        position: absolute;
        right: 10px;
        top: 10px;
        font-size: 18px;
        cursor: pointer;
        &:hover {
          color: red;
        }
      }
      li {
        &:first-of-type {
          margin-top: 30px;
        }
        &:last-child {
          border-bottom: none;
        }
        list-style: none;
        width: 100%;
        text-align: start;
        a {
          width: 100%;
          display: block;
          padding: 12px 0;
          transition: 0.3s;
          &:last-child {
            padding-bottom: 5px;
          }
          &:hover {
            position: relative;
            bottom: 6px;
          }
        }
        border-bottom: 1px solid black;
      }
    }
  }
}
@media (max-width: 768px) {
  .user h3 {
    font-size: 16px;
    span {
      font-size: 14px;
    }
  }
}
</style>
