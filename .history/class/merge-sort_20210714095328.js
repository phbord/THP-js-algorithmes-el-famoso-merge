class MergeSort {
    constructor() {}

    sort(l, end) {
        const size = distance(l, end);
        if (size < 2) return;

        let pivot = l + (size / 2);

        // Briser récursivement le vecteur en 2 parties
        sort(l, pivot);
        sort(pivot, end);

        // Fusionner les 2 parties
        Merge(l, pivot, end);
        console.log("Tri fusion: ", "", " comparaisons - ");
    }
}

module.exports = MergeSort;