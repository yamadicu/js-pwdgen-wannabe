/* 
Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito21
*/

//richiesta nome utente
const nome = prompt("come ti chiami?");
console.log(nome);

//richiesta cognome
const cognome = prompt("qual'è il tuo cognome?");
console.log(cognome);

//richiesta colore preferito
const colore = prompt("qual'è il tuo colore preferito?");
console.log(colore);

//password
document.writeln("<p> spero che la tua password non sia proprio: " + nome + cognome + colore + "21");