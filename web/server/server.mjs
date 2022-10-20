import { config } from "process";

//#region defineContentType 0.0.0

/**
 * @typedef TBdefineContentType
 * @prop {any} data
 * @prop {string} type
 * @typedef {TBdefineContentType} TdefineContentType
*/
  
/** @param {TdefineContentType} t */
function defineContentTypeDeceit(t) {
    
    try {
        
        return defineContentTypeVerify(t);
        
    } catch (e) {
        
        if (config.strict) throw e;
        
        return undefined;
        
    };
    
};
/** @param {TdefineContentType} t */
function defineContentTypeVerify(t) {
    
    const {
    
    
    
    } = t;
    
    return defineContentTypeHandle(t);
   
};
/** @param {TdefineContentType} t */
function defineContentTypeHandle(t) {
   
    let {
    
    
    
    } = t;
    
    
    
    t = {
        
        ...t,
        
    };
   
    return defineContentTypeComply(t);
   
};
/** @param {TdefineContentType} t */
function defineContentTypeComply(t) {
   
    let {

        type,

    } = t;

    const {
    
        data,
    
    } = t;
    
    if (!type) {



    };

    switch (type) {

        case 'css': return 'text/css';
        case 'ico': return 'image/x-icon';
        case 'png': return 'image/png';
        case 'gif': return 'image/gif';
        case 'html': return 'text/html';
        case 'text': return 'text/plaint';
        case 'json': return 'application/json';
        case 'js': case 'cjs': case 'mjs': return 'application/javascript';
        default: return 'text/plain';

    };
    
};

/**
 * Функция для определения типа отправляемых данных по указанному строковому значению.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @param {string} type
 * - По умолчанию `text`
*/
export function serverDefineContentType(type = 'text') {

    return defineContentTypeDeceit({ type });

};
/**
 * Функция для определения типа отправляемых данных.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @param {any} data Данные, по которым будет определен тип.
*/
export function serverDefineContentTypeByData(data) {

    return defineContentTypeDeceit({ data });

};

//#endregion
