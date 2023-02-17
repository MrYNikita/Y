const config = {

    /**
     * ### borders
     *
     * Массив рамочных символов.
     *
     * ***
     * @type {string[][]}
     * @public
    */
    borders: [

        ['│', '─', '┌', '┐', '└', '┘', '├', '┬', '┴', '┤', '┼'],
        ['║', '═', '╔', '╗', '╚', '╝', '╠', '╦', '╩', '╣', '╬'],
        ['┊', '┄'],

    ],

    /**
     * ### defaultSizes
     *
     * Дефолт размер.
     *
     * ***
     * @type {[number, number]}
     * @public
    */
    defaultSizes: [33, 123],
    /**
     * ### defaultColorF
     *
     * Дефолт цвет символов.
     *
     * ***
     * @type {string}
     * @public
    */
    defaultColorF: 'cyan',
    /**
     * ### defaultColorB
     *
     * Дефолт цвет фона.
     *
     * ***
     * @type {string}
     * @public
    */
    defaultColorB: 'blueDark',
    /**
     * ### defaultModeLoad
     *
     * Дефолт режим загрузки.
     *
     * ***
     * @type {boolean}
     * @public
    */
    defaultModeLoad: true,
    /**
     * ### defaultModeSave
     *
     * Дефолт режим сохранения.
     *
     * ***
     * @type {boolean}
     * @public
    */
    defaultModeSave: true,

};

export default config;

export const configTerminal = config;