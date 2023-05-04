//#region YI

import { condIsNumber } from '../../../../../../bool/cond/module.mjs';
import { YKey } from '../../key/class.mjs';
import { YComb } from '../class.mjs';

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

/** ### YCombDigitT
 * - Тип `T`
 * - Версия `0.0.0`
 * 
 * Основной параметр модуля `YCombDigit`.
 * 
 * @typedef {YCombDigitTE&YCombDigitTU} YCombDigitT
 * 
*/
/** ### YCombDigitTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * 
 * Параметр наследования `YCombDigit`.
 * 
 * @typedef {{[p in Exclude<keyof DCombDigit,keyof SCombDigit>|Exclude<keyof SCombDigit,keyof DCombDigit>]:(DCombDigit[p]&SCombDigit[p])}} YCombDigitTE
 * 
*/
/** ### YCombDigitTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * 
 * Уникальные параметры `YCombDigit`.
 * 
 * @typedef YCombDigitTU
 * @prop {any} _
 * 
*/

//#endregion

class SCombDigit extends YComb {
    
    /**
     * ### config
     * 
     * Конфигуратор.
     * 
     * ***
     * @public
    */
    static config = config;
    
};
class DCombDigit extends SCombDigit {
    
};
class ICombDigit extends DCombDigit {
    
    /** @protected */
    keys = null;
    
};
class MCombDigit extends ICombDigit {
    
    
    
};
class FCombDigit extends MCombDigit {
    
    /**
     * ### YCombDigit.constructor
     * 
     * 
     * 
     * ***
     * @arg {YCombDigitT} t
    */
    constructor(t) {
        
        t = [...arguments];
        
        super(Object.assign(t = FCombDigit.#before(t), {}));
        
        FCombDigit.#deceit.apply(this, [t]);
        
    };
    
    /** @arg {any[]} t */
    static #before(t) {
        
        /** @type {YCombDigitT} */
        let r = {};
        
        if (t?.length === 1 && [Object, YCombDigit].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {
            
            r = t[0];
            
        } else if (t?.length) {
            
            if (t[0]?._ytp) {
            
                t = [...t[0]._ytp];
            
            };
            
            switch (t.length) {
                
                default: r.funcs = t.slice(1);
                case 1: r.response = t[0];
                
            };
            
            if (!Object.values(r).length) {
                
                r = { _ytp: t, };
                
            };
            
        };
        
        return r;
        
    };
    /** @arg {YCombDigitT} t @this {YCombDigit} */
    static #deceit(t) {
        
        try {
            
            FCombDigit.#verify.apply(this, [t]);
            
        } catch (e) {
            
            throw e;
            
        } finally {
            
            
            
        };
        
    };
    /** @arg {YCombDigitT} t @this {YCombDigit} */
    static #verify(t) {
        
        const {
            
            
            
        } = t;
        
        FCombDigit.#handle.apply(this, [t]);
        
    };
    /** @arg {YCombDigitT} t @this {YCombDigit} */
    static #handle(t) {
        
        
        
        FCombDigit.#create.apply(this, [t]);
        
    };
    /** @arg {YCombDigitT} t @this {YCombDigit} */
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
 * ### YCombDigit
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Цепочка `BDVHC`
 * ***
 * 
 * 
 * 
 * ***
 * 
*/
export class YCombDigit extends FCombDigit {
    
    /**
     * ### check
     * - Версия `0.0.0`
     * ***
     * 
     * Метод {@link YComb.check|проверки} клавиш на принадлежность к числам.
     * 
     * Данная комбинация сработает для чисел от 0 до 9.
     * 
     * ***
     * @arg {...YKey} keys `Клавиши`
     * @public
    */
    check(...keys) {
        
        if (keys.length) {

            const key = keys.at(-1);

            if (key.name.match(/^\d$/) && !key.ctrl && !key.alt) {

                return true;

            };

        };

        return false;
        
    };
    
};