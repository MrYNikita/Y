//#region YI

import { YJect } from '../../../../ject/class.mjs';

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

/** ### YNeuronT
 * - Тип `T`
 * - Версия `0.0.0`
 * 
 * Основной параметр модуля `YNeuron`.
 * 
 * @typedef {YNeuronTE&YNeuronTU} YNeuronT
 * 
*/
/** ### YNeuronTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * 
 * Параметр наследования `YNeuron`.
 * 
 * @typedef {{[p in Exclude<keyof DNeuron,keyof SNeuron>|Exclude<keyof SNeuron,keyof DNeuron>]:(DNeuron[p]&SNeuron[p])}} YNeuronTE
 * 
*/
/** ### YNeuronTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * 
 * Уникальные параметры `YNeuron`.
 * 
 * @typedef YNeuronTU
 * @prop {number} inputsCount
 * 
*/

//#endregion

class SNeuron extends YJect {
    
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
class DNeuron extends SNeuron {
    
    /**
     * ### bias
     * 
     * Смещение.
     * 
     * *** 
     * @type {number?} 
     * @public
    */
    bias = Math.random();
    /**
     * ### delta
     * 
     * Производная от функции обратного распространения ошибки.
     * 
     * *** 
     * @type {number?} 
     * @public
    */
    delta = null;
    /**
     * ### output
     * 
     * Выходное значение.
     * 
     * *** 
     * @type {number?} 
     * @public
    */
    output = null;
    /**
     * ### weights
     * 
     * Веса.
     * 
     * *** 
     * @type {number[]} 
     * @public
    */
    weights = [];
    
};
class INeuron extends DNeuron {
    
    
    
};
class MNeuron extends INeuron {
    
    
    
};
class FNeuron extends MNeuron {
    
    /**
     * ### YNeuron.constructor
     * 
     * 
     * 
     * ***
     * @arg {YNeuronT} t
    */
    constructor(t) {
        
        t = [...arguments];
        
        super(Object.assign(t = FNeuron.#before(t), {}));
        
        FNeuron.#deceit.apply(this, [t]);
        
        return this.correlate();
        
    };
    
    /** @arg {any[]} t */
    static #before(t) {
        
        /** @type {YNeuronT} */
        let r = {};
        
        if (t?.length === 1 && [Object, YNeuron].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {
            
            r = t[0];
            
        } else if (t?.length) {
            
            if (t[0]?._ytp) {
            
                t = [...t[0]._ytp];
            
            };
            
            switch (t.length) {
                
                case 3: 
                case 2: 
                case 1: r.inputsCount = t[0];
                
            };
            
            if (!Object.values(r).length) {
                
                r = { _ytp: t, };
                
            };
            
        };
        
        return r;
        
    };
    /** @arg {YNeuronT} t @this {YNeuron} */
    static #deceit(t) {
        
        try {
            
            FNeuron.#verify.apply(this, [t]);
            
        } catch (e) {
            
            throw e;
            
        } finally {
            
            
            
        };
        
    };
    /** @arg {YNeuronT} t @this {YNeuron} */
    static #verify(t) {
        
        const {
            
            
            
        } = t;
        
        FNeuron.#handle.apply(this, [t]);
        
    };
    /** @arg {YNeuronT} t @this {YNeuron} */
    static #handle(t) {
        
        if (t.inputsCount && !t.weights) {

            t.weights = [];

            for (let i = 0; i < t.inputsCount; i++) {

                t.weights.push(Math.random());

            };

        };
        
        FNeuron.#create.apply(this, [t]);
        
    };
    /** @arg {YNeuronT} t @this {YNeuron} */
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
 * ### YNeuron
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
export class YNeuron extends FNeuron {
    
    /**
     * ### adjust
     * - Версия `0.0.0`
     * ***
     * 
     * Метод урегулирования весов.
     * 
     * ***
     * @arg {number} rate `Рейтинг`
     * @arg {number} error `Ошибка`
     * @arg {number[]} inputs `Данные`
     * @public
    */
    adjust(inputs, error, rate) {
        
        for (const index of inputs) {

            this.weights[index] += rate * error * inputs[index];

        };

        this.bias += rate * error;

        return this;
        
    };
    /**
     * ### activate
     * - Версия `0.0.0`
     * ***
     * 
     * Функция активации нейрона.
     * 
     * ***
     * @arg {number[]} inputs `Данные`
     * @public
    */
    activate(inputs) {
        
        let sum = this.bias;

        for (let i = 0; i < inputs.length; i++) {

            sum += inputs[i] * this.weights[i];

        };

        this.output = 1 / (1 + Math.exp(-sum));

        return this.output;
        
    };
    /**
     * ### derivative
     * - Версия `0.0.0`
     * ***
     * 
     * Вычисление производной от функции активации (сигмоиды).
     * 
     * ***
     * @public
    */
    derivative() {

        return this.output * (1 - this.output);
        
    };
    
};