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
            return true;
        } else {
            passedValues[arr[i]] = true;
        }
    }
    return false;
    }
}

module.exports = Exercice5;