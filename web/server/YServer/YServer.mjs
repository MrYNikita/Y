import http, { get } from "http";
import crypto from "crypto";
import { YLog } from "../../../log/YLog/YLog.mjs";
import { YAPI } from "../api/YAPI/YAPI.mjs";
import { Duplex } from "stream";
import { Socket } from "net";
import { osGetIP } from "../../../os/os.mjs";
import { YString } from "../../../string/YString/YString.mjs";
import { jectFill } from "../../../ject/ject.mjs";
import { YTemplate } from "../../../string/YString/YTemplate/YTemplate.mjs";
import { YDirectory } from "../../../os/file/YFile/directory/YDirectory/YDirectory.mjs";
import { stringRepaint } from "../../../string/string.mjs";
import { config, configServer, configWeb } from "../../../config.mjs";
import { arrayRemove } from "../../../array/array.mjs";

/**
 * @typedef TBServer
 * @prop {string} name
 * @prop {string} port
 * @prop {string} host
 * @prop {YDirectory} dir
 * @typedef {YServer&TBServer} TServer
*/

class SServer {

    static protocol = 'http';

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

            label: 'warner',
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
    pingIntervalTime = configServer.pingIntervalTime ?? 1000;

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

        if (t.dir.constructor === String) t.dir = new YDirectory(t.dir);

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
 * - Версия `0.1.0`
 * - Цепочка `BDVHC`
*/
export class YServer extends FServer {

    on() {

        this.log.appendNotice(['!', 'Запущен сервер.']);

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
                this.log.appendNotice(['*', `Осуществлен запрос по адресу: ${req.url}`])

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
     * @param {string|Buffer} data
     * @param {Duplex} sockets
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
     * @param {string} message Строка проверки.
     * @param {...Duplex} sockets Соединения.
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
    report() {

        new YString(this.getReport())

            .castToYReport()
            .display()

        return this;

    };
    /**
     * Метод получения информации в виде строки.
     * - Версия `0.0.0`
    */
    getReport() {

        return new YString()

            .changePostfix(';\n')
            .paste(

                `url: ${this.host}:${this.port}`,
                `Путей: ${this.api.routs.length}`,
                `Протокол: http`,
                `Модификация: ws`,
                `Директория: ${this?.dir?.getPath()}`,
                `Соединений: ${this.socks.length}`,
                `Интервал проверки соединений: ${this.pingIntervalTime}ms`,

            )
            .pasteTemplate(new YTemplate({ label: 'l', value: '---\n' }))
            .paste(

                `Видимость: ${this.log.vis}`,
                `Ошибок: ${this.log.list.find(s => s.symbol === 'x').list.length}`,
                `Уведомлений: ${this.log.list.find(s => s.symbol === '*').list.length}`,
                `Предупреждений: ${this.log.list.find(s => s.symbol === '!').list.length}`

            )
            .pasteTemplate('l')
            .changePostfix('\n')
            .paste(`Пути:`)
            .changePostfix(';\n')
            .paste(...this.api.routs.map(r => r.getInfo()))
            .pasteTemplate('l')
            .changePostfix('\n')
            .paste('Соединения:')
            .changePostfix(';\n')
            .paste(...this.socks)
            .pasteTemplate('l')
            get();

    };
    getUrl() {

        const {

            host,
            port,

        } = this;

        return `${YServer.protocol}://${host}:${port}`;

    };

};