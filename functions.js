function hideFirstForm (){
    document.getElementById('number-of-members').style.display = 'none';
}

function showSecondForm () {
    document.getElementById('reveal-after').style.display = 'inline';
}

function createARowForEachMember () {
    const numberOfFamilyMembers = Number(document.getElementById('family-members').value);
    const $forRows = document.getElementById('add-rows');

    for (let i = 0; i < numberOfFamilyMembers; i++) {
        let index = i + 1;
        const label = document.createElement('label');
        label.textContent = 'Member ' + index; 
        $forRows.appendChild(label);

        const li = document.createElement('li');
        const input = document.createElement('input');
        input.type = 'number';
        input.className = 'age';
        li.appendChild(input);
        $forRows.appendChild(li);
    }

}

function HTMLCollectionIntoArray(HTMLCollection) {
    let array = [];
for (let i = 0; i < (HTMLCollection.length); i++) {
    let item = Number(HTMLCollection.item(i).value)
    array.push(item);
}

    return array;
}

function getOldestMember(array) {
    const oldest = Math.max.apply(Math, array);
    return oldest;
}

function getYoungestMember(array) {
    const youngest = Math.min.apply(Math, array);
    return youngest;
}

function getAgeAverage(array) {
    let arraySum = 0;
    for (let i = 0; i < array.length; i++) {
        let arrayItem = Number(array[i]);
        arraySum += arrayItem;
    }

    average = (arraySum / array.length).toFixed(2);

    return average;

}

function showResults(oldest, youngest, average) {
    document.getElementById('oldest-member').value = oldest;
    document.getElementById('youngest-member').value = youngest;
    document.getElementById('age-average').value = average;
}

function clearDataForNewCalculation (array) {
    array = [];
}