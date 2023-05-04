//#region YI

import { ansiGetColor, ansiResetColor, ansiSetColor } from '../../../string/ansi/module.mjs';
import { YString } from '../../../string/class.mjs';
import { YJect } from '../../class.mjs';
import { YEntity } from '../class.mjs';
import { YBlock } from './block/class.mjs';
import { YTag } from './block/tag/class.mjs';

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

/** ### YReptT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `ject\entity\rept`
 * 
 * Основной параметр модуля `YRept`.
 * 
 * ***
 * 
 * @typedef {YReptTE&YReptTU} YReptT
*/
/** ### YReptTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `ject\entity\Rept`
 * 
 * Параметр наследования `YRept`.
 * 
 * @typedef {{[p in Exclude<keyof DRept,keyof SRept>|Exclude<keyof SRept,keyof DRept>]:(DRept[p]&SRept[p])}} YReptTE
*/
/** ### YReptTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `ject\entity\Rept`
 * 
 * Уникальные параметры `YRept`.
 * 
 * @typedef YReptTU
 * @prop {} _
*/
/** ### YReptTUG
 * - Тип `TUP`
 * - Версия `0.0.0`
 * - Модуль `ject\entity\Rept`
 * 
 * Уникальные генеративные параметры `YRept`.
 * 
 * @typedef YReptTUG
 * @prop {null=} _
*/

//#endregion

/**
 * @template {YReptTUG<G1>} G
*/
class SRept extends YJect {



};
/**
 * @extends {SRept<G>}
 * @template {YReptTUG} G
*/
class DRept extends SRept {

    /**
     * ### tags
     * 
     * Теги.
     * 
     * *** 
     * @type {YTag[]} 
     * @protected
    */
    tags = [];
    /**
     * ### blocks
     * 
     * Блоки отчета.
     * 
     * *** 
     * @type {YBlock[]} 
     * @public
    */
    blocks = [];

};
/**
 * @extends {DRept<G>}
 * @template {YReptTUG} G
*/
class IRept extends DRept {

    

};
/**
 * @extends {IRept<G>}
 * @template {YReptTUG<G1>} G
*/
class MRept extends IRept {



};
/**
 * @extends {MRept<G>}
 * @template {YReptTUG} G
*/
class FRept extends MRept {

    /**
     * ### YRept.constructor
     * 
     * 
     * 
     * ***
     * @arg {YReptT&G} t
    */
    constructor(t) {

        t = [...arguments];

        super(Object.assign(t = FRept.#before(t), {}));

        FRept.#deceit.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        /** @type {YReptT} */
        let r = {};

        if (t?.length === 1 && [Object, YRept].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

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
    /** @arg {YReptT} t @this {YRept} */
    static #deceit(t) {

        try {

            FRept.#verify.apply(this, [t]);

        } catch (e) {

            throw e;

        } finally {



        };

    };
    /** @arg {YReptT} t @this {YRept} */
    static #verify(t) {

        const {



        } = t;

        FRept.#handle.apply(this, [t]);

    };
    /** @arg {YReptT} t @this {YRept} */
    static #handle(t) {



        FRept.#create.apply(this, [t]);

    };
    /** @arg {YReptT} t @this {YRept} */
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
 * ### YRept
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `ject\entity\Rept`
 * - Цепочка `BDVHC`
 * ***
 * 
 * 
 * 
 * ***
 * @extends {FRept<G>}
 * @template {YReptTUG&YEntity} G
*/
export class YRept extends FRept {

    /**
     * ### filter
     * - Версия `0.0.0`
     * - Модуль `ject\entity\rept`
     * ***
     * 
     * Метод фильтрации по тегам.
     * 
     * ***
     * @arg {...string} tags `Теги`
     * @public
    */
    filter(...tags) {

        this.tags.forEach(tag => {

            if (tags.includes(tag.name)) {

                tag.hide = true;

            };

        });

        return this;
        
    };
    /**
     * ### display
     * - Версия `0.0.0`
     * - Модуль `ject\entity\Rept`
     * ***
     * 
     * Метод отображения отчета.
     * 
     * ***
     * @arg {YEntity} entity `Сущность`
     * @public
    */
    display(entity) {

        const blocks = this.blocks.filter(block => block.tags.every(tag => !tag.hide)).map(block => {

            const text = block.texts.map(text => text(entity)).join('\n');

            if (text) {

                return new YString()

                    .setPostfix('\n')
                    .paste(`--- ${block.name}`)
                    .setPostfix()
                    .paste(text)
                    .get(true);

            } else {

                return '';

            };

        });

        const result = new YString()

            .paste(

                '###\n',
                ...blocks.filter(block => block),
                '###',

            )
            .formatReport()
            .get(true);

        let format = null;

        const formats = [

            { reg: /\p{L}/u, foreground: 'white', },
            { reg: /\p{P}/u, foreground: 'cyan', },
            { reg: /\p{N}|∞/u, foreground: 'yellow', },

        ];

        for (const char of result) {

            if (!format || !format.reg.test(char)) {

                format = formats.find(format => format.reg.test(char)) ?? formats[0];

                ansiSetColor(format.foreground);

            };

            process.stdout.write(char);

        };

        return this;

    };

    /**
     * ### appendBlocks
     * - Версия `0.0.0`
     * - Модуль `ject\entity\rept`
     * ***
     * 
     * Метод добавления новых блоков.
     * 
     * ***
     * @arg {...([string, function(G):string, number, ...]|YBlock<G>[])} blocks `Блоки`
     * @public
    */
    appendBlocks(...blocks) {

        blocks.forEach(block => {

            if (block.constructor === Array) {

                block = new YBlock(...block);

            };

            const find = this.blocks.find(blockThis => blockThis.name === block.name);

            if (find) {

                find.texts.push(...block.texts);

            } else {

                this.blocks.push(block);

            };

            for (const i in block.tags) {

                const tag = block.tags[i];

                const find = this.tags.findIndex(tagThis => tagThis.name === tag.name);

                if (find === -1) {

                    this.tags.push(tag);

                } else {

                    block.tags[i] = this.tags[find];
                    
                    this.tags[find].links.push(block);
                    
                };

            };

        });

        return this;

    };

};