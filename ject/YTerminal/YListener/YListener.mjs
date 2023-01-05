import { YJect } from "../../YJect/YJect.mjs";
import { jectFill } from "../../ject.mjs";
import { emitKeypressEvents } from "readline";
import { YTerminal } from "../YTerminal.mjs";

/**
 * @typedef TBListener
 * @prop {any} _
 * @typedef {{[p in Exclude<keyof DListener,keyof SListener>|Exclude<keyof SListener,keyof DListener>]:(DListener[p]&SListener[p])}} TDListener
 * @typedef {TDListener&TBListener} TListener
*/

class SListener extends YJect {

    static {

        process.stdin.setRawMode(true);
        emitKeypressEvents(process.stdin);

    };

};
class DListener extends SListener {

    /**
     * Терминал.
     * @type {YTerminal?}
    */
    terminal = null;

};
class IListener extends DListener {

    /**
     * Значение нажатия ctrl.
     * @type {boolean}
    */
    ctrl = false;
    /**
     * Код ввода.
     * @type {string}
    */
    code = '';
    /**
     * Значение нажатия Shift.
     * @type {boolean}
    */
    shift = false;
    /**
     * Значение ввода.
     * @type {string}
    */
    value = '';
    /**
     * Состояние.
     * @type {boolean}
    */
    active = false;

};
class MListener extends IListener {

    /**
     * Метод сигнализирования о получении нового значения.
     * - Версия `0.0.0`
     * @protected
     *
    */
    signal() {

        if (this.terminal) this.terminal.receive();

        return this;

    };

};
class FListener extends MListener {

    /**
     * Контсруктор класса `YListener`
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *  @arg {TListener} t
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

            /** @type {TListener&DListener} */
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
    /** @arg {TListener} t @this {YListener} */
    static #deceit(t) {

        try {

            FListener.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @arg {TListener} t @this {YListener} */
    static #verify(t) {

        const {



        } = t;

        FListener.#handle(t);

    };
    /** @arg {TListener} t @this {YListener} */
    static #handle(t) {



    };
    /** @arg {TListener} t @this {YListener} */
    static #create(t) {

        const {



        } = t;

        jectFill(this, t);



    };

};

/**
 * Класс `YListener`
 *
 * Класс прослушивателя, экземпляры которого предназначены для получения данных пользовательского ввода.
 * С его помощью разнообразные структуры, такие как `YMenu` и `YInput` могут получать данные, необходимые для реагирования на действия пользователя.
 * - Тип `SDIMFY`
 * - Версия `0.1.0`
 * - Модуль `ject.terminal`
 * - Цепочка `BDVHC`
*/
export class YListener extends FListener {

    /**
     * Метод активации прослушивания.
     * - Версия `0.0.0`
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

                if (k.ctrl) this.ctrl = true;
                else false;

                if (k.shift) this.shift = true;
                else this.shift = false;

                this.signal();

                if (k.sequence === '\x1B') this.off();

            }

        );

        return this;

    };
    /**
     * Метод отключения прослушивания.
     * - Версия `0.0.0`
    */
    off() {

        this.active = false;

        process.stdin.removeAllListeners();
        process.exit();

    };

};