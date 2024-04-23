<template>
  <div class="blogs">
    <!-- <div class="blog">
        <router-link to="/#">
          <img src="@/assets/blog-3.jpg" alt="" />
        </router-link>
        <div class="info">
          <h3 class="title">
            Lorem elitr magna stet eirmod labore amet labore clita at ut clita
          </h3>
          <p class="time">Jan 01, 2050</p>
        </div>
      </div> -->
    <div v-for="blog in blogs" :key="blog.id">
      <BlogContainer
        :code="blog.id"
        :title="blog.title"
        time="Jan 01, 2050"
        :image="blog.image"
      />

      <div class="actions" v-if="User && Access == 'admin'">
        <router-link
          :to="{
            path: '/dashboard/blog/update/' + blog.id,
            state: { id: blog.id },
          }"
        >
          <fontIcon :icon="['fas', 'pen-to-square']" />
        </router-link>
        <button @click="deleteBlog(blog.id)">
          <fontIcon :icon="['fas', 'trash']" />
        </button>
      </div>
    </div>
  </div>

  <div v-if="len == 0">
    <h2>No Blogs Yet</h2>
  </div>
</template>

<script>
import BlogContainer from "@/components/sections/container/BlogContainer.vue";
import { mapGetters } from "vuex";
import axios from "axios";

export default {
  name: "BlogSection",
  components: {
    BlogContainer,
  },
  data() {
    return {
      len: 0,
      blogs: "",
    };
  },
  props: ["type"],
  computed: {
    ...mapGetters(["User", "Access"]),
  },
  async created() {
    if (this.type) {
      if (this.type == "all") {
        await axios.get("all-blog").then((response) => {
          this.blogs = response.data.blogs;
          this.len = response.data.blogs.length;
        });
      } else if (this.type == "latest") {
        await axios.get("last-blog").then((response) => {
          this.blogs = response.data.blogs;
          this.len = response.data.blogs.length;
        });
      }
    }
  },
  methods: {
    async deleteBlog(id) {
      await axios.post(`delete-blog/${id}`).then(() => {
        this.$router.push("/dashboard/blogs");
      });
    },
  },
};
</script>
<style lang="scss">
.blogs {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 25px;
  justify-content: center;
  justify-items: center;
  align-items: center;
  width: 100%;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .blog {
      position: relative;
      width: 300px;
      height: 350px;
      border-radius: 10px;
      overflow: hidden;
      filter: brightness(0.99);
      img {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        filter: brightness(0.6);
      }
      .info {
        position: absolute;
        z-index: 3;
        bottom: 25px;
        text-align: left;
        padding: 0px 20px;
        h3 {
          font-size: 18px;
          margin-bottom: 20px;
          color: white;
        }
        p {
          color: #ff6600;
        }
      }
    }
  }
  .actions {
    width: 300px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
  }
}

@media (max-width: 380px) {
  .blogs {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    div {
      .blog {
        width: 250px;
        gap: 25px;
      }
    }
  }
}
@media (max-width: 330px) {
  .blogs {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    div {
      .blog {
        width: 200px;
        height: 250px;
      }
    }
  }
}
</style>
