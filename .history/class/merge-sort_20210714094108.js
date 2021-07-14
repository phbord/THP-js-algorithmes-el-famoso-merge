class MergeSort {
    constructor() {}

    sort(begin, end) {
        const size = distance(begin, end);
        if (size < 2) return;
        let pivot = begin + (size / 2);
        // Recursively break the vector into two pieces
        MergeSort(begin, pivot);
        MergeSort(pivot, end);

        // Merge the two pieces
        Merge(begin, pivot, end);
        console.log("Tri fusion: ", "", " comparaisons - ");
    }
}

module.exports = MergeSort;