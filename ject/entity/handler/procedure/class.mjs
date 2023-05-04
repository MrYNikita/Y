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

/** ### YProcedureT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `ject\entity\handler\procedure`
 * 
 * Основной параметр модуля `YProcedure`.
 * 
 * ***
 * 
 * @typedef {YProcedureTE&YProcedureTU} YProcedureT
*/
/** ### YProcedureTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `ject\entity\handler\procedure`
 * 
 * Параметр наследования `YProcedure`.
 * 
 * @typedef {{[p in Exclude<keyof DProcedure,keyof SProcedure>|Exclude<keyof SProcedure,keyof DProcedure>]:(DProcedure[p]&SProcedure[p])}} YProcedureTE
*/
/** ### YProcedureTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `ject\entity\handler\procedure`
 * 
 * Уникальные параметры `YProcedure`.
 * 
 * @typedef YProcedureTU
 * @prop {} _
*/
/** ### YProcedureTUG
 * - Тип `TUP`
 * - Версия `0.0.0`
 * - Модуль `ject\entity\handler\procedure`
 * 
 * Уникальные генеративные параметры `YProcedure`.
 * 
 * @typedef YProcedureTUG
 * @prop {null=} _
*/

//#endregion

/**
 * @template {YProcedureTUG} G
*/
class SProcedure extends YJect {
    
    
    
};
/**
 * @extends {SProcedure<G>}
 * @template {YProcedureTUG} G
*/
class DProcedure extends SProcedure {
    
    /**
     * ### func
     *
     * Функция.
     *
     * ***
     * @type {function(T):void}
     * @public
    */
    func;
    /**
     * ### label
     *
     * Метка.
     *
     * Позволяет отметить процедуру.
     *
     * ***
     * @type {string?}
     * @public
    */
    label;
    /**
     * ### disposable
     *
     * Одноразовость.
     *
     * Одноразовые процедуры позволяют понять обработчикам, что после их выполнения, их следует удалить.
     *
     * ***
     * @type {boolean}
     * @public
    */
    disposable;
    
};
/**
 * @extends {DProcedure<G>}
 * @template {YProcedureTUG} G
*/
class IProcedure extends DProcedure {
    
    
    
};
/**
 * @extends {IProcedure<G>}
 * @template {YProcedureTUG} G
*/
class MProcedure extends IProcedure {
    
    
    
};
/**
 * @extends {MProcedure<G>}
 * @template {YProcedureTUG} G
*/
class FProcedure extends MProcedure {
    
    /**
     * ### YProcedure.constructor
     * 
     * 
     * 
     * ***
     * @arg {YProcedureT&G} t
    */
    constructor(t) {
        
        t = [...arguments];
        
        super(Object.assign(t = FProcedure.#before(t), {}));
        
        FProcedure.#deceit.apply(this, [t]);
        
    };
    
    /** @arg {any[]} t */
    static #before(t) {
        
        /** @type {YProcedureT} */
        let r = {};
        
        if (t?.length === 1 && [Object, YProcedure].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {
            
            r = t[0];
            
        } else if (t?.length) {
            
            if (t[0]?._ytp) {
            
                t = [...t[0]._ytp];
            
            };
            
            switch (t.length) {
                
                case 3: r.disposable = t[2];
                case 2: r.func = t[1];
                case 1: r.label = t[0];
                
            };
            
            if (!Object.values(r).length) {
                
                r = { _ytp: t, };
                
            };
            
        };
        
        return r;
        
    };
    /** @arg {YProcedureT} t @this {YProcedure} */
    static #deceit(t) {
        
        try {
            
            FProcedure.#verify.apply(this, [t]);
            
        } catch (e) {
            
            throw e;
            
        } finally {
            
            
            
        };
        
    };
    /** @arg {YProcedureT} t @this {YProcedure} */
    static #verify(t) {
        
        const {
            
            
            
        } = t;
        
        FProcedure.#handle.apply(this, [t]);
        
    };
    /** @arg {YProcedureT} t @this {YProcedure} */
    static #handle(t) {
        
        
        
        FProcedure.#create.apply(this, [t]);
        
    };
    /** @arg {YProcedureT} t @this {YProcedure} */
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
 * ### YProcedure
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `ject\entity\handler\procedure`
 * - Цепочка `BDVHC`
 * ***
 * 
 * 
 * 
 * ***
 * @extends {FProcedure<G>}
 * @template {YProcedureTUG} G
*/
export class YProcedure extends FProcedure {
    
    
    
};