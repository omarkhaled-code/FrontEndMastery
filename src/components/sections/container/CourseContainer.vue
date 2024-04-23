<template>
  <div class="course">
    <RouterLink
      :to="{
        path: '/show-course/' + code,
        state: { id: code },
      }"
    >
      <img :src="path + image" alt="" />
    </RouterLink>
    <div class="info">
      <span class="student">
        <i>&</i>
        {{ student }} Students
      </span>
      <span class="time">
        <i>#</i>
        {{ time }}
      </span>
    </div>
    <div class="title">
      <RouterLink
        :to="{
          path: '/show-course/' + code,
          state: { id: code },
        }"
        ><h3>{{ title }}</h3></RouterLink
      >
    </div>
    <div class="details">
      <span class="rating">
        <i>*</i>
        4.5 (255)
      </span>
      <span class="price">${{ price }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "CourseContainer",
  data() {
    return {
      path: "http://127.0.0.1:8000/storage/",
    };
  },
  props: ["title", "price", "image", "code", "student", "time"],
};
</script>
<style lang="scss"></style>
