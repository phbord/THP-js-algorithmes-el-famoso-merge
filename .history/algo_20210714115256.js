const Exercice1 = require('./class/exercice-1');
const Exercice2 = require('./class/exercice-2');
const Exercice3 = require('./class/exercice-3');
const Exercice4 = require('./class/exercice-4');
const Exercice5 = require('./class/exercice-5');
const Exercice6 = require('./class/exercice-6');

const exercice1 = new Exercice1();
const exercice2 = new Exercice2();
const exercice3 = new Exercice3();
const exercice4 = new Exercice4();
const exercice5 = new Exercice5();
const exercice6 = new Exercice6();

const data1_1 = [10, 15, 3, 7];
const data1_2 = [1, 8, 10, 21];
const data2_1 = [];
const data2_2 = [];


exercice1.sort(data1_1, 17); //true
exercice1.sort(data1_2, 19);
// exercice2.sort();
// exercice3.sort();
// exercice4.sort();
// exercice5.sort();
// exercice6.sort();

// COMMANDES :
// - `node algo.js`