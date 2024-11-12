(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kobweb-frontend-browser-ext.js', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-compose-runtime-runtime.js', './html-html-core.js', './kobweb-frontend-compose-html-ext.js', './kobweb-common-client-server-internal.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kobweb-frontend-browser-ext.js'), require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./html-html-core.js'), require('./kobweb-frontend-compose-html-ext.js'), require('./kobweb-common-client-server-internal.js'));
  else {
    if (typeof globalThis['kobweb-frontend-browser-ext'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-kobweb-core'. Its dependency 'kobweb-frontend-browser-ext' was not found. Please, check whether 'kobweb-frontend-browser-ext' is loaded prior to 'kobweb-frontend-kobweb-core'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-kobweb-core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kobweb-frontend-kobweb-core'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-kobweb-core'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'kobweb-frontend-kobweb-core'.");
    }
    if (typeof globalThis['html-html-core'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-kobweb-core'. Its dependency 'html-html-core' was not found. Please, check whether 'html-html-core' is loaded prior to 'kobweb-frontend-kobweb-core'.");
    }
    if (typeof globalThis['kobweb-frontend-compose-html-ext'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-kobweb-core'. Its dependency 'kobweb-frontend-compose-html-ext' was not found. Please, check whether 'kobweb-frontend-compose-html-ext' is loaded prior to 'kobweb-frontend-kobweb-core'.");
    }
    if (typeof globalThis['kobweb-common-client-server-internal'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-kobweb-core'. Its dependency 'kobweb-common-client-server-internal' was not found. Please, check whether 'kobweb-common-client-server-internal' is loaded prior to 'kobweb-frontend-kobweb-core'.");
    }
    globalThis['kobweb-frontend-kobweb-core'] = factory(typeof globalThis['kobweb-frontend-kobweb-core'] === 'undefined' ? {} : globalThis['kobweb-frontend-kobweb-core'], globalThis['kobweb-frontend-browser-ext'], globalThis['kotlin-kotlin-stdlib'], globalThis['compose-multiplatform-core-compose-runtime-runtime'], globalThis['html-html-core'], globalThis['kobweb-frontend-compose-html-ext'], globalThis['kobweb-common-client-server-internal']);
  }
}(function (_, kotlin_com_varabyte_kobweb_browser_ext, kotlin_kotlin, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_html_html_core, kotlin_com_varabyte_kobweb_compose_html_ext, kotlin_com_varabyte_kobweb_client_server_internal) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var get_http = kotlin_com_varabyte_kobweb_browser_ext.$_$.a;
  var Unit_instance = kotlin_kotlin.$_$.d2;
  var protoOf = kotlin_kotlin.$_$.x6;
  var initMetadataForClass = kotlin_kotlin.$_$.g6;
  var VOID = kotlin_kotlin.$_$.e;
  var KProperty1 = kotlin_kotlin.$_$.j7;
  var getPropertyCallableRef = kotlin_kotlin.$_$.d6;
  var KMutableProperty0 = kotlin_kotlin.$_$.g7;
  var KMutableProperty1 = kotlin_kotlin.$_$.h7;
  var lazy = kotlin_kotlin.$_$.m9;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a1;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.q;
  var Style = kotlin_org_jetbrains_compose_html_html_core.$_$.t3;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.x2;
  var padding = kotlin_org_jetbrains_compose_html_html_core.$_$.u2;
  var margin = kotlin_org_jetbrains_compose_html_html_core.$_$.l2;
  var boxSizing = kotlin_org_jetbrains_compose_html_html_core.$_$.m1;
  var StyleSheet = kotlin_org_jetbrains_compose_html_html_core.$_$.e1;
  var StyleSheet_init_$Init$ = kotlin_org_jetbrains_compose_html_html_core.$_$.a;
  var layer = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.c1;
  var initMetadataForObject = kotlin_kotlin.$_$.l6;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b1;
  var toString = kotlin_kotlin.$_$.z6;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.g1;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.s1;
  var substringAfterLast = kotlin_kotlin.$_$.j8;
  var plus = kotlin_kotlin.$_$.c4;
  var equals = kotlin_kotlin.$_$.z5;
  var getStringHashCode = kotlin_kotlin.$_$.e6;
  var hashCode = kotlin_kotlin.$_$.f6;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.s9;
  var initMetadataForCompanion = kotlin_kotlin.$_$.h6;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v;
  var staticCompositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h1;
  var THROW_CCE = kotlin_kotlin.$_$.e9;
  var A = kotlin_org_jetbrains_compose_html_html_core.$_$.j3;
  var Enum = kotlin_kotlin.$_$.x8;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.n9;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.y;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.i;
  var charSequenceLength = kotlin_kotlin.$_$.w5;
  var joinToString = kotlin_kotlin.$_$.o3;
  var objectCreate = kotlin_kotlin.$_$.w6;
  var removePrefix = kotlin_kotlin.$_$.d8;
  var startsWith = kotlin_kotlin.$_$.h8;
  var drop = kotlin_kotlin.$_$.u7;
  var first = kotlin_kotlin.$_$.x7;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.q;
  var charArrayOf = kotlin_kotlin.$_$.u5;
  var split = kotlin_kotlin.$_$.g8;
  var getOrNull = kotlin_kotlin.$_$.l3;
  var Exception = kotlin_kotlin.$_$.z8;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.c1;
  var captureStack = kotlin_kotlin.$_$.t5;
  var ensureNotNull = kotlin_kotlin.$_$.l9;
  var isBlank = kotlin_kotlin.$_$.y7;
  var startsWith_0 = kotlin_kotlin.$_$.i8;
  var endsWith = kotlin_kotlin.$_$.v7;
  var dropLast = kotlin_kotlin.$_$.t7;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a;
  var emptyMap = kotlin_kotlin.$_$.e3;
  var last = kotlin_kotlin.$_$.t3;
  var DynamicNode = kotlin_com_varabyte_kobweb_client_server_internal.$_$.a;
  var toRouteString = kotlin_com_varabyte_kobweb_client_server_internal.$_$.c;
  var substringBefore = kotlin_kotlin.$_$.l8;
  var to = kotlin_kotlin.$_$.u9;
  var substringAfter = kotlin_kotlin.$_$.k8;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x;
  var RouteTree = kotlin_com_varabyte_kobweb_client_server_internal.$_$.b;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.j;
  var CompositionLocalProvider = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.d1;
  var charSequenceGet = kotlin_kotlin.$_$.v5;
  var removeSuffix = kotlin_kotlin.$_$.e8;
  var contains = kotlin_kotlin.$_$.s7;
  var toMutableMap = kotlin_kotlin.$_$.t4;
  var Div = kotlin_org_jetbrains_compose_html_html_core.$_$.l3;
  var Text = kotlin_org_jetbrains_compose_html_html_core.$_$.w3;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(ApiFetcher, 'ApiFetcher', VOID, VOID, VOID, [4, 5]);
  initMetadataForObject(DefaultStyleSheet, 'DefaultStyleSheet', VOID, StyleSheet);
  initMetadataForObject(AppGlobals, 'AppGlobals');
  initMetadataForClass(RouteInfo, 'RouteInfo');
  initMetadataForCompanion(Companion);
  initMetadataForClass(PageContext, 'PageContext');
  initMetadataForClass(InitKobwebContext, 'InitKobwebContext');
  initMetadataForClass(MutableKobwebConfig, 'MutableKobwebConfig', MutableKobwebConfig);
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(MutableOpenLinkStrategies, 'MutableOpenLinkStrategies', MutableOpenLinkStrategies);
  initMetadataForClass(OpenLinkStrategy, 'OpenLinkStrategy', VOID, Enum);
  initMetadataForClass(PageData, 'PageData');
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(Route, 'Route');
  initMetadataForClass(RouteException, 'RouteException', VOID, Exception);
  initMetadataForCompanion(Companion_2);
  initMetadataForCompanion(Companion_3);
  initMetadataForClass(RoutePrefixImpl, 'RoutePrefixImpl');
  initMetadataForClass(Router, 'Router', Router);
  initMetadataForClass(RouteInterceptorScope, 'RouteInterceptorScope');
  initMetadataForObject(ComposableSingletons$RouterKt, 'ComposableSingletons$RouterKt');
  initMetadataForClass(UpdateHistoryMode, 'UpdateHistoryMode', VOID, Enum);
  //endregion
  function get_api(_this__u8e3s4) {
    _init_properties_ApiFetcher_kt__epxlpv();
    // Inline function 'kotlin.getValue' call
    var this_0 = api$delegate;
    api$factory();
    return this_0.w1();
  }
  var api$delegate;
  var com_varabyte_kobweb_browser_ApiFetcher$stable;
  function ApiFetcher(window_0) {
    this.w2r_1 = window_0;
    this.x2r_1 = logOnError$factory(get_http(this.w2r_1));
  }
  protoOf(ApiFetcher).y2r = function (_set____db54di) {
    var this_0 = this.x2r_1;
    logOnError$factory_0();
    this_0.set(_set____db54di);
    return Unit_instance;
  };
  protoOf(ApiFetcher).z2r = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.x2r_1;
    logOnError$factory_1();
    return this_0.get();
  };
  function api$delegate$lambda() {
    _init_properties_ApiFetcher_kt__epxlpv();
    return new ApiFetcher(window);
  }
  function api$factory() {
    return getPropertyCallableRef('api', 1, KProperty1, function (receiver) {
      return get_api(receiver);
    }, null);
  }
  function logOnError$factory($b0) {
    return getPropertyCallableRef('logOnError', 0, KMutableProperty0, function () {
      return $b0.xt_1;
    }, function (value) {
      $b0.xt_1 = value;
      return Unit_instance;
    });
  }
  function logOnError$factory_0() {
    return getPropertyCallableRef('logOnError', 1, KMutableProperty1, function (receiver) {
      return receiver.z2r();
    }, function (receiver, value) {
      return receiver.y2r(value);
    });
  }
  function logOnError$factory_1() {
    return getPropertyCallableRef('logOnError', 1, KMutableProperty1, function (receiver) {
      return receiver.z2r();
    }, function (receiver, value) {
      return receiver.y2r(value);
    });
  }
  var properties_initialized_ApiFetcher_kt_nwc4x;
  function _init_properties_ApiFetcher_kt__epxlpv() {
    if (!properties_initialized_ApiFetcher_kt_nwc4x) {
      properties_initialized_ApiFetcher_kt_nwc4x = true;
      api$delegate = lazy(api$delegate$lambda);
      com_varabyte_kobweb_browser_ApiFetcher$stable = 8;
    }
  }
  var com_varabyte_kobweb_core_DefaultStyleSheet$stable;
  function KobwebApp(content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t1a(1293008755);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.v19(content) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.v18()) {
      if (isTraceInProgress()) {
        traceEventStart(1293008755, $dirty, -1, 'com.varabyte.kobweb.core.KobwebApp (App.kt:40)');
      }
      // Inline function 'org.jetbrains.compose.web.css.Style' call
      var styleSheet = DefaultStyleSheet_getInstance();
      var $composer_1 = $composer_0;
      $composer_1.a19(-1196466140);
      Style(null, styleSheet.h2f(), $composer_1, 0, 1);
      $composer_1.b19();
      content($composer_0, 14 & $dirty);
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
      tmp0_safe_receiver.u1f(KobwebApp$lambda(content, $changed));
    }
  }
  function DefaultStyleSheet$lambda($this$layer) {
    $this$layer.m2f('html, body', DefaultStyleSheet$lambda$lambda);
    $this$layer.m2f('*', DefaultStyleSheet$lambda$lambda_0);
    return Unit_instance;
  }
  function DefaultStyleSheet$lambda$lambda($this$style) {
    padding($this$style, [get_px(0)]);
    margin($this$style, [get_px(0)]);
    return Unit_instance;
  }
  function DefaultStyleSheet$lambda$lambda_0($this$style) {
    boxSizing($this$style, 'border-box');
    return Unit_instance;
  }
  function DefaultStyleSheet() {
    DefaultStyleSheet_instance = this;
    StyleSheet_init_$Init$(VOID, VOID, this);
    layer(this, 'reset', DefaultStyleSheet$lambda);
  }
  protoOf(DefaultStyleSheet).l2f = function (selector, cssRule) {
    return this.k2f(selector, cssRule);
  };
  var DefaultStyleSheet_instance;
  function DefaultStyleSheet_getInstance() {
    if (DefaultStyleSheet_instance == null)
      new DefaultStyleSheet();
    return DefaultStyleSheet_instance;
  }
  function KobwebApp$lambda($content, $$changed) {
    return function ($composer, $force) {
      KobwebApp($content, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  var com_varabyte_kobweb_core_AppGlobals$stable;
  function AppGlobals() {
  }
  protoOf(AppGlobals).g2s = function (values) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!!(this.f2s_1 == null)) {
      // Inline function 'com.varabyte.kobweb.core.AppGlobals.initialize.<anonymous>' call
      var message = 'Cannot initialize AppGlobals more than once';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.f2s_1 = values;
  };
  var AppGlobals_instance;
  function AppGlobals_getInstance() {
    return AppGlobals_instance;
  }
  function get_PageContextLocal() {
    _init_properties_PageContext_kt__u2hiem();
    return PageContextLocal;
  }
  var PageContextLocal;
  var com_varabyte_kobweb_core_PageContext_RouteInfo$stable;
  var com_varabyte_kobweb_core_PageContext$stable;
  function RouteInfo(route, dynamicParams) {
    this.h2s_1 = route;
    this.i2s_1 = dynamicParams;
    this.j2s_1 = substringAfterLast(this.h2s_1.p2s_1, _Char___init__impl__6a9atx(47));
    this.k2s_1 = this.h2s_1.p2s_1;
    this.l2s_1 = plus(this.h2s_1.q2s_1, this.i2s_1);
    this.m2s_1 = this.h2s_1.q2s_1;
    this.n2s_1 = this.h2s_1.r2s_1;
  }
  protoOf(RouteInfo).s2s = function () {
    return this.h2s_1.toString();
  };
  protoOf(RouteInfo).toString = function () {
    return this.s2s();
  };
  protoOf(RouteInfo).equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    if (other instanceof RouteInfo) {
      tmp_1 = other.k2s_1 === this.k2s_1;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = equals(other.l2s_1, this.l2s_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = other.n2s_1 == this.n2s_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(RouteInfo).hashCode = function () {
    var result = getStringHashCode(this.k2s_1);
    result = imul(31, result) + hashCode(this.l2s_1) | 0;
    var tmp = imul(31, result);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.n2s_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    return result;
  };
  protoOf(RouteInfo).t2s = function (path, queryParams, fragment, dynamicParams) {
    return new RouteInfo(Route_init_$Create$(path, queryParams, fragment), dynamicParams);
  };
  protoOf(RouteInfo).u2s = function (path, queryParams, fragment, dynamicParams, $super) {
    path = path === VOID ? this.h2s_1.p2s_1 : path;
    queryParams = queryParams === VOID ? this.h2s_1.q2s_1 : queryParams;
    fragment = fragment === VOID ? this.h2s_1.r2s_1 : fragment;
    dynamicParams = dynamicParams === VOID ? this.i2s_1 : dynamicParams;
    return $super === VOID ? this.t2s(path, queryParams, fragment, dynamicParams) : $super.t2s.call(this, path, queryParams, fragment, dynamicParams);
  };
  function Companion() {
  }
  protoOf(Companion).w2s = function () {
    var tmp = this.v2s_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('instance');
    }
  };
  protoOf(Companion).x2s = function (router) {
    this.v2s_1 = new PageContext(router);
  };
  var Companion_instance;
  function Companion_getInstance_0() {
    return Companion_instance;
  }
  function PageContext(router) {
    this.y2s_1 = router;
    this.z2s_1 = mutableStateOf(null);
  }
  protoOf(PageContext).a2t = function (value) {
    this.z2s_1.or(value);
  };
  protoOf(PageContext).b2t = function () {
    var tmp0_elvis_lhs = this.z2s_1.w1();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = 'PageContext route info is only valid within a @Page composable';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  function rememberPageContext($composer, $changed) {
    _init_properties_PageContext_kt__u2hiem();
    var $composer_0 = $composer;
    $composer_0.a19(979146567);
    if (isTraceInProgress()) {
      traceEventStart(979146567, $changed, -1, 'com.varabyte.kobweb.core.rememberPageContext (PageContext.kt:165)');
    }
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_PageContextLocal();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.o1a(this_0);
    sourceInformationMarkerEnd($composer_1);
    var tmp;
    if (tmp0 == null) {
      var message = 'PageContext is only valid within a @Page composable';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0;
    }
    var tmp0_0 = tmp;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.b19();
    return tmp0_0;
  }
  function PageContextLocal$lambda() {
    _init_properties_PageContext_kt__u2hiem();
    return null;
  }
  var properties_initialized_PageContext_kt_8ruj8w;
  function _init_properties_PageContext_kt__u2hiem() {
    if (!properties_initialized_PageContext_kt_8ruj8w) {
      properties_initialized_PageContext_kt_8ruj8w = true;
      PageContextLocal = staticCompositionLocalOf(PageContextLocal$lambda);
      com_varabyte_kobweb_core_PageContext_RouteInfo$stable = 8;
      com_varabyte_kobweb_core_PageContext$stable = 8;
    }
  }
  var com_varabyte_kobweb_core_init_InitKobwebContext$stable;
  function initKobweb(router, init) {
    var config = new MutableKobwebConfig();
    init(new InitKobwebContext(config, router));
    set_MutableKobwebConfigInstance(config);
  }
  function InitKobwebContext(config, router) {
    this.c2t_1 = config;
    this.d2t_1 = router;
  }
  function set_MutableKobwebConfigInstance(_set____db54di) {
    _init_properties_KobwebConfig_kt__rz30d4();
    MutableKobwebConfigInstance = _set____db54di;
  }
  function get_MutableKobwebConfigInstance() {
    _init_properties_KobwebConfig_kt__rz30d4();
    return MutableKobwebConfigInstance;
  }
  var MutableKobwebConfigInstance;
  var com_varabyte_kobweb_core_init_MutableOpenLinkStrategies$stable;
  var com_varabyte_kobweb_core_init_MutableKobwebConfig$stable;
  function MutableKobwebConfig() {
    this.e2t_1 = new MutableOpenLinkStrategies();
  }
  protoOf(MutableKobwebConfig).f2t = function () {
    return this.e2t_1;
  };
  function Companion_0() {
  }
  protoOf(Companion_0).g2t = function () {
    return get_MutableKobwebConfigInstance();
  };
  var Companion_instance_0;
  function Companion_getInstance_1() {
    return Companion_instance_0;
  }
  function MutableOpenLinkStrategies(internal, external) {
    internal = internal === VOID ? OpenLinkStrategy_IN_PLACE_getInstance() : internal;
    external = external === VOID ? OpenLinkStrategy_IN_NEW_TAB_getInstance() : external;
    this.h2t_1 = internal;
    this.i2t_1 = external;
  }
  protoOf(MutableOpenLinkStrategies).j2t = function () {
    return this.h2t_1;
  };
  protoOf(MutableOpenLinkStrategies).k2t = function () {
    return this.i2t_1;
  };
  var properties_initialized_KobwebConfig_kt_yaxikm;
  function _init_properties_KobwebConfig_kt__rz30d4() {
    if (!properties_initialized_KobwebConfig_kt_yaxikm) {
      properties_initialized_KobwebConfig_kt_yaxikm = true;
      MutableKobwebConfigInstance = new MutableKobwebConfig();
      com_varabyte_kobweb_core_init_MutableOpenLinkStrategies$stable = 8;
      com_varabyte_kobweb_core_init_MutableKobwebConfig$stable = 8;
    }
  }
  function Anchor(href, attrs, openInternalLinksStrategy, openExternalLinksStrategy, updateHistoryMode, autoPrefix, content, $composer, $changed, $default) {
    var attrs_0 = {_v: attrs};
    var openInternalLinksStrategy_0 = {_v: openInternalLinksStrategy};
    var openExternalLinksStrategy_0 = {_v: openExternalLinksStrategy};
    var updateHistoryMode_0 = {_v: updateHistoryMode};
    var autoPrefix_0 = {_v: autoPrefix};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t1a(-2106898385);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.t10(href) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.v19(attrs_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.t10(openInternalLinksStrategy_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.t10(openExternalLinksStrategy_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.t10(updateHistoryMode_0._v) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.w19(autoPrefix_0._v) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 1572864) === 0)
      $dirty = $dirty | ($composer_0.v19(content_0._v) ? 1048576 : 524288);
    if (!(($dirty & 599187) === 599186) || !$composer_0.v18()) {
      if (!(($default & 2) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 4) === 0)) {
        openInternalLinksStrategy_0._v = null;
      }
      if (!(($default & 8) === 0)) {
        openExternalLinksStrategy_0._v = null;
      }
      if (!(($default & 16) === 0)) {
        updateHistoryMode_0._v = null;
      }
      if (!(($default & 32) === 0)) {
        autoPrefix_0._v = true;
      }
      if (!(($default & 64) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-2106898385, $dirty, -1, 'com.varabyte.kobweb.navigation.Anchor (Anchor.kt:44)');
      }
      var href_0 = prependIf(Companion_instance_2, autoPrefix_0._v, href);
      var ctx = rememberPageContext($composer_0, 0);
      $composer_0.a19(-901883723);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      var invalid = !!(!!(!!(!!(!!(($dirty & 112) === 32 | ($dirty & 896) === 256) | ($dirty & 7168) === 2048) | $composer_0.v19(ctx)) | $composer_0.t10(href_0)) | ($dirty & 57344) === 16384);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.f1a();
      var tmp;
      if (invalid || it === Companion_getInstance().s13_1) {
        // Inline function 'com.varabyte.kobweb.navigation.Anchor.<anonymous>' call
        var value = Anchor$lambda(attrs_0, openInternalLinksStrategy_0, openExternalLinksStrategy_0, ctx, href_0, updateHistoryMode_0);
        this_0.l1a(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.b19();
      A(href_0, tmp0_group, content_0._v, $composer_0, 896 & $dirty >> 12, 0);
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
      tmp1_safe_receiver.u1f(Anchor$lambda_0(href, attrs_0, openInternalLinksStrategy_0, openExternalLinksStrategy_0, updateHistoryMode_0, autoPrefix_0, content_0, $changed, $default));
    }
  }
  function Anchor$lambda$lambda($openInternalLinksStrategy, $openExternalLinksStrategy, $ctx, $href, $updateHistoryMode) {
    return function (evt) {
      var tmp0_elvis_lhs = $openInternalLinksStrategy._v;
      var openInternalLinksStrategy = tmp0_elvis_lhs == null ? toOpenLinkStrategy(evt, Companion_instance_0.g2t().f2t().j2t()) : tmp0_elvis_lhs;
      var tmp1_elvis_lhs = $openExternalLinksStrategy._v;
      var openExternalLinksStrategy = tmp1_elvis_lhs == null ? toOpenLinkStrategy(evt, Companion_instance_0.g2t().f2t().k2t()) : tmp1_elvis_lhs;
      var tmp2_elvis_lhs = $updateHistoryMode._v;
      $ctx.y2s_1.p2t($href, tmp2_elvis_lhs == null ? UpdateHistoryMode_PUSH_getInstance() : tmp2_elvis_lhs, openInternalLinksStrategy, openExternalLinksStrategy);
      evt.m2h();
      evt.n2h();
      return Unit_instance;
    };
  }
  function Anchor$lambda($attrs, $openInternalLinksStrategy, $openExternalLinksStrategy, $ctx, $href, $updateHistoryMode) {
    return function ($this$A) {
      var tmp;
      if (!($attrs._v == null)) {
        tmp = $attrs._v($this$A);
      }
      $this$A.x27(Anchor$lambda$lambda($openInternalLinksStrategy, $openExternalLinksStrategy, $ctx, $href, $updateHistoryMode));
      return Unit_instance;
    };
  }
  function Anchor$lambda_0($href, $attrs, $openInternalLinksStrategy, $openExternalLinksStrategy, $updateHistoryMode, $autoPrefix, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Anchor($href, $attrs._v, $openInternalLinksStrategy._v, $openExternalLinksStrategy._v, $updateHistoryMode._v, $autoPrefix._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  var OpenLinkStrategy_IN_PLACE_instance;
  var OpenLinkStrategy_IN_NEW_TAB_instance;
  var OpenLinkStrategy_entriesInitialized;
  function OpenLinkStrategy_initEntries() {
    if (OpenLinkStrategy_entriesInitialized)
      return Unit_instance;
    OpenLinkStrategy_entriesInitialized = true;
    OpenLinkStrategy_IN_PLACE_instance = new OpenLinkStrategy('IN_PLACE', 0);
    OpenLinkStrategy_IN_NEW_TAB_instance = new OpenLinkStrategy('IN_NEW_TAB', 1);
  }
  function OpenLinkStrategy(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function open(_this__u8e3s4, href, strategy) {
    switch (strategy.h2_1) {
      case 0:
        _this__u8e3s4.open(href, '_self');
        break;
      case 1:
        _this__u8e3s4.open(href, '_blank');
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
  }
  function toOpenLinkStrategy(_this__u8e3s4, default_0) {
    default_0 = default_0 === VOID ? OpenLinkStrategy_IN_PLACE_getInstance() : default_0;
    return _this__u8e3s4.y2i_1 || _this__u8e3s4.k2j_1 ? OpenLinkStrategy_IN_NEW_TAB_getInstance() : default_0;
  }
  function OpenLinkStrategy_IN_PLACE_getInstance() {
    OpenLinkStrategy_initEntries();
    return OpenLinkStrategy_IN_PLACE_instance;
  }
  function OpenLinkStrategy_IN_NEW_TAB_getInstance() {
    OpenLinkStrategy_initEntries();
    return OpenLinkStrategy_IN_NEW_TAB_instance;
  }
  var com_varabyte_kobweb_navigation_PageData$stable;
  function PageData(pageMethod, routeInfo) {
    this.q2t_1 = pageMethod;
    this.r2t_1 = routeInfo;
  }
  var com_varabyte_kobweb_navigation_RouteException$stable;
  var com_varabyte_kobweb_navigation_Route$stable;
  function Route_init_$Init$(path, queryParams, fragment, $this) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.navigation.Route.<init>.<anonymous>' call
    this_0.a8(path);
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!queryParams.q()) {
      this_0.b8(_Char___init__impl__6a9atx(63));
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(queryParams.m());
      // Inline function 'kotlin.collections.iterator' call
      var tmp0_iterator = queryParams.c2().j();
      while (tmp0_iterator.k()) {
        var item = tmp0_iterator.l();
        // Inline function 'com.varabyte.kobweb.navigation.Route.<init>.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.collections.component1' call
        var key = item.v1();
        // Inline function 'kotlin.collections.component2' call
        var value = item.w1();
        // Inline function 'kotlin.text.buildString' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlin.apply' call
        var this_1 = StringBuilder_init_$Create$();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.varabyte.kobweb.navigation.Route.<init>.<anonymous>.<anonymous>.<anonymous>' call
        this_1.a8(key);
        // Inline function 'kotlin.text.isNotEmpty' call
        if (charSequenceLength(value) > 0) {
          this_1.b8(_Char___init__impl__6a9atx(61));
          this_1.a8(value);
        }
        var tmp$ret$7 = this_1.toString();
        destination.h(tmp$ret$7);
      }
      this_0.a8(joinToString(destination, '&'));
    }
    if (!(fragment == null)) {
      this_0.b8(_Char___init__impl__6a9atx(35));
      this_0.a8(fragment);
    }
    var tmp$ret$11 = this_0.toString();
    Route.call($this, tmp$ret$11);
    return $this;
  }
  function Route_init_$Create$(path, queryParams, fragment) {
    return Route_init_$Init$(path, queryParams, fragment, objectCreate(protoOf(Route)));
  }
  function Companion_1() {
  }
  protoOf(Companion_1).s2t = function (path) {
    return !(this.t2t(path) == null);
  };
  protoOf(Companion_1).t2t = function (path) {
    var tmp;
    try {
      tmp = new Route(path);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof RouteException) {
        var ex = $p;
        tmp_0 = null;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(Companion_1).u2t = function (url) {
    var tmp0_elvis_lhs = this.t2t(removePrefix(url.href, url.origin));
    return tmp0_elvis_lhs == null ? new Route('') : tmp0_elvis_lhs;
  };
  var Companion_instance_1;
  function Companion_getInstance_2() {
    return Companion_instance_1;
  }
  function Route(pathQueryAndFragment) {
    var tmp;
    try {
      new URL(pathQueryAndFragment);
      tmp = false;
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var ex = $p;
        tmp_0 = true;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    var isValidRoute = tmp;
    if (!isValidRoute) {
      throw new RouteException(pathQueryAndFragment);
    }
    this.o2s_1 = new URL(pathQueryAndFragment, 'http://unused.com');
    var isAbsolute = startsWith(pathQueryAndFragment, '/');
    var tmp_1 = this;
    var tmp_2;
    if (isAbsolute) {
      tmp_2 = this.o2s_1.pathname;
    } else {
      // Inline function 'kotlin.also' call
      var this_0 = drop(this.o2s_1.pathname, 1);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.navigation.Route.<anonymous>' call
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(first(this.o2s_1.pathname) === _Char___init__impl__6a9atx(47))) {
        // Inline function 'kotlin.check.<anonymous>' call
        var message = 'Check failed.';
        throw IllegalStateException_init_$Create$(toString(message));
      }
      tmp_2 = this_0;
    }
    tmp_1.p2s_1 = tmp_2;
    var tmp_3 = this;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.collections.mutableMapOf' call
    var this_1 = LinkedHashMap_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    $l$block: {
      // Inline function 'com.varabyte.kobweb.navigation.Route.<anonymous>' call
      // Inline function 'kotlin.text.isEmpty' call
      var this_2 = this.o2s_1.search;
      if (charSequenceLength(this_2) === 0) {
        break $l$block;
      }
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = split(removePrefix(this.o2s_1.search, '?'), charArrayOf([_Char___init__impl__6a9atx(38)])).j();
      while (tmp0_iterator.k()) {
        var element = tmp0_iterator.l();
        // Inline function 'com.varabyte.kobweb.navigation.Route.<anonymous>.<anonymous>' call
        var keyValue = split(element, charArrayOf([_Char___init__impl__6a9atx(61)]), VOID, 2);
        var key = keyValue.p(0);
        // Inline function 'kotlin.collections.set' call
        // Inline function 'kotlin.collections.elementAtOrNull' call
        var tmp0_elvis_lhs = getOrNull(keyValue, 1);
        var value = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
        this_1.y4(key, value);
      }
    }
    tmp_3.q2s_1 = this_1;
    var tmp_4 = this;
    // Inline function 'kotlin.takeIf' call
    var this_3 = this.o2s_1.hash;
    // Inline function 'kotlin.contracts.contract' call
    var tmp_5;
    // Inline function 'com.varabyte.kobweb.navigation.Route.<anonymous>' call
    if (startsWith(this_3, '#')) {
      tmp_5 = this_3;
    } else {
      tmp_5 = null;
    }
    var tmp0_safe_receiver = tmp_5;
    tmp_4.r2s_1 = tmp0_safe_receiver == null ? null : removePrefix(tmp0_safe_receiver, '#');
  }
  protoOf(Route).toString = function () {
    return this.p2s_1 + this.o2s_1.search + this.o2s_1.hash;
  };
  function RouteException(value) {
    Exception_init_$Init$('Failed to create a route. Routes should be valid URLs without a leading domain. Got: ' + value, this);
    captureStack(this, RouteException);
  }
  var com_varabyte_kobweb_navigation_RoutePrefixImpl$stable;
  function prependIf(_this__u8e3s4, condition, path) {
    return condition ? Companion_instance_2.v2t(path) : path;
  }
  function Companion_2() {
  }
  protoOf(Companion_2).w2t = function (value) {
    Companion_instance_3.y2t(new RoutePrefixImpl(value));
  };
  protoOf(Companion_2).w1 = function () {
    return Companion_instance_3.a2u().z2t_1;
  };
  protoOf(Companion_2).v2t = function (path) {
    return Companion_instance_3.a2u().v2t(path);
  };
  var Companion_instance_2;
  function Companion_getInstance_3() {
    return Companion_instance_2;
  }
  function Companion_3() {
    this.x2t_1 = null;
  }
  protoOf(Companion_3).y2t = function (value) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.x2t_1 == null)) {
      // Inline function 'com.varabyte.kobweb.navigation.Companion.<set-_instance>.<anonymous>' call
      var message = 'Cannot overwrite route prefix once set';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.x2t_1 = value;
  };
  protoOf(Companion_3).b2u = function () {
    if (this.x2t_1 == null) {
      this.x2t_1 = new RoutePrefixImpl('');
    }
    return this.x2t_1;
  };
  protoOf(Companion_3).a2u = function () {
    return ensureNotNull(this.b2u());
  };
  var Companion_instance_3;
  function Companion_getInstance_4() {
    return Companion_instance_3;
  }
  function RoutePrefixImpl(value) {
    var tmp = this;
    // Inline function 'kotlin.takeIf' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp_0;
    // Inline function 'com.varabyte.kobweb.navigation.RoutePrefixImpl.value.<anonymous>' call
    // Inline function 'kotlin.text.isNotBlank' call
    if (!isBlank(value)) {
      tmp_0 = value;
    } else {
      tmp_0 = null;
    }
    var tmp0_safe_receiver = tmp_0;
    var tmp_1;
    if (tmp0_safe_receiver == null) {
      tmp_1 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.navigation.RoutePrefixImpl.value.<anonymous>' call
      tmp_1 = startsWith_0(tmp0_safe_receiver, _Char___init__impl__6a9atx(47)) ? tmp0_safe_receiver : '/' + tmp0_safe_receiver;
    }
    var tmp1_safe_receiver = tmp_1;
    var tmp_2;
    if (tmp1_safe_receiver == null) {
      tmp_2 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.navigation.RoutePrefixImpl.value.<anonymous>' call
      tmp_2 = endsWith(tmp1_safe_receiver, _Char___init__impl__6a9atx(47)) ? tmp1_safe_receiver : tmp1_safe_receiver + '/';
    }
    var tmp2_elvis_lhs = tmp_2;
    tmp.z2t_1 = tmp2_elvis_lhs == null ? '' : tmp2_elvis_lhs;
  }
  protoOf(RoutePrefixImpl).v2t = function (path) {
    if (isBlank(this.z2t_1))
      return path;
    if (!startsWith(path, '/'))
      return path;
    return dropLast(this.z2t_1, 1) + path;
  };
  protoOf(RoutePrefixImpl).toString = function () {
    return this.z2t_1;
  };
  function remove(_this__u8e3s4, path) {
    var tmp;
    // Inline function 'kotlin.text.isNotEmpty' call
    var this_0 = _this__u8e3s4.w1();
    if (charSequenceLength(this_0) > 0) {
      tmp = removePrefix(path, dropLast(_this__u8e3s4.w1(), 1));
    } else {
      tmp = path;
    }
    return tmp;
  }
  function createPageData(_this__u8e3s4, route, errorPageContent) {
    var errorPageMethod = ComposableLambda$invoke$ref(composableLambdaInstance(-882376264, true, createPageData$lambda(errorPageContent)));
    var tmp0_elvis_lhs = _this__u8e3s4.t2r(route.p2s_1, true);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return new PageData(errorPageMethod, new RouteInfo(route, emptyMap()));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var resolved = tmp;
    var tmp1_elvis_lhs = last(resolved).m2r_1.b2r_1;
    var pageMethod = tmp1_elvis_lhs == null ? errorPageMethod : tmp1_elvis_lhs;
    // Inline function 'kotlin.collections.mutableMapOf' call
    var dynamicParams = LinkedHashMap_init_$Create$();
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = resolved.j();
    while (tmp0_iterator.k()) {
      var element = tmp0_iterator.l();
      // Inline function 'com.varabyte.kobweb.navigation.createPageData.<anonymous>' call
      var tmp_0 = element.m2r_1;
      if (tmp_0 instanceof DynamicNode) {
        // Inline function 'kotlin.collections.set' call
        var key = element.m2r_1.a2r_1;
        var value = element.n2r_1;
        dynamicParams.y4(key, value);
      }
    }
    return new PageData(pageMethod, new RouteInfo(Route_init_$Create$(toRouteString(resolved), route.q2s_1, route.r2s_1), dynamicParams));
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.t18(p0, p1);
    };
  }
  function createPageData$lambda($errorPageContent) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.v18()) {
        if (isTraceInProgress()) {
          traceEventStart(-882376264, $changed, -1, 'com.varabyte.kobweb.navigation.createPageData.<anonymous> (RouteTree.kt:6)');
        }
        $errorPageContent(404, $composer_0, 6);
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
  var com_varabyte_kobweb_navigation_RouteInterceptorScope$stable;
  var com_varabyte_kobweb_navigation_Router_RouteEntry$stable;
  var com_varabyte_kobweb_navigation_Router$stable;
  function _set_activePageMethod__f6z3vj($this, _set____db54di) {
    var this_0 = $this.l2t_1;
    activePageMethod$factory();
    this_0.or(_set____db54di);
    return Unit_instance;
  }
  function _get_activePageMethod__dw5579($this) {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = $this.l2t_1;
    activePageMethod$factory_0();
    return this_0.w1();
  }
  function updatePageContext(_this__u8e3s4, $this, pathQueryAndFragment) {
    if (startsWith(pathQueryAndFragment, '#')) {
      var tmp0_safe_receiver = _this__u8e3s4.z2s_1.w1();
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        _this__u8e3s4.z2s_1.or(tmp0_safe_receiver.u2s(VOID, VOID, removePrefix(pathQueryAndFragment, '#')));
        return true;
      }
      if (tmp == null) {
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        return false;
      }
    }
    var route = Companion_instance_1.t2t(pathQueryAndFragment);
    var tmp_0;
    if (!(route == null)) {
      var data = createPageData($this.m2t_1, route, $this.o2t_1);
      _set_activePageMethod__f6z3vj($this, data.q2t_1);
      _this__u8e3s4.a2t(data.r2t_1);
      tmp_0 = true;
    } else {
      tmp_0 = false;
    }
    return tmp_0;
  }
  function normalize(_this__u8e3s4, $this) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!Companion_instance_1.s2t(_this__u8e3s4)) {
      // Inline function 'kotlin.check.<anonymous>' call
      var message = 'Check failed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var hrefResolved = Companion_instance_1.u2t(new URL(_this__u8e3s4, window.location.href)).toString();
    // Inline function 'kotlin.takeIf' call
    var this_0 = remove(Companion_instance_2, hrefResolved);
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    // Inline function 'com.varabyte.kobweb.navigation.Router.normalize.<anonymous>' call
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(this_0) > 0) {
      tmp = this_0;
    } else {
      tmp = null;
    }
    var tmp0_elvis_lhs = tmp;
    var withoutPrefix = tmp0_elvis_lhs == null ? '/' : tmp0_elvis_lhs;
    var hadPrefix = !(withoutPrefix === hrefResolved);
    var tmp_0 = Companion_instance_2;
    // Inline function 'kotlin.collections.fold' call
    var this_1 = $this.n2t_1;
    var accumulator = (new Route(withoutPrefix)).toString();
    var tmp0_iterator = this_1.j();
    while (tmp0_iterator.k()) {
      var element = tmp0_iterator.l();
      // Inline function 'com.varabyte.kobweb.navigation.Router.normalize.<anonymous>' call
      var acc = accumulator;
      var interceptor = new RouteInterceptorScope(acc);
      element(interceptor);
      accumulator = interceptor.s2s();
    }
    var tmp$ret$5 = accumulator;
    return prependIf(tmp_0, hadPrefix, tmp$ret$5);
  }
  function partitionPath(_this__u8e3s4, $this) {
    var pathPart = substringBefore(substringBefore(_this__u8e3s4, _Char___init__impl__6a9atx(63)), _Char___init__impl__6a9atx(35));
    return to(pathPart, removePrefix(_this__u8e3s4, pathPart));
  }
  function tryRoutingTo$_anonymous_$scrollElementIntoView_htwmo1($url) {
    var tmp0_safe_receiver = document.getElementById(substringAfter($url, _Char___init__impl__6a9atx(35)));
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      tmp0_safe_receiver.scrollIntoView();
      tmp = Unit_instance;
    }
    return tmp;
  }
  function Router$lambda(this$0) {
    return function (it) {
      var tmp = Companion_instance.w2s();
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.navigation.Router.<anonymous>.<anonymous>' call
      var it_0 = ensureNotNull(document.location);
      var tmp$ret$1 = removePrefix(it_0.href, it_0.origin);
      return updatePageContext(tmp, this$0, tmp$ret$1);
    };
  }
  function Router$renderActivePage$lambda$lambda($pageMethod) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.v18()) {
        if (isTraceInProgress()) {
          traceEventStart(-1343210329, $changed, -1, 'com.varabyte.kobweb.navigation.Router.renderActivePage.<anonymous>.<anonymous> (Router.kt:188)');
        }
        $pageMethod($composer_0, 0);
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
  function Router$renderActivePage$lambda($pageWrapper, $pageMethod) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.v18()) {
        if (isTraceInProgress()) {
          traceEventStart(248233772, $changed, -1, 'com.varabyte.kobweb.navigation.Router.renderActivePage.<anonymous> (Router.kt:187)');
        }
        var tmp_0 = $pageWrapper._v;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.varabyte.kobweb.navigation.Router.renderActivePage.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_1 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_1, -1343210329, true, Router$renderActivePage$lambda$lambda($pageMethod));
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
          // Inline function 'com.varabyte.kobweb.navigation.Router.renderActivePage.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_0(dispatchReceiver);
          $composer_1.l1a(value);
          tmp_2 = value;
        } else {
          tmp_2 = it;
        }
        var tmp_3 = tmp_2;
        var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        $composer_1.b19();
        tmp_0(tmp0, $composer_0, 6);
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
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1) {
      return $boundThis.t18(p0, p1);
    };
  }
  function Router$renderActivePage$lambda_0($tmp0_rcvr, $pageWrapper, $$changed, $$default) {
    return function ($composer, $force) {
      $tmp0_rcvr.g2u($pageWrapper._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Router$tryRoutingTo$lambda($fileExistsOnServer, $xhr) {
    return function (it) {
      $fileExistsOnServer._v = $xhr.status === 200;
      return Unit_instance;
    };
  }
  function Router$tryRoutingTo$lambda_0(it) {
    return Unit_instance;
  }
  function Router$tryRoutingTo$lambda_1(it) {
    return Unit_instance;
  }
  function Router$tryRoutingTo$lambda_2($url) {
    return function (mutations, observer) {
      var inductionVariable = 0;
      var last = mutations.length;
      while (inductionVariable < last) {
        var element = mutations[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'com.varabyte.kobweb.navigation.Router.tryRoutingTo.<anonymous>.<anonymous>.<anonymous>' call
        if (element.type === 'childList') {
          tryRoutingTo$_anonymous_$scrollElementIntoView_htwmo1($url);
          observer.disconnect();
        }
      }
      return Unit_instance;
    };
  }
  function Router() {
    this.l2t_1 = mutableStateOf(null);
    this.m2t_1 = new RouteTree();
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.n2t_1 = ArrayList_init_$Create$_0();
    Companion_instance.x2s(this);
    var tmp_0 = window;
    tmp_0.onpopstate = Router$lambda(this);
    this.o2t_1 = ComposableSingletons$RouterKt_getInstance().i2u_1;
  }
  protoOf(Router).g2u = function (pageWrapper, $composer, $changed, $default) {
    var pageWrapper_0 = {_v: pageWrapper};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t1a(137063404);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.v19(pageWrapper_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.v19(this) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.v18()) {
      if (!(($default & 1) === 0)) {
        pageWrapper_0._v = ComposableSingletons$RouterKt_getInstance().h2u_1;
      }
      if (isTraceInProgress()) {
        traceEventStart(137063404, $dirty, -1, 'com.varabyte.kobweb.navigation.Router.renderActivePage (Router.kt:180)');
      }
      var tmp0_elvis_lhs = _get_activePageMethod__dw5579(this);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        var message = "Call 'navigateTo' at least once before calling 'renderActivePage'";
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var pageMethod = tmp;
      var tmp_0 = get_PageContextLocal().s1f(Companion_instance.w2s());
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.navigation.Router.renderActivePage.<anonymous>' call
      var tmp_1 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_1, 248233772, true, Router$renderActivePage$lambda(pageWrapper_0, pageMethod));
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
        // Inline function 'com.varabyte.kobweb.navigation.Router.renderActivePage.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_1(dispatchReceiver);
        $composer_1.l1a(value);
        tmp_2 = value;
      } else {
        tmp_2 = it;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_1.b19();
      CompositionLocalProvider(tmp_0, tmp0, $composer_0, 48);
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
      tmp1_safe_receiver.u1f(Router$renderActivePage$lambda_0(this, pageWrapper_0, $changed, $default));
    }
  };
  protoOf(Router).j2u = function (route, autoPrefix, pageMethod) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(Companion_instance_1.s2t(route) && startsWith_0(route, _Char___init__impl__6a9atx(47)))) {
      // Inline function 'com.varabyte.kobweb.navigation.Router.register.<anonymous>' call
      var message = 'Registration only allowed for internal, rooted routes, e.g. /example/path. Got: ' + route;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!this.m2t_1.v2r(prependIf(Companion_instance_2, autoPrefix, route), pageMethod)) {
      // Inline function 'com.varabyte.kobweb.navigation.Router.register.<anonymous>' call
      var message_0 = 'Registration failure. Path is already registered: ' + route;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  };
  protoOf(Router).k2u = function (route, autoPrefix, pageMethod, $super) {
    autoPrefix = autoPrefix === VOID ? true : autoPrefix;
    var tmp;
    if ($super === VOID) {
      this.j2u(route, autoPrefix, pageMethod);
      tmp = Unit_instance;
    } else {
      tmp = $super.j2u.call(this, route, autoPrefix, pageMethod);
    }
    return tmp;
  };
  protoOf(Router).l2u = function (interceptor) {
    this.n2t_1.h(interceptor);
  };
  protoOf(Router).m2u = function (pathQueryAndFragment, updateHistoryMode, openLinkStrategy) {
    var pathQueryAndFragment_0 = pathQueryAndFragment;
    if (Companion_instance_1.s2t(pathQueryAndFragment_0)) {
      pathQueryAndFragment_0 = normalize(pathQueryAndFragment_0, this);
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlin.text.all' call
        var indexedObject = pathQueryAndFragment_0;
        var inductionVariable = 0;
        while (inductionVariable < charSequenceLength(indexedObject)) {
          var element = charSequenceGet(indexedObject, inductionVariable);
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'com.varabyte.kobweb.navigation.Router.tryRoutingTo.<anonymous>' call
          if (!(!(element === _Char___init__impl__6a9atx(35)) && !(element === _Char___init__impl__6a9atx(63)))) {
            tmp$ret$1 = false;
            break $l$block;
          }
        }
        tmp$ret$1 = true;
      }
      if (tmp$ret$1) {
        if (!(pathQueryAndFragment_0 === '/')) {
          var originalRoute = pathQueryAndFragment_0;
          if (!this.m2t_1.u2r(originalRoute)) {
            if (endsWith(originalRoute, _Char___init__impl__6a9atx(47))) {
              var withoutSlash = removeSuffix(originalRoute, '/');
              if (this.m2t_1.u2r(withoutSlash)) {
                pathQueryAndFragment_0 = withoutSlash;
              }
            } else {
              var withSlash = originalRoute + '/';
              if (this.m2t_1.u2r(withSlash)) {
                pathQueryAndFragment_0 = withSlash;
              }
            }
          }
          if (!this.m2t_1.u2r(pathQueryAndFragment_0)) {
            var xhr = new XMLHttpRequest();
            var fileExistsOnServer = {_v: false};
            xhr.open('HEAD', pathQueryAndFragment_0, false);
            xhr.onload = Router$tryRoutingTo$lambda(fileExistsOnServer, xhr);
            xhr.onerror = Router$tryRoutingTo$lambda_0;
            xhr.onabort = Router$tryRoutingTo$lambda_1;
            xhr.send(null);
            if (fileExistsOnServer._v) {
              window.open(pathQueryAndFragment_0);
              return true;
            }
          }
        }
      }
    }
    if (!openLinkStrategy.equals(OpenLinkStrategy_IN_PLACE_getInstance())) {
      open(window, pathQueryAndFragment_0, openLinkStrategy);
      return true;
    }
    var tmp;
    if (updatePageContext(Companion_instance.w2s(), this, pathQueryAndFragment_0)) {
      pathQueryAndFragment_0 = Companion_instance.w2s().b2t().k2s_1 + partitionPath(pathQueryAndFragment_0, this).je_1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var url = window.location.origin + pathQueryAndFragment_0;
      var onNewPage = !(window.location.pathname === Companion_instance_1.u2t(new URL(url)).p2s_1);
      if (!(window.location.href === url)) {
        switch (updateHistoryMode.h2_1) {
          case 0:
            window.history.pushState(window.history.state, '', url);
            break;
          case 1:
            window.history.replaceState(window.history.state, '', url);
            break;
          default:
            noWhenBranchMatchedException();
            break;
        }
        if (onNewPage) {
          var tmp1_safe_receiver = document.documentElement;
          if (tmp1_safe_receiver == null)
            null;
          else {
            tmp1_safe_receiver.scrollTop = 0.0;
          }
        }
      }
      if (contains(url, _Char___init__impl__6a9atx(35))) {
        if (onNewPage) {
          var tmp_0 = new MutationObserver(Router$tryRoutingTo$lambda_2(url));
          var tmp_1 = ensureNotNull(document.body);
          // Inline function 'org.w3c.dom.MutationObserverInit' call
          var attributes = undefined;
          var characterData = undefined;
          var attributeOldValue = undefined;
          var characterDataOldValue = undefined;
          var attributeFilter = undefined;
          var o = {};
          o['childList'] = true;
          o['attributes'] = attributes;
          o['characterData'] = characterData;
          o['subtree'] = true;
          o['attributeOldValue'] = attributeOldValue;
          o['characterDataOldValue'] = characterDataOldValue;
          o['attributeFilter'] = attributeFilter;
          tmp_0.observe(tmp_1, o);
        } else {
          tryRoutingTo$_anonymous_$scrollElementIntoView_htwmo1(url);
        }
      }
      tmp = true;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(Router).p2t = function (pathQueryAndFragment, updateHistoryMode, openInternalLinksStrategy, openExternalLinksStrategy) {
    if (!this.m2u(pathQueryAndFragment, updateHistoryMode, openInternalLinksStrategy)) {
      open(window, pathQueryAndFragment, openExternalLinksStrategy);
    }
  };
  protoOf(Router).n2u = function (pathQueryAndFragment, updateHistoryMode, openInternalLinksStrategy, openExternalLinksStrategy, $super) {
    updateHistoryMode = updateHistoryMode === VOID ? UpdateHistoryMode_PUSH_getInstance() : updateHistoryMode;
    openInternalLinksStrategy = openInternalLinksStrategy === VOID ? OpenLinkStrategy_IN_PLACE_getInstance() : openInternalLinksStrategy;
    openExternalLinksStrategy = openExternalLinksStrategy === VOID ? OpenLinkStrategy_IN_NEW_TAB_getInstance() : openExternalLinksStrategy;
    var tmp;
    if ($super === VOID) {
      this.p2t(pathQueryAndFragment, updateHistoryMode, openInternalLinksStrategy, openExternalLinksStrategy);
      tmp = Unit_instance;
    } else {
      tmp = $super.p2t.call(this, pathQueryAndFragment, updateHistoryMode, openInternalLinksStrategy, openExternalLinksStrategy);
    }
    return tmp;
  };
  function RouteInterceptorScope(pathQueryAndFragment) {
    this.c2u_1 = new Route(pathQueryAndFragment);
    this.d2u_1 = this.c2u_1.p2s_1;
    this.e2u_1 = toMutableMap(this.c2u_1.q2s_1);
    this.f2u_1 = this.c2u_1.r2s_1;
  }
  protoOf(RouteInterceptorScope).o2u = function (value) {
    this.d2u_1 = startsWith_0(value, _Char___init__impl__6a9atx(47)) ? value : '/' + value;
  };
  protoOf(RouteInterceptorScope).s2s = function () {
    return Route_init_$Create$(this.d2u_1, this.e2u_1, this.f2u_1).toString();
  };
  function ComposableLambda$invoke$ref_2($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.n25(p0, p1, p2);
    };
  }
  function ComposableSingletons$RouterKt$lambda_1$lambda_cmwzz7(it, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.v19(it) ? 4 : 2);
    if (!(($dirty & 19) === 18) || !$composer_0.v18()) {
      if (isTraceInProgress()) {
        traceEventStart(-149473399, $dirty, -1, 'com.varabyte.kobweb.navigation.ComposableSingletons$RouterKt.lambda-1.<anonymous> (Router.kt:180)');
      }
      it($composer_0, 14 & $dirty);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.m13();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_3($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.n25(p0, p1, p2);
    };
  }
  function ComposableSingletons$RouterKt$lambda_2$lambda_g6ph30(errorCode, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.y19(errorCode) ? 4 : 2);
    if (!(($dirty & 19) === 18) || !$composer_0.v18()) {
      if (isTraceInProgress()) {
        traceEventStart(231942886, $dirty, -1, 'com.varabyte.kobweb.navigation.ComposableSingletons$RouterKt.lambda-2.<anonymous> (Router.kt:298)');
      }
      DefaultErrorPage(errorCode, $composer_0, 14 & $dirty);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.m13();
    }
    return Unit_instance;
  }
  function ComposableSingletons$RouterKt() {
    ComposableSingletons$RouterKt_instance = this;
    var tmp = this;
    tmp.h2u_1 = ComposableLambda$invoke$ref_2(composableLambdaInstance(-149473399, false, ComposableSingletons$RouterKt$lambda_1$lambda_cmwzz7));
    var tmp_0 = this;
    tmp_0.i2u_1 = ComposableLambda$invoke$ref_3(composableLambdaInstance(231942886, false, ComposableSingletons$RouterKt$lambda_2$lambda_g6ph30));
  }
  var ComposableSingletons$RouterKt_instance;
  function ComposableSingletons$RouterKt_getInstance() {
    if (ComposableSingletons$RouterKt_instance == null)
      new ComposableSingletons$RouterKt();
    return ComposableSingletons$RouterKt_instance;
  }
  var UpdateHistoryMode_PUSH_instance;
  var UpdateHistoryMode_REPLACE_instance;
  var UpdateHistoryMode_entriesInitialized;
  function UpdateHistoryMode_initEntries() {
    if (UpdateHistoryMode_entriesInitialized)
      return Unit_instance;
    UpdateHistoryMode_entriesInitialized = true;
    UpdateHistoryMode_PUSH_instance = new UpdateHistoryMode('PUSH', 0);
    UpdateHistoryMode_REPLACE_instance = new UpdateHistoryMode('REPLACE', 1);
  }
  function UpdateHistoryMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function DefaultErrorPage(errorCode, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t1a(1095076849);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.y19(errorCode) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.v18()) {
      if (isTraceInProgress()) {
        traceEventStart(1095076849, $dirty, -1, 'com.varabyte.kobweb.navigation.DefaultErrorPage (Router.kt:18)');
      }
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.navigation.DefaultErrorPage.<anonymous>' call
      var tmp = $composer_0;
      var dispatchReceiver = composableLambda(tmp, 128753264, true, DefaultErrorPage$lambda(errorCode));
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
        // Inline function 'com.varabyte.kobweb.navigation.DefaultErrorPage.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_4(dispatchReceiver);
        $composer_1.l1a(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_1.b19();
      Div(null, tmp0, $composer_0, 48, 1);
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
      tmp0_safe_receiver.u1f(DefaultErrorPage$lambda_0(errorCode, $changed));
    }
  }
  function DefaultErrorPage$lambda($errorCode) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(128753264, $changed, -1, 'com.varabyte.kobweb.navigation.DefaultErrorPage.<anonymous> (Router.kt:20)');
      }
      Text('Error code: ' + $errorCode, $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
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
  function DefaultErrorPage$lambda_0($errorCode, $$changed) {
    return function ($composer, $force) {
      DefaultErrorPage($errorCode, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function UpdateHistoryMode_PUSH_getInstance() {
    UpdateHistoryMode_initEntries();
    return UpdateHistoryMode_PUSH_instance;
  }
  function UpdateHistoryMode_REPLACE_getInstance() {
    UpdateHistoryMode_initEntries();
    return UpdateHistoryMode_REPLACE_instance;
  }
  function activePageMethod$factory() {
    return getPropertyCallableRef('activePageMethod', 1, KMutableProperty1, function (receiver) {
      return _get_activePageMethod__dw5579(receiver);
    }, function (receiver, value) {
      return _set_activePageMethod__f6z3vj(receiver, value);
    });
  }
  function activePageMethod$factory_0() {
    return getPropertyCallableRef('activePageMethod', 1, KMutableProperty1, function (receiver) {
      return _get_activePageMethod__dw5579(receiver);
    }, function (receiver, value) {
      return _set_activePageMethod__f6z3vj(receiver, value);
    });
  }
  var com_varabyte_kobweb_streams_ApiStreamListener_ConnectedContext$stable;
  var com_varabyte_kobweb_streams_ApiStreamListener_TextReceivedContext$stable;
  var com_varabyte_kobweb_streams_ApiStreamListener_DisconnectedContext$stable;
  var com_varabyte_kobweb_streams_ApiStream_WebSocketChannel$stable;
  var com_varabyte_kobweb_streams_ApiStream$stable;
  //region block: init
  com_varabyte_kobweb_core_DefaultStyleSheet$stable = 0;
  com_varabyte_kobweb_core_AppGlobals$stable = 8;
  AppGlobals_instance = new AppGlobals();
  Companion_instance = new Companion();
  com_varabyte_kobweb_core_init_InitKobwebContext$stable = 8;
  Companion_instance_0 = new Companion_0();
  com_varabyte_kobweb_navigation_PageData$stable = 8;
  com_varabyte_kobweb_navigation_RouteException$stable = 0;
  com_varabyte_kobweb_navigation_Route$stable = 8;
  Companion_instance_1 = new Companion_1();
  com_varabyte_kobweb_navigation_RoutePrefixImpl$stable = 0;
  Companion_instance_2 = new Companion_2();
  Companion_instance_3 = new Companion_3();
  com_varabyte_kobweb_navigation_RouteInterceptorScope$stable = 8;
  com_varabyte_kobweb_navigation_Router_RouteEntry$stable = 0;
  com_varabyte_kobweb_navigation_Router$stable = 8;
  com_varabyte_kobweb_streams_ApiStreamListener_ConnectedContext$stable = 8;
  com_varabyte_kobweb_streams_ApiStreamListener_TextReceivedContext$stable = 8;
  com_varabyte_kobweb_streams_ApiStreamListener_DisconnectedContext$stable = 8;
  com_varabyte_kobweb_streams_ApiStream_WebSocketChannel$stable = 8;
  com_varabyte_kobweb_streams_ApiStream$stable = 8;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = get_api;
  _.$_$.b = initKobweb;
  _.$_$.c = KobwebApp;
  _.$_$.d = Anchor;
  _.$_$.e = Router;
  _.$_$.f = prependIf;
  _.$_$.g = OpenLinkStrategy_IN_NEW_TAB_getInstance;
  _.$_$.h = OpenLinkStrategy_IN_PLACE_getInstance;
  _.$_$.i = UpdateHistoryMode_REPLACE_getInstance;
  _.$_$.j = AppGlobals_instance;
  _.$_$.k = Companion_instance_2;
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-frontend-kobweb-core.js.map
