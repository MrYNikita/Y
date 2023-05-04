//#region YI

import { YMany } from '../class.mjs';

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

/** ### YListT
 * - Тип `T`
 * - Версия `0.0.0`
 * 
 * Основной параметр модуля `YList`.
 * 
 * @typedef {YListTE&YListTU} YListT
 * 
*/
/** ### YListTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * 
 * Параметр наследования `YList`.
 * 
 * @typedef {{[p in Exclude<keyof DList,keyof SList>|Exclude<keyof SList,keyof DList>]:(DList[p]&SList[p])}} YListTE
 * 
*/
/** ### YListTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * 
 * Уникальные параметры `YList`.
 * 
 * @typedef YListTU
 * @prop {any} _
 * 
*/

//#endregion

class SList extends YMany {
    
    /**
     * ### config
     * 
     * Конфигуратор.
     * 
     * ***
     * @public
    */
    static config = config;
    
};
class DList extends SList {
    
    
    
};
class IList extends DList {
    
    /**
     * ### index
     * 
     * Индекс активного пункта.
     * 
     * *** 
     * @type {number} 
     * @public
    */
    index = 0;
    
};
class MList extends IList {
    
    
    
};
class FList extends MList {
    
    /**
     * ### YList.constructor
     * 
     * 
     * 
     * ***
     * @arg {YListT} t
    */
    constructor(t) {
        
        t = [...arguments];
        
        super(Object.assign(t = FList.#before(t), {}));
        
        FList.#deceit.apply(this, [t]);
        
    };
    
    /** @arg {any[]} t */
    static #before(t) {
        
        /** @type {YListT} */
        let r = {};
        
        if (t?.length === 1 && [Object, YList].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {
            
            r = t[0];
            
        } else if (t?.length) {
            
            if (t[0]?._ytp) {
            
                t = [...t[0]._ytp];
            
            };
            
            switch (t.length) {
                
                case 3: 
                case 2: 
                case 1: 
                
            };
            
            if (!Object.values(r).length) {
                
                r = { _ytp: t, };
                
            };
            
        };
        
        return r;
        
    };
    /** @arg {YListT} t @this {YList} */
    static #deceit(t) {
        
        try {
            
            FList.#verify.apply(this, [t]);
            
        } catch (e) {
            
            throw e;
            
        } finally {
            
            
            
        };
        
    };
    /** @arg {YListT} t @this {YList} */
    static #verify(t) {
        
        const {
            
            
            
        } = t;
        
        FList.#handle.apply(this, [t]);
        
    };
    /** @arg {YListT} t @this {YList} */
    static #handle(t) {
        
        
        
        FList.#create.apply(this, [t]);
        
    };
    /** @arg {YListT} t @this {YList} */
    static #create(t) {
        
        const {
            
            
            
        } = t;
        
        this.adopt(t);
        
        if (config) {
            
            this.adoptDefault(config);
            
        };
        
    };
    
};

/**
 * ### YList
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Цепочка `BDVHC`
 * ***
 * 
 * 
 * 
 * ***
 * 
*/
export class YList extends FList {
    
    
    
};