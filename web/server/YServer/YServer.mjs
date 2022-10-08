/**
 * @typedef TBServer
 * @prop {string} name
 * @prop {string} port
 * @prop {string} host
 * @prop {YDirectory} dir
 * @typedef {YServer&TBServer} TServer
*/

import http from "http";
import { YAPI } from "../api/YAPI/YAPI.mjs";
import { Socket } from "net";
import { osGetIP } from "../../../os/os.mjs";
import { YString } from "../../../string/YString/YString.mjs";
import { jectFill } from "../../../ject/ject.mjs";
import { YDirectory } from "../../../os/file/YFile/directory/YDirectory/YDirectory.mjs";
import { stringRepaint } from "../../../string/string.mjs";
import { configServer, configWeb } from "../../../config.mjs";

class SServer {



};
class DServer extends SServer {

    /**
     * `API`.
     * @type {YAPI}
    */
    api = new YAPI({ serv: this });
    /**
     * Директория данных сервера.
     * @type {YDirectory}
    */
    dir = new YDirectory({ location: '.test', name: 'source' });
    /**
     * Наименование сервера.
     * @type {string}
    */
    name = configServer.name;
    /**
     * Номер порта прослушивания.
     * @type {number}
    */
    port = configServer.port;
    /**
     * Хост.
     * @type {string}
    */
    host = osGetIP();
    /**
     * Сервер.
     * @type {http.Server}
    */
    serv;
    /**
     * Массив событий сервера.
     * @type {[string]}
    */
    logs = [];
    /**
     * Подключения к серверу.
     * @type {[Socket]}
    */
    socks = [];
    /**
     * Состояние сервера.
     * @type {boolean}
    */
    active = false;

};
class FServer extends DServer {

    /**
     * 
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *  @param {TServer} t
    */
    constructor(t = {}) {

        t = FServer.#before(...arguments);

        super(t);

        FServer.#deceit.apply(this, [t]);

    };

    /** @param {TServer} t @this {[]} */
    static #before(t) {



        if (!t) return {};
        else if (t) return t;

    };
    /** @param {TServer} t @this {YServer} */
    static #deceit(t) {

        try {

            FServer.#verify.apply(this, arguments);

        } catch (e) {

            throw e;

        };

    };
    /** @param {TServer} t @this {YServer} */
    static #verify(t) {

        const {



        } = t;

        FServer.#handle.apply(this, arguments);

    };
    /** @param {TServer} t @this {YServer} */
    static #handle(t) {

        let {



        } = t;



        t = {

            ...t,

        };

        FServer.#create.apply(this, [t]);

    };
    /** @param {TServer} t @this {YServer} */
    static #create(t) {

        const {



        } = t;

        jectFill.apply(this, [t]);

        this.serv = http.createServer();

    };

};

/**
 *
 * - Тип `SDFY`
 * - Версия `0.0.0`
 * - Цепочка `BDVHC`
*/
export class YServer extends FServer {

    on() {

        this.serv.listen(this.port, this.host, async () => {

            this.logs.push(`Сервер ${this.name} начал прослушивание порта ${this.port} по хосту ${this.host}.`);

        }).on('connection', (socket) => {

            this.socks.push(socket);
            this.logs.push(`Сервер ${this.name} фиксирует попытку подключения.`);

        }).on('request', (req, res) => {

            this.logs.push(`Сервер ${this.name} успешно отправил данные.`);
            this.api.exec(req, res);

        });

        return this;

    };
    off() {

        this.serv.close(() => {



        });

        return this;

    };
    log() {

        console.log(

            new YString(this.logs.join('\n'))
                .append(`Логи ${this.name}:\n---\n`, 0)
                .get()

        );

    };
    getUrl() {

        const {

            host,
            port,

        } = this;

        return `${host}:${port}`;

    };
    getInfo() {

        const {

            api,
            dir,
            name,
            port,
            host,
            logs,
            socks,

        } = this;

        return new YString(`

            Сервер: ${name};
            Порт: ${port};
            Хост: ${host};
            Сообщения: ${logs.length};
            Директория: ${dir.getPath()};
            Подключения: ${socks.length};
            url: ${host}:${port};
            ---
            Пути: ${api.routs.length};
            ${api.routs.map(r => r.getInfo()).join(';\n')};

        `);

    };
    logInfo() {

        console.log(this.getInfo()
            .handle(s => '', /\n\n| {2,}/g)
            .handle(s => s.replace(/[\w\d]+/g, stringRepaint('$&', 'c')), /:.+?;/g)
            .get()
        );

    };

};