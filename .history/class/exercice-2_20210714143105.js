class Exercice2 {
    constructor() {
        this.count = 0;
    }

    sort(data) {
        let building = 0;
        for (var i = 0; i < data.length; i++) {
            if (i === data.length - 1) {
                building += 1;
            }
            else if (i > 0 && data[i] > data[i - 1] && data[i] > data[i + 1]) {
                building += 1;
                this.count++;
            }
        }
        console.log("Exercice 2 : ", building, " / comparaisons : ", this.count);
    }
}

module.exports = Exercice2;