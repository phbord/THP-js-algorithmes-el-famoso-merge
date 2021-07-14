const data = fs.readFileSync(fileName, 'utf8');

if (data.length === 0) {
    console.log ('Fichier vide.');
    return;
}