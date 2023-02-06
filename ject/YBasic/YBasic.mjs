import { jectClone, jectEqual, jectFill, jectGetProperty, jectGetPropertyByPath, jectGetPropertyByPathMany } from "../ject.mjs";

//#region YT

/** ### YBasicT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `YBasic`
 *
 * Основной параметр модуля `YBasic`.
 *
 * @typedef {YBasicTE&YBasicTU} YBasicT
 *
*/
/** ### YBasicTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `YBasic`
 *
 * Параметр наследования `YBasic`.
 *
 * @typedef {{[p in Exclude<keyof DBasic,keyof SBasic>|Exclude<keyof SBasic,keyof DBasic>]:(DBasic[p]&SBasic[p])}} YBasicTE
 *
*/
/** ### YBasicTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `YBasic`
 *
 * Уникальные параметры `YBasic`.
 *
 * @typedef YBasicTU
 * @prop {any} _
 *
*/

//#endregion

class SBasic {



};
class DBasic extends SBasic {



};
class IBasic extends DBasic {



};
class MBasic extends IBasic {



};
class FBasic extends MBasic {

    /**
     * ### YBasic.constructor
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *
     *
     *
     * ***
     *  @arg {YBasicT} t
    */
    constructor(t = {}) {

        t = FBasic.#before(Object.values(arguments));

        FBasic.#deceit(t);

        super(t);

        FBasic.#create.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        if (t?.length === 1 && [Object, YBasic].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

            return t[0];

        } else if (t?.length) {

            /** @type {YBasicT} */
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
    /** @arg {YBasicT} t @this {YBasic} */
    static #deceit(t) {

        try {

            FBasic.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @arg {YBasicT} t @this {YBasic} */
    static #verify(t) {

        const {



        } = t;

        FBasic.#handle(t);

    };
    /** @arg {YBasicT} t @this {YBasic} */
    static #handle(t) {



    };
    /** @arg {YBasicT} t @this {YBasic} */
    static #create(t) {

        const {



        } = t;

        jectFill(this, t);



    };

};

/**
 * ### YBasic
 * - Тип `SDIMFY`
 * - Версия `0.1.0`
 * - Модуль `YBasic`
 * - Цепочка `BDVHC`
 * ***
 *
*/
export class YBasic extends FBasic {

    /**
     * ### copy
     * - Версия `0.1.0`
     * - Модуль `YBasic`
     * ***
     *
     * Метод {@link jectClone|глубокого копирования объекта}.
     *
     * ***
     * @arg {boolean} link `Режим сохранения ссылочной структуры`
     *
     * - По умолчанию `true`
     * @public
    */
    clone(link = true) {

        return jectClone(this, link);

    };

    /**
     * ### equal
     * - Версия `0.0.0`
     * - Модуль `YBasic`
     * ***
     *
     * Метод сравнения с указанным объектом.
     *
     * ***
     * @arg {import("../ject.mjs").jectT} equal `Эквивалент`
     * @public
    */
    equal(equal) {

        return jectEqual(this, equal);

    };

    /**
     * ### getProperty
     * - Версия `0.0.0`
     * - Модуль `YBasic`
     * ***
     *
     * Метод получения свойства через глубокий поиск.
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
     * - Модуль `YBasic`
     * ***
     *
     * Метод для получения вложенных свойств через глубокий поиск.
     *
     * ***
     * @arg {string} path `Путь`
     *
     * Путь до свойства.
     *
     * Задать путь можно с помощью переходов. Каждый переход может быть представлен строкой или символьной инструкцией.
     * Строки воспринимаются как названия свойств, в которых следует продолжать поиск.
     *
     * Список инструкций:
     * - `*` - Все свойства. Собирает все найденные структуры.
     * - `f` - Первое свойство. Продолжает поиск в первой обнаруженной структуре пропуская прочие.
     * - `l` - Последнее свойство. Продолжает поиск в последней обнаруженной структуре пропуская прочие.
     * - `string` - Точное название свойства. Ищет указанное название среди перечня свойств.
     *
     * Для разделения инструкций необходимо использовать ` ` (пробел).
     * @public
    */
    getPropertyByPath(path) {

        return jectGetPropertyByPath(this, path);

    };
    /**
     * ### getPropertyByPathMany
     * - Версия `0.0.0`
     * - Модуль `YBasic`
     * ***
     *
     * Метод получения массива свойств объекта по указанному пути через {@link jectGetPropertyByPathMany|глубокий поиск}.
     *
     * ***
     * @arg {string} path `Путь`
     *
     * Путь до свойства.
     *
     * Задать путь можно с помощью переходов. Каждый переход может быть представлен строкой или символьной инструкцией.
     * Строки воспринимаются как названия свойств, в которых следует продолжать поиск.
     *
     * Список инструкций:
     * - `*` - Все свойства. Собирает все найденные структуры.
     * - `f` - Первое свойство. Продолжает поиск в первой обнаруженной структуре пропуская прочие.
     * - `l` - Последнее свойство. Продолжает поиск в последней обнаруженной структуре пропуская прочие.
     * - `string` - Точное название свойства. Ищет указанное название среди перечня свойств.
     *
     * Для разделения инструкций необходимо использовать ` ` (пробел).
     * @public
    */
    getPropertyByPathMany(path) {

        return jectGetPropertyByPathMany(this, path);

    };

};