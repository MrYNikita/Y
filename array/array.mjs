import { config } from "../config.mjs";
import { numberGetRandomReal } from "../number/number.mjs";

//#region mix 0.1.0

/**
 * @typedef TBmix
 * @prop {[any]} array
 * @prop {number} degree
 * @typedef {TBmix} Tmix
*/

/** @arg {Tmix} t */
function mixDeceit(t) {

    try {

        return mixVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {Tmix} t */
function mixVerify(t) {

    const {



    } = t;

    return mixHandle(t);

};
/** @arg {Tmix} t */
function mixHandle(t) {

    let {



    } = t;

    t = {

        ...t,

    };

    return mixComply(t);

};
/** @arg {Tmix} t */
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
 * @arg {[any]} array Исходный массив.
 * @arg {number} degree Степень перемешивания.
*/
export function arrayMix(array, degree = 1) {

    return mixDeceit({ array, degree, });

};

//#endregion
//#region bulk 0.0.0

/**
 * @typedef TBbulk
 * @prop {any[]} array
 * @prop {number[]} dimension
 * @typedef {TBbulk} Tbulk
*/

/** @arg {Tbulk} t */
function bulkDeceit(t) {

    try {

        return bulkVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {Tbulk} t */
function bulkVerify(t) {



    return bulkHandle(t);

};
/** @arg {Tbulk} t */
function bulkHandle(t) {



    return bulkComply(t);

};
/** @arg {Tbulk} t */
function bulkComply(t) {

    const {

        array,
        dimension,

    } = t;

    if (dimension.length > 1) for (let i = 0; i < array.length; i++) {

        array[i] = dimension[i] ? arraySupplement(new Array(dimension[i]).fill(undefined), array[i]) : array[i];

    } else for (let i = 0; i < array.length; i++) {

        array[i] = arraySupplement(new Array(dimension[0]).fill(undefined), array[i]);

    };

    return array;

};

/**
 * Функция для создания нового измерения массива.
 * Измерение может быть `равным` или `разным`.
 *
 * Если в качестве `dimension` (размерности) будет указанно единственное значение,
 * то созданное измерение будет `равным`: каждый элемент указанного массива
 * будет заменен массивом с размером равным `dimension`.
 *
 * Если в качестве `dimension` (размерности) будет указано множество значений,
 * то созданное измерение будет `разным`: для каждого элемента массива будет
 * применен соответсвующий его порядку размер.
 *
 * Если до применения функции заменяемый элемент был равен какому-либо значению,
 * отличному от `undefined`, то данное значение будет перенесено в следующее измерение.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @arg {any[]} array Исходный массив.
 * @arg {...number} dimension Размерности.
*/
export function arrayBulk(array, ...dimension) {

    return bulkDeceit({ array, dimension, });

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

/** @arg {Tpaste} t */
function pasteDeceit(t) {

    try {

        return pasteVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {Tpaste} t */
function pasteVerify(t) {

    const {



    } = t;

    return pasteHandle(t);

};
/** @arg {Tpaste} t */
function pasteHandle(t) {

    let {



    } = t;



    t = {

        ...t,

    };

    return pasteComply(t);

};
/** @arg {Tpaste} t */
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
 * @arg {[]} array Исходный массив.
 * @arg {number} index Индекс сдвига.
 * @arg {...any} elements Элементы вставки.
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

/** @arg {Tremove} t */
function removeDeceit(t) {

    try {

        return removeVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {Tremove} t */
function removeVerify(t) {

    const {



    } = t;

    return removeHandle(t);

};
/** @arg {Tremove} t */
function removeHandle(t) {

    let {



    } = t;

    if (t.indexs) t.indexs = t.indexs.sort((p, c) => p - c);

    t = {

        ...t,

    };

    return removeComply(t);

};
/** @arg {Tremove} t */
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

    } else if (indexs?.length) while (indexs.length) {

        const index = indexs.pop();

        array.splice(index, 1);

    } else array.splice(0);

    return array;

};

/**
 * Функция для очистки массивов.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @arg {any[]} array Исходный массив.
*/
export function arrayRemove(array) {

    return removeDeceit({ array, });

};
/**
 * Функция для удаления элементов из массива по индексам.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @arg {Array<any>} array Исходный массив.
 * @arg {...number} indexs Индексы удаления.
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
 * @arg {Array<any>} array Исходный массив.
 * @arg {...any} elements Элементы для удаления.
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

/** @arg {Tunique} t */
function uniqueDeceit(t) {

    try {

        return uniqueVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {Tunique} t */
function uniqueVerify(t) {

    const {



    } = t;

    return uniqueHandle(t);

};
/** @arg {Tunique} t */
function uniqueHandle(t) {

    let {



    } = t;

    t = {

        ...t,

    };

    return uniqueComply(t);

};
/** @arg {Tunique} t */
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
 * @arg {Array<any>} array Исходный массив.
*/
export function arrayUnique(array) {

    return uniqueDeceit({ array });

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

/** @arg {Treplace} t */
function replaceDeceit(t) {

    try {

        return replaceVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {Treplace} t */
function replaceVerify(t) {

    const {



    } = t;

    return replaceHandle(t);

};
/** @arg {Treplace} t */
function replaceHandle(t) {

    let {



    } = t;



    t = {

        ...t,

    };

    return replaceComply(t);

};
/** @arg {Treplace} t */
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
 * @arg {[]} array Исходный массив.
 * @arg {any} value Объект замещения.
 * @arg {...any} replaces Замещения.
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

/** @arg {Trearrange} t */
function rearrangeDeceit(t) {

    try {

        return rearrangeVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {Trearrange} t */
function rearrangeVerify(t) {

    const {



    } = t;

    return rearrangeHandle(t);

};
/** @arg {Trearrange} t */
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
/** @arg {Trearrange} t */
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
 * @arg {Array<any>} array Исходный массив.
 * @arg {number} indexOne Индекс первого элемента.
 * @arg {number} indexTwo Индекс второго элемента.
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
 * @arg {Array<any>} array Исходный массив.
 * @arg {any} elementOne Первый элемент.
 * @arg {any} elementTwo Второй элемент.
*/
export function arrayRearrangeByElement(array, elementOne, elementTwo) {

    return rearrangeDeceit({ array, elementOne, elementTwo, });

};

//#endregion
//#region supplement 0.0.1

/**
 * @typedef TBsupplement
 * @prop {any[]} array
 * @prop {any[]} supplements
 * @typedef {TBsupplement} Tsupplement
*/

/** @arg {Tsupplement} t */
function supplementDeceit(t) {

    try {

        return supplementVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {Tsupplement} t */
function supplementVerify(t) {



    return supplementHandle(t);

};
/** @arg {Tsupplement} t */
function supplementHandle(t) {

    if (t.supplements.length) t.supplements = t.supplements.filter(f => f !== undefined);

    return supplementComply(t);

};
/** @arg {Tsupplement} t */
function supplementComply(t) {

    const {

        array,
        supplements,

    } = t;

    let ia = 0;

    for (const s of supplements) {

        while (ia < array.length) {

            if (array[ia] === undefined) {

                array[ia++] = s;
                break;

            };

            ia++;

        };

    };

    return array;

};

/**
 * Функция для дополнения свободных значений массива.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @arg {any[]} array Исходный массив.
 * @arg {...any} supplements Элементы дополнения.
*/
export function arraySupplement(array, ...supplements) {

    return supplementDeceit({ array, supplements, });

};

//#endregion
//#region countSignificant 0.0.0

/**
 * @typedef TBcountSignificant
 * @prop {[]} array
 * @typedef {TBcountSignificant} TcountSignificant
*/

/** @arg {TcountSignificant} t */
function countSignificantDeceit(t) {

    try {

        return countSignificantVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {TcountSignificant} t */
function countSignificantVerify(t) {

    const {



    } = t;

    return countSignificantHandle(t);

};
/** @arg {TcountSignificant} t */
function countSignificantHandle(t) {

    let {



    } = t;



    t = {

        ...t,

    };

    return countSignificantComply(t);

};
/** @arg {TcountSignificant} t */
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
 * @arg {[]} array
*/
export function arrayCountSignificant(array) {

    return countSignificantDeceit({ array });

};

//#endregion
//#region getRandomElement 0.0.0

/**
 * @typedef TBgetRandomElement
 * @prop {any[]} array
 * @prop {number} limit
 * @typedef {TBgetRandomElement} TgetRandomElement
*/

/** @arg {TgetRandomElement} t */
function getRandomElementDeceit(t) {

    try {

        return getRandomElementVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {TgetRandomElement} t */
function getRandomElementVerify(t) {

    const {



    } = t;

    return getRandomElementHandle(t);

};
/** @arg {TgetRandomElement} t */
function getRandomElementHandle(t) {

    let {



    } = t;

    t = {

        ...t,

    };

    return getRandomElementComply(t);

};
/** @arg {TgetRandomElement} t */
function getRandomElementComply(t) {

    const {

        array,

    } = t;

    let limit = t.limit;

    if (limit === 1) return [array[numberGetRandomReal(0, array.length - 1)]];

    const a = array.slice();

    if (limit > 1 && limit < array.length - 1) {

        limit = a.length - limit;

        while (limit) {

            a.splice(numberGetRandomReal(0, a.length - 1), 1);

            limit--;

        };

    } else if (limit === array.length - 1) a.splice(numberGetRandomReal(0, a.length - 1), 1);

    return a;

};

/**
 * Функция для получения случайного элемента массива.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @arg {[any]} array Исходный массив.
 * @returns {any}
*/
export function arrayGetRandomElement(array) {

    return getRandomElementDeceit({ array, limit: 1, })[0];

};
/**
 * Функция для получения множества случайных элементов из исходного массива.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @arg {any[]} array Исходный массив.
 * @arg {number} limit Количество элементов.
*/
export function arrayGetRandomElementMany(array, limit) {

    return getRandomElementDeceit({ array, limit, });

};

//#endregion

//#region level 0.1.0

/**
 * @typedef TBlevel
 * @prop {any[]} array
 * @prop {number[]} levels
 * @typedef {TBlevel} Tlevel
*/

/** @arg {Tlevel} t */
function levelDeceit(t) {

    try {

        return levelVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {Tlevel} t */
function levelVerify(t) {



    return levelHandle(t);

};
/** @arg {Tlevel} t */
function levelHandle(t) {



    return levelComply(t);

};
/** @arg {Tlevel} t */
function levelComply(t) {

    const {

        array,
        levels,

    } = t;

    const s = [array];

    levels.slice(0, -1).forEach(l => {

        const sn = [];

        while(s.length) {

            let a = s.pop();

            arrayChangeSize(a, l);

            a.forEach((_, i, a) => sn.push(a[i] = []));

        };

        s.push(...sn);

    });

    s.forEach((_, i, a) => a[i] = arrayChangeSize(a[i], levels.at(-1)));

    return array;

};

/**
 * Функция изменения размерности массива.
 *
 * Делает исходный массив более размерным, заменяя каждый элемент
 * новым массивом указанного размера.
 *
 * Если целью функции (которой изначально являются элементы исходного массива),
 * оказываются другие массивы, то функция будет применена к их элементам и так до тех пор,
 * пока не будут найдены элементы отличные от массивов.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @arg {any[]} array Исходный массив.
 * @arg {...number} levels Размерности.
*/
export function arrayLevel(array, ...levels) {

    return levelDeceit({ array, levels, });

};

//#endregion

//#region append 0.0.1

/**
 * @typedef TBappend
 * @prop {[any]} array
 * @prop {[any]} elements
 * @typedef {TBappend} Tappend
*/

/** @arg {Tappend} t */
function appendDeceit(t) {

    try {

        return appendVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {Tappend} t */
function appendVerify(t) {

    const {



    } = t;

    return appendHandle(t);

};
/** @arg {Tappend} t */
function appendHandle(t) {

    let {



    } = t;

    t = {

        ...t,

    };

    return appendComply(t);

};
/** @arg {Tappend} t */
function appendComply(t) {

    const {

        array,
        elements,

    } = t;

    array.push(...elements);

    return array;

};

/**
 * Функция для дополнения исходного массива указанными элементами.
 * Ключевым отличием от добавления через метод `push` является возвращение исходного массива.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @arg {[any]} array Исходный массив.
 * @arg {...any} elements Элементы для добавления.
*/
export function arrayAppend(array, ...elements) {

    return appendDeceit({ array, elements, });

};

//#endregion
//#region appendMiss 0.0.0

/**
 * @typedef TBappendMiss
 * @prop {any[]} array
 * @prop {any[]} elements
 * @typedef {TBappendMiss} TappendMiss
*/

/** @arg {TappendMiss} t */
function appendMissDeceit(t) {

    try {

        return appendMissVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {TappendMiss} t */
function appendMissVerify(t) {



    return appendMissHandle(t);

};
/** @arg {TappendMiss} t */
function appendMissHandle(t) {



    return appendMissComply(t);

};
/** @arg {TappendMiss} t */
function appendMissComply(t) {

    const {

        array,
        elements,

    } = t;

    if (array.length > elements.length) {

        array.splice(0, elements.length);
        array.push(...elements);

    } else if (array.length === elements.length) {

        arrayRemove(array);
        array.push(...elements);

    } else {

        const e = elements.splice(-array.length);

        arrayRemove(array).push(...e);

    };

    return array;

};

/**
 * Функция добавления элементов с пропуском.
 * Пропуск подразумевает, что каждый добавленный элемент вытесняет первый элемент массива.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @arg
*/
export function arrayAppendMiss(array, ...elements) {

    return appendMissDeceit({ array, elements, });

};

//#endregion

//#region changeSize 0.0.0

/**
 * @typedef TBchangeSize
 * @prop {any[]} array
 * @prop {number} size
 * @typedef {TBchangeSize} TchangeSize
*/

/** @arg {TchangeSize} t */
function changeSizeDeceit(t) {

    try {

        return changeSizeVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {TchangeSize} t */
function changeSizeVerify(t) {



    return changeSizeHandle(t);

};
/** @arg {TchangeSize} t */
function changeSizeHandle(t) {



    return changeSizeComply(t);

};
/** @arg {TchangeSize} t */
function changeSizeComply(t) {

    const {

        size,
        array,

    } = t;

    if (array.length > size) array.splice(size);
    else if (array.length < size) array.push(...new Array(size - array.length).fill(undefined));

    return array;

};

/**
 * Функция для изменения размера исходного массива.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @arg {any[]} array
 * @arg {number} size
*/
export function arrayChangeSize(array, size) {

    return changeSizeDeceit({ array, size, });

};

//#endregion

//#region devideByLimit 0.0.0

/**
 * @typedef TBdevideByLimit
 * @prop {any[]} array
 * @prop {number} limit
 * @typedef {TBdevideByLimit} TdevideByLimit
*/

/** @arg {TdevideByLimit} t */
function devideByLimitDeceit(t) {

    try {

        return devideByLimitVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {TdevideByLimit} t */
function devideByLimitVerify(t) {



    return devideByLimitHandle(t);

};
/** @arg {TdevideByLimit} t */
function devideByLimitHandle(t) {

    if (t.array.constructor === String) t.array = t.array.split('');

    return devideByLimitComply(t);

};
/** @arg {TdevideByLimit} t */
function devideByLimitComply(t) {

    const {

        array,
        limit,

    } = t;

    const r = [];

    for (let i = 0; i < array.length;) r.push(array.splice(0, limit));

    return r;

};

/**
 * Функция разделения массива по лимиту.
 * Делит указанный массив на под-массивы по `limit` (лимиту) элементов.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @arg {any[]} array Исходный массив.
 * @arg {number} limit Лимит разделения.
*/
export function arrayDevideByLimit(array, limit) {

    return devideByLimitDeceit({ array, limit });

};

//#endregion