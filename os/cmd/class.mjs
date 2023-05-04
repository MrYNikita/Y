//#region YI

import { condIsString } from '../../bool/cond/module.mjs';
import { YJect } from '../../ject/class.mjs';
import { YPath } from '../path/class.mjs';

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

/** ### YCMDT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `os\cmd`
 * 
 * Основной параметр модуля `YCMD`.
 * 
 * @typedef {YCMDTE&YCMDTU} YCMDT
 * 
*/
/** ### YCMDTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `os\cmd`
 * 
 * Параметр наследования `YCMD`.
 * 
 * @typedef {{[p in Exclude<keyof DCMD,keyof SCMD>|Exclude<keyof SCMD,keyof DCMD>]:(DCMD[p]&SCMD[p])}} YCMDTE
 * 
*/
/** ### YCMDTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `os\cmd`
 * 
 * Уникальные параметры `YCMD`.
 * 
 * @typedef YCMDTU
 * @prop {any} _
 * 
*/

//#endregion

class SCMD extends YJect {
    
    /**
     * ### config
     * 
     * Конфигуратор.
     * 
     * ***
     * @public
    */
    static config = config;
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
     * @type {number?}
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
     * @public
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
    connect = null;
    
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
     * @arg {YCMDT} t
    */
    constructor(t) {
        
        t = [...arguments];
        
        super(Object.assign(t = FCMD.#before(t), {}));
        
        FCMD.#deceit.apply(this, [t]);
        
    };
    
    /** @arg {any[]} t */
    static #before(t) {
        
        /** @type {YCMDT} */
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
        
        if (t.path) {

            if (condIsString(t.path)) {

                t.path = new YPath(t.path);

            };

        } else {

            t.path = YPath.getProject();

        };
        
        FCMD.#create.apply(this, [t]);
        
    };
    /** @arg {YCMDT} t @this {YCMD} */
    static #create(t) {
        
        const {
            
            
            
        } = t;
        
        this.adopt(t);
        
        if (config) {
            
            this.adoptDefault(config);
            
        };
        
    };
    
};

/**
 * ### YCMD
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `os\cmd`
 * - Цепочка `BDVHC`
 * ***
 * 
 * 
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

        this.connect = exec('cmd.exe');

        this.connect.stdout.on('data', (data) => {

            this.data.push(...data.toString().match(/[^\n\r]*/gms).filter(s => {

                if (s && !s.includes('Microsoft')) {

                    return true;

                };

            }));

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

        await new Promise(async (resolve) => {

            this.on();

            this.connect.stdin.on('close', resolve);

            for (const command of commands) {

                this.connect.stdin.write(`${command}\n`);

            };

            this.connect.stdin.end('exit\n');

        });

    };

    /**
     * ### getPointerFinish
     * - Версия `0.0.1`
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

        if (this.path.exists()) {

            return this.path.get().replaceAll('/', '\\') + '>';

        } else {

            return null;

        };

    };
    
};
