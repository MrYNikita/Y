//#region YI

import { YJect } from '../../../../class.mjs';

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
 * - Модуль `ject\entity\report\block\tag`
 * 
 * Основной параметр модуля `YTag`.
 * 
 * @typedef {YTagTE&YTagTU} YTagT
 * 
*/
/** ### YTagTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `ject\entity\report\block\tag`
 * 
 * Параметр наследования `YTag`.
 * 
 * @typedef {{[p in Exclude<keyof DTag,keyof STag>|Exclude<keyof STag,keyof DTag>]:(DTag[p]&STag[p])}} YTagTE
 * 
*/
/** ### YTagTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `ject\entity\report\block\tag`
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
     * @type {string?} 
     * @public
    */
    name = '';
    /**
     * ### hide
     * 
     * Сокрытие.
     * 
     * *** 
     * @type {boolean} 
     * @public
    */
    hide = false;
    
};
class ITag extends DTag {
    
    /**
     * ### links
     * 
     * Значения.
     * 
     * *** 
     * @type {any[]} 
     * @public
    */
    links = [];
    
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
                
                case 3: 
                case 2: r.name = t[1];
                case 1: r.links = [t[0]];
                
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
 * - Модуль `ject\entity\report\block\tag`
 * - Цепочка `BDVHC`
 * ***
 * 
 * 
 * 
 * ***
 * 
*/
export class YTag extends FTag {
    
    
    
};