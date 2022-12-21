<template>
    <div class="row">
        <div class="col col-md-3">
            <Sidebar></Sidebar>
        </div>
        <div class="col col-md-9 ml-5">
            <Title></Title>
            <DetailAnggota></DetailAnggota>
        </div>
        <div class="col col-md-3"></div>
        <div class="col col-md-9">
            <Footer class="shadow"></Footer>
        </div>
    </div>
</template>

<script>
import DetailAnggota from "../components/DetailAnggotaForm.vue";
import Sidebar from "../components/SidebarComp.vue";
import Footer from "../components/FooterComp.vue"
import Title from "../components/Title.vue"

export default {
    name: "FormS",
    components: {
        Title,
        DetailAnggota,
        Sidebar,
        Footer,
    }
};
</script>

<style scoped>

</style>