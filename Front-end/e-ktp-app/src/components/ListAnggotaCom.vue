<template>
    <!-- TABLE START -->
    <table class="table mt-3 table table-striped shadow">
        <thead>
            <tr class="">
                <th scope="col">No</th>
                <th scope="col">Nomor KK</th>
                <th scope="col">NIK</th>
                <th scope="col">Nama</th>
                <th scope="col">Agama</th>
                <th scope="col">Pendidikan</th>
                <th scope="col">Jenis Kelamin</th>
                <th scope="col" class="text-center">Action</th>
            </tr>
        </thead>
        <tbody v-if="anggotaData.length > 0">
            <tr v-for="(item, index) in anggotaData" :key="index">
                <th scope="row" class="text-center">{{ index + 1 }}</th>
                <td style="width:100px">{{ item.id_kk }}</td>
                <td>{{ item.nik }}</td>
                <td>{{ item.nama }}</td>
                <td>{{ item.agama }}</td>
                <td>{{ item.pendidikan }}</td>
                <td style="width:150px">{{ item.jenis_kelamin }}</td>
                <td class="text-center">
                    <button class=" btn btn-danger" type="submit" @click="deleteAnggota(item.id)">Hapus</button>
                </td>
            </tr>
        </tbody>
        <tbody v-else>
            <tr>
                <td colspan="8" class="text-center">
                    <h4 class="text-center msg-agt">Data Anggota Keluarga Belum Ditambahkan</h4>
                </td>
            </tr>
        </tbody>
    </table>
    <!-- TABLE END -->
</template>

<script>
import anggotaKeluargaServices from '../services/anggotaKeluargaServices'

export default {
    name: 'ListAnggotaCom',

    data() {
        return {
            anggotaData: []
        };
    },

    methods: {
        getAll() {
            anggotaKeluargaServices
                .getAll()
                .then((response) => {
                    this.anggotaData = response.data;
                    console.log(this.anggotaData);
                })
                .catch((e) => {
                    console.log(e);
                });
        },

        deleteAnggota(id) {
            this.$swal({
                title: 'Hapus',
                text: 'Apakah anda Yakin Menghapus data Anggota Keluarga',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: "Ya Hapus!",
                cancelButtonText: "Jangan Dihapus!",
                showLoaderConfirm: true,
            }).then((result) => {
                if (result.value) {
                    this.$swal(
                        "Delete",
                        "Berhasil Menghapus data Anggota Keluarga!"
                    ).then(function () {
                        window.location.reload();
                    });
                    anggotaKeluargaServices
                        .deleteAnggotaKeluarga(id)
                        .then((response) => {
                            console.log(response.data);
                        })
                        .catch((e) => {
                            console.log(e);
                        });
                } else {
                    this.$swal("Batal", "Hapus Dibatalkan!");
                }
            })
        },
    },


    mounted() {
        this.getAll()
    }
}
</script>

<style scoped>
.table {
    margin-left: 20px;
    width: 95%;
}

thead tr th {
    font-weight: 600;
}

thead {
    background: #4B56D2;
    color: aliceblue;
}
</style>