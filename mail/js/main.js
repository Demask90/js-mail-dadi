// **Mail**

//Chiedi all’utente la sua email,

var email_utente = prompt("inserisci la tua mail")

var caselle_mail = ["pippo@gmail.com", "pluto@gmail.com", "paperino@gmail.com", "topolino@gmail.com"]

//controlla che sia nella lista di chi può accedere,

for (var i = 0; i < caselle_mail.length; i++) {
    console.log(caselle_mail[i]);
    console.log(i)

    //stampa un messaggio appropriato sull’esito del controllo.
    
    if (email_utente == caselle_mail[i]) {
        alert("Accesso eseguito correttamente"); break;
    } 
}

if (!email_utente.includes("@gmail.com")) 
        alert("la mail deve contenere @gmail.com")

else if (email_utente !== caselle_mail[i]) 
alert ("Mail non registrata")
        
        



//**Gioco dei dadi**

//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.

//Stabilire il vincitore, in base a chi fa il punteggio più alto.

//Prima di partire a scrivere codice poniamoci qualche domanda:

//Che ci sia un array da qualche parte?

//Se dobbiamo confrontare qualcosa che "cosa" ci serve?

//**Consigli del giorno:**

//1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare

//2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare

//3. si ma noi cosa vogliamo fare?

//4. torniamo a scrivere in italiano

//5. proviamo ad immaginare le operazioni che vogliamo far svolgere al
// nostro programma così come lo faremmo "a mano" */