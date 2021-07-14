class MergeSort {
    constructor() {}

    sort(data) {
        // Pas besoin de trier le tableau si le tableau n'a qu'un élément ou est vide
        if (data.length <= 1) {
            return data;
        }
        // Afin de diviser le tableau en 2, nous devons déterminer le milieu
        const middle = Math.floor(data.length / 2);

        // Diviser le tableau en gauche et droite
        const left = data.slice(0, middle);
        const right = data.slice(middle);

        // Utiliser la récursivité pour combiner la gauche et la droite
        return merge(
            mergeSort(left), mergeSort(right)
        );

        console.log("Tri fusion: ", "", " comparaisons - ");
    }

    // Fusionner les deux tableaux : gauche et droite
    function merge (left, right) {
        let resultArray = [], leftIndex = 0, rightIndex = 0;

        // Concaténer les valeurs dans le resultArray dans l'ordre
        while (leftIndex < left.length && rightIndex < right.length) {
            if (left[leftIndex] < right[rightIndex]) {
                resultArray.push(left[leftIndex]);
                leftIndex++; // move left array cursor
            } else {
                resultArray.push(right[rightIndex]);
                rightIndex++; // move right array cursor
            }
        }

        // Concaténer ici car il restera un élément à gauche OU à droite
        return resultArray
                .concat(left.slice(leftIndex))
                .concat(right.slice(rightIndex));
    }
}

module.exports = MergeSort;