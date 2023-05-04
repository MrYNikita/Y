//#region YI

import { YFile } from '../class.mjs';
import { fileWriteCsv } from '../module.mjs';

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

/** ### YFileCsvT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `os\file\csv`
 * 
 * Основной параметр модуля `YFileCsv`.
 * 
 * @typedef {YFileCsvTE&YFileCsvTU} YFileCsvT
 * 
*/
/** ### YFileCsvTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `os\file\csv`
 * 
 * Параметр наследования `YFileCsv`.
 * 
 * @typedef {{[p in Exclude<keyof DFileCsv,keyof SFileCsv>|Exclude<keyof SFileCsv,keyof DFileCsv>]:(DFileCsv[p]&SFileCsv[p])}} YFileCsvTE
 * 
*/
/** ### YFileCsvTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `os\file\csv`
 * 
 * Уникальные параметры `YFileCsv`.
 * 
 * @typedef YFileCsvTU
 * @prop {any} _
 * 
*/

//#endregion

class SFileCsv extends YFile {
    
    
    
};
class DFileCsv extends SFileCsv {
    
    
    
};
class IFileCsv extends DFileCsv {
    
    
    
};
class MFileCsv extends IFileCsv {
    
    
    
};
class FFileCsv extends MFileCsv {
    
    /**
     * ### YFileCsv.constructor
     * 
     * 
     * 
     * ***
     * @arg {YFileCsvT} t
    */
    constructor(t) {
        
        t = [...arguments];
        
        super(Object.assign(t = FFileCsv.#before(t), {}));
        
        FFileCsv.#deceit.apply(this, [t]);
        
    };
    
    /** @arg {any[]} t */
    static #before(t) {
        
        /** @type {YFileCsvT} */
        let r = {};
        
        if (t?.length === 1 && [Object, YFileCsv].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {
            
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
    /** @arg {YFileCsvT} t @this {YFileCsv} */
    static #deceit(t) {
        
        try {
            
            FFileCsv.#verify.apply(this, [t]);
            
        } catch (e) {
            
            throw e;
            
        } finally {
            
            
            
        };
        
    };
    /** @arg {YFileCsvT} t @this {YFileCsv} */
    static #verify(t) {
        
        const {
            
            
            
        } = t;
        
        FFileCsv.#handle.apply(this, [t]);
        
    };
    /** @arg {YFileCsvT} t @this {YFileCsv} */
    static #handle(t) {
        
        
        
        FFileCsv.#create.apply(this, [t]);
        
    };
    /** @arg {YFileCsvT} t @this {YFileCsv} */
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
 * ### YFileCsv
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `os\file\csv`
 * - Цепочка `BDVHC`
 * ***
 * 
 * 
 * 
 * ***
 * 
*/
export class YFileCsv extends FFileCsv {
    
    /**
     * @arg {any[][]} data `Данные`
     * @public
    */
    write(data) {

        fileWriteCsv(this.path.get(), data);

        return this;
        
    };
    
};