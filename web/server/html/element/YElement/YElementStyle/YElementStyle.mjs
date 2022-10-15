/**
 * @typedef TBElementStyle
 * @prop {any} _
 * @typedef {DElementStyle&TBElementStyle&import("../YElement.mjs").TElement} TElementStyle
*/

import { YElement } from "../YElement.mjs";
import { jectFill } from "../../../../../../ject/ject.mjs";

class SElementStyle extends YElement {
    
    
    
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
        
        super(t);

        FElementStyle.#deceit.apply(this, [t]);
        
    };
    
    /** @param {TElementStyle} t @this {[]} */
    static #before(t) {
        
        if (!t) t = {};
        
        return t;
        
    };
    /** @param {TElementStyle} t @this {YElementStyle} */
    static #deceit(t) {
        
        try {
            
            FElementStyle.#verify.apply(this, arguments);
            
        } catch (e) {
            
            throw e;
            
        };
        
    };
    /** @param {TElementStyle} t @this {YElementStyle} */
    static #verify(t) {
        
        const {
            
            
            
        } = t;
        
        FElementStyle.#handle.apply(this, arguments);
        
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
       
        FElementStyle.#create.apply(this, [t]);
        
    };
    /** @param {TElementStyle} t @this {YElementStyle} */
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
export class YElementStyle extends FElementStyle {
    
    
    
};