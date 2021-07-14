class Exercice1 {
    constructor() {
        this.res = false;
        this.comparisons = 0;
    }

    sort(data, k) {
        return data.some((value1, index1) => {
            return data.some((value2, index2) => {
                if (index2 === index1) {
                    return false;
                }
                this.comparisons += 1;
                return ((value1 + value2) === k);
            });
        });
        console.log("Exercice 1 : ", this.res);
    }
}

module.exports = Exercice1;