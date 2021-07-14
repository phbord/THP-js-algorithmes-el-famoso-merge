class MergeSort {
    constructor(data) {
        this.count = 0;
        this.dataLength = data.length;
    }

    sort(data) {
        //Si le tableau n'a qu'un élément ou est vide
        if (data.length <= 1) {
            return data;
        }
        //Déterminer le milieu => en divisant le tableau en 2
        const middle = Math.floor(data.length / 2);

        //Diviser le tableau en gauche et droite
        const left = data.slice(0, middle);
        const right = data.slice(middle);

        //Utiliser la récursivité pour combiner la gauche et la droite
        return this.merge(this.sort(left), this.sort(right));

        console.log("Tri fusion: ", "", " comparaisons - ");
    }

    //Fusionner les 2 tableaux (gauche et droite)
    merge(left, right) {
        let resultArray = [], leftIndex = 0, rightIndex = 0;

        //Concaténer les valeurs dans le resultArray dans l'ordre
        while (leftIndex < left.length && rightIndex < right.length) {
            if (left[leftIndex] < right[rightIndex]) {
                resultArray.push(left[leftIndex]);
                //Déplacer le curseur du tableau à gauche
                leftIndex++;
                this.count++;
            }
            else {
                resultArray.push(right[rightIndex]);
                //Déplacer le curseur du tableau à droite
                rightIndex++;
            }
        }

        //Concaténer ici car il restera un élément à gauche OU à droite
        let res = resultArray
                    .concat(left.slice(leftIndex))
                    .concat(right.slice(rightIndex));
        if (this.dataLength === res.length) {
            console.log("Tri fusion: ", this.count, " comparaisons => ", res, "\");
        }
        return res;
    }
}

module.exports = MergeSort;