<template>
  <section>
    <SectionTitle title="Testimonial" paragraph="What Say Our Students" />
    <div class="testimonial">
      <div v-for="item in testimonials" :key="item.id">
        <TestimonialContainer
          :name="item.user['name']"
          :image="item.user['image']"
          :profession="item.user['profession']"
          :description="item.content"
        />
      </div>
    </div>
    <div v-if="len == 0">
      <h2>No Testimonial Yet</h2>
    </div>
  </section>
</template>
<script>
import SectionTitle from "@/components/SectionTitle.vue";
import TestimonialContainer from "@/components/sections/container/TestimonialContainer.vue";
import axios from "axios";
export default {
  name: "TestimonialSection",
  data() {
    return {
      testimonials: [],
      len: 0,
    };
  },
  components: {
    SectionTitle,
    TestimonialContainer,
  },
  async created() {
    await axios.get("all-testimonial").then((response) => {
      this.testimonials = response.data.testimonials;
      this.len = response.data.testimonials.length;
    });
  },
};
</script>
<style lang="scss">
.testimonial {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  justify-content: center;
  justify-items: center;
  align-items: center;
  gap: 50px 25px;
  padding: 10px;
  margin: 15px auto;

  .testimonial-item {
    background-color: #f2f1f8;
    border-radius: 10px;
    padding: 20px;
    text-align: left;
    position: relative;
    box-shadow: 0px 2px 5px #ff660038;
    min-width: 300px;
    img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      position: absolute;
      right: -10px;
      top: -50px;
      border: 3px solid white;
      box-shadow: 5px 5px 10px white;
    }
    h4 {
      color: #ff6600;
      font-size: 20px;
      margin-bottom: 5px;
    }
    span {
      display: block;
      margin-bottom: 10px;
    }
    p {
      color: #6c6a74;
      line-height: 1.5;
    }
  }
}
</style>
