import { jectAdopt } from "../../../../../ject/ject.mjs";
import { YElement } from "../YElement.mjs";

/**
 * @typedef TBStructure
 * @prop {any} _
 * @typedef {DStructure&TBStructure} TStructure
*/

class SStructure extends YElement {



};
class DStructure extends SStructure {



};
class IStructure extends DStructure {



};
class MStructure extends IStructure {



};
class FStructure extends MStructure {

    /**
     * Контсруктор класса `YStructure`
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *  @arg {TStructure} t
    */
    constructor(t = {}) {

        t = FStructure.#before(Object.values(arguments));

        FStructure.#deceit(t);

        super(t);

        FStructure.#create.apply(this, [t]);

    };

    /** @arg {Array<any>} t */
    static #before(t) {

        if (t?.length === 1 && t[0]?.constructor === Object) {

            return t[0];

        } else if (t?.length) {

            /** @type {TStructure} */
            const r = {};

            switch (t.length) {

                case 3:
                case 2:
                case 1:

            };

            return r;

        } else return {};

    };
    /** @arg {TStructure} t @this {YStructure} */
    static #deceit(t) {

        try {

            FStructure.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @arg {TStructure} t @this {YStructure} */
    static #verify(t) {

        const {



        } = t;

        FStructure.#handle(t);

    };
    /** @arg {TStructure} t @this {YStructure} */
    static #handle(t) {



    };
    /** @arg {TStructure} t @this {YStructure} */
    static #create(t) {

        const {



        } = t;

        jectAdopt(this, t);



    };

};

/**
 * Класс `YStructure`
 *
 * Данный класс предназначен для описания структур `html` элементов.
 * Структуры позволяют взаимодействовать с группой элементов как единым объектом или работать с элементами, входящими в указанную структуру.
 *
 * В основе любой структуры лежит элемент, от которого начинается построение всей структуры.
 * - Тип `SDIMFY-1.1`
 * - Версия `0.0.0`
 * - Цепочка `BDVHC`
 * - Пространство `web.html.element`
*/
export class YStructure extends FStructure {



};