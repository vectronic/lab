/**
 * Multiples all the values in an array.
 * @param  {Array} arr an array of numbers
 * @return {Number} the multiple of all the array values
 */
const multiplyArray = arr => {
    const result = arr.reduce((a, b) => a * b, 1);

    return result;
};

export default multiplyArray;
