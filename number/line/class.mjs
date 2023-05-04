//#region YI

import { YJect } from '../../ject/class.mjs';
import { YPoint } from '../point/class.mjs';

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

/** ### YLineT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `number\line`
 *
 * Основной параметр модуля `YLine`.
 *
 * @typedef {YLineTE&YLineTU} YLineT
 *
*/
/** ### YLineTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `number\line`
 *
 * Параметр наследования `YLine`.
 *
 * @typedef {{[p in Exclude<keyof DLine,keyof SLine>|Exclude<keyof SLine,keyof DLine>]:(DLine[p]&SLine[p])}} YLineTE
 *
*/
/** ### YLineTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `number\line`
 *
 * Уникальные параметры `YLine`.
 *
 * @typedef YLineTU
 * @prop {any} _
 *
*/

//#endregion

class SLine extends YJect {



};
class DLine extends SLine {

    /**
     * ### points
     *
     * Точки.
     *
     * ***
     * @type {[YPoint, YPoint]}
     * @public
    */
    points;

};
class ILine extends DLine {



};
class MLine extends ILine {



};
class FLine extends MLine {

    /**
     * ### YLine.constructor
     *
     *
     *
     * ***
     * @arg {...YLineT} t
    */
    constructor(...t) {

        super(Object.assign(t = FLine.#before(t), {}));

        FLine.#deceit.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        /** @type {YLineT} */
        let r = {};

        if (t?.length === 1 && [Object, YLine].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

            r = t[0];

        } else if (t?.length) {

            if (t[0]?._ytp) {

                t = [...t[0]._ytp];

            };

            switch (t.length) {

                case 3:
                case 2:
                case 1: r.points = t;

            };

            if (!Object.values(r).length) {

                r = { _ytp: t, };

            };

        };

        return r;

    };
    /** @arg {YLineT} t @this {YLine} */
    static #deceit(t) {

        try {

            FLine.#verify.apply(this, [t]);

        } catch (e) {

            throw e;

        } finally {



        };

    };
    /** @arg {YLineT} t @this {YLine} */
    static #verify(t) {

        const {



        } = t;

        FLine.#handle.apply(this, [t]);

    };
    /** @arg {YLineT} t @this {YLine} */
    static #handle(t) {



        FLine.#create.apply(this, [t]);

    };
    /** @arg {YLineT} t @this {YLine} */
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
 * ### YLine
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `number\line`
 * - Цепочка `BDVHC`
 * ***
 *
 *
 *
 * ***
 *
*/
export class YLine extends FLine {

    /**
     * ### expand
     * - Версия `0.0.0`
     * - Модуль `number\line`
     * ***
     *
     * Метод реверсии точек.
     *
     * Для линии, как для вектора, изменяет направление.
     *
     * ***
     * @public
    */
    expand() {

        this.points.reverse();

        return this;

    };

    /**
     * ### getMul
     * - Версия `0.0.0`
     * - Модуль `number\line`
     * ***
     *
     * Метод получения векторного произведения.
     *
     * ***
     * @arg {YLine} line `Линия`
     * @public
    */
    getMul(line) {

        const c1 = this.getCoords();
        const c2 = line.getCoords();

        return c1[0] * c2[1] - c1[1] * c2[0];

    };
    /**
     * ### getLength
     * - Версия `0.0.0`
     * - Модуль `number\line`
     * ***
     *
     *
     *
     * ***
     *
     * @public
    */
    getLength() {

        return this.points[0].getDistance(this.points[1]);

    };
    /**
     * ### getCoords
     * - Версия `0.0.0`
     * - Модуль `number\line`
     * ***
     *
     * Метод получения коориднат линии.
     *
     * В данном случае линия расматривается как вектор с началом в первой указанной точке и концом в послдней.
     *
     * ***
     * @public
    */
    getCoords() {

        return this.points[0].coords.map((c, i) => this.points[1].coords[i] - c);

    };

    /**
     * ### checkBelong
     * - Версия `0.0.0`
     * - Модуль `number\line`
     * ***
     *
     * Метод проверки принадлежности точки к линии.
     *
     * ***
     * @arg {YPoint} point `Точка`
     * @public
    */
    checkBelong(point) {

        if (point instanceof YPoint) {

            if (

                new YLine(this.points[0], point).getLength() + new YLine(this.points[1], point).getLength() === this.getLength() ||
                point.coords.every((c, i) => c === this.points[0].coords[i]) ||
                point.coords.every((c, i) => c === this.points[1].coords[i])

            ) {

                return true;

            } else {

                return false;

            };

        };

        return undefined;

    };
    /**
     * ### checkCollinearity
     * - Версия `0.0.0`
     * - Модуль `number\line`
     * ***
     *
     * Метод проверки коллинеарности.
     *
     * ***
     * @arg {YLine} line `Линия`
     * @public
    */
    checkCollinearity(line) {

        if (this.getMul(line) === 0) {

            return true;

        } else {

            return false;

        };

    };

};