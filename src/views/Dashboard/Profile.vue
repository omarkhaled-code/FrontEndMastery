<template>
  <SideNav />
  <HeaderNav />

  <div class="dashboard-container">
    <section>
      <div class="general-info">
        <div class="header">
          <div class="heading">
            <h3>General Info</h3>
            <p>General Information About Your Account</p>
          </div>
          <div class="img">
            <img :src="path + User.image" alt="image" />
          </div>
        </div>

        <div class="info">
          <div class="input">
            <label for="name">Name</label>
            <input
              type="text"
              name="name"
              readonly
              :value="User.name"
              id="name"
            />
          </div>
          <div class="input">
            <label for="email">Email</label>
            <input
              type="text"
              name="email"
              readonly
              :value="User.email"
              id="email"
            />
          </div>
        </div>
        <div class="actions">
          <router-link class="update" to="/dashboard/profile/update"
            >Update Account</router-link
          >
          <a class="delete" @click="box = true">Delete Account</a>
        </div>
      </div>
    </section>
    <div class="layout" v-if="box"></div>
    <div class="alert" v-if="box">
      <h3>Do You Want To Delete Your Account?</h3>
      <button @click="deleteUser(User.id)">Delete</button>
      <button class="cancle" @click="box = false">Cancle</button>
    </div>
  </div>
</template>
<script>
import SideNav from "@/components/dashboard/SideNav.vue";
import HeaderNav from "@/components/dashboard/header.vue";
import axios from "axios";
import { mapGetters } from "vuex";
export default {
  name: "ProfileView",
  components: {
    SideNav,
    HeaderNav,
  },
  data() {
    return {
      path: "http://127.0.0.1:8000/storage/",
      box: false,
    };
  },
  computed: {
    ...mapGetters(["User"]),
  },
  methods: {
    async deleteUser(id) {
      await axios.post(`delete-user/${id}`).then(() => {
        this.$router.push("/login");
      });
    },
  },
};
</script>
<style lang="scss">
.general-info {
  width: 90%;
  background-color: white;
  padding: 20px;
  margin: 25px auto;

  border-radius: 10px;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: left;
    margin: 20px auto;
    padding: 0 20px;
    .img {
      img {
        width: 60px;
        height: 60px;
        border-radius: 30%;
      }
    }
  }
  .info {
    width: 100%;
    background-color: #f1f5f9;
    padding: 10px 20px;
    border-radius: 10px;
    .input {
      margin: 8px auto;
      text-align: left;
      label {
        display: block;
        text-align: left;
        margin-bottom: 8px;
        color: #777;
      }
      input {
        padding: 6px 10px;
        border-radius: 10px;
        outline: none;
        border: none;
        width: 90%;
      }
      .pass {
        background-color: #eee;
        color: red;
      }
    }
  }

  .actions {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0 0 auto;
    padding: 10px 20px;
    background-color: white;
    &:hover {
      box-shadow: none;
    }
  }

  a,
  button {
    padding: 8px 15px;
    text-decoration: none;
    color: white;
    border-radius: 6px;
    border: none;
    font-size: 14px;
  }
  .update {
    background-color: #0075ff;
    cursor: pointer;
    &:hover {
      background-color: #0d69d5;
    }
  }
  .delete {
    color: white;
    background-color: rgba(255, 0, 0, 0.678);
    &:hover {
      background-color: rgba(199, 5, 5, 0.788);
    }
    cursor: pointer;
  }
}
.layout {
  background-color: rgba(0, 0, 0, 0.45);
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
}
.alert {
  padding: 10px 15px;
  background-color: white;
  width: fit-content;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  border-radius: 10px;
  h3 {
    margin: 10px auto 20px;
  }
  button {
    padding: 8px 12px;
    border: none;
    border-radius: 6px;
    margin: 10px 12px;
    cursor: pointer;
    background-color: rgba(255, 0, 0, 0.678);
    color: white;
    &:hover {
      background-color: rgba(175, 2, 2, 0.342);
    }
  }
  .cancle {
    background-color: #0075ff;
    cursor: pointer;
    &:hover {
      background-color: #0552aab0;
    }
  }
}

@media (max-width: 668px) {
  .general-info {
    .header {
      .heading {
        text-align: center;
        font-size: 11px;
      }
      .img {
        img {
          display: none;
        }
      }
    }

    .info {
      .input {
        font-size: 12px;
      }
    }
  }
}
@media (max-width: 680px) {
  .general-info {
    .actions {
      padding: 8px 12px;
      a {
        padding: 6px 8px;
        font-size: 12px;
      }
    }
  }
}

@media (max-width: 430px) {
  .general-info {
    .actions {
      padding: 0;
      a {
        font-size: 8px;
      }
    }
  }
}
</style>
