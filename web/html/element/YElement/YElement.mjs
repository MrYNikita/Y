import { jectAdopt, jectSupplement } from "../../../../ject/ject.mjs";
import { YJect } from "../../../../ject/YJect/YJect.mjs";
import { YEvent } from "../../../event/YEvent/YEvent.mjs";
import { elementCreate, elementDecomposeString } from "../element.mjs";

/**
 * @typedef TElementProperty
 * @prop {string} text
 * @prop {string} type
 * @typedef TBElement
 * @prop {string} id
 * @prop {string} type
 * @prop {string} string
 * @prop {string[]} attachments
 * @prop {string[]} classes
 * @prop {HTMLElement} element
 * @prop {TElementProperty} property
 * @typedef {DElement&TBElement} TElement
*/

class SElement extends YJect {

    /**
     * Метод поиска элемента по `id`.
     * - Версия `0.0.0`
     * @arg {string} id Идентификатор поиска.
    */
    static findById(id) {

        const e = document.querySelector('#' + id);

        if (e) return new YElement(e);
        else return null;

    };
    /**
     * Метод поиска элементов по `id` и оборачивания их в `YElement`.
     * - Версия `0.0.0`
     * @arg {...string} id Идентификаторы поиска.
    */
    static findAllById(...id) {

        if (id.length) {

            const es = [];

            id.filter(f => f).forEach(i => es.push(SElement.findById(i)));

            return es;

        };

        return null;

    };

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
     *  @arg {TElement} t
    */
    constructor(t = {}) {

        t = FElement.#before(Object.values(arguments));

        FElement.#deceit(t);

        super(t);

        FElement.#create.apply(this, [t]);

    };

    /** @arg {Array<any>} t */
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

        if (!t.element && t.string) t.element = elementCreate(elementDecomposeString(t.string)[0]);
        else if (!t.element && !t.string) t.element = elementCreate(t);

    };
    /** @arg {TElement} t @this {YElement} */
    static #create(t) {

        const {



        } = t;

        jectAdopt(this, t);

    };

};

/**
 * Класс `YElement`.
 *
 * Данный класс позволяет взаимодействовать с `html` элементами.
 * - Тип `SDIMFY-1.1`
 * - Версия `0.2.0`
 * - Цепочка `BDVHC`
*/
export class YElement extends FElement {



};