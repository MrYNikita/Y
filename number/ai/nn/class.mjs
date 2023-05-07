//#region YI

import { YEntity } from '../../../ject/entity/class.mjs';
import { YLayer } from './layer/class.mjs';

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

/** ### YNNT
 * - Тип `T`
 * - Версия `0.0.0`
 * 
 * Основной параметр модуля `YNN`.
 * 
 * @typedef {YNNTE&YNNTU} YNNT
 * 
*/
/** ### YNNTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * 
 * Параметр наследования `YNN`.
 * 
 * @typedef {{[p in Exclude<keyof DNN,keyof SNN>|Exclude<keyof SNN,keyof DNN>]:(DNN[p]&SNN[p])}} YNNTE
 * 
*/
/** ### YNNTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * 
 * Уникальные параметры `YNN`.
 * 
 * @typedef YNNTU
 * @prop {any} _
 * 
*/

//#endregion

class SNN extends YEntity {
    
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
class DNN extends SNN {
    
    /**
     * ### layersInput
     * 
     * Входные слои.
     * 
     * *** 
     * @type {YLayer[]} 
     * @public
    */
    layersInput = [];
    /**
     * ### layersHidden
     * 
     * Скрытые слои.
     * 
     * *** 
     * @type {YLayer[]} 
     * @public
    */
    layersHidden = [];
    /**
     * ### layersOutputs
     * 
     * Выходные слои.
     * 
     * *** 
     * @type {YLayer[]} 
     * @public
    */
    layersOutputs = [];
    
};
class INN extends DNN {
    
    
    
};
class MNN extends INN {
    
    
    
};
class FNN extends MNN {
    
    /**
     * ### YNN.constructor
     * 
     * 
     * 
     * ***
     * @arg {YNNT} t
    */
    constructor(t) {
        
        t = [...arguments];
        
        super(Object.assign(t = FNN.#before(t), {}));
        
        FNN.#deceit.apply(this, [t]);
        
        return this.correlate();
        
    };
    
    /** @arg {any[]} t */
    static #before(t) {
        
        /** @type {YNNT} */
        let r = {};
        
        if (t?.length === 1 && [Object, YNN].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {
            
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
    /** @arg {YNNT} t @this {YNN} */
    static #deceit(t) {
        
        try {
            
            FNN.#verify.apply(this, [t]);
            
        } catch (e) {
            
            throw e;
            
        } finally {
            
            
            
        };
        
    };
    /** @arg {YNNT} t @this {YNN} */
    static #verify(t) {
        
        const {
            
            
            
        } = t;
        
        FNN.#handle.apply(this, [t]);
        
    };
    /** @arg {YNNT} t @this {YNN} */
    static #handle(t) {
        
        
        
        FNN.#create.apply(this, [t]);
        
    };
    /** @arg {YNNT} t @this {YNN} */
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
 * ### YNN
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
export class YNN extends FNN {
    
    /**
     * ### distribute
     * - Версия `0.0.0`
     * ***
     * 
     * Метод распространения входных данных по сети.
     * 
     * ***
     * 
     * @public
    */
    distribute() {

        return this;
        
    };
    /**
     * ### recalculate
     * - Версия `0.0.0`
     * ***
     * 
     * Метод вычисления обратного распространения ошибки.
     * 
     * ***
     * 
     * @public
    */
    recalculate() {
        
        return this;
        
    };
    
};