class MergeSort {
    constructor() {}

    sort(data) {
        // Pas besoin de trier le tableau si le tableau n'a qu'un élément ou est vide
        if (data.length <= 1) {
            return data;
        }
        // Afin de diviser le tableau en deux, nous devons déterminer le milieu
        const middle = Math.floor(data.length / 2);

        // C'est là que nous allons diviser le tableau en gauche et droite
        const left = data.slice(0, middle);
        const right = data.slice(middle);

        // Utiliser la récursivité pour combiner la gauche et la droite
        return merge(
            mergeSort(left), mergeSort(right)
        );

        console.log("Tri fusion: ", "", " comparaisons - ");
    }
}

module.exports = MergeSort;