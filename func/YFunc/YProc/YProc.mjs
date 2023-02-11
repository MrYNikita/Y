import { jectAdopt, jectGetPathDeepByValue, jectReplaceDeep } from "../../../ject/ject.mjs";
import { YFunc } from "../YFunc.mjs";

/**
 * @typedef {function(this:YFunc,{},{proc:YProc}):void} TProcInstruction
 * @typedef TBProc
 * @prop {any} _
 * @typedef {DProc&TBProc} TProc
*/

class SProc {



};
class DProc extends SProc {

    /**
     * Функция.
     * Указывает на `YFunc`, которому принадлежит процедура.
     * @type {YFunc}
    */
    func;
    /**
     * Метка.
     * @type {string}
    */
    label = '';
    /**
     * Индекс.
     * @type {number}
    */
    index = NaN;
    /**
     * Категория.
     * Используется для объединения процедур в группы по общему признаку.
     * @type {string}
    */
    category = '';
    /**
     * Позиции процедуры в последовательности.
     * @type {Array<Array<string>>}
    */
    positions = [];
    /**
     * Инструкция.
     * Хранит функцию отвечающую за логику данной процедуры.
     *
     * Первый аргумент процедуры хранит `объект-носитель аргументов`.
     * В нём рекомендуется хранить набор аргументов, который необходим для работы процедуры.
     * Изменение данного объекта приводят к изменениям общего объекта носителя аргументов.
     * Это означает, что следующие вызываемые процедуры будут работать с данным модифицированным объектом.
     *
     * Второй аргумент процедуры хранит `объект-носитель данных`.
     * Здесь хранятся полезные данные о состоянии процедуры на данный момент.
     * Данный объект не следует модифицировать и рекомендуется использовать его исключительно для получения доступа к процедуре.
     *
     * Если в качестве инструкции будет указана функция, то вы сможете получить доступ к контексту функции.
     * Контекст инструкции по умолчанию равен `YFunc`, которая вызвала данную процедуру.
     * С помощью этого контекста вы можете контролировать поведения функции.
     * Если же в качестве инструкции будет передана стрелочная функция, то контекст будет опущен.
     * В таком случае контролировать функцию будет невозможно.
     *
     * `Интсрукции не возвращают ничего`. Если есть необходимость перенести значения в следующие процедуры,
     * то необходимо модифицировать `объект-носитель аргументов`.
     * @type {TProcInstruction}
    */
    instruction = function (t, d) { };

};
class FProc extends DProc {

    /**
     *
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *  @arg {TProc} t
    */
    constructor(t = {}) {

        t = FProc.#before(arguments);

        FProc.#deceit(t);

        super(t);

        FProc.#create.apply(this, [t]);

    };

    /** @arg {TProc} t @this {[]} */
    static #before(t) {

        if (t?.length && t?.[0]?.constructor === Object) {

            return t[0];

        } else if (t?.length > 1) {

            switch (t.length) {



            };

        } else return {};

    };
    /** @arg {TProc} t @this {YProc} */
    static #deceit(t) {

        try {

            FProc.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @arg {TProc} t @this {YProc} */
    static #verify(t) {

        const {



        } = t;

        FProc.#handle(t);

    };
    /** @arg {TProc} t @this {YProc} */
    static #handle(t) {

        let {



        } = t;



        t = {

            ...t,

        };

    };
    /** @arg {TProc} t @this {YProc} */
    static #create(t) {

        const {



        } = t;

        this.adopt(t);
        jectReplaceDeep(this.func.card, this.label, this, true);

        this.index = this.func.procedures.length;
        this.positions = jectGetPathDeepByValue(this.func.card, this);

    };

};

/**
 * Класс `процедур`.
 *
 * Данный класс разграничивает функциональность Y функций (`YFunc`).
 * Каждый такой экземпляр состоит из метки (`label`) и инструкции (`instruction`).
 * - Тип `SDFY-2.0`
 * - Версия `0.0.0`
 * - Цепочка `BDVHC`
*/
export class YProc extends FProc {



};