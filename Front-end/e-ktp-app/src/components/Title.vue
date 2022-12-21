<template>
    <div>
        <div>
            <h3 class="mt-4 shadow title" v-show="TitleName == `Home`">
                <img class="icon" src="../assets/home-blue.svg" alt="">Homepage
            </h3>
            <h3 class="mt-4 shadow title" v-show="TitleName == `Addkk`">
                <img class="icon" src="../assets/tambah-angota-blue.svg" alt="">Tambah Kartu Keluarga
            </h3>
            <h3 class="mt-4 shadow title" v-show="TitleName == `Anggota`">Daftar Anggota Keluarga</h3>
            <h3 class="mt-4 shadow title" v-show="TitleName == `DetailAnggota`">
                <img class="icon" src="../assets/detail-anggota-keluarga-blue.svg" alt="">Detail Anggota Keluarga
            </h3>
            <h3 class="mt-4 shadow title" v-show="TitleName == `DetailKK`">
                <img class="icon" src="../assets/detail-kk-blue.svg" alt="">Detail Kartu Keluarga
            </h3>
        </div>
    </div>
</template>

<script>
export default {
    name: "TitleS",
    data() {
        return {
            Title: this.$route.path,
            TitleName: this.$route.name,
        }
    }
}
</script>

<style scoped>
.title {
    padding: 10px 10px;
    border-radius: 10px;
    background-color: rgb(255, 255, 255);
    margin-left: 20px;
    border-left: 5px solid #4B56D2;
    color: #4B56D2;
    margin-top: 2px;
    font-weight: 400;
    width: 96%;
}

.icon {
    width: 4%;
    margin-bottom: 6px;
    margin-right: 5px;
}
</style>