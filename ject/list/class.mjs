//#region YI

import { YBasic } from "../YBasic/YBasic.mjs";
import { configYList } from "../../config.mjs";

//#endregion
//#region YT

/** ### YListT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `ject\list`
 *
 * Основной параметр модуля `YList`.
 *
 * @typedef {YListTE&YListTU} YListT
 *
*/
/** ### YListTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `ject\list`
 *
 * Параметр наследования `YList`.
 *
 * @typedef {{[p in Exclude<keyof DList,keyof SList>|Exclude<keyof SList,keyof DList>]:(DList[p]&SList[p])}} YListTE
 *
*/
/** ### YListTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `ject\list`
 *
 * Уникальные параметры `YList`.
 *
 * @typedef YListTU
 * @prop {any} _
 *
*/

//#endregion

class SList extends YBasic {

    /**
     * ### defaultLimit
     *
     * Дефолт лимит.
     *
     * ***
     * @type {number?}
     * @public
    */
    static defaultLimit;
    /**
     * ### defaultSizePage
     *
     * Дефолт размер страницы.
     *
     * ***
     * @type {number?}
     * @public
    */
    static defaultSizePage;
    /**
     * ### defaultModeWrite
     *
     * Дефолт режим записи.
     *
     * ***
     * @type {boolean}
     * @public
    */
    static defaultModeWrite;
    /**
     * ### defaultModeOffset
     *
     * Дефолт режим смещения.
     *
     * ***
     * @type {boolean}
     * @public
    */
    static defaultModeOffset;

    static {

        this.adoptDefault(configYList);

    };

};
class DList extends SList {

    /**
     * ### limit
     *
     * Лимит.
     *
     * Максимальное допустимое кол-во записей.
     *
     * ***
     * @type {number?}
     * @public
    */
    limit;
    /**
     * ### sizePage
     *
     * Размер страницы.
     *
     * Определяет кол-во записей, которые могут находиться в одной странице.
     *
     * ***
     * @type {number?}
     * @public
    */
    sizePage;
    /**
     * ### modeWrite
     *
     * Режим добавления записей.
     *
     * В активном состоянии позволяет заносить новые записи.
     *
     * ***
     * @type {boolean}
     * @public
    */
    modeWrite;
    /**
     * ### modeOffset
     *
     * Режим замещения.
     *
     * Если активен, то при добавлении новых записей, превышающих лимит, приводит к удалению самых старых записей в кол-во необходимом для размещении новых.
     *
     * ***
     * @type {boolean}
     * @public
    */
    modeOffset;


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
    constructor(...t) {

        t = FList.#before(t);

        super(Object.assign(t, {}));

        FList.#handle.apply(this, [t]);
        FList.#create.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        if (t?.length === 1 && [Object, YList].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

            return t[0];

        } else if (t?.length) {

            /** @type {YListT} */
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

        this.adopt(t);



    };

};

/**
 * ### YList
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `ject\list`
 * - Цепочка `BDVHC`
 * ***
 *
*/
export class YList extends FList {



};