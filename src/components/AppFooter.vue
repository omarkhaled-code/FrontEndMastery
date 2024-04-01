<template>
  <footer>
    <div class="footer-header">
      <div class="info">
        <div class="header">
          <h5>GET IN TOUCH</h5>
        </div>
        <p>123 Street, New York, USA</p>
        <p>+012 345 67890</p>
        <p>info@example.com</p>
        <div class="icons">
          <router-link to="/#"> <i>H</i> </router-link>
          <router-link to="/#"> <i>H</i> </router-link>
          <router-link to="/#"> <i>H</i> </router-link>
          <router-link to="/#"> <i>H</i> </router-link>
        </div>
      </div>
      <div class="links">
        <div class="header">
          <h5>Our Courses</h5>
        </div>
        <li>
          <router-link to="/#">Web Design</router-link>
        </li>
        <li>
          <router-link to="/#">apps Design</router-link>
        </li>
        <li>
          <router-link to="/#">Marketing</router-link>
        </li>
        <li>
          <router-link to="/#">Research</router-link>
        </li>
        <li>
          <router-link to="/#">SEO</router-link>
        </li>
      </div>
      <div class="messages">
        <div class="header">
          <h5>NEWSLETTER</h5>
        </div>
        <p>
          Rebum labore lorem dolores kasd est, et ipsum amet et at kasd, ipsum
          sea tempor magna tempor. Accu kasd sed ea duo ipsum. Dolor duo eirmod
          sea justo no lorem est diam
        </p>

        <div class="input">
          <input
            type="email"
            mailto="omarkhaled12oki@gmail.com"
            placeholder="Your Email Address"
          />

          <button type="submit">Subscription</button>
        </div>
      </div>
    </div>
    <div class="footer">
      <p>
        © <span>Domain Name.</span>
        All Rights Reserved. Designed by
        <span>HTML Codex</span>
      </p>
    </div>
  </footer>
</template>
<script>
export default {
  name: "AppFooter",
};
</script>
<style lang="scss" scoped>
footer {
  padding-top: 70px;
}
.footer-header {
  width: 100%;
  height: 370px;
  display: flex;
  padding: 10px 25px;
  justify-content: space-between;
  align-items: center;
  background-color: #44425a;
  h5 {
    color: #ff6600;
    font-size: 23px;
  }

  .info {
    p {
      color: white;
      font-size: 18px;
    }
    .icons {
      display: flex;
      margin-top: 25px;
      gap: 25px;
      a {
        text-decoration: none;
        color: white;
        transition: 0.3s;
      }
      i {
        border-radius: 10px;
        border: 1px solid white;
        padding: 8px 12px;
        &:hover {
          background-color: white;
          color: #44425a;
        }
      }
    }
  }
  .links {
    li {
      position: relative;
      list-style: none;
      transition: 0.3s;
      margin-left: 10px;
      a {
        color: white;
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }

      &::before {
        content: "";
        position: absolute;
        left: -15px;
        top: 50%;
        transform: translateY(-50%);
        border: 5px solid green;
        border-color: transparent transparent transparent white;
      }
    }
  }
  .messages {
    p {
      line-height: 1.6;
      color: white;
    }
    .input {
      input,
      button {
        padding: 15px 20px;
        border: none;
        outline: none;
      }
      input {
        border-radius: 10px 0 0 10px;
      }
      button {
        border-radius: 0 10px 10px 0;
        color: white;
        background-color: #ff6600;
        cursor: pointer;
      }
    }
  }
  .info,
  .links,
  .messages {
    width: calc(90% / 3);
    margin: auto;
    padding: 10px;
    text-align: left;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
}

.footer {
  padding: 25px 0;
  background-color: #44425a;
  border-top: 1px solid rgba(255, 255, 255, 0.212);
  letter-spacing: 1px;
  color: white;
  span {
    color: #ff6600;
  }
}
</style>
