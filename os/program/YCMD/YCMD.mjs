import { exec, fork, spawn } from "child_process";
import { config } from "process";
import { configOSPath } from "../../../config.mjs";
import { jectAdopt } from "../../../ject/ject.mjs";
import { YBasic } from "../../../ject/YBasic/YBasic.mjs";
import { YString } from "../../../string/YString/YString.mjs";
import { YTemplate } from "../../../string/YString/YTemplate/YTemplate.mjs";
import { pathGetProject } from "../../path/path.mjs";

/**
 * @typedef TBCMD
 * @prop {any} _
 * @typedef {DCMD&TBCMD} TCMD
*/

class SCMD extends YBasic {



};
class DCMD extends SCMD {

    /**
     * Данные.
     * Данные, полученные при выполнении команд в терминале сохраняются в данное свойство.
     * - По умолчанию `[]`
     * @type {Array<string}
    */
    data = [];
    /**
     * Соединение с терминалом.
     * @type {import("child_process").ChildProcessWithoutNullStreams}
    */
    connect;
    /**
     * Текущее местоположение запущенного терминала.
     * @type {string}
    */
    pathNow;
    /**
     * Путь до места, где будет запущен терминал.
     * - По умолчанию `configOSPath.pathProject` - равен пути до проекта.
     * @type {string}
    */
    pathBegin;
    /**
     * Логическое значение отстраненности.
     * Если `true`, то запущенный процесс не является основным и работает в фоновом режиме.
     * Иначе работает, как основной.
     * - По умолчанию `true`.
     * @type {boolean}
    */
    detached = true;

};
class FCMD extends DCMD {

    /**
     *
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *  @arg {TCMD} t
    */
    constructor(t = {}) {

        t = FCMD.#before(...arguments);

        FCMD.#deceit(t);

        super(t);

        FCMD.#create.apply(this, [t]);

    };

    /** @arg {TCMD} t @this {[]} */
    static #before(t) {



        if (!t) t = {};

        return t;

    };
    /** @arg {TCMD} t @this {YCMD} */
    static #deceit(t) {

        try {

            FCMD.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @arg {TCMD} t @this {YCMD} */
    static #verify(t) {

        const {



        } = t;

        FCMD.#handle(t);

    };
    /** @arg {TCMD} t @this {YCMD} */
    static #handle(t) {

        let {



        } = t;

        if (!t.pathBegin) t.pathBegin = configOSPath.pathProject ?? pathGetProject();
        if (!t.pathNow) t.pathNow = t.pathBegin;

        t = {

            ...t,

        };

    };
    /** @arg {TCMD} t @this {YCMD} */
    static #create(t) {

        const {



        } = t;

        this.adopt(t);

        this.connect = spawn('cmd.exe', { cwd: this.pathBegin, detached: this.detached });

        this.exec(`cd ${this.pathBegin}`);

        this.connect.stdout.on('data', (data) => {

            this.data.push(data.toString());

        });

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
     * Метод выполнения команд.
     * - Версия `0.0.0`
     * @arg {...string} commands Набор команд, переданных для выполнения.
    */
    exec(...commands) {

        commands.forEach(c => this.connect.stdin.write(`${c}\n`));

        return this;

    };
    /**
     * Метод отображения информации.
     * - Версия `0.0.0`
    */
    report() {

        new YString(this.getReport()).castToYReport().display();

        return this;

    };
    /**
     * Метод получения информации.
     * - Версия `0.0.0`
    */
    getReport() {

        return new YString()

            .changePostfix(';\n')
            .paste(

                `Состояние: ${!this.connect.killed}`,
                `Блоков данных: ${this.data.length}`,
                `Текущее местоположение: ${this.pathNow}`,
                `Начальное местоположение: ${this.pathBegin}`,

            )
            .pasteTemplate(new YTemplate('l', '---\n'))
            .paste(...this.log.getVisiable())
            .get();

    };

};