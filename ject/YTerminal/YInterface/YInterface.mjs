import { YJect } from "../../YJect/YJect.mjs";
import { YString } from "../../../string/YString/YString.mjs";
import { jectFill } from "../../ject.mjs";
import { YElement } from "./YElement/YElement.mjs";
import { YInteract } from "./YElement/YInteract/YInteract.mjs";
import { YTerminal } from "../YTerminal.mjs";

/**
 * @typedef TBInterface
 * @prop {any} _
 * @typedef {DInterface&TBInterface} TInterface
*/

class SInterface extends YJect {



};
class DInterface extends SInterface {

    /**
     * Над-скрин.
     * @type {YInterface?}
    */
    over = null;
    /**
     * Метка.
     * @type {string}
    */
    label = '';
    /**
     * Разметка.
     * @type {YString}
    */
    layout = new YString();
    /**
     * Терминал.
     * @type {YTerminal?}
    */
    terminal = null;
    /**
     * Элементы.
     * @type {YElement[]}
    */
    elements = [];
    /**
     * Вложенные скрины.
     * @type {YInterface[]}
    */
    interfaces = [];
    /**
     * Интерактивный элемент.
     * @type {YInteract?}
    */
    interactor = null;

};
class IInterface extends DInterface {



};
class MInterface extends IInterface {



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

        if (t.interactor) t.interactor.interface = this;

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
 * Класс экранов `YTerminal`.
 *
 * Экземпляры класса предназначены для отображения экранов терминала, размещающих в себе элементы `YTerminal`.
 * Такими элементами могут выступать `YMenu` или `YInput` элементы.
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль ``
 * - Цепочка `BDVHC`
*/
export class YInterface extends FInterface {

    /**
     * Метод отображения интерфейса.
     * - Версия `0.0.0`
    */
    display() {

        const s = new YString(this.terminal.layout)

            .setCursorTo()
            .changeCursorsSize(this.layout.get().length)
            .paste(this.layout.get())
            .exec(y => {

                y.changeCursorFixed();

                this.elements.forEach(e => {

                    e.layout.split('\n').filter(s => s).forEach((s, i) => y

                        .setCursorTo(e.coords[0], e.coords[1] + i)
                        .changeCursorsSize(s.length)
                        .paste(s)

                    );

                });

                y.changeCursorFixed();

            })
            .display();

        return this;

    };
    /**
     * Метод добавления элементов.
     * - Версия `0.0.0`
     * @arg {...YElement} elements
    */
    appendElement(...elements) {

        if (elements.length) this.elements.push(...elements.filter(e => e).map(e => e instanceof YElement ? e : new YElement({ interface: this, ...e, })));

        return this;

    };

};