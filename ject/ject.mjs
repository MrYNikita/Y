import { config } from "../config.mjs";
import { YBasic } from "./YBasic/YBasic.mjs";
import { stringFind } from "../string/string.mjs";
import { arrayRemoveByElement } from "../array/array.mjs";

//#region fill 0.1.0

/**
 * @typedef Tfill
 * @prop {{}} ject
 * @prop {{}} filler
*/

/** @arg {Tfill} t */
function fillDeceit(t) {

    try {

        fillVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {Tfill} t */
function fillVerify(t) {

    const {



    } = t;

    fillHandle(t);

};
/** @arg {Tfill} t */
function fillHandle(t) {

    let {



    } = t;

    t = {

        ...t,

    };

    return fillComply(t);

};
/** @arg {Tfill} t */
function fillComply(t) {

    const {

        ject,
        filler,

    } = t;

    Object.keys(ject).forEach(s => (filler[s] !== undefined) ? ject[s] = filler[s] : 0);

};

/**
 * Функция для заполнения `полей`, заданных в `конструкторе`, данными из `объекта передачи аргументов` с помощью приёма `универсального заполнения`.
 * - Версия: `1.0.0`
 * @arg {object} j Объект заполнения.
 * @arg {object} t Объект передачи аргументов.
*/
export function jectFill(ject, filler) {

    fillDeceit({ ject, filler });

};

//#endregion
//#region equal 0.0.0

/**
 * @typedef TBequal
 * @prop {[Object]} jects
 * @typedef {TBequal} Tequal
*/

/** @arg {Tequal} t */
function equalDeceit(t) {

    try {

        return equalVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {Tequal} t */
function equalVerify(t) {

    const {



    } = t;

    return equalHandle(t);

};
/** @arg {Tequal} t */
function equalHandle(t) {

    let {



    } = t;



    t = {

        ...t,

    };

    return equalComply(t);

};
/** @arg {Tequal} t */
function equalComply(t) {

    const {

        jects,

    } = t;

    while (jects.length) {

        const j = jects.pop();



    };

};

/**
 * Функция для проверки объектов на идентичность.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @arg {...Object} jects
*/
export function jectEqual(...jects) {

    return equalDeceit({ jects });

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

//#region getDeep 0.0.0

/**
 * @typedef TBgetDeep
 * @prop {{}} ject
 * @prop {string} property
 * @typedef {TBgetDeep} TgetDeep
*/

/** @arg {TgetDeep} t */
function getDeepDeceit(t) {

    try {

        return getDeepVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {TgetDeep} t */
function getDeepVerify(t) {

    const {



    } = t;

    return getDeepHandle(t);

};
/** @arg {TgetDeep} t */
function getDeepHandle(t) {

    let {



    } = t;

    t = {

        ...t,

    };

    return getDeepComply(t);

};
/** @arg {TgetDeep} t */
function getDeepComply(t) {

    const {

        ject,
        property,

    } = t;

    const structures = [ject];

    for (; structures.length;) {

        const s = structures.pop();

        if (s.hasOwnProperty(property)) return s[property];
        else for (const v of Object.values(s)) if (typeof v === 'object') structures.push(v);

    };

};

/**
 * Функция для извлечения вложенного свойства из объекта.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
*/
export function jectGetDeep(ject, property) {

    return getDeepDeceit({ ject, property });

};

//#endregion
//#region getByPath 0.0.0

/**
 * @typedef TBgetByPath
 * @prop {{}} ject
 * @prop {string[]} properties
 * @typedef {TBgetByPath} TgetByPath
*/

/** @arg {TgetByPath} t */
function getByPathDeceit(t) {

    try {

        return getByPathVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {TgetByPath} t */
function getByPathVerify(t) {



    return getByPathHandle(t);

};
/** @arg {TgetByPath} t */
function getByPathHandle(t) {

    t.properties = t.properties.reverse();

    return getByPathComply(t);

};
/** @arg {TgetByPath} t */
function getByPathComply(t) {

    const {

        ject,
        properties,

    } = t;

    let r = ject;

    while (r && properties.length) {

        const p = properties.pop();

        if (p.includes('.')) properties.push(...p.split('.').filter(p => p).reverse());
        else r = p.includes('(') ? r[stringFind(p, /[^\(\)]+/)]() : r[p];

    };

    return r;

};

/**
 * Функция для получения свйосвта по указанным свойствам.
 * Будет переходить по таким свойствам до тех пор, пока это возможно.
 * В качестве ответа вернет последнее указанное вложенное свойство.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @arg {{}} ject Исходный объект.
 * @arg {...string} properties Свойства.
 * Допускается передача свойств строкой, где разделителем между словами выступает точка.
 * Такие строки будет преобразованы в свойства и добавлены в последовательность.
*/
export function jectGetByPath(ject, ...properties) {

    return getByPathDeceit({ ject, properties, });

};

//#endregion

//#region setDeep 0.0.1

/**
 * @typedef TBsetDeep
 * @prop {any} value
 * @prop {boolean} all
 * @typedef {TBsetDeep&TgetDeep} TsetDeep
*/

/** @arg {TsetDeep} t */
function setDeepDeceit(t) {

    try {

        return setDeepVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {TsetDeep} t */
function setDeepVerify(t) {

    const {



    } = t;

    return setDeepHandle(t);

};
/** @arg {TsetDeep} t */
function setDeepHandle(t) {

    let {



    } = t;

    t = {

        ...t,

    };

    return setDeepComply(t);

};
/** @arg {TsetDeep} t */
function setDeepComply(t) {

    const {

        all,
        ject,
        value,
        property,

    } = t;

    const structures = [ject];
    const su = [...structures];

    for (; structures.length;) {

        const s = structures.pop();

        if (s.hasOwnProperty(property)) {

            s[property] = value;

            if (!all) return ject;

        };

        for (const v of arrayRemoveByElement(Object.values(s), value)) if (typeof v === 'object' && v !== property && !su.includes(v)) {

            su.push(v);
            structures.push(v);

        };

    };

    return ject;

};

/**
 * Функция для глубокой установки вложенного свойства.
 * - Версия `0.1.0`
 * - Цепочка `DVHCa`
 * @arg {{}} ject Объект глубокой установки.
 * @arg {any} value Значение для свойства глубокой установки.
 * @arg {string} property Свойство глубокой установки.
 * @arg {boolean} all Логическое значение, определяющее полноту заполнения.
 * Если `true`, то все вложенные совпадения будут изменены на данное.
 * Если `false`, то заменено будет только первое совпадение.
 * - По умолчанию `false`
 * @return {void}
*/
export function jectSetDeep(ject, property, value, all = false) {

    return setDeepDeceit({ ject, property, value, all });

};

//#endregion
//#region copyDeep 0.0.0

/**
 * @typedef TBcopyDeep
 * @arg {{}} ject
 * @typedef {TBcopyDeep} TcopyDeep
*/

/** @arg {TcopyDeep} t */
function copyDeepDeceit(t) {

    try {

        return copyDeepVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {TcopyDeep} t */
function copyDeepVerify(t) {

    const {



    } = t;

    return copyDeepHandle(t);

};
/** @arg {TcopyDeep} t */
function copyDeepHandle(t) {

    let {



    } = t;



    t = {

        ...t,

    };

    return copyDeepComply(t);

};
/** @arg {TcopyDeep} t */
function copyDeepComply(t) {

    const {

        ject,

    } = t;

    const r = { ...ject };
    const s = [r];

    for (const j of s) {

        Object.entries(j).forEach(p => {

            if (p[1] instanceof Object) {

                switch (p[1].constructor) {

                    case Array: j[p[0]] = p[1].slice(); break;
                    case Object: j[p[0]] = Object.assign({}, p[1]); break;
                    default: j[p[0]] = new p[1].constructor(p[1]); break;

                };

                s.push(j[p[0]]);

            };

        });

    };

    return r;

};

/**
 * Функция для глубокого копирования объектов.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @arg {{}} ject Исходный объект.
*/
export function jectCopyDeep(ject) {

    return copyDeepDeceit({ ject });

};

//#endregion
//#region changeDeep 0.0.0

/**
 * @typedef TBchangeDeep
 * @prop {{}} ject
 * @prop {[{}]} changeDeeps
 * @typedef {TBchangeDeep} TchangeDeep
*/

/** @arg {TchangeDeep} t */
function changeDeepDeceit(t) {

    try {

        return changeDeepVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {TchangeDeep} t */
function changeDeepVerify(t) {

    const {



    } = t;

    return changeDeepHandle(t);

};
/** @arg {TchangeDeep} t */
function changeDeepHandle(t) {

    let {



    } = t;



    t = {

        ...t,

    };

    return changeDeepComply(t);

};
/** @arg {TchangeDeep} t */
function changeDeepComply(t) {

    const {

        ject,
        changeDeeps,

    } = t;

    changeDeeps.forEach(c => Object.entries(c).forEach(p => ject[p[0]] = p[1]));

};

/**
 * Функция для изменения исходного объекта свойствами остаточных объектов.
 *
 * Изменение происходит за счет свойств остаточных объектов.
 * Если свойство есть у остаточного объекта, то его значение будет перезаписано исходному.
 * @arg {{}} ject Исходный объект.
 * @arg {...{}} changeDeeps Остаточные объекты изменения.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
*/
export function jectChangeDeep(ject, ...changeDeeps) {

    changeDeepDeceit({ ject, changeDeeps, });

};

//#endregion
//#region replaceDeep 0.0.0

/**
 * @typedef TBreplaceDeep
 * @prop {{}} ject
 * @prop {any} value
 * @prop {any} replace
 * @prop {boolean} all
 * @typedef {TBreplaceDeep} TreplaceDeep
*/

/** @arg {TreplaceDeep} t */
function replaceDeepDeceit(t) {

    try {

        return replaceDeepVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {TreplaceDeep} t */
function replaceDeepVerify(t) {

    const {



    } = t;

    return replaceDeepHandle(t);

};
/** @arg {TreplaceDeep} t */
function replaceDeepHandle(t) {

    let {



    } = t;



    t = {

        ...t,

    };

    return replaceDeepComply(t);

};
/** @arg {TreplaceDeep} t */
function replaceDeepComply(t) {

    const {

        all,
        ject,
        value,
        replace,

    } = t;

    const structures = [ject];
    const su = [...structures];

    for (let c = 0; structures.length;) {

        const s = structures.pop();

        if (s) {

            for (const p of Object.entries(s)) {

                if (p[1] !== value) continue;

                s[p[0]] = replace;

                if (!all) return;

            };

            for (const v of Object.values(s)) if (v && typeof v === 'object' && v !== replace && !su.includes(v)) {

                su.push(v);
                structures.push(v);

            };

        };

    };

    return ject;

};

/**
 * Функция для замены исходного значения указанного объекта на приведенное.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @arg {{}} ject Исходный объект.
 * @arg {any} value Исходное значение.
 * @arg {any} replace Заменяющее значение.
 * @arg {boolean} all Логическое значение определяющее полноту замены.
 * Если `true`, то все вложенные совпадения будут изменены на данное.
 * Если `false`, то заменено будет только первое совпадение.
 * - По умолчанию `false`
*/
export function jectReplaceDeep(ject, value, replace, all = false) {

    return replaceDeepDeceit({ ject, value, replace, all, });

};

//#endregion
//#region getPathDeep 0.0.0

/**
 * @typedef TBgetPathDeep
 * @prop {{}} ject
 * @prop {any} value
 * @prop {string} property
 * @prop {string} target
 * @typedef {TBgetPathDeep} TgetPathDeep
*/

/** @arg {TgetPathDeep} t */
function getPathDeepDeceit(t) {

    try {

        return getPathDeepVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {TgetPathDeep} t */
function getPathDeepVerify(t) {

    const {



    } = t;

    return getPathDeepHandle(t);

};
/** @arg {TgetPathDeep} t */
function getPathDeepHandle(t) {

    let {



    } = t;



    t = {

        ...t,

    };

    return getPathDeepComply(t);

};
/** @arg {TgetPathDeep} t */
function getPathDeepComply(t) {

    const {

        ject,
        value,
        target,
        property,

    } = t;

    const f = (s, e = []) => Object.entries(s).map(p => [[...e, p[0]], p[1]]);
    /** @type {Array<[Array<string>,any]>} */
    const sn = f(ject);
    const su = [ject];
    const r = [];

    while (sn.length) {

        const s = sn.pop();

        switch (target) {

            case 'value': {

                if (s[1] === value || !value) r.push(s[0]);

            }; break;
            case 'property': {

                if (s[0].at(-1) === property || !property) r.push(s[0]);

            }; break;

        };

        if (s[1] && s[1] instanceof Object && !su.includes(s[1])) {

            sn.push(...f(s[1], [s[0][0]]))
            su.push(s[1]);

        };

    };

    return r;

};

/**
 * Функция для получения путей до указанных значений объекта.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @arg {{}} ject Исходный объект.
 * @arg {any} value Искомое значение.
 * Если указана строка свойства, то функция будет искать пути до указанных свойств.
 * В противном случае функция вернет все возможные пути.
*/
export function jectGetPathDeepByValue(ject, value) {

    return getPathDeepDeceit({ ject, value, target: 'value' })

};
/**
 * Функция для получения путей до указанных свойств объекта.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @arg {{}} ject Исходный объект.
 * @arg {string} property Искомое свойство.
 * Если указано значение, то функция будет искать пути до совпадений.
 * В противном случае функция вернет все возможные пути.
*/
export function jectGetPathDeepByProperty(ject, property) {

    return getPathDeepDeceit({ ject, property, target: 'property' });

};

//#endregion
//#region supplementDeep 0.0.0

/**
 * @typedef TBsupplementDeep
 * @prop {{}} ject
 * @prop {[{}]} supplementDeeps
 * @typedef {TBsupplementDeep} TsupplementDeep
*/

/** @arg {TsupplementDeep} t */
function supplementDeepDeceit(t) {

    try {

        return supplementDeepVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {TsupplementDeep} t */
function supplementDeepVerify(t) {

    const {



    } = t;

    return supplementDeepHandle(t);

};
/** @arg {TsupplementDeep} t */
function supplementDeepHandle(t) {

    let {



    } = t;



    t = {

        ...t,

    };

    return supplementDeepComply(t);

};
/** @arg {TsupplementDeep} t */
function supplementDeepComply(t) {

    const {

        ject,
        supplementDeeps,

    } = t;

    supplementDeeps.forEach(s => {

        Object.entries(s).forEach(p => {

            if (!ject.hasOwnProperty(p[0])) ject[p[0]] = p[1];

        });

    });

};

/**
 * Функция дополнения объекта недостоющими свойствами указанных объектов.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @arg {{}} ject Исходный объект.
 * @arg {...{}} supplementDeeps Объекты дополнения.
*/
export function jectSupplementDeep(ject, ...supplementDeeps) {

    supplementDeepDeceit({ ject, supplementDeeps });

};

//#endregion

//#region getInheritance 0.0.0

/**
 * @typedef TBgetInheritance
 * @prop {any} ject
 * @typedef {TBgetInheritance} TgetInheritance
*/

/** @arg {TgetInheritance} t */
function getInheritanceDeceit(t) {

    try {

        return getInheritanceVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {TgetInheritance} t */
function getInheritanceVerify(t) {



    return getInheritanceHandle(t);

};
/** @arg {TgetInheritance} t */
function getInheritanceHandle(t) {



    return getInheritanceComply(t);

};
/** @arg {TgetInheritance} t */
function getInheritanceComply(t) {

    let ject = t.ject.constructor;

    const results = [];
    const limit = Object.getPrototypeOf(Object);

    while (ject !== limit) {

        results.push(ject);

        ject = Object.getPrototypeOf(ject);

    };

    return results;

};

/**
 * Метод получения линии наследования для указанного объекта.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @arg {any} ject Исходный объект.
*/
export function jectGetInheritance(ject) {

    return getInheritanceDeceit({ ject, });

};
/**
 * Метод получения линии наследования для указанного объекта со всеми `S` звеньями.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @arg {any} ject Исходный объект.
*/
export function jectGetInheritanceYS(ject) {

    return getInheritanceDeceit({ ject, }).filter(c => c.prototype instanceof YBasic && c.name[0] === 'S');

};

//#endregion

/**
 * @file ject.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @copyright Yakhin Nikita Artemovich 2022
*/