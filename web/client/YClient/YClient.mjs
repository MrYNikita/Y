import { jectAdopt } from "../../../ject/ject.mjs";
import { YJect } from "../../../ject/YJect/YJect.mjs";
import { YLog } from "../../../log/YLog/YLog.mjs";
import { YString } from "../../../string/YString/YString.mjs";
import { YTemplate } from "../../../string/YString/YTemplate/YTemplate.mjs";
import { YEvent } from "../../event/YEvent/YEvent.mjs";

/**
 * @typedef TBClient
 * @prop {any} _
 * @typedef {DClient&TBClient} TClient
*/

class SClient extends YJect {



};
class DClient extends SClient {



};
class IClient extends DClient {

    /**
     * Адрес.
     * @type {string}
    */
    url = location.host;
    /**
     * Данные клавиши.
    */
    key = {

        value: '',
        alt: false,
        caps: false,
        ctrl: false,
        shift: false,

    };
    /**
     * Данные курсора.
    */
    cursor = {

        x: 0,
        y: 0,

    };
    /**
     * WebSocket соединение.
     * @type {WebSocket}
    */
    socket;
    /**
     * События.
     * @type {Array<YEvent>}
    */
    events = [];

};
class MClient extends IClient {

    /**
     * Метод для остлеживания данных пользователя.
     * - Версия `0.0.0`
     * @protected
    */
    track() {

        /** @arg {KeyboardEvent} ev */
        addEventListener('keydown', (ev) => {

            this.key.value = ev.key;
            this.key.alt = ev.altKey;
            this.key.caps = ev.key === 'CapsLock' ? !this.key.caps : this.key.caps;
            this.key.ctrl = ev.ctrlKey;
            this.key.shift = ev.shiftKey;

        });
        /** @arg {MouseEvent} em */
        addEventListener('mousemove', (em) => {

            this.cursor.x = em.clientX;
            this.cursor.y = em.clientY;

        });

    };

};
class FClient extends MClient {

    /**
     * Контсруктор класса `YClient`
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *  @arg {TClient} t
    */
    constructor(t = {}) {

        t = FClient.#before(Object.values(arguments));

        FClient.#deceit(t);

        super(t);

        FClient.#create.apply(this, [t]);

    };

    /** @arg {Array<any>} t */
    static #before(t) {

        if (t?.length === 1 && t[0]?.constructor === Object) {

            return t[0];

        } else if (t?.length) {

            /** @type {TClient} */
            const r = {};

            switch (t.length) {

                case 3:
                case 2:
                case 1:

            };

            return r;

        } else return {};

    };
    /** @arg {TClient} t @this {YClient} */
    static #deceit(t) {

        try {

            FClient.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @arg {TClient} t @this {YClient} */
    static #verify(t) {

        const {



        } = t;

        FClient.#handle(t);

    };
    /** @arg {TClient} t @this {YClient} */
    static #handle(t) {



    };
    /** @arg {TClient} t @this {YClient} */
    static #create(t) {

        const {



        } = t;

        this.adopt(t);

        this.socket = new WebSocket(`ws://${this.url}`);

        this.track();

        this

            .appendReport(_ => new YString()

                .changePostfix(';\n')
                .paste(

                    `Соединение: ${this.socket.readyState === 0 ? '<->' : this.socket.readyState === 1 ? true : false}`,

                )
                .get(), 'f', 'Сведения')

            .appendReport(_ => new YString()

                .changePostfix(';\n')
                .paste(

                    `Alt: ${this.key.alt}`,
                    `Caps: ${this.key.caps}`,
                    `Ctrl: ${this.key.ctrl}`,
                    `Shift: ${this.key.shift}`,
                    `Клавиша: ${this.key.value}`,
                    `Позиция курсора по X: ${this.cursor.x}`,
                    `Позиция курсора по Y: ${this.cursor.y}`,

                )
                .get(), 'f', 'Пользователь',)


    };

};

/**
 *
 * - Тип `SDIFMY-1.0`
 * - Версия `0.1.0`
 * - Цепочка `BDVHC`
*/
export class YClient extends FClient {

    /**
     * Метод добавления события.
     * - Версия `0.0.0`
     * @arg {keyof WindowEventMap} type Тип.
     * @arg {string} label Метка.
     * @arg {function():void} func Функция.
     * @arg {HTMLElement} element Элемент.
    */
    appendEvent(type, label, func, element = window) {

        this.events.push(new YEvent({ type, label, func, element }));

        return this;

    };

};