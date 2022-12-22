import http from '../http-common';

class AnggotaKeluarga {
    // Create Data
    create(data) {
        return http.post("/anggotakeluarga/insert", data);
    }

    getAll() {
        return http.get("/anggotakeluarga/getAll");
    }
    
    getAllAnggotaKeluargaByIdKK(id_kk) {
        return http.get(`/anggotakeluarga/get/${id_kk}`);
    }

    updateAnggotaKeluarga(id, data) {
        return http.put(`/anggotakeluarga/update/${id}`, data);
    }

    deleteAnggotaKeluarga(id) {
        return http.delete(`/anggotakeluarga/delete/${id}`);
    }

    deleteAnggotaKeluargaNoKK(id_kk) {
        return http.delete(`/anggotakeluarga/deleted/${id_kk}`);
    }

    getAnggotaKeluargaById(id) {
        return http.get(`/anggotakeluarga/getData/${id}`)
    }



}

export default new AnggotaKeluarga();