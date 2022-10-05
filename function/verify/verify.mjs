import { YErrorVerify } from "../../error/YError/YErrorVerify/YErrorVerify.mjs";
import { config, configFunction } from "../../config.mjs";

//#region is 0.0.0

/**
 * @typedef TBis
 * @prop {any} value
 * @prop {typeof Object} specified
 * @prop {string} type
 * @typedef {TBis} Tis
*/
  
/** @param {Tis} t */
function isDeceit(t) {
    
    try {
        
        return isVerify(t);
        
    } catch (e) {
        
        if (config.strict) throw e;
        
        return undefined;
        
    };
    
};
/** @param {Tis} t */
function isVerify(t) {
    
    const {
    
    
    
    } = t;
    
    return isHandle(t);
   
};
/** @param {Tis} t */
function isHandle(t) {
   
    let {
    
    
    
    } = t;
    
    
    
    t = {
        
        ...t,
        
    };
   
    return isComply(t);
   
};
/** @param {Tis} t */
function isComply(t) {
   
    const {
    
        type,
        value,
        specified,
        
    } = t;

    const {

        notObject,
        notNumber,
        notString,
        notBoolean,
        notSpecified,

    } = configFunction.verify.is;
    
    switch (type) {

        case 'number': {

            if (typeof value !== 'number') throw new YErrorVerify(notNumber);

        }; break;
        case 'string': {

            if (typeof value !== 'string') throw new YErrorVerify(notString);

        }; break;
        case 'object': {

            if (typeof value !== 'object') throw new YErrorVerify(notObject);

        }; break;
        case 'boolean': {

            if (typeof value !== 'boolean') throw new YErrorVerify(notBoolean);

        }; break;
        case 'specified': {

            if (value.constructor !== specified) throw new YErrorVerify(notSpecified);

        }; break;

    };
    
};

/**
 * Функция для проверки значения на принадележность к объекту.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @param {any} value
*/
export function verifyIsJect(value) {

    return isDeceit({ value, type: 'object', })

};
/**
 * Функция для проверки значения на принадележность к числу.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @param {any} value
*/
export function verifyIsNumber(value) {

    return isDeceit({ value, type: 'number', })

};
/**
 * Функция для проверки значения на принадележность к строке.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @param {any} value
*/
export function verifyIsString(value) {

    return isDeceit({ value, type: 'string', })

};
/**
 * Функция для проверки значения на принадележность к логическим значениям.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @param {any} value
*/
export function verifyIsBoolean(value) {

    return isDeceit({ value, type: 'boolean', })

};
/**
 * Функция для проверки значения на принадележность к строке.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @param {any} value
*/
export function verifyIsSpecified(value, specified) {

    return isDeceit({ value, type: 'specified', specified, })

};

//#endregion