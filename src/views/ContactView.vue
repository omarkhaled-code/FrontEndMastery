<template>
  <section>
    <SectionTitle title="Contact" paragraph="Contact For Any Query" />
    <form @click.prevent="">
      <input type="text" placeholder="Name" />
      <input type="text" placeholder="Email" />
      <input type="text" placeholder="Subject" />
      <textarea> Type Your Message Here...</textarea>
      <button class="btn">Send Message</button>
    </form>
  </section>
</template>
<script>
import SectionTitle from "@/components/SectionTitle.vue";
export default {
  name: "ContactView",
  components: {
    SectionTitle,
  },
};
</script>
<style lang="scss" scoped>
form {
  padding: 30px;
  margin: 10px auto;
  width: 450px;
  background-color: #f2f1f8;
  border-radius: 20px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  input,
  textarea {
    width: 100%;
    padding: 10px 15px;
    border: none;
    border-radius: 6px;
    margin-bottom: 10px;
    resize: vertical;
    &:focus {
      outline-color: #ff6600;
    }
  }
  textarea {
    color: #5d5d5d;
    font-weight: bold;
    transition: 0.3s;
    &:focus {
      color: black;
      font-weight: normal;
    }
  }
  .btn {
    margin-top: 25px;
    width: fit-content;
  }
}
</style>
