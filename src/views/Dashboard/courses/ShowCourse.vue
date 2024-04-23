<template>
  <SideNav />
  <HeaderNav />
  <div class="dashboard-container">
    <section class="course-container">
      <div class="course">
        <video
          :src="videoPath"
          controls
          type="video/mp4"
          :poster="imagePath + course.image"
          v-if="course.video"
        ></video>
        <h3 v-else style="color: red">
          Sorry... this course have not video yet!
        </h3>

        <!-- <img :src="path + course.image" alt="" /> -->

        <div class="info">
          <h3>{{ course.title }}</h3>
          <p class="description">{{ course.description }}</p>
          <p class="price">${{ course.price }}</p>
        </div>
      </div>
      <div class="creator">
        <h3>Creator Details</h3>

        <div class="box">
          <div class="header">
            <h4>{{ creator.name }}</h4>
            <img :src="imagePath + creator.image" alt="" />
          </div>
          <h4>Email: {{ creator.email }}</h4>
          <h4>Profession: {{ creator.profession }}</h4>
          <div class="footer">
            <a :href="creator.facebook" target="_blank">
              <i class="facebook"><fontIcon :icon="['fab', 'facebook']" /></i>
            </a>
            <a href="/instagram">
              <i class="instagram"><fontIcon :icon="['fab', 'instagram']" /></i>
            </a>
            <a href="/facebook">
              <i class="twitter"><fontIcon :icon="['fab', 'twitter']" /></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>

  <AppFooter />
</template>
<script>
import axios from "axios";
import { mapGetters } from "vuex";
import SideNav from "@/components/dashboard/SideNav.vue";
import HeaderNav from "@/components/dashboard/header.vue";

export default {
  name: "ShowCourse",
  components: {
    SideNav,
    HeaderNav,
  },
  data() {
    return {
      course: "",
      creator: "",
      videoPath: "",
      imagePath: "http://127.0.0.1:8000/storage/",
    };
  },
  async created() {
    let id = history.state && history.state.id;
    let user_id = this.User ? this.User.id : 0;
    let response = await axios.get(`course/${id}/${user_id}`);
    this.course = response.data.course;
    this.creator = response.data.course.creator;
    let status = response.data.status;
    this.videoPath = `http://127.0.0.1:8000/api/video-stream/${this.course.id}`;
    if (!status) {
      this.$router("/courses");
    }
  },
  computed: {
    ...mapGetters(["User"]),
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.course-container {
  width: 95%;
  margin: 10px auto;
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 45px;
  flex-wrap: wrap;

  .course {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    gap: 25px;
    flex-wrap: wrap;

    video {
      width: 450px;
      height: 350px;
      border-radius: 10px;
      object-fit: cover;
      object-position: center;
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
        margin-bottom: 30px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        appearance: none;
        border: none;
        background: transparent;
      }
      .price {
        margin: 25px auto 35px;
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
      box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.12);
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
          color: #ff6600;
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
  .course-container .course video {
    width: 300px;
    height: 200px;
  }
  .course-container .course .info {
    width: 90%;
  }
}

@media (max-width: 350px) {
  .course-container .course video {
    width: 260px;
  }
}
@media (max-width: 330px) {
  .course-container .course video {
    width: 225px;
  }
  .course-container .creator .box {
    width: 220px;
  }
}
</style>
