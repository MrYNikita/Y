//#region YI

import { YJect } from '../../ject/class.mjs';
import { YNumber } from '../class.mjs';

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

/** ### YPointT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `number\point`
 *
 * Основной параметр модуля `YPoint`.
 *
 * @typedef {YPointTE&YPointTU} YPointT
 *
*/
/** ### YPointTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `number\point`
 *
 * Параметр наследования `YPoint`.
 *
 * @typedef {{[p in Exclude<keyof DPoint,keyof SPoint>|Exclude<keyof SPoint,keyof DPoint>]:(DPoint[p]&SPoint[p])}} YPointTE
 *
*/
/** ### YPointTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `number\point`
 *
 * Уникальные параметры `YPoint`.
 *
 * @typedef YPointTU
 * @prop {any} _
 *
*/

//#endregion

class SPoint extends YJect {



};
class DPoint extends SPoint {

    /**
     * ### coords
     *
     * Координаты.
     *
     * ***
     * @type {[number, number?, number?]}
     * @public
    */
    coords;

};
class IPoint extends DPoint {



};
class MPoint extends IPoint {



};
class FPoint extends MPoint {

    /**
     * ### YPoint.constructor
     *
     *
     *
     * ***
     * @arg {...YPointT} t
    */
    constructor(...t) {

        super(Object.assign(t = FPoint.#before(t), {}));

        FPoint.#deceit.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        /** @type {YPointT} */
        let r = {};

        if (t?.length === 1 && [Object, YPoint].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

            r = t[0];

        } else if (t?.length) {

            if (t[0]?._ytp) {

                t = [...t[0]._ytp];

            };

            switch (t.length) {

                case 3:
                case 2:
                case 1: r.coords = t;

            };

            if (!Object.values(r).length) {

                r = { _ytp: t, };

            };

        };

        return r;

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

            this.adoptDefault(config);

        };

    };

};

/**
 * ### YPoint
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `number\point`
 * - Цепочка `BDVHC`
 * ***
 *
 *
 *
 * ***
 *
*/
export class YPoint extends FPoint {

    /**
     * ### set
     * - Версия `0.0.0`
     * - Модуль `number\point`
     * ***
     *
     * Метод установки новых координат.
     *
     * ***
     * @arg {...number} coords `Координаты`
     * @public
    */
    set(...coords) {

        coords.forEach((c, i) => {

            if ((c && c.constructor === Number) || c === 0) {

                this.coords[i] = c;

            };

        });

        return this;

    };
    /**
     * ### move
     * - Версия `0.0.0`
     * - Модуль `number\point`
     * ***
     *
     * Метод сдвига точки.
     *
     * ***
     * @arg {...number} bias `Смещение`
     * @public
    */
    move(...bias) {

        bias.forEach((b, i) => {

            if (b && b.constructor === Number) {

                this.coords[i] += b;

            };

        });

        return this;

    };
    /**
     * ### getDistance
     * - Версия `0.0.0`
     * - Модуль `number\point`
     * ***
     *
     * Метод получения расстояния до указанной точки.
     *
     * ***
     * @arg {YPoint} point
     * @public
    */
    getDistance(point) {

        return new YNumber(this.coords.map((coord, i) => (coord - (point.coords[i] ? point.coords[i] : 0)) ** 2).reduce((p, c) => p + c))

            .sqrt()
            .abs()
            .get();

    };

};

/**
 * @file class.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @copyright Yakhin Nikita Artemovich 2023
*/