class Exercice2 {
    constructor() {
        this.msg = 1;
        this.count = 0;
    }

    //[3, 7, 8, 3, 6, 1]
    //[1, 4, 5, 8]
    sort(data) {
        let building = 0;
        for (var i = 0; i < data.length; i++) {
            console.log('i -->', i);
            if (i === data.length - 1) {
                building += 1;
                console.log('    last => building:',building);
            }
            else if (i > 0 && data[i] > data[i - 1] && data[i] > data[i + 1]) {
                building += 1;
                this.count++
                console.log('    building:',building,' / val:', data[i - 1],'/', data[i],'/', data[i + 1]);
            }
        }
        console.log("Exercice 2 : ", this.msg, " / comparaisons : ", this.count);
    }
}

module.exports = Exercice2;