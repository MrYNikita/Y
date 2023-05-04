//#region YI

import { arrayUnite } from '../../../../array/module.mjs';
import { YTerminal } from '../class.mjs';
import { YElement } from '../element/class.mjs';
import { YInteract } from '../element/interact/class.mjs';
import { YSwitch } from '../switch/class.mjs';
import { YReceiver } from '../receiver/class.mjs';
import { YStyle } from '../style/class.mjs';

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

/** ### YInterfaceT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `ject\entity\terminal\interface`
 * 
 * Основной параметр модуля `YInterface`.
 * 
 * @typedef {YInterfaceTE&YInterfaceTU} YInterfaceT
 * 
*/
/** ### YInterfaceTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `ject\entity\terminal\interface`
 * 
 * Параметр наследования `YInterface`.
 * 
 * @typedef {{[p in Exclude<keyof DInterface,keyof SInterface>|Exclude<keyof SInterface,keyof DInterface>]:(DInterface[p]&SInterface[p])}} YInterfaceTE
 * 
*/
/** ### YInterfaceTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `ject\entity\terminal\interface`
 * 
 * Уникальные параметры `YInterface`.
 * 
 * @typedef YInterfaceTU
 * @prop {YInteract[]} interacts
 * 
*/

//#endregion

class SInterface extends YReceiver {
    
    /**
     * ###  count
     * 
     * Счётчик интерфейсов.
     * 
     * *** 
     * @type {number} 
     * @protected
    */
    static count = 0;
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
class DInterface extends SInterface {
    
    /**
     * ### label
     *
     * Метка.
     *
     * ***
     * @type {string}
     * @public
    */
    label = `intf-${SInterface.count++}`;
    /**
     * ### style
     * 
     * Стиль.
     * 
     * *** 
     * @type {YStyle}
     * @public
    */
    style = {};
    /**
     * ### layout
     *
     * Разметка.
     *
     * ***
     * @type {YString?}
     * @public
    */
    layout = null;
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
     * ### elements
     *
     * Элементы.
     *
     * ***
     * @type {YElement[]}
     * @public
    */
    elements = [];
    /**
     * ### interfaces
     *
     * Интерфейсы.
     *
     * ***
     * @type {YInterface[]}
     * @public
    */
    interfaces = [];
    /**
     * ### interfaceOver
     *
     * Над интерфейс.
     *
     * ***
     * @type {YInterface?}
     * @public
    */
    interfaceOver = null;
    
};
class IInterface extends DInterface {
    
    /** @type {YSwitch} */
    recepient = new YSwitch(this);
    
};
class MInterface extends IInterface {
    
    
    
};
class FInterface extends MInterface {
    
    /**
     * ### YInterface.constructor
     * 
     * 
     * 
     * ***
     * @arg {YInterfaceT} t
    */
    constructor(t) {
        
        t = [...arguments];
        
        super(Object.assign(t = FInterface.#before(t), {}));
        
        FInterface.#deceit.apply(this, [t]);
        
    };
    
    /** @arg {any[]} t */
    static #before(t) {
        
        /** @type {YInterfaceT} */
        let r = {};
        
        if (t?.length === 1 && [Object, YInterface].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {
            
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
    /** @arg {YInterfaceT} t @this {YInterface} */
    static #deceit(t) {
        
        try {
            
            FInterface.#verify.apply(this, [t]);
            
        } catch (e) {
            
            throw e;
            
        } finally {
            
            
            
        };
        
    };
    /** @arg {YInterfaceT} t @this {YInterface} */
    static #verify(t) {
        
        const {
            
            
            
        } = t;
        
        FInterface.#handle.apply(this, [t]);
        
    };
    /** @arg {YInterfaceT} t @this {YInterface} */
    static #handle(t) {

        FInterface.#create.apply(this, [t]);
        
    };
    /** @arg {YInterfaceT} t @this {YInterface} */
    static #create(t) {
        
        const {
            
            
            
        } = t;
        
        this.adopt(t);
        
        if (config) {
            
            this.adoptDefault(config);
            
        };

        if (t.interacts instanceof Array) {

            this.appendInteracts(...t.interacts);

        };

        this.appendElements(...this.elements.splice(0));
        this.appendInterfaces(...this.interfaces.splice(0));
        
    };
    
};

/**
 * ### YInterface
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `ject\entity\terminal\interface`
 * - Цепочка `BDVHC`
 * ***
 * 
 * 
 * 
 * ***
 * 
*/
export class YInterface extends FInterface {
    
    /**
     * ### drop
     * - Версия `0.0.0`
     * - Модуль `ject\terminal\interface`
     * ***
     *
     * Метод сброса интерфейса.
     *
     * Если интерфейс является активным для своего терминала, то отображение обновится.
     *
     * Данный метод:
     * - удаляет все непостоянные элементы.
     *
     * ***
     *
     * @public
    */
    drop() {

        this.elements = this.elements.filter(e => e.permanent);

        if (this.terminal.interface === this) {

            this.terminal.display();

        };

        return this;

    };
    /**
     * ### update
     * - Версия `0.0.0`
     * - Модуль `ject\terminal\interface`
     * ***
     *
     * Метод обновления интерфейса.
     *
     * ***
     *
     * @public
    */
    update() {

        this.execHandle('update');

        return this;

    };
    /**
     * ### display
     * - Версия `0.0.0`
     * ***
     * 
     * Метод отображения интерфейса.
     * 
     * ***
     * @public
    */
    display() {
        
        this.terminal.displayClear();

        arrayUnite(this.elements, this.interactor, this.terminal.transfers).forEach(element => {

            element.display();

        });

        return this;
        
    };

    /**
     * ### setTerminal
     * - Версия `0.0.0`
     * - Модуль `ject\terminal\interface`
     * ***
     *
     * Метод назначения терминала.
     *
     * ***
     * @arg {YTerminal} terminal `Терминал`
     * @public
    */
    setTerminal(terminal) {

        if (terminal && terminal !== this.terminal && terminal instanceof YTerminal) {

            /** @type {YTerminal} */
            this.terminal = terminal;

            if (!this.style) {

                this.style = terminal.style;

            };
            if (this.recepient) {

                const t = this.recepient.interacts[0];

                this.recepient.interacts.forEach(interact => {

                    interact.setInterface(this);

                });

            };

            this.elements.forEach(e => e.setInterface(this));
            this.interfaces.forEach(i => i.setTerminal(terminal));

        };

        return this;

    };
    /**
     * ### setInterface
     * - Версия `0.0.0`
     * - Модуль `ject\terminal\interface`
     * ***
     *
     * Метод назначения интерфейса.
     *
     * ***
     * @arg {YInterface} intf `Интерфейс`
     * @public
    */
    setInterface(intf) {

        if (intf instanceof YInterface) {

            this.interfaceOver = intf;

            Object.setPrototypeOf(this.style, intf.style);

            this.setTerminal(intf.terminal);

        };

        return this;

    };

    /**
     * ### appendElements
     * - Версия `0.2.0`
     * - Модуль `ject\terminal\interface`
     * ***
     *
     * Метод добавления элементов.
     *
     * ***
     * @arg {...YElement} elements `Элементы`
     * @public
    */
    appendElements(...elements) {

        this.elements.push(...elements.filter(e => {

            return e instanceof YElement;

        }).map(e => {

            e.setInterface(this);

            return e;

        }));

        return this;

    };
    /**
     * ### appendInteracts
     * - Версия `0.0.0`
     * ***
     * 
     * Метод добавления интеракторов.
     * 
     * ***
     * @arg {...YInteract} interacts `Интеракторы`
     * @public
    */
    appendInteracts(...interacts) {
        
        this.recepient.appendInteracts(...interacts);

        return this;
        
    };
    /**
     * ### appendInterfaces
     * - Версия `0.1.0`
     * - Модуль `ject\terminal\interface`
     * ***
     *
     * Метод добавления интерфейсов.
     *
     * ***
     * @arg {...YInterface} interfaces `Интерфейсы`
     * @public
    */
    appendInterfaces(...interfaces) {

        this.interfaces.push(...interfaces.filter(i => {

            return i instanceof YInterface;

        }).map(i => {

            i.setInterface(this);

            return i;

        }));

        return this;

    };
    
};