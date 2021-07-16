// **Gioco dei dadi**

//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.

//Stabilire il vincitore, in base a chi fa il punteggio più alto.


var numero_giocatore = Math.floor(Math.random() * 6) + 1;
console.log("Numero Giocatore: " + numero_giocatore);
document.getElementById("dado_giocatore").innerHTML ="Dado Giocatore " + numero_giocatore;

var numero_computer = Math.floor(Math.random() * 6) + 1;
console.log("Numero Computer: " + numero_computer);
document.getElementById("dado_computer").innerHTML ="Dado Computer " + numero_computer;

if (numero_giocatore > numero_computer) {
    document.getElementById("giocata").innerHTML = "Vince il Giocatore!";
}

else if(numero_giocatore == numero_computer) {
    document.getElementById("giocata").innerHTML = "Pareggio!";
}

else { 
    document.getElementById("giocata").innerHTML = "Vince il Computer!";
}