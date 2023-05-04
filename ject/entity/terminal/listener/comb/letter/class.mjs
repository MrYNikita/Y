//#region YI

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

/** ### YCombLetterT
 * - Тип `T`
 * - Версия `0.0.0`
 * 
 * Основной параметр модуля `YCombLetter`.
 * 
 * @typedef {YCombLetterTE&YCombLetterTU} YCombLetterT
 * 
*/
/** ### YCombLetterTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * 
 * Параметр наследования `YCombLetter`.
 * 
 * @typedef {{[p in Exclude<keyof DCombLetter,keyof SCombLetter>|Exclude<keyof SCombLetter,keyof DCombLetter>]:(DCombLetter[p]&SCombLetter[p])}} YCombLetterTE
 * 
*/
/** ### YCombLetterTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * 
 * Уникальные параметры `YCombLetter`.
 * 
 * @typedef YCombLetterTU
 * @prop {any} _
 * 
*/

//#endregion

class SCombLetter extends YComb {
    
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
class DCombLetter extends SCombLetter {
    
    
    
};
class ICombLetter extends DCombLetter {
    
    /** @protected */
    keys = null;
    
};
class MCombLetter extends ICombLetter {
    
    
    
};
class FCombLetter extends MCombLetter {
    
    /**
     * ### YCombLetter.constructor
     * 
     * 
     * 
     * ***
     * @arg {YCombLetterT} t
    */
    constructor(t) {
        
        t = [...arguments];
        
        super(Object.assign(t = FCombLetter.#before(t), {}));
        
        FCombLetter.#deceit.apply(this, [t]);
        
    };
    
    /** @arg {any[]} t */
    static #before(t) {
        
        /** @type {YCombLetterT} */
        let r = {};
        
        if (t?.length === 1 && [Object, YCombLetter].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {
            
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
    /** @arg {YCombLetterT} t @this {YCombLetter} */
    static #deceit(t) {
        
        try {
            
            FCombLetter.#verify.apply(this, [t]);
            
        } catch (e) {
            
            throw e;
            
        } finally {
            
            
            
        };
        
    };
    /** @arg {YCombLetterT} t @this {YCombLetter} */
    static #verify(t) {
        
        const {
            
            
            
        } = t;
        
        FCombLetter.#handle.apply(this, [t]);
        
    };
    /** @arg {YCombLetterT} t @this {YCombLetter} */
    static #handle(t) {
        
        
        
        FCombLetter.#create.apply(this, [t]);
        
    };
    /** @arg {YCombLetterT} t @this {YCombLetter} */
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
 * ### YCombLetter
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
export class YCombLetter extends FCombLetter {
    
    /**
     * ### check
     * - Версия `0.0.0`
     * ***
     * 
     * Метод {@link YComb.check|проверки} клавиш на принадлежность к буквам.
     * 
     * Данная комбинация сработает для любых букв, в том числе и отличных от английских.
     * 
     * ***
     * @arg {...YKey} keys `Клавиши`
     * @public
    */
    check(...keys) {
        
        if (keys.length) {

            const key = keys.at(-1);

            if (key.name.match(/^\p{L}$/u) && !key.ctrl && !key.alt) {

                return true;

            };

        };

        return false;
        
    };
    
};