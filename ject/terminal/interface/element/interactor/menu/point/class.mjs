
//#region YI

import { YBasic } from '../../../../../../YBasic/YBasic.mjs';
import { YMenu } from '../class.mjs';

/** @type {import('./config.mjs')['default']?} */
let config = null;

await import('./config.mjs')

    .then(c => config = c.default)
    .catch(e => e);

//#endregion
//#region YT

/** ### YPointT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `ject\terminal\interface\element\interactor\menu\point`
 *
 * Основной параметр модуля `YPoint`.
 *
 * @typedef {YPointTE&YPointTU} YPointT
 *
*/
/** ### YPointTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `ject\terminal\interface\element\interactor\menu\point`
 *
 * Параметр наследования `YPoint`.
 *
 * @typedef {{[p in Exclude<keyof DPoint,keyof SPoint>|Exclude<keyof SPoint,keyof DPoint>]:(DPoint[p]&SPoint[p])}} YPointTE
 *
*/
/** ### YPointTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `ject\terminal\interface\element\interactor\menu\point`
 *
 * Уникальные параметры `YPoint`.
 *
 * @typedef YPointTU
 * @prop {any} _
 *
*/

//#endregion

class SPoint extends YBasic {



};
class DPoint extends SPoint {

    /**
     * ### func
     *
     * Функция исполнения.
     *
     * ***
     * @type {function(YMenu):void}
     * @public
    */
    func;
    /**
     * ### label
     *
     * Метка.
     *
     * ***
     * @type {string}
     * @public
    */
    label;

};
class IPoint extends DPoint {



};
class MPoint extends IPoint {



};
class FPoint extends MPoint {

    /**
     * ### YPoint.constructor
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *
     *
     *
     * ***
     *  @arg {...YPointT} t
    */
    constructor(...t) {

        t = FPoint.#before(t);

        super(Object.assign(t, {}));

        FPoint.#deceit.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        if (t?.length === 1 && [Object, YPoint].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

            return t[0];

        } else if (t?.length) {

            /** @type {YPointT} */
            const r = {};

            if (t[0]?._ytp) {

                t = [...t[0]._ytp];

            };

            switch (t.length) {

                case 3:
                case 2: r.func = t[1];
                case 1: r.label = t[0];

            };

            return Object.values(r).length ? r : { _ytp: t };

        } else return {};

    };
    /** @arg {YPointT} t @this {YPoint} */
    static #deceit(t) {

        try {

            FPoint.#verify.apply(this, [t]);

        } catch (e) {

            throw e;

        } finally {



        };

    };
    /** @arg {YPointT} t @this {YPoint} */
    static #verify(t) {

        const {



        } = t;

        FPoint.#handle.apply(this, [t]);

    };
    /** @arg {YPointT} t @this {YPoint} */
    static #handle(t) {



        FPoint.#create.apply(this, [t]);

    };
    /** @arg {YPointT} t @this {YPoint} */
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
 * ### YPoint
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `ject\terminal\interface\element\interactor\menu\point`
 * - Цепочка `BDVHC`
 * ***
 *
 *
 *
 * ***
 *
*/
export class YPoint extends FPoint {



};