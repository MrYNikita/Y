import { YString } from "../../../../../string/YString/YString.mjs";
import { jectFill } from "../../../../ject.mjs";
import { YElement } from "../YElement.mjs";

//#region YT

/** ### YListT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `YList`
 *
 * Основной параметр модуля `YList`.
 *
 * @typedef {YListTE&YListTU&import("../YElement.mjs").YElementT} YListT
 *
*/
/** ### YListTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `YList`
 *
 * Параметр наследования `YList`.
 *
 * @typedef {{[p in Exclude<keyof DList,keyof SList>|Exclude<keyof SList,keyof DList>]:(DList[p]&SList[p])}} YListTE
 *
*/
/** ### YListTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `YList`
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
     * ### vis
     *
     * Количество видимых пунктов.
     *
     * ***
     * @type {number}
     * @public
    */
    vis = 10;
    /**
     * ### values
     *
     * Значения списка.
     *
     * ***
     * @type {any[]|function():any[]}
     * @public
    */
    values = [];
    /**
     * ### displayPoint
     *
     * Функция, принимающая на вход пункт списка и возвращающая его строковую форму.
     *
     * ***
     * @type {function({}):string}
     * @public
    */
    displayPoint;

};
class IList extends DList {



};
class MList extends IList {



};
class FList extends MList {

    /**
     * ### YList.constructor
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *
     *
     *
     * ***
     *  @arg {YListT} t
    */
    constructor(t = {}) {

        t = FList.#before(Object.values(arguments));

        FList.#deceit(t);

        super(t);

        FList.#create.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        if (t?.length === 1 && [Object, YList].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

            return t[0];

        } else if (t?.length) {

            /** @type {YListT} */
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
    /** @arg {YListT} t @this {YList} */
    static #deceit(t) {

        try {

            FList.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @arg {YListT} t @this {YList} */
    static #verify(t) {

        const {



        } = t;

        FList.#handle(t);

    };
    /** @arg {YListT} t @this {YList} */
    static #handle(t) {



    };
    /** @arg {YListT} t @this {YList} */
    static #create(t) {

        const {



        } = t;

        jectFill(this, t);



    };

};

/**
 * ### YList
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `YList`
 * - Цепочка `BDVHC`
 * ***
 *
*/
export class YList extends FList {

    getLayout() {

        const a = [];

        if (this.displayPoint) {

            a.push(...(this.values instanceof Array ? this.values : this.values instanceof Function ? this.values() : []).map(v => this.displayPoint(v)).filter(s => s.constructor === String));

        };

        a.splice(this.vis);

        const nameLengthMax = Math.max(...a.map(s => s.split('-')[0].length - 1));

        a.forEach((s, si) => {

            const part = s.split('-');

            part[0] = part[0] + ' '.repeat(nameLengthMax - part[0].length + 1);

            a[si] = part.join('-');

        });

        return new YString()

            .changePostfix('\n')
            .paste(...a)
            .get(true);

    };

};