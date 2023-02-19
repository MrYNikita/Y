//#region YI

import { YBasic } from '../../../YBasic/YBasic.mjs';
import { YProcedure } from './procedure/class.mjs';

/** @type {import('./config.mjs')['default']?} */
let config = null;

await import('./config.mjs')

    .then(c => config = c.default)
    .catch(e => e);

//#endregion
//#region YT

/** ### YHandlerT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `ject\terminal\receiver\handler`
 *
 * Основной параметр модуля `YHandler`.
 *
 * @typedef {YHandlerTE<T>&YHandlerTU} YHandlerT
 * @template T
 *
*/
/** ### YHandlerTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `ject\terminal\receiver\handler`
 *
 * Параметр наследования `YHandler`.
 *
 * @typedef {{[p in Exclude<keyof DHandler,keyof SHandler>|Exclude<keyof SHandler,keyof DHandler>]:(DHandler<T>[p]&SHandler[p])}} YHandlerTE
 * @template T
 *
*/
/** ### YHandlerTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `ject\terminal\receiver\handler`
 *
 * Уникальные параметры `YHandler`.
 *
 * @typedef YHandlerTU
 * @prop {} _
 *
*/

//#endregion

class SHandler extends YBasic {



};
/**
 * @template T
*/
class DHandler extends SHandler {

    /**
     * ### label
     *
     * Метка.
     *
     * ***
     * @type {string}
     * @public
    */
    label;
    /**
     * ### funcs
     *
     *
     *
     * ***
     * @type {YProcedure<T>[]}
     * @public
    */
    procedures = [];

};
/**
 * @extends {DHandler<T>}
 * @template T
*/
class IHandler extends DHandler {



};
/**
 * @extends {IHandler<T>}
 * @template T
*/
class MHandler extends IHandler {



};
/**
 * @extends {MHandler<T>}
 * @template T
*/
class FHandler extends MHandler {

    /**
     * ### YHandler.constructor
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *
     *
     *
     * ***
     *  @arg {...YHandlerT} t
    */
    constructor(...t) {

        t = FHandler.#before(t);

        super(Object.assign(t, {}));

        FHandler.#deceit.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        if (t?.length === 1 && [Object, YHandler].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

            return t[0];

        } else if (t?.length) {

            /** @type {YHandlerT} */
            const r = {};

            if (t[0]?._ytp) {

                t = [...t[0]._ytp];

            };

            switch (t.length) {

                case 3:
                case 2: r.procedures = t[1];
                case 1: r.label = t[0];

            };

            return Object.values(r).length ? r : { _ytp: t };

        } else return {};

    };
    /** @arg {YHandlerT} t @this {YHandler} */
    static #deceit(t) {

        try {

            FHandler.#verify.apply(this, [t]);

        } catch (e) {

            throw e;

        } finally {



        };

    };
    /** @arg {YHandlerT} t @this {YHandler} */
    static #verify(t) {

        const {



        } = t;

        FHandler.#handle.apply(this, [t]);

    };
    /** @arg {YHandlerT} t @this {YHandler} */
    static #handle(t) {



        FHandler.#create.apply(this, [t]);

    };
    /** @arg {YHandlerT} t @this {YHandler} */
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
 * ### YHandler
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `ject\terminal\receiver\handler`
 * - Цепочка `BDVHC`
 * ***
 *
 *
 *
 * ***
 * @extends {FHandler<T>}
 * @template T
*/
export class YHandler extends FHandler {

    /**
     * ### exec
     * - Версия `0.0.0`
     * - Модуль `ject\terminal\receiver\handler`
     * ***
     *
     * Метод выполнения процедур обработчика.
     *
     * ***
     * @arg {T} target `Цель`
     * @public
    */
    exec(target) {

        this.procedures.forEach(p => p.func(target));

        return this;

    };

};