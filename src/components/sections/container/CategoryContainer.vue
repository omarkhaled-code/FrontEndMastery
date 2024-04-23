<template>
  <router-link
    :to="{
      path: '/category/' + name,
      state: { id: code },
    }"
    class="cat"
  >
    <img :src="path + image" alt="" />

    <div class="info">
      <h3>{{ name }}</h3>
      <p>{{ courses }}</p>
    </div>
  </router-link>
</template>
<script>
export default {
  name: "CourseContainer",
  data() {
    return {
      path: "http://127.0.0.1:8000/storage/",
    };
  },
  props: ["code", "image", "name", "courses"],
};
</script>
<style lang="scss" scoped></style>
