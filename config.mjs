export const config = {

    /**
     * `Состояние` строгого режима YModule.
     * @type {boolean}
    */
    strict: true,

    log: {

        error: {

            templates: {

                chain: '<n> - <m>',
    
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
    function: {

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

};

export const configLog = config.log;
export const configError = config.error;
export const configFunction = config.function;