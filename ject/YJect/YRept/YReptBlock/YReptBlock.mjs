import { jectFill } from "../../../ject.mjs";

/**
 * @typedef TBReptBlock
 * @prop {any} _
 * @typedef {DReptBlock&TBReptBlock} TReptBlock
*/

class SReptBlock {



};
class DReptBlock extends SReptBlock {

    /**
     * Теги.
     *
     * Тегом можно обозначить принадлежность блока к определенной группе.
     * В последствии по тегам можно оказывать влияние на целые группы блоков.
     *
     * - По умолчанию `[]`
     *
     * @type {Array<string>}
    */
    tags = [];
    /**
     * Текст.
     *
     * Хранит содержимое блока в виде текста или функции, возвращающей строку.
     * @type {string|function():string}
    */
    text;
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
class FReptBlock extends IReptBlock {

    /**
     * Контсруктор класса `YReptBlock`
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *  @param {TReptBlock} t
    */
    constructor(t = {}) {

        t = FReptBlock.#before(Object.values(arguments));

        FReptBlock.#deceit(t);

        super(t);

        FReptBlock.#create.apply(this, [t]);

    };

    /** @param {Array<any>} t */
    static #before(t) {

        if (t?.length === 1 && t[0]?.constructor === Object) {

            return t[0];

        } else if (t?.length) {

            /** @type {TReptBlock} */
            const r = {};

            switch (t.length) {

                case 4: r.tags = t[3];
                case 3: r.label = t[2];
                case 2: r.priority = t[1];
                case 1: r.text = t[0];

            };

            return r;

        } else return {};

    };
    /** @param {TReptBlock} t @this {YReptBlock} */
    static #deceit(t) {

        try {

            FReptBlock.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @param {TReptBlock} t @this {YReptBlock} */
    static #verify(t) {

        const {



        } = t;

        FReptBlock.#handle(t);

    };
    /** @param {TReptBlock} t @this {YReptBlock} */
    static #handle(t) {

        let {



        } = t;



        t = {

            ...t,

        };

    };
    /** @param {TReptBlock} t @this {YReptBlock} */
    static #create(t) {

        const {



        } = t;

        jectFill(this, t);



    };

};
class MReptBlock extends FReptBlock {



};

/**
 *
 * - Тип `SDIFMY-1.0`
 * - Версия `0.0.0`
 * - Цепочка `BDVHC`
*/
export class YReptBlock extends MReptBlock {



};