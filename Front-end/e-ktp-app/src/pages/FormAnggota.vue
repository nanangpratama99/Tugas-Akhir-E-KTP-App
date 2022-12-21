<template>
    <div class="row">
        <div class="col col-md-3">
            <Sidebar></Sidebar>
        </div>
        <div class="col col-md-9 ml-5">
            <h3 class="mt-4 title shadow">
                <img class="ico-title" src="../assets/anggota-blue.svg" alt="">Seluruh Anggota Keluarga
            </h3>
            <ListAnggotaComVue class="list-anggota"></ListAnggotaComVue>
        </div>
        <div class="col col-md-3"></div>
        <div class="col col-md-9">
            <Footer></Footer>
        </div>
    </div>
</template>

<script>
import Sidebar from "../components/SidebarComp.vue";
import Footer from "../components/FooterComp.vue";
import ListAnggotaComVue from "@/components/ListAnggotaCom.vue";

export default {
    name: "FormS",
    components: {
        Sidebar,
        Footer,
        ListAnggotaComVue,
    }
};
</script>

<style scoped>
.title {
    padding: 10px 10px;
    border-radius: 10px;
    /* background-color: #4B56D2; */
    margin-left: 20px;
    color: aliceblue;
    font-weight: 400;
    width: 95%;
    border-left: 5px solid #4B56D2;
    color: #4B56D2;
}

.ico-title {
    width: 4.5%;
    padding-right: 4px;
    padding-bottom: 3px;
}
</style>