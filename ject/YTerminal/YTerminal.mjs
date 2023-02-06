import { YJect } from "../YJect/YJect.mjs";
import { YString } from "../../string/YString/YString.mjs";
import { jectFill } from "../ject.mjs";
import { YListener } from "./YListener/YListener.mjs";
import { YInterface } from "./YInterface/YInterface.mjs";
import { configYTerminal } from "../../config.mjs";
import { arrayRearrangeByElement } from "../../array/array.mjs";

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
 * @prop {[number,number]} sizes
 * @prop {import("./YInterface/YInterface.mjs").YInterfaceT} interface
 * @prop {import("../../string/ansi/color/color.mjs").colorTVColor} colorF
 * @prop {import("../../string/ansi/color/color.mjs").colorTVColor} colorB
 *
*/

//#endregion

class STerminal extends YJect {

    /**
     * ### binds
     *
     * Общедоступные привязки.
     *
     * ***
     * @type {[(string|string[]),function(YTerminal):void,boolean][]}
     * @protected
    */
    static binds = [

        ['\b',

            y => {

                y.back();

            }

        ]

    ];

    /**
     * Общая разметка терминалов.
     * @type {YString}
    */
    static layout = new YString()

        .setColor('cyan', 'blueDark')
        .paste(

            '╔' + '═'.repeat(configYTerminal.sizes[0] - 2) + '╗\n',
            ('║' + ' '.repeat(configYTerminal.sizes[0] - 2) + '║\n').repeat(configYTerminal.sizes[1] - 2),
            '╚' + '═'.repeat(configYTerminal.sizes[0] - 2) + '╝',

        )


    static reportBlocks = [

        ['Общее', 'f', '',

            /** @arg {YTerminal} y */
            y => new YString()

                .changePostfix(';\n')
                .paste(

                    `Интерфейсов: ${y.interfaces.length}`,

                )
                .get()],
        ['Прослушиватель', 'f', '',

            /** @arg {YTerminal} y */
            y => new YString()

                .changePostfix(';\n')
                .paste(

                    `Состояние: ${y.listener.active}`,
                    `Последний ввод: '${y.listener.value}'`,

                )
                .get()]

    ];

};
class DTerminal extends STerminal {

    /**
     * ### binds
     *
     * Привязки.
     *
     * ***
     * @type {[(string|string[]),function(YTerminal):void,boolean][]}
     * @public
    */
    binds = [];
    /**
     * Разметка.
     * @type {YString?}
    */
    layout = null;
    /**
     * ### colorF
     *
     * Цвет символов.
     *
     * ***
     * @type {import("../../string/ansi/color/color.mjs").colorTVColor?}
     * @public
    */
    colorF;
    /**
     * ### colorB
     *
     * Цвет фона.
     *
     * ***
     * @type {import("../../string/ansi/color/color.mjs").colorTVColor?}
     * @public
    */
    colorB;
    /**
     * ### interface
     *
     * Начальный интерфейс.
     *
     * ***
     * @type {YInterface?}
     * @public
    */
    interface = null;

};
class ITerminal extends DTerminal {

    /**
     * Прослушиватель пользовательского ввода.
     * @type {YListener}
    */
    listener = new YListener(this);
    /**
     * Инструкции.
     * @type {[string, function():void][]}
    */
    instructions = [];
    /**
     * ### interfaceActive
     *
     * Активный интерфейс.
     *
     * ***
     * @type {YInterface?}
     * @public
    */
    interfaceActive = null;

};
class MTerminal extends ITerminal {

    /**
     * ### signal
     * - Версия `0.1.0`
     * - Модуль `YTerminal`
     * ***
     *
     * Метод сигнализирования о получении нового значения.
     *
     * ***
     *
     * @protected
    */
    signal() {

        if (this.interfaceActive) {

            this.interfaceActive.receive();

        };

        return this;

    };
    /**
     * ### receive
     * - Версия `0.1.0`
     * - Модуль `YTerminal`
     * ***
     *
     * Метод принятия данных от прослушивателя.
     *
     * ***
     *
     * @protected
    */
    receive(string = this.listener.code) {

        let b = [...this.binds, ...this.constructor.binds].find(b => b[0] === string || (b[0] instanceof Array && b[0].includes(string)));

        if (b) {

            b?.[1]?.(this);

        } else if (b = [...this.binds, ...this.constructor.binds].find(b => b[0] === 'default')) {

            b?.[1]?.(this);

        } else {

            if (this.interfaceActive) {

                this.signal();

            };

        };

        if (b && b[2]) this.terminal.display();

        return this;

    };

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

        if (t.interface instanceof Object && !(t.interface instanceof YInterface)) {

            t.interface = new YInterface({ ...t.interface });

        };

        if (!t.sizes) {

            t.sizes = [...configYTerminal.sizes];

        } else {

            if (!t.sizes[0]) t.sizes[0] = configYTerminal.sizes[0];
            if (!t.sizes[1]) t.sizes[1] = configYTerminal.sizes[1];

        };

    };
    /** @arg {YTerminalT} t @this {YTerminal} */
    static #create(t) {

        const {



        } = t;

        jectFill(this, t);

        this.interfaceActive = this.interface ?? null;

        this.listener.on();

        this.interface.setTerminal(this);

    };

};

/**
 * ### YTerminal
 * - Тип `SDIMFY`
 * - Версия `0.2.0`
 * - Модуль `YTerminal`
 * - Цепочка `BDVHC`
 * ***
 * Класс терминалов для контроля программ и/или приложений посредством взаимодействия через элементы управления или ввод данных.
 *
 * Для прослушивания данных терминалы используют `YListener` (прослушиватель).
 * Прослушиватель используется отображениями с интерактивными элементами, которые запускают его на момент своей работы.
 *
 * Любой терминал состоит из `YInterface` (оторажений), которые показывают данные, необходимые для взаимодействия, и позволяют манипулировать ими через ввод.
 * По умолчанию, первым видимым для пользователя отображением будет первое назначенное отображение.
*/
export class YTerminal extends FTerminal {

    /**
     * ### back
     * - Версия `0.0.0`
     * - Модуль `YTerminal`
     * ***
     *
     * Метод возврата от указанного интерфейса.
     *
     * ***
     * @arg {boolean} drop `Режим сброса предыдущего интерфейса`
     * @public
    */
    back(drop) {

        if (this.interfaceActive.interface) {

            if (drop) {

                this.interfaceActive.interface.drop();

            };

            /** @type {YInterface?} */
            this.interfaceActive = this.interfaceActive.interface;

            this.display();

        };

        return this;

    };

    /**
     * ### goByLabel
     * - Версия `0.0.0`
     * - Модуль `YTerminal`
     * ***
     *
     * Метод перехода к интерфейсу по указанной метке.
     *
     * Переход осуществялется только в том случае, если интерфейс с меткой существует.
     *
     * ***
     * @arg {string} label `Метка`
     * @arg {boolean} drop `Режим сброса следующего интерфейса`
     * @public
    */
    goByLabel(label, drop) {

        /** @type {YInterface?} */
        const f = this.interfaceActive.interfaces.find(i => i.label === label);

        if (f) {

            if (drop) {

                f.drop();

            };

            this.interfaceActive = f;

            this.display();

        };

        return this;

    };

    /**
     * ### display
     * - Версия `0.0.1`
     * - Модуль `YTerminal`
     * ***
     *
     * Метод отображения терминала.
     *
     * ***
     *
     * @public
    */
    display() {

        console.clear();

        new YString(this.layout ? this.layout.get(true) : YTerminal.layout.get(true))

            .exec(y => {

                if (this.colorF || this.colorB) {

                    y.stylist.setColor(this.colorF, this.colorB, 0, 0);

                };

                if (!this.interfaceActive) {

                    return;

                } else {

                    [...this.interfaceActive.elements, this.interfaceActive?.interactor].filter(e => e).forEach(e => {

                        y.setCursorTo(...e.coords)
                        y.pasteWrap(e.getLayout())

                    });

                };

            })
            .display();

        return this;

    };

};