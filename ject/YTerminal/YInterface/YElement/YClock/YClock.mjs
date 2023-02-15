import { stringCastToDateJp } from "../../../../../string/string.mjs";
import { YInterface } from "../../YInterface.mjs";
import { YElement } from "../YElement.mjs";

//#region YT

/** ### YClockT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `YClock`
 *
 * Основной параметр модуля `YClock`.
 *
 * @typedef {YClockTE&YClockTU&import("../YElement.mjs").YElementT} YClockT
 *
*/
/** ### YClockTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `YClock`
 *
 * Параметр наследования `YClock`.
 *
 * @typedef {{[p in Exclude<keyof DClock,keyof SClock>|Exclude<keyof SClock,keyof DClock>]:(DClock[p]&SClock[p])}} YClockTE
 *
*/
/** ### YClockTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `YClock`
 *
 * Уникальные параметры `YClock`.
 *
 * @typedef YClockTU
 * @prop {any} _
 *
*/

//#endregion

class SClock extends YElement {



};
class DClock extends SClock {



};
class IClock extends DClock {

    /**
     * ### interval
     *
     * Интервал.
     *
     * ***
     * @type {Timer?}
     * @public
    */
    interval = null;

};
class MClock extends IClock {



};
class FClock extends MClock {

    /**
     * ### YClock.constructor
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *
     *
     *
     * ***
     *  @arg {YClockT} t
    */
    constructor(t = {}) {

        t = FClock.#before(Object.values(arguments));

        FClock.#deceit(t);

        super(t);

        FClock.#create.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        if (t?.length === 1 && [Object, YClock].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

            return t[0];

        } else if (t?.length) {

            /** @type {YClockT} */
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
    /** @arg {YClockT} t @this {YClock} */
    static #deceit(t) {

        try {

            FClock.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @arg {YClockT} t @this {YClock} */
    static #verify(t) {

        const {



        } = t;

        FClock.#handle(t);

    };
    /** @arg {YClockT} t @this {YClock} */
    static #handle(t) {



    };
    /** @arg {YClockT} t @this {YClock} */
    static #create(t) {

        const {



        } = t;

        this.adopt(t);

        if (this.interface) {

            this.setInterface(this.interface);

        };

    };

};

/**
 * ### YClock
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `YClock`
 * - Цепочка `BDVHC`
 * ***
 * Элемент для отображения текущего времени.
*/
export class YClock extends FClock {

    /**
     * ### on
     * - Версия `0.0.0`
     * - Модуль `YClock`
     * ***
     *
     * Метод запуска часов.
     *
     * ***
     *
     * @public
    */
    on() {

        if (this.interval) {

            this.off();

        };

        this.interval = setInterval(_ => {

            if (this.terminal) {

                this.terminal.display();

            };

        }, 1000);

        return this;

    };
    /**
     * ### off
     * - Версия `0.0.0`
     * - Модуль `YClock`
     * ***
     *
     * Метод отключения часов.
     *
     * ***
     *
     * @public
    */
    off() {

        if (this.interval) {

            clearInterval(this.interval);

        };

        return this;

    };

    getLayout() {

        return stringCastToDateJp();

    };

    /** @arg {YInterface} intf `Интерфейс` */
    setInterface(intf) {

        if (intf) {

            SClock.prototype.setInterface.apply(this, [intf]);

            this.terminal.appendHandler('back', y => {

                this.off();

            });

            this.interface.appendHandler('active', y => {

                this.on();

            });

        };

        return this;


    };

};