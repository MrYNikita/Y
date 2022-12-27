import { YJect } from "../YJect/YJect.mjs";
import { YString } from "../../string/YString/YString.mjs";
import { jectFill } from "../ject.mjs";
import { YListener } from "./YListener/YListener.mjs";
import { YInterface } from "./YInterface/YInterface.mjs";
import { configYTerminal } from "../../config.mjs";

/**
 * @typedef TBTerminal
 * @prop {[number,number]} sizes
 * @typedef {{[p in Exclude<keyof DTerminal,keyof STerminal>|Exclude<keyof STerminal,keyof DTerminal>]:(DTerminal[p]&STerminal[p])}&TBTerminal} TTerminal
*/

class STerminal extends YJect {



};
class DTerminal extends STerminal {



};
class ITerminal extends DTerminal {

    /**
     * Разметка.
     * @type {YString}
    */
    layout = new YString();
    /**
     * Скрины.
     * @type {YInterface[]}
    */
    interfaces = [];
    /**
     * Прослушиватель пользовательского ввода.
     * @type {YListener}
    */
    listener = new YListener();
    /**
     * Активный экран.
     * @type {YInterface?}
    */
    interfaceActive = null;

};
class MTerminal extends ITerminal {



};
class FTerminal extends MTerminal {

    /**
     * Контсруктор класса `YTerminal`
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *  @arg {TTerminal} t
    */
    constructor(t = {}) {

        t = FTerminal.#before(Object.values(arguments));

        FTerminal.#deceit(t);

        super(t);

        FTerminal.#create.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        if (t?.length === 1 && [Object, YTerminal].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

            return t[0];

        } else if (t?.length) {

            /** @type {TTerminal&DTerminal} */
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
    /** @arg {TTerminal} t @this {YTerminal} */
    static #deceit(t) {

        try {

            FTerminal.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @arg {TTerminal} t @this {YTerminal} */
    static #verify(t) {

        const {



        } = t;

        FTerminal.#handle(t);

    };
    /** @arg {TTerminal} t @this {YTerminal} */
    static #handle(t) {

        if (!t.sizes) {

            t.sizes = [...configYTerminal.sizes];

        } else {

            if (!t.sizes[0]) t.sizes[0] = configYTerminal.sizes[0];
            if (!t.sizes[1]) t.sizes[1] = configYTerminal.sizes[1];

        };

    };
    /** @arg {TTerminal} t @this {YTerminal} */
    static #create(t) {

        const {



        } = t;

        jectFill(this, t);

        this.layout

            .paste(configYTerminal.symbolSpace)
            .repeat(t.sizes[0] * t.sizes[1])
            .changeRowLength(t.sizes[0])
            .repaint('b', 1, 1)

    };

};

/**
 * Класс `YTerminal`
 *
 *
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль ``
 * - Цепочка `BDVHC`
*/
export class YTerminal extends FTerminal {

    display() {

        this.interfaceActive?.display();

        return this;

    };
    /**
     *
     * @arg {...YScreen} interfaces
    */
    appendInterface(...interfaces) {

        this.interfaces.push(...interfaces.map(i => {

            if (i.constructor === Object) i = new YInterface(i);

            i.over = this;
            i.terminal = this;

            return i;

        }));

        if (!this.interfaceActive) this.interfaceActive = this.interfaces[0];

        return this;

    };

};