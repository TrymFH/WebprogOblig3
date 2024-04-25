$(function(){
    hentAlle();
})

function lagreBillett (){
    const billett = {
        film: $("#film").val(),
        antall: $("#antall").val(),
        fornavn: $("#fornavn").val(),
        etternavn: $("#etternavn").val(),
        telefonnr: $("#telefonnr").val(),
        epost: $("#epost").val()
    }

    $.get("/lagre", billett, function (){
        hentAlle();
    });

    $("#film").val("");
    $("#antall").val("");
    $("#fornavn").val("");
    $("#etternavn").val("");
    $("#telefonnr").val("");
    $("#epost").val("");
}

function hentAlle (){
    $.post("/hentAlle", function (billetter){
        formaterBilletter(billetter);
    });
}

function formaterBilletter (billetter){
    let ut = "<table class='table table-striped'><tr><th>Film</th><th>Antall biletter</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnr</th><th>Epost</th></tr>";
    for (const billett of billetter) {
        ut += "<tr><td>" + billett.film + "</td><td>" + billett.antall + "</td><td>" + billett.fornavn +"</td><td>" + billett.etternavn +"</td><td>" + billett.telefonnr +"</td><td>" + billett.epost +"</td></tr>";
    }
    ut+= "</table>";
    $("#billettene").html(ut);
}

function slettAlle (){
    const ok = confirm("Er du sikker på at du vil slette alle?");
    if (ok){
        $.get("/slettAlle",function (){
            hentAlle();
        });
    }
}

function validerFornavn(){
    const regexp = /^[a-zA-ZæøåÆØÅ. \-]{2,20}$/;
    const ok = regexp.test($("#fornavn").val());
    if(!ok){
        $("#feilFornavn").html("Fornavnet må bestå av 2 til 20 bokstaver");
        return false;
    }
    else{
        $("#feilFornavn").html("");
        return true;
    }
}

function validerEtternavn(etternavn){
    const regexp = /^[a-zA-ZæøåÆØÅ. \-]{2,20}$/;
    const ok = regexp.test(etternavn);
    if(!ok){
        $("#feilEtternavn").html("Etternavnet må bestå av 2 til 20 bokstaver");
        return false;
    }
    else{
        $("#feilEtternavn").html("");
        return true;
    }
}

function validerAntall(antall){
    const regexp =  /^[1-9][0-9]?$|^100$/;
    const ok = regexp.test(antall);
    if(!ok){
        $("#feilAntall").html("Skriv inn et tall mellom 1 og 100");
        return false;
    }
    else{
        $("#feilAntall").html("");
        return true;
    }
}

function validerTelefonnr(telefonnr){
    const regexp =  /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/;
    const ok = regexp.test(telefonnr);
    if(!ok){
        $("#feilTelefonnr").html("Skriv inn et gyldig telefonnummer");
        return false;
    }
    else{
        $("#feilTelefonnr").html("");
        return true;
    }
}

function validerEpost(epost){
    const regexp =  /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})([a-z]{2,8})?$/;
    const ok = regexp.test(epost);
    if(!ok){
        $("#feilEpost").html("Skriv inn en gyldig epost");
        return false;
    }
    else{
        $("#feilEpost").html("");
        return true;
    }
}


function validerFilm (){
    if($("#film").val()===""){
        $("#feilFilm").html("Du må velge en film")
        return false
    } else {
        $("#feilFilm").html("")
        return true;
    }
}

function validerOgLagreKunde(){
    const filmOK = validerFilm();
    const antallOK = validerAntall($("#antall").val());
    const fornavnOK = validerFornavn($("#fornavn").val());
    const etternavnOK = validerEtternavn($("#etternavn").val());
    const telefonnrOK = validerTelefonnr($("#telefonnr").val());
    const epostOK = validerEpost($("#epost").val());

    if (filmOK && antallOK && fornavnOK && etternavnOK && telefonnrOK && epostOK){
        lagreBillett();
    }
}





