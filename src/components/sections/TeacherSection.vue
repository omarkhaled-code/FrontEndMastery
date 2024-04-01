<template>
  <section>
    <SectionTitle title="Teachers" paragraph="Meet Our Teachers" />
    <div class="teachers">
      <div class="teacher">
        <div class="img">
          <RouterLink to="/teachers/4">
            <img src="@/assets/team-4.jpg" alt="team" />
          </RouterLink>
          <div class="icons">
            <router-link to="https://facebook.com">
              <i>O</i>
            </router-link>
            <router-link to="https://instgram.com">
              <i>O</i>
            </router-link>
            <router-link to="https://omarkhaled-code@github.com">
              <i>O</i>
            </router-link>
          </div>
        </div>
        <div class="info">
          <h3>Jhon Doe</h3>
          <p>Web Designer</p>
        </div>
      </div>
      <div class="teacher">
        <div class="img">
          <RouterLink to="/teachers/4">
            <img src="@/assets/team-1.jpg" alt="team" />
          </RouterLink>
          <div class="icons">
            <router-link to="https://facebook.com">
              <i>O</i>
            </router-link>
            <router-link to="https://instgram.com">
              <i>O</i>
            </router-link>
            <router-link to="https://omarkhaled-code@github.com">
              <i>O</i>
            </router-link>
          </div>
        </div>
        <div class="info">
          <h3>Jhon Doe</h3>
          <p>Web Designer</p>
        </div>
      </div>
      <div class="teacher">
        <div class="img">
          <RouterLink to="/teachers/4">
            <img src="@/assets/team-2.jpg" alt="team" />
          </RouterLink>
          <div class="icons">
            <router-link to="https://facebook.com">
              <i>O</i>
            </router-link>
            <router-link to="https://instgram.com">
              <i>O</i>
            </router-link>
            <router-link to="https://omarkhaled-code@github.com">
              <i>O</i>
            </router-link>
          </div>
        </div>
        <div class="info">
          <h3>Jhon Doe</h3>
          <p>Web Designer</p>
        </div>
      </div>
      <div class="teacher">
        <div class="img">
          <RouterLink to="/teachers/4">
            <img src="@/assets/team-3.jpg" alt="team" />
          </RouterLink>
          <div class="icons">
            <router-link to="https://facebook.com">
              <i>O</i>
            </router-link>
            <router-link to="https://instgram.com">
              <i>O</i>
            </router-link>
            <router-link to="https://omarkhaled-code@github.com">
              <i>O</i>
            </router-link>
          </div>
        </div>
        <div class="info">
          <h3>Jhon Doe</h3>
          <p>Web Designer</p>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import SectionTitle from "@/components/SectionTitle.vue";

export default {
  name: "TeachersSection",
  components: {
    SectionTitle,
  },
};
</script>
<style lang="scss" scoped>
.teachers {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 25px;

  .teacher {
    width: 250px;
    height: 300px;
    border-radius: 10px;
    background: #f2f1f8;
    overflow: hidden;
    .img {
      position: relative;
      transition: 0.5s;
      img {
        width: 100%;
        height: 200px;
        transition: 0.3s;
      }
      &:hover {
        img {
          filter: brightness(0.5);
        }
        .icons {
          display: block;
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
