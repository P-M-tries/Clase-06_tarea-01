function probarGetOldestMember () {
    console.assert(
        getOldestMember([5, 7, 80]) === 80,
        'Get Oldest Member no devolvió el miembro con mayor edad',
    );
};

function probarGetYoungestMember () {
    console.assert(
        getYoungestMember([5, 7, 80]) === 5,
        'Get Youngest Member no devolvió el miembro con menor edad',
    );
};

function probarGetAgeAverage () {
    console.assert(
        getAgeAverage([5, 7, 80]) == 31,
        'Get Age Average no devolvió el promedio entre las edades de los miembros',
    );
};

probarGetOldestMember();
probarGetYoungestMember();
probarGetAgeAverage();

