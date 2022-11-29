//#region carry 0.0.0

/**
 * @typedef TBcarry
 * @prop {any} _
 * @typedef {TBcarry} Tcarry
*/

/** @param {Tcarry} t */
function carryDeceit(t) {

    try {

        return carryVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @param {Tcarry} t */
function carryVerify(t) {

    const {



    } = t;

    return carryHandle(t);

};
/** @param {Tcarry} t */
function carryHandle(t) {

    let {



    } = t;



    t = {

        ...t,

    };

    return carryComply(t);

};
/** @param {Tcarry} t */
function carryComply(t) {

    const {



    } = t;



};

/**
 *
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
*/
export function handleCarry() {



};

//#endregion
//#region select 0.0.0

/**
 * @typedef TBselect
 * @prop {any} _
 * @typedef {TBselect} Tselect
*/

/** @param {Tselect} t */
function selectDeceit(t) {

    try {

        return selectVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @param {Tselect} t */
function selectVerify(t) {

    const {



    } = t;

    return selectHandle(t);

};
/** @param {Tselect} t */
function selectHandle(t) {

    let {



    } = t;



    t = {

        ...t,

    };

    return selectComply(t);

};
/** @param {Tselect} t */
function selectComply(t) {

    const {



    } = t;



};

/**
 * Функция для добавления обработчика выделения.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
*/
export function handleSelect() {



};

//#endregion