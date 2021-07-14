class Exercice1 {
    constructor() {
        this.comparisons = 0;
    }

    sort(data, k) {
        return data.some((value1, index1) => {
            return data.some((value2, index2) => {
                if (index2 === index1) {
                    console.log("Exercice 1 : ", false);
                    return false;
                }
                comparisons += 1;
                console.log("Exercice 1 : ", value1 + value2, " / r");
                return ((value1 + value2) === k);
            });
        });
    }
}

module.exports = Exercice1;