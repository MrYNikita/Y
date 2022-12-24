import { YString } from "../../../string/YString/YString.mjs";
import { YElement } from "../../../web/html/element/YElement/YElement.mjs";
import { YElementStyle } from "../../../web/html/element/YElement/YElementStyle/YElementStyle.mjs";

const yesg = new YElementStyle({ id: 'global' }).append(

    ['*', {

        width: 'inherit',
        border: 'none',
        height: 'inherit',
        margin: '0',
        padding: '0',
        outline: 'none',
        overflow: 'hidden',
        boxSizing: 'border-box',
        fontFamily: '\'Courier New\', Courier, monospace',

    }],
    ['body', {

        width: '380px',
        height: '550px',

    }],

    ['.window', {

        borderRadius: '5px',

    }],
    ['.size_over', {

        width: '100%',
        height: '100%',

    }],
    ['.backdrop', {

        position: 'absolute',
        backgroundColor: `#01315e`,

    }],
    ['.panel', {

        height: 'fixed',
        display: 'flex',
        flexWrap: 'wrap',
        paddingInline: '0.5em',
        justifyContent: 'center',

    }],
    ['.panel_item:hover', {

        background: '#74ace1',

    }],
    ['.layout', {

        top: `50%`,
        left: `50%`,
        width: '98%',
        height: '85%',
        zIndex: 1,
        display: `grid`,
        position: 'absolute',
        boxShadow: 'inset 0px 0px 0.5em #000',
        transform: `translate(-50%, -43%)`,
        borderRadius: `5px`,
        backgroundColor: '#12293f',

    }],

    ['#panel', {

        gridArea: 'p',

    }],
    ['#layout', {

        gridTemplateAreas: new YString()

            .changePrefix(`'`)
            .changePostfix(`'`)
            .paste(

                'l',
                'l',
                'l',
                'i',
                'p',
                '.',
                '.',

            )
            .get()

    }],
    ['#background', {

        backgroundImage: 'radial-gradient(at center, #7eb0df, transparent 5%), radial-gradient(at center, #7eb0df, #1d5c96)',

    }],

).formatLines();

const yeBackground = new YElement(`

    !div #background .size_over] ^!body] <
        !div #window .size_over] <
            !div #backdrop .backdrop size_over] <
                !div #layout .layout] <
                    !div #panel .panel] <
                        !button #button .button panel_item] text=Поиск_с_ожиданием type=button title=Функция_поиска_элемента_с_ожиданием_по_указанному_таймингу /
                    > /
                > /
            > /
        > /
    > /

`);