import { config } from "../config.mjs";

//#region YT

/** ### jectT
 * - Тип `T`
 * - Версия `0.1.0`
 * - Модуль `ject`
 *
 * Основной параметр модуля `ject`.
 *
 * @typedef jectT
 * @prop {jectTTJect} ject
 *
*/
/** ### jectTJect
 * - Тип `T`
 * - Версия `0.1.0`
 * - Модуль `ject`
 *
 *
 *
 * @typedef {{}} jectTTJect
 *
*/

//#endregion
//#region YV



//#endregion

//#region adopt 0.0.0

/** ### jectTFAdopt
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `ject`
 * ***
 *
 * Результирующие параметры функции `adopt`.
 *
 * @typedef {jectTFUAdopt&jectT} jectTFAdopt
 *
*/
/** ### jectTFUAdopt
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `ject`
 *
 * Уникальные параметры функции `adopt`.
 *
 * @typedef jectTFUAdopt
 * @prop {jectTTJect} owner
*/

/** @arg {jectTFAdopt} t */
function adoptDeceit(t) {

    try {

        return adoptVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {jectTFAdopt} t */
function adoptVerify(t) {

    const {



    } = t;

    return adoptHandle(t);

};
/** @arg {jectTFAdopt} t */
function adoptHandle(t) {

    const {



    } = t;

    return adoptComply(t);

};
/** @arg {jectTFAdopt} t */
function adoptComply(t) {

    const {

        ject,
        owner,

    } = t;

    Object.keys(ject).forEach(s => owner[s] !== undefined && (ject[s] = owner[s]));

    return ject;

};

/**
 * ### jectAdopt
 * - Версия `0.0.1`
 * - Цепочка `DVHCa`
 * - Модуль `ject`
 * ***
 *
 * Функция перенятия общих свойств от обладателя к получателю.
 *
 * Заменяет свойства получателя на свойства обладателя, если они совподают по ключу.
 *
 * ***
 * @arg {} ject `Получатель`
 * @arg {} owner `Обладатель`
 * @return {TJ}
 * @template TJ
*/
export function jectAdopt(ject, owner) {

    return adoptDeceit({ ject, owner });

};

//#endregion

//#region fill 0.2.0

/** ### jectTFFill
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `ject`
 * ***
 *
 * Результирующие параметры функции `fill`.
 *
 * @typedef {jectTFUFill&jectT} jectTFFill
 *
*/
/** ### jectTFUFill
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `ject`
 *
 * Уникальные параметры функции `fill`.
 *
 * @typedef jectTFUFill
 * @prop {jectTTJect} filler
*/

/** @arg {jectTFFill} t */
function fillDeceit(t) {

    try {

        return fillVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {jectTFFill} t */
function fillVerify(t) {

    const {



    } = t;

    return fillHandle(t);

};
/** @arg {jectTFFill} t */
function fillHandle(t) {

    const {



    } = t;

    return fillComply(t);

};
/** @arg {jectTFFill} t */
function fillComply(t) {

    const {

        ject,
        filler,

    } = t;

    Object.keys(ject).forEach(s => filler[s] !== undefined && (ject[s] = filler[s]));

    return ject;

};

/**
 * ### jectAdopt
 * - Версия `0.2.0`
 * - Цепочка `DVHCa`
 * - Модуль `ject`
 * ***
 *
 * Функция для заполнения полей указанного `объекта` полями из `заполнителя`.
 *
 * ***
 * @arg {TJ} ject `Объект`
 * @arg {TJ} filler `Заполнитель`
 * @return {TJ}
 * @template TJ
*/
export function jectFill(ject, filler) {

    fillDeceit({ ject, filler, });

};

//#endregion

//#region equal 0.0.0

/** ### jectTFEqual
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `ject`
 * ***
 *
 * Результирующие параметры функции `equal`.
 *
 * @typedef {jectTFUEqual&jectTTJect} jectTFEqual
 *
*/
/** ### jectTFUEqual
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `ject`
 *
 * Уникальные параметры функции `equal`.
 *
 * @typedef jectTFUEqual
 * @prop {jectT} equal
*/

/** @arg {jectTFEqual} t */
function equalDeceit(t) {

    try {

        return equalVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {jectTFEqual} t */
function equalVerify(t) {

    const {



    } = t;

    return equalHandle(t);

};
/** @arg {jectTFEqual} t */
function equalHandle(t) {

    const {



    } = t;

    return equalComply(t);

};
/** @arg {jectTFEqual} t */
function equalComply(t) {

    const {

        ject,
        equal,

    } = t;

    if (ject === equal) {

        return true;

    };

    const u = [ject, equal];
    const s = [[ject, equal]];

    while (s.length) {

        const [j, e] = s.pop();
        const [jks, eks] = [j, e].map(e => Object.keys(e));

        if (jks.length !== eks.length) {

            return false;

        };

        for (const p of jks) {

            if (j[p] instanceof Object) {

                if (j[p].constructor === e[p].constructor) {

                    if (u.every(u => u[0] !== j[p] && u[1] !== e[p])) {

                        const a = [j[p], e[p]];

                        [s, u].forEach(e => e.push(a));

                    };

                } else {

                    return false;

                };

            } else {

                if (j[p] !== e[p]) {

                    return false;

                };

            };

        };

    };

    return true;

};

/**
 * ### jectEqual
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `ject`
 * ***
 *
 * Функция сравнения объектов.
 *
 * ***
 * @arg {TJ} ject `Объект`
 * @arg {TJE} equal `Эквивалент`
 * @template TJ,TJE
*/
export function jectEqual(ject, equal) {

    return equalDeceit({ ject, equal, });

};

//#endregion

//#region getProperty 0.0.0

/** ### jectTFGetProperty
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `ject`
 * ***
 *
 * Результирующие параметры функции `getProperty`.
 *
 * @typedef {jectTFUGetProperty&jectTTJect} jectTFGetProperty
 *
*/
/** ### jectTFUGetProperty
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `ject`
 *
 * Уникальные параметры функции `getProperty`.
 *
 * @typedef jectTFUGetProperty
 * @prop {string} property
*/

/** @arg {jectTFGetProperty} t */
function getPropertyDeceit(t) {

    try {

        return getPropertyVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {jectTFGetProperty} t */
function getPropertyVerify(t) {

    const {



    } = t;

    return getPropertyHandle(t);

};
/** @arg {jectTFGetProperty} t */
function getPropertyHandle(t) {

    const {



    } = t;

    return getPropertyComply(t);

};
/** @arg {jectTFGetProperty} t */
function getPropertyComply(t) {

    const {

        ject,
        property,

    } = t;

    const structures = [ject];

    while (structures.length) {

        const s = structures.pop();

        if (s.hasOwnProperty(property)) {

            return s[property];

        } else {

            for (const v of Object.values(s)) {

                if (typeof v === 'object') {

                    structures.push(v);

                };

            };

        };

    };

    return undefined;

};

/**
 * ### jectGetProperty
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `ject`
 * ***
 *
 * Функция для извлечения свойства указанного объекта.
 *
 * ***
 * @arg {{}} ject `Объект`
 * @arg {string} property `Свойство`
*/
export function jectGetProperty(ject, property) {

    return getPropertyDeceit({ ject, property, });

};

//#endregion
//#region getPropertyByPath 0.0.0

/** ### jectTPropertyPath
 * - Тип `TT`
 * - Версия `0.0.0`
 * - Модуль `ject`
 *
 *
 *
 * @typedef {('*'|'f'|'l')[]|string[]} jectTPropertyPath
 *
*/
/** ### jectTFGetPropertyByPath
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `ject`
 * ***
 *
 * Результирующие параметры функции `getPropertyByPath`.
 *
 * @typedef {jectTFUGetPropertyByPath&jectTTJect} jectTFGetPropertyByPath
 *
*/
/** ### jectTFUGetPropertyByPath
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `ject`
 *
 * Уникальные параметры функции `getPropertyByPath`.
 *
 * @typedef jectTFUGetPropertyByPath
 * @prop {jectTPropertyPath} path
*/

/** @arg {jectTFGetPropertyByPath} t */
function getPropertyByPathDeceit(t) {

    try {

        return getPropertyByPathVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {jectTFGetPropertyByPath} t */
function getPropertyByPathVerify(t) {

    const {



    } = t;

    return getPropertyByPathHandle(t);

};
/** @arg {jectTFGetPropertyByPath} t */
function getPropertyByPathHandle(t) {

    const {



    } = t;

    t.path = t.path.split(' ').reverse();

    return getPropertyByPathComply(t);

};
/** @arg {jectTFGetPropertyByPath} t */
function getPropertyByPathComply(t) {

    const {

        path,
        ject,

    } = t;

    let c = 0;
    let u = [];
    let r = [ject];

    const l = path.length - 1;

    while (c !== l && r.length) {

        const p = path.pop();

        for (const j of r) {

            u.push(j);

            switch (p) {

                case 'f': {

                    const f = Object.values(j).find(v => v instanceof Object && !u.includes(v));

                    if (f) {

                        r = [f];

                        u.push(f);
                        break;

                    };

                }; break;
                case 'l': {

                    const f = Object.values(j).reverse().find(v => v instanceof Object && !u.includes(v));

                    if (f) {

                        r = [f];

                        u.push(f);
                        break;

                    };

                }; break;
                case '*': {

                    r.push(...Object.values(j).filter(v => v instanceof Object && !u.includes(v)));

                }; break;
                default: {

                    if (j[p] instanceof Object) {

                        r = [j[p]];
                        break;

                    };

                }; break;

            };

        };

        if (!r) return undefined;

        c++;

    };

    for (const j of r) {

        switch (path[0]) {

            default: {

                if (j[path[0]]) {

                    return j[path[0]];

                };


            }; break;

        };

    };

    return undefined;

};

/**
 * ### jectGetPropertyByPath
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `ject`
 * ***
 *
 * Функция для глубокого поиска по указанному пути.
 *
 * ***
 * @arg {{}} ject `Объект`
 * @arg {string} path `Путь`
 *
 * Путь до свойства.
 *
 * Задать путь можно с помощью переходов. Каждый переход может быть представлен строкой или символьной инструкцией.
 * Строки воспринимаются как названия свойств, в которых следует продолжать поиск.
 *
 * Список инструкций:
 * - `*` - Все свойства. Собирает все найденные структуры.
 * - `f` - Первое свойство. Продолжает поиск в первой обнаруженной структуре пропуская прочие.
 * - `l` - Последнее свойство. Продолжает поиск в последней обнаруженной структуре пропуская прочие.
 * - `string` - Точное название свойства. Ищет указанное название среди перечня свойств.
 *
 * Для разделения инструкций необходимо использовать ` ` (пробел).
*/
export function jectGetPropertyByPath(ject, path) {

    return getPropertyByPathDeceit({ ject, path, });

};

//#endregion
//#region getPropertyByPathMany 0.0.0

/** ### jectTFGetPropertyByPathMany
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `ject`
 * ***
 *
 * Результирующие параметры функции `getPropertyByPathMany`.
 *
 * @typedef {jectTFUGetPropertyByPathMany&jectTFGetPropertyByPath} jectTFGetPropertyByPathMany
 *
*/
/** ### jectTFUGetPropertyByPathMany
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `ject`
 *
 * Уникальные параметры функции `getPropertyByPathMany`.
 *
 * @typedef jectTFUGetPropertyByPathMany
 * @prop {any} _
*/

/** @arg {jectTFGetPropertyByPathMany} t */
function getPropertyByPathManyDeceit(t) {

    try {

        return getPropertyByPathManyVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {jectTFGetPropertyByPathMany} t */
function getPropertyByPathManyVerify(t) {

    const {



    } = t;

    return getPropertyByPathManyHandle(t);

};
/** @arg {jectTFGetPropertyByPathMany} t */
function getPropertyByPathManyHandle(t) {

    const {



    } = t;

    t.path = t.path.split(' ').reverse();

    return getPropertyByPathManyComply(t);

};
/** @arg {jectTFGetPropertyByPathMany} t */
function getPropertyByPathManyComply(t) {

    const {



    } = t;

    const {

        path,
        ject,

    } = t;

    let c = 0;
    let u = [];
    let s = [ject];

    const l = path.length - 1;

    while (c !== l && s.length) {

        const p = path.pop();

        for (const j of s) {

            u.push(j);

            switch (p) {

                case 'f': {

                    const f = Object.values(j).find(v => v instanceof Object && !u.includes(v));

                    if (f) {

                        s = [f];

                        u.push(f);
                        break;

                    };

                }; break;
                case 'l': {

                    const f = Object.values(j).reverse().find(v => v instanceof Object && !u.includes(v));

                    if (f) {

                        s = [f];

                        u.push(f);
                        break;

                    };

                }; break;
                case '*': {

                    s.push(...Object.values(j).filter(v => v instanceof Object && !u.includes(v)));

                }; break;
                default: {

                    if (j[p] instanceof Object) {

                        s = [j[p]];
                        break;

                    };

                }; break;

            };

        };

        if (!s) return undefined;

        c++;

    };

    const r = [];

    for (const j of s) {

        switch (path[0]) {

            default: {

                if (j[path[0]]) {

                    r.push(j[path[0]]);

                };


            }; break;

        };

    };

    return r;

};

/**
 * ### jectGetPropertyByPathMany
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `ject`
 * ***
 *
 * Функция для множественного {@link jectGetPropertyByPath|глубокого поиска} по указанному пути.
 *
 * Возвращает в качестве результата массив найденных по указанному пути свойств.
 *
 * ***
 * @arg {{}} ject `Объект`
 * @arg {string} path `Путь`
 *
 * Путь до свойств.
 *
 * Задать путь можно с помощью переходов. Каждый переход может быть представлен строкой или символьной инструкцией.
 * Строки воспринимаются как названия свойств, в которых следует продолжать поиск.
 *
 * Список инструкций:
 * - `*` - Все свойства. Собирает все найденные структуры.
 * - `f` - Первое свойство. Продолжает поиск в первой обнаруженной структуре пропуская прочие.
 * - `l` - Последнее свойство. Продолжает поиск в последней обнаруженной структуре пропуская прочие.
 * - `string` - Точное название свойства. Ищет указанное название среди перечня свойств.
 *
 * Для разделения инструкций необходимо использовать ` ` (пробел).
 *
*/
export function jectGetPropertyByPathMany(ject, path) {

    return getPropertyByPathManyDeceit({ ject, path, });

};

//#endregion

//#region clone 0.2.0

/** ### jectTFClone
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `ject`
 * ***
 *
 * Результирующие параметры функции `clone`.
 *
 * @typedef {jectTFUClone&jectTTJect} jectTFClone
 *
*/
/** ### jectTFUClone
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `ject`
 *
 * Уникальные параметры функции `clone`.
 *
 * @typedef jectTFUClone
 * @prop {boolean} link
*/

/** @arg {jectTFClone} t */
function cloneDeceit(t) {

    try {

        return cloneVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {jectTFClone} t */
function cloneVerify(t) {

    const {



    } = t;

    return cloneHandle(t);

};
/** @arg {jectTFClone} t */
function cloneHandle(t) {

    const {



    } = t;

    return cloneComply(t);

};
/** @arg {jectTFClone} t */
function cloneComply(t) {

    const {

        ject,
        link,

    } = t;

    if (ject) {

        const result = new ject.constructor();
        const mirror = [[result, ject]];
        const subjects = [];

        const f = (n, p, v) => {

            const f = subjects.find(s => s[0] === v);

            if (link && f) {

                n[p] = f[1];

            } else if (v instanceof Object) {

                switch (v.constructor) {

                    case Function: n[p] = v; break;
                    default: n[p] = new v.constructor();

                };

                // n[p] = new v.constructor();

                mirror.push([n[p], v]);
                subjects.push([v, n[p]]);

            } else {

                n[p] = v;

            };

        };

        while (mirror.length) {

            const [n, o] = mirror.pop();

            if (o instanceof Array) o.forEach((e, ei) => f(n, ei, e));
            else Object.entries(o).forEach(e => f(n, e[0], e[1]));

        };

        return result;

    } else return ject;

};

/**
 * ### jectClone
 * - Версия `0.0.1`
 * - Цепочка `DVHCa`
 * - Модуль `ject`
 * ***
 *
 * Функция клонирования объекта.
 *
 * ***
 * @arg {typeG} ject `Объект`
 * @arg {boolean?} link `Режим сохранения ссылочной структуры`
 * @return {typeG}
 * @template typeG
*/
export function jectClone(ject, link) {

    return cloneDeceit({ ject, link });

};

//#endregion

//#region display 0.0.0

/**
 * @typedef TBdisplay
 *
 * @typedef {TBdisplay} Tdisplay
*/

/** @arg {Tdisplay} t */
function displayDeceit(t) {

    try {

        return displayVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {Tdisplay} t */
function displayVerify(t) {

    const {



    } = t;

    return displayHandle(t);

};
/** @arg {Tdisplay} t */
function displayHandle(t) {

    let {



    } = t;



    t = {

        ...t,

    };

    return displayComply(t);

};
/** @arg {Tdisplay} t */
function displayComply(t) {

    const {



    } = t;



};

//#endregion
//#region supplement 0.0.0

/**
 * @typedef TBsupplement
 * @prop {{}} ject
 * @prop {{}} supplement
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

    const {



    } = t;

    return supplementHandle(t);

};
/** @arg {Tsupplement} t */
function supplementHandle(t) {

    let {



    } = t;



    t = {

        ...t,

    };

    return supplementComply(t);

};
/** @arg {Tsupplement} t */
function supplementComply(t) {

    const {

        ject,
        supplement,

    } = t;

    Object.keys(supplement).forEach(s => ((ject[s] === undefined || ject[s] === null) && supplement[s] !== undefined) ? ject[s] = supplement[s] : 0);

    return ject;

};

/**
 * Функция дополнения объекта свойствами дополнителя.
 * Дополнение отличается от заполнения тем, что дополнитель не станет трогать уже существующие свойства объекта.
 * Вместо этого, он найдет те его свойства, которые неопределены или null и заполнит их значениями заполнителя, если такие
 * будут определены у самого заполнителя.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @arg {{}} ject Исходный объект.
 * @arg {{}} supplement Объект-дополнитель.
*/
export function jectSupplement(ject, supplement) {

    return supplementDeceit({ ject, supplement, });

};

//#endregion

// //#region getByPath 0.0.0

// /**
//  * @typedef TBgetByPath
//  * @prop {{}} ject
//  * @prop {string[]} properties
//  * @typedef {TBgetByPath} TgetByPath
// */

// /** @arg {TgetByPath} t */
// function getByPathDeceit(t) {

//     try {

//         return getByPathVerify(t);

//     } catch (e) {

//         if (config.strict) throw e;

//         return undefined;

//     };

// };
// /** @arg {TgetByPath} t */
// function getByPathVerify(t) {



//     return getByPathHandle(t);

// };
// /** @arg {TgetByPath} t */
// function getByPathHandle(t) {

//     t.properties = t.properties.reverse();

//     return getByPathComply(t);

// };
// /** @arg {TgetByPath} t */
// function getByPathComply(t) {

//     const {

//         ject,
//         properties,

//     } = t;

//     let r = ject;

//     while (r && properties.length) {

//         const p = properties.pop();

//         if (p.includes('.')) properties.push(...p.split('.').filter(p => p).reverse());
//         else r = p.includes('(') ? r[stringFind(p, /[^\(\)]+/)]() : r[p];

//     };

//     return r;

// };

// /**
//  * Функция для получения свйосвта по указанным свойствам.
//  * Будет переходить по таким свойствам до тех пор, пока это возможно.
//  * В качестве ответа вернет последнее указанное вложенное свойство.
//  * - Версия `0.0.0`
//  * - Цепочка `DVHCa`
//  * @arg {{}} ject Исходный объект.
//  * @arg {...string} properties Свойства.
//  * Допускается передача свойств строкой, где разделителем между словами выступает точка.
//  * Такие строки будет преобразованы в свойства и добавлены в последовательность.
// */
// export function jectGetByPath(ject, ...properties) {

//     return getByPathDeceit({ ject, properties, });

// };

// //#endregion

// //#region setDeep 0.0.1

// /**
//  * @typedef TBsetDeep
//  * @prop {any} value
//  * @prop {boolean} all
//  * @typedef {TBsetDeep&TgetDeep} TsetDeep
// */

// /** @arg {TsetDeep} t */
// function setDeepDeceit(t) {

//     try {

//         return setDeepVerify(t);

//     } catch (e) {

//         if (config.strict) throw e;

//         return undefined;

//     };

// };
// /** @arg {TsetDeep} t */
// function setDeepVerify(t) {

//     const {



//     } = t;

//     return setDeepHandle(t);

// };
// /** @arg {TsetDeep} t */
// function setDeepHandle(t) {

//     let {



//     } = t;

//     t = {

//         ...t,

//     };

//     return setDeepComply(t);

// };
// /** @arg {TsetDeep} t */
// function setDeepComply(t) {

//     const {

//         all,
//         ject,
//         value,
//         property,

//     } = t;

//     const structures = [ject];
//     const su = [...structures];

//     for (; structures.length;) {

//         const s = structures.pop();

//         if (s.hasOwnProperty(property)) {

//             s[property] = value;

//             if (!all) return ject;

//         };

//         for (const v of arrayRemoveByElement(Object.values(s), value)) if (typeof v === 'object' && v !== property && !su.includes(v)) {

//             su.push(v);
//             structures.push(v);

//         };

//     };

//     return ject;

// };

// /**
//  * Функция для глубокой установки вложенного свойства.
//  * - Версия `0.1.0`
//  * - Цепочка `DVHCa`
//  * @arg {{}} ject Объект глубокой установки.
//  * @arg {any} value Значение для свойства глубокой установки.
//  * @arg {string} property Свойство глубокой установки.
//  * @arg {boolean} all Логическое значение, определяющее полноту заполнения.
//  * Если `true`, то все вложенные совпадения будут изменены на данное.
//  * Если `false`, то заменено будет только первое совпадение.
//  * - По умолчанию `false`
//  * @return {void}
// */
// export function jectSetDeep(ject, property, value, all = false) {

//     return setDeepDeceit({ ject, property, value, all });

// };

// //#endregion

// //#region changeDeep 0.0.0

// /**
//  * @typedef TBchangeDeep
//  * @prop {{}} ject
//  * @prop {[{}]} changeDeeps
//  * @typedef {TBchangeDeep} TchangeDeep
// */

// /** @arg {TchangeDeep} t */
// function changeDeepDeceit(t) {

//     try {

//         return changeDeepVerify(t);

//     } catch (e) {

//         if (config.strict) throw e;

//         return undefined;

//     };

// };
// /** @arg {TchangeDeep} t */
// function changeDeepVerify(t) {

//     const {



//     } = t;

//     return changeDeepHandle(t);

// };
// /** @arg {TchangeDeep} t */
// function changeDeepHandle(t) {

//     let {



//     } = t;



//     t = {

//         ...t,

//     };

//     return changeDeepComply(t);

// };
// /** @arg {TchangeDeep} t */
// function changeDeepComply(t) {

//     const {

//         ject,
//         changeDeeps,

//     } = t;

//     changeDeeps.forEach(c => Object.entries(c).forEach(p => ject[p[0]] = p[1]));

// };

// /**
//  * Функция для изменения исходного объекта свойствами остаточных объектов.
//  *
//  * Изменение происходит за счет свойств остаточных объектов.
//  * Если свойство есть у остаточного объекта, то его значение будет перезаписано исходному.
//  * @arg {{}} ject Исходный объект.
//  * @arg {...{}} changeDeeps Остаточные объекты изменения.
//  * - Версия `0.0.0`
//  * - Цепочка `DVHCa`
// */
// export function jectChangeDeep(ject, ...changeDeeps) {

//     changeDeepDeceit({ ject, changeDeeps, });

// };

// //#endregion
// //#region replaceDeep 0.0.0

// /**
//  * @typedef TBreplaceDeep
//  * @prop {{}} ject
//  * @prop {any} value
//  * @prop {any} replace
//  * @prop {boolean} all
//  * @typedef {TBreplaceDeep} TreplaceDeep
// */

// /** @arg {TreplaceDeep} t */
// function replaceDeepDeceit(t) {

//     try {

//         return replaceDeepVerify(t);

//     } catch (e) {

//         if (config.strict) throw e;

//         return undefined;

//     };

// };
// /** @arg {TreplaceDeep} t */
// function replaceDeepVerify(t) {

//     const {



//     } = t;

//     return replaceDeepHandle(t);

// };
// /** @arg {TreplaceDeep} t */
// function replaceDeepHandle(t) {

//     let {



//     } = t;



//     t = {

//         ...t,

//     };

//     return replaceDeepComply(t);

// };
// /** @arg {TreplaceDeep} t */
// function replaceDeepComply(t) {

//     const {

//         all,
//         ject,
//         value,
//         replace,

//     } = t;

//     const structures = [ject];
//     const su = [...structures];

//     for (let c = 0; structures.length;) {

//         const s = structures.pop();

//         if (s) {

//             for (const p of Object.entries(s)) {

//                 if (p[1] !== value) continue;

//                 s[p[0]] = replace;

//                 if (!all) return;

//             };

//             for (const v of Object.values(s)) if (v && typeof v === 'object' && v !== replace && !su.includes(v)) {

//                 su.push(v);
//                 structures.push(v);

//             };

//         };

//     };

//     return ject;

// };

// /**
//  * Функция для замены исходного значения указанного объекта на приведенное.
//  * - Версия `0.0.0`
//  * - Цепочка `DVHCa`
//  * @arg {{}} ject Исходный объект.
//  * @arg {any} value Исходное значение.
//  * @arg {any} replace Заменяющее значение.
//  * @arg {boolean} all Логическое значение определяющее полноту замены.
//  * Если `true`, то все вложенные совпадения будут изменены на данное.
//  * Если `false`, то заменено будет только первое совпадение.
//  * - По умолчанию `false`
// */
// export function jectReplaceDeep(ject, value, replace, all = false) {

//     return replaceDeepDeceit({ ject, value, replace, all, });

// };

// //#endregion
// //#region getPathDeep 0.0.0

// /**
//  * @typedef TBgetPathDeep
//  * @prop {{}} ject
//  * @prop {any} value
//  * @prop {string} property
//  * @prop {string} target
//  * @typedef {TBgetPathDeep} TgetPathDeep
// */

// /** @arg {TgetPathDeep} t */
// function getPathDeepDeceit(t) {

//     try {

//         return getPathDeepVerify(t);

//     } catch (e) {

//         if (config.strict) throw e;

//         return undefined;

//     };

// };
// /** @arg {TgetPathDeep} t */
// function getPathDeepVerify(t) {

//     const {



//     } = t;

//     return getPathDeepHandle(t);

// };
// /** @arg {TgetPathDeep} t */
// function getPathDeepHandle(t) {

//     let {



//     } = t;



//     t = {

//         ...t,

//     };

//     return getPathDeepComply(t);

// };
// /** @arg {TgetPathDeep} t */
// function getPathDeepComply(t) {

//     const {

//         ject,
//         value,
//         target,
//         property,

//     } = t;

//     const f = (s, e = []) => Object.entries(s).map(p => [[...e, p[0]], p[1]]);
//     /** @type {Array<[Array<string>,any]>} */
//     const sn = f(ject);
//     const su = [ject];
//     const r = [];

//     while (sn.length) {

//         const s = sn.pop();

//         switch (target) {

//             case 'value': {

//                 if (s[1] === value || !value) r.push(s[0]);

//             }; break;
//             case 'property': {

//                 if (s[0].at(-1) === property || !property) r.push(s[0]);

//             }; break;

//         };

//         if (s[1] && s[1] instanceof Object && !su.includes(s[1])) {

//             sn.push(...f(s[1], [s[0][0]]))
//             su.push(s[1]);

//         };

//     };

//     return r;

// };

// /**
//  * Функция для получения путей до указанных значений объекта.
//  * - Версия `0.0.0`
//  * - Цепочка `DVHCa`
//  * @arg {{}} ject Исходный объект.
//  * @arg {any} value Искомое значение.
//  * Если указана строка свойства, то функция будет искать пути до указанных свойств.
//  * В противном случае функция вернет все возможные пути.
// */
// export function jectGetPathDeepByValue(ject, value) {

//     return getPathDeepDeceit({ ject, value, target: 'value' })

// };
// /**
//  * Функция для получения путей до указанных свойств объекта.
//  * - Версия `0.0.0`
//  * - Цепочка `DVHCa`
//  * @arg {{}} ject Исходный объект.
//  * @arg {string} property Искомое свойство.
//  * Если указано значение, то функция будет искать пути до совпадений.
//  * В противном случае функция вернет все возможные пути.
// */
// export function jectGetPathDeepByProperty(ject, property) {

//     return getPathDeepDeceit({ ject, property, target: 'property' });

// };

// //#endregion
// //#region supplementDeep 0.0.0

// /**
//  * @typedef TBsupplementDeep
//  * @prop {{}} ject
//  * @prop {[{}]} supplementDeeps
//  * @typedef {TBsupplementDeep} TsupplementDeep
// */

// /** @arg {TsupplementDeep} t */
// function supplementDeepDeceit(t) {

//     try {

//         return supplementDeepVerify(t);

//     } catch (e) {

//         if (config.strict) throw e;

//         return undefined;

//     };

// };
// /** @arg {TsupplementDeep} t */
// function supplementDeepVerify(t) {

//     const {



//     } = t;

//     return supplementDeepHandle(t);

// };
// /** @arg {TsupplementDeep} t */
// function supplementDeepHandle(t) {

//     let {



//     } = t;



//     t = {

//         ...t,

//     };

//     return supplementDeepComply(t);

// };
// /** @arg {TsupplementDeep} t */
// function supplementDeepComply(t) {

//     const {

//         ject,
//         supplementDeeps,

//     } = t;

//     supplementDeeps.forEach(s => {

//         Object.entries(s).forEach(p => {

//             if (!ject.hasOwnProperty(p[0])) ject[p[0]] = p[1];

//         });

//     });

// };

// /**
//  * Функция дополнения объекта недостоющими свойствами указанных объектов.
//  * - Версия `0.0.0`
//  * - Цепочка `DVHCa`
//  * @arg {{}} ject Исходный объект.
//  * @arg {...{}} supplementDeeps Объекты дополнения.
// */
// export function jectSupplementDeep(ject, ...supplementDeeps) {

//     supplementDeepDeceit({ ject, supplementDeeps });

// };

// //#endregion

// //#region getInheritance 0.0.0

// /**
//  * @typedef TBgetInheritance
//  * @prop {any} ject
//  * @typedef {TBgetInheritance} TgetInheritance
// */

// /** @arg {TgetInheritance} t */
// function getInheritanceDeceit(t) {

//     try {

//         return getInheritanceVerify(t);

//     } catch (e) {

//         if (config.strict) throw e;

//         return undefined;

//     };

// };
// /** @arg {TgetInheritance} t */
// function getInheritanceVerify(t) {



//     return getInheritanceHandle(t);

// };
// /** @arg {TgetInheritance} t */
// function getInheritanceHandle(t) {



//     return getInheritanceComply(t);

// };
// /** @arg {TgetInheritance} t */
// function getInheritanceComply(t) {

//     let ject = t.ject.constructor;

//     const results = [];
//     const limit = Object.getPrototypeOf(Object);

//     while (ject !== limit) {

//         results.push(ject);

//         ject = Object.getPrototypeOf(ject);

//     };

//     return results;

// };

// /**
//  * Метод получения линии наследования для указанного объекта.
//  * - Версия `0.0.0`
//  * - Цепочка `DVHCa`
//  * @arg {any} ject Исходный объект.
// */
// export function jectGetInheritance(ject) {

//     return getInheritanceDeceit({ ject, });

// };
// /**
//  * Метод получения линии наследования для указанного объекта со всеми `S` звеньями.
//  * - Версия `0.0.0`
//  * - Цепочка `DVHCa`
//  * @arg {any} ject Исходный объект.
// */
// export function jectGetInheritanceYS(ject) {

//     return getInheritanceDeceit({ ject, }).filter(c => c.prototype instanceof YBasic && c.name[0] === 'S');

// };

// //#endregion

/**
 * @file ject.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @copyright Yakhin Nikita Artemovich 2023
*/