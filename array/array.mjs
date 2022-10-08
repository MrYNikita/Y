import { numberGetRandomReal } from "../number/number.mjs";

//#region mix 0.0.0

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

        [a[i], a[i1]] = [a[i1], a[i]];

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
//#region remove 0.0.0

/**
 * @typedef TBremove
 * @prop {[any]} array
 * @prop {[any]} elements
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

    t = {

        ...t,

    };

    return removeComply(t);

};
/** @param {Tremove} t */
function removeComply(t) {

    const {

        array,
        elements,

    } = t;

    elements.forEach(e => {

        const i = array.indexOf(e);

        if (i !== -1) array.splice(i, 1);

    });

    return array;

};

/**
 * Функция для удаления элементов из исходного массива.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * 
*/
export function arrayRemove(array, ...elements) {

    return removeDeceit({ array, elements });

};

//#endregion
//#region unique 0.0.0

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

    return Array.from(new Set(array));

};

/**
 * Функция для фильтрации элементов массива по критерию уникальности.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @param {[any]} array исходный массив.
 * @returns {[any]}
*/
export function arrayUnique(array) {

    return uniqueDeceit({ array });

};

//#endregion
//#region append 0.0.0

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