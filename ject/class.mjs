//#region YI

import { jectAdopt, jectAdoptDefault, jectClone, jectEqual, jectGetProperty, jectGetPropertyByPath, jectSupplement } from './module.mjs';

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

/** ### YJectT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `ject`
 *
 * Основной параметр модуля `YJect`.
 *
 * @typedef {YJectTE&YJectTU} YJectT
 *
*/
/** ### YJectTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `ject`
 *
 * Параметр наследования `YJect`.
 *
 * @typedef {{[p in Exclude<keyof DJect,keyof SJect>|Exclude<keyof SJect,keyof DJect>]:(DJect[p]&SJect[p])}} YJectTE
 *
*/
/** ### YJectTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `ject`
 *
 * Уникальные параметры `YJect`.
 *
 * @typedef YJectTU
 * @prop {any} _
 *
*/

//#endregion

class SJect {



};
class DJect extends SJect {



};
class IJect extends DJect {



};
class MJect extends IJect {



};
class FJect extends MJect {

    /**
     * ### YJect.constructor
     *
     *
     *
     * ***
     * @arg {...YJectT} t
    */
    constructor(...t) {

        super(Object.assign(t = FJect.#before(t), {}));

        FJect.#deceit.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        /** @type {YJectT} */
        let r = {};

        if (t?.length === 1 && [Object, YJect].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

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
    /** @arg {YJectT} t @this {YJect} */
    static #deceit(t) {

        try {

            FJect.#verify.apply(this, [t]);

        } catch (e) {

            throw e;

        } finally {



        };

    };
    /** @arg {YJectT} t @this {YJect} */
    static #verify(t) {

        const {



        } = t;

        FJect.#handle.apply(this, [t]);

    };
    /** @arg {YJectT} t @this {YJect} */
    static #handle(t) {



        FJect.#create.apply(this, [t]);

    };
    /** @arg {YJectT} t @this {YJect} */
    static #create(t) {

        const {



        } = t;

    };

};

/**
 * ### YJect
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `ject`
 * - Цепочка `BDVHC`
 * ***
 *
 * Базовый класс `Y`.
 *
 * ***
 *
*/
export class YJect extends FJect {

    /**
     * ### clone
     * - Версия `0.0.0`
     * - Модуль `ject`
     * ***
     *
     * Метод {@link jectClone|клонирования} текущего экземпляра.
     *
     * ***
     * @arg {boolean} link `Ссылки`
     * @public
    */
    clone(link) {

        return jectClone(this, link);

    };
    /**
     * ### equal
     * - Версия `0.0.0`
     * - Модуль `ject`
     * ***
     *
     * Метод {@link jectEqual|сравнения} с указанным объектом.
     *
     * ***
     * @arg {{}} equal `Эквивалент`
     * @public
    */
    equal(equal) {

        return jectEqual(this, equal);

    };

    /**
     * ### adopt
     * - Версия `0.0.0`
     * - Модуль `ject`
     * ***
     *
     * Метод {@link jectAdopt|перенятия} свойств обладателя.
     *
     * ***
     * @arg {{}} owner `Обладатель`
     * @public
    */
    adopt(owner) {

        return jectAdopt(this, owner);

    };
    /**
     * ### adoptDefault
     * - Версия `0.0.0`
     * - Модуль `ject`
     * ***
     *
     * Метод {@link jectAdoptDefault|перенятия} дефолт свойств обладателя.
     *
     * ***
     * @arg {{}} owner `Обладатель`
     * @public
    */
    adoptDefault(owner) {

        return jectAdoptDefault(this, owner);

    };

    /**
     * ### supplement
     * - Версия `0.0.0`
     * - Модуль `ject`
     * ***
     *
     * Метод {@link jectSupplement|дополнения} свойствами указанного дополнителя.
     *
     * ***
     * @arg {{}} supplementer `Дополнитель`
     * @public
    */
    supplement(supplementer) {

        return jectSupplement(this, supplementer);

    };

    /**
     * ### getProperty
     * - Версия `0.0.0`
     * - Модуль `ject`
     * ***
     *
     * Метод {@link jectGetProperty|получения} указанного свойства.
     *
     * ***
     * @arg {string} property `Свойство`
     * @public
    */
    getProperty(property) {

        return jectGetProperty(this, property);

    };
    /**
     * ### getPropertyByPath
     * - Версия `0.0.0`
     * - Модуль `ject`
     * ***
     *
     * Метод {@link jectGetPropertyByPath|получения свойства по указанному пути}.
     *
     * ***
     * @arg {string} path `Путь`
     * @public
    */
    getPropertyByPath(path) {

        return jectGetPropertyByPath(this, path);

    };

};

/**
 * @file class.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @copyright Yakhin Nikita Artemovich 2023
*/