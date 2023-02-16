//#region YI

import { YDate } from "../../date/YDate/YDate.mjs";
import { YString } from "../../string/YString/YString.mjs";
import { YListener } from "./listener/class.mjs";
import { YReceiver } from "./receiver/class.mjs";
import { YInterface } from "./interface/class.mjs";

/** @type {import('./config.mjs')['default']?} */
let config = null;

await import('./config.mjs')

    .then(c => config = c.default)
    .catch(e => console.log(e));

//#endregion
//#region YT

/** ### YTerminalT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `ject\terminal`
 *
 * Основной параметр модуля `YTerminal`.
 *
 * @typedef {YTerminalTE&YTerminalTU&import("./receiver/class.mjs").YReceiverT} YTerminalT
 *
*/
/** ### YTerminalTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `ject\terminal`
 *
 * Параметр наследования `YTerminal`.
 *
 * @typedef {{[p in Exclude<keyof DTerminal,keyof STerminal>|Exclude<keyof STerminal,keyof DTerminal>]:(DTerminal[p]&STerminal[p])}} YTerminalTE
 *
*/
/** ### YTerminalTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `ject\terminal`
 *
 * Уникальные параметры `YTerminal`.
 *
 * @typedef YTerminalTU
 * @prop {any} _
 *
*/

//#endregion

class STerminal extends YReceiver {

    /**
     * ### layout
     *
     * Общая разметка.
     *
     * ***
     * @type {YString}
     * @public
    */
    static layout = new YString();

};
class DTerminal extends STerminal {

    /**
     * ### sizes
     *
     * Размер.
     *
     * ***
     * @type {[number, number]}
     * @public
    */
    sizes;
    /**
     * ### colorF
     *
     * Цвет символов.
     *
     * ***
     * @type {string?}
     * @public
    */
    colorF;
    /**
     * ### colorB
     *
     * Цвет фона.
     *
     * ***
     * @type {string}
     * @public
    */
    colorB;
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
     * ### interfaceActive
     *
     * Активный интерфейс.
     *
     * ***
     * @type {YInterface}
     * @public
    */
    interfaceActive = this.interface;

};
class ITerminal extends DTerminal {

    /**
     * ### date
     *
     *
     *
     * ***
     * @type {}
     * @public
    */
    date = new YDate();
    /**
     * ### listener
     *
     * Прослушиватель.
     *
     * ***
     * @type {YListener}
     * @public
    */
    listener = new YListener(this);

};
class MTerminal extends ITerminal {



};
class FTerminal extends MTerminal {

    /**
     * ### YTerminal.constructor
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *
     *
     *
     * ***
     *  @arg {...YTerminalT} t
    */
    constructor(...t) {

        t = FTerminal.#before(t);

        super(Object.assign(t, {}));

        FTerminal.#handle.apply(this, [t]);
        FTerminal.#create.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        if (t?.length === 1 && [Object, YTerminal].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

            return t[0];

        } else if (t?.length) {

            /** @type {YTerminalT} */
            const r = {};

            if (t[0]?._ytp) {

                t = [...t[0]._ytp];

            };

            switch (t.length) {

                case 3:
                case 2:
                case 1:

            };

            return Object.values(r).length ? r : { _ytp: t };

        } else return {};

    };
    /** @arg {YTerminalT} t @this {YTerminal} */
    static #deceit(t) {

        try {

            FTerminal.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @arg {YTerminalT} t @this {YTerminal} */
    static #verify(t) {

        const {



        } = t;

        FTerminal.#handle(t);

    };
    /** @arg {YTerminalT} t @this {YTerminal} */
    static #handle(t) {

        if (t.interface) {

            t.interface.setTerminal(this);

        };

    };
    /** @arg {YTerminalT} t @this {YTerminal} */
    static #create(t) {

        const {



        } = t;

        this.adopt(t);

        if (config) {

            this.adoptByDefault(config);

        };

        this.listener.on();

    };

};

/**
 * ### YTerminal
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `ject\terminal`
 * - Цепочка `BDVHC`
 * ***
 *
*/
export class YTerminal extends FTerminal {

    /**
     * ### display
     * - Версия `0.0.0`
     * - Модуль `ject\terminal`
     * ***
     *
     *
     *
     * ***
     *
     * @public
    */
    display() {

        console.clear();
        console.log(this);

        return this;

    };

};