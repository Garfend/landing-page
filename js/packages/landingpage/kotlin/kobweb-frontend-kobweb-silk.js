(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-compose-runtime-runtime.js', './kobweb-frontend-kobweb-core.js', './kobweb-frontend-kobweb-compose.js', './kobweb-frontend-silk-foundation.js', './kobweb-frontend-silk-widgets.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./kobweb-frontend-kobweb-core.js'), require('./kobweb-frontend-kobweb-compose.js'), require('./kobweb-frontend-silk-foundation.js'), require('./kobweb-frontend-silk-widgets.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-kobweb-silk'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kobweb-frontend-kobweb-silk'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-kobweb-silk'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'kobweb-frontend-kobweb-silk'.");
    }
    if (typeof globalThis['kobweb-frontend-kobweb-core'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-kobweb-silk'. Its dependency 'kobweb-frontend-kobweb-core' was not found. Please, check whether 'kobweb-frontend-kobweb-core' is loaded prior to 'kobweb-frontend-kobweb-silk'.");
    }
    if (typeof globalThis['kobweb-frontend-kobweb-compose'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-kobweb-silk'. Its dependency 'kobweb-frontend-kobweb-compose' was not found. Please, check whether 'kobweb-frontend-kobweb-compose' is loaded prior to 'kobweb-frontend-kobweb-silk'.");
    }
    if (typeof globalThis['kobweb-frontend-silk-foundation'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-kobweb-silk'. Its dependency 'kobweb-frontend-silk-foundation' was not found. Please, check whether 'kobweb-frontend-silk-foundation' is loaded prior to 'kobweb-frontend-kobweb-silk'.");
    }
    if (typeof globalThis['kobweb-frontend-silk-widgets'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-kobweb-silk'. Its dependency 'kobweb-frontend-silk-widgets' was not found. Please, check whether 'kobweb-frontend-silk-widgets' is loaded prior to 'kobweb-frontend-kobweb-silk'.");
    }
    globalThis['kobweb-frontend-kobweb-silk'] = factory(typeof globalThis['kobweb-frontend-kobweb-silk'] === 'undefined' ? {} : globalThis['kobweb-frontend-kobweb-silk'], globalThis['kotlin-kotlin-stdlib'], globalThis['compose-multiplatform-core-compose-runtime-runtime'], globalThis['kobweb-frontend-kobweb-core'], globalThis['kobweb-frontend-kobweb-compose'], globalThis['kobweb-frontend-silk-foundation'], globalThis['kobweb-frontend-silk-widgets']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_com_varabyte_kobweb_kobweb_core, kotlin_com_varabyte_kobweb_kobweb_compose, kotlin_com_varabyte_kobweb_silk_foundation, kotlin_com_varabyte_kobweb_silk_widgets) {
  'use strict';
  //region block: imports
  var Unit_instance = kotlin_kotlin.$_$.d2;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a1;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.q;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h1;
  var THROW_CCE = kotlin_kotlin.$_$.e9;
  var KobwebApp = kotlin_com_varabyte_kobweb_kobweb_core.$_$.c;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z;
  var KobwebComposeStyles = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m3;
  var SilkFoundationStyles = kotlin_com_varabyte_kobweb_silk_foundation.$_$.l1;
  var SilkWidgetVariables = kotlin_com_varabyte_kobweb_silk_widgets.$_$.e;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b1;
  //endregion
  //region block: pre-declaration
  //endregion
  function SilkApp(content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t1a(921272959);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.v19(content) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.v18()) {
      if (isTraceInProgress()) {
        traceEventStart(921272959, $dirty, -1, 'com.varabyte.kobweb.silk.SilkApp (SilkApp.kt:8)');
      }
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.SilkApp.<anonymous>' call
      var tmp = $composer_0;
      var dispatchReceiver = composableLambda(tmp, 696845695, true, SilkApp$lambda(content));
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
        // Inline function 'com.varabyte.kobweb.silk.SilkApp.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref(dispatchReceiver);
        $composer_1.l1a(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_1.b19();
      KobwebApp(tmp0, $composer_0, 6);
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
      tmp0_safe_receiver.u1f(SilkApp$lambda_0(content, $changed));
    }
  }
  function SilkApp$lambda($content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.v18()) {
        if (isTraceInProgress()) {
          traceEventStart(696845695, $changed, -1, 'com.varabyte.kobweb.silk.SilkApp.<anonymous> (SilkApp.kt:10)');
        }
        KobwebComposeStyles($composer_0, 0);
        SilkFoundationStyles(null, $composer_0, 0, 1);
        SilkWidgetVariables(null, $composer_0, 0, 1);
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
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.t18(p0, p1);
    };
  }
  function SilkApp$lambda_0($content, $$changed) {
    return function ($composer, $force) {
      SilkApp($content, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = SilkApp;
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-frontend-kobweb-silk.js.map
