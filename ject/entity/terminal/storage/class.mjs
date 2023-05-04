//#region YI

import { YJect } from '../../../class.mjs';

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

/** ### YStorageT
 * - Тип `T`
 * - Версия `0.0.0`
 * 
 * Основной параметр модуля `YStorage`.
 * 
 * @typedef {YStorageTE&YStorageTU} YStorageT
 * 
*/
/** ### YStorageTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * 
 * Параметр наследования `YStorage`.
 * 
 * @typedef {{[p in Exclude<keyof DStorage,keyof SStorage>|Exclude<keyof SStorage,keyof DStorage>]:(DStorage[p]&SStorage[p])}} YStorageTE
 * 
*/
/** ### YStorageTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * 
 * Уникальные параметры `YStorage`.
 * 
 * @typedef YStorageTU
 * @prop {any} _
 * 
*/

//#endregion

class SStorage extends YJect {
    
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
class DStorage extends SStorage {
    
    
    
};
class IStorage extends DStorage {
    
    
    
};
class MStorage extends IStorage {
    
    
    
};
class FStorage extends MStorage {
    
    /**
     * ### YStorage.constructor
     * 
     * 
     * 
     * ***
     * @arg {YStorageT} t
    */
    constructor(t) {
        
        t = [...arguments];
        
        super(Object.assign(t = FStorage.#before(t), {}));
        
        FStorage.#deceit.apply(this, [t]);
        
    };
    
    /** @arg {any[]} t */
    static #before(t) {
        
        /** @type {YStorageT} */
        let r = {};
        
        if (t?.length === 1 && [Object, YStorage].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {
            
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
    /** @arg {YStorageT} t @this {YStorage} */
    static #deceit(t) {
        
        try {
            
            FStorage.#verify.apply(this, [t]);
            
        } catch (e) {
            
            throw e;
            
        } finally {
            
            
            
        };
        
    };
    /** @arg {YStorageT} t @this {YStorage} */
    static #verify(t) {
        
        const {
            
            
            
        } = t;
        
        FStorage.#handle.apply(this, [t]);
        
    };
    /** @arg {YStorageT} t @this {YStorage} */
    static #handle(t) {
        
        
        
        FStorage.#create.apply(this, [t]);
        
    };
    /** @arg {YStorageT} t @this {YStorage} */
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
 * ### YStorage
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
export class YStorage extends FStorage {
    
    
    
};

/**
 * @file class.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @copyright Yakhin Nikita Artemovich 2023
*/