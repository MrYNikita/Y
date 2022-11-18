export const config = {

    /**
     * `Локаль` программы.
     * @type {string}
    */
    local: 'ru',
    /**
     * `Состояние` строгого режима YModule.
     * @type {boolean}
    */
    strict: true,

    os: {

        path: {

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
             * @type {string}
            */
            pathProject: '',

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

    },
    log: {

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

    },
    web: {

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

    },
    ject: {

    },
    func: {

        verify: {

            is: {

                notNumber: 'значение не является числом.',
                notString: 'значение не является строкой.',
                notObject: 'значения не является объектом.',
                notBoolean: 'значение не является логическим.',
                notSpecified: 'значение не соответсвует указанному.',

            },

        },

    },
    error: {

        template: {



        },
        chain: {

            incident: 'ошибка в функциональной цепочке.'

        },
        verify: {

            incident: 'провал проверки.',

        },

    },
    array: {

    },
    string: {

        ystring: {

            fixed: true,
            loged: false,
            tabValue: ' '.repeat(4),
            cursorRepeated: true,
            templates: [

                { label: 'line', value: '---\n' },

            ],

        },
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

    },
    number: {



    },

};

export const configOS = config.os;
export const configPath = config.os.path;
export const configFile = config.os.file;
export const configStream = config.os.stream;

export const configWeb = config.web;
export const configServer = configWeb.server;

export const configHtml = configWeb.html;
export const configHtmlStyle = configHtml.style;
export const configHtmlElement = configHtml.element;

export const configLog = config.log;
export const configNotice = configLog.notice;

export const configFunc = config.func;
export const configJect = config.ject;
export const configError = config.error;
export const configArray = config.array;

export const configString = config.string;
export const configYString = configString.ystring;