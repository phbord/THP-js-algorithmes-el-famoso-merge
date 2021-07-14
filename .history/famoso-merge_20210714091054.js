const data = fs.readFileSync(fileName, 'utf8');
const MergeSort = require('./class/merge-sort');

if (data.length === 0) {
    console.log ('Fichier vide.');
    return;
}
const mergeSort = new MergeSort();

fs.readFile(fileName, 'utf8', (error, data) => {
    if (error) {
        console.error('error ====> ', error.message);
        return;
    }
    console.error('DATA de', fileName, ' ====> ', data, '\n\n');
    let arrFile = utilities.transformFileInArray(data);
    mergeSort.sort(arrFile);
});

// COMMANDES :
// - `node famoso-merge.js list.txt`
// - `node famoso-merge.js short-list.txt`
// - `node famoso-merge.js long-list.txt`