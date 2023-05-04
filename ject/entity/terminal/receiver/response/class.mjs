//#region YI

import { YJect } from '../../../../class.mjs';

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

/** ### YResponseT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `ject\entity\terminal\receiver\response`
 * 
 * Основной параметр модуля `YResponse`.
 * 
 * @typedef {YResponseTE&YResponseTU} YResponseT
 * 
*/
/** ### YResponseTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `ject\entity\terminal\receiver\response`
 * 
 * Параметр наследования `YResponse`.
 * 
 * @typedef {{[p in Exclude<keyof DResponse,keyof SResponse>|Exclude<keyof SResponse,keyof DResponse>]:(DResponse[p]&SResponse[p])}} YResponseTE
 * 
*/
/** ### YResponseTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `ject\entity\terminal\receiver\response`
 * 
 * Уникальные параметры `YResponse`.
 * 
 * @typedef YResponseTU
 * @prop {any} _
 * 
*/

//#endregion

class SResponse extends YJect {
    
    /** ### config
     * 
     * Конфигуратор.
     * 
     * ***
     * @public
    */
    static config = config;
    
};
class DResponse extends SResponse {
    
    /**
     * ### update
     *
     * Обновление.
     *
     * Уведомляет терминал о необходимости произвести обновление.
     *
     * ***
     * @type {boolean}
     * @public
    */
    update = true;
    
};
class IResponse extends DResponse {
    
    
    
};
class MResponse extends IResponse {
    
    
    
};
class FResponse extends MResponse {
    
    /**
     * ### YResponse.constructor
     * 
     * 
     * 
     * ***
     * @arg {YResponseT} t
    */
    constructor(t) {
        
        t = [...arguments];
        
        super(Object.assign(t = FResponse.#before(t), {}));
        
        FResponse.#deceit.apply(this, [t]);
        
    };
    
    /** @arg {any[]} t */
    static #before(t) {
        
        /** @type {YResponseT} */
        let r = {};
        
        if (t?.length === 1 && [Object, YResponse].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {
            
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
    /** @arg {YResponseT} t @this {YResponse} */
    static #deceit(t) {
        
        try {
            
            FResponse.#verify.apply(this, [t]);
            
        } catch (e) {
            
            throw e;
            
        } finally {
            
            
            
        };
        
    };
    /** @arg {YResponseT} t @this {YResponse} */
    static #verify(t) {
        
        const {
            
            
            
        } = t;
        
        FResponse.#handle.apply(this, [t]);
        
    };
    /** @arg {YResponseT} t @this {YResponse} */
    static #handle(t) {
        
        
        
        FResponse.#create.apply(this, [t]);
        
    };
    /** @arg {YResponseT} t @this {YResponse} */
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
 * ### YResponse
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `ject\entity\terminal\receiver\response`
 * - Цепочка `BDVHC`
 * ***
 * 
 * 
 * 
 * ***
 * 
*/
export class YResponse extends FResponse {
    
    
    
};