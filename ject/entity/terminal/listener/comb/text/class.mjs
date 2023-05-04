//#region YI

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

/** ### YCombTextT
 * - Тип `T`
 * - Версия `0.0.0`
 * 
 * Основной параметр модуля `YCombText`.
 * 
 * @typedef {YCombTextTE&YCombTextTU} YCombTextT
 * 
*/
/** ### YCombTextTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * 
 * Параметр наследования `YCombText`.
 * 
 * @typedef {{[p in Exclude<keyof DCombText,keyof SCombText>|Exclude<keyof SCombText,keyof DCombText>]:(DCombText[p]&SCombText[p])}} YCombTextTE
 * 
*/
/** ### YCombTextTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * 
 * Уникальные параметры `YCombText`.
 * 
 * @typedef YCombTextTU
 * @prop {any} _
 * 
*/

//#endregion

class SCombText extends YComb {
    
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
class DCombText extends SCombText {
    
    
    
};
class ICombText extends DCombText {
    
    /** @protected */
    keys = null;
    
};
class MCombText extends ICombText {
    
    
    
};
class FCombText extends MCombText {
    
    /**
     * ### YCombText.constructor
     * 
     * 
     * 
     * ***
     * @arg {YCombTextT} t
    */
    constructor(t) {
        
        t = [...arguments];
        
        super(Object.assign(t = FCombText.#before(t), {}));
        
        FCombText.#deceit.apply(this, [t]);
        
    };
    
    /** @arg {any[]} t */
    static #before(t) {
        
        /** @type {YCombTextT} */
        let r = {};
        
        if (t?.length === 1 && [Object, YCombText].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {
            
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
    /** @arg {YCombTextT} t @this {YCombText} */
    static #deceit(t) {
        
        try {
            
            FCombText.#verify.apply(this, [t]);
            
        } catch (e) {
            
            throw e;
            
        } finally {
            
            
            
        };
        
    };
    /** @arg {YCombTextT} t @this {YCombText} */
    static #verify(t) {
        
        const {
            
            
            
        } = t;
        
        FCombText.#handle.apply(this, [t]);
        
    };
    /** @arg {YCombTextT} t @this {YCombText} */
    static #handle(t) {
        
        
        
        FCombText.#create.apply(this, [t]);
        
    };
    /** @arg {YCombTextT} t @this {YCombText} */
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
 * ### YCombText
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
export class YCombText extends FCombText {
    
    /**
     * ### check
     * - Версия `0.0.0`
     * ***
     * 
     * Метод {@link YComb.check|проверки} клавиш на принадлежность к тексту.
     * 
     * Данная комбинация сработает для любых букв, цифр и знаков, в том числе и знаков переноса строки.
     * 
     * ***
     * @arg {...YKey} keys `Клавиши`
     * @public
    */
    check(...keys) {
        
        if (keys.length) {

            const key = keys.at(-1);

            if (key.code.match(/^(\p{L}|\p{N}|\p{P}|\p{M}|\p{S}|\p{C}| )$/u) && !key.ctrl && !key.alt) {

                return true;

            };

        };

        return false;
        
    };
    
};