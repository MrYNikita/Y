import { jectFill } from "../../../../../ject/ject.mjs";

/**
 * @typedef TBStyle
 * @prop {any} _
 * @typedef {DStyle&TBStyle} TStyle
*/

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
        
        FStyle.#deceit(t);
        
        super(t);
        
        FStyle.#create.apply(this, [t]);
        
    };
    
    /** @param {TStyle} t @this {[]} */
    static #before(t) {
        
        
        
        if (!t) t = {};
        
        return t;
        
    };
    /** @param {TStyle} t @this {YStyle} */
    static #deceit(t) {
        
        try {
            
            FStyle.#verify(t);
            
        } catch (e) {
            
            throw e;
            
        };
        
    };
    /** @param {TStyle} t @this {YStyle} */
    static #verify(t) {
        
        const {
            
            
            
        } = t;
        
        FStyle.#handle(t);
        
    };
    /** @param {TStyle} t @this {YStyle} */
    static #handle(t) {
        
        let {
            
            
            
        } = t;
        
        
        
        t = {
            
            ...t,
            
        };
        
    };
    /** @param {TStyle} t @this {YStyle} */
    static #create(t) {
        
        const {
            
            
            
        } = t;
        
        jectFill(this, t);
        
        
        
    };
    
};

/**
 *
 * - Тип `SDFY-2.0`
 * - Версия `0.0.0`
 * - Цепочка `BDVHC`
*/
class YStyle extends FStyle {
    
    
    
};