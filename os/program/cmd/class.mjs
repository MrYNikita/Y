//#region YI

import { spawn } from 'child_process';
import { YPath } from '../../path/YPath/YPath.mjs';
import { YBasic } from '../../../ject/YBasic/YBasic.mjs';
import { pipeline } from 'stream/promises';

/** @type {import('./config.mjs')['default']?} */
let config = null;

await import('./config.mjs')

    .then(c => config = c.default)
    .catch(e => e);

//#endregion
//#region YT

/** ### YCMDT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `os\program\cmd`
 *
 * Основной параметр модуля `YCMD`.
 *
 * @typedef {YCMDTE&YCMDTU} YCMDT
 *
*/
/** ### YCMDTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `os\program\cmd`
 *
 * Параметр наследования `YCMD`.
 *
 * @typedef {{[p in Exclude<keyof DCMD,keyof SCMD>|Exclude<keyof SCMD,keyof DCMD>]:(DCMD[p]&SCMD[p])}} YCMDTE
 *
*/
/** ### YCMDTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `os\program\cmd`
 *
 * Уникальные параметры `YCMD`.
 *
 * @typedef YCMDTU
 * @prop {any} _
 *
*/

//#endregion

class SCMD extends YBasic {

    /**
     * ### cmd
     *
     * Общедоступная консоль.
     *
     * ***
     * @type {YCMD}
     * @protected
    */
    static cmd;

    /**
     * ### exec
     * - Версия `0.0.0`
     * - Модуль `os\program\cmd`
     * ***
     *
     * Метод выполнения команд.
     *
     * Процесс будет ожидать выполнения всех указанных команд.
     *
     * ***
     * @arg {...string} commands `Команды`.
     * @public
    */
    static async exec(...commands) {

        await this.cmd.exec(...commands);

        return this;

    };

};
class DCMD extends SCMD {

    /**
     * ### path
     *
     * Путь.
     *
     * Изначально указывает путь до места запуска консоли.
     * После используется для отображения текущего местоположения.
     *
     * ***
     * @type {YPath}
     * @public
    */
    path;
    /**
     * ### delay
     *
     * Задержка.
     *
     * ***
     * @type {number}
     * @public
    */
    delay;
    /**
     * ### detached
     *
     * Фоновый режим.
     *
     * ***
     * @type {boolean}
     * @public
    */
    detached;

};
class ICMD extends DCMD {

    /**
     * ### data
     *
     * Данные.
     *
     * Поле содержит информацию об ответах, пришедших после выполнения команд.
     *
     * ***
     * @type {string[]}
     * @protected
    */
    data = [];
    /**
     * ### connect
     *
     * Соединение.
     *
     * ***
     * @type {import("child_process").ChildProcess}
     * @protected
    */
    connect;
    /**
     * ### streamRead
     *
     *
     *
     * ***
     * @type {}
     * @public
    */
    streamRead = new ReadableStream();

};
class MCMD extends ICMD {



};
class FCMD extends MCMD {

    /**
     * ### YCMD.constructor
     *
     *
     *
     * ***
     *  @arg {...YCMDT} t
    */
    constructor(...t) {

        super(Object.assign(t = FCMD.#before(t), {}));

        FCMD.#deceit.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        /** @type {} */
        let r = {};

        if (t?.length === 1 && [Object, YCMD].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

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
    /** @arg {YCMDT} t @this {YCMD} */
    static #deceit(t) {

        try {

            FCMD.#verify.apply(this, [t]);

        } catch (e) {

            throw e;

        } finally {



        };

    };
    /** @arg {YCMDT} t @this {YCMD} */
    static #verify(t) {

        const {



        } = t;

        FCMD.#handle.apply(this, [t]);

    };
    /** @arg {YCMDT} t @this {YCMD} */
    static #handle(t) {

        if (!t.path) {

            t.path = YPath.getProject();

        } else if (t.path) {

            if (t.path.constructor === String) {

                t.path = new YPath(t.path);

            };

            if (!t.path.check()) {

                t.path = YPath.getProject();

            };

        };

        FCMD.#create.apply(this, [t]);

    };
    /** @arg {YCMDT} t @this {YCMD} */
    static #create(t) {

        const {



        } = t;

        this.adopt(t);

        if (config) {

            this.adoptByDefault(config);

        };

    };

};

/**
 * ### YCMD
 * - Тип `SDIMFY`
 * - Версия `0.1.0`
 * - Модуль `os\program\cmd`
 * - Цепочка `BDVHC`
 * ***
 *
 * Класс взаимодействия с `cmd` в `Windows`.
 *
 * ***
 *
*/
export class YCMD extends FCMD {

    static {

        this.cmd = new YCMD();

    };

    /**
     * ### on
     * - Версия `0.0.0`
     * - Модуль `os\program\cmd`
     * ***
     *
     * Метод активации.
     *
     * ***
     *
     * @public
    */
    on() {

        this.connect = spawn('cmd.exe', {

            cwd: this.path.get(),
            detached: this.detached,

        });

        this.connect.stdout.on('data', (data) => {

            console.log(this.connect.stdout.read());

            this.data.push(...data.toString().match(/[^\n\r]*/gms).filter(s => s));

        });

        this.connect.stdout.on('close', _ => {

            this.off();

        });

        return this;

    };
    /**
     * ### off
     * - Версия `0.0.0`
     * - Модуль `os\program\cmd`
     * ***
     *
     * Метод отключения.
     *
     * ***
     *
     * @public
    */
    off() {

        this.connect.kill();

        return this;

    };

    /**
     * ### exec
     * - Версия `0.0.1`
     * - Модуль `os\program\cmd`
     * ***
     *
     * Метод выполнения команд.
     *
     * ***
     * @arg {...string} commands `Команды`
     * @public
    */
    async exec(...commands) {

        await new Promise(async (resulve) => {

            this.on();

            const cb1 = _ => {

                this.connect.stdin.removeListener('finish', cb1);

                resulve();

            };

            this.connect.stdin.on('finish', cb1);

            for (const command of commands) {

                await new Promise((resulve) => {

                    const callback = _ => {


                        this.connect.stdout.removeListener('data', callback);

                        setTimeout(resulve, this.delay);

                    };

                    this.connect.stdout.on('data', callback);

                    this.connect.stdin.write(`${command}\n`);

                });

            };

            this.connect.stdin.end('exit\n');

        });

    };

    /**
     * ### getPointerFinish
     * - Версия `0.0.0`
     * - Модуль `os\program\cmd`
     * ***
     *
     * Метод получения строки-указателя завершения выполения команды.
     *
     * ***
     *
     * @public
    */
    getPointerFinish() {

        if (this.path.check()) {

            return this.path.get().replaceAll('/', '\\\\') + '>';

        } else {

            return null;

        };

    };

};