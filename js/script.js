// creo un array di cognomi e lo popolo;
var listaCognomi = ["Marzullo","Banca", "Bianchi", "Rossi", "Giubertoni", "Volpi", "Gialli", "Neri", "Med"];

// chiedo all'utente il suo cognome e lo pusho nel mio array
//listaCognomi.push(prompt("Inserisci il tuo cognome:"));

//console.log(listaCognomi.sort())

// con un primo ciclo for scorro uno per uno gli elementi della mia lista
for (var i = 0; i < listaCognomi.length; i++) {
  // con un secondo ciclo for innestato, per ogni iterazione lui scorre di nuovo all'interno della mia lista
  for (var j = 0; j < listaCognomi.length; j++) {
    // con un condizionale if controllo se il primo elemento è maggiore (quindi con una lettera più avanti nell'alfabeto)
    if (listaCognomi[j] > listaCognomi[j+1]) {
      // se è così, creo una variabile swap nella quale salvo temporaneamente il valore del primo elemento
      var swap = listaCognomi[j]
      // sposto il secondo elemento al posto del primo
      listaCognomi[j] = listaCognomi[j+1];
      // salvo il valore di swap (ex primo elemento) nel secondo elemento
      listaCognomi[j+1] = swap;
    }
  }
  //salvo l'innerHTML della lista in una variabile
  var elementoPrec = document.getElementById("lista").innerHTML;

  //punto elementoPrec a cui sommo se stesso + l'indice + l'elemento della listaCognomi
  document.getElementById("lista").innerHTML = elementoPrec +  "<li> Cognome numero " + (i+1) + ": " + listaCognomi[i] + "</li>"
  
  //console.log("Cognome numero " + (i+1) + ": " + listaCognomi[i]);
}