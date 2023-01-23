import { YJect } from "../../YJect/YJect.mjs";
import { YString } from "../../../string/YString/YString.mjs";
import { jectFill } from "../../ject.mjs";
import { YElement } from "./YElement/YElement.mjs";
import { YInteract } from "./YElement/YInteract/YInteract.mjs";
import { YTerminal } from "../YTerminal.mjs";

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
     * ### interactor
     *
     * Интерактивный элемент.
     *
     * ***
     * @type {YInteract?}
     * @public
    */
    interactor = null;

};
class IInterface extends DInterface {



};
class MInterface extends IInterface {

    /**
     * ### receive
     * - Версия `0.0.1`
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
     * ### appendElements
     * - Версия `0.0.1`
     * - Модуль `YInterface`
     * ***
     *
     *
     *
     * ***
     * @arg {...import("./YElement/YElement.mjs").TElement} elements `Элементы`
     * @public
    */
    appendElements(...elements) {

        return this;

    };

};