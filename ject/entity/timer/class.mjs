//#region YI

import { YEntity } from '../class.mjs';
import { YEvent } from './event/class.mjs';

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

/** ### YTimerT
 * - Тип `T`
 * - Версия `0.0.0`
 * 
 * Основной параметр модуля `YTimer`.
 * 
 * @typedef {YTimerTE&YTimerTU} YTimerT
 * 
*/
/** ### YTimerTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * 
 * Параметр наследования `YTimer`.
 * 
 * @typedef {{[p in Exclude<keyof DTimer,keyof STimer>|Exclude<keyof STimer,keyof DTimer>]:(DTimer[p]&STimer[p])}} YTimerTE
 * 
*/
/** ### YTimerTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * 
 * Уникальные параметры `YTimer`.
 * 
 * @typedef YTimerTU
 * @prop {any} _
 * 
*/

/** ### timerTTEvent
 * - Тип `TT`
 * - Версия `0.0.0`
 * 
 * 
 * 
 * @typedef {import('./event/class.mjs').YEvent} timerTTEvent
 * 
*/

//#endregion

class STimer extends YEntity {
    
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
class DTimer extends STimer {
    
    /**
     * ### frequency
     * 
     * Частота.
     * 
     * *** 
     * @type {number} 
     * @public
    */
    frequency;
    
};
class ITimer extends DTimer {
    
    /**
     * ### events
     * 
     * События.
     * 
     * *** 
     * @type {timerTTEvent[]} 
     * @public
    */
    events = [];
    /**
     * ### timeout
     * 
     * Таймаут.
     * 
     * *** 
     * @type {number?} 
     * @public
    */
    timeout = null;
    
};
class MTimer extends ITimer {
    
    /**
     * ### callback
     * - Версия `0.0.0`
     * ***
     * 
     * Метод таймера.
     * 
     * ***
     * @arg {YTimer} y `Таймер`
     * @protected
    */
    callback(y) {

        y.timeout = setTimeout(y.callback, y.frequency ?? config.frequency, y);

        for (const event of y.events) {

            if (event.accumulate() && event.single) {

                y.events = y.events.filter(eventThis => eventThis !== event);

            };

        };

        return y;
        
    };
    
};
class FTimer extends MTimer {
    
    /**
     * ### YTimer.constructor
     * 
     * 
     * 
     * ***
     * @arg {YTimerT} t
    */
    constructor(t) {
        
        t = [...arguments];
        
        super(Object.assign(t = FTimer.#before(t), {}));
        
        FTimer.#deceit.apply(this, [t]);
        
    };
    
    /** @arg {any[]} t */
    static #before(t) {
        
        /** @type {YTimerT} */
        let r = {};
        
        if (t?.length === 1 && [Object, YTimer].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {
            
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
    /** @arg {YTimerT} t @this {YTimer} */
    static #deceit(t) {
        
        try {
            
            FTimer.#verify.apply(this, [t]);
            
        } catch (e) {
            
            throw e;
            
        } finally {
            
            
            
        };
        
    };
    /** @arg {YTimerT} t @this {YTimer} */
    static #verify(t) {
        
        const {
            
            
            
        } = t;
        
        FTimer.#handle.apply(this, [t]);
        
    };
    /** @arg {YTimerT} t @this {YTimer} */
    static #handle(t) {
        
        
        
        FTimer.#create.apply(this, [t]);
        
    };
    /** @arg {YTimerT} t @this {YTimer} */
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
 * ### YTimer
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
export class YTimer extends FTimer {
    
    /**
     * ### on
     * - Версия `0.0.0`
     * ***
     * 
     * Метод активации таймера.
     * 
     * *** 
     * @public
    */
    on() {
        
        this.callback(this);

        return this;
        
    };
    /**
     * ### off
     * - Версия `0.0.0`
     * ***
     * 
     * Метод отключения таймера.
     * 
     * ***
     * @public
    */
    off() {
        
        clearTimeout(this.timeout);

        this.timeout = null;

        return this;
        
    };
    /**
     * ### appendEvents
     * - Версия `0.0.0`
     * ***
     * 
     * Метод добавления событий.
     * 
     * ***
     * @arg {...([string, number, number, function():void, boolean]|timerTTEvent)} events `События`
     * @public
    */
    appendEvents(...events) {
        
        this.events.push(...events.map(event => event instanceof YEvent ? event : new YEvent(...event)));

        return this;
        
    };
    
};

/**
 * @file class.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @copyright Yakhin Nikita Artemovich 2023
*/