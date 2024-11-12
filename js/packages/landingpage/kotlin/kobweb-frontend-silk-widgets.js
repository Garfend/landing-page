(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kobweb-frontend-compose-html-ext.js', './html-html-core.js', './kotlin-kotlin-stdlib.js', './kobweb-frontend-kobweb-compose.js', './compose-multiplatform-core-compose-runtime-runtime.js', './kobweb-frontend-silk-foundation.js', './kotlinx-coroutines-core.js', './kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kobweb-frontend-compose-html-ext.js'), require('./html-html-core.js'), require('./kotlin-kotlin-stdlib.js'), require('./kobweb-frontend-kobweb-compose.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./kobweb-frontend-silk-foundation.js'), require('./kotlinx-coroutines-core.js'), require('./kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.js'));
  else {
    if (typeof globalThis['kobweb-frontend-compose-html-ext'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'kobweb-frontend-compose-html-ext' was not found. Please, check whether 'kobweb-frontend-compose-html-ext' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof globalThis['html-html-core'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'html-html-core' was not found. Please, check whether 'html-html-core' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof globalThis['kobweb-frontend-kobweb-compose'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'kobweb-frontend-kobweb-compose' was not found. Please, check whether 'kobweb-frontend-kobweb-compose' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof globalThis['kobweb-frontend-silk-foundation'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'kobweb-frontend-silk-foundation' was not found. Please, check whether 'kobweb-frontend-silk-foundation' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat' was not found. Please, check whether 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    globalThis['kobweb-frontend-silk-widgets'] = factory(typeof globalThis['kobweb-frontend-silk-widgets'] === 'undefined' ? {} : globalThis['kobweb-frontend-silk-widgets'], globalThis['kobweb-frontend-compose-html-ext'], globalThis['html-html-core'], globalThis['kotlin-kotlin-stdlib'], globalThis['kobweb-frontend-kobweb-compose'], globalThis['compose-multiplatform-core-compose-runtime-runtime'], globalThis['kobweb-frontend-silk-foundation'], globalThis['kotlinx-coroutines-core'], kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat);
  }
}(function (_, kotlin_com_varabyte_kobweb_compose_html_ext, kotlin_org_jetbrains_compose_html_html_core, kotlin_kotlin, kotlin_com_varabyte_kobweb_kobweb_compose, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_com_varabyte_kobweb_silk_foundation, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat) {
  'use strict';
  //region block: imports
  var StyleVariable = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.f;
  var StyleVariable_0 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.g;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.x2;
  var StyleVariable_1 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.e;
  var protoOf = kotlin_kotlin.$_$.x6;
  var initMetadataForObject = kotlin_kotlin.$_$.l6;
  var Unit_instance = kotlin_kotlin.$_$.d2;
  var Companion_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b4;
  var fillMaxWidth = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c1;
  var Companion_instance_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.l;
  var borderBottom = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a1;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.q;
  var tabIndex = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.s2;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z;
  var get_ariaDisabled = kotlin_com_varabyte_kobweb_silk_foundation.$_$.g;
  var get_hover = kotlin_com_varabyte_kobweb_silk_foundation.$_$.m;
  var not = kotlin_com_varabyte_kobweb_silk_foundation.$_$.o;
  var get_active = kotlin_com_varabyte_kobweb_silk_foundation.$_$.f;
  var Companion_instance_1 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.x2;
  var cursor = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.y;
  var Companion_instance_2 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.i3;
  var listOf = kotlin_kotlin.$_$.w3;
  var transition = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z2;
  var backgroundColor = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j;
  var color = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.x;
  var Companion_instance_3 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.k3;
  var userSelect = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b3;
  var get_cssRem = kotlin_org_jetbrains_compose_html_html_core.$_$.q1;
  var padding = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j2;
  var calc = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.a;
  var VOID = kotlin_kotlin.$_$.e;
  var margin = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v1;
  var flexGrow = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d1;
  var overflow = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.f2;
  var Companion_instance_4 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.e3;
  var KProperty1 = kotlin_kotlin.$_$.j7;
  var getPropertyCallableRef = kotlin_kotlin.$_$.d6;
  var CssStyle = kotlin_com_varabyte_kobweb_silk_foundation.$_$.t;
  var Companion_instance_5 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.t1;
  var base = kotlin_com_varabyte_kobweb_silk_foundation.$_$.z;
  var CssStyle_0 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.u;
  var toPalette = kotlin_com_varabyte_kobweb_silk_foundation.$_$.g1;
  var objectCreate = kotlin_kotlin.$_$.w6;
  var initMetadataForCompanion = kotlin_kotlin.$_$.h6;
  var setVariable = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q2;
  var Base = kotlin_com_varabyte_kobweb_silk_foundation.$_$.r;
  var initMetadataForClass = kotlin_kotlin.$_$.g6;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a;
  var Companion_instance_6 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.g3;
  var textAlign = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t2;
  var get_em = kotlin_org_jetbrains_compose_html_html_core.$_$.t1;
  var marginBlock = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q1;
  var Companion_instance_7 = kotlin_org_jetbrains_compose_html_html_core.$_$.i;
  var display = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z;
  var Companion_instance_8 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.t2;
  var alignItems = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.f;
  var Companion_instance_9 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.z2;
  var fontWeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.h1;
  var fontSize = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.f1;
  var gap = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i1;
  var borderLeft = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m;
  var padding_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k2;
  var margin_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t1;
  var borderRadius = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n;
  var Companion_instance_10 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.v2;
  var Colors_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u3;
  var boxShadow = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t;
  var border = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q;
  var descendants = kotlin_com_varabyte_kobweb_silk_foundation.$_$.i;
  var marginBlock_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p1;
  var addVariant = kotlin_com_varabyte_kobweb_silk_foundation.$_$.w;
  var Base_init_$Init$ = kotlin_com_varabyte_kobweb_silk_foundation.$_$.r1;
  var get_focusVisible = kotlin_com_varabyte_kobweb_silk_foundation.$_$.l;
  var lineHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n1;
  var height = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k1;
  var minWidth = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z1;
  var Companion_instance_11 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.n3;
  var whiteSpace = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e3;
  var Companion_instance_12 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.l3;
  var verticalAlign = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c3;
  var border_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r;
  var transition_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.x2;
  var outline = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e2;
  var boxShadow_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u;
  var Companion_instance_13 = kotlin_org_jetbrains_compose_html_html_core.$_$.m;
  var position = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l2;
  var opacity = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d2;
  var size = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r2;
  var CenterVertically_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.w3;
  var rowClasses = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d;
  var Keyframes = kotlin_com_varabyte_kobweb_silk_foundation.$_$.c;
  var addVariantBase = kotlin_com_varabyte_kobweb_silk_foundation.$_$.v;
  var StyleVariable_2 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.d;
  var paddingInline = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.h2;
  var get_placeholder = kotlin_com_varabyte_kobweb_silk_foundation.$_$.p;
  var Companion_instance_14 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.u2;
  var appearance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g;
  var get_ariaInvalid = kotlin_com_varabyte_kobweb_silk_foundation.$_$.h;
  var get_disabled = kotlin_com_varabyte_kobweb_silk_foundation.$_$.j;
  var margin_1 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.s1;
  var RectF_init_$Create$ = kotlin_com_varabyte_kobweb_silk_foundation.$_$.s1;
  var clip = kotlin_com_varabyte_kobweb_silk_foundation.$_$.i1;
  var overflow_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g2;
  var width = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.f3;
  var minHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.y1;
  var Companion_instance_15 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.w2;
  var boxSizing = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v;
  var translateX = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a3;
  var ariaHidden = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i;
  var Companion_instance_16 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.p3;
  var toAttrs = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k3;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h1;
  var THROW_CCE = kotlin_kotlin.$_$.e9;
  var Svg = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.g2;
  var Path = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.d2;
  var Polyline = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.e2;
  var to = kotlin_kotlin.$_$.u9;
  var Circle = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.a2;
  var Line = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.c2;
  var Rect = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.f2;
  var SVGStrokeLineCap_Round_getInstance = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.n2;
  var Group = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.b2;
  var SVGStrokeLineJoin_Round_getInstance = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.o2;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b1;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.n9;
  var SVGStrokeType_CurrentColor_getInstance = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.p2;
  var SVGFillType_None_getInstance = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.m2;
  var SVGFillType_CurrentColor_getInstance = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.l2;
  var SVGStrokeType_None_getInstance = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.q2;
  var get_percent = kotlin_org_jetbrains_compose_html_html_core.$_$.v2;
  var borderTop = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p;
  var ResponsiveValues = kotlin_com_varabyte_kobweb_silk_foundation.$_$.e;
  var toModifier = kotlin_com_varabyte_kobweb_silk_foundation.$_$.a1;
  var Breakpoint_ZERO_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.q1;
  var getValue = kotlin_kotlin.$_$.m3;
  var setVariable_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p2;
  var Breakpoint_SM_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.o1;
  var Breakpoint_MD_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.n1;
  var Breakpoint_LG_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.m1;
  var Breakpoint_XL_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.p1;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x;
  var Div = kotlin_org_jetbrains_compose_html_html_core.$_$.l3;
  var get_fr = kotlin_org_jetbrains_compose_html_html_core.$_$.z1;
  var gridTemplateColumns = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j1;
  var registerRefScope = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.k2;
  var get_entries = kotlin_com_varabyte_kobweb_silk_foundation.$_$.d;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.w2;
  var mapCapacity = kotlin_kotlin.$_$.x3;
  var coerceAtLeast = kotlin_kotlin.$_$.a7;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.p;
  var NumberValue = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.c;
  var TopStart_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a4;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t;
  var refScope = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.i2;
  var Box = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a;
  var KMutableProperty0 = kotlin_kotlin.$_$.g7;
  var THROW_ISE = kotlin_kotlin.$_$.f9;
  var getLocalDelegateReference = kotlin_kotlin.$_$.b6;
  var CoroutineImpl = kotlin_kotlin.$_$.m5;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j;
  var isInterface = kotlin_kotlin.$_$.p6;
  var initMetadataForLambda = kotlin_kotlin.$_$.k6;
  var Companion_instance_17 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.u1;
  var LaunchedEffect = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k;
  var CompositionLocalProvider = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d;
  var styleModifier = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j3;
  var unaryMinus = kotlin_org_jetbrains_compose_html_html_core.$_$.f3;
  var margin_2 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r1;
  var top = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v2;
  var left = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m1;
  var right = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m2;
  var bottom = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.s;
  var toString = kotlin_kotlin.$_$.z6;
  var Blue_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.v1;
  var Gray_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.w1;
  var Red_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.x1;
  var lightened = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e;
  var get_name = kotlin_com_varabyte_kobweb_silk_foundation.$_$.k1;
  var suffixedWith = kotlin_com_varabyte_kobweb_silk_foundation.$_$.h1;
  var removeClass = kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.$_$.c;
  var addClass = kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.$_$.a;
  var base_0 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.y;
  var ariaDisabled = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.h;
  var KProperty0 = kotlin_kotlin.$_$.i7;
  var base_1 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.x;
  var get_ms = kotlin_org_jetbrains_compose_html_html_core.$_$.r2;
  var ColorGroup = kotlin_com_varabyte_kobweb_silk_foundation.$_$.d1;
  var MutablePalette = kotlin_com_varabyte_kobweb_silk_foundation.$_$.e1;
  var KMutableProperty1 = kotlin_kotlin.$_$.h7;
  var com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter = kotlin_com_varabyte_kobweb_silk_foundation.$_$.f1;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(TabVars, 'TabVars');
  initMetadataForObject(CalloutVars, 'CalloutVars');
  initMetadataForCompanion(Companion);
  initMetadataForClass(CalloutType, 'CalloutType', VOID, Base);
  initMetadataForObject(ComposableSingletons$CalloutKt, 'ComposableSingletons$CalloutKt');
  initMetadataForObject(ButtonVars, 'ButtonVars');
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(ButtonSize, 'ButtonSize', VOID, Base);
  initMetadataForObject(CheckboxVars, 'CheckboxVars');
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(CheckboxSize, 'CheckboxSize', VOID, Base);
  initMetadataForObject(InputVars, 'InputVars');
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(InputSize, 'InputSize', VOID, Base);
  initMetadataForObject(SwitchVars, 'SwitchVars');
  initMetadataForCompanion(Companion_3);
  initMetadataForClass(SwitchSize, 'SwitchSize', VOID, Base);
  initMetadataForClass(Fill, 'Fill', Fill);
  initMetadataForClass(Stroke, 'Stroke', Stroke);
  initMetadataForObject(ComposableSingletons$IconsKt, 'ComposableSingletons$IconsKt');
  initMetadataForObject(DividerVars, 'DividerVars');
  initMetadataForObject(SurfaceVars, 'SurfaceVars');
  initMetadataForLambda(Surface$lambda$lambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForObject(OverlayVars, 'OverlayVars');
  initMetadataForObject(PopupVars, 'PopupVars');
  initMetadataForObject(TooltipVars, 'TooltipVars');
  initMetadataForObject(TransitionDurationVars, 'TransitionDurationVars');
  initMetadataForObject(FontSizeVars, 'FontSizeVars');
  initMetadataForObject(BorderRadiusVars, 'BorderRadiusVars');
  initMetadataForClass(MutableButton, 'MutableButton', VOID, ColorGroup);
  initMetadataForClass(MutableCallout, 'MutableCallout', VOID, ColorGroup);
  initMetadataForClass(MutableCheckbox, 'MutableCheckbox', VOID, ColorGroup);
  initMetadataForClass(MutableInput, 'MutableInput', VOID, ColorGroup);
  initMetadataForClass(MutableSwitch, 'MutableSwitch', VOID, ColorGroup);
  initMetadataForClass(MutableTab, 'MutableTab', VOID, ColorGroup);
  initMetadataForClass(MutableTooltip, 'MutableTooltip', VOID, ColorGroup);
  //endregion
  function get_TabsStyle() {
    _init_properties_Tabs_kt__myintq();
    return TabsStyle;
  }
  var TabsStyle;
  function get_TabsTabRowStyle() {
    _init_properties_Tabs_kt__myintq();
    return TabsTabRowStyle;
  }
  var TabsTabRowStyle;
  function get_TabsTabStyle() {
    _init_properties_Tabs_kt__myintq();
    return TabsTabStyle;
  }
  var TabsTabStyle;
  function get_TabsPanelStyle() {
    _init_properties_Tabs_kt__myintq();
    return TabsPanelStyle;
  }
  var TabsPanelStyle;
  var com_varabyte_kobweb_silk_components_disclosure_TabVars$stable;
  var com_varabyte_kobweb_silk_components_disclosure_TabData$stable;
  var com_varabyte_kobweb_silk_components_disclosure_PanelData$stable;
  var com_varabyte_kobweb_silk_components_disclosure_TabPanelData$stable;
  var com_varabyte_kobweb_silk_components_disclosure_TabPanelScope$stable;
  var com_varabyte_kobweb_silk_components_disclosure_TabsScope$stable;
  function TabVars() {
    TabVars_instance = this;
    this.z36_1 = StyleVariable('silk');
    var tmp = this;
    var tmp0_defaultFallback = get_BorderColorVar().b2n();
    tmp.a37_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    this.b37_1 = StyleVariable('silk');
    this.c37_1 = StyleVariable('silk');
    this.d37_1 = StyleVariable('silk');
    this.e37_1 = StyleVariable('silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_px(2);
    tmp_0.f37_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = TransitionDurationVars_getInstance().z2j().b2n();
    tmp_1.g37_1 = StyleVariable_1(tmp0_defaultFallback_1, 'silk');
  }
  protoOf(TabVars).p37 = function () {
    return this.z36_1.h2n(this, Color$factory());
  };
  protoOf(TabVars).q37 = function () {
    return this.a37_1.h2n(this, BorderColor$factory());
  };
  protoOf(TabVars).r37 = function () {
    return this.b37_1.h2n(this, BackgroundColor$factory());
  };
  protoOf(TabVars).s37 = function () {
    return this.c37_1.h2n(this, DisabledBackgroundColor$factory());
  };
  protoOf(TabVars).t37 = function () {
    return this.d37_1.h2n(this, HoverBackgroundColor$factory());
  };
  protoOf(TabVars).u37 = function () {
    return this.e37_1.h2n(this, PressedBackgroundColor$factory());
  };
  protoOf(TabVars).v37 = function () {
    return this.f37_1.h2n(this, BorderThickness$factory());
  };
  protoOf(TabVars).w37 = function () {
    return this.g37_1.h2n(this, ColorTransitionDuration$factory());
  };
  var TabVars_instance;
  function TabVars_getInstance() {
    if (TabVars_instance == null)
      new TabVars();
    return TabVars_instance;
  }
  function TabsStyle$lambda($this$CssStyle) {
    _init_properties_Tabs_kt__myintq();
    return Unit_instance;
  }
  function TabsTabRowStyle$lambda($this$base) {
    _init_properties_Tabs_kt__myintq();
    var tmp = fillMaxWidth(Companion_instance);
    var tmp_0 = TabVars_getInstance().v37().b2n();
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return borderBottom(tmp, tmp_0, 'solid', TabVars_getInstance().q37().b2n());
  }
  function TabsTabStyle$lambda($composer, $changed) {
    _init_properties_Tabs_kt__myintq();
    var $composer_0 = $composer;
    $composer_0.a19(2044107546);
    if (isTraceInProgress()) {
      traceEventStart(2044107546, $changed, -1, 'com.varabyte.kobweb.silk.components.disclosure.TabsTabStyle.<anonymous> (Tabs.kt:62)');
    }
    var tmp0 = tabIndex(Companion_instance, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.b19();
    return tmp0;
  }
  function TabsTabStyle$lambda_0($this$CssStyle) {
    _init_properties_Tabs_kt__myintq();
    $this$CssStyle.k31(TabsTabStyle$lambda$lambda);
    var tmp = get_ariaDisabled($this$CssStyle);
    tmp.p30(TabsTabStyle$lambda$lambda_0);
    var tmp_0 = get_hover($this$CssStyle).y30(not($this$CssStyle, [get_ariaDisabled($this$CssStyle)]));
    tmp_0.p30(TabsTabStyle$lambda$lambda_1);
    var tmp_1 = get_active($this$CssStyle).y30(not($this$CssStyle, [get_ariaDisabled($this$CssStyle)]));
    tmp_1.p30(TabsTabStyle$lambda$lambda_2);
    return Unit_instance;
  }
  function TabsTabStyle$lambda$lambda() {
    _init_properties_Tabs_kt__myintq();
    var tmp = padding(userSelect(color(backgroundColor(transition(cursor(Companion_instance, Companion_instance_1.q2k()), Companion_instance_2.w2n(listOf(['background-color', 'color', 'border-color']), TabVars_getInstance().w37().b2n())), TabVars_getInstance().r37().b2n()), TabVars_getInstance().p37().b2n()), Companion_instance_3.t2k()), get_cssRem(0.5));
    var tmp_0 = margin(tmp, VOID, VOID, calc(TabsTabStyle$lambda$lambda$lambda));
    var tmp_1 = TabVars_getInstance().v37().b2n();
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return borderBottom(tmp_0, tmp_1, 'solid', TabVars_getInstance().q37().b2n());
  }
  function TabsTabStyle$lambda$lambda$lambda($this$calc) {
    _init_properties_Tabs_kt__myintq();
    return $this$calc.g2o(TabVars_getInstance().v37().b2n());
  }
  function TabsTabStyle$lambda$lambda_0() {
    _init_properties_Tabs_kt__myintq();
    return cursor(backgroundColor(Companion_instance, TabVars_getInstance().s37().b2n()), Companion_instance_1.r2k());
  }
  function TabsTabStyle$lambda$lambda_1() {
    _init_properties_Tabs_kt__myintq();
    return backgroundColor(Companion_instance, TabVars_getInstance().t37().b2n());
  }
  function TabsTabStyle$lambda$lambda_2() {
    _init_properties_Tabs_kt__myintq();
    return backgroundColor(Companion_instance, TabVars_getInstance().u37().b2n());
  }
  function TabsPanelStyle$lambda($this$base) {
    _init_properties_Tabs_kt__myintq();
    var tmp = flexGrow(fillMaxWidth(padding(Companion_instance, get_cssRem(1))), 1);
    return overflow(tmp, TabsPanelStyle$lambda$lambda);
  }
  function TabsPanelStyle$lambda$lambda($this$overflow) {
    _init_properties_Tabs_kt__myintq();
    $this$overflow.j2x(Companion_instance_4.o2m());
    return Unit_instance;
  }
  function Color$factory() {
    return getPropertyCallableRef('Color', 1, KProperty1, function (receiver) {
      return receiver.p37();
    }, null);
  }
  function BorderColor$factory() {
    return getPropertyCallableRef('BorderColor', 1, KProperty1, function (receiver) {
      return receiver.q37();
    }, null);
  }
  function BackgroundColor$factory() {
    return getPropertyCallableRef('BackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.r37();
    }, null);
  }
  function DisabledBackgroundColor$factory() {
    return getPropertyCallableRef('DisabledBackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.s37();
    }, null);
  }
  function HoverBackgroundColor$factory() {
    return getPropertyCallableRef('HoverBackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.t37();
    }, null);
  }
  function PressedBackgroundColor$factory() {
    return getPropertyCallableRef('PressedBackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.u37();
    }, null);
  }
  function BorderThickness$factory() {
    return getPropertyCallableRef('BorderThickness', 1, KProperty1, function (receiver) {
      return receiver.v37();
    }, null);
  }
  function ColorTransitionDuration$factory() {
    return getPropertyCallableRef('ColorTransitionDuration', 1, KProperty1, function (receiver) {
      return receiver.w37();
    }, null);
  }
  var properties_initialized_Tabs_kt_moodfk;
  function _init_properties_Tabs_kt__myintq() {
    if (!properties_initialized_Tabs_kt_moodfk) {
      properties_initialized_Tabs_kt_moodfk = true;
      TabsStyle = CssStyle(VOID, TabsStyle$lambda);
      var tmp = Companion_instance_5;
      TabsTabRowStyle = base(tmp, VOID, TabsTabRowStyle$lambda);
      var tmp_0 = TabsTabStyle$lambda;
      TabsTabStyle = CssStyle_0(tmp_0, TabsTabStyle$lambda_0);
      var tmp_1 = Companion_instance_5;
      TabsPanelStyle = base(tmp_1, VOID, TabsPanelStyle$lambda);
      com_varabyte_kobweb_silk_components_disclosure_TabVars$stable = 8;
      com_varabyte_kobweb_silk_components_disclosure_TabData$stable = 8;
      com_varabyte_kobweb_silk_components_disclosure_PanelData$stable = 8;
      com_varabyte_kobweb_silk_components_disclosure_TabPanelData$stable = 8;
      com_varabyte_kobweb_silk_components_disclosure_TabPanelScope$stable = 8;
      com_varabyte_kobweb_silk_components_disclosure_TabsScope$stable = 8;
    }
  }
  function get_CalloutStyle() {
    _init_properties_Callout_kt__ksu682();
    return CalloutStyle;
  }
  var CalloutStyle;
  function get_LeftBorderedCalloutVariant() {
    _init_properties_Callout_kt__ksu682();
    return LeftBorderedCalloutVariant;
  }
  var LeftBorderedCalloutVariant;
  function get_LeftBorderedFilledCalloutVariant() {
    _init_properties_Callout_kt__ksu682();
    return LeftBorderedFilledCalloutVariant;
  }
  var LeftBorderedFilledCalloutVariant;
  function get_OutlinedCalloutVariant() {
    _init_properties_Callout_kt__ksu682();
    return OutlinedCalloutVariant;
  }
  var OutlinedCalloutVariant;
  function get_MatchingLinkCalloutVariant() {
    _init_properties_Callout_kt__ksu682();
    return MatchingLinkCalloutVariant;
  }
  var MatchingLinkCalloutVariant;
  var com_varabyte_kobweb_silk_components_display_CalloutVars$stable;
  var com_varabyte_kobweb_silk_components_display_CalloutType$stable;
  var com_varabyte_kobweb_silk_components_display_CalloutDefaults$stable;
  function CalloutVars() {
    CalloutVars_instance = this;
    this.x37_1 = StyleVariable('silk');
    this.y37_1 = StyleVariable('silk');
    this.z37_1 = StyleVariable('silk');
    var tmp = this;
    var tmp0_defaultFallback = get_cssRem(0.5);
    tmp.a38_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
  }
  protoOf(CalloutVars).p37 = function () {
    return this.x37_1.h2n(this, Color$factory_0());
  };
  protoOf(CalloutVars).r37 = function () {
    return this.y37_1.h2n(this, BackgroundColor$factory_0());
  };
  protoOf(CalloutVars).b38 = function () {
    return this.z37_1.h2n(this, TitleFontSize$factory());
  };
  protoOf(CalloutVars).c38 = function () {
    return this.a38_1.h2n(this, TitleGap$factory());
  };
  var CalloutVars_instance;
  function CalloutVars_getInstance() {
    if (CalloutVars_instance == null)
      new CalloutVars();
    return CalloutVars_instance;
  }
  function markdownParagraphHack(_this__u8e3s4) {
    _init_properties_Callout_kt__ksu682();
    _this__u8e3s4.z2z(' >.callout-body>p:last-child', markdownParagraphHack$lambda);
  }
  function CalloutType$Companion$CAUTION$lambda(it) {
    return get_callout_0(toPalette(it)).d38();
  }
  function CalloutType$Companion$IMPORTANT$lambda(it) {
    return get_callout_0(toPalette(it)).e38();
  }
  function CalloutType$Companion$NOTE$lambda(it) {
    return get_callout_0(toPalette(it)).f38();
  }
  function CalloutType$Companion$QUESTION$lambda(it) {
    return get_callout_0(toPalette(it)).g38();
  }
  function CalloutType$Companion$QUOTE$lambda(it) {
    return get_callout_0(toPalette(it)).h38();
  }
  function CalloutType$Companion$TIP$lambda(it) {
    return get_callout_0(toPalette(it)).i38();
  }
  function CalloutType$Companion$WARNING$lambda(it) {
    return get_callout_0(toPalette(it)).j38();
  }
  function CalloutType_init_$Init$(icon, label, provideColor, $this) {
    var tmp = CalloutType$_init_$lambda_4upqpt_0(provideColor);
    CalloutType.call($this, icon, label, tmp, CalloutType$_init_$lambda_4upqpt_1(provideColor));
    return $this;
  }
  function CalloutType_init_$Create$(icon, label, provideColor) {
    return CalloutType_init_$Init$(icon, label, provideColor, objectCreate(protoOf(CalloutType)));
  }
  function Companion() {
    Companion_instance_18 = this;
    var tmp = this;
    var tmp_0 = ComposableSingletons$CalloutKt_getInstance().k38_1;
    tmp.r38_1 = CalloutType_init_$Create$(tmp_0, 'Caution', CalloutType$Companion$CAUTION$lambda);
    var tmp_1 = this;
    var tmp_2 = ComposableSingletons$CalloutKt_getInstance().l38_1;
    tmp_1.s38_1 = CalloutType_init_$Create$(tmp_2, 'Important', CalloutType$Companion$IMPORTANT$lambda);
    var tmp_3 = this;
    var tmp_4 = ComposableSingletons$CalloutKt_getInstance().m38_1;
    tmp_3.t38_1 = CalloutType_init_$Create$(tmp_4, 'Note', CalloutType$Companion$NOTE$lambda);
    var tmp_5 = this;
    var tmp_6 = ComposableSingletons$CalloutKt_getInstance().n38_1;
    tmp_5.u38_1 = CalloutType_init_$Create$(tmp_6, 'Question', CalloutType$Companion$QUESTION$lambda);
    var tmp_7 = this;
    var tmp_8 = ComposableSingletons$CalloutKt_getInstance().o38_1;
    tmp_7.v38_1 = CalloutType_init_$Create$(tmp_8, 'Quote', CalloutType$Companion$QUOTE$lambda);
    var tmp_9 = this;
    var tmp_10 = ComposableSingletons$CalloutKt_getInstance().p38_1;
    tmp_9.w38_1 = CalloutType_init_$Create$(tmp_10, 'Tip', CalloutType$Companion$TIP$lambda);
    var tmp_11 = this;
    var tmp_12 = ComposableSingletons$CalloutKt_getInstance().q38_1;
    tmp_11.x38_1 = CalloutType_init_$Create$(tmp_12, 'Warning', CalloutType$Companion$WARNING$lambda);
  }
  var Companion_instance_18;
  function Companion_getInstance_0() {
    if (Companion_instance_18 == null)
      new Companion();
    return Companion_instance_18;
  }
  function CalloutType$_init_$lambda_4upqpt($provideColor, $provideBackgroundColor) {
    return function (_this__u8e3s4) {
      return setVariable(setVariable(Companion_instance, CalloutVars_getInstance().p37(), $provideColor(_this__u8e3s4.e32_1)), CalloutVars_getInstance().r37(), $provideBackgroundColor(_this__u8e3s4.e32_1));
    };
  }
  function CalloutType$_init_$lambda_4upqpt_0($provideColor) {
    return function (it) {
      return $provideColor(it);
    };
  }
  function CalloutType$_init_$lambda_4upqpt_1($provideColor) {
    return function (it) {
      return $provideColor(it).b2w().a2w(VOID, VOID, VOID, it.u34() ? 0.15 : 0.2);
    };
  }
  function CalloutType(icon, label, provideColor, provideBackgroundColor) {
    Companion_getInstance_0();
    Base.call(this, CalloutType$_init_$lambda_4upqpt(provideColor, provideBackgroundColor));
    this.a39_1 = icon;
    this.b39_1 = label;
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.t18(p0, p1);
    };
  }
  function ComposableSingletons$CalloutKt$lambda_1$lambda_vor60q($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 3) === 2) || !$composer_0.v18()) {
      if (isTraceInProgress()) {
        traceEventStart(1105541261, $changed, -1, 'com.varabyte.kobweb.silk.components.display.ComposableSingletons$CalloutKt.lambda-1.<anonymous> (Callout.kt:82)');
      }
      StopIcon(null, $composer_0, 0, 1);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.m13();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1) {
      return $boundThis.t18(p0, p1);
    };
  }
  function ComposableSingletons$CalloutKt$lambda_2$lambda_2v4oyj($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 3) === 2) || !$composer_0.v18()) {
      if (isTraceInProgress()) {
        traceEventStart(-700737724, $changed, -1, 'com.varabyte.kobweb.silk.components.display.ComposableSingletons$CalloutKt.lambda-2.<anonymous> (Callout.kt:91)');
      }
      ExclaimIcon(null, $composer_0, 0, 1);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.m13();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1) {
      return $boundThis.t18(p0, p1);
    };
  }
  function ComposableSingletons$CalloutKt$lambda_3$lambda_pyhs3o($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 3) === 2) || !$composer_0.v18()) {
      if (isTraceInProgress()) {
        traceEventStart(-1510536654, $changed, -1, 'com.varabyte.kobweb.silk.components.display.ComposableSingletons$CalloutKt.lambda-3.<anonymous> (Callout.kt:100)');
      }
      InfoIcon(null, $composer_0, 0, 1);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.m13();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_2($boundThis) {
    return function (p0, p1) {
      return $boundThis.t18(p0, p1);
    };
  }
  function ComposableSingletons$CalloutKt$lambda_4$lambda_g8zst9($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 3) === 2) || !$composer_0.v18()) {
      if (isTraceInProgress()) {
        traceEventStart(-2086387290, $changed, -1, 'com.varabyte.kobweb.silk.components.display.ComposableSingletons$CalloutKt.lambda-4.<anonymous> (Callout.kt:109)');
      }
      QuestionIcon(null, $composer_0, 0, 1);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.m13();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_3($boundThis) {
    return function (p0, p1) {
      return $boundThis.t18(p0, p1);
    };
  }
  function ComposableSingletons$CalloutKt$lambda_5$lambda_ckmo8y($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 3) === 2) || !$composer_0.v18()) {
      if (isTraceInProgress()) {
        traceEventStart(1974337438, $changed, -1, 'com.varabyte.kobweb.silk.components.display.ComposableSingletons$CalloutKt.lambda-5.<anonymous> (Callout.kt:118)');
      }
      QuoteIcon(null, $composer_0, 0, 1);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.m13();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_4($boundThis) {
    return function (p0, p1) {
      return $boundThis.t18(p0, p1);
    };
  }
  function ComposableSingletons$CalloutKt$lambda_6$lambda_tmuwnz($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 3) === 2) || !$composer_0.v18()) {
      if (isTraceInProgress()) {
        traceEventStart(-613517763, $changed, -1, 'com.varabyte.kobweb.silk.components.display.ComposableSingletons$CalloutKt.lambda-6.<anonymous> (Callout.kt:127)');
      }
      LightbulbIcon(null, $composer_0, 0, 1);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.m13();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_5($boundThis) {
    return function (p0, p1) {
      return $boundThis.t18(p0, p1);
    };
  }
  function ComposableSingletons$CalloutKt$lambda_7$lambda_t8fls($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 3) === 2) || !$composer_0.v18()) {
      if (isTraceInProgress()) {
        traceEventStart(2087814270, $changed, -1, 'com.varabyte.kobweb.silk.components.display.ComposableSingletons$CalloutKt.lambda-7.<anonymous> (Callout.kt:136)');
      }
      WarningIcon(null, $composer_0, 0, 1);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.m13();
    }
    return Unit_instance;
  }
  function ComposableSingletons$CalloutKt() {
    ComposableSingletons$CalloutKt_instance = this;
    var tmp = this;
    tmp.k38_1 = ComposableLambda$invoke$ref(composableLambdaInstance(1105541261, false, ComposableSingletons$CalloutKt$lambda_1$lambda_vor60q));
    var tmp_0 = this;
    tmp_0.l38_1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(-700737724, false, ComposableSingletons$CalloutKt$lambda_2$lambda_2v4oyj));
    var tmp_1 = this;
    tmp_1.m38_1 = ComposableLambda$invoke$ref_1(composableLambdaInstance(-1510536654, false, ComposableSingletons$CalloutKt$lambda_3$lambda_pyhs3o));
    var tmp_2 = this;
    tmp_2.n38_1 = ComposableLambda$invoke$ref_2(composableLambdaInstance(-2086387290, false, ComposableSingletons$CalloutKt$lambda_4$lambda_g8zst9));
    var tmp_3 = this;
    tmp_3.o38_1 = ComposableLambda$invoke$ref_3(composableLambdaInstance(1974337438, false, ComposableSingletons$CalloutKt$lambda_5$lambda_ckmo8y));
    var tmp_4 = this;
    tmp_4.p38_1 = ComposableLambda$invoke$ref_4(composableLambdaInstance(-613517763, false, ComposableSingletons$CalloutKt$lambda_6$lambda_tmuwnz));
    var tmp_5 = this;
    tmp_5.q38_1 = ComposableLambda$invoke$ref_5(composableLambdaInstance(2087814270, false, ComposableSingletons$CalloutKt$lambda_7$lambda_t8fls));
  }
  var ComposableSingletons$CalloutKt_instance;
  function ComposableSingletons$CalloutKt_getInstance() {
    if (ComposableSingletons$CalloutKt_instance == null)
      new ComposableSingletons$CalloutKt();
    return ComposableSingletons$CalloutKt_instance;
  }
  function CalloutStyle$lambda($this$CssStyle) {
    _init_properties_Callout_kt__ksu682();
    $this$CssStyle.k31(CalloutStyle$lambda$lambda);
    $this$CssStyle.z2z(' >.callout-title', CalloutStyle$lambda$lambda_0);
    return Unit_instance;
  }
  function CalloutStyle$lambda$lambda() {
    _init_properties_Callout_kt__ksu682();
    return marginBlock(textAlign(Companion_instance, Companion_instance_6.v2j()), get_em(1));
  }
  function CalloutStyle$lambda$lambda_0() {
    _init_properties_Callout_kt__ksu682();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return gap(fontSize(fontWeight(alignItems(display(tmp, 'flex'), Companion_instance_8.t2j()), Companion_instance_9.v2k()), CalloutVars_getInstance().b38().b2n()), CalloutVars_getInstance().c38().b2n());
  }
  function LeftBorderedCalloutVariant$lambda($this$addVariant) {
    _init_properties_Callout_kt__ksu682();
    $this$addVariant.k31(LeftBorderedCalloutVariant$lambda$lambda);
    $this$addVariant.z2z(' >.callout-title', LeftBorderedCalloutVariant$lambda$lambda_0);
    markdownParagraphHack($this$addVariant);
    return Unit_instance;
  }
  function LeftBorderedCalloutVariant$lambda$lambda() {
    _init_properties_Callout_kt__ksu682();
    var tmp = Companion_instance;
    var tmp_0 = get_em(0.25);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return padding_0(borderLeft(tmp, tmp_0, 'solid', CalloutVars_getInstance().p37().b2n()), get_cssRem(0.5), get_cssRem(1));
  }
  function LeftBorderedCalloutVariant$lambda$lambda_0() {
    _init_properties_Callout_kt__ksu682();
    var tmp = color(Companion_instance, CalloutVars_getInstance().p37().b2n());
    return margin_0(tmp, LeftBorderedCalloutVariant$lambda$lambda$lambda);
  }
  function LeftBorderedCalloutVariant$lambda$lambda$lambda($this$margin) {
    _init_properties_Callout_kt__ksu682();
    $this$margin.l2x(get_cssRem(1));
    return Unit_instance;
  }
  function LeftBorderedFilledCalloutVariant$lambda($this$addVariant) {
    _init_properties_Callout_kt__ksu682();
    $this$addVariant.k31(LeftBorderedFilledCalloutVariant$lambda$lambda);
    $this$addVariant.z2z(' >.callout-title', LeftBorderedFilledCalloutVariant$lambda$lambda_0);
    markdownParagraphHack($this$addVariant);
    return Unit_instance;
  }
  function LeftBorderedFilledCalloutVariant$lambda$lambda() {
    _init_properties_Callout_kt__ksu682();
    var tmp = Companion_instance;
    var tmp_0 = get_em(0.25);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return boxShadow(padding(borderRadius(backgroundColor(borderLeft(tmp, tmp_0, 'solid', CalloutVars_getInstance().p37().b2n()), CalloutVars_getInstance().r37().b2n()), get_px(4)), get_cssRem(0.8)), [Companion_instance_10.k2k(get_px(0), get_px(1), get_px(2), VOID, Colors_instance.j2w().a2w(VOID, VOID, VOID, 0.12)), Companion_instance_10.k2k(get_px(0), get_px(3), get_px(10), VOID, Colors_instance.j2w().a2w(VOID, VOID, VOID, 0.08))]);
  }
  function LeftBorderedFilledCalloutVariant$lambda$lambda_0() {
    _init_properties_Callout_kt__ksu682();
    var tmp = color(Companion_instance, CalloutVars_getInstance().p37().b2n());
    return margin_0(tmp, LeftBorderedFilledCalloutVariant$lambda$lambda$lambda);
  }
  function LeftBorderedFilledCalloutVariant$lambda$lambda$lambda($this$margin) {
    _init_properties_Callout_kt__ksu682();
    $this$margin.l2x(get_cssRem(0.25));
    return Unit_instance;
  }
  function OutlinedCalloutVariant$lambda($this$addVariant) {
    _init_properties_Callout_kt__ksu682();
    $this$addVariant.k31(OutlinedCalloutVariant$lambda$lambda);
    $this$addVariant.z2z(' >.callout-title', OutlinedCalloutVariant$lambda$lambda_0);
    $this$addVariant.z2z(' .callout-icon', OutlinedCalloutVariant$lambda$lambda_1);
    $this$addVariant.z2z(' >.callout-body', OutlinedCalloutVariant$lambda$lambda_2);
    markdownParagraphHack($this$addVariant);
    return Unit_instance;
  }
  function OutlinedCalloutVariant$lambda$lambda() {
    _init_properties_Callout_kt__ksu682();
    var tmp = Companion_instance;
    var tmp_0 = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return borderRadius(border(tmp, tmp_0, 'solid', CalloutVars_getInstance().p37().b2n()), get_cssRem(0.2));
  }
  function OutlinedCalloutVariant$lambda$lambda_0() {
    _init_properties_Callout_kt__ksu682();
    return padding_0(backgroundColor(Companion_instance, CalloutVars_getInstance().r37().b2n()), get_cssRem(0.5), get_cssRem(0.75));
  }
  function OutlinedCalloutVariant$lambda$lambda_1() {
    _init_properties_Callout_kt__ksu682();
    return color(Companion_instance, CalloutVars_getInstance().p37().b2n());
  }
  function OutlinedCalloutVariant$lambda$lambda_2() {
    _init_properties_Callout_kt__ksu682();
    return padding_0(Companion_instance, get_cssRem(0.5), get_cssRem(0.75));
  }
  function MatchingLinkCalloutVariant$lambda($this$addVariant) {
    _init_properties_Callout_kt__ksu682();
    descendants($this$addVariant, [':any-link'], MatchingLinkCalloutVariant$lambda$lambda);
    return Unit_instance;
  }
  function MatchingLinkCalloutVariant$lambda$lambda() {
    _init_properties_Callout_kt__ksu682();
    return color(Companion_instance, CalloutVars_getInstance().p37().b2n());
  }
  function markdownParagraphHack$lambda() {
    _init_properties_Callout_kt__ksu682();
    var tmp = Companion_instance;
    return marginBlock_0(tmp, markdownParagraphHack$lambda$lambda);
  }
  function markdownParagraphHack$lambda$lambda($this$marginBlock) {
    _init_properties_Callout_kt__ksu682();
    $this$marginBlock.n2x(get_px(0));
    return Unit_instance;
  }
  function Color$factory_0() {
    return getPropertyCallableRef('Color', 1, KProperty1, function (receiver) {
      return receiver.p37();
    }, null);
  }
  function BackgroundColor$factory_0() {
    return getPropertyCallableRef('BackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.r37();
    }, null);
  }
  function TitleFontSize$factory() {
    return getPropertyCallableRef('TitleFontSize', 1, KProperty1, function (receiver) {
      return receiver.b38();
    }, null);
  }
  function TitleGap$factory() {
    return getPropertyCallableRef('TitleGap', 1, KProperty1, function (receiver) {
      return receiver.c38();
    }, null);
  }
  var properties_initialized_Callout_kt_nor0bk;
  function _init_properties_Callout_kt__ksu682() {
    if (!properties_initialized_Callout_kt_nor0bk) {
      properties_initialized_Callout_kt_nor0bk = true;
      CalloutStyle = CssStyle(VOID, CalloutStyle$lambda);
      var tmp = get_CalloutStyle();
      LeftBorderedCalloutVariant = addVariant(tmp, VOID, LeftBorderedCalloutVariant$lambda);
      var tmp_0 = get_CalloutStyle();
      LeftBorderedFilledCalloutVariant = addVariant(tmp_0, VOID, LeftBorderedFilledCalloutVariant$lambda);
      var tmp_1 = get_CalloutStyle();
      OutlinedCalloutVariant = addVariant(tmp_1, VOID, OutlinedCalloutVariant$lambda);
      var tmp_2 = get_CalloutStyle();
      MatchingLinkCalloutVariant = addVariant(tmp_2, VOID, MatchingLinkCalloutVariant$lambda);
      com_varabyte_kobweb_silk_components_display_CalloutVars$stable = 8;
      com_varabyte_kobweb_silk_components_display_CalloutType$stable = 0;
      com_varabyte_kobweb_silk_components_display_CalloutDefaults$stable = 0;
    }
  }
  function get_ButtonStyle() {
    _init_properties_Button_kt__2845m6();
    return ButtonStyle;
  }
  var ButtonStyle;
  var com_varabyte_kobweb_silk_components_forms_ButtonVars$stable;
  var com_varabyte_kobweb_silk_components_forms_ButtonSize$stable;
  function ButtonVars() {
    ButtonVars_instance = this;
    this.c39_1 = StyleVariable('silk');
    var tmp = this;
    var tmp0_defaultFallback = get_FocusOutlineColorVar().b2n();
    tmp.d39_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    this.e39_1 = StyleVariable('silk');
    this.f39_1 = StyleVariable('silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_ColorVar().b2n();
    tmp_0.g39_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = TransitionDurationVars_getInstance().z2j().b2n();
    tmp_1.h39_1 = StyleVariable_1(tmp0_defaultFallback_1, 'silk');
    this.i39_1 = StyleVariable('silk');
    this.j39_1 = StyleVariable('silk');
    this.k39_1 = StyleVariable('silk');
  }
  protoOf(ButtonVars).l39 = function () {
    return this.c39_1.h2n(this, BackgroundDefaultColor$factory());
  };
  protoOf(ButtonVars).m39 = function () {
    return this.d39_1.h2n(this, BackgroundFocusColor$factory());
  };
  protoOf(ButtonVars).n39 = function () {
    return this.e39_1.h2n(this, BackgroundHoverColor$factory());
  };
  protoOf(ButtonVars).o39 = function () {
    return this.f39_1.h2n(this, BackgroundPressedColor$factory());
  };
  protoOf(ButtonVars).p37 = function () {
    return this.g39_1.h2n(this, Color$factory_1());
  };
  protoOf(ButtonVars).w37 = function () {
    return this.h39_1.h2n(this, ColorTransitionDuration$factory_0());
  };
  protoOf(ButtonVars).p39 = function () {
    return this.i39_1.h2n(this, FontSize$factory());
  };
  protoOf(ButtonVars).q39 = function () {
    return this.j39_1.h2n(this, Height$factory());
  };
  protoOf(ButtonVars).r39 = function () {
    return this.k39_1.h2n(this, PaddingHorizontal$factory());
  };
  var ButtonVars_instance;
  function ButtonVars_getInstance() {
    if (ButtonVars_instance == null)
      new ButtonVars();
    return ButtonVars_instance;
  }
  function Companion_0() {
    Companion_instance_19 = this;
    this.s39_1 = new ButtonSize(FontSizeVars_getInstance().a3a().b2n(), get_cssRem(1.5), get_cssRem(0.5));
    this.t39_1 = new ButtonSize(FontSizeVars_getInstance().b3a().b2n(), get_cssRem(2), get_cssRem(0.75));
    this.u39_1 = new ButtonSize(FontSizeVars_getInstance().c3a().b2n(), get_cssRem(2.5), get_cssRem(1));
    this.v39_1 = new ButtonSize(FontSizeVars_getInstance().d3a().b2n(), get_cssRem(3), get_cssRem(1.5));
  }
  var Companion_instance_19;
  function Companion_getInstance_1() {
    if (Companion_instance_19 == null)
      new Companion_0();
    return Companion_instance_19;
  }
  function ButtonSize(fontSize, height, horizontalPadding) {
    Companion_getInstance_1();
    Base_init_$Init$(setVariable(setVariable(setVariable(Companion_instance, ButtonVars_getInstance().p39(), fontSize), ButtonVars_getInstance().q39(), height), ButtonVars_getInstance().r39(), horizontalPadding), VOID, this);
  }
  function ButtonStyle$lambda($this$CssStyle) {
    _init_properties_Button_kt__2845m6();
    $this$CssStyle.k31(ButtonStyle$lambda$lambda);
    var tmp = get_hover($this$CssStyle).y30(not($this$CssStyle, [get_ariaDisabled($this$CssStyle)]));
    tmp.p30(ButtonStyle$lambda$lambda_0);
    var tmp_0 = get_focusVisible($this$CssStyle).y30(not($this$CssStyle, [get_ariaDisabled($this$CssStyle)]));
    tmp_0.p30(ButtonStyle$lambda$lambda_1);
    var tmp_1 = get_active($this$CssStyle).y30(not($this$CssStyle, [get_ariaDisabled($this$CssStyle)]));
    tmp_1.p30(ButtonStyle$lambda$lambda_2);
    return Unit_instance;
  }
  function ButtonStyle$lambda$lambda() {
    _init_properties_Button_kt__2845m6();
    var tmp = borderRadius(verticalAlign(padding_0(whiteSpace(fontWeight(fontSize(minWidth(height(lineHeight(backgroundColor(color(Companion_instance, ButtonVars_getInstance().p37().b2n()), ButtonVars_getInstance().l39().b2n()), 1.2), ButtonVars_getInstance().q39().b2n()), ButtonVars_getInstance().q39().b2n()), ButtonVars_getInstance().p39().b2n()), Companion_instance_9.w2k()), Companion_instance_11.m2n()), VOID, ButtonVars_getInstance().r39().b2n()), Companion_instance_12.d2m()), get_cssRem(0.375));
    return transition_0(userSelect(border_0(tmp, ButtonStyle$lambda$lambda$lambda), Companion_instance_3.t2k()), [Companion_instance_2.u2n('background-color', ButtonVars_getInstance().w37().b2n())]);
  }
  function ButtonStyle$lambda$lambda$lambda($this$border) {
    _init_properties_Button_kt__2845m6();
    $this$border.h2x(get_px(0));
    return Unit_instance;
  }
  function ButtonStyle$lambda$lambda_0() {
    _init_properties_Button_kt__2845m6();
    return cursor(backgroundColor(Companion_instance, ButtonVars_getInstance().n39().b2n()), Companion_instance_1.q2k());
  }
  function ButtonStyle$lambda$lambda_1() {
    _init_properties_Button_kt__2845m6();
    var tmp = Companion_instance;
    var tmp_0 = get_px(2);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return boxShadow_0(outline(tmp, tmp_0, 'solid', Colors_instance.h2w()), VOID, VOID, VOID, get_cssRem(0.1875), ButtonVars_getInstance().m39().b2n());
  }
  function ButtonStyle$lambda$lambda_2() {
    _init_properties_Button_kt__2845m6();
    return backgroundColor(Companion_instance, ButtonVars_getInstance().o39().b2n());
  }
  function BackgroundDefaultColor$factory() {
    return getPropertyCallableRef('BackgroundDefaultColor', 1, KProperty1, function (receiver) {
      return receiver.l39();
    }, null);
  }
  function BackgroundFocusColor$factory() {
    return getPropertyCallableRef('BackgroundFocusColor', 1, KProperty1, function (receiver) {
      return receiver.m39();
    }, null);
  }
  function BackgroundHoverColor$factory() {
    return getPropertyCallableRef('BackgroundHoverColor', 1, KProperty1, function (receiver) {
      return receiver.n39();
    }, null);
  }
  function BackgroundPressedColor$factory() {
    return getPropertyCallableRef('BackgroundPressedColor', 1, KProperty1, function (receiver) {
      return receiver.o39();
    }, null);
  }
  function Color$factory_1() {
    return getPropertyCallableRef('Color', 1, KProperty1, function (receiver) {
      return receiver.p37();
    }, null);
  }
  function ColorTransitionDuration$factory_0() {
    return getPropertyCallableRef('ColorTransitionDuration', 1, KProperty1, function (receiver) {
      return receiver.w37();
    }, null);
  }
  function FontSize$factory() {
    return getPropertyCallableRef('FontSize', 1, KProperty1, function (receiver) {
      return receiver.p39();
    }, null);
  }
  function Height$factory() {
    return getPropertyCallableRef('Height', 1, KProperty1, function (receiver) {
      return receiver.q39();
    }, null);
  }
  function PaddingHorizontal$factory() {
    return getPropertyCallableRef('PaddingHorizontal', 1, KProperty1, function (receiver) {
      return receiver.r39();
    }, null);
  }
  var properties_initialized_Button_kt_yov184;
  function _init_properties_Button_kt__2845m6() {
    if (!properties_initialized_Button_kt_yov184) {
      properties_initialized_Button_kt_yov184 = true;
      ButtonStyle = CssStyle(VOID, ButtonStyle$lambda);
      com_varabyte_kobweb_silk_components_forms_ButtonVars$stable = 8;
      com_varabyte_kobweb_silk_components_forms_ButtonSize$stable = 0;
    }
  }
  function get_CheckboxStyle() {
    _init_properties_Checkbox_kt__x46qhp();
    return CheckboxStyle;
  }
  var CheckboxStyle;
  function get_CheckboxEnabledAnim() {
    _init_properties_Checkbox_kt__x46qhp();
    return CheckboxEnabledAnim;
  }
  var CheckboxEnabledAnim;
  function get_CheckboxIconContainerStyle() {
    _init_properties_Checkbox_kt__x46qhp();
    return CheckboxIconContainerStyle;
  }
  var CheckboxIconContainerStyle;
  function get_UncheckedCheckboxIconContainerVariant() {
    _init_properties_Checkbox_kt__x46qhp();
    return UncheckedCheckboxIconContainerVariant;
  }
  var UncheckedCheckboxIconContainerVariant;
  function get_CheckedCheckboxIconContainerVariant() {
    _init_properties_Checkbox_kt__x46qhp();
    return CheckedCheckboxIconContainerVariant;
  }
  var CheckedCheckboxIconContainerVariant;
  function get_CheckboxIconStyle() {
    _init_properties_Checkbox_kt__x46qhp();
    return CheckboxIconStyle;
  }
  var CheckboxIconStyle;
  function get_CheckboxInputVariant() {
    _init_properties_Checkbox_kt__x46qhp();
    return CheckboxInputVariant;
  }
  var CheckboxInputVariant;
  var com_varabyte_kobweb_silk_components_forms_CheckboxDefaults$stable;
  var com_varabyte_kobweb_silk_components_forms_CheckboxVars$stable;
  var com_varabyte_kobweb_silk_components_forms_CheckboxSize$stable;
  var com_varabyte_kobweb_silk_components_forms_CheckboxIconScope$stable;
  function CheckboxVars() {
    CheckboxVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_BorderColorVar().b2n();
    tmp.e3a_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_cssRem(0.125);
    tmp_0.f3a_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = get_cssRem(0.125);
    tmp_1.g3a_1 = StyleVariable_0(tmp0_defaultFallback_1, 'silk');
    this.h3a_1 = StyleVariable('silk');
    var tmp_2 = this;
    var tmp0_defaultFallback_2 = get_cssRem(0.5);
    tmp_2.i3a_1 = StyleVariable_0(tmp0_defaultFallback_2, 'silk');
    this.j3a_1 = StyleVariable('silk');
    this.k3a_1 = StyleVariable('silk');
    var tmp_3 = this;
    var tmp0_defaultFallback_3 = get_FocusOutlineColorVar().b2n();
    tmp_3.l3a_1 = StyleVariable_0(tmp0_defaultFallback_3, 'silk');
    var tmp_4 = this;
    var tmp0_defaultFallback_4 = get_cssRem(0.1875);
    tmp_4.m3a_1 = StyleVariable_0(tmp0_defaultFallback_4, 'silk');
    this.n3a_1 = StyleVariable('silk');
    this.o3a_1 = StyleVariable('silk');
    this.p3a_1 = StyleVariable('silk');
    this.q3a_1 = StyleVariable('silk');
    var tmp_5 = this;
    var tmp0_defaultFallback_5 = TransitionDurationVars_getInstance().s3a().b2n();
    tmp_5.r3a_1 = StyleVariable_1(tmp0_defaultFallback_5, 'silk');
  }
  protoOf(CheckboxVars).q37 = function () {
    return this.e3a_1.h2n(this, BorderColor$factory_0());
  };
  protoOf(CheckboxVars).t3a = function () {
    return this.f3a_1.h2n(this, BorderRadius$factory());
  };
  protoOf(CheckboxVars).u3a = function () {
    return this.g3a_1.h2n(this, BorderWidth$factory());
  };
  protoOf(CheckboxVars).v3a = function () {
    return this.h3a_1.h2n(this, Size$factory());
  };
  protoOf(CheckboxVars).w3a = function () {
    return this.i3a_1.h2n(this, Spacing$factory());
  };
  protoOf(CheckboxVars).p39 = function () {
    return this.j3a_1.h2n(this, FontSize$factory_0());
  };
  protoOf(CheckboxVars).x3a = function () {
    return this.k3a_1.h2n(this, IconSize$factory());
  };
  protoOf(CheckboxVars).y3a = function () {
    return this.l3a_1.h2n(this, FocusOutlineColor$factory());
  };
  protoOf(CheckboxVars).z3a = function () {
    return this.m3a_1.h2n(this, FocusOutlineSpread$factory());
  };
  protoOf(CheckboxVars).a3b = function () {
    return this.n3a_1.h2n(this, UncheckedBackgroundColor$factory());
  };
  protoOf(CheckboxVars).b3b = function () {
    return this.o3a_1.h2n(this, IconColor$factory());
  };
  protoOf(CheckboxVars).c3b = function () {
    return this.p3a_1.h2n(this, IconBackgroundColor$factory());
  };
  protoOf(CheckboxVars).d3b = function () {
    return this.q3a_1.h2n(this, IconBackgroundHoverColor$factory());
  };
  protoOf(CheckboxVars).e3b = function () {
    return this.r3a_1.h2n(this, TransitionDuration$factory());
  };
  var CheckboxVars_instance;
  function CheckboxVars_getInstance() {
    if (CheckboxVars_instance == null)
      new CheckboxVars();
    return CheckboxVars_instance;
  }
  function Companion_1() {
    Companion_instance_20 = this;
    this.f3b_1 = new CheckboxSize(get_cssRem(0.875), get_cssRem(0.45), FontSizeVars_getInstance().b3a().b2n());
    this.g3b_1 = new CheckboxSize(get_cssRem(1), get_cssRem(0.625), FontSizeVars_getInstance().c3a().b2n());
    this.h3b_1 = new CheckboxSize(get_cssRem(1.25), get_cssRem(0.8), FontSizeVars_getInstance().d3a().b2n());
  }
  var Companion_instance_20;
  function Companion_getInstance_2() {
    if (Companion_instance_20 == null)
      new Companion_1();
    return Companion_instance_20;
  }
  function CheckboxSize(boxSize, iconSize, fontSize) {
    Companion_getInstance_2();
    Base_init_$Init$(setVariable(setVariable(setVariable(Companion_instance, CheckboxVars_getInstance().v3a(), boxSize), CheckboxVars_getInstance().x3a(), iconSize), CheckboxVars_getInstance().p39(), fontSize), VOID, this);
  }
  function CheckboxStyle$lambda($this$CssStyle) {
    _init_properties_Checkbox_kt__x46qhp();
    $this$CssStyle.k31(CheckboxStyle$lambda$lambda);
    return Unit_instance;
  }
  function CheckboxStyle$lambda$lambda() {
    _init_properties_Checkbox_kt__x46qhp();
    var tmp = cursor(fontSize(userSelect(gap(Companion_instance, CheckboxVars_getInstance().w3a().b2n()), Companion_instance_3.t2k()), CheckboxVars_getInstance().p39().b2n()), Companion_instance_1.q2k());
    // Inline function 'org.jetbrains.compose.web.css.Companion.Relative' call
    // Inline function 'org.jetbrains.compose.web.css.Position' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'relative';
    return position(tmp, tmp$ret$3);
  }
  function CheckboxEnabledAnim$lambda($this$Keyframes) {
    _init_properties_Checkbox_kt__x46qhp();
    $this$Keyframes.s32(CheckboxEnabledAnim$lambda$lambda);
    $this$Keyframes.t32(CheckboxEnabledAnim$lambda$lambda_0);
    return Unit_instance;
  }
  function CheckboxEnabledAnim$lambda$lambda() {
    _init_properties_Checkbox_kt__x46qhp();
    return opacity(Companion_instance, 0);
  }
  function CheckboxEnabledAnim$lambda$lambda_0() {
    _init_properties_Checkbox_kt__x46qhp();
    return opacity(Companion_instance, 1);
  }
  function CheckboxIconContainerStyle$lambda($this$CssStyle) {
    _init_properties_Checkbox_kt__x46qhp();
    $this$CssStyle.k31(CheckboxIconContainerStyle$lambda$lambda);
    return Unit_instance;
  }
  function CheckboxIconContainerStyle$lambda$lambda() {
    _init_properties_Checkbox_kt__x46qhp();
    var tmp = size(fontSize(Companion_instance, CheckboxVars_getInstance().x3a().b2n()), CheckboxVars_getInstance().v3a().b2n());
    var tmp_0 = CheckboxVars_getInstance().u3a().b2n();
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return transition(borderRadius(border(tmp, tmp_0, 'solid', CheckboxVars_getInstance().q37().b2n()), CheckboxVars_getInstance().t3a().b2n()), Companion_instance_2.w2n(listOf(['background-color', 'border-color']), CheckboxVars_getInstance().e3b().b2n()));
  }
  function UncheckedCheckboxIconContainerVariant$lambda($this$addVariantBase) {
    _init_properties_Checkbox_kt__x46qhp();
    return backgroundColor(Companion_instance, CheckboxVars_getInstance().a3b().b2n());
  }
  function CheckedCheckboxIconContainerVariant$lambda($this$addVariant) {
    _init_properties_Checkbox_kt__x46qhp();
    $this$addVariant.k31(CheckedCheckboxIconContainerVariant$lambda$lambda);
    return Unit_instance;
  }
  function CheckedCheckboxIconContainerVariant$lambda$lambda() {
    _init_properties_Checkbox_kt__x46qhp();
    var tmp = backgroundColor(Companion_instance, CheckboxVars_getInstance().c3b().b2n());
    return border_0(tmp, CheckedCheckboxIconContainerVariant$lambda$lambda$lambda);
  }
  function CheckedCheckboxIconContainerVariant$lambda$lambda$lambda($this$border) {
    _init_properties_Checkbox_kt__x46qhp();
    $this$border.f2x(CheckboxVars_getInstance().c3b().b2n());
    return Unit_instance;
  }
  function CheckboxIconStyle$lambda($this$base) {
    _init_properties_Checkbox_kt__x46qhp();
    return color(size(Companion_instance, CheckboxVars_getInstance().v3a().b2n()), CheckboxVars_getInstance().b3b().b2n());
  }
  function CheckboxInputVariant$lambda($this$addVariant) {
    _init_properties_Checkbox_kt__x46qhp();
    $this$addVariant.k31(CheckboxInputVariant$lambda$lambda);
    $this$addVariant.z2z(':focus-visible + *', CheckboxInputVariant$lambda$lambda_0);
    $this$addVariant.z2z(':not([aria-disabled]):hover + *', CheckboxInputVariant$lambda$lambda_1);
    return Unit_instance;
  }
  function CheckboxInputVariant$lambda$lambda() {
    _init_properties_Checkbox_kt__x46qhp();
    return get_HiddenInputModifier();
  }
  function CheckboxInputVariant$lambda$lambda_0() {
    _init_properties_Checkbox_kt__x46qhp();
    return boxShadow_0(Companion_instance, VOID, VOID, VOID, CheckboxVars_getInstance().z3a().b2n(), CheckboxVars_getInstance().y3a().b2n());
  }
  function CheckboxInputVariant$lambda$lambda_1() {
    _init_properties_Checkbox_kt__x46qhp();
    return setVariable(Companion_instance, CheckboxVars_getInstance().c3b(), CheckboxVars_getInstance().d3b().b2n());
  }
  function BorderColor$factory_0() {
    return getPropertyCallableRef('BorderColor', 1, KProperty1, function (receiver) {
      return receiver.q37();
    }, null);
  }
  function BorderRadius$factory() {
    return getPropertyCallableRef('BorderRadius', 1, KProperty1, function (receiver) {
      return receiver.t3a();
    }, null);
  }
  function BorderWidth$factory() {
    return getPropertyCallableRef('BorderWidth', 1, KProperty1, function (receiver) {
      return receiver.u3a();
    }, null);
  }
  function Size$factory() {
    return getPropertyCallableRef('Size', 1, KProperty1, function (receiver) {
      return receiver.v3a();
    }, null);
  }
  function Spacing$factory() {
    return getPropertyCallableRef('Spacing', 1, KProperty1, function (receiver) {
      return receiver.w3a();
    }, null);
  }
  function FontSize$factory_0() {
    return getPropertyCallableRef('FontSize', 1, KProperty1, function (receiver) {
      return receiver.p39();
    }, null);
  }
  function IconSize$factory() {
    return getPropertyCallableRef('IconSize', 1, KProperty1, function (receiver) {
      return receiver.x3a();
    }, null);
  }
  function FocusOutlineColor$factory() {
    return getPropertyCallableRef('FocusOutlineColor', 1, KProperty1, function (receiver) {
      return receiver.y3a();
    }, null);
  }
  function FocusOutlineSpread$factory() {
    return getPropertyCallableRef('FocusOutlineSpread', 1, KProperty1, function (receiver) {
      return receiver.z3a();
    }, null);
  }
  function UncheckedBackgroundColor$factory() {
    return getPropertyCallableRef('UncheckedBackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.a3b();
    }, null);
  }
  function IconColor$factory() {
    return getPropertyCallableRef('IconColor', 1, KProperty1, function (receiver) {
      return receiver.b3b();
    }, null);
  }
  function IconBackgroundColor$factory() {
    return getPropertyCallableRef('IconBackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.c3b();
    }, null);
  }
  function IconBackgroundHoverColor$factory() {
    return getPropertyCallableRef('IconBackgroundHoverColor', 1, KProperty1, function (receiver) {
      return receiver.d3b();
    }, null);
  }
  function TransitionDuration$factory() {
    return getPropertyCallableRef('TransitionDuration', 1, KProperty1, function (receiver) {
      return receiver.e3b();
    }, null);
  }
  var properties_initialized_Checkbox_kt_pem0wr;
  function _init_properties_Checkbox_kt__x46qhp() {
    if (!properties_initialized_Checkbox_kt_pem0wr) {
      properties_initialized_Checkbox_kt_pem0wr = true;
      var tmp = rowClasses(Companion_instance, VOID, CenterVertically_instance);
      CheckboxStyle = CssStyle(tmp, CheckboxStyle$lambda);
      CheckboxEnabledAnim = new Keyframes(CheckboxEnabledAnim$lambda);
      CheckboxIconContainerStyle = CssStyle(VOID, CheckboxIconContainerStyle$lambda);
      var tmp_0 = get_CheckboxIconContainerStyle();
      UncheckedCheckboxIconContainerVariant = addVariantBase(tmp_0, VOID, UncheckedCheckboxIconContainerVariant$lambda);
      var tmp_1 = get_CheckboxIconContainerStyle();
      CheckedCheckboxIconContainerVariant = addVariant(tmp_1, VOID, CheckedCheckboxIconContainerVariant$lambda);
      var tmp_2 = Companion_instance_5;
      CheckboxIconStyle = base(tmp_2, VOID, CheckboxIconStyle$lambda);
      var tmp_3 = get_InputStyle();
      CheckboxInputVariant = addVariant(tmp_3, VOID, CheckboxInputVariant$lambda);
      com_varabyte_kobweb_silk_components_forms_CheckboxDefaults$stable = 0;
      com_varabyte_kobweb_silk_components_forms_CheckboxVars$stable = 8;
      com_varabyte_kobweb_silk_components_forms_CheckboxSize$stable = 0;
      com_varabyte_kobweb_silk_components_forms_CheckboxIconScope$stable = 0;
    }
  }
  function get_HiddenInputModifier() {
    _init_properties_Input_kt__b04mg8();
    return HiddenInputModifier;
  }
  var HiddenInputModifier;
  function get_InputGroupStyle() {
    _init_properties_Input_kt__b04mg8();
    return InputGroupStyle;
  }
  var InputGroupStyle;
  function get_InputStyle() {
    _init_properties_Input_kt__b04mg8();
    return InputStyle;
  }
  var InputStyle;
  function get_OutlinedInputVariant() {
    _init_properties_Input_kt__b04mg8();
    return OutlinedInputVariant;
  }
  var OutlinedInputVariant;
  function get_FilledInputVariant() {
    _init_properties_Input_kt__b04mg8();
    return FilledInputVariant;
  }
  var FilledInputVariant;
  function get_FlushedInputVariant() {
    _init_properties_Input_kt__b04mg8();
    return FlushedInputVariant;
  }
  var FlushedInputVariant;
  function get_UnstyledInputVariant() {
    _init_properties_Input_kt__b04mg8();
    return UnstyledInputVariant;
  }
  var UnstyledInputVariant;
  var com_varabyte_kobweb_silk_components_forms_InputDefaults$stable;
  var com_varabyte_kobweb_silk_components_forms_InputVars$stable;
  var com_varabyte_kobweb_silk_components_forms_InputParams$stable;
  var com_varabyte_kobweb_silk_components_forms_InputGroupScope$stable;
  var com_varabyte_kobweb_silk_components_forms_InputSize$stable;
  function InputVars() {
    InputVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_BorderColorVar().b2n();
    tmp.i3b_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    this.j3b_1 = StyleVariable('silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_FocusOutlineColorVar().b2n();
    tmp_0.k3b_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
    this.l3b_1 = StyleVariable('silk');
    this.m3b_1 = StyleVariable('silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = TransitionDurationVars_getInstance().z2j().b2n();
    tmp_1.n3b_1 = StyleVariable_1(tmp0_defaultFallback_1, 'silk');
    this.o3b_1 = StyleVariable('silk');
    this.p3b_1 = StyleVariable('silk');
    this.q3b_1 = StyleVariable('silk');
    this.r3b_1 = StyleVariable('silk');
    this.s3b_1 = StyleVariable('silk');
    this.t3b_1 = StyleVariable('silk');
    var tmp_2 = this;
    var tmp0_defaultFallback_2 = get_PlaceholderOpacityVar().b2n();
    tmp_2.u3b_1 = StyleVariable_2(tmp0_defaultFallback_2, 'silk');
    var tmp_3 = this;
    var tmp0_defaultFallback_3 = get_PlaceholderColorVar().b2n();
    tmp_3.v3b_1 = StyleVariable_0(tmp0_defaultFallback_3, 'silk');
    var tmp_4 = this;
    var tmp0_defaultFallback_4 = get_cssRem(2.25);
    tmp_4.w3b_1 = StyleVariable_0(tmp0_defaultFallback_4, 'silk');
    var tmp_5 = this;
    var tmp0_defaultFallback_5 = get_cssRem(2.25);
    tmp_5.x3b_1 = StyleVariable_0(tmp0_defaultFallback_5, 'silk');
  }
  protoOf(InputVars).q37 = function () {
    return this.i3b_1.h2n(this, BorderColor$factory_1());
  };
  protoOf(InputVars).t3a = function () {
    return this.j3b_1.h2n(this, BorderRadius$factory_0());
  };
  protoOf(InputVars).y3b = function () {
    return this.k3b_1.h2n(this, BorderFocusColor$factory());
  };
  protoOf(InputVars).z3b = function () {
    return this.l3b_1.h2n(this, BorderHoverColor$factory());
  };
  protoOf(InputVars).a3c = function () {
    return this.m3b_1.h2n(this, BorderInvalidColor$factory());
  };
  protoOf(InputVars).w37 = function () {
    return this.n3b_1.h2n(this, ColorTransitionDuration$factory_1());
  };
  protoOf(InputVars).b3c = function () {
    return this.o3b_1.h2n(this, FilledColor$factory());
  };
  protoOf(InputVars).c3c = function () {
    return this.p3b_1.h2n(this, FilledHoverColor$factory());
  };
  protoOf(InputVars).d3c = function () {
    return this.q3b_1.h2n(this, FilledFocusColor$factory());
  };
  protoOf(InputVars).p39 = function () {
    return this.r3b_1.h2n(this, FontSize$factory_1());
  };
  protoOf(InputVars).q39 = function () {
    return this.s3b_1.h2n(this, Height$factory_0());
  };
  protoOf(InputVars).e3c = function () {
    return this.t3b_1.h2n(this, Padding$factory());
  };
  protoOf(InputVars).f3c = function () {
    return this.u3b_1.h2n(this, PlaceholderOpacity$factory());
  };
  protoOf(InputVars).g3c = function () {
    return this.v3b_1.h2n(this, PlaceholderColor$factory());
  };
  var InputVars_instance;
  function InputVars_getInstance() {
    if (InputVars_instance == null)
      new InputVars();
    return InputVars_instance;
  }
  function inputPadding(_this__u8e3s4) {
    _init_properties_Input_kt__b04mg8();
    var padding = InputVars_getInstance().e3c().b2n();
    return paddingInline(_this__u8e3s4, padding, padding);
  }
  function Companion_2() {
    Companion_instance_21 = this;
    this.h3c_1 = new InputSize(FontSizeVars_getInstance().a3a().b2n(), get_cssRem(1.25), get_cssRem(0.375), BorderRadiusVars_getInstance().a3a().b2n());
    this.i3c_1 = new InputSize(FontSizeVars_getInstance().b3a().b2n(), get_cssRem(1.75), get_cssRem(0.5), BorderRadiusVars_getInstance().b3a().b2n());
    this.j3c_1 = new InputSize(FontSizeVars_getInstance().c3a().b2n(), get_cssRem(2.25), get_cssRem(0.625), BorderRadiusVars_getInstance().c3a().b2n());
    this.k3c_1 = new InputSize(FontSizeVars_getInstance().d3a().b2n(), get_cssRem(2.5), get_cssRem(0.75), BorderRadiusVars_getInstance().c3a().b2n());
  }
  var Companion_instance_21;
  function Companion_getInstance_3() {
    if (Companion_instance_21 == null)
      new Companion_2();
    return Companion_instance_21;
  }
  function InputSize(fontSize, height, padding, borderRadius) {
    Companion_getInstance_3();
    Base_init_$Init$(setVariable(setVariable(setVariable(setVariable(Companion_instance, InputVars_getInstance().p39(), fontSize), InputVars_getInstance().q39(), height), InputVars_getInstance().e3c(), padding), InputVars_getInstance().t3a(), borderRadius), VOID, this);
  }
  function InputGroupStyle$lambda($this$base) {
    _init_properties_Input_kt__b04mg8();
    var tmp = Companion_instance;
    var tmp_0 = get_px(0);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = outline(tmp, tmp_0, 'solid', Colors_instance.h2w());
    var tmp_2 = get_px(0);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return fontSize(borderRadius(border(tmp_1, tmp_2, 'solid', Colors_instance.h2w()), InputVars_getInstance().t3a().b2n()), InputVars_getInstance().p39().b2n());
  }
  function InputStyle$lambda($this$CssStyle) {
    _init_properties_Input_kt__b04mg8();
    $this$CssStyle.k31(InputStyle$lambda$lambda);
    var tmp = get_placeholder($this$CssStyle);
    tmp.p30(InputStyle$lambda$lambda_0);
    return Unit_instance;
  }
  function InputStyle$lambda$lambda() {
    _init_properties_Input_kt__b04mg8();
    var tmp = backgroundColor(fontSize(height(color(appearance(Companion_instance, Companion_instance_14.t2k()), get_ColorVar().b2n()), InputVars_getInstance().q39().b2n()), InputVars_getInstance().p39().b2n()), Colors_instance.h2w());
    var tmp_0 = get_px(0);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = outline(tmp, tmp_0, 'solid', Colors_instance.h2w());
    var tmp_2 = get_px(0);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return transition(border(tmp_1, tmp_2, 'solid', Colors_instance.h2w()), Companion_instance_2.w2n(listOf(['border-color', 'box-shadow', 'background-color']), InputVars_getInstance().w37().b2n()));
  }
  function InputStyle$lambda$lambda_0() {
    _init_properties_Input_kt__b04mg8();
    return color(opacity(Companion_instance, InputVars_getInstance().f3c().b2n()), InputVars_getInstance().g3c().b2n());
  }
  function OutlinedInputVariant$lambda($this$addVariant) {
    _init_properties_Input_kt__b04mg8();
    $this$addVariant.k31(OutlinedInputVariant$lambda$lambda);
    var tmp = get_ariaInvalid($this$addVariant);
    tmp.p30(OutlinedInputVariant$lambda$lambda_0);
    var tmp_0 = get_hover($this$addVariant).y30(not($this$addVariant, [get_disabled($this$addVariant)]));
    tmp_0.p30(OutlinedInputVariant$lambda$lambda_1);
    var tmp_1 = get_focusVisible($this$addVariant).y30(not($this$addVariant, [get_disabled($this$addVariant)]));
    tmp_1.p30(OutlinedInputVariant$lambda$lambda_2);
    return Unit_instance;
  }
  function invoke$bordered(_this__u8e3s4, color) {
    var tmp = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return boxShadow_0(border(_this__u8e3s4, tmp, 'solid', color), VOID, VOID, VOID, get_px(1), color);
  }
  function OutlinedInputVariant$lambda$lambda() {
    _init_properties_Input_kt__b04mg8();
    var tmp = borderRadius(inputPadding(Companion_instance), InputVars_getInstance().t3a().b2n());
    var tmp_0 = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return border(tmp, tmp_0, 'solid', InputVars_getInstance().q37().b2n());
  }
  function OutlinedInputVariant$lambda$lambda_0() {
    _init_properties_Input_kt__b04mg8();
    return invoke$bordered(Companion_instance, InputVars_getInstance().a3c().b2n());
  }
  function OutlinedInputVariant$lambda$lambda_1() {
    _init_properties_Input_kt__b04mg8();
    var tmp = Companion_instance;
    return border_0(tmp, OutlinedInputVariant$lambda$lambda$lambda);
  }
  function OutlinedInputVariant$lambda$lambda$lambda($this$border) {
    _init_properties_Input_kt__b04mg8();
    $this$border.f2x(InputVars_getInstance().z3b().b2n());
    return Unit_instance;
  }
  function OutlinedInputVariant$lambda$lambda_2() {
    _init_properties_Input_kt__b04mg8();
    return invoke$bordered(Companion_instance, InputVars_getInstance().y3b().b2n());
  }
  function FilledInputVariant$lambda($this$addVariant) {
    _init_properties_Input_kt__b04mg8();
    $this$addVariant.k31(FilledInputVariant$lambda$lambda);
    var tmp = get_hover($this$addVariant).y30(not($this$addVariant, [get_disabled($this$addVariant)]));
    tmp.p30(FilledInputVariant$lambda$lambda_0);
    var tmp_0 = get_ariaInvalid($this$addVariant);
    tmp_0.p30(FilledInputVariant$lambda$lambda_1);
    var tmp_1 = get_focusVisible($this$addVariant).y30(not($this$addVariant, [get_disabled($this$addVariant)]));
    tmp_1.p30(FilledInputVariant$lambda$lambda_2);
    return Unit_instance;
  }
  function invoke$bordered_0(_this__u8e3s4, color) {
    return boxShadow_0(border_0(_this__u8e3s4, FilledInputVariant$lambda$bordered$lambda(color)), VOID, VOID, VOID, get_px(1), color);
  }
  function FilledInputVariant$lambda$lambda() {
    _init_properties_Input_kt__b04mg8();
    var tmp = borderRadius(backgroundColor(inputPadding(Companion_instance), InputVars_getInstance().b3c().b2n()), InputVars_getInstance().t3a().b2n());
    var tmp_0 = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return border(tmp, tmp_0, 'solid', Colors_instance.h2w());
  }
  function FilledInputVariant$lambda$lambda_0() {
    _init_properties_Input_kt__b04mg8();
    return backgroundColor(Companion_instance, InputVars_getInstance().c3c().b2n());
  }
  function FilledInputVariant$lambda$lambda_1() {
    _init_properties_Input_kt__b04mg8();
    return invoke$bordered_0(Companion_instance, InputVars_getInstance().a3c().b2n());
  }
  function FilledInputVariant$lambda$lambda_2() {
    _init_properties_Input_kt__b04mg8();
    return invoke$bordered_0(backgroundColor(Companion_instance, InputVars_getInstance().d3c().b2n()), InputVars_getInstance().y3b().b2n());
  }
  function FilledInputVariant$lambda$bordered$lambda($color) {
    return function ($this$border) {
      $this$border.f2x($color);
      return Unit_instance;
    };
  }
  function FlushedInputVariant$lambda($this$addVariant) {
    _init_properties_Input_kt__b04mg8();
    $this$addVariant.k31(FlushedInputVariant$lambda$lambda);
    var tmp = get_ariaInvalid($this$addVariant);
    tmp.p30(FlushedInputVariant$lambda$lambda_0);
    var tmp_0 = get_hover($this$addVariant).y30(not($this$addVariant, [get_disabled($this$addVariant)]));
    tmp_0.p30(FlushedInputVariant$lambda$lambda_1);
    var tmp_1 = get_focusVisible($this$addVariant).y30(not($this$addVariant, [get_disabled($this$addVariant)]));
    tmp_1.p30(FlushedInputVariant$lambda$lambda_2);
    return Unit_instance;
  }
  function invoke$bordered_1(_this__u8e3s4, color) {
    return boxShadow_0(border_0(_this__u8e3s4, FlushedInputVariant$lambda$bordered$lambda(color)), VOID, get_px(1), VOID, VOID, color);
  }
  function FlushedInputVariant$lambda$lambda() {
    _init_properties_Input_kt__b04mg8();
    var tmp = Companion_instance;
    var tmp_0 = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return borderBottom(tmp, tmp_0, 'solid', InputVars_getInstance().q37().b2n());
  }
  function FlushedInputVariant$lambda$lambda_0() {
    _init_properties_Input_kt__b04mg8();
    return invoke$bordered_1(Companion_instance, InputVars_getInstance().a3c().b2n());
  }
  function FlushedInputVariant$lambda$lambda_1() {
    _init_properties_Input_kt__b04mg8();
    var tmp = Companion_instance;
    return border_0(tmp, FlushedInputVariant$lambda$lambda$lambda);
  }
  function FlushedInputVariant$lambda$lambda$lambda($this$border) {
    _init_properties_Input_kt__b04mg8();
    $this$border.f2x(InputVars_getInstance().z3b().b2n());
    return Unit_instance;
  }
  function FlushedInputVariant$lambda$lambda_2() {
    _init_properties_Input_kt__b04mg8();
    return invoke$bordered_1(Companion_instance, InputVars_getInstance().y3b().b2n());
  }
  function FlushedInputVariant$lambda$bordered$lambda($color) {
    return function ($this$border) {
      $this$border.f2x($color);
      return Unit_instance;
    };
  }
  function UnstyledInputVariant$lambda($this$addVariant) {
    _init_properties_Input_kt__b04mg8();
    return Unit_instance;
  }
  function BorderColor$factory_1() {
    return getPropertyCallableRef('BorderColor', 1, KProperty1, function (receiver) {
      return receiver.q37();
    }, null);
  }
  function BorderRadius$factory_0() {
    return getPropertyCallableRef('BorderRadius', 1, KProperty1, function (receiver) {
      return receiver.t3a();
    }, null);
  }
  function BorderFocusColor$factory() {
    return getPropertyCallableRef('BorderFocusColor', 1, KProperty1, function (receiver) {
      return receiver.y3b();
    }, null);
  }
  function BorderHoverColor$factory() {
    return getPropertyCallableRef('BorderHoverColor', 1, KProperty1, function (receiver) {
      return receiver.z3b();
    }, null);
  }
  function BorderInvalidColor$factory() {
    return getPropertyCallableRef('BorderInvalidColor', 1, KProperty1, function (receiver) {
      return receiver.a3c();
    }, null);
  }
  function ColorTransitionDuration$factory_1() {
    return getPropertyCallableRef('ColorTransitionDuration', 1, KProperty1, function (receiver) {
      return receiver.w37();
    }, null);
  }
  function FilledColor$factory() {
    return getPropertyCallableRef('FilledColor', 1, KProperty1, function (receiver) {
      return receiver.b3c();
    }, null);
  }
  function FilledHoverColor$factory() {
    return getPropertyCallableRef('FilledHoverColor', 1, KProperty1, function (receiver) {
      return receiver.c3c();
    }, null);
  }
  function FilledFocusColor$factory() {
    return getPropertyCallableRef('FilledFocusColor', 1, KProperty1, function (receiver) {
      return receiver.d3c();
    }, null);
  }
  function FontSize$factory_1() {
    return getPropertyCallableRef('FontSize', 1, KProperty1, function (receiver) {
      return receiver.p39();
    }, null);
  }
  function Height$factory_0() {
    return getPropertyCallableRef('Height', 1, KProperty1, function (receiver) {
      return receiver.q39();
    }, null);
  }
  function Padding$factory() {
    return getPropertyCallableRef('Padding', 1, KProperty1, function (receiver) {
      return receiver.e3c();
    }, null);
  }
  function PlaceholderOpacity$factory() {
    return getPropertyCallableRef('PlaceholderOpacity', 1, KProperty1, function (receiver) {
      return receiver.f3c();
    }, null);
  }
  function PlaceholderColor$factory() {
    return getPropertyCallableRef('PlaceholderColor', 1, KProperty1, function (receiver) {
      return receiver.g3c();
    }, null);
  }
  var properties_initialized_Input_kt_tklayu;
  function _init_properties_Input_kt__b04mg8() {
    if (!properties_initialized_Input_kt_tklayu) {
      properties_initialized_Input_kt_tklayu = true;
      var tmp = whiteSpace(overflow_0(clip(padding(margin_1(size(border(Companion_instance, get_px(0)), get_px(1)), get_px(-1)), get_px(0)), RectF_init_$Create$(50.0)), Companion_instance_4.n2m()), Companion_instance_11.m2n());
      // Inline function 'org.jetbrains.compose.web.css.Companion.Absolute' call
      // Inline function 'org.jetbrains.compose.web.css.Position' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$3 = 'absolute';
      HiddenInputModifier = position(tmp, tmp$ret$3);
      var tmp_0 = Companion_instance_5;
      InputGroupStyle = base(tmp_0, VOID, InputGroupStyle$lambda);
      InputStyle = CssStyle(VOID, InputStyle$lambda);
      var tmp_1 = get_InputStyle();
      OutlinedInputVariant = addVariant(tmp_1, VOID, OutlinedInputVariant$lambda);
      var tmp_2 = get_InputStyle();
      FilledInputVariant = addVariant(tmp_2, VOID, FilledInputVariant$lambda);
      var tmp_3 = get_InputStyle();
      FlushedInputVariant = addVariant(tmp_3, VOID, FlushedInputVariant$lambda);
      var tmp_4 = get_InputStyle();
      UnstyledInputVariant = addVariant(tmp_4, VOID, UnstyledInputVariant$lambda);
      com_varabyte_kobweb_silk_components_forms_InputDefaults$stable = 0;
      com_varabyte_kobweb_silk_components_forms_InputVars$stable = 8;
      com_varabyte_kobweb_silk_components_forms_InputParams$stable = 8;
      com_varabyte_kobweb_silk_components_forms_InputGroupScope$stable = 8;
      com_varabyte_kobweb_silk_components_forms_InputSize$stable = 0;
    }
  }
  function get_SwitchStyle() {
    _init_properties_Switch_kt__dwcqr0();
    return SwitchStyle;
  }
  var SwitchStyle;
  function get_SwitchTrackStyle() {
    _init_properties_Switch_kt__dwcqr0();
    return SwitchTrackStyle;
  }
  var SwitchTrackStyle;
  function get_SwitchInputVariant() {
    _init_properties_Switch_kt__dwcqr0();
    return SwitchInputVariant;
  }
  var SwitchInputVariant;
  function get_SwitchThumbStyle() {
    _init_properties_Switch_kt__dwcqr0();
    return SwitchThumbStyle;
  }
  var SwitchThumbStyle;
  var com_varabyte_kobweb_silk_components_forms_SwitchVars$stable;
  var com_varabyte_kobweb_silk_components_forms_SwitchSize$stable;
  function SwitchVars() {
    SwitchVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_px(9999);
    tmp.p3c_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    this.q3c_1 = StyleVariable('silk');
    this.r3c_1 = StyleVariable('silk');
    this.s3c_1 = StyleVariable('silk');
    this.t3c_1 = StyleVariable('silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_FocusOutlineColorVar().b2n();
    tmp_0.u3c_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
    this.v3c_1 = StyleVariable('silk');
    this.w3c_1 = StyleVariable('silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = TransitionDurationVars_getInstance().y3c().b2n();
    tmp_1.x3c_1 = StyleVariable_1(tmp0_defaultFallback_1, 'silk');
  }
  protoOf(SwitchVars).t3a = function () {
    return this.p3c_1.h2n(this, BorderRadius$factory_1());
  };
  protoOf(SwitchVars).z3c = function () {
    return this.q3c_1.h2n(this, TrackWidth$factory());
  };
  protoOf(SwitchVars).a3d = function () {
    return this.r3c_1.h2n(this, TrackHeight$factory());
  };
  protoOf(SwitchVars).b3d = function () {
    return this.s3c_1.h2n(this, TrackPadding$factory());
  };
  protoOf(SwitchVars).c3d = function () {
    return this.t3c_1.h2n(this, TrackBackgroundColor$factory());
  };
  protoOf(SwitchVars).d3d = function () {
    return this.u3c_1.h2n(this, FocusColor$factory());
  };
  protoOf(SwitchVars).e3d = function () {
    return this.v3c_1.h2n(this, ThumbOffset$factory());
  };
  protoOf(SwitchVars).f3d = function () {
    return this.w3c_1.h2n(this, ThumbColor$factory());
  };
  protoOf(SwitchVars).e3b = function () {
    return this.x3c_1.h2n(this, TransitionDuration$factory_0());
  };
  var SwitchVars_instance;
  function SwitchVars_getInstance() {
    if (SwitchVars_instance == null)
      new SwitchVars();
    return SwitchVars_instance;
  }
  function Companion_3() {
    Companion_instance_22 = this;
    this.g3d_1 = new SwitchSize(get_cssRem(1.375), get_cssRem(0.75));
    this.h3d_1 = new SwitchSize(get_cssRem(1.875), get_cssRem(1));
    this.i3d_1 = new SwitchSize(get_cssRem(2.875), get_cssRem(1.5));
  }
  var Companion_instance_22;
  function Companion_getInstance_4() {
    if (Companion_instance_22 == null)
      new Companion_3();
    return Companion_instance_22;
  }
  function SwitchSize(width, height, padding) {
    Companion_getInstance_4();
    padding = padding === VOID ? get_cssRem(0.188) : padding;
    Base_init_$Init$(setVariable(setVariable(setVariable(Companion_instance, SwitchVars_getInstance().z3c(), width), SwitchVars_getInstance().a3d(), height), SwitchVars_getInstance().b3d(), padding), VOID, this);
  }
  function SwitchStyle$lambda($this$base) {
    _init_properties_Switch_kt__dwcqr0();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Relative' call
    // Inline function 'org.jetbrains.compose.web.css.Position' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'relative';
    return position(tmp, tmp$ret$3);
  }
  function SwitchTrackStyle$lambda($this$CssStyle) {
    _init_properties_Switch_kt__dwcqr0();
    $this$CssStyle.k31(SwitchTrackStyle$lambda$lambda);
    var tmp = get_hover($this$CssStyle).y30(not($this$CssStyle, [get_ariaDisabled($this$CssStyle)]));
    tmp.p30(SwitchTrackStyle$lambda$lambda_0);
    return Unit_instance;
  }
  function SwitchTrackStyle$lambda$lambda() {
    _init_properties_Switch_kt__dwcqr0();
    return boxSizing(transition_0(backgroundColor(borderRadius(padding(minHeight(height(minWidth(width(Companion_instance, SwitchVars_getInstance().z3c().b2n()), SwitchVars_getInstance().z3c().b2n()), SwitchVars_getInstance().a3d().b2n()), SwitchVars_getInstance().a3d().b2n()), SwitchVars_getInstance().b3d().b2n()), SwitchVars_getInstance().t3a().b2n()), SwitchVars_getInstance().c3d().b2n()), [Companion_instance_2.u2n('background-color', SwitchVars_getInstance().e3b().b2n())]), Companion_instance_15.m2k());
  }
  function SwitchTrackStyle$lambda$lambda_0() {
    _init_properties_Switch_kt__dwcqr0();
    return cursor(Companion_instance, Companion_instance_1.q2k());
  }
  function SwitchInputVariant$lambda($this$addVariant) {
    _init_properties_Switch_kt__dwcqr0();
    $this$addVariant.k31(SwitchInputVariant$lambda$lambda);
    $this$addVariant.z2z(':focus-visible + *', SwitchInputVariant$lambda$lambda_0);
    return Unit_instance;
  }
  function SwitchInputVariant$lambda$lambda() {
    _init_properties_Switch_kt__dwcqr0();
    return get_HiddenInputModifier();
  }
  function SwitchInputVariant$lambda$lambda_0() {
    _init_properties_Switch_kt__dwcqr0();
    return boxShadow_0(Companion_instance, VOID, VOID, VOID, get_cssRem(0.1875), SwitchVars_getInstance().d3d().b2n());
  }
  function SwitchThumbStyle$lambda($this$base) {
    _init_properties_Switch_kt__dwcqr0();
    return transition_0(translateX(backgroundColor(borderRadius(size(Companion_instance, SwitchVars_getInstance().a3d().b2n()), SwitchVars_getInstance().t3a().b2n()), SwitchVars_getInstance().f3d().b2n()), SwitchVars_getInstance().e3d().b2n()), [Companion_instance_2.u2n('translate', SwitchVars_getInstance().e3b().b2n())]);
  }
  function BorderRadius$factory_1() {
    return getPropertyCallableRef('BorderRadius', 1, KProperty1, function (receiver) {
      return receiver.t3a();
    }, null);
  }
  function TrackWidth$factory() {
    return getPropertyCallableRef('TrackWidth', 1, KProperty1, function (receiver) {
      return receiver.z3c();
    }, null);
  }
  function TrackHeight$factory() {
    return getPropertyCallableRef('TrackHeight', 1, KProperty1, function (receiver) {
      return receiver.a3d();
    }, null);
  }
  function TrackPadding$factory() {
    return getPropertyCallableRef('TrackPadding', 1, KProperty1, function (receiver) {
      return receiver.b3d();
    }, null);
  }
  function TrackBackgroundColor$factory() {
    return getPropertyCallableRef('TrackBackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.c3d();
    }, null);
  }
  function FocusColor$factory() {
    return getPropertyCallableRef('FocusColor', 1, KProperty1, function (receiver) {
      return receiver.d3d();
    }, null);
  }
  function ThumbOffset$factory() {
    return getPropertyCallableRef('ThumbOffset', 1, KProperty1, function (receiver) {
      return receiver.e3d();
    }, null);
  }
  function ThumbColor$factory() {
    return getPropertyCallableRef('ThumbColor', 1, KProperty1, function (receiver) {
      return receiver.f3d();
    }, null);
  }
  function TransitionDuration$factory_0() {
    return getPropertyCallableRef('TransitionDuration', 1, KProperty1, function (receiver) {
      return receiver.e3b();
    }, null);
  }
  var properties_initialized_Switch_kt_7kkg8m;
  function _init_properties_Switch_kt__dwcqr0() {
    if (!properties_initialized_Switch_kt_7kkg8m) {
      properties_initialized_Switch_kt_7kkg8m = true;
      var tmp = Companion_instance_5;
      SwitchStyle = base(tmp, VOID, SwitchStyle$lambda);
      var tmp_0 = ariaHidden(tabIndex(Companion_instance, -1));
      SwitchTrackStyle = CssStyle(tmp_0, SwitchTrackStyle$lambda);
      var tmp_1 = get_InputStyle();
      SwitchInputVariant = addVariant(tmp_1, VOID, SwitchInputVariant$lambda);
      var tmp_2 = Companion_instance_5;
      SwitchThumbStyle = base(tmp_2, VOID, SwitchThumbStyle$lambda);
      com_varabyte_kobweb_silk_components_forms_SwitchVars$stable = 8;
      com_varabyte_kobweb_silk_components_forms_SwitchSize$stable = 0;
    }
  }
  function get_CanvasStyle() {
    _init_properties_Canvas_kt__g1lz20();
    return CanvasStyle;
  }
  var CanvasStyle;
  var com_varabyte_kobweb_silk_components_graphics_RenderScope$stable;
  function CanvasStyle$lambda($this$CssStyle) {
    _init_properties_Canvas_kt__g1lz20();
    return Unit_instance;
  }
  var properties_initialized_Canvas_kt_i28dei;
  function _init_properties_Canvas_kt__g1lz20() {
    if (!properties_initialized_Canvas_kt_i28dei) {
      properties_initialized_Canvas_kt_i28dei = true;
      CanvasStyle = CssStyle(VOID, CanvasStyle$lambda);
      com_varabyte_kobweb_silk_components_graphics_RenderScope$stable = 0;
    }
  }
  var com_varabyte_kobweb_silk_components_icons_IconRenderStyle_Fill$stable;
  var com_varabyte_kobweb_silk_components_icons_IconRenderStyle_Stroke$stable;
  function StopIcon(modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t1a(1970604872);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.v19(modifier_0._v) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.v18()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance;
      }
      if (isTraceInProgress()) {
        traceEventStart(1970604872, $dirty, -1, 'com.varabyte.kobweb.silk.components.icons.StopIcon (Icons.kt:464)');
      }
      var tmp = Companion_instance_16.a2p(16);
      createIcon(tmp, null, new Fill(), toAttrs(modifier_0._v), ComposableSingletons$IconsKt_getInstance().g3e_1, $composer_0, 24576, 2);
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
      tmp0_safe_receiver.u1f(StopIcon$lambda(modifier_0, $changed, $default));
    }
  }
  function ExclaimIcon(modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t1a(-2076665517);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.v19(modifier_0._v) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.v18()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance;
      }
      if (isTraceInProgress()) {
        traceEventStart(-2076665517, $dirty, -1, 'com.varabyte.kobweb.silk.components.icons.ExclaimIcon (Icons.kt:325)');
      }
      var tmp = Companion_instance_16.a2p(16);
      createIcon(tmp, null, new Fill(), toAttrs(modifier_0._v), ComposableSingletons$IconsKt_getInstance().w3d_1, $composer_0, 24576, 2);
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
      tmp0_safe_receiver.u1f(ExclaimIcon$lambda(modifier_0, $changed, $default));
    }
  }
  function InfoIcon(modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t1a(-1963496716);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.v19(modifier_0._v) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.v18()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance;
      }
      if (isTraceInProgress()) {
        traceEventStart(-1963496716, $dirty, -1, 'com.varabyte.kobweb.silk.components.icons.InfoIcon (Icons.kt:354)');
      }
      var tmp = Companion_instance_16.a2p(16);
      createIcon(tmp, null, new Fill(), toAttrs(modifier_0._v), ComposableSingletons$IconsKt_getInstance().y3d_1, $composer_0, 24576, 2);
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
      tmp0_safe_receiver.u1f(InfoIcon$lambda(modifier_0, $changed, $default));
    }
  }
  function QuestionIcon(modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t1a(-807782100);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.v19(modifier_0._v) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.v18()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance;
      }
      if (isTraceInProgress()) {
        traceEventStart(-807782100, $dirty, -1, 'com.varabyte.kobweb.silk.components.icons.QuestionIcon (Icons.kt:431)');
      }
      createIcon(null, null, new Stroke(2), toAttrs(modifier_0._v), ComposableSingletons$IconsKt_getInstance().e3e_1, $composer_0, 24576, 3);
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
      tmp0_safe_receiver.u1f(QuestionIcon$lambda(modifier_0, $changed, $default));
    }
  }
  function QuoteIcon(modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t1a(-1442436186);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.v19(modifier_0._v) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.v18()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance;
      }
      if (isTraceInProgress()) {
        traceEventStart(-1442436186, $dirty, -1, 'com.varabyte.kobweb.silk.components.icons.QuoteIcon (Icons.kt:451)');
      }
      var tmp = Companion_instance_16.a2p(300);
      createIcon(tmp, null, new Fill(), toAttrs(modifier_0._v), ComposableSingletons$IconsKt_getInstance().f3e_1, $composer_0, 24576, 2);
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
      tmp0_safe_receiver.u1f(QuoteIcon$lambda(modifier_0, $changed, $default));
    }
  }
  function LightbulbIcon(modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t1a(1527344649);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.v19(modifier_0._v) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.v18()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance;
      }
      if (isTraceInProgress()) {
        traceEventStart(1527344649, $dirty, -1, 'com.varabyte.kobweb.silk.components.icons.LightbulbIcon (Icons.kt:364)');
      }
      var tmp = Companion_instance_16.a2p(16);
      createIcon(tmp, null, new Fill(), toAttrs(modifier_0._v), ComposableSingletons$IconsKt_getInstance().z3d_1, $composer_0, 24576, 2);
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
      tmp0_safe_receiver.u1f(LightbulbIcon$lambda(modifier_0, $changed, $default));
    }
  }
  function WarningIcon(modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t1a(1461831750);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.v19(modifier_0._v) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.v18()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance;
      }
      if (isTraceInProgress()) {
        traceEventStart(1461831750, $dirty, -1, 'com.varabyte.kobweb.silk.components.icons.WarningIcon (Icons.kt:538)');
      }
      var tmp = Companion_instance_16.a2p(16);
      createIcon(tmp, null, new Fill(), toAttrs(modifier_0._v), ComposableSingletons$IconsKt_getInstance().j3e_1, $composer_0, 24576, 2);
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
      tmp0_safe_receiver.u1f(WarningIcon$lambda(modifier_0, $changed, $default));
    }
  }
  function createIcon(viewBox, width, renderStyle, attrs, content, $composer, $changed, $default) {
    var viewBox_0 = {_v: viewBox};
    var width_0 = {_v: width};
    var renderStyle_0 = {_v: renderStyle};
    var attrs_0 = {_v: attrs};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t1a(-840790845);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | (($default & 1) === 0 && (($changed & 8) === 0 ? $composer_0.t10(viewBox_0._v) : $composer_0.v19(viewBox_0._v)) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | (($default & 2) === 0 && $composer_0.v19(width_0._v) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | (($default & 4) === 0 && (($changed & 512) === 0 ? $composer_0.t10(renderStyle_0._v) : $composer_0.v19(renderStyle_0._v)) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.v19(attrs_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.v19(content) ? 16384 : 8192);
    if (!(($dirty & 9363) === 9362) || !$composer_0.v18()) {
      $composer_0.c19();
      if (($changed & 1) === 0 || $composer_0.g19()) {
        if (!(($default & 1) === 0)) {
          viewBox_0._v = Companion_instance_16.a2p(24);
          $dirty = $dirty & -15;
        }
        if (!(($default & 2) === 0)) {
          width_0._v = get_em(1);
          $dirty = $dirty & -113;
        }
        if (!(($default & 4) === 0)) {
          renderStyle_0._v = new Stroke();
          $dirty = $dirty & -897;
        }
        if (!(($default & 8) === 0)) {
          attrs_0._v = null;
        }
      } else {
        $composer_0.m13();
        if (!(($default & 1) === 0))
          $dirty = $dirty & -15;
        if (!(($default & 2) === 0))
          $dirty = $dirty & -113;
        if (!(($default & 4) === 0))
          $dirty = $dirty & -897;
      }
      $composer_0.d19();
      if (isTraceInProgress()) {
        traceEventStart(-840790845, $dirty, -1, 'com.varabyte.kobweb.silk.components.icons.createIcon (Icons.kt:56)');
      }
      $composer_0.a19(1471136852);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      var invalid = !!(!!(!!($composer_0.v19(width_0._v) | (($dirty & 14 ^ 6) > 4 && $composer_0.v19(viewBox_0._v) || ($dirty & 6) === 4)) | (($dirty & 896 ^ 384) > 256 && $composer_0.v19(renderStyle_0._v) || ($dirty & 384) === 256)) | ($dirty & 7168) === 2048);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.f1a();
      var tmp;
      if (invalid || it === Companion_getInstance().s13_1) {
        // Inline function 'com.varabyte.kobweb.silk.components.icons.createIcon.<anonymous>' call
        var value = createIcon$lambda(width_0, viewBox_0, renderStyle_0, attrs_0);
        this_0.l1a(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.b19();
      Svg(tmp0_group, content, $composer_0, 112 & $dirty >> 9, 0);
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
      tmp1_safe_receiver.u1f(createIcon$lambda_0(viewBox_0, width_0, renderStyle_0, attrs_0, content, $changed, $default));
    }
  }
  function Fill() {
  }
  function Stroke(strokeWidth) {
    strokeWidth = strokeWidth === VOID ? null : strokeWidth;
    this.k3e_1 = strokeWidth;
  }
  function ComposableLambda$invoke$ref_6($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.n25(p0, p1, p2);
    };
  }
  function ComposableSingletons$IconsKt$lambda_1$lambda_21hevk($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(187923078, $changed, -1, 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-1.<anonymous> (Icons.kt:82)');
    }
    $composer_0.a19(-1972346708);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.f1a();
    var tmp;
    if (false || it === Companion_getInstance().s13_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-1.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$IconsKt$lambda_1$lambda$lambda_6jt1tn;
      $composer_0.l1a(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.b19();
    Path($this$createIcon, tmp0_group, $composer_0, 48 | 14 & $changed);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_1$lambda$lambda_6jt1tn($this$Path) {
    $this$Path.o2p(ComposableSingletons$IconsKt$lambda_1$lambda$lambda$lambda_jixjw0);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_1$lambda$lambda$lambda_jixjw0($this$d) {
    $this$d.s2p(20, 11);
    $this$d.y2p(7.83);
    $this$d.t2p(5.59, -5.59, true);
    $this$d.u2p(12, 4);
    $this$d.t2p(-8, 8, true);
    $this$d.t2p(8, 8, true);
    $this$d.t2p(1.41, -1.41, true);
    $this$d.u2p(7.83, 13);
    $this$d.y2p(20);
    $this$d.v2p(-2, true);
    $this$d.b2q();
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_7($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.n25(p0, p1, p2);
    };
  }
  function ComposableSingletons$IconsKt$lambda_2$lambda_qs526n($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(465018625, $changed, -1, 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-2.<anonymous> (Icons.kt:103)');
    }
    $composer_0.a19(-464773471);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.f1a();
    var tmp;
    if (false || it === Companion_getInstance().s13_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-2.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$IconsKt$lambda_2$lambda$lambda_vhd48s;
      $composer_0.l1a(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.b19();
    Path($this$createIcon, tmp0_group, $composer_0, 48 | 14 & $changed);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_2$lambda$lambda_vhd48s($this$Path) {
    $this$Path.o2p(ComposableSingletons$IconsKt$lambda_2$lambda$lambda$lambda_hsrvsf);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_2$lambda$lambda$lambda_hsrvsf($this$d) {
    $this$d.s2p(20, 12);
    $this$d.t2p(-1.41, -1.41, true);
    $this$d.u2p(13, 16.17);
    $this$d.w2p(4);
    $this$d.x2p(-2, true);
    $this$d.v2p(12.17, true);
    $this$d.t2p(-5.58, -5.59, true);
    $this$d.u2p(4, 12);
    $this$d.t2p(8, 8, true);
    $this$d.t2p(8, -8, true);
    $this$d.b2q();
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_8($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.n25(p0, p1, p2);
    };
  }
  function ComposableSingletons$IconsKt$lambda_3$lambda_ffciqa($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(1093309942, $changed, -1, 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-3.<anonymous> (Icons.kt:124)');
    }
    $composer_0.a19(1042800433);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.f1a();
    var tmp;
    if (false || it === Companion_getInstance().s13_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-3.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$IconsKt$lambda_3$lambda$lambda_em6vb7;
      $composer_0.l1a(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.b19();
    Path($this$createIcon, tmp0_group, $composer_0, 48 | 14 & $changed);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_3$lambda$lambda_em6vb7($this$Path) {
    $this$Path.o2p(ComposableSingletons$IconsKt$lambda_3$lambda$lambda$lambda_fwmqia);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_3$lambda$lambda$lambda_fwmqia($this$d) {
    $this$d.s2p(12, 4);
    $this$d.t2p(-1.14, 1.41, true);
    $this$d.u2p(16.17, 11);
    $this$d.y2p(4);
    $this$d.v2p(2, true);
    $this$d.x2p(12.17, true);
    $this$d.t2p(-5.58, 5.59, true);
    $this$d.u2p(12, 20);
    $this$d.t2p(8, -8, true);
    $this$d.b2q();
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_9($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.n25(p0, p1, p2);
    };
  }
  function ComposableSingletons$IconsKt$lambda_4$lambda_de9ybx($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(353353466, $changed, -1, 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-4.<anonymous> (Icons.kt:144)');
    }
    $composer_0.a19(-1744594612);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.f1a();
    var tmp;
    if (false || it === Companion_getInstance().s13_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-4.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$IconsKt$lambda_4$lambda$lambda_abd73y;
      $composer_0.l1a(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.b19();
    Path($this$createIcon, tmp0_group, $composer_0, 48 | 14 & $changed);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_4$lambda$lambda_abd73y($this$Path) {
    $this$Path.o2p(ComposableSingletons$IconsKt$lambda_4$lambda$lambda$lambda_lf2p65);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_4$lambda$lambda$lambda_lf2p65($this$d) {
    $this$d.s2p(4, 12);
    $this$d.t2p(1.41, 1.41, true);
    $this$d.u2p(11, 7.83);
    $this$d.w2p(20);
    $this$d.x2p(2, true);
    $this$d.w2p(7.83);
    $this$d.t2p(5.58, 5.59, true);
    $this$d.u2p(20, 12);
    $this$d.t2p(-8, -8, true);
    $this$d.t2p(-8, 8, true);
    $this$d.b2q();
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_10($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.n25(p0, p1, p2);
    };
  }
  function ComposableSingletons$IconsKt$lambda_5$lambda_st7ml0($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(14879965, $changed, -1, 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-5.<anonymous> (Icons.kt:165)');
    }
    $composer_0.a19(-237020840);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.f1a();
    var tmp;
    if (false || it === Companion_getInstance().s13_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-5.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$IconsKt$lambda_5$lambda$lambda_z8x9j3;
      $composer_0.l1a(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.b19();
    Path($this$createIcon, tmp0_group, $composer_0, 48 | 14 & $changed);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_5$lambda$lambda_z8x9j3($this$Path) {
    $this$Path.o2p(ComposableSingletons$IconsKt$lambda_5$lambda$lambda$lambda_cabx4k);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_5$lambda$lambda$lambda_cabx4k($this$d) {
    $this$d.s2p(21.843, 3.455);
    $this$d.z2p(6.961, 6.961, 0, 0, 0, -9.846, 0, true);
    $this$d.u2p(1.619, 13.832);
    $this$d.z2p(5.128, 5.128, 0, 0, 0, 7.252, 7.252, true);
    $this$d.u2p(17.3, 12.653);
    $this$d.a2q(3.293, 3.293, 0, 1, 0, 12.646, 8);
    $this$d.u2p(7.457, 13.184);
    $this$d.a2q(1, 1, 0, 1, 0, 8.871, 14.6);
    $this$d.u2p(14.06, 9.409);
    $this$d.z2p(1.294, 1.294, 0, 0, 1, 1.829, 1.83, true);
    $this$d.u2p(7.457, 19.67);
    $this$d.z2p(3.128, 3.128, 0, 0, 1, -4.424, -4.424, true);
    $this$d.u2p(13.411, 4.869);
    $this$d.z2p(4.962, 4.962, 0, 1, 1, 7.018, 7.018, true);
    $this$d.u2p(12.646, 19.67);
    $this$d.z2p(1, 1, 0, 1, 0, 1.414, 1.414, true);
    $this$d.u2p(21.843, 13.3);
    $this$d.z2p(6.96, 6.96, 0, 0, 0, 0, -9.846, true);
    $this$d.b2q();
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_11($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.n25(p0, p1, p2);
    };
  }
  function ComposableSingletons$IconsKt$lambda_6$lambda_euh7($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(343641086, $changed, -1, 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-6.<anonymous> (Icons.kt:194)');
    }
    $composer_0.a19(1270571862);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.f1a();
    var tmp;
    if (false || it === Companion_getInstance().s13_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-6.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$IconsKt$lambda_6$lambda$lambda_aumq0w;
      $composer_0.l1a(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.b19();
    Polyline($this$createIcon, tmp0_group, $composer_0, 48 | 14 & $changed);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_6$lambda$lambda_aumq0w($this$Polyline) {
    $this$Polyline.d2q([to(3, 12), to(9, 18), to(21, 2)]);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_12($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.n25(p0, p1, p2);
    };
  }
  function ComposableSingletons$IconsKt$lambda_7$lambda_su1bje($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-1021140685, $changed, -1, 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-7.<anonymous> (Icons.kt:203)');
    }
    $composer_0.a19(-1516836015);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.f1a();
    var tmp;
    if (false || it === Companion_getInstance().s13_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-7.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$IconsKt$lambda_7$lambda$lambda_e2xce9;
      $composer_0.l1a(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.b19();
    Path($this$createIcon, tmp0_group, $composer_0, 48 | 14 & $changed);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_7$lambda$lambda_e2xce9($this$Path) {
    $this$Path.o2p(ComposableSingletons$IconsKt$lambda_7$lambda$lambda$lambda_8o13qu);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_7$lambda$lambda$lambda_8o13qu($this$d) {
    $this$d.s2p(16.59, 8.59);
    $this$d.u2p(12, 13.17);
    $this$d.u2p(7.41, 8.59);
    $this$d.u2p(6, 10);
    $this$d.t2p(6, 6, true);
    $this$d.t2p(6, -6, true);
    $this$d.b2q();
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_13($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.n25(p0, p1, p2);
    };
  }
  function ComposableSingletons$IconsKt$lambda_8$lambda_ddg9dj($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-507764776, $changed, -1, 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-8.<anonymous> (Icons.kt:220)');
    }
    $composer_0.a19(-9269831);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.f1a();
    var tmp;
    if (false || it === Companion_getInstance().s13_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-8.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$IconsKt$lambda_8$lambda$lambda_w0mn5q;
      $composer_0.l1a(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.b19();
    Path($this$createIcon, tmp0_group, $composer_0, 48 | 14 & $changed);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_8$lambda$lambda_w0mn5q($this$Path) {
    $this$Path.o2p(ComposableSingletons$IconsKt$lambda_8$lambda$lambda$lambda_snobxl);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_8$lambda$lambda$lambda_snobxl($this$d) {
    $this$d.s2p(15.41, 7.41);
    $this$d.u2p(14, 6);
    $this$d.t2p(-6, 6, true);
    $this$d.t2p(6, 6, true);
    $this$d.t2p(1.41, -1.41, true);
    $this$d.u2p(10.83, 12);
    $this$d.b2q();
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_14($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.n25(p0, p1, p2);
    };
  }
  function ComposableSingletons$IconsKt$lambda_9$lambda_fg67oo($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-79892645, $changed, -1, 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-9.<anonymous> (Icons.kt:237)');
    }
    $composer_0.a19(1498296597);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.f1a();
    var tmp;
    if (false || it === Companion_getInstance().s13_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-9.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$IconsKt$lambda_9$lambda$lambda_732kql;
      $composer_0.l1a(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.b19();
    Path($this$createIcon, tmp0_group, $composer_0, 48 | 14 & $changed);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_9$lambda$lambda_732kql($this$Path) {
    $this$Path.o2p(ComposableSingletons$IconsKt$lambda_9$lambda$lambda$lambda_51qad4);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_9$lambda$lambda$lambda_51qad4($this$d) {
    $this$d.s2p(10, 6);
    $this$d.u2p(8.59, 7.41);
    $this$d.u2p(13.17, 12);
    $this$d.t2p(-4.58, 4.59, true);
    $this$d.u2p(10, 18);
    $this$d.t2p(6, -6, true);
    $this$d.b2q();
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_15($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.n25(p0, p1, p2);
    };
  }
  function ComposableSingletons$IconsKt$lambda_10$lambda_c69byu($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(660186540, $changed, -1, 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-10.<anonymous> (Icons.kt:254)');
    }
    $composer_0.a19(-1422453104);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.f1a();
    var tmp;
    if (false || it === Companion_getInstance().s13_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-10.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$IconsKt$lambda_10$lambda$lambda_rzmap7;
      $composer_0.l1a(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.b19();
    Path($this$createIcon, tmp0_group, $composer_0, 48 | 14 & $changed);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_10$lambda$lambda_rzmap7($this$Path) {
    $this$Path.o2p(ComposableSingletons$IconsKt$lambda_10$lambda$lambda$lambda_2vrjey);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_10$lambda$lambda$lambda_2vrjey($this$d) {
    $this$d.s2p(12, 8);
    $this$d.t2p(-6, 6, true);
    $this$d.t2p(1.41, 1.41, true);
    $this$d.u2p(12, 10.83);
    $this$d.t2p(4.59, 4.58, true);
    $this$d.u2p(18, 14);
    $this$d.b2q();
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_16($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.n25(p0, p1, p2);
    };
  }
  function ComposableSingletons$IconsKt$lambda_11$lambda_u188y3($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(2025461450, $changed, -1, 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-11.<anonymous> (Icons.kt:271)');
    }
    $composer_0.a19(85112889);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.f1a();
    var tmp;
    if (false || it === Companion_getInstance().s13_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-11.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$IconsKt$lambda_11$lambda$lambda_3228a2;
      $composer_0.l1a(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.b19();
    Circle($this$createIcon, tmp0_group, $composer_0, 48 | 14 & $changed);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_11$lambda$lambda_3228a2($this$Circle) {
    $this$Circle.i2q(12);
    $this$Circle.j2q(12);
    $this$Circle.g2q(8);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_17($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.n25(p0, p1, p2);
    };
  }
  function ComposableSingletons$IconsKt$lambda_12$lambda_17lrvw($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(1212129518, $changed, -1, 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-12.<anonymous> (Icons.kt:282)');
    }
    $composer_0.a19(1592672205);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.f1a();
    var tmp;
    if (false || it === Companion_getInstance().s13_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-12.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$IconsKt$lambda_12$lambda$lambda_lvhu53;
      $composer_0.l1a(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.b19();
    Line($this$createIcon, tmp0_group, $composer_0, 48 | 14 & $changed);
    $composer_0.a19(1592675373);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_0 = $composer_0.f1a();
    var tmp_1;
    if (false || it_0 === Companion_getInstance().s13_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-12.<anonymous>.<anonymous>' call
      var value_0 = ComposableSingletons$IconsKt$lambda_12$lambda$lambda_lvhu53_0;
      $composer_0.l1a(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_2 = tmp_1;
    var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    $composer_0.b19();
    Line($this$createIcon, tmp1_group, $composer_0, 48 | 14 & $changed);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_12$lambda$lambda_lvhu53($this$Line) {
    $this$Line.m2q(1);
    $this$Line.n2q(23);
    $this$Line.o2q(1);
    $this$Line.p2q(23);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_12$lambda$lambda_lvhu53_0($this$Line) {
    $this$Line.m2q(23);
    $this$Line.n2q(1);
    $this$Line.o2q(1);
    $this$Line.p2q(23);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_18($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.n25(p0, p1, p2);
    };
  }
  function ComposableSingletons$IconsKt$lambda_13$lambda_rm0p6b($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-769560574, $changed, -1, 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-13.<anonymous> (Icons.kt:300)');
    }
    $composer_0.a19(-1194730389);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.f1a();
    var tmp;
    if (false || it === Companion_getInstance().s13_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-13.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$IconsKt$lambda_13$lambda$lambda_o825ew;
      $composer_0.l1a(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.b19();
    Path($this$createIcon, tmp0_group, $composer_0, 48 | 14 & $changed);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_13$lambda$lambda_o825ew($this$Path) {
    $this$Path.o2p(ComposableSingletons$IconsKt$lambda_13$lambda$lambda$lambda_wyvcbx);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_13$lambda$lambda$lambda_wyvcbx($this$d) {
    $this$d.s2p(11.2857, 6.05714);
    $this$d.u2p(10.08571, 4.85714);
    $this$d.u2p(7.85714, 7.14786);
    $this$d.u2p(7.85714, 1);
    $this$d.u2p(6.14286, 1);
    $this$d.u2p(6.14286, 7.14786);
    $this$d.u2p(3.91429, 4.85714);
    $this$d.u2p(2.71429, 6.05714);
    $this$d.u2p(7, 10.42857);
    $this$d.u2p(11.2857, 6.05714);
    $this$d.b2q();
    $this$d.s2p(1, 11.2857);
    $this$d.u2p(1, 13);
    $this$d.u2p(13, 13);
    $this$d.u2p(13, 11.2857);
    $this$d.u2p(1, 11.2857);
    $this$d.b2q();
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_19($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.n25(p0, p1, p2);
    };
  }
  function ComposableSingletons$IconsKt$lambda_14$lambda_elgvqm($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(1065587999, $changed, -1, 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-14.<anonymous> (Icons.kt:328)');
    }
    $composer_0.a19(312850389);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.f1a();
    var tmp;
    if (false || it === Companion_getInstance().s13_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-14.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$IconsKt$lambda_14$lambda$lambda_phx09;
      $composer_0.l1a(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.b19();
    Path($this$createIcon, tmp0_group, $composer_0, 48 | 14 & $changed);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_14$lambda$lambda_phx09($this$Path) {
    $this$Path.q2p('M 0 1.75 C 0 0.784 0.784 0 1.75 0 h 12.5 C 15.216 0 16 0.784 16 1.75 v 9.5 A 1.75 1.75 0 0 1 14.25 13 H 8.06 l -2.573 2.573 A 1.458 1.458 0 0 1 3 14.543 V 13 H 1.75 A 1.75 1.75 0 0 1 0 11.25 Z m 1.75 -0.25 a 0.25 0.25 0 0 0 -0.25 0.25 v 9.5 c 0 0.138 0.112 0.25 0.25 0.25 h 2 a 0.75 0.75 0 0 1 0.75 0.75 v 2.19 l 2.72 -2.72 a 0.749 0.749 0 0 1 0.53 -0.22 h 6.5 a 0.25 0.25 0 0 0 0.25 -0.25 v -9.5 a 0.25 0.25 0 0 0 -0.25 -0.25 Z m 7 2.25 v 2.5 a 0.75 0.75 0 0 1 -1.5 0 v -2.5 a 0.75 0.75 0 0 1 1.5 0 Z M 9 9 a 1 1 0 1 1 -2 0 a 1 1 0 0 1 2 0 Z');
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_20($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.n25(p0, p1, p2);
    };
  }
  function ComposableSingletons$IconsKt$lambda_15$lambda_e85lbl($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-725431745, $changed, -1, 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-15.<anonymous> (Icons.kt:337)');
    }
    var _iterator__ex2g4s = listOf([3, 12, 21]).j();
    while (_iterator__ex2g4s.k()) {
      var y = _iterator__ex2g4s.l();
      $composer_0.a19(1820426883);
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_0.y19(y);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.f1a();
      var tmp;
      if (invalid || it === Companion_getInstance().s13_1) {
        // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-15.<anonymous>.<anonymous>' call
        var value = ComposableSingletons$IconsKt$lambda_15$lambda$lambda_pn1zfe(y);
        $composer_0.l1a(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.b19();
      Line($this$createIcon, tmp0_group, $composer_0, 14 & $changed);
    }
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_15$lambda$lambda_pn1zfe($y) {
    return function ($this$Line) {
      $this$Line.m2q(0);
      $this$Line.n2q(23);
      $this$Line.o2q($y);
      $this$Line.p2q($y);
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_21($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.n25(p0, p1, p2);
    };
  }
  function ComposableSingletons$IconsKt$lambda_16$lambda_rzbzlc($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(431415976, $changed, -1, 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-16.<anonymous> (Icons.kt:357)');
    }
    $composer_0.a19(-966973872);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.f1a();
    var tmp;
    if (false || it === Companion_getInstance().s13_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-16.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$IconsKt$lambda_16$lambda$lambda_kgi04l;
      $composer_0.l1a(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.b19();
    Path($this$createIcon, tmp0_group, $composer_0, 48 | 14 & $changed);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_16$lambda$lambda_kgi04l($this$Path) {
    $this$Path.q2p('M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z');
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_22($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.n25(p0, p1, p2);
    };
  }
  function ComposableSingletons$IconsKt$lambda_17$lambda_uahgv($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(1870964437, $changed, -1, 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-17.<anonymous> (Icons.kt:367)');
    }
    $composer_0.a19(540595528);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.f1a();
    var tmp;
    if (false || it === Companion_getInstance().s13_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-17.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$IconsKt$lambda_17$lambda$lambda_4h22ak;
      $composer_0.l1a(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.b19();
    Path($this$createIcon, tmp0_group, $composer_0, 48 | 14 & $changed);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_17$lambda$lambda_4h22ak($this$Path) {
    $this$Path.q2p('M 8 1.5 c -2.363 0 -4 1.69 -4 3.75 c 0 0.984 0.424 1.625 0.984 2.304 l 0.214 0.253 c 0.223 0.264 0.47 0.556 0.673 0.848 c 0.284 0.411 0.537 0.896 0.621 1.49 a 0.75 0.75 0 0 1 -1.484 0.211 c -0.04 -0.282 -0.163 -0.547 -0.37 -0.847 a 8.456 8.456 0 0 0 -0.542 -0.68 c -0.084 -0.1 -0.173 -0.205 -0.268 -0.32 C 3.201 7.75 2.5 6.766 2.5 5.25 C 2.5 2.31 4.863 0 8 0 s 5.5 2.31 5.5 5.25 c 0 1.516 -0.701 2.5 -1.328 3.259 c -0.095 0.115 -0.184 0.22 -0.268 0.319 c -0.207 0.245 -0.383 0.453 -0.541 0.681 c -0.208 0.3 -0.33 0.565 -0.37 0.847 a 0.751 0.751 0 0 1 -1.485 -0.212 c 0.084 -0.593 0.337 -1.078 0.621 -1.489 c 0.203 -0.292 0.45 -0.584 0.673 -0.848 c 0.075 -0.088 0.147 -0.173 0.213 -0.253 c 0.561 -0.679 0.985 -1.32 0.985 -2.304 c 0 -2.06 -1.637 -3.75 -4 -3.75 Z M 5.75 12 h 4.5 a 0.75 0.75 0 0 1 0 1.5 h -4.5 a 0.75 0.75 0 0 1 0 -1.5 Z M 6 15.25 a 0.75 0.75 0 0 1 0.75 -0.75 h 2.5 a 0.75 0.75 0 0 1 0 1.5 h -2.5 a 0.75 0.75 0 0 1 -0.75 -0.75 Z');
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_23($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.n25(p0, p1, p2);
    };
  }
  function ComposableSingletons$IconsKt$lambda_18$lambda_tnwyj2($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-2035566234, $changed, -1, 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-18.<anonymous> (Icons.kt:376)');
    }
    $composer_0.a19(2048182900);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.f1a();
    var tmp;
    if (false || it === Companion_getInstance().s13_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-18.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$IconsKt$lambda_18$lambda$lambda_tem4pp;
      $composer_0.l1a(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.b19();
    Line($this$createIcon, tmp0_group, $composer_0, 48 | 14 & $changed);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_18$lambda$lambda_tem4pp($this$Line) {
    $this$Line.m2q(3);
    $this$Line.n2q(21);
    $this$Line.o2q(12);
    $this$Line.p2q(12);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_24($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.n25(p0, p1, p2);
    };
  }
  function ComposableSingletons$IconsKt$lambda_19$lambda_cjkmdv($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-1115382124, $changed, -1, 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-19.<anonymous> (Icons.kt:388)');
    }
    $composer_0.a19(-739224491);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.f1a();
    var tmp;
    if (false || it === Companion_getInstance().s13_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-19.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$IconsKt$lambda_19$lambda$lambda_goxuua;
      $composer_0.l1a(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.b19();
    Line($this$createIcon, tmp0_group, $composer_0, 48 | 14 & $changed);
    $composer_0.a19(-739221291);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_0 = $composer_0.f1a();
    var tmp_1;
    if (false || it_0 === Companion_getInstance().s13_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-19.<anonymous>.<anonymous>' call
      var value_0 = ComposableSingletons$IconsKt$lambda_19$lambda$lambda_goxuua_0;
      $composer_0.l1a(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_2 = tmp_1;
    var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    $composer_0.b19();
    Line($this$createIcon, tmp1_group, $composer_0, 48 | 14 & $changed);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_19$lambda$lambda_goxuua($this$Line) {
    $this$Line.m2q(3);
    $this$Line.n2q(21);
    $this$Line.o2q(12);
    $this$Line.p2q(12);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_19$lambda$lambda_goxuua_0($this$Line) {
    $this$Line.m2q(12);
    $this$Line.n2q(12);
    $this$Line.o2q(3);
    $this$Line.p2q(21);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_25($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.n25(p0, p1, p2);
    };
  }
  function ComposableSingletons$IconsKt$lambda_20$lambda_hpuotl($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(862240855, $changed, -1, 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-20.<anonymous> (Icons.kt:406)');
    }
    $composer_0.a19(-1932811775);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.f1a();
    var tmp;
    if (false || it === Companion_getInstance().s13_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-20.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$IconsKt$lambda_20$lambda$lambda_ylj8l0;
      $composer_0.l1a(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.b19();
    Rect($this$createIcon, tmp0_group, $composer_0, 48 | 14 & $changed);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_20$lambda$lambda_ylj8l0($this$Rect) {
    $this$Rect.t2q(4);
    $this$Rect.u2q(4);
    $this$Rect.w2q(16);
    $this$Rect.v2q(16);
    $this$Rect.s2q(2);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_26($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.n25(p0, p1, p2);
    };
  }
  function ComposableSingletons$IconsKt$lambda_21$lambda_b3rs8m($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(2069599163, $changed, -1, 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-21.<anonymous> (Icons.kt:419)');
    }
    $composer_0.a19(-425250368);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.f1a();
    var tmp;
    if (false || it === Companion_getInstance().s13_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-21.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$IconsKt$lambda_21$lambda$lambda_bi0qyz;
      $composer_0.l1a(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.b19();
    Path($this$createIcon, tmp0_group, $composer_0, 48 | 14 & $changed);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_21$lambda$lambda_bi0qyz($this$Path) {
    $this$Path.o2p(ComposableSingletons$IconsKt$lambda_21$lambda$lambda$lambda_g02jai);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_21$lambda$lambda$lambda_g02jai($this$d) {
    $this$d.s2p(175, 106.583);
    $this$d.a2q(75, 75, 0, 1, 1, 93.417, 25);
    $this$d.a2q(58.333, 58.333, 0, 0, 0, 175, 106.583);
    $this$d.b2q();
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_27($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.n25(p0, p1, p2);
    };
  }
  function ComposableSingletons$IconsKt$lambda_22$lambda_v3psob($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(2112796384, $changed, -1, 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-22.<anonymous> (Icons.kt:433)');
    }
    $composer_0.a19(1082314296);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.f1a();
    var tmp;
    if (false || it === Companion_getInstance().s13_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-22.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$IconsKt$lambda_22$lambda$lambda_dfjbg6;
      $composer_0.l1a(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.b19();
    Path($this$createIcon, tmp0_group, $composer_0, 48 | 14 & $changed);
    $composer_0.a19(1082318881);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_0 = $composer_0.f1a();
    var tmp_1;
    if (false || it_0 === Companion_getInstance().s13_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-22.<anonymous>.<anonymous>' call
      var value_0 = ComposableSingletons$IconsKt$lambda_22$lambda$lambda_dfjbg6_0;
      $composer_0.l1a(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_2 = tmp_1;
    var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    $composer_0.b19();
    Path($this$createIcon, tmp1_group, $composer_0, 48 | 14 & $changed);
    $composer_0.a19(1082323774);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_1 = $composer_0.f1a();
    var tmp_3;
    if (false || it_1 === Companion_getInstance().s13_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-22.<anonymous>.<anonymous>' call
      var value_1 = ComposableSingletons$IconsKt$lambda_22$lambda$lambda_dfjbg6_1;
      $composer_0.l1a(value_1);
      tmp_3 = value_1;
    } else {
      tmp_3 = it_1;
    }
    var tmp_4 = tmp_3;
    var tmp2_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
    $composer_0.b19();
    Circle($this$createIcon, tmp2_group, $composer_0, 48 | 14 & $changed);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_22$lambda$lambda_dfjbg6($this$Path) {
    $this$Path.r2p(SVGStrokeLineCap_Round_getInstance());
    $this$Path.q2p('M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25');
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_22$lambda$lambda_dfjbg6_0($this$Path) {
    $this$Path.r2p(SVGStrokeLineCap_Round_getInstance());
    $this$Path.q2p('M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0');
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_22$lambda$lambda_dfjbg6_1($this$Circle) {
    $this$Circle.h2q(10);
    $this$Circle.i2q(12);
    $this$Circle.j2q(12);
    $this$Circle.g2q(11.25);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_28($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.n25(p0, p1, p2);
    };
  }
  function ComposableSingletons$IconsKt$lambda_23$lambda_2a3bm4($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-214586766, $changed, -1, 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-23.<anonymous> (Icons.kt:457)');
    }
    $composer_0.a19(-1705054377);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.f1a();
    var tmp;
    if (false || it === Companion_getInstance().s13_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-23.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$IconsKt$lambda_23$lambda$lambda_wo0o3t;
      $composer_0.l1a(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.b19();
    Path($this$createIcon, tmp0_group, $composer_0, 48 | 14 & $changed);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_23$lambda$lambda_wo0o3t($this$Path) {
    $this$Path.q2p('m175.6 204.73 22.19 46.49C258.61 223.15 278 189.49 278 151.18V48.78H175.6v102.4h51.2c0 15.64-12.42 35.66-51.2 53.55zm-153.6 0 22.19 46.49c60.83-28.07 80.21-61.73 80.21-100.04V48.78H22v102.4h51.2c0 15.64-12.42 35.66-51.2 53.55z');
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_29($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.n25(p0, p1, p2);
    };
  }
  function ComposableSingletons$IconsKt$lambda_24$lambda_qjj5g3($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(70550268, $changed, -1, 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-24.<anonymous> (Icons.kt:467)');
    }
    $composer_0.a19(-197486204);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.f1a();
    var tmp;
    if (false || it === Companion_getInstance().s13_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-24.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$IconsKt$lambda_24$lambda$lambda_7qgloo;
      $composer_0.l1a(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.b19();
    Path($this$createIcon, tmp0_group, $composer_0, 48 | 14 & $changed);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_24$lambda$lambda_7qgloo($this$Path) {
    $this$Path.q2p('M 4.47 0.22 A 0.749 0.749 0 0 1 5 0 h 6 c 0.199 0 0.389 0.079 0.53 0.22 l 4.25 4.25 c 0.141 0.14 0.22 0.331 0.22 0.53 v 6 a 0.749 0.749 0 0 1 -0.22 0.53 l -4.25 4.25 A 0.749 0.749 0 0 1 11 16 H 5 a 0.749 0.749 0 0 1 -0.53 -0.22 L 0.22 11.53 A 0.749 0.749 0 0 1 0 11 V 5 c 0 -0.199 0.079 -0.389 0.22 -0.53 Z m 0.84 1.28 L 1.5 5.31 v 5.38 l 3.81 3.81 h 5.38 l 3.81 -3.81 V 5.31 L 10.69 1.5 Z M 8 4 a 0.75 0.75 0 0 1 0.75 0.75 v 3.5 a 0.75 0.75 0 0 1 -1.5 0 v -3.5 A 0.75 0.75 0 0 1 8 4 Z m 0 8 a 1 1 0 1 1 0 -2 a 1 1 0 0 1 0 2 Z');
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_30($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.n25(p0, p1, p2);
    };
  }
  function ComposableSingletons$IconsKt$lambda_25$lambda_fnyfgu($this$Group, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(747380469, $changed, -1, 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-25.<anonymous> (Icons.kt:480)');
    }
    $composer_0.a19(1310092844);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.f1a();
    var tmp;
    if (false || it === Companion_getInstance().s13_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-25.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$IconsKt$lambda_25$lambda$lambda_h73gqh;
      $composer_0.l1a(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.b19();
    Circle($this$Group, tmp0_group, $composer_0, 48 | 14 & $changed);
    $composer_0.a19(1310096093);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_0 = $composer_0.f1a();
    var tmp_1;
    if (false || it_0 === Companion_getInstance().s13_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-25.<anonymous>.<anonymous>' call
      var value_0 = ComposableSingletons$IconsKt$lambda_25$lambda$lambda_h73gqh_0;
      $composer_0.l1a(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_2 = tmp_1;
    var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    $composer_0.b19();
    Path($this$Group, tmp1_group, $composer_0, 48 | 14 & $changed);
    $composer_0.a19(1310100862);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_1 = $composer_0.f1a();
    var tmp_3;
    if (false || it_1 === Companion_getInstance().s13_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-25.<anonymous>.<anonymous>' call
      var value_1 = ComposableSingletons$IconsKt$lambda_25$lambda$lambda_h73gqh_1;
      $composer_0.l1a(value_1);
      tmp_3 = value_1;
    } else {
      tmp_3 = it_1;
    }
    var tmp_4 = tmp_3;
    var tmp2_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
    $composer_0.b19();
    Path($this$Group, tmp2_group, $composer_0, 48 | 14 & $changed);
    $composer_0.a19(1310105667);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_2 = $composer_0.f1a();
    var tmp_5;
    if (false || it_2 === Companion_getInstance().s13_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-25.<anonymous>.<anonymous>' call
      var value_2 = ComposableSingletons$IconsKt$lambda_25$lambda$lambda_h73gqh_2;
      $composer_0.l1a(value_2);
      tmp_5 = value_2;
    } else {
      tmp_5 = it_2;
    }
    var tmp_6 = tmp_5;
    var tmp3_group = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
    $composer_0.b19();
    Path($this$Group, tmp3_group, $composer_0, 48 | 14 & $changed);
    $composer_0.a19(1310110629);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_3 = $composer_0.f1a();
    var tmp_7;
    if (false || it_3 === Companion_getInstance().s13_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-25.<anonymous>.<anonymous>' call
      var value_3 = ComposableSingletons$IconsKt$lambda_25$lambda$lambda_h73gqh_3;
      $composer_0.l1a(value_3);
      tmp_7 = value_3;
    } else {
      tmp_7 = it_3;
    }
    var tmp_8 = tmp_7;
    var tmp4_group = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
    $composer_0.b19();
    Path($this$Group, tmp4_group, $composer_0, 48 | 14 & $changed);
    $composer_0.a19(1310115647);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_4 = $composer_0.f1a();
    var tmp_9;
    if (false || it_4 === Companion_getInstance().s13_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-25.<anonymous>.<anonymous>' call
      var value_4 = ComposableSingletons$IconsKt$lambda_25$lambda$lambda_h73gqh_4;
      $composer_0.l1a(value_4);
      tmp_9 = value_4;
    } else {
      tmp_9 = it_4;
    }
    var tmp_10 = tmp_9;
    var tmp5_group = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
    $composer_0.b19();
    Path($this$Group, tmp5_group, $composer_0, 48 | 14 & $changed);
    $composer_0.a19(1310120480);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_5 = $composer_0.f1a();
    var tmp_11;
    if (false || it_5 === Companion_getInstance().s13_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-25.<anonymous>.<anonymous>' call
      var value_5 = ComposableSingletons$IconsKt$lambda_25$lambda$lambda_h73gqh_5;
      $composer_0.l1a(value_5);
      tmp_11 = value_5;
    } else {
      tmp_11 = it_5;
    }
    var tmp_12 = tmp_11;
    var tmp6_group = (tmp_12 == null ? true : !(tmp_12 == null)) ? tmp_12 : THROW_CCE();
    $composer_0.b19();
    Path($this$Group, tmp6_group, $composer_0, 48 | 14 & $changed);
    $composer_0.a19(1310125349);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_6 = $composer_0.f1a();
    var tmp_13;
    if (false || it_6 === Companion_getInstance().s13_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-25.<anonymous>.<anonymous>' call
      var value_6 = ComposableSingletons$IconsKt$lambda_25$lambda$lambda_h73gqh_6;
      $composer_0.l1a(value_6);
      tmp_13 = value_6;
    } else {
      tmp_13 = it_6;
    }
    var tmp_14 = tmp_13;
    var tmp7_group = (tmp_14 == null ? true : !(tmp_14 == null)) ? tmp_14 : THROW_CCE();
    $composer_0.b19();
    Path($this$Group, tmp7_group, $composer_0, 48 | 14 & $changed);
    $composer_0.a19(1310130373);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_7 = $composer_0.f1a();
    var tmp_15;
    if (false || it_7 === Companion_getInstance().s13_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-25.<anonymous>.<anonymous>' call
      var value_7 = ComposableSingletons$IconsKt$lambda_25$lambda$lambda_h73gqh_7;
      $composer_0.l1a(value_7);
      tmp_15 = value_7;
    } else {
      tmp_15 = it_7;
    }
    var tmp_16 = tmp_15;
    var tmp8_group = (tmp_16 == null ? true : !(tmp_16 == null)) ? tmp_16 : THROW_CCE();
    $composer_0.b19();
    Path($this$Group, tmp8_group, $composer_0, 48 | 14 & $changed);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_25$lambda$lambda_h73gqh($this$Circle) {
    $this$Circle.i2q(12);
    $this$Circle.j2q(12);
    $this$Circle.g2q(5);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_25$lambda$lambda_h73gqh_0($this$Path) {
    $this$Path.o2p(ComposableSingletons$IconsKt$lambda_25$lambda$lambda$lambda_8rgwj2);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_25$lambda$lambda$lambda_8rgwj2($this$d) {
    $this$d.s2p(12, 1);
    $this$d.v2p(2, true);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_25$lambda$lambda_h73gqh_1($this$Path) {
    $this$Path.o2p(ComposableSingletons$IconsKt$lambda_25$lambda$lambda$lambda_8rgwj2_0);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_25$lambda$lambda$lambda_8rgwj2_0($this$d) {
    $this$d.s2p(12, 21);
    $this$d.v2p(2, true);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_25$lambda$lambda_h73gqh_2($this$Path) {
    $this$Path.o2p(ComposableSingletons$IconsKt$lambda_25$lambda$lambda$lambda_8rgwj2_1);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_25$lambda$lambda$lambda_8rgwj2_1($this$d) {
    $this$d.s2p(4.22, 4.22);
    $this$d.t2p(1.42, 1.42, true);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_25$lambda$lambda_h73gqh_3($this$Path) {
    $this$Path.o2p(ComposableSingletons$IconsKt$lambda_25$lambda$lambda$lambda_8rgwj2_2);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_25$lambda$lambda$lambda_8rgwj2_2($this$d) {
    $this$d.s2p(18.36, 18.36);
    $this$d.t2p(1.42, 1.42, true);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_25$lambda$lambda_h73gqh_4($this$Path) {
    $this$Path.o2p(ComposableSingletons$IconsKt$lambda_25$lambda$lambda$lambda_8rgwj2_3);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_25$lambda$lambda$lambda_8rgwj2_3($this$d) {
    $this$d.s2p(1, 12);
    $this$d.x2p(2, true);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_25$lambda$lambda_h73gqh_5($this$Path) {
    $this$Path.o2p(ComposableSingletons$IconsKt$lambda_25$lambda$lambda$lambda_8rgwj2_4);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_25$lambda$lambda$lambda_8rgwj2_4($this$d) {
    $this$d.s2p(21, 12);
    $this$d.x2p(2, true);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_25$lambda$lambda_h73gqh_6($this$Path) {
    $this$Path.o2p(ComposableSingletons$IconsKt$lambda_25$lambda$lambda$lambda_8rgwj2_5);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_25$lambda$lambda$lambda_8rgwj2_5($this$d) {
    $this$d.s2p(4.22, 19.78);
    $this$d.t2p(1.42, -1.42, true);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_25$lambda$lambda_h73gqh_7($this$Path) {
    $this$Path.o2p(ComposableSingletons$IconsKt$lambda_25$lambda$lambda$lambda_8rgwj2_6);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_25$lambda$lambda$lambda_8rgwj2_6($this$d) {
    $this$d.s2p(18.36, 5.64);
    $this$d.t2p(1.42, -1.42, true);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_31($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.n25(p0, p1, p2);
    };
  }
  function ComposableSingletons$IconsKt$lambda_26$lambda_d5o1ld($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-1299612222, $changed, -1, 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-26.<anonymous> (Icons.kt:476)');
    }
    $composer_0.a19(-1477326964);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.f1a();
    var tmp;
    if (false || it === Companion_getInstance().s13_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-26.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$IconsKt$lambda_26$lambda$lambda_swgiti;
      $composer_0.l1a(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.b19();
    Group($this$createIcon, tmp0_group, ComposableSingletons$IconsKt_getInstance().h3e_1, $composer_0, 432 | 14 & $changed, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_26$lambda$lambda_swgiti($this$Group) {
    $this$Group.y2q(SVGStrokeLineJoin_Round_getInstance());
    $this$Group.r2p(SVGStrokeLineCap_Round_getInstance());
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_32($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.n25(p0, p1, p2);
    };
  }
  function ComposableSingletons$IconsKt$lambda_27$lambda_t1tjbk($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(309117970, $changed, -1, 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-27.<anonymous> (Icons.kt:541)');
    }
    $composer_0.a19(30279731);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.f1a();
    var tmp;
    if (false || it === Companion_getInstance().s13_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-27.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$IconsKt$lambda_27$lambda$lambda_3ywged;
      $composer_0.l1a(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.b19();
    Path($this$createIcon, tmp0_group, $composer_0, 48 | 14 & $changed);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_27$lambda$lambda_3ywged($this$Path) {
    $this$Path.q2p('M 6.457 1.047 c 0.659 -1.234 2.427 -1.234 3.086 0 l 6.082 11.378 A 1.75 1.75 0 0 1 14.082 15 H 1.918 a 1.75 1.75 0 0 1 -1.543 -2.575 Z m 1.763 0.707 a 0.25 0.25 0 0 0 -0.44 0 L 1.698 13.132 a 0.25 0.25 0 0 0 0.22 0.368 h 12.164 a 0.25 0.25 0 0 0 0.22 -0.368 Z m 0.53 3.996 v 2.5 a 0.75 0.75 0 0 1 -1.5 0 v -2.5 a 0.75 0.75 0 0 1 1.5 0 Z M 9 11 a 1 1 0 1 1 -2 0 a 1 1 0 0 1 2 0 Z');
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt() {
    ComposableSingletons$IconsKt_instance = this;
    var tmp = this;
    tmp.j3d_1 = ComposableLambda$invoke$ref_6(composableLambdaInstance(187923078, false, ComposableSingletons$IconsKt$lambda_1$lambda_21hevk));
    var tmp_0 = this;
    tmp_0.k3d_1 = ComposableLambda$invoke$ref_7(composableLambdaInstance(465018625, false, ComposableSingletons$IconsKt$lambda_2$lambda_qs526n));
    var tmp_1 = this;
    tmp_1.l3d_1 = ComposableLambda$invoke$ref_8(composableLambdaInstance(1093309942, false, ComposableSingletons$IconsKt$lambda_3$lambda_ffciqa));
    var tmp_2 = this;
    tmp_2.m3d_1 = ComposableLambda$invoke$ref_9(composableLambdaInstance(353353466, false, ComposableSingletons$IconsKt$lambda_4$lambda_de9ybx));
    var tmp_3 = this;
    tmp_3.n3d_1 = ComposableLambda$invoke$ref_10(composableLambdaInstance(14879965, false, ComposableSingletons$IconsKt$lambda_5$lambda_st7ml0));
    var tmp_4 = this;
    tmp_4.o3d_1 = ComposableLambda$invoke$ref_11(composableLambdaInstance(343641086, false, ComposableSingletons$IconsKt$lambda_6$lambda_euh7));
    var tmp_5 = this;
    tmp_5.p3d_1 = ComposableLambda$invoke$ref_12(composableLambdaInstance(-1021140685, false, ComposableSingletons$IconsKt$lambda_7$lambda_su1bje));
    var tmp_6 = this;
    tmp_6.q3d_1 = ComposableLambda$invoke$ref_13(composableLambdaInstance(-507764776, false, ComposableSingletons$IconsKt$lambda_8$lambda_ddg9dj));
    var tmp_7 = this;
    tmp_7.r3d_1 = ComposableLambda$invoke$ref_14(composableLambdaInstance(-79892645, false, ComposableSingletons$IconsKt$lambda_9$lambda_fg67oo));
    var tmp_8 = this;
    tmp_8.s3d_1 = ComposableLambda$invoke$ref_15(composableLambdaInstance(660186540, false, ComposableSingletons$IconsKt$lambda_10$lambda_c69byu));
    var tmp_9 = this;
    tmp_9.t3d_1 = ComposableLambda$invoke$ref_16(composableLambdaInstance(2025461450, false, ComposableSingletons$IconsKt$lambda_11$lambda_u188y3));
    var tmp_10 = this;
    tmp_10.u3d_1 = ComposableLambda$invoke$ref_17(composableLambdaInstance(1212129518, false, ComposableSingletons$IconsKt$lambda_12$lambda_17lrvw));
    var tmp_11 = this;
    tmp_11.v3d_1 = ComposableLambda$invoke$ref_18(composableLambdaInstance(-769560574, false, ComposableSingletons$IconsKt$lambda_13$lambda_rm0p6b));
    var tmp_12 = this;
    tmp_12.w3d_1 = ComposableLambda$invoke$ref_19(composableLambdaInstance(1065587999, false, ComposableSingletons$IconsKt$lambda_14$lambda_elgvqm));
    var tmp_13 = this;
    tmp_13.x3d_1 = ComposableLambda$invoke$ref_20(composableLambdaInstance(-725431745, false, ComposableSingletons$IconsKt$lambda_15$lambda_e85lbl));
    var tmp_14 = this;
    tmp_14.y3d_1 = ComposableLambda$invoke$ref_21(composableLambdaInstance(431415976, false, ComposableSingletons$IconsKt$lambda_16$lambda_rzbzlc));
    var tmp_15 = this;
    tmp_15.z3d_1 = ComposableLambda$invoke$ref_22(composableLambdaInstance(1870964437, false, ComposableSingletons$IconsKt$lambda_17$lambda_uahgv));
    var tmp_16 = this;
    tmp_16.a3e_1 = ComposableLambda$invoke$ref_23(composableLambdaInstance(-2035566234, false, ComposableSingletons$IconsKt$lambda_18$lambda_tnwyj2));
    var tmp_17 = this;
    tmp_17.b3e_1 = ComposableLambda$invoke$ref_24(composableLambdaInstance(-1115382124, false, ComposableSingletons$IconsKt$lambda_19$lambda_cjkmdv));
    var tmp_18 = this;
    tmp_18.c3e_1 = ComposableLambda$invoke$ref_25(composableLambdaInstance(862240855, false, ComposableSingletons$IconsKt$lambda_20$lambda_hpuotl));
    var tmp_19 = this;
    tmp_19.d3e_1 = ComposableLambda$invoke$ref_26(composableLambdaInstance(2069599163, false, ComposableSingletons$IconsKt$lambda_21$lambda_b3rs8m));
    var tmp_20 = this;
    tmp_20.e3e_1 = ComposableLambda$invoke$ref_27(composableLambdaInstance(2112796384, false, ComposableSingletons$IconsKt$lambda_22$lambda_v3psob));
    var tmp_21 = this;
    tmp_21.f3e_1 = ComposableLambda$invoke$ref_28(composableLambdaInstance(-214586766, false, ComposableSingletons$IconsKt$lambda_23$lambda_2a3bm4));
    var tmp_22 = this;
    tmp_22.g3e_1 = ComposableLambda$invoke$ref_29(composableLambdaInstance(70550268, false, ComposableSingletons$IconsKt$lambda_24$lambda_qjj5g3));
    var tmp_23 = this;
    tmp_23.h3e_1 = ComposableLambda$invoke$ref_30(composableLambdaInstance(747380469, false, ComposableSingletons$IconsKt$lambda_25$lambda_fnyfgu));
    var tmp_24 = this;
    tmp_24.i3e_1 = ComposableLambda$invoke$ref_31(composableLambdaInstance(-1299612222, false, ComposableSingletons$IconsKt$lambda_26$lambda_d5o1ld));
    var tmp_25 = this;
    tmp_25.j3e_1 = ComposableLambda$invoke$ref_32(composableLambdaInstance(309117970, false, ComposableSingletons$IconsKt$lambda_27$lambda_t1tjbk));
  }
  var ComposableSingletons$IconsKt_instance;
  function ComposableSingletons$IconsKt_getInstance() {
    if (ComposableSingletons$IconsKt_instance == null)
      new ComposableSingletons$IconsKt();
    return ComposableSingletons$IconsKt_instance;
  }
  function StopIcon$lambda($modifier, $$changed, $$default) {
    return function ($composer, $force) {
      StopIcon($modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function ExclaimIcon$lambda($modifier, $$changed, $$default) {
    return function ($composer, $force) {
      ExclaimIcon($modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function InfoIcon$lambda($modifier, $$changed, $$default) {
    return function ($composer, $force) {
      InfoIcon($modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function QuestionIcon$lambda($modifier, $$changed, $$default) {
    return function ($composer, $force) {
      QuestionIcon($modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function QuoteIcon$lambda($modifier, $$changed, $$default) {
    return function ($composer, $force) {
      QuoteIcon($modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function LightbulbIcon$lambda($modifier, $$changed, $$default) {
    return function ($composer, $force) {
      LightbulbIcon($modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function WarningIcon$lambda($modifier, $$changed, $$default) {
    return function ($composer, $force) {
      WarningIcon($modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function createIcon$lambda($width, $viewBox, $renderStyle, $attrs) {
    return function ($this$Svg) {
      var tmp0_safe_receiver = $width._v;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        $this$Svg.k2p(tmp0_safe_receiver);
      }
      var tmp1_safe_receiver = $viewBox._v;
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        $this$Svg.l2p(tmp1_safe_receiver.b2p_1, tmp1_safe_receiver.c2p_1, tmp1_safe_receiver.d2p_1, tmp1_safe_receiver.e2p_1);
      }
      var tmp2_safe_receiver = $renderStyle._v;
      if (tmp2_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.varabyte.kobweb.silk.components.icons.createIcon.<anonymous>.<anonymous>.<anonymous>' call
        var tmp;
        if (tmp2_safe_receiver instanceof Fill) {
          $this$Svg.j2p(SVGFillType_CurrentColor_getInstance());
          tmp = $this$Svg.h2p(SVGStrokeType_None_getInstance());
        } else {
          if (tmp2_safe_receiver instanceof Stroke) {
            $this$Svg.h2p(SVGStrokeType_CurrentColor_getInstance());
            $this$Svg.j2p(SVGFillType_None_getInstance());
            var tmp1_safe_receiver_0 = tmp2_safe_receiver.k3e_1;
            var tmp_0;
            if (tmp1_safe_receiver_0 == null) {
              tmp_0 = null;
            } else {
              // Inline function 'kotlin.let' call
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'com.varabyte.kobweb.silk.components.icons.createIcon.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
              tmp_0 = $this$Svg.i2p(tmp1_safe_receiver_0);
            }
            tmp = tmp_0;
          } else {
            noWhenBranchMatchedException();
          }
        }
      }
      var tmp3_safe_receiver = $attrs._v;
      if (tmp3_safe_receiver == null)
        null;
      else
        tmp3_safe_receiver($this$Svg);
      return Unit_instance;
    };
  }
  function createIcon$lambda_0($viewBox, $width, $renderStyle, $attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      createIcon($viewBox._v, $width._v, $renderStyle._v, $attrs._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function get_HorizontalDividerStyle() {
    _init_properties_Divider_kt__8b5dnr();
    return HorizontalDividerStyle;
  }
  var HorizontalDividerStyle;
  function get_VerticalDividerStyle() {
    _init_properties_Divider_kt__8b5dnr();
    return VerticalDividerStyle;
  }
  var VerticalDividerStyle;
  var com_varabyte_kobweb_silk_components_layout_DividerVars$stable;
  function DividerVars() {
    DividerVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_BorderColorVar().b2n();
    tmp.l3e_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_percent(90);
    tmp_0.m3e_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
  }
  protoOf(DividerVars).p37 = function () {
    return this.l3e_1.h2n(this, Color$factory_2());
  };
  protoOf(DividerVars).n3e = function () {
    return this.m3e_1.h2n(this, Length$factory());
  };
  var DividerVars_instance;
  function DividerVars_getInstance() {
    if (DividerVars_instance == null)
      new DividerVars();
    return DividerVars_instance;
  }
  function HorizontalDividerStyle$lambda($this$base) {
    _init_properties_Divider_kt__8b5dnr();
    var tmp = Companion_instance;
    var tmp_0 = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return width(borderTop(tmp, tmp_0, 'solid', DividerVars_getInstance().p37().b2n()), DividerVars_getInstance().n3e().b2n());
  }
  function VerticalDividerStyle$lambda($this$base) {
    _init_properties_Divider_kt__8b5dnr();
    var tmp = Companion_instance;
    var tmp_0 = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return height(borderLeft(tmp, tmp_0, 'solid', DividerVars_getInstance().p37().b2n()), DividerVars_getInstance().n3e().b2n());
  }
  function Color$factory_2() {
    return getPropertyCallableRef('Color', 1, KProperty1, function (receiver) {
      return receiver.p37();
    }, null);
  }
  function Length$factory() {
    return getPropertyCallableRef('Length', 1, KProperty1, function (receiver) {
      return receiver.n3e();
    }, null);
  }
  var properties_initialized_Divider_kt_k1kxcn;
  function _init_properties_Divider_kt__8b5dnr() {
    if (!properties_initialized_Divider_kt_k1kxcn) {
      properties_initialized_Divider_kt_k1kxcn = true;
      var tmp = Companion_instance_5;
      HorizontalDividerStyle = base(tmp, VOID, HorizontalDividerStyle$lambda);
      var tmp_0 = Companion_instance_5;
      VerticalDividerStyle = base(tmp_0, VOID, VerticalDividerStyle$lambda);
      com_varabyte_kobweb_silk_components_layout_DividerVars$stable = 8;
    }
  }
  function get_columnVariables() {
    _init_properties_SimpleGrid_kt__tvipdk();
    return columnVariables;
  }
  var columnVariables;
  function get_SimpleGridStyle() {
    _init_properties_SimpleGrid_kt__tvipdk();
    return SimpleGridStyle;
  }
  var SimpleGridStyle;
  function numColumns(base, sm, md, lg, xl) {
    sm = sm === VOID ? base : sm;
    md = md === VOID ? sm : md;
    lg = lg === VOID ? md : lg;
    xl = xl === VOID ? lg : xl;
    _init_properties_SimpleGrid_kt__tvipdk();
    return new ResponsiveValues(base, sm, md, lg, xl);
  }
  function SimpleGrid(numColumns, modifier, variant, ref, content, $composer, $changed, $default) {
    _init_properties_SimpleGrid_kt__tvipdk();
    var modifier_0 = {_v: modifier};
    var variant_0 = {_v: variant};
    var ref_0 = {_v: ref};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t1a(1950532178);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ((($changed & 8) === 0 ? $composer_0.t10(numColumns) : $composer_0.v19(numColumns)) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.v19(modifier_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.t10(variant_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ((($changed & 4096) === 0 ? $composer_0.t10(ref_0._v) : $composer_0.v19(ref_0._v)) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.v19(content) ? 16384 : 8192);
    if (!(($dirty & 9363) === 9362) || !$composer_0.v18()) {
      if (!(($default & 2) === 0)) {
        modifier_0._v = Companion_instance;
      }
      if (!(($default & 4) === 0)) {
        variant_0._v = null;
      }
      if (!(($default & 8) === 0)) {
        ref_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(1950532178, $dirty, -1, 'com.varabyte.kobweb.silk.components.layout.SimpleGrid (SimpleGrid.kt:75)');
      }
      var tmp = toAttrs(setVariable_0(setVariable_0(setVariable_0(setVariable_0(setVariable_0(toModifier(get_SimpleGridStyle(), [variant_0._v], $composer_0, 6), getValue(get_columnVariables(), Breakpoint_ZERO_getInstance()), numColumns.g33_1), getValue(get_columnVariables(), Breakpoint_SM_getInstance()), numColumns.h33_1), getValue(get_columnVariables(), Breakpoint_MD_getInstance()), numColumns.i33_1), getValue(get_columnVariables(), Breakpoint_LG_getInstance()), numColumns.j33_1), getValue(get_columnVariables(), Breakpoint_XL_getInstance()), numColumns.k33_1).u2u(modifier_0._v));
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.components.layout.SimpleGrid.<anonymous>' call
      var tmp_0 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_0, 656877393, true, SimpleGrid$lambda(ref_0, content));
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
        // Inline function 'com.varabyte.kobweb.silk.components.layout.SimpleGrid.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_33(dispatchReceiver);
        $composer_1.l1a(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_1.b19();
      Div(tmp, tmp0, $composer_0, 48, 0);
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
      tmp0_safe_receiver.u1f(SimpleGrid$lambda_0(numColumns, modifier_0, variant_0, ref_0, content, $changed, $default));
    }
  }
  function SimpleGridStyle$lambda($this$CssStyle) {
    _init_properties_SimpleGrid_kt__tvipdk();
    $this$CssStyle.k31(SimpleGridStyle$lambda$lambda);
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = get_columnVariables().c2().j();
    while (tmp0_iterator.k()) {
      var element = tmp0_iterator.l();
      // Inline function 'com.varabyte.kobweb.silk.components.layout.SimpleGridStyle.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var breakpoint = element.v1();
      // Inline function 'kotlin.collections.component2' call
      var variable = element.w1();
      $this$CssStyle.d32(breakpoint, SimpleGridStyle$lambda$lambda_0(variable));
    }
    return Unit_instance;
  }
  function SimpleGridStyle$lambda$lambda() {
    _init_properties_SimpleGrid_kt__tvipdk();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Grid' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return display(tmp, 'grid');
  }
  function SimpleGridStyle$lambda$lambda$lambda$lambda($this$repeat) {
    _init_properties_SimpleGrid_kt__tvipdk();
    $this$repeat.h2l(get_fr(1));
    return Unit_instance;
  }
  function SimpleGridStyle$lambda$lambda$lambda($variable) {
    return function ($this$gridTemplateColumns) {
      var tmp = $variable.b2n();
      $this$gridTemplateColumns.d2l(tmp, SimpleGridStyle$lambda$lambda$lambda$lambda);
      return Unit_instance;
    };
  }
  function SimpleGridStyle$lambda$lambda_0($variable) {
    return function () {
      var tmp = Companion_instance;
      return gridTemplateColumns(tmp, SimpleGridStyle$lambda$lambda$lambda($variable));
    };
  }
  function SimpleGrid$lambda($ref, $content) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(656877393, $changed, -1, 'com.varabyte.kobweb.silk.components.layout.SimpleGrid.<anonymous> (SimpleGrid.kt:86)');
      }
      registerRefScope($this$Div, $ref._v, $composer_0, 14 & $changed);
      $content($composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_33($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.n25(p0, p1, p2);
    };
  }
  function SimpleGrid$lambda_0($numColumns, $modifier, $variant, $ref, $content, $$changed, $$default) {
    return function ($composer, $force) {
      SimpleGrid($numColumns, $modifier._v, $variant._v, $ref._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  var properties_initialized_SimpleGrid_kt_fum19i;
  function _init_properties_SimpleGrid_kt__tvipdk() {
    if (!properties_initialized_SimpleGrid_kt_fum19i) {
      properties_initialized_SimpleGrid_kt_fum19i = true;
      // Inline function 'kotlin.collections.associateWith' call
      var this_0 = get_entries();
      var result = LinkedHashMap_init_$Create$(coerceAtLeast(mapCapacity(collectionSizeOrDefault(this_0, 10)), 16));
      // Inline function 'kotlin.collections.associateWithTo' call
      var tmp0_iterator = this_0.j();
      while (tmp0_iterator.k()) {
        var element = tmp0_iterator.l();
        // Inline function 'com.varabyte.kobweb.silk.components.layout.columnVariables.<anonymous>' call
        // Inline function 'kotlin.text.lowercase' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$1 = element.g2_1.toLowerCase();
        var tmp$ret$2 = new NumberValue('simple-grid-col-count-' + tmp$ret$1, VOID, 'silk');
        result.y4(element, tmp$ret$2);
      }
      columnVariables = result;
      SimpleGridStyle = CssStyle(VOID, SimpleGridStyle$lambda);
    }
  }
  function get_SurfaceStyle() {
    _init_properties_Surface_kt__8o7unv();
    return SurfaceStyle;
  }
  var SurfaceStyle;
  var com_varabyte_kobweb_silk_components_layout_SurfaceVars$stable;
  function SurfaceVars() {
    SurfaceVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_BackgroundColorVar().b2n();
    tmp.o3e_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_ColorVar().b2n();
    tmp_0.p3e_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
  }
  protoOf(SurfaceVars).r37 = function () {
    return this.o3e_1.h2n(this, BackgroundColor$factory_1());
  };
  protoOf(SurfaceVars).p37 = function () {
    return this.p3e_1.h2n(this, Color$factory_3());
  };
  var SurfaceVars_instance;
  function SurfaceVars_getInstance() {
    if (SurfaceVars_instance == null)
      new SurfaceVars();
    return SurfaceVars_instance;
  }
  function Surface(modifier, variant, colorModeOverride, contentAlignment, ref, content, $composer, $changed, $default) {
    _init_properties_Surface_kt__8o7unv();
    var modifier_0 = {_v: modifier};
    var variant_0 = {_v: variant};
    var colorModeOverride_0 = {_v: colorModeOverride};
    var contentAlignment_0 = {_v: contentAlignment};
    var ref_0 = {_v: ref};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t1a(-2142125922);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.v19(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.t10(variant_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.t10(colorModeOverride_0._v) ? 256 : 128);
    if (($changed & 3072) === 0)
      $dirty = $dirty | (($default & 8) === 0 && $composer_0.v19(contentAlignment_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 24576) === 0)
      $dirty = $dirty | ((($changed & 32768) === 0 ? $composer_0.t10(ref_0._v) : $composer_0.v19(ref_0._v)) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.v19(content) ? 131072 : 65536);
    if (!(($dirty & 74899) === 74898) || !$composer_0.v18()) {
      $composer_0.c19();
      if (($changed & 1) === 0 || $composer_0.g19()) {
        if (!(($default & 1) === 0)) {
          modifier_0._v = Companion_instance;
        }
        if (!(($default & 2) === 0)) {
          variant_0._v = null;
        }
        if (!(($default & 4) === 0)) {
          colorModeOverride_0._v = null;
        }
        if (!(($default & 8) === 0)) {
          contentAlignment_0._v = TopStart_instance;
          $dirty = $dirty & -7169;
        }
        if (!(($default & 16) === 0)) {
          ref_0._v = null;
        }
      } else {
        $composer_0.m13();
        if (!(($default & 8) === 0))
          $dirty = $dirty & -7169;
      }
      $composer_0.d19();
      if (isTraceInProgress()) {
        traceEventStart(-2142125922, $dirty, -1, 'com.varabyte.kobweb.silk.components.layout.Surface (Surface.kt:56)');
      }
      $composer_0.a19(-1737049201);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.f1a();
      var tmp;
      if (false || it === Companion_getInstance().s13_1) {
        // Inline function 'com.varabyte.kobweb.silk.components.layout.Surface.<anonymous>' call
        var value = mutableStateOf(null);
        this_0.l1a(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.b19();
      var surfaceElement$delegate = tmp0_group;
      var tmp_1 = toModifier(get_SurfaceStyle(), [variant_0._v], $composer_0, 6).u2u(modifier_0._v);
      var tmp_2 = contentAlignment_0._v;
      $composer_0.a19(-1737043383);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      var invalid = ($dirty & 57344) === 16384 || (!(($dirty & 32768) === 0) && $composer_0.v19(ref_0._v));
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_1.f1a();
      var tmp_3;
      if (invalid || it_0 === Companion_getInstance().s13_1) {
        // Inline function 'com.varabyte.kobweb.silk.components.layout.Surface.<anonymous>' call
        var value_0 = Surface$lambda_1(ref_0, surfaceElement$delegate);
        this_1.l1a(value_0);
        tmp_3 = value_0;
      } else {
        tmp_3 = it_0;
      }
      var tmp_4 = tmp_3;
      var tmp1_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_0.b19();
      var tmp_5 = refScope(tmp1_group);
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.components.layout.Surface.<anonymous>' call
      var tmp_6 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_6, 1615126744, true, Surface$lambda_2(colorModeOverride_0, content, surfaceElement$delegate));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.a19(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_1.t10(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_1.f1a();
      var tmp_7;
      if (invalid_0 || it_1 === Companion_getInstance().s13_1) {
        // Inline function 'com.varabyte.kobweb.silk.components.layout.Surface.<anonymous>.<anonymous>' call
        var value_1 = ComposableLambda$invoke$ref_35(dispatchReceiver);
        $composer_1.l1a(value_1);
        tmp_7 = value_1;
      } else {
        tmp_7 = it_1;
      }
      var tmp_8 = tmp_7;
      var tmp0 = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
      $composer_1.b19();
      Box(tmp_1, tmp_2, tmp_5, tmp0, $composer_0, 3072 | 112 & $dirty >> 6, 0);
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
      tmp2_safe_receiver.u1f(Surface$lambda_3(modifier_0, variant_0, colorModeOverride_0, contentAlignment_0, ref_0, content, $changed, $default));
    }
  }
  function Surface$lambda($surfaceElement$delegate) {
    _init_properties_Surface_kt__8o7unv();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('surfaceElement', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $surfaceElement$delegate.w1();
  }
  function Surface$lambda_0($surfaceElement$delegate, _set____db54di) {
    _init_properties_Surface_kt__8o7unv();
    getLocalDelegateReference('surfaceElement', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $surfaceElement$delegate.or(_set____db54di);
    return Unit_instance;
  }
  function SurfaceStyle$lambda($this$CssStyle) {
    _init_properties_Surface_kt__8o7unv();
    $this$CssStyle.k31(SurfaceStyle$lambda$lambda);
    return Unit_instance;
  }
  function SurfaceStyle$lambda$lambda() {
    _init_properties_Surface_kt__8o7unv();
    return color(backgroundColor(Companion_instance, SurfaceVars_getInstance().r37().b2n()), SurfaceVars_getInstance().p37().b2n());
  }
  function Surface$lambda$lambda($surfaceElement$delegate) {
    return function (it) {
      Surface$lambda_0($surfaceElement$delegate, it);
      return Unit_instance;
    };
  }
  function Surface$lambda_1($ref, $surfaceElement$delegate) {
    return function ($this$refScope) {
      $this$refScope.n2o($ref._v);
      $this$refScope.m2o([], Surface$lambda$lambda($surfaceElement$delegate));
      return Unit_instance;
    };
  }
  function Surface$lambda$lambda$slambda($surfaceElement, $currColorMode, resultContinuation) {
    this.y3e_1 = $surfaceElement;
    this.z3e_1 = $currColorMode;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Surface$lambda$lambda$slambda).k1h = function ($this$LaunchedEffect, $completion) {
    var tmp = this.l1h($this$LaunchedEffect, $completion);
    tmp.x8_1 = Unit_instance;
    tmp.y8_1 = null;
    return tmp.d9();
  };
  protoOf(Surface$lambda$lambda$slambda).p9 = function (p1, $completion) {
    return this.k1h((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Surface$lambda$lambda$slambda).d9 = function () {
    var suspendResult = this.x8_1;
    $sm: do
      try {
        var tmp = this.v8_1;
        if (tmp === 0) {
          this.w8_1 = 1;
          setSilkWidgetVariables(this.y3e_1, this.z3e_1);
          return Unit_instance;
        } else if (tmp === 1) {
          throw this.y8_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(Surface$lambda$lambda$slambda).l1h = function ($this$LaunchedEffect, completion) {
    var i = new Surface$lambda$lambda$slambda(this.y3e_1, this.z3e_1, completion);
    i.a3f_1 = $this$LaunchedEffect;
    return i;
  };
  function Surface$lambda$lambda$slambda_0($surfaceElement, $currColorMode, resultContinuation) {
    var i = new Surface$lambda$lambda$slambda($surfaceElement, $currColorMode, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.k1h($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function Surface$lambda$lambda_0($surfaceElement, $content, $this_Box) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.v18()) {
        if (isTraceInProgress()) {
          traceEventStart(-346828591, $changed, -1, 'com.varabyte.kobweb.silk.components.layout.Surface.<anonymous>.<anonymous>.<anonymous> (Surface.kt:69)');
        }
        var currColorMode = Companion_instance_17.i32($composer_0, 6);
        $composer_0.a19(1829026742);
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = !!($composer_0.v19($surfaceElement) | $composer_0.t10(currColorMode));
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.f1a();
        var tmp_0;
        if (invalid || it === Companion_getInstance().s13_1) {
          // Inline function 'com.varabyte.kobweb.silk.components.layout.Surface.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = Surface$lambda$lambda$slambda_0($surfaceElement, currColorMode, null);
          $composer_0.l1a(value);
          tmp_0 = value;
        } else {
          tmp_0 = it;
        }
        var tmp_1 = tmp_0;
        var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        $composer_0.b19();
        LaunchedEffect(currColorMode, tmp0_group, $composer_0, 0);
        $content($this_Box, $composer_0, 0);
        var tmp_2;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_2 = Unit_instance;
        }
        tmp = tmp_2;
      } else {
        $composer_0.m13();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_34($boundThis) {
    return function (p0, p1) {
      return $boundThis.t18(p0, p1);
    };
  }
  function Surface$lambda_2($colorModeOverride, $content, $surfaceElement$delegate) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 6) === 0) {
        $dirty = $dirty | ($composer_0.t10($this$Box) ? 4 : 2);
        tmp = Unit_instance;
      }
      var tmp_0;
      if (!(($dirty & 19) === 18) || !$composer_0.v18()) {
        if (isTraceInProgress()) {
          traceEventStart(1615126744, $dirty, -1, 'com.varabyte.kobweb.silk.components.layout.Surface.<anonymous> (Surface.kt:66)');
        }
        if (!($colorModeOverride._v == null)) {
          $composer_0.a19(-708350689);
          var tmp0_safe_receiver = Surface$lambda($surfaceElement$delegate);
          var tmp_1;
          if (tmp0_safe_receiver == null) {
            tmp_1 = null;
          } else {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            var tmp_2 = $colorModeOverride._v.v34();
            // Inline function 'kotlin.run' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'com.varabyte.kobweb.silk.components.layout.Surface.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            var tmp_3 = $composer_0;
            var dispatchReceiver = composableLambda(tmp_3, -346828591, true, Surface$lambda$lambda_0(tmp0_safe_receiver, $content, $this$Box));
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
            var tmp_4;
            if (invalid || it === Companion_getInstance().s13_1) {
              // Inline function 'com.varabyte.kobweb.silk.components.layout.Surface.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
              var value = ComposableLambda$invoke$ref_34(dispatchReceiver);
              $composer_1.l1a(value);
              tmp_4 = value;
            } else {
              tmp_4 = it;
            }
            var tmp_5 = tmp_4;
            var tmp0 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
            $composer_1.b19();
            CompositionLocalProvider(tmp_2, tmp0, $composer_0, 48);
            tmp_1 = Unit_instance;
          }
          $composer_0.b19();
        } else {
          $composer_0.a19(-707941055);
          $content($this$Box, $composer_0, 14 & $dirty);
          $composer_0.b19();
        }
        var tmp_6;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_6 = Unit_instance;
        }
        tmp_0 = tmp_6;
      } else {
        $composer_0.m13();
        tmp_0 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_35($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.n25(p0, p1, p2);
    };
  }
  function Surface$lambda_3($modifier, $variant, $colorModeOverride, $contentAlignment, $ref, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Surface($modifier._v, $variant._v, $colorModeOverride._v, $contentAlignment._v, $ref._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function BackgroundColor$factory_1() {
    return getPropertyCallableRef('BackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.r37();
    }, null);
  }
  function Color$factory_3() {
    return getPropertyCallableRef('Color', 1, KProperty1, function (receiver) {
      return receiver.p37();
    }, null);
  }
  var properties_initialized_Surface_kt_k203pf;
  function _init_properties_Surface_kt__8o7unv() {
    if (!properties_initialized_Surface_kt_k203pf) {
      properties_initialized_Surface_kt_k203pf = true;
      SurfaceStyle = CssStyle(VOID, SurfaceStyle$lambda);
      com_varabyte_kobweb_silk_components_layout_SurfaceVars$stable = 8;
    }
  }
  var com_varabyte_kobweb_silk_components_overlay_KeepPopupOpenStrategy$stable;
  var com_varabyte_kobweb_silk_components_overlay_ManualKeepPopupOpenStrategy$stable;
  var com_varabyte_kobweb_silk_components_overlay_OpenClosePopupStrategy$stable;
  var com_varabyte_kobweb_silk_components_overlay_ManualOpenClosePopupStrategy$stable;
  var com_varabyte_kobweb_silk_components_overlay_TimedOpenClosePopupStrategy$stable;
  function get_OverlayStyle() {
    _init_properties_Overlay_kt__p5agwu();
    return OverlayStyle;
  }
  var OverlayStyle;
  var com_varabyte_kobweb_silk_components_overlay_OverlayVars$stable;
  function OverlayVars() {
    OverlayVars_instance = this;
    this.b3f_1 = StyleVariable('silk');
  }
  protoOf(OverlayVars).r37 = function () {
    return this.b3f_1.h2n(this, BackgroundColor$factory_2());
  };
  var OverlayVars_instance;
  function OverlayVars_getInstance() {
    if (OverlayVars_instance == null)
      new OverlayVars();
    return OverlayVars_instance;
  }
  function OverlayStyle$lambda($this$base) {
    _init_properties_Overlay_kt__p5agwu();
    return backgroundColor(Companion_instance, OverlayVars_getInstance().r37().b2n());
  }
  function BackgroundColor$factory_2() {
    return getPropertyCallableRef('BackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.r37();
    }, null);
  }
  var properties_initialized_Overlay_kt_mvmds0;
  function _init_properties_Overlay_kt__p5agwu() {
    if (!properties_initialized_Overlay_kt_mvmds0) {
      properties_initialized_Overlay_kt_mvmds0 = true;
      var tmp = Companion_instance_5;
      OverlayStyle = base(tmp, VOID, OverlayStyle$lambda);
      com_varabyte_kobweb_silk_components_overlay_OverlayVars$stable = 8;
    }
  }
  var com_varabyte_kobweb_silk_components_overlay_PopoverState_Uninitialized$stable;
  var com_varabyte_kobweb_silk_components_overlay_PopoverState_FoundElements$stable;
  var com_varabyte_kobweb_silk_components_overlay_PopoverState_Calculating$stable;
  var com_varabyte_kobweb_silk_components_overlay_PopoverState_Shown$stable;
  var com_varabyte_kobweb_silk_components_overlay_PopoverState_Hiding$stable;
  function get_PopupStyle() {
    _init_properties_Popup_kt__lluomy();
    return PopupStyle;
  }
  var PopupStyle;
  var com_varabyte_kobweb_silk_components_overlay_PopupVars$stable;
  var com_varabyte_kobweb_silk_components_overlay_PopupScope$stable;
  var com_varabyte_kobweb_silk_components_overlay_PopupPlacementStrategy_Position$stable;
  var com_varabyte_kobweb_silk_components_overlay_PopupPlacementStrategy_PositionAndPlacement$stable;
  var com_varabyte_kobweb_silk_components_overlay_PopupPlacementStrategy$stable;
  function PopupVars() {
    PopupVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = TransitionDurationVars_getInstance().y3c().b2n();
    tmp.c3f_1 = StyleVariable_1(tmp0_defaultFallback, 'silk');
  }
  protoOf(PopupVars).e3b = function () {
    return this.c3f_1.h2n(this, TransitionDuration$factory_1());
  };
  var PopupVars_instance;
  function PopupVars_getInstance() {
    if (PopupVars_instance == null)
      new PopupVars();
    return PopupVars_instance;
  }
  function PopupStyle$lambda($this$base) {
    _init_properties_Popup_kt__lluomy();
    return transition_0(Companion_instance, [Companion_instance_2.u2n('opacity', PopupVars_getInstance().e3b().b2n())]);
  }
  function TransitionDuration$factory_1() {
    return getPropertyCallableRef('TransitionDuration', 1, KProperty1, function (receiver) {
      return receiver.e3b();
    }, null);
  }
  var properties_initialized_Popup_kt_wwy6qs;
  function _init_properties_Popup_kt__lluomy() {
    if (!properties_initialized_Popup_kt_wwy6qs) {
      properties_initialized_Popup_kt_wwy6qs = true;
      var tmp = Companion_instance_5;
      PopupStyle = base(tmp, VOID, PopupStyle$lambda);
      com_varabyte_kobweb_silk_components_overlay_PopupVars$stable = 8;
      com_varabyte_kobweb_silk_components_overlay_PopupScope$stable = 0;
      com_varabyte_kobweb_silk_components_overlay_PopupPlacementStrategy_Position$stable = 8;
      com_varabyte_kobweb_silk_components_overlay_PopupPlacementStrategy_PositionAndPlacement$stable = 8;
      com_varabyte_kobweb_silk_components_overlay_PopupPlacementStrategy$stable = 0;
    }
  }
  function get_TRIANGLE_WIDTH() {
    _init_properties_Tooltip_kt__palx2n();
    return TRIANGLE_WIDTH;
  }
  var TRIANGLE_WIDTH;
  function get_TRIANGLE_WIDTH_2X() {
    _init_properties_Tooltip_kt__palx2n();
    return TRIANGLE_WIDTH_2X;
  }
  var TRIANGLE_WIDTH_2X;
  function get_TooltipStyle() {
    _init_properties_Tooltip_kt__palx2n();
    return TooltipStyle;
  }
  var TooltipStyle;
  function get_TooltipArrowStyle() {
    _init_properties_Tooltip_kt__palx2n();
    return TooltipArrowStyle;
  }
  var TooltipArrowStyle;
  function get_TopLeftTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return TopLeftTooltipArrowVariant;
  }
  var TopLeftTooltipArrowVariant;
  function get_TopTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return TopTooltipArrowVariant;
  }
  var TopTooltipArrowVariant;
  function get_TopRightTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return TopRightTooltipArrowVariant;
  }
  var TopRightTooltipArrowVariant;
  function get_LeftTopTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return LeftTopTooltipArrowVariant;
  }
  var LeftTopTooltipArrowVariant;
  function get_LeftTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return LeftTooltipArrowVariant;
  }
  var LeftTooltipArrowVariant;
  function get_LeftBottomTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return LeftBottomTooltipArrowVariant;
  }
  var LeftBottomTooltipArrowVariant;
  function get_RightTopTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return RightTopTooltipArrowVariant;
  }
  var RightTopTooltipArrowVariant;
  function get_RightTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return RightTooltipArrowVariant;
  }
  var RightTooltipArrowVariant;
  function get_RightBottomTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return RightBottomTooltipArrowVariant;
  }
  var RightBottomTooltipArrowVariant;
  function get_BottomLeftTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return BottomLeftTooltipArrowVariant;
  }
  var BottomLeftTooltipArrowVariant;
  function get_BottomTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return BottomTooltipArrowVariant;
  }
  var BottomTooltipArrowVariant;
  function get_BottomRightTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return BottomRightTooltipArrowVariant;
  }
  var BottomRightTooltipArrowVariant;
  function get_TooltipTextContainerStyle() {
    _init_properties_Tooltip_kt__palx2n();
    return TooltipTextContainerStyle;
  }
  var TooltipTextContainerStyle;
  var com_varabyte_kobweb_silk_components_overlay_TooltipVars$stable;
  function TooltipVars() {
    TooltipVars_instance = this;
    this.d3f_1 = StyleVariable('silk');
    this.e3f_1 = StyleVariable('silk');
  }
  protoOf(TooltipVars).r37 = function () {
    return this.d3f_1.h2n(this, BackgroundColor$factory_3());
  };
  protoOf(TooltipVars).p37 = function () {
    return this.e3f_1.h2n(this, Color$factory_4());
  };
  var TooltipVars_instance;
  function TooltipVars_getInstance() {
    if (TooltipVars_instance == null)
      new TooltipVars();
    return TooltipVars_instance;
  }
  function triangleDown(_this__u8e3s4, color) {
    _init_properties_Tooltip_kt__palx2n();
    return styleModifier(_this__u8e3s4, triangleDown$lambda(color));
  }
  function triangleLeft(_this__u8e3s4, color) {
    _init_properties_Tooltip_kt__palx2n();
    return styleModifier(_this__u8e3s4, triangleLeft$lambda(color));
  }
  function triangleRight(_this__u8e3s4, color) {
    _init_properties_Tooltip_kt__palx2n();
    return styleModifier(_this__u8e3s4, triangleRight$lambda(color));
  }
  function triangleUp(_this__u8e3s4, color) {
    _init_properties_Tooltip_kt__palx2n();
    return styleModifier(_this__u8e3s4, triangleUp$lambda(color));
  }
  function TooltipStyle$lambda($this$base) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Relative' call
    // Inline function 'org.jetbrains.compose.web.css.Position' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'relative';
    return borderRadius(color(backgroundColor(position(tmp, tmp$ret$3), TooltipVars_getInstance().r37().b2n()), TooltipVars_getInstance().p37().b2n()), get_px(6));
  }
  function TooltipArrowStyle$lambda($this$base) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Absolute' call
    // Inline function 'org.jetbrains.compose.web.css.Position' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'absolute';
    var tmp_0 = position(tmp, tmp$ret$3);
    return border_0(tmp_0, TooltipArrowStyle$lambda$lambda);
  }
  function TooltipArrowStyle$lambda$lambda($this$border) {
    _init_properties_Tooltip_kt__palx2n();
    $this$border.h2x(get_TRIANGLE_WIDTH());
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    $this$border.g2x('solid');
    return Unit_instance;
  }
  function TopLeftTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp1_left = get_TRIANGLE_WIDTH_2X();
    var tmp2_top = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleDown(top(margin_2(Companion_instance, tmp2_top, VOID, VOID, tmp1_left), get_px(0)), TooltipVars_getInstance().r37().b2n());
  }
  function TopTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp1_left = unaryMinus(get_TRIANGLE_WIDTH());
    var tmp2_top = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleDown(top(left(margin_2(Companion_instance, tmp2_top, VOID, VOID, tmp1_left), get_percent(50)), get_px(0)), TooltipVars_getInstance().r37().b2n());
  }
  function TopRightTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp1_right = get_TRIANGLE_WIDTH_2X();
    var tmp2_top = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleDown(top(right(margin_2(Companion_instance, tmp2_top, tmp1_right), get_px(0)), get_px(0)), TooltipVars_getInstance().r37().b2n());
  }
  function LeftTopTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleLeft(top(left(margin_2(Companion_instance, get_TRIANGLE_WIDTH_2X(), VOID, VOID, unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_px(0)), TooltipVars_getInstance().r37().b2n());
  }
  function LeftTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleLeft(top(left(margin_2(Companion_instance, unaryMinus(get_TRIANGLE_WIDTH()), VOID, VOID, unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_percent(50)), TooltipVars_getInstance().r37().b2n());
  }
  function LeftBottomTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleLeft(bottom(left(margin_2(Companion_instance, VOID, VOID, get_TRIANGLE_WIDTH_2X(), unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_px(0)), TooltipVars_getInstance().r37().b2n());
  }
  function RightTopTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleRight(top(right(margin_2(Companion_instance, get_TRIANGLE_WIDTH_2X(), unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_px(0)), TooltipVars_getInstance().r37().b2n());
  }
  function RightTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleRight(top(right(margin_2(Companion_instance, unaryMinus(get_TRIANGLE_WIDTH()), unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_percent(50)), TooltipVars_getInstance().r37().b2n());
  }
  function RightBottomTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp1_bottom = get_TRIANGLE_WIDTH_2X();
    var tmp2_right = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleRight(bottom(right(margin_2(Companion_instance, VOID, tmp2_right, tmp1_bottom), get_px(0)), get_px(0)), TooltipVars_getInstance().r37().b2n());
  }
  function BottomLeftTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp1_left = get_TRIANGLE_WIDTH_2X();
    var tmp2_bottom = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleUp(bottom(left(margin_2(Companion_instance, VOID, VOID, tmp2_bottom, tmp1_left), get_px(0)), get_px(0)), TooltipVars_getInstance().r37().b2n());
  }
  function BottomTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp1_left = unaryMinus(get_TRIANGLE_WIDTH());
    var tmp2_bottom = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleUp(bottom(left(margin_2(Companion_instance, VOID, VOID, tmp2_bottom, tmp1_left), get_percent(50)), get_px(0)), TooltipVars_getInstance().r37().b2n());
  }
  function BottomRightTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleUp(bottom(right(margin_2(Companion_instance, VOID, get_TRIANGLE_WIDTH_2X(), unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_px(0)), TooltipVars_getInstance().r37().b2n());
  }
  function TooltipTextContainerStyle$lambda($this$base) {
    _init_properties_Tooltip_kt__palx2n();
    return padding(Companion_instance, get_px(5));
  }
  function triangleDown$lambda($color) {
    return function ($this$styleModifier) {
      $this$styleModifier.h2e('border-color', 'transparent transparent ' + toString($color) + ' transparent');
      return Unit_instance;
    };
  }
  function triangleLeft$lambda($color) {
    return function ($this$styleModifier) {
      $this$styleModifier.h2e('border-color', 'transparent ' + toString($color) + ' transparent transparent');
      return Unit_instance;
    };
  }
  function triangleRight$lambda($color) {
    return function ($this$styleModifier) {
      $this$styleModifier.h2e('border-color', 'transparent transparent transparent ' + toString($color));
      return Unit_instance;
    };
  }
  function triangleUp$lambda($color) {
    return function ($this$styleModifier) {
      $this$styleModifier.h2e('border-color', toString($color) + ' transparent transparent transparent');
      return Unit_instance;
    };
  }
  function BackgroundColor$factory_3() {
    return getPropertyCallableRef('BackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.r37();
    }, null);
  }
  function Color$factory_4() {
    return getPropertyCallableRef('Color', 1, KProperty1, function (receiver) {
      return receiver.p37();
    }, null);
  }
  var properties_initialized_Tooltip_kt_68t07n;
  function _init_properties_Tooltip_kt__palx2n() {
    if (!properties_initialized_Tooltip_kt_68t07n) {
      properties_initialized_Tooltip_kt_68t07n = true;
      TRIANGLE_WIDTH = get_px(5);
      TRIANGLE_WIDTH_2X = get_px(9);
      var tmp = Companion_instance_5;
      TooltipStyle = base(tmp, VOID, TooltipStyle$lambda);
      var tmp_0 = Companion_instance_5;
      TooltipArrowStyle = base(tmp_0, VOID, TooltipArrowStyle$lambda);
      var tmp_1 = get_TooltipArrowStyle();
      TopLeftTooltipArrowVariant = addVariantBase(tmp_1, VOID, TopLeftTooltipArrowVariant$lambda);
      var tmp_2 = get_TooltipArrowStyle();
      TopTooltipArrowVariant = addVariantBase(tmp_2, VOID, TopTooltipArrowVariant$lambda);
      var tmp_3 = get_TooltipArrowStyle();
      TopRightTooltipArrowVariant = addVariantBase(tmp_3, VOID, TopRightTooltipArrowVariant$lambda);
      var tmp_4 = get_TooltipArrowStyle();
      LeftTopTooltipArrowVariant = addVariantBase(tmp_4, VOID, LeftTopTooltipArrowVariant$lambda);
      var tmp_5 = get_TooltipArrowStyle();
      LeftTooltipArrowVariant = addVariantBase(tmp_5, VOID, LeftTooltipArrowVariant$lambda);
      var tmp_6 = get_TooltipArrowStyle();
      LeftBottomTooltipArrowVariant = addVariantBase(tmp_6, VOID, LeftBottomTooltipArrowVariant$lambda);
      var tmp_7 = get_TooltipArrowStyle();
      RightTopTooltipArrowVariant = addVariantBase(tmp_7, VOID, RightTopTooltipArrowVariant$lambda);
      var tmp_8 = get_TooltipArrowStyle();
      RightTooltipArrowVariant = addVariantBase(tmp_8, VOID, RightTooltipArrowVariant$lambda);
      var tmp_9 = get_TooltipArrowStyle();
      RightBottomTooltipArrowVariant = addVariantBase(tmp_9, VOID, RightBottomTooltipArrowVariant$lambda);
      var tmp_10 = get_TooltipArrowStyle();
      BottomLeftTooltipArrowVariant = addVariantBase(tmp_10, VOID, BottomLeftTooltipArrowVariant$lambda);
      var tmp_11 = get_TooltipArrowStyle();
      BottomTooltipArrowVariant = addVariantBase(tmp_11, VOID, BottomTooltipArrowVariant$lambda);
      var tmp_12 = get_TooltipArrowStyle();
      BottomRightTooltipArrowVariant = addVariantBase(tmp_12, VOID, BottomRightTooltipArrowVariant$lambda);
      var tmp_13 = Companion_instance_5;
      TooltipTextContainerStyle = base(tmp_13, VOID, TooltipTextContainerStyle$lambda);
      com_varabyte_kobweb_silk_components_overlay_TooltipVars$stable = 8;
    }
  }
  function get_SilkColorsStyle() {
    _init_properties_InitSilkWidgets_kt__62z9ag();
    return SilkColorsStyle;
  }
  var SilkColorsStyle;
  function initSilkWidgets(ctx) {
    _init_properties_InitSilkWidgets_kt__62z9ag();
    var mutableTheme = ctx.g2y_1;
    // Inline function 'kotlin.apply' call
    var this_0 = ctx.g2y_1.d2z_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.silk.init.initSilkWidgets.<anonymous>' call
    var focusOutline = Blue_getInstance().l35_1.b2w().a2w(VOID, VOID, VOID, 0.5);
    var placeholder = Gray_getInstance().v35_1;
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    var color = Colors_instance.j2w();
    set_background(this_0.a36_1, Colors_instance.c2x());
    set_color(this_0.a36_1, color);
    set_border(this_0.a36_1, color.a2w(VOID, VOID, VOID, 0.2));
    set_focusOutline(this_0.a36_1, focusOutline);
    set_overlay(this_0.a36_1, color.a2w(VOID, VOID, VOID, 0.5));
    set_placeholder(this_0.a36_1, placeholder);
    var buttonBase = Colors_instance.c2x().x2v(0.2);
    get_button_0(this_0.a36_1).l3f(buttonBase, buttonBase.x2v(0.2), Colors_instance.l2w(), buttonBase.x2v(0.4));
    get_callout(this_0.a36_1).v3f(Colors_instance.m2w(), Colors_instance.q2w(), Colors_instance.s2w(), Colors_instance.a2x(), Colors_instance.t2w(), Colors_instance.w2w(), Colors_instance.p2w());
    get_checkbox_0(this_0.a36_1).b3g(Blue_getInstance().l35_1, Blue_getInstance().m35_1, Colors_instance.c2x());
    var inputFilled = Gray_getInstance().s35_1;
    var tmp0_$this = get_input_0(this_0.a36_1);
    var tmp1_filledFocus = Colors_instance.h2w();
    var tmp2_hoveredBorder = Gray_getInstance().v35_1;
    var tmp3_invalidBorder = Red_getInstance().f35_1;
    var tmp4_filledHover = inputFilled.x2v(0.1);
    tmp0_$this.j3g(tmp2_hoveredBorder, tmp3_invalidBorder, inputFilled, tmp4_filledHover, tmp1_filledFocus);
    var tmp5_$this = get_switch_0(this_0.a36_1);
    var tmp6_thumb = Colors_instance.c2x();
    var tmp7_backgroundOn = Colors_instance.s2w();
    var tmp8_backgroundOff = Colors_instance.u2w();
    tmp5_$this.b3g(tmp7_backgroundOn, tmp8_backgroundOff, tmp6_thumb);
    get_tab_0(this_0.a36_1).z3g(Colors_instance.j2w(), Colors_instance.c2x(), Colors_instance.l2w(), VOID, VOID, Colors_instance.u2w(), Colors_instance.d2x(), Colors_instance.c2x());
    get_tooltip_0(this_0.a36_1).e3h(get_color_0(this_0.a36_1), get_background_0(this_0.a36_1));
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    var color_0 = Colors_instance.c2x();
    set_background(this_0.b36_1, Colors_instance.j2w());
    set_color(this_0.b36_1, color_0);
    set_border(this_0.b36_1, color_0.a2w(VOID, VOID, VOID, 0.2));
    set_focusOutline(this_0.b36_1, focusOutline);
    set_overlay(this_0.b36_1, color_0.a2w(VOID, VOID, VOID, 0.5));
    set_placeholder(this_0.b36_1, placeholder);
    var buttonBase_0 = lightened(Colors_instance.j2w(), 0.2);
    get_button_0(this_0.b36_1).l3f(buttonBase_0, lightened(buttonBase_0, 0.2), Colors_instance.v2w(), lightened(buttonBase_0, 0.4));
    get_callout(this_0.b36_1).v3f(Colors_instance.z2w(), get_callout(this_0.a36_1).e38(), get_callout(this_0.a36_1).f38(), Colors_instance.i2w(), get_callout(this_0.a36_1).h38(), get_callout(this_0.a36_1).i38(), Colors_instance.x2w());
    get_checkbox_0(this_0.b36_1).b3g(Blue_getInstance().i35_1, Blue_getInstance().j35_1, Colors_instance.j2w());
    var inputFilled_0 = Gray_getInstance().z35_1;
    var tmp0_$this_0 = get_input_0(this_0.b36_1);
    var tmp1_filledFocus_0 = Colors_instance.h2w();
    var tmp2_hoveredBorder_0 = Gray_getInstance().w35_1;
    var tmp3_invalidBorder_0 = Red_getInstance().z34_1;
    var tmp4_filledHover_0 = lightened(inputFilled_0, 0.1);
    tmp0_$this_0.j3g(tmp2_hoveredBorder_0, tmp3_invalidBorder_0, inputFilled_0, tmp4_filledHover_0, tmp1_filledFocus_0);
    var tmp5_$this_0 = get_switch_0(this_0.b36_1);
    var tmp6_thumb_0 = Colors_instance.c2x();
    var tmp7_backgroundOn_0 = Colors_instance.v2w();
    var tmp8_backgroundOff_0 = Colors_instance.o2w();
    tmp5_$this_0.b3g(tmp7_backgroundOn_0, tmp8_backgroundOff_0, tmp6_thumb_0);
    get_tab_0(this_0.b36_1).z3g(Colors_instance.c2x(), Colors_instance.j2w(), Colors_instance.v2w(), VOID, VOID, Colors_instance.r2w(), Colors_instance.o2w(), Colors_instance.j2w());
    get_tooltip_0(this_0.b36_1).e3h(get_color_0(this_0.b36_1), get_background_0(this_0.b36_1));
    mutableTheme.s33('silk-colors', get_SilkColorsStyle());
    mutableTheme.f2z('silk-input', get_InputStyle());
    mutableTheme.y33('-outlined', get_OutlinedInputVariant());
    mutableTheme.y33('-filled', get_FilledInputVariant());
    mutableTheme.y33('-flushed', get_FlushedInputVariant());
    mutableTheme.y33('-unstyled', get_UnstyledInputVariant());
    mutableTheme.f2z('silk-input-group', get_InputGroupStyle());
    mutableTheme.s33('silk-disabled', get_DisabledStyle());
    mutableTheme.s33('silk-smooth-color', get_SmoothColorStyle());
    mutableTheme.f2z('silk-button', get_ButtonStyle());
    mutableTheme.f2z('silk-canvas', get_CanvasStyle());
    mutableTheme.f2z('silk-callout', get_CalloutStyle());
    mutableTheme.y33('-left-bordered', get_LeftBorderedCalloutVariant());
    mutableTheme.y33('-left-bordered-filled', get_LeftBorderedFilledCalloutVariant());
    mutableTheme.y33('-outlined', get_OutlinedCalloutVariant());
    mutableTheme.y33('-matching-link', get_MatchingLinkCalloutVariant());
    mutableTheme.f2z('silk-checkbox', get_CheckboxStyle());
    mutableTheme.y33('-checkbox', get_CheckboxInputVariant());
    mutableTheme.f2z('silk-checkbox-icon-container', get_CheckboxIconContainerStyle());
    mutableTheme.f2z('silk-checkbox-icon', get_CheckboxIconStyle());
    mutableTheme.y33('-checked', get_CheckedCheckboxIconContainerVariant());
    mutableTheme.y33('-unchecked', get_UncheckedCheckboxIconContainerVariant());
    mutableTheme.f2z('silk-overlay', get_OverlayStyle());
    mutableTheme.f2z('silk-popup', get_PopupStyle());
    mutableTheme.f2z('silk-simple-grid', get_SimpleGridStyle());
    mutableTheme.f2z('silk-surface', get_SurfaceStyle());
    mutableTheme.f2z('silk-horizontal-divider', get_HorizontalDividerStyle());
    mutableTheme.f2z('silk-vertical-divider', get_VerticalDividerStyle());
    mutableTheme.f2z('silk-switch', get_SwitchStyle());
    mutableTheme.f2z('silk-switch-track', get_SwitchTrackStyle());
    mutableTheme.f2z('silk-switch-thumb', get_SwitchThumbStyle());
    mutableTheme.y33('-switch', get_SwitchInputVariant());
    mutableTheme.f2z('silk-tabs', get_TabsStyle());
    mutableTheme.f2z('silk-tabs-tab-row', get_TabsTabRowStyle());
    mutableTheme.f2z('silk-tabs-tab', get_TabsTabStyle());
    mutableTheme.f2z('silk-tabs-panel', get_TabsPanelStyle());
    mutableTheme.f2z('silk-tooltip-arrow', get_TooltipArrowStyle());
    mutableTheme.y33('-top-left', get_TopLeftTooltipArrowVariant());
    mutableTheme.y33('-top', get_TopTooltipArrowVariant());
    mutableTheme.y33('-top-right', get_TopRightTooltipArrowVariant());
    mutableTheme.y33('-left-top', get_LeftTopTooltipArrowVariant());
    mutableTheme.y33('-left', get_LeftTooltipArrowVariant());
    mutableTheme.y33('-left-bottom', get_LeftBottomTooltipArrowVariant());
    mutableTheme.y33('-right-top', get_RightTopTooltipArrowVariant());
    mutableTheme.y33('-right', get_RightTooltipArrowVariant());
    mutableTheme.y33('-right-bottom', get_RightBottomTooltipArrowVariant());
    mutableTheme.y33('-bottom-left', get_BottomLeftTooltipArrowVariant());
    mutableTheme.y33('-bottom', get_BottomTooltipArrowVariant());
    mutableTheme.y33('-bottom-right', get_BottomRightTooltipArrowVariant());
    mutableTheme.f2z('silk-tooltip', get_TooltipStyle());
    mutableTheme.f2z('silk-tooltip-text', get_TooltipTextContainerStyle());
    mutableTheme.z33('silk-checkbox-enabled', get_CheckboxEnabledAnim());
    mutableTheme.q33('silk-button-size_xs', Companion_getInstance_1().s39_1);
    mutableTheme.q33('silk-button-size_sm', Companion_getInstance_1().t39_1);
    mutableTheme.q33('silk-button-size_md', Companion_getInstance_1().u39_1);
    mutableTheme.q33('silk-button-size_lg', Companion_getInstance_1().v39_1);
    mutableTheme.q33('silk-checkbox-size_sm', Companion_getInstance_2().f3b_1);
    mutableTheme.q33('silk-checkbox-size_md', Companion_getInstance_2().g3b_1);
    mutableTheme.q33('silk-checkbox-size_lg', Companion_getInstance_2().h3b_1);
    mutableTheme.q33('silk-input-size_xs', Companion_getInstance_3().h3c_1);
    mutableTheme.q33('silk-input-size_sm', Companion_getInstance_3().i3c_1);
    mutableTheme.q33('silk-input-size_md', Companion_getInstance_3().j3c_1);
    mutableTheme.q33('silk-input-size_lg', Companion_getInstance_3().k3c_1);
    mutableTheme.q33('silk-switch-size_sm', Companion_getInstance_4().g3d_1);
    mutableTheme.q33('silk-switch-size_md', Companion_getInstance_4().h3d_1);
    mutableTheme.q33('silk-switch-size_lg', Companion_getInstance_4().i3d_1);
    mutableTheme.q33('silk-callout-type_caution', Companion_getInstance_0().r38_1);
    mutableTheme.q33('silk-callout-type_important', Companion_getInstance_0().s38_1);
    mutableTheme.q33('silk-callout-type_note', Companion_getInstance_0().t38_1);
    mutableTheme.q33('silk-callout-type_question', Companion_getInstance_0().u38_1);
    mutableTheme.q33('silk-callout-type_quote', Companion_getInstance_0().v38_1);
    mutableTheme.q33('silk-callout-type_tip', Companion_getInstance_0().w38_1);
    mutableTheme.q33('silk-callout-type_warning', Companion_getInstance_0().x38_1);
  }
  function setSilkWidgetVariables(_this__u8e3s4, colorMode) {
    _init_properties_InitSilkWidgets_kt__62z9ag();
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.silk.init.setSilkWidgetVariables.<anonymous>' call
    var silkColorsStyleName = get_name(get_SilkColorsStyle());
    removeClass(_this__u8e3s4, [suffixedWith(silkColorsStyleName, colorMode.l32())]);
    addClass(_this__u8e3s4, [suffixedWith(silkColorsStyleName, colorMode)]);
  }
  function SilkWidgetVariables(rootElementId, $composer, $changed, $default) {
    _init_properties_InitSilkWidgets_kt__62z9ag();
    var rootElementId_0 = {_v: rootElementId};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t1a(-368967725);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.t10(rootElementId_0._v) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.v18()) {
      if (!(($default & 1) === 0)) {
        rootElementId_0._v = 'root';
      }
      if (isTraceInProgress()) {
        traceEventStart(-368967725, $dirty, -1, 'com.varabyte.kobweb.silk.init.SilkWidgetVariables (InitSilkWidgets.kt:381)');
      }
      $composer_0.a19(743479865);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      var invalid = ($dirty & 14) === 4;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.f1a();
      var tmp;
      if (invalid || it === Companion_getInstance().s13_1) {
        // Inline function 'com.varabyte.kobweb.silk.init.SilkWidgetVariables.<anonymous>' call
        var value = SilkWidgetVariables$lambda(rootElementId_0);
        this_0.l1a(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.b19();
      SilkWidgetVariables_0(tmp0_group, $composer_0, 0);
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
      tmp1_safe_receiver.u1f(SilkWidgetVariables$lambda_0(rootElementId_0, $changed, $default));
    }
  }
  function SilkWidgetVariables_0(provideRootElement, $composer, $changed) {
    _init_properties_InitSilkWidgets_kt__62z9ag();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t1a(1418237724);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.v19(provideRootElement) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.v18()) {
      if (isTraceInProgress()) {
        traceEventStart(1418237724, $dirty, -1, 'com.varabyte.kobweb.silk.init.SilkWidgetVariables (InitSilkWidgets.kt:375)');
      }
      $composer_0.a19(743474465);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.f1a();
      var tmp;
      if (false || it === Companion_getInstance().s13_1) {
        // Inline function 'com.varabyte.kobweb.silk.init.SilkWidgetVariables.<anonymous>' call
        var value = provideRootElement();
        this_0.l1a(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.b19();
      var rootElement = tmp0_group;
      SilkWidgetVariables_1(rootElement, $composer_0, 0);
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
      tmp1_safe_receiver.u1f(SilkWidgetVariables$lambda_1(provideRootElement, $changed));
    }
  }
  function SilkWidgetVariables_1(rootElement, $composer, $changed) {
    _init_properties_InitSilkWidgets_kt__62z9ag();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t1a(145799267);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.v19(rootElement) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.v18()) {
      if (isTraceInProgress()) {
        traceEventStart(145799267, $dirty, -1, 'com.varabyte.kobweb.silk.init.SilkWidgetVariables (InitSilkWidgets.kt:394)');
      }
      setSilkWidgetVariables(rootElement, Companion_instance_17.i32($composer_0, 6));
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
      tmp0_safe_receiver.u1f(SilkWidgetVariables$lambda_2(rootElement, $changed));
    }
  }
  function SilkColorsStyle$lambda($this$base) {
    _init_properties_InitSilkWidgets_kt__62z9ag();
    var palette = toPalette($this$base.e32_1);
    return setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(Companion_instance, get_BackgroundColorVar(), get_background(palette)), get_ColorVar(), get_color(palette)), get_BorderColorVar(), get_border(palette)), get_FocusOutlineColorVar(), get_focusOutline(palette)), get_PlaceholderColorVar(), get_placeholder_0(palette)), ButtonVars_getInstance().l39(), get_button(palette).f3h()), ButtonVars_getInstance().n39(), get_button(palette).o2f()), ButtonVars_getInstance().o39(), get_button(palette).g3h()), CheckboxVars_getInstance().c3b(), get_checkbox(palette).h3h()), CheckboxVars_getInstance().d3b(), get_checkbox(palette).o2f()), CheckboxVars_getInstance().b3b(), get_checkbox(palette).i3h()), InputVars_getInstance().z3b(), get_input(palette).j3h()), InputVars_getInstance().a3c(), get_input(palette).k3h()), InputVars_getInstance().b3c(), get_input(palette).l3h()), InputVars_getInstance().c3c(), get_input(palette).m3h()), InputVars_getInstance().d3c(), get_input(palette).n3h()), OverlayVars_getInstance().r37(), get_overlay(palette)), SwitchVars_getInstance().f3d(), get_switch(palette).o3h()), TabVars_getInstance().p37(), get_tab(palette).i3h()), TabVars_getInstance().r37(), get_tab(palette).h3h()), TabVars_getInstance().s37(), get_tab(palette).p3h()), TabVars_getInstance().t37(), get_tab(palette).o2f()), TabVars_getInstance().u37(), get_tab(palette).g3h()), TooltipVars_getInstance().r37(), get_tooltip(palette).h3h()), TooltipVars_getInstance().p37(), get_tooltip(palette).i3h());
  }
  function SilkWidgetVariables$lambda($rootElementId) {
    return function () {
      var tmp = document.getElementById($rootElementId._v);
      return tmp instanceof HTMLElement ? tmp : THROW_CCE();
    };
  }
  function SilkWidgetVariables$lambda_0($rootElementId, $$changed, $$default) {
    return function ($composer, $force) {
      SilkWidgetVariables($rootElementId._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function SilkWidgetVariables$lambda_1($provideRootElement, $$changed) {
    return function ($composer, $force) {
      SilkWidgetVariables_0($provideRootElement, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function SilkWidgetVariables$lambda_2($rootElement, $$changed) {
    return function ($composer, $force) {
      SilkWidgetVariables_1($rootElement, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  var properties_initialized_InitSilkWidgets_kt_dse0va;
  function _init_properties_InitSilkWidgets_kt__62z9ag() {
    if (!properties_initialized_InitSilkWidgets_kt_dse0va) {
      properties_initialized_InitSilkWidgets_kt_dse0va = true;
      var tmp = Companion_instance_5;
      SilkColorsStyle = base_0(tmp, VOID, SilkColorsStyle$lambda);
    }
  }
  function get_DisabledStyle() {
    _init_properties_CommonStyles_kt__a7wisz();
    return DisabledStyle;
  }
  var DisabledStyle;
  function get_SmoothColorTransitionDurationVar() {
    _init_properties_CommonStyles_kt__a7wisz();
    return SmoothColorTransitionDurationVar$delegate.h2n(null, SmoothColorTransitionDurationVar$factory());
  }
  var SmoothColorTransitionDurationVar$delegate;
  function get_SmoothColorStyle() {
    _init_properties_CommonStyles_kt__a7wisz();
    return SmoothColorStyle;
  }
  var SmoothColorStyle;
  function DisabledStyle$lambda($composer, $changed) {
    _init_properties_CommonStyles_kt__a7wisz();
    var $composer_0 = $composer;
    $composer_0.a19(812442038);
    if (isTraceInProgress()) {
      traceEventStart(812442038, $changed, -1, 'com.varabyte.kobweb.silk.style.common.DisabledStyle.<anonymous> (CommonStyles.kt:16)');
    }
    var tmp0 = tabIndex(ariaDisabled(Companion_instance), -1);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.b19();
    return tmp0;
  }
  function DisabledStyle$lambda_0($this$base) {
    _init_properties_CommonStyles_kt__a7wisz();
    return cursor(opacity(Companion_instance, 0.5), Companion_instance_1.r2k());
  }
  function SmoothColorStyle$lambda($this$base) {
    _init_properties_CommonStyles_kt__a7wisz();
    return transition_0(Companion_instance, [Companion_instance_2.u2n('background-color', get_SmoothColorTransitionDurationVar().b2n())]);
  }
  function SmoothColorTransitionDurationVar$factory() {
    return getPropertyCallableRef('SmoothColorTransitionDurationVar', 0, KProperty0, function () {
      return get_SmoothColorTransitionDurationVar();
    }, null);
  }
  var properties_initialized_CommonStyles_kt_zd2b1t;
  function _init_properties_CommonStyles_kt__a7wisz() {
    if (!properties_initialized_CommonStyles_kt_zd2b1t) {
      properties_initialized_CommonStyles_kt_zd2b1t = true;
      var tmp = Companion_instance_5;
      var tmp_0 = DisabledStyle$lambda;
      DisabledStyle = base_1(tmp, tmp_0, DisabledStyle$lambda_0);
      var tmp0_defaultFallback = TransitionDurationVars_getInstance().z2j().b2n();
      SmoothColorTransitionDurationVar$delegate = StyleVariable_1(tmp0_defaultFallback, 'silk');
      var tmp_1 = Companion_instance_5;
      SmoothColorStyle = base_0(tmp_1, VOID, SmoothColorStyle$lambda);
    }
  }
  var com_varabyte_kobweb_silk_style_common_PlaceholderColor$stable;
  var com_varabyte_kobweb_silk_style_vars_animation_TransitionDurationVars$stable;
  function TransitionDurationVars() {
    TransitionDurationVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_ms(0);
    tmp.h37_1 = StyleVariable_1(tmp0_defaultFallback, 'silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_ms(50);
    tmp_0.i37_1 = StyleVariable_1(tmp0_defaultFallback_0, 'silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = get_ms(100);
    tmp_1.j37_1 = StyleVariable_1(tmp0_defaultFallback_1, 'silk');
    var tmp_2 = this;
    var tmp0_defaultFallback_2 = get_ms(150);
    tmp_2.k37_1 = StyleVariable_1(tmp0_defaultFallback_2, 'silk');
    var tmp_3 = this;
    var tmp0_defaultFallback_3 = get_ms(200);
    tmp_3.l37_1 = StyleVariable_1(tmp0_defaultFallback_3, 'silk');
    var tmp_4 = this;
    var tmp0_defaultFallback_4 = get_ms(300);
    tmp_4.m37_1 = StyleVariable_1(tmp0_defaultFallback_4, 'silk');
    var tmp_5 = this;
    var tmp0_defaultFallback_5 = get_ms(400);
    tmp_5.n37_1 = StyleVariable_1(tmp0_defaultFallback_5, 'silk');
    var tmp_6 = this;
    var tmp0_defaultFallback_6 = get_ms(500);
    tmp_6.o37_1 = StyleVariable_1(tmp0_defaultFallback_6, 'silk');
  }
  protoOf(TransitionDurationVars).s3a = function () {
    return this.j37_1.h2n(this, VeryFast$factory());
  };
  protoOf(TransitionDurationVars).y3c = function () {
    return this.k37_1.h2n(this, Fast$factory());
  };
  protoOf(TransitionDurationVars).z2j = function () {
    return this.l37_1.h2n(this, Normal$factory());
  };
  var TransitionDurationVars_instance;
  function TransitionDurationVars_getInstance() {
    if (TransitionDurationVars_instance == null)
      new TransitionDurationVars();
    return TransitionDurationVars_instance;
  }
  function VeryFast$factory() {
    return getPropertyCallableRef('VeryFast', 1, KProperty1, function (receiver) {
      return receiver.s3a();
    }, null);
  }
  function Fast$factory() {
    return getPropertyCallableRef('Fast', 1, KProperty1, function (receiver) {
      return receiver.y3c();
    }, null);
  }
  function Normal$factory() {
    return getPropertyCallableRef('Normal', 1, KProperty1, function (receiver) {
      return receiver.z2j();
    }, null);
  }
  function get_BackgroundColorVar() {
    _init_properties_ColorVars_kt__w8x7ib();
    return BackgroundColorVar$delegate.h2n(null, BackgroundColorVar$factory());
  }
  var BackgroundColorVar$delegate;
  function get_ColorVar() {
    _init_properties_ColorVars_kt__w8x7ib();
    return ColorVar$delegate.h2n(null, ColorVar$factory());
  }
  var ColorVar$delegate;
  function get_BorderColorVar() {
    _init_properties_ColorVars_kt__w8x7ib();
    return BorderColorVar$delegate.h2n(null, BorderColorVar$factory());
  }
  var BorderColorVar$delegate;
  function get_FocusOutlineColorVar() {
    _init_properties_ColorVars_kt__w8x7ib();
    return FocusOutlineColorVar$delegate.h2n(null, FocusOutlineColorVar$factory());
  }
  var FocusOutlineColorVar$delegate;
  function get_PlaceholderOpacityVar() {
    _init_properties_ColorVars_kt__w8x7ib();
    return PlaceholderOpacityVar$delegate.h2n(null, PlaceholderOpacityVar$factory());
  }
  var PlaceholderOpacityVar$delegate;
  function get_PlaceholderColorVar() {
    _init_properties_ColorVars_kt__w8x7ib();
    return PlaceholderColorVar$delegate.h2n(null, PlaceholderColorVar$factory());
  }
  var PlaceholderColorVar$delegate;
  function BackgroundColorVar$factory() {
    return getPropertyCallableRef('BackgroundColorVar', 0, KProperty0, function () {
      return get_BackgroundColorVar();
    }, null);
  }
  function ColorVar$factory() {
    return getPropertyCallableRef('ColorVar', 0, KProperty0, function () {
      return get_ColorVar();
    }, null);
  }
  function BorderColorVar$factory() {
    return getPropertyCallableRef('BorderColorVar', 0, KProperty0, function () {
      return get_BorderColorVar();
    }, null);
  }
  function FocusOutlineColorVar$factory() {
    return getPropertyCallableRef('FocusOutlineColorVar', 0, KProperty0, function () {
      return get_FocusOutlineColorVar();
    }, null);
  }
  function PlaceholderOpacityVar$factory() {
    return getPropertyCallableRef('PlaceholderOpacityVar', 0, KProperty0, function () {
      return get_PlaceholderOpacityVar();
    }, null);
  }
  function PlaceholderColorVar$factory() {
    return getPropertyCallableRef('PlaceholderColorVar', 0, KProperty0, function () {
      return get_PlaceholderColorVar();
    }, null);
  }
  var properties_initialized_ColorVars_kt_3y5hvl;
  function _init_properties_ColorVars_kt__w8x7ib() {
    if (!properties_initialized_ColorVars_kt_3y5hvl) {
      properties_initialized_ColorVars_kt_3y5hvl = true;
      BackgroundColorVar$delegate = StyleVariable('silk');
      ColorVar$delegate = StyleVariable('silk');
      BorderColorVar$delegate = StyleVariable('silk');
      FocusOutlineColorVar$delegate = StyleVariable('silk');
      PlaceholderOpacityVar$delegate = StyleVariable_2(1.0, 'silk');
      PlaceholderColorVar$delegate = StyleVariable('silk');
    }
  }
  var com_varabyte_kobweb_silk_style_vars_size_BorderRadiusVars$stable;
  var com_varabyte_kobweb_silk_style_vars_size_FontSizeVars$stable;
  function FontSizeVars() {
    FontSizeVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_cssRem(0.75);
    tmp.w39_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_cssRem(0.875);
    tmp_0.x39_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = get_cssRem(1);
    tmp_1.y39_1 = StyleVariable_0(tmp0_defaultFallback_1, 'silk');
    var tmp_2 = this;
    var tmp0_defaultFallback_2 = get_cssRem(1.125);
    tmp_2.z39_1 = StyleVariable_0(tmp0_defaultFallback_2, 'silk');
  }
  protoOf(FontSizeVars).a3a = function () {
    return this.w39_1.h2n(this, XS$factory());
  };
  protoOf(FontSizeVars).b3a = function () {
    return this.x39_1.h2n(this, SM$factory());
  };
  protoOf(FontSizeVars).c3a = function () {
    return this.y39_1.h2n(this, MD$factory());
  };
  protoOf(FontSizeVars).d3a = function () {
    return this.z39_1.h2n(this, LG$factory());
  };
  var FontSizeVars_instance;
  function FontSizeVars_getInstance() {
    if (FontSizeVars_instance == null)
      new FontSizeVars();
    return FontSizeVars_instance;
  }
  function BorderRadiusVars() {
    BorderRadiusVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_cssRem(0.125);
    tmp.l3c_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_cssRem(0.25);
    tmp_0.m3c_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = get_cssRem(0.375);
    tmp_1.n3c_1 = StyleVariable_0(tmp0_defaultFallback_1, 'silk');
    var tmp_2 = this;
    var tmp0_defaultFallback_2 = get_cssRem(0.5);
    tmp_2.o3c_1 = StyleVariable_0(tmp0_defaultFallback_2, 'silk');
  }
  protoOf(BorderRadiusVars).a3a = function () {
    return this.l3c_1.h2n(this, XS$factory_0());
  };
  protoOf(BorderRadiusVars).b3a = function () {
    return this.m3c_1.h2n(this, SM$factory_0());
  };
  protoOf(BorderRadiusVars).c3a = function () {
    return this.n3c_1.h2n(this, MD$factory_0());
  };
  var BorderRadiusVars_instance;
  function BorderRadiusVars_getInstance() {
    if (BorderRadiusVars_instance == null)
      new BorderRadiusVars();
    return BorderRadiusVars_instance;
  }
  function XS$factory() {
    return getPropertyCallableRef('XS', 1, KProperty1, function (receiver) {
      return receiver.a3a();
    }, null);
  }
  function SM$factory() {
    return getPropertyCallableRef('SM', 1, KProperty1, function (receiver) {
      return receiver.b3a();
    }, null);
  }
  function MD$factory() {
    return getPropertyCallableRef('MD', 1, KProperty1, function (receiver) {
      return receiver.c3a();
    }, null);
  }
  function LG$factory() {
    return getPropertyCallableRef('LG', 1, KProperty1, function (receiver) {
      return receiver.d3a();
    }, null);
  }
  function XS$factory_0() {
    return getPropertyCallableRef('XS', 1, KProperty1, function (receiver) {
      return receiver.a3a();
    }, null);
  }
  function SM$factory_0() {
    return getPropertyCallableRef('SM', 1, KProperty1, function (receiver) {
      return receiver.b3a();
    }, null);
  }
  function MD$factory_0() {
    return getPropertyCallableRef('MD', 1, KProperty1, function (receiver) {
      return receiver.c3a();
    }, null);
  }
  var com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableButton$stable;
  var com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableCallout$stable;
  var com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableCheckbox$stable;
  var com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableInput$stable;
  var com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableSwitch$stable;
  var com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableTab$stable;
  var com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableTooltip$stable;
  var com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups$stable;
  function MutableButton(palette) {
    ColorGroup.call(this, palette, 'button');
    this.h3f_1 = this.n36();
    this.i3f_1 = this.n36();
    this.j3f_1 = this.n36();
    this.k3f_1 = this.n36();
  }
  protoOf(MutableButton).q3h = function (_set____db54di) {
    return this.h3f_1.k36(this, default$factory(), _set____db54di);
  };
  protoOf(MutableButton).f3h = function () {
    return this.h3f_1.h2n(this, default$factory_0());
  };
  protoOf(MutableButton).r3h = function (_set____db54di) {
    return this.i3f_1.k36(this, hover$factory(), _set____db54di);
  };
  protoOf(MutableButton).o2f = function () {
    return this.i3f_1.h2n(this, hover$factory_0());
  };
  protoOf(MutableButton).s3h = function (_set____db54di) {
    return this.j3f_1.k36(this, focus$factory(), _set____db54di);
  };
  protoOf(MutableButton).t3h = function () {
    return this.j3f_1.h2n(this, focus$factory_0());
  };
  protoOf(MutableButton).u3h = function (_set____db54di) {
    return this.k3f_1.k36(this, pressed$factory(), _set____db54di);
  };
  protoOf(MutableButton).g3h = function () {
    return this.k3f_1.h2n(this, pressed$factory_0());
  };
  protoOf(MutableButton).l3f = function (default_0, hover, focus, pressed) {
    this.q3h(default_0);
    this.r3h(hover);
    this.s3h(focus);
    this.u3h(pressed);
  };
  function MutableCallout(palette) {
    ColorGroup.call(this, palette, 'callout');
    this.o3f_1 = this.n36();
    this.p3f_1 = this.n36();
    this.q3f_1 = this.n36();
    this.r3f_1 = this.n36();
    this.s3f_1 = this.n36();
    this.t3f_1 = this.n36();
    this.u3f_1 = this.n36();
  }
  protoOf(MutableCallout).v3h = function (_set____db54di) {
    return this.o3f_1.k36(this, caution$factory(), _set____db54di);
  };
  protoOf(MutableCallout).d38 = function () {
    return this.o3f_1.h2n(this, caution$factory_0());
  };
  protoOf(MutableCallout).w3h = function (_set____db54di) {
    return this.p3f_1.k36(this, important$factory(), _set____db54di);
  };
  protoOf(MutableCallout).e38 = function () {
    return this.p3f_1.h2n(this, important$factory_0());
  };
  protoOf(MutableCallout).x3h = function (_set____db54di) {
    return this.q3f_1.k36(this, note$factory(), _set____db54di);
  };
  protoOf(MutableCallout).f38 = function () {
    return this.q3f_1.h2n(this, note$factory_0());
  };
  protoOf(MutableCallout).y3h = function (_set____db54di) {
    return this.r3f_1.k36(this, question$factory(), _set____db54di);
  };
  protoOf(MutableCallout).g38 = function () {
    return this.r3f_1.h2n(this, question$factory_0());
  };
  protoOf(MutableCallout).z3h = function (_set____db54di) {
    return this.s3f_1.k36(this, quote$factory(), _set____db54di);
  };
  protoOf(MutableCallout).h38 = function () {
    return this.s3f_1.h2n(this, quote$factory_0());
  };
  protoOf(MutableCallout).a3i = function (_set____db54di) {
    return this.t3f_1.k36(this, tip$factory(), _set____db54di);
  };
  protoOf(MutableCallout).i38 = function () {
    return this.t3f_1.h2n(this, tip$factory_0());
  };
  protoOf(MutableCallout).b3i = function (_set____db54di) {
    return this.u3f_1.k36(this, warning$factory(), _set____db54di);
  };
  protoOf(MutableCallout).j38 = function () {
    return this.u3f_1.h2n(this, warning$factory_0());
  };
  protoOf(MutableCallout).v3f = function (caution, important, note, question, quote, tip, warning) {
    this.v3h(caution);
    this.w3h(important);
    this.x3h(note);
    this.y3h(question);
    this.z3h(quote);
    this.a3i(tip);
    this.b3i(warning);
  };
  function MutableCheckbox(palette) {
    ColorGroup.call(this, palette, 'checkbox');
    this.y3f_1 = this.n36();
    this.z3f_1 = this.n36();
    this.a3g_1 = this.n36();
  }
  protoOf(MutableCheckbox).c3i = function (_set____db54di) {
    return this.y3f_1.k36(this, background$factory(), _set____db54di);
  };
  protoOf(MutableCheckbox).h3h = function () {
    return this.y3f_1.h2n(this, background$factory_0());
  };
  protoOf(MutableCheckbox).r3h = function (_set____db54di) {
    return this.z3f_1.k36(this, hover$factory_1(), _set____db54di);
  };
  protoOf(MutableCheckbox).o2f = function () {
    return this.z3f_1.h2n(this, hover$factory_2());
  };
  protoOf(MutableCheckbox).d3i = function (_set____db54di) {
    return this.a3g_1.k36(this, color$factory(), _set____db54di);
  };
  protoOf(MutableCheckbox).i3h = function () {
    return this.a3g_1.h2n(this, color$factory_0());
  };
  protoOf(MutableCheckbox).b3g = function (background, hover, color) {
    this.c3i(background);
    this.r3h(hover);
    this.d3i(color);
  };
  function MutableInput(palette) {
    ColorGroup.call(this, palette, 'input');
    this.e3g_1 = this.n36();
    this.f3g_1 = this.n36();
    this.g3g_1 = this.n36();
    this.h3g_1 = this.n36();
    this.i3g_1 = this.n36();
  }
  protoOf(MutableInput).e3i = function (_set____db54di) {
    return this.e3g_1.k36(this, hoveredBorder$factory(), _set____db54di);
  };
  protoOf(MutableInput).j3h = function () {
    return this.e3g_1.h2n(this, hoveredBorder$factory_0());
  };
  protoOf(MutableInput).f3i = function (_set____db54di) {
    return this.f3g_1.k36(this, invalidBorder$factory(), _set____db54di);
  };
  protoOf(MutableInput).k3h = function () {
    return this.f3g_1.h2n(this, invalidBorder$factory_0());
  };
  protoOf(MutableInput).g3i = function (_set____db54di) {
    return this.g3g_1.k36(this, filled$factory(), _set____db54di);
  };
  protoOf(MutableInput).l3h = function () {
    return this.g3g_1.h2n(this, filled$factory_0());
  };
  protoOf(MutableInput).h3i = function (_set____db54di) {
    return this.h3g_1.k36(this, filledHover$factory(), _set____db54di);
  };
  protoOf(MutableInput).m3h = function () {
    return this.h3g_1.h2n(this, filledHover$factory_0());
  };
  protoOf(MutableInput).i3i = function (_set____db54di) {
    return this.i3g_1.k36(this, filledFocus$factory(), _set____db54di);
  };
  protoOf(MutableInput).n3h = function () {
    return this.i3g_1.h2n(this, filledFocus$factory_0());
  };
  protoOf(MutableInput).j3g = function (hoveredBorder, invalidBorder, filled, filledHover, filledFocus) {
    this.e3i(hoveredBorder);
    this.f3i(invalidBorder);
    this.g3i(filled);
    this.h3i(filledHover);
    this.i3i(filledFocus);
  };
  function MutableSwitch(palette) {
    ColorGroup.call(this, palette, 'switch');
    this.m3g_1 = this.n36();
    this.n3g_1 = this.n36();
    this.o3g_1 = this.n36();
  }
  protoOf(MutableSwitch).j3i = function (_set____db54di) {
    return this.m3g_1.k36(this, backgroundOn$factory(), _set____db54di);
  };
  protoOf(MutableSwitch).k3i = function () {
    return this.m3g_1.h2n(this, backgroundOn$factory_0());
  };
  protoOf(MutableSwitch).l3i = function (_set____db54di) {
    return this.n3g_1.k36(this, backgroundOff$factory(), _set____db54di);
  };
  protoOf(MutableSwitch).m3i = function () {
    return this.n3g_1.h2n(this, backgroundOff$factory_0());
  };
  protoOf(MutableSwitch).n3i = function (_set____db54di) {
    return this.o3g_1.k36(this, thumb$factory(), _set____db54di);
  };
  protoOf(MutableSwitch).o3h = function () {
    return this.o3g_1.h2n(this, thumb$factory_0());
  };
  protoOf(MutableSwitch).b3g = function (backgroundOn, backgroundOff, thumb) {
    this.j3i(backgroundOn);
    this.l3i(backgroundOff);
    this.n3i(thumb);
  };
  function MutableTab(palette) {
    ColorGroup.call(this, palette, 'tab');
    this.r3g_1 = this.n36();
    this.s3g_1 = this.n36();
    this.t3g_1 = this.n36();
    this.u3g_1 = this.n36();
    this.v3g_1 = this.n36();
    this.w3g_1 = this.n36();
    this.x3g_1 = this.n36();
    this.y3g_1 = this.n36();
  }
  protoOf(MutableTab).d3i = function (_set____db54di) {
    return this.r3g_1.k36(this, color$factory_1(), _set____db54di);
  };
  protoOf(MutableTab).i3h = function () {
    return this.r3g_1.h2n(this, color$factory_2());
  };
  protoOf(MutableTab).c3i = function (_set____db54di) {
    return this.s3g_1.k36(this, background$factory_1(), _set____db54di);
  };
  protoOf(MutableTab).h3h = function () {
    return this.s3g_1.h2n(this, background$factory_2());
  };
  protoOf(MutableTab).o3i = function (_set____db54di) {
    return this.t3g_1.k36(this, selectedColor$factory(), _set____db54di);
  };
  protoOf(MutableTab).p3i = function () {
    return this.t3g_1.h2n(this, selectedColor$factory_0());
  };
  protoOf(MutableTab).q3i = function (_set____db54di) {
    return this.u3g_1.k36(this, selectedBackground$factory(), _set____db54di);
  };
  protoOf(MutableTab).r3i = function () {
    return this.u3g_1.h2n(this, selectedBackground$factory_0());
  };
  protoOf(MutableTab).s3i = function (_set____db54di) {
    return this.v3g_1.k36(this, selectedBorder$factory(), _set____db54di);
  };
  protoOf(MutableTab).t3i = function () {
    return this.v3g_1.h2n(this, selectedBorder$factory_0());
  };
  protoOf(MutableTab).r3h = function (_set____db54di) {
    return this.w3g_1.k36(this, hover$factory_3(), _set____db54di);
  };
  protoOf(MutableTab).o2f = function () {
    return this.w3g_1.h2n(this, hover$factory_4());
  };
  protoOf(MutableTab).u3h = function (_set____db54di) {
    return this.x3g_1.k36(this, pressed$factory_1(), _set____db54di);
  };
  protoOf(MutableTab).g3h = function () {
    return this.x3g_1.h2n(this, pressed$factory_2());
  };
  protoOf(MutableTab).u3i = function (_set____db54di) {
    return this.y3g_1.k36(this, disabled$factory(), _set____db54di);
  };
  protoOf(MutableTab).p3h = function () {
    return this.y3g_1.h2n(this, disabled$factory_0());
  };
  protoOf(MutableTab).v3i = function (color, background, selectedColor, selectedBackground, selectedBorder, hover, pressed, disabled) {
    this.d3i(color);
    this.c3i(background);
    this.o3i(selectedColor);
    this.q3i(selectedBackground);
    this.s3i(selectedBorder);
    this.r3h(hover);
    this.u3h(pressed);
    this.u3i(disabled);
  };
  protoOf(MutableTab).z3g = function (color, background, selectedColor, selectedBackground, selectedBorder, hover, pressed, disabled, $super) {
    selectedBackground = selectedBackground === VOID ? background : selectedBackground;
    selectedBorder = selectedBorder === VOID ? selectedColor : selectedBorder;
    var tmp;
    if ($super === VOID) {
      this.v3i(color, background, selectedColor, selectedBackground, selectedBorder, hover, pressed, disabled);
      tmp = Unit_instance;
    } else {
      tmp = $super.v3i.call(this, color, background, selectedColor, selectedBackground, selectedBorder, hover, pressed, disabled);
    }
    return tmp;
  };
  function MutableTooltip(palette) {
    ColorGroup.call(this, palette, 'tooltip');
    this.c3h_1 = this.n36();
    this.d3h_1 = this.n36();
  }
  protoOf(MutableTooltip).c3i = function (_set____db54di) {
    return this.c3h_1.k36(this, background$factory_3(), _set____db54di);
  };
  protoOf(MutableTooltip).h3h = function () {
    return this.c3h_1.h2n(this, background$factory_4());
  };
  protoOf(MutableTooltip).d3i = function (_set____db54di) {
    return this.d3h_1.k36(this, color$factory_3(), _set____db54di);
  };
  protoOf(MutableTooltip).i3h = function () {
    return this.d3h_1.h2n(this, color$factory_4());
  };
  protoOf(MutableTooltip).e3h = function (background, color) {
    this.c3i(background);
    this.d3i(color);
  };
  function get_tooltip(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return get_tooltip_0(_this__u8e3s4 instanceof MutablePalette ? _this__u8e3s4 : THROW_CCE());
  }
  function get_tab(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return get_tab_0(_this__u8e3s4 instanceof MutablePalette ? _this__u8e3s4 : THROW_CCE());
  }
  function get_switch(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return get_switch_0(_this__u8e3s4 instanceof MutablePalette ? _this__u8e3s4 : THROW_CCE());
  }
  function get_overlay(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return _this__u8e3s4.g36('overlay');
  }
  function get_input(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return get_input_0(_this__u8e3s4 instanceof MutablePalette ? _this__u8e3s4 : THROW_CCE());
  }
  function get_checkbox(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return get_checkbox_0(_this__u8e3s4 instanceof MutablePalette ? _this__u8e3s4 : THROW_CCE());
  }
  function get_button(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return get_button_0(_this__u8e3s4 instanceof MutablePalette ? _this__u8e3s4 : THROW_CCE());
  }
  function get_placeholder_0(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return _this__u8e3s4.g36('placeholder');
  }
  function get_focusOutline(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return _this__u8e3s4.g36('focusOutline');
  }
  function get_border(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return _this__u8e3s4.g36('border');
  }
  function get_color(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return _this__u8e3s4.g36('color');
  }
  function get_background(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return _this__u8e3s4.g36('background');
  }
  function get_tooltip_0(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return new MutableTooltip(_this__u8e3s4);
  }
  function get_tab_0(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return new MutableTab(_this__u8e3s4);
  }
  function get_switch_0(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return new MutableSwitch(_this__u8e3s4);
  }
  function get_input_0(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return new MutableInput(_this__u8e3s4);
  }
  function get_checkbox_0(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return new MutableCheckbox(_this__u8e3s4);
  }
  function get_button_0(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return new MutableButton(_this__u8e3s4);
  }
  function set_background(_this__u8e3s4, value) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    _this__u8e3s4.o36('background', value);
  }
  function get_background_0(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return _this__u8e3s4.g36('background');
  }
  function set_color(_this__u8e3s4, value) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    _this__u8e3s4.o36('color', value);
  }
  function get_color_0(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return _this__u8e3s4.g36('color');
  }
  function set_border(_this__u8e3s4, value) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    _this__u8e3s4.o36('border', value);
  }
  function set_focusOutline(_this__u8e3s4, value) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    _this__u8e3s4.o36('focusOutline', value);
  }
  function set_overlay(_this__u8e3s4, value) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    _this__u8e3s4.o36('overlay', value);
  }
  function set_placeholder(_this__u8e3s4, value) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    _this__u8e3s4.o36('placeholder', value);
  }
  function get_callout(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return new MutableCallout(_this__u8e3s4);
  }
  function get_callout_0(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return get_callout(_this__u8e3s4 instanceof MutablePalette ? _this__u8e3s4 : THROW_CCE());
  }
  function default$factory() {
    return getPropertyCallableRef('default', 1, KMutableProperty1, function (receiver) {
      return receiver.f3h();
    }, function (receiver, value) {
      return receiver.q3h(value);
    });
  }
  function default$factory_0() {
    return getPropertyCallableRef('default', 1, KMutableProperty1, function (receiver) {
      return receiver.f3h();
    }, function (receiver, value) {
      return receiver.q3h(value);
    });
  }
  function hover$factory() {
    return getPropertyCallableRef('hover', 1, KMutableProperty1, function (receiver) {
      return receiver.o2f();
    }, function (receiver, value) {
      return receiver.r3h(value);
    });
  }
  function hover$factory_0() {
    return getPropertyCallableRef('hover', 1, KMutableProperty1, function (receiver) {
      return receiver.o2f();
    }, function (receiver, value) {
      return receiver.r3h(value);
    });
  }
  function focus$factory() {
    return getPropertyCallableRef('focus', 1, KMutableProperty1, function (receiver) {
      return receiver.t3h();
    }, function (receiver, value) {
      return receiver.s3h(value);
    });
  }
  function focus$factory_0() {
    return getPropertyCallableRef('focus', 1, KMutableProperty1, function (receiver) {
      return receiver.t3h();
    }, function (receiver, value) {
      return receiver.s3h(value);
    });
  }
  function pressed$factory() {
    return getPropertyCallableRef('pressed', 1, KMutableProperty1, function (receiver) {
      return receiver.g3h();
    }, function (receiver, value) {
      return receiver.u3h(value);
    });
  }
  function pressed$factory_0() {
    return getPropertyCallableRef('pressed', 1, KMutableProperty1, function (receiver) {
      return receiver.g3h();
    }, function (receiver, value) {
      return receiver.u3h(value);
    });
  }
  function caution$factory() {
    return getPropertyCallableRef('caution', 1, KMutableProperty1, function (receiver) {
      return receiver.d38();
    }, function (receiver, value) {
      return receiver.v3h(value);
    });
  }
  function caution$factory_0() {
    return getPropertyCallableRef('caution', 1, KMutableProperty1, function (receiver) {
      return receiver.d38();
    }, function (receiver, value) {
      return receiver.v3h(value);
    });
  }
  function important$factory() {
    return getPropertyCallableRef('important', 1, KMutableProperty1, function (receiver) {
      return receiver.e38();
    }, function (receiver, value) {
      return receiver.w3h(value);
    });
  }
  function important$factory_0() {
    return getPropertyCallableRef('important', 1, KMutableProperty1, function (receiver) {
      return receiver.e38();
    }, function (receiver, value) {
      return receiver.w3h(value);
    });
  }
  function note$factory() {
    return getPropertyCallableRef('note', 1, KMutableProperty1, function (receiver) {
      return receiver.f38();
    }, function (receiver, value) {
      return receiver.x3h(value);
    });
  }
  function note$factory_0() {
    return getPropertyCallableRef('note', 1, KMutableProperty1, function (receiver) {
      return receiver.f38();
    }, function (receiver, value) {
      return receiver.x3h(value);
    });
  }
  function question$factory() {
    return getPropertyCallableRef('question', 1, KMutableProperty1, function (receiver) {
      return receiver.g38();
    }, function (receiver, value) {
      return receiver.y3h(value);
    });
  }
  function question$factory_0() {
    return getPropertyCallableRef('question', 1, KMutableProperty1, function (receiver) {
      return receiver.g38();
    }, function (receiver, value) {
      return receiver.y3h(value);
    });
  }
  function quote$factory() {
    return getPropertyCallableRef('quote', 1, KMutableProperty1, function (receiver) {
      return receiver.h38();
    }, function (receiver, value) {
      return receiver.z3h(value);
    });
  }
  function quote$factory_0() {
    return getPropertyCallableRef('quote', 1, KMutableProperty1, function (receiver) {
      return receiver.h38();
    }, function (receiver, value) {
      return receiver.z3h(value);
    });
  }
  function tip$factory() {
    return getPropertyCallableRef('tip', 1, KMutableProperty1, function (receiver) {
      return receiver.i38();
    }, function (receiver, value) {
      return receiver.a3i(value);
    });
  }
  function tip$factory_0() {
    return getPropertyCallableRef('tip', 1, KMutableProperty1, function (receiver) {
      return receiver.i38();
    }, function (receiver, value) {
      return receiver.a3i(value);
    });
  }
  function warning$factory() {
    return getPropertyCallableRef('warning', 1, KMutableProperty1, function (receiver) {
      return receiver.j38();
    }, function (receiver, value) {
      return receiver.b3i(value);
    });
  }
  function warning$factory_0() {
    return getPropertyCallableRef('warning', 1, KMutableProperty1, function (receiver) {
      return receiver.j38();
    }, function (receiver, value) {
      return receiver.b3i(value);
    });
  }
  function background$factory() {
    return getPropertyCallableRef('background', 1, KMutableProperty1, function (receiver) {
      return receiver.h3h();
    }, function (receiver, value) {
      return receiver.c3i(value);
    });
  }
  function background$factory_0() {
    return getPropertyCallableRef('background', 1, KMutableProperty1, function (receiver) {
      return receiver.h3h();
    }, function (receiver, value) {
      return receiver.c3i(value);
    });
  }
  function hover$factory_1() {
    return getPropertyCallableRef('hover', 1, KMutableProperty1, function (receiver) {
      return receiver.o2f();
    }, function (receiver, value) {
      return receiver.r3h(value);
    });
  }
  function hover$factory_2() {
    return getPropertyCallableRef('hover', 1, KMutableProperty1, function (receiver) {
      return receiver.o2f();
    }, function (receiver, value) {
      return receiver.r3h(value);
    });
  }
  function color$factory() {
    return getPropertyCallableRef('color', 1, KMutableProperty1, function (receiver) {
      return receiver.i3h();
    }, function (receiver, value) {
      return receiver.d3i(value);
    });
  }
  function color$factory_0() {
    return getPropertyCallableRef('color', 1, KMutableProperty1, function (receiver) {
      return receiver.i3h();
    }, function (receiver, value) {
      return receiver.d3i(value);
    });
  }
  function hoveredBorder$factory() {
    return getPropertyCallableRef('hoveredBorder', 1, KMutableProperty1, function (receiver) {
      return receiver.j3h();
    }, function (receiver, value) {
      return receiver.e3i(value);
    });
  }
  function hoveredBorder$factory_0() {
    return getPropertyCallableRef('hoveredBorder', 1, KMutableProperty1, function (receiver) {
      return receiver.j3h();
    }, function (receiver, value) {
      return receiver.e3i(value);
    });
  }
  function invalidBorder$factory() {
    return getPropertyCallableRef('invalidBorder', 1, KMutableProperty1, function (receiver) {
      return receiver.k3h();
    }, function (receiver, value) {
      return receiver.f3i(value);
    });
  }
  function invalidBorder$factory_0() {
    return getPropertyCallableRef('invalidBorder', 1, KMutableProperty1, function (receiver) {
      return receiver.k3h();
    }, function (receiver, value) {
      return receiver.f3i(value);
    });
  }
  function filled$factory() {
    return getPropertyCallableRef('filled', 1, KMutableProperty1, function (receiver) {
      return receiver.l3h();
    }, function (receiver, value) {
      return receiver.g3i(value);
    });
  }
  function filled$factory_0() {
    return getPropertyCallableRef('filled', 1, KMutableProperty1, function (receiver) {
      return receiver.l3h();
    }, function (receiver, value) {
      return receiver.g3i(value);
    });
  }
  function filledHover$factory() {
    return getPropertyCallableRef('filledHover', 1, KMutableProperty1, function (receiver) {
      return receiver.m3h();
    }, function (receiver, value) {
      return receiver.h3i(value);
    });
  }
  function filledHover$factory_0() {
    return getPropertyCallableRef('filledHover', 1, KMutableProperty1, function (receiver) {
      return receiver.m3h();
    }, function (receiver, value) {
      return receiver.h3i(value);
    });
  }
  function filledFocus$factory() {
    return getPropertyCallableRef('filledFocus', 1, KMutableProperty1, function (receiver) {
      return receiver.n3h();
    }, function (receiver, value) {
      return receiver.i3i(value);
    });
  }
  function filledFocus$factory_0() {
    return getPropertyCallableRef('filledFocus', 1, KMutableProperty1, function (receiver) {
      return receiver.n3h();
    }, function (receiver, value) {
      return receiver.i3i(value);
    });
  }
  function backgroundOn$factory() {
    return getPropertyCallableRef('backgroundOn', 1, KMutableProperty1, function (receiver) {
      return receiver.k3i();
    }, function (receiver, value) {
      return receiver.j3i(value);
    });
  }
  function backgroundOn$factory_0() {
    return getPropertyCallableRef('backgroundOn', 1, KMutableProperty1, function (receiver) {
      return receiver.k3i();
    }, function (receiver, value) {
      return receiver.j3i(value);
    });
  }
  function backgroundOff$factory() {
    return getPropertyCallableRef('backgroundOff', 1, KMutableProperty1, function (receiver) {
      return receiver.m3i();
    }, function (receiver, value) {
      return receiver.l3i(value);
    });
  }
  function backgroundOff$factory_0() {
    return getPropertyCallableRef('backgroundOff', 1, KMutableProperty1, function (receiver) {
      return receiver.m3i();
    }, function (receiver, value) {
      return receiver.l3i(value);
    });
  }
  function thumb$factory() {
    return getPropertyCallableRef('thumb', 1, KMutableProperty1, function (receiver) {
      return receiver.o3h();
    }, function (receiver, value) {
      return receiver.n3i(value);
    });
  }
  function thumb$factory_0() {
    return getPropertyCallableRef('thumb', 1, KMutableProperty1, function (receiver) {
      return receiver.o3h();
    }, function (receiver, value) {
      return receiver.n3i(value);
    });
  }
  function color$factory_1() {
    return getPropertyCallableRef('color', 1, KMutableProperty1, function (receiver) {
      return receiver.i3h();
    }, function (receiver, value) {
      return receiver.d3i(value);
    });
  }
  function color$factory_2() {
    return getPropertyCallableRef('color', 1, KMutableProperty1, function (receiver) {
      return receiver.i3h();
    }, function (receiver, value) {
      return receiver.d3i(value);
    });
  }
  function background$factory_1() {
    return getPropertyCallableRef('background', 1, KMutableProperty1, function (receiver) {
      return receiver.h3h();
    }, function (receiver, value) {
      return receiver.c3i(value);
    });
  }
  function background$factory_2() {
    return getPropertyCallableRef('background', 1, KMutableProperty1, function (receiver) {
      return receiver.h3h();
    }, function (receiver, value) {
      return receiver.c3i(value);
    });
  }
  function selectedColor$factory() {
    return getPropertyCallableRef('selectedColor', 1, KMutableProperty1, function (receiver) {
      return receiver.p3i();
    }, function (receiver, value) {
      return receiver.o3i(value);
    });
  }
  function selectedColor$factory_0() {
    return getPropertyCallableRef('selectedColor', 1, KMutableProperty1, function (receiver) {
      return receiver.p3i();
    }, function (receiver, value) {
      return receiver.o3i(value);
    });
  }
  function selectedBackground$factory() {
    return getPropertyCallableRef('selectedBackground', 1, KMutableProperty1, function (receiver) {
      return receiver.r3i();
    }, function (receiver, value) {
      return receiver.q3i(value);
    });
  }
  function selectedBackground$factory_0() {
    return getPropertyCallableRef('selectedBackground', 1, KMutableProperty1, function (receiver) {
      return receiver.r3i();
    }, function (receiver, value) {
      return receiver.q3i(value);
    });
  }
  function selectedBorder$factory() {
    return getPropertyCallableRef('selectedBorder', 1, KMutableProperty1, function (receiver) {
      return receiver.t3i();
    }, function (receiver, value) {
      return receiver.s3i(value);
    });
  }
  function selectedBorder$factory_0() {
    return getPropertyCallableRef('selectedBorder', 1, KMutableProperty1, function (receiver) {
      return receiver.t3i();
    }, function (receiver, value) {
      return receiver.s3i(value);
    });
  }
  function hover$factory_3() {
    return getPropertyCallableRef('hover', 1, KMutableProperty1, function (receiver) {
      return receiver.o2f();
    }, function (receiver, value) {
      return receiver.r3h(value);
    });
  }
  function hover$factory_4() {
    return getPropertyCallableRef('hover', 1, KMutableProperty1, function (receiver) {
      return receiver.o2f();
    }, function (receiver, value) {
      return receiver.r3h(value);
    });
  }
  function pressed$factory_1() {
    return getPropertyCallableRef('pressed', 1, KMutableProperty1, function (receiver) {
      return receiver.g3h();
    }, function (receiver, value) {
      return receiver.u3h(value);
    });
  }
  function pressed$factory_2() {
    return getPropertyCallableRef('pressed', 1, KMutableProperty1, function (receiver) {
      return receiver.g3h();
    }, function (receiver, value) {
      return receiver.u3h(value);
    });
  }
  function disabled$factory() {
    return getPropertyCallableRef('disabled', 1, KMutableProperty1, function (receiver) {
      return receiver.p3h();
    }, function (receiver, value) {
      return receiver.u3i(value);
    });
  }
  function disabled$factory_0() {
    return getPropertyCallableRef('disabled', 1, KMutableProperty1, function (receiver) {
      return receiver.p3h();
    }, function (receiver, value) {
      return receiver.u3i(value);
    });
  }
  function background$factory_3() {
    return getPropertyCallableRef('background', 1, KMutableProperty1, function (receiver) {
      return receiver.h3h();
    }, function (receiver, value) {
      return receiver.c3i(value);
    });
  }
  function background$factory_4() {
    return getPropertyCallableRef('background', 1, KMutableProperty1, function (receiver) {
      return receiver.h3h();
    }, function (receiver, value) {
      return receiver.c3i(value);
    });
  }
  function color$factory_3() {
    return getPropertyCallableRef('color', 1, KMutableProperty1, function (receiver) {
      return receiver.i3h();
    }, function (receiver, value) {
      return receiver.d3i(value);
    });
  }
  function color$factory_4() {
    return getPropertyCallableRef('color', 1, KMutableProperty1, function (receiver) {
      return receiver.i3h();
    }, function (receiver, value) {
      return receiver.d3i(value);
    });
  }
  var properties_initialized_SilkWidgetColorGroups_kt_1mdo2;
  function _init_properties_SilkWidgetColorGroups_kt__mh2tbg() {
    if (!properties_initialized_SilkWidgetColorGroups_kt_1mdo2) {
      properties_initialized_SilkWidgetColorGroups_kt_1mdo2 = true;
      com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableButton$stable = com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter();
      com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableCallout$stable = com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter();
      com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableCheckbox$stable = com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter();
      com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableInput$stable = com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter();
      com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableSwitch$stable = com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter();
      com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableTab$stable = com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter();
      com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableTooltip$stable = com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter();
      com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups$stable = 0;
    }
  }
  //region block: init
  com_varabyte_kobweb_silk_components_icons_IconRenderStyle_Fill$stable = 0;
  com_varabyte_kobweb_silk_components_icons_IconRenderStyle_Stroke$stable = 8;
  com_varabyte_kobweb_silk_components_overlay_KeepPopupOpenStrategy$stable = 8;
  com_varabyte_kobweb_silk_components_overlay_ManualKeepPopupOpenStrategy$stable = 0;
  com_varabyte_kobweb_silk_components_overlay_OpenClosePopupStrategy$stable = 8;
  com_varabyte_kobweb_silk_components_overlay_ManualOpenClosePopupStrategy$stable = 0;
  com_varabyte_kobweb_silk_components_overlay_TimedOpenClosePopupStrategy$stable = 8;
  com_varabyte_kobweb_silk_components_overlay_PopoverState_Uninitialized$stable = 0;
  com_varabyte_kobweb_silk_components_overlay_PopoverState_FoundElements$stable = 8;
  com_varabyte_kobweb_silk_components_overlay_PopoverState_Calculating$stable = 8;
  com_varabyte_kobweb_silk_components_overlay_PopoverState_Shown$stable = 8;
  com_varabyte_kobweb_silk_components_overlay_PopoverState_Hiding$stable = 8;
  com_varabyte_kobweb_silk_style_common_PlaceholderColor$stable = 8;
  com_varabyte_kobweb_silk_style_vars_animation_TransitionDurationVars$stable = 8;
  com_varabyte_kobweb_silk_style_vars_size_BorderRadiusVars$stable = 8;
  com_varabyte_kobweb_silk_style_vars_size_FontSizeVars$stable = 8;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = SimpleGrid;
  _.$_$.b = Surface;
  _.$_$.c = numColumns;
  _.$_$.d = get_SilkColorsStyle;
  _.$_$.e = SilkWidgetVariables;
  _.$_$.f = initSilkWidgets;
  _.$_$.g = get_SmoothColorStyle;
  _.$_$.h = get_BorderColorVar;
  _.$_$.i = get_ColorVar;
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-frontend-silk-widgets.js.map
