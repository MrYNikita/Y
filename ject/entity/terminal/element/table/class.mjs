//#region YI

import { YElement } from '../class.mjs';

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

/** ### YTableT
 * - Тип `T`
 * - Версия `0.0.0`
 * 
 * Основной параметр модуля `YTable`.
 * 
 * @typedef {YTableTE&YTableTU&import('../class.mjs').YElementT} YTableT
 * 
*/
/** ### YTableTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * 
 * Параметр наследования `YTable`.
 * 
 * @typedef {{[p in Exclude<keyof DTable,keyof STable>|Exclude<keyof STable,keyof DTable>]:(DTable[p]&STable[p])}} YTableTE
 * 
*/
/** ### YTableTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * 
 * Уникальные параметры `YTable`.
 * 
 * @typedef YTableTU
 * @prop {any} _
 * 
*/

//#endregion

class STable extends YElement {
    
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
class DTable extends STable {
    
    
    
};
class ITable extends DTable {
    
    /**
     * ### cells
     * 
     * Клетки.
     * 
     * *** 
     * @type {} 
     * @public
    */
    cells = [];
    /**
     * ### rows
     * 
     * Размеры по Y для линий клеток в таблице.
     * 
     * *** 
     * @type {number[]} 
     * @protected
    */
    rows = [];
    /**
     * ### columns
     * 
     * Размеры по X для линий клеток в таблице.
     * 
     * *** 
     * @type {number[]} 
     * @protected
    */
    columns = [];
    
};
class MTable extends ITable {
    
    
    
};
class FTable extends MTable {
    
    /**
     * ### YTable.constructor
     * 
     * 
     * 
     * ***
     * @arg {YTableT} t
    */
    constructor(t) {
        
        t = [...arguments];
        
        super(Object.assign(t = FTable.#before(t), {}));
        
        FTable.#deceit.apply(this, [t]);
        
    };
    
    /** @arg {any[]} t */
    static #before(t) {
        
        /** @type {YTableT} */
        let r = {};
        
        if (t?.length === 1 && [Object, YTable].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {
            
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
    /** @arg {YTableT} t @this {YTable} */
    static #deceit(t) {
        
        try {
            
            FTable.#verify.apply(this, [t]);
            
        } catch (e) {
            
            throw e;
            
        } finally {
            
            
            
        };
        
    };
    /** @arg {YTableT} t @this {YTable} */
    static #verify(t) {
        
        const {
            
            
            
        } = t;
        
        FTable.#handle.apply(this, [t]);
        
    };
    /** @arg {YTableT} t @this {YTable} */
    static #handle(t) {
        
        
        
        FTable.#create.apply(this, [t]);
        
    };
    /** @arg {YTableT} t @this {YTable} */
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
 * ### YTable
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
export class YTable extends FTable {
    
    
    
};