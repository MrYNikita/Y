//#region YI

import { YInput } from '../class.mjs';

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

/** ### YCLIT
 * - Тип `T`
 * - Версия `0.0.0`
 * 
 * Основной параметр модуля `YCLI`.
 * 
 * @typedef {YCLITE&YCLITU} YCLIT
 * 
*/
/** ### YCLITE
 * - Тип `TE`
 * - Версия `0.0.0`
 * 
 * Параметр наследования `YCLI`.
 * 
 * @typedef {{[p in Exclude<keyof DCLI,keyof SCLI>|Exclude<keyof SCLI,keyof DCLI>]:(DCLI[p]&SCLI[p])}} YCLITE
 * 
*/
/** ### YCLITU
 * - Тип `TU`
 * - Версия `0.0.0`
 * 
 * Уникальные параметры `YCLI`.
 * 
 * @typedef YCLITU
 * @prop {any} _
 * 
*/

//#endregion

class SCLI extends YInput {
    
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
class DCLI extends SCLI {
    
    title = 'CLI';
    
};
class ICLI extends DCLI {
    
    transfer = true;
    
};
class MCLI extends ICLI {
    
    /**
     * @arg {YCLI} t
     * @protected
    */
    func = (t) => {

        console.log(t);

    };
    
};
class FCLI extends MCLI {
    
    /**
     * ### YCLI.constructor
     * 
     * 
     * 
     * ***
     * @arg {YCLIT} t
    */
    constructor(t) {
        
        t = [...arguments];
        
        super(Object.assign(t = FCLI.#before(t), {}));
        
        FCLI.#deceit.apply(this, [t]);
        
    };
    
    /** @arg {any[]} t */
    static #before(t) {
        
        /** @type {YCLIT} */
        let r = {};
        
        if (t?.length === 1 && [Object, YCLI].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {
            
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
    /** @arg {YCLIT} t @this {YCLI} */
    static #deceit(t) {
        
        try {
            
            FCLI.#verify.apply(this, [t]);
            
        } catch (e) {
            
            throw e;
            
        } finally {
            
            
            
        };
        
    };
    /** @arg {YCLIT} t @this {YCLI} */
    static #verify(t) {
        
        const {
            
            
            
        } = t;
        
        FCLI.#handle.apply(this, [t]);
        
    };
    /** @arg {YCLIT} t @this {YCLI} */
    static #handle(t) {
        
        
        
        FCLI.#create.apply(this, [t]);
        
    };
    /** @arg {YCLIT} t @this {YCLI} */
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
 * ### YCLI
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
export class YCLI extends FCLI {
    
    
    
};