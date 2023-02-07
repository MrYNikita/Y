import { YJect } from "../../YJect/YJect.mjs";
import { jectFill } from "../../ject.mjs";
import { emitKeypressEvents } from "readline";
import { YTerminal } from "../YTerminal.mjs";

//#region YT

/** ### YListenerT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `YListener`
 *
 * Основной параметр модуля `YListener`.
 *
 * @typedef {YListenerTE&YListenerTU} YListenerT
 *
*/
/** ### YListenerTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `YListener`
 *
 * Параметр наследования `YListener`.
 *
 * @typedef {{[p in Exclude<keyof DListener,keyof SListener>|Exclude<keyof SListener,keyof DListener>]:(DListener[p]&SListener[p])}} YListenerTE
 *
*/
/** ### YListenerTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `YListener`
 *
 * Уникальные параметры `YListener`.
 *
 * @typedef YListenerTU
 * @prop {any} _
 *
*/

//#endregion

class SListener extends YJect {

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
     * @protected
    */
    ctrl = false;
    /**
     * ### code
     *
     * Код ввода.
     *
     * ***
     * @type {string}
     * @protected
    */
    code = '';
    /**
     * ### shift
     *
     * Значение нажатия Shift.
     *
     * ***
     * @type {boolean}
     * @protected
    */
    shift = false;
    /**
     * ### value
     *
     * Значение ввода.
     *
     * ***
     * @type {string}
     * @protected
    */
    value = '';
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
     * - Модуль `YListener`
     * ***
     *
     * Метод сигнализирования о получении нового значения.
     *
     * ***
     *
     * @protected
    */
    signal() {

        if (this.terminal) this.terminal.receive();

        return this;

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
     *  @arg {YListenerT} t
    */
    constructor(t = {}) {

        t = FListener.#before(Object.values(arguments));

        FListener.#deceit(t);

        super(t);

        FListener.#create.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        if (t?.length === 1 && [Object, YListener].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

            return t[0];

        } else if (t?.length) {

            /** @type {YListenerT} */
            const r = {};

            if (t[0]?._ytp) t = [...t[0]._ytp];

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

        jectFill(this, t);



    };

};

/**
 * ### YListener
 * - Тип `SDIMFY`
 * - Версия `0.2.0`
 * - Модуль `ject.terminal.YListener`
 * - Цепочка `BDVHC`
 * ***
 * Класс прослушивателя, экземпляры которого предназначены для получения данных пользовательского ввода.
 * С его помощью разнообразные структуры, такие как `YMenu` и `YInput` могут получать данные, необходимые для реагирования на действия пользователя.
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
             * @arg {string} c Символ.
             * @arg {import("readline").Key} k Данные клавиши.
            */
            (c, k) => {


                this.value = c ? c.toString() : c;
                this.code = k.sequence;

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
     * - Версия `0.0.1`
     * - Модуль `YListener`
     * ***
     *
     * Метод отключения просушивания.
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