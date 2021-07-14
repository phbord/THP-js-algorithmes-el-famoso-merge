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
// - `node famoso-merge.js exr.txt`