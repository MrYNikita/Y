import { numberGetRandomFrac } from "../../../number/number.mjs";
import { YRegExp } from "../../../regexp/YRegExp/YRegExp.mjs";
import { stringCastToDate, stringFind, stringFindAll, stringPaste, stringRemove, stringReplace, stringReplaceAll } from "../../../string/string.mjs";
import { YString } from "../../../string/YString/YString.mjs";
import { YClient } from "../../../web/client/YClient/YClient.mjs";
import { elementAppend, elementREProperty, elementREString } from "../../../web/html/element/element.mjs";
import { YElement } from "../../../web/html/element/YElement/YElement.mjs";
import { YElementStyle } from "../../../web/html/element/YElement/YElementStyle/YElementStyle.mjs";
import { styleApplyY } from "../../../web/html/style/style.mjs";
import { YStyleAnimation } from "../../../web/html/style/YStyle/YStyleAnimation/YStyleAnimation.mjs";

// styleApplyY();

const styleLocal = new YElementStyle({ id: 'local' });
const styleGlobal = new YElementStyle({ id: 'global' });
const stylePrivate = new YElementStyle({ id: 'private' });

styleGlobal.append(

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

        width: '100%',
        height: '100%',
        position: 'absolute',

    }],

    ['.size_over', {

        width: '100%',
        height: '100%',

    }],

    ['#panel', {

        gridArea: 'p',

    }],
    ['#window', {

        left: '10px',
        top: '10px',
        width: '550px',
        height: '280px',

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
    ['#backdrop', {



    }],
    ['#background', {

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
    ['.window', {

        position: 'absolute',
        borderRadius: '5px',

    }],
    ['.backdrop', {

        position: 'absolute',
        backgroundColor: `#01315e`,

    }],

    ['.panel_item:hover', {

        background: '#74ace1',

    }],

    ['~animation', {

        to: {



        },

    }],

);

new YElement(new YString()

    .paste(`

        !div #background ^!body] <
            !div #window .window] <
                !div #backdrop .backdrop] <
                    !h3 #header /
                    !div #layout .layout] <
                        !div #panel .panel] <
                            !button #button .button panel_item] text=Кнопка type=button /
                        > /
                    > /
                > /
            > /
        > /

    `)
    .get()

);

console.log(styleGlobal.get(`~animation`));

// console.log(`

//     @keyframes recolor {

//         from {

//         }
//         to {

//         }

//     }
//     @keyframes rotate {

//         10% {

//         }
//         from {

//         }
//         to {

//         }

//     }


// `.match(/@keyframes \w+ {[^@]*/gms));