//#region YI

import { YJect } from '../ject/class.mjs';

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

/** ### YErrorT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `error`
 *
 * Основной параметр модуля `YError`.
 *
 * ***
 *
 * @typedef {YErrorTE&YErrorTU} YErrorT
 * @template T
 *
*/
/** ### YErrorTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `error`
 *
 * Параметр наследования `YError`.
 *
 * @typedef {{[p in Exclude<keyof DError,keyof SError>|Exclude<keyof SError,keyof DError>]:(DError[p]&SError[p])}} YErrorTE
 *
*/
/** ### YErrorTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `error`
 *
 * Уникальные параметры `YError`.
 *
 * @typedef YErrorTU
 * @prop {any} _
 *
*/

//#endregion

/**
 * @template T
*/
class SError extends YJect {

    /**
     * ### throw
     * - Версия `0.0.0`
     * - Модуль `error`
     * ***
     *
     * Метод обработки исключительных ситуаций.
     *
     * ***
     * @arg {Error} error `Ошибка`
     * @public
    */
    static throw(error) {

        if (error instanceof Error) {

            throw error;

        } else if (error instanceof YError) {

            error.throw();

        };

        return this;

    };

};
/**
 * @extends {SError<T>}
 * @template T
*/
class DError extends SError {

    /**
     * ### id
     *
     * Идентификатор.
     *
     * Определяет идентификатор ошибки.
     *
     * ***
     * @type {number}
     * @public
    */
    id;
    /**
     * ### break
     *
     * Прерывание.
     *
     * ***
     * @type {boolean}
     * @protected
    */
    break;
    /**
     * ### cause
     *
     * Причина.
     *
     * Описание потенциально возможно совершенной ошибки.
     *
     * ***
     * @type {string}
     * @public
    */
    cause;
    /**
     * ### advice
     *
     * Совет.
     *
     * Рекомендация по устранению ошибки.
     *
     * ***
     * @type {string}
     * @public
    */
    advice;
    /**
     * ### initor
     *
     * Инициатор.
     *
     * ***
     * @type {T}
     * @public
    */
    initor;
    /**
     * ### specify
     *
     * Уточнение.
     *
     * ***
     * @type {(function(...):string)?}
     * @public
    */
    specify;
    /**
     * ### transmits
     *
     * Передача.
     *
     * ***
     * @type {any[]}
     * @public
    */
    transmits;
    /**
     * ### description
     *
     * Описание.
     *
     * ***
     * @type {string}
     * @public
    */
    description;

};
/**
 * @extends {DError<T>}
 * @template T
*/
class IError extends DError {

    /**
     * ### date
     *
     * Дата.
     *
     * ***
     * @type {Date}
     * @public
    */
    date = new Date();
    /**
     * ### stack
     *
     * Стэк.
     *
     * ***
     * @type {string?}
     * @public
    */
    stack;
    /**
     * ### correct
     *
     * Функция корректировки.
     *
     * ***
     * @type {function(T):void}
     * @public
    */
    correct;

};
/**
 * @extends {IError<T>}
 * @template T
*/
class MError extends IError {



};
/**
 * @extends {MError<T>}
 * @template T
*/
class FError extends MError {

    /**
     * ### YError.constructor
     *
     *
     *
     * ***
     * @arg {...YErrorT<T>} t
    */
    constructor(...t) {

        super(Object.assign(t = FError.#before(t), {}));

        FError.#deceit.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        /** @type {YErrorT} */
        let r = {};

        if (t?.length === 1 && [Object, YError].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

            r = t[0];

        } else if (t?.length) {

            if (t[0]?._ytp) {

                t = [...t[0]._ytp];

            };

            switch (t.length) {

                case 3:
                case 2:
                case 1:

            };

            if (!Object.values(r).length) {

                r = { _ytp: t, };

            };

        };

        return r;

    };
    /** @arg {YErrorT} t @this {YError} */
    static #deceit(t) {

        try {

            FError.#verify.apply(this, [t]);

        } catch (e) {

            throw e;

        } finally {



        };

    };
    /** @arg {YErrorT} t @this {YError} */
    static #verify(t) {

        const {



        } = t;

        FError.#handle.apply(this, [t]);

    };
    /** @arg {YErrorT} t @this {YError} */
    static #handle(t) {



        FError.#create.apply(this, [t]);

    };
    /** @arg {YErrorT} t @this {YError} */
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
 * ### YError
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `error`
 * - Цепочка `BDVHC`
 * ***
 *
 *
 *
 * ***
 * @extends {FError<T>}
 * @template T
*/
export class YError extends FError {

    /**
     * ### toString
     * - Версия `0.0.0`
     * - Модуль `error`
     * ***
     *
     * Метод приведения к строке.
     *
     * ***
     * @public
    */
    toString() {

        return '';

    };

    /**
     * ### throw
     * - Версия `0.1.0`
     * - Модуль `error`
     * ***
     *
     * Метод перехватат ошибки.
     *
     * ***
     * @arg {any} initor `Инициатор`
     * @arg {...any} transmits `Аргументы`
     * @public
    */
    throw(initor, ...transmits) {

        if (configurator.modeStrict || this.break || this.correct?.constructor !== Function) {

            const error = this.clone().setInitor(initor).setTransmits(...transmits);

            console.log(error.toString());

            throw error;

        } else {

            this.correct?.(initor);

        };

        return this;

    };
    /**
     * ### setInitor
     * - Версия `0.0.0`
     * - Модуль `error`
     * ***
     *
     * Метод установки инициатора.
     *
     * ***
     * @arg {any} initor `Инициатор`
     * @public
    */
    setInitor(initor) {

        if (initor instanceof Object) {

            this.initor = initor;

        };

        return this;

    };
    /**
     * ### setTransmits
     * - Версия `0.0.0`
     * - Модуль `error`
     * ***
     *
     * Метод установки аргументов.
     *
     * ***
     * @arg {...any} transmits `Аргументы`
     * @public
    */
    setTransmits(...transmits) {

        this.transmits = transmits;

        return this;

    };

};