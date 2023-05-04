//#region YI

import { condIsString, condIsStringValid } from '../../bool/cond/module.mjs';
import { YJect } from '../../ject/class.mjs';

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

/** ### YMathT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `number\math`
 * 
 * Основной параметр модуля `YMath`.
 * 
 * @typedef {YMathTE&YMathTU} YMathT
 * 
*/
/** ### YMathTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `number\math`
 * 
 * Параметр наследования `YMath`.
 * 
 * @typedef {{[p in Exclude<keyof DMath,keyof SMath>|Exclude<keyof SMath,keyof DMath>]:(DMath[p]&SMath[p])}} YMathTE
 * 
*/
/** ### YMathTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `number\math`
 * 
 * Уникальные параметры `YMath`.
 * 
 * @typedef YMathTU
 * @prop {any} _
 * 
*/

//#endregion

class SMath extends YJect {
    
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
class DMath extends SMath {
    
    
    
};
class IMath extends DMath {
    
    /**
     * ### memory
     * 
     * Память.
     * 
     * ***  
     * @protected
    */
    memory = {};
    
};
class MMath extends IMath {
    
    
    
};
class FMath extends MMath {
    
    /**
     * ### YMath.constructor
     * 
     * 
     * 
     * ***
     * @arg {YMathT} t
    */
    constructor(t) {
        
        t = [...arguments];
        
        super(Object.assign(t = FMath.#before(t), {}));
        
        FMath.#deceit.apply(this, [t]);
        
    };
    
    /** @arg {any[]} t */
    static #before(t) {
        
        /** @type {YMathT} */
        let r = {};
        
        if (t?.length === 1 && [Object, YMath].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {
            
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
    /** @arg {YMathT} t @this {YMath} */
    static #deceit(t) {
        
        try {
            
            FMath.#verify.apply(this, [t]);
            
        } catch (e) {
            
            throw e;
            
        } finally {
            
            
            
        };
        
    };
    /** @arg {YMathT} t @this {YMath} */
    static #verify(t) {
        
        const {
            
            
            
        } = t;
        
        FMath.#handle.apply(this, [t]);
        
    };
    /** @arg {YMathT} t @this {YMath} */
    static #handle(t) {
        
        
        
        FMath.#create.apply(this, [t]);
        
    };
    /** @arg {YMathT} t @this {YMath} */
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
 * ### YMath
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `number\math`
 * - Цепочка `BDVHC`
 * ***
 * 
 * 
 * 
 * ***
 * 
*/
export class YMath extends FMath {
    
    /**
     * ### exec
     * - Версия `0.0.0`
     * - Модуль `number\math`
     * ***
     * 
     * Метод выполнения математических операций.
     * 
     * Выполнение отличается от вычисления тем, что результаты выполнения сохраняются в памяти.
     * Помимо прочего, выполнение может принять на вход множество операций, в то время как вычисление только одну.
     * 
     * ***
     * @arg {...string} opers `Операции`
     * @public
    */
    exec(...opers) {

        for (const oper of opers) {

            if (condIsStringValid(oper)) {
                
                if (oper.includes('=')) {

                    const [variable, value] = oper.split('=');

                    this.memory[variable] = parseInt(value);

                };

            };

        };

        return this;
        
    };
    
};