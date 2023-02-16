//#region YI

import { YBasic } from "../../YBasic/YBasic.mjs";
import { emitKeypressEvents } from "readline";

//#endregion
//#region YT

/** ### YListenerT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `ject\terminal\listener`
 *
 * Основной параметр модуля `YListener`.
 *
 * @typedef {YListenerTE&YListenerTU} YListenerT
 *
*/
/** ### YListenerTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `ject\terminal\listener`
 *
 * Параметр наследования `YListener`.
 *
 * @typedef {{[p in Exclude<keyof DListener,keyof SListener>|Exclude<keyof SListener,keyof DListener>]:(DListener[p]&SListener[p])}} YListenerTE
 *
*/
/** ### YListenerTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `ject\terminal\listener`
 *
 * Уникальные параметры `YListener`.
 *
 * @typedef YListenerTU
 * @prop {any} _
 *
*/

//#endregion

class SListener extends YBasic {

    static {

        process.stdin.setRawMode(true);
        emitKeypressEvents(process.stdin);

    };

};
class DListener extends SListener {

    /**
     * ### terminal
     *
     * Терминал.
     *
     * ***
     * @type {YTerminal?}
     * @public
    */
    terminal = null;

};
class IListener extends DListener {

    /**
     * ### ctrl
     *
     * Значение нажатия ctrl.
     *
     * ***
     * @type {boolean}
     * @public
    */
    ctrl = false;
    /**
     * ### code
     *
     * Код ввода.
     *
     * ***
     * @type {string}
     * @public
    */
    code = '';
    /**
     * ### name
     *
     * Наименование.
     *
     * ***
     * @type {string}
     * @public
    */
    name = '';
    /**
     * ### shift
     *
     * Значение нажатия Shift.
     *
     * ***
     * @type {boolean}
     * @public
    */
    shift = false;
    /**
     * ### active
     *
     * Состояние.
     *
     * ***
     * @type {boolean}
     * @protected
    */
    active = false;

};
class MListener extends IListener {

    /**
     * ### signal
     * - Версия `0.0.0`
     * - Модуль `Listener`
     * ***
     *
     *
     *
     * ***
     *
     * @protected
    */
    signal() {



    };

};
class FListener extends MListener {

    /**
     * ### YListener.constructor
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *
     *
     *
     * ***
     *  @arg {...YListenerT} t
    */
    constructor(...t) {

        t = FListener.#before(t);

        super(Object.assign(t, {}));

        FListener.#handle.apply(this, [t]);
        FListener.#create.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        if (t?.length === 1 && [Object, YListener].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

            return t[0];

        } else if (t?.length) {

            /** @type {YListenerT} */
            const r = {};

            if (t[0]?._ytp) {

                t = [...t[0]._ytp];

            };

            switch (t.length) {

                case 3:
                case 2:
                case 1: r.terminal = t[0];

            };

            return Object.values(r).length ? r : { _ytp: t };

        } else return {};

    };
    /** @arg {YListenerT} t @this {YListener} */
    static #deceit(t) {

        try {

            FListener.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @arg {YListenerT} t @this {YListener} */
    static #verify(t) {

        const {



        } = t;

        FListener.#handle(t);

    };
    /** @arg {YListenerT} t @this {YListener} */
    static #handle(t) {



    };
    /** @arg {YListenerT} t @this {YListener} */
    static #create(t) {

        const {



        } = t;

        this.adopt(t);



    };

};

/**
 * ### YListener
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `ject\terminal\listener`
 * - Цепочка `BDVHC`
 * ***
 *
*/
export class YListener extends FListener {

    /**
     * ### on
     * - Версия `0.0.1`
     * - Модуль `YListener`
     * ***
     *
     * Метод активации прослушивания.
     *
     * ***
     *
     * @public
    */
    on() {

        this.active = true;

        process.stdin.on('keypress',

            /**
             * @arg {string} c `Символ`
             * @arg {import("readline").Key} k `Данные клавиши`
            */
            (c, k) => {

                this.code = k.sequence;
                this.name = k.name;

                if (k.ctrl) {

                    this.ctrl = true;

                } else {

                    this.ctrl = false;

                };

                if (k.shift) {

                    this.shift = true;

                } else {

                    this.shift = false;

                };

                this.signal();

                if (k.sequence === '\x1B') {

                    this.off();

                };

            }

        );

        return this;

    };
    /**
     * ### off
     * - Версия `0.0.2`
     * - Модуль `YListener`
     * ***
     *
     * Метод отключения прослушивания.
     *
     * ***
     *
     * @public
    */
    off() {

        this.active = false;

        process.stdin.removeAllListeners();
        process.exit();

    };

};