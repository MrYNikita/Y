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
             * `Переключатель` кэширования путей.
             * 
             * При включенном состоянии `кэширует` и `запоминает` найденные `пути`.
            */
            doCache: true,
            /**
             * `Пути` проекта.
             * 
             * При кэшировании поиска путей, сохраняет найденные пути. Используется для оптимизации.
            */
            paths: [



            ],

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

    },
    log: {

        size: 100,
        visiable: 10,

        templates: {

            notice: `<t> - <m>`,
            notices: `<t> - <s> - <m>`,

        },

    },
    web: {

        html: {



        },
        server: {

            name: 'yserver',
            port: '8000',
            host: '127.0.0.1',

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

export const configWeb = config.web;
export const configHtml = configWeb.html;
export const configServer = configWeb.server;

export const configLog = config.log;
export const configNotice = configLog.notice;

export const configFunc = config.func;
export const configJect = config.ject;
export const configError = config.error;
export const configArray = config.array;
export const configString = config.string;