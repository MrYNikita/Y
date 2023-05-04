//#region YI

import { YJect } from '../../../class.mjs';
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

/** ### YTagT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `ject\entity\log\tag`
 * 
 * Основной параметр модуля `YTag`.
 * 
 * @typedef {YTagTE&YTagTU} YTagT
 * 
*/
/** ### YTagTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `ject\entity\log\tag`
 * 
 * Параметр наследования `YTag`.
 * 
 * @typedef {{[p in Exclude<keyof DTag,keyof STag>|Exclude<keyof STag,keyof DTag>]:(DTag[p]&STag[p])}} YTagTE
 * 
*/
/** ### YTagTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `ject\entity\log\tag`
 * 
 * Уникальные параметры `YTag`.
 * 
 * @typedef YTagTU
 * @prop {any} _
 * 
*/

//#endregion

class STag extends YJect {
    
    
    
};
class DTag extends STag {
    
    /**
     * ### name
     * 
     * Наименование.
     * 
     * *** 
     * @type {string} 
     * @public
    */
    name;
    /**
     * ### limit
     * 
     * Предел записей.
     * 
     * *** 
     * @type {number} 
     * @public
    */
    limit;
    /**
     * ### symbol
     * 
     * Символ.
     * 
     * *** 
     * @type {string} 
     * @public
    */
    symbol;
    /**
     * ### filtred
     * 
     * Фильтрация.
     * 
     * *** 
     * @type {boolean} 
     * @public
    */
    filtred = false;
    
};
class ITag extends DTag {
    
    /**
     * ### records
     * 
     * Записи.
     * 
     * *** 
     * @type {YRecord[]} 
     * @protected
    */
    records = [];
    
};
class MTag extends ITag {
    
    
    
};
class FTag extends MTag {
    
    /**
     * ### YTag.constructor
     * 
     * 
     * 
     * ***
     * @arg {YTagT} t
    */
    constructor(t) {
        
        t = [...arguments];
        
        super(Object.assign(t = FTag.#before(t), {}));
        
        FTag.#deceit.apply(this, [t]);
        
    };
    
    /** @arg {any[]} t */
    static #before(t) {
        
        /** @type {YTagT} */
        let r = {};
        
        if (t?.length === 1 && [Object, YTag].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {
            
            r = t[0];
            
        } else if (t?.length) {
            
            if (t[0]?._ytp) {
            
                t = [...t[0]._ytp];
            
            };
            
            switch (t.length) {
                
                case 3: r.limit = t[2];
                case 2: r.symbol = t[1];
                case 1: r.name = t[0];
                
            };
            
            if (!Object.values(r).length) {
                
                r = { _ytp: t, };
                
            };
            
        };
        
        return r;
        
    };
    /** @arg {YTagT} t @this {YTag} */
    static #deceit(t) {
        
        try {
            
            FTag.#verify.apply(this, [t]);
            
        } catch (e) {
            
            throw e;
            
        } finally {
            
            
            
        };
        
    };
    /** @arg {YTagT} t @this {YTag} */
    static #verify(t) {
        
        const {
            
            
            
        } = t;
        
        FTag.#handle.apply(this, [t]);
        
    };
    /** @arg {YTagT} t @this {YTag} */
    static #handle(t) {
        
        if (t.name && !t.symbol && !t.limit) {

            [t.name, t.symbol, t.limit] = t.name.split('/');

            if (t.limit) {

                t.limit = parseInt(t.limit);

            };

        };
        
        FTag.#create.apply(this, [t]);
        
    };
    /** @arg {YTagT} t @this {YTag} */
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
 * ### YTag
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `ject\entity\log\tag`
 * - Цепочка `BDVHC`
 * ***
 * 
 * 
 * 
 * ***
 * 
*/
export class YTag extends FTag {
    
    /**
     * ### appendRecords
     * - Версия `0.0.0`
     * - Модуль `ject\entity\log\tag`
     * ***
     * 
     * Метод добавления записей.
     * 
     * ***
     * @arg {...YRecord} records `Записи`
     * @public
    */
    appendRecords(...records) {

        this.records.push(...records.filter(record => record.constructor === YRecord));

        if (this.records.length >= (this.limit ?? config.limit)) {

            this.records.splice(0, this.records.length - (this.limit ?? config.limit));

        };

        return this;
        
    };
    
};