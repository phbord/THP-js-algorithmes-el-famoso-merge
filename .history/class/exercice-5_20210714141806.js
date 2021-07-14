class Exercice5 {
    constructor() {
        this.msg = false;
        this.count = 0;
    }

    sort(data, k) {
        const passedValues = {};
        for (let i = 0; i < data.length; i++) {
            let check = k - data[i];
            if (passedValues[check]) {
                this.msg = true;
                console.log()
                console.log("Exercice 5 : ", this.msg, " / comparaisons : ", this.count);
                return true;
            }
            else {
                this.count++;
                passedValues[data[i]] = true;
            }
        }

        this.msg = false;
        console.log("Exercice 5 : ", this.msg, " / comparaisons : ", this.count);
        return false;
    }
}

module.exports = Exercice5;