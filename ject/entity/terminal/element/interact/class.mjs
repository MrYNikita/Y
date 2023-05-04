//#region YI

import { YComb } from '../../listener/comb/class.mjs';
import { YBind } from '../../receiver/bind/class.mjs';
import { receiverApply } from '../../receiver/module.mjs';
import { YElement } from '../class.mjs';

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

/** ### YInteractT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `ject\entity\terminal\element\interact`
 * 
 * Основной параметр модуля `YInteract`.
 * 
 * @typedef {YInteractTE&YInteractTU} YInteractT
 * 
*/
/** ### YInteractTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `ject\entity\terminal\element\interact`
 * 
 * Параметр наследования `YInteract`.
 * 
 * @typedef {{[p in Exclude<keyof DInteract,keyof SInteract>|Exclude<keyof SInteract,keyof DInteract>]:(DInteract[p]&SInteract[p])}} YInteractTE
 * 
*/
/** ### YInteractTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `ject\entity\terminal\element\interact`
 * 
 * Уникальные параметры `YInteract`.
 * 
 * @typedef YInteractTU
 * @prop {any} _
 * 
*/

//#endregion

class SInteract extends YElement {
    
    /**
     * ### config
     * 
     * Конфигуратор.
     * 
     * ***
     * @public
    */
    static config = config;
    
    /**
     * ### binds
     *
     * Общие привязки.
     *
     * ***
     * @type {YBind[]}
     * @public
    */
    static binds = [];
    
};
class DInteract extends SInteract {
    
    
    
};
class IInteract extends DInteract {
    
    /**
     * ### focus
     * 
     * Фокусировка.
     * 
     * *** 
     * @type {boolean} 
     * @public
    */
    focus = false;
    /**
     * ### binds
     *
     * Привязки.
     *
     * ***
     * @type {YBind[]}
     * @public
    */
    binds = [];
    
};
class MInteract extends IInteract {
    
    
    
};
class FInteract extends MInteract {
    
    /**
     * ### YInteract.constructor
     * 
     * 
     * 
     * ***
     * @arg {YInteractT} t
    */
    constructor(t) {
        
        t = [...arguments];
        
        super(Object.assign(t = FInteract.#before(t), {}));
        
        FInteract.#deceit.apply(this, [t]);
        
    };
    
    /** @arg {any[]} t */
    static #before(t) {
        
        /** @type {YInteractT} */
        let r = {};
        
        if (t?.length === 1 && [Object, YInteract].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {
            
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
    /** @arg {YInteractT} t @this {YInteract} */
    static #deceit(t) {
        
        try {
            
            FInteract.#verify.apply(this, [t]);
            
        } catch (e) {
            
            throw e;
            
        } finally {
            
            
            
        };
        
    };
    /** @arg {YInteractT} t @this {YInteract} */
    static #verify(t) {
        
        const {
            
            
            
        } = t;
        
        FInteract.#handle.apply(this, [t]);
        
    };
    /** @arg {YInteractT} t @this {YInteract} */
    static #handle(t) {
        
        
        
        FInteract.#create.apply(this, [t]);
        
    };
    /** @arg {YInteractT} t @this {YInteract} */
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
 * ### YInteract
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `ject\entity\terminal\element\interact`
 * - Цепочка `BDVHC`
 * ***
 * 
 * 
 * 
 * ***
 * 
*/
export class YInteract extends FInteract {
    
    /**
     * ### receive
     * - Версия `0.0.0`
     * - Модуль `ject\terminal\interface\element\interactor`
     * ***
     *
     * Метод приёма комбинаций.
     *
     * ***
     * @arg {YComb} comb `Комбинация`
     * @public
    */
    receive(comb) {

        const response = receiverApply(this, comb);

        if (response?.redraw) {

            this.display();

        };

        return response;

    };
    
};

/**
 * @file class.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @copyright Yakhin Nikita Artemovich 2023
*/