//#region YI

import { YObject } from '../object/class.mjs';
import { pathConcat, pathGet, pathGetAll } from '../path/module.mjs';

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

/** ### YDirT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `os\dir`
 * 
 * Основной параметр модуля `YDir`.
 * 
 * @typedef {YDirTE&YDirTU} YDirT
 * 
*/
/** ### YDirTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `os\dir`
 * 
 * Параметр наследования `YDir`.
 * 
 * @typedef {{[p in Exclude<keyof DDir,keyof SDir>|Exclude<keyof SDir,keyof DDir>]:(DDir[p]&SDir[p])}} YDirTE
 * 
*/
/** ### YDirTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `os\dir`
 * 
 * Уникальные параметры `YDir`.
 * 
 * @typedef YDirTU
 * @prop {any} _
 * 
*/

/** ### dirTTFragmant
 * - Тип `TT`
 * - Версия `0.0.0`
 * - Модуль `os\dir`
 * 
 * 
 * 
 * @typedef {import('../path/module.mjs').pathTTFragment} dirTTFragmant
 * 
*/

//#endregion

class SDir extends YObject {
    
    /** ### config
     * 
     * Конфигуратор.
     * 
     * ***
     * @public
    */
    static config = config;
    
};
class DDir extends SDir {
    
    
    
};
class IDir extends DDir {
    
    
    
};
class MDir extends IDir {
    
    
    
};
class FDir extends MDir {
    
    /**
     * ### YDir.constructor
     * 
     * 
     * 
     * ***
     * @arg {YDirT} t
    */
    constructor(t) {
        
        t = [...arguments];
        
        super(Object.assign(t = FDir.#before(t), {}));
        
        FDir.#deceit.apply(this, [t]);
        
    };
    
    /** @arg {any[]} t */
    static #before(t) {
        
        /** @type {YDirT} */
        let r = {};
        
        if (t?.length === 1 && [Object, YDir].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {
            
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
    /** @arg {YDirT} t @this {YDir} */
    static #deceit(t) {
        
        try {
            
            FDir.#verify.apply(this, [t]);
            
        } catch (e) {
            
            throw e;
            
        } finally {
            
            
            
        };
        
    };
    /** @arg {YDirT} t @this {YDir} */
    static #verify(t) {
        
        const {
            
            
            
        } = t;
        
        FDir.#handle.apply(this, [t]);
        
    };
    /** @arg {YDirT} t @this {YDir} */
    static #handle(t) {
        
        
        
        FDir.#create.apply(this, [t]);
        
    };
    /** @arg {YDirT} t @this {YDir} */
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
 * ### YDir
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `os\dir`
 * - Цепочка `BDVHC`
 * ***
 * 
 * 
 * 
 * ***
 * 
*/
export class YDir extends FDir {
    
    /**
     * ### pathGet
     * - Версия `0.0.0`
     * - Модуль `os\dir`
     * ***
     * 
     * Метод получения пути по указанному фрагменту в данной папке.
     * 
     * ***
     * @arg {dirTTFragmant} fragment `Фрагмент`
     * @public
    */
    pathGet(fragment) {
        
        return pathGet(pathConcat(this.path.get(), fragment));
        
    };
    /**
     * ### pathGetAll
     * - Версия `0.0.0`
     * - Модуль `os\dir`
     * ***
     * 
     * Метод получения всех путей в текущей папке.
     * 
     * ***
     * @arg {dirTTFragmant} fragment `Фрагмент`
     * @public
    */
    pathGetAll(fragment) {

        return pathGetAll(fragment);
        
    };
    
};