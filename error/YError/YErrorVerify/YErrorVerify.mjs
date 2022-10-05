/**
 * @typedef TBErrorVerify
 * @prop {any} _
 * @typedef {DErrorVerify&TBErrorVerify} TErrorVerify
*/

import { jectFill } from "../../../ject/ject.mjs";

class SErrorVerify {
    
    
    
};
class DErrorVerify extends SErrorVerify {
    
    
    
};
class FErrorVerify extends DErrorVerify {
    
    /**
     * 
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *  @param {TErrorVerify} t
    */
    constructor(t = {}) {
        
        t = FErrorVerify.#before(...arguments);
        
        super(t.message);
        
        FErrorVerify.#deceit.apply(this, [t]);
        
    };
    
    /** @param {TErrorVerify} t @this {[]} */
    static #before(t) {
        
        if (t.constructor === String) t = { message: t, };
        
        if (!t) t = {};
        
        return t;
        
    };
    /** @param {TErrorVerify} t @this {YErrorVerify} */
    static #deceit(t) {
        
        try {
            
            FErrorVerify.#verify.apply(this, arguments);
            
        } catch (e) {
            
            throw e;
            
        };
        
    };
    /** @param {TErrorVerify} t @this {YErrorVerify} */
    static #verify(t) {
        
        const {
            
            
            
        } = t;
        
        FErrorVerify.#handle.apply(this, arguments);
        
    };
    /** @param {TErrorVerify} t @this {YErrorVerify} */
    static #handle(t) {
        
        let {
            
            
            
        } = t;
        
        
        
        t = {
            
            ...t,
            
        };
       
        FErrorVerify.#create.apply(this, [t]);
        
    };
    /** @param {TErrorVerify} t @this {YErrorVerify} */
    static #create(t) {
        
        const {
            
            
            
        } = t;
        
        jectFill.apply(this, [t]);
        
        
        
    };
    
};

/**
 * Класс проверочных ошибок.
 * 
 * Причина возникновения данных ошибок - проваленная проверка.
 * - Тип `SDFY`
 * - Версия `0.0.0`
 * - Цепочка `BDVHC`
*/
export class YErrorVerify extends FErrorVerify {
    
    
    
};

/**
 * @file YErrorVerify.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @copyright Yakhin Nikita Artemovich 2022
*/