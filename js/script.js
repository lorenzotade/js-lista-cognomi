// creo un array di cognomi e lo popolo;
var listaCognomi = ["Marzullo", "Banca", "Bianchi", "Rossi", "Giubertoni", "Volpi", "Gialli", "Neri", "Medici"];

// chiedo all'utente il suo cognome e lo pusho nel mio array
var congomeUtente = prompt("Inserisci il tuo cognome:");
listaCognomi.push(congomeUtente);

// ordino l'array
var listaCognomi = listaCognomi.sort();

// creo un ciclo for che percorra tutta la lunghezza dell'array e per ogni elemento lo stampi in html
for (var i = 0; i < listaCognomi.length; i++) {
  var cognome = listaCognomi[i];

  //salvo l'innerHTML della lista in una variabile
  var elementoPrec = document.getElementById("lista").innerHTML;

  //punto elementoPrec a cui sommo se stesso + l'indice + cognome inserito dall'utente
  if (cognome === congomeUtente) {
    document.getElementById("lista").innerHTML = elementoPrec +  "<li> N. " + (i+1) + ": " + cognome + "</li>"
    // per tutti gli altri cognomi stampo solo il cognome
  } else {
    document.getElementById("lista").innerHTML = elementoPrec +  "<li>" + cognome + "</li>";
  }
  
}
  
//console.log("Cognome numero " + (i+1) + ": " + listaCognomi[i]);