import { jectFill } from "../../../ject/ject.mjs";
import { YString } from "../YString.mjs";

/**
 * @typedef TBTemplate
 * @prop {any} _
 * @typedef {DTemplate&TBTemplate} TTemplate
*/

class STemplate {
    
    
    
};
class DTemplate extends STemplate {
    
    /**
     * Метка.
     * @type {string}
    */
    label = '';
    /**
     * Шаблон.
     * @type {string|YString}
    */
    value = '';
    
};
class FTemplate extends DTemplate {
    
    /**
     * 
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *  @param {TTemplate} t
    */
    constructor(t = {}) {
        
        t = FTemplate.#before(...arguments);
        
        FTemplate.#deceit(t);
        
        super(t);
        
        FTemplate.#create.apply(this, [t]);
        
    };
    
    /** @param {[TTemplate]} t */
    static #before(...t) {
        
        if (t.length === 1 && t[0].constructor === Object) {

            return t[0];

        } else if (t.length > 1) {

            return {

                label: t[0],
                value: t[1],

            };

        } else return {};
        
    };
    /** @param {TTemplate} t @this {YTemplate} */
    static #deceit(t) {
        
        try {
            
            FTemplate.#verify(t);
            
        } catch (e) {
            
            throw e;
            
        };
        
    };
    /** @param {TTemplate} t @this {YTemplate} */
    static #verify(t) {
        
        const {
            
            
            
        } = t;
        
        FTemplate.#handle(t);
        
    };
    /** @param {TTemplate} t @this {YTemplate} */
    static #handle(t) {
        
        let {
            
            
            
        } = t;
        
        
        
        t = {
            
            ...t,
            
        };
        
    };
    /** @param {TTemplate} t @this {YTemplate} */
    static #create(t) {
        
        const {
            
            
            
        } = t;
        
        jectFill(this, t);
        
        
        
    };
    
};

/**
 * Класс `строковых шаблонов`.
 * 
 * Шаблоны используются для размещения в `YString` заготовленных строк без применения правил добавления.
 * Также они позволяют формировать строку, заполняя поля шаблона пользовательскими данными.
 * В качестве шаблона может выступать как готовая строка, так и `YString` строка.
 * - Тип `SDFY-2.0`
 * - Версия `0.0.0`
 * - Цепочка `BDVHC`
*/
export class YTemplate extends FTemplate {
    
    
    
};