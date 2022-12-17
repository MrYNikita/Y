import { jectFill } from "../../../ject/ject.mjs";

/**
 * @typedef TBEvent
 * @prop {any} _
 * @typedef {DEvent&TBEvent} TEvent
*/

class SEvent {



};
class DEvent extends SEvent {

    /**
     * Тип.
     * @type {string}
    */
    type;
    /**
     * Функция.
     * @type {function}
    */
    func;
    /**
     * Метка.
     * @type {string}
    */
    label;
    /**
     * Элемент привязки.
     * @type {HTMLElement}
    */
    element;

};
class IEvent extends DEvent {



};
class MEvent extends IEvent {



};
class FEvent extends MEvent {

    /**
     * Контсруктор класса `YEvent`
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *  @arg {TEvent} t
    */
    constructor(t = {}) {

        t = FEvent.#before(Object.values(arguments));

        FEvent.#deceit(t);

        super(t);

        FEvent.#create.apply(this, [t]);

    };

    /** @arg {Array<any>} t */
    static #before(t) {

        if (t?.length === 1 && t[0]?.constructor === Object) {

            return t[0];

        } else if (t?.length) {

            /** @type {TEvent} */
            const r = {};

            switch (t.length) {

                case 3:
                case 2:
                case 1:

            };

            return r;

        } else return {};

    };
    /** @arg {TEvent} t @this {YEvent} */
    static #deceit(t) {

        try {

            FEvent.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @arg {TEvent} t @this {YEvent} */
    static #verify(t) {

        const {



        } = t;

        FEvent.#handle(t);

    };
    /** @arg {TEvent} t @this {YEvent} */
    static #handle(t) {



    };
    /** @arg {TEvent} t @this {YEvent} */
    static #create(t) {

        const {



        } = t;

        jectFill(this, t);

        this.on();

    };

};

/**
 * Класс `событий`.
 *
 * Данный экземпляр централизует события.
 * Рекомендуется все события привязывать к указанному объекту.
 * - Тип `SDIMFY-1.1`
 * - Версия `0.0.0`
 * - Цепочка `BDVHC`
*/
export class YEvent extends FEvent {

    /**
     * Метод для активации события.
     * - Версия `0.0.0`
    */
    on() {

        this.element.addEventListener(this.type, e => this.func.apply(this.element, [e]));

        return this;

    };
    /**
     * Метод для отключения события.
     * - Версия `0.0.0`
    */
    off() {

        this.element.removeEventListener(this.type, this.func);

        return this;

    };

};