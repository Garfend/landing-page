(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-compose-runtime-runtime.js', './html-html-core.js', './kobweb-frontend-browser-ext.js', './kobweb-frontend-kobweb-compose.js', './kobweb-frontend-compose-html-ext.js', './kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./html-html-core.js'), require('./kobweb-frontend-browser-ext.js'), require('./kobweb-frontend-kobweb-compose.js'), require('./kobweb-frontend-compose-html-ext.js'), require('./kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-foundation'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kobweb-frontend-silk-foundation'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-foundation'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'kobweb-frontend-silk-foundation'.");
    }
    if (typeof globalThis['html-html-core'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-foundation'. Its dependency 'html-html-core' was not found. Please, check whether 'html-html-core' is loaded prior to 'kobweb-frontend-silk-foundation'.");
    }
    if (typeof globalThis['kobweb-frontend-browser-ext'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-foundation'. Its dependency 'kobweb-frontend-browser-ext' was not found. Please, check whether 'kobweb-frontend-browser-ext' is loaded prior to 'kobweb-frontend-silk-foundation'.");
    }
    if (typeof globalThis['kobweb-frontend-kobweb-compose'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-foundation'. Its dependency 'kobweb-frontend-kobweb-compose' was not found. Please, check whether 'kobweb-frontend-kobweb-compose' is loaded prior to 'kobweb-frontend-silk-foundation'.");
    }
    if (typeof globalThis['kobweb-frontend-compose-html-ext'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-foundation'. Its dependency 'kobweb-frontend-compose-html-ext' was not found. Please, check whether 'kobweb-frontend-compose-html-ext' is loaded prior to 'kobweb-frontend-silk-foundation'.");
    }
    if (typeof kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-foundation'. Its dependency 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat' was not found. Please, check whether 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat' is loaded prior to 'kobweb-frontend-silk-foundation'.");
    }
    globalThis['kobweb-frontend-silk-foundation'] = factory(typeof globalThis['kobweb-frontend-silk-foundation'] === 'undefined' ? {} : globalThis['kobweb-frontend-silk-foundation'], globalThis['kotlin-kotlin-stdlib'], globalThis['compose-multiplatform-core-compose-runtime-runtime'], globalThis['html-html-core'], globalThis['kobweb-frontend-browser-ext'], globalThis['kobweb-frontend-kobweb-compose'], globalThis['kobweb-frontend-compose-html-ext'], kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_html_html_core, kotlin_com_varabyte_kobweb_browser_ext, kotlin_com_varabyte_kobweb_kobweb_compose, kotlin_com_varabyte_kobweb_compose_html_ext, kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Unit_instance = kotlin_kotlin.$_$.d2;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h1;
  var THROW_CCE = kotlin_kotlin.$_$.e9;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a1;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.q;
  var Style = kotlin_org_jetbrains_compose_html_html_core.$_$.t3;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b1;
  var StyleSheet = kotlin_org_jetbrains_compose_html_html_core.$_$.e1;
  var VOID = kotlin_kotlin.$_$.e;
  var StyleSheet_init_$Init$ = kotlin_org_jetbrains_compose_html_html_core.$_$.a;
  var protoOf = kotlin_kotlin.$_$.x6;
  var initMetadataForObject = kotlin_kotlin.$_$.l6;
  var initMetadataForClass = kotlin_kotlin.$_$.g6;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.j;
  var mutableStateListOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x;
  var CompositionLocalProvider = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a;
  var toString = kotlin_kotlin.$_$.z6;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.g1;
  var staticCompositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y;
  var invokeLater = kotlin_com_varabyte_kobweb_browser_ext.$_$.b;
  var asList = kotlin_kotlin.$_$.w9;
  var toSet = kotlin_kotlin.$_$.u4;
  var asSequence = kotlin_kotlin.$_$.v2;
  var flatMap = kotlin_kotlin.$_$.n7;
  var filter = kotlin_kotlin.$_$.m7;
  var Sequence = kotlin_kotlin.$_$.l7;
  var isInterface = kotlin_kotlin.$_$.p6;
  var map = kotlin_kotlin.$_$.o7;
  var toSet_0 = kotlin_kotlin.$_$.q7;
  var subtract = kotlin_kotlin.$_$.n4;
  var sorted = kotlin_kotlin.$_$.m4;
  var joinToString = kotlin_kotlin.$_$.o3;
  var trimIndent = kotlin_kotlin.$_$.q8;
  var initMetadataForCompanion = kotlin_kotlin.$_$.h6;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.q;
  var KtMap = kotlin_kotlin.$_$.n2;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.d1;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.i;
  var listOf = kotlin_kotlin.$_$.v3;
  var emptyList = kotlin_kotlin.$_$.d3;
  var listOf_0 = kotlin_kotlin.$_$.w3;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.y;
  var charSequenceLength = kotlin_kotlin.$_$.w5;
  var Companion_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b4;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.n9;
  var mapCapacity = kotlin_kotlin.$_$.x3;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.p;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.p1;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.s1;
  var trimMargin = kotlin_kotlin.$_$.r8;
  var media = kotlin_org_jetbrains_compose_html_html_core.$_$.o2;
  var layer = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.c1;
  var isNotEmpty = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.z;
  var mutableListOf = kotlin_kotlin.$_$.a4;
  var plus = kotlin_kotlin.$_$.d4;
  var initMetadataForInterface = kotlin_kotlin.$_$.j6;
  var ComparableStyleScope = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.b;
  var toStyles = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l3;
  var equals = kotlin_kotlin.$_$.z5;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.w2;
  var substringAfterLast = kotlin_kotlin.$_$.j8;
  var endsWith = kotlin_kotlin.$_$.w7;
  var copyToArray = kotlin_kotlin.$_$.b3;
  var classNames = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.w;
  var getValue = kotlin_kotlin.$_$.m3;
  var toList = kotlin_kotlin.$_$.r4;
  var objectCreate = kotlin_kotlin.$_$.w6;
  var getStringHashCode = kotlin_kotlin.$_$.e6;
  var isBlank = kotlin_kotlin.$_$.y7;
  var first = kotlin_kotlin.$_$.x7;
  var Char = kotlin_kotlin.$_$.v8;
  var ComparableAttrsScope_init_$Create$ = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.r2;
  var toAttrs = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k3;
  var setOf = kotlin_kotlin.$_$.j4;
  var From_getInstance = kotlin_org_jetbrains_compose_html_html_core.$_$.g;
  var to = kotlin_kotlin.$_$.u9;
  var To_getInstance = kotlin_org_jetbrains_compose_html_html_core.$_$.h;
  var hashCode = kotlin_kotlin.$_$.f6;
  var StyleScopeBuilder = kotlin_org_jetbrains_compose_html_html_core.$_$.c1;
  var CSSKeyframeRuleDeclaration = kotlin_org_jetbrains_compose_html_html_core.$_$.u;
  var CSSKeyframesRuleDeclaration = kotlin_org_jetbrains_compose_html_html_core.$_$.v;
  var distinct = kotlin_kotlin.$_$.c3;
  var lazy = kotlin_kotlin.$_$.m9;
  var enumEntries = kotlin_kotlin.$_$.o5;
  var Enum = kotlin_kotlin.$_$.x8;
  var GenericTag = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.h2;
  var DisposableEffect = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j;
  var CSSMediaRuleDeclaration = kotlin_org_jetbrains_compose_html_html_core.$_$.y;
  var Raw = kotlin_org_jetbrains_compose_html_html_core.$_$.x;
  var numberToDouble = kotlin_kotlin.$_$.u6;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.x2;
  var removeSuffix = kotlin_kotlin.$_$.e8;
  var toIntOrNull = kotlin_kotlin.$_$.n8;
  var plus_0 = kotlin_kotlin.$_$.e4;
  var toMutableList = kotlin_kotlin.$_$.s4;
  var joinToString_0 = kotlin_kotlin.$_$.p3;
  var getKClass = kotlin_kotlin.$_$.c;
  var get_cssRem = kotlin_org_jetbrains_compose_html_html_core.$_$.q1;
  var startsWith = kotlin_kotlin.$_$.i8;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.r;
  var MediaFeature = kotlin_org_jetbrains_compose_html_html_core.$_$.w;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.k1;
  var produceState = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u;
  var CoroutineImpl = kotlin_kotlin.$_$.m5;
  var ProduceStateScope = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l;
  var EventListener = kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.$_$.d;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.x4;
  var throwKotlinNothingValueException = kotlin_kotlin.$_$.r9;
  var initMetadataForLambda = kotlin_kotlin.$_$.k6;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t;
  var KProperty0 = kotlin_kotlin.$_$.i7;
  var getPropertyCallableRef = kotlin_kotlin.$_$.d6;
  var compositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n;
  var Companion_instance_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t3;
  var ensureNotNull = kotlin_kotlin.$_$.l9;
  var styleModifier = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j3;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(SilkStyleSheet, 'SilkStyleSheet', VOID, StyleSheet);
  initMetadataForClass(ComponentVariant, 'ComponentVariant');
  initMetadataForClass(SimpleComponentVariant, 'SimpleComponentVariant', VOID, ComponentVariant);
  initMetadataForClass(DeferredComposablesState, 'DeferredComposablesState', DeferredComposablesState);
  initMetadataForObject(ComposableSingletons$DeferredKt, 'ComposableSingletons$DeferredKt');
  initMetadataForClass(InitSilkContext, 'InitSilkContext');
  initMetadataForClass(MutableSilkConfig, 'MutableSilkConfig', MutableSilkConfig);
  initMetadataForCompanion(Companion);
  initMetadataForClass(StyleScope, 'StyleScope');
  initMetadataForClass(SilkStylesheetInstance$assertNoAttributeModifiers$simpleStyleScope$1, VOID, VOID, StyleScope);
  initMetadataForObject(SilkStylesheetInstance, 'SilkStylesheetInstance');
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(CssRule, 'CssRule');
  initMetadataForClass(NonMediaCssRule, 'NonMediaCssRule', VOID, CssRule);
  initMetadataForClass(OfAttributeSelector, 'OfAttributeSelector', VOID, NonMediaCssRule);
  initMetadataForClass(OfPseudoClass, 'OfPseudoClass', VOID, NonMediaCssRule);
  initMetadataForClass(OfPseudoElement, 'OfPseudoElement', VOID, NonMediaCssRule);
  initMetadataForClass(CompositeOpen, 'CompositeOpen', VOID, NonMediaCssRule);
  initMetadataForClass(CssStyle, 'CssStyle');
  initMetadataForClass(Restricted, 'Restricted', VOID, CssStyle);
  initMetadataForClass(Base, 'Base', VOID, Restricted);
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(CssStyleScope, 'CssStyleScope', VOID, StyleScope);
  initMetadataForInterface(ComponentKind, 'ComponentKind');
  initMetadataForInterface(RestrictedKind, 'RestrictedKind');
  initMetadataForClass(CssStyleBaseScope, 'CssStyleBaseScope');
  initMetadataForClass(Light, 'Light');
  initMetadataForClass(Dark, 'Dark');
  initMetadataForClass(ColorAgnostic, 'ColorAgnostic');
  initMetadataForClass(ColorAware, 'ColorAware');
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(ImmutableCssStyle, 'ImmutableCssStyle');
  initMetadataForInterface(GeneralKind, 'GeneralKind');
  initMetadataForClass(ExtendingCssStyle, 'ExtendingCssStyle', VOID, CssStyle);
  initMetadataForClass(CssStyle$2, VOID, VOID, CssStyle);
  initMetadataForClass(CssStyle$4, VOID, VOID, CssStyle);
  initMetadataForClass(base$3, VOID, VOID, CssStyle);
  initMetadataForClass(CssStyle$5, VOID, VOID, CssStyle);
  initMetadataForClass(CssStyleVariant, 'CssStyleVariant');
  initMetadataForClass(SimpleCssStyleVariant$1, VOID, VOID, CssStyle);
  initMetadataForClass(SimpleCssStyleVariant, 'SimpleCssStyleVariant', VOID, CssStyleVariant);
  initMetadataForClass(ExtendingCssStyleVariant, 'ExtendingCssStyleVariant', VOID, SimpleCssStyleVariant);
  initMetadataForClass(CompositeCssStyleVariant, 'CompositeCssStyleVariant', VOID, CssStyleVariant);
  initMetadataForClass(addVariant$1, VOID, VOID, CssStyle);
  initMetadataForCompanion(Companion_3);
  initMetadataForClass(Key, 'Key');
  initMetadataForClass(CssModifier, 'CssModifier');
  initMetadataForClass(KeyframesBuilder, 'KeyframesBuilder');
  initMetadataForCompanion(Companion_4);
  initMetadataForClass(Keyframes, 'Keyframes');
  initMetadataForClass(Breakpoint, 'Breakpoint', VOID, Enum);
  initMetadataForClass(_no_name_provided__qut3iv);
  initMetadataForObject(ComposableSingletons$BreakpointConditionsKt, 'ComposableSingletons$BreakpointConditionsKt');
  initMetadataForClass(BreakpointValues, 'BreakpointValues');
  initMetadataForClass(BreakpointUnitValue, 'BreakpointUnitValue');
  initMetadataForClass(Rem, 'Rem', VOID, BreakpointUnitValue);
  initMetadataForClass(ResponsiveValues, 'ResponsiveValues');
  initMetadataForClass(LayerListBuilder, 'LayerListBuilder', LayerListBuilder);
  initMetadataForClass(SilkLayer, 'SilkLayer', VOID, Enum);
  initMetadataForClass(MutableSilkTheme$replaceStyle$newStyle$1, VOID, VOID, CssStyle);
  initMetadataForClass(MutableSilkTheme, 'MutableSilkTheme', MutableSilkTheme);
  initMetadataForClass(ImmutableSilkTheme, 'ImmutableSilkTheme');
  initMetadataForLambda(rememberBreakpoint$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCompanion(Companion_5);
  initMetadataForClass(ColorMode, 'ColorMode', VOID, Enum);
  initMetadataForObject(Red, 'Red');
  initMetadataForObject(Blue, 'Blue');
  initMetadataForObject(Gray, 'Gray');
  function get(colorMode) {
    var tmp;
    switch (colorMode.h2_1) {
      case 0:
        tmp = this.c36();
        break;
      case 1:
        tmp = this.d36();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  initMetadataForInterface(Palettes, 'Palettes');
  initMetadataForClass(MutablePalettes, 'MutablePalettes', MutablePalettes, VOID, [Palettes]);
  function getValue_0(key) {
    return ensureNotNull(this.f36(key));
  }
  initMetadataForInterface(Palette, 'Palette');
  initMetadataForClass(EntryDelegate, 'EntryDelegate');
  initMetadataForClass(ColorGroup, 'ColorGroup');
  initMetadataForClass(MutablePalette, 'MutablePalette', MutablePalette, VOID, [Palette]);
  initMetadataForClass(RectF, 'RectF', RectF_init_$Create$);
  initMetadataForClass(Path, 'Path');
  initMetadataForClass(InsetPath, 'InsetPath', VOID, Path);
  //endregion
  function SilkFoundationStyles(initSilk_0, $composer, $changed, $default) {
    var initSilk_1 = {_v: initSilk_0};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t1a(67758577);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.v19(initSilk_1._v) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.v18()) {
      if (!(($default & 1) === 0)) {
        $composer_0.a19(1839367468);
        // Inline function 'androidx.compose.runtime.cache' call
        var this_0 = $composer_0;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = this_0.f1a();
        var tmp;
        if (false || it === Companion_getInstance().s13_1) {
          // Inline function 'com.varabyte.kobweb.silk.SilkFoundationStyles.<anonymous>' call
          var value = SilkFoundationStyles$lambda;
          this_0.l1a(value);
          tmp = value;
        } else {
          tmp = it;
        }
        var tmp_0 = tmp;
        var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
        $composer_0.b19();
        initSilk_1._v = tmp0_group;
      }
      if (isTraceInProgress()) {
        traceEventStart(67758577, $dirty, -1, 'com.varabyte.kobweb.silk.SilkFoundationStyles (SilkFoundationStyles.kt:31)');
      }
      $composer_0.d16(1839367920, Unit_instance);
      $composer_0.a19(1839371138);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      var invalid = ($dirty & 14) === 4;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_1.f1a();
      var tmp_1;
      if (invalid || it_0 === Companion_getInstance().s13_1) {
        // Inline function 'com.varabyte.kobweb.silk.SilkFoundationStyles.<anonymous>' call
        var value_0 = SilkFoundationStyles$lambda_0(initSilk_1);
        this_1.l1a(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.b19();
      initSilk(tmp1_group);
      $composer_0.g16();
      // Inline function 'org.jetbrains.compose.web.css.Style' call
      var styleSheet = SilkStyleSheet_getInstance();
      var $composer_1 = $composer_0;
      $composer_1.a19(-1196466140);
      Style(null, styleSheet.h2f(), $composer_1, 0, 1);
      $composer_1.b19();
      SilkBreakpointDisplayStyles($composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.m13();
    }
    var tmp2_safe_receiver = $composer_0.u1a();
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.u1f(SilkFoundationStyles$lambda_1(initSilk_1, $changed, $default));
    }
  }
  function SilkFoundationStyles$lambda(it) {
    return Unit_instance;
  }
  function SilkFoundationStyles$lambda_0($initSilk) {
    return function (ctx) {
      $initSilk._v(ctx);
      return Unit_instance;
    };
  }
  function SilkFoundationStyles$lambda_1($initSilk, $$changed, $$default) {
    return function ($composer, $force) {
      SilkFoundationStyles($initSilk._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  var com_varabyte_kobweb_silk_SilkStyleSheet$stable;
  function SilkStyleSheet() {
    SilkStyleSheet_instance = this;
    StyleSheet_init_$Init$(VOID, VOID, this);
  }
  protoOf(SilkStyleSheet).l2f = function (selector, cssRule) {
    return this.k2f(selector, cssRule);
  };
  var SilkStyleSheet_instance;
  function SilkStyleSheet_getInstance() {
    if (SilkStyleSheet_instance == null)
      new SilkStyleSheet();
    return SilkStyleSheet_instance;
  }
  var com_varabyte_kobweb_silk_components_animation_Keyframes$stable;
  var com_varabyte_kobweb_silk_components_animation_KeyframesProvider$stable;
  function registerKeyframes(_this__u8e3s4, keyframes) {
    return _this__u8e3s4.w2x(keyframes.u2x_1, keyframes.t2x_1);
  }
  var com_varabyte_kobweb_silk_components_style_ComponentStyle$stable;
  var com_varabyte_kobweb_silk_components_style_ComponentStyleProvider$stable;
  var com_varabyte_kobweb_silk_components_style_ComponentVariant$stable;
  var com_varabyte_kobweb_silk_components_style_StubbedComponentVariant$stable;
  var com_varabyte_kobweb_silk_components_style_SimpleComponentVariant$stable;
  var com_varabyte_kobweb_silk_components_style_ComponentVariantProvider$stable;
  function ComponentVariant() {
  }
  function SimpleComponentVariant() {
  }
  function get_SpanTextStyle() {
    _init_properties_SpanText_kt__upt1hl();
    return SpanTextStyle;
  }
  var SpanTextStyle;
  function SpanTextStyle$lambda($this$CssStyle) {
    _init_properties_SpanText_kt__upt1hl();
    return Unit_instance;
  }
  var properties_initialized_SpanText_kt_kccny1;
  function _init_properties_SpanText_kt__upt1hl() {
    if (!properties_initialized_SpanText_kt_kccny1) {
      properties_initialized_SpanText_kt_kccny1 = true;
      SpanTextStyle = CssStyle_0(VOID, SpanTextStyle$lambda);
    }
  }
  var com_varabyte_kobweb_silk_components_util_internal_CacheByPropertyNameDelegate$stable;
  function get_LocalDeferred() {
    _init_properties_Deferred_kt__im2yn();
    return LocalDeferred;
  }
  var LocalDeferred;
  function DeferredComposablesState$forEach$lambda($tmp0_rcvr, $render, $$changed) {
    return function ($composer, $force) {
      $tmp0_rcvr.a2y($render, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function DeferredComposablesState() {
    this.x2x_1 = -1;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.y2x_1 = ArrayList_init_$Create$();
    this.z2x_1 = mutableStateListOf();
  }
  protoOf(DeferredComposablesState).a2y = function (render, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t1a(2018041013);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.v19(render) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.v19(this) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.v18()) {
      if (isTraceInProgress()) {
        traceEventStart(2018041013, $dirty, -1, 'com.varabyte.kobweb.silk.defer.DeferredComposablesState.forEach (Deferred.kt:31)');
      }
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = this.z2x_1.j();
      while (tmp0_iterator.k()) {
        var element = tmp0_iterator.l();
        // Inline function 'com.varabyte.kobweb.silk.defer.DeferredComposablesState.forEach.<anonymous>' call
        render(element, $composer_0, 112 & $dirty << 3);
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.m13();
    }
    var tmp1_safe_receiver = $composer_0.u1a();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.u1f(DeferredComposablesState$forEach$lambda(this, render, $changed));
    }
  };
  function DeferringHost(content, $composer, $changed) {
    _init_properties_Deferred_kt__im2yn();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t1a(1578083138);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.v19(content) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.v18()) {
      if (isTraceInProgress()) {
        traceEventStart(1578083138, $dirty, -1, 'com.varabyte.kobweb.silk.defer.DeferringHost (Deferred.kt:100)');
      }
      var state = new DeferredComposablesState();
      var tmp = get_LocalDeferred().s1f(state);
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.defer.DeferringHost.<anonymous>' call
      var tmp_0 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_0, -2083084670, true, DeferringHost$lambda(content, state));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.a19(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.t10(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.f1a();
      var tmp_1;
      if (invalid || it === Companion_getInstance().s13_1) {
        // Inline function 'com.varabyte.kobweb.silk.defer.DeferringHost.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_0(dispatchReceiver);
        $composer_1.l1a(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_1.b19();
      CompositionLocalProvider(tmp, tmp0, $composer_0, 48);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.m13();
    }
    var tmp0_safe_receiver = $composer_0.u1a();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.u1f(DeferringHost$lambda_0(content, $changed));
    }
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.n25(p0, p1, p2);
    };
  }
  function ComposableSingletons$DeferredKt$lambda_1$lambda_ynev9p(entry, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(431504263, $changed, -1, 'com.varabyte.kobweb.silk.defer.ComposableSingletons$DeferredKt.lambda-1.<anonymous> (Deferred.kt:108)');
    }
    var tmp0_safe_receiver = entry.b2y_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      DeferringHost(tmp0_safe_receiver, $composer_0, 0);
      tmp = Unit_instance;
    }
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$DeferredKt() {
    ComposableSingletons$DeferredKt_instance = this;
    var tmp = this;
    tmp.d2y_1 = ComposableLambda$invoke$ref(composableLambdaInstance(431504263, false, ComposableSingletons$DeferredKt$lambda_1$lambda_ynev9p));
  }
  var ComposableSingletons$DeferredKt_instance;
  function ComposableSingletons$DeferredKt_getInstance() {
    if (ComposableSingletons$DeferredKt_instance == null)
      new ComposableSingletons$DeferredKt();
    return ComposableSingletons$DeferredKt_instance;
  }
  function LocalDeferred$lambda() {
    _init_properties_Deferred_kt__im2yn();
    // Inline function 'kotlin.error' call
    var message = 'Attempting to defer rendering without calling `DeferringHost`, a required pre-requisite.';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  function DeferringHost$lambda($content, $state) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.v18()) {
        if (isTraceInProgress()) {
          traceEventStart(-2083084670, $changed, -1, 'com.varabyte.kobweb.silk.defer.DeferringHost.<anonymous> (Deferred.kt:103)');
        }
        $content($composer_0, 0);
        $state.a2y(ComposableSingletons$DeferredKt_getInstance().d2y_1, $composer_0, 6);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_instance;
        }
        tmp = tmp_0;
      } else {
        $composer_0.m13();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1) {
      return $boundThis.t18(p0, p1);
    };
  }
  function DeferringHost$lambda_0($content, $$changed) {
    return function ($composer, $force) {
      DeferringHost($content, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  var properties_initialized_Deferred_kt_1ab2bj;
  function _init_properties_Deferred_kt__im2yn() {
    if (!properties_initialized_Deferred_kt_1ab2bj) {
      properties_initialized_Deferred_kt_1ab2bj = true;
      LocalDeferred = staticCompositionLocalOf(LocalDeferred$lambda);
    }
  }
  function set_additionalSilkInitialization(_set____db54di) {
    _init_properties_InitSilk_kt__vukue3();
    additionalSilkInitialization = _set____db54di;
  }
  function get_additionalSilkInitialization() {
    _init_properties_InitSilk_kt__vukue3();
    return additionalSilkInitialization;
  }
  var additionalSilkInitialization;
  var com_varabyte_kobweb_silk_init_InitSilkContext$stable;
  function InitSilkContext(config, stylesheet, theme) {
    this.e2y_1 = config;
    this.f2y_1 = stylesheet;
    this.g2y_1 = theme;
  }
  function initSilk(additionalInit) {
    var tmp;
    if (additionalInit === VOID) {
      tmp = initSilk$lambda;
    } else {
      tmp = additionalInit;
    }
    additionalInit = tmp;
    _init_properties_InitSilk_kt__vukue3();
    var mutableTheme = new MutableSilkTheme();
    var config = new MutableSilkConfig();
    mutableTheme.f2z('silk-span-text', get_SpanTextStyle());
    var ctx = new InitSilkContext(config, SilkStylesheetInstance_getInstance(), mutableTheme);
    additionalInit(ctx);
    get_additionalSilkInitialization()(ctx);
    set_MutableSilkConfigInstance(config);
    set__SilkTheme(new ImmutableSilkTheme(mutableTheme));
    get_SilkTheme().l2z(SilkStylesheetInstance_getInstance());
    SilkStylesheetInstance_getInstance().p2z(SilkStyleSheet_getInstance());
    get_SilkTheme().q2z(SilkStyleSheet_getInstance());
    var tmp_0 = window;
    invokeLater(tmp_0, initSilk$lambda_0);
  }
  function get_localStyleSheets(_this__u8e3s4) {
    _init_properties_InitSilk_kt__vukue3();
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterIsInstance' call
    // Inline function 'kotlin.collections.filterIsInstanceTo' call
    var this_0 = asList(document.styleSheets);
    var destination = ArrayList_init_$Create$();
    var tmp0_iterator = this_0.j();
    while (tmp0_iterator.k()) {
      var element = tmp0_iterator.l();
      if (element instanceof CSSStyleSheet) {
        destination.h(element);
      }
    }
    // Inline function 'kotlin.collections.filterTo' call
    var destination_0 = ArrayList_init_$Create$();
    var tmp0_iterator_0 = destination.j();
    while (tmp0_iterator_0.k()) {
      var element_0 = tmp0_iterator_0.l();
      // Inline function 'com.varabyte.kobweb.silk.init.<get-localStyleSheets>.<anonymous>' call
      if (element_0.href == null) {
        destination_0.h(element_0);
      }
    }
    return destination_0;
  }
  function additionalSilkInitialization$lambda(it) {
    _init_properties_InitSilk_kt__vukue3();
    return Unit_instance;
  }
  function initSilk$lambda(it) {
    _init_properties_InitSilk_kt__vukue3();
    return Unit_instance;
  }
  function initSilk$lambda_0() {
    _init_properties_InitSilk_kt__vukue3();
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    var registeredCssLayers = toSet(SilkStylesheetInstance_getInstance().o2z_1.t2z());
    // Inline function 'kotlin.sequences.filterIsInstance' call
    var tmp = asSequence(get_localStyleSheets(document));
    var this_0 = flatMap(tmp, initSilk$lambda$lambda);
    var tmp_0 = filter(this_0, initSilk$lambda$lambda_0);
    var tmp_1 = isInterface(tmp_0, Sequence) ? tmp_0 : THROW_CCE();
    var referencedCssLayers = toSet_0(map(tmp_1, initSilk$lambda$lambda_1));
    var unregisteredLayers = subtract(referencedCssLayers, registeredCssLayers);
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!unregisteredLayers.q()) {
      var tmp_2 = console;
      var tmp_3 = sorted(unregisteredLayers);
      tmp_2.warn(trimIndent('\n                        One or more CSS layer(s) were referenced in code but not registered.\n                        \n                        Please add initialization to your project like:\n                        ```\n                        @InitSilk\n                        fun initSilk(ctx: InitSilkContext) {\n                           ctx.stylesheet.cssLayers.add(' + joinToString(tmp_3, VOID, VOID, VOID, VOID, VOID, initSilk$lambda$lambda_2) + ')\n                        }\n                        ```\n                        (but change the order of the layers to match your desired priority).\n                        \n                        If you are not the developer of this website, consider reporting this message to them.\n                    '));
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterIsInstance' call
    // Inline function 'kotlin.collections.filterIsInstanceTo' call
    var this_1 = asList(document.styleSheets);
    var destination = ArrayList_init_$Create$();
    var tmp0_iterator = this_1.j();
    while (tmp0_iterator.k()) {
      var element = tmp0_iterator.l();
      if (element instanceof CSSStyleSheet) {
        destination.h(element);
      }
    }
    // Inline function 'kotlin.collections.filterTo' call
    var destination_0 = ArrayList_init_$Create$();
    var tmp0_iterator_0 = destination.j();
    while (tmp0_iterator_0.k()) {
      var element_0 = tmp0_iterator_0.l();
      // Inline function 'com.varabyte.kobweb.silk.init.initSilk.<anonymous>.<anonymous>' call
      if (element_0.href == null) {
        destination_0.h(element_0);
      }
    }
    var tmp0_iterator_1 = destination_0.j();
    while (tmp0_iterator_1.k()) {
      var element_1 = tmp0_iterator_1.l();
      // Inline function 'com.varabyte.kobweb.silk.init.initSilk.<anonymous>.<anonymous>' call
      var cssLayers = SilkStylesheetInstance_getInstance().o2z_1.t2z();
      element_1.insertRule('@layer ' + joinToString(cssLayers) + ';', 0);
    }
    return Unit_instance;
  }
  function initSilk$lambda$lambda(it) {
    _init_properties_InitSilk_kt__vukue3();
    return asSequence(asList(it.cssRules));
  }
  function initSilk$lambda$lambda_0(it) {
    _init_properties_InitSilk_kt__vukue3();
    return it instanceof CSSLayerBlockRule;
  }
  function initSilk$lambda$lambda_1(it) {
    _init_properties_InitSilk_kt__vukue3();
    return it.name;
  }
  function initSilk$lambda$lambda_2(it) {
    _init_properties_InitSilk_kt__vukue3();
    return '"' + it + '"';
  }
  var properties_initialized_InitSilk_kt_8x89gn;
  function _init_properties_InitSilk_kt__vukue3() {
    if (!properties_initialized_InitSilk_kt_8x89gn) {
      properties_initialized_InitSilk_kt_8x89gn = true;
      additionalSilkInitialization = additionalSilkInitialization$lambda;
      com_varabyte_kobweb_silk_init_InitSilkContext$stable = 8;
    }
  }
  function set_MutableSilkConfigInstance(_set____db54di) {
    _init_properties_SilkConfig_kt__z9kok7();
    MutableSilkConfigInstance = _set____db54di;
  }
  function get_MutableSilkConfigInstance() {
    _init_properties_SilkConfig_kt__z9kok7();
    return MutableSilkConfigInstance;
  }
  var MutableSilkConfigInstance;
  var com_varabyte_kobweb_silk_init_MutableSilkConfig$stable;
  function MutableSilkConfig() {
    this.u2z_1 = ColorMode_LIGHT_getInstance();
  }
  protoOf(MutableSilkConfig).v2z = function () {
    return this.u2z_1;
  };
  function Companion() {
  }
  protoOf(Companion).g2t = function () {
    return get_MutableSilkConfigInstance();
  };
  var Companion_instance_1;
  function Companion_getInstance_0() {
    return Companion_instance_1;
  }
  var properties_initialized_SilkConfig_kt_bfwaef;
  function _init_properties_SilkConfig_kt__z9kok7() {
    if (!properties_initialized_SilkConfig_kt_bfwaef) {
      properties_initialized_SilkConfig_kt_bfwaef = true;
      MutableSilkConfigInstance = new MutableSilkConfig();
      com_varabyte_kobweb_silk_init_MutableSilkConfig$stable = 8;
    }
  }
  var com_varabyte_kobweb_silk_init_CssStyleRegistrarImpl_Entry$stable;
  var com_varabyte_kobweb_silk_init_SilkStylesheetInstance$stable;
  function assertNoAttributeModifiers(_this__u8e3s4, $this, selectorName) {
    var simpleStyleScope = new SilkStylesheetInstance$assertNoAttributeModifiers$simpleStyleScope$1();
    _this__u8e3s4(simpleStyleScope);
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = simpleStyleScope.x2z_1.j();
    while (tmp0_iterator.k()) {
      var element = tmp0_iterator.l();
      // Inline function 'com.varabyte.kobweb.silk.init.SilkStylesheetInstance.assertNoAttributeModifiers.<anonymous>' call
      assertNoAttributes(element, selectorName, 'Please search your `@InitSilk` code for a line like `ctx.stylesheet.registerStyle("' + selectorName + '")` and remove the offending attribute(s).');
    }
  }
  function SilkStylesheetInstance$assertNoAttributeModifiers$simpleStyleScope$1() {
    StyleScope.call(this);
  }
  function SilkStylesheetInstance() {
    SilkStylesheetInstance_instance = this;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.m2z_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0.n2z_1 = LinkedHashMap_init_$Create$();
    this.o2z_1 = new LayerListBuilder();
  }
  protoOf(SilkStylesheetInstance).w2x = function (name, build) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.collections.contains' call
    // Inline function 'kotlin.collections.containsKey' call
    var this_0 = this.n2z_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!!(isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).x1(name)) {
      // Inline function 'com.varabyte.kobweb.silk.init.SilkStylesheetInstance.registerKeyframes.<anonymous>' call
      var message = 'User is registering duplicate keyframe name: ' + name;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.set' call
    this.n2z_1.y4(name, build);
  };
  protoOf(SilkStylesheetInstance).p2z = function (siteStyleSheet) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = this.m2z_1.j();
    while (tmp0_iterator.k()) {
      var element = tmp0_iterator.l();
      // Inline function 'com.varabyte.kobweb.silk.init.SilkStylesheetInstance.registerStylesAndKeyframesInto.<anonymous>' call
      var tmp = element.b30_1;
      assertNoAttributeModifiers(typeof tmp === 'function' ? tmp : THROW_CCE(), SilkStylesheetInstance_getInstance(), element.f30_1);
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator_0 = this.m2z_1.j();
    while (tmp0_iterator_0.k()) {
      var element_0 = tmp0_iterator_0.l();
      // Inline function 'com.varabyte.kobweb.silk.init.SilkStylesheetInstance.registerStylesAndKeyframesInto.<anonymous>' call
      element_0.h30(siteStyleSheet);
    }
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.n2z_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(this_0.m());
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator_1 = this_0.c2().j();
    while (tmp0_iterator_1.k()) {
      var item = tmp0_iterator_1.l();
      // Inline function 'kotlin.collections.component1' call
      var name = item.v1();
      // Inline function 'kotlin.collections.component2' call
      var build = item.w1();
      // Inline function 'kotlin.apply' call
      var this_1 = new KeyframesBuilder(ColorMode_LIGHT_getInstance());
      // Inline function 'kotlin.contracts.contract' call
      build(this_1);
      var lightBuilder = this_1;
      // Inline function 'kotlin.apply' call
      var this_2 = new KeyframesBuilder(ColorMode_DARK_getInstance());
      // Inline function 'kotlin.contracts.contract' call
      build(this_2);
      var darkBuilder = this_2;
      if (lightBuilder.equals(darkBuilder)) {
        lightBuilder.k30(siteStyleSheet, name);
      } else {
        lightBuilder.k30(siteStyleSheet, suffixedWith(name, ColorMode_LIGHT_getInstance()));
        darkBuilder.k30(siteStyleSheet, suffixedWith(name, ColorMode_DARK_getInstance()));
      }
      destination.h(Unit_instance);
    }
  };
  var SilkStylesheetInstance_instance;
  function SilkStylesheetInstance_getInstance() {
    if (SilkStylesheetInstance_instance == null)
      new SilkStylesheetInstance();
    return SilkStylesheetInstance_instance;
  }
  var com_varabyte_kobweb_silk_style_CssRule_OfMedia$stable;
  var com_varabyte_kobweb_silk_style_CssRule_NonMediaCssRule$stable;
  var com_varabyte_kobweb_silk_style_CssRule_OfAttributeSelector$stable;
  var com_varabyte_kobweb_silk_style_CssRule_OfPseudoClass$stable;
  var com_varabyte_kobweb_silk_style_CssRule_OfPseudoElement$stable;
  var com_varabyte_kobweb_silk_style_CssRule_CompositeOpen$stable;
  var com_varabyte_kobweb_silk_style_CssRule_CompositeClosed$stable;
  var com_varabyte_kobweb_silk_style_CssRule$stable;
  function Companion_0() {
  }
  protoOf(Companion_0).l30 = function (target, pseudoClass, params) {
    // Inline function 'kotlin.collections.mapNotNull' call
    // Inline function 'kotlin.collections.mapNotNullTo' call
    var destination = ArrayList_init_$Create$();
    // Inline function 'kotlin.collections.forEach' call
    var inductionVariable = 0;
    var last = params.length;
    while (inductionVariable < last) {
      var element = params[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'kotlin.collections.mapNotNullTo.<anonymous>' call
      // Inline function 'com.varabyte.kobweb.silk.style.Companion.OfFunctionalPseudoClass.<anonymous>' call
      var tmp0_safe_receiver = element.o30();
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        destination.h(tmp0_safe_receiver);
      }
    }
    return new OfPseudoClass(target, pseudoClass + '(' + joinToString(destination) + ')');
  };
  var Companion_instance_2;
  function Companion_getInstance_1() {
    return Companion_instance_2;
  }
  function NonMediaCssRule(target) {
    CssRule.call(this, target);
  }
  function OfAttributeSelector(target, attributeSelector) {
    NonMediaCssRule.call(this, target);
    this.u30_1 = attributeSelector;
  }
  protoOf(OfAttributeSelector).o30 = function () {
    return this.r30(listOf(this), emptyList(), null);
  };
  function OfPseudoClass(target, pseudoClass) {
    NonMediaCssRule.call(this, target);
    this.x30_1 = pseudoClass;
  }
  protoOf(OfPseudoClass).o30 = function () {
    return this.r30(emptyList(), listOf(this), null);
  };
  protoOf(OfPseudoClass).y30 = function (other) {
    return new CompositeOpen(this.m30_1, null, emptyList(), listOf_0([this, other]));
  };
  function OfPseudoElement(target, pseudoElement) {
    NonMediaCssRule.call(this, target);
    this.b31_1 = pseudoElement;
  }
  protoOf(OfPseudoElement).o30 = function () {
    return this.r30(emptyList(), emptyList(), this);
  };
  function CompositeOpen(target, mediaQuery, attributeSelectors, pseudoClasses) {
    NonMediaCssRule.call(this, target);
    this.e31_1 = mediaQuery;
    this.f31_1 = attributeSelectors;
    this.g31_1 = pseudoClasses;
  }
  protoOf(CompositeOpen).q30 = function () {
    return this.e31_1;
  };
  protoOf(CompositeOpen).o30 = function () {
    return this.r30(this.f31_1, this.g31_1, null);
  };
  function CssRule(target) {
    this.m30_1 = target;
    this.n30_1 = null;
  }
  protoOf(CssRule).p30 = function (createModifier) {
    this.m30_1.y2z(this.q30(), this.o30(), createModifier);
  };
  protoOf(CssRule).q30 = function () {
    return this.n30_1;
  };
  protoOf(CssRule).o30 = function () {
    return null;
  };
  protoOf(CssRule).r30 = function (attributeSelectors, pseudoClasses, pseudoElement) {
    // Inline function 'kotlin.takeIf' call
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.silk.style.CssRule.buildSelectorText.<anonymous>' call
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = attributeSelectors.j();
    while (tmp0_iterator.k()) {
      var element = tmp0_iterator.l();
      // Inline function 'com.varabyte.kobweb.silk.style.CssRule.buildSelectorText.<anonymous>.<anonymous>' call
      this_0.a8('[' + element.u30_1 + ']');
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator_0 = pseudoClasses.j();
    while (tmp0_iterator_0.k()) {
      var element_0 = tmp0_iterator_0.l();
      // Inline function 'com.varabyte.kobweb.silk.style.CssRule.buildSelectorText.<anonymous>.<anonymous>' call
      this_0.a8(':' + element_0.x30_1);
    }
    if (!(pseudoElement == null)) {
      this_0.a8('::' + pseudoElement.b31_1);
    }
    var this_1 = this_0.toString();
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    // Inline function 'com.varabyte.kobweb.silk.style.CssRule.buildSelectorText.<anonymous>' call
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(this_1) > 0) {
      tmp = this_1;
    } else {
      tmp = null;
    }
    return tmp;
  };
  var com_varabyte_kobweb_silk_style_CssStyle_Restricted_Base$stable;
  var com_varabyte_kobweb_silk_style_CssStyle_Restricted$stable;
  var com_varabyte_kobweb_silk_style_CssStyle$stable;
  var com_varabyte_kobweb_silk_style_SimpleCssStyle$stable;
  var com_varabyte_kobweb_silk_style_ExtendingCssStyle$stable;
  var com_varabyte_kobweb_silk_style_ImmutableCssStyle$stable;
  var com_varabyte_kobweb_silk_style_CssStyleScope$stable;
  var com_varabyte_kobweb_silk_style_CssStyleBaseScope$stable;
  var com_varabyte_kobweb_silk_style_StyleGroup_Light$stable;
  var com_varabyte_kobweb_silk_style_StyleGroup_Dark$stable;
  var com_varabyte_kobweb_silk_style_StyleGroup_ColorAgnostic$stable;
  var com_varabyte_kobweb_silk_style_StyleGroup_ColorAware$stable;
  function Base_init_$Init$(init, extraModifier, $this) {
    var tmp;
    if (extraModifier === VOID) {
      tmp = CssStyle$Restricted$Base$_init_$lambda_wfn4zd_1;
    } else {
      tmp = extraModifier;
    }
    extraModifier = tmp;
    Base.call($this, CssStyle$Restricted$Base$_init_$lambda_wfn4zd_2(init), extraModifier);
    return $this;
  }
  function CssStyle$Restricted$Base$_init_$lambda_wfn4zd($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.a19(-589847720);
    if (isTraceInProgress()) {
      traceEventStart(-589847720, $changed, -1, 'com.varabyte.kobweb.silk.style.CssStyle.Restricted.Base.<init>.<anonymous> (CssStyle.kt:171)');
    }
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.b19();
    return Companion_instance;
  }
  function CssStyle$Restricted$Base$_init_$lambda$lambda_7ly36($init, $this) {
    return function () {
      return $init(new CssStyleBaseScope($this.j31_1));
    };
  }
  function CssStyle$Restricted$Base$_init_$lambda_wfn4zd_0($init) {
    return function (_this__u8e3s4) {
      _this__u8e3s4.k31(CssStyle$Restricted$Base$_init_$lambda$lambda_7ly36($init, _this__u8e3s4));
      return Unit_instance;
    };
  }
  function CssStyle$Restricted$Base$_init_$lambda_wfn4zd_1($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.a19(1583284929);
    if (isTraceInProgress()) {
      traceEventStart(1583284929, $changed, -1, 'com.varabyte.kobweb.silk.style.CssStyle.Restricted.Base.<init>.<anonymous> (CssStyle.kt:173)');
    }
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.b19();
    return Companion_instance;
  }
  function CssStyle$Restricted$Base$_init_$lambda_wfn4zd_2($init) {
    return function (_this__u8e3s4) {
      return $init;
    };
  }
  function Base(init, extraModifier) {
    var tmp;
    if (extraModifier === VOID) {
      tmp = CssStyle$Restricted$Base$_init_$lambda_wfn4zd;
    } else {
      tmp = extraModifier;
    }
    extraModifier = tmp;
    Restricted.call(this, CssStyle$Restricted$Base$_init_$lambda_wfn4zd_0(init), extraModifier);
  }
  function CssStyle$Restricted$_init_$lambda_tv1gbe($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.a19(-941642769);
    if (isTraceInProgress()) {
      traceEventStart(-941642769, $changed, -1, 'com.varabyte.kobweb.silk.style.CssStyle.Restricted.<init>.<anonymous> (CssStyle.kt:164)');
    }
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.b19();
    return Companion_instance;
  }
  function Restricted(init, extraModifier) {
    var tmp;
    if (extraModifier === VOID) {
      tmp = CssStyle$Restricted$_init_$lambda_tv1gbe;
    } else {
      tmp = extraModifier;
    }
    extraModifier = tmp;
    CssStyle.call(this, init, extraModifier);
  }
  function addStyles(_this__u8e3s4, $this, cssRule, styles) {
    _this__u8e3s4.m2f(cssRule, CssStyle$addStyles$lambda(styles));
  }
  function withFinalSelectorName($this, selectorBaseName, group, handler) {
    if (group instanceof Light)
      handler(suffixedWith(selectorBaseName, ColorMode_LIGHT_getInstance()), group.r31_1);
    else {
      if (group instanceof Dark)
        handler(suffixedWith(selectorBaseName, ColorMode_DARK_getInstance()), group.q31_1);
      else {
        if (group instanceof ColorAgnostic)
          handler(selectorBaseName, group.p31_1);
        else {
          if (group instanceof ColorAware) {
            handler(suffixedWith(selectorBaseName, ColorMode_LIGHT_getInstance()), group.n31_1);
            handler(suffixedWith(selectorBaseName, ColorMode_DARK_getInstance()), group.o31_1);
          } else {
            noWhenBranchMatchedException();
          }
        }
      }
    }
  }
  function mergeCssModifiers(_this__u8e3s4, $this, init) {
    // Inline function 'kotlin.collections.mapValues' call
    // Inline function 'kotlin.collections.groupBy' call
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    init(_this__u8e3s4);
    // Inline function 'kotlin.collections.groupByTo' call
    var this_0 = _this__u8e3s4.x2z_1;
    var destination = LinkedHashMap_init_$Create$();
    var tmp0_iterator = this_0.j();
    while (tmp0_iterator.k()) {
      var element = tmp0_iterator.l();
      // Inline function 'com.varabyte.kobweb.silk.style.CssStyle.mergeCssModifiers.<anonymous>' call
      var key = element.v1();
      // Inline function 'kotlin.collections.getOrPut' call
      var value = destination.z1(key);
      var tmp;
      if (value == null) {
        // Inline function 'kotlin.collections.groupByTo.<anonymous>' call
        var answer = ArrayList_init_$Create$();
        destination.y4(key, answer);
        tmp = answer;
      } else {
        tmp = value;
      }
      var list = tmp;
      list.h(element);
    }
    // Inline function 'kotlin.collections.mapValuesTo' call
    var destination_0 = LinkedHashMap_init_$Create$_0(mapCapacity(destination.m()));
    // Inline function 'kotlin.collections.associateByTo' call
    var tmp0_iterator_0 = destination.c2().j();
    while (tmp0_iterator_0.k()) {
      var element_0 = tmp0_iterator_0.l();
      // Inline function 'kotlin.collections.mapValuesTo.<anonymous>' call
      var tmp_0 = element_0.v1();
      // Inline function 'com.varabyte.kobweb.silk.style.CssStyle.mergeCssModifiers.<anonymous>' call
      // Inline function 'kotlin.collections.component2' call
      var group = element_0.w1();
      // Inline function 'kotlin.collections.reduce' call
      var iterator = group.j();
      if (!iterator.k())
        throw UnsupportedOperationException_init_$Create$("Empty collection can't be reduced.");
      var accumulator = iterator.l();
      while (iterator.k()) {
        // Inline function 'com.varabyte.kobweb.silk.style.CssStyle.mergeCssModifiers.<anonymous>.<anonymous>' call
        var acc = accumulator;
        var curr = iterator.l();
        accumulator = acc.v31(curr);
      }
      var tmp$ret$10 = accumulator;
      destination_0.y4(tmp_0, tmp$ret$10);
    }
    return destination_0;
  }
  function assertNoAttributeModifiers_0(_this__u8e3s4, $this, selectorName, layer) {
    // Inline function 'kotlin.collections.onEach' call
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.collections.onEach.<anonymous>' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = _this__u8e3s4.c2().j();
    while (tmp0_iterator.k()) {
      var element = tmp0_iterator.l();
      // Inline function 'com.varabyte.kobweb.silk.style.CssStyle.assertNoAttributeModifiers.<anonymous>' call
      // Inline function 'kotlin.collections.component2' call
      var cssModifier = element.w1();
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.style.CssStyle.assertNoAttributeModifiers.<anonymous>.<anonymous>' call
      var styleDeclaration = layer === SilkLayer_COMPONENT_VARIANTS_getInstance().y31_1 ? 'val SomeExampleVariant = ExampleStyle.addVariant' : layer === SilkLayer_COMPONENT_STYLES_getInstance().y31_1 ? 'val ExampleStyle = CssStyle<ExampleKind>' : 'val ExampleStyle = CssStyle';
      // Inline function 'kotlin.text.appendLine' call
      var value = 'Please move Modifiers associated with attributes to the `extraModifier` parameter.';
      // Inline function 'kotlin.text.appendLine' call
      this_0.a8(value).b8(_Char___init__impl__6a9atx(10));
      // Inline function 'kotlin.text.appendLine' call
      this_0.b8(_Char___init__impl__6a9atx(10));
      // Inline function 'kotlin.text.appendLine' call
      var value_0 = 'An example of how to fix this (e.g. if the offending attribute was `tab-index`):';
      // Inline function 'kotlin.text.appendLine' call
      this_0.a8(value_0).b8(_Char___init__impl__6a9atx(10));
      // Inline function 'kotlin.text.appendLine' call
      var value_1 = trimMargin('\n                        |   // Before\n                        |   ' + styleDeclaration + ' {\n                        |       base {\n                        |          Modifier\n                        |              .backgroundColor(Colors.Magenta))\n                        |              .tabIndex(0) // <-- The offending attribute modifier\n                        |       }\n                        |   }\n                        |\n                        |   // After\n                        |   ' + styleDeclaration + '(extraModifier = Modifier.tabIndex(0)) {\n                        |       base {\n                        |           Modifier.backgroundColor(Colors.Magenta)\n                        |       }\n                        |   }\n                        ');
      // Inline function 'kotlin.text.appendLine' call
      this_0.a8(value_1).b8(_Char___init__impl__6a9atx(10));
      var tmp$ret$10 = this_0.toString();
      assertNoAttributes(cssModifier, selectorName, tmp$ret$10);
    }
    return _this__u8e3s4;
  }
  function Companion_1() {
  }
  var Companion_instance_3;
  function Companion_getInstance_2() {
    return Companion_instance_3;
  }
  function addStylesInto$mediaOrInPlace(_this__u8e3s4, query, rulesBuild) {
    if (query == null) {
      // Inline function 'kotlin.apply' call
      // Inline function 'kotlin.contracts.contract' call
      rulesBuild(_this__u8e3s4);
    } else {
      media(_this__u8e3s4, query, rulesBuild);
    }
  }
  function addStylesInto$layerOrInPlace(_this__u8e3s4, name, rulesBuild) {
    if (name == null) {
      // Inline function 'kotlin.apply' call
      // Inline function 'kotlin.contracts.contract' call
      rulesBuild(_this__u8e3s4);
    } else {
      layer(_this__u8e3s4, name, rulesBuild);
    }
  }
  function CssStyle$_init_$lambda_598xul($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.a19(2126113218);
    if (isTraceInProgress()) {
      traceEventStart(2126113218, $changed, -1, 'com.varabyte.kobweb.silk.style.CssStyle.<init>.<anonymous> (CssStyle.kt:131)');
    }
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.b19();
    return Companion_instance;
  }
  function CssStyle$addStyles$lambda($styles) {
    return function ($this$style) {
      // Inline function 'kotlin.collections.iterator' call
      var tmp0_iterator = $styles.o2k_1.c2().j();
      while (tmp0_iterator.k()) {
        var element = tmp0_iterator.l();
        // Inline function 'com.varabyte.kobweb.silk.style.CssStyle.addStyles.<anonymous>.<anonymous>' call
        $this$style.h2e(element.v1(), element.w1());
      }
      // Inline function 'kotlin.collections.iterator' call
      var tmp0_iterator_0 = $styles.p2k_1.c2().j();
      while (tmp0_iterator_0.k()) {
        var element_0 = tmp0_iterator_0.l();
        // Inline function 'com.varabyte.kobweb.silk.style.CssStyle.addStyles.<anonymous>.<anonymous>' call
        $this$style.n2e(element_0.v1(), element_0.w1());
      }
      return Unit_instance;
    };
  }
  function CssStyle$addStylesInto$lambda$lambda(this$0, $name, $styles) {
    return function ($this$layerOrInPlace) {
      addStyles($this$layerOrInPlace, this$0, $name, $styles);
      return Unit_instance;
    };
  }
  function CssStyle$addStylesInto$lambda($classNames, $styleSheet, $layer, this$0) {
    return function (name, styles) {
      var tmp;
      if (isNotEmpty(styles)) {
        $classNames.h(name);
        addStylesInto$layerOrInPlace($styleSheet, $layer, CssStyle$addStylesInto$lambda$lambda(this$0, name, styles));
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function CssStyle$addStylesInto$lambda$lambda$lambda(this$0, $cssRule, $styles) {
    return function ($this$layerOrInPlace) {
      addStyles($this$layerOrInPlace, this$0, $cssRule, $styles);
      return Unit_instance;
    };
  }
  function CssStyle$addStylesInto$lambda$lambda_0($layer, this$0, $cssRule, $styles) {
    return function ($this$mediaOrInPlace) {
      addStylesInto$layerOrInPlace($this$mediaOrInPlace, $layer, CssStyle$addStylesInto$lambda$lambda$lambda(this$0, $cssRule, $styles));
      return Unit_instance;
    };
  }
  function CssStyle$addStylesInto$lambda_0($classNames, $cssRuleKey, $styleSheet, $layer, this$0) {
    return function (name, styles) {
      var tmp;
      if (isNotEmpty(styles)) {
        $classNames.h(name);
        // Inline function 'kotlin.text.orEmpty' call
        var tmp0_elvis_lhs = $cssRuleKey.a32_1;
        var cssRule = name + (tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs);
        addStylesInto$mediaOrInPlace($styleSheet, $cssRuleKey.z31_1, CssStyle$addStylesInto$lambda$lambda_0($layer, this$0, cssRule, styles));
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function CssStyle(init, extraModifier) {
    var tmp;
    if (extraModifier === VOID) {
      tmp = CssStyle$_init_$lambda_598xul;
    } else {
      tmp = extraModifier;
    }
    extraModifier = tmp;
    this.b30_1 = init;
    this.c30_1 = extraModifier;
  }
  protoOf(CssStyle).l31 = function (selector, styleSheet, layer) {
    var classNames = mutableListOf([selector]);
    var lightModifiers = assertNoAttributeModifiers_0(mergeCssModifiers(new CssStyleScope(ColorMode_LIGHT_getInstance()), this, this.b30_1), this, selector, layer);
    var darkModifiers = assertNoAttributeModifiers_0(mergeCssModifiers(new CssStyleScope(ColorMode_DARK_getInstance()), this, this.b30_1), this, selector, layer);
    var tmp = Companion_instance_4;
    var tmp0_safe_receiver = lightModifiers.z1(Companion_getInstance_4().b32_1);
    var tmp_0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.s31_1;
    var tmp1_safe_receiver = darkModifiers.z1(Companion_getInstance_4().b32_1);
    var tmp2_safe_receiver = tmp.c32(tmp_0, tmp1_safe_receiver == null ? null : tmp1_safe_receiver.s31_1);
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      withFinalSelectorName(this, selector, tmp2_safe_receiver, CssStyle$addStylesInto$lambda(classNames, styleSheet, layer, this));
    }
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var this_0 = plus(lightModifiers.a2(), darkModifiers.a2());
    var destination = ArrayList_init_$Create$();
    var tmp0_iterator = this_0.j();
    while (tmp0_iterator.k()) {
      var element = tmp0_iterator.l();
      // Inline function 'com.varabyte.kobweb.silk.style.CssStyle.addStylesInto.<anonymous>' call
      if (!element.equals(Companion_getInstance_4().b32_1)) {
        destination.h(element);
      }
    }
    var allCssRuleKeys = destination;
    var _iterator__ex2g4s = allCssRuleKeys.j();
    $l$loop: while (_iterator__ex2g4s.k()) {
      var cssRuleKey = _iterator__ex2g4s.l();
      var tmp_1 = Companion_instance_4;
      var tmp3_safe_receiver = lightModifiers.z1(cssRuleKey);
      var tmp_2 = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.s31_1;
      var tmp4_safe_receiver = darkModifiers.z1(cssRuleKey);
      var tmp5_elvis_lhs = tmp_1.c32(tmp_2, tmp4_safe_receiver == null ? null : tmp4_safe_receiver.s31_1);
      var tmp_3;
      if (tmp5_elvis_lhs == null) {
        continue $l$loop;
      } else {
        tmp_3 = tmp5_elvis_lhs;
      }
      var group = tmp_3;
      withFinalSelectorName(this, selector, group, CssStyle$addStylesInto$lambda_0(classNames, cssRuleKey, styleSheet, layer, this));
    }
    return _ClassSelectors___init__impl__tbnzdx(classNames);
  };
  protoOf(CssStyle).m31 = function (classSelectors) {
    return new ImmutableCssStyle(classSelectors, this.c30_1);
  };
  function CssStyle_0(extraModifier, init) {
    extraModifier = extraModifier === VOID ? Companion_instance : extraModifier;
    return new CssStyle$2(init, extraModifier);
  }
  function CssStyleScope(colorMode) {
    StyleScope.call(this);
    this.j31_1 = colorMode;
  }
  function ComponentKind() {
  }
  function RestrictedKind() {
  }
  function CssStyleBaseScope(colorMode) {
    this.e32_1 = colorMode;
  }
  function Light(styles) {
    this.r31_1 = styles;
  }
  function Dark(styles) {
    this.q31_1 = styles;
  }
  function ColorAgnostic(styles) {
    this.p31_1 = styles;
  }
  function ColorAware(lightStyles, darkStyles) {
    this.n31_1 = lightStyles;
    this.o31_1 = darkStyles;
  }
  function Companion_2() {
  }
  protoOf(Companion_2).c32 = function (lightModifiers, darkModifiers) {
    var tmp;
    if (lightModifiers == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.style.Companion.from.<anonymous>' call
      // Inline function 'kotlin.apply' call
      var this_0 = new ComparableStyleScope();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.style.Companion.from.<anonymous>.<anonymous>' call
      toStyles(lightModifiers)(this_0);
      tmp = this_0;
    }
    var lightStyles = tmp;
    var tmp_0;
    if (darkModifiers == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.style.Companion.from.<anonymous>' call
      // Inline function 'kotlin.apply' call
      var this_1 = new ComparableStyleScope();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.style.Companion.from.<anonymous>.<anonymous>' call
      toStyles(darkModifiers)(this_1);
      tmp_0 = this_1;
    }
    var darkStyles = tmp_0;
    if (lightStyles == null && darkStyles == null)
      return null;
    if (!(lightStyles == null) && darkStyles == null)
      return new Light(lightStyles);
    if (lightStyles == null && !(darkStyles == null))
      return new Dark(darkStyles);
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(!(lightStyles == null) && !(darkStyles == null))) {
      // Inline function 'kotlin.check.<anonymous>' call
      var message = 'Check failed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var tmp_1;
    if (equals(lightStyles, darkStyles)) {
      tmp_1 = new ColorAgnostic(lightStyles);
    } else {
      tmp_1 = new ColorAware(lightStyles, darkStyles);
    }
    return tmp_1;
  };
  var Companion_instance_4;
  function Companion_getInstance_3() {
    return Companion_instance_4;
  }
  function _ClassSelectors___init__impl__tbnzdx(value) {
    return value;
  }
  function _get_value__a43j40($this) {
    return $this;
  }
  function _ClassSelectors___get_classNames__impl__eyto04($this) {
    // Inline function 'kotlin.collections.map' call
    var this_0 = _get_value__a43j40($this);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.j();
    while (tmp0_iterator.k()) {
      var item = tmp0_iterator.l();
      // Inline function 'com.varabyte.kobweb.silk.style.ClassSelectors.<get-classNames>.<anonymous>' call
      var tmp$ret$0 = substringAfterLast(item, _Char___init__impl__6a9atx(46));
      destination.h(tmp$ret$0);
    }
    return destination;
  }
  function ImmutableCssStyle(classSelectors, extraModifier) {
    this.f32_1 = extraModifier;
    this.g32_1 = toSet(_ClassSelectors___get_classNames__impl__eyto04(classSelectors));
  }
  protoOf(ImmutableCssStyle).h32 = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.a19(114788234);
    if (isTraceInProgress()) {
      traceEventStart(114788234, $changed, -1, 'com.varabyte.kobweb.silk.style.ImmutableCssStyle.toModifier (CssStyle.kt:406)');
    }
    $composer_0.a19(-1790361069);
    // Inline function 'kotlin.collections.filterNot' call
    // Inline function 'kotlin.collections.filterNotTo' call
    var this_0 = this.g32_1;
    var destination = ArrayList_init_$Create$();
    var tmp0_iterator = this_0.j();
    while (tmp0_iterator.k()) {
      var element = tmp0_iterator.l();
      // Inline function 'com.varabyte.kobweb.silk.style.ImmutableCssStyle.toModifier.<anonymous>' call
      // Inline function 'kotlin.text.lowercase' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$1 = Companion_instance_7.i32($composer_0, 6).l32().g2_1.toLowerCase();
      if (!endsWith(element, tmp$ret$1)) {
        destination.h(element);
      }
    }
    $composer_0.b19();
    var currentClassNames = destination;
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!currentClassNames.q()) {
      var tmp_0 = Companion_instance;
      // Inline function 'kotlin.collections.toTypedArray' call
      var tmp$ret$6 = copyToArray(currentClassNames);
      tmp = classNames(tmp_0, tmp$ret$6.slice());
    } else {
      tmp = Companion_instance;
    }
    var tmp0 = tmp.u2u(this.f32_1($composer_0, 0));
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.b19();
    return tmp0;
  };
  function GeneralKind() {
  }
  function ExtendingCssStyle() {
  }
  function toModifier(_this__u8e3s4, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.a19(748086722);
    if (isTraceInProgress()) {
      traceEventStart(748086722, $changed, -1, 'com.varabyte.kobweb.silk.style.toModifier (CssStyle.kt:564)');
    }
    var tmp0 = _toModifier(_this__u8e3s4, $composer_0, 14 & $changed);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.b19();
    return tmp0;
  }
  function _toModifier(_this__u8e3s4, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.a19(1265379901);
    if (isTraceInProgress()) {
      traceEventStart(1265379901, $changed, -1, 'com.varabyte.kobweb.silk.style._toModifier (CssStyle.kt:561)');
    }
    var tmp0 = getValue(get_SilkTheme().k2z_1, _this__u8e3s4).h32($composer_0, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.b19();
    return tmp0;
  }
  function toModifier_0(_this__u8e3s4, variants, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.a19(-431222543);
    if (isTraceInProgress()) {
      traceEventStart(-431222543, $changed, -1, 'com.varabyte.kobweb.silk.style.toModifier (CssStyle.kt:575)');
    }
    var tmp = _toModifier(_this__u8e3s4, $composer_0, 14 & $changed);
    var tmp0_safe_receiver = combine(toList(variants), $composer_0, 0);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.m32($composer_0, 0);
    var tmp0 = tmp.u2u(tmp1_elvis_lhs == null ? Companion_instance : tmp1_elvis_lhs);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.b19();
    return tmp0;
  }
  function base(_this__u8e3s4, extraModifier, init) {
    extraModifier = extraModifier === VOID ? Companion_instance : extraModifier;
    return base_2(_this__u8e3s4, base$lambda(extraModifier), init);
  }
  function CssStyle_1(extraModifier, init) {
    return new CssStyle$4(init, extraModifier);
  }
  function base_0(_this__u8e3s4, extraModifier, init) {
    extraModifier = extraModifier === VOID ? Companion_instance : extraModifier;
    return base_1(_this__u8e3s4, base$lambda_0(extraModifier), init);
  }
  function base_1(_this__u8e3s4, extraModifier, init) {
    return new base$3(extraModifier, init);
  }
  function CssStyle_2(extraModifier, init) {
    extraModifier = extraModifier === VOID ? Companion_instance : extraModifier;
    return new CssStyle$5(init, extraModifier);
  }
  function base_2(_this__u8e3s4, extraModifier, init) {
    return CssStyle_1(extraModifier, base$lambda_1(init));
  }
  function CssStyle$o$_init_$lambda_60e9n6($extraModifier) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.a19(-256215983);
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(-256215983, $changed, -1, 'com.varabyte.kobweb.silk.style.CssStyle.<no name provided>.<init>.<anonymous> (CssStyle.kt:521)');
        tmp = Unit_instance;
      }
      var tmp0 = $extraModifier;
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_instance;
      }
      $composer_0.b19();
      return tmp0;
    };
  }
  function CssStyle$2($init, $extraModifier) {
    CssStyle.call(this, $init, CssStyle$o$_init_$lambda_60e9n6($extraModifier));
  }
  function base$lambda($extraModifier) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.a19(-2139862911);
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(-2139862911, $changed, -1, 'com.varabyte.kobweb.silk.style.base.<anonymous> (CssStyle.kt:531)');
        tmp = Unit_instance;
      }
      var tmp0 = $extraModifier;
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_instance;
      }
      $composer_0.b19();
      return tmp0;
    };
  }
  function CssStyle$4($init, $extraModifier) {
    CssStyle.call(this, $init, $extraModifier);
  }
  function base$lambda_0($extraModifier) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.a19(-2139862911);
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(-2139862911, $changed, -1, 'com.varabyte.kobweb.silk.style.base.<anonymous> (CssStyle.kt:513)');
        tmp = Unit_instance;
      }
      var tmp0 = $extraModifier;
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_instance;
      }
      $composer_0.b19();
      return tmp0;
    };
  }
  function base$o$_init_$lambda$lambda_d0jdie($this, $init) {
    return function () {
      // Inline function 'kotlin.let' call
      var this_0 = new CssStyleBaseScope($this.j31_1);
      // Inline function 'kotlin.contracts.contract' call
      return $init(this_0);
    };
  }
  function base$o$_init_$lambda_5dljwv($init) {
    return function (_this__u8e3s4) {
      _this__u8e3s4.k31(base$o$_init_$lambda$lambda_d0jdie(_this__u8e3s4, $init));
      return Unit_instance;
    };
  }
  function base$3($extraModifier, $init) {
    CssStyle.call(this, base$o$_init_$lambda_5dljwv($init), $extraModifier);
  }
  function CssStyle$o$_init_$lambda_60e9n6_0($extraModifier) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.a19(-256215983);
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(-256215983, $changed, -1, 'com.varabyte.kobweb.silk.style.CssStyle.<no name provided>.<init>.<anonymous> (CssStyle.kt:503)');
        tmp = Unit_instance;
      }
      var tmp0 = $extraModifier;
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_instance;
      }
      $composer_0.b19();
      return tmp0;
    };
  }
  function CssStyle$5($init, $extraModifier) {
    CssStyle.call(this, $init, CssStyle$o$_init_$lambda_60e9n6_0($extraModifier));
  }
  function base$lambda$lambda($this_CssStyle, $init) {
    return function () {
      // Inline function 'kotlin.let' call
      var this_0 = new CssStyleBaseScope($this_CssStyle.j31_1);
      // Inline function 'kotlin.contracts.contract' call
      return $init(this_0);
    };
  }
  function base$lambda_1($init) {
    return function ($this$CssStyle) {
      $this$CssStyle.k31(base$lambda$lambda($this$CssStyle, $init));
      return Unit_instance;
    };
  }
  var com_varabyte_kobweb_silk_style_CssStyleVariant$stable;
  var com_varabyte_kobweb_silk_style_SimpleCssStyleVariant$stable;
  var com_varabyte_kobweb_silk_style_ExtendingCssStyleVariant$stable;
  function CssStyleVariant() {
  }
  protoOf(CssStyleVariant).n32 = function (next) {
    return new CompositeCssStyleVariant(this, next);
  };
  function SimpleCssStyleVariant_init_$Init$(init, extraModifier, baseStyle, $this) {
    SimpleCssStyleVariant.call($this, new SimpleCssStyleVariant$1(init, extraModifier), baseStyle);
    return $this;
  }
  function SimpleCssStyleVariant_init_$Create$(init, extraModifier, baseStyle) {
    return SimpleCssStyleVariant_init_$Init$(init, extraModifier, baseStyle, objectCreate(protoOf(SimpleCssStyleVariant)));
  }
  function SimpleCssStyleVariant$1($init, $extraModifier) {
    CssStyle.call(this, $init, $extraModifier);
  }
  function SimpleCssStyleVariant(cssStyle, baseStyle) {
    CssStyleVariant.call(this);
    this.o32_1 = cssStyle;
    this.p32_1 = baseStyle;
  }
  protoOf(SimpleCssStyleVariant).m32 = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.a19(-1935545974);
    if (isTraceInProgress()) {
      traceEventStart(-1935545974, $changed, -1, 'com.varabyte.kobweb.silk.style.SimpleCssStyleVariant.toModifier (CssStyleVariant.kt:47)');
    }
    var tmp0 = toModifier_0(this.o32_1, [], $composer_0, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.b19();
    return tmp0;
  };
  function ExtendingCssStyleVariant() {
  }
  function addVariant(_this__u8e3s4, extraModifier, init) {
    return new SimpleCssStyleVariant(new addVariant$1(init, extraModifier), _this__u8e3s4);
  }
  function CompositeCssStyleVariant(head, tail) {
    CssStyleVariant.call(this);
    this.q32_1 = head;
    this.r32_1 = tail;
  }
  protoOf(CompositeCssStyleVariant).m32 = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.a19(1761922567);
    if (isTraceInProgress()) {
      traceEventStart(1761922567, $changed, -1, 'com.varabyte.kobweb.silk.style.CompositeCssStyleVariant.toModifier (CssStyleVariant.kt:55)');
    }
    var tmp0 = this.q32_1.m32($composer_0, 0).u2u(this.r32_1.m32($composer_0, 0));
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.b19();
    return tmp0;
  };
  function combine(_this__u8e3s4, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.a19(867312062);
    if (isTraceInProgress()) {
      traceEventStart(867312062, $changed, -1, 'com.varabyte.kobweb.silk.style.combine (CssStyleVariant.kt:98)');
    }
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlin.collections.reduceOrNull' call
      var iterator = _this__u8e3s4.j();
      if (!iterator.k()) {
        tmp$ret$0 = null;
        break $l$block;
      }
      var accumulator = iterator.l();
      while (iterator.k()) {
        // Inline function 'com.varabyte.kobweb.silk.style.combine.<anonymous>' call
        var acc = accumulator;
        var variant = iterator.l();
        var tmp;
        if (!(acc == null) && !(variant == null)) {
          tmp = acc.n32(variant);
        } else {
          tmp = acc == null ? variant : acc;
        }
        accumulator = tmp;
      }
      tmp$ret$0 = accumulator;
    }
    var tmp0 = tmp$ret$0;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.b19();
    return tmp0;
  }
  function addVariant_0(_this__u8e3s4, extraModifier, init) {
    extraModifier = extraModifier === VOID ? Companion_instance : extraModifier;
    return addVariant(_this__u8e3s4, addVariant$lambda(extraModifier), init);
  }
  function addVariantBase(_this__u8e3s4, extraModifier, init) {
    extraModifier = extraModifier === VOID ? Companion_instance : extraModifier;
    return addVariantBase_0(_this__u8e3s4, addVariantBase$lambda(extraModifier), init);
  }
  function addVariantBase_0(_this__u8e3s4, extraModifier, init) {
    return SimpleCssStyleVariant_init_$Create$(addVariantBase$lambda_0(init), extraModifier, _this__u8e3s4);
  }
  function addVariant$1($init, $extraModifier) {
    CssStyle.call(this, $init, $extraModifier);
  }
  function addVariant$lambda($extraModifier) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.a19(1967918819);
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(1967918819, $changed, -1, 'com.varabyte.kobweb.silk.style.addVariant.<anonymous> (CssStyleVariant.kt:108)');
        tmp = Unit_instance;
      }
      var tmp0 = $extraModifier;
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_instance;
      }
      $composer_0.b19();
      return tmp0;
    };
  }
  function addVariantBase$lambda($extraModifier) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.a19(754846533);
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(754846533, $changed, -1, 'com.varabyte.kobweb.silk.style.addVariantBase.<anonymous> (CssStyleVariant.kt:130)');
        tmp = Unit_instance;
      }
      var tmp0 = $extraModifier;
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_instance;
      }
      $composer_0.b19();
      return tmp0;
    };
  }
  function addVariantBase$lambda$lambda($this_SimpleCssStyleVariant, $init) {
    return function () {
      // Inline function 'kotlin.let' call
      var this_0 = new CssStyleBaseScope($this_SimpleCssStyleVariant.j31_1);
      // Inline function 'kotlin.contracts.contract' call
      return $init(this_0);
    };
  }
  function addVariantBase$lambda_0($init) {
    return function ($this$SimpleCssStyleVariant) {
      $this$SimpleCssStyleVariant.k31(addVariantBase$lambda$lambda($this$SimpleCssStyleVariant, $init));
      return Unit_instance;
    };
  }
  function get_selectorSeparators() {
    _init_properties_StyleScope_kt__rik58j();
    return selectorSeparators;
  }
  var selectorSeparators;
  var com_varabyte_kobweb_silk_style_StyleScope$stable;
  var com_varabyte_kobweb_silk_style_CssModifier_Key$stable;
  var com_varabyte_kobweb_silk_style_CssModifier$stable;
  function StyleScope() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.w2z_1 = ArrayList_init_$Create$();
    this.x2z_1 = this.w2z_1;
  }
  protoOf(StyleScope).k31 = function (createModifier) {
    this.w2z_1.h(new CssModifier(createModifier()));
  };
  protoOf(StyleScope).y2z = function (mediaQuery, suffix, createModifier) {
    this.w2z_1.h(new CssModifier(createModifier(), mediaQuery, suffix));
  };
  protoOf(StyleScope).z2z = function (suffix, createModifier) {
    this.w2z_1.h(new CssModifier(createModifier(), null, suffix));
  };
  protoOf(StyleScope).a30 = function (mediaQuery, createModifier) {
    this.w2z_1.h(new CssModifier(createModifier(), mediaQuery));
  };
  protoOf(StyleScope).d32 = function (_this__u8e3s4, createModifier) {
    this.a30(toMinWidthQuery(_this__u8e3s4), createModifier);
  };
  function Companion_3() {
    Companion_instance_5 = this;
    this.b32_1 = new Key(null, null);
  }
  var Companion_instance_5;
  function Companion_getInstance_4() {
    if (Companion_instance_5 == null)
      new Companion_3();
    return Companion_instance_5;
  }
  function Key(mediaQuery, suffix) {
    this.z31_1 = mediaQuery;
    this.a32_1 = suffix;
  }
  protoOf(Key).toString = function () {
    return 'Key(mediaQuery=' + this.z31_1 + ', suffix=' + this.a32_1 + ')';
  };
  protoOf(Key).hashCode = function () {
    var result = this.z31_1 == null ? 0 : getStringHashCode(this.z31_1);
    result = imul(result, 31) + (this.a32_1 == null ? 0 : getStringHashCode(this.a32_1)) | 0;
    return result;
  };
  protoOf(Key).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Key))
      return false;
    var tmp0_other_with_cast = other instanceof Key ? other : THROW_CCE();
    if (!(this.z31_1 == tmp0_other_with_cast.z31_1))
      return false;
    if (!(this.a32_1 == tmp0_other_with_cast.a32_1))
      return false;
    return true;
  };
  function CssModifier(modifier, mediaQuery, suffix) {
    Companion_getInstance_4();
    mediaQuery = mediaQuery === VOID ? null : mediaQuery;
    suffix = suffix === VOID ? null : suffix;
    this.s31_1 = modifier;
    this.t31_1 = mediaQuery;
    var tmp = this;
    var tmp_0;
    if (suffix == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.takeIf' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp_1;
      // Inline function 'com.varabyte.kobweb.silk.style.CssModifier.suffix.<anonymous>' call
      // Inline function 'kotlin.text.isNotBlank' call
      if (!isBlank(suffix)) {
        tmp_1 = suffix;
      } else {
        tmp_1 = null;
      }
      tmp_0 = tmp_1;
    }
    var tmp1_safe_receiver = tmp_0;
    var tmp_2;
    if (tmp1_safe_receiver == null) {
      tmp_2 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.style.CssModifier.suffix.<anonymous>' call
      tmp_2 = !get_selectorSeparators().o(new Char(first(tmp1_safe_receiver))) ? ' ' + tmp1_safe_receiver : tmp1_safe_receiver;
    }
    tmp.u31_1 = tmp_2;
  }
  protoOf(CssModifier).v31 = function (other) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(!(this === other) && equals(this.t31_1, other.t31_1) && this.u31_1 == other.u31_1)) {
      // Inline function 'kotlin.check.<anonymous>' call
      var message = 'Check failed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return new CssModifier(this.s31_1.u2u(other.s31_1), this.t31_1, this.u31_1);
  };
  protoOf(CssModifier).v1 = function () {
    var tmp0_safe_receiver = this.t31_1;
    return new Key(tmp0_safe_receiver == null ? null : toString(tmp0_safe_receiver), this.u31_1);
  };
  function assertNoAttributes(_this__u8e3s4, selectorName, extraContext) {
    _init_properties_StyleScope_kt__rik58j();
    var attrsScope = ComparableAttrsScope_init_$Create$();
    toAttrs(_this__u8e3s4.s31_1)(attrsScope);
    if (attrsScope.p2j_1.q())
      return Unit_instance;
    // Inline function 'kotlin.error' call
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.silk.style.assertNoAttributes.<anonymous>' call
    // Inline function 'kotlin.text.appendLine' call
    var value = 'Style block declarations cannot contain Modifiers that specify attributes. Only style modifiers are allowed here.';
    // Inline function 'kotlin.text.appendLine' call
    this_0.a8(value).b8(_Char___init__impl__6a9atx(10));
    // Inline function 'kotlin.text.appendLine' call
    this_0.b8(_Char___init__impl__6a9atx(10));
    // Inline function 'kotlin.text.appendLine' call
    var value_0 = 'Details:';
    // Inline function 'kotlin.text.appendLine' call
    this_0.a8(value_0).b8(_Char___init__impl__6a9atx(10));
    this_0.a8('\tCSS rule: ');
    this_0.a8('"' + selectorName);
    if (!(_this__u8e3s4.t31_1 == null)) {
      this_0.z7(_this__u8e3s4.t31_1);
    }
    if (!(_this__u8e3s4.u31_1 == null)) {
      this_0.a8(_this__u8e3s4.u31_1);
    }
    // Inline function 'kotlin.text.appendLine' call
    // Inline function 'kotlin.text.appendLine' call
    this_0.a8('"').b8(_Char___init__impl__6a9atx(10));
    // Inline function 'kotlin.text.appendLine' call
    var tmp = attrsScope.p2j_1.a2();
    var value_1 = '\tAttribute(s): ' + joinToString(tmp, ', ', VOID, VOID, VOID, VOID, assertNoAttributes$lambda);
    // Inline function 'kotlin.text.appendLine' call
    this_0.a8(value_1).b8(_Char___init__impl__6a9atx(10));
    // Inline function 'kotlin.text.appendLine' call
    this_0.b8(_Char___init__impl__6a9atx(10));
    // Inline function 'kotlin.text.appendLine' call
    // Inline function 'kotlin.text.appendLine' call
    this_0.a8(extraContext).b8(_Char___init__impl__6a9atx(10));
    var message = this_0.toString();
    throw IllegalStateException_init_$Create$(toString(message));
  }
  function assertNoAttributes$lambda(it) {
    _init_properties_StyleScope_kt__rik58j();
    return '"' + it + '"';
  }
  var properties_initialized_StyleScope_kt_8wepyz;
  function _init_properties_StyleScope_kt__rik58j() {
    if (!properties_initialized_StyleScope_kt_8wepyz) {
      properties_initialized_StyleScope_kt_8wepyz = true;
      selectorSeparators = setOf([new Char(_Char___init__impl__6a9atx(32)), new Char(_Char___init__impl__6a9atx(62)), new Char(_Char___init__impl__6a9atx(43)), new Char(_Char___init__impl__6a9atx(126)), new Char(_Char___init__impl__6a9atx(46)), new Char(_Char___init__impl__6a9atx(58)), new Char(_Char___init__impl__6a9atx(44)), new Char(_Char___init__impl__6a9atx(91))]);
      com_varabyte_kobweb_silk_style_StyleScope$stable = 8;
      com_varabyte_kobweb_silk_style_CssModifier_Key$stable = 0;
      com_varabyte_kobweb_silk_style_CssModifier$stable = 8;
    }
  }
  var com_varabyte_kobweb_silk_style_animation_KeyframesBuilder$stable;
  var com_varabyte_kobweb_silk_style_animation_Keyframes$stable;
  function _get_comparableKeyframeStyles__erog4h($this) {
    // Inline function 'kotlin.collections.mapValues' call
    var this_0 = $this.j30_1;
    // Inline function 'kotlin.collections.mapValuesTo' call
    var destination = LinkedHashMap_init_$Create$_0(mapCapacity(this_0.m()));
    // Inline function 'kotlin.collections.associateByTo' call
    var tmp0_iterator = this_0.c2().j();
    while (tmp0_iterator.k()) {
      var element = tmp0_iterator.l();
      // Inline function 'kotlin.collections.mapValuesTo.<anonymous>' call
      var tmp = element.v1();
      // Inline function 'com.varabyte.kobweb.silk.style.animation.KeyframesBuilder.<get-comparableKeyframeStyles>.<anonymous>' call
      // Inline function 'kotlin.collections.component2' call
      var modifier = element.w1();
      // Inline function 'kotlin.apply' call
      var this_1 = new ComparableStyleScope();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.style.animation.KeyframesBuilder.<get-comparableKeyframeStyles>.<anonymous>.<anonymous>' call
      toStyles(modifier)(this_1);
      destination.y4(tmp, this_1);
    }
    return destination;
  }
  function KeyframesBuilder(colorMode) {
    this.i30_1 = colorMode;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.j30_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(KeyframesBuilder).s32 = function (createStyle) {
    // Inline function 'kotlin.collections.plusAssign' call
    var this_0 = this.j30_1;
    var pair = to(From_getInstance(), createStyle());
    this_0.y4(pair.ie_1, pair.je_1);
  };
  protoOf(KeyframesBuilder).t32 = function (createStyle) {
    // Inline function 'kotlin.collections.plusAssign' call
    var this_0 = this.j30_1;
    var pair = to(To_getInstance(), createStyle());
    this_0.y4(pair.ie_1, pair.je_1);
  };
  protoOf(KeyframesBuilder).equals = function (other) {
    if (!(other instanceof KeyframesBuilder))
      return false;
    return this === other || equals(_get_comparableKeyframeStyles__erog4h(this), _get_comparableKeyframeStyles__erog4h(other));
  };
  protoOf(KeyframesBuilder).hashCode = function () {
    return hashCode(_get_comparableKeyframeStyles__erog4h(this));
  };
  protoOf(KeyframesBuilder).k30 = function (stylesheet, keyframesName) {
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.j30_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(this_0.m());
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = this_0.c2().j();
    while (tmp0_iterator.k()) {
      var item = tmp0_iterator.l();
      // Inline function 'com.varabyte.kobweb.silk.style.animation.KeyframesBuilder.addKeyframesIntoStylesheet.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var keyframe = item.v1();
      // Inline function 'kotlin.collections.component2' call
      var modifier = item.w1();
      var styles = toStyles(modifier);
      var cssRuleBuilder = new StyleScopeBuilder();
      styles(cssRuleBuilder);
      var tmp$ret$3 = new CSSKeyframeRuleDeclaration(keyframe, cssRuleBuilder);
      destination.h(tmp$ret$3);
    }
    var keyframeRules = destination;
    stylesheet.t2d(new CSSKeyframesRuleDeclaration(keyframesName, keyframeRules));
  };
  function Companion_4() {
  }
  protoOf(Companion_4).u32 = function (build) {
    // Inline function 'kotlin.collections.count' call
    // Inline function 'kotlin.collections.map' call
    var this_0 = listOf_0([ColorMode_LIGHT_getInstance(), ColorMode_DARK_getInstance()]);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.j();
    while (tmp0_iterator.k()) {
      var item = tmp0_iterator.l();
      // Inline function 'com.varabyte.kobweb.silk.style.animation.Companion.isColorModeAgnostic.<anonymous>' call
      // Inline function 'kotlin.apply' call
      var this_1 = new KeyframesBuilder(item);
      // Inline function 'kotlin.contracts.contract' call
      build(this_1);
      destination.h(this_1);
    }
    return distinct(destination).m() === 1;
  };
  var Companion_instance_6;
  function Companion_getInstance_5() {
    return Companion_instance_6;
  }
  function Keyframes$usesColorMode$delegate$lambda(this$0) {
    return function () {
      return !Companion_instance_6.u32(this$0.v32_1);
    };
  }
  function Keyframes(init) {
    this.v32_1 = init;
    var tmp = this;
    tmp.w32_1 = lazy(Keyframes$usesColorMode$delegate$lambda(this));
  }
  var Breakpoint_ZERO_instance;
  var Breakpoint_SM_instance;
  var Breakpoint_MD_instance;
  var Breakpoint_LG_instance;
  var Breakpoint_XL_instance;
  function values() {
    return [Breakpoint_ZERO_getInstance(), Breakpoint_SM_getInstance(), Breakpoint_MD_getInstance(), Breakpoint_LG_getInstance(), Breakpoint_XL_getInstance()];
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var Breakpoint_entriesInitialized;
  function Breakpoint_initEntries() {
    if (Breakpoint_entriesInitialized)
      return Unit_instance;
    Breakpoint_entriesInitialized = true;
    Breakpoint_ZERO_instance = new Breakpoint('ZERO', 0);
    Breakpoint_SM_instance = new Breakpoint('SM', 1);
    Breakpoint_MD_instance = new Breakpoint('MD', 2);
    Breakpoint_LG_instance = new Breakpoint('LG', 3);
    Breakpoint_XL_instance = new Breakpoint('XL', 4);
  }
  var $ENTRIES;
  function Breakpoint(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Breakpoint_ZERO_getInstance() {
    Breakpoint_initEntries();
    return Breakpoint_ZERO_instance;
  }
  function Breakpoint_SM_getInstance() {
    Breakpoint_initEntries();
    return Breakpoint_SM_instance;
  }
  function Breakpoint_MD_getInstance() {
    Breakpoint_initEntries();
    return Breakpoint_MD_instance;
  }
  function Breakpoint_LG_getInstance() {
    Breakpoint_initEntries();
    return Breakpoint_LG_instance;
  }
  function Breakpoint_XL_getInstance() {
    Breakpoint_initEntries();
    return Breakpoint_XL_instance;
  }
  function SilkBreakpointDisplayStyles($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t1a(1560920665);
    if (!($changed === 0) || !$composer_0.v18()) {
      if (isTraceInProgress()) {
        traceEventStart(1560920665, $changed, -1, 'com.varabyte.kobweb.silk.style.breakpoint.SilkBreakpointDisplayStyles (BreakpointConditions.kt:42)');
      }
      GenericTag('style', null, ComposableSingletons$BreakpointConditionsKt_getInstance().x32_1, $composer_0, 390, 2);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.m13();
    }
    var tmp0_safe_receiver = $composer_0.u1a();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.u1f(SilkBreakpointDisplayStyles$lambda($changed));
    }
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.n25(p0, p1, p2);
    };
  }
  function ComposableSingletons$BreakpointConditionsKt$lambda_1$lambda_jljler($this$GenericTag, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(321895361, $changed, -1, 'com.varabyte.kobweb.silk.style.breakpoint.ComposableSingletons$BreakpointConditionsKt.lambda-1.<anonymous> (BreakpointConditions.kt:44)');
    }
    $composer_0.a19(560324167);
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = $composer_0.v19($this$GenericTag);
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.f1a();
    var tmp;
    if (invalid || it === Companion_getInstance().s13_1) {
      // Inline function 'com.varabyte.kobweb.silk.style.breakpoint.ComposableSingletons$BreakpointConditionsKt.lambda-1.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$BreakpointConditionsKt$lambda_1$lambda$lambda_jtcz2q($this$GenericTag);
      $composer_0.l1a(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.b19();
    DisposableEffect(Unit_instance, tmp0_group, $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function _no_name_provided__qut3iv($cssStylesheet) {
    this.y32_1 = $cssStylesheet;
  }
  protoOf(_no_name_provided__qut3iv).ml = function () {
    // Inline function 'com.varabyte.kobweb.silk.style.breakpoint.ComposableSingletons$BreakpointConditionsKt.lambda-1.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
    var tmp0_safe_receiver = this.y32_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      clearCSSRules(tmp0_safe_receiver);
    }
  };
  function ComposableSingletons$BreakpointConditionsKt$lambda_1$lambda$lambda_jtcz2q($this_GenericTag) {
    return function ($this$DisposableEffect) {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = $this_GenericTag.v2c($this$DisposableEffect).sheet;
      var cssStylesheet = tmp instanceof CSSStyleSheet ? tmp : null;
      var tmp0_iterator = get_entries().j();
      while (tmp0_iterator.k()) {
        var element = tmp0_iterator.l();
        // Inline function 'com.varabyte.kobweb.silk.style.breakpoint.ComposableSingletons$BreakpointConditionsKt.lambda-1.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var minWidthQuery = (new CSSMediaRuleDeclaration(toMinWidthQuery(element), emptyList())).j2d();
        var invertMinWidthQuery = (new CSSMediaRuleDeclaration(invert(toMinWidthQuery(element)), emptyList())).j2d();
        if (cssStylesheet == null)
          null;
        else {
          // Inline function 'kotlin.text.lowercase' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp$ret$3 = element.g2_1.toLowerCase();
          addRule(cssStylesheet, invertMinWidthQuery + ' { .silk-display-if-at-least-' + tmp$ret$3 + ' { display: none !important; } }');
        }
        if (cssStylesheet == null)
          null;
        else {
          // Inline function 'kotlin.text.lowercase' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp$ret$5 = element.g2_1.toLowerCase();
          addRule(cssStylesheet, minWidthQuery + ' { .silk-display-until-' + tmp$ret$5 + ' { display: none !important; } }');
        }
      }
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new _no_name_provided__qut3iv(cssStylesheet);
    };
  }
  function ComposableSingletons$BreakpointConditionsKt() {
    ComposableSingletons$BreakpointConditionsKt_instance = this;
    var tmp = this;
    tmp.x32_1 = ComposableLambda$invoke$ref_1(composableLambdaInstance(321895361, false, ComposableSingletons$BreakpointConditionsKt$lambda_1$lambda_jljler));
  }
  var ComposableSingletons$BreakpointConditionsKt_instance;
  function ComposableSingletons$BreakpointConditionsKt_getInstance() {
    if (ComposableSingletons$BreakpointConditionsKt_instance == null)
      new ComposableSingletons$BreakpointConditionsKt();
    return ComposableSingletons$BreakpointConditionsKt_instance;
  }
  function invert(_this__u8e3s4) {
    return new Raw('not all and ' + toString(_this__u8e3s4));
  }
  function addRule(_this__u8e3s4, cssRule) {
    var cssRuleIndex = _this__u8e3s4.insertRule(cssRule, _this__u8e3s4.cssRules.length);
    return _this__u8e3s4.cssRules.item(cssRuleIndex);
  }
  function clearCSSRules(_this__u8e3s4) {
    // Inline function 'kotlin.repeat' call
    var times = _this__u8e3s4.cssRules.length;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'com.varabyte.kobweb.silk.style.breakpoint.clearCSSRules.<anonymous>' call
        _this__u8e3s4.deleteRule(0);
      }
       while (inductionVariable < times);
  }
  function SilkBreakpointDisplayStyles$lambda($$changed) {
    return function ($composer, $force) {
      SilkBreakpointDisplayStyles($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  var com_varabyte_kobweb_silk_style_breakpoint_BreakpointUnitValue_Px$stable;
  var com_varabyte_kobweb_silk_style_breakpoint_BreakpointUnitValue_Em$stable;
  var com_varabyte_kobweb_silk_style_breakpoint_BreakpointUnitValue_Rem$stable;
  var com_varabyte_kobweb_silk_style_breakpoint_BreakpointUnitValue$stable;
  var com_varabyte_kobweb_silk_style_breakpoint_BreakpointValues$stable;
  function BreakpointValues(sm, md, lg, xl) {
    this.z32_1 = sm;
    this.a33_1 = md;
    this.b33_1 = lg;
    this.c33_1 = xl;
  }
  protoOf(BreakpointValues).toString = function () {
    return 'BreakpointValues(sm=' + toString(this.z32_1) + ', md=' + toString(this.a33_1) + ', lg=' + toString(this.b33_1) + ', xl=' + toString(this.c33_1) + ')';
  };
  protoOf(BreakpointValues).hashCode = function () {
    var result = hashCode(this.z32_1);
    result = imul(result, 31) + hashCode(this.a33_1) | 0;
    result = imul(result, 31) + hashCode(this.b33_1) | 0;
    result = imul(result, 31) + hashCode(this.c33_1) | 0;
    return result;
  };
  protoOf(BreakpointValues).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BreakpointValues))
      return false;
    var tmp0_other_with_cast = other instanceof BreakpointValues ? other : THROW_CCE();
    if (!equals(this.z32_1, tmp0_other_with_cast.z32_1))
      return false;
    if (!equals(this.a33_1, tmp0_other_with_cast.a33_1))
      return false;
    if (!equals(this.b33_1, tmp0_other_with_cast.b33_1))
      return false;
    if (!equals(this.c33_1, tmp0_other_with_cast.c33_1))
      return false;
    return true;
  };
  function BreakpointSizes(sm, md, lg, xl) {
    return new BreakpointValues(new Rem(sm), new Rem(md), new Rem(lg), new Rem(xl));
  }
  function Rem(value) {
    BreakpointUnitValue.call(this, value);
  }
  protoOf(Rem).e33 = function () {
    return get_px(this.f33_1.value * numberToDouble(get_bodyFontSize(window)));
  };
  function BreakpointUnitValue(width) {
    this.f33_1 = width;
  }
  function get_bodyFontSize(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.document.body;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.style.breakpoint.<get-bodyFontSize>.<anonymous>' call
      tmp = toIntOrNull(removeSuffix(_this__u8e3s4.getComputedStyle(tmp0_safe_receiver).getPropertyValue('font-size'), 'px'));
    }
    var bodySize = tmp;
    return bodySize == null ? 16 : bodySize;
  }
  var com_varabyte_kobweb_silk_style_breakpoint_ResponsiveValues$stable;
  function ResponsiveValues(base, sm, md, lg, xl) {
    this.g33_1 = base;
    this.h33_1 = sm;
    this.i33_1 = md;
    this.j33_1 = lg;
    this.k33_1 = xl;
  }
  var com_varabyte_kobweb_silk_style_layer_LayerListBuilder$stable;
  function LayerListBuilder() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.r2z_1 = LinkedHashMap_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.map' call
    var this_0 = get_entries_0();
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.j();
    while (tmp0_iterator.k()) {
      var item = tmp0_iterator.l();
      // Inline function 'com.varabyte.kobweb.silk.style.layer.LayerListBuilder.silkLayers.<anonymous>' call
      var tmp$ret$1 = item.y31_1;
      destination.h(tmp$ret$1);
    }
    tmp_0.s2z_1 = destination;
  }
  protoOf(LayerListBuilder).t2z = function () {
    // Inline function 'kotlin.collections.orEmpty' call
    var tmp0_elvis_lhs = this.r2z_1.z1(null);
    var tmp$ret$0 = tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
    var layersToProcess = toMutableList(plus_0(this.s2z_1, tmp$ret$0));
    // Inline function 'kotlin.collections.buildList' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.collections.buildListInternal' call
    // Inline function 'kotlin.apply' call
    var this_0 = ArrayList_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.silk.style.layer.LayerListBuilder.build.<anonymous>' call
    $l$loop: while (true) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!!layersToProcess.q()) {
        break $l$loop;
      }
      var currLayer = layersToProcess.y3(0);
      this_0.h(currLayer);
      var tmp0_safe_receiver = this.r2z_1.z1(currLayer);
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.varabyte.kobweb.silk.style.layer.LayerListBuilder.build.<anonymous>.<anonymous>' call
        layersToProcess.o4(0, tmp0_safe_receiver);
      }
    }
    return this_0.g5();
  };
  var SilkLayer_RESET_instance;
  var SilkLayer_KOBWEB_COMPOSE_instance;
  var SilkLayer_BASE_instance;
  var SilkLayer_COMPONENT_STYLES_instance;
  var SilkLayer_COMPONENT_VARIANTS_instance;
  var SilkLayer_RESTRICTED_STYLES_instance;
  var SilkLayer_GENERAL_STYLES_instance;
  function values_0() {
    return [SilkLayer_RESET_getInstance(), SilkLayer_KOBWEB_COMPOSE_getInstance(), SilkLayer_BASE_getInstance(), SilkLayer_COMPONENT_STYLES_getInstance(), SilkLayer_COMPONENT_VARIANTS_getInstance(), SilkLayer_RESTRICTED_STYLES_getInstance(), SilkLayer_GENERAL_STYLES_getInstance()];
  }
  function get_entries_0() {
    if ($ENTRIES_0 == null)
      $ENTRIES_0 = enumEntries(values_0());
    return $ENTRIES_0;
  }
  var SilkLayer_entriesInitialized;
  function SilkLayer_initEntries() {
    if (SilkLayer_entriesInitialized)
      return Unit_instance;
    SilkLayer_entriesInitialized = true;
    SilkLayer_RESET_instance = new SilkLayer('RESET', 0, 'reset');
    SilkLayer_KOBWEB_COMPOSE_instance = new SilkLayer('KOBWEB_COMPOSE', 1, 'kobweb-compose');
    SilkLayer_BASE_instance = new SilkLayer('BASE', 2, 'base');
    SilkLayer_COMPONENT_STYLES_instance = new SilkLayer('COMPONENT_STYLES', 3, 'component-styles');
    SilkLayer_COMPONENT_VARIANTS_instance = new SilkLayer('COMPONENT_VARIANTS', 4, 'component-variants');
    SilkLayer_RESTRICTED_STYLES_instance = new SilkLayer('RESTRICTED_STYLES', 5, 'restricted-styles');
    SilkLayer_GENERAL_STYLES_instance = new SilkLayer('GENERAL_STYLES', 6, 'general-styles');
  }
  var $ENTRIES_0;
  function SilkLayer(name, ordinal, layerName) {
    Enum.call(this, name, ordinal);
    this.y31_1 = layerName;
  }
  function SilkLayer_RESET_getInstance() {
    SilkLayer_initEntries();
    return SilkLayer_RESET_instance;
  }
  function SilkLayer_KOBWEB_COMPOSE_getInstance() {
    SilkLayer_initEntries();
    return SilkLayer_KOBWEB_COMPOSE_instance;
  }
  function SilkLayer_BASE_getInstance() {
    SilkLayer_initEntries();
    return SilkLayer_BASE_instance;
  }
  function SilkLayer_COMPONENT_STYLES_getInstance() {
    SilkLayer_initEntries();
    return SilkLayer_COMPONENT_STYLES_instance;
  }
  function SilkLayer_COMPONENT_VARIANTS_getInstance() {
    SilkLayer_initEntries();
    return SilkLayer_COMPONENT_VARIANTS_instance;
  }
  function SilkLayer_RESTRICTED_STYLES_getInstance() {
    SilkLayer_initEntries();
    return SilkLayer_RESTRICTED_STYLES_instance;
  }
  function SilkLayer_GENERAL_STYLES_getInstance() {
    SilkLayer_initEntries();
    return SilkLayer_GENERAL_STYLES_instance;
  }
  function descendants(_this__u8e3s4, elements, createModifier) {
    return _this__u8e3s4.z2z(' :is(' + joinToString_0(elements) + ')', createModifier);
  }
  function get_ariaDisabled(_this__u8e3s4) {
    return new OfAttributeSelector(_this__u8e3s4, 'aria-disabled="true"');
  }
  function not(_this__u8e3s4, params) {
    return Companion_instance_2.l30(_this__u8e3s4, 'not', params.slice());
  }
  function get_hover(_this__u8e3s4) {
    return new OfPseudoClass(_this__u8e3s4, 'hover');
  }
  function get_active(_this__u8e3s4) {
    return new OfPseudoClass(_this__u8e3s4, 'active');
  }
  function get_focusVisible(_this__u8e3s4) {
    return new OfPseudoClass(_this__u8e3s4, 'focus-visible');
  }
  function get_placeholder(_this__u8e3s4) {
    return new OfPseudoElement(_this__u8e3s4, 'placeholder');
  }
  function get_ariaInvalid(_this__u8e3s4) {
    return new OfAttributeSelector(_this__u8e3s4, 'aria-invalid="true"');
  }
  function get_disabled(_this__u8e3s4) {
    return new OfPseudoClass(_this__u8e3s4, 'disabled');
  }
  function get_link(_this__u8e3s4) {
    return new OfPseudoClass(_this__u8e3s4, 'link');
  }
  function get_visited(_this__u8e3s4) {
    return new OfPseudoClass(_this__u8e3s4, 'visited');
  }
  function get_focus(_this__u8e3s4) {
    return new OfPseudoClass(_this__u8e3s4, 'focus');
  }
  function set__SilkTheme(_set____db54di) {
    _SilkTheme = _set____db54di;
  }
  var _SilkTheme;
  var com_varabyte_kobweb_silk_theme_MutableSilkTheme$stable;
  var com_varabyte_kobweb_silk_theme_ImmutableSilkTheme$stable;
  function _registerStyle($this, name, style, kind, layer) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme._registerStyle.<anonymous>' call
    var it = $this.i2y_1.z1(name);
    // Inline function 'kotlin.contracts.contract' call
    if (!(it == null || it === style)) {
      // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme._registerStyle.<anonymous>' call
      var message = trimIndent('\n                Attempting to register a second CssStyle with a name that\'s already used: "' + name + '"\n\n                If this was an intentional override, you should use `replaceStyle` instead.\n            ');
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.set' call
    $this.h2y_1.y4(name, style);
    // Inline function 'kotlin.collections.set' call
    $this.l2y_1.y4(style, name);
    var tmp;
    if (layer == null) {
      var tmp_0;
      if (kind.equals(getKClass(ComponentKind))) {
        tmp_0 = SilkLayer_COMPONENT_STYLES_getInstance();
      } else if (kind.equals(getKClass(RestrictedKind))) {
        tmp_0 = SilkLayer_RESTRICTED_STYLES_getInstance();
      } else if (kind.equals(getKClass(GeneralKind))) {
        tmp_0 = SilkLayer_GENERAL_STYLES_getInstance();
      } else {
        var message_0 = 'Unknown kind: ' + toString(kind);
        throw IllegalStateException_init_$Create$(toString(message_0));
      }
      tmp = tmp_0.y31_1;
    } else {
      tmp = layer;
    }
    var finalLayer = tmp;
    // Inline function 'kotlin.takeIf' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp_1;
    // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme._registerStyle.<anonymous>' call
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(finalLayer) > 0) {
      tmp_1 = finalLayer;
    } else {
      tmp_1 = null;
    }
    var tmp2_safe_receiver = tmp_1;
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      $this.n2y_1.y4(name, tmp2_safe_receiver);
    }
    if (style instanceof ExtendingCssStyle) {
      // Inline function 'kotlin.collections.getOrPut' call
      var this_0 = $this.r2y_1;
      var value = this_0.z1(style);
      var tmp_2;
      if (value == null) {
        // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme._registerStyle.<anonymous>' call
        // Inline function 'kotlin.collections.mutableListOf' call
        var answer = ArrayList_init_$Create$();
        this_0.y4(style, answer);
        tmp_2 = answer;
      } else {
        tmp_2 = value;
      }
      tmp_2.h(style.n33_1);
    }
  }
  function updateReplaced($this, originalStyle, newStyle) {
    // Inline function 'kotlin.collections.set' call
    $this.p2y_1.y4(originalStyle, newStyle);
    var tmp0_safe_receiver = $this.r2y_1.z4(originalStyle);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      $this.r2y_1.y4(newStyle, tmp0_safe_receiver);
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = $this.r2y_1.b2().j();
    while (tmp0_iterator.k()) {
      var element = tmp0_iterator.l();
      // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.updateReplaced.<anonymous>' call
      if (element.d2(originalStyle)) {
        element.h(newStyle);
      }
    }
  }
  function MutableSilkTheme$replaceStyle$newStyle$1($init, $extraModifier) {
    CssStyle.call(this, $init, $extraModifier);
  }
  function MutableSilkTheme() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.h2y_1 = LinkedHashMap_init_$Create$();
    this.i2y_1 = this.h2y_1;
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0.j2y_1 = LinkedHashMap_init_$Create$();
    this.k2y_1 = this.j2y_1;
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_1.l2y_1 = LinkedHashMap_init_$Create$();
    this.m2y_1 = this.l2y_1;
    var tmp_2 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_2.n2y_1 = LinkedHashMap_init_$Create$();
    this.o2y_1 = this.n2y_1;
    var tmp_3 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_3.p2y_1 = LinkedHashMap_init_$Create$();
    this.q2y_1 = this.p2y_1;
    var tmp_4 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_4.r2y_1 = LinkedHashMap_init_$Create$();
    this.s2y_1 = this.r2y_1;
    var tmp_5 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_5.t2y_1 = LinkedHashMap_init_$Create$();
    this.u2y_1 = this.t2y_1;
    var tmp_6 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_6.v2y_1 = LinkedHashMap_init_$Create$();
    this.w2y_1 = this.v2y_1;
    var tmp_7 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_7.x2y_1 = LinkedHashMap_init_$Create$();
    this.y2y_1 = this.x2y_1;
    var tmp_8 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_8.z2y_1 = LinkedHashMap_init_$Create$();
    this.a2z_1 = this.z2y_1;
    var tmp_9 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_9.b2z_1 = LinkedHashMap_init_$Create$();
    this.c2z_1 = this.b2z_1;
    this.d2z_1 = new MutablePalettes();
    this.e2z_1 = BreakpointSizes(get_cssRem(30), get_cssRem(48), get_cssRem(62), get_cssRem(80));
  }
  protoOf(MutableSilkTheme).o33 = function (name, style, layer) {
    return _registerStyle(this, name, style, getKClass(ComponentKind), layer);
  };
  protoOf(MutableSilkTheme).f2z = function (name, style, layer, $super) {
    layer = layer === VOID ? null : layer;
    var tmp;
    if ($super === VOID) {
      this.o33(name, style, layer);
      tmp = Unit_instance;
    } else {
      tmp = $super.o33.call(this, name, style, layer);
    }
    return tmp;
  };
  protoOf(MutableSilkTheme).p33 = function (name, style, layer) {
    return _registerStyle(this, name, style, getKClass(RestrictedKind), layer);
  };
  protoOf(MutableSilkTheme).q33 = function (name, style, layer, $super) {
    layer = layer === VOID ? null : layer;
    var tmp;
    if ($super === VOID) {
      this.p33(name, style, layer);
      tmp = Unit_instance;
    } else {
      tmp = $super.p33.call(this, name, style, layer);
    }
    return tmp;
  };
  protoOf(MutableSilkTheme).r33 = function (name, style, layer) {
    return _registerStyle(this, name, style, getKClass(GeneralKind), layer);
  };
  protoOf(MutableSilkTheme).s33 = function (name, style, layer, $super) {
    layer = layer === VOID ? null : layer;
    var tmp;
    if ($super === VOID) {
      this.r33(name, style, layer);
      tmp = Unit_instance;
    } else {
      tmp = $super.r33.call(this, name, style, layer);
    }
    return tmp;
  };
  protoOf(MutableSilkTheme).t33 = function (style, extraModifier, init) {
    var tmp0_elvis_lhs = this.m2y_1.z1(style);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = 'Attempting to replace a CSS style that was never registered.';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var name = tmp;
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.collections.contains' call
    // Inline function 'kotlin.collections.containsKey' call
    var this_0 = this.q2y_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!!(isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).x1(style)) {
      // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.replaceStyle.<anonymous>' call
      var message_0 = 'Attempting to override style "' + name + '" twice';
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    var newStyle = new MutableSilkTheme$replaceStyle$newStyle$1(init, extraModifier);
    // Inline function 'kotlin.collections.set' call
    this.h2y_1.y4(name, newStyle);
    // Inline function 'kotlin.collections.set' call
    this.l2y_1.y4(newStyle, name);
    updateReplaced(this, style, newStyle);
  };
  protoOf(MutableSilkTheme).u33 = function (name, variant, layer) {
    var tmp0_elvis_lhs = variant instanceof SimpleCssStyleVariant ? variant : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = 'You can only register variants created by `addVariant` or `addVariantBase`.';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var simpleVariant = tmp;
    var tmp_0;
    if (startsWith(name, _Char___init__impl__6a9atx(45))) {
      var tmp1_elvis_lhs = this.m2y_1.z1(simpleVariant.p32_1);
      var tmp_1;
      if (tmp1_elvis_lhs == null) {
        var message_0 = 'When registering variant "' + name + '", somehow its base style was not registered correctly. This is not expected, so please report the issue.';
        throw IllegalStateException_init_$Create$(toString(message_0));
      } else {
        tmp_1 = tmp1_elvis_lhs;
      }
      var baseStyleName = tmp_1;
      tmp_0 = baseStyleName + name;
    } else {
      tmp_0 = name;
    }
    var name_0 = tmp_0;
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.registerVariant.<anonymous>' call
    var it = this.k2y_1.z1(name_0);
    // Inline function 'kotlin.contracts.contract' call
    if (!(it == null || it === variant)) {
      // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.registerVariant.<anonymous>' call
      var message_1 = trimIndent('\n            Attempting to register a second variant with a name that\'s already used: "' + name_0 + "\"\n\n            This isn't allowed. Please choose a different name. If there's a usecase for this I'm unaware of,\n            consider filing an issue at https://github.com/varabyte/kobweb/issues\n        ");
      throw IllegalStateException_init_$Create$(toString(message_1));
    }
    // Inline function 'kotlin.collections.set' call
    this.j2y_1.y4(name_0, variant);
    // Inline function 'kotlin.collections.set' call
    var this_0 = this.l2y_1;
    var key = variant.o32_1;
    this_0.y4(key, name_0);
    // Inline function 'kotlin.takeIf' call
    var this_1 = layer == null ? SilkLayer_COMPONENT_VARIANTS_getInstance().y31_1 : layer;
    // Inline function 'kotlin.contracts.contract' call
    var tmp_2;
    // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.registerVariant.<anonymous>' call
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(this_1) > 0) {
      tmp_2 = this_1;
    } else {
      tmp_2 = null;
    }
    var finalLayer = tmp_2;
    if (finalLayer == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.n2y_1.y4(name_0, finalLayer);
    }
    if (variant instanceof ExtendingCssStyleVariant) {
      // Inline function 'kotlin.collections.getOrPut' call
      var this_2 = this.r2y_1;
      var key_0 = variant.o32_1;
      var value = this_2.z1(key_0);
      var tmp_3;
      if (value == null) {
        // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.registerVariant.<anonymous>' call
        // Inline function 'kotlin.collections.mutableListOf' call
        var answer = ArrayList_init_$Create$();
        this_2.y4(key_0, answer);
        tmp_3 = answer;
      } else {
        tmp_3 = value;
      }
      tmp_3.h(variant.x33_1.o32_1);
    }
  };
  protoOf(MutableSilkTheme).y33 = function (name, variant, layer, $super) {
    layer = layer === VOID ? null : layer;
    var tmp;
    if ($super === VOID) {
      this.u33(name, variant, layer);
      tmp = Unit_instance;
    } else {
      tmp = $super.u33.call(this, name, variant, layer);
    }
    return tmp;
  };
  protoOf(MutableSilkTheme).z33 = function (name, keyframes) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.registerKeyframes.<anonymous>' call
    var it = this.x2y_1.z1(name);
    // Inline function 'kotlin.contracts.contract' call
    if (!(it == null || it === keyframes)) {
      // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.registerKeyframes.<anonymous>' call
      var message = trimIndent('\n                Attempting to register a second keyframes with a name that\'s already used: "' + name + '"\n            ');
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.set' call
    this.x2y_1.y4(name, keyframes);
    // Inline function 'kotlin.collections.set' call
    this.z2y_1.y4(keyframes, name);
  };
  function registerStylesInto$orderStyles$visit(visited, $dependencies, orderedStyles, style) {
    if (visited.o(style))
      return Unit_instance;
    visited.h(style);
    var tmp0_safe_receiver = $dependencies.z1(style);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = tmp0_safe_receiver.j();
      while (tmp0_iterator.k()) {
        var element = tmp0_iterator.l();
        // Inline function 'com.varabyte.kobweb.silk.theme.ImmutableSilkTheme.registerStylesInto.orderStyles.visit.<anonymous>' call
        registerStylesInto$orderStyles$visit(visited, $dependencies, orderedStyles, element);
      }
    }
    orderedStyles.h(style);
  }
  function registerStylesInto$orderStyles(styles, dependencies) {
    if (dependencies.q())
      return styles;
    // Inline function 'kotlin.collections.mutableListOf' call
    var orderedStyles = ArrayList_init_$Create$();
    // Inline function 'kotlin.collections.mutableSetOf' call
    var visited = LinkedHashSet_init_$Create$();
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = styles.j();
    while (tmp0_iterator.k()) {
      var element = tmp0_iterator.l();
      // Inline function 'com.varabyte.kobweb.silk.theme.ImmutableSilkTheme.registerStylesInto.orderStyles.<anonymous>' call
      registerStylesInto$orderStyles$visit(visited, dependencies, orderedStyles, element);
    }
    return orderedStyles;
  }
  function ImmutableSilkTheme(mutableSilkTheme) {
    this.g2z_1 = mutableSilkTheme;
    var tmp = this;
    var tmp_0 = this.g2z_1.d2z_1;
    tmp.h2z_1 = isInterface(tmp_0, Palettes) ? tmp_0 : THROW_CCE();
    this.i2z_1 = this.g2z_1.e2z_1;
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_1.j2z_1 = LinkedHashMap_init_$Create$();
    this.k2z_1 = this.j2z_1;
  }
  protoOf(ImmutableSilkTheme).a34 = function (style) {
    return this.g2z_1.m2y_1.z1(style);
  };
  protoOf(ImmutableSilkTheme).l2z = function (silkStyleSheet) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(_SilkTheme == null)) {
      // Inline function 'kotlin.check.<anonymous>' call
      var message = 'Check failed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = this.g2z_1.y2y_1.c2().j();
    while (tmp0_iterator.k()) {
      var element = tmp0_iterator.l();
      // Inline function 'com.varabyte.kobweb.silk.theme.ImmutableSilkTheme.registerKeyframesInto.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var name = element.v1();
      // Inline function 'kotlin.collections.component2' call
      var keyframes = element.w1();
      silkStyleSheet.w2x(name, keyframes.v32_1);
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator_0 = this.g2z_1.c2z_1.c2().j();
    while (tmp0_iterator_0.k()) {
      var element_0 = tmp0_iterator_0.l();
      // Inline function 'com.varabyte.kobweb.silk.theme.ImmutableSilkTheme.registerKeyframesInto.<anonymous>' call
      // Inline function 'kotlin.collections.component2' call
      var keyframes_0 = element_0.w1();
      registerKeyframes(silkStyleSheet, keyframes_0);
    }
  };
  protoOf(ImmutableSilkTheme).q2z = function (stylesheet) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(_SilkTheme == null)) {
      // Inline function 'kotlin.check.<anonymous>' call
      var message = 'Check failed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var tmp = this.g2z_1.i2y_1.b2();
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.filterIsInstance' call
    // Inline function 'kotlin.collections.filterIsInstanceTo' call
    var this_0 = this.g2z_1.k2y_1.b2();
    var destination = ArrayList_init_$Create$();
    var tmp0_iterator = this_0.j();
    while (tmp0_iterator.k()) {
      var element = tmp0_iterator.l();
      if (element instanceof SimpleCssStyleVariant) {
        destination.h(element);
      }
    }
    // Inline function 'kotlin.collections.mapTo' call
    var destination_0 = ArrayList_init_$Create$_0(collectionSizeOrDefault(destination, 10));
    var tmp0_iterator_0 = destination.j();
    while (tmp0_iterator_0.k()) {
      var item = tmp0_iterator_0.l();
      // Inline function 'com.varabyte.kobweb.silk.theme.ImmutableSilkTheme.registerStylesInto.<anonymous>' call
      var tmp$ret$3 = item.o32_1;
      destination_0.h(tmp$ret$3);
    }
    var tmp_0 = plus_0(tmp, destination_0);
    // Inline function 'kotlin.collections.map' call
    var this_1 = this.g2z_1.u2y_1.b2();
    // Inline function 'kotlin.collections.mapTo' call
    var destination_1 = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_1, 10));
    var tmp0_iterator_1 = this_1.j();
    while (tmp0_iterator_1.k()) {
      var item_0 = tmp0_iterator_1.l();
      // Inline function 'com.varabyte.kobweb.silk.theme.ImmutableSilkTheme.registerStylesInto.<anonymous>' call
      var tmp$ret$6 = item_0.g34_1;
      destination_1.h(tmp$ret$6);
    }
    var tmp_1 = plus_0(tmp_0, destination_1);
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.filterIsInstance' call
    // Inline function 'kotlin.collections.filterIsInstanceTo' call
    var this_2 = this.g2z_1.w2y_1.b2();
    var destination_2 = ArrayList_init_$Create$();
    var tmp0_iterator_2 = this_2.j();
    while (tmp0_iterator_2.k()) {
      var element_0 = tmp0_iterator_2.l();
      if (element_0 instanceof SimpleComponentVariant) {
        destination_2.h(element_0);
      }
    }
    // Inline function 'kotlin.collections.mapTo' call
    var destination_3 = ArrayList_init_$Create$_0(collectionSizeOrDefault(destination_2, 10));
    var tmp0_iterator_3 = destination_2.j();
    while (tmp0_iterator_3.k()) {
      var item_1 = tmp0_iterator_3.l();
      // Inline function 'com.varabyte.kobweb.silk.theme.ImmutableSilkTheme.registerStylesInto.<anonymous>' call
      var tmp$ret$11 = item_1.h34_1;
      destination_3.h(tmp$ret$11);
    }
    var allCssStyles = plus_0(tmp_1, destination_3);
    var allCssStylesSorted = registerStylesInto$orderStyles(allCssStyles, this.g2z_1.s2y_1);
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator_4 = allCssStylesSorted.j();
    while (tmp0_iterator_4.k()) {
      var element_1 = tmp0_iterator_4.l();
      // Inline function 'com.varabyte.kobweb.silk.theme.ImmutableSilkTheme.registerStylesInto.<anonymous>' call
      var className = this.a34(element_1);
      // Inline function 'kotlin.collections.get' call
      var this_3 = this.g2z_1.o2y_1;
      var layer = (isInterface(this_3, KtMap) ? this_3 : THROW_CCE()).z1(className);
      var classSelectors = element_1.l31('.' + className, stylesheet, layer);
      // Inline function 'kotlin.collections.set' call
      var this_4 = this.j2z_1;
      var value = element_1.m31(classSelectors);
      this_4.y4(element_1, value);
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator_5 = this.g2z_1.q2y_1.c2().j();
    while (tmp0_iterator_5.k()) {
      var element_2 = tmp0_iterator_5.l();
      // Inline function 'com.varabyte.kobweb.silk.theme.ImmutableSilkTheme.registerStylesInto.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var originalStyle = element_2.v1();
      // Inline function 'kotlin.collections.component2' call
      var overrideStyle = element_2.w1();
      // Inline function 'kotlin.collections.set' call
      var this_5 = this.j2z_1;
      var value_0 = getValue(this.j2z_1, overrideStyle);
      this_5.y4(originalStyle, value_0);
    }
  };
  function get_SilkTheme() {
    var tmp0_elvis_lhs = _SilkTheme;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = "You can't access SilkTheme before first calling `prepareSilkFoundation` (or `SilkApp`, which calls it)";
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function get_name(_this__u8e3s4) {
    var tmp0_elvis_lhs = get_SilkTheme().a34(_this__u8e3s4);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = 'Name requested for invalid CssStyle. This should only be called on top-level public styles or styles that got manually registered';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function modifyStyleBase(_this__u8e3s4, style, extraModifier, init) {
    extraModifier = extraModifier === VOID ? Companion_instance : extraModifier;
    modifyStyleBase_0(_this__u8e3s4, style, modifyStyleBase$lambda(extraModifier), init);
  }
  function modifyStyleBase_0(_this__u8e3s4, style, extraModifier, init) {
    modifyStyle(_this__u8e3s4, style, extraModifier, modifyStyleBase$lambda_0(init));
  }
  function modifyStyle(_this__u8e3s4, style, extraModifier, init) {
    var tmp0_elvis_lhs = _this__u8e3s4.m2y_1.z1(style);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = 'Attempting to modify a style that was never registered.';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var styleName = tmp;
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.collections.contains' call
    // Inline function 'kotlin.collections.containsKey' call
    var this_0 = _this__u8e3s4.i2y_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!(isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).x1(styleName)) {
      // Inline function 'com.varabyte.kobweb.silk.theme.modifyStyle.<anonymous>' call
      var message_0 = 'Attempting to modify a style that was never registered: "' + styleName + '"';
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    var existingExtraModifier = style.c30_1;
    var existingInit = style.b30_1;
    var tmp_0 = modifyStyle$lambda(existingExtraModifier, extraModifier);
    _this__u8e3s4.t33(style, tmp_0, modifyStyle$lambda_0(existingInit, init));
  }
  function modifyStyleBase$lambda($extraModifier) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.a19(-308722568);
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(-308722568, $changed, -1, 'com.varabyte.kobweb.silk.theme.modifyStyleBase.<anonymous> (SilkTheme.kt:487)');
        tmp = Unit_instance;
      }
      var tmp0 = $extraModifier;
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_instance;
      }
      $composer_0.b19();
      return tmp0;
    };
  }
  function modifyStyleBase$lambda$lambda($this_modifyStyle, $init) {
    return function () {
      // Inline function 'kotlin.let' call
      var this_0 = new CssStyleBaseScope($this_modifyStyle.j31_1);
      // Inline function 'kotlin.contracts.contract' call
      return $init(this_0);
    };
  }
  function modifyStyleBase$lambda_0($init) {
    return function ($this$modifyStyle) {
      $this$modifyStyle.k31(modifyStyleBase$lambda$lambda($this$modifyStyle, $init));
      return Unit_instance;
    };
  }
  function modifyStyle$lambda($existingExtraModifier, $extraModifier) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.a19(114003212);
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(114003212, $changed, -1, 'com.varabyte.kobweb.silk.theme.modifyStyle.<anonymous> (SilkTheme.kt:475)');
        tmp = Unit_instance;
      }
      var tmp0 = $existingExtraModifier($composer_0, 0).u2u($extraModifier($composer_0, 0));
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_instance;
      }
      $composer_0.b19();
      return tmp0;
    };
  }
  function modifyStyle$lambda_0($existingInit, $init) {
    return function ($this$replaceStyle) {
      $existingInit($this$replaceStyle);
      $init($this$replaceStyle);
      return Unit_instance;
    };
  }
  function toMinWidthQuery(_this__u8e3s4) {
    return new MediaFeature('min-width', toWidth(_this__u8e3s4));
  }
  function toWidth(_this__u8e3s4) {
    var tmp0_safe_receiver = toValue(_this__u8e3s4);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.f33_1;
    return tmp1_elvis_lhs == null ? get_px(0) : tmp1_elvis_lhs;
  }
  function toValue(_this__u8e3s4) {
    var tmp;
    switch (_this__u8e3s4.h2_1) {
      case 0:
        tmp = null;
        break;
      case 1:
        tmp = get_SilkTheme().i2z_1.z32_1;
        break;
      case 2:
        tmp = get_SilkTheme().i2z_1.a33_1;
        break;
      case 3:
        tmp = get_SilkTheme().i2z_1.b33_1;
        break;
      case 4:
        tmp = get_SilkTheme().i2z_1.c33_1;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function get_breakpointFloor(_this__u8e3s4) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.last' call
      var this_0 = get_entries();
      var iterator = this_0.u1(this_0.m());
      while (iterator.e4()) {
        var element = iterator.f4();
        // Inline function 'com.varabyte.kobweb.silk.theme.breakpoint.<get-breakpointFloor>.<anonymous>' call
        if (toPx(element).value <= _this__u8e3s4.innerWidth) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      throw NoSuchElementException_init_$Create$('List contains no element matching the predicate.');
    }
    return tmp$ret$1;
  }
  function toPx(_this__u8e3s4) {
    var tmp0_safe_receiver = toValue(_this__u8e3s4);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.e33();
    return tmp1_elvis_lhs == null ? get_px(0) : tmp1_elvis_lhs;
  }
  function rememberBreakpoint($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.a19(1660417661);
    if (isTraceInProgress()) {
      traceEventStart(1660417661, $changed, -1, 'com.varabyte.kobweb.silk.theme.breakpoint.rememberBreakpoint (BreakpointUtils.kt:38)');
    }
    var tmp = get_breakpointFloor(window);
    $composer_0.a19(-662005520);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.f1a();
    var tmp_0;
    if (false || it === Companion_getInstance().s13_1) {
      // Inline function 'com.varabyte.kobweb.silk.theme.breakpoint.rememberBreakpoint.<anonymous>' call
      var value = rememberBreakpoint$slambda_0(null);
      $composer_0.l1a(value);
      tmp_0 = value;
    } else {
      tmp_0 = it;
    }
    var tmp_1 = tmp_0;
    var tmp1_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
    $composer_0.b19();
    var tmp0 = produceState(tmp, tmp1_group, $composer_0, 0).w1();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.b19();
    return tmp0;
  }
  function rememberBreakpoint$slambda$lambda($this_produceState) {
    return function (it) {
      $this_produceState.or(get_breakpointFloor(window));
      return Unit_instance;
    };
  }
  function rememberBreakpoint$slambda$lambda_0($resizeListener) {
    return function () {
      window.removeEventListener('resize', $resizeListener);
      return Unit_instance;
    };
  }
  function rememberBreakpoint$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(rememberBreakpoint$slambda).s34 = function ($this$produceState, $completion) {
    var tmp = this.t34($this$produceState, $completion);
    tmp.x8_1 = Unit_instance;
    tmp.y8_1 = null;
    return tmp.d9();
  };
  protoOf(rememberBreakpoint$slambda).p9 = function (p1, $completion) {
    return this.s34((!(p1 == null) ? isInterface(p1, ProduceStateScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(rememberBreakpoint$slambda).d9 = function () {
    var suspendResult = this.x8_1;
    $sm: do
      try {
        var tmp = this.v8_1;
        switch (tmp) {
          case 0:
            this.w8_1 = 2;
            var tmp_0 = this;
            tmp_0.r34_1 = EventListener(rememberBreakpoint$slambda$lambda(this.q34_1));
            window.addEventListener('resize', this.r34_1);
            this.v8_1 = 1;
            suspendResult = this.q34_1.l1g(rememberBreakpoint$slambda$lambda_0(this.r34_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            throwKotlinNothingValueException();
            break;
          case 2:
            throw this.y8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.w8_1 === 2) {
          throw e;
        } else {
          this.v8_1 = this.w8_1;
          this.y8_1 = e;
        }
      }
     while (true);
  };
  protoOf(rememberBreakpoint$slambda).t34 = function ($this$produceState, completion) {
    var i = new rememberBreakpoint$slambda(completion);
    i.q34_1 = $this$produceState;
    return i;
  };
  function rememberBreakpoint$slambda_0(resultContinuation) {
    var i = new rememberBreakpoint$slambda(resultContinuation);
    var l = function ($this$produceState, $completion) {
      return i.s34($this$produceState, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function get_rootColorModeState() {
    _init_properties_ColorMode_kt__lz79sc();
    // Inline function 'kotlin.getValue' call
    var this_0 = rootColorModeState$delegate;
    rootColorModeState$factory();
    return this_0.w1();
  }
  var rootColorModeState$delegate;
  function get_LocalColorMode() {
    _init_properties_ColorMode_kt__lz79sc();
    return LocalColorMode;
  }
  var LocalColorMode;
  var ColorMode_LIGHT_instance;
  var ColorMode_DARK_instance;
  function Companion_5() {
  }
  protoOf(Companion_5).i32 = function ($composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-754713740, $changed, -1, 'com.varabyte.kobweb.silk.theme.colors.ColorMode.Companion.<get-current> (ColorMode.kt:33)');
    }
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_LocalColorMode();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.o1a(this_0);
    sourceInformationMarkerEnd($composer_1);
    var tmp0_0 = tmp0.w1();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return tmp0_0;
  };
  var Companion_instance_7;
  function Companion_getInstance_6() {
    return Companion_instance_7;
  }
  var ColorMode_entriesInitialized;
  function ColorMode_initEntries() {
    if (ColorMode_entriesInitialized)
      return Unit_instance;
    ColorMode_entriesInitialized = true;
    ColorMode_LIGHT_instance = new ColorMode('LIGHT', 0);
    ColorMode_DARK_instance = new ColorMode('DARK', 1);
  }
  function ColorMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(ColorMode).u34 = function () {
    return this.equals(ColorMode_LIGHT_getInstance());
  };
  protoOf(ColorMode).l32 = function () {
    var tmp;
    switch (this.h2_1) {
      case 0:
        tmp = ColorMode_DARK_getInstance();
        break;
      case 1:
        tmp = ColorMode_LIGHT_getInstance();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  protoOf(ColorMode).v34 = function () {
    return get_LocalColorMode().s1f(mutableStateOf(this));
  };
  function suffixedWith(_this__u8e3s4, colorMode) {
    _init_properties_ColorMode_kt__lz79sc();
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    return _this__u8e3s4 + '_' + colorMode.g2_1.toLowerCase();
  }
  function rootColorModeState$delegate$lambda() {
    _init_properties_ColorMode_kt__lz79sc();
    return mutableStateOf(Companion_instance_1.g2t().v2z());
  }
  function LocalColorMode$lambda() {
    _init_properties_ColorMode_kt__lz79sc();
    return get_rootColorModeState();
  }
  function ColorMode_LIGHT_getInstance() {
    ColorMode_initEntries();
    return ColorMode_LIGHT_instance;
  }
  function ColorMode_DARK_getInstance() {
    ColorMode_initEntries();
    return ColorMode_DARK_instance;
  }
  function rootColorModeState$factory() {
    return getPropertyCallableRef('rootColorModeState', 0, KProperty0, function () {
      return get_rootColorModeState();
    }, null);
  }
  var properties_initialized_ColorMode_kt_kbhp7u;
  function _init_properties_ColorMode_kt__lz79sc() {
    if (!properties_initialized_ColorMode_kt_kbhp7u) {
      properties_initialized_ColorMode_kt_kbhp7u = true;
      rootColorModeState$delegate = lazy(rootColorModeState$delegate$lambda);
      LocalColorMode = compositionLocalOf(VOID, LocalColorMode$lambda);
    }
  }
  function Red() {
    Red_instance = this;
    this.w34_1 = Companion_instance_0.c2w(16772078);
    this.x34_1 = Companion_instance_0.c2w(16764370);
    this.y34_1 = Companion_instance_0.c2w(15702682);
    this.z34_1 = Companion_instance_0.c2w(15037299);
    this.a35_1 = Companion_instance_0.c2w(15684432);
    this.b35_1 = Companion_instance_0.c2w(16007990);
    this.c35_1 = Companion_instance_0.c2w(15022389);
    this.d35_1 = Companion_instance_0.c2w(13840175);
    this.e35_1 = Companion_instance_0.c2w(12986408);
    this.f35_1 = Companion_instance_0.c2w(12000284);
  }
  var Red_instance;
  function Red_getInstance() {
    if (Red_instance == null)
      new Red();
    return Red_instance;
  }
  function Blue() {
    Blue_instance = this;
    this.g35_1 = Companion_instance_0.c2w(14938877);
    this.h35_1 = Companion_instance_0.c2w(12312315);
    this.i35_1 = Companion_instance_0.c2w(9489145);
    this.j35_1 = Companion_instance_0.c2w(6600182);
    this.k35_1 = Companion_instance_0.c2w(4367861);
    this.l35_1 = Companion_instance_0.c2w(2201331);
    this.m35_1 = Companion_instance_0.c2w(2001125);
    this.n35_1 = Companion_instance_0.c2w(1668818);
    this.o35_1 = Companion_instance_0.c2w(1402304);
    this.p35_1 = Companion_instance_0.c2w(870305);
  }
  var Blue_instance;
  function Blue_getInstance() {
    if (Blue_instance == null)
      new Blue();
    return Blue_instance;
  }
  function Gray() {
    Gray_instance = this;
    this.q35_1 = Companion_instance_0.c2w(16448250);
    this.r35_1 = Companion_instance_0.c2w(16119285);
    this.s35_1 = Companion_instance_0.c2w(15658734);
    this.t35_1 = Companion_instance_0.c2w(14737632);
    this.u35_1 = Companion_instance_0.c2w(12434877);
    this.v35_1 = Companion_instance_0.c2w(10395294);
    this.w35_1 = Companion_instance_0.c2w(7697781);
    this.x35_1 = Companion_instance_0.c2w(6381921);
    this.y35_1 = Companion_instance_0.c2w(4342338);
    this.z35_1 = Companion_instance_0.c2w(2171169);
  }
  var Gray_instance;
  function Gray_getInstance() {
    if (Gray_instance == null)
      new Gray();
    return Gray_instance;
  }
  var com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stable;
  var com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup$stable;
  var com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette$stable;
  var com_varabyte_kobweb_silk_theme_colors_palette_MutablePalettes$stable;
  function MutablePalettes() {
    this.a36_1 = new MutablePalette();
    this.b36_1 = new MutablePalette();
  }
  protoOf(MutablePalettes).c36 = function () {
    return this.a36_1;
  };
  protoOf(MutablePalettes).d36 = function () {
    return this.b36_1;
  };
  function Palettes() {
  }
  function Palette() {
  }
  function EntryDelegate(palette, prefix) {
    prefix = prefix === VOID ? null : prefix;
    this.h36_1 = palette;
    this.i36_1 = prefix;
  }
  protoOf(EntryDelegate).h2n = function (thisRef, property) {
    // Inline function 'kotlin.text.orEmpty' call
    var tmp0_elvis_lhs = this.i36_1;
    var tmp$ret$0 = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
    return getValue(this.h36_1.j36_1, tmp$ret$0 + property.callableName);
  };
  protoOf(EntryDelegate).k36 = function (thisRef, property, value) {
    // Inline function 'kotlin.collections.set' call
    var this_0 = this.h36_1.j36_1;
    // Inline function 'kotlin.text.orEmpty' call
    var tmp0_elvis_lhs = this.i36_1;
    var key = (tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs) + property.callableName;
    this_0.y4(key, value);
  };
  function ColorGroup(palette, groupName) {
    this.l36_1 = palette;
    this.m36_1 = groupName;
  }
  protoOf(ColorGroup).n36 = function () {
    return new EntryDelegate(this.l36_1, this.m36_1 + '.');
  };
  function MutablePalette() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.j36_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(MutablePalette).f36 = function (key) {
    return this.j36_1.z1(key);
  };
  protoOf(MutablePalette).o36 = function (key, value) {
    // Inline function 'kotlin.collections.set' call
    this.j36_1.y4(key, value);
  };
  function toPalette(_this__u8e3s4) {
    return get_SilkTheme().h2z_1.e36(_this__u8e3s4);
  }
  function com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() {
    return com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stable;
  }
  var com_varabyte_kobweb_silk_theme_shapes_Path$stable;
  var com_varabyte_kobweb_silk_theme_shapes_CirclePath$stable;
  var com_varabyte_kobweb_silk_theme_shapes_PolygonPath$stable;
  var com_varabyte_kobweb_silk_theme_shapes_InsetPath$stable;
  var com_varabyte_kobweb_silk_theme_shapes_RectF$stable;
  var com_varabyte_kobweb_silk_theme_shapes_Rect$stable;
  var com_varabyte_kobweb_silk_theme_shapes_CircleF$stable;
  var com_varabyte_kobweb_silk_theme_shapes_Circle$stable;
  var com_varabyte_kobweb_silk_theme_shapes_PolygonF$stable;
  var com_varabyte_kobweb_silk_theme_shapes_Polygon$stable;
  function clip(_this__u8e3s4, shape) {
    var tmp0_safe_receiver = shape.p36();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.theme.shapes.clip.<anonymous>' call
      tmp = styleModifier(_this__u8e3s4, clip$lambda(tmp0_safe_receiver));
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
  }
  function RectF_init_$Init$($this) {
    RectF_init_$Init$_0(get_px(0), $this);
    return $this;
  }
  function RectF_init_$Create$() {
    return RectF_init_$Init$(objectCreate(protoOf(RectF)));
  }
  function RectF_init_$Init$_0(cornerRadius, $this) {
    RectF.call($this, to(0.0, 0.0), to(100.0, 100.0), cornerRadius);
    return $this;
  }
  function RectF_init_$Init$_1(side, cornerRadius, $this) {
    cornerRadius = cornerRadius === VOID ? get_px(0) : cornerRadius;
    RectF.call($this, to(side, side), from100(to(side, side)), cornerRadius);
    return $this;
  }
  function RectF_init_$Create$_0(side, cornerRadius) {
    return RectF_init_$Init$_1(side, cornerRadius, objectCreate(protoOf(RectF)));
  }
  function RectF(topLeft, botRight, cornerRadius) {
    cornerRadius = cornerRadius === VOID ? get_px(0) : cornerRadius;
    this.q36_1 = topLeft;
    this.r36_1 = botRight;
    this.s36_1 = cornerRadius;
  }
  protoOf(RectF).p36 = function () {
    var tmp;
    if (!(this.q36_1.ie_1 === 0.0) || !(this.q36_1.je_1 === 0.0) || !(this.r36_1.ie_1 === 100.0) || !(this.r36_1.je_1 === 100.0) || !equals(this.s36_1, get_px(0))) {
      tmp = new InsetPath(this.q36_1, this.r36_1, this.s36_1);
    } else {
      tmp = null;
    }
    return tmp;
  };
  function Path() {
  }
  protoOf(Path).u36 = function (_this__u8e3s4) {
    return toString(_this__u8e3s4) + '%';
  };
  protoOf(Path).v36 = function (_this__u8e3s4) {
    return toString(_this__u8e3s4.ie_1) + '% ' + toString(_this__u8e3s4.je_1) + '%';
  };
  function from100(_this__u8e3s4) {
    return to(100.0 - _this__u8e3s4.ie_1, 100.0 - _this__u8e3s4.je_1);
  }
  function InsetPath(topLeft, botRight, roundness) {
    roundness = roundness === VOID ? get_px(0) : roundness;
    Path.call(this);
    this.w36_1 = topLeft;
    this.x36_1 = roundness;
    this.y36_1 = from100(botRight);
  }
  protoOf(InsetPath).t36 = function () {
    // Inline function 'kotlin.takeIf' call
    var this_0 = this.x36_1;
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    // Inline function 'com.varabyte.kobweb.silk.theme.shapes.InsetPath.toPathStr.<anonymous>' call
    if (!equals(this_0, get_px(0))) {
      tmp = this_0;
    } else {
      tmp = null;
    }
    var tmp0_safe_receiver = tmp;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.theme.shapes.InsetPath.toPathStr.<anonymous>' call
      tmp_0 = 'round ' + toString(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp_0;
    var roundnessPart = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
    var left = this.w36_1.ie_1;
    var top = this.w36_1.je_1;
    var right = this.y36_1.ie_1;
    var bottom = this.y36_1.je_1;
    var insetPart = left === top && right === bottom && left === right ? this.u36(left) : left === right && top === bottom ? this.v36(to(top, left)) : this.u36(top) + ' ' + this.u36(right) + ' ' + this.u36(bottom) + ' ' + this.u36(left);
    return 'inset(' + insetPart + roundnessPart + ')';
  };
  function clip$lambda($path) {
    return function ($this$styleModifier) {
      $this$styleModifier.h2e('clip-path', $path.t36());
      return Unit_instance;
    };
  }
  //region block: post-declaration
  protoOf(MutablePalettes).e36 = get;
  protoOf(MutablePalette).g36 = getValue_0;
  //endregion
  //region block: init
  com_varabyte_kobweb_silk_SilkStyleSheet$stable = 0;
  com_varabyte_kobweb_silk_components_animation_Keyframes$stable = 8;
  com_varabyte_kobweb_silk_components_animation_KeyframesProvider$stable = 0;
  com_varabyte_kobweb_silk_components_style_ComponentStyle$stable = 0;
  com_varabyte_kobweb_silk_components_style_ComponentStyleProvider$stable = 0;
  com_varabyte_kobweb_silk_components_style_ComponentVariant$stable = 0;
  com_varabyte_kobweb_silk_components_style_StubbedComponentVariant$stable = 0;
  com_varabyte_kobweb_silk_components_style_SimpleComponentVariant$stable = 0;
  com_varabyte_kobweb_silk_components_style_ComponentVariantProvider$stable = 0;
  com_varabyte_kobweb_silk_components_util_internal_CacheByPropertyNameDelegate$stable = 8;
  Companion_instance_1 = new Companion();
  com_varabyte_kobweb_silk_init_CssStyleRegistrarImpl_Entry$stable = 0;
  com_varabyte_kobweb_silk_init_SilkStylesheetInstance$stable = 8;
  com_varabyte_kobweb_silk_style_CssRule_OfMedia$stable = 8;
  com_varabyte_kobweb_silk_style_CssRule_NonMediaCssRule$stable = 0;
  com_varabyte_kobweb_silk_style_CssRule_OfAttributeSelector$stable = 0;
  com_varabyte_kobweb_silk_style_CssRule_OfPseudoClass$stable = 0;
  com_varabyte_kobweb_silk_style_CssRule_OfPseudoElement$stable = 0;
  com_varabyte_kobweb_silk_style_CssRule_CompositeOpen$stable = 8;
  com_varabyte_kobweb_silk_style_CssRule_CompositeClosed$stable = 8;
  com_varabyte_kobweb_silk_style_CssRule$stable = 8;
  Companion_instance_2 = new Companion_0();
  com_varabyte_kobweb_silk_style_CssStyle_Restricted_Base$stable = 0;
  com_varabyte_kobweb_silk_style_CssStyle_Restricted$stable = 0;
  com_varabyte_kobweb_silk_style_CssStyle$stable = 0;
  com_varabyte_kobweb_silk_style_SimpleCssStyle$stable = 0;
  com_varabyte_kobweb_silk_style_ExtendingCssStyle$stable = 0;
  com_varabyte_kobweb_silk_style_ImmutableCssStyle$stable = 8;
  com_varabyte_kobweb_silk_style_CssStyleScope$stable = 0;
  com_varabyte_kobweb_silk_style_CssStyleBaseScope$stable = 0;
  com_varabyte_kobweb_silk_style_StyleGroup_Light$stable = 0;
  com_varabyte_kobweb_silk_style_StyleGroup_Dark$stable = 0;
  com_varabyte_kobweb_silk_style_StyleGroup_ColorAgnostic$stable = 0;
  com_varabyte_kobweb_silk_style_StyleGroup_ColorAware$stable = 0;
  Companion_instance_3 = new Companion_1();
  Companion_instance_4 = new Companion_2();
  com_varabyte_kobweb_silk_style_CssStyleVariant$stable = 0;
  com_varabyte_kobweb_silk_style_SimpleCssStyleVariant$stable = 0;
  com_varabyte_kobweb_silk_style_ExtendingCssStyleVariant$stable = 0;
  com_varabyte_kobweb_silk_style_animation_KeyframesBuilder$stable = 8;
  com_varabyte_kobweb_silk_style_animation_Keyframes$stable = 8;
  Companion_instance_6 = new Companion_4();
  com_varabyte_kobweb_silk_style_breakpoint_BreakpointUnitValue_Px$stable = 0;
  com_varabyte_kobweb_silk_style_breakpoint_BreakpointUnitValue_Em$stable = 0;
  com_varabyte_kobweb_silk_style_breakpoint_BreakpointUnitValue_Rem$stable = 0;
  com_varabyte_kobweb_silk_style_breakpoint_BreakpointUnitValue$stable = 0;
  com_varabyte_kobweb_silk_style_breakpoint_BreakpointValues$stable = 0;
  com_varabyte_kobweb_silk_style_breakpoint_ResponsiveValues$stable = 0;
  com_varabyte_kobweb_silk_style_layer_LayerListBuilder$stable = 8;
  _SilkTheme = null;
  com_varabyte_kobweb_silk_theme_MutableSilkTheme$stable = 8;
  com_varabyte_kobweb_silk_theme_ImmutableSilkTheme$stable = 8;
  Companion_instance_7 = new Companion_5();
  com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stable = 8;
  com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup$stable = 8;
  com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette$stable = 8;
  com_varabyte_kobweb_silk_theme_colors_palette_MutablePalettes$stable = 8;
  com_varabyte_kobweb_silk_theme_shapes_Path$stable = 0;
  com_varabyte_kobweb_silk_theme_shapes_CirclePath$stable = 0;
  com_varabyte_kobweb_silk_theme_shapes_PolygonPath$stable = 8;
  com_varabyte_kobweb_silk_theme_shapes_InsetPath$stable = 8;
  com_varabyte_kobweb_silk_theme_shapes_RectF$stable = 8;
  com_varabyte_kobweb_silk_theme_shapes_Rect$stable = 8;
  com_varabyte_kobweb_silk_theme_shapes_CircleF$stable = 0;
  com_varabyte_kobweb_silk_theme_shapes_Circle$stable = 0;
  com_varabyte_kobweb_silk_theme_shapes_PolygonF$stable = 8;
  com_varabyte_kobweb_silk_theme_shapes_Polygon$stable = 8;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = DeferringHost;
  _.$_$.b = set_additionalSilkInitialization;
  _.$_$.c = Keyframes;
  _.$_$.d = get_entries;
  _.$_$.e = ResponsiveValues;
  _.$_$.f = get_active;
  _.$_$.g = get_ariaDisabled;
  _.$_$.h = get_ariaInvalid;
  _.$_$.i = descendants;
  _.$_$.j = get_disabled;
  _.$_$.k = get_focus;
  _.$_$.l = get_focusVisible;
  _.$_$.m = get_hover;
  _.$_$.n = get_link;
  _.$_$.o = not;
  _.$_$.p = get_placeholder;
  _.$_$.q = get_visited;
  _.$_$.r = Base;
  _.$_$.s = CssStyle_2;
  _.$_$.t = CssStyle_0;
  _.$_$.u = CssStyle_1;
  _.$_$.v = addVariantBase;
  _.$_$.w = addVariant_0;
  _.$_$.x = base_1;
  _.$_$.y = base_0;
  _.$_$.z = base;
  _.$_$.a1 = toModifier_0;
  _.$_$.b1 = toModifier;
  _.$_$.c1 = rememberBreakpoint;
  _.$_$.d1 = ColorGroup;
  _.$_$.e1 = MutablePalette;
  _.$_$.f1 = com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter;
  _.$_$.g1 = toPalette;
  _.$_$.h1 = suffixedWith;
  _.$_$.i1 = clip;
  _.$_$.j1 = modifyStyleBase;
  _.$_$.k1 = get_name;
  _.$_$.l1 = SilkFoundationStyles;
  _.$_$.m1 = Breakpoint_LG_getInstance;
  _.$_$.n1 = Breakpoint_MD_getInstance;
  _.$_$.o1 = Breakpoint_SM_getInstance;
  _.$_$.p1 = Breakpoint_XL_getInstance;
  _.$_$.q1 = Breakpoint_ZERO_getInstance;
  _.$_$.r1 = Base_init_$Init$;
  _.$_$.s1 = RectF_init_$Create$_0;
  _.$_$.t1 = Companion_instance_3;
  _.$_$.u1 = Companion_instance_7;
  _.$_$.v1 = Blue_getInstance;
  _.$_$.w1 = Gray_getInstance;
  _.$_$.x1 = Red_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-frontend-silk-foundation.js.map
