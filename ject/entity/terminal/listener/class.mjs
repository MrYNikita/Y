//#region YI

import { YEntity } from '../../class.mjs';
import { emitKeypressEvents } from 'readline';
import { YReceiver } from '../receiver/class.mjs';
import { YKey } from './key/class.mjs';
import { YComb } from './comb/class.mjs';

/** @type {import('./config.mjs')['default']?} */
let config = null;

await import('./config.mjs')

    .then(i => config = i.default)
    .catch(e => e);

/** @type {import('./error.mjs')['default']?} */
let error = null;

await import('./error.mjs')

    .then(i => error = i.default)
    .catch(e => e);

//#endregion
//#region YT

/** ### YListenerT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `ject\listener`
 * 
 * Основной параметр модуля `YListener`.
 * 
 * @typedef {YListenerTE&YListenerTU} YListenerT
 * 
*/
/** ### YListenerTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `ject\listener`
 * 
 * Параметр наследования `YListener`.
 * 
 * @typedef {{[p in Exclude<keyof DListener,keyof SListener>|Exclude<keyof SListener,keyof DListener>]:(DListener[p]&SListener[p])}} YListenerTE
 * 
*/
/** ### YListenerTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `ject\listener`
 * 
 * Уникальные параметры `YListener`.
 * 
 * @typedef YListenerTU
 * @prop {any} _
 * 
*/

//#endregion

class SListener extends YEntity {

    static {

        process.stdin.setRawMode(true);
        emitKeypressEvents(process.stdin);

    };

    /** ### config
     * 
     * Конфигуратор.
     * 
     * ***
     * @public
    */
    static config = config;
    /**
     * ### listener
     * 
     * Прослушиватель.
     * 
     * *** 
     * @type {YListener} 
     * @protected
    */
    static listener = null;

    /**
     * ### on
     * - Версия `0.0.0`
     * ***
     * 
     * Метод запуска прослушивателя.
     * 
     * ***
     * @public
    */
    static on() {
        
        this.listener.on();

        return this;
        
    };
    /**
     * ### off
     * - Версия `0.0.0`
     * ***
     * 
     * Метод отключения прослушивателя.
     * 
     * ***
     * @public
    */
    static off() {
        
        this.listener.off();

        return this;
        
    };
    /**
     * ### debug
     * - Версия `0.0.0`
     * ***
     * 
     * Метод отладки.
     * 
     * ***
     * @public
    */
    static debug() {
        
        this.listener.on();

        process.stdin.on('keypress', () => {

            console.clear();

            const key = this.listener.keys.at(-1) ?? {};

            const comb = new YComb(

                [['w'], ['g']],
                [
                    
                ],
                {
                    redraw: true,
                }

            );

            const response = comb.apply(this.listener, ...this.listener.keys);

            if (response) {

                this.listener.keys = [];

            };

            console.clear();
            console.log(comb);
            console.log(this.listener.keys);
            console.log();
            console.log();

        });

        return this;
        
    };
    /**
     * ### appendKeys
     * - Версия `0.0.0`
     * ***
     * 
     * Метод добавления клавиш в общий прослушиватель.
     * 
     * ***
     * @arg {...YKey} keys `Клавиши`
     * @public
    */
    static appendKeys(...keys) {
        
        this.listener.appendKeys(...keys);

        return this;
        
    };

};
class DListener extends SListener {

    /**
     * ### recepient
     * 
     * Получатель.
     * 
     * *** 
     * @type {YReceiver} 
     * @public
    */
    recepient;

};
class IListener extends DListener {

    /**
     * ### keys
     * 
     * Клавиши.
     * 
     * *** 
     * @type {YKey[]} 
     * @protected
    */
    keys = [];
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
    /**
     * ### callback
     * 
     * Возврат.
     * 
     * *** 
     * @type {(function():void)?} 
     * @public
    */
    callback = null;

};
class MListener extends IListener {

    /**
     * ### signal
     * - Версия `0.0.0`
     * - Модуль `Listener`
     * ***
     *
     * Метод сигнализирования о получении новых данных.
     *
     * ***
     * @protected
    */
    signal() {

        if (this.recepient) {

            return this.recepient.receive(new YComb(...this.keys));

        };

        return false;

    };

};
class FListener extends MListener {

    /**
     * ### YListener.constructor
     * 
     * 
     * 
     * ***
     * @arg {YListenerT} t
    */
    constructor(t) {

        t = [...arguments];

        super(Object.assign(t = FListener.#before(t), {}));

        FListener.#deceit.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        /** @type {YListenerT} */
        let r = {};

        if (t?.length === 1 && [Object, YListener].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

            r = t[0];

        } else if (t?.length) {

            if (t[0]?._ytp) {

                t = [...t[0]._ytp];

            };

            switch (t.length) {

                case 3:
                case 2:
                case 1: r.recepient = t[0];

            };

            if (!Object.values(r).length) {

                r = { _ytp: t, };

            };

        };

        return r;

    };
    /** @arg {YListenerT} t @this {YListener} */
    static #deceit(t) {

        try {

            FListener.#verify.apply(this, [t]);

        } catch (e) {

            throw e;

        } finally {



        };

    };
    /** @arg {YListenerT} t @this {YListener} */
    static #verify(t) {

        const {



        } = t;

        FListener.#handle.apply(this, [t]);

    };
    /** @arg {YListenerT} t @this {YListener} */
    static #handle(t) {



        FListener.#create.apply(this, [t]);

    };
    /** @arg {YListenerT} t @this {YListener} */
    static #create(t) {

        const {



        } = t;

        this.adopt(t);

        if (config) {

            this.adoptDefault(config);

        };

    };

};

/**
 * ### YListener
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `ject\listener`
 * - Цепочка `BDVHC`
 * ***
 * 
 * 
 * 
 * ***
 * 
*/
export class YListener extends FListener {

    static {

        SListener.listener = new YListener();

    };

    /**
     * ### on
     * - Версия `0.0.2`
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

        /** @arg {import("readline").Key} k `Данные клавиши` */
        this.callback = (c, k) => {

            const key = new YKey(k.name, k.sequence, false, k.ctrl, k.shift);

            this.appendKeys(key);

            const signal = this.signal();

            if (signal) {

                this.keys = [];

            } else if (key.code === '\x1b') {

                process.exit();

            };

        };

        process.stdin.on('keypress', this.callback);

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

        process.stdin.removeListener('keypress', this.callback);

        process.exit();

    };

    /**
     * ### appendKeys
     * - Версия `0.0.0`
     * ***
     * 
     * Метод добавления клавиш.
     * 
     * ***
     * @arg {...YKey} keys `Клавиши`
     * @public
    */
    appendKeys(...keys) {

        if (keys.length === config.keysLength) {

            this.keys = keys;

        } else if (keys.length > config.keysLength) {

            this.keys = keys.slice(-config.keysLength);

        } else if (this.keys.length + keys.length > config.keysLength) {

            this.keys = [...this.keys, ...keys].slice(-config.keysLength);

        } else {

            this.keys.push(...keys);

        };

        return this;
        
    };

};