import { jectFill } from "../../../../../ject/ject.mjs";
import { stringConvertCamelCaseToDelimetr } from "../../../../../string/string.mjs";

/**
 * @typedef {"accentColor"|"additiveSymbols"|"alignContent"|"alignItems"|"alignSelf"|"alignmentBaseline"|"all"|"animation"|"animationDelay"|"animationDirection"|"animationDuration"|"animationFillMode"|"animationIterationCount"|"animationName"|"animationPlayState"|"animationTimingFunction"|"appRegion"|"appearance"|"ascentOverride"|"aspectRatio"|"backdropFilter"|"backfaceVisibility"|"background"|"backgroundAttachment"|"backgroundBlendMode"|"backgroundClip"|"backgroundColor"|"backgroundImage"|"backgroundOrigin"|"backgroundPosition"|"backgroundPositionX"|"backgroundPositionY"|"backgroundRepeat"|"backgroundRepeatX"|"backgroundRepeatY"|"backgroundSize"|"basePalette"|"baselineShift"|"blockSize"|"border"|"borderBlock"|"borderBlockColor"|"borderBlockEnd"|"borderBlockEndColor"|"borderBlockEndStyle"|"borderBlockEndWidth"|"borderBlockStart"|"borderBlockStartColor"|"borderBlockStartStyle"|"borderBlockStartWidth"|"borderBlockStyle"|"borderBlockWidth"|"borderBottom"|"borderBottomColor"|"borderBottomLeftRadius"|"borderBottomRightRadius"|"borderBottomStyle"|"borderBottomWidth"|"borderCollapse"|"borderColor"|"borderEndEndRadius"|"borderEndStartRadius"|"borderImage"|"borderImageOutset"|"borderImageRepeat"|"borderImageSlice"|"borderImageSource"|"borderImageWidth"|"borderInline"|"borderInlineColor"|"borderInlineEnd"|"borderInlineEndColor"|"borderInlineEndStyle"|"borderInlineEndWidth"|"borderInlineStart"|"borderInlineStartColor"|"borderInlineStartStyle"|"borderInlineStartWidth"|"borderInlineStyle"|"borderInlineWidth"|"borderLeft"|"borderLeftColor"|"borderLeftStyle"|"borderLeftWidth"|"borderRadius"|"borderRight"|"borderRightColor"|"borderRightStyle"|"borderRightWidth"|"borderSpacing"|"borderStartEndRadius"|"borderStartStartRadius"|"borderStyle"|"borderTop"|"borderTopColor"|"borderTopLeftRadius"|"borderTopRightRadius"|"borderTopStyle"|"borderTopWidth"|"borderWidth"|"bottom"|"boxShadow"|"boxSizing"|"breakAfter"|"breakBefore"|"breakInside"|"bufferedRendering"|"captionSide"|"caretColor"|"clear"|"clip"|"clipPath"|"clipRule"|"color"|"colorInterpolation"|"colorInterpolationFilters"|"colorRendering"|"colorScheme"|"columnCount"|"columnFill"|"columnGap"|"columnRule"|"columnRuleColor"|"columnRuleStyle"|"columnRuleWidth"|"columnSpan"|"columnWidth"|"columns"|"contain"|"containIntrinsicBlockSize"|"containIntrinsicHeight"|"containIntrinsicInlineSize"|"containIntrinsicSize"|"containIntrinsicWidth"|"container"|"containerName"|"containerType"|"content"|"contentVisibility"|"counterIncrement"|"counterReset"|"counterSet"|"cursor"|"cx"|"cy"|"d"|"descentOverride"|"direction"|"display"|"dominantBaseline"|"emptyCells"|"fallback"|"fill"|"fillOpacity"|"fillRule"|"filter"|"flex"|"flexBasis"|"flexDirection"|"flexFlow"|"flexGrow"|"flexShrink"|"flexWrap"|"float"|"floodColor"|"floodOpacity"|"font"|"fontDisplay"|"fontFamily"|"fontFeatureSettings"|"fontKerning"|"fontOpticalSizing"|"fontPalette"|"fontSize"|"fontStretch"|"fontStyle"|"fontSynthesis"|"fontSynthesisSmallCaps"|"fontSynthesisStyle"|"fontSynthesisWeight"|"fontVariant"|"fontVariantCaps"|"fontVariantEastAsian"|"fontVariantLigatures"|"fontVariantNumeric"|"fontVariationSettings"|"fontWeight"|"forcedColorAdjust"|"gap"|"grid"|"gridArea"|"gridAutoColumns"|"gridAutoFlow"|"gridAutoRows"|"gridColumn"|"gridColumnEnd"|"gridColumnGap"|"gridColumnStart"|"gridGap"|"gridRow"|"gridRowEnd"|"gridRowGap"|"gridRowStart"|"gridTemplate"|"gridTemplateAreas"|"gridTemplateColumns"|"gridTemplateRows"|"height"|"hyphenateCharacter"|"hyphens"|"imageOrientation"|"imageRendering"|"inherits"|"initialValue"|"inlineSize"|"inset"|"insetBlock"|"insetBlockEnd"|"insetBlockStart"|"insetInline"|"insetInlineEnd"|"insetInlineStart"|"isolation"|"justifyContent"|"justifyItems"|"justifySelf"|"left"|"letterSpacing"|"lightingColor"|"lineBreak"|"lineGapOverride"|"lineHeight"|"listStyle"|"listStyleImage"|"listStylePosition"|"listStyleType"|"margin"|"marginBlock"|"marginBlockEnd"|"marginBlockStart"|"marginBottom"|"marginInline"|"marginInlineEnd"|"marginInlineStart"|"marginLeft"|"marginRight"|"marginTop"|"marker"|"markerEnd"|"markerMid"|"markerStart"|"mask"|"maskType"|"maxBlockSize"|"maxHeight"|"maxInlineSize"|"maxWidth"|"maxZoom"|"minBlockSize"|"minHeight"|"minInlineSize"|"minWidth"|"minZoom"|"mixBlendMode"|"negative"|"objectFit"|"objectPosition"|"objectViewBox"|"offset"|"offsetDistance"|"offsetPath"|"offsetRotate"|"opacity"|"order"|"orientation"|"orphans"|"outline"|"outlineColor"|"outlineOffset"|"outlineStyle"|"outlineWidth"|"overflow"|"overflowAnchor"|"overflowClipMargin"|"overflowWrap"|"overflowX"|"overflowY"|"overrideColors"|"overscrollBehavior"|"overscrollBehaviorBlock"|"overscrollBehaviorInline"|"overscrollBehaviorX"|"overscrollBehaviorY"|"pad"|"padding"|"paddingBlock"|"paddingBlockEnd"|"paddingBlockStart"|"paddingBottom"|"paddingInline"|"paddingInlineEnd"|"paddingInlineStart"|"paddingLeft"|"paddingRight"|"paddingTop"|"page"|"pageBreakAfter"|"pageBreakBefore"|"pageBreakInside"|"pageOrientation"|"paintOrder"|"perspective"|"perspectiveOrigin"|"placeContent"|"placeItems"|"placeSelf"|"pointerEvents"|"position"|"prefix"|"quotes"|"r"|"range"|"resize"|"right"|"rotate"|"rowGap"|"rubyPosition"|"rx"|"ry"|"scale"|"scrollBehavior"|"scrollMargin"|"scrollMarginBlock"|"scrollMarginBlockEnd"|"scrollMarginBlockStart"|"scrollMarginBottom"|"scrollMarginInline"|"scrollMarginInlineEnd"|"scrollMarginInlineStart"|"scrollMarginLeft"|"scrollMarginRight"|"scrollMarginTop"|"scrollPadding"|"scrollPaddingBlock"|"scrollPaddingBlockEnd"|"scrollPaddingBlockStart"|"scrollPaddingBottom"|"scrollPaddingInline"|"scrollPaddingInlineEnd"|"scrollPaddingInlineStart"|"scrollPaddingLeft"|"scrollPaddingRight"|"scrollPaddingTop"|"scrollSnapAlign"|"scrollSnapStop"|"scrollSnapType"|"scrollbarGutter"|"shapeImageThreshold"|"shapeMargin"|"shapeOutside"|"shapeRendering"|"size"|"sizeAdjust"|"speak"|"speakAs"|"src"|"stopColor"|"stopOpacity"|"stroke"|"strokeDasharray"|"strokeDashoffset"|"strokeLinecap"|"strokeLinejoin"|"strokeMiterlimit"|"strokeOpacity"|"strokeWidth"|"suffix"|"symbols"|"syntax"|"system"|"tabSize"|"tableLayout"|"textAlign"|"textAlignLast"|"textAnchor"|"textCombineUpright"|"textDecoration"|"textDecorationColor"|"textDecorationLine"|"textDecorationSkipInk"|"textDecorationStyle"|"textDecorationThickness"|"textEmphasis"|"textEmphasisColor"|"textEmphasisPosition"|"textEmphasisStyle"|"textIndent"|"textOrientation"|"textOverflow"|"textRendering"|"textShadow"|"textSizeAdjust"|"textTransform"|"textUnderlineOffset"|"textUnderlinePosition"|"top"|"touchAction"|"transform"|"transformBox"|"transformOrigin"|"transformStyle"|"transition"|"transitionDelay"|"transitionDuration"|"transitionProperty"|"transitionTimingFunction"|"translate"|"unicodeBidi"|"unicodeRange"|"userSelect"|"userZoom"|"vectorEffect"|"verticalAlign"|"visibility"|"webkitAlignContent"|"webkitAlignItems"|"webkitAlignSelf"|"webkitAnimation"|"webkitAnimationDelay"|"webkitAnimationDirection"|"webkitAnimationDuration"|"webkitAnimationFillMode"|"webkitAnimationIterationCount"|"webkitAnimationName"|"webkitAnimationPlayState"|"webkitAnimationTimingFunction"|"webkitAppRegion"|"webkitAppearance"|"webkitBackfaceVisibility"|"webkitBackgroundClip"|"webkitBackgroundOrigin"|"webkitBackgroundSize"|"webkitBorderAfter"|"webkitBorderAfterColor"|"webkitBorderAfterStyle"|"webkitBorderAfterWidth"|"webkitBorderBefore"|"webkitBorderBeforeColor"|"webkitBorderBeforeStyle"|"webkitBorderBeforeWidth"|"webkitBorderBottomLeftRadius"|"webkitBorderBottomRightRadius"|"webkitBorderEnd"|"webkitBorderEndColor"|"webkitBorderEndStyle"|"webkitBorderEndWidth"|"webkitBorderHorizontalSpacing"|"webkitBorderImage"|"webkitBorderRadius"|"webkitBorderStart"|"webkitBorderStartColor"|"webkitBorderStartStyle"|"webkitBorderStartWidth"|"webkitBorderTopLeftRadius"|"webkitBorderTopRightRadius"|"webkitBorderVerticalSpacing"|"webkitBoxAlign"|"webkitBoxDecorationBreak"|"webkitBoxDirection"|"webkitBoxFlex"|"webkitBoxOrdinalGroup"|"webkitBoxOrient"|"webkitBoxPack"|"webkitBoxReflect"|"webkitBoxShadow"|"webkitBoxSizing"|"webkitClipPath"|"webkitColumnBreakAfter"|"webkitColumnBreakBefore"|"webkitColumnBreakInside"|"webkitColumnCount"|"webkitColumnGap"|"webkitColumnRule"|"webkitColumnRuleColor"|"webkitColumnRuleStyle"|"webkitColumnRuleWidth"|"webkitColumnSpan"|"webkitColumnWidth"|"webkitColumns"|"webkitFilter"|"webkitFlex"|"webkitFlexBasis"|"webkitFlexDirection"|"webkitFlexFlow"|"webkitFlexGrow"|"webkitFlexShrink"|"webkitFlexWrap"|"webkitFontFeatureSettings"|"webkitFontSmoothing"|"webkitHighlight"|"webkitHyphenateCharacter"|"webkitJustifyContent"|"webkitLineBreak"|"webkitLineClamp"|"webkitLocale"|"webkitLogicalHeight"|"webkitLogicalWidth"|"webkitMarginAfter"|"webkitMarginBefore"|"webkitMarginEnd"|"webkitMarginStart"|"webkitMask"|"webkitMaskBoxImage"|"webkitMaskBoxImageOutset"|"webkitMaskBoxImageRepeat"|"webkitMaskBoxImageSlice"|"webkitMaskBoxImageSource"|"webkitMaskBoxImageWidth"|"webkitMaskClip"|"webkitMaskComposite"|"webkitMaskImage"|"webkitMaskOrigin"|"webkitMaskPosition"|"webkitMaskPositionX"|"webkitMaskPositionY"|"webkitMaskRepeat"|"webkitMaskRepeatX"|"webkitMaskRepeatY"|"webkitMaskSize"|"webkitMaxLogicalHeight"|"webkitMaxLogicalWidth"|"webkitMinLogicalHeight"|"webkitMinLogicalWidth"|"webkitOpacity"|"webkitOrder"|"webkitPaddingAfter"|"webkitPaddingBefore"|"webkitPaddingEnd"|"webkitPaddingStart"|"webkitPerspective"|"webkitPerspectiveOrigin"|"webkitPerspectiveOriginX"|"webkitPerspectiveOriginY"|"webkitPrintColorAdjust"|"webkitRtlOrdering"|"webkitRubyPosition"|"webkitShapeImageThreshold"|"webkitShapeMargin"|"webkitShapeOutside"|"webkitTapHighlightColor"|"webkitTextCombine"|"webkitTextDecorationsInEffect"|"webkitTextEmphasis"|"webkitTextEmphasisColor"|"webkitTextEmphasisPosition"|"webkitTextEmphasisStyle"|"webkitTextFillColor"|"webkitTextOrientation"|"webkitTextSecurity"|"webkitTextSizeAdjust"|"webkitTextStroke"|"webkitTextStrokeColor"|"webkitTextStrokeWidth"|"webkitTransform"|"webkitTransformOrigin"|"webkitTransformOriginX"|"webkitTransformOriginY"|"webkitTransformOriginZ"|"webkitTransformStyle"|"webkitTransition"|"webkitTransitionDelay"|"webkitTransitionDuration"|"webkitTransitionProperty"|"webkitTransitionTimingFunction"|"webkitUserDrag"|"webkitUserModify"|"webkitUserSelect"|"webkitWritingMode"|"whiteSpace"|"widows"|"width"|"willChange"|"wordBreak"|"wordSpacing"|"wordWrap"|"writingMode"|"x"|"y"|"zIndex"|"zoom"} TStyleProperties
 * @typedef TBStyleSet
 * @prop {any} _
 * @typedef {DStyleSet&TBStyleSet} TStyleSet
*/

class SStyleSet {



};
class DStyleSet extends SStyleSet {

    /**
     * Значение.
     * @type {string|number|Array<string|number>}
    */
    value;
    /**
     * Свойство.
     * @type {TStyleProperties}
    */
    property;

};
class FStyleSet extends DStyleSet {

    /**
     *
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *  @arg {TStyleSet|TStyleProperties} t
    */
    constructor(t = {}) {

        t = FStyleSet.#before(arguments);

        FStyleSet.#deceit(t);

        super(t);

        FStyleSet.#create.apply(this, [t]);

    };

    /** @arg {TStyleSet} t */
    static #before(t) {

        if (t?.length === 1 && t[0]?.constructor === Object) {

            return t[0];

        } else if (t?.length) {

            const r = {};

            switch (t.length) {

                case 2: r.value = t[1];
                case 1: r.property = t[0];

            };

            return r;

        } else return {};

    };
    /** @arg {TStyleSet} t @this {YStyleSet} */
    static #deceit(t) {

        try {

            FStyleSet.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @arg {TStyleSet} t @this {YStyleSet} */
    static #verify(t) {

        const {



        } = t;

        FStyleSet.#handle(t);

    };
    /** @arg {TStyleSet} t @this {YStyleSet} */
    static #handle(t) {

        if (t.property) t.property = stringConvertCamelCaseToDelimetr(t.property);

    };
    /** @arg {TStyleSet} t @this {YStyleSet} */
    static #create(t) {

        const {



        } = t;

        jectFill(this, t);



    };

};

/**
 * Класс установок стилей.
 *
 * Данный класс предназначен для создания заготовленных `css` свойств, которые могут быть использованы в стилях.
 * - Тип `SDFY-2.0`
 * - Версия `0.0.0`
 * - Цепочка `BDVHC`
*/
export class YStyleSet extends FStyleSet {

    /**
     * Метод получения свойства.
     * - Версия `0.0.0`
    */
    get() {

        return `${this.property}: ${this.value};`;

    };

};