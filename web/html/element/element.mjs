import { arrayReplace } from "../../../array/array.mjs";
import { config, configHtml, configHtmlElement } from "../../../config.mjs";
import { stringFind } from "../../../string/string.mjs";
import { YString } from "../../../string/YString/YString.mjs";

/**
 * Регулярное выражение для поиска строк создания элементов.
 * - Версия `0.0.4`
 * @type {RegExp}
*/
export const elementREString = /((^| )(([!#]\w+)|(.|\^[.!#])(\w+ ?)+\]|:.*?:|\w+=?([^ ]*)?|<.*>) ?)+\//gs;
/**
 * Регулярное выражение для поиска и проверки классов в строке создания элементов.
 * @type {RegExp}
*/
export const elementREId = /(?:^| )#(?<f>\w+)/;
/**
 * Регулярное выражение для поиска и проверки классов в строке создания элементов.
 * @type {RegExp}
*/
export const elementREType =/(?:^| )!(?<f>\w+)/;
/**
 * Регулярное выражение для поиска и проверки классов в строке создания элементов.
 * @type {RegExp}
*/
export const elementREText = /(?:^| ):(?<f>.+?):/ms;
/**
 * Регулярное выражение для поиска и проверки классов в строке создания элементов.
 * @type {RegExp}
*/
export const elementREClasses = /(?:^| )\.(?<f>(\w+ ?)+)+\]/;
/**
 * Регулярное выражение для поиска и проверки над ID в строке создания элементов.
 * @type {RegExp}
*/
export const elementREOverId = /(?:^| )\^\#(?<f>(\w+ ?)+)+\]/;
/**
 * Регулярное выражение для поиска и проверки над типов в строке создания элементов.
 * @type {RegExp}
*/
export const elementREOverTypes = /(?:^| )\^\!(?<f>(\w+ ?)+)+\]/;
/**
 * Регулярное выражение для поиска и проверки над классов в строке создания элементов.
 * @type {RegExp}
*/
export const elementREOverClasses = /(?:^| )\^\.(?<f>(\w+ ?)+)+\]/;
/**
 * Регулярное выражение для поиска и проверки над классов в строке создания элементов.
 * @type {RegExp}
*/
export const elementREProperty = /(?:^| )(\w+=\d+(\.\d+)?([%]|px|[pe]m)?|\w+=\w+| \w+)/gm;

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
 * @prop {string} text
 * @prop {string} string
 * @prop {[string]} childs
 * @prop {[string]} overId
 * @prop {[string]} classes
 * @prop {[string]} overTypes
 * @prop {[string]} overClasses
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

    if (t.string) t = { ...elementStringDecompose(t.string), ...t, };
    if (!t.overId) t.overId = [];
    if (!t.overClasses) t.overClasses = [];

    t = {

        ...t,

    };

    return createComply(t);

};
/** @param {Tcreate} t @return {HTMLElement|[HTMLElement]} */
function createComply(t) {

    const {

        id,
        type,
        text,
        childs,
        overId,
        classes,
        property,
        overTypes,
        overClasses,

    } = t;

    const e = document.createElement(type);

    if (id?.[0]) e.id = id;
    if (text?.[0]) e.textContent = text;
    if (childs) e.append(...childs.map(e => elementCreateByString(e)));
    if (classes) classes.forEach(s => e.classList.add(s));

    if (overId?.length || overTypes?.length || overClasses?.length) {

        const ss = [

            ...overId?.map(s => document.querySelector(`#${s}`)),
            ...overTypes?.map(s => Array.from(document.querySelectorAll(s)))?.flat() ?? [],
            ...overClasses?.map(s => Array.from(document.querySelectorAll(`.${s}`)))?.flat() ?? []

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
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @param {{}} property Свойства.
 * @param {string} id ID.
 * @param {string} text Текст.
 * @param {string} type Тип.
 * @param {[string]} childs Вложенные элементы.
 * @param {[string]} classes Классы.
 * @param {[string]} overId Над элементы.
 * @param {[string]} overTypes Над классы.
 * @param {[string]} OverClasses Над типы.
*/
export function elementCreate(type = configHtml.element.create.defaultType, id, classes, overId, overTypes, overClasses, childs, text, property) {

    return createDeceit({ id, type, classes, overId, overTypes, overClasses, childs, text, property });

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
//#region stringDecompose 0.0.0

/**
 * @typedef TBstringDecompose
 * @prop {string} string
 * @typedef {TBstringDecompose} TstringDecompose
*/

/** @param {TstringDecompose} t */
function stringDecomposeDeceit(t) {

    try {

        return stringDecomposeVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @param {TstringDecompose} t */
function stringDecomposeVerify(t) {

    const {



    } = t;

    return stringDecomposeHandle(t);

};
/** @param {TstringDecompose} t */
function stringDecomposeHandle(t) {

    let {



    } = t;



    t = {

        ...t,

    };

    return stringDecomposeComply(t);

};
/** @param {TstringDecompose} t */
function stringDecomposeComply(t) {

    const {

        string,

    } = t;

    const ystr = new YString(string.match(elementREString)[0]);

    let childs = ystr.extract(/<.+>/gms)?.[0]?.match(elementREString) ?? [];
    let text = ystr.extract(elementREText);
    let classes = ystr.extract(elementREClasses)?.split(' ') ?? [];
    let overClasses = ystr.extract(elementREOverClasses)?.split(' ') ?? [];
    let overTypes = ystr.extract(elementREOverTypes)?.split(' ') ?? [];
    let overId = ystr.extract(elementREOverId)?.split(' ') ?? [];
    let id = ystr.extract(elementREId);
    let type = ystr.extract(elementREType);
    let property = ystr.extract(elementREProperty);

    return {

        id,
        type,
        text,
        childs,
        overId,
        classes,
        property,
        overTypes,
        overClasses,

    };

};

/**
 * Функция для разбиения строки создания элементов на части.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @param {string} string
*/
export function elementStringDecompose(string) {

    return stringDecomposeDeceit({ string });

};

//#endregion