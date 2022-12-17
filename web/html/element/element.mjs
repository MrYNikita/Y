import { arrayReplace } from "../../../array/array.mjs";
import { config, configWebYHTML, configWebYHTMLElement } from "../../../config.mjs";
import { jectChangeDeep, jectReplaceDeep, jectSupplement } from "../../../ject/ject.mjs";
import { stringCastToJect, stringFind, stringFindAll, stringFindToJect, stringReplace, stringReplaceAll } from "../../../string/string.mjs";
import { YString } from "../../../string/YString/YString.mjs";

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
export const elementREText = /(?:^| ):(?<f>.+?):/msu;
/**
 * Регулярное выражение для поиска строк создания элементов.
 * - Версия `0.0.4`
 * @type {RegExp}
*/
export const elementREString = /(((^| )(([!#]\w+)|(.|\^[.!#])(\w+ ?)+\]|:.*?:|\w+=?([^ ]*)?|<.*>)( |\n\r?)*)+\/)/ms;
/**
 * Регулярное выражение для поиска и проверки над ID в строке создания элементов.
 * - Версия `0.0.1`
 * @type {RegExp}
*/
export const elementREOverId = /(?:^| )\^\#(?<f>(\w+ ?)+)+\]/ms;
/**
 * Регулярное выражение для поиска и проверки классов в строке создания элементов.
 * - Версия `0.0.1`
 * @type {RegExp}
*/
export const elementREClasses = /(?:^| )\.((\w+) ?)+\]/ms;
/**
 * Регулярное выражение для поиска и проверки над классов в строке создания элементов.
 * - Версия `0.0.2`
 * @type {RegExp}
*/
export const elementREProperty = /(?:^| )\w+(=(\d|\w|[а-яА-Я])+)?/ms;
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
 * @typedef TElements
 * @prop {[HTMLElement]} elements
*/

//#region move 0.0.0

/**
 * @typedef TBmove
 * @prop {HTMLElement} over
 * @typedef {TBmove&TElements} Tmove
*/

/** @arg {Tmove} t */
function moveDeceit(t) {

    try {

        return moveVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {Tmove} t */
function moveVerify(t) {

    const {



    } = t;

    return moveHandle(t);

};
/** @arg {Tmove} t */
function moveHandle(t) {

    let {



    } = t;



    t = {

        ...t,

    };

    return moveComply(t);

};
/** @arg {Tmove} t */
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
 * @arg {HTMLElement} over
 * @arg {...HTMLElement|string} elements
*/
export function elementMove(over, ...elements) {

    moveDeceit({ over, elements });

};
//#endregion
//#region remove 0.0.0

/**
 * @typedef TBremove
 * @prop {[HTMLElement|string]}
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



    t = {

        ...t,

    };

    return removeComply(t);

};
/** @arg {Tremove} t */
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
 * @arg {...HTMLElement|string} elements
*/
export function elementRemove(...elements) {

    return removeDeceit({ elements });

};

//#endregion

//#region create 0.1.0

/**
 * @typedef TBcreate
 * @prop {string} id
 * @prop {string} type
 * @prop {string} string
 * @prop {string[]} attachments
 * @prop {string[]} classes
 * @prop {string[]} selectors
 * @prop {CSSStyleDeclaration&import("./YElement/YElement.mjs").TElementProperty} property
 * @typedef {TBcreate} Tcreate
*/

/** @arg {Tcreate} t */
function createDeceit(t) {

    try {

        return createVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {Tcreate} t */
function createVerify(t) {

    const {



    } = t;

    return createHandle(t);

};
/** @arg {Tcreate} t */
function createHandle(t) {

    let {

        string,

    } = t;

    if (t.string) t = { ...elementDecomposeString(t.string)[0], ...t, };
    if (!t.overId) t.overId = [];
    if (!t.overTypes) t.overTypes = [];
    if (!t.overClasses) t.overClasses = [];

    t = {

        ...t,

    };

    return createComply(t);

};
/** @arg {Tcreate} t @return {HTMLElement|HTMLElement[]} */
function createComply(t) {

    const {

        id,
        type,
        classes,
        property,
        selectors,
        attachments,

    } = t;

    const e = document.createElement(type);

    if (id?.[0]) e.id = id;
    if (attachments) e.append(...attachments.map(e => elementCreateByString(e)));
    if (classes) classes.forEach(s => e.classList.add(s));
    if (selectors) elementAppend(e, ...selectors);

    if (property) {

        jectChangeDeep(e, property);

        if (property.text) e.textContent = property.text;

    };

    return e;

};

/**
 * Функция для создания html элемента.
 * - Версия `0.2.0`
 * - Цепочка `DVHCa`
 * @arg {Tcreate} t Параметры.
*/
export function elementCreate(t = {}) {

    return createDeceit(t);

};
/**
 * Функция создания элемента с помощью строки.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @arg {string} string
*/
export function elementCreateByString(string) {

    return createDeceit({ string });

};

//#endregion
//#region createMore 0.0.0

/**
 * @typedef TBcreateMore
 * @prop {any} _
 * @typedef {TBcreateMore&Tcreate} TcreateMore
*/

/** @arg {TcreateMore} t */
function createMoreDeceit(t) {

    try {

        return createMoreVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {TcreateMore} t */
function createMoreVerify(t) {



    return createMoreHandle(t);

};
/** @arg {TcreateMore} t */
function createMoreHandle(t) {



    return createMoreComply(t);

};
/** @arg {TcreateMore} t */
function createMoreComply(t) {

    const {



    } = t;



};

/**
 * Функция создания `html` элементов.
 * Элементы будут созданы по указанным параметрам и размещены в указанные над-элементы.
 * ID будут пронумерованы.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @arg {Tcreate} t Параметры.
*/
export function elementCreateMore(t = {}) {

    return createMoreDeceit(t);

};
/**
 * Функция создания `html` элементов по строке формирования элемента.
 * Элементы будут созданы по указанным параметрам и размещены в указанные над-элементы.
 * ID будут пронумерованы.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @arg {string} string
*/
export function elementCreateMoreByString(string) {

    return createMoreDeceit({ string });

};

//#endregion

//#region append 0.0.0

/**
 * @typedef TBappend
 * @prop {string[]} selectors
 * @prop {HTMLElement} element
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



    return appendHandle(t);

};
/** @arg {Tappend} t */
function appendHandle(t) {



    return appendComply(t);

};
/** @arg {Tappend} t */
function appendComply(t) {

    const {

        element,
        selectors,

    } = t;

    const a = selectors.filter(s => s).map(s => Array.from(document.querySelectorAll(s))).flat().filter(s => s);

    if (a.length === 1) {

        a[0].append(element);

    } else if (a.length > 1) {

        let i = 0;

        for (const s of a) {

            const e = element.cloneNode(true);

            if (e.id) {

                while (document.querySelector(`#${e.id}_${i}`)) i++;

                e.id = `${e.id}_${i}`;

            };

            s.append(e);

        };

    };

};

/**
 * Функция для добавления элемента в указанные элементы.
 * В качестве указания для элементов, куда следует разместить элемент, указываются их селекторы.
 * В случае, если кол-во элементов размещения больше одного, элемент будет клонирован, id будут пронумерованы, копии будут размещены.
 * Иначе элемент будет размещен в единственном экземпляре.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @arg {HTMLElement} element Элемент. Будет размещен в указанные элементы, определенные селекторами.
 * @arg {...string} selectors Селекторы.
 * Селекторы указываются с указанием их принадлежности:
 * - ` ` - `type`  Тип. Размещает элемент в указанный тип. Указывается пустой строкой.
 * - `.` - `class` Класс. Размещает элемент в указанный класс.
 * - `#` - `id`    ID. Размещает элемент в указанный элемент.
 *
 * Может быть указано более одного селектора.
*/
export function elementAppend(element, ...selectors) {

    appendDeceit({ element, selectors, });

};

//#endregion

//#region decomposeString 0.1.0

/**
 * @typedef TBdecomposeString
 * @prop {string} string
 * @typedef {TBdecomposeString} TdecomposeString
*/

/** @arg {TdecomposeString} t */
function decomposeStringDeceit(t) {

    try {

        return decomposeStringVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {TdecomposeString} t */
function decomposeStringVerify(t) {



    return decomposeStringHandle(t);

};
/** @arg {TdecomposeString} t */
function decomposeStringHandle(t) {

    t.string = t.string.trim();

    return decomposeStringComply(t);

};
/** @arg {TdecomposeString} t */
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
            selectors: [],

        };

        if (r.property) r.property = stringCastToJect(stringReplaceAll(r.property?.map(p => p.trim())?.join('\n'), ':', /=/));

        if (r.overId) r.selectors.push(...r.overId.map(e => `#${e}`));
        if (r.overTypes) r.selectors.push(...r.overTypes);
        if (r.overClasses) r.selectors.push(...r.overClasses.map(e => `.${e}`));

        return r;

    });

};

/**
 * Функция для распознования `YElement` и `YStructure` строк.
 * Находит `id`, `тип`, `классы`, `вложенные элементы`, `параметры`, `внутренний текст` для указанного элемента.
 * @arg {string} string Исходная строка.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
*/
export function elementDecomposeString(string) {

    return decomposeStringDeceit({ string });

};

//#endregion