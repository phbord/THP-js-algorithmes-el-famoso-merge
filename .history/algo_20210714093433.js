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
const exercice1 = new Exercice1();
const exercice2 = new Exercice2();
const exercice3 = new Exercice3();
const exercice4 = new Exercice4();
const exercice5 = new Exercice5();
const exercice6 = new Exercice6();


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
    exercice1.sort(arrFile);
    exercice2.sort(arrFile);
    exercice3.sort(arrFile);
    exercice4.sort(arrFile);
    exercice1.sort(arrFile);
    exercice1.sort(arrFile);
});

// COMMANDES :
// - `node algo.js exercice-list.txt`