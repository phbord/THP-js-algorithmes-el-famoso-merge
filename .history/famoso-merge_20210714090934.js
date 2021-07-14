const data = fs.readFileSync(fileName, 'utf8');

if (data.length === 0) {
    console.log ('Fichier vide.');
    return;
}

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
// - `node famoso-merge.js list.txt`