//#region YI

import { YCond } from '../../bool/cond/class.mjs';
import { YEntity } from '../../ject/entity/class.mjs';
import { YPath } from '../path/class.mjs';
import { pathExists } from '../path/module.mjs';
import { objectExists, objectDelete, objectMove, objectRename } from './module.mjs';

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

/** ### YObjectT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `os\object`
 * 
 * Основной параметр модуля `YObject`.
 * 
 * @typedef {YObjectTE&YObjectTU} YObjectT
 * 
*/
/** ### YObjectTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `os\object`
 * 
 * Параметр наследования `YObject`.
 * 
 * @typedef {{[p in Exclude<keyof DObject,keyof SObject>|Exclude<keyof SObject,keyof DObject>]:(DObject[p]&SObject[p])}} YObjectTE
 * 
*/
/** ### YObjectTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `os\object`
 * 
 * Уникальные параметры `YObject`.
 * 
 * @typedef YObjectTU
 * @prop {any} _
 * 
*/

//#endregion

class SObject extends YEntity {
    
    /** ### config
     * 
     * Конфигуратор.
     * 
     * ***
     * @public
    */
    static config = config;
    
};
class DObject extends SObject {
    
    /**
     * ### path
     * 
     * Путь до файла.
     * 
     * *** 
     * @type {YPath?} 
     * @public
    */
    path;
    
};
class IObject extends DObject {
    
    /**
     * ### status
     * 
     * Статус.
     * 
     * *** 
     * @type {boolean} 
     * @protected
    */
    status;
    
};
class MObject extends IObject {
    
    
    
};
class FObject extends MObject {
    
    /**
     * ### YObject.constructor
     * 
     * 
     * 
     * ***
     * @arg {YObjectT} t
    */
    constructor(t) {
        
        t = [...arguments];
        
        super(Object.assign(t = FObject.#before(t), {}));
        
        FObject.#deceit.apply(this, [t]);
        
    };
    
    /** @arg {any[]} t */
    static #before(t) {
        
        /** @type {YObjectT} */
        let r = {};
        
        if (t?.length === 1 && [Object, YObject].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {
            
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
    /** @arg {YObjectT} t @this {YObject} */
    static #deceit(t) {
        
        try {
            
            FObject.#verify.apply(this, [t]);
            
        } catch (e) {
            
            throw e;
            
        } finally {
            
            
            
        };
        
    };
    /** @arg {YObjectT} t @this {YObject} */
    static #verify(t) {
        
        const {
            
            
            
        } = t;
        
        FObject.#handle.apply(this, [t]);
        
    };
    /** @arg {YObjectT} t @this {YObject} */
    static #handle(t) {
        
        if (YCond.isString(t.path)) {

            t.path = new YPath(t.path);

        };

        t.status = pathExists(t.path.get());
        
        FObject.#create.apply(this, [t]);
        
    };
    /** @arg {YObjectT} t @this {YObject} */
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
 * ### YObject
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `os\object`
 * - Цепочка `BDVHC`
 * ***
 * 
 * 
 * 
 * ***
 * 
*/
export class YObject extends FObject {
    
    /**
     * ### move
     * - Версия `0.0.0`
     * - Модуль `os\file`
     * ***
     * 
     * Метод перемещения файла.
     * 
     * ***
     * @arg {string} location `Положение`
     * @public
    */
    move(location) {

        objectMove(this.path.get(), location);
        
        this.path.set(location);

        return this;
        
    };
    /**
     * ### exists
     * - Версия `0.0.0`
     * - Модуль `os\file`
     * ***
     * 
     * Метод проверки на принадлежность к файлам.
     * 
     * ***
     * @public
    */
    exists() {
        
        return objectExists(this.path.get());
        
    };
    /**
     * ### delete
     * - Версия `0.0.0`
     * - Модуль `os\file`
     * ***
     * 
     * Метод удаления файла.
     * 
     * ***
     * @public
    */
    delete() {

        this.status = false;

        objectDelete(this.path.get());

        return this;
        
    };
    /**
     * ### rename
     * - Версия `0.0.0`
     * - Модуль `os\object`
     * ***
     * 
     * Метод переименования объекта файловой системы.
     * 
     * ***
     * @arg {string} name `Наименование`
     * @public
    */
    rename(name) {

        this.path.set(objectRename(this.path.get(), name));

        return this;
        
    };
    
};