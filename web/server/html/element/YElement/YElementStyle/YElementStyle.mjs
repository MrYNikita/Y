import { YElement } from "../YElement.mjs";
import { jectFill } from "../../../../../../ject/ject.mjs";

/**
 * @typedef TBElementStyle
 * @prop {any} _
 * @typedef {DElementStyle&TBElementStyle&import("../YElement.mjs").TElement} TElementStyle
*/

class SElementStyle {
    
    
    
};
class DElementStyle extends SElementStyle {
    
    
    
};
class FElementStyle extends DElementStyle {
    
    /**
     * 
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *  @param {TElementStyle} t
    */
    constructor(t = {}) {
        
        t = FElementStyle.#before(...arguments);
        
        FElementStyle.#deceit(t);
        
        super(t);
        
        FElementStyle.#create.apply(this, [t]);
        
    };
    
    /** @param {TElementStyle} t @this {[]} */
    static #before(t) {
        
        
        
        if (!t) t = {};
        
        return t;
        
    };
    /** @param {TElementStyle} t @this {YElementStyle} */
    static #deceit(t) {
        
        try {
            
            FElementStyle.#verify(t);
            
        } catch (e) {
            
            throw e;
            
        };
        
    };
    /** @param {TElementStyle} t @this {YElementStyle} */
    static #verify(t) {
        
        const {
            
            
            
        } = t;
        
        FElementStyle.#handle(t);
        
    };
    /** @param {TElementStyle} t @this {YElementStyle} */
    static #handle(t) {
        
        let {
            
            
            
        } = t;
        
        t.type = 'style';
        t.overTypes = ['head'];
        
        t = {
            
            ...t,
            
        };
        
    };
    /** @param {TElementStyle} t @this {YElementStyle} */
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
export class YElementStyle extends FElementStyle {
    
    
    
};