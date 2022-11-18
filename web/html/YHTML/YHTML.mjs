import { jectFill } from "../../../ject/ject.mjs";
import { YString } from "../../../string/YString/YString.mjs";

/**
 * @typedef TBHTML
 * @prop {any} _
 * @typedef {DHTML&TBHTML} THTML
*/

class SHTML {
    
    
    
};
class DHTML extends SHTML {
    
    /**
     * Заголовок.
     * @type {string}
    */
    title = 'YHTML';
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
    scriptsBody = ['index'];
    
};
class FHTML extends DHTML {
    
    /**
     * 
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *  @param {THTML} t
    */
    constructor(t = {}) {
        
        t = FHTML.#before(arguments);
        
        FHTML.#deceit(t);
        
        super(t);
        
        FHTML.#create.apply(this, [t]);
        
    };
    
    /** @param {THTML} t */
    static #before(t) {
        
        if (t?.length === 1 && t[0]?.constructor === Object) {
            
            return t[0];
            
        } else if (t?.length) {
            
            const r = {};
            
            
            
            return r;
            
        } else return {};
        
    };
    /** @param {THTML} t @this {YHTML} */
    static #deceit(t) {
        
        try {
            
            FHTML.#verify(t);
            
        } catch (e) {
            
            throw e;
            
        };
        
    };
    /** @param {THTML} t @this {YHTML} */
    static #verify(t) {
        
        const {
            
            
            
        } = t;
        
        FHTML.#handle(t);
        
    };
    /** @param {THTML} t @this {YHTML} */
    static #handle(t) {
        
        let {
            
            
            
        } = t;
        
        [t?.scriptsHead, t?.scriptsBody].forEach(s => s?.map(s => /\.m?js/.test(s) ? s : s + '.mjs'));
        
        t = {
            
            ...t,
            
        };
        
    };
    /** @param {THTML} t @this {YHTML} */
    static #create(t) {
        
        const {
            
            
            
        } = t;
        
        jectFill(this, t);
        
        
        
    };
    
};

/**
 * Класс `html` документа.
 * 
 * Данный класс предназначен для создания `html` документа.
 * Экземпляры данного класа позволяют дополнять заголовки в `head` и `body`.
 * - Тип `SDFY-2.0`
 * - Версия `0.0.0`
 * - Цепочка `BDVHC`
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

                                ...this.scriptsBody.map(s => `<script type='module' src='${s}'></script>`)

                            )
                            .changePostfix()
                            .paste(

                               `<script type='module'>
                                    (${(_ => {

                                                

                                    }).toString()})()
                               </script>`

                            )
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