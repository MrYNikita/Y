//#region YI

import { YReceiver } from "../Receiver/Receiver.mjs";

//#endregion
//#region YT

/** ### YTerminalT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `YTerminal`
 *
 * Основной параметр модуля `YTerminal`.
 *
 * @typedef {YTerminalTE&YTerminalTU} YTerminalT
 *
*/
/** ### YTerminalTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `YTerminal`
 *
 * Параметр наследования `YTerminal`.
 *
 * @typedef {{[p in Exclude<keyof DTerminal,keyof STerminal>|Exclude<keyof STerminal,keyof DTerminal>]:(DTerminal[p]&STerminal[p])}} YTerminalTE
 *
*/
/** ### YTerminalTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `YTerminal`
 *
 * Уникальные параметры `YTerminal`.
 *
 * @typedef YTerminalTU
 * @prop {any} _
 *
*/

//#endregion

class STerminal extends YReceiver {



};
class DTerminal extends STerminal {



};
class ITerminal extends DTerminal {



};
class MTerminal extends ITerminal {



};
class FTerminal extends MTerminal {

    /**
     * ### YTerminal.constructor
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *
     *
     *
     * ***
     *  @arg {YTerminalT} t
    */
    constructor(t = {}) {

        t = FTerminal.#before(Object.values(arguments));

        FTerminal.#deceit(t);

        super(t);

        FTerminal.#create.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        if (t?.length === 1 && [Object, YTerminal].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

            return t[0];

        } else if (t?.length) {

            /** @type {YTerminalT} */
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
    /** @arg {YTerminalT} t @this {YTerminal} */
    static #deceit(t) {

        try {

            FTerminal.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @arg {YTerminalT} t @this {YTerminal} */
    static #verify(t) {

        const {



        } = t;

        FTerminal.#handle(t);

    };
    /** @arg {YTerminalT} t @this {YTerminal} */
    static #handle(t) {



    };
    /** @arg {YTerminalT} t @this {YTerminal} */
    static #create(t) {

        const {



        } = t;

        this.adopt(t);



    };

};

/**
 * ### YTerminal
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `YTerminal`
 * - Цепочка `BDVHC`
 * ***
 *
*/
export class YTerminal extends FTerminal {



};