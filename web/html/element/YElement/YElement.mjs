import { jectFill, jectSupplement } from "../../../../ject/ject.mjs";
import { YBasic } from "../../../../ject/YBasic/YBasic.mjs";
import { YJect } from "../../../../ject/YJect/YJect.mjs";
import { YEvent } from "../../../event/YEvent/YEvent.mjs";
import { elementCreate, elementDecomposeString } from "../element.mjs";

/**
 * @typedef TBElement
 * @prop {{}} property
 * @prop {string} id
 * @prop {string} type
 * @prop {string} text
 * @prop {string} string
 * @prop {Array<string>} attachments
 * @prop {Array<string>} classes
 * @prop {Array<string>} overId
 * @prop {Array<string>} overTypes
 * @prop {Array<string>} overClasses
 * @prop {Array<YEvent>} events
 * @typedef {DElement&TBElement} TElement
*/

class SElement extends YJect {



};
class DElement extends SElement {

    /**
     * Обработчики событий.
     * @type {Array<YEvent>}
    */
    events = [];

};
class IElement extends DElement {

    /**
     * Привязанный элемент.
     * @type {HTMLElement}
    */
    element;

};
class MElement extends IElement {

    /**
     * Метод добавления id элемента в таблицу.
     * - Версия `0.0.0`
     * @protected
     *
    */
    appendIdIntoTable() {

        const s = document.querySelector('.styleGlobal');

    };

};
class FElement extends MElement {

    /**
     * Контсруктор класса `YElement`
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *  @param {TElement} t
    */
    constructor(t = {}) {

        t = FElement.#before(Object.values(arguments));

        FElement.#deceit(t);

        super(t);

        FElement.#create.apply(this, [t]);

    };

    /** @param {Array<any>} t */
    static #before(t) {

        if (t?.length === 1 && t[0]?.constructor === Object) {

            return t[0];

        } else if (t?.length) {

            /** @type {TElement} */
            const r = {};

            switch (t.length) {

                case 3:
                case 2:
                case 1: {

                    if (t[0].constructor === String) r.string = t[0];
                    else if (t[0] instanceof HTMLElement) r.element = t[0];

                };

            };

            return r;

        } else return {};

    };
    /** @param {TElement} t @this {YElement} */
    static #deceit(t) {

        try {

            FElement.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @param {TElement} t @this {YElement} */
    static #verify(t) {

        const {



        } = t;

        FElement.#handle(t);

    };
    /** @param {TElement} t @this {YElement} */
    static #handle(t) {

        if (t.string) jectSupplement(t, elementDecomposeString(t.string)[0]);

    };
    /** @param {TElement} t @this {YElement} */
    static #create(t) {

        const {



        } = t;

        jectFill(this, t);

        this.element = elementCreate(

            t.type,
            t.id,
            t.classes,
            t.overId,
            t.overTypes,
            t.overClasses,
            t.attachments,
            t.property,

        );

    };

};

/**
 * Класс `YElement`.
 *
 * Данный класс позволяет взаимодействовать с `html` элементами.
 * - Тип `SDIMFY-1.1`
 * - Версия `0.1.0`
 * - Цепочка `BDVHC`
*/
export class YElement extends FElement {

    /**
     * Метод добавления обработчика событий указанного типа для элемента.
     * - Версия `0.0.0`
     * @param {keyof WindowEventMap} type Тип.
     * @param {string} label Метка.
     * @param {function(this: HTMLElement, MouseEvent|KeyboardEvent):void} func Функция.
     * @param {HTMLElement} element Элемент.
    */
    appendEvent(type, label, func) {

        this.events.push(new YEvent({ type, label, func, element: this.element, }));

        return this;

    };

};