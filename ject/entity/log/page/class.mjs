//#region YI

import { YJect } from '../../../class.mjs';
import { YLog } from '../class.mjs';
import { YRecord } from '../record/class.mjs';

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

/** ### YPageT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `ject\entity\log\page`
 * 
 * Основной параметр модуля `YPage`.
 * 
 * @typedef {YPageTE&YPageTU} YPageT
 * 
*/
/** ### YPageTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `ject\entity\log\page`
 * 
 * Параметр наследования `YPage`.
 * 
 * @typedef {{[p in Exclude<keyof DPage,keyof SPage>|Exclude<keyof SPage,keyof DPage>]:(DPage[p]&SPage[p])}} YPageTE
 * 
*/
/** ### YPageTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `ject\entity\log\page`
 * 
 * Уникальные параметры `YPage`.
 * 
 * @typedef YPageTU
 * @prop {any} _
 * 
*/

//#endregion

class SPage extends YJect {
    
    
    
};
class DPage extends SPage {
    
    /**
     * ### size
     * 
     * Размер.
     * 
     * *** 
     * @type {number} 
     * @public
    */
    size;
    
};
class IPage extends DPage {
    
    /**
     * ### log
     * 
     * Журнал.
     * 
     * *** 
     * @type {YLog?} 
     * @protected
    */
    log = null;
    /**
     * ### records
     * 
     * Записи.
     * 
     * *** 
     * @type {YRecord[]} 
     * @public
    */
    records = [];
    
};
class MPage extends IPage {
    
    
    
};
class FPage extends MPage {
    
    /**
     * ### YPage.constructor
     * 
     * 
     * 
     * ***
     * @arg {YPageT} t
    */
    constructor(t) {
        
        t = [...arguments];
        
        super(Object.assign(t = FPage.#before(t), {}));
        
        FPage.#deceit.apply(this, [t]);
        
    };
    
    /** @arg {any[]} t */
    static #before(t) {
        
        /** @type {YPageT} */
        let r = {};
        
        if (t?.length === 1 && [Object, YPage].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {
            
            r = t[0];
            
        } else if (t?.length) {
            
            if (t[0]?._ytp) {
            
                t = [...t[0]._ytp];
            
            };
            
            switch (t.length) {
                
                case 3: 
                case 2: r.size = t[1];
                case 1: r.log = t[0];
                
            };
            
            if (!Object.values(r).length) {
                
                r = { _ytp: t, };
                
            };
            
        };
        
        return r;
        
    };
    /** @arg {YPageT} t @this {YPage} */
    static #deceit(t) {
        
        try {
            
            FPage.#verify.apply(this, [t]);
            
        } catch (e) {
            
            throw e;
            
        } finally {
            
            
            
        };
        
    };
    /** @arg {YPageT} t @this {YPage} */
    static #verify(t) {
        
        const {
            
            
            
        } = t;
        
        FPage.#handle.apply(this, [t]);
        
    };
    /** @arg {YPageT} t @this {YPage} */
    static #handle(t) {
        
        
        
        FPage.#create.apply(this, [t]);
        
    };
    /** @arg {YPageT} t @this {YPage} */
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
 * ### YPage
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `ject\entity\log\page`
 * - Цепочка `BDVHC`
 * ***
 * 
 * 
 * 
 * ***
 * 
*/
export class YPage extends FPage {
    
    
    
};