<template>
  <NavBar />

  <section class="blog-container">
    <div class="blog">
      <span>{{ blog.time }}</span>
      <h3>{{ blog.title }}</h3>
      <div class="img">
        <img :src="path + blog.image" alt="blog image" />
      </div>
      <div class="content">
        <p>{{ blog.content }}</p>
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
  name: "ShowBlog",
  components: {
    NavBar,
    AppFooter,
  },
  data() {
    return {
      blog: "",
      creator: "",
      id: "",
      path: "http://127.0.0.1:8000/storage/",
    };
  },
  async created() {
    if (history.state) {
      this.id = history.state && history.state.id;

      await axios
        .get(`blog/${this.id}`)
        .then((response) => {
          this.blog = response.data.blog;
          this.creator = response.data.blog.creator;
        })
        .catch(() => {
          this.$router.push("/");
        });
    }
  },
  computed: {
    ...mapGetters(["User"]),
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.blog-container {
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 45px;
  flex-wrap: wrap;
  .blog {
    display: flex;
    justify-content: space-between;
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
    }
    .content {
      color: #44425a;
      background: #ff66000e;
      padding: 12px 15px;
      border-radius: 10px;
      font-size: 16px;
      width: 600px;
      text-align: left;
      line-height: 1.6;
      letter-spacing: 0.5px;
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

@media (max-width: 768px) {
  .blog-container .blog {
    .img img {
      width: 300px;
      height: 260px;
    }
    .content {
      width: 450px;
      font-size: 15px;
    }
  }
}

@media (max-width: 538px) {
  .blog-container .blog {
    .img img {
      width: 250px;
      height: 200px;
    }
    .content {
      width: 350px;
      font-size: 14px;
    }
  }
}

@media (max-width: 418px) {
  .blog-container .blog {
    .img img {
      width: 200px;
      height: 200px;
    }
    .content {
      width: 300px;
      font-size: 12px;
    }
  }
}

@media (max-width: 351px) {
  .blog-container .blog {
    .img img {
      width: 150px;
      height: 150px;
    }
    .content {
      width: 250px;
      font-size: 10px;
    }
  }
  .blog-container .creator {
    .box {
      width: 250px;
      .header {
        font-size: 17px;
      }
      h4 {
        font-size: 14px;
        span {
          font-size: 12px;
        }
      }
    }
  }
}
</style>
