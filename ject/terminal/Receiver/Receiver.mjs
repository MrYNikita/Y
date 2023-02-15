//#region YI

import { YJect } from "../../YJect/YJect.mjs";
import { YBind } from "../bind/Bind/Bind.mjs";

//#endregion
//#region YT

/** ### YReceiverT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `YReceiver`
 *
 * Основной параметр модуля `YReceiver`.
 *
 * @typedef {YReceiverTE&YReceiverTU} YReceiverT
 *
*/
/** ### YReceiverTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `YReceiver`
 *
 * Параметр наследования `YReceiver`.
 *
 * @typedef {{[p in Exclude<keyof DReceiver,keyof SReceiver>|Exclude<keyof SReceiver,keyof DReceiver>]:(DReceiver[p]&SReceiver[p])}} YReceiverTE
 *
*/
/** ### YReceiverTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `YReceiver`
 *
 * Уникальные параметры `YReceiver`.
 *
 * @typedef YReceiverTU
 * @prop {any} _
 *
*/

//#endregion

class SReceiver extends YJect {

    /**
     * ### binds
     *
     * Общие привязки.
     *
     * ***
     * @type {YBind[]}
     * @public
    */
    static binds = [];

};
class DReceiver extends SReceiver {

    /**
     * ### binds
     *
     * Привязки.
     *
     * ***
     * @type {YBind[]}
     * @public
    */
    binds = [];

};
class IReceiver extends DReceiver {



};
class MReceiver extends IReceiver {



};
class FReceiver extends MReceiver {

    /**
     * ### YReceiver.constructor
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *
     *
     *
     * ***
     *  @arg {YReceiverT} t
    */
    constructor(t = {}) {

        t = FReceiver.#before(Object.values(arguments));

        FReceiver.#deceit(t);

        super(t);

        FReceiver.#create.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        if (t?.length === 1 && [Object, YReceiver].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

            return t[0];

        } else if (t?.length) {

            /** @type {YReceiverT} */
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
    /** @arg {YReceiverT} t @this {YReceiver} */
    static #deceit(t) {

        try {

            FReceiver.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @arg {YReceiverT} t @this {YReceiver} */
    static #verify(t) {

        const {



        } = t;

        FReceiver.#handle(t);

    };
    /** @arg {YReceiverT} t @this {YReceiver} */
    static #handle(t) {

        if (t.binds instanceof Array) {

            t.binds = t.binds.filter(b => b instanceof YBind);

        } else {

            t.binds = [];

        };

    };
    /** @arg {YReceiverT} t @this {YReceiver} */
    static #create(t) {

        const {



        } = t;

        this.adopt(t);



    };

};

/**
 * ### YReceiver
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `YReceiver`
 * - Цепочка `BDVHC`
 * ***
 *
*/
export class YReceiver extends FReceiver {

    /**
     * ### signal
     * - Версия `0.0.0`
     * - Модуль `Receiver`
     * ***
     *
     * Метод сигнализации.
     *
     * ***
     * @arg {...string} values `Значения`
     * @public
    */
    signal(...values) {

        return this;

    };
    /**
     * ### receive
     * - Версия `0.0.0`
     * - Модуль `Receiver`
     * ***
     *
     * Метод принятия сигналов.
     *
     * ***
     * @arg {...string} values `Значения`
     * @public
    */
    receive(...values) {

        this.signal(...values);

        values.filter(v => v.constructor === String).forEach(v => {

            const f = this.binds.find(b => b.code.includes(v));

            if (f) {

                f.exec();

            };

        });

        return this;

    };

    /**
     * ### appendBinds
     * - Версия `0.0.0`
     * - Модуль `Receiver`
     * ***
     *
     * Метод добавления новых привязок.
     *
     * ***
     * @arg {...YBind} binds `Привязки`
     * @public
    */
    appendBinds(...binds) {

        this.binds.push(...binds.filter(b => b instanceof YBind));

        return this;

    };

};