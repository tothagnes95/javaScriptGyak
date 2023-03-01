let nevem = "Agi";
let azEnKorom = 27;
console.log('A javaScript is betoltott');

//Ide lehet kommentelni.
/* ide lehet
tobb soros
kommentet irni
*/

// >, <, <=, >=, == erteket hasonlit ossze, === itt a tipust is hasonlitja pl szamot (18) szoveggel(tizennyolc)

if (azEnKorom >= 18) {console.log("Mar eleg idos hogy alkoholt fogyasszon.")};

let masikKor = 16;
if (masikKor > 18) {console.log("Mar eleg idos hogy alkoholt fogyasszon.")
} else {console.log ("Nem vagyok eleg idos")};

// jQuery-s resz
//szelektor . fuggveny
let szovegAzOldalon = $("h1").text();
console.log(szovegAzOldalon);

$("h1").text('Ezt javascriptbol valtoztattuk meg')

console.log($(".sarga").css('background'));

$(".sarga").css('background', 'magenta');

// append = hozzafuz
$("ul").append('<li>ujabb elem</li>');

//$(".sarga").remove();

// toggle: kapcsolo: ha nincs rajta ez a class rarakja, ha rajta volt akkor leveszi
$(".sarga").toggleClass('green');

//function adjHozzaEgyLit() {
//    $("ul").append('<li>ujabb elem</li>')}
//    $('button').click(adjHozzaEgyLit);

$('#add').click(function() {
    $("ul").append('<li>ujabb elem</li>')
})

$('#delete').click(function() {
    $("li:last-of-type").remove()
})

for (let i = 0; i < 10; i = i + 1) {
    $("ul").append(`<li>${i}. ujabb elem</li>`)
}

let szinek = ['orange', 'magenta', 'red', 'green', 'blue', 'teal', 'brown']

function egySzinDoboz (szin) {
    $('.kontener').append('<div class="doboz"></div>');
    $('.kontener div:last-of-type').css('background-color', szin);
}
egySzinDoboz('lime');
egySzinDoboz('pink');
szinek.forEach(egySzinDoboz)