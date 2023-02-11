import { jectAdopt } from "../../../../ject/ject.mjs";
import { YJect } from "../../../../ject/YJect/YJect.mjs";
import { YString } from "../../../YString/YString.mjs";

//#region YT

/** ### YWordT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `YWord`
 *
 * Основной параметр модуля `YWord`.
 *
 * @typedef {YWordTE&YWordTU} YWordT
 *
*/
/** ### YWordTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `YWord`
 *
 * Параметр наследования `YWord`.
 *
 * @typedef {{[p in Exclude<keyof DWord,keyof SWord>|Exclude<keyof SWord,keyof DWord>]:(DWord[p]&SWord[p])}} YWordTE
 *
*/
/** ### YWordTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `YWord`
 *
 * Уникальные параметры `YWord`.
 *
 * @typedef YWordTU
 * @prop {any} _
 *
*/

//#endregion

class SWord extends YJect {

    static reportBlocks = [

        ['Данные', 'f', '', [

            /** @arg {YWord} y */
            y => new YString()

                .changePostfix(';\n')
                .paste(

                    `Пол: ${y.sex ? 'M' : y.sex === false ? 'W' : 'T'}`,
                    `Вид: ${y.type}`,
                    `Значение: ${y.value}`,
                    `Синонимы: ${y.synonyms.length}`,
                    `Антонимы: ${y.antonyms.length}`,
                    `Приоритет: ${y.priority}`,

                )
                .get()

        ]],
        ['Категории', 'f', '', [

            /** @arg {YWord} y */
            y => new YString()

                .changePostfix(';\n')
                .paste(

                    `Значения: ${y.categories.length ? y.categories : 'N'}`,
                    `Количество: ${y.categories.length}`,

                )
                .get()

        ]],

    ];

};
class DWord extends SWord {

    /**
     * ### sex
     *
     * Половая принадлежность.
     *
     * ***
     * @type {boolean?}
     * @public
    */
    sex;
    /**
     * ### type
     *
     *
     *
     * ***
     * @type {import("../word.mjs").wordTType}
     * @public
    */
    type;
    /**
     * ### value
     *
     * Значение.
     *
     * ***
     * @type {string}
     * @public
    */
    value;
    /**
     * ### priority
     *
     * Приоритет.
     *
     * Определяет приоритет использования данного слова при генерации.
     *
     * ***
     * @type {number?}
     * @public
    */
    priority;
    /**
     * ### antonyms
     *
     * Массив антонимов.
     *
     * ***
     * @type {YWord[]}
     * @public
    */
    antonyms = [];
    /**
     * ### synonyms
     *
     * Массив синонимов.
     *
     * ***
     * @type {YWord[]}
     * @public
    */
    synonyms = [];
    /**
     * ### categories
     *
     * Категории.
     *
     * Определяют принадлежность слова к определенным группам.
     *
     * ***
     * @type {string[]}
     * @public
    */
    categories = [];

};
class IWord extends DWord {



};
class MWord extends IWord {



};
class FWord extends MWord {

    /**
     * ### YWord.constructor
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *
     *
     *
     * ***
     *  @arg {YWordT} t
    */
    constructor(t = {}) {

        t = FWord.#before(Object.values(arguments));

        FWord.#deceit(t);

        super(t);

        FWord.#create.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        if (t?.length === 1 && [Object, YWord].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

            return t[0];

        } else if (t?.length) {

            /** @type {YWordT} */
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
    /** @arg {YWordT} t @this {YWord} */
    static #deceit(t) {

        try {

            FWord.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @arg {YWordT} t @this {YWord} */
    static #verify(t) {

        const {



        } = t;

        FWord.#handle(t);

    };
    /** @arg {YWordT} t @this {YWord} */
    static #handle(t) {



    };
    /** @arg {YWordT} t @this {YWord} */
    static #create(t) {

        const {



        } = t;

        jectAdopt(this, t);



    };

};

/**
 * ### YWord
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `YWord`
 * - Цепочка `BDVHC`
 * ***
 * Класс слов.
 *
 * Любое слово представлено строкой.
 *
 * Каждое слово имеет массив синонимов. Данные синонимы.
*/
export class YWord extends FWord {



};