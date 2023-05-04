//#region YI

import { YJect } from '../../class.mjs';
import { YProcedure } from './procedure/class.mjs';

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

/** ### YHandlerT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `ject\entity\handler`
 * 
 * Основной параметр модуля `YHandler`.
 * 
 * @typedef {YHandlerTE&YHandlerTU} YHandlerT
 * 
*/
/** ### YHandlerTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `ject\entity\handler`
 * 
 * Параметр наследования `YHandler`.
 * 
 * @typedef {{[p in Exclude<keyof DHandler,keyof SHandler>|Exclude<keyof SHandler,keyof DHandler>]:(DHandler[p]&SHandler[p])}} YHandlerTE
 * 
*/
/** ### YHandlerTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `ject\entity\handler`
 * 
 * Уникальные параметры `YHandler`.
 * 
 * @typedef YHandlerTU
 * @prop {any} _
 * 
*/

//#endregion

class SHandler extends YJect {

    /** ### config
     * 
     * Конфигуратор.
     * 
     * ***
     * @public
    */
    static config = config;

};
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
class IHandler extends DHandler {



};
class MHandler extends IHandler {



};
class FHandler extends MHandler {

    /**
     * ### YHandler.constructor
     * 
     * 
     * 
     * ***
     * @arg {YHandlerT} t
    */
    constructor(t) {

        t = [...arguments];

        super(Object.assign(t = FHandler.#before(t), {}));

        FHandler.#deceit.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        /** @type {YHandlerT} */
        let r = {};

        if (t?.length === 1 && [Object, YHandler].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

            r = t[0];

        } else if (t?.length) {

            if (t[0]?._ytp) {

                t = [...t[0]._ytp];

            };

            switch (t.length) {

                case 3:
                case 2: r.procedures = t.slice(1);
                case 1: r.label = t[0];

            };

            if (!Object.values(r).length) {

                r = { _ytp: t, };

            };

        };

        return r;

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

            this.adoptDefault(config);

        };

    };

};

/**
 * ### YHandler
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `ject\entity\handler`
 * - Цепочка `BDVHC`
 * ***
 * 
 * 
 * 
 * ***
 * 
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

    /**
     * ### appendProcedures
     * - Версия `0.0.0`
     * - Модуль `ject\entity\handler`
     * ***
     * 
     * Метод добавления процедур.
     * 
     * ***
     * @arg {...[string, function():void, boolean]} procedures `Процедуры`
     * @public
    */
    appendProcedures(...procedures) {

        procedures.forEach(procedure => {

            this.procedures.push(new YProcedure(...procedure));

        });

        return this;
        
    };

};