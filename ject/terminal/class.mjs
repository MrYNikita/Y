//#region YI

import { YDate } from "../../date/YDate/YDate.mjs";
import { YString } from "../../string/YString/YString.mjs";
import { YListener } from "./listener/class.mjs";
import { YReceiver } from "./receiver/class.mjs";
import { YInterface } from "./interface/class.mjs";
import { YElement } from "./interface/element/class.mjs";
import { YComb } from "./receiver/bind/comb/class.mjs";
import { YResponse } from "./receiver/response/class.mjs";

/** @type {import('./config.mjs')['default']?} */
let config = null;

await import('./config.mjs')

    .then(c => config = c.default)
    .catch(e => console.log(e));

//#endregion
//#region YT

/** ### YTerminalT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `ject\terminal`
 *
 * Основной параметр модуля `YTerminal`.
 *
 * @typedef {YTerminalTE&YTerminalTU&import("./receiver/class.mjs").YReceiverT} YTerminalT
 *
*/
/** ### YTerminalTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `ject\terminal`
 *
 * Параметр наследования `YTerminal`.
 *
 * @typedef {{[p in Exclude<keyof DTerminal,keyof STerminal>|Exclude<keyof STerminal,keyof DTerminal>]:(DTerminal[p]&STerminal[p])}} YTerminalTE
 *
*/
/** ### YTerminalTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `ject\terminal`
 *
 * Уникальные параметры `YTerminal`.
 *
 * @typedef YTerminalTU
 * @prop {any} _
 *
*/

//#endregion

class STerminal extends YReceiver {

    /**
     * ### layout
     *
     * Общая разметка.
     *
     * ***
     * @type {YString}
     * @public
    */
    static layout = new YString()

        .setColor(config.defaultColorF, config.defaultColorB)
        .paste(

            '╔' + '═'.repeat(config.defaultSizes[1] - 2) + '╗\n',
            ('║' + ' '.repeat(config.defaultSizes[1] - 2) + '║\n').repeat(config.defaultSizes[0] - 2),
            '╚' + '═'.repeat(config.defaultSizes[1] - 2) + '╝',

        );

};
class DTerminal extends STerminal {

    /**
     * ### sizes
     *
     * Размер.
     *
     * ***
     * @type {[number, number]}
     * @public
    */
    sizes;
    /**
     * ### colorF
     *
     * Цвет символов.
     *
     * ***
     * @type {string?}
     * @public
    */
    colorF;
    /**
     * ### colorB
     *
     * Цвет фона.
     *
     * ***
     * @type {string}
     * @public
    */
    colorB;
    /**
     * ### layout
     *
     * Разметка.
     *
     * ***
     * @type {YString?}
     * @public
    */
    layout = null;
    /**
     * ### modeLoad
     *
     * Режим загрузки.
     *
     * ***
     * @type {boolean}
     * @public
    */
    modeLoad;
    /**
     * ### modeSave
     *
     * Режим сохранения.
     *
     * ***
     * @type {boolean}
     * @public
    */
    modeSave;
    /**
     * ### interface
     *
     * Интерфейс.
     *
     * ***
     * @type {YInterface?}
     * @public
    */
    interface = null;
    /**
     * ### interfaceActive
     *
     * Активный интерфейс.
     *
     * ***
     * @type {YInterface}
     * @public
    */
    interfaceActive = this.interface;

};
class ITerminal extends DTerminal {

    /**
     * ### date
     *
     *
     *
     * ***
     * @type {}
     * @public
    */
    date = new YDate();
    /**
     * ### listener
     *
     * Прослушиватель.
     *
     * ***
     * @type {YListener}
     * @public
    */
    listener = new YListener(this);
    /**
     * ### transferElements
     *
     * Передаваемые элементы.
     *
     * ***
     * @type {YElement[]}
     * @public
    */
    transferElements = [];

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
     *  @arg {...YTerminalT} t
    */
    constructor(...t) {

        t = FTerminal.#before(t);

        super(Object.assign(t, {}));

        FTerminal.#deceit.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        if (t?.length === 1 && [Object, YTerminal].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

            return t[0];

        } else if (t?.length) {

            /** @type {YTerminalT} */
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
    /** @arg {YTerminalT} t @this {YTerminal} */
    static #deceit(t) {

        try {

            FTerminal.#verify.apply(this, [t]);

        } catch (e) {

            throw e;

        } finally {



        };

    };
    /** @arg {YTerminalT} t @this {YTerminal} */
    static #verify(t) {

        const {



        } = t;

        FTerminal.#handle.apply(this, [t]);

    };
    /** @arg {YTerminalT} t @this {YTerminal} */
    static #handle(t) {

        if (t.interface) {

            t.interface.setTerminal(this);

        };

        FTerminal.#create.apply(this, [t]);

    };
    /** @arg {YTerminalT} t @this {YTerminal} */
    static #create(t) {

        const {



        } = t;

        this.adopt(t);

        if (config) {

            this.adoptByDefault(config);

        };

        this.setInterface(this.interface);

        this.listener.on();

    };

};

/**
 * ### YTerminal
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `ject\terminal`
 * - Цепочка `BDVHC`
 * ***
 *
*/
export class YTerminal extends FTerminal {

    /**
     * ### receive
     * - Версия `0.0.0`
     * - Модуль `ject\terminal`
     * ***
     *
     * Метод принятия комбинаций.
     *
     * ***
     * @arg {YComb} comb `Комбинация`
     * @public
    */
    receive(comb) {

        /** @type {YResponse?} */
        const response = YReceiver.prototype.receive.apply(this, [comb]);

        if (response) {

            if (response.update) {

                this.display();

            };

        };

    };

    /**
     * ### display
     * - Версия `0.0.0`
     * - Модуль `ject\terminal`
     * ***
     *
     *
     *
     * ***
     *
     * @public
    */
    display() {

        console.clear();

        new YString(this.interfaceActive?.layout?.get?.(true) ?? this.layout?.get?.(true) ?? this.constructor.layout?.get?.(true))

            .exec(y => {

                if (this.colorF || this.colorB) {

                    y.stylist.setColor(this.colorF, this.colorB, 0, 0);

                };

                if (this.interfaceActive) {

                    if (this.interfaceActive.layout) {

                        y
                            .setCursorTo(0, 0)
                            .pasteWrap(this.interfaceActive.layout.get(true));

                    };

                    [...this.transferElements, ...this.interfaceActive.elements, this.interfaceActive?.interactor].filter(e => e).forEach(e => {

                        y.setCursorTo(...e.coords)
                        y.pasteWrap(e.getLayout())

                    });

                };

            })
            .display();

        return this;

    };

    /**
     * ### setInterface
     * - Версия `0.0.0`
     * - Модуль `ject\terminal`
     * ***
     *
     * Метод установки начального интерфейса.
     *
     * ***
     * @arg {YInterface} intf `Интерфейс`
     * @public
    */
    setInterface(intf) {

        if (intf instanceof YInterface) {

            this.interface = intf;

            if (!this.interfaceActive) {

                this.recepient = this.interface;
                this.interfaceActive = this.interface;

            };

            this.interface.setTerminal(this);

        };

        return this;

    };

};