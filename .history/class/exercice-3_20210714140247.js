class Exercice3 {
    constructor() {
        this.msg = false;
        this.count = 0;
    }

    //[10, 15, 3, 7]
    //[1, 8, 10, 21]
    sort(data) {
        let last = data.length - 1;
        for (let i = 0; i < last; i++) {
            if (data[i] + data[j] === k){
                return true;
            } else if (data[i] + data[j] > k) {
                j--;
            } else if (data[i] + data[j] < k) {
                i++;
            }
        }
        console.log("Exercice 1 : ", this.msg, " / comparaisons : ", this.count);
    }
}

module.exports = Exercice3;