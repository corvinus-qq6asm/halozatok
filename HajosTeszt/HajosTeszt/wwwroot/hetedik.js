﻿window.onload() letöltésBefejeződött();

var kérdések;

fetch('/kerdesek.json')
    .then(response => response.json())
    .then(data => letöltésBefejeződött(data)
    );

function letöltésBefejeződött(d) {
    console.log("Sikeres letöltés")
    console.log(d)
    kérdések = d;
}