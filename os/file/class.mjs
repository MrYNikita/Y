//#region YI

import { YObject } from '../object/class.mjs';
import { fileRead, fileWrite } from './module.mjs';

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

/** ### YFileT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `os\file`
 * 
 * Основной параметр модуля `YFile`.
 * 
 * @typedef {YFileTE&YFileTU} YFileT
 * 
*/
/** ### YFileTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `os\file`
 * 
 * Параметр наследования `YFile`.
 * 
 * @typedef {{[p in Exclude<keyof DFile,keyof SFile>|Exclude<keyof SFile,keyof DFile>]:(DFile[p]&SFile[p])}} YFileTE
 * 
*/
/** ### YFileTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `os\file`
 * 
 * Уникальные параметры `YFile`.
 * 
 * @typedef YFileTU
 * @prop {any} _
 * 
*/

//#endregion

class SFile extends YObject {
    
    
    
};
class DFile extends SFile {
    
    

};
class IFile extends DFile {
    
    
    
};
class MFile extends IFile {
    
    
    
};
class FFile extends MFile {
    
    /**
     * ### YFile.constructor
     * 
     * 
     * 
     * ***
     * @arg {YFileT} t
    */
    constructor(t) {
        
        t = [...arguments];
        
        super(Object.assign(t = FFile.#before(t), {}));
        
        FFile.#deceit.apply(this, [t]);
        
    };
    
    /** @arg {any[]} t */
    static #before(t) {
        
        /** @type {YFileT} */
        let r = {};
        
        if (t?.length === 1 && [Object, YFile].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {
            
            r = t[0];
            
        } else if (t?.length) {
            
            if (t[0]?._ytp) {
            
                t = [...t[0]._ytp];
            
            };
            
            switch (t.length) {
                
                case 3: 
                case 2: 
                case 1: r.path = t[0];
                
            };
            
            if (!Object.values(r).length) {
                
                r = { _ytp: t, };
                
            };
            
        };
        
        return r;
        
    };
    /** @arg {YFileT} t @this {YFile} */
    static #deceit(t) {
        
        try {
            
            FFile.#verify.apply(this, [t]);
            
        } catch (e) {
            
            throw e;
            
        } finally {
            
            
            
        };
        
    };
    /** @arg {YFileT} t @this {YFile} */
    static #verify(t) {
        
        const {
            
            
            
        } = t;
        
        FFile.#handle.apply(this, [t]);
        
    };
    /** @arg {YFileT} t @this {YFile} */
    static #handle(t) {
        
        FFile.#create.apply(this, [t]);
        
    };
    /** @arg {YFileT} t @this {YFile} */
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
 * ### YFile
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `os\file`
 * - Цепочка `BDVHC`
 * ***
 * 
 * 
 * 
 * ***
 * 
*/
export class YFile extends FFile {
    
    /**
     * ### read
     * - Версия `0.0.0`
     * - Модуль `os\file`
     * ***
     * 
     * Метод считывания данных из файла.
     * 
     * ***
     * @public
    */
    read() {

        return fileRead(this.path.get());
        
    };
    /**
     * ### write
     * - Версия `0.0.0`
     * - Модуль `os\file`
     * ***
     * 
     * Метод записи в файл.
     * 
     * ***
     * @arg {string} data `Данные`
     * @public
    */
    write(data) {

        if (this.status) {
            
            fileWrite(this.path.get(), data);

        };

        return this;
        
    };
    
};

/**
 * @file class.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @copyright Yakhin Nikita Artemovich 2023
*/