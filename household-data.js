/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

const $nextStepButton = document.getElementById('next-step');

const $goBackButton = document.getElementById('go-back');

const $calculateButton = document.getElementById('calculate');

$nextStepButton.onclick = function () {
    document.getElementById('number-of-members').style.display = 'none';
    document.getElementById('reveal-after').style.display = 'inline';

    let n = Number(document.getElementById('family-members').value);
    const $forRows = document.getElementById('add-rows');

    for (let i = 0; i < n; i++) {
        let x = i + 1;
        let label = document.createElement('label');
        let labelText = document.createTextNode('Member ' + x);
        label.appendChild(labelText);
        $forRows.appendChild(label);
        let li = document.createElement('li');
        let input = document.createElement('input');
        input.setAttribute("type","number");
        input.setAttribute("class","age");
        li.appendChild(input);
        $forRows.appendChild(li);
    }

    return false;
}

$goBackButton.onclick = function() {
    location.reload();
}

let array = [];
let oldest;
let youngest;
let average;

function agesIntoArray() {
for (let i = 0; i < (document.getElementsByClassName('age').length); i++) {
    let item = Number(document.getElementsByClassName('age').item(i).value)
    array.push(item);
}
}

function getOldestMember() {
    oldest = Math.max.apply(Math, array);
    
    return oldest;
}

function getYoungestMember() {
    youngest = Math.min.apply(Math, array);

    return youngest;
}

function getAgeAverage() {
    let arraySum = 0;
    for (let i = 0; i < array.length; i++) {
        let arrayItem = Number(array[i]);
        arraySum += arrayItem;
    }

    average = arraySum / array.length

    return average;

}

$calculateButton.onclick = function () {
agesIntoArray();
getOldestMember();
getYoungestMember();
getAgeAverage();

document.getElementById('oldest-member').value = oldest;
document.getElementById('youngest-member').value = youngest;
document.getElementById('age-average').value = average;

array = [];

return false;
}