import { YBasic } from "../../YBasic.mjs";
import { jectFill } from "../../../ject.mjs";

/**
 * @typedef TBReptBlock
 * @prop {any} _
 * @typedef {DReptBlock&TBReptBlock} TReptBlock
*/

class SReptBlock extends YBasic {



};
class DReptBlock extends SReptBlock {

    /**
     * Теги.
     *
     * Тегом можно обозначить принадлежность блока к определенной группе.
     * В последствии по тегам можно оказывать влияние на целые группы блоков.
     *
     * @type {string[]}
    */
    tags = [];
    /**
     * Текст.
     *
     * Хранит содержимое блока в виде текста или функции, возвращающей строку.
     * @type {Array<string|function():string>}
    */
    text = [];
    /**
     * Метка.
     *
     * Обозначает уникальное наименование блока.
     * Повторное использование метки может привести к перезаписыванию.
     * @type {string}
    */
    label;
    /**
     * Приоритет.
     *
     * Высокое значение приоритета указывает на необходимость отобразить данный блок перед прочими менее приоритетными блоками.
     * - По умолчанию `0`
     * @type {number}
    */
    priority = 0;

};
class IReptBlock extends DReptBlock {



};
class MReptBlock extends IReptBlock {



};
class FReptBlock extends MReptBlock {

    /**
     * Контсруктор класса `YReptBlock`
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *  @arg {TReptBlock} t
    */
    constructor(t = {}) {

        t = FReptBlock.#before(Object.values(arguments));

        FReptBlock.#deceit(t);

        super(t);

        FReptBlock.#create.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        if (t?.length === 1 && [Object, YReptBlock].includes(t[0]?.constructor)) {

            return t[0];

        } else if (t?.length) {

            /** @type {TReptBlock&DReptBlock} */
            const r = {};

            switch (t.length) {

                case 4: r.text = t[3];
                case 3: r.tags = t[2];
                case 2: r.priority = t[1];
                case 1: r.label = t[0];

            };

            return r;

        } else return {};

    };
    /** @arg {TReptBlock} t @this {YReptBlock} */
    static #deceit(t) {

        try {

            FReptBlock.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @arg {TReptBlock} t @this {YReptBlock} */
    static #verify(t) {

        const {



        } = t;

        FReptBlock.#handle(t);

    };
    /** @arg {TReptBlock} t @this {YReptBlock} */
    static #handle(t) {

        if (t.tags.constructor === String) t.tags = t.tags.split(',');

    };
    /** @arg {TReptBlock} t @this {YReptBlock} */
    static #create(t) {

        const {



        } = t;

        jectFill(this, t);



    };

};

/**
 * Класс `YReptBlock`
 *
 *
 * - Тип `SDIMFY`
 * - Версия `0.1.0`
 * - Модуль `ject.basic`
 * - Цепочка `BDVHC`
*/
export class YReptBlock extends FReptBlock {



};