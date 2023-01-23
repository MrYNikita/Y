import { YJect } from "../YJect/YJect.mjs";
import { YString } from "../../string/YString/YString.mjs";
import { jectFill } from "../ject.mjs";
import { YListener } from "./YListener/YListener.mjs";
import { YInterface } from "./YInterface/YInterface.mjs";
import { configYTerminal } from "../../config.mjs";

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
 *
*/

//#endregion

class STerminal extends YJect {

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

    /**
     * Общая разметка терминалов.
     * @type {YString}
    */
    static layout = new YString()

        .setColor('cyan', 'blueDark')
        .paste(

            '╔' + '═'.repeat(configYTerminal.sizes[0] - 2) + '╗\n',
            ('║' + ' '.repeat(configYTerminal.sizes[0] - 2) + '║\n').repeat(configYTerminal.sizes[1] - 2),
            '╚' + '═'.repeat(configYTerminal.sizes[0] - 2) + '╝\n',

        )

};
class DTerminal extends STerminal {



};
class ITerminal extends DTerminal {

    /**
     * Разметка.
     * @type {YString?}
    */
    layout = null;
    /**
     * Прослушиватель пользовательского ввода.
     * @type {YListener}
    */
    listener = new YListener(this);
    /**
     * Интерфейсы.
     * @type {YInterface[]}
    */
    interfaces = [];
    /**
     * Инструкции.
     * @type {[string, function():void][]}
    */
    instructions = [];

};
class MTerminal extends ITerminal {

    /**
     * Метод сигнализирования о получении нового значения.
     * - Версия `0.0.0`
     * @protected
     *
    */
    signal() {

        if (this.interfaces?.[0]) this.interfaces[0].receive();

        return this;

    };
    /**
     * Метод принятия данных от прослушивателя.
     * - Версия `0.0.0`
     * @protected
     *
    */
    receive() {

        if (!this.interfaces?.[0]?.interactor) return this;

        this.interfaces[0]?.interactor.receive();

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

        this.listener.on();

    };

};

/**
 * ### YTerminal
 * - Тип `SDIMFY`
 * - Версия `0.1.0`
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

                if (!this.interfaces[0]) {

                    return;

                } else {

                    [...this.interfaces[0].elements, this.interfaces[0]?.interactor].filter(e => e).forEach(e => {

                        y.setCursorTo(...e.coords)
                        y.pasteWrap(e.getLayout())

                    });

                };

            })
            .display();

        return this;

    };

    /**
     * ### appendInterface
     * - Версия `0.0.1`
     * - Модуль `YTerminal`
     * ***
     *
     * Метод добавления интерфейсов для терминала.
     *
     * ***
     * @arg {...import("./YInterface/YInterface.mjs").YInterfaceT} interfaces
     * @public
    */
    appendInterface(...interfaces) {

        this.interfaces.push(...interfaces.filter(i => [Object, YInterface].includes(i.constructor)).map(i => i instanceof Object ? new YInterface(i) : i).map(i => {

            i.terminal = this;

            if (i.interactor) {

                i.interactor.terminal = this;
                i.interactor.interface = i;

                if (i.interactor.interactors) i.interactor.interactors.forEach(ic => ic[1].terminal = this);

            };

            [...i.elements, i.interactor].filter(e => e).forEach(e => {

                e.terminal = this;
                e.interface = i;

            });

            return i;

        }));

        return this;

    };

};