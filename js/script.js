// creo un array di cognomi e lo popolo;
var listaCognomi = ["Marzullo", "Banca", "Bianchi", "Rossi", "Giubertoni", "Volpi", "Gialli", "Neri", "Medici"];

// chiedo all'utente il suo cognome e lo pusho nel mio array
var congomeUtente = prompt("Inserisci il tuo cognome:");
listaCognomi.push(congomeUtente);

// clono il mio array in uno nuovo per tenere traccia di entrambi
var listaOrdinata = listaCognomi.slice();

// ordino l'array
listaOrdinata.sort();

// creo un ciclo for che percorra tutta la lunghezza dell'array e per ogni elemento lo stampi in html
for (var i = 0; i < listaOrdinata.length; i++) {
  var cognome = listaOrdinata[i];

  //salvo l'innerHTML della lista in una variabile
  var elementoPrec = document.getElementById("lista").innerHTML;

  //punto elementoPrec a cui sommo se stesso + l'indice + cognome
  document.getElementById("lista").innerHTML = elementoPrec +  "<li> N. " + (i+1) + ": " + cognome + "</li>"

  // se il cognome è uguale al cognome inserito dall'utente, scrivo un messaggio a video
  if (cognome === congomeUtente) {
    document.getElementById("msg").innerHTML = "L'utente " + congomeUtente + " è in posizione N. " + (i+1);
  } 
}
  
//console.log("Cognome numero " + (i+1) + ": " + listaCognomi[i]);