import http from "http";
import crypto from "crypto";
import { YLog } from "../../../../log/YLog/YLog.mjs";
import { YAPI } from "../../api/YAPI/YAPI.mjs";
import { Socket } from "net";
import { osGetIP } from "../../../../os/os.mjs";
import { YString } from "../../../../string/YString/YString.mjs";
import { jectFill } from "../../../../ject/ject.mjs";
import { YDirectory } from "../../../../os/file/YFile/directory/YDirectory/YDirectory.mjs";
import { stringRepaint } from "../../../../string/string.mjs";
import { config, configServer, configWeb } from "../../../../config.mjs";

/**
 * @typedef TBServer
 * @prop {string} name
 * @prop {string} port
 * @prop {string} host
 * @prop {YDirectory} dir
 * @typedef {YServer&TBServer} TServer
*/

class SServer {



};
class DServer extends SServer {

    /**
     * Журнал.
     * @type {YLog}
    */
    log = new YLog().appendSection(

        {
            label: 'error',
            symbol: 'x',
        },
        {

            label: 'notic',
            symbol: '!'

        },
        {

            label: 'info',
            symbol: '*',

        }

    );
    /**
     * `API`.
     * @type {YAPI}
    */
    api = new YAPI({ serv: this });
    /**
     * Директория данных сервера.
     * @type {YDirectory}
    */
    dir;
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
    host = osGetIP(config.local);
    /**
     * Сервер.
     * @type {http.Server}
    */
    serv;
    /**
     * Подключения к серверу.
     * @type {Set}
    */
    socks = new Set();
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

        FServer.#deceit(t);

        super(t);

        FServer.#create.apply(this, [t]);

    };

    /** @param {TServer} t @this {[]} */
    static #before(t) {



        if (!t) t = {};

        return t;

    };
    /** @param {TServer} t @this {YServer} */
    static #deceit(t) {

        try {

            FServer.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @param {TServer} t @this {YServer} */
    static #verify(t) {

        const {



        } = t;

        FServer.#handle(t);

    };
    /** @param {TServer} t @this {YServer} */
    static #handle(t) {

        let {



        } = t;

        if (t.dir && t.dir.constructor === String) t.dir = new YDirectory(t.dir);

        t = {

            ...t,

        };

    };
    /** @param {TServer} t @this {YServer} */
    static #create(t) {

        const {



        } = t;

        jectFill(this, t);

        this.serv = http.createServer();

    };

};

/**
 * Класс `Сервера`.
 * - Тип `SDFY-2.0`
 * - Версия `0.0.0`
 * - Цепочка `BDVHC`
*/
export class YServer extends FServer {

    on() {

        this.log.appendNotice(['!', 'Запущен сервер.']);

        this.serv.listen(this.port, this.host, async () => {



        }).on('upgrade', (req, socket) => {

            const k = crypto

                .createHash('sha1')
                .update(req.headers['sec-websocket-key'] + '258EAFA5-E914-47DA-95CA-C5AB0DC85B11')
                .digest('base64')

            socket.write([

                'HTTP/1.1 101',
                'upgrade: websocket',
                'connection: upgrade',
                `sec-webSocket-accept: ${k}`

            ].join('\r\n'));

            this.socks.add(socket);

        }).on('request', (req, res) => {

            this.api.exec(req, res);

        });

        return this;

    };
    off() {

        this.serv.close(() => {



        });

        this.socks = new Set();

        return this;

    };
    report() {

        new YString(this.getInfo())
            .handle(s => '', /\n\n| {2,}/g)
            .handle(s => s.replace(/[\w\d]+/g, stringRepaint('$&', 'c')), /:.+?;/g)
            .log()

        return this;

    };
    getUrl() {

        const {

            host,
            port,

        } = this;

        return `${host}:${port}`;

    };
    getInfo() {

        return new YString()

            .changeStringAppendEnd(';\n')
            .append(`URL: ${this.host}:${this.port}`)
            .append(`Протокол: http`)
            .append(`Модификация: ws`)
            .append(`Директория: ${(this.dir) ? this.dir.getNameFull() : 'N'}`)
            .append(`Соединений: ${this.socks.size}`)
            .changeStringAppendEnd('\n')
            .append('---')
            .changeStringAppendEnd(';\n')
            .append(`Ошибок: ${this.log.list.find(s => s.label === 'error').list.length}`)
            .append(`Уведомлений: ${this.log.list.find(s => s.label === 'warner').list.length}`)
            .append(`Предупреждений: ${this.log.list.find(s => s.label === 'info').list.length}`)
            .changeStringAppendEnd('\n')
            .append('---')
            .changeStringAppendEnd(';\n')
            .get()

    };

};