(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat'.");
    }
    globalThis.kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat = factory(typeof kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat === 'undefined' ? {} : kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat, globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var Regex_init_$Create$ = kotlin_kotlin.$_$.x;
  var toSet = kotlin_kotlin.$_$.v4;
  var THROW_CCE = kotlin_kotlin.$_$.e9;
  var isCharSequence = kotlin_kotlin.$_$.o6;
  var trim = kotlin_kotlin.$_$.s8;
  var toString = kotlin_kotlin.$_$.z6;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.j;
  var Unit_instance = kotlin_kotlin.$_$.d2;
  var joinToString = kotlin_kotlin.$_$.o3;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.y;
  var charSequenceLength = kotlin_kotlin.$_$.w5;
  var joinTo = kotlin_kotlin.$_$.q3;
  var protoOf = kotlin_kotlin.$_$.x6;
  var initMetadataForClass = kotlin_kotlin.$_$.g6;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(EventListenerHandler, 'EventListenerHandler');
  //endregion
  function hasClass(_this__u8e3s4, cssClass) {
    // Inline function 'kotlin.text.matches' call
    var this_0 = _this__u8e3s4.className;
    // Inline function 'kotlin.text.toRegex' call
    var this_1 = '(^|.*\\s+)' + cssClass + '($|\\s+.*)';
    return Regex_init_$Create$(this_1).sb(this_0);
  }
  function removeClass(_this__u8e3s4, cssClasses) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.any' call
      var inductionVariable = 0;
      var last = cssClasses.length;
      while (inductionVariable < last) {
        var element = cssClasses[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlinx.dom.removeClass.<anonymous>' call
        if (hasClass(_this__u8e3s4, element)) {
          tmp$ret$1 = true;
          break $l$block;
        }
      }
      tmp$ret$1 = false;
    }
    if (tmp$ret$1) {
      var toBeRemoved = toSet(cssClasses);
      // Inline function 'kotlin.collections.filter' call
      // Inline function 'kotlin.text.split' call
      // Inline function 'kotlin.text.trim' call
      var this_0 = _this__u8e3s4.className;
      var this_1 = toString(trim(isCharSequence(this_0) ? this_0 : THROW_CCE()));
      // Inline function 'kotlin.text.toRegex' call
      // Inline function 'kotlin.collections.filterTo' call
      var this_2 = Regex_init_$Create$('\\s+').wb(this_1, 0);
      var destination = ArrayList_init_$Create$();
      var tmp0_iterator = this_2.j();
      while (tmp0_iterator.k()) {
        var element_0 = tmp0_iterator.l();
        // Inline function 'kotlinx.dom.removeClass.<anonymous>' call
        if (!toBeRemoved.o(element_0)) {
          destination.h(element_0);
        }
      }
      _this__u8e3s4.className = joinToString(destination, ' ');
      return true;
    }
    return false;
  }
  function addClass(_this__u8e3s4, cssClasses) {
    // Inline function 'kotlin.collections.filterNot' call
    // Inline function 'kotlin.collections.filterNotTo' call
    var destination = ArrayList_init_$Create$();
    var inductionVariable = 0;
    var last = cssClasses.length;
    while (inductionVariable < last) {
      var element = cssClasses[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'kotlinx.dom.addClass.<anonymous>' call
      if (!hasClass(_this__u8e3s4, element)) {
        destination.h(element);
      }
    }
    var missingClasses = destination;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!missingClasses.q()) {
      // Inline function 'kotlin.text.trim' call
      var this_0 = _this__u8e3s4.className;
      var presentClasses = toString(trim(isCharSequence(this_0) ? this_0 : THROW_CCE()));
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.dom.addClass.<anonymous>' call
      this_1.a8(presentClasses);
      // Inline function 'kotlin.text.isEmpty' call
      if (!(charSequenceLength(presentClasses) === 0)) {
        this_1.a8(' ');
      }
      joinTo(missingClasses, this_1, ' ');
      _this__u8e3s4.className = this_1.toString();
      return true;
    }
    return false;
  }
  function EventListener(handler) {
    return new EventListenerHandler(handler);
  }
  function EventListenerHandler(handler) {
    this.eh_1 = handler;
  }
  protoOf(EventListenerHandler).fh = function (event) {
    this.eh_1(event);
  };
  protoOf(EventListenerHandler).handleEvent = function (event) {
    return this.fh(event);
  };
  protoOf(EventListenerHandler).toString = function () {
    return 'EventListenerHandler(' + toString(this.eh_1) + ')';
  };
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = addClass;
  _.$_$.b = hasClass;
  _.$_$.c = removeClass;
  _.$_$.d = EventListener;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.js.map
