$(function(){
    hentAlle();
})

function regBillett (){
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
