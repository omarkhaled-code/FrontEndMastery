<template>
  <div class="category">
    <div v-for="cat in category" :key="cat.id">
      <CategoryContainer
        :code="cat.id"
        :name="cat.name"
        :image="cat.image"
        courses="100 courses"
      />
      <div v-if="User">
        <div class="actions" v-if="Access == 'admin'">
          <router-link
            :to="{
              path: '/dashboard/category/edit/' + cat.id,
              state: { id: cat.id },
            }"
            ><fontIcon :icon="['fas', 'pen-to-square']"
          /></router-link>
          <button @click="deleteCat(cat.id)">
            <fontIcon :icon="['fas', 'trash']" />
          </button>
        </div>
      </div>
    </div>
  </div>
  <div v-if="len == 0">
    <h2>No Category Yet</h2>
  </div>
</template>
<script>
import axios from "axios";
import CategoryContainer from "@/components/sections/container/CategoryContainer.vue";
import { mapGetters } from "vuex";

export default {
  name: "CategorySection",
  props: ["type"],
  components: {
    CategoryContainer,
  },
  data() {
    return {
      category: null,
      len: 0,
    };
  },

  async created() {
    if (this.type) {
      if (this.type == "all") {
        await axios.get("all-cat").then((response) => {
          this.category = response.data.allCategory;
          this.len = response.data.allCategory.length;
        });
      } else if (this.type == "latest") {
        await axios.get("lastCat").then((response) => {
          this.category = response.data.LastCategory;
          this.len = response.data.LastCategory.length;
        });
      }
    }
  },
  computed: {
    ...mapGetters(["User", "Access"]),
  },
  methods: {
    async deleteCat(code) {
      await axios.post("delete-cat", {
        id: code,
      });
    },
  },
};
</script>
<style lang="scss">
.category {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 25px;
  justify-content: center;
  justify-items: center;
  align-items: center;

  .cat {
    display: block;
    width: 260px;
    height: 160px;
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    &:hover img {
      height: 120%;
    }

    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      background-color: rgba(0, 0, 0, 0.4);
      width: 100%;
      height: 100%;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      transition: 0.3s;
    }
    .info {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: white;
      h3 {
        font-weight: bold;
        margin-bottom: 8px;
        font-size: 20px;
      }
    }
  }
}
.actions {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  background: #f2f1f8;
  border-radius: 6px 6px 20px 20px;
  margin-top: 5px;
  a {
    text-decoration: none;
    color: #44425a;
  }
  button {
    color: white;
    background-color: red;
    padding: 6px 8px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
  }
}
@media (max-width: 340px) {
  section {
    .category {
      grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
      div a,
      div .actions {
        width: 210px !important;
      }
    }
  }
}
</style>
