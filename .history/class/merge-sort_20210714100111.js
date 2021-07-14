class MergeSort {
    constructor() {}

    sort(data, l=data[0], r=) {
        let l = data[0];
        let r = data.length - 1;
        const size = data.length;
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