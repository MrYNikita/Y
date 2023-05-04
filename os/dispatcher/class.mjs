//#region YI

import { YEntity } from '../../ject/entity/class.mjs';
import { YPath } from '../path/class.mjs';
import { YProcess } from './process/class.mjs';

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

/** ### YDispatcherT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `os\dispatcher`
 * 
 * Основной параметр модуля `YDispatcher`.
 * 
 * @typedef {YDispatcherTE&YDispatcherTU} YDispatcherT
 * 
*/
/** ### YDispatcherTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `os\dispatcher`
 * 
 * Параметр наследования `YDispatcher`.
 * 
 * @typedef {{[p in Exclude<keyof DDispatcher,keyof SDispatcher>|Exclude<keyof SDispatcher,keyof DDispatcher>]:(DDispatcher[p]&SDispatcher[p])}} YDispatcherTE
 * 
*/
/** ### YDispatcherTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `os\dispatcher`
 * 
 * Уникальные параметры `YDispatcher`.
 * 
 * @typedef YDispatcherTU
 * @prop {any} _
 * 
*/

//#endregion

class SDispatcher extends YEntity {
    
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
class DDispatcher extends SDispatcher {
    
    
    
};
class IDispatcher extends DDispatcher {
    
    /**
     * ### processes
     * 
     * Процессы.
     * 
     * *** 
     * @type {YProcess[]} 
     * @public
    */
    processes = [];
    
};
class MDispatcher extends IDispatcher {
    
    
    
};
class FDispatcher extends MDispatcher {
    
    /**
     * ### YDispatcher.constructor
     * 
     * 
     * 
     * ***
     * @arg {YDispatcherT} t
    */
    constructor(t) {
        
        t = [...arguments];
        
        super(Object.assign(t = FDispatcher.#before(t), {}));
        
        FDispatcher.#deceit.apply(this, [t]);
        
    };
    
    /** @arg {any[]} t */
    static #before(t) {
        
        /** @type {YDispatcherT} */
        let r = {};
        
        if (t?.length === 1 && [Object, YDispatcher].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {
            
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
    /** @arg {YDispatcherT} t @this {YDispatcher} */
    static #deceit(t) {
        
        try {
            
            FDispatcher.#verify.apply(this, [t]);
            
        } catch (e) {
            
            throw e;
            
        } finally {
            
            
            
        };
        
    };
    /** @arg {YDispatcherT} t @this {YDispatcher} */
    static #verify(t) {
        
        const {
            
            
            
        } = t;
        
        FDispatcher.#handle.apply(this, [t]);
        
    };
    /** @arg {YDispatcherT} t @this {YDispatcher} */
    static #handle(t) {
        
        
        
        FDispatcher.#create.apply(this, [t]);
        
    };
    /** @arg {YDispatcherT} t @this {YDispatcher} */
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
 * ### YDispatcher
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `os\dispatcher`
 * - Цепочка `BDVHC`
 * ***
 * 
 * 
 * 
 * ***
 * 
*/
export class YDispatcher extends FDispatcher {
    
    /**
     * ### on
     * - Версия `0.0.0`
     * - Модуль `os\dispatcher`
     * ***
     * 
     * Метод запуска всех процессов.
     * 
     * ***
     * @public
    */
    on() {

        this.processes.forEach(process => {

            process.on();

        });

        return this;
        
    };
    /**
     * ### restart
     * - Версия `0.0.0`
     * - Модуль `os\dispatcher`
     * ***
     * 
     * Метод перезагрузки процессов.
     * 
     * Работает в нескольких вариантах:
     * - Если не указаны метки, то будут перезапущены все процессы.
     * - Если метки указаны, то будут перезапущены только указанные процессы.
     * 
     * ***
     * @arg {...string} labels `Метки`
     * @public
    */
    restart(...labels) {

        return this;
        
    };
    /**
     * ### appendProcesses
     * - Версия `0.0.0`
     * - Модуль `os\dispatcher`
     * ***
     * 
     * Метод добавления процессов.
     * 
     * ***
     * @arg {...([label:string, args:string, path:(string|YPath)]|YProcess)} processes `Процессы`
     * @public
    */
    appendProcesses(...processes) {

        this.processes.push(...processes.map(process => {

            process = new YProcess(...process);

            return process;

        }));

        return this;
        
    };
    
};

/**
 * @file class.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @copyright Yakhin Nikita Artemovich 2023
*/