//#region YI

import { arrayBring } from '../../../array/module.mjs';
import { YJect } from '../../../ject/class.mjs';

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

/** ### YItemT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `string\layout\item`
 * 
 * Основной параметр модуля `YItem`.
 * 
 * @typedef {YItemTE&YItemTU} YItemT
 * 
*/
/** ### YItemTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `string\layout\item`
 * 
 * Параметр наследования `YItem`.
 * 
 * @typedef {{[p in Exclude<keyof DItem,keyof SItem>|Exclude<keyof SItem,keyof DItem>]:(DItem[p]&SItem[p])}} YItemTE
 * 
*/
/** ### YItemTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `string\layout\item`
 * 
 * Уникальные параметры `YItem`.
 * 
 * @typedef YItemTU
 * @prop {any} _
 * 
*/

//#endregion

class SItem extends YJect {
    
    /** ### config
     * 
     * Конфигуратор.
     * 
     * ***
     * @public
    */
    static config = config;
    
};
class DItem extends SItem {
    
    /**
     * ### value
     * 
     * Значение.
     * 
     * *** 
     * @type {string} 
     * @public
    */
    value;
    /**
     * ### position
     * 
     * Позиция.
     * 
     * *** 
     * @type {[number, number]} 
     * @public
    */
    position = [];
    
};
class IItem extends DItem {
    
    
    
};
class MItem extends IItem {
    
    
    
};
class FItem extends MItem {
    
    /**
     * ### YItem.constructor
     * 
     * 
     * 
     * ***
     * @arg {YItemT} t
    */
    constructor(t) {
        
        t = [...arguments];
        
        super(Object.assign(t = FItem.#before(t), {}));
        
        FItem.#deceit.apply(this, [t]);
        
    };
    
    /** @arg {any[]} t */
    static #before(t) {
        
        /** @type {YItemT} */
        let r = {};
        
        if (t?.length === 1 && [Object, YItem].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {
            
            r = t[0];
            
        } else if (t?.length) {
            
            if (t[0]?._ytp) {
            
                t = [...t[0]._ytp];
            
            };
            
            switch (t.length) {
                
                case 3: 
                case 2: r.position = t.slice(1);
                case 1: r.value = t[0];
                
            };
            
            if (!Object.values(r).length) {
                
                r = { _ytp: t, };
                
            };
            
        };
        
        return r;
        
    };
    /** @arg {YItemT} t @this {YItem} */
    static #deceit(t) {
        
        try {
            
            FItem.#verify.apply(this, [t]);
            
        } catch (e) {
            
            throw e;
            
        } finally {
            
            
            
        };
        
    };
    /** @arg {YItemT} t @this {YItem} */
    static #verify(t) {
        
        const {
            
            
            
        } = t;
        
        FItem.#handle.apply(this, [t]);
        
    };
    /** @arg {YItemT} t @this {YItem} */
    static #handle(t) {
        
        
        
        FItem.#create.apply(this, [t]);
        
    };
    /** @arg {YItemT} t @this {YItem} */
    static #create(t) {
        
        const {
            
            
            
        } = t;
        
        this.adopt(t);
        
        if (config) {
            
            this.adoptDefault(config);
            
        };

        arrayBring(this.position, 2, 0);
        
    };
    
};

/**
 * ### YItem
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `string\layout\item`
 * - Цепочка `BDVHC`
 * ***
 * 
 * 
 * 
 * ***
 * 
*/
export class YItem extends FItem {
    
    
    
};