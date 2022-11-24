import { arrayRemove } from "../array/array.mjs";
import { config, configNotice } from "../config.mjs";
import { logChainError } from "../log/log.mjs";

//#region fill 0.1.0

/**
 * @typedef Tfill
 * @prop {{}} ject
 * @prop {{}} filler
*/

/** @param {Tfill} t */
function fillDeceit(t) {

    try {

        fillVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @param {Tfill} t */
function fillVerify(t) {

    const {

        

    } = t;

    fillHandle(t);

};
/** @param {Tfill} t */
function fillHandle(t) {

    let {



    } = t;

    t = {

        ...t,

    };

    return fillComply(t);

};
/** @param {Tfill} t */
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
 * @param {object} j Объект заполнения.
 * @param {object} t Объект передачи аргументов.
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
  
/** @param {Tequal} t */
function equalDeceit(t) {
    
    try {
        
        return equalVerify(t);
        
    } catch (e) {
        
        if (config.strict) throw e;
        
        return undefined;
        
    };
    
};
/** @param {Tequal} t */
function equalVerify(t) {
    
    const {
    
    
    
    } = t;
    
    return equalHandle(t);
   
};
/** @param {Tequal} t */
function equalHandle(t) {
   
    let {
    
    
    
    } = t;
    
    
    
    t = {
        
        ...t,
        
    };
   
    return equalComply(t);
   
};
/** @param {Tequal} t */
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
 * @param {...Object} jects
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
  
/** @param {Tdisplay} t */
function displayDeceit(t) {
    
    try {
        
        return displayVerify(t);
        
    } catch (e) {
        
        if (config.strict) throw e;
        
        return undefined;
        
    };
    
};
/** @param {Tdisplay} t */
function displayVerify(t) {
    
    const {
    
    
    
    } = t;
    
    return displayHandle(t);
   
};
/** @param {Tdisplay} t */
function displayHandle(t) {
   
    let {
    
    
    
    } = t;
    
    
    
    t = {
        
        ...t,
        
    };
   
    return displayComply(t);
   
};
/** @param {Tdisplay} t */
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
  
/** @param {Tsupplement} t */
function supplementDeceit(t) {
    
    try {
        
        return supplementVerify(t);
        
    } catch (e) {
        
        if (config.strict) throw e;
        
        return undefined;
        
    };
    
};
/** @param {Tsupplement} t */
function supplementVerify(t) {
    
    const {
    
    
    
    } = t;
    
    return supplementHandle(t);
   
};
/** @param {Tsupplement} t */
function supplementHandle(t) {
   
    let {
    
    
    
    } = t;
    
    
    
    t = {
        
        ...t,
        
    };
   
    return supplementComply(t);
   
};
/** @param {Tsupplement} t */
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
 * @param {{}} ject Исходный объект.
 * @param {{}} supplement Объект-дополнитель.
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

/** @param {TgetDeep} t */
function getDeepDeceit(t) {

    try {

        return getDeepVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @param {TgetDeep} t */
function getDeepVerify(t) {

    const {



    } = t;

    return getDeepHandle(t);

};
/** @param {TgetDeep} t */
function getDeepHandle(t) {

    let {



    } = t;

    t = {

        ...t,

    };

    return getDeepComply(t);

};
/** @param {TgetDeep} t */
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
//#region setDeep 0.0.0

/**
 * @typedef TBsetDeep
 * @prop {any} value
 * @prop {boolean} all
 * @typedef {TBsetDeep&TgetDeep} TsetDeep
*/

/** @param {TsetDeep} t */
function setDeepDeceit(t) {

    try {

        return setDeepVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @param {TsetDeep} t */
function setDeepVerify(t) {

    const {



    } = t;

    return setDeepHandle(t);

};
/** @param {TsetDeep} t */
function setDeepHandle(t) {

    let {



    } = t;

    t = {

        ...t,

    };

    return setDeepComply(t);

};
/** @param {TsetDeep} t */
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

            if (!all) return;

        };

        for (const v of arrayRemove(Object.values(s), value)) if (typeof v === 'object' && v !== property && !su.includes(v)) {

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
 * @param {{}} ject Объект глубокой установки.
 * @param {any} value Значение для свойства глубокой установки.
 * @param {string} property Свойство глубокой установки.
 * @param {boolean} all Логическое значение, определяющее полноту заполнения.
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
 * @param {{}} ject
 * @typedef {TBcopyDeep} TcopyDeep
*/
  
/** @param {TcopyDeep} t */
function copyDeepDeceit(t) {
    
    try {
        
        return copyDeepVerify(t);
        
    } catch (e) {
        
        if (config.strict) throw e;
        
        return undefined;
        
    };
    
};
/** @param {TcopyDeep} t */
function copyDeepVerify(t) {
    
    const {
    
    
    
    } = t;
    
    return copyDeepHandle(t);
   
};
/** @param {TcopyDeep} t */
function copyDeepHandle(t) {
   
    let {
    
    
    
    } = t;
    
    
    
    t = {
        
        ...t,
        
    };
   
    return copyDeepComply(t);
   
};
/** @param {TcopyDeep} t */
function copyDeepComply(t) {
   
    const {
    
        ject,
    
    } = t;
    
    const r = { ...ject };
    const s = [r];

    for (const j of s) {

        Object.entries(j).forEach(p => {

            console.log(p);

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
 * @param {{}} ject Исходный объект.
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

/** @param {TchangeDeep} t */
function changeDeepDeceit(t) {

    try {

        return changeDeepVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @param {TchangeDeep} t */
function changeDeepVerify(t) {

    const {



    } = t;

    return changeDeepHandle(t);

};
/** @param {TchangeDeep} t */
function changeDeepHandle(t) {

    let {



    } = t;



    t = {

        ...t,

    };

    return changeDeepComply(t);

};
/** @param {TchangeDeep} t */
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
 * @param {{}} ject Исходный объект.
 * @param {...{}} changeDeeps Остаточные объекты изменения.
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
  
/** @param {TreplaceDeep} t */
function replaceDeepDeceit(t) {
    
    try {
        
        return replaceDeepVerify(t);
        
    } catch (e) {
        
        if (config.strict) throw e;
        
        return undefined;
        
    };
    
};
/** @param {TreplaceDeep} t */
function replaceDeepVerify(t) {
    
    const {
    
    
    
    } = t;
    
    return replaceDeepHandle(t);
   
};
/** @param {TreplaceDeep} t */
function replaceDeepHandle(t) {
   
    let {
    
    
    
    } = t;
    
    
    
    t = {
        
        ...t,
        
    };
   
    return replaceDeepComply(t);
   
};
/** @param {TreplaceDeep} t */
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
 * @param {{}} ject Исходный объект.
 * @param {any} value Исходное значение.
 * @param {any} replace Заменяющее значение.
 * @param {boolean} all Логическое значение определяющее полноту замены.
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
  
/** @param {TgetPathDeep} t */
function getPathDeepDeceit(t) {
    
    try {
        
        return getPathDeepVerify(t);
        
    } catch (e) {
        
        if (config.strict) throw e;
        
        return undefined;
        
    };
    
};
/** @param {TgetPathDeep} t */
function getPathDeepVerify(t) {
    
    const {
    
    
    
    } = t;
    
    return getPathDeepHandle(t);
   
};
/** @param {TgetPathDeep} t */
function getPathDeepHandle(t) {
   
    let {
    
    
    
    } = t;
    
    
    
    t = {
        
        ...t,
        
    };
   
    return getPathDeepComply(t);
   
};
/** @param {TgetPathDeep} t */
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
 * @param {{}} ject Исходный объект.
 * @param {any} value Искомое значение.
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
 * @param {{}} ject Исходный объект.
 * @param {string} property Искомое свойство.
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

/** @param {TsupplementDeep} t */
function supplementDeepDeceit(t) {

    try {

        return supplementDeepVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @param {TsupplementDeep} t */
function supplementDeepVerify(t) {

    const {



    } = t;

    return supplementDeepHandle(t);

};
/** @param {TsupplementDeep} t */
function supplementDeepHandle(t) {

    let {



    } = t;



    t = {

        ...t,

    };

    return supplementDeepComply(t);

};
/** @param {TsupplementDeep} t */
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
 * @param {{}} ject Исходный объект.
 * @param {...{}} supplementDeeps Объекты дополнения.
*/
export function jectSupplementDeep(ject, ...supplementDeeps) {

    supplementDeepDeceit({ ject, supplementDeeps });

};

//#endregion

/**
 * @file ject.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @copyright Yakhin Nikita Artemovich 2022
*/