import http from "http";
import crypto from "crypto";
import { YAPI } from "../api/YAPI/YAPI.mjs";
import { YJect } from "../../../ject/YJect/YJect.mjs";
import { Duplex } from "stream";
import { osGetIP } from "../../../os/os.mjs";
import { YString } from "../../../string/YString/YString.mjs";
import { jectFill } from "../../../ject/ject.mjs";
import { YDirectory } from "../../../os/file/YFile/directory/YDirectory/YDirectory.mjs";
import { config, configWebServer, configWeb } from "../../../config.mjs";

/**
 * @typedef TBServer
 * @prop {string} name
 * @prop {string} port
 * @prop {string} host
 * @prop {string|YDirectory} dir
 * @typedef {YServer&TBServer} TServer
*/

class SServer extends YJect {

    static protocol = 'http';

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
    dir;
    /**
     * Наименование сервера.
     * @type {string}
    */
    name = configWebServer.name;
    /**
     * Номер порта прослушивания.
     * @type {number}
    */
    port = configWebServer.port;
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
     * @type {[Duplex]}
    */
    socks = [];
    /**
     * Состояние сервера.
     * @type {boolean}
    */
    active = false;
    /**
     * Индекс интервала проверки состояния соединений.
     * Данный индекс позволяет управлять интервалом.
     * @type {number}
    */
    pingInterval;
    /**
     * Промежутки проверки соединений в милисекундах.
     * - По умолчанию `1000`
     * @type {number}
    */
    pingIntervalTime = configWebServer.pingIntervalTime ?? 1000;

};
class IServer extends DServer {



};
class MServer extends IServer {



};
class FServer extends MServer {

    /**
     * Контсруктор класса `YServer`
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *  @arg {TServer} t
    */
    constructor(t = {}) {

        t = FServer.#before(Object.values(arguments));

        FServer.#deceit(t);

        super(t);

        FServer.#create.apply(this, [t]);

    };

    /** @arg {Array<any>} t */
    static #before(t) {

        if (t?.length === 1 && t[0]?.constructor === Object) {

            return t[0];

        } else if (t?.length) {

            /** @type {TServer&DServer} */
            const r = {};

            switch (t.length) {

                case 3:
                case 2:
                case 1:

            };

            return r;

        } else return {};

    };
    /** @arg {TServer} t @this {YServer} */
    static #deceit(t) {

        try {

            FServer.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @arg {TServer} t @this {YServer} */
    static #verify(t) {

        const {



        } = t;

        FServer.#handle(t);

    };
    /** @arg {TServer} t @this {YServer} */
    static #handle(t) {

        if (t.dir && (t.dir.constructor === String || t.dir.constructor === RegExp)) t.dir = new YDirectory(t.dir);

    };
    /** @arg {TServer} t @this {YServer} */
    static #create(t) {

        const {



        } = t;

        jectFill(this, t);

        this.serv = http.createServer();

        this

            .appendReport(new YString()

                .changePostfix(';\n')
                .paste(

                    `url: ${this.host}:${this.port}`,
                    `Путей: ${this.api.routs.length}`,
                    `Протокол: http`,
                    `Модификация: ws`,
                    `Директория: ${this?.dir?.getNameFull()}`,
                    `Соединений: ${this.socks.length}`,
                    `Интервал проверки соединений: ${this.pingIntervalTime}ms`,

                )
                .get(),
                'f',
                'Сведения',

            )
            .appendReport(_ => new YString()

                .changePostfix(';\n')
                .paste(...this.api.routs.map(r => r.getInfo()))
                .get(),
                'f',
                'Пути',

            )

    };

};

/**
 * Класс `YServer`
 *
 * Предназначен для взаимодействия клиентской и серверной частью.
 * Предоставляет для работы `WebSocket` соединение и основные методы `REST`.
 * - Тип `SDIMFY-1`
 * - Версия `0.2.0`
 * - Цепочка `BDVHC`
 * - Пространство `Web`
*/
export class YServer extends FServer {

    on() {

        this.serv

            .on('upgrade', (req, socket) => {

                const k = crypto.createHash('sha1').update(req.headers['sec-websocket-key'] + '258EAFA5-E914-47DA-95CA-C5AB0DC85B11').digest('base64');

                socket.write([

                    'HTTP/1.1 101',
                    'upgrade: websocket',
                    'connection: upgrade',
                    `sec-webSocket-accept: ${k}`,
                    '\r\n'

                ].join('\r\n'));

                this.socks.push(socket);

            })
            .on('request', (req, res) => {

                this.api.exec(req, res);

            })
            .listen(this.port, this.host, async () => {



            });

        this.pingInterval = setInterval(_ => this.ping(), this.pingIntervalTime);

        return this;

    };
    off() {

        this.serv.close(() => {



        });

        this.socks = new Set();

        return this;

    };
    /**
     * Метод отправки сообщений.
     * - Версия `0.0.0`
     * @arg {string|Buffer} data
     * @arg {Duplex} sockets
    */
    send(data, ...sockets) {

        if (this.socks.length) {

            if (data.constructor !== Buffer) data = Buffer.from(data);

            const m = Buffer.alloc(2);

            m[0] = 0x81;
            m[1] = data.length;

            if (sockets.length) sockets.forEach(s => s.write(Buffer.concat([m, data])));
            else {

                for (const s of this.socks) {

                    s.write(Buffer.concat([m, data]));

                    this.log.appendNotice(['*', `Отправка сообщения.`]);

                };

            };

        };

        return this;

    };
    /**
     * Метод проверки соединения.
     *
     * - Версия `0.0.0`
     * @arg {string} message Строка проверки.
     * @arg {...Duplex} sockets Соединения.
     * Если указаны конкретные соединения, то проверяются только они.
     * Иначе, если не указаны соединения, будут проверены все установленны соединения.
    */
    ping(message = '', ...sockets) {

        if (this.socks.length) {

            if (sockets.length) {



            } else {

                const m = Buffer.alloc(2);
                const p = Buffer.from(message);

                m[0] = 0x89;
                m[1] = p.length;

                sockets.forEach(s => s.write(Buffer.concat([m, p])));

            };

        };

        return this;

    };
    getUrl() {

        const {

            host,
            port,

        } = this;

        return `${YServer.protocol}://${host}:${port}`;

    };

};

/**
 * @file YServer.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @copyright Yakhin Nikita Artemovich 2022
*/