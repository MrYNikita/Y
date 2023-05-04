export const configString = {

    /**
     * ### tab
     *
     * Общая табуляция.
     *
     * ***
     * @type {string}
     * @public
    */
    tab: '\t',
    /**
     * ### space
     *
     * Общий заполнитель.
     *
     * ***
     * @type {string}
     * @public
    */
    space: ' ',
    /**
     * ### rowEnd
     *
     * Общий символ переноса строки.
     *
     * ***
     * @type {string}
     * @public
    */
    rowEnd: '\n',
    /**
     * ### modeSkip
     *
     * Общее значение режима пропуска.
     *
     * ***
     * @type {boolean}
     * @public
    */
    modeSkip: false,
    /**
     * ### skipValue
     *
     * Общее значение пропуска.
     *
     * ***
     * @type {string}
     * @public
    */
    skipValue: ' ',
    /**
     * ### rowVisIndex
     *
     * Общий индекс строки видимости.
     *
     * ***
     * @type {number}
     * @public
    */
    rowVisIndex: 0,
    /**
     * ### rowVisLimit
     *
     * Общее количество отображаемых строк.
     *
     * ***
     * @type {number}
     * @public
    */
    rowVisLimit: 40,
    /**
     * ### spliterPart
     * 
     * Разделитель частей.
     * 
     * *** 
     * @type {string} 
     * @public
    */
    spliterPart: '.',
    /**
     * ### spliterInsert
     * 
     * Разделитель частей вставок.
     * 
     * *** 
     * @type {string} 
     * @public
    */
    spliterInsert: '/',
    /**
     * ### insertSymbolPosition
     * 
     * Символ места вставки.
     * 
     * *** 
     * @type {string} 
     * @public
    */
    insertSymbolPosition: '.',
    /**
     * ### 
     * 
     * Разделитель множеств.
     * 
     * *** 
     * @type {string} 
     * @public
    */
    spliterDischarge: '_',

    /**
     * ### symbols
     * 
     * Символы.
     * 
     * ***  
     * @public
    */
    symbols: {

        math: {
            nu: 'µ',
            le: '≥',
            ld: '≤',
            pi: 'π',
            ne: '≠',
            inf: '∞',
            plusmin: '±',
        },
        table: {

            thin: ['│', '─', '┌', '┐', '└', '┘', '├', '┬', '┴', '┤', '┼'],
            double: ['║', '═', '╔', '╗', '╚', '╝', '╠', '╦', '╩', '╣', '╬'],
            dotted: ['┊', '┄'],
            
        },
        valute: {
            ru: '₽',
            li: '₺',
            br: 'Br',
            eu: '€',
            gr: '₴',
            dol: '$',
            uan: '¥',
            ten: '₸',
            fun: '£',
            rupi: 'Rs',
        },
    },

    /**
     * ### templates
     * 
     * Общие шаблоны.
     * 
     * *** 
     * @type {import('./template/class.mjs').YTemplate} 
     * @public
    */
    templates: [

        ['point', ' * >p: >v;\n'],

    ],
    /**
     * ### templatesDate
     * 
     * Шаблоны дат.
     * 
     * ***  
     * @public
    */
    templatesDate: {

        ru: 'd.m.y hh:mm:ss',
        jp: 'y.m.d hh:mm:ss',

    },
    /**
     * ### templatePhones
     * 
     * Шаблоны телефонных номеров.
     * 
     * *** 
     * @type {} 
     * @public
    */
    templatesPhone: {

        ru: '+7 (...) ...-..-..',
        kz: '+7 (...) ...-..-..',
        ua: '+380 (..) ...-..-..',
        us: '+1 ...-...-....',
        cn: '+86 (..) ....-....',
        blr: '+375 (..) ...-..-..',

    },

    /**
     * ### defaultTab
     *
     * Дефолт табуляция.
     *
     * ***
     * @type {string?}
     * @public
    */
    defaultTab: null,
    /**
     * ### defaultSpace
     *
     * Дефолт заполнитель.
     *
     * ***
     * @type {string?}
     * @public
    */
    defaultSpace: null,
    /**
     * ### defaultValues
     *
     * Дефолт значение.
     *
     * ***
     * @type {string?}
     * @public
    */
    defaultValues: '',
    /**
     * ### defaultPrefix
     *
     * Дефолт префикс.
     *
     * ***
     * @type {string?}
     * @public
    */
    defaultPrefix: null,
    /**
     * ### defaultRowEnd
     *
     * Дефолт конец строки.
     *
     * ***
     * @type {string?}
     * @public
    */
    defaultRowEnd: null,
    /**
     * ### defaultPostfix
     *
     *
     *
     * ***
     * @type {string?}
     * @public
    */
    defaultPostfix: null,
    /**
     * ### foregroundDefault
     * 
     * Дефолт символьный цвет.
     * 
     * *** 
     * @type {import("./ansi/module.mjs").ansiColorTMColors}
     * @public
    */
    foregroundDefault: 'white',
    /**
     * ### backgroundDefault
     * 
     * Дефолт фоновый цвет.
     * 
     * *** 
     * @type {import("./ansi/module.mjs").ansiColorTMColors}
     * @public
    */
    backgroundDefault: 'black',
    /**
     * ### defaultRowLength
     *
     * Дефолт предельное количество символов в линии.
     *
     * ***
     * @type {number?}
     * @public
    */
    defaultRowLength: null,
    /**
     * ### defaultRowVisIndex
     *
     * Дефолт индекс видимой страницы.
     *
     * ***
     * @type {number?}
     * @public
    */
    defaultRowVisIndex: null,
    /**
     * ### defaultRowVisLimit
     *
     * Дефолт предел отображаемых строк.
     *
     * ***
     * @type {number?}
     * @public
    */
    defaultRowVisLimit: null,

};

export default configString;