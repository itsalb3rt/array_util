class ArrayUtil {

    constructor() {

    }

    /**
     * Converts a 2D array to a comma-separated values (CSV) string.
     * @param {*} arr 
     * @param {*} delimiter 
     */
    arrayToCSV(arr, delimiter = ',') {
        return arr.map(v => v.map(x => `"${x}"`).join(delimiter)).join('\n');
    }

    /**
     * Counts the occurrences of a value in an array by value
     * @param {*} arr 
     * @param {*} val 
     */
    countOccurrences(arr, val) {
        return arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
    }

    /**
     * Filters out the non-unique values in an array, based 
     * on a provided comparator function.
     * 
     * let data = [
        { id: 0, value: 'a' },
        { id: 1, value: 'b' },
     ];
     * Ej: filterNonUniqueBy(data, (a, b) => a.id == b.id)
     * @param {*} arr 
     * @param {*} fn 
     */
    filterNonUniqueBy(arr, fn) {
        return arr.filter((v, i) => arr.every((x, j) => (i === j) === fn(v, x, i, j)));
    }

    /**
     * Filters out the non-unique values in an array.
     * @param {*} arr 
     */
    filterNonUnique(arr) {
        return arr.filter(i => arr.indexOf(i) === arr.lastIndexOf(i));
    }

    /**
     * Returns a list of elements that exist in both arrays.
     * @param {*} a 
     * @param {*} b 
     */
    intersection(a, b) {
        const s = new Set(b);
        return a.filter(x => s.has(x));
    }

    /**
     * Returns a list of elements that exist in both arrays, 
     * after applying the provided function to each array element of both.
     * 
     * Ej: intersectionBy(array1,array2, Math.floor);
     * @param {*} a 
     * @param {*} b 
     * @param {*} fn 
     */
    intersectionBy(a, b, fn) {
        const s = new Set(b.map(fn));
        return a.filter(x => s.has(fn(x)));
    }

    /**
    * Returns 1 if the array is sorted in ascending order, 
    * -1 if it is sorted in descending order or 0 if it is not sorted.
    **/
    isSorted(arr) {
        let direction = -(arr[0] - arr[1]);
        for (let [i, val] of arr.entries()) {
            direction = !direction ? -(arr[i - 1] - arr[i]) : direction;
            if (i === arr.length - 1) return !direction ? 0 : direction;
            else if ((val - arr[i + 1]) * direction > 0) return 0;
        }
    }

    /**
    * Joins all elements of an array 
    * into a string and returns this string. Uses a separator and an end separator.
    **/
    join(arr, separator = ',', end = separator) {
        return arr.reduce(
            (acc, val, i) =>
                i === arr.length - 2
                    ? acc + val + end
                    : i === arr.length - 1
                        ? acc + val
                        : acc + val + separator,
            ''
        );
    }

    /**
     * return the last element in array
     * @param {*} arr 
     */
    last(arr) {
        return arr[arr.length - 1];
    }

    /**
        * Takes any number of iterable objects or objects 
        * with a length property and returns the longest one. 
        * If multiple objects have the same length, the first one
        * will be returned. Returns undefined if no arguments are provided.
        **/
    longestItem(...vals) {
        return vals.reduce((a, x) => (x.length > a.length ? x : a));
    }

    /**
     * Filter an array of objects based on a 
     * condition while also filtering out unspecified keys.
     * const data = [
         {
             id: 1,
             name: 'john',
             age: 24
         },
         {
             id: 2,
             name: 'mike',
             age: 50
         }
         ];
 
         reducedFilter(data, ['id', 'name'], item => item.age > 24); // [{ id: 2, name: 'mike'}]
     * @param {*} data 
     * @param {*} keys 
     * @param {*} fn 
     */
    reducedFilter(data, keys, fn) {
        return data.filter(fn).map(el =>
            keys.reduce((acc, key) => {
                acc[key] = el[key];
                return acc;
            }, {})
        );
    }

    /**
     * Returns an array of elements that appear in both arrays.
     * 
     * @param {*} arr 
     * @param {*} values 
     */
    similarity(arr, values) {
        return arr.filter(v => values.includes(v));
    }

    /**
     * En teoría de conjuntos, la diferencia simétrica de dos 
     * conjuntos es una operación que resulta en otro conjunto 
     * cuyos elementos son aquellos que pertenecen a alguno de 
     * los conjuntos iniciales, sin pertenecer a ambos a la vez
     *
     * Returns the symmetric difference between two arrays, without filtering out duplicate values.
     * @param {*} a 
     * @param {*} b 
     */
    symmetricDifference(a, b) {
        const sA = new Set(a),
            sB = new Set(b);
        return [...a.filter(x => !sB.has(x)), ...b.filter(x => !sA.has(x))];
    }

    /**
     * Return unique element in array, omit the duplicate values
     * @param {*} arr 
     */
    uniqueElements(arr) {
        return [...new Set(arr)];
    }

    /**
     * Return unique array of unique element on array by 
     * condition
     * @param {*} arr 
     * @param {*} fn 
     */
    uniqueElementsBy(arr, fn) {
        return arr.reduce((acc, v) => {
            if (!acc.some(x => fn(v, x))) acc.push(v);
            return acc;
        }, []);
    }

}