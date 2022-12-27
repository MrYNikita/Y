import { jectFill } from "../ject.mjs";
import { YJect } from "../YJect/YJect.mjs";
import { emitKeypressEvents, createInterface } from "readline";
import { YString } from "../../string/YString/YString.mjs";
import { stringAppend, stringCastToSample, stringPaste, stringRemove, stringRepaint } from "../../string/string.mjs";
import { YRept } from "../YBasic/YRept/YRept.mjs";

/**
 * @typedef TBCLI
 * @prop {any} _
 * @typedef {DCLI&TBCLI} TCLI
*/

class SCLI extends YJect {

    static {

        process.stdin.setRawMode(true);
        emitKeypressEvents(process.stdin);

    };

    static rept = new YRept()

        .chain(Object.getPrototypeOf(SCLI).rept)
        .append(_ => new YString()


            .get()

        , 'f', 'Данные')

};
class DCLI extends SCLI {



};
class ICLI extends DCLI {

    /**
     * История.
     * @type {YString}
    */
    store = new YString().changePostfix('\n');
    /**
     * Строка команды.
     * @type {YString}
    */
    command = new YString();
    /**
     * Инструкции.
     * @type {Object<string,function():void>}
    */
    instructions = {

        yt() { console.log('test record'); },
        /** @this {YCLI} */
        yc() {

            this.store.set();

        },

    };

};
class MCLI extends ICLI {



};
class FCLI extends MCLI {

    /**
     * Контсруктор класса `YCLI`
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *  @arg {TCLI} t
    */
    constructor(t = {}) {

        t = FCLI.#before(Object.values(arguments));

        FCLI.#deceit(t);

        super(t);

        FCLI.#create.apply(this, [t]);

    };

    /** @arg {Array<any>} t */
    static #before(t) {

        if (t?.length === 1 && t[0]?.constructor === Object) {

            return t[0];

        } else if (t?.length) {

            /** @type {TCLI&DCLI} */
            const r = {};

            switch (t.length) {

                case 3:
                case 2:
                case 1:

            };

            return r;

        } else return {};

    };
    /** @arg {TCLI} t @this {YCLI} */
    static #deceit(t) {

        try {

            FCLI.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @arg {TCLI} t @this {YCLI} */
    static #verify(t) {

        const {



        } = t;

        FCLI.#handle(t);

    };
    /** @arg {TCLI} t @this {YCLI} */
    static #handle(t) {



    };
    /** @arg {TCLI} t @this {YCLI} */
    static #create(t) {

        const {



        } = t;

        jectFill(this, t);

        this.log.appendSection({ symbol: '>', label: 'command', });

    };

};

/**
 * Класс `YCLI`
 *
 * Класс терминалов.
 * Предназначен для управления потоками ввода и вывода.
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Цепочка `BDVHC`
*/
export class YCLI extends FCLI {

    /**
     * Метод запуска активации терминала.
     * - Версия `0.0.0`
    */
    on() {

        process.stdin.on('keypress',

            /**
             * @arg {string} c Символ.
             * @arg {import("readline").Key} k Данные клавиши.
            */
            (c, k) => {

                console.clear();

                switch (k.sequence) {

                    default: {

                        this.command.paste(c);

                    }; break;
                    case '\r': {

                        this.command.paste('\n');

                    }; break;
                    case '\b': {

                        this.command.remove(-1);

                    }; break;
                    case '\x19': {

                        this.exec(this.command.get());
                        this.record('>', this.command.get(true));
                        this.store.paste(this.command.get(true));
                        this.command.set('');

                    }; break;
                    case '\x1B[A': {

                        const commands = this.store.get().split('\n').filter(f => f);

                        let i = commands.findIndex(c => c === this.command.get());

                        i = i === -1 ? commands.length - 1 : i > 0 ? --i : commands.length - 1;

                        this.command.set(commands[i]);

                    }; break;
                    case '\x1B[B': {

                        const commands = this.store.get().split('\n').filter(f => f);

                        let i = commands.findIndex(c => c === this.command.get());

                        i = i === -1 ? 0 : i < commands.length - 1 ? ++i : 0;

                        this.command.set(commands[i]);

                    }; break;
                    case '\x1B[C': {

                        this.command.cursors.forEach(c => c.move(1));

                    }; break;
                    case '\x1B[D': {

                        this.command.cursors.forEach(c => c.move(-1));

                    }; break;
                    case '\x03': process.exit();

                };

                this.report();
                this.command

                    .exec(y => {

                        y.cursors.forEach(c => {

                            if (c.index <= y.values.length - 1) {

                                y.values = stringPaste(y.values, stringRepaint(y.values[c.index], 'c', 0, 1), c.index, 1);

                            };

                        });

                    })
                    .display()
                    .resetStyle();

            }

        ).resume();

        return this;

    };
    /**
     * Метод приостановления работы терминала.
     * - Версия `0.0.0`
    */
    off() {

        process.stdin.off();

    };
    /**
     * Метод исполнения команды.
     * Находит команду в перечне по её ключу и приводит в исполнение.
     * - Версия `0.0.0`
     * @arg {string} command Ключ команды.
    */
    exec(command) {

        this.instructions?.[command]?.apply?.(this);

        return this;

    };

};