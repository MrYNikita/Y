//#region devide 0.0.0

/**
 * @typedef TBdevide
 * @prop {number} count
 * @prop {number} number
 * @typedef {TBdevide} Tdevide
*/

/** @arg {Tdevide} t */
function devideDeceit(t) {

    try {

        return devideVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {Tdevide} t */
function devideVerify(t) {

    const {



    } = t;

    return devideHandle(t);

};
/** @arg {Tdevide} t */
function devideHandle(t) {

    let {



    } = t;

    t = {

        ...t,

    };

    return devideComply(t);

};
/** @arg {Tdevide} t */
function devideComply(t) {

    const {

        count,
        number,

    } = t;

    return Math.floor(number / count);

};

/**
 * Функция получения результата от деления без остатка.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @prop {number} count
 * @prop {number} number
*/
export function numberDevide(number, count) {

    return devideDeceit({ number, count });

};

//#endregion
//#region before 0.0.0

/**
 * @typedef TBbefore
 * @prop {number} to
 * @prop {number} number
 * @typedef {TBbefore} Tbefore
*/

/** @arg {Tbefore} t */
function beforeDeceit(t) {

    try {

        return beforeVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {Tbefore} t */
function beforeVerify(t) {

    const {



    } = t;

    return beforeHandle(t);

};
/** @arg {Tbefore} t */
function beforeHandle(t) {

    let {



    } = t;

    t = {

        ...t,

    };

    return beforeComply(t);

};
/** @arg {Tbefore} t */
function beforeComply(t) {

    const {

        to,
        number,

    } = t;

    return number - (number % to);

};

/**
 * Функция для округления ичла до указанных значений.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
*/
export function numberBefore(number, to) {

    return beforeDeceit({ number, to });

};

//#endregion
//#region getReal 0.0.0

/**
 * @typedef TBgetReal
 * @prop {number} number
 * @typedef {TBgetReal} TgetReal
*/

/** @arg {TgetReal} t */
function getRealDeceit(t) {

    try {

        return getRealVerify(t);

    } catch (e) {

        if (config.strict) {

            throw e;

        };

        return undefined;

    };

};
/** @arg {TgetReal} t */
function getRealVerify(t) {

    const {



    } = t;

    return getRealHandle(t);

};
/** @arg {TgetReal} t */
function getRealHandle(t) {

    let {



    } = t;

    t = {

        ...t,

    };

    return getRealComply(t);

};
/** @arg {TgetReal} t */
function getRealComply(t) {

    const {

        number,

    } = t;

    return Math.abs(Math.trunc(number));

};

/**
 * Функция для получения целой части числа без учета его знака.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @arg {number} number
*/
export function numberGetReal(number) {

    return getRealDeceit({ number });

};

//#endregion
//#region getFrac 0.0.0

/**
 * @typedef TBgetFrac
 * @prop {number} number
 * @prop {number} fracLength
 * @typedef {TBgetFrac} TgetFrac
*/

/** @arg {TgetFrac} t */
function getFracDeceit(t) {

    try {

        return getFracVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {TgetFrac} t */
function getFracVerify(t) {

    const {



    } = t;

    return getFracHandle(t);

};
/** @arg {TgetFrac} t */
function getFracHandle(t) {

    let {



    } = t;

    t = {

        ...t,

    };

    return getFracComply(t);

};
/** @arg {TgetFrac} t */
function getFracComply(t) {

    const {

        number,
        fracLength,

    } = t;

    return number.toFixed(fracLength || number.toString().length).toString().split('.')[1] - 0;

};

/**
 * Функция для получения дробной части числа как целого значения.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @arg {number} number
 * @arg {number} fracLength
*/
export function numberGetFrac(number, fracLength = 3) {

    return getFracDeceit({ number, fracLength });

};

//#endregion
//#region getRandom 0.0.0

/**
 * @typedef TBgetRandom
 * @prop {number} min
 * @prop {number} max
 * @prop {number} count
 * @prop {boolean} frac
 * @prop {boolean} debug
 * @prop {boolean} unique
 * @typedef {TBgetRandom} TgetRandom
*/

/** @arg {TgetRandom} t */
function getRandomDeceit(t) {

    try {

        return getRandomVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {TgetRandom} t */
function getRandomVerify(t) {

    const {



    } = t;

    return getRandomHandle(t);

};
/** @arg {TgetRandom} t */
function getRandomHandle(t) {

    let {



    } = t;

    t = {

        ...t,

    };

    return getRandomComply(t);

};
/** @arg {TgetRandom} t */
function getRandomComply(t) {

    const {

        min,
        max,
        frac,
        count,
        debug,
        unique,

    } = t;

    if (count && unique && !frac) {

        const results = [];
        const sequence = numberGetSequence(max - min, min, 1);

        while (results.length !== count) results.push(sequence.splice(numberGetRandomReal(0, sequence.length - 1), 1));

        return results;

    } else if (count && unique && frac) {

        return new Array(count).fill().map(e => numberGetRandomFrac(min, max)).map((e, i, a) => {

            while (true) {

                const i1 = a.indexOf(e);

                if (i1 !== i && i1 !== -1) e = numberGetRandomFrac(min, max);
                else return e;

            };

        });

    } else if (count) {

        return new Array(count).fill().map(e => getRandomComply({ min, max, frac }));

    } else {

        let result = (!frac) ? Math.floor(min + Math.random() * (max + 1 - min)) : min + Math.random() * (max - min);

        if (frac && result > max) result = max;

        return result;

    };

};

/**
 * Функция для получения случайного целого числа в заданном диапазоне.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @arg {number} min Минимальное значение диапазона.
 * - По умолчанию `0`
 * @arg {number} max Максимальное значение диапазона.
 * - По умолчанию `100`
 * @returns {number}
*/
export function numberGetRandomReal(min = 0, max = 100) {

    return getRandomDeceit({ min, max });

};
/**
 * Функция для получения дробного числа в заданном диапазоне.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @arg {number} min Минимальное значение диапазона.
 * - По умолчанию `0`
 * @arg {number} max Максимальное значение диапазона.
 * - По умолчанию `100`
 * @return {number}
*/
export function numberGetRandomFrac(min = 0, max = 100) {

    return getRandomDeceit({ min, max, frac: true });

};
/**
 * Функция для получения массива целых случайных чисел.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @arg {number} min Минимальное значение диапазона.
 * - По умолчанию `0`
 * @arg {number} max Максимальное значение диапазона.
 * - По умолчанию `100`
 * @arg {number} count Кол-во создаваемой последовательности.
 * - По умолчанию `2`
*/
export function numberGetRandomRealMany(count = 2, min = 0, max = 100) {

    return getRandomDeceit({ count, min, max });

};
/**
 * Функция для получения массива целых случайных уникальных чисел.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @arg {number} min Минимальное значение диапазона.
 * - По умолчанию `0`
 * @arg {number} max Максимальное значение диапазона.
 * - По умолчанию `100`
 * @arg {number} count Кол-во создаваемой последовательности.
 * - По умолчанию `2`
*/
export function numberGetRandomFracMany(count = 2, min = 0, max = 100) {

    return getRandomDeceit({ count, min, max, frac: true });

};
/**
 * Функция для получения массива дробных случайных уникальных чисел.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @arg {number} min Минимальное значение диапазона.
 * - По умолчанию `0`
 * @arg {number} max Максимальное значение диапазона.
 * - По умолчанию `100`
 * @arg {number} count Кол-во создаваемой последовательности.
 * - По умолчанию `2`
*/
export function numberGetRandomRealManyUnique(count = 2, min = 0, max = 100) {

    return getRandomDeceit({ count, min, max, unique: true });

};
/**
 * Функция для получения массива дробных случайных чисел.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @arg {number} min Минимальное значение диапазона.
 * - По умолчанию `0`
 * @arg {number} max Максимальное значение диапазона.
 * - По умолчанию `100`
 * @arg {number} count Кол-во создаваемой последовательности.
 * - По умолчанию `2`
*/
export function numberGetRandomFracManyUnique(count = 2, min = 0, max = 100) {

    return getRandomDeceit({ count, min, max, frac: true, unique: true });

};

//#endregion
//#region getSequence 0.0.0

/**
 * @typedef TBgetSequence
 * @prop {number} step
 * @prop {number} begin
 * @prop {number} count
 * @typedef {TBgetSequence} TgetSequence
*/

/** @arg {TgetSequence} t */
function getSequenceDeceit(t) {

    try {

        return getSequenceVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {TgetSequence} t */
function getSequenceVerify(t) {

    const {



    } = t;

    return getSequenceHandle(t);

};
/** @arg {TgetSequence} t */
function getSequenceHandle(t) {

    let {



    } = t;

    t = {

        ...t,

    };

    return getSequenceComply(t);

};
/** @arg {TgetSequence} t */
function getSequenceComply(t) {

    const {



    } = t;

    const {

        step,
        begin,
        count,
        handlers,

    } = t;

    return new Array(count).fill(0).map((e, i) => {

        e = begin + i * step;

        handlers.forEach(h => e = h(e));

        return e;

    });

};

/**
 * Функция для получения последовательности чисел в виде массива.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @arg {number} step Шаг разницы между следюущим и предыдущим значением последовательности.
 * @arg {number} count Кол-во чисел в последовательности.
 * @arg {number} begin Начальное занчение последовательности.
 * @arg {...function} handlers Обработчики элементов последовательности.
*/
export function numberGetSequence(count = 2, begin = 1, step = 1, ...handlers) {

    return getSequenceDeceit({ count, begin, step, handlers });

};

//#endregion
//#region getNearstIndex 0.0.0

/**
 * @typedef TBgetNearstIndex
 * @prop {number} number
 * @prop {[number]} array
 * @typedef {TBgetNearstIndex} TgetNearstIndex
*/

/** @arg {TgetNearstIndex} t */
function getNearstIndexDeceit(t) {

    try {

        return getNearstIndexVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {TgetNearstIndex} t */
function getNearstIndexVerify(t) {

    const {



    } = t;

    return getNearstIndexHandle(t);

};
/** @arg {TgetNearstIndex} t */
function getNearstIndexHandle(t) {

    let {



    } = t;



    t = {

        ...t,

    };

    return getNearstIndexComply(t);

};
/** @arg {TgetNearstIndex} t */
function getNearstIndexComply(t) {

    const {

        array,
        number,

    } = t;

    const ir = array.findIndex(n => n >= number);


    if (ir !== -1) {

        const max = array[ir], il = ir - 1, min = array?.[il];

        if (max === number) return [ir, ir];
        else if (!min) return [null, ir];
        else return [il, ir];

    } else return [--array.length, null];

};

/**
 * Функция для получения индексов указанного массива ближайших к указанному значению.
 * Первый индекс обозначает ближайший слева элемент.
 * Второй - ближайший справа.
 *
 * Если один из индексов не существует, то он равен null.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @arg {number} number Число.
 * @arg {[number]} array Массив чисел.
*/
export function numberGetNearstIndex(number, array) {

    return getNearstIndexDeceit({ number, array });

};

//#endregion
//#region checkEntryRange 0.0.0

/**
 * @typedef TBcheckEntryRange
 * @prop {number} min
 * @prop {number} max
 * @prop {[number]} numbers
 * @typedef {TBcheckEntryRange} TcheckEntryRange
*/

/** @arg {TcheckEntryRange} t */
function checkEntryRangeDeceit(t) {

    try {

        return checkEntryRangeVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {TcheckEntryRange} t */
function checkEntryRangeVerify(t) {

    const {



    } = t;

    return checkEntryRangeHandle(t);

};
/** @arg {TcheckEntryRange} t */
function checkEntryRangeHandle(t) {

    let {



    } = t;

    if (t.min > t.max) [t.min, t.max] = [t.max, t.min];

    t = {

        ...t,

    };

    return checkEntryRangeComply(t);

};
/** @arg {TcheckEntryRange} t */
function checkEntryRangeComply(t) {

    const {

        min,
        max,
        numbers,

    } = t;

    return numbers.every(n => n >= min && n <= max);

};

/**
 * Функция для проверки принадлежности указанного значения к диапазону чисел.
 * Вернет `true` если все указанные числа будут в диапазоне.
 * Иначе `false`.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @arg {number} min Минимальное значение диапазона.
 * @arg {number} max Максимальное значение диапазона.
 * @arg {...number} numbers Числа, которые проверяются на принадлежность к диапазону.
*/
export function numberCheckEntryRange(min, max, ...numbers) {

    return checkEntryRangeDeceit({ min, max, numbers });

};

//#endregion
//#region checkIntersectionRange 0.0.0

/**
 * @typedef TBcheckIntersectionRange
 *
 * @typedef {TBcheckIntersectionRange} TcheckIntersectionRange
*/

/** @arg {TcheckIntersectionRange} t */
function checkIntersectionRangeDeceit(t) {

    try {

        return checkIntersectionRangeVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {TcheckIntersectionRange} t */
function checkIntersectionRangeVerify(t) {

    const {



    } = t;

    return checkIntersectionRangeHandle(t);

};
/** @arg {TcheckIntersectionRange} t */
function checkIntersectionRangeHandle(t) {

    let {



    } = t;



    t = {

        ...t,

    };

    return checkIntersectionRangeComply(t);

};
/** @arg {TcheckIntersectionRange} t */
function checkIntersectionRangeComply(t) {

    const {



    } = t;



};

/**
 * Функция для проверки пересечения диапазонов.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @arg {...[number,number]} ranges Диапазоны.
*/
export function numberCheckIntersectionRange(...ranges) {

    checkIntersectionRangeDeceit({ ranges });

};

//#endregion