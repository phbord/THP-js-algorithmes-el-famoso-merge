const data = fs.readFileSync(fileName, 'utf8');
const QuickSort = require('./class/quick-sort');

if (data.length === 0) {
    console.log ('Fichier vide.');
    return;
}
const quickSort = new QuickSort();

fs.readFile(fileName, 'utf8', (error, data) => {
    if (error) {
        console.error('error ====> ', error.message);
        return;
    }
    console.error('DATA de', fileName, ' ====> ', data, '\n\n');
    let arrFile = utilities.transformFileInArray(data);
    bubbleSort.sort(arrFile);
    sortByInsertion.sort(arrFile);
    sortBySelection.sort(arrFile);
    quickSort.sort(arrFile);
});

// COMMANDES :
// - `node famoso-merge.js list.txt`
// - `node famoso-merge.js short-list.txt`
// - `node famoso-merge.js long-list.txt`