export const configAnsi = {

    /**
     * ### delimeter
     * 
     * Разделитель аргументов.
     * 
     * *** 
     * @type {string} 
     * @public
    */
    delimiter: ';',

    /**
     * ### code
     *
     * Код.
     *
     * ***
     * @type {string}
     * @public
    */
    code: '\x1b[',
    /**
     * ### codeEnd
     * 
     * Код завершения вставки.
     * 
     * *** 
     * @type {string} 
     * @public
    */
    codeEnd: 'm',
    /**
     * ### codeClear
     * 
     * Код очистки экрана.
     * 
     * *** 
     * @type {string} 
     * @public
    */
    codeClear: 'J',
    /**
     * ### codeColor
     * 
     * Вставка точечной настройки цвета.
     * 
     * *** 
     * @type {string} 
     * @public
    */
    codeColor: '8;5',
    /**
     * ### codeColorReset
     * 
     * Код сброса цветов.
     * 
     * *** 
     * @type {string} 
     * @public
    */
    codeColorReset: '9',
    /**
     * ### codeColorForeground
     * 
     * Код цвета символов.
     * 
     * *** 
     * @type {string} 
     * @public
    */
    codeColorForeground: '3',
    /**
     * ### codeColorBackground
     * 
     * Код цвета фона.
     * 
     * *** 
     * @type {string} 
     * @public
    */
    codeColorBackground: '4',
    /**
     * ### codePosition
     *
     * Код позиции.
     *
     * ***
     * @type {string}
     * @public
    */
    codePosition: 'H',
    /**
     * ### codePositionEnd
     * 
     * Код сдвига курсора до конца строки с удалением последующих символов.
     * 
     * *** 
     * @type {string} 
     * @public
    */
    codePositionEnd: 'K',
    /**
     * ### codeUnderline
     * 
     * Код линии подчеркивания.
     * 
     * *** 
     * @type {} 
     * @public
    */
    codeUnderline: '4',
    /**
     * ### codeUnderlineReset
     * 
     * Код сброса линии подчеркивания.
     * 
     * *** 
     * @type {string} 
     * @public
    */
    codeUnderlineReset: '24',
    /**
     * ### codeBackspace
     * 
     * Код удаления символа со сдвигом.
     * 
     * *** 
     * @type {string} 
     * @public
    */
    codeBackspace: '\b',

    /**
     * ### colors
     * 
     * Цвета.
     * 
     * Представлены парой ключ-значение, где ключ - название цвета, а значение - его код.
     * 
     * *** 
     * @public
    */
    colors: {

        reset: -1,

        red: 160,
        redDark: 52,
        redLight: 196,

        sea: 37,
        seaDark: 30,
        seaLight: 43,

        blue: 19,
        blueDark: 17,
        blueLight: 21,

        cyan: 51,
        cyanDark: 45,
        cyanLight: 159,

        pink: 92,
        pinkDark: 91,
        pinkLight: 93,

        aqua: 44,
        aquaDark: 43,
        aquaLight: 80,

        gray: 243,
        grayDark: 240,
        grayLight: 254,

        green: 76,
        greenDark: 28,
        greenLight: 82,

        black: 0,

        white: 231,

        brown: 94,
        brownDark: 52,
        brownLight: 137,

        orange: 208,
        orangeDark: 202,
        orangeLight: 214,

        yellow: 226,
        yellowDark: 220,
        yellowLight: 228,

        magenta: 54,
        magentaDark: 53,
        magentaLight: 56,

    },

};

export default configAnsi;