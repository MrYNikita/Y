import { Readable, Writable, Duplex } from 'stream';
import { createReadStream, createWriteStream } from 'fs';
import { pathGet } from '../path/path.mjs';

//#region bind 0.0.0

/**
 * @typedef TBbind
 * 
 * @typedef {TBbind} Tbind
*/
  
/** @param {Tbind} t */
function bindDeceit(t) {
    
    try {
        
        return bindVerify(t);
        
    } catch (e) {
        
        if (config.strict) throw e;
        
        return undefined;
        
    };
    
};
/** @param {Tbind} t */
function bindVerify(t) {
    
    const {
    
    
    
    } = t;
    
    return bindHandle(t);
   
};
/** @param {Tbind} t */
function bindHandle(t) {
   
    let {
    
    
    
    } = t;
    
    
    
    t = {
        
        ...t,
        
    };
   
    return bindComply(t);
   
};
/** @param {Tbind} t */
function bindComply(t) {
   
    const {
    
    
    
    } = t;
    
    
    
};

/**
 * Функция для связывания потока для чтения со множеством потоков для записи.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @param {Readable} readable
 * @param {...Writable} writables
*/
export function streamBind(readable, ...writables) {



};

//#endregion
//#region trainsitToFile 0.0.0

/**
 * @typedef TBtrainsitToFile
 * @prop {string} data
 * @prop {[string|RegExp]} fragment
 * @typedef {TBtrainsitToFile} TtrainsitToFile
*/
  
/** @param {TtrainsitToFile} t */
function trainsitToFileDeceit(t) {
    
    try {
        
        return trainsitToFileVerify(t);
        
    } catch (e) {
        
        if (config.strict) throw e;
        
        return undefined;
        
    };
    
};
/** @param {TtrainsitToFile} t */
function trainsitToFileVerify(t) {
    
    const {
    
    
    
    } = t;
    
    return trainsitToFileHandle(t);
   
};
/** @param {TtrainsitToFile} t */
function trainsitToFileHandle(t) {
   
    let {
    
    
    
    } = t;
    
    t.fragment = t.fragment.map(f => pathGet(f));
    
    t = {
        
        ...t,
        
    };
   
    return trainsitToFileComply(t);
   
};
/** @param {TtrainsitToFile} t */
function trainsitToFileComply(t) {
   
    const {
    
        data,
        fragment,
    
    } = t;
    
    const rs = new Readable();
    const wss = fragment.forEach(f => createWriteStream(f));
    
};

/**
 * Функция для передачи данных в указанный файл.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @param {string} data
 * @param {...string|RegExp} fragments
*/
export function streamTransitToFile(data, ...fragments) {

    trainsitToFileDeceit({ data, fragments });

};

//#endregion