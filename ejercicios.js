// 1. Crea un programa que imprima en consola los números impares del 1 al 50.

const $ejercicio1BtnActivar = document.querySelector('#ejercicio1BtnActivar');

function impares50(){
    let impares = [];
    for (let i = 0; i<50; i++) {
        if(i % 2 != 0){
            impares.push(i);
        }
    }
    console.log("Ejercicio 1. Números impares: " + impares);
    const $ejercicio1Respuesta  = document.querySelector('#ejercicio1Respuesta');
    $ejercicio1Respuesta.textContent = `Números impares: ${impares}`;
}

$ejercicio1BtnActivar.addEventListener('click', impares50);

// 2. Crea un programa que pregunte al usuario un número. Usando el archivo de arreglo de Pokémons, mostrar solo los nombres de los Pokémons cuyos números que son múltiplos de 5 desde 1 hasta el número introducido por el usuario. https://pastebin.com/Zzk8g7Z6.

const $ejercicio2BtnActivar = document.querySelector('#ejercicio2BtnActivar');
const $ejercicio2Respuesta = document.querySelector('#ejercicio2Respuesta');

const pokemons = [ 'bulbasaur','ivysaur','venusaur','charmander','charmeleon','charizard','squirtle','wartortle','blastoise','caterpie','metapod','butterfree','weedle','kakuna','beedrill','pidgey','pidgeotto','pidgeot','rattata','raticate','spearow','fearow','ekans','arbok','pikachu','raichu','sandshrew','sandslash','nidoran-f','nidorina','nidoqueen','nidoran-m','nidorino','nidoking','clefairy','clefable','vulpix','ninetales','jigglypuff','wigglytuff','zubat','golbat','oddish','gloom','vileplume','paras','parasect','venonat','venomoth','diglett','dugtrio','meowth','persian','psyduck','golduck','mankey','primeape','growlithe','arcanine','poliwag','poliwhirl','poliwrath','abra','kadabra','alakazam','machop','machoke','machamp','bellsprout','weepinbell','victreebel','tentacool','tentacruel','geodude','graveler','golem','ponyta','rapidash','slowpoke','slowbro','magnemite','magneton','farfetchd','doduo','dodrio','seel','dewgong','grimer','muk','shellder','cloyster','gastly','haunter','gengar','onix','drowzee','hypno','krabby','kingler','voltorb' ];

function pokedex(){

    const $ejercicio2Input1 = Number (document.querySelector('#ejercicio2Input1').value);
    let arrayPokemon = [];

    if($ejercicio2Input1 < 0 ) {
        $ejercicio2Respuesta.textContent = `Ingresa un número positivo`; 
        return;
    }
    for (let i = 0; i < $ejercicio2Input1+1; i++) {

        if(i >= pokemons.length){
            console.log(arrayPokemon, "y ahora el for " + i)
            break;
        } 

        if(i % 5 == 0){
            arrayPokemon.push(" " + pokemons[i]);
        }

        
    }

    console.log("Ejercicio 2. Pokemons: " + arrayPokemon);
    $ejercicio2Respuesta.textContent = `Los pókemon que capturaste son: ${arrayPokemon}`;

}

$ejercicio2BtnActivar.addEventListener( 'click', pokedex);

// 3. Crea un programa que recorra el arreglo [4,”dos”,8,”tres”,5,9,1,”cero”] y muestre en consola solo los elementos que son tipo número.

const $ejercicio3BtnActivar = document.querySelector('#ejercicio3BtnActivar');


function ordenarArray(){

    const arrayDesordenado = [4,"dos",8,"tres",5,9,1,"cero"];
    let arrayOrdenado = [];

    const $ejercicio3Respuesta  = document.querySelector('#ejercicio3Respuesta');
    for (let i=0; i<arrayDesordenado.length ; i++) {

        if(typeof arrayDesordenado[i] === "number"){
            arrayOrdenado.push(" " + arrayDesordenado[i]);
        }

    }
    console.log(arrayOrdenado);
    $ejercicio3Respuesta.textContent = `El arreglo con solo números sería: ${arrayOrdenado}`;
}

$ejercicio3BtnActivar.addEventListener( 'click', ordenarArray);