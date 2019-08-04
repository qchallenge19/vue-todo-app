/**
 * function to generate a random number with passed in param - len
 * @param len
 * @returns {string}
 */
function generateRandomId(len) {
    return Math.random()
        .toString()
        .substr(2, len);
}
export { generateRandomId };
