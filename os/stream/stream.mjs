import { pathGet } from '../path/path.mjs';
import { Readable, Writable, Duplex } from 'stream';
import { createReadStream, createWriteStream } from 'fs';

//#region bind 0.0.0

/**
 * @typedef TBbind
 * @prop {Readable} sr
 * @prop {[Writable]} sw
 * @typedef {TBbind} Tbind
*/

/** @arg {Tbind} t */
function bindDeceit(t) {

    try {

        return bindVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {Tbind} t */
function bindVerify(t) {

    const {



    } = t;

    return bindHandle(t);

};
/** @arg {Tbind} t */
function bindHandle(t) {

    let {



    } = t;



    t = {

        ...t,

    };

    return bindComply(t);

};
/** @arg {Tbind} t */
function bindComply(t) {

    const {

        sr,
        sw,

    } = t;

    sw.forEach(w => sr.pipe(w));

};

/**
 * Функция для связывания потока считывания со многими потоками записи.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @arg {Readable} sr
 * @arg {...Writable} sw
*/
export function streamBind(sr, ...sw) {

    return bindDeceit({ sr, sw, });

};

//#endregion