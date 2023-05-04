//#region YI

import { YString } from '../../../../../../string/class.mjs';
import configString from '../../../../../../string/config.mjs';
import { YConsole } from '../../../../console/class.mjs';
import { YComb } from '../../../listener/comb/class.mjs';
import { YInteract } from '../class.mjs';
import { YPoint } from './point/class.mjs';

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

/** ### YMenuT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `ject\entity\terminal\element\interact\menu`
 * 
 * Основной параметр модуля `YMenu`.
 * 
 * @typedef {YMenuTE&YMenuTU} YMenuT
 * 
*/
/** ### YMenuTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `ject\entity\terminal\element\interact\menu`
 * 
 * Параметр наследования `YMenu`.
 * 
 * @typedef {{[p in Exclude<keyof DMenu,keyof SMenu>|Exclude<keyof SMenu,keyof DMenu>]:(DMenu[p]&SMenu[p])}} YMenuTE
 * 
*/
/** ### YMenuTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `ject\entity\terminal\element\interact\menu`
 * 
 * Уникальные параметры `YMenu`.
 * 
 * @typedef YMenuTU
 * @prop {(YPoint|[string, function(YMenu):void])[]} points
 * 
*/

//#endregion

class SMenu extends YInteract {

    /**
     * ### config
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

        [
            [
                ['up'],
            ],
            [
                t => --t.index < 0 && (t.index = t.points.length - 1),
            ],
        ],
        [
            [
                ['down']
            ],
            [
                t => ++t.index >= t.points.length && (t.index = 0),
            ],
        ],
        [
            [
                ['return']
            ],
            [
                t => !t.modeBlock && (t.points[t.index].func(t)),
            ],
        ],

    ].map(comb => new YComb(...comb));

};
class DMenu extends SMenu {

    /**
     * ### index
     *
     * Индекс.
     *
     * ***
     * @type {number}
     * @protected
    */
    index = 0;
    /**
     * ### points
     *
     * Пункты.
     *
     * ***
     * @type {YPoint[]}
     * @public
    */
    points = [];

};
class IMenu extends DMenu {

    /**
     * ### modeBlock
     *
     * Режим блокировки.
     *
     * В заблокированном состоянии YMenu не позволяет выполнять выбранные пунткы до тех пор, пока меню не будет разблокированно.
     *
     * ***
     * @type {boolean}
     * @public
    */
    modeBlock;

    redraw = true;

};
class MMenu extends IMenu {



};
class FMenu extends MMenu {

    /**
     * ### YMenu.constructor
     * 
     * 
     * 
     * ***
     * @arg {YMenuT} t
    */
    constructor(t) {

        t = [...arguments];

        super(Object.assign(t = FMenu.#before(t), {}));

        FMenu.#deceit.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        /** @type {YMenuT} */
        let r = {};

        if (t?.length === 1 && [Object, YMenu].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

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
    /** @arg {YMenuT} t @this {YMenu} */
    static #deceit(t) {

        try {

            FMenu.#verify.apply(this, [t]);

        } catch (e) {

            throw e;

        } finally {



        };

    };
    /** @arg {YMenuT} t @this {YMenu} */
    static #verify(t) {

        const {



        } = t;

        FMenu.#handle.apply(this, [t]);

    };
    /** @arg {YMenuT} t @this {YMenu} */
    static #handle(t) {

        if (t.points instanceof Array) {

            t.points = t.points.map(p => p instanceof Array ? new YPoint(...p) : new YPoint(p));

        };

        FMenu.#create.apply(this, [t]);

    };
    /** @arg {YMenuT} t @this {YMenu} */
    static #create(t) {

        const {



        } = t;

        this.adopt(t);

        if (config) {

            this.adoptDefault(config);

        };

    };

};

/**
 * ### YMenu
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `ject\entity\terminal\element\interact\menu`
 * - Цепочка `BDVHC`
 * ***
 * 
 * 
 * 
 * ***
 * 
*/
export class YMenu extends FMenu {

    display() {

        const style = this.interface.style;
        const border = configString.symbols.table.thin;
        const indent = Math.max(...this.points.map(point => point.label.length));

        YConsole
        
            .setColor(style.colorF, style.colorB)
            .setCursorTo(...this.coords)
            .write(border[2] + border[1] + ' ');

        if (this.focus) {

            YConsole.setColor(style.colorFFocus, style.colorBFocus);
                
        };

        YConsole
            
            .writeLine(` ${this.title ? this.title : `YMenu`}`)
            .setColor(style.colorF, style.colorB)
            .setCursorTo(this.coords[0] + 1, this.coords[1])

        for (const index in this.points) {

            const point = this.points[index];
            const { label, prompt } = point;

            if (index == this.points.length - 1) {

                YConsole.write(`${border[4]} `);

            } else {

                YConsole.write(`${border[6]} `);

            };

            if (index == this.index) {

                YConsole
                
                    .setColor(style.colorFFocus, style.colorBFocus)
                    .write(`>${' '.repeat(config.indentFocus)}${label} `);

                if (prompt) {

                    YConsole

                        .setColor(style.colorFPlaceholder, style.colorBPlaceholder)
                        .write(`${' '.repeat(indent - label.length + config.indentPrompt)}${prompt}`);
    
                };

            } else {

                YConsole

                    .setColor(style.colorF, style.colorB)
                    .write(`  ${label} ${' '.repeat(indent - label.length + config.indentPrompt + prompt?.length)}`)

            };

            YConsole

                .setCursorTo(YConsole.y + 1, this.coords[1])
                .setColor(style.colorF, style.colorB);

        };

        return this;

    };

};

/**
 * @file class.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @copyright Yakhin Nikita Artemovich 2023
*/