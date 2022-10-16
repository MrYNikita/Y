/**
 * @typedef TBElement
 * @prop {string} id
 * @prop {string} type
 * @prop {[string]} classes
 * @prop {[string]} overId
 * @prop {[string]} overTypes
 * @prop {[string]} overClasses
 * @typedef {DElement&TBElement} TElement
*/

import { jectFill } from "../../../../../ject/ject.mjs";
import { elementCreate, elementCreateByString } from "../element.mjs";

class SElement {
    
    
    
};
class DElement extends SElement {
    
    /**
     * Привязанный элемент.
     * @type {HTMLElement}
    */
    element;
    
};
class FElement extends DElement {
    
    /**
     * 
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *  @param {TElement} t
    */
    constructor(t = {}) {
        
        t = FElement.#before(...arguments);
        
        super(t);
        
        FElement.#deceit.apply(this, [t]);
        
    };
    
    /** @param {TElement} t @this {[]} */
    static #before(t) {
        
        if (t.constructor === String) t = { string: t, };
        if (!t) t = {};
        
        return t;
        
    };
    /** @param {TElement} t @this {YElement} */
    static #deceit(t) {
        
        try {
            
            FElement.#verify.apply(this, arguments);
            
        } catch (e) {
            
            throw e;
            
        };
        
    };
    /** @param {TElement} t @this {YElement} */
    static #verify(t) {
        
        const {
            
            
            
        } = t;
        
        FElement.#handle.apply(this, arguments);
        
    };
    /** @param {TElement} t @this {YElement} */
    static #handle(t) {
        
        let {
            
            
            
        } = t;
        
        
        
        t = {
            
            ...t,
            
        };
       
        FElement.#create.apply(this, [t]);
        
    };
    /** @param {TElement} t @this {YElement} */
    static #create(t) {
        
        const {
            
            
            
        } = t;
        
        jectFill.apply(this, [t]);
        
        this.element = (t.string) ? elementCreateByString(t.string) : elementCreate(

            t.type,
            t.id,
            t.classes,
            t.overId,
            t.overTypes,
            t.overClasses,

        ); 
        
    };
    
};

/**
 *
 * - Тип `SDFY`
 * - Версия `0.0.0`
 * - Цепочка `BDVHC`
*/
export class YElement extends FElement {
    
    
    
};