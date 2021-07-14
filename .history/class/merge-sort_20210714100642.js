class MergeSort {
    constructor() {}

    sort(data, l=data[0], r=data.length - 1) {
        // Pas besoin de trier le tableau si le tableau n'a qu'un élément ou est vide
        if (unsortedArray.length <= 1) {
            return unsortedArray;
        }
        // Afin de diviser le tableau en deux, nous devons déterminer le milieu
        const middle = Math.floor(unsortedArray.length / 2);

        // This is where we will be dividing the array into left and right
        const left = unsortedArray.slice(0, middle);
        const right = unsortedArray.slice(middle);

        // Using recursion to combine the left and right
        return merge(
            mergeSort(left), mergeSort(right)
        );
        console.log("Tri fusion: ", "", " comparaisons - ");
    }
}

module.exports = MergeSort;