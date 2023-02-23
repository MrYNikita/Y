//#region YI

import { arrayBring } from '../../../array/module.mjs';
import { YError } from '../../../error/class.mjs';
import { YBasic } from '../../YBasic/YBasic.mjs';
import { YMany } from '../class.mjs';

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

/** ### YCursorT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `ject\many\cursor`
 *
 * Основной параметр модуля `YCursor`.
 *
 * @typedef {YCursorTE&YCursorTU} YCursorT
 *
*/
/** ### YCursorTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `ject\many\cursor`
 *
 * Параметр наследования `YCursor`.
 *
 * @typedef {{[p in Exclude<keyof DCursor,keyof SCursor>|Exclude<keyof SCursor,keyof DCursor>]:(DCursor[p]&SCursor[p])}} YCursorTE
 *
*/
/** ### YCursorTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `ject\many\cursor`
 *
 * Уникальные параметры `YCursor`.
 *
 * @typedef YCursorTU
 * @prop {any} _
 *
*/

//#endregion

class SCursor extends YBasic {



};
class DCursor extends SCursor {

    /**
     * ### size
     *
     * Размер.
     *
     * ***
     * @type {number}
     * @public
    */
    size;
    /**
     * ### coords
     *
     * Координаты.
     *
     * Представлены массивом, размерность которого совпадает с количеством измерений привязанного множества.
     *
     * ***
     * @type {number[]}
     * @public
    */
    coords = [];

};
/**
 * @template T
*/
class ICursor extends DCursor {

    /**
     * ### many
     *
     * Привязанное множество.
     *
     * ***
     * @type {YMany<T>?}
     * @protected
    */
    many;

};
/**
 * @extends {ICursor<T>}
 * @template T
*/
class MCursor extends ICursor {



};
/**
 * @extends {MCursor<T>}
 * @template T
*/
class FCursor extends MCursor {

    /**
     * ### YCursor.constructor
     *
     *
     *
     * ***
     *  @arg {...YCursorT} t
    */
    constructor(...t) {

        super(Object.assign(t = FCursor.#before(t), {}));

        FCursor.#deceit.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        /** @type {YCursorT} */
        let r = {};

        if (t?.length === 1 && [Object, YCursor].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

            r = t[0];

        } else if (t?.length) {

            if (t[0]?._ytp) {

                t = [...t[0]._ytp];

            };

            switch (t.length) {

                case 3:
                case 2: r.coords = t[1];
                case 1: r.many = t[0];

            };

            if (!Object.values(r).length) {

                r = { _ytp: t, };

            };

        };

        return r;

    };
    /** @arg {YCursorT} t @this {YCursor} */
    static #deceit(t) {

        try {

            FCursor.#verify.apply(this, [t]);

        } catch (e) {

            throw e;

        } finally {



        };

    };
    /** @arg {YCursorT} t @this {YCursor} */
    static #verify(t) {

        const {



        } = t;

        FCursor.#handle.apply(this, [t]);

    };
    /** @arg {YCursorT} t @this {YCursor} */
    static #handle(t) {

        if (!t.coords?.length) {

            t.coords = new Array(t.many.dimension).fill(0);

        } else if (t.coords.length !== t.many.dimension) {

            t.coords = arrayBring(t.coords, t.many.dimension, 0);

        };

        FCursor.#create.apply(this, [t]);

    };
    /** @arg {YCursorT} t @this {YCursor} */
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
 * ### YCursor
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `ject\many\cursor`
 * - Цепочка `BDVHC`
 * ***
 *
 *
 *
 * ***
 * @extends {FCursor<T>}
 * @template T
*/
export class YCursor extends FCursor {

    /**
     * ### move
     * - Версия `0.0.0`
     * - Модуль `ject\many\cursor`
     * ***
     *
     * Метод смещения курсора.
     *
     * ***
     * @arg {...number} bias `Смещения`
     * @public
    */
    move(...bias) {

        for (const i in bias) {

            this.coords[i] += bias[i];

        };

        return this;

    };
    /**
     * ### setCoords
     * - Версия `0.0.0`
     * - Модуль `ject\many\cursor`
     * ***
     *
     * Метод установки координат.
     *
     * ***
     * @arg {...number} coords `Координаты`
     * @public
    */
    setCoords(...coords) {

        coords = coords.slice(0, this.many.dimension);

        let dimension = this.many.values;

        if (coords.every(c => {

            if (!c && c !== 0) {

                error.coordNan.throw(c);

            } else if (c.constructor !== Number) {

                error.coordNotNumber.throw(c);

            } else if (c < 0) {

                error.coordLessZero.throw(c);

            } else if (c === Infinity) {

                error.coordNumberInfinity.throw(c);

            } else if (c >= dimension.length) {

                error.coordRangeOut.throw(c)

            };

            dimension = dimension[c];

            return true;

        })) {

            this.coords = arrayBring(coords, this.many.dimension, 0);

        };

        return this;

    };

};

/**
 * @file class.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @copyright Yakhin Nikita Artemovich 2023
*/