//#region YI

import { YFile } from '../class.mjs';
import { fileReadJson, fileWriteJson } from '../module.mjs';

/** @type {import('./config.mjs')['default']?} */
let config = null;

await import('./config.mjs')

    .then(i => config = i.default)
    .catch(e => e);

/** @type {import('./error.mjs')['default']?} */
let error = null;

await import('./error.mjs')

    .then(i => error = i.default)
    .catch(e => e);

//#endregion
//#region YT

/** ### YFileJsonT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `os\file\json`
 * 
 * Основной параметр модуля `YFileJson`.
 * 
 * @typedef {YFileJsonTE&YFileJsonTU} YFileJsonT
 * 
*/
/** ### YFileJsonTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `os\file\json`
 * 
 * Параметр наследования `YFileJson`.
 * 
 * @typedef {{[p in Exclude<keyof DFileJson,keyof SFileJson>|Exclude<keyof SFileJson,keyof DFileJson>]:(DFileJson[p]&SFileJson[p])}} YFileJsonTE
 * 
*/
/** ### YFileJsonTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `os\file\json`
 * 
 * Уникальные параметры `YFileJson`.
 * 
 * @typedef YFileJsonTU
 * @prop {any} _
 * 
*/

//#endregion

class SFileJson extends YFile {
    
    
    
};
class DFileJson extends SFileJson {
    
    
    
};
class IFileJson extends DFileJson {
    
    
    
};
class MFileJson extends IFileJson {
    
    
    
};
class FFileJson extends MFileJson {
    
    /**
     * ### YFileJson.constructor
     * 
     * 
     * 
     * ***
     * @arg {YFileJsonT} t
    */
    constructor(t) {
        
        t = [...arguments];
        
        super(Object.assign(t = FFileJson.#before(t), {}));
        
        FFileJson.#deceit.apply(this, [t]);
        
    };
    
    /** @arg {any[]} t */
    static #before(t) {
        
        /** @type {YFileJsonT} */
        let r = {};
        
        if (t?.length === 1 && [Object, YFileJson].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {
            
            r = t[0];
            
        } else if (t?.length) {
            
            if (t[0]?._ytp) {
            
                t = [...t[0]._ytp];
            
            };
            
            switch (t.length) {
                
                case 3: 
                case 2: 
                case 1: 
                
            };
            
            if (!Object.values(r).length) {
                
                r = { _ytp: t, };
                
            };
            
        };
        
        return r;
        
    };
    /** @arg {YFileJsonT} t @this {YFileJson} */
    static #deceit(t) {
        
        try {
            
            FFileJson.#verify.apply(this, [t]);
            
        } catch (e) {
            
            throw e;
            
        } finally {
            
            
            
        };
        
    };
    /** @arg {YFileJsonT} t @this {YFileJson} */
    static #verify(t) {
        
        const {
            
            
            
        } = t;
        
        FFileJson.#handle.apply(this, [t]);
        
    };
    /** @arg {YFileJsonT} t @this {YFileJson} */
    static #handle(t) {
        
        
        
        FFileJson.#create.apply(this, [t]);
        
    };
    /** @arg {YFileJsonT} t @this {YFileJson} */
    static #create(t) {
        
        const {
            
            
            
        } = t;
        
        this.adopt(t);
        
        if (config) {
            
            this.adoptDefault(config);
            
        };
        
    };
    
};

/**
 * ### YFileJson
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `os\file\json`
 * - Цепочка `BDVHC`
 * ***
 * 
 * 
 * 
 * ***
 * 
*/
export class YFileJson extends FFileJson {
    
    /**
     * @returns {{}}
    */
    read() {

        return fileReadJson(this.path.get());
        
    };
    /**
     * ### write
     * - Версия `0.0.0`
     * - Модуль `os\file\json`
     * ***
     * 
     * Метод записи в файл.
     * 
     * ***
     * @arg {{}} data `Данные`
     * @public
    */
    write(data) {

        fileWriteJson(this.path.get(), data);

        return this;
        
    };
    
};