
const API = "https://chat.viktorijapizica.repl.co"
let manaZina = document.querySelector('.manaZina');//Jāraksta nosaukums cs stilā
//reference atsauce uz svaigāko ziņu (jo bez .value)
let chataZinas = document.querySelector('.chataZinas')
let vards = document.querySelector('.vards')

function sutitZinu()
{
    console.log('sutitZinu() darbojas');

    //chataZinas.innerHTML+='<br/>'+manaZina.value

    fetch(API+'/sutit/'+vards.value+'/'+manaZina.value)
}

async function ieladetChataZinas()
{
    let datiNoServera = await fetch(API + '/lasit')
    let dati = await datiNoServera.text()
    //console.log(dati)
    chataZinas.innerHTML = dati
}

//setInterval(ieladetChataZinas,1000)

async function ieladetChataZinasJson()
{
    let datiNoServera = await fetch(API + '/lasit');
    let dati = await datiNoServera.json();
    
    //console.log(await dati[0]['zina'] )
    chataZinas.innerHTML = '';
    
    i = 0;
    while ( i < await dati.length )
    {
        //console.log(i);
        let laiks = '[<i>' + '????          ' + '</i>] ';
        if ("laiks" in dati[i]) {
            laiks = '[<i>' + dati[i]['laiks'] + '</i>] ';
        }
        chataZinas.innerHTML = chataZinas.innerHTML + laiks + dati[i]['vards']+': '+dati[i]['zina']+'<br />';

        i = i+1;
    }

    chataZinas.scrollTop = chataZinas.scrollHeight;
}//beidzas ieladetChataZinasJson()

setInterval( ieladetChataZinasJson, 1000 )
