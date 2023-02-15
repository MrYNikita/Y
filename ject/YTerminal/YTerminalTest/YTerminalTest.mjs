//#region YI

import { YString } from "../../../string/YString/YString.mjs";
import { YTerminal } from "../YTerminal.mjs";
import { configYTerminal } from "../../../config.mjs";
import { YList } from "../YInterface/YElement/YList/YList.mjs";
import { YHeader } from "../YInterface/YElement/YHeader/YHeader.mjs";
import { YLocation } from "../YInterface/YElement/YLocation/YLocation.mjs";
import { YInterface } from "../YInterface/YInterface.mjs";

//#endregion
//#region YT

/** ### YTerminalTestT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `YTerminalTest`
 *
 * Основной параметр модуля `YTerminalTest`.
 *
 * @typedef {YTerminalTestTE&YTerminalTestTU&YTerminalTest} YTerminalTestT
 *
*/
/** ### YTerminalTestTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `YTerminalTest`
 *
 * Параметр наследования `YTerminalTest`.
 *
 * @typedef {{[p in Exclude<keyof DYTerminalTest,keyof SYTerminalTest>|Exclude<keyof SYTerminalTest,keyof DYTerminalTest>]:(DYTerminalTest[p]&SYTerminalTest[p])}} YTerminalTestTE
 *
*/
/** ### YTerminalTestTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `YTerminalTest`
 *
 * Уникальные параметры `YTerminalTest`.
 *
 * @typedef YTerminalTestTU
 * @prop {any} _
 *
*/

//#endregion

class SYTerminalTest extends YTerminal {

    static layout = new YString()

        .setColor('cyan', 'blueDark')
        .paste(

            '╔' + '═'.repeat(configYTerminal.sizes[1] - 2) + '╦' + '═'.repeat(40) + '╗\n',
            ('║' + ' '.repeat(configYTerminal.sizes[1] - 2) + '║' + ' '.repeat(40) + '║\n').repeat(configYTerminal.sizes[0] - 2),
            '╠' + '═'.repeat(configYTerminal.sizes[1] - 2) + '╣' + ' '.repeat(40) + '║\n',
            ('║' + ' '.repeat(configYTerminal.sizes[1] - 2) + '║' + ' '.repeat(40) + '║\n').repeat(10),
            '╚' + '═'.repeat(configYTerminal.sizes[1] - 2) + '╩' + '═'.repeat(40) + '╝',

        )

};
class DYTerminalTest extends SYTerminalTest {

    interface = new YInterface({

        elements: [

            new YHeader({

                title: 'YTerminalTest',
                coords: [1, 2],
                transfer: true,

            }),
            new YHeader({

                title: 'Debug',
                coords: [1, 121],
                transfer: true,

            }),
            new YLocation({

                coords: [2, 20],
                transfer: true,

            }),

            new YHeader({

                title: 'Log',
                coords: [30, 2],
                transfer: true,

            }),
            new YList({

                vis: 5,
                label: 'DebugLog',
                coords: [32, 2],

            }),

        ],

    });

};
class IYTerminalTest extends DYTerminalTest {



};
class MYTerminalTest extends IYTerminalTest {



};
class FYTerminalTest extends MYTerminalTest {

    /**
     * ### YTerminalTest.constructor
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *
     *
     *
     * ***
     *  @arg {YTerminalTestT} t
    */
    constructor(t = {}) {

        t = FYTerminalTest.#before(Object.values(arguments));

        FYTerminalTest.#deceit(t);

        super(t);

        FYTerminalTest.#create.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        if (t?.length === 1 && [Object, YTerminalTest].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

            return t[0];

        } else if (t?.length) {

            /** @type {YTerminalTestT} */
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
    /** @arg {YTerminalTestT} t @this {YTerminalTest} */
    static #deceit(t) {

        try {

            FYTerminalTest.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @arg {YTerminalTestT} t @this {YTerminalTest} */
    static #verify(t) {

        const {



        } = t;

        FYTerminalTest.#handle(t);

    };
    /** @arg {YTerminalTestT} t @this {YTerminalTest} */
    static #handle(t) {



    };
    /** @arg {YTerminalTestT} t @this {YTerminalTest} */
    static #create(t) {

        const {



        } = t;

        this.adopt(t);

    };

};

/**
 * ### YTerminalTest
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `YTerminalTest`
 * - Цепочка `BDVHC`
 * ***
 *
*/
export class YTerminalTest extends FYTerminalTest {



};