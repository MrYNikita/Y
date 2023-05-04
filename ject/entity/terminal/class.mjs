//#region YI

import { YString } from '../../../string/class.mjs';
import { YListener } from './listener/class.mjs';
import { YReceiver } from './receiver/class.mjs';
import { YInterface } from './interface/class.mjs';
import { YConsole } from '../console/class.mjs';
import { YResponse } from './receiver/response/class.mjs';
import { YElement } from './element/class.mjs';
import { arrayUnite } from '../../../array/module.mjs';
import { YFileJson } from '../../../os/file/json/class.mjs';
import { condIsNumber, condIsString } from '../../../bool/cond/module.mjs';
import { YComb } from './listener/comb/class.mjs';
import { YTimer } from '../timer/class.mjs';
import { YStyle } from './style/class.mjs';
import { structureFrame } from '../../../string/structure/module.mjs';
import configStyle from './style/config.mjs';
import { YKey } from './listener/key/class.mjs';
import { YSwitch } from './element/interact/switch/class.mjs';
import { YMenu } from './element/interact/menu/class.mjs';
import { YInteract } from './element/interact/class.mjs';

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

/** ### YTerminalT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `ject\entity\terminal`
 * 
 * Основной параметр модуля `YTerminal`.
 * 
 * @typedef {YTerminalTE&YTerminalTU} YTerminalT
 * 
*/
/** ### YTerminalTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `ject\entity\terminal`
 * 
 * Параметр наследования `YTerminal`.
 * 
 * @typedef {{[p in Exclude<keyof DTerminal,keyof STerminal>|Exclude<keyof STerminal,keyof DTerminal>]:(DTerminal[p]&STerminal[p])}} YTerminalTE
 * 
*/
/** ### YTerminalTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `ject\entity\terminal`
 * 
 * Уникальные параметры `YTerminal`.
 * 
 * @typedef YTerminalTU
 * @prop {boolean} loadMode
 * 
*/

//#endregion

class STerminal extends YReceiver {

    /** ### config
     * 
     * Конфигуратор.
     * 
     * ***
     * @public
    */
    static config = config;
    /**
     * ### combs
     * 
     * Комбинации.
     * 
     * *** 
     * @type {YComb[]} 
     * @public
    */
    static combs = [

        new YComb({

            keys: [

                new YKey('escape'),

            ],
            funcs: [

                y => y.save().off(),

            ],

        }),
        new YComb({

            keys: [

                new YKey('f1'),

            ],
            funcs: [

                y => y.back(),

            ],

        }),
        new YComb({

            keys: [

                new YKey('f5'),

            ],
            funcs: [

                y => y.restart(),

            ],

        }),
        new YComb({

            keys: [

                new YKey('r', '', false, true, false)

            ],
            funcs: [

                y => y.restart(),

            ],

        }),

    ];

};
class DTerminal extends STerminal {

    /**
     * ### file
     * 
     * Файл.
     * 
     * *** 
     * @type {YFileJson?} 
     * @public
    */
    file;
    /**
     * ### sizeX
     * 
     * Ширина.
     * 
     * *** 
     * @type {number} 
     * @public
    */
    sizeX;
    /**
     * ### sizeY
     * 
     * Длина.
     * 
     * *** 
     * @type {number} 
     * @public
    */
    sizeY;
    /**
     * ### title
     * 
     * Заголовок.
     * 
     * *** 
     * @type {string?} 
     * @public
    */
    title;
    /**
     * ### style
     * 
     * Стиль.
     * 
     * *** 
     * @type {YStyle} 
     * @public
    */
    style = new YStyle();
    /**
     * ### layers
     * 
     * Слои.
     * 
     * *** 
     * @type {any[]} 
     * @public
    */
    layers = [];
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
     * ### saveMode
     * 
     * Режим сохранения.
     * 
     * *** 
     * @type {boolean} 
     * @public
    */
    saveMode;
    /**
     * ### loadMode
     * 
     * Режим загрузки.
     * 
     * *** 
     * @type {boolean} 
     * @public
    */
    loadMode;

};
class ITerminal extends DTerminal {

    /**
     * ### timer
     * 
     * Таймер.
     * 
     * *** 
     * @type {YTimer} 
     * @protected
    */
    timer = new YTimer();
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
     * ### transfers
     * 
     * Элементы для передачи.
     * 
     * *** 
     * @type {YElement[]} 
     * @protected
    */
    transfers = [];
    /** @type {YInterface} */
    recepient;

};
class MTerminal extends ITerminal {



};
class FTerminal extends MTerminal {

    /**
     * ### YTerminal.constructor
     * 
     * 
     * 
     * ***
     * @arg {YTerminalT} t
    */
    constructor(t) {

        t = [...arguments];

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

                r = { _ytp: t, };

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

        if (t.file) {

            if (condIsString(t.file)) {

                t.file = new YFileJson(t.file);

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

            this.adoptDefault(config);

        };

        this.setInterface(this.recepient);

        this.appendHandlers(

            ['go'],
            ['on'],
            ['off'],
            ['save'],
            ['load'],
            ['back'],
            ['receive'],
            ['restart'],
            ['display'],

        );

    };

};

/**
 * ### YTerminal
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `ject\entity\terminal`
 * - Цепочка `BDVHC`
 * ***
 * 
 * 
 * 
 * ***
 * 
*/
export class YTerminal extends FTerminal {

    /**
     * ### on
     * - Версия `0.0.0`
     * - Модуль `ject\entity\terminal`
     * ***
     * 
     * Метод активации терминала.
     * 
     * ***
     * @public
    */
    on() {

        if (!this.listener.active) {

            this.listener.on();
            this.timer.on();

        };

        return this;

    };
    /**
     * ### off
     * - Версия `0.0.0`
     * - Модуль `ject\entity\terminal`
     * ***
     * 
     * Метод отключения терминала.
     * 
     * ***
     * @public
    */
    off() {

        this.listener.off();
        this.timer.off();

        return this;

    };
    /**
     * ### save
     * - Версия `0.0.0`
     * - Модуль `ject\entity\terminal`
     * ***
     * 
     * 
     * 
     * ***
     * 
     * @public
    */
    save() {

        try {

            

        } catch (e) {

            

        };

        return this;

    };
    /**
     * ### load
     * - Версия `0.0.0`
     * - Модуль `ject\entity\terminal`
     * ***
     * 
     * Метод загрузки состояния.
     * 
     * ***
     * @public
    */
    load() {

        if (this.file.exists()) {

            const data = this.file.read();

            this.go(...data.location);

            const interactor = this.recepient.interactor;

            if (interactor) {

                switch (this.recepient.interactor.constructor) {

                    case YMenu: {

                        interactor.index = data.interact.index ?? 0;

                    }; break;
                    case YSwitch: {

                        interactor.index = data.interactSwitch.index ?? 0;

                    }; break;

                };

            };

        };

        return this;

    };
    /**
     * ### restart
     * - Версия `0.0.0`
     * - Модуль `ject\entity\terminal`
     * ***
     * 
     * Метод перезапуска терминала.
     * 
     * ***
     * 
     * @public
    */
    restart() {

        this.saveMode && this.save();

        process.send('restart');

        return this;

    };

    /**
     * ### getKey
     * - Версия `0.0.0`
     * ***
     * 
     * Метод получения последней нажатой клавиши.
     * 
     * ***
     * @public
    */
    getKey() {

        return this.listener.keys.at(-1) ?? null;

    };
    /**
     * ### getLocation
     * - Версия `0.0.0`
     * - Модуль `ject\entity\terminal`
     * ***
     * 
     * Метод получения местоположения.
     * 
     * ***
     * @public
    */
    getLocation() {

        const location = [this.recepient];

        while (location.at(-1).interfaceOver) {

            location.push(location.at(-1).interfaceOver);

        };

        return location.map(intf => intf.label).reverse().slice(1);

    };
    /**
     * ### getElements
     * - Версия `0.0.0`
     * ***
     * 
     * Метод получения всех текущих активных элементов.
     * 
     * ***
     * @public
     * @return {(YElement|YInteract)[]}
    */
    getElements() {
        
        const result = [];

        result.push(...this.transfers);

        if (this.recepient) {

            if (this.recepient.elements) {

                result.push(...this.recepient.elements);

            };
            if (this.recepient.switch) {

                result.push(...this.recepient.switch.interacts);

            };

        };

        return result;
        
    };

    /**
     * ### go
     * - Версия `0.0.0`
     * - Модуль `ject\entity\terminal`
     * ***
     * 
     * Метод перехода к указанному интерфейсу.
     * 
     * ***
     * @arg {...string} labels `Метки`
     * @public
    */
    go(...labels) {

        const labelLast = labels.at(-1);

        if (this.recepient) {

            labels = labels.filter(label => condIsString(label));

            labels.forEach((label) => {
                
                const intf = this.recepient.interfaces.find(i => i.label === label);
                
                if (intf) {

                    this.transfers.push(...this.recepient.elements.filter(e => e.transfer && !this.transfers.includes(e)));
                    
                    this
                    
                        .setInterface(intf)
                        .handle('go');
                    
                    if (intf.label === labelLast) {

                        this.display();

                    };

                };

            });

        };

        return this;

    };
    /**
     * ### back
     * - Версия `0.0.0`
     * - Модуль `ject\entity\terminal`
     * ***
     * 
     * Метод перехода к предыдущему интерфейсу.
     * 
     * ***
     * @public
    */
    back() {

        if (this.recepient.interfaceOver) {

            this.transfers = this.transfers.filter(e => !this.recepient.elements.includes(e));

            this

                .setInterface(this.recepient.interfaceOver)
                .handle('back')
                .display();

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

        arrayUnite(this.recepient.elements, this.recepient.recepient.interacts, this.transfers).forEach(element => {

            if (element.redraw) {

                YConsole.setCursorTo(...element.coords);

                element.display();

            };

        });

        if (!response) {

            return response;

        };

        return response;

    };
    /**
     * ### display
     * - Версия `0.0.0`
     * - Модуль `ject\entity\terminal`
     * ***
     * 
     * Метод отображения терминала.
     * 
     * ***
     * @public
    */
    display() {

        YConsole

            .resetColor()
            .setCursorTo(0, 0)

        if (this.recepient) {

            YConsole

                .setColor(this.recepient.style.colorF, this.recepient.style.colorB)

        };

        if (this.layout) {



        } else {

            new YString()

                .paste(structureFrame(this.sizeY, this.sizeX, this.title ?? 'YTerminal', this.recepient?.style?.frameTypeTerminal ?? configStyle.frameTypeTerminal))
                .display(true);

        };

        arrayUnite(this.transfers, this.recepient.recepient.interacts, this.recepient.elements).forEach(element => {

            YConsole.setCursorTo(...element.coords);

            element.display();

        });

        return this;

    };
    /**
     * ### displayClear
     * - Версия `0.0.0`
     * - Модуль `ject\entity\terminal`
     * ***
     * 
     * Метод очистки дисплея терминала.
     * 
     * ***
     * @public
    */
    displayClear() {

        for (let y = 1; y < this.sizeY - 2; y++) {

            YConsole

                .setCursorTo(y, 1)
                .write(' '.repeat(this.sizeX - 2))
                .setCursorTo(1, 1)

        };

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

            this.recepient = intf;

            this.recepient.setTerminal(this);

            Object.setPrototypeOf(intf.style, this.style);

        };

        return this;

    };

};