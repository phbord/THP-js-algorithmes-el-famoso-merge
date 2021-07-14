class Exercice2 {
    constructor() {
        this.msg = 1;
        this.count = 0;
    }

    sort(data) {
        let building = 0;
        for (var i = 0; i < data.length - 1; i++) {
            if (data[i] < data[i + 1]) {
                building += 1;
                console.log(building,'>>>>', data[i + 1]);
            }
        }
        console.log("Exercice 2 : ", this.msg, " / comparaisons : ", this.count);
    }
}

module.exports = Exercice2;