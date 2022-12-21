<template>
    <div class="row">
        <div class="col col-md-3">
            <Sidebar></Sidebar>
        </div>
        <div class="col col-md-9 ml-5">
            <Form></Form>
            <Footer></Footer>
        </div>
    </div>
</template>

<script>
import Form from "../components/Form.vue";
import Sidebar from "../components/SidebarComp.vue";
import Footer from "../components/FooterComp.vue";

export default {
    name: "DetailKk",
    components: {
        Sidebar,
        Form,
        Footer
    }
}
</script>

<style>

</style>