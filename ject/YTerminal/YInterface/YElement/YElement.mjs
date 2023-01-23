import { YJect } from "../../../YJect/YJect.mjs";
import { jectFill } from "../../../ject.mjs";
import { YTerminal } from "../../YTerminal.mjs";
import { YInterface } from "../YInterface.mjs";

//#region YT

/** ### YElementT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `YElement`
 *
 * Основной параметр модуля `YElement`.
 *
 * @typedef {YElementTE&YElementTU} YElementT
 *
*/
/** ### YElementTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `YElement`
 *
 * Параметр наследования `YElement`.
 *
 * @typedef {{[p in Exclude<keyof DElement,keyof SElement>|Exclude<keyof SElement,keyof DElement>]:(DElement[p]&SElement[p])}} YElementTE
 *
*/
/** ### YElementTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `YElement`
 *
 * Уникальные параметры `YElement`.
 *
 * @typedef YElementTU
 * @prop {any} _
 *
*/

//#endregion

class SElement extends YJect {



};
class DElement extends SElement {

    /**
     * ### coords
     *
     * Координаты размещения элемента.
     *
     * ***
     * @type {[number,number]?}
     * @public
    */
    coords = [1, 1];

};
class IElement extends DElement {

    /**
     * ### terminal
     *
     * Терминал.
     *
     * ***
     * @type {YTerminal?}
     * @protected
    */
    terminal = null;
    /**
     * ### interface
     *
     * Интерфейс размещения элемента.
     *
     * ***
     * @type {import("../YInterface.mjs").YInterface?}
     * @protected
    */
    interface = null;

};
class MElement extends IElement {



};
class FElement extends MElement {

    /**
     * ### YElement.constructor
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *
     *
     *
     * ***
     *  @arg {YElementT} t
    */
    constructor(t = {}) {

        t = FElement.#before(Object.values(arguments));

        FElement.#deceit(t);

        super(t);

        FElement.#create.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        if (t?.length === 1 && [Object, YElement].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

            return t[0];

        } else if (t?.length) {

            /** @type {YElementT} */
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
    /** @arg {YElementT} t @this {YElement} */
    static #deceit(t) {

        try {

            FElement.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @arg {YElementT} t @this {YElement} */
    static #verify(t) {

        const {



        } = t;

        FElement.#handle(t);

    };
    /** @arg {YElementT} t @this {YElement} */
    static #handle(t) {



    };
    /** @arg {YElementT} t @this {YElement} */
    static #create(t) {

        const {



        } = t;

        jectFill(this, t);



    };

};

/**
 * ### YElement
 * - Тип `SDIMFY`
 * - Версия `0.0.1`
 * - Модуль `ject.terminal.YElement`
 * - Цепочка `BDVHC`
 * ***
 * Класс элементов интерфейса.
 * Данный класс позволяет создавать объекты, нацеленные на взаимодействие с пользователем.
*/
export class YElement extends FElement {

    /**
     * ### getLayout
     * - Версия `0.0.1`
     * - Модуль `YElement`
     * ***
     *
     * Метод получения разметки элемента.
     *
     * ***
     *
     * @public
    */
    getLayout() {

        return '';

    };

};