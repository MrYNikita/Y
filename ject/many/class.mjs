//#region YI

import { arrayBring, arrayEqual } from '../../array/module.mjs';
import { YBasic } from '../YBasic/YBasic.mjs';
import { YCursor } from './cursor/class.mjs';

/** @type {import('./config.mjs')['default']?} */
let config = null;

await import('./config.mjs')

    .then(c => config = c.default)
    .catch(e => e);

//#endregion
//#region YT

/** ### YManyT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `ject\many`
 *
 * Основной параметр модуля `YMany`.
 *
 * @typedef {YManyTE&YManyTU} YManyT
 *
*/
/** ### YManyTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `ject\many`
 *
 * Параметр наследования `YMany`.
 *
 * @typedef {{[p in Exclude<keyof DMany,keyof SMany>|Exclude<keyof SMany,keyof DMany>]:(DMany[p]&SMany[p])}} YManyTE
 *
*/
/** ### YManyTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `ject\many`
 *
 * Уникальные параметры `YMany`.
 *
 * @typedef YManyTU
 * @prop {any} _
 *
*/

//#endregion

class SMany extends YBasic {



};
/**
 * @template T
*/
class DMany extends SMany {

    /**
     * ### values
     *
     * Значения.
     *
     * ***
     * @type {T}
     * @protected
    */
    values = [];
    /**
     * ### cursors
     *
     * Курсоры.
     *
     * ***
     * @type {YCursor[]}
     * @protected
    */
    cursors;
    /**
     * ### dimension
     *
     * Измерения.
     *
     * Определяет количество измерений.
     *
     * ***
     * @type {number}
     * @public
    */
    dimension;

};
/**
 * @extends {DMany<T>}
 * @template T
*/
class IMany extends DMany {

    /**
     * ### cursor
     *
     * Курсор.
     *
     * ***
     * @type {YCursor}
     * @public
    */
    cursor;

};
/**
 * @extends {IMany<T>}
 * @template T
*/
class MMany extends IMany {



};
/**
 * @extends {MMany<T>}
 * @template T
*/
class FMany extends MMany {

    /**
     * ### YMany.constructor
     *
     *
     *
     * ***
     *  @arg {...YManyT} t
    */
    constructor(...t) {

        super(Object.assign(t = FMany.#before(t), {}));

        FMany.#deceit.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        /** @type {YManyT} */
        let r = {};

        if (t?.length === 1 && [Object, YMany].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

            r = t[0];

        } else if (t?.length) {

            if (t[0]?._ytp) {

                t = [...t[0]._ytp];

            };

            switch (t.length) {

                case 3:
                case 2:
                case 1: r.values = t;

            };

            if (!Object.values(r).length) {

                r = { _ytp: t, };

            };

        };

        return r;

    };
    /** @arg {YManyT} t @this {YMany} */
    static #deceit(t) {

        try {

            FMany.#verify.apply(this, [t]);

        } catch (e) {

            throw e;

        } finally {



        };

    };
    /** @arg {YManyT} t @this {YMany} */
    static #verify(t) {

        const {



        } = t;

        FMany.#handle.apply(this, [t]);

    };
    /** @arg {YManyT} t @this {YMany} */
    static #handle(t) {



        FMany.#create.apply(this, [t]);

    };
    /** @arg {YManyT} t @this {YMany} */
    static #create(t) {

        const {



        } = t;

        this.adopt(t);

        if (config) {

            this.adoptByDefault(config);

        };

        this.appendCursors(new YCursor(this));

        this.cursor = this.cursors[0];

    };

};

/**
 * ### YMany
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `ject\many`
 * - Цепочка `BDVHC`
 * ***
 *
 * Класс множеств.
 *
 * ***
 * @extends {FMany<T>}
 * @template T
*/
export class YMany extends FMany {

    /**
     * ### get
     * - Версия `0.0.0`
     * - Модуль `ject\many`
     * ***
     *
     * Метод получения множества.
     *
     * ***
     * @public
    */
    get() {

        return this.values;

    };
    /**
     * ### getSelect
     * - Версия `0.0.0`
     * - Модуль `ject\many`
     * ***
     *
     * Метод получения элементов находящихся в областях курсоров.
     *
     * ***
     * @public
    */
    getSelect() {

        return this.cursors.map(c => {

            let result = this.values;

            for (const cord of c.coords) {

                result = result[cord];

            };

            return result;

        });

    };

    /**
     * ### clear
     * - Версия `0.0.0`
     * - Модуль `ject\many`
     * ***
     *
     * Метод очистки значений.
     *
     * ***
     * @public
    */
    clear() {

        this.values = [];

        return this;

    };

    /**
     * ### setCursorTo
     * - Версия `0.0.0`
     * - Модуль `ject\many`
     * ***
     *
     * Метод установки курсора на указанную позицию.
     *
     * ***
     * @arg {...number} coords `Коориднаты`
     * @public
    */
    setCursorTo(...coords) {

        this.removeCursors().cursor.setCoords(...coords);

        return this;

    };

    /**
     * ### moveCursors
     * - Версия `0.0.0`
     * - Модуль `ject\many`
     * ***
     *
     * Метод смещения курсоров.
     *
     * ***
     * @arg {...number} bias `Смещения`
     * @public
    */
    moveCursors(...bias) {



        return this;

    };
    /**
     * ### appendCursors
     * - Версия `0.1.0`
     * - Модуль `ject\many`
     * ***
     *
     * Метод добавления курсоров.
     *
     * Метод не допускает дублирования курсоров.
     *
     * ***
     * @arg {...import('./cursor/class.mjs').YCursorT} cursors `Курсоры`
     * @public
    */
    appendCursors(...cursors) {

        for (const cursor of cursors) {

            if (this.cursors.every(c => !arrayEqual(c.coords, cursor.coords))) {

                this.cursors.push(new YCursor({ many: this, ...cursor }));

            };

        };

        return this;

    };

    /**
     * ### removeCursors
     * - Версия `0.0.0`
     * - Модуль `ject\many`
     * ***
     *
     * Метод удаления всех курсоров кроме основного.
     *
     * ***
     * @public
    */
    removeCursors() {

        this.cursors = [this.cursors[0]];

        return this;

    };

};

/**
 * @file class.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @copyright Yakhin Nikita Artemovich 2023
*/