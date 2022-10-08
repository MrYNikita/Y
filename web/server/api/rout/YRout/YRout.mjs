/**
 * @typedef TBRout
 * 
 * @typedef {YRout&TBRout} TRout
*/

import { jectFill } from "../../../../../ject/ject.mjs";
import { serverDefineContentType } from "../../../server.mjs";
import { YServer } from "../../../YServer/YServer.mjs";
import { YAPI } from "../../YAPI/YAPI.mjs";

class SRout {

    

};
class DRout extends SRout {

    /**
     * Путь.
     * @type {string}
    */
    url;
    /**
     * API.
     * @type {YAPI}
    */
    api;
    /**
     * Тип возврата.
     * @type {string}
    */
    type;
    /**
     * Метод.
     * @type {string}
    */
    method = 'get';
    /**
     * Процедура.
     * @type {function}
    */
    procedure = (req, res) => { res.end(``) };

};
class FRout extends DRout {

    /**
     * 
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *  @param {TRout} t
    */
    constructor(t = {}) {

        t = FRout.#before(...arguments);

        super(t);

        FRout.#deceit.apply(this, [t]);

    };

    /** @param {TRout} t @this {[]} */
    static #before(t) {



        if (!t) return {};
        else if (t) return t;

    };
    /** @param {TRout} t @this {YRout} */
    static #deceit(t) {

        try {

            FRout.#verify.apply(this, arguments);

        } catch (e) {

            throw e;

        };

    };
    /** @param {TRout} t @this {YRout} */
    static #verify(t) {

        const {



        } = t;

        FRout.#handle.apply(this, arguments);

    };
    /** @param {TRout} t @this {YRout} */
    static #handle(t) {

        let {



        } = t;



        t = {

            ...t,

        };

        FRout.#create.apply(this, [t]);

    };
    /** @param {TRout} t @this {YRout} */
    static #create(t) {

        const {



        } = t;

        jectFill.apply(this, [t]);



    };

};

/**
 *
 * - Тип `SDFY`
 * - Версия `0.0.0`
 * - Цепочка `BDVHC`
*/
export class YRout extends FRout {

    /**
     * @param {http.ServerResponse} res
     * @param {http.IncomingMessage} req
    */
    exec(req, res) {

        try {

            res.statusCode = 200;

            res.setHeader('Content-Type', serverDefineContentType(this.type));
            this.procedure(req, res);

        } catch (e) {

            throw e;

        };

    };
    logInfo() {
        
    };
    getInfo() {

        const {

            api,
            url,
            type,
            method,

        } = this;

        return `* ${api.serv.getUrl()}${url}; Метод: ${method}; Тип данных: ${type}`;

    };

};