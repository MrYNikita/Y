//#region YI

import { YJect } from '../../ject/class.mjs';

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

/** ### YLangT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `string\lang`
 * 
 * Основной параметр модуля `YLang`.
 * 
 * @typedef {YLangTE&YLangTU} YLangT
 * 
*/
/** ### YLangTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `string\lang`
 * 
 * Параметр наследования `YLang`.
 * 
 * @typedef {{[p in Exclude<keyof DLang,keyof SLang>|Exclude<keyof SLang,keyof DLang>]:(DLang[p]&SLang[p])}} YLangTE
 * 
*/
/** ### YLangTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `string\lang`
 * 
 * Уникальные параметры `YLang`.
 * 
 * @typedef YLangTU
 * @prop {any} _
 * 
*/

//#endregion

class SLang extends YJect {
    
    /** ### config
     * 
     * Конфигуратор.
     * 
     * ***
     * @public
    */
    static config = config;
    
};
class DLang extends SLang {
    
    
    
};
class ILang extends DLang {
    
    
    
};
class MLang extends ILang {
    
    
    
};
class FLang extends MLang {
    
    /**
     * ### YLang.constructor
     * 
     * 
     * 
     * ***
     * @arg {YLangT} t
    */
    constructor(t) {
        
        t = [...arguments];
        
        super(Object.assign(t = FLang.#before(t), {}));
        
        FLang.#deceit.apply(this, [t]);
        
    };
    
    /** @arg {any[]} t */
    static #before(t) {
        
        /** @type {YLangT} */
        let r = {};
        
        if (t?.length === 1 && [Object, YLang].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {
            
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
    /** @arg {YLangT} t @this {YLang} */
    static #deceit(t) {
        
        try {
            
            FLang.#verify.apply(this, [t]);
            
        } catch (e) {
            
            throw e;
            
        } finally {
            
            
            
        };
        
    };
    /** @arg {YLangT} t @this {YLang} */
    static #verify(t) {
        
        const {
            
            
            
        } = t;
        
        FLang.#handle.apply(this, [t]);
        
    };
    /** @arg {YLangT} t @this {YLang} */
    static #handle(t) {
        
        
        
        FLang.#create.apply(this, [t]);
        
    };
    /** @arg {YLangT} t @this {YLang} */
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
 * ### YLang
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `string\lang`
 * - Цепочка `BDVHC`
 * ***
 * 
 * Класс языковых пакетов.
 * 
 * ***
 * 
*/
export class YLang extends FLang {
    
    
    
};