import { YJect } from "../../ject/YJect/YJect.mjs";
import { jectAdopt } from "../../ject/ject.mjs";
import { YString } from "../../string/YString/YString.mjs";
import { YNeuron } from "./YLayer/YNeuron/YNeuron.mjs";
import { YLayer } from "./YLayer/YLayer.mjs";
import { numberGetRandomFrac, numberGetRandomFracMany, numberGetRandomReal } from "../number.mjs";
import { YData } from "./YData/YData.mjs";

/**
 * @typedef TBNeuralNetwork
 * @prop {any} _
 * @typedef {DNeuralNetwork&TBNeuralNetwork} TNeuralNetwork
*/

class SNeuralNetwork extends YJect {



};
class DNeuralNetwork extends SNeuralNetwork {

    /**
     * Эпохи.
     *
     * Эпоха определяет кол-во повторений для указанного тренировочного датасета.
     *
     * - По умолчанию `1`
     * @type {number}
    */
    epoch = 1;
    /**
     * Среднее значение ошибки.
     * @type {number}
    */
    error = 0;
    /**
     * Слои.
     * @type {Array<YLayer>}
    */
    layers = [];
    /**
     * Скорость обучения.
     * @type {number}
    */
    learnSpeed = 0.5;

};
class INeuralNetwork extends DNeuralNetwork {



};
class MNeuralNetwork extends INeuralNetwork {



};
class FNeuralNetwork extends MNeuralNetwork {

    /**
     * Контсруктор класса `YNeuralNetwork`
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *  @arg {TNeuralNetwork} t
    */
    constructor(t = {}) {

        t = FNeuralNetwork.#before(Object.values(arguments));

        FNeuralNetwork.#deceit(t);

        super(t);

        FNeuralNetwork.#create.apply(this, [t]);

    };

    /** @arg {Array<any>} t */
    static #before(t) {

        if (t?.length === 1 && t[0]?.constructor === Object) {

            return t[0];

        } else if (t?.length) {

            /** @type {TNeuralNetwork&DNeuralNetwork} */
            const r = {};

            switch (t.length) {

                case 3:
                case 2:
                case 1: r.layers = t.splice(0);

            };

            return r;

        } else return {};

    };
    /** @arg {TNeuralNetwork} t @this {YNeuralNetwork} */
    static #deceit(t) {

        try {

            FNeuralNetwork.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @arg {TNeuralNetwork} t @this {YNeuralNetwork} */
    static #verify(t) {

        const {



        } = t;

        FNeuralNetwork.#handle(t);

    };
    /** @arg {TNeuralNetwork} t @this {YNeuralNetwork} */
    static #handle(t) {



    };
    /** @arg {TNeuralNetwork} t @this {YNeuralNetwork} */
    static #create(t) {

        const {



        } = t;

        this.adopt(t);

        this.rept

            .append(_ => new YString()

                .changePostfix(';\n')
                .paste(

                    `Слоёв: ${this.layers.length}`,
                    `Эпоха: ${this.epoch}`,
                    `Скорость обучения: ${this.learnSpeed}`,
                    `Среднее значение ошибки: ${this.error}`,

                )
                .changePostfix()
                .pasteTemplate('l')
                .exec(y => y.paste(this.layers.map((l, i) => new YString()

                    .changePostfix('; ')
                    .paste(

                        `${i + 1}`,
                        `Функция: ${l.activation.name}`,
                        `Нейронов: ${l.neurons.length}`,

                    )
                    .get()

                ).join('\n')))
                .get()

                , 'f', 'Сведения')

    };

};

/**
 * Класс `YNetwork`
 *
 * Данный класс предназначен для создания нейронных сетей и их обучения.
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Цепочка `BDVHC`
 * - Пространство `number`
*/
export class YNeuralNetwork extends FNeuralNetwork {

    /**
     * Метод получения данных.
     * - Версия `0.0.0`
     * @arg {...number} numbers Данные.
    */
    feed(...numbers) {

        this.layers.forEach(l => numbers = l.feed(...numbers));

        return numbers;

    };
    /**
     * Метод обучения.
     *
     * Для обучения необходимо передать учебный набор данных, элементы которого будут `YData` (Данными).
     * - Версия `0.0.0`
     * @arg {...YData} data Данные.
    */
    learn(...data) {

        const r = this.feed(...data[0].data);

        this.error = r.map((r, i) => ((data[0].value[i] - r) ** 2) / 2).reduce((p, c) => p + c);

        const vr1 = r[0] - data[0].value[0];
        const vd1 = r[0] * (1 - r[0]);

        new YString()

            .changePostfix(';\n')
            .paste(

                `Изменение общей ошибки по отношению к выходу для первого нейрона: ${vr1}`,
                `Частная производная выхода: ${vd1}`,

            )
            .display();

        return this;

    };
    /**
     * Метод добавления слоя.
     * - Версия `0.0.0`
     * @arg {function} activation Функция активации слоя.
     * @arg {...[number, ...number]} neurons Нейроны.
    */
    appendLayer(activation, ...neurons) {

        this.layers.push(new YLayer(activation, ...neurons));

        return this;

    };

};