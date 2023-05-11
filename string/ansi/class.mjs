//#region YI

import { YJect } from '../../ject/class.mjs';
import { ansiGetColorCode } from './module.mjs';

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

/** ### YANSIT
 * - Тип `T`
 * - Версия `0.0.0`
 * 
 * Основной параметр модуля `YANSI`.
 * 
 * @typedef {YANSITE&YANSITU} YANSIT
 * 
*/
/** ### YANSITE
 * - Тип `TE`
 * - Версия `0.0.0`
 * 
 * Параметр наследования `YANSI`.
 * 
 * @typedef {{[p in Exclude<keyof DANSI,keyof SANSI>|Exclude<keyof SANSI,keyof DANSI>]:(DANSI[p]&SANSI[p])}} YANSITE
 * 
*/
/** ### YANSITU
 * - Тип `TU`
 * - Версия `0.0.0`
 * 
 * Уникальные параметры `YANSI`.
 * 
 * @typedef YANSITU
 * @prop {any} _
 * 
*/

//#endregion

class SANSI extends YJect {
    
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
class DANSI extends SANSI {
    
    /**
     * ### underline
     * 
     * Линия подчеркивания.
     * 
     * *** 
     * @type {boolean} 
     * @public
    */
    underline;
    /**
     * ### foreground
     * 
     * Цвет символов.
     * 
     * *** 
     * @type {} 
     * @public
    */
    foreground;
    /**
     * ### background
     * 
     * Цвет фона.
     * 
     * *** 
     * @type {} 
     * @public
    */
    background;
    
};
class IANSI extends DANSI {
    
    
    
};
class MANSI extends IANSI {
    
    
    
};
class FANSI extends MANSI {
    
    /**
     * ### YANSI.constructor
     * 
     * 
     * 
     * ***
     * @arg {YANSIT} t
    */
    constructor(t) {
        
        t = [...arguments];
        
        super(Object.assign(t = FANSI.#before(t), {}));
        
        FANSI.#deceit.apply(this, [t]);
        
        return this.correlate();
        
    };
    
    /** @arg {any[]} t */
    static #before(t) {
        
        /** @type {YANSIT} */
        let r = {};
        
        if (t?.length === 1 && [Object, YANSI].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {
            
            r = t[0];
            
        } else if (t?.length) {
            
            if (t[0]?._ytp) {
            
                t = [...t[0]._ytp];
            
            };
            
            switch (t.length) {
                
                case 3: r.underline = t[2];
                case 2: r.background = t[1];
                case 1: r.foreground = t[0];
                
            };
            
            if (!Object.values(r).length) {
                
                r = { _ytp: t, };
                
            };
            
        };
        
        return r;
        
    };
    /** @arg {YANSIT} t @this {YANSI} */
    static #deceit(t) {
        
        try {
            
            FANSI.#verify.apply(this, [t]);
            
        } catch (e) {
            
            throw e;
            
        } finally {
            
            
            
        };
        
    };
    /** @arg {YANSIT} t @this {YANSI} */
    static #verify(t) {
        
        const {
            
            
            
        } = t;
        
        FANSI.#handle.apply(this, [t]);
        
    };
    /** @arg {YANSIT} t @this {YANSI} */
    static #handle(t) {
        
        t.underline = t.underline ? true : false;
        
        FANSI.#create.apply(this, [t]);
        
    };
    /** @arg {YANSIT} t @this {YANSI} */
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
 * ### YANSI
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
export class YANSI extends FANSI {
    
    /**
     * ### get
     * - Версия `0.0.0`
     * ***
     * 
     * 
     * 
     * ***
     * 
     * @public
    */
    get() {
        
        const underline = this.underline ? config.codeUnderline : config.codeUnderlineReset;
        const foreground = `${config.codeColorForeground}${config.codeColor};${ansiGetColorCode(this.foreground)}`;
        const background = `${config.codeColorBackground}${config.codeColor};${ansiGetColorCode(this.background)}`;

        return `${config.code}${[underline, foreground, background].join(';')}m`;
        
    };
    
};