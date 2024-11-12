(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kobweb-frontend-kobweb-core.js', './kobweb-frontend-silk-foundation.js', './compose-multiplatform-core-compose-runtime-runtime.js', './html-internal-html-core-runtime.js', './kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.js', './kobweb-frontend-silk-widgets.js', './kobweb-frontend-silk-widgets-kobweb.js', './kobweb-frontend-kobweb-silk.js', './html-html-core.js', './kobweb-frontend-kobweb-compose.js', './kobweb-frontend-compose-html-ext.js', './kobweb-frontend-silk-icons-fa.js', './kotlinx-coroutines-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kobweb-frontend-kobweb-core.js'), require('./kobweb-frontend-silk-foundation.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./html-internal-html-core-runtime.js'), require('./kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.js'), require('./kobweb-frontend-silk-widgets.js'), require('./kobweb-frontend-silk-widgets-kobweb.js'), require('./kobweb-frontend-kobweb-silk.js'), require('./html-html-core.js'), require('./kobweb-frontend-kobweb-compose.js'), require('./kobweb-frontend-compose-html-ext.js'), require('./kobweb-frontend-silk-icons-fa.js'), require('./kotlinx-coroutines-core.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'org.example.landingpage:site'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'org.example.landingpage:site'.");
    }
    if (typeof globalThis['kobweb-frontend-kobweb-core'] === 'undefined') {
      throw new Error("Error loading module 'org.example.landingpage:site'. Its dependency 'kobweb-frontend-kobweb-core' was not found. Please, check whether 'kobweb-frontend-kobweb-core' is loaded prior to 'org.example.landingpage:site'.");
    }
    if (typeof globalThis['kobweb-frontend-silk-foundation'] === 'undefined') {
      throw new Error("Error loading module 'org.example.landingpage:site'. Its dependency 'kobweb-frontend-silk-foundation' was not found. Please, check whether 'kobweb-frontend-silk-foundation' is loaded prior to 'org.example.landingpage:site'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'org.example.landingpage:site'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'org.example.landingpage:site'.");
    }
    if (typeof globalThis['html-internal-html-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'org.example.landingpage:site'. Its dependency 'html-internal-html-core-runtime' was not found. Please, check whether 'html-internal-html-core-runtime' is loaded prior to 'org.example.landingpage:site'.");
    }
    if (typeof kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat === 'undefined') {
      throw new Error("Error loading module 'org.example.landingpage:site'. Its dependency 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat' was not found. Please, check whether 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat' is loaded prior to 'org.example.landingpage:site'.");
    }
    if (typeof globalThis['kobweb-frontend-silk-widgets'] === 'undefined') {
      throw new Error("Error loading module 'org.example.landingpage:site'. Its dependency 'kobweb-frontend-silk-widgets' was not found. Please, check whether 'kobweb-frontend-silk-widgets' is loaded prior to 'org.example.landingpage:site'.");
    }
    if (typeof globalThis['kobweb-frontend-silk-widgets-kobweb'] === 'undefined') {
      throw new Error("Error loading module 'org.example.landingpage:site'. Its dependency 'kobweb-frontend-silk-widgets-kobweb' was not found. Please, check whether 'kobweb-frontend-silk-widgets-kobweb' is loaded prior to 'org.example.landingpage:site'.");
    }
    if (typeof globalThis['kobweb-frontend-kobweb-silk'] === 'undefined') {
      throw new Error("Error loading module 'org.example.landingpage:site'. Its dependency 'kobweb-frontend-kobweb-silk' was not found. Please, check whether 'kobweb-frontend-kobweb-silk' is loaded prior to 'org.example.landingpage:site'.");
    }
    if (typeof globalThis['html-html-core'] === 'undefined') {
      throw new Error("Error loading module 'org.example.landingpage:site'. Its dependency 'html-html-core' was not found. Please, check whether 'html-html-core' is loaded prior to 'org.example.landingpage:site'.");
    }
    if (typeof globalThis['kobweb-frontend-kobweb-compose'] === 'undefined') {
      throw new Error("Error loading module 'org.example.landingpage:site'. Its dependency 'kobweb-frontend-kobweb-compose' was not found. Please, check whether 'kobweb-frontend-kobweb-compose' is loaded prior to 'org.example.landingpage:site'.");
    }
    if (typeof globalThis['kobweb-frontend-compose-html-ext'] === 'undefined') {
      throw new Error("Error loading module 'org.example.landingpage:site'. Its dependency 'kobweb-frontend-compose-html-ext' was not found. Please, check whether 'kobweb-frontend-compose-html-ext' is loaded prior to 'org.example.landingpage:site'.");
    }
    if (typeof globalThis['kobweb-frontend-silk-icons-fa'] === 'undefined') {
      throw new Error("Error loading module 'org.example.landingpage:site'. Its dependency 'kobweb-frontend-silk-icons-fa' was not found. Please, check whether 'kobweb-frontend-silk-icons-fa' is loaded prior to 'org.example.landingpage:site'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'org.example.landingpage:site'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'org.example.landingpage:site'.");
    }
    globalThis['org.example.landingpage:site'] = factory(typeof globalThis['org.example.landingpage:site'] === 'undefined' ? {} : globalThis['org.example.landingpage:site'], globalThis['kotlin-kotlin-stdlib'], globalThis['kobweb-frontend-kobweb-core'], globalThis['kobweb-frontend-silk-foundation'], globalThis['compose-multiplatform-core-compose-runtime-runtime'], globalThis['html-internal-html-core-runtime'], kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat, globalThis['kobweb-frontend-silk-widgets'], globalThis['kobweb-frontend-silk-widgets-kobweb'], globalThis['kobweb-frontend-kobweb-silk'], globalThis['html-html-core'], globalThis['kobweb-frontend-kobweb-compose'], globalThis['kobweb-frontend-compose-html-ext'], globalThis['kobweb-frontend-silk-icons-fa'], globalThis['kotlinx-coroutines-core']);
  }
}(function (_, kotlin_kotlin, kotlin_com_varabyte_kobweb_kobweb_core, kotlin_com_varabyte_kobweb_silk_foundation, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_html_internal_html_core_runtime, kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat, kotlin_com_varabyte_kobweb_silk_widgets, kotlin_com_varabyte_kobweb_silk_widgets_kobweb, kotlin_com_varabyte_kobweb_kobweb_silk, kotlin_org_jetbrains_compose_html_html_core, kotlin_com_varabyte_kobweb_kobweb_compose, kotlin_com_varabyte_kobweb_compose_html_ext, kotlin_com_varabyte_kobwebx_silk_icons_fa, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var ensureNotNull = kotlin_kotlin.$_$.l9;
  var Unit_instance = kotlin_kotlin.$_$.d2;
  var get_api = kotlin_com_varabyte_kobweb_kobweb_core.$_$.a;
  var Companion_instance = kotlin_com_varabyte_kobweb_kobweb_core.$_$.k;
  var Router = kotlin_com_varabyte_kobweb_kobweb_core.$_$.e;
  var initKobweb = kotlin_com_varabyte_kobweb_kobweb_core.$_$.b;
  var set_additionalSilkInitialization = kotlin_com_varabyte_kobweb_silk_foundation.$_$.b;
  var removePrefix = kotlin_kotlin.$_$.d8;
  var UpdateHistoryMode_REPLACE_getInstance = kotlin_com_varabyte_kobweb_kobweb_core.$_$.i;
  var AppGlobals_instance = kotlin_com_varabyte_kobweb_kobweb_core.$_$.j;
  var to = kotlin_kotlin.$_$.u9;
  var mapOf = kotlin_kotlin.$_$.y3;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a;
  var renderComposable = kotlin_org_jetbrains_compose_html_internal_html_core_runtime.$_$.c;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a1;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.q;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h1;
  var THROW_CCE = kotlin_kotlin.$_$.e9;
  var DeferringHost = kotlin_com_varabyte_kobweb_silk_foundation.$_$.a;
  var initMetadataForObject = kotlin_kotlin.$_$.l6;
  var removeClass = kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.$_$.c;
  var hasClass = kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.$_$.b;
  var toString = kotlin_kotlin.$_$.t9;
  var toInt = kotlin_kotlin.$_$.o8;
  var charSequenceLength = kotlin_kotlin.$_$.w5;
  var toBoolean = kotlin_kotlin.$_$.m8;
  var isBlank = kotlin_kotlin.$_$.y7;
  var VOID = kotlin_kotlin.$_$.e;
  var removeSuffix = kotlin_kotlin.$_$.e8;
  var initSilkWidgets = kotlin_com_varabyte_kobweb_silk_widgets.$_$.f;
  var initSilkWidgetsKobweb = kotlin_com_varabyte_kobweb_silk_widgets_kobweb.$_$.d;
  var SilkApp = kotlin_com_varabyte_kobweb_kobweb_silk.$_$.a;
  var get_SmoothColorStyle = kotlin_com_varabyte_kobweb_silk_widgets.$_$.g;
  var toModifier = kotlin_com_varabyte_kobweb_silk_foundation.$_$.b1;
  var get_vh = kotlin_org_jetbrains_compose_html_html_core.$_$.g3;
  var minHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.y1;
  var Surface = kotlin_com_varabyte_kobweb_silk_widgets.$_$.b;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b1;
  var Companion_instance_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b4;
  var fillMaxSize = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b1;
  var Companion_instance_1 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.d3;
  var objectFit = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a2;
  var Image = kotlin_com_varabyte_kobweb_silk_widgets_kobweb.$_$.a;
  var rememberBreakpoint = kotlin_com_varabyte_kobweb_silk_foundation.$_$.c1;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t;
  var LaunchedEffect = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k;
  var Companion_instance_2 = kotlin_org_jetbrains_compose_html_html_core.$_$.m;
  var position = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l2;
  var zIndex = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.h3;
  var styleModifier = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j3;
  var Bottom_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n3;
  var End_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.y3;
  var Column = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b;
  var color = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.x;
  var IconSize_LG_getInstance = kotlin_com_varabyte_kobwebx_silk_icons_fa.$_$.h;
  var FaArrowUp = kotlin_com_varabyte_kobwebx_silk_icons_fa.$_$.c;
  var KMutableProperty0 = kotlin_kotlin.$_$.g7;
  var THROW_ISE = kotlin_kotlin.$_$.f9;
  var getLocalDelegateReference = kotlin_kotlin.$_$.b6;
  var CoroutineImpl = kotlin_kotlin.$_$.m5;
  var protoOf = kotlin_kotlin.$_$.x6;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j;
  var isInterface = kotlin_kotlin.$_$.p6;
  var initMetadataForLambda = kotlin_kotlin.$_$.k6;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.x2;
  var size = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r2;
  var Companion_instance_3 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.m3;
  var visibility = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d3;
  var get_percent = kotlin_org_jetbrains_compose_html_html_core.$_$.v2;
  var borderRadius = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n;
  var Breakpoint_SM_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.o1;
  var margin = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r1;
  var backgroundColor = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j;
  var Companion_instance_4 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.x2;
  var cursor = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.y;
  var onClick = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b2;
  var Center_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.x3;
  var Box = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a;
  var fillMaxWidth = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c1;
  var Breakpoint_MD_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.n1;
  var maxWidth = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.x1;
  var numColumns = kotlin_com_varabyte_kobweb_silk_widgets.$_$.c;
  var SimpleGrid = kotlin_com_varabyte_kobweb_silk_widgets.$_$.a;
  var margin_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u1;
  var padding = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j2;
  var CenterVertically_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.w3;
  var Row = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c;
  var fillMaxHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a1;
  var Text = kotlin_org_jetbrains_compose_html_html_core.$_$.w3;
  var fontFamily = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e1;
  var fontSize = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.f1;
  var lineHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n1;
  var Companion_instance_5 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.z2;
  var fontWeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.h1;
  var Colors_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u3;
  var toAttrs = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k3;
  var P = kotlin_org_jetbrains_compose_html_html_core.$_$.r3;
  var Companion_instance_6 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.i3;
  var get_ms = kotlin_org_jetbrains_compose_html_html_core.$_$.r2;
  var times = kotlin_org_jetbrains_compose_html_html_core.$_$.c3;
  var transition = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.x2;
  var Center_instance_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o3;
  var width = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.f3;
  var Companion_instance_7 = kotlin_org_jetbrains_compose_html_html_core.$_$.l;
  var border = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q;
  var SpaceBetween_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q3;
  var End_instance_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p3;
  var copyToArray = kotlin_kotlin.$_$.b3;
  var take = kotlin_kotlin.$_$.o4;
  var padding_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i2;
  var Companion_instance_8 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.h3;
  var textDecorationLine = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u2;
  var Link = kotlin_com_varabyte_kobweb_silk_widgets_kobweb.$_$.b;
  var IconSize_XL_getInstance = kotlin_com_varabyte_kobwebx_silk_icons_fa.$_$.i;
  var FaBars = kotlin_com_varabyte_kobwebx_silk_icons_fa.$_$.d;
  var padding_1 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k2;
  var minWidth = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z1;
  var CenterHorizontally_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v3;
  var margin_1 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v1;
  var OpenLinkStrategy_IN_NEW_TAB_getInstance = kotlin_com_varabyte_kobweb_kobweb_core.$_$.g;
  var Link_0 = kotlin_com_varabyte_kobweb_silk_widgets_kobweb.$_$.c;
  var FaLinkedin = kotlin_com_varabyte_kobwebx_silk_icons_fa.$_$.f;
  var FaGithub = kotlin_com_varabyte_kobwebx_silk_icons_fa.$_$.e;
  var attrsModifier = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i3;
  var Form = kotlin_org_jetbrains_compose_html_html_core.$_$.n3;
  var height = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k1;
  var Button = kotlin_org_jetbrains_compose_html_html_core.$_$.k3;
  var classNames = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.w;
  var Label = kotlin_org_jetbrains_compose_html_html_core.$_$.q3;
  var Text_getInstance = kotlin_org_jetbrains_compose_html_html_core.$_$.d;
  var id = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l1;
  var boxShadow = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u;
  var Input = kotlin_org_jetbrains_compose_html_html_core.$_$.p3;
  var Email_getInstance = kotlin_org_jetbrains_compose_html_html_core.$_$.c;
  var TextArea = kotlin_org_jetbrains_compose_html_html_core.$_$.v3;
  var createCompositionCoroutineScope = kotlin_org_jetbrains_compose_runtime_runtime.$_$.o;
  var CompositionScopedCoroutineScopeCanceller = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e;
  var opacity = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c2;
  var Companion_instance_9 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t3;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.a2;
  var Long = kotlin_kotlin.$_$.b9;
  var delay = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.x4;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p;
  var FaXmark = kotlin_com_varabyte_kobwebx_silk_icons_fa.$_$.g;
  var OpenLinkStrategy_IN_PLACE_getInstance = kotlin_com_varabyte_kobweb_kobweb_core.$_$.h;
  var Companion_instance_10 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.e3;
  var overflow = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g2;
  var Companion_instance_11 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.f3;
  var scrollBehavior = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o2;
  var translateX = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a3;
  var Companion_instance_12 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.o3;
  var width_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g3;
  var Start_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z3;
  var equals = kotlin_kotlin.$_$.z5;
  var Companion_instance_13 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.g3;
  var textAlign = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t2;
  var margin_2 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.s1;
  var borderRadius_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o;
  var enumEntries = kotlin_kotlin.$_$.o5;
  var Enum = kotlin_kotlin.$_$.x8;
  var initMetadataForClass = kotlin_kotlin.$_$.g6;
  var rgb = kotlin_org_jetbrains_compose_html_html_core.$_$.y2;
  var background = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k;
  var Top_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.s3;
  var mutableStateListOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.r;
  var Companion_instance_14 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.y2;
  var fontStyle = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g1;
  var numberToInt = kotlin_kotlin.$_$.v6;
  var get_deg = kotlin_org_jetbrains_compose_html_html_core.$_$.r1;
  var transform = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.w2;
  var maxHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.w1;
  var Start_instance_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r3;
  var Breakpoint_LG_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.m1;
  var FaArrowLeft = kotlin_com_varabyte_kobwebx_silk_icons_fa.$_$.a;
  var FaArrowRight = kotlin_com_varabyte_kobwebx_silk_icons_fa.$_$.b;
  var get_hover = kotlin_com_varabyte_kobweb_silk_foundation.$_$.m;
  var rotate = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n2;
  var Companion_instance_15 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.j3;
  var filter = kotlin_org_jetbrains_compose_html_html_core.$_$.u1;
  var CssStyle = kotlin_com_varabyte_kobweb_silk_foundation.$_$.s;
  var get_focus = kotlin_com_varabyte_kobweb_silk_foundation.$_$.k;
  var CSSTransition_init_$Create$ = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.s2;
  var transition_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.y2;
  var listOf = kotlin_kotlin.$_$.w3;
  var EventListener = kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.$_$.d;
  var numberRangeToNumber = kotlin_kotlin.$_$.t6;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.i6;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(ComposableSingletons$MainKt, 'ComposableSingletons$MainKt');
  initMetadataForObject(ComposableSingletons$BackToTopButtonKt, 'ComposableSingletons$BackToTopButtonKt');
  initMetadataForLambda(BackToTopButton$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForObject(ComposableSingletons$HeaderKt, 'ComposableSingletons$HeaderKt');
  initMetadataForObject(ComposableSingletons$SocialBarKt, 'ComposableSingletons$SocialBarKt');
  initMetadataForObject(ComposableSingletons$ContactFormKt, 'ComposableSingletons$ContactFormKt');
  initMetadataForLambda(overflowMenu$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(overflowMenu$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(overflowMenu$lambda$lambda$lambda$lambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(overflowMenu$lambda$lambda$lambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForObject(ComposableSingletons$PortfolioCardKt, 'ComposableSingletons$PortfolioCardKt');
  initMetadataForLambda(sectionTitle$lambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(Experience, 'Experience', VOID, Enum);
  initMetadataForClass(Portfolio, 'Portfolio', VOID, Enum);
  initMetadataForClass(Section, 'Section', VOID, Enum);
  initMetadataForClass(Service, 'Service', VOID, Enum);
  initMetadataForClass(Skill, 'Skill', VOID, Enum);
  initMetadataForClass(Theme, 'Theme', VOID, Enum);
  initMetadataForObject(ComposableSingletons$AboutSectionKt, 'ComposableSingletons$AboutSectionKt');
  initMetadataForLambda(aboutMe$lambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForObject(ComposableSingletons$ContactSectionKt, 'ComposableSingletons$ContactSectionKt');
  initMetadataForLambda(contactContent$lambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForObject(ComposableSingletons$ExperienceSectionKt, 'ComposableSingletons$ExperienceSectionKt');
  initMetadataForObject(ComposableSingletons$FooterSectionKt, 'ComposableSingletons$FooterSectionKt');
  initMetadataForObject(ComposableSingletons$MainSectionKt, 'ComposableSingletons$MainSectionKt');
  initMetadataForObject(ComposableSingletons$PortfolioSectionKt, 'ComposableSingletons$PortfolioSectionKt');
  initMetadataForObject(ComposableSingletons$ServiceSectionKt, 'ComposableSingletons$ServiceSectionKt');
  initMetadataForObject(Constants, 'Constants');
  initMetadataForLambda(observeViewportEntered$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($animateNumbersCOROUTINE$0, CoroutineImpl);
  //endregion
  function forceReloadNow() {
    window.stop();
    window.location.reload();
  }
  function handleServerStatusEvents() {
    var status = ensureNotNull(document.getElementById('status'));
    var lastVersion = {_v: null};
    var shouldReload = {_v: false};
    // Inline function 'org.w3c.dom.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = status.children[0];
    var warningIcon = ensureNotNull(tmp$ret$1);
    // Inline function 'org.w3c.dom.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = status.children[1];
    var spinnerIcon = ensureNotNull(tmp$ret$3);
    // Inline function 'org.w3c.dom.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$5 = status.children[2];
    var statusText = ensureNotNull(tmp$ret$5);
    status.addEventListener('transitionend', handleServerStatusEvents$lambda(status, shouldReload));
    // Inline function 'org.w3c.dom.EventSourceInit' call
    var o = {};
    o['withCredentials'] = true;
    var eventSource = new EventSource('/api/kobweb-status', o);
    eventSource.addEventListener('version', handleServerStatusEvents$lambda_0(lastVersion, status, shouldReload));
    eventSource.addEventListener('status', handleServerStatusEvents$lambda_1(warningIcon, spinnerIcon, statusText, status));
    eventSource.onerror = handleServerStatusEvents$lambda_2(eventSource);
  }
  function main() {
    handleServerStatusEvents();
    get_api(window).y2r(true);
    Companion_instance.w2t('');
    var router = new Router();
    initKobweb(router, main$lambda);
    router.l2u(main$lambda_0);
    set_additionalSilkInitialization(main$lambda_1);
    router.n2u(removePrefix(window.location.href, window.location.origin), UpdateHistoryMode_REPLACE_getInstance());
    var root = ensureNotNull(document.getElementById('root'));
    while (!(root.firstChild == null)) {
      root.removeChild(ensureNotNull(root.firstChild));
    }
    AppGlobals_instance.g2s(mapOf(to('title', 'LandingPage')));
    renderComposable('root', ComposableLambda$invoke$ref_2(composableLambdaInstance(1108811911, true, main$lambda_2(router))));
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.t18(p0, p1);
    };
  }
  function ComposableSingletons$MainKt$lambda_1$lambda_sdpc0d($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 3) === 2) || !$composer_0.v18()) {
      if (isTraceInProgress()) {
        traceEventStart(-994802423, $changed, -1, 'ComposableSingletons$MainKt.lambda-1.<anonymous> (main.kt:85)');
      }
      homePage($composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.m13();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.n25(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_2$lambda_dts8wk(it, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.v19(it) ? 4 : 2);
    if (!(($dirty & 19) === 18) || !$composer_0.v18()) {
      if (isTraceInProgress()) {
        traceEventStart(1925275822, $dirty, -1, 'ComposableSingletons$MainKt.lambda-2.<anonymous> (main.kt:127)');
      }
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'ComposableSingletons$MainKt.lambda-2.<anonymous>.<anonymous>' call
      var tmp = $composer_0;
      var dispatchReceiver = composableLambda(tmp, 1015664045, true, ComposableSingletons$MainKt$lambda_2$lambda$lambda_8o4o75(it));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.a19(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.t10(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.f1a();
      var tmp_0;
      if (invalid || it_0 === Companion_getInstance().s13_1) {
        // Inline function 'ComposableSingletons$MainKt.lambda-2.<anonymous>.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_1(dispatchReceiver);
        $composer_1.l1a(value);
        tmp_0 = value;
      } else {
        tmp_0 = it_0;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_1.b19();
      DeferringHost(tmp0, $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.m13();
    }
    return Unit_instance;
  }
  function ComposableSingletons$MainKt$lambda_2$lambda$lambda_8o4o75($it) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.v18()) {
        if (isTraceInProgress()) {
          traceEventStart(1015664045, $changed, -1, 'ComposableSingletons$MainKt.lambda-2.<anonymous>.<anonymous> (main.kt:127)');
        }
        $it($composer_0, 0);
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
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1) {
      return $boundThis.t18(p0, p1);
    };
  }
  function ComposableSingletons$MainKt() {
    ComposableSingletons$MainKt_instance = this;
    var tmp = this;
    tmp.n3j_1 = ComposableLambda$invoke$ref(composableLambdaInstance(-994802423, false, ComposableSingletons$MainKt$lambda_1$lambda_sdpc0d));
    var tmp_0 = this;
    tmp_0.o3j_1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(1925275822, false, ComposableSingletons$MainKt$lambda_2$lambda_dts8wk));
  }
  var ComposableSingletons$MainKt_instance;
  function ComposableSingletons$MainKt_getInstance() {
    if (ComposableSingletons$MainKt_instance == null)
      new ComposableSingletons$MainKt();
    return ComposableSingletons$MainKt_instance;
  }
  function handleServerStatusEvents$lambda($status, $shouldReload) {
    return function (it) {
      var tmp;
      if (hasClass($status, 'fade-out')) {
        removeClass($status, ['fade-out']);
        var tmp_0;
        if ($shouldReload._v) {
          forceReloadNow();
          tmp_0 = Unit_instance;
        }
        tmp = tmp_0;
      }
      return Unit_instance;
    };
  }
  function handleServerStatusEvents$lambda_0($lastVersion, $status, $shouldReload) {
    return function (evt) {
      var version = toInt(toString((evt instanceof MessageEvent ? evt : THROW_CCE()).data));
      var tmp;
      if ($lastVersion._v == null) {
        $lastVersion._v = version;
        tmp = Unit_instance;
      }
      var tmp_0;
      if (!($lastVersion._v === version)) {
        $lastVersion._v = version;
        var tmp_1;
        // Inline function 'kotlin.text.isNotEmpty' call
        var this_0 = $status.className;
        if (charSequenceLength(this_0) > 0) {
          $shouldReload._v = true;
          tmp_1 = Unit_instance;
        } else {
          forceReloadNow();
          tmp_1 = Unit_instance;
        }
        tmp_0 = tmp_1;
      }
      return Unit_instance;
    };
  }
  function handleServerStatusEvents$lambda_1($warningIcon, $spinnerIcon, $statusText, $status) {
    return function (evt) {
      var tmp = JSON;
      var values = tmp.parse(toString((evt instanceof MessageEvent ? evt : THROW_CCE()).data));
      var tmp_0 = values.text;
      var text = (!(tmp_0 == null) ? typeof tmp_0 === 'string' : false) ? tmp_0 : THROW_CCE();
      var tmp_1 = values.isError;
      var isError = toBoolean((!(tmp_1 == null) ? typeof tmp_1 === 'string' : false) ? tmp_1 : THROW_CCE());
      var tmp_2;
      // Inline function 'kotlin.text.isNotBlank' call
      if (!isBlank(text)) {
        $warningIcon.className = isError ? 'visible' : 'hidden';
        $spinnerIcon.className = isError ? 'hidden' : 'visible';
        $statusText.innerHTML = '<i>' + text + '<\/i>';
        $status.className = 'fade-in';
        tmp_2 = Unit_instance;
      } else {
        var tmp_3;
        if ($status.className === 'fade-in') {
          $status.className = 'fade-out';
          tmp_3 = Unit_instance;
        }
        tmp_2 = tmp_3;
      }
      return Unit_instance;
    };
  }
  function handleServerStatusEvents$lambda_2($eventSource) {
    return function (it) {
      $eventSource.close();
      return Unit_instance;
    };
  }
  function main$lambda(ctx) {
    ctx.d2t_1.k2u('/', VOID, ComposableSingletons$MainKt_getInstance().n3j_1);
    return Unit_instance;
  }
  function main$lambda_0($this$addRouteInterceptor) {
    $this$addRouteInterceptor.o2u(removeSuffix(removeSuffix($this$addRouteInterceptor.d2u_1, '.html'), '.htm'));
    return Unit_instance;
  }
  function main$lambda_1(ctx) {
    initSilkWidgets(ctx);
    initSilkWidgetsKobweb(ctx);
    ctx.g2y_1.s33('about-image', get_AboutImageStyle());
    ctx.g2y_1.s33('about-text', get_AboutTextStyle());
    ctx.g2y_1.s33('back-to-top-button', get_BackToTopButtonStyle());
    ctx.g2y_1.s33('input', get_InputStyle());
    ctx.g2y_1.s33('navigation-item', get_NavigationItemStyle());
    ctx.g2y_1.s33('logo', get_LogoStyle());
    ctx.g2y_1.s33('social-link', get_SocialLinkStyle());
    ctx.g2y_1.s33('main-button', get_MainButtonStyle());
    ctx.g2y_1.s33('main-image', get_MainImageStyle());
    ctx.g2y_1.s33('portfolio-section', get_PortfolioSectionStyle());
    ctx.g2y_1.s33('portfolio-arrow-icon', get_PortfolioArrowIconStyle());
    ctx.g2y_1.s33('service-card', get_ServiceCardStyle());
    updateTheme(ctx);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_2($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.n25(p0, p1, p2);
    };
  }
  function main$lambda$lambda($router) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.v18()) {
        if (isTraceInProgress()) {
          traceEventStart(-1460047695, $changed, -1, 'main.<anonymous>.<anonymous> (main.kt:127)');
        }
        $router.g2u(ComposableSingletons$MainKt_getInstance().o3j_1, $composer_0, 6, 0);
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
  function ComposableLambda$invoke$ref_3($boundThis) {
    return function (p0, p1) {
      return $boundThis.t18(p0, p1);
    };
  }
  function main$lambda_2($router) {
    return function ($this$renderComposable, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(1108811911, $changed, -1, 'main.<anonymous> (main.kt:126)');
      }
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'main.<anonymous>.<anonymous>' call
      var tmp = $composer_0;
      var dispatchReceiver = composableLambda(tmp, -1460047695, true, main$lambda$lambda($router));
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
      var tmp_0;
      if (invalid || it === Companion_getInstance().s13_1) {
        // Inline function 'main.<anonymous>.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_3(dispatchReceiver);
        $composer_1.l1a(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_1.b19();
      MyApp(tmp0, $composer_0, 6);
      var tmp_2;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_2 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function mainWrapper() {
    main();
  }
  function updateTheme(ctx) {
  }
  function MyApp(content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t1a(33527321);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.v19(content) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.v18()) {
      if (isTraceInProgress()) {
        traceEventStart(33527321, $dirty, -1, 'org.example.landingpage.MyApp (AppEntry.kt:20)');
      }
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.example.landingpage.MyApp.<anonymous>' call
      var tmp = $composer_0;
      var dispatchReceiver = composableLambda(tmp, -1557163910, true, MyApp$lambda(content));
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
      var tmp_0;
      if (invalid || it === Companion_getInstance().s13_1) {
        // Inline function 'org.example.landingpage.MyApp.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_5(dispatchReceiver);
        $composer_1.l1a(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_1.b19();
      SilkApp(tmp0, $composer_0, 6);
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
      tmp0_safe_receiver.u1f(MyApp$lambda_0(content, $changed));
    }
  }
  function MyApp$lambda$lambda($content) {
    return function ($this$Surface, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.v18()) {
        if (isTraceInProgress()) {
          traceEventStart(812575124, $changed, -1, 'org.example.landingpage.MyApp.<anonymous>.<anonymous> (AppEntry.kt:23)');
        }
        $content($composer_0, 0);
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
  function ComposableLambda$invoke$ref_4($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.n25(p0, p1, p2);
    };
  }
  function MyApp$lambda($content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.v18()) {
        if (isTraceInProgress()) {
          traceEventStart(-1557163910, $changed, -1, 'org.example.landingpage.MyApp.<anonymous> (AppEntry.kt:22)');
        }
        var tmp_0 = minHeight(toModifier(get_SmoothColorStyle(), $composer_0, 0), get_vh(100));
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'org.example.landingpage.MyApp.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_1 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_1, 812575124, true, MyApp$lambda$lambda($content));
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
        var tmp_2;
        if (invalid || it === Companion_getInstance().s13_1) {
          // Inline function 'org.example.landingpage.MyApp.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_4(dispatchReceiver);
          $composer_1.l1a(value);
          tmp_2 = value;
        } else {
          tmp_2 = it;
        }
        var tmp_3 = tmp_2;
        var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        $composer_1.b19();
        Surface(tmp_0, null, null, null, null, tmp0, $composer_0, 196608, 30);
        var tmp_4;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_4 = Unit_instance;
        }
        tmp = tmp_4;
      } else {
        $composer_0.m13();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_5($boundThis) {
    return function (p0, p1) {
      return $boundThis.t18(p0, p1);
    };
  }
  function MyApp$lambda_0($content, $$changed) {
    return function ($composer, $force) {
      MyApp($content, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function mainBackground($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t1a(766038341);
    if (!($changed === 0) || !$composer_0.v18()) {
      if (isTraceInProgress()) {
        traceEventStart(766038341, $changed, -1, 'org.example.landingpage.components.mainBackground (BackGround.kt:11)');
      }
      var tmp0_modifier = objectFit(fillMaxSize(Companion_instance_0), Companion_instance_1.g2m());
      var tmp1_src = 'background.svg';
      Image(tmp1_src, tmp0_modifier, null, null, null, 'Background Image', false, null, $composer_0, 196614, 220);
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
      tmp0_safe_receiver.u1f(mainBackground$lambda($changed));
    }
  }
  function mainBackground$lambda($$changed) {
    return function ($composer, $force) {
      mainBackground($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function BackToTopButton($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t1a(-709494988);
    if (!($changed === 0) || !$composer_0.v18()) {
      if (isTraceInProgress()) {
        traceEventStart(-709494988, $changed, -1, 'org.example.landingpage.components.BackToTopButton (BackToTopButton.kt:27)');
      }
      var breakpoint = rememberBreakpoint($composer_0, 0);
      $composer_0.a19(968467556);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.f1a();
      var tmp;
      if (false || it === Companion_getInstance().s13_1) {
        // Inline function 'org.example.landingpage.components.BackToTopButton.<anonymous>' call
        var value = mutableStateOf(null);
        this_0.l1a(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.b19();
      var scroll$delegate = tmp0_group;
      $composer_0.a19(968469580);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_1.f1a();
      var tmp_1;
      if (false || it_0 === Companion_getInstance().s13_1) {
        // Inline function 'org.example.landingpage.components.BackToTopButton.<anonymous>' call
        var value_0 = BackToTopButton$slambda_0(scroll$delegate, null);
        this_1.l1a(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.b19();
      LaunchedEffect(Unit_instance, tmp1_group, $composer_0, 6);
      var tmp_3 = fillMaxSize(Companion_instance_0);
      // Inline function 'org.jetbrains.compose.web.css.Companion.Fixed' call
      // Inline function 'org.jetbrains.compose.web.css.Position' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_4 = zIndex(position(tmp_3, 'fixed'), 1);
      $composer_0.a19(968478917);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_2 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = this_2.f1a();
      var tmp_5;
      if (false || it_1 === Companion_getInstance().s13_1) {
        // Inline function 'org.example.landingpage.components.BackToTopButton.<anonymous>' call
        var value_1 = BackToTopButton$lambda_1;
        this_2.l1a(value_1);
        tmp_5 = value_1;
      } else {
        tmp_5 = it_1;
      }
      var tmp_6 = tmp_5;
      var tmp2_group = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      $composer_0.b19();
      var tmp_7 = styleModifier(tmp_4, tmp2_group);
      var tmp_8 = Bottom_instance;
      var tmp_9 = End_instance;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.example.landingpage.components.BackToTopButton.<anonymous>' call
      var tmp_10 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_10, -80442467, true, BackToTopButton$lambda_2(breakpoint, scroll$delegate));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.a19(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.t10(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = $composer_1.f1a();
      var tmp_11;
      if (invalid || it_2 === Companion_getInstance().s13_1) {
        // Inline function 'org.example.landingpage.components.BackToTopButton.<anonymous>.<anonymous>' call
        var value_2 = ComposableLambda$invoke$ref_7(dispatchReceiver);
        $composer_1.l1a(value_2);
        tmp_11 = value_2;
      } else {
        tmp_11 = it_2;
      }
      var tmp_12 = tmp_11;
      var tmp0 = (tmp_12 == null ? true : !(tmp_12 == null)) ? tmp_12 : THROW_CCE();
      $composer_1.b19();
      Column(tmp_7, tmp_8, tmp_9, null, tmp0, $composer_0, 24576, 8);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.m13();
    }
    var tmp3_safe_receiver = $composer_0.u1a();
    if (tmp3_safe_receiver == null)
      null;
    else {
      tmp3_safe_receiver.u1f(BackToTopButton$lambda_3($changed));
    }
  }
  function ComposableLambda$invoke$ref_6($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.n25(p0, p1, p2);
    };
  }
  function ComposableSingletons$BackToTopButtonKt$lambda_1$lambda_8gu7iz($this$Box, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 17) === 16) || !$composer_0.v18()) {
      if (isTraceInProgress()) {
        traceEventStart(1854573783, $changed, -1, 'org.example.landingpage.components.ComposableSingletons$BackToTopButtonKt.lambda-1.<anonymous> (BackToTopButton.kt:70)');
      }
      FaArrowUp(color(Companion_instance_0, Theme_Primary_getInstance().s3j_1), IconSize_LG_getInstance(), $composer_0, 48, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.m13();
    }
    return Unit_instance;
  }
  function ComposableSingletons$BackToTopButtonKt() {
    ComposableSingletons$BackToTopButtonKt_instance = this;
    var tmp = this;
    tmp.t3j_1 = ComposableLambda$invoke$ref_6(composableLambdaInstance(1854573783, false, ComposableSingletons$BackToTopButtonKt$lambda_1$lambda_8gu7iz));
  }
  var ComposableSingletons$BackToTopButtonKt_instance;
  function ComposableSingletons$BackToTopButtonKt_getInstance() {
    if (ComposableSingletons$BackToTopButtonKt_instance == null)
      new ComposableSingletons$BackToTopButtonKt();
    return ComposableSingletons$BackToTopButtonKt_instance;
  }
  function BackToTopButton$lambda($scroll$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('scroll', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $scroll$delegate.w1();
  }
  function BackToTopButton$lambda_0($scroll$delegate, _set____db54di) {
    getLocalDelegateReference('scroll', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $scroll$delegate.or(_set____db54di);
    return Unit_instance;
  }
  function BackToTopButton$slambda$lambda($scroll$delegate) {
    return function (it) {
      var tmp0_safe_receiver = document.documentElement;
      BackToTopButton$lambda_0($scroll$delegate, tmp0_safe_receiver == null ? null : tmp0_safe_receiver.scrollTop);
      return Unit_instance;
    };
  }
  function BackToTopButton$slambda($scroll$delegate, resultContinuation) {
    this.c3k_1 = $scroll$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BackToTopButton$slambda).k1h = function ($this$LaunchedEffect, $completion) {
    var tmp = this.l1h($this$LaunchedEffect, $completion);
    tmp.x8_1 = Unit_instance;
    tmp.y8_1 = null;
    return tmp.d9();
  };
  protoOf(BackToTopButton$slambda).p9 = function (p1, $completion) {
    return this.k1h((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(BackToTopButton$slambda).d9 = function () {
    var suspendResult = this.x8_1;
    $sm: do
      try {
        var tmp = this.v8_1;
        if (tmp === 0) {
          this.w8_1 = 1;
          var tmp_0 = window;
          tmp_0.addEventListener('scroll', BackToTopButton$slambda$lambda(this.c3k_1));
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
  protoOf(BackToTopButton$slambda).l1h = function ($this$LaunchedEffect, completion) {
    var i = new BackToTopButton$slambda(this.c3k_1, completion);
    i.d3k_1 = $this$LaunchedEffect;
    return i;
  };
  function BackToTopButton$slambda_0($scroll$delegate, resultContinuation) {
    var i = new BackToTopButton$slambda($scroll$delegate, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.k1h($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function BackToTopButton$lambda_1($this$styleModifier) {
    $this$styleModifier.h2e('pointer-events', 'none');
    return Unit_instance;
  }
  function BackToTopButton$lambda$lambda(it) {
    var tmp0_safe_receiver = document.documentElement;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.scroll(0.0, 0.0);
    }
    return Unit_instance;
  }
  function BackToTopButton$lambda$lambda_0($this$styleModifier) {
    $this$styleModifier.h2e('pointer-events', 'auto');
    return Unit_instance;
  }
  function BackToTopButton$lambda_2($breakpoint, $scroll$delegate) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.v18()) {
        if (isTraceInProgress()) {
          traceEventStart(-80442467, $changed, -1, 'org.example.landingpage.components.BackToTopButton.<anonymous> (BackToTopButton.kt:48)');
        }
        var tmp_0 = cursor(backgroundColor(margin(borderRadius(visibility(size(toModifier(get_BackToTopButtonStyle(), $composer_0, 6), get_px(50)), !(BackToTopButton$lambda($scroll$delegate) == null) && ensureNotNull(BackToTopButton$lambda($scroll$delegate)) > 400.0 ? Companion_instance_3.e2o() : Companion_instance_3.n2m()), get_percent(20)), VOID, $breakpoint.i2(Breakpoint_SM_getInstance()) <= 0 ? get_px(30) : get_px(40), $breakpoint.i2(Breakpoint_SM_getInstance()) <= 0 ? get_px(30) : get_px(40)), Theme_DarkRed_getInstance().s3j_1), Companion_instance_4.q2k());
        $composer_0.a19(-1349477924);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.f1a();
        var tmp_1;
        if (false || it === Companion_getInstance().s13_1) {
          // Inline function 'org.example.landingpage.components.BackToTopButton.<anonymous>.<anonymous>.<anonymous>' call
          var value = BackToTopButton$lambda$lambda;
          $composer_0.l1a(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        $composer_0.b19();
        var tmp_3 = onClick(tmp_0, tmp0_group);
        $composer_0.a19(-1349474036);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_0.f1a();
        var tmp_4;
        if (false || it_0 === Companion_getInstance().s13_1) {
          // Inline function 'org.example.landingpage.components.BackToTopButton.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = BackToTopButton$lambda$lambda_0;
          $composer_0.l1a(value_0);
          tmp_4 = value_0;
        } else {
          tmp_4 = it_0;
        }
        var tmp_5 = tmp_4;
        var tmp1_group = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
        $composer_0.b19();
        var tmp_6 = styleModifier(tmp_3, tmp1_group);
        var tmp_7 = Center_instance;
        Box(tmp_6, tmp_7, null, ComposableSingletons$BackToTopButtonKt_getInstance().t3j_1, $composer_0, 3072, 4);
        var tmp_8;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_8 = Unit_instance;
        }
        tmp = tmp_8;
      } else {
        $composer_0.m13();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_7($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.n25(p0, p1, p2);
    };
  }
  function BackToTopButton$lambda_3($$changed) {
    return function ($composer, $force) {
      BackToTopButton($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function experienceCard(breakpoint, active, experience, animatedMargin, $composer, $changed, $default) {
    var active_0 = {_v: active};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t1a(1624576220);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.t10(breakpoint) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.w19(active_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.t10(experience) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.v19(animatedMargin) ? 2048 : 1024);
    if (!(($dirty & 1171) === 1170) || !$composer_0.v18()) {
      if (!(($default & 2) === 0)) {
        active_0._v = false;
      }
      if (isTraceInProgress()) {
        traceEventStart(1624576220, $dirty, -1, 'org.example.landingpage.components.experienceCard (ExperienceCard.kt:30)');
      }
      var tmp0_modifier = maxWidth(fillMaxWidth(Companion_instance_0), breakpoint.i2(Breakpoint_MD_getInstance()) >= 0 ? get_percent(60) : get_percent(90));
      var tmp1_numColumns = numColumns(1, VOID, 2);
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.example.landingpage.components.experienceCard.<anonymous>' call
      var tmp = $composer_0;
      var dispatchReceiver = composableLambda(tmp, -1435455149, true, experienceCard$lambda(active_0, experience, breakpoint, animatedMargin));
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
      var tmp_0;
      if (invalid || it === Companion_getInstance().s13_1) {
        // Inline function 'org.example.landingpage.components.experienceCard.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_8(dispatchReceiver);
        $composer_1.l1a(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_1.b19();
      SimpleGrid(tmp1_numColumns, tmp0_modifier, null, null, tmp0, $composer_0, 24576, 12);
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
      tmp0_safe_receiver.u1f(experienceCard$lambda_0(breakpoint, active_0, experience, animatedMargin, $changed, $default));
    }
  }
  function experienceDescription(active, description, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t1a(-2062814445);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.w19(active) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.t10(description) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.v18()) {
      if (isTraceInProgress()) {
        traceEventStart(-2062814445, $dirty, -1, 'org.example.landingpage.components.experienceDescription (ExperienceCard.kt:57)');
      }
      var tmp = backgroundColor(padding(margin_0(fillMaxWidth(Companion_instance_0), get_px(14)), get_px(14)), active ? Theme_LightRed_getInstance().s3j_1 : Theme_LightGray_getInstance().s3j_1);
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.example.landingpage.components.experienceDescription.<anonymous>' call
      var tmp_0 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_0, -1079805287, true, experienceDescription$lambda(description));
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
        // Inline function 'org.example.landingpage.components.experienceDescription.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_10(dispatchReceiver);
        $composer_1.l1a(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_1.b19();
      Box(tmp, null, null, tmp0, $composer_0, 3072, 6);
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
      tmp0_safe_receiver.u1f(experienceDescription$lambda_0(active, description, $changed));
    }
  }
  function experienceDetails(breakpoint, active, experience, animatedMargin, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t1a(944842846);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.t10(breakpoint) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.w19(active) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.t10(experience) ? 256 : 128);
    if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.v19(animatedMargin) ? 2048 : 1024);
    if (!(($dirty & 1171) === 1170) || !$composer_0.v18()) {
      if (isTraceInProgress()) {
        traceEventStart(944842846, $dirty, -1, 'org.example.landingpage.components.experienceDetails (ExperienceCard.kt:86)');
      }
      var tmp = margin(fillMaxWidth(Companion_instance_0), VOID, VOID, VOID, breakpoint.i2(Breakpoint_MD_getInstance()) >= 0 ? get_px(14) : get_px(0));
      var tmp_0 = CenterVertically_instance;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.example.landingpage.components.experienceDetails.<anonymous>' call
      var tmp_1 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_1, -267039391, true, experienceDetails$lambda(breakpoint, active, experience, animatedMargin));
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
      var tmp_2;
      if (invalid || it === Companion_getInstance().s13_1) {
        // Inline function 'org.example.landingpage.components.experienceDetails.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_15(dispatchReceiver);
        $composer_1.l1a(value);
        tmp_2 = value;
      } else {
        tmp_2 = it;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_1.b19();
      Row(tmp, null, tmp_0, null, tmp0, $composer_0, 24576, 10);
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
      tmp0_safe_receiver.u1f(experienceDetails$lambda_0(breakpoint, active, experience, animatedMargin, $changed));
    }
  }
  function experienceNumber(active, experience, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t1a(359475415);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.w19(active) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.t10(experience) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.v18()) {
      if (isTraceInProgress()) {
        traceEventStart(359475415, $dirty, -1, 'org.example.landingpage.components.experienceNumber (ExperienceCard.kt:151)');
      }
      var tmp = fillMaxHeight(margin(Companion_instance_0, VOID, get_px(14)));
      var tmp_0 = Center_instance;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.example.landingpage.components.experienceNumber.<anonymous>' call
      var tmp_1 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_1, 1638111377, true, experienceNumber$lambda(active, experience));
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
      var tmp_2;
      if (invalid || it === Companion_getInstance().s13_1) {
        // Inline function 'org.example.landingpage.components.experienceNumber.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_18(dispatchReceiver);
        $composer_1.l1a(value);
        tmp_2 = value;
      } else {
        tmp_2 = it;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_1.b19();
      Box(tmp, tmp_0, null, tmp0, $composer_0, 3072, 4);
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
      tmp0_safe_receiver.u1f(experienceNumber$lambda_0(active, experience, $changed));
    }
  }
  function experienceCard$lambda($active, $experience, $breakpoint, $animatedMargin) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.v18()) {
        if (isTraceInProgress()) {
          traceEventStart(-1435455149, $changed, -1, 'org.example.landingpage.components.experienceCard.<anonymous> (ExperienceCard.kt:40)');
        }
        experienceDescription($active._v, $experience.i3k_1, $composer_0, 0);
        experienceDetails($breakpoint, $active._v, $experience, $animatedMargin, $composer_0, 0);
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
  function ComposableLambda$invoke$ref_8($boundThis) {
    return function (p0, p1) {
      return $boundThis.t18(p0, p1);
    };
  }
  function experienceCard$lambda_0($breakpoint, $active, $experience, $animatedMargin, $$changed, $$default) {
    return function ($composer, $force) {
      experienceCard($breakpoint, $active._v, $experience, $animatedMargin, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function experienceDescription$lambda$lambda($description) {
    return function ($this$P, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-1540722505, $changed, -1, 'org.example.landingpage.components.experienceDescription.<anonymous>.<anonymous> (ExperienceCard.kt:75)');
      }
      Text($description, $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_9($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.n25(p0, p1, p2);
    };
  }
  function experienceDescription$lambda($description) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.v18()) {
        if (isTraceInProgress()) {
          traceEventStart(-1079805287, $changed, -1, 'org.example.landingpage.components.experienceDescription.<anonymous> (ExperienceCard.kt:65)');
        }
        var tmp_0 = toAttrs(color(fontWeight(lineHeight(fontSize(fontFamily(margin_0(Companion_instance_0, get_px(0)), ['Roboto']), get_px(14)), 1.6), Companion_instance_5.z2j()), Colors_instance.c2x()));
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'org.example.landingpage.components.experienceDescription.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_1 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_1, -1540722505, true, experienceDescription$lambda$lambda($description));
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
        var tmp_2;
        if (invalid || it === Companion_getInstance().s13_1) {
          // Inline function 'org.example.landingpage.components.experienceDescription.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_9(dispatchReceiver);
          $composer_1.l1a(value);
          tmp_2 = value;
        } else {
          tmp_2 = it;
        }
        var tmp_3 = tmp_2;
        var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        $composer_1.b19();
        P(tmp_0, tmp0, $composer_0, 48, 0);
        var tmp_4;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_4 = Unit_instance;
        }
        tmp = tmp_4;
      } else {
        $composer_0.m13();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_10($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.n25(p0, p1, p2);
    };
  }
  function experienceDescription$lambda_0($active, $description, $$changed) {
    return function ($composer, $force) {
      experienceDescription($active, $description, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function experienceDetails$lambda$lambda$lambda($experience) {
    return function ($this$P, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(370663990, $changed, -1, 'org.example.landingpage.components.experienceDetails.<anonymous>.<anonymous>.<anonymous> (ExperienceCard.kt:119)');
      }
      Text($experience.h3k_1, $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_11($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.n25(p0, p1, p2);
    };
  }
  function experienceDetails$lambda$lambda$lambda_0($experience) {
    return function ($this$P, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(856021229, $changed, -1, 'org.example.landingpage.components.experienceDetails.<anonymous>.<anonymous>.<anonymous> (ExperienceCard.kt:130)');
      }
      Text($experience.k3k_1 + ' - ' + $experience.l3k_1, $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_12($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.n25(p0, p1, p2);
    };
  }
  function experienceDetails$lambda$lambda$lambda_1($experience) {
    return function ($this$P, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-1275643858, $changed, -1, 'org.example.landingpage.components.experienceDetails.<anonymous>.<anonymous>.<anonymous> (ExperienceCard.kt:141)');
      }
      Text($experience.j3k_1, $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_13($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.n25(p0, p1, p2);
    };
  }
  function experienceDetails$lambda$lambda($experience) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.v18()) {
        if (isTraceInProgress()) {
          traceEventStart(1959729432, $changed, -1, 'org.example.landingpage.components.experienceDetails.<anonymous>.<anonymous> (ExperienceCard.kt:110)');
        }
        var tmp_0 = toAttrs(color(fontWeight(fontSize(fontFamily(margin_0(Companion_instance_0, get_px(0)), ['Roboto']), get_px(20)), Companion_instance_5.x2k()), Theme_Primary_getInstance().s3j_1));
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'org.example.landingpage.components.experienceDetails.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_1 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_1, 370663990, true, experienceDetails$lambda$lambda$lambda($experience));
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
        var tmp_2;
        if (invalid || it === Companion_getInstance().s13_1) {
          // Inline function 'org.example.landingpage.components.experienceDetails.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_11(dispatchReceiver);
          $composer_1.l1a(value);
          tmp_2 = value;
        } else {
          tmp_2 = it;
        }
        var tmp_3 = tmp_2;
        var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        $composer_1.b19();
        P(tmp_0, tmp0, $composer_0, 48, 0);
        var tmp_4 = toAttrs(color(fontWeight(fontSize(fontFamily(margin_0(Companion_instance_0, get_px(0)), ['Roboto']), get_px(14)), Companion_instance_5.z2j()), Theme_Primary_getInstance().s3j_1));
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'org.example.landingpage.components.experienceDetails.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_5 = $composer_0;
        var dispatchReceiver_0 = composableLambda(tmp_5, 856021229, true, experienceDetails$lambda$lambda$lambda_0($experience));
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_2 = $composer_0;
        $composer_2.a19(1157296644);
        sourceInformation($composer_2, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_2.t10(dispatchReceiver_0);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_2.f1a();
        var tmp_6;
        if (invalid_0 || it_0 === Companion_getInstance().s13_1) {
          // Inline function 'org.example.landingpage.components.experienceDetails.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = ComposableLambda$invoke$ref_12(dispatchReceiver_0);
          $composer_2.l1a(value_0);
          tmp_6 = value_0;
        } else {
          tmp_6 = it_0;
        }
        var tmp_7 = tmp_6;
        var tmp0_0 = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
        $composer_2.b19();
        P(tmp_4, tmp0_0, $composer_0, 48, 0);
        var tmp_8 = toAttrs(color(fontWeight(fontSize(fontFamily(margin_0(Companion_instance_0, get_px(0)), ['Roboto']), get_px(14)), Companion_instance_5.z2j()), Theme_Primary_getInstance().s3j_1));
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'org.example.landingpage.components.experienceDetails.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_9 = $composer_0;
        var dispatchReceiver_1 = composableLambda(tmp_9, -1275643858, true, experienceDetails$lambda$lambda$lambda_1($experience));
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_3 = $composer_0;
        $composer_3.a19(1157296644);
        sourceInformation($composer_3, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_1 = $composer_3.t10(dispatchReceiver_1);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_1 = $composer_3.f1a();
        var tmp_10;
        if (invalid_1 || it_1 === Companion_getInstance().s13_1) {
          // Inline function 'org.example.landingpage.components.experienceDetails.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_1 = ComposableLambda$invoke$ref_13(dispatchReceiver_1);
          $composer_3.l1a(value_1);
          tmp_10 = value_1;
        } else {
          tmp_10 = it_1;
        }
        var tmp_11 = tmp_10;
        var tmp0_1 = (tmp_11 == null ? true : !(tmp_11 == null)) ? tmp_11 : THROW_CCE();
        $composer_3.b19();
        P(tmp_8, tmp0_1, $composer_0, 48, 0);
        var tmp_12;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_12 = Unit_instance;
        }
        tmp = tmp_12;
      } else {
        $composer_0.m13();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_14($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.n25(p0, p1, p2);
    };
  }
  function experienceDetails$lambda($breakpoint, $active, $experience, $animatedMargin) {
    return function ($this$Row, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.v18()) {
        if (isTraceInProgress()) {
          traceEventStart(-267039391, $changed, -1, 'org.example.landingpage.components.experienceDetails.<anonymous> (ExperienceCard.kt:93)');
        }
        $composer_0.a19(-1920796280);
        if ($breakpoint.i2(Breakpoint_MD_getInstance()) >= 0) {
          experienceNumber($active, $experience, $composer_0, 0);
        }
        $composer_0.b19();
        var tmp_0 = transition(margin(fillMaxSize(Companion_instance_0), VOID, VOID, VOID, $breakpoint.i2(Breakpoint_SM_getInstance()) <= 0 ? get_px(0) : $animatedMargin), [Companion_instance_6.u2n('margin', get_ms(500), VOID, times($experience.h2_1, get_ms(100)))]);
        var tmp_1 = Center_instance_0;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'org.example.landingpage.components.experienceDetails.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_2 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_2, 1959729432, true, experienceDetails$lambda$lambda($experience));
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
        var tmp_3;
        if (invalid || it === Companion_getInstance().s13_1) {
          // Inline function 'org.example.landingpage.components.experienceDetails.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_14(dispatchReceiver);
          $composer_1.l1a(value);
          tmp_3 = value;
        } else {
          tmp_3 = it;
        }
        var tmp_4 = tmp_3;
        var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        $composer_1.b19();
        Column(tmp_0, tmp_1, null, null, tmp0, $composer_0, 24576, 12);
        var tmp_5;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_5 = Unit_instance;
        }
        tmp = tmp_5;
      } else {
        $composer_0.m13();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_15($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.n25(p0, p1, p2);
    };
  }
  function experienceDetails$lambda_0($breakpoint, $active, $experience, $animatedMargin, $$changed) {
    return function ($composer, $force) {
      experienceDetails($breakpoint, $active, $experience, $animatedMargin, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function experienceNumber$lambda$lambda$lambda($experience) {
    return function ($this$P, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-526228778, $changed, -1, 'org.example.landingpage.components.experienceNumber.<anonymous>.<anonymous>.<anonymous> (ExperienceCard.kt:185)');
      }
      Text($experience.g3k_1, $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_16($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.n25(p0, p1, p2);
    };
  }
  function experienceNumber$lambda$lambda($active, $experience) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.v18()) {
        if (isTraceInProgress()) {
          traceEventStart(211624116, $changed, -1, 'org.example.landingpage.components.experienceNumber.<anonymous>.<anonymous> (ExperienceCard.kt:176)');
        }
        var tmp_0 = toAttrs(color(fontWeight(fontSize(fontFamily(margin_0(Companion_instance_0, get_px(0)), ['Roboto']), get_px(16)), Companion_instance_5.x2k()), $active ? Colors_instance.c2x() : Theme_LightRed_getInstance().s3j_1));
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'org.example.landingpage.components.experienceNumber.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_1 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_1, -526228778, true, experienceNumber$lambda$lambda$lambda($experience));
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
        var tmp_2;
        if (invalid || it === Companion_getInstance().s13_1) {
          // Inline function 'org.example.landingpage.components.experienceNumber.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_16(dispatchReceiver);
          $composer_1.l1a(value);
          tmp_2 = value;
        } else {
          tmp_2 = it;
        }
        var tmp_3 = tmp_2;
        var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        $composer_1.b19();
        P(tmp_0, tmp0, $composer_0, 48, 0);
        var tmp_4;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_4 = Unit_instance;
        }
        tmp = tmp_4;
      } else {
        $composer_0.m13();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_17($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.n25(p0, p1, p2);
    };
  }
  function experienceNumber$lambda($active, $experience) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.v18()) {
        if (isTraceInProgress()) {
          traceEventStart(1638111377, $changed, -1, 'org.example.landingpage.components.experienceNumber.<anonymous> (ExperienceCard.kt:158)');
        }
        var tmp_0 = backgroundColor(width(fillMaxHeight(Companion_instance_0), get_px(3)), Theme_LightRed_getInstance().s3j_1);
        Box(tmp_0, null, null, null, $composer_0, 0, 14);
        var tmp_1 = size(Companion_instance_0, get_px(40));
        var tmp_2 = get_px(3);
        // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
        // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_3 = borderRadius(backgroundColor(border(tmp_1, tmp_2, 'solid', Theme_LightRed_getInstance().s3j_1), $active ? Theme_LightRed_getInstance().s3j_1 : Colors_instance.c2x()), get_percent(50));
        var tmp_4 = Center_instance;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'org.example.landingpage.components.experienceNumber.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_5 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_5, 211624116, true, experienceNumber$lambda$lambda($active, $experience));
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
        var tmp_6;
        if (invalid || it === Companion_getInstance().s13_1) {
          // Inline function 'org.example.landingpage.components.experienceNumber.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_17(dispatchReceiver);
          $composer_1.l1a(value);
          tmp_6 = value;
        } else {
          tmp_6 = it;
        }
        var tmp_7 = tmp_6;
        var tmp0 = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
        $composer_1.b19();
        Box(tmp_3, tmp_4, null, tmp0, $composer_0, 3072, 4);
        var tmp_8;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_8 = Unit_instance;
        }
        tmp = tmp_8;
      } else {
        $composer_0.m13();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_18($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.n25(p0, p1, p2);
    };
  }
  function experienceNumber$lambda_0($active, $experience, $$changed) {
    return function ($composer, $force) {
      experienceNumber($active, $experience, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function header(onMenuClicked, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t1a(-974951762);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.v19(onMenuClicked) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.v18()) {
      if (isTraceInProgress()) {
        traceEventStart(-974951762, $dirty, -1, 'org.example.landingpage.components.header (Header.kt:26)');
      }
      var breakpoint = rememberBreakpoint($composer_0, 0);
      var tmp = margin_0(fillMaxWidth(Companion_instance_0, breakpoint.i2(Breakpoint_MD_getInstance()) > 0 ? get_percent(80) : get_percent(90)), get_px(50));
      var tmp_0 = SpaceBetween_instance;
      var tmp_1 = CenterVertically_instance;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.example.landingpage.components.header.<anonymous>' call
      var tmp_2 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_2, -1398359247, true, header$lambda(breakpoint, onMenuClicked));
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
      var tmp_3;
      if (invalid || it === Companion_getInstance().s13_1) {
        // Inline function 'org.example.landingpage.components.header.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_20(dispatchReceiver);
        $composer_1.l1a(value);
        tmp_3 = value;
      } else {
        tmp_3 = it;
      }
      var tmp_4 = tmp_3;
      var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_1.b19();
      Row(tmp, tmp_0, tmp_1, null, tmp0, $composer_0, 24576, 8);
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
      tmp0_safe_receiver.u1f(header$lambda_0(onMenuClicked, $changed));
    }
  }
  function leftSide(breakpoint, onMenuClicked, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t1a(749949536);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.t10(breakpoint) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.v19(onMenuClicked) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.v18()) {
      if (isTraceInProgress()) {
        traceEventStart(749949536, $dirty, -1, 'org.example.landingpage.components.leftSide (Header.kt:49)');
      }
      var tmp = CenterVertically_instance;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.example.landingpage.components.leftSide.<anonymous>' call
      var tmp_0 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_0, 2119184061, true, leftSide$lambda(breakpoint, onMenuClicked));
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
        // Inline function 'org.example.landingpage.components.leftSide.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_21(dispatchReceiver);
        $composer_1.l1a(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_1.b19();
      Row(null, null, tmp, null, tmp0, $composer_0, 24576, 11);
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
      tmp0_safe_receiver.u1f(leftSide$lambda_0(breakpoint, onMenuClicked, $changed));
    }
  }
  function rightSide($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t1a(-1320192362);
    if (!($changed === 0) || !$composer_0.v18()) {
      if (isTraceInProgress()) {
        traceEventStart(-1320192362, $changed, -1, 'org.example.landingpage.components.rightSide (Header.kt:67)');
      }
      var tmp = padding(backgroundColor(borderRadius(fillMaxWidth(Companion_instance_0), get_px(50)), Theme_LightGrayBg_getInstance().s3j_1), get_px(20));
      var tmp_0 = End_instance_0;
      Row(tmp, tmp_0, null, null, ComposableSingletons$HeaderKt_getInstance().m3k_1, $composer_0, 24576, 12);
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
      tmp0_safe_receiver.u1f(rightSide$lambda($changed));
    }
  }
  function ComposableLambda$invoke$ref_19($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.n25(p0, p1, p2);
    };
  }
  function ComposableSingletons$HeaderKt$lambda_1$lambda_fev17j($this$Row, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 17) === 16) || !$composer_0.v18()) {
      if (isTraceInProgress()) {
        traceEventStart(-17947303, $changed, -1, 'org.example.landingpage.components.ComposableSingletons$HeaderKt.lambda-1.<anonymous> (Header.kt:76)');
      }
      // Inline function 'kotlin.collections.forEach' call
      // Inline function 'kotlin.collections.toTypedArray' call
      var this_0 = get_entries_1();
      var tmp$ret$0 = copyToArray(this_0);
      var tmp0_iterator = take(tmp$ret$0, 6).j();
      while (tmp0_iterator.k()) {
        var element = tmp0_iterator.l();
        // Inline function 'org.example.landingpage.components.ComposableSingletons$HeaderKt.lambda-1.<anonymous>.<anonymous>' call
        var tmp0_modifier = textDecorationLine(fontWeight(fontSize(fontFamily(padding_0(toModifier(get_NavigationItemStyle(), $composer_0, 6), VOID, get_px(30)), ['Roboto']), get_px(18)), Companion_instance_5.z2j()), Companion_instance_8.t2k());
        var tmp1_path = element.s3k_1;
        var tmp2_text = element.q3k_1;
        Link(tmp1_path, tmp2_text, tmp0_modifier, null, null, null, null, false, null, $composer_0, 0, 504);
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.m13();
    }
    return Unit_instance;
  }
  function ComposableSingletons$HeaderKt() {
    ComposableSingletons$HeaderKt_instance = this;
    var tmp = this;
    tmp.m3k_1 = ComposableLambda$invoke$ref_19(composableLambdaInstance(-17947303, false, ComposableSingletons$HeaderKt$lambda_1$lambda_fev17j));
  }
  var ComposableSingletons$HeaderKt_instance;
  function ComposableSingletons$HeaderKt_getInstance() {
    if (ComposableSingletons$HeaderKt_instance == null)
      new ComposableSingletons$HeaderKt();
    return ComposableSingletons$HeaderKt_instance;
  }
  function header$lambda($breakpoint, $onMenuClicked) {
    return function ($this$Row, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.v18()) {
        if (isTraceInProgress()) {
          traceEventStart(-1398359247, $changed, -1, 'org.example.landingpage.components.header.<anonymous> (Header.kt:35)');
        }
        leftSide($breakpoint, $onMenuClicked, $composer_0, 0);
        if ($breakpoint.i2(Breakpoint_MD_getInstance()) > 0) {
          rightSide($composer_0, 0);
        }
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
  function ComposableLambda$invoke$ref_20($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.n25(p0, p1, p2);
    };
  }
  function header$lambda_0($onMenuClicked, $$changed) {
    return function ($composer, $force) {
      header($onMenuClicked, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function leftSide$lambda$lambda($onMenuClicked) {
    return function (it) {
      $onMenuClicked();
      return Unit_instance;
    };
  }
  function leftSide$lambda($breakpoint, $onMenuClicked) {
    return function ($this$Row, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.v18()) {
        if (isTraceInProgress()) {
          traceEventStart(2119184061, $changed, -1, 'org.example.landingpage.components.leftSide.<anonymous> (Header.kt:51)');
        }
        if ($breakpoint.i2(Breakpoint_MD_getInstance()) <= 0) {
          var tmp_0 = color(margin(Companion_instance_0, VOID, get_px(15)), Colors_instance.c2x());
          $composer_0.a19(-1445519202);
          // Inline function 'androidx.compose.runtime.cache' call
          var invalid = $composer_0.t10($onMenuClicked);
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it = $composer_0.f1a();
          var tmp_1;
          if (invalid || it === Companion_getInstance().s13_1) {
            // Inline function 'org.example.landingpage.components.leftSide.<anonymous>.<anonymous>.<anonymous>' call
            var value = leftSide$lambda$lambda($onMenuClicked);
            $composer_0.l1a(value);
            tmp_1 = value;
          } else {
            tmp_1 = it;
          }
          var tmp_2 = tmp_1;
          var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
          $composer_0.b19();
          FaBars(onClick(tmp_0, tmp0_group), IconSize_XL_getInstance(), $composer_0, 48, 0);
        }
        var tmp_3;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_3 = Unit_instance;
        }
        tmp = tmp_3;
      } else {
        $composer_0.m13();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_21($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.n25(p0, p1, p2);
    };
  }
  function leftSide$lambda_0($breakpoint, $onMenuClicked, $$changed) {
    return function ($composer, $force) {
      leftSide($breakpoint, $onMenuClicked, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function rightSide$lambda($$changed) {
    return function ($composer, $force) {
      rightSide($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function socialBar(row, $composer, $changed, $default) {
    var row_0 = {_v: row};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t1a(1989155322);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.w19(row_0._v) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.v18()) {
      if (!(($default & 1) === 0)) {
        row_0._v = false;
      }
      if (isTraceInProgress()) {
        traceEventStart(1989155322, $dirty, -1, 'org.example.landingpage.components.socialBar (SocialBar.kt:18)');
      }
      if (row_0._v) {
        $composer_0.a19(-658816440);
        var tmp0_modifier = backgroundColor(borderRadius(minHeight(padding_1(margin_1(Companion_instance_0, get_px(25)), VOID, get_px(25)), get_px(40)), get_px(20)), Theme_LightGrayBg_getInstance().s3j_1);
        Row(tmp0_modifier, Center_instance_0, CenterVertically_instance, null, ComposableSingletons$SocialBarKt_getInstance().t3k_1, $composer_0, 24576, 8);
        $composer_0.b19();
      } else {
        $composer_0.a19(-658376116);
        var tmp = backgroundColor(borderRadius(minWidth(padding_1(margin(Companion_instance_0, VOID, get_px(25)), get_px(25)), get_px(40)), get_px(20)), Theme_LightGrayBg_getInstance().s3j_1);
        var tmp_0 = Center_instance_0;
        var tmp_1 = CenterHorizontally_instance;
        Column(tmp, tmp_0, tmp_1, null, ComposableSingletons$SocialBarKt_getInstance().u3k_1, $composer_0, 24576, 8);
        $composer_0.b19();
      }
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
      tmp0_safe_receiver.u1f(socialBar$lambda(row_0, $changed, $default));
    }
  }
  function SocialLinks(row, $composer, $changed, $default) {
    var row_0 = {_v: row};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t1a(-1409315904);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.w19(row_0._v) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.v18()) {
      if (!(($default & 1) === 0)) {
        row_0._v = false;
      }
      if (isTraceInProgress()) {
        traceEventStart(-1409315904, $dirty, -1, 'org.example.landingpage.components.SocialLinks (SocialBar.kt:49)');
      }
      var tmp = OpenLinkStrategy_IN_NEW_TAB_getInstance();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.example.landingpage.components.SocialLinks.<anonymous>' call
      var tmp_0 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_0, 1490968079, true, SocialLinks$lambda(row_0));
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
        // Inline function 'org.example.landingpage.components.SocialLinks.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_25(dispatchReceiver);
        $composer_1.l1a(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_1.b19();
      Link_0('https://github.com/Garfend', null, null, null, tmp, null, false, null, tmp0, $composer_0, 100687878, 238);
      var tmp_3 = OpenLinkStrategy_IN_NEW_TAB_getInstance();
      Link_0('https://www.linkedin.com/in/abdelrahman-abdelwahab-abo-ibrahim-91a01a214/', null, null, null, tmp_3, null, false, null, ComposableSingletons$SocialBarKt_getInstance().v3k_1, $composer_0, 100687878, 238);
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
      tmp0_safe_receiver.u1f(SocialLinks$lambda_0(row_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref_22($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.n25(p0, p1, p2);
    };
  }
  function ComposableSingletons$SocialBarKt$lambda_1$lambda_fzk4p0($this$Row, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 17) === 16) || !$composer_0.v18()) {
      if (isTraceInProgress()) {
        traceEventStart(1878585432, $changed, -1, 'org.example.landingpage.components.ComposableSingletons$SocialBarKt.lambda-1.<anonymous> (SocialBar.kt:30)');
      }
      SocialLinks(true, $composer_0, 6, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.m13();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_23($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.n25(p0, p1, p2);
    };
  }
  function ComposableSingletons$SocialBarKt$lambda_2$lambda_cu2cd7($this$Column, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 17) === 16) || !$composer_0.v18()) {
      if (isTraceInProgress()) {
        traceEventStart(1520508565, $changed, -1, 'org.example.landingpage.components.ComposableSingletons$SocialBarKt.lambda-2.<anonymous> (SocialBar.kt:43)');
      }
      SocialLinks(false, $composer_0, 0, 1);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.m13();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_24($boundThis) {
    return function (p0, p1) {
      return $boundThis.t18(p0, p1);
    };
  }
  function ComposableSingletons$SocialBarKt$lambda_3$lambda_tdf8jq($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 3) === 2) || !$composer_0.v18()) {
      if (isTraceInProgress()) {
        traceEventStart(-959280506, $changed, -1, 'org.example.landingpage.components.ComposableSingletons$SocialBarKt.lambda-3.<anonymous> (SocialBar.kt:68)');
      }
      FaLinkedin(toModifier(get_SocialLinkStyle(), $composer_0, 0), IconSize_LG_getInstance(), $composer_0, 48, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.m13();
    }
    return Unit_instance;
  }
  function ComposableSingletons$SocialBarKt() {
    ComposableSingletons$SocialBarKt_instance = this;
    var tmp = this;
    tmp.t3k_1 = ComposableLambda$invoke$ref_22(composableLambdaInstance(1878585432, false, ComposableSingletons$SocialBarKt$lambda_1$lambda_fzk4p0));
    var tmp_0 = this;
    tmp_0.u3k_1 = ComposableLambda$invoke$ref_23(composableLambdaInstance(1520508565, false, ComposableSingletons$SocialBarKt$lambda_2$lambda_cu2cd7));
    var tmp_1 = this;
    tmp_1.v3k_1 = ComposableLambda$invoke$ref_24(composableLambdaInstance(-959280506, false, ComposableSingletons$SocialBarKt$lambda_3$lambda_tdf8jq));
  }
  var ComposableSingletons$SocialBarKt_instance;
  function ComposableSingletons$SocialBarKt_getInstance() {
    if (ComposableSingletons$SocialBarKt_instance == null)
      new ComposableSingletons$SocialBarKt();
    return ComposableSingletons$SocialBarKt_instance;
  }
  function socialBar$lambda($row, $$changed, $$default) {
    return function ($composer, $force) {
      socialBar($row._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function SocialLinks$lambda($row) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.v18()) {
        if (isTraceInProgress()) {
          traceEventStart(1490968079, $changed, -1, 'org.example.landingpage.components.SocialLinks.<anonymous> (SocialBar.kt:54)');
        }
        var tmp0_$receiver = toModifier(get_SocialLinkStyle(), $composer_0, 0);
        var tmp1_bottom = $row._v ? get_px(0) : get_px(40);
        var tmp2_right = $row._v ? get_px(40) : get_px(0);
        FaGithub(margin(tmp0_$receiver, VOID, tmp2_right, tmp1_bottom), IconSize_LG_getInstance(), $composer_0, 48, 0);
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
  function ComposableLambda$invoke$ref_25($boundThis) {
    return function (p0, p1) {
      return $boundThis.t18(p0, p1);
    };
  }
  function SocialLinks$lambda_0($row, $$changed, $$default) {
    return function ($composer, $force) {
      SocialLinks($row._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function contactForm(breakpoint, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t1a(-1034584953);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.t10(breakpoint) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.v18()) {
      if (isTraceInProgress()) {
        traceEventStart(-1034584953, $dirty, -1, 'org.example.landingpage.components.contactForm (contactForm.kt:22)');
      }
      var tmp = Companion_instance_0;
      $composer_0.a19(-1175408168);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.f1a();
      var tmp_0;
      if (false || it === Companion_getInstance().s13_1) {
        // Inline function 'org.example.landingpage.components.contactForm.<anonymous>' call
        var value = contactForm$lambda;
        this_0.l1a(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_0.b19();
      var tmp_2 = toAttrs(attrsModifier(tmp, tmp0_group));
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.example.landingpage.components.contactForm.<anonymous>' call
      var tmp_3 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_3, 1033242062, true, contactForm$lambda_0(breakpoint));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.a19(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.t10(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.f1a();
      var tmp_4;
      if (invalid || it_0 === Companion_getInstance().s13_1) {
        // Inline function 'org.example.landingpage.components.contactForm.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_31(dispatchReceiver);
        $composer_1.l1a(value_0);
        tmp_4 = value_0;
      } else {
        tmp_4 = it_0;
      }
      var tmp_5 = tmp_4;
      var tmp0 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
      $composer_1.b19();
      Form('https://formspree.io/f/xbjeydwd', tmp_2, tmp0, $composer_0, 390, 0);
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
      tmp1_safe_receiver.u1f(contactForm$lambda_1(breakpoint, $changed));
    }
  }
  function ComposableLambda$invoke$ref_26($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.n25(p0, p1, p2);
    };
  }
  function ComposableSingletons$ContactFormKt$lambda_1$lambda_27lvxi($this$Label, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-406774513, $changed, -1, 'org.example.landingpage.components.ComposableSingletons$ContactFormKt.lambda-1.<anonymous> (contactForm.kt:38)');
    }
    Text('Name', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_27($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.n25(p0, p1, p2);
    };
  }
  function ComposableSingletons$ContactFormKt$lambda_2$lambda_qm0l4p($this$Label, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-232143866, $changed, -1, 'org.example.landingpage.components.ComposableSingletons$ContactFormKt.lambda-2.<anonymous> (contactForm.kt:67)');
    }
    Text('Email', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_28($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.n25(p0, p1, p2);
    };
  }
  function ComposableSingletons$ContactFormKt$lambda_3$lambda_flgzs8($this$Label, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(2128617031, $changed, -1, 'org.example.landingpage.components.ComposableSingletons$ContactFormKt.lambda-3.<anonymous> (contactForm.kt:97)');
    }
    Text('Message', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_29($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.n25(p0, p1, p2);
    };
  }
  function ComposableSingletons$ContactFormKt$lambda_4$lambda_d85h9z($this$Button, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-1613811494, $changed, -1, 'org.example.landingpage.components.ComposableSingletons$ContactFormKt.lambda-4.<anonymous> (contactForm.kt:132)');
    }
    Text('Submit', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_30($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.n25(p0, p1, p2);
    };
  }
  function ComposableSingletons$ContactFormKt$lambda_5$lambda_szc3my($this$Box, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 17) === 16) || !$composer_0.v18()) {
      if (isTraceInProgress()) {
        traceEventStart(889203668, $changed, -1, 'org.example.landingpage.components.ComposableSingletons$ContactFormKt.lambda-5.<anonymous> (contactForm.kt:122)');
      }
      Button(toAttrs(cursor(color(backgroundColor(borderRadius(border(height(toModifier(get_MainButtonStyle(), $composer_0, 6), get_px(40)), get_px(0)), get_px(5)), Theme_DarkRed_getInstance().s3j_1), Colors_instance.c2x()), Companion_instance_4.q2k())), ComposableSingletons$ContactFormKt_getInstance().z3k_1, $composer_0, 48, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.m13();
    }
    return Unit_instance;
  }
  function ComposableSingletons$ContactFormKt() {
    ComposableSingletons$ContactFormKt_instance = this;
    var tmp = this;
    tmp.w3k_1 = ComposableLambda$invoke$ref_26(composableLambdaInstance(-406774513, false, ComposableSingletons$ContactFormKt$lambda_1$lambda_27lvxi));
    var tmp_0 = this;
    tmp_0.x3k_1 = ComposableLambda$invoke$ref_27(composableLambdaInstance(-232143866, false, ComposableSingletons$ContactFormKt$lambda_2$lambda_qm0l4p));
    var tmp_1 = this;
    tmp_1.y3k_1 = ComposableLambda$invoke$ref_28(composableLambdaInstance(2128617031, false, ComposableSingletons$ContactFormKt$lambda_3$lambda_flgzs8));
    var tmp_2 = this;
    tmp_2.z3k_1 = ComposableLambda$invoke$ref_29(composableLambdaInstance(-1613811494, false, ComposableSingletons$ContactFormKt$lambda_4$lambda_d85h9z));
    var tmp_3 = this;
    tmp_3.a3l_1 = ComposableLambda$invoke$ref_30(composableLambdaInstance(889203668, false, ComposableSingletons$ContactFormKt$lambda_5$lambda_szc3my));
  }
  var ComposableSingletons$ContactFormKt_instance;
  function ComposableSingletons$ContactFormKt_getInstance() {
    if (ComposableSingletons$ContactFormKt_instance == null)
      new ComposableSingletons$ContactFormKt();
    return ComposableSingletons$ContactFormKt_instance;
  }
  function contactForm$lambda($this$attrsModifier) {
    $this$attrsModifier.n27('method', 'POST');
    return Unit_instance;
  }
  function contactForm$lambda$lambda($this$attrsModifier) {
    $this$attrsModifier.n27('placeholder', 'Full Name');
    $this$attrsModifier.n27('name', 'name');
    $this$attrsModifier.n27('required', 'true');
    return Unit_instance;
  }
  function contactForm$lambda$lambda_0($this$attrsModifier) {
    $this$attrsModifier.n27('placeholder', 'Email Address');
    $this$attrsModifier.n27('name', 'email');
    $this$attrsModifier.n27('required', 'true');
    return Unit_instance;
  }
  function contactForm$lambda$lambda_1($this$attrsModifier) {
    $this$attrsModifier.n27('placeholder', 'Your Message');
    $this$attrsModifier.n27('name', 'message');
    $this$attrsModifier.n27('required', 'true');
    return Unit_instance;
  }
  function contactForm$lambda_0($breakpoint) {
    return function ($this$Form, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(1033242062, $changed, -1, 'org.example.landingpage.components.contactForm.<anonymous> (contactForm.kt:31)');
      }
      var tmp0_attrs = toAttrs(color(classNames(Companion_instance_0, ['form-label']), Theme_Primary_getInstance().s3j_1));
      Label('inputName', tmp0_attrs, ComposableSingletons$ContactFormKt_getInstance().w3k_1, $composer_0, 390, 0);
      var tmp = Text_getInstance();
      var tmp_0 = boxShadow(border(width(margin_1(classNames(id(toModifier(get_InputStyle(), $composer_0, 6), 'inputName'), ['form-control']), VOID, VOID, get_px(10)), $breakpoint.i2(Breakpoint_MD_getInstance()) >= 0 ? get_px(500) : get_px(250)), get_px(0)), get_px(0), get_px(0), get_px(0), get_px(0), null);
      $composer_0.a19(1830994751);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.f1a();
      var tmp_1;
      if (false || it === Companion_getInstance().s13_1) {
        // Inline function 'org.example.landingpage.components.contactForm.<anonymous>.<anonymous>.<anonymous>' call
        var value = contactForm$lambda$lambda;
        $composer_0.l1a(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.b19();
      Input(tmp, toAttrs(attrsModifier(tmp_0, tmp0_group)), $composer_0, 0);
      var tmp1_attrs = toAttrs(color(classNames(Companion_instance_0, ['form-label']), Theme_Primary_getInstance().s3j_1));
      Label('inputEmail', tmp1_attrs, ComposableSingletons$ContactFormKt_getInstance().x3k_1, $composer_0, 390, 0);
      var tmp_3 = Email_getInstance();
      var tmp_4 = boxShadow(border(width(margin_1(classNames(id(toModifier(get_InputStyle(), $composer_0, 6), 'inputEmail'), ['form-control']), VOID, VOID, get_px(10)), $breakpoint.i2(Breakpoint_MD_getInstance()) >= 0 ? get_px(500) : get_px(250)), get_px(0)), get_px(0), get_px(0), get_px(0), get_px(0), null);
      $composer_0.a19(1831023525);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_0.f1a();
      var tmp_5;
      if (false || it_0 === Companion_getInstance().s13_1) {
        // Inline function 'org.example.landingpage.components.contactForm.<anonymous>.<anonymous>.<anonymous>' call
        var value_0 = contactForm$lambda$lambda_0;
        $composer_0.l1a(value_0);
        tmp_5 = value_0;
      } else {
        tmp_5 = it_0;
      }
      var tmp_6 = tmp_5;
      var tmp1_group = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      $composer_0.b19();
      Input(tmp_3, toAttrs(attrsModifier(tmp_4, tmp1_group)), $composer_0, 0);
      var tmp2_attrs = toAttrs(color(classNames(Companion_instance_0, ['form-label']), Theme_Primary_getInstance().s3j_1));
      Label('inputMessage', tmp2_attrs, ComposableSingletons$ContactFormKt_getInstance().y3k_1, $composer_0, 390, 0);
      var tmp_7 = boxShadow(border(width(margin_1(height(classNames(id(toModifier(get_InputStyle(), $composer_0, 6), 'inputMessage'), ['form-control']), get_px(150)), VOID, VOID, get_px(20)), $breakpoint.i2(Breakpoint_MD_getInstance()) >= 0 ? get_px(500) : get_px(250)), get_px(0)), get_px(0), get_px(0), get_px(0), get_px(0), null);
      $composer_0.a19(1831052677);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_0.f1a();
      var tmp_8;
      if (false || it_1 === Companion_getInstance().s13_1) {
        // Inline function 'org.example.landingpage.components.contactForm.<anonymous>.<anonymous>.<anonymous>' call
        var value_1 = contactForm$lambda$lambda_1;
        $composer_0.l1a(value_1);
        tmp_8 = value_1;
      } else {
        tmp_8 = it_1;
      }
      var tmp_9 = tmp_8;
      var tmp2_group = (tmp_9 == null ? true : !(tmp_9 == null)) ? tmp_9 : THROW_CCE();
      $composer_0.b19();
      TextArea(null, toAttrs(attrsModifier(tmp_7, tmp2_group)), $composer_0, 0, 1);
      var tmp_10 = fillMaxWidth(Companion_instance_0);
      var tmp_11 = Center_instance;
      Box(tmp_10, tmp_11, null, ComposableSingletons$ContactFormKt_getInstance().a3l_1, $composer_0, 3072, 4);
      var tmp_12;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_12 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_31($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.n25(p0, p1, p2);
    };
  }
  function contactForm$lambda_1($breakpoint, $$changed) {
    return function ($composer, $force) {
      contactForm($breakpoint, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function overflowMenu(onMenuClosed, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t1a(1864571238);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.v19(onMenuClosed) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.v18()) {
      if (isTraceInProgress()) {
        traceEventStart(1864571238, $dirty, -1, 'org.example.landingpage.components.overflowMenu (overflowMenu.kt:30)');
      }
      // Inline function 'androidx.compose.runtime.rememberCoroutineScope' call
      var getContext = null;
      var $composer_1 = $composer_0;
      $composer_1.a19(773894976);
      sourceInformation($composer_1, 'CC(rememberCoroutineScope)482@20254L144:Effects.kt#9igjgp');
      if (!((1 & 1) === 0)) {
        getContext = overflowMenu$lambda_3;
      }
      var composer = $composer_1;
      $composer_1.a19(-954370320);
      sourceInformation($composer_1, 'CC(remember):Effects.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.f1a();
      var tmp;
      if (false || it === Companion_getInstance().s13_1) {
        // Inline function 'androidx.compose.runtime.rememberCoroutineScope.<anonymous>' call
        var value = new CompositionScopedCoroutineScopeCanceller(createCompositionCoroutineScope(getContext(), composer));
        $composer_1.l1a(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_1.b19();
      var wrapper = tmp1_group;
      var tmp0 = wrapper.f1g_1;
      $composer_1.b19();
      var scope = tmp0;
      var breakpoint = rememberBreakpoint($composer_0, 0);
      $composer_0.a19(181453934);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_0.f1a();
      var tmp_1;
      if (false || it_0 === Companion_getInstance().s13_1) {
        // Inline function 'org.example.landingpage.components.overflowMenu.<anonymous>' call
        var value_0 = mutableStateOf(get_percent(-100));
        this_0.l1a(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.b19();
      var translateX$delegate = tmp0_group;
      $composer_0.a19(181455945);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = this_1.f1a();
      var tmp_3;
      if (false || it_1 === Companion_getInstance().s13_1) {
        // Inline function 'org.example.landingpage.components.overflowMenu.<anonymous>' call
        var value_1 = mutableStateOf(get_percent(0));
        this_1.l1a(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmp1_group_0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_0.b19();
      var opacity$delegate = tmp1_group_0;
      $composer_0.a19(181458478);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_2 = $composer_0;
      var invalid = !!(!!($composer_0.t10(breakpoint) | $composer_0.v19(scope)) | ($dirty & 14) === 4);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = this_2.f1a();
      var tmp_5;
      if (invalid || it_2 === Companion_getInstance().s13_1) {
        // Inline function 'org.example.landingpage.components.overflowMenu.<anonymous>' call
        var value_2 = overflowMenu$slambda_0(breakpoint, scope, translateX$delegate, opacity$delegate, onMenuClosed, null);
        this_2.l1a(value_2);
        tmp_5 = value_2;
      } else {
        tmp_5 = it_2;
      }
      var tmp_6 = tmp_5;
      var tmp2_group = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      $composer_0.b19();
      LaunchedEffect(breakpoint, tmp2_group, $composer_0, 0);
      var tmp_7 = height(fillMaxWidth(Companion_instance_0), get_vh(100));
      // Inline function 'org.jetbrains.compose.web.css.Companion.Fixed' call
      // Inline function 'org.jetbrains.compose.web.css.Position' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_8 = transition(backgroundColor(opacity(zIndex(position(tmp_7, 'fixed'), 2), overflowMenu$lambda_1(opacity$delegate)), Companion_instance_9.e2w(0.5, 0.0, 0.0, 0.0)), [Companion_instance_6.u2n('opacity', get_ms(500))]);
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.example.landingpage.components.overflowMenu.<anonymous>' call
      var tmp_9 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_9, -1269055395, true, overflowMenu$lambda_4(breakpoint, translateX$delegate, scope, onMenuClosed, opacity$delegate));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_2 = $composer_0;
      $composer_2.a19(1157296644);
      sourceInformation($composer_2, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_2.t10(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_3 = $composer_2.f1a();
      var tmp_10;
      if (invalid_0 || it_3 === Companion_getInstance().s13_1) {
        // Inline function 'org.example.landingpage.components.overflowMenu.<anonymous>.<anonymous>' call
        var value_3 = ComposableLambda$invoke$ref_34(dispatchReceiver);
        $composer_2.l1a(value_3);
        tmp_10 = value_3;
      } else {
        tmp_10 = it_3;
      }
      var tmp_11 = tmp_10;
      var tmp0_0 = (tmp_11 == null ? true : !(tmp_11 == null)) ? tmp_11 : THROW_CCE();
      $composer_2.b19();
      Column(tmp_8, null, null, null, tmp0_0, $composer_0, 24576, 14);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.m13();
    }
    var tmp3_safe_receiver = $composer_0.u1a();
    if (tmp3_safe_receiver == null)
      null;
    else {
      tmp3_safe_receiver.u1f(overflowMenu$lambda_5(onMenuClosed, $changed));
    }
  }
  function overflowMenu$lambda($translateX$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('translateX', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $translateX$delegate.w1();
  }
  function overflowMenu$lambda_0($translateX$delegate, _set____db54di) {
    getLocalDelegateReference('translateX', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $translateX$delegate.or(_set____db54di);
    return Unit_instance;
  }
  function overflowMenu$lambda_1($opacity$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('opacity', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $opacity$delegate.w1();
  }
  function overflowMenu$lambda_2($opacity$delegate, _set____db54di) {
    getLocalDelegateReference('opacity', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $opacity$delegate.or(_set____db54di);
    return Unit_instance;
  }
  function overflowMenu$lambda_3() {
    return EmptyCoroutineContext_getInstance();
  }
  function overflowMenu$slambda$slambda($onMenuClosed, $translateX$delegate, $opacity$delegate, resultContinuation) {
    this.j3l_1 = $onMenuClosed;
    this.k3l_1 = $translateX$delegate;
    this.l3l_1 = $opacity$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(overflowMenu$slambda$slambda).k1h = function ($this$launch, $completion) {
    var tmp = this.l1h($this$launch, $completion);
    tmp.x8_1 = Unit_instance;
    tmp.y8_1 = null;
    return tmp.d9();
  };
  protoOf(overflowMenu$slambda$slambda).p9 = function (p1, $completion) {
    return this.k1h((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(overflowMenu$slambda$slambda).d9 = function () {
    var suspendResult = this.x8_1;
    $sm: do
      try {
        var tmp = this.v8_1;
        switch (tmp) {
          case 0:
            this.w8_1 = 2;
            overflowMenu$lambda_0(this.k3l_1, get_percent(-100));
            overflowMenu$lambda_2(this.l3l_1, get_percent(0));
            this.v8_1 = 1;
            suspendResult = delay(new Long(500, 0), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.j3l_1();
            return Unit_instance;
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
  protoOf(overflowMenu$slambda$slambda).l1h = function ($this$launch, completion) {
    var i = new overflowMenu$slambda$slambda(this.j3l_1, this.k3l_1, this.l3l_1, completion);
    i.m3l_1 = $this$launch;
    return i;
  };
  function overflowMenu$slambda$slambda_0($onMenuClosed, $translateX$delegate, $opacity$delegate, resultContinuation) {
    var i = new overflowMenu$slambda$slambda($onMenuClosed, $translateX$delegate, $opacity$delegate, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.k1h($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function overflowMenu$slambda($breakpoint, $scope, $translateX$delegate, $opacity$delegate, $onMenuClosed, resultContinuation) {
    this.v3l_1 = $breakpoint;
    this.w3l_1 = $scope;
    this.x3l_1 = $translateX$delegate;
    this.y3l_1 = $opacity$delegate;
    this.z3l_1 = $onMenuClosed;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(overflowMenu$slambda).k1h = function ($this$LaunchedEffect, $completion) {
    var tmp = this.l1h($this$LaunchedEffect, $completion);
    tmp.x8_1 = Unit_instance;
    tmp.y8_1 = null;
    return tmp.d9();
  };
  protoOf(overflowMenu$slambda).p9 = function (p1, $completion) {
    return this.k1h((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(overflowMenu$slambda).d9 = function () {
    var suspendResult = this.x8_1;
    $sm: do
      try {
        var tmp = this.v8_1;
        if (tmp === 0) {
          this.w8_1 = 1;
          overflowMenu$lambda_0(this.x3l_1, get_percent(0));
          overflowMenu$lambda_2(this.y3l_1, get_percent(100));
          if (this.v3l_1.i2(Breakpoint_MD_getInstance()) > 0) {
            launch(this.w3l_1, VOID, VOID, overflowMenu$slambda$slambda_0(this.z3l_1, this.x3l_1, this.y3l_1, null));
          }
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
  protoOf(overflowMenu$slambda).l1h = function ($this$LaunchedEffect, completion) {
    var i = new overflowMenu$slambda(this.v3l_1, this.w3l_1, this.x3l_1, this.y3l_1, this.z3l_1, completion);
    i.a3m_1 = $this$LaunchedEffect;
    return i;
  };
  function overflowMenu$slambda_0($breakpoint, $scope, $translateX$delegate, $opacity$delegate, $onMenuClosed, resultContinuation) {
    var i = new overflowMenu$slambda($breakpoint, $scope, $translateX$delegate, $opacity$delegate, $onMenuClosed, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.k1h($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function overflowMenu$lambda$lambda$lambda$lambda$slambda($onMenuClosed, $translateX$delegate, $opacity$delegate, resultContinuation) {
    this.j3m_1 = $onMenuClosed;
    this.k3m_1 = $translateX$delegate;
    this.l3m_1 = $opacity$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(overflowMenu$lambda$lambda$lambda$lambda$slambda).k1h = function ($this$launch, $completion) {
    var tmp = this.l1h($this$launch, $completion);
    tmp.x8_1 = Unit_instance;
    tmp.y8_1 = null;
    return tmp.d9();
  };
  protoOf(overflowMenu$lambda$lambda$lambda$lambda$slambda).p9 = function (p1, $completion) {
    return this.k1h((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(overflowMenu$lambda$lambda$lambda$lambda$slambda).d9 = function () {
    var suspendResult = this.x8_1;
    $sm: do
      try {
        var tmp = this.v8_1;
        switch (tmp) {
          case 0:
            this.w8_1 = 2;
            overflowMenu$lambda_0(this.k3m_1, get_percent(-100));
            overflowMenu$lambda_2(this.l3m_1, get_percent(0));
            this.v8_1 = 1;
            suspendResult = delay(new Long(500, 0), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.j3m_1();
            return Unit_instance;
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
  protoOf(overflowMenu$lambda$lambda$lambda$lambda$slambda).l1h = function ($this$launch, completion) {
    var i = new overflowMenu$lambda$lambda$lambda$lambda$slambda(this.j3m_1, this.k3m_1, this.l3m_1, completion);
    i.m3m_1 = $this$launch;
    return i;
  };
  function overflowMenu$lambda$lambda$lambda$lambda$slambda_0($onMenuClosed, $translateX$delegate, $opacity$delegate, resultContinuation) {
    var i = new overflowMenu$lambda$lambda$lambda$lambda$slambda($onMenuClosed, $translateX$delegate, $opacity$delegate, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.k1h($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function overflowMenu$lambda$lambda$lambda$lambda($scope, $onMenuClosed, $translateX$delegate, $opacity$delegate) {
    return function (it) {
      launch($scope, VOID, VOID, overflowMenu$lambda$lambda$lambda$lambda$slambda_0($onMenuClosed, $translateX$delegate, $opacity$delegate, null));
      return Unit_instance;
    };
  }
  function overflowMenu$lambda$lambda$lambda($scope, $onMenuClosed, $translateX$delegate, $opacity$delegate) {
    return function ($this$Row, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.v18()) {
        if (isTraceInProgress()) {
          traceEventStart(-844548393, $changed, -1, 'org.example.landingpage.components.overflowMenu.<anonymous>.<anonymous>.<anonymous> (overflowMenu.kt:74)');
        }
        var tmp_0 = color(margin(cursor(Companion_instance_0, Companion_instance_4.q2k()), VOID, get_px(20)), Colors_instance.c2x());
        $composer_0.a19(555443118);
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = !!($composer_0.v19($scope) | $composer_0.t10($onMenuClosed));
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.f1a();
        var tmp_1;
        if (invalid || it === Companion_getInstance().s13_1) {
          // Inline function 'org.example.landingpage.components.overflowMenu.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = overflowMenu$lambda$lambda$lambda$lambda($scope, $onMenuClosed, $translateX$delegate, $opacity$delegate);
          $composer_0.l1a(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        $composer_0.b19();
        FaXmark(onClick(tmp_0, tmp0_group), IconSize_LG_getInstance(), $composer_0, 48, 0);
        var tmp0_modifier = size(Companion_instance_0, get_px(80));
        var tmp1_src = 'logo.svg';
        Image(tmp1_src, tmp0_modifier, null, null, null, 'Logo Image', false, null, $composer_0, 196614, 220);
        var tmp_3;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_3 = Unit_instance;
        }
        tmp = tmp_3;
      } else {
        $composer_0.m13();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_32($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.n25(p0, p1, p2);
    };
  }
  function overflowMenu$lambda$lambda$lambda$slambda($onMenuClosed, $translateX$delegate, $opacity$delegate, resultContinuation) {
    this.v3m_1 = $onMenuClosed;
    this.w3m_1 = $translateX$delegate;
    this.x3m_1 = $opacity$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(overflowMenu$lambda$lambda$lambda$slambda).k1h = function ($this$launch, $completion) {
    var tmp = this.l1h($this$launch, $completion);
    tmp.x8_1 = Unit_instance;
    tmp.y8_1 = null;
    return tmp.d9();
  };
  protoOf(overflowMenu$lambda$lambda$lambda$slambda).p9 = function (p1, $completion) {
    return this.k1h((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(overflowMenu$lambda$lambda$lambda$slambda).d9 = function () {
    var suspendResult = this.x8_1;
    $sm: do
      try {
        var tmp = this.v8_1;
        switch (tmp) {
          case 0:
            this.w8_1 = 2;
            overflowMenu$lambda_0(this.w3m_1, get_percent(-100));
            overflowMenu$lambda_2(this.x3m_1, get_percent(0));
            this.v8_1 = 1;
            suspendResult = delay(new Long(500, 0), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.v3m_1();
            return Unit_instance;
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
  protoOf(overflowMenu$lambda$lambda$lambda$slambda).l1h = function ($this$launch, completion) {
    var i = new overflowMenu$lambda$lambda$lambda$slambda(this.v3m_1, this.w3m_1, this.x3m_1, completion);
    i.y3m_1 = $this$launch;
    return i;
  };
  function overflowMenu$lambda$lambda$lambda$slambda_0($onMenuClosed, $translateX$delegate, $opacity$delegate, resultContinuation) {
    var i = new overflowMenu$lambda$lambda$lambda$slambda($onMenuClosed, $translateX$delegate, $opacity$delegate, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.k1h($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function overflowMenu$lambda$lambda$lambda_0($scope, $onMenuClosed, $translateX$delegate, $opacity$delegate) {
    return function (it) {
      launch($scope, VOID, VOID, overflowMenu$lambda$lambda$lambda$slambda_0($onMenuClosed, $translateX$delegate, $opacity$delegate, null));
      return Unit_instance;
    };
  }
  function overflowMenu$lambda$lambda($scope, $onMenuClosed, $translateX$delegate, $opacity$delegate) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.v18()) {
        if (isTraceInProgress()) {
          traceEventStart(-1605457452, $changed, -1, 'org.example.landingpage.components.overflowMenu.<anonymous>.<anonymous> (overflowMenu.kt:70)');
        }
        var tmp_0 = margin_1(Companion_instance_0, VOID, VOID, get_px(25));
        var tmp_1 = CenterVertically_instance;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'org.example.landingpage.components.overflowMenu.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_2 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_2, -844548393, true, overflowMenu$lambda$lambda$lambda($scope, $onMenuClosed, $translateX$delegate, $opacity$delegate));
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
        var tmp_3;
        if (invalid || it === Companion_getInstance().s13_1) {
          // Inline function 'org.example.landingpage.components.overflowMenu.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_32(dispatchReceiver);
          $composer_1.l1a(value);
          tmp_3 = value;
        } else {
          tmp_3 = it;
        }
        var tmp_4 = tmp_3;
        var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        $composer_1.b19();
        Row(tmp_0, null, tmp_1, null, tmp0, $composer_0, 24576, 10);
        // Inline function 'kotlin.collections.forEach' call
        // Inline function 'kotlin.collections.toTypedArray' call
        var this_0 = get_entries_1();
        var tmp$ret$7 = copyToArray(this_0);
        var tmp0_iterator = take(tmp$ret$7, 6).j();
        while (tmp0_iterator.k()) {
          var element = tmp0_iterator.l();
          // Inline function 'org.example.landingpage.components.overflowMenu.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var tmp_5 = textDecorationLine(fontWeight(fontSize(fontFamily(margin_1(toModifier(get_NavigationItemStyle(), $composer_0, 6), VOID, VOID, get_px(10)), ['Roboto']), get_px(16)), Companion_instance_5.z2j()), Companion_instance_8.t2k());
          $composer_0.a19(555475214);
          // Inline function 'androidx.compose.runtime.cache' call
          var invalid_0 = !!($composer_0.v19($scope) | $composer_0.t10($onMenuClosed));
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it_0 = $composer_0.f1a();
          var tmp_6;
          if (invalid_0 || it_0 === Companion_getInstance().s13_1) {
            // Inline function 'org.example.landingpage.components.overflowMenu.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            var value_0 = overflowMenu$lambda$lambda$lambda_0($scope, $onMenuClosed, $translateX$delegate, $opacity$delegate);
            $composer_0.l1a(value_0);
            tmp_6 = value_0;
          } else {
            tmp_6 = it_0;
          }
          var tmp_7 = tmp_6;
          var tmp0_group = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
          $composer_0.b19();
          var tmp0_modifier = onClick(tmp_5, tmp0_group);
          var tmp1_path = element.s3k_1;
          var tmp2_text = element.q3k_1;
          var tmp3_openInternalLinksStrategy = OpenLinkStrategy_IN_PLACE_getInstance();
          Link(tmp1_path, tmp2_text, tmp0_modifier, null, tmp3_openInternalLinksStrategy, null, null, false, null, $composer_0, 24576, 488);
        }
        var tmp_8;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_8 = Unit_instance;
        }
        tmp = tmp_8;
      } else {
        $composer_0.m13();
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
  function overflowMenu$lambda_4($breakpoint, $translateX$delegate, $scope, $onMenuClosed, $opacity$delegate) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.v18()) {
        if (isTraceInProgress()) {
          traceEventStart(-1269055395, $changed, -1, 'org.example.landingpage.components.overflowMenu.<anonymous> (overflowMenu.kt:59)');
        }
        var tmp_0 = transition(translateX(backgroundColor(scrollBehavior(overflow(width(padding(fillMaxHeight(Companion_instance_0), get_px(25)), $breakpoint.i2(Breakpoint_MD_getInstance()) < 0 ? get_percent(50) : get_percent(25)), Companion_instance_10.o2m()), Companion_instance_11.q2m()), Theme_LightGray_getInstance().s3j_1), overflowMenu$lambda($translateX$delegate)), [Companion_instance_6.u2n('translate', get_ms(500))]);
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'org.example.landingpage.components.overflowMenu.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_1 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_1, -1605457452, true, overflowMenu$lambda$lambda($scope, $onMenuClosed, $translateX$delegate, $opacity$delegate));
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
        var tmp_2;
        if (invalid || it === Companion_getInstance().s13_1) {
          // Inline function 'org.example.landingpage.components.overflowMenu.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_33(dispatchReceiver);
          $composer_1.l1a(value);
          tmp_2 = value;
        } else {
          tmp_2 = it;
        }
        var tmp_3 = tmp_2;
        var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        $composer_1.b19();
        Column(tmp_0, null, null, null, tmp0, $composer_0, 24576, 14);
        var tmp_4;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_4 = Unit_instance;
        }
        tmp = tmp_4;
      } else {
        $composer_0.m13();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_34($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.n25(p0, p1, p2);
    };
  }
  function overflowMenu$lambda_5($onMenuClosed, $$changed) {
    return function ($composer, $force) {
      overflowMenu($onMenuClosed, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function portfolioCard(modifier, portfolio, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t1a(-1887917247);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.v19(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.t10(portfolio) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.v18()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance_0;
      }
      if (isTraceInProgress()) {
        traceEventStart(-1887917247, $dirty, -1, 'org.example.landingpage.components.portfolioCard (portfolioCard.kt:32)');
      }
      var tmp0_modifier = textDecorationLine(toModifier(get_PortfolioSectionStyle(), $composer_0, 0), Companion_instance_8.t2k());
      var tmp1_path = portfolio.e3n_1;
      var tmp2_openExternalLinksStrategy = OpenLinkStrategy_IN_NEW_TAB_getInstance();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.example.landingpage.components.portfolioCard.<anonymous>' call
      var tmp = $composer_0;
      var dispatchReceiver = composableLambda(tmp, -824385326, true, portfolioCard$lambda(modifier_0, portfolio));
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
      var tmp_0;
      if (invalid || it === Companion_getInstance().s13_1) {
        // Inline function 'org.example.landingpage.components.portfolioCard.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_40(dispatchReceiver);
        $composer_1.l1a(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_1.b19();
      Link_0(tmp1_path, tmp0_modifier, null, null, tmp2_openExternalLinksStrategy, null, false, null, tmp0, $composer_0, 100687872, 236);
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
      tmp0_safe_receiver.u1f(portfolioCard$lambda_0(modifier_0, portfolio, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref_35($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.n25(p0, p1, p2);
    };
  }
  function ComposableSingletons$PortfolioCardKt$lambda_1$lambda_d17v02($this$Box, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 17) === 16) || !$composer_0.v18()) {
      if (isTraceInProgress()) {
        traceEventStart(-1717674577, $changed, -1, 'org.example.landingpage.components.ComposableSingletons$PortfolioCardKt.lambda-1.<anonymous> (portfolioCard.kt:65)');
      }
      var tmp0_modifier = size(id(Companion_instance_0, 'linkIcon'), get_px(32));
      var tmp1_src = 'link_icon.svg';
      Image(tmp1_src, tmp0_modifier, null, null, null, 'Link Icon', false, null, $composer_0, 196614, 220);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.m13();
    }
    return Unit_instance;
  }
  function ComposableSingletons$PortfolioCardKt() {
    ComposableSingletons$PortfolioCardKt_instance = this;
    var tmp = this;
    tmp.f3n_1 = ComposableLambda$invoke$ref_35(composableLambdaInstance(-1717674577, false, ComposableSingletons$PortfolioCardKt$lambda_1$lambda_d17v02));
  }
  var ComposableSingletons$PortfolioCardKt_instance;
  function ComposableSingletons$PortfolioCardKt_getInstance() {
    if (ComposableSingletons$PortfolioCardKt_instance == null)
      new ComposableSingletons$PortfolioCardKt();
    return ComposableSingletons$PortfolioCardKt_instance;
  }
  function portfolioCard$lambda$lambda$lambda($portfolio) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.v18()) {
        if (isTraceInProgress()) {
          traceEventStart(2069887733, $changed, -1, 'org.example.landingpage.components.portfolioCard.<anonymous>.<anonymous>.<anonymous> (portfolioCard.kt:51)');
        }
        var tmp0_modifier = objectFit(size(Companion_instance_0, get_px(300)), Companion_instance_1.g2m());
        var tmp1_src = $portfolio.b3n_1;
        Image(tmp1_src, tmp0_modifier, null, null, null, 'Portfolio Image', false, null, $composer_0, 196608, 220);
        var tmp_0 = backgroundColor(fillMaxHeight(id(Companion_instance_0, 'greenOverlay')), Companion_instance_9.g2w(0.5, 0, 167, 142));
        var tmp_1 = Center_instance;
        Box(tmp_0, tmp_1, null, ComposableSingletons$PortfolioCardKt_getInstance().f3n_1, $composer_0, 3072, 4);
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
  function ComposableLambda$invoke$ref_36($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.n25(p0, p1, p2);
    };
  }
  function portfolioCard$lambda$lambda$lambda_0($portfolio) {
    return function ($this$P, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(1488897757, $changed, -1, 'org.example.landingpage.components.portfolioCard.<anonymous>.<anonymous>.<anonymous> (portfolioCard.kt:84)');
      }
      Text($portfolio.c3n_1, $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_37($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.n25(p0, p1, p2);
    };
  }
  function portfolioCard$lambda$lambda$lambda_1($portfolio) {
    return function ($this$P, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(2090802630, $changed, -1, 'org.example.landingpage.components.portfolioCard.<anonymous>.<anonymous>.<anonymous> (portfolioCard.kt:98)');
      }
      Text($portfolio.d3n_1, $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_38($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.n25(p0, p1, p2);
    };
  }
  function portfolioCard$lambda$lambda($portfolio) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.v18()) {
        if (isTraceInProgress()) {
          traceEventStart(-1391705413, $changed, -1, 'org.example.landingpage.components.portfolioCard.<anonymous>.<anonymous> (portfolioCard.kt:44)');
        }
        var tmp_0 = margin_1(maxWidth(fillMaxWidth(id(Companion_instance_0, 'boxParent')), get_px(300)), VOID, VOID, get_px(20));
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'org.example.landingpage.components.portfolioCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_1 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_1, 2069887733, true, portfolioCard$lambda$lambda$lambda($portfolio));
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
        var tmp_2;
        if (invalid || it === Companion_getInstance().s13_1) {
          // Inline function 'org.example.landingpage.components.portfolioCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_36(dispatchReceiver);
          $composer_1.l1a(value);
          tmp_2 = value;
        } else {
          tmp_2 = it;
        }
        var tmp_3 = tmp_2;
        var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        $composer_1.b19();
        Box(tmp_0, null, null, tmp0, $composer_0, 3072, 6);
        var tmp_4 = toAttrs(fontWeight(fontSize(fontFamily(margin_0(fillMaxWidth(id(Companion_instance_0, 'portfolioTitle')), get_px(0)), ['Roboto']), get_px(18)), Companion_instance_5.x2k()));
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'org.example.landingpage.components.portfolioCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_5 = $composer_0;
        var dispatchReceiver_0 = composableLambda(tmp_5, 1488897757, true, portfolioCard$lambda$lambda$lambda_0($portfolio));
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_2 = $composer_0;
        $composer_2.a19(1157296644);
        sourceInformation($composer_2, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_2.t10(dispatchReceiver_0);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_2.f1a();
        var tmp_6;
        if (invalid_0 || it_0 === Companion_getInstance().s13_1) {
          // Inline function 'org.example.landingpage.components.portfolioCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = ComposableLambda$invoke$ref_37(dispatchReceiver_0);
          $composer_2.l1a(value_0);
          tmp_6 = value_0;
        } else {
          tmp_6 = it_0;
        }
        var tmp_7 = tmp_6;
        var tmp0_0 = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
        $composer_2.b19();
        P(tmp_4, tmp0_0, $composer_0, 48, 0);
        var tmp_8 = toAttrs(opacity(color(fontWeight(fontSize(fontFamily(margin_0(fillMaxWidth(id(Companion_instance_0, 'portfolioDesc')), get_px(0)), ['Roboto']), get_px(14)), Companion_instance_5.z2j()), Theme_Secondary_getInstance().s3j_1), get_percent(50)));
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'org.example.landingpage.components.portfolioCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_9 = $composer_0;
        var dispatchReceiver_1 = composableLambda(tmp_9, 2090802630, true, portfolioCard$lambda$lambda$lambda_1($portfolio));
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_3 = $composer_0;
        $composer_3.a19(1157296644);
        sourceInformation($composer_3, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_1 = $composer_3.t10(dispatchReceiver_1);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_1 = $composer_3.f1a();
        var tmp_10;
        if (invalid_1 || it_1 === Companion_getInstance().s13_1) {
          // Inline function 'org.example.landingpage.components.portfolioCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_1 = ComposableLambda$invoke$ref_38(dispatchReceiver_1);
          $composer_3.l1a(value_1);
          tmp_10 = value_1;
        } else {
          tmp_10 = it_1;
        }
        var tmp_11 = tmp_10;
        var tmp0_1 = (tmp_11 == null ? true : !(tmp_11 == null)) ? tmp_11 : THROW_CCE();
        $composer_3.b19();
        P(tmp_8, tmp0_1, $composer_0, 48, 0);
        var tmp_12;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_12 = Unit_instance;
        }
        tmp = tmp_12;
      } else {
        $composer_0.m13();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_39($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.n25(p0, p1, p2);
    };
  }
  function portfolioCard$lambda($modifier, $portfolio) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.v18()) {
        if (isTraceInProgress()) {
          traceEventStart(-824385326, $changed, -1, 'org.example.landingpage.components.portfolioCard.<anonymous> (portfolioCard.kt:39)');
        }
        var tmp_0 = width_0(id($modifier._v, 'columnParent'), Companion_instance_12.s2m());
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'org.example.landingpage.components.portfolioCard.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_1 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_1, -1391705413, true, portfolioCard$lambda$lambda($portfolio));
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
        var tmp_2;
        if (invalid || it === Companion_getInstance().s13_1) {
          // Inline function 'org.example.landingpage.components.portfolioCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_39(dispatchReceiver);
          $composer_1.l1a(value);
          tmp_2 = value;
        } else {
          tmp_2 = it;
        }
        var tmp_3 = tmp_2;
        var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        $composer_1.b19();
        Column(tmp_0, null, null, null, tmp0, $composer_0, 24576, 14);
        var tmp_4;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_4 = Unit_instance;
        }
        tmp = tmp_4;
      } else {
        $composer_0.m13();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_40($boundThis) {
    return function (p0, p1) {
      return $boundThis.t18(p0, p1);
    };
  }
  function portfolioCard$lambda_0($modifier, $portfolio, $$changed, $$default) {
    return function ($composer, $force) {
      portfolioCard($modifier._v, $portfolio, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function sectionTitle(modifier, section, alignment, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var alignment_0 = {_v: alignment};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t1a(-659049702);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.v19(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.t10(section) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | (($default & 4) === 0 && $composer_0.v19(alignment_0._v) ? 256 : 128);
    if (!(($dirty & 147) === 146) || !$composer_0.v18()) {
      $composer_0.c19();
      if (($changed & 1) === 0 || $composer_0.g19()) {
        if (!(($default & 1) === 0)) {
          modifier_0._v = Companion_instance_0;
        }
        if (!(($default & 4) === 0)) {
          alignment_0._v = Start_instance;
          $dirty = $dirty & -897;
        }
      } else {
        $composer_0.m13();
        if (!(($default & 4) === 0))
          $dirty = $dirty & -897;
      }
      $composer_0.d19();
      if (isTraceInProgress()) {
        traceEventStart(-659049702, $dirty, -1, 'org.example.landingpage.components.sectionTitle (sectionTitle.kt:29)');
      }
      // Inline function 'androidx.compose.runtime.rememberCoroutineScope' call
      var getContext = null;
      var $composer_1 = $composer_0;
      $composer_1.a19(773894976);
      sourceInformation($composer_1, 'CC(rememberCoroutineScope)482@20254L144:Effects.kt#9igjgp');
      if (!((1 & 1) === 0)) {
        getContext = sectionTitle$lambda_2;
      }
      var composer = $composer_1;
      $composer_1.a19(-954370320);
      sourceInformation($composer_1, 'CC(remember):Effects.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.f1a();
      var tmp;
      if (false || it === Companion_getInstance().s13_1) {
        // Inline function 'androidx.compose.runtime.rememberCoroutineScope.<anonymous>' call
        var value = new CompositionScopedCoroutineScopeCanceller(createCompositionCoroutineScope(getContext(), composer));
        $composer_1.l1a(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_1.b19();
      var wrapper = tmp1_group;
      var tmp0 = wrapper.f1g_1;
      $composer_1.b19();
      var scope = tmp0;
      $composer_0.a19(-52250697);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_0.f1a();
      var tmp_1;
      if (false || it_0 === Companion_getInstance().s13_1) {
        // Inline function 'org.example.landingpage.components.sectionTitle.<anonymous>' call
        var value_0 = mutableStateOf(get_px(50));
        this_0.l1a(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.b19();
      var titleMargin$delegate = tmp0_group;
      $composer_0.a19(-52248745);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = this_1.f1a();
      var tmp_3;
      if (false || it_1 === Companion_getInstance().s13_1) {
        // Inline function 'org.example.landingpage.components.sectionTitle.<anonymous>' call
        var value_1 = mutableStateOf(get_px(50));
        this_1.l1a(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmp1_group_0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_0.b19();
      var subtitleMargin$delegate = tmp1_group_0;
      $composer_0.a19(-52243530);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_2 = $composer_0;
      var invalid = !!($composer_0.v19(scope) | $composer_0.v19(alignment_0._v));
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = this_2.f1a();
      var tmp_5;
      if (invalid || it_2 === Companion_getInstance().s13_1) {
        // Inline function 'org.example.landingpage.components.sectionTitle.<anonymous>' call
        var value_2 = sectionTitle$lambda_3(scope, alignment_0, subtitleMargin$delegate, titleMargin$delegate);
        this_2.l1a(value_2);
        tmp_5 = value_2;
      } else {
        tmp_5 = it_2;
      }
      var tmp_6 = tmp_5;
      var tmp2_group = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      $composer_0.b19();
      observeViewportEntered(section.p3k_1, 700.0, tmp2_group, $composer_0, 48);
      var tmp_7 = modifier_0._v;
      var tmp_8 = alignment_0._v;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.example.landingpage.components.sectionTitle.<anonymous>' call
      var tmp_9 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_9, 716646993, true, sectionTitle$lambda_4(alignment_0, subtitleMargin$delegate, section));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_2 = $composer_0;
      $composer_2.a19(1157296644);
      sourceInformation($composer_2, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_2.t10(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_3 = $composer_2.f1a();
      var tmp_10;
      if (invalid_0 || it_3 === Companion_getInstance().s13_1) {
        // Inline function 'org.example.landingpage.components.sectionTitle.<anonymous>.<anonymous>' call
        var value_3 = ComposableLambda$invoke$ref_42(dispatchReceiver);
        $composer_2.l1a(value_3);
        tmp_10 = value_3;
      } else {
        tmp_10 = it_3;
      }
      var tmp_11 = tmp_10;
      var tmp0_0 = (tmp_11 == null ? true : !(tmp_11 == null)) ? tmp_11 : THROW_CCE();
      $composer_2.b19();
      Column(tmp_7, null, tmp_8, null, tmp0_0, $composer_0, 24576 | 14 & $dirty | 896 & $dirty, 10);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.m13();
    }
    var tmp3_safe_receiver = $composer_0.u1a();
    if (tmp3_safe_receiver == null)
      null;
    else {
      tmp3_safe_receiver.u1f(sectionTitle$lambda_5(modifier_0, section, alignment_0, $changed, $default));
    }
  }
  function sectionTitle$lambda($titleMargin$delegate, _set____db54di) {
    getLocalDelegateReference('titleMargin', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $titleMargin$delegate.or(_set____db54di);
    return Unit_instance;
  }
  function sectionTitle$lambda_0($subtitleMargin$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('subtitleMargin', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $subtitleMargin$delegate.w1();
  }
  function sectionTitle$lambda_1($subtitleMargin$delegate, _set____db54di) {
    getLocalDelegateReference('subtitleMargin', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $subtitleMargin$delegate.or(_set____db54di);
    return Unit_instance;
  }
  function sectionTitle$lambda_2() {
    return EmptyCoroutineContext_getInstance();
  }
  function sectionTitle$lambda$slambda($alignment, $subtitleMargin$delegate, $titleMargin$delegate, resultContinuation) {
    this.o3n_1 = $alignment;
    this.p3n_1 = $subtitleMargin$delegate;
    this.q3n_1 = $titleMargin$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(sectionTitle$lambda$slambda).k1h = function ($this$launch, $completion) {
    var tmp = this.l1h($this$launch, $completion);
    tmp.x8_1 = Unit_instance;
    tmp.y8_1 = null;
    return tmp.d9();
  };
  protoOf(sectionTitle$lambda$slambda).p9 = function (p1, $completion) {
    return this.k1h((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(sectionTitle$lambda$slambda).d9 = function () {
    var suspendResult = this.x8_1;
    $sm: do
      try {
        var tmp = this.v8_1;
        switch (tmp) {
          case 0:
            this.w8_1 = 3;
            sectionTitle$lambda_1(this.p3n_1, get_px(0));
            if (equals(this.o3n_1._v, Start_instance)) {
              this.v8_1 = 1;
              suspendResult = delay(new Long(25, 0), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.v8_1 = 2;
              continue $sm;
            }

          case 1:
            this.v8_1 = 2;
            continue $sm;
          case 2:
            sectionTitle$lambda(this.q3n_1, get_px(0));
            return Unit_instance;
          case 3:
            throw this.y8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.w8_1 === 3) {
          throw e;
        } else {
          this.v8_1 = this.w8_1;
          this.y8_1 = e;
        }
      }
     while (true);
  };
  protoOf(sectionTitle$lambda$slambda).l1h = function ($this$launch, completion) {
    var i = new sectionTitle$lambda$slambda(this.o3n_1, this.p3n_1, this.q3n_1, completion);
    i.r3n_1 = $this$launch;
    return i;
  };
  function sectionTitle$lambda$slambda_0($alignment, $subtitleMargin$delegate, $titleMargin$delegate, resultContinuation) {
    var i = new sectionTitle$lambda$slambda($alignment, $subtitleMargin$delegate, $titleMargin$delegate, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.k1h($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function sectionTitle$lambda_3($scope, $alignment, $subtitleMargin$delegate, $titleMargin$delegate) {
    return function () {
      launch($scope, VOID, VOID, sectionTitle$lambda$slambda_0($alignment, $subtitleMargin$delegate, $titleMargin$delegate, null));
      return Unit_instance;
    };
  }
  function sectionTitle$lambda$lambda($section) {
    return function ($this$P, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(1273832047, $changed, -1, 'org.example.landingpage.components.sectionTitle.<anonymous>.<anonymous> (sectionTitle.kt:75)');
      }
      Text($section.q3k_1, $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_41($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.n25(p0, p1, p2);
    };
  }
  function sectionTitle$lambda_4($alignment, $subtitleMargin$delegate, $section) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.v18()) {
        if (isTraceInProgress()) {
          traceEventStart(716646993, $changed, -1, 'org.example.landingpage.components.sectionTitle.<anonymous> (sectionTitle.kt:52)');
        }
        var tmp_0 = fillMaxWidth(Companion_instance_0);
        var tmp0_subject = $alignment._v;
        var tmp1_$receiver = textAlign(tmp_0, equals(tmp0_subject, CenterHorizontally_instance) ? Companion_instance_13.t2j() : equals(tmp0_subject, End_instance) ? Companion_instance_13.w2j() : Companion_instance_13.v2j());
        var tmp2_left = equals($alignment._v, Start_instance) ? sectionTitle$lambda_0($subtitleMargin$delegate) : get_px(0);
        var tmp3_right = equals($alignment._v, CenterHorizontally_instance) ? sectionTitle$lambda_0($subtitleMargin$delegate) : get_px(0);
        var tmp4_bottom = get_px(10);
        var tmp5_top = get_px(0);
        var tmp_1 = toAttrs(transition(color(fontWeight(fontSize(fontFamily(margin(tmp1_$receiver, tmp5_top, tmp3_right, tmp4_bottom, tmp2_left), ['Roboto']), get_px(40)), Companion_instance_5.x2k()), Theme_Secondary_getInstance().s3j_1), [Companion_instance_6.u2n('margin', get_ms(300))]));
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'org.example.landingpage.components.sectionTitle.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_2 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_2, 1273832047, true, sectionTitle$lambda$lambda($section));
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
        var tmp_3;
        if (invalid || it === Companion_getInstance().s13_1) {
          // Inline function 'org.example.landingpage.components.sectionTitle.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_41(dispatchReceiver);
          $composer_1.l1a(value);
          tmp_3 = value;
        } else {
          tmp_3 = it;
        }
        var tmp_4 = tmp_3;
        var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        $composer_1.b19();
        P(tmp_1, tmp0, $composer_0, 48, 0);
        var tmp_5 = borderRadius(backgroundColor(width(height(Companion_instance_0, get_px(2)), get_px(80)), Theme_Primary_getInstance().s3j_1), get_px(50));
        Box(tmp_5, null, null, null, $composer_0, 0, 14);
        var tmp_6;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_6 = Unit_instance;
        }
        tmp = tmp_6;
      } else {
        $composer_0.m13();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_42($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.n25(p0, p1, p2);
    };
  }
  function sectionTitle$lambda_5($modifier, $section, $alignment, $$changed, $$default) {
    return function ($composer, $force) {
      sectionTitle($modifier._v, $section, $alignment._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function serviceCard(service, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t1a(-706117049);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.t10(service) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.v18()) {
      if (isTraceInProgress()) {
        traceEventStart(-706117049, $dirty, -1, 'org.example.landingpage.components.serviceCard (serviceCard.kt:21)');
      }
      var tmp = padding(margin_2(maxWidth(toModifier(get_ServiceCardStyle(), $composer_0, 6), get_px(300)), get_px(20)), get_px(20));
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.example.landingpage.components.serviceCard.<anonymous>' call
      var tmp_0 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_0, 1669479614, true, serviceCard$lambda(service));
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
        // Inline function 'org.example.landingpage.components.serviceCard.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_46(dispatchReceiver);
        $composer_1.l1a(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_1.b19();
      Column(tmp, null, null, null, tmp0, $composer_0, 24576, 14);
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
      tmp0_safe_receiver.u1f(serviceCard$lambda_0(service, $changed));
    }
  }
  function serviceCard$lambda$lambda($service) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.v18()) {
        if (isTraceInProgress()) {
          traceEventStart(623520836, $changed, -1, 'org.example.landingpage.components.serviceCard.<anonymous>.<anonymous> (serviceCard.kt:45)');
        }
        var tmp0_modifier = size(Companion_instance_0, get_px(40));
        var tmp1_src = $service.u3n_1;
        var tmp2_alt = $service.v3n_1;
        Image(tmp1_src, tmp0_modifier, null, null, null, tmp2_alt, false, null, $composer_0, 0, 220);
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
  function ComposableLambda$invoke$ref_43($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.n25(p0, p1, p2);
    };
  }
  function serviceCard$lambda$lambda_0($service) {
    return function ($this$P, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-548331684, $changed, -1, 'org.example.landingpage.components.serviceCard.<anonymous>.<anonymous> (serviceCard.kt:60)');
      }
      Text($service.w3n_1, $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_44($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.n25(p0, p1, p2);
    };
  }
  function serviceCard$lambda$lambda_1($service) {
    return function ($this$P, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-782908205, $changed, -1, 'org.example.landingpage.components.serviceCard.<anonymous>.<anonymous> (serviceCard.kt:71)');
      }
      Text($service.x3n_1, $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_45($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.n25(p0, p1, p2);
    };
  }
  function serviceCard$lambda($service) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.v18()) {
        if (isTraceInProgress()) {
          traceEventStart(1669479614, $changed, -1, 'org.example.landingpage.components.serviceCard.<anonymous> (serviceCard.kt:28)');
        }
        var tmp_0 = margin_1(padding(id(Companion_instance_0, 'iconBox'), get_px(10)), VOID, VOID, get_px(20));
        var tmp_1 = get_px(2);
        // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
        // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp0_$receiver = border(tmp_0, tmp_1, 'solid', Theme_Primary_getInstance().s3j_1);
        var tmp1_topLeft = get_px(20);
        var tmp2_topRight = get_px(20);
        var tmp3_bottomLeft = get_px(20);
        var tmp4_bottomRight = get_px(0);
        var tmp_2 = borderRadius_0(tmp0_$receiver, tmp1_topLeft, tmp2_topRight, tmp4_bottomRight, tmp3_bottomLeft);
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'org.example.landingpage.components.serviceCard.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_3 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_3, 623520836, true, serviceCard$lambda$lambda($service));
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
          // Inline function 'org.example.landingpage.components.serviceCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_43(dispatchReceiver);
          $composer_1.l1a(value);
          tmp_4 = value;
        } else {
          tmp_4 = it;
        }
        var tmp_5 = tmp_4;
        var tmp0 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
        $composer_1.b19();
        Box(tmp_2, null, null, tmp0, $composer_0, 3072, 6);
        var tmp_6 = toAttrs(fontWeight(fontSize(fontFamily(margin_1(fillMaxWidth(Companion_instance_0), get_px(0), VOID, get_px(10)), ['Roboto']), get_px(18)), Companion_instance_5.x2k()));
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'org.example.landingpage.components.serviceCard.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_7 = $composer_0;
        var dispatchReceiver_0 = composableLambda(tmp_7, -548331684, true, serviceCard$lambda$lambda_0($service));
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_2 = $composer_0;
        $composer_2.a19(1157296644);
        sourceInformation($composer_2, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_2.t10(dispatchReceiver_0);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_2.f1a();
        var tmp_8;
        if (invalid_0 || it_0 === Companion_getInstance().s13_1) {
          // Inline function 'org.example.landingpage.components.serviceCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = ComposableLambda$invoke$ref_44(dispatchReceiver_0);
          $composer_2.l1a(value_0);
          tmp_8 = value_0;
        } else {
          tmp_8 = it_0;
        }
        var tmp_9 = tmp_8;
        var tmp0_0 = (tmp_9 == null ? true : !(tmp_9 == null)) ? tmp_9 : THROW_CCE();
        $composer_2.b19();
        P(tmp_6, tmp0_0, $composer_0, 48, 0);
        var tmp_10 = toAttrs(fontWeight(fontSize(fontFamily(margin_1(fillMaxWidth(Companion_instance_0), get_px(0), VOID, get_px(0)), ['Roboto']), get_px(14)), Companion_instance_5.z2j()));
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'org.example.landingpage.components.serviceCard.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_11 = $composer_0;
        var dispatchReceiver_1 = composableLambda(tmp_11, -782908205, true, serviceCard$lambda$lambda_1($service));
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_3 = $composer_0;
        $composer_3.a19(1157296644);
        sourceInformation($composer_3, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_1 = $composer_3.t10(dispatchReceiver_1);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_1 = $composer_3.f1a();
        var tmp_12;
        if (invalid_1 || it_1 === Companion_getInstance().s13_1) {
          // Inline function 'org.example.landingpage.components.serviceCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_1 = ComposableLambda$invoke$ref_45(dispatchReceiver_1);
          $composer_3.l1a(value_1);
          tmp_12 = value_1;
        } else {
          tmp_12 = it_1;
        }
        var tmp_13 = tmp_12;
        var tmp0_1 = (tmp_13 == null ? true : !(tmp_13 == null)) ? tmp_13 : THROW_CCE();
        $composer_3.b19();
        P(tmp_10, tmp0_1, $composer_0, 48, 0);
        var tmp_14;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_14 = Unit_instance;
        }
        tmp = tmp_14;
      } else {
        $composer_0.m13();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_46($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.n25(p0, p1, p2);
    };
  }
  function serviceCard$lambda_0($service, $$changed) {
    return function ($composer, $force) {
      serviceCard($service, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  var Experience_First_instance;
  var Experience_Second_instance;
  var Experience_Third_instance;
  function values() {
    return [Experience_First_getInstance(), Experience_Second_getInstance(), Experience_Third_getInstance()];
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var Experience_entriesInitialized;
  function Experience_initEntries() {
    if (Experience_entriesInitialized)
      return Unit_instance;
    Experience_entriesInitialized = true;
    Experience_First_instance = new Experience('First', 0, '01', 'Kotlin Multi-Platform Developer', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'Google', 'February 2022', 'NOW');
    Experience_Second_instance = new Experience('Second', 1, '02', 'Mobile Developer', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'Facebook', 'January 2021', 'October 2021');
    Experience_Third_instance = new Experience('Third', 2, '03', 'Freelancer', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'Netflix', 'March 2020', 'August 2020');
  }
  var $ENTRIES;
  function Experience(name, ordinal, number, jobPosition, description, company, from, to) {
    Enum.call(this, name, ordinal);
    this.g3k_1 = number;
    this.h3k_1 = jobPosition;
    this.i3k_1 = description;
    this.j3k_1 = company;
    this.k3k_1 = from;
    this.l3k_1 = to;
  }
  function Experience_First_getInstance() {
    Experience_initEntries();
    return Experience_First_instance;
  }
  function Experience_Second_getInstance() {
    Experience_initEntries();
    return Experience_Second_instance;
  }
  function Experience_Third_getInstance() {
    Experience_initEntries();
    return Experience_Third_instance;
  }
  var Portfolio_One_instance;
  var Portfolio_Two_instance;
  var Portfolio_Three_instance;
  var Portfolio_Four_instance;
  var Portfolio_Five_instance;
  function values_0() {
    return [Portfolio_One_getInstance(), Portfolio_Two_getInstance(), Portfolio_Three_getInstance(), Portfolio_Four_getInstance(), Portfolio_Five_getInstance()];
  }
  function get_entries_0() {
    if ($ENTRIES_0 == null)
      $ENTRIES_0 = enumEntries(values_0());
    return $ENTRIES_0;
  }
  var Portfolio_entriesInitialized;
  function Portfolio_initEntries() {
    if (Portfolio_entriesInitialized)
      return Unit_instance;
    Portfolio_entriesInitialized = true;
    Portfolio_One_instance = new Portfolio('One', 0, 'portfolio1.png', 'MuseMagic', 'Android App - kotlin', 'https://github.com/Garfend/HistoryVerse');
    Portfolio_Two_instance = new Portfolio('Two', 1, 'portfolio2.png', 'Job-inder', 'Mobile app - flutter', 'https://github.com/mostafa1255/Job_Finder_App');
    Portfolio_Three_instance = new Portfolio('Three', 2, 'portfolio3.png', 'Landing page', 'Frontend - jetpack compose', '');
    Portfolio_Four_instance = new Portfolio('Four', 3, 'portfolio4.jpg', 'Expenser', 'Mobile App - flutter', 'https://github.com/Garfend/expenses-tracker');
    Portfolio_Five_instance = new Portfolio('Five', 4, 'portfolio5.png', 'Titanuim gym', 'UI/UX Design', 'https://www.figma.com/design/CdmOjyxgnziOM7jJso5zZ4/Titanium-Gym?t=tzsjDlRk7ZkYtHiQ-0');
  }
  var $ENTRIES_0;
  function Portfolio(name, ordinal, image, title, description, link) {
    Enum.call(this, name, ordinal);
    this.b3n_1 = image;
    this.c3n_1 = title;
    this.d3n_1 = description;
    this.e3n_1 = link;
  }
  function Portfolio_One_getInstance() {
    Portfolio_initEntries();
    return Portfolio_One_instance;
  }
  function Portfolio_Two_getInstance() {
    Portfolio_initEntries();
    return Portfolio_Two_instance;
  }
  function Portfolio_Three_getInstance() {
    Portfolio_initEntries();
    return Portfolio_Three_instance;
  }
  function Portfolio_Four_getInstance() {
    Portfolio_initEntries();
    return Portfolio_Four_instance;
  }
  function Portfolio_Five_getInstance() {
    Portfolio_initEntries();
    return Portfolio_Five_instance;
  }
  var Section_Home_instance;
  var Section_About_instance;
  var Section_Service_instance;
  var Section_Portfolio_instance;
  var Section_Experience_instance;
  var Section_Contact_instance;
  var Section_Testimonial_instance;
  var Section_Achievements_instance;
  function values_1() {
    return [Section_Home_getInstance(), Section_About_getInstance(), Section_Service_getInstance(), Section_Portfolio_getInstance(), Section_Experience_getInstance(), Section_Contact_getInstance(), Section_Testimonial_getInstance(), Section_Achievements_getInstance()];
  }
  function get_entries_1() {
    if ($ENTRIES_1 == null)
      $ENTRIES_1 = enumEntries(values_1());
    return $ENTRIES_1;
  }
  var Section_entriesInitialized;
  function Section_initEntries() {
    if (Section_entriesInitialized)
      return Unit_instance;
    Section_entriesInitialized = true;
    Section_Home_instance = new Section('Home', 0, 'home', 'Home', '', '#home');
    Section_About_instance = new Section('About', 1, 'about', 'About me', 'About me', '#about');
    Section_Service_instance = new Section('Service', 2, 'service', 'Service', "I'm Good at", '#service');
    Section_Portfolio_instance = new Section('Portfolio', 3, 'portfolio', 'Portfolio', 'My Work', '#portfolio');
    Section_Experience_instance = new Section('Experience', 4, 'experience', 'Experience', 'Work Experience', '#experience');
    Section_Contact_instance = new Section('Contact', 5, 'contact', 'Contact me', 'Get in Touch', '#contact');
    Section_Testimonial_instance = new Section('Testimonial', 6, 'testimonial', 'Testimonial', 'Happy Customers', '#testimonial');
    Section_Achievements_instance = new Section('Achievements', 7, 'achievements', 'Achievements', 'Personal Achievements', '#achievements');
  }
  var $ENTRIES_1;
  function Section(name, ordinal, id, title, subtitle, path) {
    Enum.call(this, name, ordinal);
    this.p3k_1 = id;
    this.q3k_1 = title;
    this.r3k_1 = subtitle;
    this.s3k_1 = path;
  }
  function Section_Home_getInstance() {
    Section_initEntries();
    return Section_Home_instance;
  }
  function Section_About_getInstance() {
    Section_initEntries();
    return Section_About_instance;
  }
  function Section_Service_getInstance() {
    Section_initEntries();
    return Section_Service_instance;
  }
  function Section_Portfolio_getInstance() {
    Section_initEntries();
    return Section_Portfolio_instance;
  }
  function Section_Experience_getInstance() {
    Section_initEntries();
    return Section_Experience_instance;
  }
  function Section_Contact_getInstance() {
    Section_initEntries();
    return Section_Contact_instance;
  }
  function Section_Testimonial_getInstance() {
    Section_initEntries();
    return Section_Testimonial_instance;
  }
  function Section_Achievements_getInstance() {
    Section_initEntries();
    return Section_Achievements_instance;
  }
  var Service_Android_instance;
  var Service_IOS_instance;
  var Service_Design_instance;
  function values_2() {
    return [Service_Android_getInstance(), Service_IOS_getInstance(), Service_Design_getInstance()];
  }
  function get_entries_2() {
    if ($ENTRIES_2 == null)
      $ENTRIES_2 = enumEntries(values_2());
    return $ENTRIES_2;
  }
  var Service_entriesInitialized;
  function Service_initEntries() {
    if (Service_entriesInitialized)
      return Unit_instance;
    Service_entriesInitialized = true;
    Service_Android_instance = new Service('Android', 0, 'android_icon.svg', 'Android Icon', 'Android Development', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');
    Service_IOS_instance = new Service('IOS', 1, 'apple_icon.svg', 'Apple Icon', 'iOS Development', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');
    Service_Design_instance = new Service('Design', 2, 'design_icon.svg', 'Pen Icon', 'UX/UI Design', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');
  }
  var $ENTRIES_2;
  function Service(name, ordinal, icon, imageDesc, title, description) {
    Enum.call(this, name, ordinal);
    this.u3n_1 = icon;
    this.v3n_1 = imageDesc;
    this.w3n_1 = title;
    this.x3n_1 = description;
  }
  function Service_Android_getInstance() {
    Service_initEntries();
    return Service_Android_instance;
  }
  function Service_IOS_getInstance() {
    Service_initEntries();
    return Service_IOS_instance;
  }
  function Service_Design_getInstance() {
    Service_initEntries();
    return Service_Design_instance;
  }
  var Skill_Creative_instance;
  var Skill_Accountable_instance;
  var Skill_HardWorking_instance;
  var Skill_Value_instance;
  var Skill_Delivery_instance;
  function values_3() {
    return [Skill_Creative_getInstance(), Skill_Accountable_getInstance(), Skill_HardWorking_getInstance(), Skill_Value_getInstance(), Skill_Delivery_getInstance()];
  }
  function get_entries_3() {
    if ($ENTRIES_3 == null)
      $ENTRIES_3 = enumEntries(values_3());
    return $ENTRIES_3;
  }
  var Skill_entriesInitialized;
  function Skill_initEntries() {
    if (Skill_entriesInitialized)
      return Unit_instance;
    Skill_entriesInitialized = true;
    Skill_Creative_instance = new Skill('Creative', 0, 'Creative', get_percent(90));
    Skill_Accountable_instance = new Skill('Accountable', 1, 'Accountable', get_percent(90));
    Skill_HardWorking_instance = new Skill('HardWorking', 2, 'Hard Working', get_percent(80));
    Skill_Value_instance = new Skill('Value', 3, 'Value for Money', get_percent(85));
    Skill_Delivery_instance = new Skill('Delivery', 4, 'On-Time Delivery', get_percent(75));
  }
  var $ENTRIES_3;
  function Skill(name, ordinal, title, percentage) {
    Enum.call(this, name, ordinal);
    this.a3o_1 = title;
    this.b3o_1 = percentage;
  }
  function Skill_Creative_getInstance() {
    Skill_initEntries();
    return Skill_Creative_instance;
  }
  function Skill_Accountable_getInstance() {
    Skill_initEntries();
    return Skill_Accountable_instance;
  }
  function Skill_HardWorking_getInstance() {
    Skill_initEntries();
    return Skill_HardWorking_instance;
  }
  function Skill_Value_getInstance() {
    Skill_initEntries();
    return Skill_Value_instance;
  }
  function Skill_Delivery_getInstance() {
    Skill_initEntries();
    return Skill_Delivery_instance;
  }
  var Theme_Primary_instance;
  var Theme_Secondary_instance;
  var Theme_Gray_instance;
  var Theme_LightGray_instance;
  var Theme_LighterGray_instance;
  var Theme_LightGrayBg_instance;
  var Theme_LightRed_instance;
  var Theme_LighterRed_instance;
  var Theme_DarkRed_instance;
  var Theme_entriesInitialized;
  function Theme_initEntries() {
    if (Theme_entriesInitialized)
      return Unit_instance;
    Theme_entriesInitialized = true;
    Theme_Primary_instance = new Theme('Primary', 0, '#FFF5F2', rgb(255, 245, 242));
    Theme_Secondary_instance = new Theme('Secondary', 1, '#FBFBFB', rgb(251, 251, 251));
    Theme_Gray_instance = new Theme('Gray', 2, '#616161', rgb(97, 97, 97));
    Theme_LightGray_instance = new Theme('LightGray', 3, '#', rgb(41, 41, 41));
    Theme_LighterGray_instance = new Theme('LighterGray', 4, '#9E9E9E', rgb(70, 70, 70));
    Theme_LightGrayBg_instance = new Theme('LightGrayBg', 5, '#000000', rgb(0, 0, 0));
    Theme_LightRed_instance = new Theme('LightRed', 6, '#CC0A0A', rgb(204, 10, 10));
    Theme_LighterRed_instance = new Theme('LighterRed', 7, '#FEC5B8', rgb(254, 197, 184));
    Theme_DarkRed_instance = new Theme('DarkRed', 8, '#CC0A0A', rgb(204, 10, 10));
  }
  function Theme(name, ordinal, hex, rgb) {
    Enum.call(this, name, ordinal);
    this.r3j_1 = hex;
    this.s3j_1 = rgb;
  }
  function Theme_Primary_getInstance() {
    Theme_initEntries();
    return Theme_Primary_instance;
  }
  function Theme_Secondary_getInstance() {
    Theme_initEntries();
    return Theme_Secondary_instance;
  }
  function Theme_Gray_getInstance() {
    Theme_initEntries();
    return Theme_Gray_instance;
  }
  function Theme_LightGray_getInstance() {
    Theme_initEntries();
    return Theme_LightGray_instance;
  }
  function Theme_LighterGray_getInstance() {
    Theme_initEntries();
    return Theme_LighterGray_instance;
  }
  function Theme_LightGrayBg_getInstance() {
    Theme_initEntries();
    return Theme_LightGrayBg_instance;
  }
  function Theme_LightRed_getInstance() {
    Theme_initEntries();
    return Theme_LightRed_instance;
  }
  function Theme_LighterRed_getInstance() {
    Theme_initEntries();
    return Theme_LighterRed_instance;
  }
  function Theme_DarkRed_getInstance() {
    Theme_initEntries();
    return Theme_DarkRed_instance;
  }
  function homePage($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t1a(-2131833562);
    if (!($changed === 0) || !$composer_0.v18()) {
      if (isTraceInProgress()) {
        traceEventStart(-2131833562, $changed, -1, 'org.example.landingpage.pages.homePage (Index.kt:18)');
      }
      $composer_0.a19(718954608);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.f1a();
      var tmp;
      if (false || it === Companion_getInstance().s13_1) {
        // Inline function 'org.example.landingpage.pages.homePage.<anonymous>' call
        var value = mutableStateOf(false);
        this_0.l1a(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.b19();
      var menuOpened$delegate = tmp0_group;
      var tmp_1 = background(fillMaxSize(Companion_instance_0), Colors_instance.j2w(), []);
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.example.landingpage.pages.homePage.<anonymous>' call
      var tmp_2 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_2, -997523744, true, homePage$lambda_1(menuOpened$delegate));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.a19(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.t10(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.f1a();
      var tmp_3;
      if (invalid || it_0 === Companion_getInstance().s13_1) {
        // Inline function 'org.example.landingpage.pages.homePage.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_48(dispatchReceiver);
        $composer_1.l1a(value_0);
        tmp_3 = value_0;
      } else {
        tmp_3 = it_0;
      }
      var tmp_4 = tmp_3;
      var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_1.b19();
      Box(tmp_1, null, null, tmp0, $composer_0, 3072, 6);
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
      tmp1_safe_receiver.u1f(homePage$lambda_2($changed));
    }
  }
  function homePage$lambda($menuOpened$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('menuOpened', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $menuOpened$delegate.w1();
  }
  function homePage$lambda_0($menuOpened$delegate, _set____db54di) {
    getLocalDelegateReference('menuOpened', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $menuOpened$delegate.or(_set____db54di);
    return Unit_instance;
  }
  function homePage$lambda$lambda$lambda($menuOpened$delegate) {
    return function () {
      homePage$lambda_0($menuOpened$delegate, true);
      return Unit_instance;
    };
  }
  function homePage$lambda$lambda($menuOpened$delegate) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.v18()) {
        if (isTraceInProgress()) {
          traceEventStart(-195221431, $changed, -1, 'org.example.landingpage.pages.homePage.<anonymous>.<anonymous> (Index.kt:27)');
        }
        $composer_0.a19(-288047711);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.f1a();
        var tmp_0;
        if (false || it === Companion_getInstance().s13_1) {
          // Inline function 'org.example.landingpage.pages.homePage.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = homePage$lambda$lambda$lambda($menuOpened$delegate);
          $composer_0.l1a(value);
          tmp_0 = value;
        } else {
          tmp_0 = it;
        }
        var tmp_1 = tmp_0;
        var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        $composer_0.b19();
        mainSection(tmp0_group, $composer_0, 6);
        aboutSection($composer_0, 0);
        ServiceSection($composer_0, 0);
        portfolioSection($composer_0, 0);
        experienceSection($composer_0, 0);
        contactSection($composer_0, 0);
        footerSection($composer_0, 0);
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
  function ComposableLambda$invoke$ref_47($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.n25(p0, p1, p2);
    };
  }
  function homePage$lambda$lambda_0($menuOpened$delegate) {
    return function () {
      homePage$lambda_0($menuOpened$delegate, false);
      return Unit_instance;
    };
  }
  function homePage$lambda_1($menuOpened$delegate) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.v18()) {
        if (isTraceInProgress()) {
          traceEventStart(-997523744, $changed, -1, 'org.example.landingpage.pages.homePage.<anonymous> (Index.kt:22)');
        }
        var tmp_0 = fillMaxSize(Companion_instance_0);
        var tmp_1 = Top_instance;
        var tmp_2 = CenterHorizontally_instance;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'org.example.landingpage.pages.homePage.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_3 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_3, -195221431, true, homePage$lambda$lambda($menuOpened$delegate));
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
          // Inline function 'org.example.landingpage.pages.homePage.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_47(dispatchReceiver);
          $composer_1.l1a(value);
          tmp_4 = value;
        } else {
          tmp_4 = it;
        }
        var tmp_5 = tmp_4;
        var tmp0 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
        $composer_1.b19();
        Column(tmp_0, tmp_1, tmp_2, null, tmp0, $composer_0, 24576, 8);
        BackToTopButton($composer_0, 0);
        if (homePage$lambda($menuOpened$delegate)) {
          $composer_0.a19(-479521117);
          // Inline function 'androidx.compose.runtime.cache' call
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it_0 = $composer_0.f1a();
          var tmp_6;
          if (false || it_0 === Companion_getInstance().s13_1) {
            // Inline function 'org.example.landingpage.pages.homePage.<anonymous>.<anonymous>.<anonymous>' call
            var value_0 = homePage$lambda$lambda_0($menuOpened$delegate);
            $composer_0.l1a(value_0);
            tmp_6 = value_0;
          } else {
            tmp_6 = it_0;
          }
          var tmp_7 = tmp_6;
          var tmp0_group = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
          $composer_0.b19();
          overflowMenu(tmp0_group, $composer_0, 6);
        }
        var tmp_8;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_8 = Unit_instance;
        }
        tmp = tmp_8;
      } else {
        $composer_0.m13();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_48($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.n25(p0, p1, p2);
    };
  }
  function homePage$lambda_2($$changed) {
    return function ($composer, $force) {
      homePage($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function aboutSection($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t1a(-336396300);
    if (!($changed === 0) || !$composer_0.v18()) {
      if (isTraceInProgress()) {
        traceEventStart(-336396300, $changed, -1, 'org.example.landingpage.sections.aboutSection (AboutSection.kt:27)');
      }
      var tmp = backgroundColor(padding_1(maxWidth(id(Companion_instance_0, Section_About_getInstance().p3k_1), get_px(1920)), get_px(150)), Theme_LightGrayBg_getInstance().s3j_1);
      Box(tmp, null, null, ComposableSingletons$AboutSectionKt_getInstance().c3o_1, $composer_0, 3072, 6);
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
      tmp0_safe_receiver.u1f(aboutSection$lambda($changed));
    }
  }
  function aboutContent($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t1a(1237587336);
    if (!($changed === 0) || !$composer_0.v18()) {
      if (isTraceInProgress()) {
        traceEventStart(1237587336, $changed, -1, 'org.example.landingpage.sections.aboutContent (AboutSection.kt:40)');
      }
      var tmp = fillMaxWidth(Companion_instance_0);
      Column(tmp, null, null, null, ComposableSingletons$AboutSectionKt_getInstance().d3o_1, $composer_0, 24576, 14);
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
      tmp0_safe_receiver.u1f(aboutContent$lambda($changed));
    }
  }
  function aboutMe($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t1a(1816063877);
    if (!($changed === 0) || !$composer_0.v18()) {
      if (isTraceInProgress()) {
        traceEventStart(1816063877, $changed, -1, 'org.example.landingpage.sections.aboutMe (AboutSection.kt:50)');
      }
      // Inline function 'androidx.compose.runtime.rememberCoroutineScope' call
      var getContext = null;
      var $composer_1 = $composer_0;
      $composer_1.a19(773894976);
      sourceInformation($composer_1, 'CC(rememberCoroutineScope)482@20254L144:Effects.kt#9igjgp');
      if (!((1 & 1) === 0)) {
        getContext = aboutMe$lambda_0;
      }
      var composer = $composer_1;
      $composer_1.a19(-954370320);
      sourceInformation($composer_1, 'CC(remember):Effects.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.f1a();
      var tmp;
      if (false || it === Companion_getInstance().s13_1) {
        // Inline function 'androidx.compose.runtime.rememberCoroutineScope.<anonymous>' call
        var value = new CompositionScopedCoroutineScopeCanceller(createCompositionCoroutineScope(getContext(), composer));
        $composer_1.l1a(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_1.b19();
      var wrapper = tmp1_group;
      var tmp0 = wrapper.f1g_1;
      $composer_1.b19();
      var scope = tmp0;
      $composer_0.a19(1153761341);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_0.f1a();
      var tmp_1;
      if (false || it_0 === Companion_getInstance().s13_1) {
        // Inline function 'org.example.landingpage.sections.aboutMe.<anonymous>' call
        var value_0 = mutableStateOf(false);
        this_0.l1a(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.b19();
      var viewportEntered$delegate = tmp0_group;
      $composer_0.a19(1153763401);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = this_1.f1a();
      var tmp_3;
      if (false || it_1 === Companion_getInstance().s13_1) {
        // Inline function 'org.example.landingpage.sections.aboutMe.<anonymous>' call
        var value_1 = mutableStateListOf([0, 0, 0, 0, 0]);
        this_1.l1a(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmp1_group_0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_0.b19();
      var animatedPercentage = tmp1_group_0;
      var tmp_5 = Section_About_getInstance().p3k_1;
      $composer_0.a19(1153769362);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_2 = $composer_0;
      var invalid = $composer_0.v19(scope);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = this_2.f1a();
      var tmp_6;
      if (invalid || it_2 === Companion_getInstance().s13_1) {
        // Inline function 'org.example.landingpage.sections.aboutMe.<anonymous>' call
        var value_2 = aboutMe$lambda_1(scope, viewportEntered$delegate, animatedPercentage);
        this_2.l1a(value_2);
        tmp_6 = value_2;
      } else {
        tmp_6 = it_2;
      }
      var tmp_7 = tmp_6;
      var tmp2_group = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
      $composer_0.b19();
      observeViewportEntered(tmp_5, 300.0, tmp2_group, $composer_0, 54);
      var tmp_8 = fillMaxWidth(Companion_instance_0);
      Column(tmp_8, null, null, null, ComposableSingletons$AboutSectionKt_getInstance().f3o_1, $composer_0, 24576, 14);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.m13();
    }
    var tmp3_safe_receiver = $composer_0.u1a();
    if (tmp3_safe_receiver == null)
      null;
    else {
      tmp3_safe_receiver.u1f(aboutMe$lambda_2($changed));
    }
  }
  function ComposableLambda$invoke$ref_49($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.n25(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutSectionKt$lambda_1$lambda_zx8t0($this$Box, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 17) === 16) || !$composer_0.v18()) {
      if (isTraceInProgress()) {
        traceEventStart(-145710034, $changed, -1, 'org.example.landingpage.sections.ComposableSingletons$AboutSectionKt.lambda-1.<anonymous> (AboutSection.kt:35)');
      }
      aboutContent($composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.m13();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_50($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.n25(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutSectionKt$lambda_2$lambda_rtp897($this$Column, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 17) === 16) || !$composer_0.v18()) {
      if (isTraceInProgress()) {
        traceEventStart(-1886510351, $changed, -1, 'org.example.landingpage.sections.ComposableSingletons$AboutSectionKt.lambda-2.<anonymous> (AboutSection.kt:45)');
      }
      aboutMe($composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.m13();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_51($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.n25(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutSectionKt$lambda_3$lambda_edscnq($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(889308186, $changed, -1, 'org.example.landingpage.sections.ComposableSingletons$AboutSectionKt.lambda-3.<anonymous> (AboutSection.kt:88)');
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = Constants_getInstance().k3o_1.j();
    while (tmp0_iterator.k()) {
      var element = tmp0_iterator.l();
      // Inline function 'org.example.landingpage.sections.ComposableSingletons$AboutSectionKt.lambda-3.<anonymous>.<anonymous>' call
      Text(element, $composer_0, 0);
    }
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_52($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.n25(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutSectionKt$lambda_4$lambda_efu4eh($this$Column, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 17) === 16) || !$composer_0.v18()) {
      if (isTraceInProgress()) {
        traceEventStart(-1157995396, $changed, -1, 'org.example.landingpage.sections.ComposableSingletons$AboutSectionKt.lambda-4.<anonymous> (AboutSection.kt:76)');
      }
      var tmp = Section_About_getInstance();
      sectionTitle(null, tmp, null, $composer_0, 48, 5);
      P(toAttrs(color(fontStyle(fontWeight(fontSize(fontFamily(maxWidth(margin_0(toModifier(get_AboutTextStyle(), $composer_0, 6), get_px(25)), get_px(500)), ['Roboto']), get_px(18)), Companion_instance_5.z2j()), Companion_instance_14.a2l()), Theme_Secondary_getInstance().s3j_1)), ComposableSingletons$AboutSectionKt_getInstance().e3o_1, $composer_0, 48, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.m13();
    }
    return Unit_instance;
  }
  function ComposableSingletons$AboutSectionKt() {
    ComposableSingletons$AboutSectionKt_instance = this;
    var tmp = this;
    tmp.c3o_1 = ComposableLambda$invoke$ref_49(composableLambdaInstance(-145710034, false, ComposableSingletons$AboutSectionKt$lambda_1$lambda_zx8t0));
    var tmp_0 = this;
    tmp_0.d3o_1 = ComposableLambda$invoke$ref_50(composableLambdaInstance(-1886510351, false, ComposableSingletons$AboutSectionKt$lambda_2$lambda_rtp897));
    var tmp_1 = this;
    tmp_1.e3o_1 = ComposableLambda$invoke$ref_51(composableLambdaInstance(889308186, false, ComposableSingletons$AboutSectionKt$lambda_3$lambda_edscnq));
    var tmp_2 = this;
    tmp_2.f3o_1 = ComposableLambda$invoke$ref_52(composableLambdaInstance(-1157995396, false, ComposableSingletons$AboutSectionKt$lambda_4$lambda_efu4eh));
  }
  var ComposableSingletons$AboutSectionKt_instance;
  function ComposableSingletons$AboutSectionKt_getInstance() {
    if (ComposableSingletons$AboutSectionKt_instance == null)
      new ComposableSingletons$AboutSectionKt();
    return ComposableSingletons$AboutSectionKt_instance;
  }
  function aboutMe$lambda($viewportEntered$delegate, _set____db54di) {
    getLocalDelegateReference('viewportEntered', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $viewportEntered$delegate.or(_set____db54di);
    return Unit_instance;
  }
  function aboutSection$lambda($$changed) {
    return function ($composer, $force) {
      aboutSection($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function aboutContent$lambda($$changed) {
    return function ($composer, $force) {
      aboutContent($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function aboutMe$lambda_0() {
    return EmptyCoroutineContext_getInstance();
  }
  function aboutMe$lambda$slambda$lambda($animatedPercentage, $skill) {
    return function (it) {
      $animatedPercentage.h25($skill.h2_1, it);
      return Unit_instance;
    };
  }
  function aboutMe$lambda$slambda($skill, $animatedPercentage, resultContinuation) {
    this.t3o_1 = $skill;
    this.u3o_1 = $animatedPercentage;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(aboutMe$lambda$slambda).k1h = function ($this$launch, $completion) {
    var tmp = this.l1h($this$launch, $completion);
    tmp.x8_1 = Unit_instance;
    tmp.y8_1 = null;
    return tmp.d9();
  };
  protoOf(aboutMe$lambda$slambda).p9 = function (p1, $completion) {
    return this.k1h((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(aboutMe$lambda$slambda).d9 = function () {
    var suspendResult = this.x8_1;
    $sm: do
      try {
        var tmp = this.v8_1;
        switch (tmp) {
          case 0:
            this.w8_1 = 2;
            this.v8_1 = 1;
            var tmp_0 = numberToInt(this.t3o_1.b3o_1.value);
            suspendResult = animateNumbers(tmp_0, VOID, aboutMe$lambda$slambda$lambda(this.u3o_1, this.t3o_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
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
  protoOf(aboutMe$lambda$slambda).l1h = function ($this$launch, completion) {
    var i = new aboutMe$lambda$slambda(this.t3o_1, this.u3o_1, completion);
    i.v3o_1 = $this$launch;
    return i;
  };
  function aboutMe$lambda$slambda_0($skill, $animatedPercentage, resultContinuation) {
    var i = new aboutMe$lambda$slambda($skill, $animatedPercentage, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.k1h($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function aboutMe$lambda_1($scope, $viewportEntered$delegate, $animatedPercentage) {
    return function () {
      aboutMe$lambda($viewportEntered$delegate, true);
      var tmp0_iterator = get_entries_3().j();
      while (tmp0_iterator.k()) {
        var element = tmp0_iterator.l();
        // Inline function 'org.example.landingpage.sections.aboutMe.<anonymous>.<anonymous>.<anonymous>' call
        launch($scope, VOID, VOID, aboutMe$lambda$slambda_0(element, $animatedPercentage, null));
      }
      return Unit_instance;
    };
  }
  function aboutMe$lambda_2($$changed) {
    return function ($composer, $force) {
      aboutMe($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function contactSection($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t1a(-1483449132);
    if (!($changed === 0) || !$composer_0.v18()) {
      if (isTraceInProgress()) {
        traceEventStart(-1483449132, $changed, -1, 'org.example.landingpage.sections.contactSection (ContactSection.kt:27)');
      }
      var tmp = backgroundColor(padding_1(maxWidth(id(Companion_instance_0, Section_Contact_getInstance().p3k_1), get_px(1920)), get_px(100)), Theme_LightGrayBg_getInstance().s3j_1);
      var tmp_0 = Center_instance;
      Box(tmp, tmp_0, null, ComposableSingletons$ContactSectionKt_getInstance().w3o_1, $composer_0, 3072, 4);
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
      tmp0_safe_receiver.u1f(contactSection$lambda($changed));
    }
  }
  function contactContent($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t1a(-713663128);
    if (!($changed === 0) || !$composer_0.v18()) {
      if (isTraceInProgress()) {
        traceEventStart(-713663128, $changed, -1, 'org.example.landingpage.sections.contactContent (ContactSection.kt:41)');
      }
      var breakpoint = rememberBreakpoint($composer_0, 0);
      // Inline function 'androidx.compose.runtime.rememberCoroutineScope' call
      var getContext = null;
      var $composer_1 = $composer_0;
      $composer_1.a19(773894976);
      sourceInformation($composer_1, 'CC(rememberCoroutineScope)482@20254L144:Effects.kt#9igjgp');
      if (!((1 & 1) === 0)) {
        getContext = contactContent$lambda_1;
      }
      var composer = $composer_1;
      $composer_1.a19(-954370320);
      sourceInformation($composer_1, 'CC(remember):Effects.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.f1a();
      var tmp;
      if (false || it === Companion_getInstance().s13_1) {
        // Inline function 'androidx.compose.runtime.rememberCoroutineScope.<anonymous>' call
        var value = new CompositionScopedCoroutineScopeCanceller(createCompositionCoroutineScope(getContext(), composer));
        $composer_1.l1a(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_1.b19();
      var wrapper = tmp1_group;
      var tmp0 = wrapper.f1g_1;
      $composer_1.b19();
      var scope = tmp0;
      $composer_0.a19(1835514053);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_0.f1a();
      var tmp_1;
      if (false || it_0 === Companion_getInstance().s13_1) {
        // Inline function 'org.example.landingpage.sections.contactContent.<anonymous>' call
        var value_0 = mutableStateOf(get_deg(0));
        this_0.l1a(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.b19();
      var animatedRotation$delegate = tmp0_group;
      var tmp_3 = Section_Contact_getInstance().p3k_1;
      $composer_0.a19(1835519457);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      var invalid = $composer_0.v19(scope);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = this_1.f1a();
      var tmp_4;
      if (invalid || it_1 === Companion_getInstance().s13_1) {
        // Inline function 'org.example.landingpage.sections.contactContent.<anonymous>' call
        var value_1 = contactContent$lambda_2(scope, animatedRotation$delegate);
        this_1.l1a(value_1);
        tmp_4 = value_1;
      } else {
        tmp_4 = it_1;
      }
      var tmp_5 = tmp_4;
      var tmp1_group_0 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
      $composer_0.b19();
      observeViewportEntered(tmp_3, 500.0, tmp1_group_0, $composer_0, 54);
      var tmp0_modifier = fillMaxWidth(Companion_instance_0, breakpoint.i2(Breakpoint_MD_getInstance()) >= 0 ? get_percent(100) : get_percent(90));
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.example.landingpage.sections.contactContent.<anonymous>' call
      var tmp_6 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_6, -482767279, true, contactContent$lambda_3(breakpoint, animatedRotation$delegate));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_2 = $composer_0;
      $composer_2.a19(1157296644);
      sourceInformation($composer_2, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_2.t10(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = $composer_2.f1a();
      var tmp_7;
      if (invalid_0 || it_2 === Companion_getInstance().s13_1) {
        // Inline function 'org.example.landingpage.sections.contactContent.<anonymous>.<anonymous>' call
        var value_2 = ComposableLambda$invoke$ref_54(dispatchReceiver);
        $composer_2.l1a(value_2);
        tmp_7 = value_2;
      } else {
        tmp_7 = it_2;
      }
      var tmp_8 = tmp_7;
      var tmp0_0 = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
      $composer_2.b19();
      Column(tmp0_modifier, Center_instance_0, CenterHorizontally_instance, null, tmp0_0, $composer_0, 24576, 8);
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
      tmp2_safe_receiver.u1f(contactContent$lambda_4($changed));
    }
  }
  function ComposableLambda$invoke$ref_53($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.n25(p0, p1, p2);
    };
  }
  function ComposableSingletons$ContactSectionKt$lambda_1$lambda_3nkjr($this$Box, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 17) === 16) || !$composer_0.v18()) {
      if (isTraceInProgress()) {
        traceEventStart(-961457138, $changed, -1, 'org.example.landingpage.sections.ComposableSingletons$ContactSectionKt.lambda-1.<anonymous> (ContactSection.kt:36)');
      }
      contactContent($composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.m13();
    }
    return Unit_instance;
  }
  function ComposableSingletons$ContactSectionKt() {
    ComposableSingletons$ContactSectionKt_instance = this;
    var tmp = this;
    tmp.w3o_1 = ComposableLambda$invoke$ref_53(composableLambdaInstance(-961457138, false, ComposableSingletons$ContactSectionKt$lambda_1$lambda_3nkjr));
  }
  var ComposableSingletons$ContactSectionKt_instance;
  function ComposableSingletons$ContactSectionKt_getInstance() {
    if (ComposableSingletons$ContactSectionKt_instance == null)
      new ComposableSingletons$ContactSectionKt();
    return ComposableSingletons$ContactSectionKt_instance;
  }
  function contactContent$lambda($animatedRotation$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('animatedRotation', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $animatedRotation$delegate.w1();
  }
  function contactContent$lambda_0($animatedRotation$delegate, _set____db54di) {
    getLocalDelegateReference('animatedRotation', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $animatedRotation$delegate.or(_set____db54di);
    return Unit_instance;
  }
  function contactSection$lambda($$changed) {
    return function ($composer, $force) {
      contactSection($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function contactContent$lambda_1() {
    return EmptyCoroutineContext_getInstance();
  }
  function contactContent$lambda$slambda($animatedRotation$delegate, resultContinuation) {
    this.f3p_1 = $animatedRotation$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(contactContent$lambda$slambda).k1h = function ($this$launch, $completion) {
    var tmp = this.l1h($this$launch, $completion);
    tmp.x8_1 = Unit_instance;
    tmp.y8_1 = null;
    return tmp.d9();
  };
  protoOf(contactContent$lambda$slambda).p9 = function (p1, $completion) {
    return this.k1h((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(contactContent$lambda$slambda).d9 = function () {
    var suspendResult = this.x8_1;
    $sm: do
      try {
        var tmp = this.v8_1;
        switch (tmp) {
          case 0:
            this.w8_1 = 2;
            this.v8_1 = 1;
            suspendResult = delay(new Long(500, 0), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            contactContent$lambda_0(this.f3p_1, get_deg(0));
            return Unit_instance;
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
  protoOf(contactContent$lambda$slambda).l1h = function ($this$launch, completion) {
    var i = new contactContent$lambda$slambda(this.f3p_1, completion);
    i.g3p_1 = $this$launch;
    return i;
  };
  function contactContent$lambda$slambda_0($animatedRotation$delegate, resultContinuation) {
    var i = new contactContent$lambda$slambda($animatedRotation$delegate, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.k1h($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function contactContent$lambda_2($scope, $animatedRotation$delegate) {
    return function () {
      contactContent$lambda_0($animatedRotation$delegate, get_deg(10));
      launch($scope, VOID, VOID, contactContent$lambda$slambda_0($animatedRotation$delegate, null));
      return Unit_instance;
    };
  }
  function contactContent$lambda$lambda($animatedRotation$delegate) {
    return function ($this$transform) {
      $this$transform.f2g(contactContent$lambda($animatedRotation$delegate));
      return Unit_instance;
    };
  }
  function contactContent$lambda_3($breakpoint, $animatedRotation$delegate) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.v18()) {
        if (isTraceInProgress()) {
          traceEventStart(-482767279, $changed, -1, 'org.example.landingpage.sections.contactContent.<anonymous> (ContactSection.kt:67)');
        }
        var tmp_0 = margin_1(fillMaxWidth(Companion_instance_0), VOID, VOID, get_px(25));
        $composer_0.a19(-1148084418);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.f1a();
        var tmp_1;
        if (false || it === Companion_getInstance().s13_1) {
          // Inline function 'org.example.landingpage.sections.contactContent.<anonymous>.<anonymous>.<anonymous>' call
          var value = contactContent$lambda$lambda($animatedRotation$delegate);
          $composer_0.l1a(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        $composer_0.b19();
        sectionTitle(transition(transform(tmp_0, tmp0_group), [Companion_instance_6.u2n('transform', get_ms(500))]), Section_Contact_getInstance(), CenterHorizontally_instance, $composer_0, 48, 0);
        contactForm($breakpoint, $composer_0, 0);
        var tmp_3;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_3 = Unit_instance;
        }
        tmp = tmp_3;
      } else {
        $composer_0.m13();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_54($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.n25(p0, p1, p2);
    };
  }
  function contactContent$lambda_4($$changed) {
    return function ($composer, $force) {
      contactContent($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function experienceSection($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t1a(1002855168);
    if (!($changed === 0) || !$composer_0.v18()) {
      if (isTraceInProgress()) {
        traceEventStart(1002855168, $changed, -1, 'org.example.landingpage.sections.experienceSection (ExperienceSection.kt:22)');
      }
      var tmp = backgroundColor(padding_1(maxWidth(id(Companion_instance_0, Section_Experience_getInstance().p3k_1), get_px(1920)), get_px(100)), Theme_LightGrayBg_getInstance().s3j_1);
      var tmp_0 = Center_instance;
      Box(tmp, tmp_0, null, ComposableSingletons$ExperienceSectionKt_getInstance().h3p_1, $composer_0, 3072, 4);
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
      tmp0_safe_receiver.u1f(experienceSection$lambda($changed));
    }
  }
  function experienceContent($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t1a(-1427660308);
    if (!($changed === 0) || !$composer_0.v18()) {
      if (isTraceInProgress()) {
        traceEventStart(-1427660308, $changed, -1, 'org.example.landingpage.sections.experienceContent (ExperienceSection.kt:38)');
      }
      var breakpoint = rememberBreakpoint($composer_0, 0);
      $composer_0.a19(-499495704);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.f1a();
      var tmp;
      if (false || it === Companion_getInstance().s13_1) {
        // Inline function 'org.example.landingpage.sections.experienceContent.<anonymous>' call
        var value = mutableStateOf(get_px(200));
        this_0.l1a(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.b19();
      var animatedMargin$delegate = tmp0_group;
      var tmp_1 = Section_Experience_getInstance().p3k_1;
      $composer_0.a19(-499490285);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_1.f1a();
      var tmp_2;
      if (false || it_0 === Companion_getInstance().s13_1) {
        // Inline function 'org.example.landingpage.sections.experienceContent.<anonymous>' call
        var value_0 = experienceContent$lambda_1(animatedMargin$delegate);
        this_1.l1a(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp1_group = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_0.b19();
      observeViewportEntered(tmp_1, 500.0, tmp1_group, $composer_0, 438);
      var tmp_4 = fillMaxWidth(Companion_instance_0, breakpoint.i2(Breakpoint_MD_getInstance()) >= 0 ? get_percent(100) : get_percent(90));
      var tmp_5 = CenterHorizontally_instance;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.example.landingpage.sections.experienceContent.<anonymous>' call
      var tmp_6 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_6, 1796390933, true, experienceContent$lambda_2(breakpoint, animatedMargin$delegate));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.a19(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.t10(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_1.f1a();
      var tmp_7;
      if (invalid || it_1 === Companion_getInstance().s13_1) {
        // Inline function 'org.example.landingpage.sections.experienceContent.<anonymous>.<anonymous>' call
        var value_1 = ComposableLambda$invoke$ref_56(dispatchReceiver);
        $composer_1.l1a(value_1);
        tmp_7 = value_1;
      } else {
        tmp_7 = it_1;
      }
      var tmp_8 = tmp_7;
      var tmp0 = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
      $composer_1.b19();
      Column(tmp_4, null, tmp_5, null, tmp0, $composer_0, 24576, 10);
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
      tmp2_safe_receiver.u1f(experienceContent$lambda_3($changed));
    }
  }
  function ComposableLambda$invoke$ref_55($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.n25(p0, p1, p2);
    };
  }
  function ComposableSingletons$ExperienceSectionKt$lambda_1$lambda_jj9ub5($this$Box, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 17) === 16) || !$composer_0.v18()) {
      if (isTraceInProgress()) {
        traceEventStart(-1254654278, $changed, -1, 'org.example.landingpage.sections.ComposableSingletons$ExperienceSectionKt.lambda-1.<anonymous> (ExperienceSection.kt:33)');
      }
      experienceContent($composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.m13();
    }
    return Unit_instance;
  }
  function ComposableSingletons$ExperienceSectionKt() {
    ComposableSingletons$ExperienceSectionKt_instance = this;
    var tmp = this;
    tmp.h3p_1 = ComposableLambda$invoke$ref_55(composableLambdaInstance(-1254654278, false, ComposableSingletons$ExperienceSectionKt$lambda_1$lambda_jj9ub5));
  }
  var ComposableSingletons$ExperienceSectionKt_instance;
  function ComposableSingletons$ExperienceSectionKt_getInstance() {
    if (ComposableSingletons$ExperienceSectionKt_instance == null)
      new ComposableSingletons$ExperienceSectionKt();
    return ComposableSingletons$ExperienceSectionKt_instance;
  }
  function experienceContent$lambda($animatedMargin$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('animatedMargin', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $animatedMargin$delegate.w1();
  }
  function experienceContent$lambda_0($animatedMargin$delegate, _set____db54di) {
    getLocalDelegateReference('animatedMargin', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $animatedMargin$delegate.or(_set____db54di);
    return Unit_instance;
  }
  function experienceSection$lambda($$changed) {
    return function ($composer, $force) {
      experienceSection($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function experienceContent$lambda_1($animatedMargin$delegate) {
    return function () {
      experienceContent$lambda_0($animatedMargin$delegate, get_px(50));
      return Unit_instance;
    };
  }
  function experienceContent$lambda_2($breakpoint, $animatedMargin$delegate) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.v18()) {
        if (isTraceInProgress()) {
          traceEventStart(1796390933, $changed, -1, 'org.example.landingpage.sections.experienceContent.<anonymous> (ExperienceSection.kt:58)');
        }
        var tmp_0 = margin_1(fillMaxWidth(Companion_instance_0, $breakpoint.i2(Breakpoint_MD_getInstance()) >= 0 ? get_percent(60) : get_percent(90)), VOID, VOID, get_px(25));
        var tmp_1 = Section_Experience_getInstance();
        sectionTitle(tmp_0, tmp_1, null, $composer_0, 48, 4);
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator = get_entries().j();
        while (tmp0_iterator.k()) {
          var element = tmp0_iterator.l();
          // Inline function 'org.example.landingpage.sections.experienceContent.<anonymous>.<anonymous>.<anonymous>' call
          experienceCard($breakpoint, element.equals(Experience_First_getInstance()), element, experienceContent$lambda($animatedMargin$delegate), $composer_0, 0, 0);
        }
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
  function ComposableLambda$invoke$ref_56($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.n25(p0, p1, p2);
    };
  }
  function experienceContent$lambda_3($$changed) {
    return function ($composer, $force) {
      experienceContent($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function footerSection($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t1a(624118306);
    if (!($changed === 0) || !$composer_0.v18()) {
      if (isTraceInProgress()) {
        traceEventStart(624118306, $changed, -1, 'org.example.landingpage.sections.footerSection (FooterSection.kt:27)');
      }
      var tmp = backgroundColor(padding_1(maxWidth(fillMaxWidth(Companion_instance_0), get_px(1920)), get_px(100)), Theme_LightGrayBg_getInstance().s3j_1);
      var tmp_0 = Center_instance;
      Box(tmp, tmp_0, null, ComposableSingletons$FooterSectionKt_getInstance().i3p_1, $composer_0, 3072, 4);
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
      tmp0_safe_receiver.u1f(footerSection$lambda($changed));
    }
  }
  function footerContent($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t1a(-2121996530);
    if (!($changed === 0) || !$composer_0.v18()) {
      if (isTraceInProgress()) {
        traceEventStart(-2121996530, $changed, -1, 'org.example.landingpage.sections.footerContent (FooterSection.kt:41)');
      }
      var breakpoint = rememberBreakpoint($composer_0, 0);
      var tmp = fillMaxWidth(Companion_instance_0, breakpoint.i2(Breakpoint_MD_getInstance()) >= 0 ? get_percent(100) : get_percent(90));
      var tmp_0 = CenterHorizontally_instance;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.example.landingpage.sections.footerContent.<anonymous>' call
      var tmp_1 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_1, 2097233463, true, footerContent$lambda(breakpoint));
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
      var tmp_2;
      if (invalid || it === Companion_getInstance().s13_1) {
        // Inline function 'org.example.landingpage.sections.footerContent.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_60(dispatchReceiver);
        $composer_1.l1a(value);
        tmp_2 = value;
      } else {
        tmp_2 = it;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_1.b19();
      Column(tmp, null, tmp_0, null, tmp0, $composer_0, 24576, 10);
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
      tmp0_safe_receiver.u1f(footerContent$lambda_0($changed));
    }
  }
  function footerMenu(row, $composer, $changed, $default) {
    var row_0 = {_v: row};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t1a(1757727998);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.w19(row_0._v) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.v18()) {
      if (!(($default & 1) === 0)) {
        row_0._v = true;
      }
      if (isTraceInProgress()) {
        traceEventStart(1757727998, $dirty, -1, 'org.example.landingpage.sections.footerMenu (FooterSection.kt:71)');
      }
      // Inline function 'kotlin.collections.forEach' call
      // Inline function 'kotlin.collections.toTypedArray' call
      var this_0 = get_entries_1();
      var tmp$ret$0 = copyToArray(this_0);
      var tmp0_iterator = take(tmp$ret$0, 6).j();
      while (tmp0_iterator.k()) {
        var element = tmp0_iterator.l();
        // Inline function 'org.example.landingpage.sections.footerMenu.<anonymous>' call
        var tmp0_modifier = textDecorationLine(fontWeight(fontSize(padding_0(fontFamily(toModifier(get_NavigationItemStyle(), $composer_0, 6), ['Roboto']), VOID, row_0._v ? get_px(20) : get_px(0), row_0._v ? get_px(0) : get_px(20)), get_px(12)), Companion_instance_5.z2j()), Companion_instance_8.t2k());
        var tmp1_path = element.s3k_1;
        var tmp2_text = element.q3k_1;
        Link(tmp1_path, tmp2_text, tmp0_modifier, null, null, null, null, false, null, $composer_0, 0, 504);
      }
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
      tmp0_safe_receiver.u1f(footerMenu$lambda(row_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref_57($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.n25(p0, p1, p2);
    };
  }
  function ComposableSingletons$FooterSectionKt$lambda_1$lambda_vzniu8($this$Box, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 17) === 16) || !$composer_0.v18()) {
      if (isTraceInProgress()) {
        traceEventStart(-809973796, $changed, -1, 'org.example.landingpage.sections.ComposableSingletons$FooterSectionKt.lambda-1.<anonymous> (FooterSection.kt:36)');
      }
      footerContent($composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.m13();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_58($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.n25(p0, p1, p2);
    };
  }
  function ComposableSingletons$FooterSectionKt$lambda_2$lambda_a7u22p($this$Row, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 17) === 16) || !$composer_0.v18()) {
      if (isTraceInProgress()) {
        traceEventStart(-2127735015, $changed, -1, 'org.example.landingpage.sections.ComposableSingletons$FooterSectionKt.lambda-2.<anonymous> (FooterSection.kt:56)');
      }
      footerMenu(false, $composer_0, 0, 1);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.m13();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_59($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.n25(p0, p1, p2);
    };
  }
  function ComposableSingletons$FooterSectionKt$lambda_3$lambda_ilsezi($this$Column, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 17) === 16) || !$composer_0.v18()) {
      if (isTraceInProgress()) {
        traceEventStart(2111779260, $changed, -1, 'org.example.landingpage.sections.ComposableSingletons$FooterSectionKt.lambda-3.<anonymous> (FooterSection.kt:63)');
      }
      footerMenu(false, $composer_0, 6, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.m13();
    }
    return Unit_instance;
  }
  function ComposableSingletons$FooterSectionKt() {
    ComposableSingletons$FooterSectionKt_instance = this;
    var tmp = this;
    tmp.i3p_1 = ComposableLambda$invoke$ref_57(composableLambdaInstance(-809973796, false, ComposableSingletons$FooterSectionKt$lambda_1$lambda_vzniu8));
    var tmp_0 = this;
    tmp_0.j3p_1 = ComposableLambda$invoke$ref_58(composableLambdaInstance(-2127735015, false, ComposableSingletons$FooterSectionKt$lambda_2$lambda_a7u22p));
    var tmp_1 = this;
    tmp_1.k3p_1 = ComposableLambda$invoke$ref_59(composableLambdaInstance(2111779260, false, ComposableSingletons$FooterSectionKt$lambda_3$lambda_ilsezi));
  }
  var ComposableSingletons$FooterSectionKt_instance;
  function ComposableSingletons$FooterSectionKt_getInstance() {
    if (ComposableSingletons$FooterSectionKt_instance == null)
      new ComposableSingletons$FooterSectionKt();
    return ComposableSingletons$FooterSectionKt_instance;
  }
  function footerSection$lambda($$changed) {
    return function ($composer, $force) {
      footerSection($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function footerContent$lambda($breakpoint) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.v18()) {
        if (isTraceInProgress()) {
          traceEventStart(2097233463, $changed, -1, 'org.example.landingpage.sections.footerContent.<anonymous> (FooterSection.kt:51)');
        }
        if ($breakpoint.i2(Breakpoint_SM_getInstance()) > 0) {
          $composer_0.a19(45555177);
          var tmp_0 = fillMaxWidth(Companion_instance_0);
          var tmp_1 = Center_instance_0;
          Row(tmp_0, tmp_1, null, null, ComposableSingletons$FooterSectionKt_getInstance().j3p_1, $composer_0, 24576, 12);
          $composer_0.b19();
        } else {
          $composer_0.a19(45758227);
          var tmp_2 = fillMaxWidth(Companion_instance_0);
          var tmp_3 = CenterHorizontally_instance;
          Column(tmp_2, null, tmp_3, null, ComposableSingletons$FooterSectionKt_getInstance().k3p_1, $composer_0, 24576, 10);
          $composer_0.b19();
        }
        socialBar(true, $composer_0, 6, 0);
        var tmp_4;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_4 = Unit_instance;
        }
        tmp = tmp_4;
      } else {
        $composer_0.m13();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_60($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.n25(p0, p1, p2);
    };
  }
  function footerContent$lambda_0($$changed) {
    return function ($composer, $force) {
      footerContent($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function footerMenu$lambda($row, $$changed, $$default) {
    return function ($composer, $force) {
      footerMenu($row._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function mainSection(onMenuClicked, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t1a(1284052482);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.v19(onMenuClicked) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.v18()) {
      if (isTraceInProgress()) {
        traceEventStart(1284052482, $dirty, -1, 'org.example.landingpage.sections.mainSection (MainSection.kt:33)');
      }
      var tmp = maxHeight(maxWidth(id(Companion_instance_0, Section_Home_getInstance().p3k_1), get_px(1920)), get_percent(100));
      var tmp_0 = Center_instance;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.example.landingpage.sections.mainSection.<anonymous>' call
      var tmp_1 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_1, -129033080, true, mainSection$lambda(onMenuClicked));
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
      var tmp_2;
      if (invalid || it === Companion_getInstance().s13_1) {
        // Inline function 'org.example.landingpage.sections.mainSection.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_65(dispatchReceiver);
        $composer_1.l1a(value);
        tmp_2 = value;
      } else {
        tmp_2 = it;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_1.b19();
      Box(tmp, tmp_0, null, tmp0, $composer_0, 3072, 4);
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
      tmp0_safe_receiver.u1f(mainSection$lambda_0(onMenuClicked, $changed));
    }
  }
  function mainContent(onMenuClicked, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t1a(-1643817066);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.v19(onMenuClicked) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.v18()) {
      if (isTraceInProgress()) {
        traceEventStart(-1643817066, $dirty, -1, 'org.example.landingpage.sections.mainContent (MainSection.kt:49)');
      }
      var breakpoint = rememberBreakpoint($composer_0, 0);
      var tmp0_modifier = fillMaxSize(Companion_instance_0);
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.example.landingpage.sections.mainContent.<anonymous>' call
      var tmp = $composer_0;
      var dispatchReceiver = composableLambda(tmp, 731779597, true, mainContent$lambda(onMenuClicked, breakpoint));
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
      var tmp_0;
      if (invalid || it === Companion_getInstance().s13_1) {
        // Inline function 'org.example.landingpage.sections.mainContent.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_67(dispatchReceiver);
        $composer_1.l1a(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_1.b19();
      Column(tmp0_modifier, Center_instance_0, CenterHorizontally_instance, null, tmp0, $composer_0, 24576, 8);
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
      tmp0_safe_receiver.u1f(mainContent$lambda_0(onMenuClicked, $changed));
    }
  }
  function mainText(breakpoint, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t1a(1388977209);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.t10(breakpoint) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.v18()) {
      if (isTraceInProgress()) {
        traceEventStart(1388977209, $dirty, -1, 'org.example.landingpage.sections.mainText (MainSection.kt:68)');
      }
      var tmp = Start_instance_0;
      var tmp_0 = CenterVertically_instance;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.example.landingpage.sections.mainText.<anonymous>' call
      var tmp_1 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_1, -543048068, true, mainText$lambda(breakpoint));
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
      var tmp_2;
      if (invalid || it === Companion_getInstance().s13_1) {
        // Inline function 'org.example.landingpage.sections.mainText.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_69(dispatchReceiver);
        $composer_1.l1a(value);
        tmp_2 = value;
      } else {
        tmp_2 = it;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_1.b19();
      Row(null, tmp, tmp_0, null, tmp0, $composer_0, 24576, 9);
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
      tmp0_safe_receiver.u1f(mainText$lambda_0(breakpoint, $changed));
    }
  }
  function ComposableLambda$invoke$ref_61($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.n25(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainSectionKt$lambda_1$lambda_21924i($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-251539439, $changed, -1, 'org.example.landingpage.sections.ComposableSingletons$MainSectionKt.lambda-1.<anonymous> (MainSection.kt:86)');
    }
    Text("Hello, I'm", $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_62($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.n25(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainSectionKt$lambda_2$lambda_uuvj6p($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(1797086984, $changed, -1, 'org.example.landingpage.sections.ComposableSingletons$MainSectionKt.lambda-2.<anonymous> (MainSection.kt:97)');
    }
    Text('Abdelrahman Abdelwahab', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_63($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.n25(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainSectionKt$lambda_3$lambda_bcm1q8($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-354396151, $changed, -1, 'org.example.landingpage.sections.ComposableSingletons$MainSectionKt.lambda-3.<anonymous> (MainSection.kt:108)');
    }
    Text('Mobile Developer/Designer', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_64($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.n25(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainSectionKt$lambda_4$lambda_hh0fbz($this$Button, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(297556601, $changed, -1, 'org.example.landingpage.sections.ComposableSingletons$MainSectionKt.lambda-4.<anonymous> (MainSection.kt:123)');
    }
    var tmp0_modifier = textDecorationLine(color(Companion_instance_0, Colors_instance.c2x()), Companion_instance_8.t2k());
    var tmp1_path = Section_Contact_getInstance().s3k_1;
    Link(tmp1_path, 'Hire me', tmp0_modifier, null, null, null, null, false, null, $composer_0, 54, 504);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$MainSectionKt() {
    ComposableSingletons$MainSectionKt_instance = this;
    var tmp = this;
    tmp.l3p_1 = ComposableLambda$invoke$ref_61(composableLambdaInstance(-251539439, false, ComposableSingletons$MainSectionKt$lambda_1$lambda_21924i));
    var tmp_0 = this;
    tmp_0.m3p_1 = ComposableLambda$invoke$ref_62(composableLambdaInstance(1797086984, false, ComposableSingletons$MainSectionKt$lambda_2$lambda_uuvj6p));
    var tmp_1 = this;
    tmp_1.n3p_1 = ComposableLambda$invoke$ref_63(composableLambdaInstance(-354396151, false, ComposableSingletons$MainSectionKt$lambda_3$lambda_bcm1q8));
    var tmp_2 = this;
    tmp_2.o3p_1 = ComposableLambda$invoke$ref_64(composableLambdaInstance(297556601, false, ComposableSingletons$MainSectionKt$lambda_4$lambda_hh0fbz));
  }
  var ComposableSingletons$MainSectionKt_instance;
  function ComposableSingletons$MainSectionKt_getInstance() {
    if (ComposableSingletons$MainSectionKt_instance == null)
      new ComposableSingletons$MainSectionKt();
    return ComposableSingletons$MainSectionKt_instance;
  }
  function mainSection$lambda($onMenuClicked) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.v18()) {
        if (isTraceInProgress()) {
          traceEventStart(-129033080, $changed, -1, 'org.example.landingpage.sections.mainSection.<anonymous> (MainSection.kt:41)');
        }
        mainBackground($composer_0, 0);
        mainContent($onMenuClicked, $composer_0, 0);
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
  function ComposableLambda$invoke$ref_65($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.n25(p0, p1, p2);
    };
  }
  function mainSection$lambda_0($onMenuClicked, $$changed) {
    return function ($composer, $force) {
      mainSection($onMenuClicked, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function mainContent$lambda$lambda($breakpoint) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.v18()) {
        if (isTraceInProgress()) {
          traceEventStart(-394899708, $changed, -1, 'org.example.landingpage.sections.mainContent.<anonymous>.<anonymous> (MainSection.kt:62)');
        }
        mainText($breakpoint, $composer_0, 0);
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
  function ComposableLambda$invoke$ref_66($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.n25(p0, p1, p2);
    };
  }
  function mainContent$lambda($onMenuClicked, $breakpoint) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.v18()) {
        if (isTraceInProgress()) {
          traceEventStart(731779597, $changed, -1, 'org.example.landingpage.sections.mainContent.<anonymous> (MainSection.kt:56)');
        }
        header($onMenuClicked, $composer_0, 0);
        var tmp0_modifier = fillMaxSize(Companion_instance_0);
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'org.example.landingpage.sections.mainContent.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_0 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_0, -394899708, true, mainContent$lambda$lambda($breakpoint));
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
          // Inline function 'org.example.landingpage.sections.mainContent.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_66(dispatchReceiver);
          $composer_1.l1a(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        $composer_1.b19();
        Column(tmp0_modifier, Center_instance_0, CenterHorizontally_instance, null, tmp0, $composer_0, 24576, 8);
        var tmp_3;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_3 = Unit_instance;
        }
        tmp = tmp_3;
      } else {
        $composer_0.m13();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_67($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.n25(p0, p1, p2);
    };
  }
  function mainContent$lambda_0($onMenuClicked, $$changed) {
    return function ($composer, $force) {
      mainContent($onMenuClicked, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function mainText$lambda$lambda($breakpoint) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.v18()) {
        if (isTraceInProgress()) {
          traceEventStart(390455923, $changed, -1, 'org.example.landingpage.sections.mainText.<anonymous>.<anonymous> (MainSection.kt:77)');
        }
        P(toAttrs(color(fontWeight(fontSize(fontFamily(margin_0(Companion_instance_0, get_px(0)), ['Roboto']), $breakpoint.i2(Breakpoint_LG_getInstance()) >= 0 ? get_px(45) : get_px(20)), Companion_instance_5.z2j()), Theme_Primary_getInstance().s3j_1)), ComposableSingletons$MainSectionKt_getInstance().l3p_1, $composer_0, 48, 0);
        P(toAttrs(color(fontWeight(fontSize(fontFamily(margin_1(Companion_instance_0, get_px(20), VOID, get_px(0)), ['Roboto']), $breakpoint.i2(Breakpoint_LG_getInstance()) >= 0 ? get_px(68) : get_px(40)), Companion_instance_5.y2k()), Theme_Secondary_getInstance().s3j_1)), ComposableSingletons$MainSectionKt_getInstance().m3p_1, $composer_0, 48, 0);
        P(toAttrs(color(fontWeight(fontSize(fontFamily(margin_1(Companion_instance_0, get_px(10), VOID, get_px(5)), ['Roboto']), get_px(20)), Companion_instance_5.x2k()), Theme_Secondary_getInstance().s3j_1)), ComposableSingletons$MainSectionKt_getInstance().n3p_1, $composer_0, 48, 0);
        Button(toAttrs(cursor(color(backgroundColor(borderRadius(border(height(margin_1(toModifier(get_MainButtonStyle(), $composer_0, 6), get_px(20)), get_px(40)), get_px(0)), get_px(5)), Theme_DarkRed_getInstance().s3j_1), Colors_instance.c2x()), Companion_instance_4.q2k())), ComposableSingletons$MainSectionKt_getInstance().o3p_1, $composer_0, 48, 0);
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
  function ComposableLambda$invoke$ref_68($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.n25(p0, p1, p2);
    };
  }
  function mainText$lambda($breakpoint) {
    return function ($this$Row, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.v18()) {
        if (isTraceInProgress()) {
          traceEventStart(-543048068, $changed, -1, 'org.example.landingpage.sections.mainText.<anonymous> (MainSection.kt:73)');
        }
        $composer_0.a19(1399693522);
        if ($breakpoint.i2(Breakpoint_MD_getInstance()) > 0) {
          socialBar(false, $composer_0, 0, 1);
        }
        $composer_0.b19();
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'org.example.landingpage.sections.mainText.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_0 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_0, 390455923, true, mainText$lambda$lambda($breakpoint));
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
          // Inline function 'org.example.landingpage.sections.mainText.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_68(dispatchReceiver);
          $composer_1.l1a(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        $composer_1.b19();
        Column(null, null, null, null, tmp0, $composer_0, 24576, 15);
        var tmp_3;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_3 = Unit_instance;
        }
        tmp = tmp_3;
      } else {
        $composer_0.m13();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_69($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.n25(p0, p1, p2);
    };
  }
  function mainText$lambda_0($breakpoint, $$changed) {
    return function ($composer, $force) {
      mainText($breakpoint, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function portfolioSection($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t1a(-2097209900);
    if (!($changed === 0) || !$composer_0.v18()) {
      if (isTraceInProgress()) {
        traceEventStart(-2097209900, $changed, -1, 'org.example.landingpage.sections.portfolioSection (PortfolioSection.kt:32)');
      }
      var tmp = backgroundColor(padding_1(maxWidth(id(Companion_instance_0, Section_Portfolio_getInstance().p3k_1), get_px(1920)), get_px(100)), Theme_LightGrayBg_getInstance().s3j_1);
      var tmp_0 = Center_instance;
      Box(tmp, tmp_0, null, ComposableSingletons$PortfolioSectionKt_getInstance().p3p_1, $composer_0, 3072, 4);
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
      tmp0_safe_receiver.u1f(portfolioSection$lambda($changed));
    }
  }
  function portfolioContent($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t1a(-1067234968);
    if (!($changed === 0) || !$composer_0.v18()) {
      if (isTraceInProgress()) {
        traceEventStart(-1067234968, $changed, -1, 'org.example.landingpage.sections.portfolioContent (PortfolioSection.kt:46)');
      }
      var breakpoint = rememberBreakpoint($composer_0, 0);
      var tmp = fillMaxWidth(Companion_instance_0, breakpoint.i2(Breakpoint_MD_getInstance()) >= 0 ? get_percent(100) : get_percent(90));
      var tmp_0 = CenterHorizontally_instance;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.example.landingpage.sections.portfolioContent.<anonymous>' call
      var tmp_1 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_1, -438182447, true, portfolioContent$lambda(breakpoint));
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
      var tmp_2;
      if (invalid || it === Companion_getInstance().s13_1) {
        // Inline function 'org.example.landingpage.sections.portfolioContent.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_73(dispatchReceiver);
        $composer_1.l1a(value);
        tmp_2 = value;
      } else {
        tmp_2 = it;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_1.b19();
      Column(tmp, null, tmp_0, null, tmp0, $composer_0, 24576, 10);
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
      tmp0_safe_receiver.u1f(portfolioContent$lambda_0($changed));
    }
  }
  function portfolioCards(breakpoint, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t1a(1457739233);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.t10(breakpoint) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.v18()) {
      if (isTraceInProgress()) {
        traceEventStart(1457739233, $dirty, -1, 'org.example.landingpage.sections.portfolioCards (PortfolioSection.kt:68)');
      }
      var tmp = scrollBehavior(overflow(maxWidth(margin_1(fillMaxWidth(id(Companion_instance_0, 'scrollableContainer')), VOID, VOID, get_px(25)), breakpoint.i2(Breakpoint_MD_getInstance()) > 0 ? get_px(950) : breakpoint.i2(Breakpoint_SM_getInstance()) > 0 ? get_px(625) : get_px(300)), Companion_instance_10.n2m()), Companion_instance_11.q2m());
      Row(tmp, null, null, null, ComposableSingletons$PortfolioSectionKt_getInstance().q3p_1, $composer_0, 24576, 14);
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
      tmp0_safe_receiver.u1f(portfolioCards$lambda(breakpoint, $changed));
    }
  }
  function portfolioNavigation($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t1a(741498231);
    if (!($changed === 0) || !$composer_0.v18()) {
      if (isTraceInProgress()) {
        traceEventStart(741498231, $changed, -1, 'org.example.landingpage.sections.portfolioNavigation (PortfolioSection.kt:95)');
      }
      var tmp = fillMaxWidth(Companion_instance_0);
      var tmp_0 = Center_instance_0;
      Row(tmp, tmp_0, null, null, ComposableSingletons$PortfolioSectionKt_getInstance().r3p_1, $composer_0, 24576, 12);
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
      tmp0_safe_receiver.u1f(portfolioNavigation$lambda($changed));
    }
  }
  function ComposableLambda$invoke$ref_70($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.n25(p0, p1, p2);
    };
  }
  function ComposableSingletons$PortfolioSectionKt$lambda_1$lambda_ozf5($this$Box, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 17) === 16) || !$composer_0.v18()) {
      if (isTraceInProgress()) {
        traceEventStart(1341777934, $changed, -1, 'org.example.landingpage.sections.ComposableSingletons$PortfolioSectionKt.lambda-1.<anonymous> (PortfolioSection.kt:41)');
      }
      portfolioContent($composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.m13();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_71($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.n25(p0, p1, p2);
    };
  }
  function ComposableSingletons$PortfolioSectionKt$lambda_2$lambda_subghc($this$Row, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 17) === 16) || !$composer_0.v18()) {
      if (isTraceInProgress()) {
        traceEventStart(-1680819266, $changed, -1, 'org.example.landingpage.sections.ComposableSingletons$PortfolioSectionKt.lambda-2.<anonymous> (PortfolioSection.kt:83)');
      }
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = get_entries_0().j();
      while (tmp0_iterator.k()) {
        var element = tmp0_iterator.l();
        // Inline function 'org.example.landingpage.sections.ComposableSingletons$PortfolioSectionKt.lambda-2.<anonymous>.<anonymous>' call
        portfolioCard(margin(Companion_instance_0, VOID, !element.equals(Portfolio_Five_getInstance()) ? get_px(25) : get_px(0)), element, $composer_0, 0, 0);
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.m13();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_72($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.n25(p0, p1, p2);
    };
  }
  function ComposableSingletons$PortfolioSectionKt$lambda_3$lambda_dd64fl($this$Row, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 17) === 16) || !$composer_0.v18()) {
      if (isTraceInProgress()) {
        traceEventStart(92930426, $changed, -1, 'org.example.landingpage.sections.ComposableSingletons$PortfolioSectionKt.lambda-3.<anonymous> (PortfolioSection.kt:100)');
      }
      var tmp = cursor(margin(toModifier(get_PortfolioArrowIconStyle(), $composer_0, 0), VOID, get_px(40)), Companion_instance_4.q2k());
      $composer_0.a19(-1742924385);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.f1a();
      var tmp_0;
      if (false || it === Companion_getInstance().s13_1) {
        // Inline function 'org.example.landingpage.sections.ComposableSingletons$PortfolioSectionKt.lambda-3.<anonymous>.<anonymous>' call
        var value = ComposableSingletons$PortfolioSectionKt$lambda_3$lambda$lambda_xijbwk;
        $composer_0.l1a(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_0.b19();
      FaArrowLeft(onClick(tmp, tmp0_group), IconSize_LG_getInstance(), $composer_0, 48, 0);
      var tmp_2 = cursor(toModifier(get_PortfolioArrowIconStyle(), $composer_0, 0), Companion_instance_4.q2k());
      $composer_0.a19(-1742913700);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_0.f1a();
      var tmp_3;
      if (false || it_0 === Companion_getInstance().s13_1) {
        // Inline function 'org.example.landingpage.sections.ComposableSingletons$PortfolioSectionKt.lambda-3.<anonymous>.<anonymous>' call
        var value_0 = ComposableSingletons$PortfolioSectionKt$lambda_3$lambda$lambda_xijbwk_0;
        $composer_0.l1a(value_0);
        tmp_3 = value_0;
      } else {
        tmp_3 = it_0;
      }
      var tmp_4 = tmp_3;
      var tmp1_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_0.b19();
      FaArrowRight(onClick(tmp_2, tmp1_group), IconSize_LG_getInstance(), $composer_0, 48, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.m13();
    }
    return Unit_instance;
  }
  function ComposableSingletons$PortfolioSectionKt$lambda_3$lambda$lambda_xijbwk(it) {
    var tmp0_safe_receiver = document.getElementById('scrollableContainer');
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.scrollBy(-325.0, 0.0);
    }
    return Unit_instance;
  }
  function ComposableSingletons$PortfolioSectionKt$lambda_3$lambda$lambda_xijbwk_0(it) {
    var tmp0_safe_receiver = document.getElementById('scrollableContainer');
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.scrollBy(325.0, 0.0);
    }
    return Unit_instance;
  }
  function ComposableSingletons$PortfolioSectionKt() {
    ComposableSingletons$PortfolioSectionKt_instance = this;
    var tmp = this;
    tmp.p3p_1 = ComposableLambda$invoke$ref_70(composableLambdaInstance(1341777934, false, ComposableSingletons$PortfolioSectionKt$lambda_1$lambda_ozf5));
    var tmp_0 = this;
    tmp_0.q3p_1 = ComposableLambda$invoke$ref_71(composableLambdaInstance(-1680819266, false, ComposableSingletons$PortfolioSectionKt$lambda_2$lambda_subghc));
    var tmp_1 = this;
    tmp_1.r3p_1 = ComposableLambda$invoke$ref_72(composableLambdaInstance(92930426, false, ComposableSingletons$PortfolioSectionKt$lambda_3$lambda_dd64fl));
  }
  var ComposableSingletons$PortfolioSectionKt_instance;
  function ComposableSingletons$PortfolioSectionKt_getInstance() {
    if (ComposableSingletons$PortfolioSectionKt_instance == null)
      new ComposableSingletons$PortfolioSectionKt();
    return ComposableSingletons$PortfolioSectionKt_instance;
  }
  function portfolioSection$lambda($$changed) {
    return function ($composer, $force) {
      portfolioSection($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function portfolioContent$lambda($breakpoint) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.v18()) {
        if (isTraceInProgress()) {
          traceEventStart(-438182447, $changed, -1, 'org.example.landingpage.sections.portfolioContent.<anonymous> (PortfolioSection.kt:56)');
        }
        var tmp_0 = margin_1(fillMaxWidth(Companion_instance_0), VOID, VOID, get_px(25));
        var tmp_1 = Section_Portfolio_getInstance();
        sectionTitle(tmp_0, tmp_1, null, $composer_0, 48, 4);
        portfolioCards($breakpoint, $composer_0, 0);
        portfolioNavigation($composer_0, 0);
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
  function ComposableLambda$invoke$ref_73($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.n25(p0, p1, p2);
    };
  }
  function portfolioContent$lambda_0($$changed) {
    return function ($composer, $force) {
      portfolioContent($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function portfolioCards$lambda($breakpoint, $$changed) {
    return function ($composer, $force) {
      portfolioCards($breakpoint, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function portfolioNavigation$lambda($$changed) {
    return function ($composer, $force) {
      portfolioNavigation($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function ServiceSection($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t1a(-1958188460);
    if (!($changed === 0) || !$composer_0.v18()) {
      if (isTraceInProgress()) {
        traceEventStart(-1958188460, $changed, -1, 'org.example.landingpage.sections.ServiceSection (ServiceSection.kt:23)');
      }
      var tmp = backgroundColor(padding_1(maxWidth(id(Companion_instance_0, Section_Service_getInstance().p3k_1), get_px(1920)), get_px(100)), Theme_LightGrayBg_getInstance().s3j_1);
      var tmp_0 = Center_instance;
      Box(tmp, tmp_0, null, ComposableSingletons$ServiceSectionKt_getInstance().s3p_1, $composer_0, 3072, 4);
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
      tmp0_safe_receiver.u1f(ServiceSection$lambda($changed));
    }
  }
  function ServiceContent($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t1a(-1188402456);
    if (!($changed === 0) || !$composer_0.v18()) {
      if (isTraceInProgress()) {
        traceEventStart(-1188402456, $changed, -1, 'org.example.landingpage.sections.ServiceContent (ServiceSection.kt:37)');
      }
      var breakpoint = rememberBreakpoint($composer_0, 0);
      var tmp = fillMaxWidth(Companion_instance_0, breakpoint.i2(Breakpoint_MD_getInstance()) >= 0 ? get_percent(100) : get_percent(90));
      var tmp_0 = CenterHorizontally_instance;
      Column(tmp, null, tmp_0, null, ComposableSingletons$ServiceSectionKt_getInstance().u3p_1, $composer_0, 24576, 10);
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
      tmp0_safe_receiver.u1f(ServiceContent$lambda($changed));
    }
  }
  function ComposableLambda$invoke$ref_74($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.n25(p0, p1, p2);
    };
  }
  function ComposableSingletons$ServiceSectionKt$lambda_1$lambda_vjhl50($this$Box, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 17) === 16) || !$composer_0.v18()) {
      if (isTraceInProgress()) {
        traceEventStart(-1436196466, $changed, -1, 'org.example.landingpage.sections.ComposableSingletons$ServiceSectionKt.lambda-1.<anonymous> (ServiceSection.kt:32)');
      }
      ServiceContent($composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.m13();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_75($boundThis) {
    return function (p0, p1) {
      return $boundThis.t18(p0, p1);
    };
  }
  function ComposableSingletons$ServiceSectionKt$lambda_2$lambda_anzzrx($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 3) === 2) || !$composer_0.v18()) {
      if (isTraceInProgress()) {
        traceEventStart(-155658936, $changed, -1, 'org.example.landingpage.sections.ComposableSingletons$ServiceSectionKt.lambda-2.<anonymous> (ServiceSection.kt:55)');
      }
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = get_entries_2().j();
      while (tmp0_iterator.k()) {
        var element = tmp0_iterator.l();
        // Inline function 'org.example.landingpage.sections.ComposableSingletons$ServiceSectionKt.lambda-2.<anonymous>.<anonymous>' call
        serviceCard(element, $composer_0, 0);
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.m13();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_76($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.n25(p0, p1, p2);
    };
  }
  function ComposableSingletons$ServiceSectionKt$lambda_3$lambda_i5mhaa($this$Column, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 17) === 16) || !$composer_0.v18()) {
      if (isTraceInProgress()) {
        traceEventStart(-957506607, $changed, -1, 'org.example.landingpage.sections.ComposableSingletons$ServiceSectionKt.lambda-3.<anonymous> (ServiceSection.kt:47)');
      }
      sectionTitle(margin_1(fillMaxWidth(Companion_instance_0), VOID, VOID, get_px(20)), Section_Service_getInstance(), CenterHorizontally_instance, $composer_0, 48, 0);
      var tmp = numColumns(1, 2, 3);
      SimpleGrid(tmp, null, null, null, ComposableSingletons$ServiceSectionKt_getInstance().t3p_1, $composer_0, 24576, 14);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.m13();
    }
    return Unit_instance;
  }
  function ComposableSingletons$ServiceSectionKt() {
    ComposableSingletons$ServiceSectionKt_instance = this;
    var tmp = this;
    tmp.s3p_1 = ComposableLambda$invoke$ref_74(composableLambdaInstance(-1436196466, false, ComposableSingletons$ServiceSectionKt$lambda_1$lambda_vjhl50));
    var tmp_0 = this;
    tmp_0.t3p_1 = ComposableLambda$invoke$ref_75(composableLambdaInstance(-155658936, false, ComposableSingletons$ServiceSectionKt$lambda_2$lambda_anzzrx));
    var tmp_1 = this;
    tmp_1.u3p_1 = ComposableLambda$invoke$ref_76(composableLambdaInstance(-957506607, false, ComposableSingletons$ServiceSectionKt$lambda_3$lambda_i5mhaa));
  }
  var ComposableSingletons$ServiceSectionKt_instance;
  function ComposableSingletons$ServiceSectionKt_getInstance() {
    if (ComposableSingletons$ServiceSectionKt_instance == null)
      new ComposableSingletons$ServiceSectionKt();
    return ComposableSingletons$ServiceSectionKt_instance;
  }
  function ServiceSection$lambda($$changed) {
    return function ($composer, $force) {
      ServiceSection($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function ServiceContent$lambda($$changed) {
    return function ($composer, $force) {
      ServiceContent($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function get_AboutImageStyle() {
    _init_properties_AboutSectionStyle_kt__9u1h15();
    return AboutImageStyle;
  }
  var AboutImageStyle;
  function get_AboutTextStyle() {
    _init_properties_AboutSectionStyle_kt__9u1h15();
    return AboutTextStyle;
  }
  var AboutTextStyle;
  function AboutImageStyle$lambda($this$CssStyle) {
    _init_properties_AboutSectionStyle_kt__9u1h15();
    $this$CssStyle.k31(AboutImageStyle$lambda$lambda);
    var tmp = get_hover($this$CssStyle);
    tmp.p30(AboutImageStyle$lambda$lambda_0);
    return Unit_instance;
  }
  function AboutImageStyle$lambda$lambda() {
    _init_properties_AboutSectionStyle_kt__9u1h15();
    var tmp = Companion_instance_0;
    return transition(rotate(borderRadius(styleModifier(tmp, AboutImageStyle$lambda$lambda$lambda), get_px(0)), get_deg(0)), [Companion_instance_6.r2n(Companion_instance_15.c2o(), get_ms(200))]);
  }
  function AboutImageStyle$lambda$lambda$lambda($this$styleModifier) {
    _init_properties_AboutSectionStyle_kt__9u1h15();
    filter($this$styleModifier, AboutImageStyle$lambda$lambda$lambda$lambda);
    return Unit_instance;
  }
  function AboutImageStyle$lambda$lambda$lambda$lambda($this$filter) {
    _init_properties_AboutSectionStyle_kt__9u1h15();
    $this$filter.c2g(get_percent(100));
    return Unit_instance;
  }
  function AboutImageStyle$lambda$lambda_0() {
    _init_properties_AboutSectionStyle_kt__9u1h15();
    var tmp = Companion_instance_0;
    return rotate(borderRadius(styleModifier(tmp, AboutImageStyle$lambda$lambda$lambda_0), get_px(100)), get_deg(10));
  }
  function AboutImageStyle$lambda$lambda$lambda_0($this$styleModifier) {
    _init_properties_AboutSectionStyle_kt__9u1h15();
    filter($this$styleModifier, AboutImageStyle$lambda$lambda$lambda$lambda_0);
    return Unit_instance;
  }
  function AboutImageStyle$lambda$lambda$lambda$lambda_0($this$filter) {
    _init_properties_AboutSectionStyle_kt__9u1h15();
    $this$filter.c2g(get_percent(0));
    return Unit_instance;
  }
  function AboutTextStyle$lambda($this$CssStyle) {
    _init_properties_AboutSectionStyle_kt__9u1h15();
    $this$CssStyle.k31(AboutTextStyle$lambda$lambda);
    var tmp = get_hover($this$CssStyle);
    tmp.p30(AboutTextStyle$lambda$lambda_0);
    return Unit_instance;
  }
  function AboutTextStyle$lambda$lambda() {
    _init_properties_AboutSectionStyle_kt__9u1h15();
    return transition(opacity(Companion_instance_0, get_percent(50)), [Companion_instance_6.u2n('opacity', get_ms(200))]);
  }
  function AboutTextStyle$lambda$lambda_0() {
    _init_properties_AboutSectionStyle_kt__9u1h15();
    return opacity(Companion_instance_0, get_percent(100));
  }
  var properties_initialized_AboutSectionStyle_kt_yveo53;
  function _init_properties_AboutSectionStyle_kt__9u1h15() {
    if (!properties_initialized_AboutSectionStyle_kt_yveo53) {
      properties_initialized_AboutSectionStyle_kt_yveo53 = true;
      AboutImageStyle = CssStyle(VOID, AboutImageStyle$lambda);
      AboutTextStyle = CssStyle(VOID, AboutTextStyle$lambda);
    }
  }
  function get_BackToTopButtonStyle() {
    _init_properties_BackToTopStyle_kt__3sr2oy();
    return BackToTopButtonStyle;
  }
  var BackToTopButtonStyle;
  function BackToTopButtonStyle$lambda($this$CssStyle) {
    _init_properties_BackToTopStyle_kt__3sr2oy();
    $this$CssStyle.k31(BackToTopButtonStyle$lambda$lambda);
    var tmp = get_hover($this$CssStyle);
    tmp.p30(BackToTopButtonStyle$lambda$lambda_0);
    return Unit_instance;
  }
  function BackToTopButtonStyle$lambda$lambda() {
    _init_properties_BackToTopStyle_kt__3sr2oy();
    return transition(rotate(Companion_instance_0, get_deg(180)), [Companion_instance_6.u2n('rotate', get_ms(200))]);
  }
  function BackToTopButtonStyle$lambda$lambda_0() {
    _init_properties_BackToTopStyle_kt__3sr2oy();
    return rotate(Companion_instance_0, get_deg(0));
  }
  var properties_initialized_BackToTopStyle_kt_mrg5c;
  function _init_properties_BackToTopStyle_kt__3sr2oy() {
    if (!properties_initialized_BackToTopStyle_kt_mrg5c) {
      properties_initialized_BackToTopStyle_kt_mrg5c = true;
      BackToTopButtonStyle = CssStyle(VOID, BackToTopButtonStyle$lambda);
    }
  }
  function get_InputStyle() {
    _init_properties_ContactSectionStyle_kt__ofhc2i();
    return InputStyle;
  }
  var InputStyle;
  function InputStyle$lambda($this$CssStyle) {
    _init_properties_ContactSectionStyle_kt__ofhc2i();
    $this$CssStyle.k31(InputStyle$lambda$lambda);
    var tmp = get_focus($this$CssStyle);
    tmp.p30(InputStyle$lambda$lambda_0);
    var tmp_0 = get_hover($this$CssStyle);
    tmp_0.p30(InputStyle$lambda$lambda_1);
    return Unit_instance;
  }
  function InputStyle$lambda$lambda() {
    _init_properties_ContactSectionStyle_kt__ofhc2i();
    var tmp = Companion_instance_0;
    var tmp_0 = get_px(2);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return transition(border(tmp, tmp_0, 'solid', Theme_LightGray_getInstance().s3j_1), [Companion_instance_6.u2n('border', get_ms(200))]);
  }
  function InputStyle$lambda$lambda_0() {
    _init_properties_ContactSectionStyle_kt__ofhc2i();
    var tmp = Companion_instance_0;
    var tmp_0 = get_px(2);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return border(tmp, tmp_0, 'solid', Theme_Primary_getInstance().s3j_1);
  }
  function InputStyle$lambda$lambda_1() {
    _init_properties_ContactSectionStyle_kt__ofhc2i();
    var tmp = Companion_instance_0;
    var tmp_0 = get_px(2);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return border(tmp, tmp_0, 'solid', Theme_Primary_getInstance().s3j_1);
  }
  var properties_initialized_ContactSectionStyle_kt_8orhq4;
  function _init_properties_ContactSectionStyle_kt__ofhc2i() {
    if (!properties_initialized_ContactSectionStyle_kt_8orhq4) {
      properties_initialized_ContactSectionStyle_kt_8orhq4 = true;
      InputStyle = CssStyle(VOID, InputStyle$lambda);
    }
  }
  function get_NavigationItemStyle() {
    _init_properties_MainSectionStyle_kt__i45i63();
    return NavigationItemStyle;
  }
  var NavigationItemStyle;
  function get_LogoStyle() {
    _init_properties_MainSectionStyle_kt__i45i63();
    return LogoStyle;
  }
  var LogoStyle;
  function get_SocialLinkStyle() {
    _init_properties_MainSectionStyle_kt__i45i63();
    return SocialLinkStyle;
  }
  var SocialLinkStyle;
  function get_MainButtonStyle() {
    _init_properties_MainSectionStyle_kt__i45i63();
    return MainButtonStyle;
  }
  var MainButtonStyle;
  function get_MainImageStyle() {
    _init_properties_MainSectionStyle_kt__i45i63();
    return MainImageStyle;
  }
  var MainImageStyle;
  function NavigationItemStyle$lambda($this$CssStyle) {
    _init_properties_MainSectionStyle_kt__i45i63();
    $this$CssStyle.k31(NavigationItemStyle$lambda$lambda);
    var tmp = get_hover($this$CssStyle);
    tmp.p30(NavigationItemStyle$lambda$lambda_0);
    return Unit_instance;
  }
  function NavigationItemStyle$lambda$lambda() {
    _init_properties_MainSectionStyle_kt__i45i63();
    var tmp = Companion_instance_0;
    return transition(color(styleModifier(tmp, NavigationItemStyle$lambda$lambda$lambda), Theme_Secondary_getInstance().s3j_1), [Companion_instance_6.u2n('color', get_ms(200))]);
  }
  function NavigationItemStyle$lambda$lambda$lambda($this$styleModifier) {
    _init_properties_MainSectionStyle_kt__i45i63();
    $this$styleModifier.m2e('--bs-link-color', Theme_Secondary_getInstance().s3j_1);
    return Unit_instance;
  }
  function NavigationItemStyle$lambda$lambda_0() {
    _init_properties_MainSectionStyle_kt__i45i63();
    var tmp = Companion_instance_0;
    return color(styleModifier(tmp, NavigationItemStyle$lambda$lambda$lambda_0), Theme_DarkRed_getInstance().s3j_1);
  }
  function NavigationItemStyle$lambda$lambda$lambda_0($this$styleModifier) {
    _init_properties_MainSectionStyle_kt__i45i63();
    $this$styleModifier.m2e('--bs-link-hover-color', Theme_DarkRed_getInstance().s3j_1);
    return Unit_instance;
  }
  function LogoStyle$lambda($this$CssStyle) {
    _init_properties_MainSectionStyle_kt__i45i63();
    $this$CssStyle.k31(LogoStyle$lambda$lambda);
    var tmp = get_hover($this$CssStyle);
    tmp.p30(LogoStyle$lambda$lambda_0);
    return Unit_instance;
  }
  function LogoStyle$lambda$lambda() {
    _init_properties_MainSectionStyle_kt__i45i63();
    var tmp = Companion_instance_0;
    return transition(transform(tmp, LogoStyle$lambda$lambda$lambda), [Companion_instance_6.u2n('transform', get_ms(200))]);
  }
  function LogoStyle$lambda$lambda$lambda($this$transform) {
    _init_properties_MainSectionStyle_kt__i45i63();
    $this$transform.f2g(get_deg(0));
    return Unit_instance;
  }
  function LogoStyle$lambda$lambda_0() {
    _init_properties_MainSectionStyle_kt__i45i63();
    var tmp = Companion_instance_0;
    return transform(tmp, LogoStyle$lambda$lambda$lambda_0);
  }
  function LogoStyle$lambda$lambda$lambda_0($this$transform) {
    _init_properties_MainSectionStyle_kt__i45i63();
    $this$transform.f2g(get_deg(-10));
    return Unit_instance;
  }
  function SocialLinkStyle$lambda($this$CssStyle) {
    _init_properties_MainSectionStyle_kt__i45i63();
    $this$CssStyle.k31(SocialLinkStyle$lambda$lambda);
    var tmp = get_hover($this$CssStyle);
    tmp.p30(SocialLinkStyle$lambda$lambda_0);
    return Unit_instance;
  }
  function SocialLinkStyle$lambda$lambda() {
    _init_properties_MainSectionStyle_kt__i45i63();
    return transition(color(Companion_instance_0, Colors_instance.c2x()), [Companion_instance_6.u2n('color', get_ms(200))]);
  }
  function SocialLinkStyle$lambda$lambda_0() {
    _init_properties_MainSectionStyle_kt__i45i63();
    return color(Companion_instance_0, Theme_LighterRed_getInstance().s3j_1);
  }
  function MainButtonStyle$lambda($this$CssStyle) {
    _init_properties_MainSectionStyle_kt__i45i63();
    $this$CssStyle.k31(MainButtonStyle$lambda$lambda);
    var tmp = get_hover($this$CssStyle);
    tmp.p30(MainButtonStyle$lambda$lambda_0);
    return Unit_instance;
  }
  function MainButtonStyle$lambda$lambda() {
    _init_properties_MainSectionStyle_kt__i45i63();
    return transition(width(Companion_instance_0, get_px(100)), [Companion_instance_6.u2n('width', get_ms(200))]);
  }
  function MainButtonStyle$lambda$lambda_0() {
    _init_properties_MainSectionStyle_kt__i45i63();
    return width(Companion_instance_0, get_px(120));
  }
  function MainImageStyle$lambda($this$CssStyle) {
    _init_properties_MainSectionStyle_kt__i45i63();
    $this$CssStyle.k31(MainImageStyle$lambda$lambda);
    var tmp = get_hover($this$CssStyle);
    tmp.p30(MainImageStyle$lambda$lambda_0);
    return Unit_instance;
  }
  function MainImageStyle$lambda$lambda() {
    _init_properties_MainSectionStyle_kt__i45i63();
    var tmp = Companion_instance_0;
    return transition(styleModifier(tmp, MainImageStyle$lambda$lambda$lambda), [Companion_instance_6.u2n('filter', get_ms(200))]);
  }
  function MainImageStyle$lambda$lambda$lambda($this$styleModifier) {
    _init_properties_MainSectionStyle_kt__i45i63();
    filter($this$styleModifier, MainImageStyle$lambda$lambda$lambda$lambda);
    return Unit_instance;
  }
  function MainImageStyle$lambda$lambda$lambda$lambda($this$filter) {
    _init_properties_MainSectionStyle_kt__i45i63();
    $this$filter.c2g(get_percent(100));
    return Unit_instance;
  }
  function MainImageStyle$lambda$lambda_0() {
    _init_properties_MainSectionStyle_kt__i45i63();
    var tmp = Companion_instance_0;
    return styleModifier(tmp, MainImageStyle$lambda$lambda$lambda_0);
  }
  function MainImageStyle$lambda$lambda$lambda_0($this$styleModifier) {
    _init_properties_MainSectionStyle_kt__i45i63();
    filter($this$styleModifier, MainImageStyle$lambda$lambda$lambda$lambda_0);
    return Unit_instance;
  }
  function MainImageStyle$lambda$lambda$lambda$lambda_0($this$filter) {
    _init_properties_MainSectionStyle_kt__i45i63();
    $this$filter.c2g(get_percent(0));
    return Unit_instance;
  }
  var properties_initialized_MainSectionStyle_kt_msr6ux;
  function _init_properties_MainSectionStyle_kt__i45i63() {
    if (!properties_initialized_MainSectionStyle_kt_msr6ux) {
      properties_initialized_MainSectionStyle_kt_msr6ux = true;
      NavigationItemStyle = CssStyle(VOID, NavigationItemStyle$lambda);
      LogoStyle = CssStyle(VOID, LogoStyle$lambda);
      SocialLinkStyle = CssStyle(VOID, SocialLinkStyle$lambda);
      MainButtonStyle = CssStyle(VOID, MainButtonStyle$lambda);
      MainImageStyle = CssStyle(VOID, MainImageStyle$lambda);
    }
  }
  function get_PortfolioSectionStyle() {
    _init_properties_PortfolioSectionStyle_kt__ltxgaq();
    return PortfolioSectionStyle;
  }
  var PortfolioSectionStyle;
  function get_PortfolioArrowIconStyle() {
    _init_properties_PortfolioSectionStyle_kt__ltxgaq();
    return PortfolioArrowIconStyle;
  }
  var PortfolioArrowIconStyle;
  function PortfolioSectionStyle$lambda($this$CssStyle) {
    _init_properties_PortfolioSectionStyle_kt__ltxgaq();
    $this$CssStyle.z2z(' > #columnParent > #boxParent > #greenOverlay', PortfolioSectionStyle$lambda$lambda);
    $this$CssStyle.z2z(':hover > #columnParent > #boxParent > #greenOverlay', PortfolioSectionStyle$lambda$lambda_0);
    $this$CssStyle.z2z(' > #columnParent > #boxParent > #greenOverlay > #linkIcon', PortfolioSectionStyle$lambda$lambda_1);
    $this$CssStyle.z2z(':hover > #columnParent > #boxParent > #greenOverlay > #linkIcon', PortfolioSectionStyle$lambda$lambda_2);
    $this$CssStyle.z2z(' > #columnParent > #portfolioTitle', PortfolioSectionStyle$lambda$lambda_3);
    $this$CssStyle.z2z(':hover > #columnParent > #portfolioTitle', PortfolioSectionStyle$lambda$lambda_4);
    $this$CssStyle.z2z(' > #columnParent > #portfolioDesc', PortfolioSectionStyle$lambda$lambda_5);
    $this$CssStyle.z2z(':hover > #columnParent > #portfolioDesc', PortfolioSectionStyle$lambda$lambda_6);
    return Unit_instance;
  }
  function PortfolioSectionStyle$lambda$lambda() {
    _init_properties_PortfolioSectionStyle_kt__ltxgaq();
    return transition_0(width(Companion_instance_0, get_px(0)), [CSSTransition_init_$Create$('width', get_ms(500))]);
  }
  function PortfolioSectionStyle$lambda$lambda_0() {
    _init_properties_PortfolioSectionStyle_kt__ltxgaq();
    return width(Companion_instance_0, get_px(300));
  }
  function PortfolioSectionStyle$lambda$lambda_1() {
    _init_properties_PortfolioSectionStyle_kt__ltxgaq();
    return visibility(Companion_instance_0, Companion_instance_3.n2m());
  }
  function PortfolioSectionStyle$lambda$lambda_2() {
    _init_properties_PortfolioSectionStyle_kt__ltxgaq();
    return visibility(Companion_instance_0, Companion_instance_3.e2o());
  }
  function PortfolioSectionStyle$lambda$lambda_3() {
    _init_properties_PortfolioSectionStyle_kt__ltxgaq();
    return transition_0(translateX(color(Companion_instance_0, Theme_Secondary_getInstance().s3j_1), get_percent(0)), [CSSTransition_init_$Create$('color', get_ms(200)), CSSTransition_init_$Create$('translate', get_ms(200))]);
  }
  function PortfolioSectionStyle$lambda$lambda_4() {
    _init_properties_PortfolioSectionStyle_kt__ltxgaq();
    return translateX(color(Companion_instance_0, Theme_Primary_getInstance().s3j_1), get_percent(5));
  }
  function PortfolioSectionStyle$lambda$lambda_5() {
    _init_properties_PortfolioSectionStyle_kt__ltxgaq();
    return transition_0(translateX(Companion_instance_0, get_percent(0)), [CSSTransition_init_$Create$('translate', get_ms(200))]);
  }
  function PortfolioSectionStyle$lambda$lambda_6() {
    _init_properties_PortfolioSectionStyle_kt__ltxgaq();
    return translateX(Companion_instance_0, get_percent(5));
  }
  function PortfolioArrowIconStyle$lambda($this$CssStyle) {
    _init_properties_PortfolioSectionStyle_kt__ltxgaq();
    $this$CssStyle.k31(PortfolioArrowIconStyle$lambda$lambda);
    var tmp = get_hover($this$CssStyle);
    tmp.p30(PortfolioArrowIconStyle$lambda$lambda_0);
    return Unit_instance;
  }
  function PortfolioArrowIconStyle$lambda$lambda() {
    _init_properties_PortfolioSectionStyle_kt__ltxgaq();
    return transition_0(color(Companion_instance_0, Theme_Gray_getInstance().s3j_1), [CSSTransition_init_$Create$('color', get_ms(200))]);
  }
  function PortfolioArrowIconStyle$lambda$lambda_0() {
    _init_properties_PortfolioSectionStyle_kt__ltxgaq();
    return color(Companion_instance_0, Theme_Primary_getInstance().s3j_1);
  }
  var properties_initialized_PortfolioSectionStyle_kt_w1y7dw;
  function _init_properties_PortfolioSectionStyle_kt__ltxgaq() {
    if (!properties_initialized_PortfolioSectionStyle_kt_w1y7dw) {
      properties_initialized_PortfolioSectionStyle_kt_w1y7dw = true;
      PortfolioSectionStyle = CssStyle(VOID, PortfolioSectionStyle$lambda);
      PortfolioArrowIconStyle = CssStyle(VOID, PortfolioArrowIconStyle$lambda);
    }
  }
  function get_ServiceCardStyle() {
    _init_properties_ServiceSectionStyle_kt__us8nvz();
    return ServiceCardStyle;
  }
  var ServiceCardStyle;
  function ServiceCardStyle$lambda($this$CssStyle) {
    _init_properties_ServiceSectionStyle_kt__us8nvz();
    $this$CssStyle.k31(ServiceCardStyle$lambda$lambda);
    var tmp = get_hover($this$CssStyle);
    tmp.p30(ServiceCardStyle$lambda$lambda_0);
    $this$CssStyle.z2z(' > #iconBox', ServiceCardStyle$lambda$lambda_1);
    $this$CssStyle.z2z(':hover > #iconBox', ServiceCardStyle$lambda$lambda_2);
    $this$CssStyle.z2z(' > p', ServiceCardStyle$lambda$lambda_3);
    $this$CssStyle.z2z(':hover > p', ServiceCardStyle$lambda$lambda_4);
    return Unit_instance;
  }
  function ServiceCardStyle$lambda$lambda() {
    _init_properties_ServiceSectionStyle_kt__us8nvz();
    var tmp = Companion_instance_0;
    var tmp_0 = get_px(2);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return transition(backgroundColor(border(tmp, tmp_0, 'solid', Theme_LightGray_getInstance().s3j_1), Theme_LightGray_getInstance().s3j_1), [Companion_instance_6.u2n('border', get_ms(200)), Companion_instance_6.u2n('background', get_ms(200))]);
  }
  function ServiceCardStyle$lambda$lambda_0() {
    _init_properties_ServiceSectionStyle_kt__us8nvz();
    var tmp = Companion_instance_0;
    var tmp_0 = get_px(2);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return backgroundColor(border(tmp, tmp_0, 'solid', Theme_Primary_getInstance().s3j_1), Theme_LighterGray_getInstance().s3j_1);
  }
  function ServiceCardStyle$lambda$lambda_1() {
    _init_properties_ServiceSectionStyle_kt__us8nvz();
    return transition(backgroundColor(Companion_instance_0, Colors_instance.h2w()), [Companion_instance_6.u2n('background', get_ms(200))]);
  }
  function ServiceCardStyle$lambda$lambda_2() {
    _init_properties_ServiceSectionStyle_kt__us8nvz();
    return backgroundColor(Companion_instance_0, Colors_instance.c2x());
  }
  function ServiceCardStyle$lambda$lambda_3() {
    _init_properties_ServiceSectionStyle_kt__us8nvz();
    return transition(color(Companion_instance_0, Theme_Secondary_getInstance().s3j_1), [Companion_instance_6.u2n('color', get_ms(200))]);
  }
  function ServiceCardStyle$lambda$lambda_4() {
    _init_properties_ServiceSectionStyle_kt__us8nvz();
    return color(Companion_instance_0, Colors_instance.c2x());
  }
  var properties_initialized_ServiceSectionStyle_kt_3weqi9;
  function _init_properties_ServiceSectionStyle_kt__us8nvz() {
    if (!properties_initialized_ServiceSectionStyle_kt_3weqi9) {
      properties_initialized_ServiceSectionStyle_kt_3weqi9 = true;
      ServiceCardStyle = CssStyle(VOID, ServiceCardStyle$lambda);
    }
  }
  var org_example_landingpage_util_Constants$stable;
  var org_example_landingpage_util_Res_Icon$stable;
  var org_example_landingpage_util_Res_Image$stable;
  var org_example_landingpage_util_Res$stable;
  function Constants() {
    Constants_instance = this;
    this.g3o_1 = 1920;
    this.h3o_1 = 'Roboto';
    this.i3o_1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
    this.j3o_1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
    this.k3o_1 = listOf(['Hello, I am Abdelrahman Abdelwahab, I am a Mobile App Developer and UI/UX Designer with a strong background in creating innovative, user-centered mobile applications.', '- With expertise in Mobile development using Kotlin and Java for Android, and Flutter for cross-platform,', '- I build apps that are not only just functional but also visually engaging and responsive.', '- Full project management from start to finish', '- Regular communication is important to me, so let\u2019s keep in touch.']);
  }
  var Constants_instance;
  function Constants_getInstance() {
    if (Constants_instance == null)
      new Constants();
    return Constants_instance;
  }
  function observeViewportEntered(sectionId, distanceFromTop, onViewportEntered, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t1a(1010798156);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.t10(sectionId) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.x19(distanceFromTop) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.v19(onViewportEntered) ? 256 : 128);
    if (!(($dirty & 147) === 146) || !$composer_0.v18()) {
      if (isTraceInProgress()) {
        traceEventStart(1010798156, $dirty, -1, 'org.example.landingpage.util.observeViewportEntered (Functions.kt:13)');
      }
      $composer_0.a19(-1609561299);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.f1a();
      var tmp;
      if (false || it === Companion_getInstance().s13_1) {
        // Inline function 'org.example.landingpage.util.observeViewportEntered.<anonymous>' call
        var value = mutableStateOf(false);
        this_0.l1a(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.b19();
      var viewportEntered$delegate = tmp0_group;
      $composer_0.a19(-1609559359);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_1.f1a();
      var tmp_1;
      if (false || it_0 === Companion_getInstance().s13_1) {
        // Inline function 'org.example.landingpage.util.observeViewportEntered.<anonymous>' call
        var value_0 = EventListener(observeViewportEntered$lambda_1(sectionId, distanceFromTop, viewportEntered$delegate));
        this_1.l1a(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.b19();
      var listener = tmp1_group;
      var tmp_3 = observeViewportEntered$lambda(viewportEntered$delegate);
      $composer_0.a19(-1609550269);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_2 = $composer_0;
      var invalid = !!(($dirty & 896) === 256 | $composer_0.v19(listener));
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = this_2.f1a();
      var tmp_4;
      if (invalid || it_1 === Companion_getInstance().s13_1) {
        // Inline function 'org.example.landingpage.util.observeViewportEntered.<anonymous>' call
        var value_1 = observeViewportEntered$slambda_0(onViewportEntered, listener, viewportEntered$delegate, null);
        this_2.l1a(value_1);
        tmp_4 = value_1;
      } else {
        tmp_4 = it_1;
      }
      var tmp_5 = tmp_4;
      var tmp2_group = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
      $composer_0.b19();
      LaunchedEffect(tmp_3, tmp2_group, $composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.m13();
    }
    var tmp3_safe_receiver = $composer_0.u1a();
    if (tmp3_safe_receiver == null)
      null;
    else {
      tmp3_safe_receiver.u1f(observeViewportEntered$lambda_2(sectionId, distanceFromTop, onViewportEntered, $changed));
    }
  }
  function animateNumbers(number, delay, onUpdate, $completion) {
    delay = delay === VOID ? new Long(10, 0) : delay;
    var tmp = new $animateNumbersCOROUTINE$0(number, delay, onUpdate, $completion);
    tmp.x8_1 = Unit_instance;
    tmp.y8_1 = null;
    return tmp.d9();
  }
  function observeViewportEntered$lambda($viewportEntered$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('viewportEntered', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $viewportEntered$delegate.w1();
  }
  function observeViewportEntered$lambda_0($viewportEntered$delegate, _set____db54di) {
    getLocalDelegateReference('viewportEntered', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $viewportEntered$delegate.or(_set____db54di);
    return Unit_instance;
  }
  function observeViewportEntered$lambda_1($sectionId, $distanceFromTop, $viewportEntered$delegate) {
    return function (it) {
      var tmp0_safe_receiver = document.getElementById($sectionId);
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.getBoundingClientRect();
      var top = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.top;
      var tmp;
      if (!(top == null) && top < $distanceFromTop) {
        observeViewportEntered$lambda_0($viewportEntered$delegate, true);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function observeViewportEntered$slambda($onViewportEntered, $listener, $viewportEntered$delegate, resultContinuation) {
    this.s3q_1 = $onViewportEntered;
    this.t3q_1 = $listener;
    this.u3q_1 = $viewportEntered$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(observeViewportEntered$slambda).k1h = function ($this$LaunchedEffect, $completion) {
    var tmp = this.l1h($this$LaunchedEffect, $completion);
    tmp.x8_1 = Unit_instance;
    tmp.y8_1 = null;
    return tmp.d9();
  };
  protoOf(observeViewportEntered$slambda).p9 = function (p1, $completion) {
    return this.k1h((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(observeViewportEntered$slambda).d9 = function () {
    var suspendResult = this.x8_1;
    $sm: do
      try {
        var tmp = this.v8_1;
        if (tmp === 0) {
          this.w8_1 = 1;
          if (observeViewportEntered$lambda(this.u3q_1)) {
            this.s3q_1();
            window.removeEventListener('scroll', this.t3q_1);
          } else {
            window.addEventListener('scroll', this.t3q_1);
          }
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
  protoOf(observeViewportEntered$slambda).l1h = function ($this$LaunchedEffect, completion) {
    var i = new observeViewportEntered$slambda(this.s3q_1, this.t3q_1, this.u3q_1, completion);
    i.v3q_1 = $this$LaunchedEffect;
    return i;
  };
  function observeViewportEntered$slambda_0($onViewportEntered, $listener, $viewportEntered$delegate, resultContinuation) {
    var i = new observeViewportEntered$slambda($onViewportEntered, $listener, $viewportEntered$delegate, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.k1h($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function observeViewportEntered$lambda_2($sectionId, $distanceFromTop, $onViewportEntered, $$changed) {
    return function ($composer, $force) {
      observeViewportEntered($sectionId, $distanceFromTop, $onViewportEntered, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function $animateNumbersCOROUTINE$0(number, delay, onUpdate, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.d3q_1 = number;
    this.e3q_1 = delay;
    this.f3q_1 = onUpdate;
  }
  protoOf($animateNumbersCOROUTINE$0).d9 = function () {
    var suspendResult = this.x8_1;
    $sm: do
      try {
        var tmp = this.v8_1;
        switch (tmp) {
          case 0:
            this.w8_1 = 4;
            var tmp_0 = this;
            tmp_0.g3q_1 = numberRangeToNumber(0, this.d3q_1);
            this.h3q_1 = this.g3q_1.j();
            this.v8_1 = 1;
            continue $sm;
          case 1:
            if (!this.h3q_1.k()) {
              this.v8_1 = 3;
              continue $sm;
            }

            this.i3q_1 = this.h3q_1.l();
            var tmp_1 = this;
            tmp_1.j3q_1 = this.i3q_1;
            this.v8_1 = 2;
            suspendResult = delay(this.e3q_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.f3q_1(this.j3q_1);
            this.v8_1 = 1;
            continue $sm;
          case 3:
            return Unit_instance;
          case 4:
            throw this.y8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.w8_1 === 4) {
          throw e;
        } else {
          this.v8_1 = this.w8_1;
          this.y8_1 = e;
        }
      }
     while (true);
  };
  //region block: init
  org_example_landingpage_util_Constants$stable = 8;
  org_example_landingpage_util_Res_Icon$stable = 0;
  org_example_landingpage_util_Res_Image$stable = 0;
  org_example_landingpage_util_Res$stable = 0;
  //endregion
  mainWrapper();
  return _;
}));

//# sourceMappingURL=landingpage.js.map
