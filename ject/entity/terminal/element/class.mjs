//#region YI

import { YJect } from '../../../class.mjs';
import { YTerminal } from '../class.mjs';
import { YInterface } from '../interface/class.mjs';

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

/** ### YElementT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `ject\entity\terminal\element`
 * 
 * Основной параметр модуля `YElement`.
 * 
 * @typedef {YElementTE&YElementTU} YElementT
 * 
*/
/** ### YElementTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `ject\entity\terminal\element`
 * 
 * Параметр наследования `YElement`.
 * 
 * @typedef {{[p in Exclude<keyof DElement,keyof SElement>|Exclude<keyof SElement,keyof DElement>]:(DElement[p]&SElement[p])}} YElementTE
 * 
*/
/** ### YElementTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `ject\entity\terminal\element`
 * 
 * Уникальные параметры `YElement`.
 * 
 * @typedef YElementTU
 * @prop {any} _
 * 
*/

//#endregion

class SElement extends YJect {
    
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
class DElement extends SElement {
    
    /**
     * ### title
     * 
     * Заголовок.
     * 
     * *** 
     * @type {string?} 
     * @public
    */
    title;
    /**
     * ### coords
     *
     * Координаты.
     *
     * ***
     * @type {[number, number]}
     * @public
    */
    coords;
    /**
     * ### redraw
     * 
     * Перерисовка.
     * 
     * *** 
     * @type {boolean} 
     * @public
    */
    redraw;
    /**
     * ### terminal
     *
     * Терминал.
     *
     * ***
     * @type {YTerminal?}
     * @public
    */
    terminal = null;
    /**
     * ### transfer
     *
     * Передача.
     *
     * Помечает элемент, как (не) передаваемый.
     *
     * Передаваемые элементы сохраняются при переходе между интерфейсами.
     *
     * Передаваемый элемент перестанет отображаться после того, как произойдет откат за один интерфейс от того, который его объявил.
     *
     * ***
     * @type {boolean}
     * @public
    */
    transfer;
    /**
     * ### permanent
     *
     * Постояноство.
     *
     * Постоянные элементы не удаляются при переходе между интерфейсами.
     *
     * ***
     * @type {boolean}
     * @public
    */
    permanent;
    /**
     * ### interface
     *
     * Интерфейс.
     *
     * ***
     * @type {YInterface?}
     * @public
    */
    interface = null;
    
};
class IElement extends DElement {
    
    
    
};
class MElement extends IElement {
    
    
    
};
class FElement extends MElement {
    
    /**
     * ### YElement.constructor
     * 
     * 
     * 
     * ***
     * @arg {YElementT} t
    */
    constructor(t) {
        
        t = [...arguments];
        
        super(Object.assign(t = FElement.#before(t), {}));
        
        FElement.#deceit.apply(this, [t]);
        
    };
    
    /** @arg {any[]} t */
    static #before(t) {
        
        /** @type {YElementT} */
        let r = {};
        
        if (t?.length === 1 && [Object, YElement].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {
            
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
    /** @arg {YElementT} t @this {YElement} */
    static #deceit(t) {
        
        try {
            
            FElement.#verify.apply(this, [t]);
            
        } catch (e) {
            
            throw e;
            
        } finally {
            
            
            
        };
        
    };
    /** @arg {YElementT} t @this {YElement} */
    static #verify(t) {
        
        const {
            
            
            
        } = t;
        
        FElement.#handle.apply(this, [t]);
        
    };
    /** @arg {YElementT} t @this {YElement} */
    static #handle(t) {
        
        
        
        FElement.#create.apply(this, [t]);
        
    };
    /** @arg {YElementT} t @this {YElement} */
    static #create(t) {
        
        const {
            
            
            
        } = t;
        
        this.adopt(t);
        
        if (config) {
            
            this.adoptDefault(config);
            
        };

        this.setInterface(this.interface);
        
    };
    
};

/**
 * ### YElement
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `ject\entity\terminal\element`
 * - Цепочка `BDVHC`
 * ***
 * 
 * 
 * 
 * ***
 * 
*/
export class YElement extends FElement {
    
    /**
     * ### display
     * - Версия `0.0.0`
     * - Модуль `ject\entity\terminal\element`
     * ***
     * 
     * Метод отрисовки элемента.
     * 
     * ***
     * @public
    */
    display() {
        
        return this;
        
    };
    /**
     * ### setInterface
     * - Версия `0.0.0`
     * - Модуль `ject\terminal\interface\element`
     * ***
     *
     * Метод установки интерфейса для элемента.
     *
     * ***
     * @arg {YInterface} intf `Интерфейс`
     * @public
    */
    setInterface(intf) {

        if (!this.interface && intf instanceof YInterface) {

            this.terminal = intf.terminal;
            this.interface = intf;

        };

        return this;

    };
    
};