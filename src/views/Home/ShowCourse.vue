<template>
  <NavBar />

  <section class="course-container">
    <div class="course">
      <div class="img">
        <img :src="path + course.image" alt="" />
      </div>
      <div class="info">
        <h3>{{ course.title }}</h3>
        <p class="description">{{ course.description }}</p>
        <p class="price">${{ course.price }}</p>

        <button>
          <!-- <a class="btn" v-if="status == true">View</a> -->
          <RouterLink
            :to="{
              path: '/dashboard/course/' + course.id,
              state: { id: course.id },
            }"
            class="btn"
            v-if="status || User.access == 'admin'"
            >View</RouterLink
          >
          <a class="btn" @click="buy" v-else>Buy</a>
        </button>
      </div>
    </div>
    <div class="creator">
      <h3>Creator Details</h3>
      <div class="box">
        <div class="header">
          <h4>{{ creator.name }}</h4>
          <img :src="path + creator.image" alt="" />
        </div>
        <h4>
          Email: <span>{{ creator.email }}</span>
        </h4>
        <h4>
          Profession: <span>{{ creator.profession }}</span>
        </h4>
        <div class="footer">
          <a :href="creator.facebook" target="_blank">
            <i class="facebook"><fontIcon :icon="['fab', 'facebook']" /></i>
          </a>
          <a :href="creator.instagram" target="_blank">
            <i class="instagram"><fontIcon :icon="['fab', 'instagram']" /></i>
          </a>
          <a :href="creator.twitter" target="_blank">
            <i class="twitter"><fontIcon :icon="['fab', 'twitter']" /></i>
          </a>
        </div>
      </div>
    </div>
  </section>

  <AppFooter />
</template>
<script>
import NavBar from "@/components/NavBar.vue";
import AppFooter from "@/components/AppFooter.vue";
import axios from "axios";
import { mapGetters } from "vuex";

export default {
  name: "ShowCourse",
  components: {
    NavBar,
    AppFooter,
  },
  data() {
    return {
      course: "",
      creator: "",
      status: "",
      id: "",
      path: "http://127.0.0.1:8000/storage/",
    };
  },
  async created() {
    if (history.state) {
      this.id = history.state && history.state.id;
      let user_id = this.User ? this.User.id : 0;

      await axios
        .get(`course/${this.id}/${user_id}`)
        .then((response) => {
          this.course = response.data.course;
          this.creator = response.data.course.creator;
          this.status = response.data.status;
        })
        .catch(() => {
          this.$router.push("/");
        });
    }
  },
  computed: {
    ...mapGetters(["User"]),
  },
  methods: {
    async buy() {
      if (this.User) {
        await axios
          .post("subscription", {
            id: this.course.id,
            student_id: this.User.id,
            creator_id: this.creator.id,
          })
          .then(() => {
            this.$router.push(`/dashboard/my-courses`);
          });
      } else {
        this.$router.push("/login");
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.course-container {
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 45px;
  flex-wrap: wrap;
  .course {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 25px;
    flex-wrap: wrap;
    .img {
      img {
        width: 400px;
        height: 300px;
        border-radius: 10px;
      }
    }
    .info {
      width: 100%;
      text-align: left;
      h3,
      p {
        margin-bottom: 15px;
      }
      h3 {
        font-size: 16px;
      }
      .description {
        color: #44425a;
        background: #ff66000e;
        padding: 8px 12px;
        border-radius: 15px;
        font-size: 14px;
      }
      .price,
      button {
        color: black;
        margin-bottom: 25px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        appearance: none;
        border: none;
        background: transparent;
      }

      button {
        .btn {
          text-decoration: none;
        }
      }
    }
  }
  .creator {
    h3 {
      margin-bottom: 20px;
    }
    .box {
      background: #f2f1f8;
      padding: 10px 15px;
      border-radius: 10px;
      width: 300px;
      text-align: left;

      .header {
        display: flex;
        justify-content: space-between;
        align-items: end;
        margin-bottom: 15px;
        padding-bottom: 5px;
        border-bottom: 1px solid #44425a1a;
        h4 {
          color: black;
          font-size: 20px;
        }
        img {
          width: 50px;
          height: 50px;
          border-radius: 50%;
        }
      }
      h4 {
        margin-bottom: 10px;
        span {
          color: #ff6600;
          font-weight: normal;
          font-size: 16px;
        }
      }
      .footer {
        padding-top: 5px;
        border-top: 1px solid #44425a1a;
        margin-top: 20px;
        display: flex;
        gap: 25px;
        justify-content: center;
        align-items: center;
        a {
          padding: 8px 12px;
          border-radius: 10px;
          transition: 0.3s;
          border: 1px solid transparent;
          i {
            transition: 0.3s;
            color: #44425a;
          }

          i {
            font-size: 20px;
          }
          &:hover {
            border-color: #44425a;
            .facebook {
              color: #0000ee;
            }
            .twitter {
              color: #5094ff;
            }
            .instagram {
              color: red;
            }
          }
        }
      }
    }
  }
}

@media (max-width: 478px) {
  .course-container .course .img img {
    width: 300px;
    height: 200px;
  }
  .course-container .course .info {
    width: 90%;
  }
}

@media (max-width: 350px) {
  .course-container .course .img img {
    width: 260px;
  }
  .course-container .creator .box {
    width: 220px;
  }
}
</style>
