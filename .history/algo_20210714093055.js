const data = fs.readFileSync(fileName, 'utf8');
const fileName = process.argv[2];
const utilities = require('./class/utilities');
const exercice1 = new Exercice1();


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
});

// COMMANDES :
// - `node algo.js exercice-list.txt`