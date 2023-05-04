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

/** ### YEventT
 * - Тип `T`
 * - Версия `0.0.0`
 * 
 * Основной параметр модуля `YEvent`.
 * 
 * @typedef {YEventTE&YEventTU} YEventT
 * 
*/
/** ### YEventTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * 
 * Параметр наследования `YEvent`.
 * 
 * @typedef {{[p in Exclude<keyof DEvent,keyof SEvent>|Exclude<keyof SEvent,keyof DEvent>]:(DEvent[p]&SEvent[p])}} YEventTE
 * 
*/
/** ### YEventTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * 
 * Уникальные параметры `YEvent`.
 * 
 * @typedef YEventTU
 * @prop {any} _
 * 
*/

//#endregion

class SEvent extends YJect {
    
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
class DEvent extends SEvent {
    
    /**
     * ### func
     * 
     * Функция.
     * 
     * *** 
     * @type {function():void} 
     * @public
    */
    func;
    /**
     * ### tact
     * 
     * Тактовая частота.
     * 
     * *** 
     * @type {number?} 
     * @public
    */
    tact;
    /**
     * ### label
     * 
     * Метка.
     * 
     * *** 
     * @type {string?} 
     * @public
    */
    label;
    /**
     * ### single
     * 
     * Однократность.
     * 
     * *** 
     * @type {boolean} 
     * @public
    */
    single = false;
    /**
     * ### priority
     * 
     * Приоритет.
     * 
     * *** 
     * @type {number?} 
     * @public
    */
    priority;
    
};
class IEvent extends DEvent {
    
    /**
     * ### hoarder
     * 
     * Накопитель.
     * 
     * *** 
     * @type {number?} 
     * @protected
    */
    hoarder = 0;
    
};
class MEvent extends IEvent {
    
    
    
};
class FEvent extends MEvent {
    
    /**
     * ### YEvent.constructor
     * 
     * 
     * 
     * ***
     * @arg {YEventT} t
    */
    constructor(t) {
        
        t = [...arguments];
        
        super(Object.assign(t = FEvent.#before(t), {}));
        
        FEvent.#deceit.apply(this, [t]);
        
    };
    
    /** @arg {any[]} t */
    static #before(t) {
        
        /** @type {YEventT} */
        let r = {};
        
        if (t?.length === 1 && [Object, YEvent].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {
            
            r = t[0];
            
        } else if (t?.length) {
            
            if (t[0]?._ytp) {
            
                t = [...t[0]._ytp];
            
            };
            
            switch (t.length) {
                
                case 5: r.single = t[4];
                case 4: r.func = t[3];
                case 3: r.priority = t[2];
                case 2: r.tact = t[1];
                case 1: r.label = t[0]; 
                
            };
            
            if (!Object.values(r).length) {
                
                r = { _ytp: t, };
                
            };
            
        };
        
        return r;
        
    };
    /** @arg {YEventT} t @this {YEvent} */
    static #deceit(t) {
        
        try {
            
            FEvent.#verify.apply(this, [t]);
            
        } catch (e) {
            
            throw e;
            
        } finally {
            
            
            
        };
        
    };
    /** @arg {YEventT} t @this {YEvent} */
    static #verify(t) {
        
        const {
            
            
            
        } = t;
        
        FEvent.#handle.apply(this, [t]);
        
    };
    /** @arg {YEventT} t @this {YEvent} */
    static #handle(t) {
        
        
        
        FEvent.#create.apply(this, [t]);
        
    };
    /** @arg {YEventT} t @this {YEvent} */
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
 * ### YEvent
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
export class YEvent extends FEvent {
    
    /**
     * ### accumulate
     * - Версия `0.0.0`
     * ***
     * 
     * Метод накопления значения счётчика.
     * 
     * ***
     * @public
    */
    accumulate() {
        
        this.hoarder += 1;

        if (this.hoarder >= this.tact) {

            this.hoarder = 0;

            this.func();

            return true;

        };

        return false;
        
    };
    
};

/**
 * @file class.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @copyright Yakhin Nikita Artemovich 2023
*/