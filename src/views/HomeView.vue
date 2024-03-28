<template>
  <div class="home">
      <SectionTitle title="Home Page" paragraph="Welcome To our home page" />
  </div>
</template>

<script>
// @ is an alias to /src

import SectionTitle from "@/components/SectionTitle.vue"
export default {
  name: 'HomeView',
  components: {
    SectionTitle
  }
}
</script>
