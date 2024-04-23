<template>
  <div class="courses">
    <div class="" v-for="course in courses" :key="course.id">
      <CourseContainer
        :code="course.id"
        :image="course.image"
        :price="course.price"
        student="24"
        time="01h 30m"
        :title="course.title"
      />
      <div v-if="User">
        <div class="actions" v-if="Access == 'admin'">
          <router-link
            :to="{
              path: '/dashboard/course/edit/' + course.id,
              state: { id: course.id },
            }"
            ><fontIcon :icon="['fas', 'pen-to-square']"
          /></router-link>
          <button @click="deleteCourse(course.id)">
            <fontIcon :icon="['fas', 'trash']" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CourseContainer from "@/components/sections/container/CourseContainer.vue";
import { mapGetters } from "vuex";
import axios from "axios";

export default {
  name: "CoursesSection",
  props: ["type"],
  components: {
    CourseContainer,
  },
  data() {
    return {
      courses: null,
    };
  },
  async created() {
    if (this.type == "all") {
      await axios.get("all-courses").then((response) => {
        this.courses = response.data.courses;
      });
    } else if (this.type == "latest") {
      await axios.get("latest-courses").then((response) => {
        this.courses = response.data.courses;
      });
    }
  },
  computed: {
    ...mapGetters(["Access", "User"]),
  },
  methods: {
    async deleteCourse(code) {
      await axios.post("delete-course", {
        id: code,
      });
    },
  },
};
</script>
<style lang="scss">
.courses {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  justify-content: center;
  justify-items: center;
  align-items: center;
  gap: 30px 10px;

  .course {
    width: 320px;
    height: fit-content;
    padding-bottom: 15px;
    background: #f2f1f8;
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 25px;
    transition: 0.3s;
    &:hover {
      box-shadow: 0px 10px 10px #ff66003d;
      transform: translateY(-10px);
    }
    img {
      width: 100%;
      height: 180px;
    }
    .info {
      display: flex;
      padding: 0 20px;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      .student,
      .time {
        i {
          color: #ff6600;
          margin-right: 6px;
        }
      }
    }
    .title {
      text-align: left;
      margin: 0 20px;
      border-bottom: 1px solid #ff660060;
      a {
        text-decoration: none;
        text-align: center;
        transition: 0.2s;
        &:hover {
          text-decoration: underline;
          color: #ff6600;
          h3 {
            color: #ff6600;
          }
        }
      }
      h3 {
        font-size: 25px;
        font-weight: normal;
        margin-bottom: 20px;
        transition: 0.3s;
        color: black;
      }
    }
    .details {
      padding: 0 20px;
      display: flex;
      justify-content: space-between;
      .rating i {
        color: #ff6600;
        margin-right: 6px;
      }
    }
  }
  .actions {
    width: 320px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;
    background: #f2f1f8;
    border-radius: 6px 6px 20px 20px;
    margin-top: 5px;
    padding: 8px;
    a {
      text-decoration: none;
      color: #44425a;
      transition: 0.3s;

      &:hover {
        color: black;
      }
    }
    button {
      color: white;
      background-color: red;
      padding: 6px 8px;
      border: none;
      border-radius: 8px;
      border: 1px solid transparent;
      transition: 0.3s;
      cursor: pointer;
      &:hover,
      &:active {
        border-color: red;
        color: red;
        background-color: transparent;
      }
    }
  }
}
.white {
  .course {
    background-color: white;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.22);
  }
}

@media (max-width: 390px) {
  .courses {
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)) !important;
    .course,
    .actions {
      width: 260px !important;
    }
  }
}
@media (max-width: 330px) {
  .courses {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)) !important;
    .course,
    .actions {
      width: 200px !important;
    }
  }
}
</style>
