<template>
  <div class="blogs">
    <div class="blog">
      <router-link to="/#">
        <img src="@/assets/blog-3.jpg" alt="" />
      </router-link>
      <div class="info">
        <h3 class="title">
          Lorem elitr magna stet eirmod labore amet labore clita at ut clita
        </h3>
        <p class="time">Jan 01, 2050</p>
      </div>
    </div>
    <div class="blog">
      <router-link to="/#">
        <img src="@/assets/blog-1.jpg" alt="" />
      </router-link>
      <div class="info">
        <h3 class="title">
          Lorem elitr magna stet eirmod labore amet labore clita at ut clita
        </h3>
        <p class="time">Jan 01, 2050</p>
      </div>
    </div>
    <div class="blog">
      <router-link to="/#">
        <img src="@/assets/blog-2.jpg" alt="" />
      </router-link>
      <div class="info">
        <h3 class="title">
          Lorem elitr magna stet eirmod labore amet labore clita at ut clita
        </h3>
        <p class="time">Jan 01, 2050</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogSection",
  components: {},
};
</script>
<style lang="scss" scoped>
.blogs {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 25px;
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
</style>
