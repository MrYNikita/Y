//#region YI

import { YJect } from '../../../../ject/class.mjs';
import { YNeuron } from '../neuron/class.mjs';

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

/** ### YLayerT
 * - Тип `T`
 * - Версия `0.0.0`
 * 
 * Основной параметр модуля `YLayer`.
 * 
 * @typedef {YLayerTE&YLayerTU} YLayerT
 * 
*/
/** ### YLayerTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * 
 * Параметр наследования `YLayer`.
 * 
 * @typedef {{[p in Exclude<keyof DLayer,keyof SLayer>|Exclude<keyof SLayer,keyof DLayer>]:(DLayer[p]&SLayer[p])}} YLayerTE
 * 
*/
/** ### YLayerTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * 
 * Уникальные параметры `YLayer`.
 * 
 * @typedef YLayerTU
 * @prop {number} countNeurons
 * 
*/

//#endregion

class SLayer extends YJect {
    
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
class DLayer extends SLayer {
    
    
    
};
class ILayer extends DLayer {
    
    /**
     * ### neurons
     * 
     * Нейроны.
     * 
     * *** 
     * @type {YNeuron[]} 
     * @public
    */
    neurons = [];
    
};
class MLayer extends ILayer {
    
    
    
};
class FLayer extends MLayer {
    
    /**
     * ### YLayer.constructor
     * 
     * 
     * 
     * ***
     * @arg {YLayerT} t
    */
    constructor(t) {
        
        t = [...arguments];
        
        super(Object.assign(t = FLayer.#before(t), {}));
        
        FLayer.#deceit.apply(this, [t]);
        
        return this.correlate();
        
    };
    
    /** @arg {any[]} t */
    static #before(t) {
        
        /** @type {YLayerT} */
        let r = {};
        
        if (t?.length === 1 && [Object, YLayer].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {
            
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
    /** @arg {YLayerT} t @this {YLayer} */
    static #deceit(t) {
        
        try {
            
            FLayer.#verify.apply(this, [t]);
            
        } catch (e) {
            
            throw e;
            
        } finally {
            
            
            
        };
        
    };
    /** @arg {YLayerT} t @this {YLayer} */
    static #verify(t) {
        
        const {
            
            
            
        } = t;
        
        FLayer.#handle.apply(this, [t]);
        
    };
    /** @arg {YLayerT} t @this {YLayer} */
    static #handle(t) {
        
        FLayer.#create.apply(this, [t]);
        
    };
    /** @arg {YLayerT} t @this {YLayer} */
    static #create(t) {
        
        const {
            
            
            
        } = t;
        
        this.adopt(t);
        
        if (config) {
            
            this.adoptDefault(config);
            
        };

        if (t.countNeurons) {

            this.neurons = new Array(t.countNeurons).fill(0).map(neuron => new YNeuron(3));

        };
        
    };
    
};

/**
 * ### YLayer
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
export class YLayer extends FLayer {
    
    
    
};