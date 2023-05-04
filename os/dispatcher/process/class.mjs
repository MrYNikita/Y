//#region YI

import { condIsString } from '../../../bool/cond/module.mjs';
import { YJect } from '../../../ject/class.mjs';
import { YEntity } from '../../../ject/entity/class.mjs';
import { YPath } from '../../path/class.mjs';
import { ChildProcess, fork, spawn } from 'child_process';

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

/** ### YProcessT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `os\dispatcher\process`
 * 
 * Основной параметр модуля `YProcess`.
 * 
 * @typedef {YProcessTE&YProcessTU} YProcessT
 * 
*/
/** ### YProcessTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `os\dispatcher\process`
 * 
 * Параметр наследования `YProcess`.
 * 
 * @typedef {{[p in Exclude<keyof DProcess,keyof SProcess>|Exclude<keyof SProcess,keyof DProcess>]:(DProcess[p]&SProcess[p])}} YProcessTE
 * 
*/
/** ### YProcessTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `os\dispatcher\process`
 * 
 * Уникальные параметры `YProcess`.
 * 
 * @typedef YProcessTU
 * @prop {YPath} path
 * @prop {string} args
 * 
*/

//#endregion

class SProcess extends YEntity {
    
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
class DProcess extends SProcess {
    
    /**
     * ### path
     * 
     * Путь.
     * 
     * *** 
     * @type {YPath} 
     * @public
    */
    path;
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
    
};
class IProcess extends DProcess {
    
    /**
     * ### link
     * 
     * Ссылка на процесс.
     * 
     * *** 
     * @type {ChildProcess?} 
     * @public
    */
    link;
    /**
     * ### status
     * 
     * Статус.
     * 
     * Коды:
     * - 0 - Неактивен
     * - 1 - Активен
     * - 2 - Приостановлен
     * - 3 - Завершен
     * 
     * *** 
     * @type {0|1|2|3} 
     * @public
    */
    status = 0;
    
};
class MProcess extends IProcess {
    
    
    
};
class FProcess extends MProcess {
    
    /**
     * ### YProcess.constructor
     * 
     * 
     * 
     * ***
     * @arg {YProcessT} t
    */
    constructor(t) {
        
        t = [...arguments];
        
        super(Object.assign(t = FProcess.#before(t), {}));
        
        FProcess.#deceit.apply(this, [t]);
        
    };
    
    /** @arg {any[]} t */
    static #before(t) {
        
        /** @type {YProcessT} */
        let r = {};
        
        if (t?.length === 1 && [Object, YProcess].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {
            
            r = t[0];
            
        } else if (t?.length) {
            
            if (t[0]?._ytp) {
            
                t = [...t[0]._ytp];
            
            };
            
            switch (t.length) {
                
                case 3: r.path = t[2];
                case 2: r.args = t[1];
                case 1: r.label = t[0];
                
            };
            
            if (!Object.values(r).length) {
                
                r = { _ytp: t, };
                
            };
            
        };
        
        return r;
        
    };
    /** @arg {YProcessT} t @this {YProcess} */
    static #deceit(t) {
        
        try {
            
            FProcess.#verify.apply(this, [t]);
            
        } catch (e) {
            
            throw e;
            
        } finally {
            
            
            
        };
        
    };
    /** @arg {YProcessT} t @this {YProcess} */
    static #verify(t) {
        
        const {
            
            
            
        } = t;
        
        FProcess.#handle.apply(this, [t]);
        
    };
    /** @arg {YProcessT} t @this {YProcess} */
    static #handle(t) {
        
        if (t.path) {

            if (condIsString(t.path)) {
                
                t.path = new YPath(t.path);

            };

        };
        
        FProcess.#create.apply(this, [t]);
        
    };
    /** @arg {YProcessT} t @this {YProcess} */
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
 * ### YProcess
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `os\dispatcher\process`
 * - Цепочка `BDVHC`
 * ***
 * 
 * 
 * 
 * ***
 * 
*/
export class YProcess extends FProcess {
    
    /**
     * ### on
     * - Версия `0.0.0`
     * - Модуль `os\dispatcher\process`
     * ***
     * 
     * 
     * 
     * ***
     * 
     * @public
    */
    on() {
        
        this.link = fork(this.path.get(), {

            stdio: 'inherit',
            
        }).on('exit', () => {

            this.status = 3;

        }).on('message', (data) => {

            switch (data) {

                case 'restart': this.restart(); break;

            };

        }).on('close', () => {

            

        });

        this.status = 1;

        return this;
        
    };
    /**
     * ### off
     * - Версия `0.0.0`
     * - Модуль `os\dispatcher\process`
     * ***
     * 
     * Метод завершения процесса.
     * 
     * ***
     * @public
    */
    off() {
        
        this.link.kill();

        this.status = 3;

        return this;
        
    };
    /**
     * ### restart
     * - Версия `0.0.0`
     * - Модуль `os\dispatcher\process`
     * ***
     * 
     * Метод перезапуска процесса.
     * 
     * ***
     * @public
    */
    restart() {

        this.off();

        this.status = 0;

        this.on();

        return this;
        
    };
    
};

/**
 * @file class.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @copyright Yakhin Nikita Artemovich 2023
*/