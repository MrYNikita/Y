import { YString } from "../../../string/YString/YString.mjs";
import { jectAdopt } from "../../../ject/ject.mjs";
import { configWebYHTML, configWeb } from "../../../config.mjs";
import { YElementStyle } from "../element/YElement/YElementStyle/YElementStyle.mjs";
import { fileRead, fileReadJson, fileReadText } from "../../../os/file/file.mjs";
import { pathGet } from "../../../os/path/path.mjs";
import { YJect } from "../../../ject/YJect/YJect.mjs";

/**
 * @typedef TBHTML
 * @prop {any} _
 * @typedef {DHTML&TBHTML} THTML
*/

class SHTML extends YJect {



};
class DHTML extends SHTML {

    /**
     * Заголовок.
     * @type {string}
    */
    title = 'YHTML';
    /**
     * Элементы.
     * @type {Array<string>}
    */
    elements = [];
    /**
     * Скрипты заголовка доккумента.
     * Данные скрипты будут загружены перед загрузкой страницы.
     * @type {Array<string>}
    */
    scriptsHead = [];
    /**
     * Скрипты тела документа.
     * Данные скрипты будут загружены по мере возможности.
     * @type {Array<string>}
    */
    scriptsBody = [];
    /**
     * Функция инициализации.
     * @type {() => {}}
    */
    initialization = () => { };

};
class IHTML extends DHTML {



};
class MHTML extends IHTML {



};
class FHTML extends MHTML {

    /**
     * Контсруктор класса `YHTML`
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *  @arg {THTML} t
    */
    constructor(t = {}) {

        t = FHTML.#before(Object.values(arguments));

        FHTML.#deceit(t);

        super(t);

        FHTML.#create.apply(this, [t]);

    };

    /** @arg {Array<any>} t */
    static #before(t) {

        if (t?.length === 1 && t[0]?.constructor === Object) {

            return t[0];

        } else if (t?.length) {

            /** @type {THTML&DHTML} */
            const r = {};

            switch (t.length) {

                case 3:
                case 2:
                case 1:

            };

            return r;

        } else return {};

    };
    /** @arg {THTML} t @this {YHTML} */
    static #deceit(t) {

        try {

            FHTML.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @arg {THTML} t @this {YHTML} */
    static #verify(t) {

        const {



        } = t;

        FHTML.#handle(t);

    };
    /** @arg {THTML} t @this {YHTML} */
    static #handle(t) {



    };
    /** @arg {THTML} t @this {YHTML} */
    static #create(t) {

        const {



        } = t;

        jectAdopt(this, t);



    };

};

/**
 * Класс `html` документа.
 *
 * Данный класс предназначен для создания `html` документа.
 * Экземпляры данного класа позволяют дополнять заголовки в `head` и `body`.
 * - Тип `SDIMFY`
 * - Версия `0.1.0`
 * - Цепочка `BDVHC`
 * - Пространство `web`
*/
export class YHTML extends FHTML {

    /**
     * Метод для получения `html` текста.
     * - Версия `0.0.0`
    */
    get() {

        return new YString()

            .changePostfix('\n')
            .paste(

                `<!DOCTYPE html>`,
                `<html lang='ru'>`,

                new YString()

                    .increaseTab()
                    .changePostfix('\n')
                    .paste(

                        `<head>`,

                        new YString()

                            .increaseTab()
                            .changePostfix('\n')
                            .paste(

                                `<meta charset='utf-8'>`,
                                `<meta name='viewport' content='width=device-width, initial-scale=1.0'>`,
                                `<link rel='icon' type='image/png' sizes='32x32' href='/favicon.ico'>`,
                                `<link rel='shortcut icon' href='favicon.ico' type='image/x-icon'>`,
                                ...this.scriptsHead.map(s => `<script type='module' src='${s}'></script>`)

                            )
                            .changePostfix()
                            .paste(

                                `<title>${this.title}</title>`

                            )
                            .get(),

                        `</head>`,
                        `<body>`,

                        new YString()

                            .increaseTab()
                            .changePostfix('\n')
                            .paste(

                                ...this.elements,
                                ...[...configWeb.html.scriptsBody, ...this.scriptsBody].map(s => `<script type='module' src='${s}'></script>`)

                            )
                            .changePostfix()
                            .paste(`<script type='module'>(${this.initialization.toString()})()</script>`)
                            .get(),
                    )
                    .changePostfix()
                    .paste(`</body>`)
                    .get(),

                `</html>`

            )
            .get()

    };

};