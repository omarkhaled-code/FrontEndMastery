<template>
  <div class="blog">
    <router-link
      :to="{
        path: '/dashboard/blog/show/' + code,
        state: { id: code },
      }"
    >
      <img v-if="image" :src="path + image" alt="" />
    </router-link>
    <div class="info">
      <h3 class="title">
        {{ title }}
      </h3>
      <p class="time">{{ time }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "BlogContainer",
  data() {
    return {
      path: "http://127.0.0.1:8000/storage/",
    };
  },
  props: ["code", "image", "title", "time"],
};
</script>
<style lang="scss" scoped></style>
