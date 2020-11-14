//return an array sorted by key
function sortByKey(array, key, order = 1) {
    return array.sort(function (a, b) {
        const x = a[key];
        const y = b[key];

        if (x < y) return -1 * order;
        else if (x > y) return 1 * order;
        else return 0;
    });
}

export { sortByKey };
