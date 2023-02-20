//#region YI

import { YDate } from "../../date/YDate/YDate.mjs";
import { YString } from "../../string/YString/YString.mjs";
import { YListener } from "./listener/class.mjs";
import { YReceiver } from "./receiver/class.mjs";
import { YInterface } from "./interface/class.mjs";
import { YElement } from "./interface/element/class.mjs";
import { YComb } from "./receiver/bind/comb/class.mjs";
import { YResponse } from "./receiver/response/class.mjs";
import { YProcedure } from "./receiver/handler/procedure/class.mjs";
import { YHandler } from "./receiver/handler/class.mjs";
import { YBind } from "./receiver/bind/class.mjs";
import { fileReadJson, fileWriteJson } from "../../os/file/file.mjs";
import { YPath } from "../../os/path/YPath/YPath.mjs";

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

    /** @type {YBind<YTerminal>[]} */
    static binds = [

        {
            comb: ['\b'],
            funcs: [y => y.back()],
        },
        {
            comb: ['\x1b'],
            funcs: [y => y.save()]
        }

    ];
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
     * ### binds
     *
     * Привязки.
     *
     * ***
     * @type {YBind<YTerminal>[]}
     * @public
    */
    binds = [];
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
     * @type {YInterface?}
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
     * ### handlers
     *
     * Обработчики.
     *
     * ***
     * @type {YHandler<YTerminal>[]}
     * @protected
    */
    handlers = [

        { label: 'go', },
        { label: 'back', },

    ].map(h => new YHandler(h));
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

            this.goByLabel(...data.location);

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

            const data = fileReadJson(this.pathCache.get());
            const location = [this.interfaceActive];

            while (location.at(-1).interfaceOver && location.at(-1).interfaceOver.label) {

                location.push(location.at(-1).interfaceOver);

            };

            data.location = location.reverse().map(i => i.label).filter(s => s);

            fileWriteJson(this.pathCache.get(), data);

        };

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
     *  @arg {...YTerminalT} t
    */
    constructor(...t) {

        super(Object.assign(t = FTerminal.#before(t), {}));

        FTerminal.#deceit.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        /** @type {YTerminalT} */
        let r = {};

        if (t?.length === 1 && [Object, YTerminal].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

            r = t[0];

        } else if (t?.length) {

            if (t[0]?._ytp) {

                t = [...t[0]._ytp];

            };

            switch (t.length) {

                case 3:
                case 2:
                case 1:

            };

            if (!Object.values(r).length) {

                r = { _ytp: t };

            };

        };

        return r;

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

        if (t.pathCache) {

            if (t.pathCache.constructor === String) {

                t.pathCache = new YPath(t.pathCache);

            };

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

        if (this.modeLoad) {

            this.load();

        };

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
     * ### back
     * - Версия `0.0.0`
     * - Модуль `ject\terminal`
     * ***
     *
     * Метод перехода на предыдущий интерфейс.
     *
     * ***
     *
     * @public
    */
    back() {

        if (this.interfaceActive.interfaceOver) {

            this.transferElements = this.transferElements.filter(e => !this.interfaceActive.elements.includes(e));

            this.execHandle('back');

            this.recepient = this.interfaceActive.interfaceOver;
            this.interfaceActive = this.interfaceActive.interfaceOver;

            this.display();

        };

        return this;

    };

    /**
     * ### goByLabel
     * - Версия `0.2.0`
     * - Модуль `ject\terminal`
     * ***
     *
     * Метод перехода по меткам.
     *
     * ***
     * @arg {...string} labels `Метки`
     * @public
    */
    goByLabel(...labels) {

        if (this.interfaceActive) {

            for (const label of labels.filter(l => l.constructor === String)) {

                /** @type {YInterface} */
                const intf = this.interfaceActive.interfaces.find(i => i.label === label);

                if (intf) {

                    this.transferElements.push(...this.interfaceActive.elements.filter(e => e.transfer));

                    this.recepient = intf;
                    this.interfaceActive = intf;

                    this.execHandle('go');

                };

            };

            this.display();

        };

        return this;

    };

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

    /**
     * @arg {string} label `Метка`
     * @arg {...YProcedure<YTerminal>} procedures `Про`
     * @public
    */
    appendHandler(label, ...procedures) {

        YReceiver.prototype.appendHandler.apply(this, [label, ...procedures]);

        return this;

    };

};