//#region YI

/** @type {import('./config.mjs')['default']?} */
let config = null;

await import('./config.mjs')

    .then(c => config = c.default)
    .catch(e => e);

/** @type {import('./error.mjs')['default']?} */
let error = null;

await import('./error.mjs')

    .then(i => error = i.default)
    .catch(e => e);

//#endregion
//#region YT

/** ### jectT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `ject`
 *
 * Основной параметр модуля `ject`.
 *
 * @typedef jectT
 * @prop {{}} ject
 *
*/



//#endregion
//#region YV



//#endregion

//#region equal 0.1.0

/** ### jectTFEqual
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `ject`
 * ***
 *
 * Результирующие параметры функции `equal`.
 *
 * @typedef {jectTFUEqual&jectT} jectTFEqual
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
 * @prop {{}} equal
*/

/** @arg {jectTFEqual} t */
function equalDeceit(t) {

    try {

        return equalVerify(t);

    } catch (e) {

        if (e instanceof YError) {



        };

        return undefined;

    } finally {



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
 * - Версия `0.1.0`
 * - Цепочка `DVHCa`
 * - Модуль `ject`
 * ***
 *
 * Функция сравнения указанных объектов.
 *
 * ***
 * @arg {{}} ject `Объект`
 * @arg {{}} equal `Эквивалент`
*/
export function jectEqual(ject, equal) {

    return equalDeceit({ ject, equal, });

};

//#endregion
//#region clone 0.3.0

/** ### jectTFClone
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `ject`
 * ***
 *
 * Результирующие параметры функции `clone`.
 *
 * @typedef {jectTFUClone&jectT} jectTFClone
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

        return undefined;

    } finally {



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

    if (ject instanceof Object) {

        const result = new ject.constructor();
        const mirror = [[result, ject]];
        const subjects = [];

        const clone = (n, p, v) => {

            const subject = subjects.find(s => s[0] === v);

            if (link && subject) {

                n[p] = subject[1];

            } else if (v instanceof Object) {

                switch (v.constructor) {

                    case Function: n[p] = v; break;
                    default: n[p] = new v.constructor();

                };

                mirror.push([n[p], v]);
                subjects.push([v, n[p]]);

            } else {

                n[p] = v;

            };

        };

        while (mirror.length) {

            const [n, o] = mirror.pop();

            if (o instanceof Array) {

                o.forEach((e, ei) => clone(n, ei, e));

            } else {

                Object.entries(o).forEach(e => clone(n, e[0], e[1]));

            };

        };

        return result;

    } else return ject;

};

/**
 * ### jectClone
 * - Версия `0.3.0`
 * - Цепочка `DVHCa`
 * - Модуль `ject`
 * ***
 *
 * Функция клонирования указанного объекта.
 *
 * ***
 * @arg {T} ject `Объект`
 * @arg {boolean?} link `Режим сохранения ссылочной структуры`
 * - Дефолт `true`
 * @return {T}
 * @template T
*/
export function jectClone(ject, link = true) {

    return cloneDeceit({ ject, link, });

};

//#endregion

//#region adopt 0.1.0

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
 * @prop {{}} owner
*/

/** @arg {jectTFAdopt} t */
function adoptDeceit(t) {

    try {

        return adoptVerify(t);

    } catch (e) {

        if (config?.strict) {

            throw e;

        };

        return undefined;

    } finally {



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
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `ject`
 * ***
 *
 * Функция перенятия общих свойств от обладателя к получателю.
 *
 * Заменяет свойства получателя на свойства обладателя, если они совподают по ключу.
 *
 * ***
 * @arg {{}} ject `Объект`
 * @arg {{}} owner `Обладатель`
*/
export function jectAdopt(ject, owner) {

    return adoptDeceit({ ject, owner, });

};

//#endregion
//#region adoptDefault 0.0.1

/** ### jectTFAdoptDefault
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `ject`
 * ***
 *
 * Результирующие параметры функции `adoptDefault`.
 *
 * @typedef {jectTFUAdoptDefault&jectT} jectTFAdoptDefault
 *
*/
/** ### jectTFUAdoptDefault
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `ject`
 *
 * Уникальные параметры функции `adoptDefault`.
 *
 * @typedef jectTFUAdoptDefault
 * @prop {{}} owner
*/

/** @arg {jectTFAdoptDefault} t */
function adoptDefaultDeceit(t) {

    try {

        return adoptDefaultVerify(t);

    } catch (e) {

        if (config?.strict) {

            throw e;

        };

        return undefined;

    } finally {



    };

};
/** @arg {jectTFAdoptDefault} t */
function adoptDefaultVerify(t) {

    const {



    } = t;

    return adoptDefaultHandle(t);

};
/** @arg {jectTFAdoptDefault} t */
function adoptDefaultHandle(t) {

    const {



    } = t;

    return adoptDefaultComply(t);

};
/** @arg {jectTFAdoptDefault} t */
function adoptDefaultComply(t) {

    const {

        ject,
        owner,

    } = t;

    Object.keys(ject).forEach(p => {

        const pd = 'default' + p[0].toUpperCase() + p.slice(1);

        if (!ject[p] && owner[pd] !== undefined) {

            ject[p] = owner[pd];

        };

    });

    return ject;

};

/**
 * ### jectAdoptDefault
 * - Версия `0.0.1`
 * - Цепочка `DVHCa`
 * - Модуль `ject`
 * ***
 *
 * Функция перенятия дефолт (с префиксом `default`) свойств обладателя.
 *
 * ***
 * @arg {T} ject `Объект`
 * @arg {{}} owner `Обладатель`
 * @returns {T}
 * @template T
*/
export function jectAdoptDefault(ject, owner) {

    return adoptDefaultDeceit({ ject, owner, });

};

//#endregion

//#region supplement 0.0.0

/** ### jectTFSupplement
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `ject`
 * ***
 *
 * Результирующие параметры функции `supplement`.
 *
 * @typedef {jectTFUSupplement&jectT} jectTFSupplement
 *
*/
/** ### jectTFUSupplement
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `ject`
 *
 * Уникальные параметры функции `supplement`.
 *
 * @typedef jectTFUSupplement
 * @prop {{}} supplementer
*/

/** @arg {jectTFSupplement} t */
function supplementDeceit(t) {

    try {

        return supplementVerify(t);

    } catch (e) {

        if (config?.strict) {

            throw e;

        };

        return undefined;

    } finally {



    };

};
/** @arg {jectTFSupplement} t */
function supplementVerify(t) {

    const {



    } = t;

    return supplementHandle(t);

};
/** @arg {jectTFSupplement} t */
function supplementHandle(t) {

    const {



    } = t;

    return supplementComply(t);

};
/** @arg {jectTFSupplement} t */
function supplementComply(t) {

    const {

        ject,
        supplementer,

    } = t;

    Object.keys(supplementer).forEach(k => [undefined, null, NaN].includes(ject[k]) && (ject[k] = supplementer[k]));

    return ject;

};

/**
 * ### jectSupplement
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `ject`
 * ***
 *
 * Функция дополнения объекта свойствами указанного дополнителя.
 *
 * ***
 * @arg {T} ject `Объект`
 * @arg {T} supplementer `Дополнитель`
 * @template T
*/
export function jectSupplement(ject, supplementer) {

    return supplementDeceit({ ject, supplementer, });

};

//#endregion

//#region getProperty 0.0.1

/** ### jectTFGetProperty
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `ject`
 * ***
 *
 * Результирующие параметры функции `getProperty`.
 *
 * @typedef {jectTFUGetProperty&jectT} jectTFGetProperty
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

        if (config?.strict) {

            throw e;

        };

        return undefined;

    } finally {



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
 * - Версия `0.0.1`
 * - Цепочка `DVHCa`
 * - Модуль `ject`
 * ***
 *
 * Функция извлечения указанного свойства из указанного объекта с применением глубокого поиска.
 *
 * ***
 * @arg {{}} ject `Объект`
 * @arg {T?} typer `Типизатор`
 * Необязательный параметр, типизирующий результат.
 * @arg {string} property `Свойство`
 * @returns {T|undefined}
 * @template T
*/
export function jectGetProperty(ject, property, typer) {

    return getPropertyDeceit({ ject, property, });

};

//#endregion
//#region getPropertyByPath 0.0.0

/** ### jectTFGetPropertyByPath
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `ject`
 * ***
 *
 * Результирующие параметры функции `getPropertyByPath`.
 *
 * @typedef {jectTFUGetPropertyByPath&jectT} jectTFGetPropertyByPath
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
 * @prop {string} path
*/

/** @arg {jectTFGetPropertyByPath} t */
function getPropertyByPathDeceit(t) {

    try {

        return getPropertyByPathVerify(t);

    } catch (e) {

        if (config?.strict) {

            throw e;

        };

        return undefined;

    } finally {



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

    return getPropertyByPathComply(t);

};
/** @arg {jectTFGetPropertyByPath} t */
function getPropertyByPathComply(t) {

    const {

        ject,
        path,

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
 * Функция получения значения свойства полученного из указанного объекта по указанному пути.
 *
 * ***
 * @arg {any} ject `Объект`
 * @arg {string} path `Путь`
*/
export function jectGetPropertyByPath(ject, path) {

    return getPropertyByPathDeceit({ ject, path, });

};

//#endregion

/**
 * @file module.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @copyright Yakhin Nikita Artemovich 2023
*/