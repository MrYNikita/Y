//#region YI

/** @type {import('./config.mjs')['default']?} */
let config = null;

await import('./config.mjs')

    .then(c => config = c.default)
    .catch(e => e);

/** @type {import('./error.mjs')['default']?} */
let error = null;

await import('./error.mjs')

    .then(i => error = i.default)
    .catch(e => e);

//#endregion
//#region YT

/** ### YT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `module.mjs`
 *
 * Основной параметр модуля `Y`.
 *
 * @typedef YT
 * @prop {YTT} Y
 *
*/

/** ### YTT
 * - Тип `TT`
 * - Версия `0.0.0`
 * - Модуль `module.mjs`
 *
 *
 *
 * @typedef {import('./class.mjs')['Y']} YTT
 *
*/

//#endregion
//#region YV



//#endregion

//#region load 0.0.0

/** ### YTFLoad
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `module.mjs`
 * ***
 *
 * Результирующие параметры функции `load`.
 *
 * @typedef {YTFULoad&YT} YTFLoad
 *
*/
/** ### YTFULoad
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `module.mjs`
 *
 * Уникальные параметры функции `load`.
 *
 * @typedef YTFULoad
 * @prop {any} _
*/

/** @arg {YTFLoad} t */
async function loadDeceit(t) {

    try {

        return loadVerify(t);

    } catch (e) {

        if (config?.strict) {

            throw e;

        };

        return undefined;

    } finally {



    };

};
/** @arg {YTFLoad} t */
async function loadVerify(t) {

    const {



    } = t;

    return loadHandle(t);

};
/** @arg {YTFLoad} t */
async function loadHandle(t) {

    const {



    } = t;

    return loadComply(t);

};
/** @arg {YTFLoad} t */
async function loadComply(t) {

    const {

        Y,

    } = t;

    if (Y) {

        for (const module of Object.entries(config.modules)) {

            if (module[1].load) {

                module[0] = module[0][0].toUpperCase() + module[0].slice(1);

                if (Y.hasOwnProperty(`Y${module[0]}`) && !Y[`Y${module[0]}`]) {

                    Y[`Y${module[0]}`] = (await import(`${module[1].path}class.mjs`))[`Y${module[0]}`];

                };
                if (Y.hasOwnProperty([`module${module[0]}`]) && !Y[`module${module[0]}`]) {

                    Y[`module${module[0]}`] = await import(`${module[1].path}module.mjs`);

                };

            };

        };

    };

    return Y;

};

/**
 * ### YLoad
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `module.mjs`
 * ***
 *
 * Внутренняя функция для загрузки модулей в `Y`.
 *
 * ***
 * @arg {YTT} Y `Y`
 * @protected
*/
export async function YLoad(Y) {

    return loadDeceit({ Y });

};

//#endregion

/**
 * @file module.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @copyright Yakhin Nikita Artemovich 2023
*/