package com.example.webprogoblig3;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class KinoController {

    List<Billett> bilettListe = new ArrayList<>();
    @GetMapping ("/lagre")
    public void lagreBillett (Billett innBillett){
        bilettListe.add(innBillett);
    }

    @PostMapping("/hentAlle")
    public List<Billett> hentAlle (){
        return bilettListe;
    }

    @GetMapping("/slettAlle")
    public void Slettalle (){
        bilettListe.clear();
    }
 }
