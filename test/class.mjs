//#region YI

import { YJect } from '../ject/class.mjs';

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

/** ### YTestT
 * - Тип `T`
 * - Версия `0.0.0`
 * 
 * Основной параметр модуля `YTest`.
 * 
 * @typedef {YTestTE&YTestTU} YTestT
 * 
*/
/** ### YTestTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * 
 * Параметр наследования `YTest`.
 * 
 * @typedef {{[p in Exclude<keyof DTest,keyof STest>|Exclude<keyof STest,keyof DTest>]:(DTest[p]&STest[p])}} YTestTE
 * 
*/
/** ### YTestTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * 
 * Уникальные параметры `YTest`.
 * 
 * @typedef YTestTU
 * @prop {any} _
 * 
*/

//#endregion

class STest extends YJect {
    
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
class DTest extends STest {
    
    prop = 0;
    
};
class ITest extends DTest {
    
    
    
};
class MTest extends ITest {
    
    
    
};
class FTest extends MTest {
    
    /**
     * ### YTest.constructor
     * 
     * 
     * 
     * ***
     * @arg {YTestT} t
    */
    constructor(t) {
        
        t = [...arguments];
        
        super(Object.assign(t = FTest.#before(t), {}));
        
        FTest.#deceit.apply(this, [t]);
        
        return this.correlate();
        
    };
    
    /** @arg {any[]} t */
    static #before(t) {
        
        /** @type {YTestT} */
        let r = {};
        
        if (t?.length === 1 && [Object, YTest].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {
            
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
    /** @arg {YTestT} t @this {YTest} */
    static #deceit(t) {
        
        try {
            
            FTest.#verify.apply(this, [t]);
            
        } catch (e) {
            
            throw e;
            
        } finally {
            
            
            
        };
        
    };
    /** @arg {YTestT} t @this {YTest} */
    static #verify(t) {
        
        const {
            
            
            
        } = t;
        
        FTest.#handle.apply(this, [t]);
        
    };
    /** @arg {YTestT} t @this {YTest} */
    static #handle(t) {
        
        
        
        FTest.#create.apply(this, [t]);
        
    };
    /** @arg {YTestT} t @this {YTest} */
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
 * ### YTest
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
export class YTest extends FTest {
    
    
    
};