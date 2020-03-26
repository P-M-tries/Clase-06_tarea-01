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
    hideFirstForm();
    showSecondForm();
    createARowForEachMember();
    return false;
}

$goBackButton.onclick = function() {
    location.reload();
}

$calculateButton.onclick = function () {
    
    let array = HTMLCollectionIntoArray(document.getElementsByClassName('age'));
    const oldest = getOldestMember(array);
    const youngest = getYoungestMember(array);
    const average = getAgeAverage(array);
    showResults(oldest, youngest, average);

    clearDataForNewCalculation(array);

    return false;
}

