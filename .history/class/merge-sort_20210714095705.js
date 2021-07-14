class MergeSort {
    constructor() {}

    sort(data) {
        let l = data[0];
        let r = data[0];
        const size = distance(l, r);
        if (size < 2) return;

        let pivot = l + (size / 2);

        // Briser récursivement le vecteur en 2 parties
        sort(l, pivot);
        sort(pivot, r);

        // Fusionner les 2 parties
        Merge(l, pivot, r);
        console.log("Tri fusion: ", "", " comparaisons - ");
    }
}

module.exports = MergeSort;