<template>
    <!-- TABLE START -->
    <table class="table mt-3 table table-striped shadow">
        <thead>
            <tr class="text-center">
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
                <td style="width:100px">{{ item.nik }}</td>
                <td>{{ item.id_kk }}</td>
                <td>{{ item.nama }}</td>
                <td>{{ item.agama }}</td>
                <td>{{ item.pendidikan }}</td>
                <td style="width:150px">{{ item.jenis_kelamin }}</td>
                <td>
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
            if (confirm(`Yakin Ingin menghapus data ini ?`)) {
                anggotaKeluargaServices.deleteAnggotaKeluarga(id)
                    .then((response) => {
                        console.log(response.data);
                        location.reload();
                    })
                    .catch((e) => {
                        console.log(e);
                    });
            } else {
                alert("Hapus Dibatalkan");
            }
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

td {
    border: 0.5px solid rgb(42, 42, 42);
}

thead {
    background: #4B56D2;
    color: aliceblue;
}
</style>