const fs = require('fs');
const fileName = process.argv[2];
const MergeSort = require('./class/merge-sort');

if (!fs.existsSync(fileName)) {
    console.log ('Fichier non exitant.');
    return;
}

const data = fs.readFileSync(fileName, 'utf8');
const utilities = require('./class/utilities');


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
    const mergeSort = new MergeSort();
    mergeSort.sort(arrFile);
});

// COMMANDES :
// - `node famoso-merge.js list.txt`
// - `node famoso-merge.js short-list.txt`
// - `node famoso-merge.js long-list.txt`