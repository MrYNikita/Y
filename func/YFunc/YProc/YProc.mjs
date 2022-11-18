import { jectFill } from "../../../ject/ject.mjs";
import { YFunc } from "../YFunc.mjs";

/**
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
     * Инструкция.
     * Хранит функцию отвечающую за логику данной процедуры.
     * @type {function}
     * @param {{}} t Объект носитель аргументов.
     * @param {{}} d Объект данных.
    */
    instruction = (t, d) => {  };

};
class FProc extends DProc {

    /**
     * 
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *  @param {TProc} t
    */
    constructor(t = {}) {

        t = FProc.#before(...arguments);

        FProc.#deceit(t);

        super(t);

        FProc.#create.apply(this, [t]);

    };

    /** @param {TProc} t @this {[]} */
    static #before(t) {
        
        if (t.constructor === Object) {

            return t;

        } else if (t?.length > 1) {

            return {



            };

        } else return {};

    };
    /** @param {TProc} t @this {YProc} */
    static #deceit(t) {

        try {

            FProc.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @param {TProc} t @this {YProc} */
    static #verify(t) {

        const {



        } = t;

        FProc.#handle(t);

    };
    /** @param {TProc} t @this {YProc} */
    static #handle(t) {

        let {



        } = t;



        t = {

            ...t,

        };

    };
    /** @param {TProc} t @this {YProc} */
    static #create(t) {

        const {



        } = t;

        jectFill(this, t);

        this.index = this.func.procedures.length;

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