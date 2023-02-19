//#region YI

import { YBasic } from '../../../../YBasic/YBasic.mjs';

/** @type {import('./config.mjs')['default']?} */
let config = null;

await import('./config.mjs')

    .then(c => config = c.default)
    .catch(e => e);

//#endregion
//#region YT

/** ### YProcedureT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `ject\terminal\receiver\handler\procedure`
 *
 * Основной параметр модуля `YProcedure`.
 *
 * @typedef {YProcedureTE&YProcedureTU} YProcedureT
 *
*/
/** ### YProcedureTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `ject\terminal\receiver\handler\procedure`
 *
 * Параметр наследования `YProcedure`.
 *
 * @typedef {{[p in Exclude<keyof DProcedure,keyof SProcedure>|Exclude<keyof SProcedure,keyof DProcedure>]:(DProcedure[p]&SProcedure[p])}} YProcedureTE
 *
*/
/** ### YProcedureTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `ject\terminal\receiver\handler\procedure`
 *
 * Уникальные параметры `YProcedure`.
 *
 * @typedef YProcedureTU
 * @prop {any} _
 *
*/

//#endregion

class SProcedure extends YBasic {



};
/**
 * @template T
*/
class DProcedure extends SProcedure {

    /**
     * ### func
     *
     * Функция.
     *
     * ***
     * @type {function(T):void}
     * @public
    */
    func;
    /**
     * ### label
     *
     * Метка.
     *
     * Позволяет отметить процедуру.
     *
     * ***
     * @type {string?}
     * @public
    */
    label;
    /**
     * ### disposable
     *
     * Одноразовость.
     *
     * Одноразовые процедуры позволяют понять обработчикам, что после их выполнения, их следует удалить.
     *
     * ***
     * @type {boolean}
     * @public
    */
    disposable;

};
/**
 * @extends {DProcedure<T>}
 * @template T
*/
class IProcedure extends DProcedure {



};
/**
 * @extends {IProcedure<T>}
 * @template T
*/
class MProcedure extends IProcedure {



};
/**
 * @extends {MProcedure<T>}
 * @template T
*/
class FProcedure extends MProcedure {

    /**
     * ### YProcedure.constructor
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *
     *
     *
     * ***
     *  @arg {...YProcedureT} t
    */
    constructor(...t) {

        t = FProcedure.#before(t);

        super(Object.assign(t, {}));

        FProcedure.#deceit.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        if (t?.length === 1 && [Object, YProcedure].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

            return t[0];

        } else if (t?.length) {

            /** @type {YProcedureT} */
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
    /** @arg {YProcedureT} t @this {YProcedure} */
    static #deceit(t) {

        try {

            FProcedure.#verify.apply(this, [t]);

        } catch (e) {

            throw e;

        } finally {



        };

    };
    /** @arg {YProcedureT} t @this {YProcedure} */
    static #verify(t) {

        const {



        } = t;

        FProcedure.#handle.apply(this, [t]);

    };
    /** @arg {YProcedureT} t @this {YProcedure} */
    static #handle(t) {



        FProcedure.#create.apply(this, [t]);

    };
    /** @arg {YProcedureT} t @this {YProcedure} */
    static #create(t) {

        const {



        } = t;

        this.adopt(t);

        if (config) {

            this.adoptByDefault(config);

        };

    };

};
/**
 * ### YProcedure
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `ject\terminal\receiver\handler\procedure`
 * - Цепочка `BDVHC`
 * ***
 *
 *
 *
 * ***
 * @extends {FProcedure<T>}
 * @template T
*/
export class YProcedure extends FProcedure {



};