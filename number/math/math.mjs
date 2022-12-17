//#region sigmoid 0.0.0

/**
 * @typedef TBsigmoid
 * @prop {number} number
 * @typedef {TBsigmoid} Tsigmoid
*/

/** @arg {Tsigmoid} t */
function sigmoidDeceit(t) {

    try {

        return sigmoidVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {Tsigmoid} t */
function sigmoidVerify(t) {



    return sigmoidHandle(t);

};
/** @arg {Tsigmoid} t */
function sigmoidHandle(t) {



    return sigmoidComply(t);

};
/** @arg {Tsigmoid} t */
function sigmoidComply(t) {

    const {

        number,

    } = t;

    return 1 / (1 + Math.exp(-number));

};

/**
 * Математическая функция для вычисления сигмоиды по значению.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @arg {number} number Значение.
*/
export function mathSigmoid(number) {

    return sigmoidDeceit({ number });

};

//#endregion
//#region sigmoidDirevative 0.0.0

/**
 * @typedef TBsigmoidDirevative
 * @prop {number} number
 * @typedef {TBsigmoidDirevative} TsigmoidDirevative
*/

/** @arg {TsigmoidDirevative} t */
function sigmoidDirevativeDeceit(t) {

    try {

        return sigmoidDirevativeVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {TsigmoidDirevative} t */
function sigmoidDirevativeVerify(t) {



    return sigmoidDirevativeHandle(t);

};
/** @arg {TsigmoidDirevative} t */
function sigmoidDirevativeHandle(t) {



    return sigmoidDirevativeComply(t);

};
/** @arg {TsigmoidDirevative} t */
function sigmoidDirevativeComply(t) {

    const {

        number,

    } = t;

    return number * (1 - number);

};

/**
 * Функция производной для сигмоиды.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @arg {number} number Значение.
*/
export function mathSigmoidDirevative(number) {

    return sigmoidDirevativeDeceit({ number, });

};

//#endregion