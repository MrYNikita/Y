import { jectFill } from "../../../../ject.mjs";
import { YElement } from "../YElement.mjs";

/**
 * @typedef TBInteract
 * @prop {any} _
 * @typedef {{[p in Exclude<keyof DInteract,keyof SInteract>|Exclude<keyof SInteract,keyof DInteract>]:(DInteract[p]&SInteract[p])}} TDInteract
 * @typedef {TDInteract&TBInteract&import("../YElement.mjs").TElement} TInteract
*/

class SInteract extends YElement {

    /**
     * Общие привязки.
     *
     * Используются всеми интерактивными элементами.
     * @type {[(string|string[]),boolean,function(YInteract):void][]}
    */
    static binds = [];

};
class DInteract extends SInteract {

    /**
     * Привязки.
     *
     * Это коды или обозначения клавиш или их комбинаций вида `[[code|symbol],boolean,func]`, встречая которые интерактор выполняет указанную функцию.
     * Для одной функции может быть указано несколько кодов/символов.
     * В случае, если привязка указывается для единственного кода/символа, можно указать её без занесения в массив.
     * @type {[(string|string[]),function(YInteract):void][]}
    */
    binds = [];

};
class IInteract extends DInteract {



};
class MInteract extends IInteract {

    /**
     * Метод получения информации от прослушивателя через терминал.
     * - Версия `0.0.0`
     * @arg {string} string Ключ-код/символ привязки.
    */
    receive(string = this.terminal.listener.code) {

        let b = [...this.binds, ...this.constructor.binds].find(b => b[0] === string || (b[0] instanceof Array && b[0].includes(string)));

        if (b) b?.[1]?.(this);
        else if (b = [...this.binds, ...this.constructor.binds].find(b => b[0] === 'default')) b?.[1]?.(this);

        if (b && b[2]) this.terminal.display();

        return this;

    };

};
class FInteract extends MInteract {

    /**
     * Контсруктор класса `YInteract`
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *  @arg {TInteract} t
    */
    constructor(t = {}) {

        t = FInteract.#before(Object.values(arguments));

        FInteract.#deceit(t);

        super(t);

        FInteract.#create.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        if (t?.length === 1 && [Object, YInteract].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

            return t[0];

        } else if (t?.length) {

            /** @type {TInteract&DInteract} */
            const r = {};

            if (t[0]._ytp) t = [...t[0]._ytp];

            switch (t.length) {

                case 3:
                case 2:
                case 1:

            };

            return Object.values(r).length ? r : { _ytp: t };

        } else return {};

    };
    /** @arg {TInteract} t @this {YInteract} */
    static #deceit(t) {

        try {

            FInteract.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @arg {TInteract} t @this {YInteract} */
    static #verify(t) {

        const {



        } = t;

        FInteract.#handle(t);

    };
    /** @arg {TInteract} t @this {YInteract} */
    static #handle(t) {



    };
    /** @arg {TInteract} t @this {YInteract} */
    static #create(t) {

        const {



        } = t;

        jectFill(this, t);

    };

};

/**
 * Класс `YInteract`
 *
 *
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль ``
 * - Цепочка `BDVHC`
*/
export class YInteract extends FInteract {

    /**
     * Метод получения текущего состояния значения.
     * - Версия `0.0.0`
    */
    get() {

        return;

    };
    /**
     * Метод последовательного вызова указанных привязок.
     * - Версия `0.0.0`
     * @arg {...string} strings Ключ-коды/символы привязок.
    */
    bind(...strings) {

        strings.filter(s => s && s.constructor === String).forEach(s => this.receive(s))

        return this;

    };

};