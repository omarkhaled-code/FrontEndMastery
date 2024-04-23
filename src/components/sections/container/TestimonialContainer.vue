<template>
  <div class="testimonial-item">
    <img :src="path + image" alt="testimonial" />
    <h4>{{ name }}</h4>
    <span>{{ profession }}</span>

    <p>
      {{
        description.length > 150
          ? description.substring(0, 150) + "..."
          : description
      }}
    </p>
  </div>
</template>
<script>
export default {
  name: "TestimonialContainer",
  props: ["name", "profession", "description", "image"],
  data() {
    return {
      text: "",
      path: "http://127.0.0.1:8000/storage/",
    };
  },
};
</script>
