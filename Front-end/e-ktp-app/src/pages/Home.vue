<template>
  <div class="row">
    <div class="col col-md-3">
      <Sidebar></Sidebar>
    </div>
    <div class="col col-md-9 dashboard">
      <Title></Title>
      <Dashboard></Dashboard>
    </div>
    <div class="col col-md-3"></div>
    <div class="col col-md-9">
      <Footer class="mt-3 shadow"></Footer>
    </div>
  </div>
</template>

<script>
import Title from "../components/Title.vue"
import Sidebar from "../components/SidebarComp.vue";
import Dashboard from "../components/DashboardComp.vue";
import Footer from "../components/FooterComp.vue";

export default {
  name: "DashboardS",
  components: {
    Title,
    Sidebar,
    Dashboard,
    Footer,
  },
};
</script>

<style>

</style>