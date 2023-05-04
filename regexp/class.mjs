//#region YI

import { condIsStringValid } from '../bool/cond/module.mjs';
import { YJect } from '../ject/class.mjs';

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

/** ### YRegExpT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `regexp`
 * 
 * Основной параметр модуля `YRegExp`.
 * 
 * @typedef {YRegExpTE&YRegExpTU} YRegExpT
 * 
*/
/** ### YRegExpTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `regexp`
 * 
 * Параметр наследования `YRegExp`.
 * 
 * @typedef {{[p in Exclude<keyof DRegExp,keyof SRegExp>|Exclude<keyof SRegExp,keyof DRegExp>]:(DRegExp[p]&SRegExp[p])}} YRegExpTE
 * 
*/
/** ### YRegExpTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `regexp`
 * 
 * Уникальные параметры `YRegExp`.
 * 
 * @typedef YRegExpTU
 * @prop {any} _
 * 
*/

//#endregion

class SRegExp extends YJect {
    
    /**
     * ### correctFlags
     * - Версия `0.0.0`
     * - Модуль `regexp`
     * ***
     * 
     * Метод корректировки флагов.
     * 
     * ***
     * @arg {string} flags `Флаги`
     * @public
    */
    static correctFlags(flags) {

        if (condIsStringValid(flags)) {

            

        };

        return flags;
        
    };
    
};
class DRegExp extends SRegExp {
    
    
    
};
class IRegExp extends DRegExp {
    
    
    
};
class MRegExp extends IRegExp {
    
    
    
};
class FRegExp extends MRegExp {
    
    /**
     * ### YRegExp.constructor
     * 
     * 
     * 
     * ***
     * @arg {YRegExpT} t
    */
    constructor(t) {
        
        t = [...arguments];
        
        super(Object.assign(t = FRegExp.#before(t), {}));
        
        FRegExp.#deceit.apply(this, [t]);
        
    };
    
    /** @arg {any[]} t */
    static #before(t) {
        
        /** @type {YRegExpT} */
        let r = {};
        
        if (t?.length === 1 && [Object, YRegExp].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {
            
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
    /** @arg {YRegExpT} t @this {YRegExp} */
    static #deceit(t) {
        
        try {
            
            FRegExp.#verify.apply(this, [t]);
            
        } catch (e) {
            
            throw e;
            
        } finally {
            
            
            
        };
        
    };
    /** @arg {YRegExpT} t @this {YRegExp} */
    static #verify(t) {
        
        const {
            
            
            
        } = t;
        
        FRegExp.#handle.apply(this, [t]);
        
    };
    /** @arg {YRegExpT} t @this {YRegExp} */
    static #handle(t) {
        
        
        
        FRegExp.#create.apply(this, [t]);
        
    };
    /** @arg {YRegExpT} t @this {YRegExp} */
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
 * ### YRegExp
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `regexp`
 * - Цепочка `BDVHC`
 * ***
 * 
 * 
 * 
 * ***
 * 
*/
export class YRegExp extends FRegExp {
    
    
    
};