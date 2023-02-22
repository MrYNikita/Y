//#region YI

import { YString } from '../../../../../string/YString/YString.mjs';
import { configTerminal } from '../../../config.mjs';
import { YElement } from '../class.mjs';

/** @type {import('./config.mjs')['default']?} */
let config = null;

await import('./config.mjs')

    .then(c => config = c.default)
    .catch(e => e);

//#endregion
//#region YT

/** ### YListT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `ject\terminal\interface\element\list`
 *
 * Основной параметр модуля `YList`.
 *
 * @typedef {YListTE&YListTU&import('../class.mjs').YElementT} YListT
 *
*/
/** ### YListTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `ject\terminal\interface\element\list`
 *
 * Параметр наследования `YList`.
 *
 * @typedef {{[p in Exclude<keyof DList,keyof SList>|Exclude<keyof SList,keyof DList>]:(DList[p]&SList[p])}} YListTE
 *
*/
/** ### YListTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `ject\terminal\interface\element\list`
 *
 * Уникальные параметры `YList`.
 *
 * @typedef YListTU
 * @prop {any} _
 *
*/

//#endregion

class SList extends YElement {



};
class DList extends SList {

    /**
     * ### points
     *
     * Пункты.
     *
     * ***
     * @type {(string|function():string)[]|function():string[]}
     * @public
    */
    points = [];

};
class IList extends DList {



};
class MList extends IList {



};
class FList extends MList {

    /**
     * ### YList.constructor
     *
     *
     *
     * ***
     *  @arg {...YListT} t
    */
    constructor(...t) {

        super(Object.assign(t = FList.#before(t), {}));

        FList.#deceit.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        /** @type {} */
        let r = {};

        if (t?.length === 1 && [Object, YList].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

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
    /** @arg {YListT} t @this {YList} */
    static #deceit(t) {

        try {

            FList.#verify.apply(this, [t]);

        } catch (e) {

            throw e;

        } finally {



        };

    };
    /** @arg {YListT} t @this {YList} */
    static #verify(t) {

        const {



        } = t;

        FList.#handle.apply(this, [t]);

    };
    /** @arg {YListT} t @this {YList} */
    static #handle(t) {



        FList.#create.apply(this, [t]);

    };
    /** @arg {YListT} t @this {YList} */
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
 * ### YList
 * - Тип `SDIMFY`
 * - Версия `0.1.0`
 * - Модуль `ject\terminal\interface\element\list`
 * - Цепочка `BDVHC`
 * ***
 *
 *
 *
 * ***
 *
*/
export class YList extends FList {

    getLayout() {

        const border = configTerminal.borders[0];

        return new YString()

            .exec(y => {

                const points = this.points instanceof Function ? this.points() : this.points;

                y.paste(border[2] + border[1] + (this.header ? ' ' + this.header : config.defaultHeader) + '\n');

                for (const point of points.slice(0, -1)) {

                    y.paste(border[6] + ' ' + (point instanceof Function ? point() : point) + '\n');

                };

                const point = points.at(-1);

                y.paste(border[4] + ' ' + (point instanceof Function ? point() : point));

            })
            .get(true);

    };

};