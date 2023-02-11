import { YJect } from "../YJect/YJect.mjs";
import { YString } from "../../string/YString/YString.mjs";
import { jectAdopt } from "../ject.mjs";
import { YListener } from "./YListener/YListener.mjs";
import { YInterface } from "./YInterface/YInterface.mjs";
import { configYTerminal } from "../../config.mjs";
import { YElement } from "./YInterface/YElement/YElement.mjs";
import { YPath } from "../../os/path/YPath/YPath.mjs";
import { fileReadJson, fileWriteJson } from "../../os/file/file.mjs";

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

        ],

    ];
    /**
     * ### bindsImportant
     *
     * Общие привязки первостепенного назначения.
     *
     * Данные привязки срабатывают до сигнализации в интерфейсы.
     *
     * ***
     * @type {[(string|string[]),function(YTerminal):void,boolean][]}
     * @public
    */
    static bindsImportant = [

        ['\x1B',

            y => {

                y.save();

            }

        ],

    ];

    /**
     * Общая разметка терминалов.
     * @type {YString}
    */
    static layout = new YString()

        .setColor('cyan', 'blueDark')
        .paste(

            '╔' + '═'.repeat(configYTerminal.sizes[1] - 2) + '╗\n',
            ('║' + ' '.repeat(configYTerminal.sizes[1] - 2) + '║\n').repeat(configYTerminal.sizes[0] - 2),
            '╚' + '═'.repeat(configYTerminal.sizes[1] - 2) + '╝',

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
     * ### sizes
     *
     * Размер.
     *
     * ***
     * @type {[number,number]}
     * @public
    */
    sizes = [];
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
    /**
     * ### pathCache
     *
     * Путь до файла кэша.
     *
     * ***
     * @type {YPath?}
     * @public
    */
    pathCache = null;

    /**
     * ### modeSave
     *
     * Режим сохранения.
     *
     * ***
     * @type {boolean}
     * @public
    */
    modeSave = false;
    /**
     * ### modeLoad
     *
     * Режим загрузки.
     *
     * ***
     * @type {boolean}
     * @public
    */
    modeLoad = false;

    /**
     * ### handlersGo
     *
     * Массив обработчиков перехода.
     *
     * Размещенные здесь функции поочередно вызываются в случае перехода с активного интерфейса в любой вложенный.
     *
     * ***
     * @type {(function(YTerminal):void)[]}
     * @public
    */
    handlersGo = [];
    /**
     * ### handlersBack
     *
     * Массив обработчиков возврата.
     *
     * Размещенные здесь функции поочередно вызываются в случае возврата из активного интерфейса.
     *
     * ***
     * @type {(function(YTerminal):void)[]}
     * @public
    */
    handlersBack = [];

};
class ITerminal extends DTerminal {

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
     * ### instructions
     *
     * Инструкции.
     *
     * ***
     * @type {[string, function():void]}
     * @public
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
    /**
     * ### transfers
     *
     * Передаваемые элементы.
     *
     * ***
     * @type {YElement[]}
     * @protected
    */
    transferElements = [];

};
class MTerminal extends ITerminal {

    /**
     * ### load
     * - Версия `0.0.0`
     * - Модуль `YTerminal`
     * ***
     *
     * Метод загрузки данных.
     *
     * ***
     *
     * @protected
    */
    load() {

        if (this.modeLoad && this.pathCache.check()) {

            const data = fileReadJson(this.pathCache.get());

            this.goByLabel(data.location);

        };

        return this;

    };
    /**
     * ### save
     * - Версия `0.0.0`
     * - Модуль `YTerminal`
     * ***
     *
     * Метод сохранения данных терминала.
     *
     * ***
     *
     * @protected
    */
    save() {

        if (this.modeSave) {

            const location = [this.interfaceActive];

            while (location.at(-1).interface && location.at(-1).interface.label) {

                location.push(location.at(-1).interface);

            };

            fileWriteJson(this.pathCache.get(), {

                location: location.reverse().map(i => i.label).filter(s => s),

            });

        };

        return this;

    };
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

            return this.interfaceActive.receive();

        };

        return false;

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
     * @arg {string} string `Код`
     * @arg {boolean} signal `Сигнал`
     * @protected
    */
    receive(string = this.listener.code, signal = this.signal()) {

        const bi = YTerminal.bindsImportant.find(b => b[0] === string || (b[0] instanceof Array && b[0].includes(string)));

        if (bi) {

            bi?.[1]?.(this);

            return true;

        } else if (!signal) {

            const binds = [...this.binds, ...this.constructor.binds];

            let b = binds.find(b => b[0] === string || (b[0] instanceof Array && b[0].includes(string)));

            if (b) {

                b?.[1]?.(this);

            } else if (b = binds.find(b => b[0] === 'default')) {

                b?.[1]?.(this);

            } else {

                return false;

            };

            this.display();

        } else {

            this.display();

        };

        return true;

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

        if (t.pathCache) {

            if (t.pathCache.constructor === String) {

                t.pathCache = new YPath(t.pathCache);

            };

        };

    };
    /** @arg {YTerminalT} t @this {YTerminal} */
    static #create(t) {

        const {



        } = t;

        this.adopt(t);

        this.interfaceActive = this.interface ?? null;

        this.listener.on();

        this.interface.setTerminal(this);

        this.load();

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
     * ### bind
     * - Версия `0.0.0`
     * - Модуль `YTerminal`
     * ***
     *
     * Метод последовательного вызова указанных привязок.
     *
     * ***
     * @arg {...string} strings `Ключ-коды/символы привязок`
     * @public
    */
    bind(...strings) {

        strings.filter(s => s && s.constructor === String).forEach(s => this.receive(s, false))

        return this;

    };

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

            this.transferElements = this.transferElements.filter(e => !this.interfaceActive.elements.includes(e));

            this.handlersBack.forEach(h => h(this));

            this.display();

        };

        return this;

    };

    /**
     * ### goByLabel
     * - Версия `0.1.0`
     * - Модуль `YTerminal`
     * ***
     *
     * Метод перехода к интерфейсу по указанной метке.
     *
     * Переход осуществялется только в том случае, если интерфейс с меткой существует.
     *
     * ***
     * @arg {string|string[]} label `Метка`
     *
     * Может быть обозначена как единственная метка или массив меток.
     *
     * В случае единственного обозначения будет осуществлен разовый переход на доступный интерфейс.
     *
     * В случае массива переход будет осуществляться до тех пор, пока удается находить нужные интерфейсы.
     *
     * @arg {boolean} drop `Режим сброса следующего интерфейса`
     * @public
    */
    goByLabel(label, drop) {


        if (label.constructor === String) {

            label = [label];

        };

        if (label instanceof Array) {

            label.filter(l => l).forEach(l => {

                /** @type {YInterface?} */
                const f = this.interfaceActive.interfaces.find(i => i.label === l);

                if (f) {

                    if (drop) {

                        f.drop();

                    };

                    this.transferElements.push(...this.interfaceActive.elements.filter(e => e.transfer));

                    this.interfaceActive = f;

                    this.handlersGo.forEach(h => h(this));
                    this.interfaceActive.handlersActive.forEach(h => h(this.interfaceActive));

                };

            });

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

        if (this.interfaceActive.layout) {

            new YString(this.interfaceActive.layout.get(true))

                .exec(y => {

                    [...this.interfaceActive.elements, this.interfaceActive?.interactor].filter(e => e).forEach(e => {

                        y.setCursorTo(...e.coords)
                        y.pasteWrap(e.getLayout())

                    });

                })
                .display();

        } else {

            new YString(this.layout ? this.layout.get(true) : YTerminal.layout.get(true))

                .exec(y => {

                    if (this.colorF || this.colorB) {

                        y.stylist.setColor(this.colorF, this.colorB, 0, 0);

                    };

                    if (!this.interfaceActive) {

                        return;

                    } else {

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

        };

        return this;

    };

    /**
     * ### appendHandler
     * - Версия `0.0.0`
     * - Модуль `YTerminal`
     * ***
     *
     * Метод добавления обработчика.
     *
     * ***
     * @arg {'go'|'back'} type `Тип`
     * @arg {function(YTerminal):void} handle `Обработчик`
     * @public
    */
    appendHandler(type, handle) {

        type = 'handlers' + type[0].toUpperCase() + type.slice(1);

        if (this[type] && handle instanceof Function) {

            this[type].push(handle);

        };

        return this;

    };

};