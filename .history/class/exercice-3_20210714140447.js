class Exercice3 {
    constructor() {
        this.msg = false;
        this.count = 0;
    }

    //[10, 15, 3, 7]
    //[1, 8, 10, 21]
    sort(data) {
        let last = data.length - 1;
        for (let i = 0; i <= last; i++) {
            if (data[i] + data[j] === k){
                this.msg = false;
                return true;
            } else if (data[i] + data[last] > k) {
                last--;
                this.count++;
            } else if (data[i] + data[last] < k) {
                i++;
            }
        }
        this.msg = false;
        console.log("Exercice 1 : ", this.msg, " / comparaisons : ", this.count);
        return false;
    }
}

module.exports = Exercice3;