package com.example.webprogoblig3;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class KinoController {

    @Autowired
    KinoRepository rep;

    @GetMapping ("/lagre")
    public void lagreBillett (Billett innBillett){
        rep.lagreKunde(innBillett);
    }

    @PostMapping("/hentAlle")
    public List<Billett> hentAlle (){
        return rep.hentAlleBilletter();
    }

    @GetMapping("/slettAlle")
    public void Slettalle (){
         rep.slettAlleBilletter();
    }
 }
