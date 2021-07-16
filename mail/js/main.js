// **Mail**

//Chiedi all’utente la sua email,

function Accedi () {
    
    var email_utente = document.getElementById('accedi').value;

    //controlla che sia nella lista di chi può accedere,

    for (var i = 0; i < caselle_mail.length; i++) {
        console.log(caselle_mail[i]);
        console.log(i);
    
        //stampa un messaggio appropriato sull’esito del controllo.
        
        if (email_utente == caselle_mail[i])  {
            alert("Accesso eseguito correttamente"); break;
            
        } 
    }
    
    if (!email_utente.includes("@gmail.com")) {
        alert("La Email deve contenere @gmail.com");
    
    }    
    
    else if (email_utente !== caselle_mail[i]) {
        alert ("Email non registrata");
            
    }        
    
}

var caselle_mail = ["pippo@gmail.com", "pluto@gmail.com", "paperino@gmail.com", "topolino@gmail.com"]

function Registrazione() {

  email_utente = document.getElementById('registrati').value;
  caselle_mail.push(email_utente);  
  console.log(caselle_mail);

  if (!email_utente.includes("@gmail.com")) {
    alert("La Email deve contenere @gmail.com")

  } else
   alert("Registrazione completata")
   
}    






