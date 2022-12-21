<template>
  <div>
    <div>
      <!-- CARD START -->
      <div class="cards">
        <div class="jkk shadow"><span class="ico-card-2 material-symbols-outlined">
            folder_shared
          </span>
          <p class="text">Jumlah Kartu Keluarga</p>
          <p class="angka">{{ kartuKeluargaData.length }}</p>
        </div>

        <div class="jsw shadow">
          <span class="ico-card-1 material-symbols-outlined">
            groups
          </span>
          <p class="text">Jumlah Seluruh Warga</p>
          <p class="angka">{{ anggotaKeluargaData.length }}</p>
        </div>
      </div>
      <!-- CARD END -->

      <h5 class="title-table">Tabel Kartu Keluarga</h5>
      <!-- TABLE START -->
      <table class="table mt-3 table table-striped shadow">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Nomor KK</th>
            <th scope="col">Alamat</th>
            <th scope="col">Kota</th>
            <th scope="col">Kode Pos</th>
            <th scope="col" class="text-center">Action</th>
          </tr>
        </thead>
        <tbody v-if="kartuKeluargaData.length > 0">
          <tr v-for="(item, index) in kartuKeluargaData" :key="index">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ item.nomor_kk }}</td>
            <td>{{ item.alamat }}</td>
            <td>{{ item.kabupaten_kota }}</td>
            <td>{{ item.kode_pos }}</td>
            <td class="text-center">
              <!-- BUTTON -->
              <router-link :to="{ path: '/detailKK/' + item.nomor_kk }">
                <button class="btn btn-success" type="submit">Detail</button>
              </router-link>

              <button class="btn btn-danger" type="submit" @click="deleteKK(item.id)">
                Hapus
              </button>
            </td>
          </tr>
        </tbody>
        <tbody v-else>
          <tr class="msg-tr text-center">
            <td colspan="6" class="msg-null">
              <h3>Saat ini Tidak Ada Data Kartu Keluarga !</h3>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- TABLE END -->
    <!-- <div v-show="success">
      <Success :propsAlert="textAlert"></Success>
    </div> -->
  </div>
</template>

<script>
import kartuKeluargaServices from "@/services/kkServices";
import anggotaKeluargaServices from "@/services/anggotaKeluargaServices";
// import Success from "./Success.vue";

export default {
  name: "DashboardS",

  data() {
    return {
      kartuKeluargaData: [],
      anggotaKeluargaData: [],
      textAlert: '',
    };
  },


  methods: {
    // METHOD GET ALL DATA KK
    getKK() {
      kartuKeluargaServices
        .getAll()
        .then((response) => {
          this.kartuKeluargaData = response.data;
          console.log(this.kartuKeluargaData);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    // METHOD GET ALL ANGGOTA
    getAnggota() {
      anggotaKeluargaServices
        .getAll()
        .then((response) => {
          this.anggotaKeluargaData = response.data;
          console.log(this.anggotaKeluargaData);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    // METHOD DELETE KK
    deleteKK(id) {
      this.$swal({
        title: 'Hapus',
        text: 'Apakah anda Yakin Menghapus data kartu Keluarga',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: "Ya Hapus!",
        cancelButtonText: "Jangan Dihapus!",
        showLoaderConfirm: true,
      }).then((result) => {
        if (result.value) {
          this.$swal(
            "Delete",
            "Berhasil Menghapus data Kartu Keluarga!"
          ).then(function () {
            window.location.reload();
          });
          kartuKeluargaServices
            .deleteKartuKeluarga(id)
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
    this.getKK();
    this.getAnggota();
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

h2 {
  margin-left: 20px;
}

/* Button */
.btn-success {
  padding: 5px 11px;
  margin-right: 10px;
  background-color: #00b762;
  border: none;
}

.btn-danger {
  padding: 5px 13px;
  margin-right: 10px;
  border: none;
  background-color: rgb(236, 79, 79);
}



.cards {
  display: flex;
  flex-direction: row;
  margin-top: 25px;
  justify-content: flex-start;
  margin-left: 20px;
}

/* Card Start */
.jkk {
  background-color: #00df7a;
  color: rgb(59, 59, 59);
  margin-right: 40px;
  width: 280px;
  height: 160px;
  padding: 20px 20px;
  border-radius: 20px;
  transition: transform 400ms;
  cursor: pointer;
  color: #f2f2f2;
}

.jkk:hover {
  transform: scale(1.2);
}

.jsw {
  background-color: rgb(255, 198, 77);
  color: aliceblue;
  width: 280px;
  height: 160px;
  padding: 20px 20px;
  border-radius: 20px;
  transition: transform 400ms;
  cursor: pointer;
}

.jsw:hover {
  transform: scale(1.2);
}


.jsa {
  background-color: rgb(65, 67, 111);
  color: aliceblue;
  width: 270px;
  height: 150px;
  padding: 20px 20px;
  border-radius: 20px;
}

/* Card End */

table {
  border: 1px solid #f2f2f2;
  margin-left: 20px;
  width: 95%;
}

.angka {
  font-size: 40px;
  margin-bottom: 5px;
}

.text {
  font-size: 20px;
  margin-top: 10px;
}

.title-table {
  margin-top: 25px;
  margin-left: 15px;
  border-left: 5px solid #4B56D2;
  padding-left: 4px;
  margin-left: 20px;
}

h3 {
  color: #4B56D2;
}

/* span {
  background-color: rgb(255, 255, 255);
  padding: 5px 5px;
  border-radius: 100%;
} */

.ico-card-2 {
  color: #00df7a;
  background-color: rgb(255, 255, 255);
  padding: 5px 5px;
  border-radius: 100%;
}

.ico-card-1 {
  color: rgb(255, 198, 77);
  background-color: rgb(255, 255, 255);
  padding: 5px 5px;
  border-radius: 100%;
}

.delete {
  font-size: 20px;
}

/* Tabel */


/*  */
</style>