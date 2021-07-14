class Exercice4 {
    constructor() {
        this.count = 0;
    }

    sort(data) {
        let building = 0;
        for (var i = 0; i < data.length; i++) {
            if (data[i] > data[i + 1] || i === data.length - 1) {
                building += 1;
                this.count++;
            }
        }
        console.log("Exercices 4 et 6 : ", building, " / comparaisons : ", this.count);
    }
}

module.exports = Exercice4;