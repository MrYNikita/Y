import { YString } from "../../../string/YString/YString.mjs";
import { YElement } from "../../../web/html/element/YElement/YElement.mjs";
import { YElementStyle } from "../../../web/html/element/YElement/YElementStyle/YElementStyle.mjs";

const styleGlobal = new YElementStyle().append(

    ['*', {

        color: '#fff',
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

        width: '100%',
        height: '100%',
        position: 'absolute',

    }],
    ['html', {

        width: '24rem',
        height: '36rem',

    }],

    ['.size_over', {

        width: '100%',
        height: '100%',

    }],

    ['#panel', {

        gridArea: 'p',

    }],
    ['#window', {

        width: '98%',
        height: '98%',

    }],
    ['#layout', {

        top: `-55%`,
        left: `50%`,
        width: '98%',
        height: '85%',
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
    ['#header', {

        width: '5rem',
        height: '2rem',
        zIndex: 1,
        position: 'absolute',
        textAlign: 'center',
        borderRadius: '5px',
        backgroundColor: '#12293f',


    }],
    ['#backdrop', {



    }],
    ['#background', {

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: 'radial-gradient(at center, #7eb0df, transparent 5%), radial-gradient(at center, #7eb0df, #1d5c96)',

    }],

    ['.panel', {

        height: 'fixed',
        display: 'flex',
        flexWrap: 'wrap',
        paddingInline: '0.5em',
        justifyContent: 'center',

    }, '.size_over'],
    ['.panel_item', {

        width: '25%',
        height: 'auto',
        maxHeight: '100%',

    }],
    ['.layout', {


        zIndex: 1,
        display: `grid`,
        position: 'relative',
        boxShadow: 'inset 0px 0px 0.5em #000',
        transform: `translate(-50%, -43%)`,
        borderRadius: `5px`,
        backgroundColor: '#12293f',

    }],
    ['.window', {

        position: 'absolute',
        borderRadius: '5px',

    }],
    ['.backdrop', {

        width: '100%',
        height: '100%',
        position: 'relative',
        backgroundColor: `#01315e`,

    }],

    ['.panel_item:hover', {

        background: '#74ace1',

    }],

);

new YElement(new YString()

    .paste(`

        !div #background ^!body] <
            !div #window .window] <
                !div #header <
                    !h3 :Заголовок: /
                > /
                !div #backdrop .backdrop] /
                !div #layout .layout] <
                    !div #panel .panel] <

                    > /
                > /
            > /
        > /

    `)
    .get()

);