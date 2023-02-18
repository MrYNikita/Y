//#region YI

import { YPoint } from './point/class.mjs';
import { YInteractor } from '../class.mjs';
import { YString } from '../../../../../../string/YString/YString.mjs';
import { colorGet, colorReset } from '../../../../../../string/ansi/color/color.mjs';
import { YBind } from '../../../../receiver/bind/class.mjs';
import { configTerminal } from '../../../../config.mjs';

/** @type {import('./config.mjs')['default']?} */
let config = null;

await import('./config.mjs')

    .then(c => config = c.default)
    .catch(e => e);

//#endregion
//#region YT

/** ### YMenuT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `ject\terminal\interface\element\interactor\menu`
 *
 * Основной параметр модуля `YMenu`.
 *
 * @typedef {YMenuTE&YMenuTU&import('../class.mjs').YInteractorT} YMenuT
 *
*/
/** ### YMenuTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `ject\terminal\interface\element\interactor\menu`
 *
 * Параметр наследования `YMenu`.
 *
 * @typedef {{[p in Exclude<keyof DMenu,keyof SMenu>|Exclude<keyof SMenu,keyof DMenu>]:(DMenu[p]&SMenu[p])}} YMenuTE
 *
*/
/** ### YMenuTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `ject\terminal\interface\element\interactor\menu`
 *
 * Уникальные параметры `YMenu`.
 *
 * @typedef YMenuTU
 * @prop {(YPoint|[string, function(YMenu):void])[]} points
 *
*/

//#endregion

class SMenu extends YInteractor {

    /** @type {YBind<YMenu>[]} */
    static binds = [

        {
            comb: ['\x1b[A'],
            funcs: [y => --y.index < 0 && (y.index = y.points.length - 1)]
        },
        {
            comb: ['\x1b[B'],
            funcs: [y => ++y.index >= y.points.length && (y.index = 0)]
        },
        {
            comb: ['\r'],
            funcs: [y => y.points[y.index].func(y)]
        }

    ];

};
class DMenu extends SMenu {



};
class IMenu extends DMenu {

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
     * @type {(YPoint)[]}
     * @public
    */
    points = [];

};
class MMenu extends IMenu {



};
class FMenu extends MMenu {

    /**
     * ### YMenu.constructor
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *
     *
     *
     * ***
     *  @arg {...YMenuT} t
    */
    constructor(...t) {

        t = FMenu.#before(t);

        super(Object.assign(t, {}));

        FMenu.#deceit.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        if (t?.length === 1 && [Object, YMenu].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

            return t[0];

        } else if (t?.length) {

            /** @type {YMenuT} */
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

            this.adoptByDefault(config);

        };

    };

};
/**
 * ### YMenu
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `ject\terminal\interface\element\interactor\menu`
 * - Цепочка `BDVHC`
 * ***
 *
*/
export class YMenu extends FMenu {

    getLayout() {

        return new YString()

            .exec(y => {

                const border = configTerminal.borders[0];

                y.paste(border[2] + border[1] + ' ' + (this.header ? this.header : 'YMenu') + '\n')

                for (const index in this.points.slice(0, -1)) {

                    const point = this.points[index];

                    let str = point.label + '\n';

                    if (index == this.index) {

                        str = colorGet('yellow') + str;

                    };

                    y.paste(border[6] + ' ' + str);

                };

                const point = this.points.at(-1);
                const index = this.points.length - 1;

                let str = point.label + '\n';

                if (index === this.index) {

                    str = colorGet('yellow') + str;

                };

                y.paste(border[4] + ' ' + str);

            })
            .get(true);

    };

};