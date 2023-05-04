//#region YI

import { YJect } from '../../../../../class.mjs';

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

/** ### YCellT
 * - Тип `T`
 * - Версия `0.0.0`
 * 
 * Основной параметр модуля `YCell`.
 * 
 * @typedef {YCellTE&YCellTU} YCellT
 * 
*/
/** ### YCellTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * 
 * Параметр наследования `YCell`.
 * 
 * @typedef {{[p in Exclude<keyof DCell,keyof SCell>|Exclude<keyof SCell,keyof DCell>]:(DCell[p]&SCell[p])}} YCellTE
 * 
*/
/** ### YCellTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * 
 * Уникальные параметры `YCell`.
 * 
 * @typedef YCellTU
 * @prop {any} _
 * 
*/

//#endregion

class SCell extends YJect {
    
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
class DCell extends SCell {
    
    
    
};
class ICell extends DCell {
    
    
    
};
class MCell extends ICell {
    
    
    
};
class FCell extends MCell {
    
    /**
     * ### YCell.constructor
     * 
     * 
     * 
     * ***
     * @arg {YCellT} t
    */
    constructor(t) {
        
        t = [...arguments];
        
        super(Object.assign(t = FCell.#before(t), {}));
        
        FCell.#deceit.apply(this, [t]);
        
    };
    
    /** @arg {any[]} t */
    static #before(t) {
        
        /** @type {YCellT} */
        let r = {};
        
        if (t?.length === 1 && [Object, YCell].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {
            
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
    /** @arg {YCellT} t @this {YCell} */
    static #deceit(t) {
        
        try {
            
            FCell.#verify.apply(this, [t]);
            
        } catch (e) {
            
            throw e;
            
        } finally {
            
            
            
        };
        
    };
    /** @arg {YCellT} t @this {YCell} */
    static #verify(t) {
        
        const {
            
            
            
        } = t;
        
        FCell.#handle.apply(this, [t]);
        
    };
    /** @arg {YCellT} t @this {YCell} */
    static #handle(t) {
        
        
        
        FCell.#create.apply(this, [t]);
        
    };
    /** @arg {YCellT} t @this {YCell} */
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
 * ### YCell
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
export class YCell extends FCell {
    
    
    
};