class Exercice3 {
    constructor() {
        this.msg = false;
        this.count = 0;
    }

    //[10, 15, 3, 7]
    //[1, 8, 10, 21]
    sort(data, k) {
        let i 
        let last = data.length - 1;
        while (last > i) {
            if (data[i] + data[last] === k){
                this.msg = true;
                console.log("Exercices 3 et 5 : ", this.msg, " / comparaisons : ", this.count);
                return true;
            } else if (data[i] + data[last] > k) {
                last--;
                this.count++;
            } else if (data[i] + data[last] < k) {
                i++;
            }
        }
        this.msg = false;
        console.log("Exercices 3 et 5 : ", this.msg, " / comparaisons : ", this.count);
        return false;
    }
}

module.exports = Exercice3;