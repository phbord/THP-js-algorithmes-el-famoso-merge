class MergeSort {
    constructor() {}

    sort(begin, end) {
        const size = distance(begin, end);
        if (size < 2) return;

        let pivot = begin + (size / 2);

        // Briser récursivement le vecteur en 2 parties
        sort(begin, pivot);
        sort(pivot, end);

        // Fusionner les 2 parties
        Merge(begin, pivot, end);
        console.log("Tri fusion: ", "", " comparaisons - ");
    }
}

module.exports = MergeSort;