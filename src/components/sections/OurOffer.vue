<template>
  <section>
    <div class="our-offer">
      <div class="text">
        <h4>Need Any Courses</h4>
        <h3>30% Off For New Students</h3>
        <p class="detail">
          Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo dolor
          lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo. Erat justo
          sed sed diam. Ea et erat ut sed diam sea ipsum est dolor
        </p>
        <ul>
          <li>
            <i>//</i>
            Labore eos amet dolor amet diam
          </li>
          <li>
            <i>//</i>
            Labore eos amet dolor amet diam
          </li>
          <li>
            <i>//</i>
            Labore eos amet dolor amet diam
          </li>
        </ul>
      </div>
      <div class="sign-btn">
        <button class="btn">
          <router-link to="/login"> Sign Now </router-link>
        </button>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "OurOffer",
};
</script>
<style lang="scss" scoped>
section {
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8));
  background-size: cover;
  width: 100%;

  .our-offer {
    width: 85%;
    margin: 10px auto;
    display: flex;
    justify-content: space-around;
    align-items: center;

    .text {
      text-align: left;
      letter-spacing: 0.5px;
      h4 {
        color: #ff6600;
        margin-bottom: 10px;
      }
      h3 {
        margin-bottom: 25px;
        font-size: 25px;
        color: white;
      }
      .detail {
        width: 450px;
        line-height: 1.5;
        color: white;
      }
      ul {
        margin-top: 25px;
        i {
          color: #ff6600;
          margin-right: 15px;
        }
        li {
          list-style: none;
          color: white;
          margin: 10px 0;
        }
      }
    }
    .sign-btn {
      .btn {
        a {
          text-decoration: none;
          color: white;

          width: 150px;
          height: 30px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }
}

@media (max-width: 992px) {
  .our-offer {
    flex-direction: column;
    gap: 50px;
    .text {
      h3 {
        font-size: 20px;
      }

      section .our-offer .text .detail {
        width: 400px;
      }
      .sign-btn {
        .btn {
          width: 200px;
          height: 50px;
        }
      }
    }
  }
}
@media (max-width: 490px) {
  section .our-offer {
    .text {
      text-align: center;
      h3 {
        font-size: 19px;
      }
      .detail {
        width: 350px;
      }
      .sign-btn {
        .btn {
          width: 200px;
          height: 50px;
        }
      }
    }
  }
}

@media (max-width: 490px) {
  section .our-offer {
    .text {
      .detail {
        width: 300px;
      }
    }
  }
}
</style>
