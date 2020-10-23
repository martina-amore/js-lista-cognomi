var arrayCognomi = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"];
console.log(arrayCognomi);

var cognomeUtente = prompt("Qual è il tuo cognome?");
console.log(cognomeUtente);

arrayCognomi.push(cognomeUtente);

arrayCognomi.sort();
console.log(arrayCognomi.sort());

var i;
for (i = 0; i < arrayCognomi.length; i++) {
    document.getElementById("surnames-list").innerHTML += "<li>" + arrayCognomi[i] + "</li>";

    console.log("array cognomi " + arrayCognomi[i]);

    if (arrayCognomi[i] == cognomeUtente) {
        document.getElementById("surname-position").innerHTML = "Il tuo cognome è in posizione " + (i + 1);
    }
}
