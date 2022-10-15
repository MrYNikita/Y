/**
 * @typedef TBStyle
 * @prop {any} _
 * @typedef {DStyle&TBStyle} TStyle
*/

import { jectFill } from "../../../../../ject/ject.mjs";

class SStyle {
    
    
    
};
class DStyle extends SStyle {
    
    
    
};
class FStyle extends DStyle {
    
    /**
     * 
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *  @param {TStyle} t
    */
    constructor(t = {}) {
        
        t = FStyle.#before(...arguments);
        
        super(t);
        
        FStyle.#deceit.apply(this, [t]);
        
    };
    
    /** @param {TStyle} t @this {[]} */
    static #before(t) {
        
        
        
        if (!t) t = {};
        
        return t;
        
    };
    /** @param {TStyle} t @this {YStyle} */
    static #deceit(t) {
        
        try {
            
            FStyle.#verify.apply(this, arguments);
            
        } catch (e) {
            
            throw e;
            
        };
        
    };
    /** @param {TStyle} t @this {YStyle} */
    static #verify(t) {
        
        const {
            
            
            
        } = t;
        
        FStyle.#handle.apply(this, arguments);
        
    };
    /** @param {TStyle} t @this {YStyle} */
    static #handle(t) {
        
        let {
            
            
            
        } = t;
        
        
        
        t = {
            
            ...t,
            
        };
       
        FStyle.#create.apply(this, [t]);
        
    };
    /** @param {TStyle} t @this {YStyle} */
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
export class YStyle extends FStyle {
    
    
    
};