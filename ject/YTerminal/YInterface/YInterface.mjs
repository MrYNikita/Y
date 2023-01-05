import { YJect } from "../../YJect/YJect.mjs";
import { YString } from "../../../string/YString/YString.mjs";
import { jectFill } from "../../ject.mjs";
import { YElement } from "./YElement/YElement.mjs";
import { YInteract } from "./YElement/YInteract/YInteract.mjs";
import { YTerminal } from "../YTerminal.mjs";

/**
 * @typedef TBInterface
 * @prop {any} _
 * @typedef {{[p in Exclude<keyof DInterface,keyof SInterface>|Exclude<keyof SInterface,keyof DInterface>]:(DInterface[p]&SInterface[p])}} TDInterface
 * @typedef {TDInterface&TBInterface} TInterface
*/

class SInterface extends YJect {



};
class DInterface extends SInterface {

    /**
     * Метка.
     * @type {string}
    */
    label = '';
    /**
     * Терминал.
     * @type {YTerminal?}
    */
    terminal = null;
    /**
     * Массив элементов.
     * @type {YElement[]}
    */
    elements = [];
    /**
     * Интерактивный элемент.
     * @type {YInteract?}
    */
    interactor = null;

};
class IInterface extends DInterface {



};
class MInterface extends IInterface {

    /**
     * Метод принятия данных от прослушивателя.
     * - Версия `0.0.0`
     * @protected
     *
    */
    receive() {

        

    };

};
class FInterface extends MInterface {

    /**
     * Контсруктор класса `YInterface`
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *  @arg {TInterface} t
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

            /** @type {TInterface&DInterface} */
            const r = {};

            if (t[0]._ytp) t = [...t[0]._ytp];

            switch (t.length) {

                case 3:
                case 2:
                case 1:

            };

            return Object.values(r).length ? r : { _ytp: t };

        } else return {};

    };
    /** @arg {TInterface} t @this {YInterface} */
    static #deceit(t) {

        try {

            FInterface.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @arg {TInterface} t @this {YInterface} */
    static #verify(t) {

        const {



        } = t;

        FInterface.#handle(t);

    };
    /** @arg {TInterface} t @this {YInterface} */
    static #handle(t) {



    };
    /** @arg {TInterface} t @this {YInterface} */
    static #create(t) {

        const {



        } = t;

        jectFill(this, t);



    };

};

/**
 * Класс `YInterface`
 *
 * Класс отображений. Позволяет `YTerminal` (терминалам) отображать данные и результаты взаимодействий.
 *
 * Состоит из собственной разметки и `YElement` (элементов) отображения, один из которых может быть `YInteract` (интерактивным).
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `ject.terminal`
 * - Цепочка `BDVHC`
*/
export class YInterface extends FInterface {

    /**
     * Метод добавления элементов для указанного отображения.
     * - Версия `0.0.0`
     * @arg {...import("./YElement/YElement.mjs").TElement} elements
    */
    appendElements(...elements) {

        return this;

    };

};