import { pathGet } from "../path/path.mjs";
import { exec, fork, spawn } from 'child_process';

//#region launch 0.0.0

/**
 * @typedef TBlaunch
 * @prop {[]} args
 * @prop {string|RegExp} fragment
 * @typedef {TBlaunch} Tlaunch
*/

/** @arg {Tlaunch} t */
function launchDeceit(t) {

    try {

        return launchVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {Tlaunch} t */
function launchVerify(t) {

    const {



    } = t;

    return launchHandle(t);

};
/** @arg {Tlaunch} t */
function launchHandle(t) {

    let {



    } = t;

    t.fragment = pathGet(t.fragment);

    t = {

        ...t,

    };

    return launchComply(t);

};
/** @arg {Tlaunch} t */
function launchComply(t) {

    const {

        args,
        fragment,

    } = t;

    const p = fork(fragment, args);

    p.on('close', (code) => console.log(`Завершен с кодом ${code}`));

};

/**
 * Функция для запуска программы по указанному пути.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @arg {...any} args Аргументы.
 * @arg {string|RegExp} fragment Фрагмент пути до файла программы.
*/
export function programLaunch(fragment, ...args) {

    return launchDeceit({ fragment, args });

};

//#endregion
//#region executeCmd 0.0.0

/**
 * @typedef TBexecuteCmd
 * @prop {[string]} commands
 * @typedef {TBexecuteCmd} TexecuteCmd
*/

/** @arg {TexecuteCmd} t */
function executeCmdDeceit(t) {

    try {

        return executeCmdVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {TexecuteCmd} t */
function executeCmdVerify(t) {

    const {



    } = t;

    return executeCmdHandle(t);

};
/** @arg {TexecuteCmd} t */
function executeCmdHandle(t) {

    let {



    } = t;

    t = {

        ...t,

    };

    return executeCmdComply(t);

};
/** @arg {TexecuteCmd} t */
function executeCmdComply(t) {

    const {

        commands,

    } = t;

    const cmd = exec(commands.join(' && '));

};

/**
 * Функция для выполнения команд в windows cmd.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @arg {...string} commands
*/
export function programExecuteCmd(...commands) {

    return executeCmdDeceit({ commands });

};

//#endregion