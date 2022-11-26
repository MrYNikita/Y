import { jectFill } from "../../../ject/ject.mjs";
import { YLog } from "../../../log/YLog/YLog.mjs";
import { YString } from "../../../string/YString/YString.mjs";
import { YTemplate } from "../../../string/YString/YTemplate/YTemplate.mjs";

/**
 * @typedef TBClient
 * @prop {any} _
 * @typedef {DClient&TBClient} TClient
*/

class SClient {



};
class DClient extends SClient {

    /**
     * Журнал.
     * @type {YLog}
    */
    log = new YLog();
    /**
     * Адрес.
     * @type {string}
    */
    url = '192.168.0.106:8000';
    /**
     * WebSocket соединение.
     * @type {WebSocket}
    */
    socket;

};
class FClient extends DClient {

    /**
     *
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *  @param {TClient} t
    */
    constructor(t = {}) {

        t = FClient.#before(arguments);

        FClient.#deceit(t);

        super(t);

        FClient.#create.apply(this, [t]);

    };

    /** @param {[]} t */
    static #before(t) {

        if (t?.length === 1 && t[0]?.constructor === Object) {

            return t[0];

        } else if (t?.length) {

            return {

                url: t[0],

            };

        } else return {};

    };
    /** @param {TClient} t @this {YClient} */
    static #deceit(t) {

        try {

            FClient.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @param {TClient} t @this {YClient} */
    static #verify(t) {

        const {



        } = t;

        FClient.#handle(t);

    };
    /** @param {TClient} t @this {YClient} */
    static #handle(t) {

        let {



        } = t;



        t = {

            ...t,

        };

    };
    /** @param {TClient} t @this {YClient} */
    static #create(t) {

        const {



        } = t;

        jectFill(this, t);

        this.socket = new WebSocket(`ws://${this.url}`);

    };

};

/**
 *
 * - Тип `SDFY-2.0`
 * - Версия `0.0.0`
 * - Цепочка `BDVHC`
*/
export class YClient extends FClient {

    /**
     * Метод отображения текущего состояния.
     * - Версия `0.0.0`
    */
    report() {

        new YString()
            .changePostfix(';\n')
            .paste(

                `ws: ${this.url}`,
                `Подключение: ${(this.socket.readyState === 1) ? '+' : '-'}`

            )
            .pasteTemplate(new YTemplate('l', '---\n'))
            .paste(

                `Видимость: ${this.log.vis}`,
                `Ошибок: ${this.log.list.find(s => s.symbol === 'x').list.length}`,
                `Предупреждений: ${this.log.list.find(s => s.symbol === '!').list.length}`,
                `Уведмолений: ${this.log.list.find(s => s.symbol === '*').list.length}`,

            )
            .pasteTemplate('l')
            .castToYReport()
            .display()

        return this;

    };

};