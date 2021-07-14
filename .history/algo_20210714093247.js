const fs = require('fs');
const fileName = process.argv[2];
const Exercice1 = require('./class/exercice-1');
const Exercice2 = require('./class/exercice-2');
const Exercice3 = require('./class/exercice-3');
const Exercice4 = require('./class/exercice-4');
const Exercice5 = require('./class/exercice-5');
const Exercice6 = require('./class/exercice-6');

if (!fs.existsSync(fileName)) {
    console.log ('Fichier non exitant.');
    return;
}

const data = fs.readFileSync(fileName, 'utf8');
const utilities = require('./class/utilities');
const mergeSort = new MergeSort();


if (data.length === 0) {
    console.log ('Fichier vide.');
    return;
}

fs.readFile(fileName, 'utf8', (error, data) => {
    if (error) {
        console.error('error ====> ', error.message);
        return;
    }
    console.log('DATA de', fileName, ' ====> ', data, '\n\n');
    let arrFile = utilities.transformFileInArray(data);
    mergeSort.sort(arrFile);
});

// COMMANDES :
// - `node algo.js exercice-list.txt`