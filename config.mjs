import { YSection } from "./log/YLog/YNotice/YSection/YSection.mjs";

export const config = {

    /**
     * `Локаль` программы.
     * @type {string}
    */
    local: 'ru',
    /**
     * Логическое значение отладки.
     * Значение `true` запускает полную отладку.
     * Значение `false` игнорирует полную отладку.
     * Полная отладка - процесс для комплексной проверки работы нескольких ФЦ или классов.
     * В ходе полной отладки все ФЦ построенные на `YFunc` будут выполняться с уведомлениями о своих действиях.
     * Отсутствие данного режима уберет все процедуры категории `debug`.
     *
     * Для каждого модуля можно назначить его индивидуальный `debug` параметр, чтобы проверить исключительно единственный модуль.
    */
    debug: false,
    /**
     * `Состояние` строгого режима YModule.
     * @type {boolean}
    */
    strict: true,

};

export const configOS = {

    path: {

        /**
         * Логическое значение проведения отладки для данного модуля.
         * Подробнее о `debug` можно прочитать в корневом свойстве.
        */
        debug: false,
        /**
         * Параметр возврата полного пути до искомых файлов.
         * @type {boolean}
        */
        full: true,
        /**
         * `Пути` проекта.
         *
         * При кэшировании поиска путей, сохраняет найденные пути. Используется для оптимизации.
        */
        paths: [



        ],
        /**
         * `Переключатель` кэширования путей.
         *
         * При включенном состоянии `кэширует` и `запоминает` найденные `пути`.
        */
        doCache: true,
        /**
         * Расположение проекта.
         * Хранится для оптимизации.
         * @type {string?}
        */
        pathProject: null,

    },
    file: {

        /**
         * `Массив` защищенных `путей`.
         *
         * С такими `путями` нельзя проводить какие-либо операции `перемещения`, `переименования`, `удаления` и `записи`.
        */
        protects: [



        ],
        /**
         * `Разрешение` на чтение файла.
         * @type {boolean}
        */
        permissionRead: true,
        /**
         * `Разрешение` на перемещение файла.
         * @type {boolean}
        */
        permissionMove: true,
        /**
         * `Разрешение` на перезаписывание файла.
         * @type {boolean}
        */
        permissionWrite: true,
        /**
         * `Разрешение` на дополнение файла.
         * @type {boolean}
        */
        permissionAppend: true,
        /**
         * `Разрешение` на переименование файла.
         * @type {boolean}
        */
        permissionRename: true,
        /**
         * `Разрешение` на удаление файла.
         * @type {boolean}
        */
        permissionDelete: true,

    },
    stream: {

        label: 'ystream',

    },

};

export const configPath = configOS.path;
export const configFile = configOS.file;
export const configStream = configOS.stream;

export const configWeb = {

    html: {

        style: {

            template: {



            },

        },
        element: {

            create: {

                symbolId: '#',
                symbolType: '!',
                symbolClass: '.',
                defaultType: 'div',

            },

        },
        scriptsBody: [

            'global',

        ].map(s => s + '.mjs'),

    },
    server: {

        port: '8000',
        name: 'yserver',
        host: '127.0.0.1',
        /**
         * Время проверки соединений в милисекундах по умолчанию.
         * @type {number}
        */
        pingIntervalTime: 1000,

    },

};

export const configServer = configWeb.server;
export const configHtml = configWeb.html;
export const configHtmlStyle = configHtml.style;
export const configHtmlElement = configHtml.element;

export const configLog = {

    size: 100,
    visiable: 10,

    section: [

        { label: 'info', symbol: '*' },
        { label: 'error', symbol: 'x' },
        { label: 'warner', symbol: '!' },

    ],
    templates: {

        notice: `t - d`,
        section: `t - s - d`,

    },

};

export const configNotice = configLog.notice;

export const configFunc = {

    verify: {

        is: {

            notNumber: 'значение не является числом.',
            notString: 'значение не является строкой.',
            notObject: 'значения не является объектом.',
            notBoolean: 'значение не является логическим.',
            notSpecified: 'значение не соответсвует указанному.',

        },

    },

};

export const configJect = {

    basic: {



    },
    cursor: {

        fixed: true,

    },

};

export const configRept = {

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
    /**
     * Строка разделитель блоков.
     * Данная строка позволяет `YRept` разделить текст на группы блоков.
     * @type {string?}
    */
    determinant: `#y-<d-b>#`,

};

export const configError = {

    template: {



    },
    chain: {

        incident: 'ошибка в функциональной цепочке.'

    },
    verify: {

        incident: 'провал проверки.',

    },

};

export const configArray = {



};

export const configString = {

    loged: false,
    tabValue: ' '.repeat(4),
    insert: {

        /**
         * Левый ограничитель вставки.
         * @type {string}
        */
        borderL: `<`,
        /**
         * Правый ограничитель вставки.
         * @type {string}
        */
        borderR: `>`,

    },
    template: {



    },
    /**
     * Шаблоны по умолчанию.
     * Указанные здесь, они будут созданы для каждой строки.
     * @type {Array<[string, string, Array<[string, string, string]>]>}
    */
    templates: [

        ['l', '---\n'],
        ['pr', '<p>: <v>'],
        ['lh', '--- <h>\n', ['h', '']],
        ['bd', configRept.determinant],

    ],
    castToDate: {

        ru: '<d>.<m>.<y>-<hh>:<mm>:<ss>'

    },
    castToNumber: {

        spliter: '.',
        spliterRF: ',',

    },
    castToNumberPhone: {

        ru: '+x (xxx) xxx-xx-xx',
        kz: '+x (xxx) xxx-xx-xx',
        ua: '+xxx (xx) xxx-xx-xx',
        blr: '+xxx (xx) xxx-xx-xx',

    },

};

export const configYString = configString.ystring;

/**
 * @file config.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @copyright Yakhin Nikita Artemovich 2022
*/