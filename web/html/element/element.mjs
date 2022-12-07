import { arrayReplace } from "../../../array/array.mjs";
import { config, configHtml, configHtmlElement } from "../../../config.mjs";
import { jectChangeDeep, jectReplaceDeep, jectSupplement } from "../../../ject/ject.mjs";
import { stringCastToJect, stringFind, stringFindAll, stringFindToJect, stringReplace, stringReplaceAll } from "../../../string/string.mjs";
import { YString } from "../../../string/YString/YString.mjs";

/**
 * Регулярное выражение для поиска строк создания элементов.
 * - Версия `0.0.4`
 * @type {RegExp}
*/
export const elementREString = /(((^| )(([!#]\w+)|(.|\^[.!#])(\w+ ?)+\]|:.*?:|\w+=?([^ ]*)?|<.*>)( |\n\r?)*)+\/)/ms;
/**
 * Регулярное выражение для поиска и проверки классов в строке создания элементов.
 * - Версия `0.0.1`
 * @type {RegExp}
*/
export const elementREId = /(?:^| )#(?<f>\w+)/ms;
/**
 * Регулярное выражение для поиска и проверки классов в строке создания элементов.
 * - Версия `0.0.1`
 * @type {RegExp}
*/
export const elementREType = /(?:^| )!(?<f>\w+)/ms;
/**
 * Регулярное выражение для поиска и проверки классов в строке создания элементов.
 * - Версия `0.0.1`
 * @type {RegExp}
*/
export const elementREText = /(?:^| ):(?<f>.+?):/ms;
/**
 * Регулярное выражение для поиска и проверки классов в строке создания элементов.
 * - Версия `0.0.1`
 * @type {RegExp}
*/
export const elementREClasses = /(?:^| )\.((\w+) ?)+\]/ms;
/**
 * Регулярное выражение для поиска и проверки над ID в строке создания элементов.
 * - Версия `0.0.1`
 * @type {RegExp}
*/
export const elementREOverId = /(?:^| )\^\#(?<f>(\w+ ?)+)+\]/ms;
/**
 * Регулярное выражение для поиска и проверки над типов в строке создания элементов.
 * - Версия `0.0.1`
 * @type {RegExp}
*/
export const elementREOverTypes = /(?:^| )\^\!(?<f>(\w+ ?)+)+\]/ms;
/**
 * Регулярное выражение для поиска и проверки над классов в строке создания элементов.
 * - Версия `0.0.1`
 * @type {RegExp}
*/
export const elementREOverClasses = /(?:^| )\^\.(?<f>(\w+ ?)+)+\]/ms;
/**
 * Регулярное выражение для поиска и проверки над классов в строке создания элементов.
 * - Версия `0.0.2`
 * @type {RegExp}
*/
export const elementREProperty = /(?:^| )\w+(=(\d|\w)+)?/ms;

/**
 * @typedef TElements
 * @prop {[HTMLElement]} elements
*/

//#region move 0.0.0

/**
 * @typedef TBmove
 * @prop {HTMLElement} over
 * @typedef {TBmove&TElements} Tmove
*/

/** @param {Tmove} t */
function moveDeceit(t) {

    try {

        return moveVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @param {Tmove} t */
function moveVerify(t) {

    const {



    } = t;

    return moveHandle(t);

};
/** @param {Tmove} t */
function moveHandle(t) {

    let {



    } = t;



    t = {

        ...t,

    };

    return moveComply(t);

};
/** @param {Tmove} t */
function moveComply(t) {

    const {

        over,
        elements,

    } = t;

    elements.filter(e => e.constructor === String).forEach(e => arrayReplace(elements, e, ...document.querySelectorAll(e)));

    over.append(...elements.filter(e => e));

};

/**
 * Функция для перемещения элементов.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @param {HTMLElement} over
 * @param {...HTMLElement|string} elements
*/
export function elementMove(over, ...elements) {

    moveDeceit({ over, elements });

};
//#endregion
//#region create 0.0.0

/**
 * @typedef TBcreate
 * @prop {{}} property
 * @prop {string} id
 * @prop {string} type
 * @prop {string} string
 * @prop {Array<string>} attachments
 * @prop {Array<string>} overId
 * @prop {Array<string>} classes
 * @prop {Array<string>} overTypes
 * @prop {Array<string>} overClasses
 * @typedef {TBcreate} Tcreate
*/

/** @param {Tcreate} t */
function createDeceit(t) {

    try {

        return createVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @param {Tcreate} t */
function createVerify(t) {

    const {



    } = t;

    return createHandle(t);

};
/** @param {Tcreate} t */
function createHandle(t) {

    let {

        string,

    } = t;

    if (t.string) t = { ...elementDecomposeString(t.string)[0], ...t, };
    if (!t.overId) t.overId = [];
    if (!t.overClasses) t.overClasses = [];

    t = {

        ...t,

    };

    return createComply(t);

};
/** @param {Tcreate} t @return {HTMLElement|Array<HTMLElement>} */
function createComply(t) {

    const {

        id,
        type,
        text,
        attachments,
        overId,
        classes,
        property,
        overTypes,
        overClasses,

    } = t;

    const e = document.createElement(type);

    if (id?.[0]) e.id = id;
    if (text?.[0]) e.textContent = text;
    if (attachments) e.append(...attachments.map(e => elementCreateByString(e)));
    if (classes) classes.forEach(s => e.classList.add(s));
    if (property) jectChangeDeep(e, property);

    if (overId?.length || overTypes?.length || overClasses?.length) {

        const ss = [

            ...overId?.filter(s => s)?.map(s => document.querySelector(`#${s}`)),
            ...overTypes?.filter(s => s)?.map(s => Array.from(document.querySelectorAll(s)))?.flat() ?? [],
            ...overClasses?.filter(s => s)?.map(s => Array.from(document.querySelectorAll(`.${s}`)))?.flat() ?? []

        ];

        if (ss.length === 1) {

            ss[0].append(e);

            return e;

        } else return ss.map((oe, i, a) => {

            const en = e.cloneNode(true);

            en.id += i;

            oe.append(en);

        });

    } else return e;


};

/**
 * Функция для создания html элемента.
 * - Версия `0.1.0`
 * - Цепочка `DVHCa`
 * @param {{}} property Свойства.
 * @param {string} id ID.
 * @param {string} type Тип.
 * @param {Array<string>} attachments Вложенные элементы.
 * @param {Array<string>} classes Классы.
 * @param {Array<string>} overId Над элементы.
 * @param {Array<string>} overTypes Над классы.
 * @param {Array<string>} OverClasses Над типы.
*/
export function elementCreate(type = configHtml.element.create.defaultType, id, classes, overId, overTypes, overClasses, attachments, property) {

    return createDeceit({ id, type, classes, overId, overTypes, overClasses, attachments, property });

};
/**
 * Функция создания элемента с помощью строки.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @param {string} string
*/
export function elementCreateByString(string) {

    return createDeceit({ string });

};

//#endregion
//#region remove 0.0.0

/**
 * @typedef TBremove
 * @prop {[HTMLElement|string]}
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

        elements,

    } = t;

    elements.forEach(e => {

        console.log(e);

        if (e.constructor === String) Array.from(document.querySelectorAll(e)).forEach(e => e.remove());
        else e.remove();

    });

};

/**
 * Функция для извлечения элементов.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @param {...HTMLElement|string} elements
*/
export function elementRemove(...elements) {

    return removeDeceit({ elements });

};

//#endregion
//#region decomposeString 0.1.0

/**
 * @typedef TBdecomposeString
 * @prop {string} string
 * @typedef {TBdecomposeString} TdecomposeString
*/

/** @param {TdecomposeString} t */
function decomposeStringDeceit(t) {

    try {

        return decomposeStringVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @param {TdecomposeString} t */
function decomposeStringVerify(t) {



    return decomposeStringHandle(t);

};
/** @param {TdecomposeString} t */
function decomposeStringHandle(t) {

    t.string = t.string.trim();

    return decomposeStringComply(t);

};
/** @param {TdecomposeString} t */
function decomposeStringComply(t) {

    const {

        string

    } = t;

    /** @type {Array<TE>} */
    const results = [''];

    /** @type {number} */
    let cc = 0;

    for (const c of string) {

        if (c === '<') cc++;
        else if (c === '>') cc--;

        if (!cc && c === '/') results[results.length] = '';
        else results[results.length - 1] += c;

    };

    return results.filter(r => r).map(r => {

        const ystr = new YString(r);

        r = {

            attachments: stringFindAll(ystr.extract(/<(?<f>.*)>/ms), elementREString),
            id: ystr.extract(elementREId),
            type: ystr.extract(elementREType),
            overId: ystr.extractAll(elementREOverId),
            overTypes: ystr.extractAll(elementREOverTypes),
            overClasses: ystr.extractAll(elementREOverClasses),
            classes: stringFindAll(ystr.get(), /\..*?\]/ms, /\w+/),
            property: ystr.extractAll(elementREProperty),

        };

        if (r.property) r.property = stringCastToJect(stringReplaceAll(r.property?.map(p => p.trim())?.join('\n'), ':', /=/));

        return r;

    });

};

/**
 * Функция для распознования `YElement` и `YStructure` строк.
 * Находит `id`, `тип`, `классы`, `вложенные элементы`, `параметры`, `внутренний текст` для указанного элемента.
 * @param {string} string Исходная строка.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
*/
export function elementDecomposeString(string) {

    return decomposeStringDeceit({ string });

};

//#endregion
