// -----------------------------------
console.log("1/ Implémentez une fonction qui transforme un texte en camelCase.");

function transformTextToCamelcase(text) {
    let words = text.split(' ');
    words = words.map(function (word, index) {
        if (index === 0) {
            return word.toLowerCase();
        }
        return word.charAt(0).toUpperCase() + word.slice(1);
    })
    return words.join('');
}

console.log(transformTextToCamelcase("Salut les copains wesh"));

// -----------------------------------
console.log("2/ Implémentez une fonction qui retourne le plus grand mot d'un texte.");
function getBigWord(text) {
    let words = text.split(' ');
    let bigWord = [];
    words = words.map(function (word) {
        return word.split("");
    })
    for (const word of words) {
        if (word.length > bigWord.length) {
            bigWord = word;
        }
    }
    return bigWord.join("");
    // if (words.length > bigWord.length)
}
console.log(getBigWord("Coucou les lapinous c'est pas tres CharliChaplin ce truc!"));

// -----------------------------------
console.log("3/ Implémentez une fonction qui converti un nombre de seconde en un tableau exprimant cette durée en secondes, minutes, heures, jours, semaines et années.");
function getSecMinHouDayWeeYear(seconds){
    let array = [{
        secondes : 0,
        minutes : 0,
        heures : 0,
        jours : 0,
        semaines : 0,
        années : 0
    }];
}
console.log();

// -----------------------------------
console.log("4/ Implémentez une fonction qui prend en paramètre un tableau retourné par la fonction précédente et retourne la chaîne de caractère correspondante.");

console.log();

// -----------------------------------
console.log("5/ Implémentez une fonction qui compte dans le texte en premier paramètre, le nombre d'occurence de la lettre en second paramètre.");

console.log();

// -----------------------------------
console.log("6/ Implémentez une fonction qui retourne les X plus grandes valeurs d'un tableau.");

console.log();

// -----------------------------------
console.log("7/ Retournez la liste des prenoms des joueurs ci-dessous par ordre de score décroissant.");

const players = {
    Camille: 88,
    Lola: 125,
    Isaac: 174,
    Aldrick: 426,
    Ismaël: 248,
    Lilian: 478,
    Charley: 225,
    Thierry: 255,
    Cameron: 205,
    Tanguy: 155,
    Jenny: 125
};

console.log();

// -----------------------------------
console.log("8/ Dans la liste des scores ci-dessus sélectionnez une partie des meilleurs joueurs jusqu'à obtenir un total de score des joueurs sélectionnés de 1000.");

console.log();