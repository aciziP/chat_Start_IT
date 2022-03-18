
const API = "https://chat.viktorijapizica.repl.co"
let manaZina = document.querySelector('.manaZina');//Jāraksta nosaukums cs stilā
//reference atsauce uz svaigāko ziņu (jo bez .value)
let chataZinas = document.querySelector('.chataZinas')

function sutitZinu()
{
    console.log('sutitZinu() darbojas');

    chataZinas.innerHTML+='<br/>'+manaZina.value
}

async function ieladetChataZinas()
{
    let datiNoServera = await fetch('chatazinas.txt')
    let dati = await datiNoServera.text()
    //console.log(dati)
    chataZinas.innerHTML = dati
}

setInterval(ieladetChataZinas,1000)
