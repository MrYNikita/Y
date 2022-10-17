import { jectFill } from "../../../ject/ject.mjs";
import { fileAppend, fileDelete, fileMove, fileRead, fileReadText, fileREExpand, fileRELocation, fileREName, fileRename, fileWrite } from "../file.mjs";
import { existsSync } from "fs";
import { pathGet, pathGetAll } from "../../path/path.mjs";

/**
 * @typedef TBFile
 * @prop {string} name
 * @prop {string} expand
 * @prop {string} location
 * @typedef {DFile&TBFile} TFile
*/

class SFile {



};
class DFile extends SFile {

    /**
     * Наименование файла.
     * @type {string}
    */
    name = '';
    /**
     * Тип файла.
     * @type {string}
    */
    expand = '';
    /**
     * Состояние удаления.
     * @type {boolean}
    */
    deleted = false;
    /**
     * Расположение файла.
     * @type {string}
    */
    location = '';

};
class FFile extends DFile {

    /**
     * 
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *  @param {TFile} t
    */
    constructor(t = {}) {

        t = FFile.#before(...arguments);

        FFile.#deceit(t);

        super(t);

        FFile.#create.apply(this, [t]);

    };

    /** @param {TFile} t @this {[]} */
    static #before(t) {

        if (t.constructor === String) {

            const name = t.match(fileREName)[1], location = t.match(fileRELocation)?.[0], expand = t.match(fileREExpand)?.[1];

            t = {};

            if (expand) t.expand = expand;
            if (location) t.location = location;

            t.name = name;

        };

        if (!t) t = {};

        return t;

    };
    /** @param {TFile} t @this {YFile} */
    static #deceit(t) {

        try {

            FFile.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @param {TFile} t @this {YFile} */
    static #verify(t) {

        const {



        } = t;

        FFile.#handle(t);

    };
    /** @param {TFile} t @this {YFile} */
    static #handle(t) {

        let {



        } = t;



        t = {

            ...t,

        };

    };
    /** @param {TFile} t @this {YFile} */
    static #create(t) {

        const {



        } = t;

        jectFill(this, t);



    };

};

/**
 *
 * - Тип `SDFY`
 * - Версия `0.0.0`
 * - Цепочка `BDVHC`
*/
export class YBFile extends FFile {

    /**
     * Метод для изменения местоположения файла.
     * @param {string|RegExp} location
    */
    move(location) {

        if (!this.deleted) {

            const l = pathGet(location);

            fileMove(this.getPath(), l);

            this.location = l;

        };

        return this;

    };
    /**
     * Метод для переименования файла.
     * @param {string} name
    */
    rename(name) {

        if (this.deleted) {

            fileRename(this.getPath(), name);

            this.name = name;

        };

        return this;

    };
    /**
     * Метод для удаления файла.
    */
    delete() {

        if (!this.deleted) {

            fileDelete(this.getPath());

            this.deleted = true;

        };

        return this;

    };
    /**
     * Метод для получения полного пути до файла.
    */
    getPath() {

        const {

            name,
            expand,
            location,

        } = this;

        if (location) return `${location}/${name}.${expand}`;
        else return `${name}.${expand}`;

    };
    /**
     * Метод для получения полного имени файла с расширением.
    */
    getNameFull() {

        const {

            name,
            expand,

        } = this;

        return `${name}.${expand}`;

    };

};
export class YFile extends YBFile {

    /**
     * Метод считывания данных из файла.
    */
    read() {

        if (!this.deleted) return fileRead(new RegExp(this.getPath()), this.expand);

    };
    /**
     * Метод записи данных в файл.
     * @param {...string} data
    */
    write(...data) {

        if (!this.deleted) fileWrite(this.getPath(), this.expand, ...data);

        return this;

    };
    /**
     * Метод дополнения файла новыми данными.
     * @param {string} data
    */
    append(...data) {

        if (this.deleted) fileAppend(this.getPath(), this.expand, ...data);

        return this;

    };

};