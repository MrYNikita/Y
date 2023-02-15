//#region YI

import { YReceiver } from "../Receiver/Receiver.mjs";

//#endregion
//#region YT

/** ### YInterfaceT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `YInterface`
 *
 * Основной параметр модуля `YInterface`.
 *
 * @typedef {YInterfaceTE&YInterfaceTU} YInterfaceT
 *
*/
/** ### YInterfaceTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `YInterface`
 *
 * Параметр наследования `YInterface`.
 *
 * @typedef {{[p in Exclude<keyof DInterface,keyof SInterface>|Exclude<keyof SInterface,keyof DInterface>]:(DInterface[p]&SInterface[p])}} YInterfaceTE
 *
*/
/** ### YInterfaceTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `YInterface`
 *
 * Уникальные параметры `YInterface`.
 *
 * @typedef YInterfaceTU
 * @prop {any} _
 *
*/

//#endregion

class SInterface extends YReceiver {



};
class DInterface extends SInterface {



};
class IInterface extends DInterface {



};
class MInterface extends IInterface {



};
class FInterface extends MInterface {

    /**
     * ### YInterface.constructor
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *
     *
     *
     * ***
     *  @arg {YInterfaceT} t
    */
    constructor(t = {}) {

        t = FInterface.#before(Object.values(arguments));

        FInterface.#deceit(t);

        super(t);

        FInterface.#create.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        if (t?.length === 1 && [Object, YInterface].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

            return t[0];

        } else if (t?.length) {

            /** @type {YInterfaceT} */
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
    /** @arg {YInterfaceT} t @this {YInterface} */
    static #deceit(t) {

        try {

            FInterface.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @arg {YInterfaceT} t @this {YInterface} */
    static #verify(t) {

        const {



        } = t;

        FInterface.#handle(t);

    };
    /** @arg {YInterfaceT} t @this {YInterface} */
    static #handle(t) {



    };
    /** @arg {YInterfaceT} t @this {YInterface} */
    static #create(t) {

        const {



        } = t;

        this.adopt(t);



    };

};

/**
 * ### YInterface
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `YInterface`
 * - Цепочка `BDVHC`
 * ***
 *
*/
export class YInterface extends FInterface {



};