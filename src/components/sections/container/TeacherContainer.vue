<template>
  <div class="teacher">
    <div class="img">
      <img :src="path + image" alt="teacher" />

      <div class="icons">
        <a :href="instagram" target="_blank">
          <i><fontIcon :icon="['fab', 'instagram']" /></i>
        </a>

        <a :href="twitter" target="_blank">
          <i><fontIcon :icon="['fab', 'twitter']" /></i>
        </a>

        <a :href="facebook" target="_blank">
          <i><fontIcon :icon="['fab', 'facebook']" /></i>
        </a>
      </div>
    </div>
    <div class="info">
      <h3>{{ name }}</h3>
      <p>{{ profession }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "TeacherContainer",
  data() {
    return {
      path: "http://127.0.0.1:8000/storage/",
    };
  },
  props: [
    "code",
    "image",
    "instagram",
    "facebook",
    "twitter",
    "name",
    "profession",
  ],
};
</script>
<style lang="scss">
.teachers {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  justify-content: center;
  justify-items: center;
  align-items: center;
  gap: 25px;

  .teacher {
    width: 250px;
    height: 350px;
    border-radius: 10px;
    background: #f2f1f8;
    overflow: hidden;
    .img {
      position: relative;
      transition: 0.5s;
      img {
        width: 100%;
        height: 250px;
        transition: 0.3s;
      }
      &:hover {
        img {
          filter: brightness(0.5);
        }
        .icons {
          display: flex;
        }
      }
      .icons {
        position: absolute;
        top: 50%;
        left: 50%;
        transition: 0.3s;
        transform: translate(-50%, -50%);
        display: none;
        a {
          text-decoration: none;
          color: white;
          transition: 0.3s;
          i {
            font-size: 25px;
            padding: 5px 10px;
            margin: 0 10px;
            border: 1px solid white;
            border-radius: 10px;
            cursor: pointer;
            transition: 0.3s;
          }
          &:hover {
            color: black;
            i {
              background: white;
            }
          }
        }
      }
    }
    .info {
      margin: 20px auto;
      h3 {
        margin-bottom: 10px;
      }
      p {
        color: #4f4e4e;
      }
    }
  }
}
</style>
