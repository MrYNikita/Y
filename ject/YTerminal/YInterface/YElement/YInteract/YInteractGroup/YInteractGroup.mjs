import { jectAdopt } from "../../../../../ject.mjs";
import { YInteract } from "../YInteract.mjs";

/**
 * @typedef TBInteractGroup
 * @prop {any} _
 * @typedef {{[p in Exclude<keyof DInteractGroup,keyof SInteractGroup>|Exclude<keyof SInteractGroup,keyof DInteractGroup>]:(DInteractGroup[p]&SInteractGroup[p])}} TDInteractGroup
 * @typedef {TDInteractGroup&TBInteractGroup} TInteractGroup
*/

class SInteractGroup extends YInteract {



};
class DInteractGroup extends SInteractGroup {

    /**
     * Поля формы.
     *
     * Каждое поле обозначается меткой и представлено интерактором.
     * По результату заполнения будет создан итоговый объект формы, который будет содержать ответы,
     * с ключами в виде меток.
     *
     * В случае, если метка и название поля должны быть разными, то достаточно указать нужное название третьим аргументом.
     * @type {YInteract[]}
    */
    interactors = [];

};
class IInteractGroup extends DInteractGroup {

    /**
     * Индекс.
     *
     * Определяет активное поле формы.
     * @type {number}
    */
    index = 0;

};
class MInteractGroup extends IInteractGroup {



};
class FInteractGroup extends MInteractGroup {

    /**
     * Контсруктор класса `YInteractGroup`
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *  @arg {TInteractGroup} t
    */
    constructor(t = {}) {

        t = FInteractGroup.#before(Object.values(arguments));

        FInteractGroup.#deceit(t);

        super(t);

        FInteractGroup.#create.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        if (t?.length === 1 && [Object, YInteractGroup].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

            return t[0];

        } else if (t?.length) {

            /** @type {TInteractGroup&DInteractGroup} */
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
    /** @arg {TInteractGroup} t @this {YInteractGroup} */
    static #deceit(t) {

        try {

            FInteractGroup.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @arg {TInteractGroup} t @this {YInteractGroup} */
    static #verify(t) {

        const {



        } = t;

        FInteractGroup.#handle(t);

    };
    /** @arg {TInteractGroup} t @this {YInteractGroup} */
    static #handle(t) {



    };
    /** @arg {TInteractGroup} t @this {YInteractGroup} */
    static #create(t) {

        const {



        } = t;

        jectAdopt(this, t);



    };

};

/**
 * Класс `YInteractGroup`
 *
 *
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль ``
 * - Цепочка `BDVHC`
*/
export class YInteractGroup extends FInteractGroup {



};