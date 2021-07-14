class Exercice1 {
    constructor() {
    }

    sort(data, k) {return numbers.some((value1, index1) => {
        return numbers.some((value2, index2) => {
            if (index2 === index1) {
                return false;
            }
            comparisons += 1;
            return ((value1 + value2) === resultTarget);
        });
    });
        console.log("Exercice 1 : ");
    }
}

module.exports = Exercice1;