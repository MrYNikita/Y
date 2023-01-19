export const config = {

    /**
     * Локаль.
     * - Доступные значения:
     * `ru`,
     * `en`
     * @type {keyof [
     * "ru",
     * "en",
     * ]}
    */
    local: 'ru',
    /**
     * Режим отладки.
     * @type {boolean}
    */
    debug: false,
    /**
     * Режим строгости.
     *
     * При значении `true` и возникновении ошибок в работе ФЦ и КЦ,
     * завершет работу программы соответсвующей ошибкой.
     *
     * При значении `false` и возникновении ошибок в работе ФЦ и КЦ,
     * `не являющихся критическими`, продолжает исполнение, пытаясь избежать ошибок.
     * @type {boolean}
    */
    strict: true,

};

export const configJect = {



};
export const configYJect = {

    /**
     * Режим журналирования.
     *
     * При значении `true` создает для экземпляров класса `YJect`
     * объекты протоколирования автоматически.
     * @type {boolean}
    */
    log: true,
    /**
     * Датирование.
     *
     * При значении `true` автоматически будет отмечаться дата создания экземпляра.
     *
     * При значении `false` дата не будет отмечаться автоматически.
     * @type {boolean}
    */
    date: true,
    /**
     * Отчетность.
     *
     * При значении `true` автоматически создает отчеты для экземпляров класса.
     *
     * При значении `false` отчеты не будут создаваться атоматически.
     * @type {boolean}
    */
    report: true,

};

export const configYTerminal = {

    /**
     * Размер терминала по умолчанию.
     * @type {[number,number]}
    */
    sizes: [120, 30],
    /**
     * Символ свободного пространства.
     * @type {string}
    */
    symbolSpace: ' ',

};
export const configYRept = {

    /**
     * Строка конца отчета.
     * Данная строка вставляется в конец любого отчета, отделяя его от остального текста.
     * @type {string?}
    */
    end: `\n###`,
    /**
     * Строка начала отчета.
     * Данная строка вставляется в начало любого отчета, отделяя его от остального текста.
     * @type {string?}
    */
    start: `###\n`,

    prefix: `l`,
    postfix: ``,

};
export const configYList = {

    /**
     * Общая размерность.
     * @type {number}
    */
    dimension: 1,
    /**
     * Общая фиксированность курсоров.
     * @type {boolean}
    */
    cursorsFixed: false,

};
export const configYCache = {

};
export const configYCursor = {



};
export const configYInsert = {

    /**
     * Левый ограничитель строчной вставки.
     * @type {string}
    */
    borderL: `<`,
    /**
     * Правый ограничитель строчной вставки.
     * @type {string}
    */
    borderR: `>`,

};

export const configYLog = {

    /**
     * Видимость.
     *
     * Определяет количество первых записей в журнале доступных для отображения.
     * @type {number}
    */
    vis: 10,
    /**
     * Секции по умолчанию.
     *
     * Данные секции будут определены для каждого экземпляра журнала.
    */
    section: [

        { label: 'info', symbol: '*' },
        { label: 'error', symbol: 'x' },
        { label: 'warner', symbol: '!' },

    ],

};
export const configYNotice = {

    /**
     * Шаблон записи уведомления по умолчанию.
     * @type {string}
    */
    template: `${configYInsert.borderL}t${configYInsert.borderR} - ${configYInsert.borderL}d${configYInsert.borderR}`,

};
export const configYSection = {

    /**
     * Шаблон записей секции по умолчанию.
     * @type {string}
    */
    template: `${configYInsert.borderL}t${configYInsert.borderR} - ${configYInsert.borderL}s${configYInsert.borderR} - ${configYInsert.borderL}d${configYInsert.borderR}`,

};

export const configDate = {

};
export const configYDate = {

};

export const configOS = {

};
export const configOSDir = {



};
export const configOSPath = {

    /**
     * Режим поиска полного пути.
     *
     * При значении `true`, будет возвращать полный путь до искомого файла.
     * @type {boolean}
    */
    full: true,
    /**
     * Режим частной отладки.
     *
     * Активирует режим отладки для указанного модуля.
     * @type {boolean}
    */
    debug: false,
    /**
     * Кеширование.
     *
     * При значении `true`, кеширует все найденные пути в файл `cache.json`,
     * ускоряя поиск файлов в проекте.
     * @type {boolean}
    */
    cache: true,
    /**
     * Режим проверки кэша после действия.
     *
     * При значении `true` кэш будет проверяться только после действий,
     * связанных с файлами и инициированных пользователем. Также будет отменена
     * интервальная проверка.
     *
     * Если будет обнаружено несоответствие, то кэш будет обновлен.
     * @type {boolean}
    */
    cacheCheckAction: true,
    /**
     * Интервал проверки кэша.
     *
     * При активации кэширования, проверяет достоверность кэша
     * каждые указанные в значении интервалы.
     *
     * Если будет обнаружено несоответствие, то кэш будет обнавлен.
     *
     * - Мера: `ms`
    */
    cacheCheckInterval: 1000,

};
export const configOSFile = {

    /**
     * Режим частной отладки.
     *
     * Активирует режим отладки для указанного модуля.
     * @type {boolean}
    */
    debug: false,
    /**
     * Массив защищенных путей.
     *
     * Данные пути являются защищенными.
     * Это означает, что файлы по данным путям нельзя удалять, перемещать, переименовывать и изменять.
     * @type {string[]}
    */
    protects: [



    ],

    /**
     * Режим чтения.
     *
     * При значении `true` разрешает считывание файлов.
     * @type {boolean}
    */
    permissionRead: true,
    /**
     * Режим перемещения.
     *
     * При значении `true` разрешает перемещать файлы.
     * @type {boolean}
    */
    permissionMove: true,
    /**
     * Режим изменения.
     *
     * При значении `true` разрешает имзенять файлы.
     * @type {boolean}
    */
    permissionChange: true,
    /**
     * Режим переименования.
     *
     * При значении `true` разрешает изменять имена файлов.
     * @type {boolean}
    */
    permissionRename: true,
    /**
     * Режим удаления.
     *
     * При значении `true` разрешает удаление файлов.
     * @type {boolean}
    */
    permissionDelete: true,

};
export const configOSYDir = {

};
export const configOSYFile = {

};

export const configError = {



};

export const configArray = {

};
export const configYArray = {



};

export const configNumber = {



};
export const configYNumber = {



};

export const configString = {

    /**
     * Стиль Y строк.
     * @type {string}
    */
    style: 'classic',
    /**
     * Строка табуляции.
     *
     * Определяет строку табуляции.
     * @type {string}
    */
    tabValue: ' '.repeat(4),

    styles: {

        classic: {

            colorF: ['c', 0, 0],
            colorB: ['b', 0, 1],

        },
        vampire: {

            colorF: ['r', 0, 0],
            colorB: ['bl', 0, 1],

        },

    },

    insert: {

        /**
         * Разделитель.
         *
         * Определяет знак-разделитель для разбиения строки вставки на значения вставки.
         * @type {string}
        */
        delimiter: '-',
        /**
         * Значение по умолчанию.
         *
         * Определяет значение, которое будет использоваться для тех вставок, в которых не было указанно значение замещения.
         * @type {string}
        */
        defaultValue: '',

    },
    getColor: {

        /**
         * Объект-карта цветов.
         * Ключ - название цвета, а значение - его код.
        */
        colors: {

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

    },
    castToDate: {

        ru: '<d>.<m>.<y>-<hh>:<mm>:<ss>',

    },
    castToNumber: {

        spliterPart: {
            ru: '.',
            en: ',',
        },
        spliterDischarge: ' ',

    },
    castToNumberPhone: {

        ru: '+x (xxx) xxx-xx-xx',
        kz: '+x (xxx) xxx-xx-xx',
        ua: '+xxx (xx) xxx-xx-xx',
        blr: '+xxx (xx) xxx-xx-xx',

    },

};
export const configYString = {

    /**
     * Режим частного журналирования.
     * @type {boolean}
    */
    log: true,
    /**
     * Режим частной отчетности.
     * @type {boolean}
    */
    report: true,
    /**
     * Шаблоны по умолчанию.
     *
     * Указанные здесь шаблоны будут размещены в общедоступных шаблонах.
     * @type {Array<[string, string, Array<[string, string, string]>]>}
    */
    templates: [

        ['pr', `${configYInsert.borderL}p${configYInsert.borderR}: ${configYInsert.borderL}r${configYInsert.borderR}`],
        ['lh', `--- ${configYInsert.borderL}h${configYInsert.borderR}\n`, ['h', '']],

    ],

};
export const configStringANSI = {

    /**
     * Эндер.
     * @type {string}
    */
    end: `m`,
    /**
     * Стартер.
     * @type {string}
    */
    start: `\x1b[`,
    /**
     * Разделитель.
     * @type {string}
    */
    delimetr: `;`,


};
export const configStringANSIColor = {

    /**
     * Объект-карта цветов.
     * Ключ - название цвета, а значение - его код.
    */
    colors: {

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
    /**
     * Значение сброса цветов.
     * @type {number}
    */
    valueReset: 9,
    /**
     * Вставка точечной настройки цвета.
     * @type {string}
    */
    valueOption: '8;5',
    /**
     * Значение цвета фона.
     * @type {number}
    */
    valueBackground: 4,
    /**
     * Значение цвета символов.
     * @type {number}
    */
    valueForeground: 3,

};
export const configStringANSIUnderline = {


    value: 4,
    valueReset: 24,

};

export const configRegExp = {

    /**
     * Флаги регулярных выражений.
     * @type {'gimsuy'}
    */
    flags: 'gimsuy',

};
export const configYRegExp = {



};

export const configWeb = {



};
export const configWebFetch = {

};
export const configWebClient = {

};
export const configWebYClient = {

};
export const configWebServer = {



};
export const configWebYServer = {

    /**
     * Время проверки соединений в милисекундах по умолчанию.
     * @type {number}
    */
    pingIntervalTime: 1000,

};

export const configWebHTML = {



};
export const configWebYHTML = {

    /**
     * Массив скриптов, подключаемых к телу `html` документа.
     * @type {string[]}
    */
    bodyScripts: [

        'global',

    ],

};
export const configWebYHTMLStyle = {

};
export const configWebYHTMLYStyle = {

};
export const configWebYHTMLElement = {

    type: 'div',

    symbol: {

        id: '#',
        type: '!',
        class: '.',
        animation: '~',

    },

};
export const configWebYHTMLYElement = {

};