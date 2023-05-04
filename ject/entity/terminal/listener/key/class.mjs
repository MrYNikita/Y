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

/** ### YKeyT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `ject\entity\terminal\listener\key`
 * 
 * Основной параметр модуля `YKey`.
 * 
 * @typedef {YKeyTE&YKeyTU} YKeyT
 * 
*/
/** ### YKeyTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `ject\entity\terminal\listener\key`
 * 
 * Параметр наследования `YKey`.
 * 
 * @typedef {{[p in Exclude<keyof DKey,keyof SKey>|Exclude<keyof SKey,keyof DKey>]:(DKey[p]&SKey[p])}} YKeyTE
 * 
*/
/** ### YKeyTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `ject\entity\terminal\listener\key`
 * 
 * Уникальные параметры `YKey`.
 * 
 * @typedef YKeyTU
 * @prop {any} _
 * 
*/

//#endregion

class SKey extends YJect {
    
    /**
     * ### config
     * 
     * Конфигуратор.
     * 
     * ***
     * @public
    */
    static config = config;

    /**
     * ### convert
     * - Версия `0.0.0`
     * - Модуль `ject\entity\terminal\listener\key`
     * ***
     * 
     * Метод превращения значения в `Key`.
     * 
     * ***
     * @arg {any} value `Значение`
     * @public
    */
    static convert(value) {
        
        switch (value.constructor) {

            case Array: {

                value = new YKey(...value);

            }; break;

        };

        return value;
        
    };
    
};
class DKey extends SKey {
    
    /**
     * ### alt
     * 
     * 
     * 
     * *** 
     * @type {boolean} 
     * @public
    */
    alt = false;
    /**
     * ### name
     * 
     * Наименование.
     * 
     * *** 
     * @type {string?} 
     * @public
    */
    name;
    /**
     * ### code
     * 
     * Код клавиши.
     * 
     * *** 
     * @type {string?} 
     * @public
    */
    code = '';
    /**
     * ### ctrl
     * 
     * 
     * 
     * *** 
     * @type {boolean} 
     * @public
    */
    ctrl = false;
    /**
     * ### shift
     * 
     * 
     * 
     * *** 
     * @type {boolean} 
     * @public
    */
    shift = false;
    
};
class IKey extends DKey {
    
    
    
};
class MKey extends IKey {
    
    
    
};
class FKey extends MKey {
    
    /**
     * ### YKey.constructor
     * 
     * 
     * 
     * ***
     * @arg {YKeyT} t
    */
    constructor(t) {
        
        t = [...arguments];
        
        super(Object.assign(t = FKey.#before(t), {}));
        
        FKey.#deceit.apply(this, [t]);
        
    };
    
    /** @arg {any[]} t */
    static #before(t) {
        
        /** @type {YKeyT} */
        let r = {};
        
        if (t?.length === 1 && [Object, YKey].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {
            
            r = t[0];
            
        } else if (t?.length) {
            
            if (t[0]?._ytp) {
            
                t = [...t[0]._ytp];
            
            };
            
            switch (t.length) {
                
                case 5: r.shift = t[4];
                case 4: r.ctrl = t[3];
                case 3: r.alt = t[2];
                case 2: r.code = t[1];
                case 1: r.name = t[0];
                
            };
            
            if (!Object.values(r).length) {
                
                r = { _ytp: t, };
                
            };
            
        };
        
        return r;
        
    };
    /** @arg {YKeyT} t @this {YKey} */
    static #deceit(t) {
        
        try {
            
            FKey.#verify.apply(this, [t]);
            
        } catch (e) {
            
            throw e;
            
        } finally {
            
            
            
        };
        
    };
    /** @arg {YKeyT} t @this {YKey} */
    static #verify(t) {
        
        const {
            
            
            
        } = t;
        
        FKey.#handle.apply(this, [t]);
        
    };
    /** @arg {YKeyT} t @this {YKey} */
    static #handle(t) {
        
        if (t.code) {

            if (t.code.includes('\x1b')) {

                t.alt = true;

            };
            if (t.code === '\x7F') {

                t.ctrl = true;

            };

        };

        switch (t.name) {

            case 'up': case 'left': case 'down': case 'right': case 'escape': case 'delete': case 'f1': case 'f2': case 'f3': case 'f4': case 'f5': case 'f6': case 'f7': case 'f8': case 'f9': case 'f10': case 'f11': case 'f12': t.alt = true; break;

        };
        
        FKey.#create.apply(this, [t]);
        
    };
    /** @arg {YKeyT} t @this {YKey} */
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
 * ### YKey
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `ject\entity\terminal\listener\key`
 * - Цепочка `BDVHC`
 * ***
 * 
 * 
 * 
 * ***
 * 
*/
export class YKey extends FKey {
    
    /**
     * ### compare
     * - Версия `0.0.0`
     * - Модуль `ject\entity\terminal\listener\key`
     * ***
     * 
     * Метод сравнения клавиши.
     * 
     * ***
     * @arg {YKey} key `Клавиша`
     * @public
    */
    compare(key) {
        
        if (this.name === key.name && this.alt === key.alt && this.ctrl === key.ctrl && this.shift === key.shift) {

            return true;

        } else {

            return false;

        };
        
    };
    
};