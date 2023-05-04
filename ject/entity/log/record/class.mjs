//#region YI

import { stringFormatDate } from '../../../../string/module.mjs';
import { YJect } from '../../../class.mjs';
import { YTag } from '../tag/class.mjs';

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

/** ### YRecordT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `ject\entity\log\record`
 * 
 * Основной параметр модуля `YRecord`.
 * 
 * @typedef {YRecordTE&YRecordTU} YRecordT
 * 
*/
/** ### YRecordTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `ject\entity\log\record`
 * 
 * Параметр наследования `YRecord`.
 * 
 * @typedef {{[p in Exclude<keyof DRecord,keyof SRecord>|Exclude<keyof SRecord,keyof DRecord>]:(DRecord[p]&SRecord[p])}} YRecordTE
 * 
*/
/** ### YRecordTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `ject\entity\log\record`
 * 
 * Уникальные параметры `YRecord`.
 * 
 * @typedef YRecordTU
 * @prop {any} _
 * 
*/

//#endregion

class SRecord extends YJect {
    
    
    
};
class DRecord extends SRecord {
    
    /**
     * ### tags
     * 
     * Теги.
     * 
     * *** 
     * @type {YTag[]} 
     * @public
    */
    tags;
    /**
     * ### text
     * 
     * Текст записи.
     * 
     * *** 
     * @type {string} 
     * @public
    */
    text = '';
    
};
class IRecord extends DRecord {
    
    /**
     * ### date
     * 
     * Дата.
     * 
     * *** 
     * @type {Date} 
     * @protected
    */
    date;
    
};
class MRecord extends IRecord {
    
    
    
};
class FRecord extends MRecord {
    
    /**
     * ### YRecord.constructor
     * 
     * 
     * 
     * ***
     * @arg {YRecordT} t
    */
    constructor(t) {
        
        t = [...arguments];
        
        super(Object.assign(t = FRecord.#before(t), {}));
        
        FRecord.#deceit.apply(this, [t]);
        
    };
    
    /** @arg {any[]} t */
    static #before(t) {
        
        /** @type {YRecordT} */
        let r = {};
        
        if (t?.length === 1 && [Object, YRecord].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {
            
            r = t[0];
            
        } else if (t?.length) {
            
            if (t[0]?._ytp) {
            
                t = [...t[0]._ytp];
            
            };
            
            switch (t.length) {
                
                case 3: 
                case 2: r.tags = t.slice(1);
                case 1: r.text = t[0];
                
            };
            
            if (!Object.values(r).length) {
                
                r = { _ytp: t, };
                
            };
            
        };
        
        return r;
        
    };
    /** @arg {YRecordT} t @this {YRecord} */
    static #deceit(t) {
        
        try {
            
            FRecord.#verify.apply(this, [t]);
            
        } catch (e) {
            
            throw e;
            
        } finally {
            
            
            
        };
        
    };
    /** @arg {YRecordT} t @this {YRecord} */
    static #verify(t) {
        
        const {
            
            
            
        } = t;
        
        FRecord.#handle.apply(this, [t]);
        
    };
    /** @arg {YRecordT} t @this {YRecord} */
    static #handle(t) {
        
        if (t.tags) {

            t.tags = t.tags.map(tag => new YTag(tag));

        };
        
        FRecord.#create.apply(this, [t]);
        
    };
    /** @arg {YRecordT} t @this {YRecord} */
    static #create(t) {
        
        const {
            
            
            
        } = t;
        
        this.adopt(t);
        
        if (config) {
            
            this.adoptDefault(config);
            
        };
        
        if (t.dateMode || (t.dateMode === undefined && config.dateMode)) {

            this.date = new Date();

        };

    };
    
};

/**
 * ### YRecord
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `ject\entity\log\record`
 * - Цепочка `BDVHC`
 * ***
 * 
 * 
 * 
 * ***
 * 
*/
export class YRecord extends FRecord {
    
    /**
     * ### toString
     * - Версия `0.0.0`
     * - Модуль `ject\entity\log\record`
     * ***
     * 
     * Метод приведения к строке.
     * 
     * ***
     * @public
    */
    toString() {
        
        let result = ``;

        if (this.date) {

            result += stringFormatDate(this.date, 'jp');

        };
        if (this.tags) {

            result += ' ' + this.tags.map(tag => tag.symbol).join(' ');

        };

        if (result) {

            result += ' ';

        };

        result += this.text;

        return result;
        
    };
    
};