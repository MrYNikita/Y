import { YString } from "../../../../string/YString/YString.mjs";
import { arrayReplace } from "../../../../array/array.mjs";
import { stringExtract } from "../../../../string/string.mjs";
import { config, configHtml, configHtmlElement } from "../../../../config.mjs";

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
    
    if (t.string) {

        const re = /(((([!#.]|\^[!#.])\w+|(.|\^[!#.])\[(\w+,?)+|:.+?::|\w+=\d+(\.\d+)?([%]|px|[pe]m)?|\w+=\w+| \w+|<.*>) ?)+\/)+/sg;
        const ystr = new YString(t.string.match(re)[0]);

        [

            t.id,
            t.type,
            t.childs,
            t.text,
            t.classes,
            t.overId,
            t.overTypes,
            t.overClasses,
        
        ] = [
            
            ystr.extract(/#(?<e>\w+)/) ?? '',
            ystr.extract(/!(?<e>\w+)/) ?? '',
            ystr.extract(/<(?<e>.*)>/s)?.match(re) ?? '',
            ystr.extract(/:(?<e>.+?)::/) ?? '',
            ystr.extract(/\.\[?(?<e>[\w,]+)/)?.match(/\w+/g) ?? [],
            ystr.extract(/\^#\[?(?<e>[\w,]+)/)?.match(/\w+/g) ?? [],
            ystr.extract(/\^!\[?(?<e>[\w,]+)/)?.match(/\w+/g) ?? [],
            ystr.extract(/\^\.\[?(?<e>[\w,]+)/)?.match(/\w+/g) ?? [],

        ];

    };

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
        overTypes,
        overClasses,
    
    } = t;

    const e = document.createElement(type);

    if (childs) console.log(elementCreateByString(childs[0]));

    if (id) e.id = id;
    if (text) e.textContent = text;
    if (childs) e.append(...childs.map(e => elementCreateByString(e)));
    if (classes) classes.forEach(s => e.classList.add(s));

    if (overId.length || overTypes.length || overClasses.length) {

        const ss = [
            
            ...overId.map(s => document.querySelector(`#${s}`)),
            ...overTypes.map(s => Array.from(document.querySelectorAll(s))).flat(),
            ...overClasses.map(s => Array.from(document.querySelectorAll(`.${s}`))).flat()

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
 * @param {string} id ID.
 * @param {string} type Тип.
 * @param {[string]} styles Стили.
 * @param {[string]} classes Классы.
*/
export function elementCreate(type = configHtml.element.create.defaultType, id, classes, styles) {

    return createDeceit({ id, type, classes, styles });

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