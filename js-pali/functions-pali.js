

/**
 * Description placeholder INVERTIRE UNA PAROLA
 *
 * @param {string} word
 * @returns {string}
 */
function paliInverter (word) {

    paliword = word.split("").reverse().join("");

    return paliword;
};

/**
 * Description placeholder CONTROLLARE SE LA PAROLA INVERTITA E' PALINDROMA O MENO
 * @date 4/6/2024 - 12:03:24 PM
 *
 * @param {string} word
 * @param {string} reversedWord
 * @returns {boolean}
 */
function paliCheck (word, reversedWord) {

    let result = false;

    if (word === reversedWord) {

        result = true;
    };

    return result;

};