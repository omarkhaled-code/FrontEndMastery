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
          <a href="https://facebook.com" target="_blank">
            <i class="facebook"><fontIcon :icon="['fab', 'facebook']" /></i>
          </a>
          <a href="https://instagram.com" target="_blank">
            <i class="instagram"><fontIcon :icon="['fab', 'instagram']" /></i>
          </a>
          <a href="https://twitter.com" target="_blank">
            <i class="twitter"><fontIcon :icon="['fab', 'twitter']" /></i>
          </a>
        </div>
      </div>
      <div class="links">
        <div class="header">
          <h5>Our Category</h5>
        </div>
        <li v-for="cat in category" :key="cat.name">
          <router-link
            :to="{
              path: '/category/' + cat.name,
              state: { id: cat.id },
            }"
          >
            {{ cat.name }}</router-link
          >
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

        <!-- <div class="input">
          <input
            type="email"
            mailto="omarkhaled12oki@gmail.com"
            placeholder="Your Email Address"
          />

          <button type="submit">Subscription</button> 
        </div>
        -->
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
import axios from "axios";

export default {
  name: "AppFooter",
  data() {
    return {
      category: [],
    };
  },
  async created() {
    let response = await axios.get("get-links");
    this.category = response.data.category;
  },
};
</script>
<style lang="scss" scoped>
footer {
  padding-top: 70px;
}
.footer-header {
  width: 100%;
  padding: 30px 30px 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  justify-content: center;
  justify-items: center;
  align-content: start;
  background-color: #44425a;
  justify-content: space-between;
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
      margin-top: 10px;
      gap: 25px;
      a {
        text-decoration: none;
        color: white;
        transition: 0.3s;
      }
      i {
        border-radius: 10px;
        border: 1px solid white;
        padding: 6px 8px;
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
      display: flex;
      input,
      button {
        padding: 10px 15px;
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
    margin: 10px auto;
    padding: 10px;
    text-align: left;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .links {
    padding: 10px 20px;
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

@media (max-width: 992px) {
  .footer-header {
    .messages,
    .links,
    .info {
      margin: 10px;
    }
    .messages {
      .input {
        input,
        button {
          padding: 8px 12px;
        }
      }
    }
  }
}

@media (max-width: 560px) {
  .footer-header {
    padding: 30px 0px 0;
  }
  .footer {
    font-size: 14px;
  }
}
</style>
