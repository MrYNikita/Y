//#region YI

import { YJect } from '../class.mjs';

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

/** ### YAliasT
 * - Тип `T`
 * - Версия `0.0.0`
 * 
 * Основной параметр модуля `YAlias`.
 * 
 * @typedef {YAliasTE&YAliasTU} YAliasT
 * 
*/
/** ### YAliasTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * 
 * Параметр наследования `YAlias`.
 * 
 * @typedef {{[p in Exclude<keyof DAlias,keyof SAlias>|Exclude<keyof SAlias,keyof DAlias>]:(DAlias[p]&SAlias[p])}} YAliasTE
 * 
*/
/** ### YAliasTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * 
 * Уникальные параметры `YAlias`.
 * 
 * @typedef YAliasTU
 * @prop {any} _
 * 
*/

//#endregion

class SAlias extends YJect {
    
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
class DAlias extends SAlias {
    
    /**
     * ### name
     * 
     * Исходное имя свойства.
     * 
     * *** 
     * @type {string} 
     * @public
    */
    name;
    /**
     * ### options
     * 
     * Варианты имени.
     * 
     * *** 
     * @type {string[]} 
     * @public
    */
    options = [];
    
};
class IAlias extends DAlias {
    
    
    
};
class MAlias extends IAlias {
    
    
    
};
class FAlias extends MAlias {
    
    /**
     * ### YAlias.constructor
     * 
     * 
     * 
     * ***
     * @arg {YAliasT} t
    */
    constructor(t) {
        
        t = [...arguments];
        
        super(Object.assign(t = FAlias.#before(t), {}));
        
        FAlias.#deceit.apply(this, [t]);
        
    };
    
    /** @arg {any[]} t */
    static #before(t) {
        
        /** @type {YAliasT} */
        let r = {};
        
        if (t?.length === 1 && [Object, YAlias].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {
            
            r = t[0];
            
        } else if (t?.length) {
            
            if (t[0]?._ytp) {
            
                t = [...t[0]._ytp];
            
            };
            
            switch (t.length) {
                
                default: r.options = t.slice(1);
                case 1: r.name = t[0];
                
            };
            
            if (!Object.values(r).length) {
                
                r = { _ytp: t, };
                
            };
            
        };
        
        return r;
        
    };
    /** @arg {YAliasT} t @this {YAlias} */
    static #deceit(t) {
        
        try {
            
            FAlias.#verify.apply(this, [t]);
            
        } catch (e) {
            
            throw e;
            
        } finally {
            
            
            
        };
        
    };
    /** @arg {YAliasT} t @this {YAlias} */
    static #verify(t) {
        
        const {
            
            
            
        } = t;
        
        FAlias.#handle.apply(this, [t]);
        
    };
    /** @arg {YAliasT} t @this {YAlias} */
    static #handle(t) {
        
        
        
        FAlias.#create.apply(this, [t]);
        
    };
    /** @arg {YAliasT} t @this {YAlias} */
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
 * ### YAlias
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Цепочка `BDVHC`
 * ***
 * 
 * Класс псевдонимов.
 * 
 * Данный класс используется для описания и реалзиации логики псевдонимов.
 * 
 * ***
 * 
*/
export class YAlias extends FAlias {
    
    /**
     * ### apply
     * - Версия `0.0.0`
     * ***
     * 
     * Метод применения.
     * 
     * ***
     * @arg {G} ject `Объект`
     * @arg {any} value `Значение`
     * @arg {string} property `свойство`
     * @template G
     * @public
    */
    apply(ject, property, value) {

        if (property === this.name || this.options.includes(property)) {

            ject[this.name] = value;

        };

        return this;
        
    };
    
};