import { spawn } from "child_process";
import { jectFill } from "../../../ject/ject.mjs";
import { YLog } from "../../../log/YLog/YLog.mjs";
import { stringRepaint } from "../../../string/string.mjs";
import { YString } from "../../../string/YString/YString.mjs";
import { pathGetProject } from "../../path/path.mjs";

/**
 * @typedef TBCMD
 * @prop {any} _
 * @typedef {DCMD&TBCMD} TCMD
*/

class SCMD {



};
class DCMD extends SCMD {

    /**
     * Журнал уведомлений.
     * @type {YLog}
    */
    log = new YLog();
    /**
     * Соединение с терминалом.
     * @type {import("child_process").ChildProcessWithoutNullStreams}
    */
    connect;

};
class FCMD extends DCMD {

    /**
     * 
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *  @param {TCMD} t
    */
    constructor(t = {}) {

        t = FCMD.#before(...arguments);

        FCMD.#deceit(t);

        super(t);

        FCMD.#create.apply(this, [t]);

    };

    /** @param {TCMD} t @this {[]} */
    static #before(t) {



        if (!t) t = {};

        return t;

    };
    /** @param {TCMD} t @this {YCMD} */
    static #deceit(t) {

        try {

            FCMD.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @param {TCMD} t @this {YCMD} */
    static #verify(t) {

        const {



        } = t;

        FCMD.#handle(t);

    };
    /** @param {TCMD} t @this {YCMD} */
    static #handle(t) {

        let {



        } = t;



        t = {

            ...t,

        };

    };
    /** @param {TCMD} t @this {YCMD} */
    static #create(t) {

        const {



        } = t;

        jectFill(this, t);

        this.connect = spawn('cmd.exe', { cwd: pathGetProject(), detached: true, });

    };

};

/**
 * Класс управления терминалом `cmd` windows.
 * 
 * Данный класс предназначен для выполнения команд в `cmd`.
 * - Тип `SDFY-2.0`
 * - Версия `0.0.0`
 * - Цепочка `BDVHC`
*/
export class YCMD extends FCMD {

    /**
     * Метод отображения информации.
     * - Версия `0.0.0`
    */
    report() {

        const ystr = new YString()

            .append(`YCMD\n`)
            .append(`---\n`)
            .append(`Тип: ${this.constructor.name};\n`)
            .append(`Сообщений: ${this.log.get().length};\n`)
            .append(`Состояние: ${(!this.connect.killed) ? 'on' : 'off'};\n`)
            .handle(s => s.replace(/[\w\d]+/g, stringRepaint('$&', 'c')), /:.+?;/g)

        ystr.log();

        return this;

    };

};