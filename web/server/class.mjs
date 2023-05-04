//#region YI

import { Duplex } from 'stream';
import { YEntity } from '../../ject/entity/class.mjs';
import { netGetIp } from '../../os/net/module.mjs';
import { createHash } from 'crypto';
import { createServer } from 'http';

/** @type {import('./config.mjs')['default']?} */
let config = null;

await import('./config.mjs')

    .then(i => config = i.default)
    .catch(e => e);

/** @type {import('./error.mjs')['default']?} */
let error = null;

await import('./error.mjs')

    .then(i => error = i.default)
    .catch(e => e);

//#endregion
//#region YT

/** ### YServerT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `web\server`
 * 
 * Основной параметр модуля `YServer`.
 * 
 * @typedef {YServerTE&YServerTU} YServerT
 * 
*/
/** ### YServerTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `web\server`
 * 
 * Параметр наследования `YServer`.
 * 
 * @typedef {{[p in Exclude<keyof DServer,keyof SServer>|Exclude<keyof SServer,keyof DServer>]:(DServer[p]&SServer[p])}} YServerTE
 * 
*/
/** ### YServerTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `web\server`
 * 
 * Уникальные параметры `YServer`.
 * 
 * @typedef YServerTU
 * @prop {any} _
 * 
*/

//#endregion

class SServer extends YEntity {



};
class DServer extends SServer {

    /**
     * ### name
     * 
     * Наименование сервера.
     * 
     * *** 
     * @type {string} 
     * @public
    */
    name;
    /**
     * ### port
     * 
     * Порт.
     * 
     * *** 
     * @type {string} 
     * @public
    */
    port;
    /**
     * ### host
     * 
     * Хост.
     * 
     * *** 
     * @type {string} 
     * @public
    */
    host;

};
class IServer extends DServer {

    /**
     * ### value
     * 
     * Значение.
     * 
     * У данного класса выступает `http` сервером.
     * 
     * *** 
     * @type {} 
     * @protected
    */
    value;
    /**
     * ### active
     * 
     * Активность.
     * 
     * *** 
     * @type {boolean} 
     * @public
    */
    active;
    /**
     * ### connections
     * 
     * Соединения.
     * 
     * Здесь хранятся все соединения с данным сервером.
     * 
     * *** 
     * @type {Duplex[]}
     * @protected
    */
    connections = [];
    /**
     * ### pingInterval
     * 
     * Интервал проверки соединений.
     * 
     * Хранит в себе индекс на существующий интервал.
     * 
     * *** 
     * @type {number} 
     * @protected
    */
    pingInterval;
    /**
     * ### pingIntervalTime
     * 
     * Интервалы проверки времени.
     * 
     * *** 
     * @type {number} 
     * @protected
    */
    pingIntervalTime;

};
class MServer extends IServer {



};
class FServer extends MServer {

    /**
     * ### YServer.constructor
     * 
     * 
     * 
     * ***
     * @arg {YServerT} t
    */
    constructor(t) {

        t = [...arguments];

        super(Object.assign(t = FServer.#before(t), {}));

        FServer.#deceit.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        /** @type {YServerT} */
        let r = {};

        if (t?.length === 1 && [Object, YServer].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

            r = t[0];

        } else if (t?.length) {

            if (t[0]?._ytp) {

                t = [...t[0]._ytp];

            };

            switch (t.length) {

                case 3:
                case 2:
                case 1:

            };

            if (!Object.values(r).length) {

                r = { _ytp: t, };

            };

        };

        return r;

    };
    /** @arg {YServerT} t @this {YServer} */
    static #deceit(t) {

        try {

            FServer.#verify.apply(this, [t]);

        } catch (e) {

            throw e;

        } finally {



        };

    };
    /** @arg {YServerT} t @this {YServer} */
    static #verify(t) {

        const {



        } = t;

        FServer.#handle.apply(this, [t]);

    };
    /** @arg {YServerT} t @this {YServer} */
    static #handle(t) {

        if (!t.host) {

            t.host = netGetIp();

        };

        FServer.#create.apply(this, [t]);

    };
    /** @arg {YServerT} t @this {YServer} */
    static #create(t) {

        const {



        } = t;

        this.adopt(t);

        if (config) {

            this.adoptDefault(config);

        };

        if (this.active) {

            this.on();

        };

    };

};

/**
 * ### YServer
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `web\server`
 * - Цепочка `BDVHC`
 * ***
 * 
 * 
 * 
 * ***
 * 
*/
export class YServer extends FServer {

    /**
     * ### on
     * - Версия `0.0.0`
     * - Модуль `web\server`
     * ***
     * 
     * Метод запуска сервера.
     * 
     * ***
     * @public
    */
    on() {

        this.active = true;

        this.value = createServer(async (req, res) => {



        }).on('upgrade', async (req, socket) => {

            const k = createHash('sha1').update(req.headers['sec-websocket-key'] + '258EAFA5-E914-47DA-95CA-C5AB0DC85B11').digest('base64');

            socket.write([

                'HTTP/1.1 101',
                'upgrade: websocket',
                'connection: upgrade',
                `sec-webSocket-accept: ${k}\r\n`,

            ].join('\r\n'));

            this.socks.push(socket);

        }).on('connection', (req, res) => {



        }).on('request', (req, res) => {



        }).listen(this.port, this.host, async () => {



        });

        return this;

    };
    /**
     * ### off
     * - Версия `0.0.0`
     * - Модуль `web\server`
     * ***
     * 
     * Метод отключения сервера.
     * 
     * ***
     * @public
    */
    off() {

        this.active = false;

        this.serv.close(() => {



        });

        return this;

    };

};