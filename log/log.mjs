import { config } from "../config.mjs";

//#region chainError 0.0.0

/**
 * @typedef TBchainError
 * @prop {string} message
 * @prop {function} func 
 * @typedef {TBchainError} TchainError
*/

/** @param {TchainError} t */
function chainErrorDeceit(t) {

    try {

        return chainErrorVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @param {TchainError} t */
function chainErrorVerify(t) {

    const {



    } = t;

    return chainErrorHandle(t);

};
/** @param {TchainError} t */
function chainErrorHandle(t) {

    let {



    } = t;



    t = {

        ...t,

    };

    return chainErrorComply(t);

};
/** @param {TchainError} t */
function chainErrorComply(t) {

    const {

        func,
        message,

    } = t;

    return new Error(

        config.log.error.templates
            
            .replace(/<n>/, func.name)
            .replace(/<m>/, message)

    );

};

/**
 * Функция создания ошибки цепи.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
*/
export function logChainError(func, message) {

    return chainErrorDeceit({ func, message });

};

//#endregion