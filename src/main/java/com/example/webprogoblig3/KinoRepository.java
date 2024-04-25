package com.example.webprogoblig3;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class KinoRepository {

    @Autowired
    private JdbcTemplate db;

    public void lagrKunde (Billett innBillett){
        String sql = "INSERT INTO Billett (film, antall, fornavn, etternavn, telefonnr, epost) VALUES (?,?,?,?,?,?)";
        db.update(sql, innBillett.getFilm(), innBillett.getAntall(), innBillett.getFornavn(), innBillett.getEtternavn(), innBillett.getTelefonnr(), innBillett.getEpost());
    }

    public List<Billett> henAlleBilletter (){
        String sql = "SELECT * FROM Billett";
        List<Billett> alleBilletter = db.query(sql, new BeanPropertyRowMapper(Billett.class));
        return  alleBilletter;
    }

    public void slettAlleBilletter (){
        String sql = "DELETE FROM Billett";
        db.update(sql);
    }
}
