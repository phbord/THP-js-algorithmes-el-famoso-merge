class Exercice1 {
    constructor() {
        this.msg = false;
        this.comparisons = 0;
    }

    sort(data, k) {
        const res = data.some((value1, index1) => {
            return data.some((value2, index2) => {
                if (index2 === index1) {
                    this.msg = false;
                    return false;
                }
                this.comparisons += 1;
                return ((value1 + value2) === k);
            });
        });
        console.log("Exercice 1 : ", this.msg);
        return res;
    }
}

module.exports = Exercice1;