class Exercice5 {
    constructor() {
        this.msg = false;
        this.count = 0;
    }

    sort(data) {
        const passedValues = {};
        for (let i = 0; i < arr.length; i++) {
            let check = k - arr[i];
            if (passedValues[check]) {
                this.msg = true;
                console.log("Exercice 5 : ", this.msg, " / comparaisons : ", this.count);
                return true;
            }
            else {
                passedValues[arr[i]] = true;
            }
        }

        this.msg = false;
        console.log("Exercice 5 : ", this.msg, " / comparaisons : ", this.count);
        return false;
    }
}

module.exports = Exercice5;