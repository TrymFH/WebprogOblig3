package com.example.webprogoblig3;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class KinoController {

    @Autowired
    private KinoRepository rep;

    //Kommuniserer med repository for å lagre billetten.
    @GetMapping ("/lagre")
    public void lagreBillett (Billett innBillett){
        rep.lagreBillett(innBillett);
    }

    //Kommuniserer med repository for å hente billettene.
    @PostMapping("/hentAlle")
    public List<Billett> hentAlle (){
        return rep.hentAlleBilletter();
    }

    //Kommuniserer med repository for å slette alle billetter.
    @GetMapping("/slettAlle")
    public void Slettalle (){
         rep.slettAlleBilletter();
    }
 }
