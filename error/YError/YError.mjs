/**
 * @typedef TBError
 * @prop {any} _ 
 * @typedef {DError&TBError} TError
*/

import { jectFill } from "../../ject/ject.mjs";

class SError extends Error {
    
    
    
};
class DError extends SError {
    
    
    
};
class FError extends DError {
    
    /**
     * 
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *  @param {TError} t
    */
    constructor(t = {}) {
        
        t = FError.#before(...arguments);
        
        super(t.message);
        
        FError.#deceit.apply(this, [t]);
        
    };
    
    /** @param {TError} t @this {[]} */
    static #before(t) {
        
        if (t[0].constructor === String) t = { message: t };
        
        if (!t) t = {};

        return t;
        
    };
    /** @param {TError} t @this {YError} */
    static #deceit(t) {
        
        try {
            
            FError.#verify.apply(this, arguments);
            
        } catch (e) {
            
            throw e;
            
        };
        
    };
    /** @param {TError} t @this {YError} */
    static #verify(t) {
        
        const {
            
            
            
        } = t;
        
        FError.#handle.apply(this, arguments);
        
    };
    /** @param {TError} t @this {YError} */
    static #handle(t) {
        
        let {
            
            
            
        } = t;
        
        
        
        t = {
            
            ...t,
            
        };
       
        FError.#create.apply(this, [t]);
        
    };
    /** @param {TError} t @this {YError} */
    static #create(t) {
        
        const {
            
            
            
        } = t;
        
        jectFill.apply(this, [t]);
        
        
        
    };
    
};

/**
 *
 * - Тип `SDFY`
 * - Версия `0.0.0`
 * - Цепочка `BDVHC`
*/
export class YError extends FError {
    
    
    
};

/**
 * @file YError.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @copyright Yakhin Nikita Artemovich 2022
*/