import { jectAdopt } from "../../../ject/ject.mjs";
import { YBasic } from "../../../ject/YBasic/YBasic.mjs";

/**
 * @typedef TBData
 * @prop {any} _
 * @typedef {DData&TBData} TData
*/

class SData extends YBasic {



};
class DData extends SData {

    /**
     * Данные.
     *
     * Передаются на входной слой `YNeuralNetwork` (нейронной сети).
     *
     * @type {Array<number>}
    */
    data = [];
    /**
     * Значение.
     *
     * В обучении нейронной сети используется для определения корректности данной оценки.
     * В противном случае, если не указано, то будет перезаписано с результатом полученным нейронной сетью.
     *
     * - По умолчанию `null`
     *
     * @type {number?}
    */
    value = null;

};
class IData extends DData {



};
class MData extends IData {



};
class FData extends MData {

    /**
     * Контсруктор класса `YData`
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *  @arg {TData} t
    */
    constructor(t = {}) {

        t = FData.#before(Object.values(arguments));

        FData.#deceit(t);

        super(t);

        FData.#create.apply(this, [t]);

    };

    /** @arg {Array<any>} t */
    static #before(t) {

        if (t?.length === 1 && t[0]?.constructor === Object) {

            return t[0];

        } else if (t?.length) {

            /** @type {TData&DData} */
            const r = {};

            switch (t.length) {

                default: r.data = t.splice(1);
                case 1: r.value = t[0];

            };

            return r;

        } else return {};

    };
    /** @arg {TData} t @this {YData} */
    static #deceit(t) {

        try {

            FData.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @arg {TData} t @this {YData} */
    static #verify(t) {

        const {



        } = t;

        FData.#handle(t);

    };
    /** @arg {TData} t @this {YData} */
    static #handle(t) {

        if (t.value || t.value === 0) {

            const i = t.value;

            t.value = new Array(t.data.length).fill(0);
            t.value[i] = 1;

        };

    };
    /** @arg {TData} t @this {YData} */
    static #create(t) {

        const {



        } = t;

        this.adopt(t);



    };

};

/**
 * Класс `YData`
 *
 * Данные для обучения `YNeuralNetwork` (нейронных сетей) или получения ответа по указнным данным.
 * Экземпляр хранит данные одного единственного набора, то есть описывает параметры одной сущности.
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Цепочка `BDVHC`
 * - пространство `number`
*/
export class YData extends FData {



};