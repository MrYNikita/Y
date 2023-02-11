import { Duplex } from 'stream';
import { jectAdopt } from "../../../ject/ject.mjs";
import { YLog } from '../../../log/YLog/YLog.mjs';
import { YString } from '../../../string/YString/YString.mjs';

/**
 * @typedef TBStream
 * @prop {any} _
 * @typedef {DStream&TBStream} TStream
*/

class SStream extends Duplex {



};
class DStream extends SStream {

    /**
     * Журнал.
     * @type {YLog}
    */
    log = new YLog().appendSection(

        { label: 'info', symbol: '*' },
        { label: 'noric', symbol: '!' },
        { label: 'error', symbol: 'x' },

    );
    /**
     * Метка потока.
     * @type {string}
    */
    label;

};
class FStream extends DStream {

    /**
     *
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *  @arg {TStream} t
    */
    constructor(t = {}) {

        t = FStream.#before(...arguments);

        FStream.#deceit(t);

        super(t);

        FStream.#create.apply(this, [t]);

    };

    /** @arg {TStream} t @this {[]} */
    static #before(t) {



        if (!t) t = {};

        return t;

    };
    /** @arg {TStream} t @this {YStream} */
    static #deceit(t) {

        try {

            FStream.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @arg {TStream} t @this {YStream} */
    static #verify(t) {

        const {



        } = t;

        FStream.#handle(t);

    };
    /** @arg {TStream} t @this {YStream} */
    static #handle(t) {

        let {



        } = t;



        t = {

            ...t,

        };

    };
    /** @arg {TStream} t @this {YStream} */
    static #create(t) {

        const {



        } = t;

        jectAdopt(this, t);



    };

};

/**
 *
 * - Тип `SDFY-2.0`
 * - Версия `0.0.0`
 * - Цепочка `BDVHC`
*/
export class YStream extends FStream {

    report() {



    };

};