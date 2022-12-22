package com.example.ektp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.ektp.model.KartuKeluarga;
import com.example.ektp.service.IKartuKeluargaService;

@RestController
@CrossOrigin(origins = "http://localhost:8080")
@RequestMapping("/api/kk")
public class KartuKeluargaController {
    @Autowired
    IKartuKeluargaService kartuKeluargaService;

    @PostMapping("/insert")
    public KartuKeluarga insertKartuKeluarga(@RequestBody KartuKeluarga kartuKeluarga) {
        return kartuKeluargaService.insertKartuKeluarga(kartuKeluarga);
    }

    @GetMapping("/getAll")
    public List<KartuKeluarga> getAllKartuKeluarga() {
        return kartuKeluargaService.getAllKartuKeluarga();
    }

    @PutMapping("/update/{id}")
    public KartuKeluarga updateKartuKeluarga(@PathVariable int id, @RequestBody KartuKeluarga kartuKeluarga) {
        return kartuKeluargaService.updateKartuKeluarga(id, kartuKeluarga);
    }

    @DeleteMapping("/delete/{nomor_kk}")
    public KartuKeluarga deleteKartuKeluarga(@PathVariable int nomor_kk) {
        return kartuKeluargaService.deleteKartuKeluarga(nomor_kk);
    }

    @GetMapping("/getData/{id}")
    public KartuKeluarga getKartuKeluargaById(@PathVariable int id) {
        return kartuKeluargaService.getKartuKeluargaById(id);
    }

    @GetMapping("/getDatakk/{nomor_kk}")
    public KartuKeluarga getKartuKeluargaByNokk(@PathVariable int nomor_kk) {
        return kartuKeluargaService.getKartuKeluargaByNokk(nomor_kk);
    }

    @PutMapping("/updateKK/{nomor_kk}")
    public KartuKeluarga updateKartuKeluargaByNokk(@PathVariable int nomor_kk,
            @RequestBody KartuKeluarga kartuKeluarga) {
        return kartuKeluargaService.updateKartuKeluargaByNokk(nomor_kk, kartuKeluarga);
    }
}