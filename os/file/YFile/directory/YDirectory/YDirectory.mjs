import { YBFile, YFile } from "../../YFile.mjs";
import { jectFill } from "../../../../../ject/ject.mjs";
import { pathDecompose, pathGet, pathGetAll } from "../../../../path/path.mjs";
import { directoryGetDir, directoryGetFile } from "../directory.mjs";
import { fileREExpand, fileRELocation, fileREName } from "../../../file.mjs";
import { YString } from "../../../../../string/YString/YString.mjs";
import { statSync } from 'fs';
import { YTemplate } from "../../../../../string/YString/YTemplate/YTemplate.mjs";

/**
 * @typedef TBDirectory
 * @prop {any} _
 * @typedef {DDirectory&TBDirectory&import("../../YFile.mjs").TFile} TDirectory
*/

class SDirectory extends YBFile {



};
class DDirectory extends SDirectory {

    /**
     * Массив путей к фалйам и папкам директории.
     * @type {[string]}
    */
    paths;

};
class FDirectory extends DDirectory {

    /**
     * 
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *  @param {TDirectory} t
    */
    constructor(t = {}) {

        t = FDirectory.#before(arguments);

        FDirectory.#deceit(t);

        super(t);

        FDirectory.#create.apply(this, [t]);

    };

    /** @param {TDirectory} t @this {[]} */
    static #before(t) {

        if (t?.length === 1 && t[0]?.constructor === Object) {

            return t;

        } else if (t?.length) {

            const r = {};

            switch (t.length) {

                case 1: {

                    const p = pathGet(t[0], false);

                    r.name = p.match(fileREName)[1];
                    r.location = p?.match(fileRELocation)?.[0] ?? '';

                };

            };

            return r;

        } else return {};

    };
    /** @param {TDirectory} t @this {YDirectory} */
    static #deceit(t) {

        try {

            FDirectory.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @param {TDirectory} t @this {YDirectory} */
    static #verify(t) {

        const {



        } = t;

        FDirectory.#handle(t);

    };
    /** @param {TDirectory} t @this {YDirectory} */
    static #handle(t) {

        let {



        } = t;

        t.expand = 'dir';

        t = {

            ...t,

        };

    };
    /** @param {TDirectory} t @this {YDirectory} */
    static #create(t) {

        const {



        } = t;

        jectFill(this, t);

        this.paths = pathGetAll(this.getPath());

    };

};

/**
 *
 * - Тип `SDFY`
 * - Версия `0.0.0`
 * - Цепочка `BDVHC`
*/
export class YBDirectory extends FDirectory {

    /**
     * Метод отображения информации.
     * - Версия `0.0.0`
    */
    report() {

        new YString(this.getReport())

            .castToYReport()
            .display();

        return this;

    };
    getDir(fragment) {

        if (!this.deleted) {

            const p = directoryGetDir(this.paths, fragment);

            return new YDirectory({

                name: p.match(fileREName)[1],
                location: p.match(fileRELocation)[1],

            });

        };

    };
    getFile(fragment) {

        if (!this.deleted) {

            const p = directoryGetFile(this.paths, fragment);

            return new YFile({

                name: p.match(fileREName)[1],
                expand: p.match(fileREExpand)[1],
                location: p.match(fileRELocation)[0],

            });

        };

    };
    getPath() {

        const {

            name,
            location,

        } = this;

        console.log(name, location);

        if (location) return `${location}${name}/`;
        else return `${name}/`;

    };
    /**
     * Метод получения информации в виде строки.
     * - Версия `0.0.0`
    */
    getReport() {

        const d = statSync(pathGet(this.getPath()));

        return new YString()

            .changePostfix(';\n')
            .paste(

                `Наименование: ${this.name}`,
                `Расположение: ${this.location}`,
                `Расширение: ${this.expand}`,
                `Удален: ${this.deleted}`,
                `Размер: ${d.size} KB`,
                `Путей: ${this.paths.length}`,
                
            )
            .pasteTemplate(new YTemplate('l', '---\n'))
            .changePostfix('\n')
            .paste(`Пути:`)
            .increaseTab()
            .changePostfix(';\n')
            .paste(...this.paths)
            .changePostfix()
            .decreaseTab()
            .pasteTemplate('l')
            .get()

    };

};
/**
 *
 * - Тип `SDFY`
 * - Версия `0.0.0`
 * - Цепочка `BDVHC`
*/
export class YDirectory extends YBDirectory {

    getNameFull() {

        const {

            name,
            location,

        } = this;

        return `${this.location}/${this.name}`;

    };

};