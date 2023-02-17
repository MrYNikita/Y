//#region YI

import { YString } from '../../../string/YString/YString.mjs';
import { YElement } from './element/class.mjs';
import { YTerminal } from '../class.mjs';
import { YInteractor } from './element/interactor/class.mjs';
import { YReceiver } from '../receiver/class.mjs';

/** @type {import('./config.mjs')['default']?} */
let config = null;

await import('./config.mjs')

    .then(c => config = c.default)
    .catch(e => e);

//#endregion
//#region YT

/** ### YInterfaceT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `ject\terminal\interface`
 *
 * Основной параметр модуля `YInterface`.
 *
 * @typedef {YInterfaceTE&YInterfaceTU} YInterfaceT
 *
*/
/** ### YInterfaceTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `ject\terminal\interface`
 *
 * Параметр наследования `YInterface`.
 *
 * @typedef {{[p in Exclude<keyof DInterface,keyof SInterface>|Exclude<keyof SInterface,keyof DInterface>]:(DInterface[p]&SInterface[p])}} YInterfaceTE
 *
*/
/** ### YInterfaceTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `ject\terminal\interface`
 *
 * Уникальные параметры `YInterface`.
 *
 * @typedef YInterfaceTU
 * @prop {any} _
 *
*/

//#endregion

class SInterface extends YReceiver {



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
    label;
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
     * ### interactor
     *
     * Интерактивный элемент.
     *
     * ***
     * @type {YInteractor?}
     * @public
    */
    interactor = null;
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



};
class MInterface extends IInterface {



};
class FInterface extends MInterface {

    /**
     * ### YInterface.constructor
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *
     *
     *
     * ***
     *  @arg {...YInterfaceT} t
    */
    constructor(...t) {

        t = FInterface.#before(t);

        super(Object.assign(t, {}));

        FInterface.#deceit.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        if (t?.length === 1 && [Object, YInterface].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

            return t[0];

        } else if (t?.length) {

            /** @type {YInterfaceT} */
            const r = {};

            if (t[0]?._ytp) {

                t = [...t[0]._ytp];

            };

            switch (t.length) {

                case 3:
                case 2:
                case 1: r.terminal = t[0];

            };

            return Object.values(r).length ? r : { _ytp: t };

        } else return {};

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

            this.adoptByDefault(config);

        };

        if (this.interactor) {

            this.recepient = this.interactor;

        };

        this.interactor.interface = this;

        this.appendElements(...this.elements.splice(0));
        this.appendInterfaces(...this.interfaces.splice(0));

    };

};

/**
 * ### YInterface
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `ject\terminal\interface`
 * - Цепочка `BDVHC`
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

        if (this.terminal.interfaceActive === this) {

            this.terminal.display();

        };

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

        if (terminal instanceof YTerminal) {

            this.terminal = terminal;

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

            this.setTerminal(intf);

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