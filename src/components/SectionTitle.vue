<template>
  <div class="title">
    <h4>{{ title }}</h4>
    <h2>{{ paragraph }}</h2>
  </div>
</template>

<script>
export default {
  name: "SectionTitle",
  props: {
    title: String,
    paragraph: String,
  },
};
</script>

<style scoped lang="scss">
.title {
  text-transform: uppercase;
  margin: 10px auto;

  margin-bottom: 50px;
  h4 {
    color: #ff6600;
    margin-bottom: 10px;
    letter-spacing: 5px;
    font-size: 20px;
    font-weight: normal;
  }
  h2 {
    color: #44425a;
    margin-top: 10px;
    letter-spacing: 3px;
    font-weight: bold;
    font-size: 35px;
  }
}
</style>
