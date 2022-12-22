import http from '../http-common';

class KK {
    // Create Data
    create(data) {
        return http.post("/kk/insert", data);
    }

    getAll() {
        return http.get("/kk/getAll");
    }

    updateKartuKeluarga(id, data) {
        return http.put(`/kk/update/${id}`, data);
    }
    
    updateKartuKeluargaByNokk(nomor_kk, data) {
        return http.put(`/kk/updateKK/${nomor_kk}`, data);
    }

    deleteKartuKeluarga(nomor_kk) {
        return http.delete(`/kk/delete/${nomor_kk}`);
    }

    getKartuKelurgaById(id) {
        return http.get(`/kk/getData/${id}`)

    }

    getKartuKelurgaByNokk(nomor_kk) {
        return http.get(`/kk/getDatakk/${nomor_kk}`)
    }

}

export default new KK();