(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-common-client-server-internal'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kobweb-common-client-server-internal'.");
    }
    globalThis['kobweb-common-client-server-internal'] = factory(typeof globalThis['kobweb-common-client-server-internal'] === 'undefined' ? {} : globalThis['kobweb-common-client-server-internal'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var VOID = kotlin_kotlin.$_$.e;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.j;
  var protoOf = kotlin_kotlin.$_$.x6;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.s1;
  var startsWith = kotlin_kotlin.$_$.i8;
  var endsWith = kotlin_kotlin.$_$.v7;
  var Unit_instance = kotlin_kotlin.$_$.d2;
  var initMetadataForClass = kotlin_kotlin.$_$.g6;
  var charArrayOf = kotlin_kotlin.$_$.u5;
  var split = kotlin_kotlin.$_$.g8;
  var toString = kotlin_kotlin.$_$.z6;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.d1;
  var last = kotlin_kotlin.$_$.t3;
  var get_lastIndex = kotlin_kotlin.$_$.r3;
  var joinToString = kotlin_kotlin.$_$.o3;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(Node, 'Node');
  initMetadataForClass(RootNode, 'RootNode', RootNode, Node);
  initMetadataForClass(ChildNode, 'ChildNode', VOID, Node);
  initMetadataForClass(StaticNode, 'StaticNode', VOID, ChildNode);
  initMetadataForClass(DynamicNode, 'DynamicNode', VOID, ChildNode);
  initMetadataForClass(ResolvedEntry, 'ResolvedEntry');
  initMetadataForClass(RouteTree, 'RouteTree', RouteTree);
  //endregion
  function Node(parent, name, data) {
    parent = parent === VOID ? null : parent;
    this.z2q_1 = parent;
    this.a2r_1 = name;
    this.b2r_1 = data;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.c2r_1 = ArrayList_init_$Create$();
    this.d2r_1 = this.c2r_1;
  }
  protoOf(Node).e2r = function (name) {
    return this.a2r_1 === name;
  };
  protoOf(Node).f2r = function (routePart, data) {
    var tmp;
    if (startsWith(routePart, _Char___init__impl__6a9atx(123)) && endsWith(routePart, _Char___init__impl__6a9atx(125))) {
      // Inline function 'kotlin.text.substring' call
      var endIndex = routePart.length - 1 | 0;
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$1 = routePart.substring(1, endIndex);
      tmp = new DynamicNode(this, tmp$ret$1, data);
    } else {
      tmp = new StaticNode(this, routePart, data);
    }
    var node = tmp;
    this.c2r_1.h(node);
    return node;
  };
  protoOf(Node).g2r = function (routePart) {
    // Inline function 'kotlin.collections.find' call
    var this_0 = this.c2r_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator = this_0.j();
      while (tmp0_iterator.k()) {
        var element = tmp0_iterator.l();
        // Inline function 'com.varabyte.kobweb.navigation.Node.findChild.<anonymous>' call
        if (element.e2r(routePart)) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    return tmp$ret$1;
  };
  function RootNode() {
    Node.call(this, null, '', null);
  }
  function ChildNode(parent, name, data) {
    Node.call(this, parent, name, data);
  }
  function StaticNode(parent, name, data) {
    ChildNode.call(this, parent, name, data);
  }
  function DynamicNode(parent, name, data) {
    ChildNode.call(this, parent, name, data);
  }
  protoOf(DynamicNode).e2r = function (name) {
    return true;
  };
  function ResolvedEntry(node, capturedRoutePart) {
    this.m2r_1 = node;
    this.n2r_1 = capturedRoutePart;
  }
  function resolveWithoutRedirects($this, route) {
    var routeParts = split(route, charArrayOf([_Char___init__impl__6a9atx(47)]));
    // Inline function 'kotlin.collections.mutableListOf' call
    var resolved = ArrayList_init_$Create$();
    var currNode = $this.o2r_1;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(routeParts.p(0) === $this.o2r_1.a2r_1)) {
      // Inline function 'kotlin.require.<anonymous>' call
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var inductionVariable = 1;
    var last_0 = routeParts.m();
    if (inductionVariable < last_0)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var routePart = routeParts.p(i);
        var tmp0_elvis_lhs = currNode.g2r(routePart);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          return null;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        currNode = tmp;
        resolved.h(new ResolvedEntry(currNode, routePart));
      }
       while (inductionVariable < last_0);
    // Inline function 'kotlin.takeIf' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp_0;
    // Inline function 'com.varabyte.kobweb.navigation.RouteTree.resolveWithoutRedirects.<anonymous>' call
    if (resolved.q() || !(last(resolved).m2r_1.b2r_1 == null)) {
      tmp_0 = resolved;
    } else {
      tmp_0 = null;
    }
    return tmp_0;
  }
  function resolveAllowingRedirects($this, route) {
    // Inline function 'kotlin.collections.fold' call
    var accumulator = route;
    var tmp0_iterator = $this.p2r_1.j();
    while (tmp0_iterator.k()) {
      var element = tmp0_iterator.l();
      // Inline function 'com.varabyte.kobweb.navigation.RouteTree.resolveAllowingRedirects.<anonymous>' call
      var route_0 = accumulator;
      var tmp0_elvis_lhs = element.s2r(route_0);
      accumulator = tmp0_elvis_lhs == null ? route_0 : tmp0_elvis_lhs;
    }
    var redirectedRoute = accumulator;
    return resolveWithoutRedirects($this, redirectedRoute);
  }
  function checkRoute($this, route) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!$this.o2r_1.d2r_1.q()) {
      // Inline function 'com.varabyte.kobweb.navigation.RouteTree.checkRoute.<anonymous>' call
      var message = "No routes were ever registered. This is unexpected and probably means no `@Page` was defined (or pages were defined in the wrong place where Kobweb couldn't discover them).";
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!startsWith(route, _Char___init__impl__6a9atx(47))) {
      // Inline function 'com.varabyte.kobweb.navigation.RouteTree.checkRoute.<anonymous>' call
      var message_0 = 'When checking a route, it must begin with a slash. Got: "' + route + '"';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var tmp0_elvis_lhs = resolveAllowingRedirects($this, route);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var resolvedNodes = tmp;
    return toRouteString(resolvedNodes);
  }
  function RouteTree() {
    this.o2r_1 = new RootNode();
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.p2r_1 = ArrayList_init_$Create$();
  }
  protoOf(RouteTree).t2r = function (route, allowRedirects) {
    return allowRedirects ? resolveAllowingRedirects(this, route) : resolveWithoutRedirects(this, route);
  };
  protoOf(RouteTree).u2r = function (route) {
    return !(checkRoute(this, route) == null);
  };
  protoOf(RouteTree).v2r = function (route, data) {
    if (!(resolveWithoutRedirects(this, route) == null))
      return false;
    var routeParts = split(route, charArrayOf([_Char___init__impl__6a9atx(47)]));
    var currNode = this.o2r_1;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(routeParts.p(0) === this.o2r_1.a2r_1)) {
      // Inline function 'kotlin.require.<anonymous>' call
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var inductionVariable = 1;
    var last = routeParts.m();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var routePart = routeParts.p(i);
        var tmp0_elvis_lhs = currNode.g2r(routePart);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          var tmp_0 = currNode;
          // Inline function 'kotlin.takeIf' call
          // Inline function 'kotlin.contracts.contract' call
          var tmp_1;
          // Inline function 'com.varabyte.kobweb.navigation.RouteTree.register.<anonymous>' call
          if (i === get_lastIndex(routeParts)) {
            tmp_1 = data;
          } else {
            tmp_1 = null;
          }
          var tmp$ret$2 = tmp_1;
          tmp = tmp_0.f2r(routePart, tmp$ret$2);
        } else {
          tmp = tmp0_elvis_lhs;
        }
        currNode = tmp;
      }
       while (inductionVariable < last);
    return true;
  };
  function toRouteString(_this__u8e3s4) {
    return '/' + joinToString(_this__u8e3s4, '/', VOID, VOID, VOID, VOID, toRouteString$lambda);
  }
  function toRouteString$lambda(it) {
    return it.n2r_1;
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = DynamicNode;
  _.$_$.b = RouteTree;
  _.$_$.c = toRouteString;
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-common-client-server-internal.js.map
