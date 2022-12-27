import { YJect } from "../../../YJect/YJect.mjs";
import { jectFill } from "../../../ject.mjs";

/**
 * @typedef TBElement
 * @prop {any} _
 * @typedef {{[p in Exclude<keyof DElement,keyof SElement>|Exclude<keyof SElement,keyof DElement>]:(DElement[p]&SElement[p])}} TDElement
 * @typedef {TDElement&TBElement} TElement
*/

class SElement extends YJect {



};
class DElement extends SElement {

    /**
     * Координаты размещения.
     * @type {[number,number]}
    */
    coords = [0, 0];
    /**
     * Разметка.
     * @type {string?}
    */
    layout = '';

};
class IElement extends DElement {

    /**
     * Интерфейс размещения элемента.
     * @type {import("../YInterface.mjs").YInterface?}
    */
    interface = null;

};
class MElement extends IElement {



};
class FElement extends MElement {

    /**
     * Контсруктор класса `YElement`
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *  @arg {TElement} t
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

            /** @type {TElement&DElement} */
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
    /** @arg {TElement} t @this {YElement} */
    static #deceit(t) {

        try {

            FElement.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @arg {TElement} t @this {YElement} */
    static #verify(t) {

        const {



        } = t;

        FElement.#handle(t);

    };
    /** @arg {TElement} t @this {YElement} */
    static #handle(t) {



    };
    /** @arg {TElement} t @this {YElement} */
    static #create(t) {

        const {



        } = t;

        jectFill(this, t);



    };

};

/**
 * Класс `YElement`
 *
 * Класс элементов интерфейса.
 * Данный класс позволяет создавать объекты, нацеленные на взаимодействие с пользователем.
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль ``
 * - Цепочка `BDVHC`
*/
export class YElement extends FElement {



};