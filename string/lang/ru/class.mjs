//#region YI

import { YLang } from '../class.mjs';

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

/** ### YLangRuT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `string\lang\ru`
 * 
 * Основной параметр модуля `YLangRu`.
 * 
 * @typedef {YLangRuTE&YLangRuTU} YLangRuT
 * 
*/
/** ### YLangRuTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `string\lang\ru`
 * 
 * Параметр наследования `YLangRu`.
 * 
 * @typedef {{[p in Exclude<keyof DLangRu,keyof SLangRu>|Exclude<keyof SLangRu,keyof DLangRu>]:(DLangRu[p]&SLangRu[p])}} YLangRuTE
 * 
*/
/** ### YLangRuTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `string\lang\ru`
 * 
 * Уникальные параметры `YLangRu`.
 * 
 * @typedef YLangRuTU
 * @prop {any} _
 * 
*/

//#endregion

class SLangRu extends YLang {
    
    /** ### config
     * 
     * Конфигуратор.
     * 
     * ***
     * @public
    */
    static config = config;
    
};
class DLangRu extends SLangRu {
    
    
    
};
class ILangRu extends DLangRu {
    
    
    
};
class MLangRu extends ILangRu {
    
    
    
};
class FLangRu extends MLangRu {
    
    /**
     * ### YLangRu.constructor
     * 
     * 
     * 
     * ***
     * @arg {YLangRuT} t
    */
    constructor(t) {
        
        t = [...arguments];
        
        super(Object.assign(t = FLangRu.#before(t), {}));
        
        FLangRu.#deceit.apply(this, [t]);
        
    };
    
    /** @arg {any[]} t */
    static #before(t) {
        
        /** @type {YLangRuT} */
        let r = {};
        
        if (t?.length === 1 && [Object, YLangRu].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {
            
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
    /** @arg {YLangRuT} t @this {YLangRu} */
    static #deceit(t) {
        
        try {
            
            FLangRu.#verify.apply(this, [t]);
            
        } catch (e) {
            
            throw e;
            
        } finally {
            
            
            
        };
        
    };
    /** @arg {YLangRuT} t @this {YLangRu} */
    static #verify(t) {
        
        const {
            
            
            
        } = t;
        
        FLangRu.#handle.apply(this, [t]);
        
    };
    /** @arg {YLangRuT} t @this {YLangRu} */
    static #handle(t) {
        
        
        
        FLangRu.#create.apply(this, [t]);
        
    };
    /** @arg {YLangRuT} t @this {YLangRu} */
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
 * ### YLangRu
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `string\lang\ru`
 * - Цепочка `BDVHC`
 * ***
 * 
 * 
 * 
 * ***
 * 
*/
class YLangRu extends FLangRu {
    
    
    
};