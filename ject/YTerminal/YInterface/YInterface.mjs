import { YJect } from "../../YJect/YJect.mjs";
import { YString } from "../../../string/YString/YString.mjs";
import { jectFill } from "../../ject.mjs";
import { YTerminal } from "../YTerminal.mjs";
import { YElement } from "./YElement/YElement.mjs";

//#region YT

/** ### YInterfaceT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `YInterface`
 *
 * Основной параметр модуля `YInterface`.
 *
 * @typedef {YInterfaceTE&YInterfaceTU} YInterfaceT
 *
*/
/** ### YInterfaceTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `YInterface`
 *
 * Параметр наследования `YInterface`.
 *
 * @typedef {{[p in Exclude<keyof DInterface,keyof SInterface>|Exclude<keyof SInterface,keyof DInterface>]:(DInterface[p]&SInterface[p])}} YInterfaceTE
 *
*/
/** ### YInterfaceTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `YInterface`
 *
 * Уникальные параметры `YInterface`.
 *
 * @typedef YInterfaceTU
 * @prop {any} _
 *
*/

//#endregion

class SInterface extends YJect {



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
    label = '';
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
     * Массив элементов.
     *
     * ***
     * @type {YElement[]}
     * @public
    */
    elements = [];
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
    /**
     * ### interactor
     *
     * Интерактивный элемент.
     *
     * ***
     * @type {import('./YElement/YInteract/YInteract.mjs').YInteract?}
     * @public
    */
    interactor = null;
    /**
     * ### interfaces
     *
     * Интерфейсы.
     *
     * Вложенные интерфейсы используются для углубления структуры.
     *
     * ***
     * @type {YInterface[]}
     * @public
    */
    interfaces = [];

};
class IInterface extends DInterface {



};
class MInterface extends IInterface {

    /**
     * ### signal
     * - Версия `0.0.0`
     * - Модуль `YInterface`
     * ***
     *
     *
     *
     * ***
     *
     * @protected
    */
    signal() {

        if (this.interactor) {

            this.interactor.receive();

        };

        return this;

    };
    /**
     * ### receive
     * - Версия `0.1.0`
     * - Модуль `YInterface`
     * ***
     *
     * Метод принятия данных от прослушивателя.
     *
     * ***
     *
     * @protected
    */
    receive() {

        this.signal();

        return this;

    };

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
     *  @arg {YInterfaceT} t
    */
    constructor(t = {}) {

        t = FInterface.#before(Object.values(arguments));

        FInterface.#deceit(t);

        super(t);

        FInterface.#create.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        if (t?.length === 1 && [Object, YInterface].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

            return t[0];

        } else if (t?.length) {

            /** @type {YInterfaceT} */
            const r = {};

            if (t[0]?._ytp) t = [...t[0]._ytp];

            switch (t.length) {

                case 3:
                case 2:
                case 1:

            };

            return Object.values(r).length ? r : { _ytp: t };

        } else return {};

    };
    /** @arg {YInterfaceT} t @this {YInterface} */
    static #deceit(t) {

        try {

            FInterface.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @arg {YInterfaceT} t @this {YInterface} */
    static #verify(t) {

        const {



        } = t;

        FInterface.#handle(t);

    };
    /** @arg {YInterfaceT} t @this {YInterface} */
    static #handle(t) {



    };
    /** @arg {YInterfaceT} t @this {YInterface} */
    static #create(t) {

        const {



        } = t;

        jectFill(this, t);

        if (this.terminal) {

            this.setTerminal(this.terminal);

        };
        if (this.interface) {

            this.setInterface(this.interface);

        };
        if (this.interfaces.length) {

            this.interfaces.forEach(i => {

                i.setInterface(this);

            });

        };

    };

};

/**
 * ### YInterface
 * - Тип `SDIMFY`
 * - Версия `0.1.0`
 * - Модуль `ject.terminal.YInterface`
 * - Цепочка `BDVHC`
 * ***
 * Класс отображений. Позволяет `YTerminal` (терминалам) отображать данные и результаты взаимодействий.
 *
 * Состоит из собственной разметки и `YElement` (элементов) отображения, один из которых может быть `YInteract` (интерактивным).
*/
export class YInterface extends FInterface {

    /**
     * ### drop
     * - Версия `0.0.0`
     * - Модуль `YInterface`
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
     * - Модуль `YInterface`
     * ***
     *
     * Метод для назначения для интерфейса его терминала.
     *
     * ***
     * @arg {YTerminal} terminal `Терминал`
     * @public
    */
    setTerminal(terminal) {

        if (terminal instanceof YTerminal) {

            this.terminal = terminal;

            if (this.interactor) {

                this.interactor.setInterface(this);

            };

            this.elements.forEach(e => e.setInterface(this));
            this.interfaces.forEach(i => i.setTerminal(terminal));

        };

        return this;

    };
    /**
     * ### setInterface
     * - Версия `0.0.0`
     * - Модуль `YInterface`
     * ***
     *
     * Метод установки интерфейса.
     *
     * ***
     * @arg {YInterface} intf `Интерфейс`
     * @public
    */
    setInterface(intf) {

        if (intf instanceof YInterface) {

            this.interface = intf;

            if (this.interface.terminal) {

                this.setTerminal(this.interface.terminal);

            };

        };

        return this;

    };

    /**
     * ### appendElements
     * - Версия `0.0.1`
     * - Модуль `YInterface`
     * ***
     *
     * Метод добавления элементов.
     *
     * ***
     * @arg {...import("./YElement/YElement.mjs").YElementT|YElement} elements `Элементы`
     * @public
    */
    appendElements(...elements) {

        if (elements.length) {

            this.elements.push(...elements.filter(e => e).map(e => {

                if (e.constructor !== YElement) {

                    e = new YElement({ ...e, interface: this });

                };

                return e;

            }));

        };

        return this;

    };
    /**
     * ### appendInterfaces
     * - Версия `0.0.0`
     * - Модуль `YInterface`
     * ***
     *
     * Метод добавления вложенных интерфейсов.
     *
     * ***
     * @arg {...(YInterfaceT|YInterface)} interfaces `Интерфейсы`
     * @public
    */
    appendInterfaces(...interfaces) {

        if (interfaces.length) {

            this.interfaces.push(...interfaces.map(i => {

                if (i.constructor !== YInterface) {

                    i = new YInterface(i);

                };

                i.setInterface(this);

                return i;

            }));

        };

        return this;

    };

};