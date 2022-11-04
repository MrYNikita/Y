import { config } from "process";

//#region descrypt 0.0.0

/**
 * @typedef TBdescrypt
 * @prop {Buffer} data
 * @typedef {TBdescrypt} Tdescrypt
*/
  
/** @param {Tdescrypt} t */
function descryptDeceit(t) {
    
    try {
        
        return descryptVerify(t);
        
    } catch (e) {
        
        if (config.strict) throw e;
        
        return undefined;
        
    };
    
};
/** @param {Tdescrypt} t */
function descryptVerify(t) {
    
    const {
    
    
    
    } = t;
    
    return descryptHandle(t);
   
};
/** @param {Tdescrypt} t */
function descryptHandle(t) {
   
    let {
    
    
    
    } = t;
    
    
    
    t = {
        
        ...t,
        
    };
   
    return descryptComply(t);
   
};
/** @param {Tdescrypt} t */
function descryptComply(t) {
   
    const {
    
        data,
    
    } = t;

    const l = data[1] ^ 128;

    let r;

    if (l <= 126) r = { length: l, mask: data.subarray(2, 6), data: data.subarray(6) };
    else if (l === 127) r = { length: data.subarray(2, 4).readInt16BE(), mask: data.subarray(4, 8), data: data.subarray(8) };
    else if (l === 128) r = { payloadLength: data.subarray(2, 10).readBigInt64BE(), mask: data.subarray(10, 14), data: data.subarray(14) };
    else throw new Error('Wrong message format!');

    const m = r.mask, d = r.data;

    return Buffer.from(d.map((byte, i) => byte ^  m[i % 4]));
    
};

/**
 * Функция для расшифровки сообщений клиентов.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @param {Buffer} data Данные.
*/
export function serverDescrypt(data) {

    return descryptDeceit({ data });

};

//#endregion
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
        case 'pdf': return 'application/pdf';
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