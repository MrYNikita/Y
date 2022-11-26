import { config } from "../config.mjs";
import { numberGetRandomReal } from "../number/number.mjs";

//#region mix 0.1.0

/**
 * @typedef TBmix
 * @prop {[any]} array
 * @prop {number} degree
 * @typedef {TBmix} Tmix
*/

/** @param {Tmix} t */
function mixDeceit(t) {

    try {

        return mixVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @param {Tmix} t */
function mixVerify(t) {

    const {



    } = t;

    return mixHandle(t);

};
/** @param {Tmix} t */
function mixHandle(t) {

    let {



    } = t;

    t = {

        ...t,

    };

    return mixComply(t);

};
/** @param {Tmix} t */
function mixComply(t) {

    const {

        array,
        degree,

    } = t;

    const result = array.slice();

    for (let c = 0; c < degree; c++) result.forEach((e, i, a) => {

        let i1 = 0;

        if (i === 0) {

            i1 = numberGetRandomReal(1, array.length - 1);

        } else if (i === array.length - 1) {

            i1 = numberGetRandomReal(0, array.length - 2);

        } else if (i > 0 && i < array.length - 1) {

            i1 = (numberGetRandomReal(0, 1)) ? numberGetRandomReal(0, i - 1) : numberGetRandomReal(i + 1, array.length - 1);

        };

        arrayRearrangeByIndex(a, i, i1);

    });

    return result;

};

/**
 * Функция создания массива с произвольным размещением элементов исходного массива.
 * - Версия `0.1.0`
 * - Цепочка `DVHCa`
 * @param {[any]} array Исходный массив.
 * @param {number} degree Степень перемешивания.
 * @returns {[any]}
*/
export function arrayMix(array, degree = 1) {

    return mixDeceit({ array, degree, });

};

//#endregion
//#region paste 0.0.0

/**
 * @typedef TBpaste
 * @prop {[]} array
 * @prop {[]} elements
 * @prop {number} index
 * @typedef {TBpaste} Tpaste
*/

/** @param {Tpaste} t */
function pasteDeceit(t) {

    try {

        return pasteVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @param {Tpaste} t */
function pasteVerify(t) {

    const {



    } = t;

    return pasteHandle(t);

};
/** @param {Tpaste} t */
function pasteHandle(t) {

    let {



    } = t;



    t = {

        ...t,

    };

    return pasteComply(t);

};
/** @param {Tpaste} t */
function pasteComply(t) {

    const {

        array,
        index,
        elements,

    } = t;

    arrayAppend(elements, ...array.splice(index, 1));
    array.splice(index, 0, ...elements);

    return array;

};

/**
 * Функция вставки в массив элемента со сдвигом.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @param {[]} array Исходный массив.
 * @param {number} index Индекс сдвига.
 * @param {...any} elements Элементы вставки.
*/
export function arrayPaste(array, index, ...elements) {

    return pasteDeceit({ array, index, elements, });

};

//#endregion
//#region remove 0.1.0

/**
 * @typedef TBremove
 * @prop {Array<any>} array
 * @prop {Array<any>} elements
 * @prop {Array<number>} indexs
 * @typedef {TBremove} Tremove
*/

/** @param {Tremove} t */
function removeDeceit(t) {

    try {

        return removeVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @param {Tremove} t */
function removeVerify(t) {

    const {



    } = t;

    return removeHandle(t);

};
/** @param {Tremove} t */
function removeHandle(t) {

    let {



    } = t;

    if (t.indexs) t.indexs = t.indexs.sort((p, c) => p - c);

    t = {

        ...t,

    };

    return removeComply(t);

};
/** @param {Tremove} t */
function removeComply(t) {

    const {

        array,
        indexs,
        elements,

    } = t;

    if (elements?.length) while (elements.length) {

        const element = elements.pop();

        for (let index = 0; index < array.length; index++) {

            if (array[index] === element) {

                array.splice(index, 1);
                index--;

            };

        };

    } else if (indexs?.length) while(indexs.length) {

        const index = indexs.pop();

        array.splice(index, 1);

    } else array.splice(0);

    return array;

};

/**
 * Функция для удаления элементов из массива по индексам.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @param {Array<any>} array Исходный массив.
 * @param {...number} indexs Индексы удаления.
*/
export function arrayRemoveByIndex(array, ...indexs) {

    return removeDeceit({ array, indexs });

};
/**
 * Функция для удаления элементов из исходного массива.
 *
 * Удалены будут все вхождения данных элементов.
 * - Версия `0.2.0`
 * - Цепочка `DVHCa`
 * @param {Array<any>} array Исходный массив.
 * @param {...any} elements Элементы для удаления.
*/
export function arrayRemoveByElement(array, ...elements) {

    return removeDeceit({ array, elements });

};

//#endregion
//#region unique 0.1.0

/**
 * @typedef TBunique
 * @prop {[any]} array
 * @typedef {TBunique} Tunique
*/

/** @param {Tunique} t */
function uniqueDeceit(t) {

    try {

        return uniqueVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @param {Tunique} t */
function uniqueVerify(t) {

    const {



    } = t;

    return uniqueHandle(t);

};
/** @param {Tunique} t */
function uniqueHandle(t) {

    let {



    } = t;

    t = {

        ...t,

    };

    return uniqueComply(t);

};
/** @param {Tunique} t */
function uniqueComply(t) {

    const {

        array,

    } = t;

    const ua = Array.from(new Set(array));

    arrayRemoveByElement(array);

    array.push(...ua);

    return array;

};

/**
 * Функция для фильтрации элементов массива по критерию уникальности.
 * - Версия `0.1.0`
 * - Цепочка `DVHCa`
 * @param {Array<any>} array Исходный массив.
*/
export function arrayUnique(array) {

    return uniqueDeceit({ array });

};

//#endregion
//#region append 0.0.1

/**
 * @typedef TBappend
 * @prop {[any]} array
 * @prop {[any]} elements
 * @typedef {TBappend} Tappend
*/

/** @param {Tappend} t */
function appendDeceit(t) {

    try {

        return appendVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @param {Tappend} t */
function appendVerify(t) {

    const {



    } = t;

    return appendHandle(t);

};
/** @param {Tappend} t */
function appendHandle(t) {

    let {



    } = t;

    t = {

        ...t,

    };

    return appendComply(t);

};
/** @param {Tappend} t */
function appendComply(t) {

    const {

        array,
        elements,

    } = t;

    elements.forEach(e => array.push(e));

    return array;

};

/**
 * Функция для дополнения исходного массива указанными элементами.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @param {[any]} array Исходный массив.
 * @param {...any} elements Элементы для добавления.
 * - `ОА`
*/
export function arrayAppend(array, ...elements) {

    return appendDeceit({ array, elements, });

};

//#endregion
//#region replace 0.0.0

/**
 * @typedef TBreplace
 * @prop {[]} array
 * @prop {[]} replaces
 * @prop {any} value
 * @typedef {TBreplace} Treplace
*/

/** @param {Treplace} t */
function replaceDeceit(t) {

    try {

        return replaceVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @param {Treplace} t */
function replaceVerify(t) {

    const {



    } = t;

    return replaceHandle(t);

};
/** @param {Treplace} t */
function replaceHandle(t) {

    let {



    } = t;



    t = {

        ...t,

    };

    return replaceComply(t);

};
/** @param {Treplace} t */
function replaceComply(t) {

    const {

        array,
        value,
        replaces,

    } = t;

    array.splice(array.indexOf(value), 1, ...replaces);

    return array;

};

/**
 * Функция для замещения значения массива указанными значениями.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @param {[]} array Исходный массив.
 * @param {any} value Объект замещения.
 * @param {...any} replaces Замещения.
*/
export function arrayReplace(array, value, ...replaces) {

    return replaceDeceit({ array, value, replaces });

};

//#endregion
//#region rearrange 0.0.0

/**
 * @typedef TBrearrange
 * @prop {any} elementOne
 * @prop {any} elementTwo
 * @prop {number} indexOne
 * @prop {number} indexTwo
 * @prop {Array<any>} array
 * @typedef {TBrearrange} Trearrange
*/

/** @param {Trearrange} t */
function rearrangeDeceit(t) {

    try {

        return rearrangeVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @param {Trearrange} t */
function rearrangeVerify(t) {

    const {



    } = t;

    return rearrangeHandle(t);

};
/** @param {Trearrange} t */
function rearrangeHandle(t) {

    let {



    } = t;

    if (t.indexOne !== 0 && !t.indexOne) t.indexOne = -1;
    if (t.indexTwo !== 0 && !t.indexTwo) t.indexTwo = -1;

    if (t.elementOne) t.indexOne = t.array.find(e => e === t.elementOne);
    if (t.elementTwo) t.indexTwo = t.array.find(e => e === t.elementTwo);

    t = {

        ...t,

    };

    return rearrangeComply(t);

};
/** @param {Trearrange} t */
function rearrangeComply(t) {

    const {

        array,
        indexOne,
        indexTwo,

    } = t;

    if (indexOne === -1 || indexTwo === -1 || indexOne === indexTwo) return;

    [array[indexOne], array[indexTwo]] = [array[indexTwo], array[indexOne]];

    return array;

};

/**
 * Функция для перестановки элементов массива по индексам.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @param {Array<any>} array Исходный массив.
 * @param {number} indexOne Индекс первого элемента.
 * @param {number} indexTwo Индекс второго элемента.
*/
export function arrayRearrangeByIndex(array, indexOne, indexTwo) {

    return rearrangeDeceit({ array, indexOne, indexTwo, });

};
/**
 * Функция для перестановки элементов массива по явному указанию.
 * Данную функцию следует использовать для массивов, содержащих элементы ссылочного типа или уникальные значения.
 * В противном случае следует использовать функцию перестановки по индексу.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @param {Array<any>} array Исходный массив.
 * @param {any} elementOne Первый элемент.
 * @param {any} elementTwo Второй элемент.
*/
export function arrayRearrangeByElement(array, elementOne, elementTwo) {

    return rearrangeDeceit({ array, elementOne, elementTwo, });

};

//#endregion
//#region countSignificant 0.0.0

/**
 * @typedef TBcountSignificant
 * @prop {[]} array
 * @typedef {TBcountSignificant} TcountSignificant
*/

/** @param {TcountSignificant} t */
function countSignificantDeceit(t) {

    try {

        return countSignificantVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @param {TcountSignificant} t */
function countSignificantVerify(t) {

    const {



    } = t;

    return countSignificantHandle(t);

};
/** @param {TcountSignificant} t */
function countSignificantHandle(t) {

    let {



    } = t;



    t = {

        ...t,

    };

    return countSignificantComply(t);

};
/** @param {TcountSignificant} t */
function countSignificantComply(t) {

    const {

        array,

    } = t;

    return array.reduce(p => ++p, 0);

};

/**
 * Функция подсчета существенных элементов массива.
 * Вернет число, соотвествующую кол-ву элементов, не являющихся пустыми.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @param {[]} array
*/
export function arrayCountSignificant(array) {

    return countSignificantDeceit({ array });

};

//#endregion
//#region getRandomElement 0.0.0

/**
 * @typedef TBgetRandomElement
 * @prop {[any]} array
 * @typedef {TBgetRandomElement} TgetRandomElement
*/

/** @param {TgetRandomElement} t */
function getRandomElementDeceit(t) {

    try {

        return getRandomElementVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @param {TgetRandomElement} t */
function getRandomElementVerify(t) {

    const {



    } = t;

    return getRandomElementHandle(t);

};
/** @param {TgetRandomElement} t */
function getRandomElementHandle(t) {

    let {



    } = t;

    t = {

        ...t,

    };

    return getRandomElementComply(t);

};
/** @param {TgetRandomElement} t */
function getRandomElementComply(t) {

    const {

        array,

    } = t;

    return array[numberGetRandomReal(0, array.length - 1)];

};

/**
 * Функция для получения случайного элемента массива.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @param {[any]} array Исходный массив.
 * @returns {any}
*/
export function arrayGetRandomElement(array) {

    return getRandomElementDeceit({ array });

};

//#endregion