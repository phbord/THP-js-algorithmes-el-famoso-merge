class Exercice2 {
    constructor() {
        this.msg = 1;
        this.count = 0;
    }

    //[3, 7, 8, 3, 6, 1]
    //[1, 4, 5, 8]
    sort(data) {
        let building = 0;
        for (var i = 0; i < data.length - 1; i++) {
            console.log('-->', i);
            if (i > 0 && data[i] > data[i + 1] && data[i] < data[i - 1]) {
                building += 1;
                console.log('    building:',building,' / ', data[i]);
            }
        }
        console.log("Exercice 2 : ", this.msg, " / comparaisons : ", this.count);
    }
}

module.exports = Exercice2;