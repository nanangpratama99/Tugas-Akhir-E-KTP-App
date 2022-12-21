<template>
  <div class="row">
    <div class="col col-md-3">
      <Sidebar></Sidebar>
    </div>
    <div class="col col-md-9 ml-5">
      <Title></Title>
      <Form></Form>
    </div>
    <div class="col col-md-3"></div>
    <div class="col col-md-9">
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Title from "../components/Title.vue"
import Form from "../components/Form.vue";
import Sidebar from "../components/SidebarComp.vue";
import Footer from "../components/FooterComp.vue"

export default {
  name: "FormS",
  components: {
    Title,
    Form,
    Sidebar,
    Footer,
  }
};
</script>

<style scoped>

</style>