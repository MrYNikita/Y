import fs from 'fs';
import http from 'http';
import { YRout } from "../rout/YRout/YRout.mjs";
import { YServer } from "../../YServer/YServer.mjs";
import { YString } from "../../../../string/YString/YString.mjs";
import { pathGet } from "../../../../os/path/path.mjs";
import { jectAdopt } from "../../../../ject/ject.mjs";
import { fileReadText, fileREExpand } from "../../../../os/file/file.mjs";
import { serverDefineContentType } from "../../server.mjs";

/**
 * @typedef TBAPI
 * @prop {any} _
 * @typedef {YAPI&TBAPI} TAPI
*/

class SAPI {



};
class DAPI extends SAPI {

    /**
     * Сервер.
     * @type {YServer}
    */
    serv;
    /**
     * Пути.
     * @type {[YRout]}
    */
    routs = [];


};
class FAPI extends DAPI {

    /**
     *
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *  @arg {TAPI} t
    */
    constructor(t = {}) {

        t = FAPI.#before(...arguments);

        FAPI.#deceit(t);

        super(t);

        FAPI.#create.apply(this, [t]);

    };

    /** @arg {TAPI} t @this {[]} */
    static #before(t) {



        if (!t) t = {};

        return t;

    };
    /** @arg {TAPI} t @this {YAPI} */
    static #deceit(t) {

        try {

            FAPI.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @arg {TAPI} t @this {YAPI} */
    static #verify(t) {

        const {



        } = t;

        FAPI.#handle(t);

    };
    /** @arg {TAPI} t @this {YAPI} */
    static #handle(t) {

        let {



        } = t;



        t = {

            ...t,

        };

    };
    /** @arg {TAPI} t @this {YAPI} */
    static #create(t) {

        const {



        } = t;

        this.adopt(t);



    };

};

/**
 * Класс `API`.
 *
 * Предназначен для использования в `YServer`. Содержит в себе функциональные возможности сервера, которые могут быть получены по запросу.
 * Запрос сопастоявляется с перечнем `YRout`.
 * - Тип `SDFY`
 * - Версия `0.0.0`
 * - Цепочка `BDVHC`
*/
export class YAPI extends FAPI {

    /**
     * Добавление обработки `get` запроса.
     * @arg {string} url
     * @arg {function} procedure
    */
    get(url, type, procedure) {

        return this.append(url, type, procedure, 'get')

    };
    /**
     * Добавление обработки `get` запроса.
     * @arg {string} url
     * @arg {function} procedure
    */
    post(url, type, procedure) {

        return this.append(url, type, procedure, 'post');

    };
    /**
     * Исполнение api.
     * @arg {string} url
     * @arg {http.ClientRequest} res
     * @arg {http.IncomingMessage} req
    */
    exec(req, res) {

        res.setHeader('X-Content-Type-Options', 'nosniff');
        res.setHeader('Cache-Control', 'no-cache');

        const r = this.routs.find(r => r.url === req.url.split('?')[0] ?? req.url);

        if (r) {

            r.exec(req, res);
            return this;

        } else if (req.url === '/') {

            res.end(``);
            return this;

        };

        const f = pathGet(req.url.slice(1));

        if (f) {

            res.setHeader('Content-Type', serverDefineContentType(f.match(fileREExpand)[1]));

            fs.createReadStream(f).pipe(res);

            return this;

        };

        res.end(``);

        return this;

    };
    /**
     *
    */
    append(url, type, procedure, method) {

        if (this.routs.every(r => r.url !== url)) this.routs.push(new YRout({ url, type, procedure, api: this, method }));

        return this;

    };
    remove(url) {

        this.routs.splice(this.routs.find(r => r.url === url), 1);

        return this;

    };
    logInfo() {

        let {

            name = this.serv.name,
            count = this.routs.length,

        } = this;

        console.log(

            new YString(`YAPI ${this.serv.name}`)
                .get()

        );

    };

};