<template>
  <section class="about-section">
    <img src="@/assets/about.jpg" alt="about-img" />
    <div class="info">
      <h3>About Us</h3>
      <h2>Innovative Way To Learn</h2>
      <p>
        Aliquyam accusam clita nonumy ipsum sit sea clita ipsum clita, ipsum
        dolores amet voluptua duo dolores et sit ipsum rebum, sadipscing et erat
        eirmod diam kasd labore clita est. Diam sanctus gubergren sit rebum
        clita amet, sea est sea vero sed et. Sadipscing labore tempor at sit
        dolor clita consetetur diam. Diam ut diam tempor no et, lorem dolore
        invidunt no nonumy stet ea labore, dolor justo et sit gubergren diam sed
        sed no ipsum. Sit tempor ut nonumy elitr dolores justo aliquyam ipsum
        stet
      </p>

      <button class="btn">Learn More</button>
    </div>
  </section>
</template>
<script>
export default {
  name: "AboutSection",
};
</script>
<style lang="scss">
.about-section {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  width: 90%;
  margin: 25px auto;
  padding-bottom: 70px;
  padding-top: 70px;
  img {
    width: 450px;
    height: 450px;
    border-radius: 10px;
  }
  .info {
    text-align: left;
    gap: 20px;
    display: flex;
    flex-direction: column;
    h3 {
      color: #ff6600;
      font-size: 25px;
    }
    h2 {
      font-size: 30px;
      letter-spacing: 3px;
      font-weight: bolder;
    }
    p {
      color: #6c6a74;
      line-height: 1.5;
      letter-spacing: 1px;
    }
    .btn {
      width: 200px;
      padding: 15px 0;
    }
  }
}
</style>
