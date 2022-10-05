/**
 * @typedef TBErrorChain
 * @prop {any} _
 * @typedef {DErrorChain&TBErrorChain} TErrorChain
*/

import { jectFill } from "../../../ject/ject.mjs";

class SErrorChain extends YError {
    
    
    
};
class DErrorChain extends SErrorChain {
    
    
    
};
class FErrorChain extends DErrorChain {
    
    /**
     * 
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *  @param {TErrorChain} t
    */
    constructor(t = {}) {
        
        t = FErrorChain.#before(...arguments);
        
        super(t);
        
        FErrorChain.#deceit.apply(this, [t]);
        
    };
    
    /** @param {TErrorChain} t @this {[]} */
    static #before(t) {
        
        
        
        if (!t) t = {};
        
        return t;
        
    };
    /** @param {TErrorChain} t @this {YErrorChain} */
    static #deceit(t) {
        
        try {
            
            FErrorChain.#verify.apply(this, arguments);
            
        } catch (e) {
            
            throw e;
            
        };
        
    };
    /** @param {TErrorChain} t @this {YErrorChain} */
    static #verify(t) {
        
        const {
            
            
            
        } = t;
        
        FErrorChain.#handle.apply(this, arguments);
        
    };
    /** @param {TErrorChain} t @this {YErrorChain} */
    static #handle(t) {
        
        let {
            
            
            
        } = t;
        
        
        
        t = {
            
            ...t,
            
        };
       
        FErrorChain.#create.apply(this, [t]);
        
    };
    /** @param {TErrorChain} t @this {YErrorChain} */
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
export class YErrorChain extends FErrorChain {
    
    
    
};

/**
 * @file YErrorChain.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @copyright Yakhin Nikita Artemovich 2022
*/