import { jectFill } from "../../ject.mjs";
import { YCursor } from "../../YCursor/YCursor.mjs";
import { YBasic } from "../YBasic.mjs";

/**
 * @typedef TBList
 * @prop {any} _
 * @typedef {DList&TBList} TList
*/

class SList extends YBasic {



};
class DList extends SList {

    /**
     * Значения списка.
     * @type {string|any[]}
     * @protected
    */
    values = [];
    /**
     * Фиксированность курсоров.
     * @protected
     * @type {boolean}
    */
    cursorsFixed = false;

};
class IList extends DList {

    /**
     * Курсоры.
     * @type {YCursor[]}
    */
    cursors = [];

};
class MList extends IList {



};
class FList extends MList {

    /**
     * Контсруктор класса `YList`
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *  @arg {TList} t
    */
    constructor(t = {}) {

        t = FList.#before(Object.values(arguments));

        FList.#deceit(t);

        super(t);

        FList.#create.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        if (t?.length === 1 && [Object, YList].includes(t[0]?.constructor)) {

            return t[0];

        } else if (t?.length) {

            /** @type {TList&DList} */
            const r = {};

            switch (t.length) {

                default: r.values = t.splice(1);
                case 1: {

                    if (t[0].constructor === Number && !r.values) {

                        r.values = new Array(t[0]);

                    } else r.values = [t[0], ...r.values ?? ''];

                };

            };

            return r;

        } else return {};

    };
    /** @arg {TList} t @this {YList} */
    static #deceit(t) {

        try {

            FList.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @arg {TList} t @this {YList} */
    static #verify(t) {

        const {



        } = t;

        FList.#handle(t);

    };
    /** @arg {TList} t @this {YList} */
    static #handle(t) {



    };
    /** @arg {TList} t @this {YList} */
    static #create(t) {

        const {



        } = t;

        jectFill(this, t);

        this.cursors = [new YCursor({ list: this })];

    };

};

/**
 * Класс `YList`
 *
 * Класс, предназначенный для работы с наборами значений, такими как `String`, `Array`, `Buffer`.
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Цепочка `BDVHC`
*/
export class YList extends FList {

    /**
     * Метод добавления курсоров.
     * - Версия `0.0.0`
     * @arg {...YCursor} cursors Курсоры для добавления.
    */
    appendCursors(...cursors) {

        this.cursors.push(...cursors.map(c => new YCursor(c)));

        this.appendCursors({})

        return this;

    };
    /**
     * Метод сброса курсоров.
     * Удаляет все курсоры, кроме основного.
     * Для основного курсора изменяет индекс, присваивая `выходную правую позицию` и устанавилвает размер на `1`.
     * - Версия `0.0.0`
    */
    dropCursors() {

        this.cursors.splice(1).forEach(c => c.delete());

        this.cursors[0].changeSize(0).changeIndex(this.values.length);

        return this;

    };
    /**
     * Метод смещения курсоров.
     * - Версия `0.0.0`
     * @arg {number} number
    */
    moveCursors(number) {

        if (number && !this.cursorsFixed) this.cursors.forEach(c => c.move(number));

        return this;

    };
    /**
     * Метод установки курсора на указанную позицию.
     * Удаляет все курсоры кроме основного.
     * Для основного курсора указывает заданную позицию.
     * - Версия `0.0.0`
     * @arg {number} index Позиия размещения курсора.
    */
    setCursorTo(index) {

        this.cursors.splice(1).forEach(c => c.delete());

        this.cursors[0].changeIndex(index);

        return this;

    };
    /**
     * Метод изменения размеров курсоров.
     * Изменяет исходный размер прибавлением указанного значения изменения размера.
     * - Версия `0.0.0`
     * @arg {number} change Изменение размера.
    */
    resizeCursors(change) {

        this.cursors.forEach(c => c.resize(change));

        return this;

    };
    /**
     * Метод изменения размеров курсоров.
     * Изменяет исходный размер, устанавливая указанное значение размера.
     * - Версия `0.0.0`
     * @arg {number} size Размер курсоров.
    */
    changeCursorsSize(size) {

        this.cursors.forEach(c => c.changeSize(size));

        return this;

    };
    /**
     * Метод изменения фиксированности курсоров.
     * - Версия `0.0.0`
     * @arg {boolean} fixable
    */
    changeCursorFixed(fixable) {

        if ([undefined, null].includes(fixable)) this.cursorsFixed = !this.cursorsFixed;
        else if (fixable.constructor === Boolean || [0, 1].includes(fixable)) this.cursorsFixed = fixable ? true : false;

        return this;

    };

};