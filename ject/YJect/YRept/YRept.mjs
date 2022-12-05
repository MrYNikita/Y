import { arrayRemoveByElement, arrayRemoveByIndex } from "../../../array/array.mjs";
import { configRept } from "../../../config.mjs";
import { YString } from "../../../string/YString/YString.mjs";
import { jectFill } from "../../ject.mjs";
import { YBasic } from "../../YBasic/YBasic.mjs";
import { YReptBlock } from "./YReptBlock/YReptBlock.mjs";

/**
 * @typedef TBRept
 * @prop {any} _
 * @typedef {DRept&TBRept} TRept
*/

class SRept extends YBasic {



};
class DRept extends SRept {



};
class IRept extends DRept {

    /**
     * Блоки.
     *
     * Массив блоков отчета.
     * @protected
     * @type {Array<YReptBlock>}
    */
    blocks = [];

};
class MRept extends IRept {



};
class FRept extends MRept {

    /**
     * Контсруктор класса `YRept`
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *  @param {TRept} t
    */
    constructor(t = {}) {

        t = FRept.#before(Object.values(arguments));

        FRept.#deceit(t);

        super(t);

        FRept.#create.apply(this, [t]);

    };

    /** @param {Array<any>} t */
    static #before(t) {

        if (t?.length === 1 && t[0]?.constructor === Object) {

            return t[0];

        } else if (t?.length) {

            const r = {};



            return r;

        } else return {};

    };
    /** @param {TRept} t @this {YRept} */
    static #deceit(t) {

        try {

            FRept.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @param {TRept} t @this {YRept} */
    static #verify(t) {

        const {



        } = t;

        FRept.#handle(t);

    };
    /** @param {TRept} t @this {YRept} */
    static #handle(t) {

        let {



        } = t;



        t = {

            ...t,

        };

    };
    /** @param {TRept} t @this {YRept} */
    static #create(t) {

        const {



        } = t;

        jectFill(this, t);



    };

};

/**
 * Класс `YRept`
 *
 * `YRept` (отчет) представлен объектом, содержащим текстовую информацию о привязанном к нему объекте.
 * Привязанный к нему объект может осуществлять информирование о своём состоянии.
 * Для этого привязанный объект должен взаимодействовать с отчетом через его методы.
 *
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Цепочка `BDVHC`
 * - Пространство `ject`
*/
export class YRept extends FRept {

    /**
     * Метод добавления блока в отчет.
     *
     * Для добавления блока достаточно указать только текст, который он будет содержать.
     * При необходимости можно указать и оставшиеся параметры.
     * - Версия `0.0.0`
     * @param {string|function():string} text Текст.
     * Может принимать в качестве значения строку или функцию, её возвращающую.
     * @param {string} label Метка.
     * Если будет указано уже существующая ранее метка, то блок добавлен не будет.
     * @param {number|'l'|'f'} priority Приоритет.
     * Может принимать в качестве аргумента числа или строки `l` или `f`.
     * `l` - в полной форме `last` сделает данный блок последним среди всех указанных, указав ему минимальный приоритет.
     * `f` - в полной форме `first` сделает данный блок первым среди всех указанных, указав ему максимальный приоритет.
     * - По умолчанию `0`
     * @param {...string} tags Теги.
    */
    append(text, priority = 0, label, ...tags) {

        if (!text) return this;

        if (priority) {

            if (priority === 'l') priority = Number.MIN_SAFE_INTEGER;
            else if (priority === 'f') priority = Number.MAX_SAFE_INTEGER;

        };

        if (label && !this.blocks.find(b => b.label === label) || !label) {

            this.blocks.push(new YReptBlock(text, priority, label, tags));
            this.blocks = this.blocks.sort((p, c) => p.priority - c.priority);

        };

        return this;

    };
    /**
     * Метод изменения блока в отчете.
     * - Версия `0.0.0`
     * @param {string|function():string} text Текст.
     * Может принимать в качестве значения строку или функцию, её возвращающую.
     * Если не будет указан, то сохранит изначальное значение.
     * @param {string} label Метка.
     * Если не будет указана, то сохранит изначальное значение.
     * @param {number} priority Приоритет.
     * Может принимать в качестве аргумента числа или строки `l` или `f`.
     * `l` - в полной форме `last` сделает данный блок последним среди всех указанных, указав ему минимальный приоритет.
     * `f` - в полной форме `first` сделает данный блок первым среди всех указанных, указав ему максимальный приоритет.
     * @param {string|number} position Метка или индекс блока.
     * Если параметр указан, как число, то блок будет заменен по индексу.
     * Если параметр указан, как строка, то блок будет заменен по метке.
     *
     * Если индекс или метка не существуют, то блок не будет заменен.
    */
    change(position, text, priority, label, ...tags) {

        if (position || position === 0) {

            let block;

            if (position.constructor === String) block = this.blocks.find(b => b.label === label);
            else if (position.constructor === Number) block = this.blocks[position];

            if (block) {


                block.text = text ?? block.text;
                block.tags = tags ?? block.tags;
                block.label = label ?? block.label;

                if (priority || priority === 0) {

                    const priorityOld = block.priority;

                    block.priority = priority === 'l' ? Number.MAX_SAFE_INTEGER : priority === 'f' ? Number.MIN_SAFE_INTEGER : priority;

                    if (block.priority !== priorityOld) this.blocks.sort((p, c) => p.priority - c.priority);

                };


            };

        };

        return this;

    };
    /**
     * Метод для отображения отчета.
     * - Версия `0.0.0`
    */
    display() {

        new YString()

            .paste(configRept.start)
            .changePostfix(configRept.postfix)
            .paste(

                ...this.blocks.map(b => new YString()

                    .pasteTemplate('lh', ['h', b.label])
                    .paste(b.text instanceof Function ? b.text() : b.text)

                )

            )
            .changePostfix()
            .paste(configRept.end)
            .castToYReport()
            .display()

        return this;

    };
    /**
     * Метод для удаления блоков отчета по тегам.
     * - Версия `0.0.0`
     * @param {...string} tags Теги.
    */
    removeByTag(...tags) {

        arrayRemoveByElement(this.blocks, ...this.blocks.filter(b => tags.find(t => b.tags.includes(t))));

        return this;

    };
    /**
     * Метод для удаления блоков из отчета по индексу.
     * - Версия `0.0.0`
     * @param {...number} indexs Индекс.
    */
    removeByIndex(...indexs) {

        arrayRemoveByIndex(this.blocks, ...indexs);

        return this;

    };
    /**
     * Метод удлания блоков из отчета по меткам.
     * - Версия `0.0.0`
     * @param {...string} labels Метки.
    */
    removeByLables(...labels) {

        arrayRemoveByElement(this.blocks, ...this.blocks.find(b => labels.includes(b.label)));

        return this;

    };

};