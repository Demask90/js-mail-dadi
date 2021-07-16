// **Mail**

//Chiedi all’utente la sua email,

var email_utente = prompt("inserisci la tua mail")

var caselle_mail = ["pippo@gmail.com", "pluto@gmail.com", "paperino@gmail.com", "topolino@gmail.com"]

//controlla che sia nella lista di chi può accedere,

for (var i = 0; i < caselle_mail.length; i++) {
    console.log(caselle_mail[i]);
    console.log(i);

    //stampa un messaggio appropriato sull’esito del controllo.
    
    if (email_utente == caselle_mail[i]) {
        alert("Accesso eseguito correttamente"); break;
    } 
}

if (!email_utente.includes("@gmail.com")) {
    alert("La mail deve contenere @gmail.com");

}    

else if (email_utente !== caselle_mail[i]) {
    alert ("Mail non registrata");
        
}        
