var xi = Object.defineProperty;
var Ei = (e, t, r) => t in e ? xi(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var Rt = (e, t, r) => Ei(e, typeof t != "symbol" ? t + "" : t, r);
import * as N from "react";
import it, { forwardRef as Ti, useContext as wi, Children as Ri, isValidElement as Jt, cloneElement as Qt } from "react";
function Oi(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Fr = { exports: {} }, Ot = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var On;
function $i() {
  if (On) return Ot;
  On = 1;
  var e = it, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(s, f, d) {
    var p, h = {}, g = null, C = null;
    d !== void 0 && (g = "" + d), f.key !== void 0 && (g = "" + f.key), f.ref !== void 0 && (C = f.ref);
    for (p in f) n.call(f, p) && !i.hasOwnProperty(p) && (h[p] = f[p]);
    if (s && s.defaultProps) for (p in f = s.defaultProps, f) h[p] === void 0 && (h[p] = f[p]);
    return { $$typeof: t, type: s, key: g, ref: C, props: h, _owner: o.current };
  }
  return Ot.Fragment = r, Ot.jsx = a, Ot.jsxs = a, Ot;
}
var $t = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $n;
function ki() {
  return $n || ($n = 1, process.env.NODE_ENV !== "production" && function() {
    var e = it, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), s = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), C = Symbol.for("react.offscreen"), v = Symbol.iterator, y = "@@iterator";
    function m(l) {
      if (l === null || typeof l != "object")
        return null;
      var T = v && l[v] || l[y];
      return typeof T == "function" ? T : null;
    }
    var E = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function O(l) {
      {
        for (var T = arguments.length, P = new Array(T > 1 ? T - 1 : 0), F = 1; F < T; F++)
          P[F - 1] = arguments[F];
        R("error", l, P);
      }
    }
    function R(l, T, P) {
      {
        var F = E.ReactDebugCurrentFrame, ne = F.getStackAddendum();
        ne !== "" && (T += "%s", P = P.concat([ne]));
        var ue = P.map(function(Q) {
          return String(Q);
        });
        ue.unshift("Warning: " + T), Function.prototype.apply.call(console[l], console, ue);
      }
    }
    var x = !1, b = !1, A = !1, I = !1, Z = !1, J;
    J = Symbol.for("react.module.reference");
    function c(l) {
      return !!(typeof l == "string" || typeof l == "function" || l === n || l === i || Z || l === o || l === d || l === p || I || l === C || x || b || A || typeof l == "object" && l !== null && (l.$$typeof === g || l.$$typeof === h || l.$$typeof === a || l.$$typeof === s || l.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      l.$$typeof === J || l.getModuleId !== void 0));
    }
    function _(l, T, P) {
      var F = l.displayName;
      if (F)
        return F;
      var ne = T.displayName || T.name || "";
      return ne !== "" ? P + "(" + ne + ")" : P;
    }
    function j(l) {
      return l.displayName || "Context";
    }
    function D(l) {
      if (l == null)
        return null;
      if (typeof l.tag == "number" && O("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof l == "function")
        return l.displayName || l.name || null;
      if (typeof l == "string")
        return l;
      switch (l) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case i:
          return "Profiler";
        case o:
          return "StrictMode";
        case d:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof l == "object")
        switch (l.$$typeof) {
          case s:
            var T = l;
            return j(T) + ".Consumer";
          case a:
            var P = l;
            return j(P._context) + ".Provider";
          case f:
            return _(l, l.render, "ForwardRef");
          case h:
            var F = l.displayName || null;
            return F !== null ? F : D(l.type) || "Memo";
          case g: {
            var ne = l, ue = ne._payload, Q = ne._init;
            try {
              return D(Q(ue));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Y = Object.assign, le = 0, ce, ye, Ee, Te, w, $, z;
    function W() {
    }
    W.__reactDisabledLog = !0;
    function B() {
      {
        if (le === 0) {
          ce = console.log, ye = console.info, Ee = console.warn, Te = console.error, w = console.group, $ = console.groupCollapsed, z = console.groupEnd;
          var l = {
            configurable: !0,
            enumerable: !0,
            value: W,
            writable: !0
          };
          Object.defineProperties(console, {
            info: l,
            log: l,
            warn: l,
            error: l,
            group: l,
            groupCollapsed: l,
            groupEnd: l
          });
        }
        le++;
      }
    }
    function H() {
      {
        if (le--, le === 0) {
          var l = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Y({}, l, {
              value: ce
            }),
            info: Y({}, l, {
              value: ye
            }),
            warn: Y({}, l, {
              value: Ee
            }),
            error: Y({}, l, {
              value: Te
            }),
            group: Y({}, l, {
              value: w
            }),
            groupCollapsed: Y({}, l, {
              value: $
            }),
            groupEnd: Y({}, l, {
              value: z
            })
          });
        }
        le < 0 && O("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var V = E.ReactCurrentDispatcher, L;
    function q(l, T, P) {
      {
        if (L === void 0)
          try {
            throw Error();
          } catch (ne) {
            var F = ne.stack.trim().match(/\n( *(at )?)/);
            L = F && F[1] || "";
          }
        return `
` + L + l;
      }
    }
    var K = !1, G;
    {
      var Se = typeof WeakMap == "function" ? WeakMap : Map;
      G = new Se();
    }
    function k(l, T) {
      if (!l || K)
        return "";
      {
        var P = G.get(l);
        if (P !== void 0)
          return P;
      }
      var F;
      K = !0;
      var ne = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ue;
      ue = V.current, V.current = null, B();
      try {
        if (T) {
          var Q = function() {
            throw Error();
          };
          if (Object.defineProperty(Q.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Q, []);
            } catch (Pe) {
              F = Pe;
            }
            Reflect.construct(l, [], Q);
          } else {
            try {
              Q.call();
            } catch (Pe) {
              F = Pe;
            }
            l.call(Q.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Pe) {
            F = Pe;
          }
          l();
        }
      } catch (Pe) {
        if (Pe && F && typeof Pe.stack == "string") {
          for (var X = Pe.stack.split(`
`), _e = F.stack.split(`
`), be = X.length - 1, Ce = _e.length - 1; be >= 1 && Ce >= 0 && X[be] !== _e[Ce]; )
            Ce--;
          for (; be >= 1 && Ce >= 0; be--, Ce--)
            if (X[be] !== _e[Ce]) {
              if (be !== 1 || Ce !== 1)
                do
                  if (be--, Ce--, Ce < 0 || X[be] !== _e[Ce]) {
                    var Be = `
` + X[be].replace(" at new ", " at ");
                    return l.displayName && Be.includes("<anonymous>") && (Be = Be.replace("<anonymous>", l.displayName)), typeof l == "function" && G.set(l, Be), Be;
                  }
                while (be >= 1 && Ce >= 0);
              break;
            }
        }
      } finally {
        K = !1, V.current = ue, H(), Error.prepareStackTrace = ne;
      }
      var ft = l ? l.displayName || l.name : "", ot = ft ? q(ft) : "";
      return typeof l == "function" && G.set(l, ot), ot;
    }
    function Oe(l, T, P) {
      return k(l, !1);
    }
    function M(l) {
      var T = l.prototype;
      return !!(T && T.isReactComponent);
    }
    function ke(l, T, P) {
      if (l == null)
        return "";
      if (typeof l == "function")
        return k(l, M(l));
      if (typeof l == "string")
        return q(l);
      switch (l) {
        case d:
          return q("Suspense");
        case p:
          return q("SuspenseList");
      }
      if (typeof l == "object")
        switch (l.$$typeof) {
          case f:
            return Oe(l.render);
          case h:
            return ke(l.type, T, P);
          case g: {
            var F = l, ne = F._payload, ue = F._init;
            try {
              return ke(ue(ne), T, P);
            } catch {
            }
          }
        }
      return "";
    }
    var je = Object.prototype.hasOwnProperty, rt = {}, nt = E.ReactDebugCurrentFrame;
    function Le(l) {
      if (l) {
        var T = l._owner, P = ke(l.type, l._source, T ? T.type : null);
        nt.setExtraStackFrame(P);
      } else
        nt.setExtraStackFrame(null);
    }
    function xr(l, T, P, F, ne) {
      {
        var ue = Function.call.bind(je);
        for (var Q in l)
          if (ue(l, Q)) {
            var X = void 0;
            try {
              if (typeof l[Q] != "function") {
                var _e = Error((F || "React class") + ": " + P + " type `" + Q + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof l[Q] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw _e.name = "Invariant Violation", _e;
              }
              X = l[Q](T, Q, F, P, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (be) {
              X = be;
            }
            X && !(X instanceof Error) && (Le(ne), O("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", F || "React class", P, Q, typeof X), Le(null)), X instanceof Error && !(X.message in rt) && (rt[X.message] = !0, Le(ne), O("Failed %s type: %s", P, X.message), Le(null));
          }
      }
    }
    var Wt = Array.isArray;
    function Tt(l) {
      return Wt(l);
    }
    function U(l) {
      {
        var T = typeof Symbol == "function" && Symbol.toStringTag, P = T && l[Symbol.toStringTag] || l.constructor.name || "Object";
        return P;
      }
    }
    function Ut(l) {
      try {
        return Yt(l), !1;
      } catch {
        return !0;
      }
    }
    function Yt(l) {
      return "" + l;
    }
    function wt(l) {
      if (Ut(l))
        return O("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", U(l)), Yt(l);
    }
    var lt = E.ReactCurrentOwner, oi = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, bn, vn, Er;
    Er = {};
    function ii(l) {
      if (je.call(l, "ref")) {
        var T = Object.getOwnPropertyDescriptor(l, "ref").get;
        if (T && T.isReactWarning)
          return !1;
      }
      return l.ref !== void 0;
    }
    function ai(l) {
      if (je.call(l, "key")) {
        var T = Object.getOwnPropertyDescriptor(l, "key").get;
        if (T && T.isReactWarning)
          return !1;
      }
      return l.key !== void 0;
    }
    function si(l, T) {
      if (typeof l.ref == "string" && lt.current && T && lt.current.stateNode !== T) {
        var P = D(lt.current.type);
        Er[P] || (O('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', D(lt.current.type), l.ref), Er[P] = !0);
      }
    }
    function ci(l, T) {
      {
        var P = function() {
          bn || (bn = !0, O("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", T));
        };
        P.isReactWarning = !0, Object.defineProperty(l, "key", {
          get: P,
          configurable: !0
        });
      }
    }
    function li(l, T) {
      {
        var P = function() {
          vn || (vn = !0, O("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", T));
        };
        P.isReactWarning = !0, Object.defineProperty(l, "ref", {
          get: P,
          configurable: !0
        });
      }
    }
    var ui = function(l, T, P, F, ne, ue, Q) {
      var X = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: l,
        key: T,
        ref: P,
        props: Q,
        // Record the component responsible for creating this element.
        _owner: ue
      };
      return X._store = {}, Object.defineProperty(X._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(X, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: F
      }), Object.defineProperty(X, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ne
      }), Object.freeze && (Object.freeze(X.props), Object.freeze(X)), X;
    };
    function fi(l, T, P, F, ne) {
      {
        var ue, Q = {}, X = null, _e = null;
        P !== void 0 && (wt(P), X = "" + P), ai(T) && (wt(T.key), X = "" + T.key), ii(T) && (_e = T.ref, si(T, ne));
        for (ue in T)
          je.call(T, ue) && !oi.hasOwnProperty(ue) && (Q[ue] = T[ue]);
        if (l && l.defaultProps) {
          var be = l.defaultProps;
          for (ue in be)
            Q[ue] === void 0 && (Q[ue] = be[ue]);
        }
        if (X || _e) {
          var Ce = typeof l == "function" ? l.displayName || l.name || "Unknown" : l;
          X && ci(Q, Ce), _e && li(Q, Ce);
        }
        return ui(l, X, _e, ne, F, lt.current, Q);
      }
    }
    var Tr = E.ReactCurrentOwner, Sn = E.ReactDebugCurrentFrame;
    function ut(l) {
      if (l) {
        var T = l._owner, P = ke(l.type, l._source, T ? T.type : null);
        Sn.setExtraStackFrame(P);
      } else
        Sn.setExtraStackFrame(null);
    }
    var wr;
    wr = !1;
    function Rr(l) {
      return typeof l == "object" && l !== null && l.$$typeof === t;
    }
    function Cn() {
      {
        if (Tr.current) {
          var l = D(Tr.current.type);
          if (l)
            return `

Check the render method of \`` + l + "`.";
        }
        return "";
      }
    }
    function di(l) {
      return "";
    }
    var xn = {};
    function pi(l) {
      {
        var T = Cn();
        if (!T) {
          var P = typeof l == "string" ? l : l.displayName || l.name;
          P && (T = `

Check the top-level render call using <` + P + ">.");
        }
        return T;
      }
    }
    function En(l, T) {
      {
        if (!l._store || l._store.validated || l.key != null)
          return;
        l._store.validated = !0;
        var P = pi(T);
        if (xn[P])
          return;
        xn[P] = !0;
        var F = "";
        l && l._owner && l._owner !== Tr.current && (F = " It was passed a child from " + D(l._owner.type) + "."), ut(l), O('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', P, F), ut(null);
      }
    }
    function Tn(l, T) {
      {
        if (typeof l != "object")
          return;
        if (Tt(l))
          for (var P = 0; P < l.length; P++) {
            var F = l[P];
            Rr(F) && En(F, T);
          }
        else if (Rr(l))
          l._store && (l._store.validated = !0);
        else if (l) {
          var ne = m(l);
          if (typeof ne == "function" && ne !== l.entries)
            for (var ue = ne.call(l), Q; !(Q = ue.next()).done; )
              Rr(Q.value) && En(Q.value, T);
        }
      }
    }
    function hi(l) {
      {
        var T = l.type;
        if (T == null || typeof T == "string")
          return;
        var P;
        if (typeof T == "function")
          P = T.propTypes;
        else if (typeof T == "object" && (T.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        T.$$typeof === h))
          P = T.propTypes;
        else
          return;
        if (P) {
          var F = D(T);
          xr(P, l.props, "prop", F, l);
        } else if (T.PropTypes !== void 0 && !wr) {
          wr = !0;
          var ne = D(T);
          O("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ne || "Unknown");
        }
        typeof T.getDefaultProps == "function" && !T.getDefaultProps.isReactClassApproved && O("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function mi(l) {
      {
        for (var T = Object.keys(l.props), P = 0; P < T.length; P++) {
          var F = T[P];
          if (F !== "children" && F !== "key") {
            ut(l), O("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", F), ut(null);
            break;
          }
        }
        l.ref !== null && (ut(l), O("Invalid attribute `ref` supplied to `React.Fragment`."), ut(null));
      }
    }
    var wn = {};
    function Rn(l, T, P, F, ne, ue) {
      {
        var Q = c(l);
        if (!Q) {
          var X = "";
          (l === void 0 || typeof l == "object" && l !== null && Object.keys(l).length === 0) && (X += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var _e = di();
          _e ? X += _e : X += Cn();
          var be;
          l === null ? be = "null" : Tt(l) ? be = "array" : l !== void 0 && l.$$typeof === t ? (be = "<" + (D(l.type) || "Unknown") + " />", X = " Did you accidentally export a JSX literal instead of a component?") : be = typeof l, O("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", be, X);
        }
        var Ce = fi(l, T, P, ne, ue);
        if (Ce == null)
          return Ce;
        if (Q) {
          var Be = T.children;
          if (Be !== void 0)
            if (F)
              if (Tt(Be)) {
                for (var ft = 0; ft < Be.length; ft++)
                  Tn(Be[ft], l);
                Object.freeze && Object.freeze(Be);
              } else
                O("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Tn(Be, l);
        }
        if (je.call(T, "key")) {
          var ot = D(l), Pe = Object.keys(T).filter(function(Ci) {
            return Ci !== "key";
          }), Or = Pe.length > 0 ? "{key: someKey, " + Pe.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!wn[ot + Or]) {
            var Si = Pe.length > 0 ? "{" + Pe.join(": ..., ") + ": ...}" : "{}";
            O(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Or, ot, Si, ot), wn[ot + Or] = !0;
          }
        }
        return l === n ? mi(Ce) : hi(Ce), Ce;
      }
    }
    function gi(l, T, P) {
      return Rn(l, T, P, !0);
    }
    function yi(l, T, P) {
      return Rn(l, T, P, !1);
    }
    var bi = yi, vi = gi;
    $t.Fragment = n, $t.jsx = bi, $t.jsxs = vi;
  }()), $t;
}
process.env.NODE_ENV === "production" ? Fr.exports = $i() : Fr.exports = ki();
var re = Fr.exports, zr = { exports: {} }, qt = { exports: {} }, oe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var kn;
function _i() {
  if (kn) return oe;
  kn = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, C = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, y = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, E = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
  function R(b) {
    if (typeof b == "object" && b !== null) {
      var A = b.$$typeof;
      switch (A) {
        case t:
          switch (b = b.type, b) {
            case f:
            case d:
            case n:
            case i:
            case o:
            case h:
              return b;
            default:
              switch (b = b && b.$$typeof, b) {
                case s:
                case p:
                case v:
                case C:
                case a:
                  return b;
                default:
                  return A;
              }
          }
        case r:
          return A;
      }
    }
  }
  function x(b) {
    return R(b) === d;
  }
  return oe.AsyncMode = f, oe.ConcurrentMode = d, oe.ContextConsumer = s, oe.ContextProvider = a, oe.Element = t, oe.ForwardRef = p, oe.Fragment = n, oe.Lazy = v, oe.Memo = C, oe.Portal = r, oe.Profiler = i, oe.StrictMode = o, oe.Suspense = h, oe.isAsyncMode = function(b) {
    return x(b) || R(b) === f;
  }, oe.isConcurrentMode = x, oe.isContextConsumer = function(b) {
    return R(b) === s;
  }, oe.isContextProvider = function(b) {
    return R(b) === a;
  }, oe.isElement = function(b) {
    return typeof b == "object" && b !== null && b.$$typeof === t;
  }, oe.isForwardRef = function(b) {
    return R(b) === p;
  }, oe.isFragment = function(b) {
    return R(b) === n;
  }, oe.isLazy = function(b) {
    return R(b) === v;
  }, oe.isMemo = function(b) {
    return R(b) === C;
  }, oe.isPortal = function(b) {
    return R(b) === r;
  }, oe.isProfiler = function(b) {
    return R(b) === i;
  }, oe.isStrictMode = function(b) {
    return R(b) === o;
  }, oe.isSuspense = function(b) {
    return R(b) === h;
  }, oe.isValidElementType = function(b) {
    return typeof b == "string" || typeof b == "function" || b === n || b === d || b === i || b === o || b === h || b === g || typeof b == "object" && b !== null && (b.$$typeof === v || b.$$typeof === C || b.$$typeof === a || b.$$typeof === s || b.$$typeof === p || b.$$typeof === m || b.$$typeof === E || b.$$typeof === O || b.$$typeof === y);
  }, oe.typeOf = R, oe;
}
var ie = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _n;
function Pi() {
  return _n || (_n = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, C = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, y = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, E = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
    function R(k) {
      return typeof k == "string" || typeof k == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      k === n || k === d || k === i || k === o || k === h || k === g || typeof k == "object" && k !== null && (k.$$typeof === v || k.$$typeof === C || k.$$typeof === a || k.$$typeof === s || k.$$typeof === p || k.$$typeof === m || k.$$typeof === E || k.$$typeof === O || k.$$typeof === y);
    }
    function x(k) {
      if (typeof k == "object" && k !== null) {
        var Oe = k.$$typeof;
        switch (Oe) {
          case t:
            var M = k.type;
            switch (M) {
              case f:
              case d:
              case n:
              case i:
              case o:
              case h:
                return M;
              default:
                var ke = M && M.$$typeof;
                switch (ke) {
                  case s:
                  case p:
                  case v:
                  case C:
                  case a:
                    return ke;
                  default:
                    return Oe;
                }
            }
          case r:
            return Oe;
        }
      }
    }
    var b = f, A = d, I = s, Z = a, J = t, c = p, _ = n, j = v, D = C, Y = r, le = i, ce = o, ye = h, Ee = !1;
    function Te(k) {
      return Ee || (Ee = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), w(k) || x(k) === f;
    }
    function w(k) {
      return x(k) === d;
    }
    function $(k) {
      return x(k) === s;
    }
    function z(k) {
      return x(k) === a;
    }
    function W(k) {
      return typeof k == "object" && k !== null && k.$$typeof === t;
    }
    function B(k) {
      return x(k) === p;
    }
    function H(k) {
      return x(k) === n;
    }
    function V(k) {
      return x(k) === v;
    }
    function L(k) {
      return x(k) === C;
    }
    function q(k) {
      return x(k) === r;
    }
    function K(k) {
      return x(k) === i;
    }
    function G(k) {
      return x(k) === o;
    }
    function Se(k) {
      return x(k) === h;
    }
    ie.AsyncMode = b, ie.ConcurrentMode = A, ie.ContextConsumer = I, ie.ContextProvider = Z, ie.Element = J, ie.ForwardRef = c, ie.Fragment = _, ie.Lazy = j, ie.Memo = D, ie.Portal = Y, ie.Profiler = le, ie.StrictMode = ce, ie.Suspense = ye, ie.isAsyncMode = Te, ie.isConcurrentMode = w, ie.isContextConsumer = $, ie.isContextProvider = z, ie.isElement = W, ie.isForwardRef = B, ie.isFragment = H, ie.isLazy = V, ie.isMemo = L, ie.isPortal = q, ie.isProfiler = K, ie.isStrictMode = G, ie.isSuspense = Se, ie.isValidElementType = R, ie.typeOf = x;
  }()), ie;
}
var Pn;
function Xr() {
  return Pn || (Pn = 1, process.env.NODE_ENV === "production" ? qt.exports = _i() : qt.exports = Pi()), qt.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var $r, An;
function Ai() {
  if (An) return $r;
  An = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function n(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
        return !1;
      for (var a = {}, s = 0; s < 10; s++)
        a["_" + String.fromCharCode(s)] = s;
      var f = Object.getOwnPropertyNames(a).map(function(p) {
        return a[p];
      });
      if (f.join("") !== "0123456789")
        return !1;
      var d = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(p) {
        d[p] = p;
      }), Object.keys(Object.assign({}, d)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return $r = o() ? Object.assign : function(i, a) {
    for (var s, f = n(i), d, p = 1; p < arguments.length; p++) {
      s = Object(arguments[p]);
      for (var h in s)
        t.call(s, h) && (f[h] = s[h]);
      if (e) {
        d = e(s);
        for (var g = 0; g < d.length; g++)
          r.call(s, d[g]) && (f[d[g]] = s[d[g]]);
      }
    }
    return f;
  }, $r;
}
var kr, In;
function Jr() {
  if (In) return kr;
  In = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return kr = e, kr;
}
var _r, Mn;
function go() {
  return Mn || (Mn = 1, _r = Function.call.bind(Object.prototype.hasOwnProperty)), _r;
}
var Pr, Nn;
function Ii() {
  if (Nn) return Pr;
  Nn = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = Jr(), r = {}, n = go();
    e = function(i) {
      var a = "Warning: " + i;
      typeof console < "u" && console.error(a);
      try {
        throw new Error(a);
      } catch {
      }
    };
  }
  function o(i, a, s, f, d) {
    if (process.env.NODE_ENV !== "production") {
      for (var p in i)
        if (n(i, p)) {
          var h;
          try {
            if (typeof i[p] != "function") {
              var g = Error(
                (f || "React class") + ": " + s + " type `" + p + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[p] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw g.name = "Invariant Violation", g;
            }
            h = i[p](a, p, f, s, null, t);
          } catch (v) {
            h = v;
          }
          if (h && !(h instanceof Error) && e(
            (f || "React class") + ": type specification of " + s + " `" + p + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof h + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), h instanceof Error && !(h.message in r)) {
            r[h.message] = !0;
            var C = d ? d() : "";
            e(
              "Failed " + s + " type: " + h.message + (C ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, Pr = o, Pr;
}
var Ar, jn;
function Mi() {
  if (jn) return Ar;
  jn = 1;
  var e = Xr(), t = Ai(), r = Jr(), n = go(), o = Ii(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(s) {
    var f = "Warning: " + s;
    typeof console < "u" && console.error(f);
    try {
      throw new Error(f);
    } catch {
    }
  });
  function a() {
    return null;
  }
  return Ar = function(s, f) {
    var d = typeof Symbol == "function" && Symbol.iterator, p = "@@iterator";
    function h(w) {
      var $ = w && (d && w[d] || w[p]);
      if (typeof $ == "function")
        return $;
    }
    var g = "<<anonymous>>", C = {
      array: E("array"),
      bigint: E("bigint"),
      bool: E("boolean"),
      func: E("function"),
      number: E("number"),
      object: E("object"),
      string: E("string"),
      symbol: E("symbol"),
      any: O(),
      arrayOf: R,
      element: x(),
      elementType: b(),
      instanceOf: A,
      node: c(),
      objectOf: Z,
      oneOf: I,
      oneOfType: J,
      shape: j,
      exact: D
    };
    function v(w, $) {
      return w === $ ? w !== 0 || 1 / w === 1 / $ : w !== w && $ !== $;
    }
    function y(w, $) {
      this.message = w, this.data = $ && typeof $ == "object" ? $ : {}, this.stack = "";
    }
    y.prototype = Error.prototype;
    function m(w) {
      if (process.env.NODE_ENV !== "production")
        var $ = {}, z = 0;
      function W(H, V, L, q, K, G, Se) {
        if (q = q || g, G = G || L, Se !== r) {
          if (f) {
            var k = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw k.name = "Invariant Violation", k;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Oe = q + ":" + L;
            !$[Oe] && // Avoid spamming the console because they are often not actionable except for lib authors
            z < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + G + "` prop on `" + q + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), $[Oe] = !0, z++);
          }
        }
        return V[L] == null ? H ? V[L] === null ? new y("The " + K + " `" + G + "` is marked as required " + ("in `" + q + "`, but its value is `null`.")) : new y("The " + K + " `" + G + "` is marked as required in " + ("`" + q + "`, but its value is `undefined`.")) : null : w(V, L, q, K, G);
      }
      var B = W.bind(null, !1);
      return B.isRequired = W.bind(null, !0), B;
    }
    function E(w) {
      function $(z, W, B, H, V, L) {
        var q = z[W], K = ce(q);
        if (K !== w) {
          var G = ye(q);
          return new y(
            "Invalid " + H + " `" + V + "` of type " + ("`" + G + "` supplied to `" + B + "`, expected ") + ("`" + w + "`."),
            { expectedType: w }
          );
        }
        return null;
      }
      return m($);
    }
    function O() {
      return m(a);
    }
    function R(w) {
      function $(z, W, B, H, V) {
        if (typeof w != "function")
          return new y("Property `" + V + "` of component `" + B + "` has invalid PropType notation inside arrayOf.");
        var L = z[W];
        if (!Array.isArray(L)) {
          var q = ce(L);
          return new y("Invalid " + H + " `" + V + "` of type " + ("`" + q + "` supplied to `" + B + "`, expected an array."));
        }
        for (var K = 0; K < L.length; K++) {
          var G = w(L, K, B, H, V + "[" + K + "]", r);
          if (G instanceof Error)
            return G;
        }
        return null;
      }
      return m($);
    }
    function x() {
      function w($, z, W, B, H) {
        var V = $[z];
        if (!s(V)) {
          var L = ce(V);
          return new y("Invalid " + B + " `" + H + "` of type " + ("`" + L + "` supplied to `" + W + "`, expected a single ReactElement."));
        }
        return null;
      }
      return m(w);
    }
    function b() {
      function w($, z, W, B, H) {
        var V = $[z];
        if (!e.isValidElementType(V)) {
          var L = ce(V);
          return new y("Invalid " + B + " `" + H + "` of type " + ("`" + L + "` supplied to `" + W + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return m(w);
    }
    function A(w) {
      function $(z, W, B, H, V) {
        if (!(z[W] instanceof w)) {
          var L = w.name || g, q = Te(z[W]);
          return new y("Invalid " + H + " `" + V + "` of type " + ("`" + q + "` supplied to `" + B + "`, expected ") + ("instance of `" + L + "`."));
        }
        return null;
      }
      return m($);
    }
    function I(w) {
      if (!Array.isArray(w))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), a;
      function $(z, W, B, H, V) {
        for (var L = z[W], q = 0; q < w.length; q++)
          if (v(L, w[q]))
            return null;
        var K = JSON.stringify(w, function(Se, k) {
          var Oe = ye(k);
          return Oe === "symbol" ? String(k) : k;
        });
        return new y("Invalid " + H + " `" + V + "` of value `" + String(L) + "` " + ("supplied to `" + B + "`, expected one of " + K + "."));
      }
      return m($);
    }
    function Z(w) {
      function $(z, W, B, H, V) {
        if (typeof w != "function")
          return new y("Property `" + V + "` of component `" + B + "` has invalid PropType notation inside objectOf.");
        var L = z[W], q = ce(L);
        if (q !== "object")
          return new y("Invalid " + H + " `" + V + "` of type " + ("`" + q + "` supplied to `" + B + "`, expected an object."));
        for (var K in L)
          if (n(L, K)) {
            var G = w(L, K, B, H, V + "." + K, r);
            if (G instanceof Error)
              return G;
          }
        return null;
      }
      return m($);
    }
    function J(w) {
      if (!Array.isArray(w))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var $ = 0; $ < w.length; $++) {
        var z = w[$];
        if (typeof z != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + Ee(z) + " at index " + $ + "."
          ), a;
      }
      function W(B, H, V, L, q) {
        for (var K = [], G = 0; G < w.length; G++) {
          var Se = w[G], k = Se(B, H, V, L, q, r);
          if (k == null)
            return null;
          k.data && n(k.data, "expectedType") && K.push(k.data.expectedType);
        }
        var Oe = K.length > 0 ? ", expected one of type [" + K.join(", ") + "]" : "";
        return new y("Invalid " + L + " `" + q + "` supplied to " + ("`" + V + "`" + Oe + "."));
      }
      return m(W);
    }
    function c() {
      function w($, z, W, B, H) {
        return Y($[z]) ? null : new y("Invalid " + B + " `" + H + "` supplied to " + ("`" + W + "`, expected a ReactNode."));
      }
      return m(w);
    }
    function _(w, $, z, W, B) {
      return new y(
        (w || "React class") + ": " + $ + " type `" + z + "." + W + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + B + "`."
      );
    }
    function j(w) {
      function $(z, W, B, H, V) {
        var L = z[W], q = ce(L);
        if (q !== "object")
          return new y("Invalid " + H + " `" + V + "` of type `" + q + "` " + ("supplied to `" + B + "`, expected `object`."));
        for (var K in w) {
          var G = w[K];
          if (typeof G != "function")
            return _(B, H, V, K, ye(G));
          var Se = G(L, K, B, H, V + "." + K, r);
          if (Se)
            return Se;
        }
        return null;
      }
      return m($);
    }
    function D(w) {
      function $(z, W, B, H, V) {
        var L = z[W], q = ce(L);
        if (q !== "object")
          return new y("Invalid " + H + " `" + V + "` of type `" + q + "` " + ("supplied to `" + B + "`, expected `object`."));
        var K = t({}, z[W], w);
        for (var G in K) {
          var Se = w[G];
          if (n(w, G) && typeof Se != "function")
            return _(B, H, V, G, ye(Se));
          if (!Se)
            return new y(
              "Invalid " + H + " `" + V + "` key `" + G + "` supplied to `" + B + "`.\nBad object: " + JSON.stringify(z[W], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(w), null, "  ")
            );
          var k = Se(L, G, B, H, V + "." + G, r);
          if (k)
            return k;
        }
        return null;
      }
      return m($);
    }
    function Y(w) {
      switch (typeof w) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !w;
        case "object":
          if (Array.isArray(w))
            return w.every(Y);
          if (w === null || s(w))
            return !0;
          var $ = h(w);
          if ($) {
            var z = $.call(w), W;
            if ($ !== w.entries) {
              for (; !(W = z.next()).done; )
                if (!Y(W.value))
                  return !1;
            } else
              for (; !(W = z.next()).done; ) {
                var B = W.value;
                if (B && !Y(B[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function le(w, $) {
      return w === "symbol" ? !0 : $ ? $["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && $ instanceof Symbol : !1;
    }
    function ce(w) {
      var $ = typeof w;
      return Array.isArray(w) ? "array" : w instanceof RegExp ? "object" : le($, w) ? "symbol" : $;
    }
    function ye(w) {
      if (typeof w > "u" || w === null)
        return "" + w;
      var $ = ce(w);
      if ($ === "object") {
        if (w instanceof Date)
          return "date";
        if (w instanceof RegExp)
          return "regexp";
      }
      return $;
    }
    function Ee(w) {
      var $ = ye(w);
      switch ($) {
        case "array":
        case "object":
          return "an " + $;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + $;
        default:
          return $;
      }
    }
    function Te(w) {
      return !w.constructor || !w.constructor.name ? g : w.constructor.name;
    }
    return C.checkPropTypes = o, C.resetWarningCache = o.resetWarningCache, C.PropTypes = C, C;
  }, Ar;
}
var Ir, Bn;
function Ni() {
  if (Bn) return Ir;
  Bn = 1;
  var e = Jr();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Ir = function() {
    function n(a, s, f, d, p, h) {
      if (h !== e) {
        var g = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw g.name = "Invariant Violation", g;
      }
    }
    n.isRequired = n;
    function o() {
      return n;
    }
    var i = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: o,
      element: n,
      elementType: n,
      instanceOf: o,
      node: n,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return i.PropTypes = i, i;
  }, Ir;
}
if (process.env.NODE_ENV !== "production") {
  var ji = Xr(), Bi = !0;
  zr.exports = Mi()(ji.isElement, Bi);
} else
  zr.exports = Ni()();
var Di = zr.exports;
const u = /* @__PURE__ */ Oi(Di);
function yo(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (r = yo(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function we() {
  for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++) (e = arguments[r]) && (t = yo(e)) && (n && (n += " "), n += t);
  return n;
}
function nr(e, t) {
  const r = {
    ...t
  };
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      const o = n;
      if (o === "components" || o === "slots")
        r[o] = {
          ...e[o],
          ...r[o]
        };
      else if (o === "componentsProps" || o === "slotProps") {
        const i = e[o], a = t[o];
        if (!a)
          r[o] = i || {};
        else if (!i)
          r[o] = a;
        else {
          r[o] = {
            ...a
          };
          for (const s in i)
            if (Object.prototype.hasOwnProperty.call(i, s)) {
              const f = s;
              r[o][f] = nr(i[f], a[f]);
            }
        }
      } else r[o] === void 0 && (r[o] = e[o]);
    }
  return r;
}
function xt(e, t, r = void 0) {
  const n = {};
  for (const o in e) {
    const i = e[o];
    let a = "", s = !0;
    for (let f = 0; f < i.length; f += 1) {
      const d = i[f];
      d && (a += (s === !0 ? "" : " ") + t(d), s = !1, r && r[d] && (a += " " + r[d]));
    }
    n[o] = a;
  }
  return n;
}
function Je(e, ...t) {
  const r = new URL(`https://mui.com/production-error/?code=${e}`);
  return t.forEach((n) => r.searchParams.append("args[]", n)), `Minified MUI error #${e}; visit ${r} for the full message.`;
}
function Fi(e, t = Number.MIN_SAFE_INTEGER, r = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, r));
}
function Qr(e, t = 0, r = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > r) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${r}].`), Fi(e, t, r);
}
function zi(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let r = e.match(t);
  return r && r[0].length === 1 && (r = r.map((n) => n + n)), r ? `rgb${r.length === 4 ? "a" : ""}(${r.map((n, o) => o < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Qe(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return Qe(zi(e));
  const t = e.indexOf("("), r = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(r))
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : Je(9, e));
  let n = e.substring(t + 1, e.length - 1), o;
  if (r === "color") {
    if (n = n.split(" "), o = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(o))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : Je(10, o));
  } else
    n = n.split(",");
  return n = n.map((i) => parseFloat(i)), {
    type: r,
    values: n,
    colorSpace: o
  };
}
const Vi = (e) => {
  const t = Qe(e);
  return t.values.slice(0, 3).map((r, n) => t.type.includes("hsl") && n !== 0 ? `${r}%` : r).join(" ");
}, Pt = (e, t) => {
  try {
    return Vi(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
function lr(e) {
  const {
    type: t,
    colorSpace: r
  } = e;
  let {
    values: n
  } = e;
  return t.includes("rgb") ? n = n.map((o, i) => i < 3 ? parseInt(o, 10) : o) : t.includes("hsl") && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), t.includes("color") ? n = `${r} ${n.join(" ")}` : n = `${n.join(", ")}`, `${t}(${n})`;
}
function bo(e) {
  e = Qe(e);
  const {
    values: t
  } = e, r = t[0], n = t[1] / 100, o = t[2] / 100, i = n * Math.min(o, 1 - o), a = (d, p = (d + r / 30) % 12) => o - i * Math.max(Math.min(p - 3, 9 - p, 1), -1);
  let s = "rgb";
  const f = [Math.round(a(0) * 255), Math.round(a(8) * 255), Math.round(a(4) * 255)];
  return e.type === "hsla" && (s += "a", f.push(t[3])), lr({
    type: s,
    values: f
  });
}
function Vr(e) {
  e = Qe(e);
  let t = e.type === "hsl" || e.type === "hsla" ? Qe(bo(e)).values : e.values;
  return t = t.map((r) => (e.type !== "color" && (r /= 255), r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function Dn(e, t) {
  const r = Vr(e), n = Vr(t);
  return (Math.max(r, n) + 0.05) / (Math.min(r, n) + 0.05);
}
function Xe(e, t) {
  return e = Qe(e), t = Qr(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, lr(e);
}
function Gt(e, t, r) {
  try {
    return Xe(e, t);
  } catch {
    return e;
  }
}
function Zr(e, t) {
  if (e = Qe(e), t = Qr(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] *= 1 - t;
  return lr(e);
}
function fe(e, t, r) {
  try {
    return Zr(e, t);
  } catch {
    return e;
  }
}
function en(e, t) {
  if (e = Qe(e), t = Qr(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (255 - e.values[r]) * t;
  else if (e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (1 - e.values[r]) * t;
  return lr(e);
}
function de(e, t, r) {
  try {
    return en(e, t);
  } catch {
    return e;
  }
}
function Li(e, t = 0.15) {
  return Vr(e) > 0.5 ? Zr(e, t) : en(e, t);
}
function Ht(e, t, r) {
  try {
    return Li(e, t);
  } catch {
    return e;
  }
}
function Wi(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const vo = (e) => Wi(e) && e !== "classes";
function pe(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : Je(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function qe(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function So(e) {
  if (!qe(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((r) => {
    t[r] = So(e[r]);
  }), t;
}
function Me(e, t, r = {
  clone: !0
}) {
  const n = r.clone ? {
    ...e
  } : e;
  return qe(e) && qe(t) && Object.keys(t).forEach((o) => {
    qe(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && qe(e[o]) ? n[o] = Me(e[o], t[o], r) : r.clone ? n[o] = qe(t[o]) ? So(t[o]) : t[o] : n[o] = t[o];
  }), n;
}
function It(e, t) {
  return t ? Me(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const Ze = process.env.NODE_ENV !== "production" ? u.oneOfType([u.number, u.string, u.object, u.array]) : {};
function Ui(e, t) {
  if (!e.containerQueries)
    return t;
  const r = Object.keys(t).filter((n) => n.startsWith("@container")).sort((n, o) => {
    var a, s;
    const i = /min-width:\s*([0-9.]+)/;
    return +(((a = n.match(i)) == null ? void 0 : a[1]) || 0) - +(((s = o.match(i)) == null ? void 0 : s[1]) || 0);
  });
  return r.length ? r.reduce((n, o) => {
    const i = t[o];
    return delete n[o], n[o] = i, n;
  }, {
    ...t
  }) : t;
}
function Yi(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((r) => t.startsWith(`@${r}`)) || !!t.match(/^@\d/));
}
function qi(e, t) {
  const r = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!r) {
    if (process.env.NODE_ENV !== "production")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The provided shorthand ${`(${t})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.
For example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.` : Je(18, `(${t})`));
    return null;
  }
  const [, n, o] = r, i = Number.isNaN(+n) ? n || 0 : +n;
  return e.containerQueries(o).up(i);
}
function Gi(e) {
  const t = (i, a) => i.replace("@media", a ? `@container ${a}` : "@container");
  function r(i, a) {
    i.up = (...s) => t(e.breakpoints.up(...s), a), i.down = (...s) => t(e.breakpoints.down(...s), a), i.between = (...s) => t(e.breakpoints.between(...s), a), i.only = (...s) => t(e.breakpoints.only(...s), a), i.not = (...s) => {
      const f = t(e.breakpoints.not(...s), a);
      return f.includes("not all and") ? f.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : f;
    };
  }
  const n = {}, o = (i) => (r(n, i), n);
  return r(o), {
    ...e,
    containerQueries: o
  };
}
const ur = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, Fn = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${ur[e]}px)`
}, Hi = {
  containerQueries: (e) => ({
    up: (t) => {
      let r = typeof t == "number" ? t : ur[t] || t;
      return typeof r == "number" && (r = `${r}px`), e ? `@container ${e} (min-width:${r})` : `@container (min-width:${r})`;
    }
  })
};
function Ke(e, t, r) {
  const n = e.theme || {};
  if (Array.isArray(t)) {
    const i = n.breakpoints || Fn;
    return t.reduce((a, s, f) => (a[i.up(i.keys[f])] = r(t[f]), a), {});
  }
  if (typeof t == "object") {
    const i = n.breakpoints || Fn;
    return Object.keys(t).reduce((a, s) => {
      if (Yi(i.keys, s)) {
        const f = qi(n.containerQueries ? n : Hi, s);
        f && (a[f] = r(t[s], s));
      } else if (Object.keys(i.values || ur).includes(s)) {
        const f = i.up(s);
        a[f] = r(t[s], s);
      } else {
        const f = s;
        a[f] = t[f];
      }
      return a;
    }, {});
  }
  return r(t);
}
function Ki(e = {}) {
  var r;
  return ((r = e.keys) == null ? void 0 : r.reduce((n, o) => {
    const i = e.up(o);
    return n[i] = {}, n;
  }, {})) || {};
}
function Xi(e, t) {
  return e.reduce((r, n) => {
    const o = r[n];
    return (!o || Object.keys(o).length === 0) && delete r[n], r;
  }, t);
}
function fr(e, t, r = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && r) {
    const n = `vars.${t}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
    if (n != null)
      return n;
  }
  return t.split(".").reduce((n, o) => n && n[o] != null ? n[o] : null, e);
}
function or(e, t, r, n = r) {
  let o;
  return typeof e == "function" ? o = e(r) : Array.isArray(e) ? o = e[r] || n : o = fr(e, r) || n, t && (o = t(o, n, e)), o;
}
function ve(e) {
  const {
    prop: t,
    cssProperty: r = e.prop,
    themeKey: n,
    transform: o
  } = e, i = (a) => {
    if (a[t] == null)
      return null;
    const s = a[t], f = a.theme, d = fr(f, n) || {};
    return Ke(a, s, (h) => {
      let g = or(d, o, h);
      return h === g && typeof h == "string" && (g = or(d, o, `${t}${h === "default" ? "" : pe(h)}`, h)), r === !1 ? g : {
        [r]: g
      };
    });
  };
  return i.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: Ze
  } : {}, i.filterProps = [t], i;
}
function Ji(e) {
  const t = {};
  return (r) => (t[r] === void 0 && (t[r] = e(r)), t[r]);
}
const Qi = {
  m: "margin",
  p: "padding"
}, Zi = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, zn = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, ea = Ji((e) => {
  if (e.length > 2)
    if (zn[e])
      e = zn[e];
    else
      return [e];
  const [t, r] = e.split(""), n = Qi[t], o = Zi[r] || "";
  return Array.isArray(o) ? o.map((i) => n + i) : [n + o];
}), dr = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], pr = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], ta = [...dr, ...pr];
function Ft(e, t, r, n) {
  const o = fr(e, t, !0) ?? r;
  return typeof o == "number" || typeof o == "string" ? (i) => typeof i == "string" ? i : (process.env.NODE_ENV !== "production" && typeof i != "number" && console.error(`MUI: Expected ${n} argument to be a number or a string, got ${i}.`), typeof o == "string" ? `calc(${i} * ${o})` : o * i) : Array.isArray(o) ? (i) => {
    if (typeof i == "string")
      return i;
    const a = Math.abs(i);
    process.env.NODE_ENV !== "production" && (Number.isInteger(a) ? a > o.length - 1 && console.error([`MUI: The value provided (${a}) overflows.`, `The supported values are: ${JSON.stringify(o)}.`, `${a} > ${o.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`)));
    const s = o[a];
    return i >= 0 ? s : typeof s == "number" ? -s : `-${s}`;
  } : typeof o == "function" ? o : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${o}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function tn(e) {
  return Ft(e, "spacing", 8, "spacing");
}
function zt(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
function ra(e, t) {
  return (r) => e.reduce((n, o) => (n[o] = zt(t, r), n), {});
}
function na(e, t, r, n) {
  if (!t.includes(r))
    return null;
  const o = ea(r), i = ra(o, n), a = e[r];
  return Ke(e, a, i);
}
function Co(e, t) {
  const r = tn(e.theme);
  return Object.keys(e).map((n) => na(e, t, n, r)).reduce(It, {});
}
function me(e) {
  return Co(e, dr);
}
me.propTypes = process.env.NODE_ENV !== "production" ? dr.reduce((e, t) => (e[t] = Ze, e), {}) : {};
me.filterProps = dr;
function ge(e) {
  return Co(e, pr);
}
ge.propTypes = process.env.NODE_ENV !== "production" ? pr.reduce((e, t) => (e[t] = Ze, e), {}) : {};
ge.filterProps = pr;
process.env.NODE_ENV !== "production" && ta.reduce((e, t) => (e[t] = Ze, e), {});
function hr(...e) {
  const t = e.reduce((n, o) => (o.filterProps.forEach((i) => {
    n[i] = o;
  }), n), {}), r = (n) => Object.keys(n).reduce((o, i) => t[i] ? It(o, t[i](n)) : o, {});
  return r.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((n, o) => Object.assign(n, o.propTypes), {}) : {}, r.filterProps = e.reduce((n, o) => n.concat(o.filterProps), []), r;
}
function Fe(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function ze(e, t) {
  return ve({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const oa = ze("border", Fe), ia = ze("borderTop", Fe), aa = ze("borderRight", Fe), sa = ze("borderBottom", Fe), ca = ze("borderLeft", Fe), la = ze("borderColor"), ua = ze("borderTopColor"), fa = ze("borderRightColor"), da = ze("borderBottomColor"), pa = ze("borderLeftColor"), ha = ze("outline", Fe), ma = ze("outlineColor"), mr = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = Ft(e.theme, "shape.borderRadius", 4, "borderRadius"), r = (n) => ({
      borderRadius: zt(t, n)
    });
    return Ke(e, e.borderRadius, r);
  }
  return null;
};
mr.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: Ze
} : {};
mr.filterProps = ["borderRadius"];
hr(oa, ia, aa, sa, ca, la, ua, fa, da, pa, mr, ha, ma);
const gr = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Ft(e.theme, "spacing", 8, "gap"), r = (n) => ({
      gap: zt(t, n)
    });
    return Ke(e, e.gap, r);
  }
  return null;
};
gr.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: Ze
} : {};
gr.filterProps = ["gap"];
const yr = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Ft(e.theme, "spacing", 8, "columnGap"), r = (n) => ({
      columnGap: zt(t, n)
    });
    return Ke(e, e.columnGap, r);
  }
  return null;
};
yr.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: Ze
} : {};
yr.filterProps = ["columnGap"];
const br = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Ft(e.theme, "spacing", 8, "rowGap"), r = (n) => ({
      rowGap: zt(t, n)
    });
    return Ke(e, e.rowGap, r);
  }
  return null;
};
br.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: Ze
} : {};
br.filterProps = ["rowGap"];
const ga = ve({
  prop: "gridColumn"
}), ya = ve({
  prop: "gridRow"
}), ba = ve({
  prop: "gridAutoFlow"
}), va = ve({
  prop: "gridAutoColumns"
}), Sa = ve({
  prop: "gridAutoRows"
}), Ca = ve({
  prop: "gridTemplateColumns"
}), xa = ve({
  prop: "gridTemplateRows"
}), Ea = ve({
  prop: "gridTemplateAreas"
}), Ta = ve({
  prop: "gridArea"
});
hr(gr, yr, br, ga, ya, ba, va, Sa, Ca, xa, Ea, Ta);
function bt(e, t) {
  return t === "grey" ? t : e;
}
const wa = ve({
  prop: "color",
  themeKey: "palette",
  transform: bt
}), Ra = ve({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: bt
}), Oa = ve({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: bt
});
hr(wa, Ra, Oa);
function Ie(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const $a = ve({
  prop: "width",
  transform: Ie
}), rn = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (r) => {
      var o, i, a, s, f;
      const n = ((a = (i = (o = e.theme) == null ? void 0 : o.breakpoints) == null ? void 0 : i.values) == null ? void 0 : a[r]) || ur[r];
      return n ? ((f = (s = e.theme) == null ? void 0 : s.breakpoints) == null ? void 0 : f.unit) !== "px" ? {
        maxWidth: `${n}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: n
      } : {
        maxWidth: Ie(r)
      };
    };
    return Ke(e, e.maxWidth, t);
  }
  return null;
};
rn.filterProps = ["maxWidth"];
const ka = ve({
  prop: "minWidth",
  transform: Ie
}), _a = ve({
  prop: "height",
  transform: Ie
}), Pa = ve({
  prop: "maxHeight",
  transform: Ie
}), Aa = ve({
  prop: "minHeight",
  transform: Ie
});
ve({
  prop: "size",
  cssProperty: "width",
  transform: Ie
});
ve({
  prop: "size",
  cssProperty: "height",
  transform: Ie
});
const Ia = ve({
  prop: "boxSizing"
});
hr($a, rn, ka, _a, Pa, Aa, Ia);
const Vt = {
  // borders
  border: {
    themeKey: "borders",
    transform: Fe
  },
  borderTop: {
    themeKey: "borders",
    transform: Fe
  },
  borderRight: {
    themeKey: "borders",
    transform: Fe
  },
  borderBottom: {
    themeKey: "borders",
    transform: Fe
  },
  borderLeft: {
    themeKey: "borders",
    transform: Fe
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  outline: {
    themeKey: "borders",
    transform: Fe
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: mr
  },
  // palette
  color: {
    themeKey: "palette",
    transform: bt
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: bt
  },
  backgroundColor: {
    themeKey: "palette",
    transform: bt
  },
  // spacing
  p: {
    style: ge
  },
  pt: {
    style: ge
  },
  pr: {
    style: ge
  },
  pb: {
    style: ge
  },
  pl: {
    style: ge
  },
  px: {
    style: ge
  },
  py: {
    style: ge
  },
  padding: {
    style: ge
  },
  paddingTop: {
    style: ge
  },
  paddingRight: {
    style: ge
  },
  paddingBottom: {
    style: ge
  },
  paddingLeft: {
    style: ge
  },
  paddingX: {
    style: ge
  },
  paddingY: {
    style: ge
  },
  paddingInline: {
    style: ge
  },
  paddingInlineStart: {
    style: ge
  },
  paddingInlineEnd: {
    style: ge
  },
  paddingBlock: {
    style: ge
  },
  paddingBlockStart: {
    style: ge
  },
  paddingBlockEnd: {
    style: ge
  },
  m: {
    style: me
  },
  mt: {
    style: me
  },
  mr: {
    style: me
  },
  mb: {
    style: me
  },
  ml: {
    style: me
  },
  mx: {
    style: me
  },
  my: {
    style: me
  },
  margin: {
    style: me
  },
  marginTop: {
    style: me
  },
  marginRight: {
    style: me
  },
  marginBottom: {
    style: me
  },
  marginLeft: {
    style: me
  },
  marginX: {
    style: me
  },
  marginY: {
    style: me
  },
  marginInline: {
    style: me
  },
  marginInlineStart: {
    style: me
  },
  marginInlineEnd: {
    style: me
  },
  marginBlock: {
    style: me
  },
  marginBlockStart: {
    style: me
  },
  marginBlockEnd: {
    style: me
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({
      "@media print": {
        display: e
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: gr
  },
  rowGap: {
    style: br
  },
  columnGap: {
    style: yr
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: Ie
  },
  maxWidth: {
    style: rn
  },
  minWidth: {
    transform: Ie
  },
  height: {
    transform: Ie
  },
  maxHeight: {
    transform: Ie
  },
  minHeight: {
    transform: Ie
  },
  boxSizing: {},
  // typography
  font: {
    themeKey: "font"
  },
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
};
function Ma(...e) {
  const t = e.reduce((n, o) => n.concat(Object.keys(o)), []), r = new Set(t);
  return e.every((n) => r.size === Object.keys(n).length);
}
function Na(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function ja() {
  function e(r, n, o, i) {
    const a = {
      [r]: n,
      theme: o
    }, s = i[r];
    if (!s)
      return {
        [r]: n
      };
    const {
      cssProperty: f = r,
      themeKey: d,
      transform: p,
      style: h
    } = s;
    if (n == null)
      return null;
    if (d === "typography" && n === "inherit")
      return {
        [r]: n
      };
    const g = fr(o, d) || {};
    return h ? h(a) : Ke(a, n, (v) => {
      let y = or(g, p, v);
      return v === y && typeof v == "string" && (y = or(g, p, `${r}${v === "default" ? "" : pe(v)}`, v)), f === !1 ? y : {
        [f]: y
      };
    });
  }
  function t(r) {
    const {
      sx: n,
      theme: o = {}
    } = r || {};
    if (!n)
      return null;
    const i = o.unstable_sxConfig ?? Vt;
    function a(s) {
      let f = s;
      if (typeof s == "function")
        f = s(o);
      else if (typeof s != "object")
        return s;
      if (!f)
        return null;
      const d = Ki(o.breakpoints), p = Object.keys(d);
      let h = d;
      return Object.keys(f).forEach((g) => {
        const C = Na(f[g], o);
        if (C != null)
          if (typeof C == "object")
            if (i[g])
              h = It(h, e(g, C, o, i));
            else {
              const v = Ke({
                theme: o
              }, C, (y) => ({
                [g]: y
              }));
              Ma(v, C) ? h[g] = t({
                sx: C,
                theme: o
              }) : h = It(h, v);
            }
          else
            h = It(h, e(g, C, o, i));
      }), Ui(o, Xi(p, h));
    }
    return Array.isArray(n) ? n.map(a) : a(n);
  }
  return t;
}
const st = ja();
st.filterProps = ["sx"];
const Ba = (e) => {
  var n;
  const t = {
    systemProps: {},
    otherProps: {}
  }, r = ((n = e == null ? void 0 : e.theme) == null ? void 0 : n.unstable_sxConfig) ?? Vt;
  return Object.keys(e).forEach((o) => {
    r[o] ? t.systemProps[o] = e[o] : t.otherProps[o] = e[o];
  }), t;
};
function xo(e) {
  const {
    sx: t,
    ...r
  } = e, {
    systemProps: n,
    otherProps: o
  } = Ba(r);
  let i;
  return Array.isArray(t) ? i = [n, ...t] : typeof t == "function" ? i = (...a) => {
    const s = t(...a);
    return qe(s) ? {
      ...n,
      ...s
    } : n;
  } : i = {
    ...n,
    ...t
  }, {
    ...o,
    sx: i
  };
}
function ir() {
  return ir = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ir.apply(null, arguments);
}
function Eo(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var Da = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Fa = /* @__PURE__ */ Eo(
  function(e) {
    return Da.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), za = !1;
function Va(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function La(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var Wa = /* @__PURE__ */ function() {
  function e(r) {
    var n = this;
    this._insertTag = function(o) {
      var i;
      n.tags.length === 0 ? n.insertionPoint ? i = n.insertionPoint.nextSibling : n.prepend ? i = n.container.firstChild : i = n.before : i = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(o, i), n.tags.push(o);
    }, this.isSpeedy = r.speedy === void 0 ? !za : r.speedy, this.tags = [], this.ctr = 0, this.nonce = r.nonce, this.key = r.key, this.container = r.container, this.prepend = r.prepend, this.insertionPoint = r.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(n) {
    n.forEach(this._insertTag);
  }, t.insert = function(n) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(La(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = Va(o);
      try {
        i.insertRule(n, i.cssRules.length);
      } catch {
      }
    } else
      o.appendChild(document.createTextNode(n));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(n) {
      var o;
      return (o = n.parentNode) == null ? void 0 : o.removeChild(n);
    }), this.tags = [], this.ctr = 0;
  }, e;
}(), $e = "-ms-", ar = "-moz-", ee = "-webkit-", To = "comm", nn = "rule", on = "decl", Ua = "@import", wo = "@keyframes", Ya = "@layer", qa = Math.abs, vr = String.fromCharCode, Ga = Object.assign;
function Ha(e, t) {
  return Re(e, 0) ^ 45 ? (((t << 2 ^ Re(e, 0)) << 2 ^ Re(e, 1)) << 2 ^ Re(e, 2)) << 2 ^ Re(e, 3) : 0;
}
function Ro(e) {
  return e.trim();
}
function Ka(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function te(e, t, r) {
  return e.replace(t, r);
}
function Lr(e, t) {
  return e.indexOf(t);
}
function Re(e, t) {
  return e.charCodeAt(t) | 0;
}
function Mt(e, t, r) {
  return e.slice(t, r);
}
function Ue(e) {
  return e.length;
}
function an(e) {
  return e.length;
}
function Kt(e, t) {
  return t.push(e), e;
}
function Xa(e, t) {
  return e.map(t).join("");
}
var Sr = 1, St = 1, Oo = 0, Ae = 0, xe = 0, Et = "";
function Cr(e, t, r, n, o, i, a) {
  return { value: e, root: t, parent: r, type: n, props: o, children: i, line: Sr, column: St, length: a, return: "" };
}
function kt(e, t) {
  return Ga(Cr("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Ja() {
  return xe;
}
function Qa() {
  return xe = Ae > 0 ? Re(Et, --Ae) : 0, St--, xe === 10 && (St = 1, Sr--), xe;
}
function Ne() {
  return xe = Ae < Oo ? Re(Et, Ae++) : 0, St++, xe === 10 && (St = 1, Sr++), xe;
}
function Ge() {
  return Re(Et, Ae);
}
function Zt() {
  return Ae;
}
function Lt(e, t) {
  return Mt(Et, e, t);
}
function Nt(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function $o(e) {
  return Sr = St = 1, Oo = Ue(Et = e), Ae = 0, [];
}
function ko(e) {
  return Et = "", e;
}
function er(e) {
  return Ro(Lt(Ae - 1, Wr(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Za(e) {
  for (; (xe = Ge()) && xe < 33; )
    Ne();
  return Nt(e) > 2 || Nt(xe) > 3 ? "" : " ";
}
function es(e, t) {
  for (; --t && Ne() && !(xe < 48 || xe > 102 || xe > 57 && xe < 65 || xe > 70 && xe < 97); )
    ;
  return Lt(e, Zt() + (t < 6 && Ge() == 32 && Ne() == 32));
}
function Wr(e) {
  for (; Ne(); )
    switch (xe) {
      case e:
        return Ae;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Wr(xe);
        break;
      case 40:
        e === 41 && Wr(e);
        break;
      case 92:
        Ne();
        break;
    }
  return Ae;
}
function ts(e, t) {
  for (; Ne() && e + xe !== 57; )
    if (e + xe === 84 && Ge() === 47)
      break;
  return "/*" + Lt(t, Ae - 1) + "*" + vr(e === 47 ? e : Ne());
}
function rs(e) {
  for (; !Nt(Ge()); )
    Ne();
  return Lt(e, Ae);
}
function ns(e) {
  return ko(tr("", null, null, null, [""], e = $o(e), 0, [0], e));
}
function tr(e, t, r, n, o, i, a, s, f) {
  for (var d = 0, p = 0, h = a, g = 0, C = 0, v = 0, y = 1, m = 1, E = 1, O = 0, R = "", x = o, b = i, A = n, I = R; m; )
    switch (v = O, O = Ne()) {
      case 40:
        if (v != 108 && Re(I, h - 1) == 58) {
          Lr(I += te(er(O), "&", "&\f"), "&\f") != -1 && (E = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        I += er(O);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        I += Za(v);
        break;
      case 92:
        I += es(Zt() - 1, 7);
        continue;
      case 47:
        switch (Ge()) {
          case 42:
          case 47:
            Kt(os(ts(Ne(), Zt()), t, r), f);
            break;
          default:
            I += "/";
        }
        break;
      case 123 * y:
        s[d++] = Ue(I) * E;
      case 125 * y:
      case 59:
      case 0:
        switch (O) {
          case 0:
          case 125:
            m = 0;
          case 59 + p:
            E == -1 && (I = te(I, /\f/g, "")), C > 0 && Ue(I) - h && Kt(C > 32 ? Ln(I + ";", n, r, h - 1) : Ln(te(I, " ", "") + ";", n, r, h - 2), f);
            break;
          case 59:
            I += ";";
          default:
            if (Kt(A = Vn(I, t, r, d, p, o, s, R, x = [], b = [], h), i), O === 123)
              if (p === 0)
                tr(I, t, A, A, x, i, h, s, b);
              else
                switch (g === 99 && Re(I, 3) === 110 ? 100 : g) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    tr(e, A, A, n && Kt(Vn(e, A, A, 0, 0, o, s, R, o, x = [], h), b), o, b, h, s, n ? x : b);
                    break;
                  default:
                    tr(I, A, A, A, [""], b, 0, s, b);
                }
        }
        d = p = C = 0, y = E = 1, R = I = "", h = a;
        break;
      case 58:
        h = 1 + Ue(I), C = v;
      default:
        if (y < 1) {
          if (O == 123)
            --y;
          else if (O == 125 && y++ == 0 && Qa() == 125)
            continue;
        }
        switch (I += vr(O), O * y) {
          case 38:
            E = p > 0 ? 1 : (I += "\f", -1);
            break;
          case 44:
            s[d++] = (Ue(I) - 1) * E, E = 1;
            break;
          case 64:
            Ge() === 45 && (I += er(Ne())), g = Ge(), p = h = Ue(R = I += rs(Zt())), O++;
            break;
          case 45:
            v === 45 && Ue(I) == 2 && (y = 0);
        }
    }
  return i;
}
function Vn(e, t, r, n, o, i, a, s, f, d, p) {
  for (var h = o - 1, g = o === 0 ? i : [""], C = an(g), v = 0, y = 0, m = 0; v < n; ++v)
    for (var E = 0, O = Mt(e, h + 1, h = qa(y = a[v])), R = e; E < C; ++E)
      (R = Ro(y > 0 ? g[E] + " " + O : te(O, /&\f/g, g[E]))) && (f[m++] = R);
  return Cr(e, t, r, o === 0 ? nn : s, f, d, p);
}
function os(e, t, r) {
  return Cr(e, t, r, To, vr(Ja()), Mt(e, 2, -2), 0);
}
function Ln(e, t, r, n) {
  return Cr(e, t, r, on, Mt(e, 0, n), Mt(e, n + 1, -1), n);
}
function vt(e, t) {
  for (var r = "", n = an(e), o = 0; o < n; o++)
    r += t(e[o], o, e, t) || "";
  return r;
}
function is(e, t, r, n) {
  switch (e.type) {
    case Ya:
      if (e.children.length) break;
    case Ua:
    case on:
      return e.return = e.return || e.value;
    case To:
      return "";
    case wo:
      return e.return = e.value + "{" + vt(e.children, n) + "}";
    case nn:
      e.value = e.props.join(",");
  }
  return Ue(r = vt(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function as(e) {
  var t = an(e);
  return function(r, n, o, i) {
    for (var a = "", s = 0; s < t; s++)
      a += e[s](r, n, o, i) || "";
    return a;
  };
}
function ss(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
var cs = function(t, r, n) {
  for (var o = 0, i = 0; o = i, i = Ge(), o === 38 && i === 12 && (r[n] = 1), !Nt(i); )
    Ne();
  return Lt(t, Ae);
}, ls = function(t, r) {
  var n = -1, o = 44;
  do
    switch (Nt(o)) {
      case 0:
        o === 38 && Ge() === 12 && (r[n] = 1), t[n] += cs(Ae - 1, r, n);
        break;
      case 2:
        t[n] += er(o);
        break;
      case 4:
        if (o === 44) {
          t[++n] = Ge() === 58 ? "&\f" : "", r[n] = t[n].length;
          break;
        }
      default:
        t[n] += vr(o);
    }
  while (o = Ne());
  return t;
}, us = function(t, r) {
  return ko(ls($o(t), r));
}, Wn = /* @__PURE__ */ new WeakMap(), fs = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var r = t.value, n = t.parent, o = t.column === n.column && t.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n) return;
    if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !Wn.get(n)) && !o) {
      Wn.set(t, !0);
      for (var i = [], a = us(r, i), s = n.props, f = 0, d = 0; f < a.length; f++)
        for (var p = 0; p < s.length; p++, d++)
          t.props[d] = i[f] ? a[f].replace(/&\f/g, s[p]) : s[p] + " " + a[f];
    }
  }
}, ds = function(t) {
  if (t.type === "decl") {
    var r = t.value;
    // charcode for l
    r.charCodeAt(0) === 108 && // charcode for b
    r.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function _o(e, t) {
  switch (Ha(e, t)) {
    case 5103:
      return ee + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return ee + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return ee + e + ar + e + $e + e + e;
    case 6828:
    case 4268:
      return ee + e + $e + e + e;
    case 6165:
      return ee + e + $e + "flex-" + e + e;
    case 5187:
      return ee + e + te(e, /(\w+).+(:[^]+)/, ee + "box-$1$2" + $e + "flex-$1$2") + e;
    case 5443:
      return ee + e + $e + "flex-item-" + te(e, /flex-|-self/, "") + e;
    case 4675:
      return ee + e + $e + "flex-line-pack" + te(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return ee + e + $e + te(e, "shrink", "negative") + e;
    case 5292:
      return ee + e + $e + te(e, "basis", "preferred-size") + e;
    case 6060:
      return ee + "box-" + te(e, "-grow", "") + ee + e + $e + te(e, "grow", "positive") + e;
    case 4554:
      return ee + te(e, /([^-])(transform)/g, "$1" + ee + "$2") + e;
    case 6187:
      return te(te(te(e, /(zoom-|grab)/, ee + "$1"), /(image-set)/, ee + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return te(e, /(image-set\([^]*)/, ee + "$1$`$1");
    case 4968:
      return te(te(e, /(.+:)(flex-)?(.*)/, ee + "box-pack:$3" + $e + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + ee + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return te(e, /(.+)-inline(.+)/, ee + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Ue(e) - 1 - t > 6) switch (Re(e, t + 1)) {
        case 109:
          if (Re(e, t + 4) !== 45) break;
        case 102:
          return te(e, /(.+:)(.+)-([^]+)/, "$1" + ee + "$2-$3$1" + ar + (Re(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
        case 115:
          return ~Lr(e, "stretch") ? _o(te(e, "stretch", "fill-available"), t) + e : e;
      }
      break;
    case 4949:
      if (Re(e, t + 1) !== 115) break;
    case 6444:
      switch (Re(e, Ue(e) - 3 - (~Lr(e, "!important") && 10))) {
        case 107:
          return te(e, ":", ":" + ee) + e;
        case 101:
          return te(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + ee + (Re(e, 14) === 45 ? "inline-" : "") + "box$3$1" + ee + "$2$3$1" + $e + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (Re(e, t + 11)) {
        case 114:
          return ee + e + $e + te(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return ee + e + $e + te(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return ee + e + $e + te(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return ee + e + $e + e + e;
  }
  return e;
}
var ps = function(t, r, n, o) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case on:
      t.return = _o(t.value, t.length);
      break;
    case wo:
      return vt([kt(t, {
        value: te(t.value, "@", "@" + ee)
      })], o);
    case nn:
      if (t.length) return Xa(t.props, function(i) {
        switch (Ka(i, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return vt([kt(t, {
              props: [te(i, /:(read-\w+)/, ":" + ar + "$1")]
            })], o);
          case "::placeholder":
            return vt([kt(t, {
              props: [te(i, /:(plac\w+)/, ":" + ee + "input-$1")]
            }), kt(t, {
              props: [te(i, /:(plac\w+)/, ":" + ar + "$1")]
            }), kt(t, {
              props: [te(i, /:(plac\w+)/, $e + "input-$1")]
            })], o);
        }
        return "";
      });
  }
}, hs = [ps], ms = function(t) {
  var r = t.key;
  if (r === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(y) {
      var m = y.getAttribute("data-emotion");
      m.indexOf(" ") !== -1 && (document.head.appendChild(y), y.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || hs, i = {}, a, s = [];
  a = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
    function(y) {
      for (var m = y.getAttribute("data-emotion").split(" "), E = 1; E < m.length; E++)
        i[m[E]] = !0;
      s.push(y);
    }
  );
  var f, d = [fs, ds];
  {
    var p, h = [is, ss(function(y) {
      p.insert(y);
    })], g = as(d.concat(o, h)), C = function(m) {
      return vt(ns(m), g);
    };
    f = function(m, E, O, R) {
      p = O, C(m ? m + "{" + E.styles + "}" : E.styles), R && (v.inserted[E.name] = !0);
    };
  }
  var v = {
    key: r,
    sheet: new Wa({
      key: r,
      container: a,
      nonce: t.nonce,
      speedy: t.speedy,
      prepend: t.prepend,
      insertionPoint: t.insertionPoint
    }),
    nonce: t.nonce,
    inserted: i,
    registered: {},
    insert: f
  };
  return v.sheet.hydrate(s), v;
}, Po = Xr(), gs = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, ys = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Ao = {};
Ao[Po.ForwardRef] = gs;
Ao[Po.Memo] = ys;
var bs = !0;
function vs(e, t, r) {
  var n = "";
  return r.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : o && (n += o + " ");
  }), n;
}
var Io = function(t, r, n) {
  var o = t.key + "-" + r.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (n === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  bs === !1) && t.registered[o] === void 0 && (t.registered[o] = r.styles);
}, Ss = function(t, r, n) {
  Io(t, r, n);
  var o = t.key + "-" + r.name;
  if (t.inserted[r.name] === void 0) {
    var i = r;
    do
      t.insert(r === i ? "." + o : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function Cs(e) {
  for (var t = 0, r, n = 0, o = e.length; o >= 4; ++n, o -= 4)
    r = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, r = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= /* k >>> r: */
    r >>> 24, t = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(n) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var xs = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, Es = !1, Ts = /[A-Z]|^ms/g, ws = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Mo = function(t) {
  return t.charCodeAt(1) === 45;
}, Un = function(t) {
  return t != null && typeof t != "boolean";
}, Mr = /* @__PURE__ */ Eo(function(e) {
  return Mo(e) ? e : e.replace(Ts, "-$&").toLowerCase();
}), Yn = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(ws, function(n, o, i) {
          return Ye = {
            name: o,
            styles: i,
            next: Ye
          }, o;
        });
  }
  return xs[t] !== 1 && !Mo(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
}, Rs = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function jt(e, t, r) {
  if (r == null)
    return "";
  var n = r;
  if (n.__emotion_styles !== void 0)
    return n;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      var o = r;
      if (o.anim === 1)
        return Ye = {
          name: o.name,
          styles: o.styles,
          next: Ye
        }, o.name;
      var i = r;
      if (i.styles !== void 0) {
        var a = i.next;
        if (a !== void 0)
          for (; a !== void 0; )
            Ye = {
              name: a.name,
              styles: a.styles,
              next: Ye
            }, a = a.next;
        var s = i.styles + ";";
        return s;
      }
      return Os(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var f = Ye, d = r(e);
        return Ye = f, jt(e, t, d);
      }
      break;
    }
  }
  var p = r;
  if (t == null)
    return p;
  var h = t[p];
  return h !== void 0 ? h : p;
}
function Os(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++)
      n += jt(e, t, r[o]) + ";";
  else
    for (var i in r) {
      var a = r[i];
      if (typeof a != "object") {
        var s = a;
        t != null && t[s] !== void 0 ? n += i + "{" + t[s] + "}" : Un(s) && (n += Mr(i) + ":" + Yn(i, s) + ";");
      } else {
        if (i === "NO_COMPONENT_SELECTOR" && Es)
          throw new Error(Rs);
        if (Array.isArray(a) && typeof a[0] == "string" && (t == null || t[a[0]] === void 0))
          for (var f = 0; f < a.length; f++)
            Un(a[f]) && (n += Mr(i) + ":" + Yn(i, a[f]) + ";");
        else {
          var d = jt(e, t, a);
          switch (i) {
            case "animation":
            case "animationName": {
              n += Mr(i) + ":" + d + ";";
              break;
            }
            default:
              n += i + "{" + d + "}";
          }
        }
      }
    }
  return n;
}
var qn = /label:\s*([^\s;{]+)\s*(;|$)/g, Ye;
function sn(e, t, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0, o = "";
  Ye = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0)
    n = !1, o += jt(r, t, i);
  else {
    var a = i;
    o += a[0];
  }
  for (var s = 1; s < e.length; s++)
    if (o += jt(r, t, e[s]), n) {
      var f = i;
      o += f[s];
    }
  qn.lastIndex = 0;
  for (var d = "", p; (p = qn.exec(o)) !== null; )
    d += "-" + p[1];
  var h = Cs(o) + d;
  return {
    name: h,
    styles: o,
    next: Ye
  };
}
var $s = function(t) {
  return t();
}, ks = N.useInsertionEffect ? N.useInsertionEffect : !1, _s = ks || $s, No = /* @__PURE__ */ N.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ ms({
    key: "css"
  }) : null
);
No.Provider;
var Ps = function(t) {
  return /* @__PURE__ */ Ti(function(r, n) {
    var o = wi(No);
    return t(r, o, n);
  });
}, jo = /* @__PURE__ */ N.createContext({});
function As() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return sn(t);
}
var cn = function() {
  var t = As.apply(void 0, arguments), r = "animation-" + t.name;
  return {
    name: r,
    styles: "@keyframes " + r + "{" + t.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, Is = Fa, Ms = function(t) {
  return t !== "theme";
}, Gn = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? Is : Ms;
}, Hn = function(t, r, n) {
  var o;
  if (r) {
    var i = r.shouldForwardProp;
    o = t.__emotion_forwardProp && i ? function(a) {
      return t.__emotion_forwardProp(a) && i(a);
    } : i;
  }
  return typeof o != "function" && n && (o = t.__emotion_forwardProp), o;
}, Ns = !1, js = function(t) {
  var r = t.cache, n = t.serialized, o = t.isStringTag;
  return Io(r, n, o), _s(function() {
    return Ss(r, n, o);
  }), null;
}, Bs = function e(t, r) {
  var n = t.__emotion_real === t, o = n && t.__emotion_base || t, i, a;
  r !== void 0 && (i = r.label, a = r.target);
  var s = Hn(t, r, n), f = s || Gn(o), d = !f("as");
  return function() {
    var p = arguments, h = n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && h.push("label:" + i + ";"), p[0] == null || p[0].raw === void 0)
      h.push.apply(h, p);
    else {
      h.push(p[0][0]);
      for (var g = p.length, C = 1; C < g; C++)
        h.push(p[C], p[0][C]);
    }
    var v = Ps(function(y, m, E) {
      var O = d && y.as || o, R = "", x = [], b = y;
      if (y.theme == null) {
        b = {};
        for (var A in y)
          b[A] = y[A];
        b.theme = N.useContext(jo);
      }
      typeof y.className == "string" ? R = vs(m.registered, x, y.className) : y.className != null && (R = y.className + " ");
      var I = sn(h.concat(x), m.registered, b);
      R += m.key + "-" + I.name, a !== void 0 && (R += " " + a);
      var Z = d && s === void 0 ? Gn(O) : f, J = {};
      for (var c in y)
        d && c === "as" || Z(c) && (J[c] = y[c]);
      return J.className = R, E && (J.ref = E), /* @__PURE__ */ N.createElement(N.Fragment, null, /* @__PURE__ */ N.createElement(js, {
        cache: m,
        serialized: I,
        isStringTag: typeof O == "string"
      }), /* @__PURE__ */ N.createElement(O, J));
    });
    return v.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", v.defaultProps = t.defaultProps, v.__emotion_real = v, v.__emotion_base = o, v.__emotion_styles = h, v.__emotion_forwardProp = s, Object.defineProperty(v, "toString", {
      value: function() {
        return a === void 0 && Ns ? "NO_COMPONENT_SELECTOR" : "." + a;
      }
    }), v.withComponent = function(y, m) {
      return e(y, ir({}, r, m, {
        shouldForwardProp: Hn(v, m, !0)
      })).apply(void 0, h);
    }, v;
  };
}, Ds = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], Ur = Bs.bind();
Ds.forEach(function(e) {
  Ur[e] = Ur(e);
});
/**
 * @mui/styled-engine v6.1.3
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function Bo(e, t) {
  const r = Ur(e, t);
  return process.env.NODE_ENV !== "production" ? (...n) => {
    const o = typeof e == "string" ? `"${e}"` : "component";
    return n.length === 0 ? console.error([`MUI: Seems like you called \`styled(${o})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : n.some((i) => i === void 0) && console.error(`MUI: the styled(${o})(...args) API requires all its args to be defined.`), r(...n);
  } : r;
}
function Fs(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const Kn = [];
function Xn(e) {
  return Kn[0] = e, sn(Kn);
}
const zs = (e) => {
  const t = Object.keys(e).map((r) => ({
    key: r,
    val: e[r]
  })) || [];
  return t.sort((r, n) => r.val - n.val), t.reduce((r, n) => ({
    ...r,
    [n.key]: n.val
  }), {});
};
function Vs(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: t = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: r = "px",
    step: n = 5,
    ...o
  } = e, i = zs(t), a = Object.keys(i);
  function s(g) {
    return `@media (min-width:${typeof t[g] == "number" ? t[g] : g}${r})`;
  }
  function f(g) {
    return `@media (max-width:${(typeof t[g] == "number" ? t[g] : g) - n / 100}${r})`;
  }
  function d(g, C) {
    const v = a.indexOf(C);
    return `@media (min-width:${typeof t[g] == "number" ? t[g] : g}${r}) and (max-width:${(v !== -1 && typeof t[a[v]] == "number" ? t[a[v]] : C) - n / 100}${r})`;
  }
  function p(g) {
    return a.indexOf(g) + 1 < a.length ? d(g, a[a.indexOf(g) + 1]) : s(g);
  }
  function h(g) {
    const C = a.indexOf(g);
    return C === 0 ? s(a[1]) : C === a.length - 1 ? f(a[C]) : d(g, a[a.indexOf(g) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: a,
    values: i,
    up: s,
    down: f,
    between: d,
    only: p,
    not: h,
    unit: r,
    ...o
  };
}
const Ls = {
  borderRadius: 4
};
function Do(e = 8, t = tn({
  spacing: e
})) {
  if (e.mui)
    return e;
  const r = (...n) => (process.env.NODE_ENV !== "production" && (n.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${n.length}`)), (n.length === 0 ? [1] : n).map((i) => {
    const a = t(i);
    return typeof a == "number" ? `${a}px` : a;
  }).join(" "));
  return r.mui = !0, r;
}
function Ws(e, t) {
  var n;
  const r = this;
  if (r.vars) {
    if (!((n = r.colorSchemes) != null && n[e]) || typeof r.getColorSchemeSelector != "function")
      return {};
    let o = r.getColorSchemeSelector(e);
    return o === "&" ? t : ((o.includes("data-") || o.includes(".")) && (o = `*:where(${o.replace(/\s*&$/, "")}) &`), {
      [o]: t
    });
  }
  return r.palette.mode === e ? t : {};
}
function ln(e = {}, ...t) {
  const {
    breakpoints: r = {},
    palette: n = {},
    spacing: o,
    shape: i = {},
    ...a
  } = e, s = Vs(r), f = Do(o);
  let d = Me({
    breakpoints: s,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: {
      mode: "light",
      ...n
    },
    spacing: f,
    shape: {
      ...Ls,
      ...i
    }
  }, a);
  return d = Gi(d), d.applyStyles = Ws, d = t.reduce((p, h) => Me(p, h), d), d.unstable_sxConfig = {
    ...Vt,
    ...a == null ? void 0 : a.unstable_sxConfig
  }, d.unstable_sx = function(h) {
    return st({
      sx: h,
      theme: this
    });
  }, d;
}
function Us(e) {
  return Object.keys(e).length === 0;
}
function Ys(e = null) {
  const t = N.useContext(jo);
  return !t || Us(t) ? e : t;
}
const qs = ln();
function Gs(e = qs) {
  return Ys(e);
}
const Jn = (e) => e, Hs = () => {
  let e = Jn;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = Jn;
    }
  };
}, Fo = Hs();
function Ks(e = {}) {
  const {
    themeId: t,
    defaultTheme: r,
    defaultClassName: n = "MuiBox-root",
    generateClassName: o
  } = e, i = Bo("div", {
    shouldForwardProp: (s) => s !== "theme" && s !== "sx" && s !== "as"
  })(st);
  return /* @__PURE__ */ N.forwardRef(function(f, d) {
    const p = Gs(r), {
      className: h,
      component: g = "div",
      ...C
    } = xo(f);
    return /* @__PURE__ */ re.jsx(i, {
      as: g,
      ref: d,
      className: we(h, o ? o(n) : n),
      theme: t && p[t] || p,
      ...C
    });
  });
}
const Xs = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function et(e, t, r = "Mui") {
  const n = Xs[t];
  return n ? `${r}-${n}` : `${Fo.generate(e)}-${t}`;
}
function tt(e, t, r = "Mui") {
  const n = {};
  return t.forEach((o) => {
    n[o] = et(e, o, r);
  }), n;
}
var Yr = { exports: {} }, ae = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qn;
function Js() {
  if (Qn) return ae;
  Qn = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), f = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), C = Symbol.for("react.offscreen"), v;
  v = Symbol.for("react.module.reference");
  function y(m) {
    if (typeof m == "object" && m !== null) {
      var E = m.$$typeof;
      switch (E) {
        case e:
          switch (m = m.type, m) {
            case r:
            case o:
            case n:
            case d:
            case p:
              return m;
            default:
              switch (m = m && m.$$typeof, m) {
                case s:
                case a:
                case f:
                case g:
                case h:
                case i:
                  return m;
                default:
                  return E;
              }
          }
        case t:
          return E;
      }
    }
  }
  return ae.ContextConsumer = a, ae.ContextProvider = i, ae.Element = e, ae.ForwardRef = f, ae.Fragment = r, ae.Lazy = g, ae.Memo = h, ae.Portal = t, ae.Profiler = o, ae.StrictMode = n, ae.Suspense = d, ae.SuspenseList = p, ae.isAsyncMode = function() {
    return !1;
  }, ae.isConcurrentMode = function() {
    return !1;
  }, ae.isContextConsumer = function(m) {
    return y(m) === a;
  }, ae.isContextProvider = function(m) {
    return y(m) === i;
  }, ae.isElement = function(m) {
    return typeof m == "object" && m !== null && m.$$typeof === e;
  }, ae.isForwardRef = function(m) {
    return y(m) === f;
  }, ae.isFragment = function(m) {
    return y(m) === r;
  }, ae.isLazy = function(m) {
    return y(m) === g;
  }, ae.isMemo = function(m) {
    return y(m) === h;
  }, ae.isPortal = function(m) {
    return y(m) === t;
  }, ae.isProfiler = function(m) {
    return y(m) === o;
  }, ae.isStrictMode = function(m) {
    return y(m) === n;
  }, ae.isSuspense = function(m) {
    return y(m) === d;
  }, ae.isSuspenseList = function(m) {
    return y(m) === p;
  }, ae.isValidElementType = function(m) {
    return typeof m == "string" || typeof m == "function" || m === r || m === o || m === n || m === d || m === p || m === C || typeof m == "object" && m !== null && (m.$$typeof === g || m.$$typeof === h || m.$$typeof === i || m.$$typeof === a || m.$$typeof === f || m.$$typeof === v || m.getModuleId !== void 0);
  }, ae.typeOf = y, ae;
}
var se = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zn;
function Qs() {
  return Zn || (Zn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), f = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), C = Symbol.for("react.offscreen"), v = !1, y = !1, m = !1, E = !1, O = !1, R;
    R = Symbol.for("react.module.reference");
    function x(M) {
      return !!(typeof M == "string" || typeof M == "function" || M === r || M === o || O || M === n || M === d || M === p || E || M === C || v || y || m || typeof M == "object" && M !== null && (M.$$typeof === g || M.$$typeof === h || M.$$typeof === i || M.$$typeof === a || M.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      M.$$typeof === R || M.getModuleId !== void 0));
    }
    function b(M) {
      if (typeof M == "object" && M !== null) {
        var ke = M.$$typeof;
        switch (ke) {
          case e:
            var je = M.type;
            switch (je) {
              case r:
              case o:
              case n:
              case d:
              case p:
                return je;
              default:
                var rt = je && je.$$typeof;
                switch (rt) {
                  case s:
                  case a:
                  case f:
                  case g:
                  case h:
                  case i:
                    return rt;
                  default:
                    return ke;
                }
            }
          case t:
            return ke;
        }
      }
    }
    var A = a, I = i, Z = e, J = f, c = r, _ = g, j = h, D = t, Y = o, le = n, ce = d, ye = p, Ee = !1, Te = !1;
    function w(M) {
      return Ee || (Ee = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function $(M) {
      return Te || (Te = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function z(M) {
      return b(M) === a;
    }
    function W(M) {
      return b(M) === i;
    }
    function B(M) {
      return typeof M == "object" && M !== null && M.$$typeof === e;
    }
    function H(M) {
      return b(M) === f;
    }
    function V(M) {
      return b(M) === r;
    }
    function L(M) {
      return b(M) === g;
    }
    function q(M) {
      return b(M) === h;
    }
    function K(M) {
      return b(M) === t;
    }
    function G(M) {
      return b(M) === o;
    }
    function Se(M) {
      return b(M) === n;
    }
    function k(M) {
      return b(M) === d;
    }
    function Oe(M) {
      return b(M) === p;
    }
    se.ContextConsumer = A, se.ContextProvider = I, se.Element = Z, se.ForwardRef = J, se.Fragment = c, se.Lazy = _, se.Memo = j, se.Portal = D, se.Profiler = Y, se.StrictMode = le, se.Suspense = ce, se.SuspenseList = ye, se.isAsyncMode = w, se.isConcurrentMode = $, se.isContextConsumer = z, se.isContextProvider = W, se.isElement = B, se.isForwardRef = H, se.isFragment = V, se.isLazy = L, se.isMemo = q, se.isPortal = K, se.isProfiler = G, se.isStrictMode = Se, se.isSuspense = k, se.isSuspenseList = Oe, se.isValidElementType = x, se.typeOf = b;
  }()), se;
}
process.env.NODE_ENV === "production" ? Yr.exports = Js() : Yr.exports = Qs();
var eo = Yr.exports;
function zo(e, t = "") {
  return e.displayName || e.name || t;
}
function to(e, t, r) {
  const n = zo(t);
  return e.displayName || (n !== "" ? `${r}(${n})` : r);
}
function Zs(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return zo(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case eo.ForwardRef:
          return to(e, e.render, "ForwardRef");
        case eo.Memo:
          return to(e, e.type, "memo");
        default:
          return;
      }
  }
}
function Vo(e) {
  const {
    variants: t,
    ...r
  } = e, n = {
    variants: t,
    style: Xn(r),
    isProcessed: !0
  };
  return n.style === r || t && t.forEach((o) => {
    typeof o.style != "function" && (o.style = Xn(o.style));
  }), n;
}
const ec = ln();
function Nr(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function tc(e) {
  return e ? (t, r) => r[e] : null;
}
function rc(e, t, r) {
  e.theme = ac(e.theme) ? r : e.theme[t] || e.theme;
}
function rr(e, t) {
  const r = typeof t == "function" ? t(e) : t;
  if (Array.isArray(r))
    return r.flatMap((n) => rr(e, n));
  if (Array.isArray(r == null ? void 0 : r.variants)) {
    let n;
    if (r.isProcessed)
      n = r.style;
    else {
      const {
        variants: o,
        ...i
      } = r;
      n = i;
    }
    return Lo(e, r.variants, [n]);
  }
  return r != null && r.isProcessed ? r.style : r;
}
function Lo(e, t, r = []) {
  var o;
  let n;
  e: for (let i = 0; i < t.length; i += 1) {
    const a = t[i];
    if (typeof a.props == "function") {
      if (n ?? (n = {
        ...e,
        ...e.ownerState,
        ownerState: e.ownerState
      }), !a.props(n))
        continue;
    } else
      for (const s in a.props)
        if (e[s] !== a.props[s] && ((o = e.ownerState) == null ? void 0 : o[s]) !== a.props[s])
          continue e;
    typeof a.style == "function" ? (n ?? (n = {
      ...e,
      ...e.ownerState,
      ownerState: e.ownerState
    }), r.push(a.style(n))) : r.push(a.style);
  }
  return r;
}
function nc(e = {}) {
  const {
    themeId: t,
    defaultTheme: r = ec,
    rootShouldForwardProp: n = Nr,
    slotShouldForwardProp: o = Nr
  } = e;
  function i(s) {
    rc(s, t, r);
  }
  return (s, f = {}) => {
    Fs(s, (b) => b.filter((A) => A !== st));
    const {
      name: d,
      slot: p,
      skipVariantsResolver: h,
      skipSx: g,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: C = tc(Wo(p)),
      ...v
    } = f, y = h !== void 0 ? h : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      p && p !== "Root" && p !== "root" || !1
    ), m = g || !1;
    let E = Nr;
    p === "Root" || p === "root" ? E = n : p ? E = o : sc(s) && (E = void 0);
    const O = Bo(s, {
      shouldForwardProp: E,
      label: ic(d, p),
      ...v
    }), R = (b) => {
      if (typeof b == "function" && b.__emotion_real !== b)
        return function(I) {
          return rr(I, b);
        };
      if (qe(b)) {
        const A = Vo(b);
        return A.variants ? function(Z) {
          return rr(Z, A);
        } : A.style;
      }
      return b;
    }, x = (...b) => {
      const A = [], I = b.map(R), Z = [];
      if (A.push(i), d && C && Z.push(function(j) {
        var ce, ye;
        const Y = (ye = (ce = j.theme.components) == null ? void 0 : ce[d]) == null ? void 0 : ye.styleOverrides;
        if (!Y)
          return null;
        const le = {};
        for (const Ee in Y)
          le[Ee] = rr(j, Y[Ee]);
        return C(j, le);
      }), d && !y && Z.push(function(j) {
        var le, ce;
        const D = j.theme, Y = (ce = (le = D == null ? void 0 : D.components) == null ? void 0 : le[d]) == null ? void 0 : ce.variants;
        return Y ? Lo(j, Y) : null;
      }), m || Z.push(st), Array.isArray(I[0])) {
        const _ = I.shift(), j = new Array(A.length).fill(""), D = new Array(Z.length).fill("");
        let Y;
        Y = [...j, ..._, ...D], Y.raw = [...j, ..._.raw, ...D], A.unshift(Y);
      }
      const J = [...A, ...I, ...Z], c = O(...J);
      return s.muiName && (c.muiName = s.muiName), process.env.NODE_ENV !== "production" && (c.displayName = oc(d, p, s)), c;
    };
    return O.withConfig && (x.withConfig = O.withConfig), x;
  };
}
function oc(e, t, r) {
  return e ? `${e}${pe(t || "")}` : `Styled(${Zs(r)})`;
}
function ic(e, t) {
  let r;
  return process.env.NODE_ENV !== "production" && e && (r = `${e}-${Wo(t || "Root")}`), r;
}
function ac(e) {
  for (const t in e)
    return !1;
  return !0;
}
function sc(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function Wo(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
const cc = typeof window < "u" ? N.useLayoutEffect : N.useEffect;
function Uo(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...n) {
    return e(...n) || t(...n);
  };
}
function lc(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function uc(e, t, r, n, o) {
  const i = e[t], a = o || t;
  if (i == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let s;
  return typeof i == "function" && !lc(i) && (s = "Did you accidentally provide a plain function component instead?"), s !== void 0 ? new Error(`Invalid ${n} \`${a}\` supplied to \`${r}\`. Expected an element type that can hold a ref. ${s} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const fc = Uo(u.elementType, uc), dc = u.oneOfType([u.func, u.object]);
function pc(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
function Xt(e) {
  const t = N.useRef(e);
  return cc(() => {
    t.current = e;
  }), N.useRef((...r) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...r)
  )).current;
}
function qr(...e) {
  return N.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((r) => {
      pc(r, t);
    });
  }, e);
}
const ro = {};
function Yo(e, t) {
  const r = N.useRef(ro);
  return r.current === ro && (r.current = e(t)), r;
}
const hc = [];
function mc(e) {
  N.useEffect(e, hc);
}
class un {
  constructor() {
    Rt(this, "currentId", null);
    Rt(this, "clear", () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    });
    Rt(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new un();
  }
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(t, r) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = null, r();
    }, t);
  }
}
function gc() {
  const e = Yo(un.create).current;
  return mc(e.disposeEffect), e;
}
function no(e) {
  try {
    return e.matches(":focus-visible");
  } catch {
    process.env.NODE_ENV !== "production" && !/jsdom/.test(window.navigator.userAgent) && console.warn(["MUI: The `:focus-visible` pseudo class is not supported in this browser.", "Some components rely on this feature to work properly."].join(`
`));
  }
  return !1;
}
function yc(e) {
  return typeof e == "string";
}
function bc(e, t, r) {
  return e === void 0 || yc(e) ? t : {
    ...t,
    ownerState: {
      ...t.ownerState,
      ...r
    }
  };
}
function vc(e, t = []) {
  if (e === void 0)
    return {};
  const r = {};
  return Object.keys(e).filter((n) => n.match(/^on[A-Z]/) && typeof e[n] == "function" && !t.includes(n)).forEach((n) => {
    r[n] = e[n];
  }), r;
}
function oo(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((r) => !(r.match(/^on[A-Z]/) && typeof e[r] == "function")).forEach((r) => {
    t[r] = e[r];
  }), t;
}
function Sc(e) {
  const {
    getSlotProps: t,
    additionalProps: r,
    externalSlotProps: n,
    externalForwardedProps: o,
    className: i
  } = e;
  if (!t) {
    const C = we(r == null ? void 0 : r.className, i, o == null ? void 0 : o.className, n == null ? void 0 : n.className), v = {
      ...r == null ? void 0 : r.style,
      ...o == null ? void 0 : o.style,
      ...n == null ? void 0 : n.style
    }, y = {
      ...r,
      ...o,
      ...n
    };
    return C.length > 0 && (y.className = C), Object.keys(v).length > 0 && (y.style = v), {
      props: y,
      internalRef: void 0
    };
  }
  const a = vc({
    ...o,
    ...n
  }), s = oo(n), f = oo(o), d = t(a), p = we(d == null ? void 0 : d.className, r == null ? void 0 : r.className, i, o == null ? void 0 : o.className, n == null ? void 0 : n.className), h = {
    ...d == null ? void 0 : d.style,
    ...r == null ? void 0 : r.style,
    ...o == null ? void 0 : o.style,
    ...n == null ? void 0 : n.style
  }, g = {
    ...d,
    ...r,
    ...f,
    ...s
  };
  return p.length > 0 && (g.className = p), Object.keys(h).length > 0 && (g.style = h), {
    props: g,
    internalRef: d.ref
  };
}
function Cc(e, t, r) {
  return typeof e == "function" ? e(t, r) : e;
}
const xc = /* @__PURE__ */ N.createContext(void 0);
process.env.NODE_ENV !== "production" && (u.node, u.object);
function Ec(e) {
  const {
    theme: t,
    name: r,
    props: n
  } = e;
  if (!t || !t.components || !t.components[r])
    return n;
  const o = t.components[r];
  return o.defaultProps ? nr(o.defaultProps, n) : !o.styleOverrides && !o.variants ? nr(o, n) : n;
}
function Tc({
  props: e,
  name: t
}) {
  const r = N.useContext(xc);
  return Ec({
    props: e,
    name: t,
    theme: {
      components: r
    }
  });
}
const io = {
  theme: void 0
};
function wc(e) {
  let t, r;
  return function(o) {
    let i = t;
    return (i === void 0 || o.theme !== r) && (io.theme = o.theme, i = Vo(e(io)), t = i, r = o.theme), i;
  };
}
function Rc(e = "") {
  function t(...n) {
    if (!n.length)
      return "";
    const o = n[0];
    return typeof o == "string" && !o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${o}${t(...n.slice(1))})` : `, ${o}`;
  }
  return (n, ...o) => `var(--${e ? `${e}-` : ""}${n}${t(...o)})`;
}
const ao = (e, t, r, n = []) => {
  let o = e;
  t.forEach((i, a) => {
    a === t.length - 1 ? Array.isArray(o) ? o[Number(i)] = r : o && typeof o == "object" && (o[i] = r) : o && typeof o == "object" && (o[i] || (o[i] = n.includes(i) ? [] : {}), o = o[i]);
  });
}, Oc = (e, t, r) => {
  function n(o, i = [], a = []) {
    Object.entries(o).forEach(([s, f]) => {
      (!r || r && !r([...i, s])) && f != null && (typeof f == "object" && Object.keys(f).length > 0 ? n(f, [...i, s], Array.isArray(f) ? [...a, s] : a) : t([...i, s], f, a));
    });
  }
  n(e);
}, $c = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((n) => e.includes(n)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function jr(e, t) {
  const {
    prefix: r,
    shouldSkipGeneratingVar: n
  } = t || {}, o = {}, i = {}, a = {};
  return Oc(
    e,
    (s, f, d) => {
      if ((typeof f == "string" || typeof f == "number") && (!n || !n(s, f))) {
        const p = `--${r ? `${r}-` : ""}${s.join("-")}`, h = $c(s, f);
        Object.assign(o, {
          [p]: h
        }), ao(i, s, `var(${p})`, d), ao(a, s, `var(${p}, ${h})`, d);
      }
    },
    (s) => s[0] === "vars"
    // skip 'vars/*' paths
  ), {
    css: o,
    vars: i,
    varsWithDefaults: a
  };
}
function kc(e, t = {}) {
  const {
    getSelector: r = m,
    disableCssColorScheme: n,
    colorSchemeSelector: o
  } = t, {
    colorSchemes: i = {},
    components: a,
    defaultColorScheme: s = "light",
    ...f
  } = e, {
    vars: d,
    css: p,
    varsWithDefaults: h
  } = jr(f, t);
  let g = h;
  const C = {}, {
    [s]: v,
    ...y
  } = i;
  if (Object.entries(y || {}).forEach(([R, x]) => {
    const {
      vars: b,
      css: A,
      varsWithDefaults: I
    } = jr(x, t);
    g = Me(g, I), C[R] = {
      css: A,
      vars: b
    };
  }), v) {
    const {
      css: R,
      vars: x,
      varsWithDefaults: b
    } = jr(v, t);
    g = Me(g, b), C[s] = {
      css: R,
      vars: x
    };
  }
  function m(R, x) {
    var A, I;
    let b = o;
    if (o === "class" && (b = ".%s"), o === "data" && (b = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (b = `[${o}="%s"]`), R) {
      if (b === "media")
        return e.defaultColorScheme === R ? ":root" : {
          [`@media (prefers-color-scheme: ${((I = (A = i[R]) == null ? void 0 : A.palette) == null ? void 0 : I.mode) || R})`]: {
            ":root": x
          }
        };
      if (b)
        return e.defaultColorScheme === R ? `:root, ${b.replace("%s", String(R))}` : b.replace("%s", String(R));
    }
    return ":root";
  }
  return {
    vars: g,
    generateThemeVars: () => {
      let R = {
        ...d
      };
      return Object.entries(C).forEach(([, {
        vars: x
      }]) => {
        R = Me(R, x);
      }), R;
    },
    generateStyleSheets: () => {
      var Z, J;
      const R = [], x = e.defaultColorScheme || "light";
      function b(c, _) {
        Object.keys(_).length && R.push(typeof c == "string" ? {
          [c]: {
            ..._
          }
        } : c);
      }
      b(r(void 0, {
        ...p
      }), p);
      const {
        [x]: A,
        ...I
      } = C;
      if (A) {
        const {
          css: c
        } = A, _ = (J = (Z = i[x]) == null ? void 0 : Z.palette) == null ? void 0 : J.mode, j = !n && _ ? {
          colorScheme: _,
          ...c
        } : {
          ...c
        };
        b(r(x, {
          ...j
        }), j);
      }
      return Object.entries(I).forEach(([c, {
        css: _
      }]) => {
        var Y, le;
        const j = (le = (Y = i[c]) == null ? void 0 : Y.palette) == null ? void 0 : le.mode, D = !n && j ? {
          colorScheme: j,
          ..._
        } : {
          ..._
        };
        b(r(c, {
          ...D
        }), D);
      }), R;
    }
  };
}
function _c(e) {
  return function(r) {
    return e === "media" ? (process.env.NODE_ENV !== "production" && r !== "light" && r !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${r}'.`), `@media (prefers-color-scheme: ${r})`) : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${r}"] &` : e === "class" ? `.${r} &` : e === "data" ? `[data-${r}] &` : `${e.replace("%s", r)} &` : "&";
  };
}
const Bt = {
  black: "#000",
  white: "#fff"
}, Pc = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
}, dt = {
  50: "#f3e5f5",
  100: "#e1bee7",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  600: "#8e24aa",
  700: "#7b1fa2",
  800: "#6a1b9a",
  900: "#4a148c",
  A100: "#ea80fc",
  A200: "#e040fb",
  A400: "#d500f9",
  A700: "#aa00ff"
}, pt = {
  50: "#ffebee",
  100: "#ffcdd2",
  200: "#ef9a9a",
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  600: "#e53935",
  700: "#d32f2f",
  800: "#c62828",
  900: "#b71c1c",
  A100: "#ff8a80",
  A200: "#ff5252",
  A400: "#ff1744",
  A700: "#d50000"
}, _t = {
  50: "#fff3e0",
  100: "#ffe0b2",
  200: "#ffcc80",
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  600: "#fb8c00",
  700: "#f57c00",
  800: "#ef6c00",
  900: "#e65100",
  A100: "#ffd180",
  A200: "#ffab40",
  A400: "#ff9100",
  A700: "#ff6d00"
}, ht = {
  50: "#e3f2fd",
  100: "#bbdefb",
  200: "#90caf9",
  300: "#64b5f6",
  400: "#42a5f5",
  500: "#2196f3",
  600: "#1e88e5",
  700: "#1976d2",
  800: "#1565c0",
  900: "#0d47a1",
  A100: "#82b1ff",
  A200: "#448aff",
  A400: "#2979ff",
  A700: "#2962ff"
}, mt = {
  50: "#e1f5fe",
  100: "#b3e5fc",
  200: "#81d4fa",
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  600: "#039be5",
  700: "#0288d1",
  800: "#0277bd",
  900: "#01579b",
  A100: "#80d8ff",
  A200: "#40c4ff",
  A400: "#00b0ff",
  A700: "#0091ea"
}, gt = {
  50: "#e8f5e9",
  100: "#c8e6c9",
  200: "#a5d6a7",
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  600: "#43a047",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20",
  A100: "#b9f6ca",
  A200: "#69f0ae",
  A400: "#00e676",
  A700: "#00c853"
}, so = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: "rgba(0, 0, 0, 0.87)",
    // Secondary text.
    secondary: "rgba(0, 0, 0, 0.6)",
    // Disabled text have even lower visual prominence.
    disabled: "rgba(0, 0, 0, 0.38)"
  },
  // The color used to divide different elements.
  divider: "rgba(0, 0, 0, 0.12)",
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    paper: Bt.white,
    default: Bt.white
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: "rgba(0, 0, 0, 0.54)",
    // The color of an hovered action.
    hover: "rgba(0, 0, 0, 0.04)",
    hoverOpacity: 0.04,
    // The color of a selected action.
    selected: "rgba(0, 0, 0, 0.08)",
    selectedOpacity: 0.08,
    // The color of a disabled action.
    disabled: "rgba(0, 0, 0, 0.26)",
    // The background color of a disabled action.
    disabledBackground: "rgba(0, 0, 0, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(0, 0, 0, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  }
}, Br = {
  text: {
    primary: Bt.white,
    secondary: "rgba(255, 255, 255, 0.7)",
    disabled: "rgba(255, 255, 255, 0.5)",
    icon: "rgba(255, 255, 255, 0.5)"
  },
  divider: "rgba(255, 255, 255, 0.12)",
  background: {
    paper: "#121212",
    default: "#121212"
  },
  action: {
    active: Bt.white,
    hover: "rgba(255, 255, 255, 0.08)",
    hoverOpacity: 0.08,
    selected: "rgba(255, 255, 255, 0.16)",
    selectedOpacity: 0.16,
    disabled: "rgba(255, 255, 255, 0.3)",
    disabledBackground: "rgba(255, 255, 255, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(255, 255, 255, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.24
  }
};
function co(e, t, r, n) {
  const o = n.light || n, i = n.dark || n * 1.5;
  e[t] || (e.hasOwnProperty(r) ? e[t] = e[r] : t === "light" ? e.light = en(e.main, o) : t === "dark" && (e.dark = Zr(e.main, i)));
}
function Ac(e = "light") {
  return e === "dark" ? {
    main: ht[200],
    light: ht[50],
    dark: ht[400]
  } : {
    main: ht[700],
    light: ht[400],
    dark: ht[800]
  };
}
function Ic(e = "light") {
  return e === "dark" ? {
    main: dt[200],
    light: dt[50],
    dark: dt[400]
  } : {
    main: dt[500],
    light: dt[300],
    dark: dt[700]
  };
}
function Mc(e = "light") {
  return e === "dark" ? {
    main: pt[500],
    light: pt[300],
    dark: pt[700]
  } : {
    main: pt[700],
    light: pt[400],
    dark: pt[800]
  };
}
function Nc(e = "light") {
  return e === "dark" ? {
    main: mt[400],
    light: mt[300],
    dark: mt[700]
  } : {
    main: mt[700],
    light: mt[500],
    dark: mt[900]
  };
}
function jc(e = "light") {
  return e === "dark" ? {
    main: gt[400],
    light: gt[300],
    dark: gt[700]
  } : {
    main: gt[800],
    light: gt[500],
    dark: gt[900]
  };
}
function Bc(e = "light") {
  return e === "dark" ? {
    main: _t[400],
    light: _t[300],
    dark: _t[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: _t[500],
    dark: _t[900]
  };
}
function fn(e) {
  const {
    mode: t = "light",
    contrastThreshold: r = 3,
    tonalOffset: n = 0.2,
    ...o
  } = e, i = e.primary || Ac(t), a = e.secondary || Ic(t), s = e.error || Mc(t), f = e.info || Nc(t), d = e.success || jc(t), p = e.warning || Bc(t);
  function h(y) {
    const m = Dn(y, Br.text.primary) >= r ? Br.text.primary : so.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const E = Dn(y, m);
      E < 3 && console.error([`MUI: The contrast ratio of ${E}:1 for ${m} on ${y}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return m;
  }
  const g = ({
    color: y,
    name: m,
    mainShade: E = 500,
    lightShade: O = 300,
    darkShade: R = 700
  }) => {
    if (y = {
      ...y
    }, !y.main && y[E] && (y.main = y[E]), !y.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${m ? ` (${m})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${E}\` property.` : Je(11, m ? ` (${m})` : "", E));
    if (typeof y.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${m ? ` (${m})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(y.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : Je(12, m ? ` (${m})` : "", JSON.stringify(y.main)));
    return co(y, "light", O, n), co(y, "dark", R, n), y.contrastText || (y.contrastText = h(y.main)), y;
  }, C = {
    dark: Br,
    light: so
  };
  return process.env.NODE_ENV !== "production" && (C[t] || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), Me({
    // A collection of common colors.
    common: {
      ...Bt
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: g({
      color: i,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: g({
      color: a,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: g({
      color: s,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: g({
      color: p,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: g({
      color: f,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: g({
      color: d,
      name: "success"
    }),
    // The grey colors.
    grey: Pc,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: r,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: h,
    // Generate a rich color object.
    augmentColor: g,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: n,
    // The light and dark mode object.
    ...C[t]
  }, o);
}
function Dc(e) {
  const t = {};
  return Object.entries(e).forEach((n) => {
    const [o, i] = n;
    typeof i == "object" && (t[o] = `${i.fontStyle ? `${i.fontStyle} ` : ""}${i.fontVariant ? `${i.fontVariant} ` : ""}${i.fontWeight ? `${i.fontWeight} ` : ""}${i.fontStretch ? `${i.fontStretch} ` : ""}${i.fontSize || ""}${i.lineHeight ? `/${i.lineHeight} ` : ""}${i.fontFamily || ""}`);
  }), t;
}
function Fc(e, t) {
  return {
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [e.up("sm")]: {
        minHeight: 64
      }
    },
    ...t
  };
}
function zc(e) {
  return Math.round(e * 1e5) / 1e5;
}
const lo = {
  textTransform: "uppercase"
}, uo = '"Roboto", "Helvetica", "Arial", sans-serif';
function Vc(e, t) {
  const {
    fontFamily: r = uo,
    // The default font size of the Material Specification.
    fontSize: n = 14,
    // px
    fontWeightLight: o = 300,
    fontWeightRegular: i = 400,
    fontWeightMedium: a = 500,
    fontWeightBold: s = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: f = 16,
    // Apply the CSS properties to all the variants.
    allVariants: d,
    pxToRem: p,
    ...h
  } = typeof t == "function" ? t(e) : t;
  process.env.NODE_ENV !== "production" && (typeof n != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof f != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const g = n / 14, C = p || ((m) => `${m / f * g}rem`), v = (m, E, O, R, x) => ({
    fontFamily: r,
    fontWeight: m,
    fontSize: C(E),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: O,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...r === uo ? {
      letterSpacing: `${zc(R / E)}em`
    } : {},
    ...x,
    ...d
  }), y = {
    h1: v(o, 96, 1.167, -1.5),
    h2: v(o, 60, 1.2, -0.5),
    h3: v(i, 48, 1.167, 0),
    h4: v(i, 34, 1.235, 0.25),
    h5: v(i, 24, 1.334, 0),
    h6: v(a, 20, 1.6, 0.15),
    subtitle1: v(i, 16, 1.75, 0.15),
    subtitle2: v(a, 14, 1.57, 0.1),
    body1: v(i, 16, 1.5, 0.15),
    body2: v(i, 14, 1.43, 0.15),
    button: v(a, 14, 1.75, 0.4, lo),
    caption: v(i, 12, 1.66, 0.4),
    overline: v(i, 12, 2.66, 1, lo),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return Me({
    htmlFontSize: f,
    pxToRem: C,
    fontFamily: r,
    fontSize: n,
    fontWeightLight: o,
    fontWeightRegular: i,
    fontWeightMedium: a,
    fontWeightBold: s,
    ...y
  }, h, {
    clone: !1
    // No need to clone deep
  });
}
const Lc = 0.2, Wc = 0.14, Uc = 0.12;
function he(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Lc})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Wc})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Uc})`].join(",");
}
const Yc = ["none", he(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), he(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), he(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), he(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), he(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), he(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), he(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), he(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), he(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), he(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), he(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), he(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), he(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), he(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), he(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), he(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), he(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), he(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), he(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), he(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), he(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), he(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), he(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), he(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], qc = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Gc = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function fo(e) {
  return `${Math.round(e)}ms`;
}
function Hc(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function Kc(e) {
  const t = {
    ...qc,
    ...e.easing
  }, r = {
    ...Gc,
    ...e.duration
  };
  return {
    getAutoHeightDuration: Hc,
    create: (o = ["all"], i = {}) => {
      const {
        duration: a = r.standard,
        easing: s = t.easeInOut,
        delay: f = 0,
        ...d
      } = i;
      if (process.env.NODE_ENV !== "production") {
        const p = (g) => typeof g == "string", h = (g) => !Number.isNaN(parseFloat(g));
        !p(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !h(a) && !p(a) && console.error(`MUI: Argument "duration" must be a number or a string but found ${a}.`), p(s) || console.error('MUI: Argument "easing" must be a string.'), !h(f) && !p(f) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof i != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(d).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(d).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((p) => `${p} ${typeof a == "string" ? a : fo(a)} ${s} ${typeof f == "string" ? f : fo(f)}`).join(",");
    },
    ...e,
    easing: t,
    duration: r
  };
}
const Xc = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function Gr(e = {}, ...t) {
  const {
    breakpoints: r,
    mixins: n = {},
    spacing: o,
    palette: i = {},
    transitions: a = {},
    typography: s = {},
    shape: f,
    ...d
  } = e;
  if (e.vars)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : Je(20));
  const p = fn(i), h = ln(e);
  let g = Me(h, {
    mixins: Fc(h.breakpoints, n),
    palette: p,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Yc.slice(),
    typography: Vc(p, s),
    transitions: Kc(a),
    zIndex: {
      ...Xc
    }
  });
  if (g = Me(g, d), g = t.reduce((C, v) => Me(C, v), g), process.env.NODE_ENV !== "production") {
    const C = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], v = (y, m) => {
      let E;
      for (E in y) {
        const O = y[E];
        if (C.includes(E) && Object.keys(O).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const R = et("", E);
            console.error([`MUI: The \`${m}\` component increases the CSS specificity of the \`${E}\` internal state.`, "You can not override it like this: ", JSON.stringify(y, null, 2), "", `Instead, you need to use the '&.${R}' syntax:`, JSON.stringify({
              root: {
                [`&.${R}`]: O
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          y[E] = {};
        }
      }
    };
    Object.keys(g.components).forEach((y) => {
      const m = g.components[y].styleOverrides;
      m && y.startsWith("Mui") && v(m, y);
    });
  }
  return g.unstable_sxConfig = {
    ...Vt,
    ...d == null ? void 0 : d.unstable_sxConfig
  }, g.unstable_sx = function(v) {
    return st({
      sx: v,
      theme: this
    });
  }, g;
}
function Jc(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const Qc = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const r = Jc(t);
  return `linear-gradient(rgba(255 255 255 / ${r}), rgba(255 255 255 / ${r}))`;
});
function qo(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function Go(e) {
  return e === "dark" ? Qc : [];
}
function Zc(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: r,
    overlays: n,
    ...o
  } = e, i = fn(t);
  return {
    palette: i,
    opacity: {
      ...qo(i.mode),
      ...r
    },
    overlays: n || Go(i.mode),
    ...o
  };
}
function el(e) {
  var t;
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/));
}
const tl = (e) => [...[...Array(25)].map((t, r) => `--${e ? `${e}-` : ""}overlays-${r}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], rl = (e) => (t, r) => {
  const n = e.rootSelector || ":root", o = e.colorSchemeSelector;
  let i = o;
  if (o === "class" && (i = ".%s"), o === "data" && (i = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (i = `[${o}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const a = {};
      return tl(e.cssVarPrefix).forEach((s) => {
        a[s] = r[s], delete r[s];
      }), i === "media" ? {
        [n]: r,
        "@media (prefers-color-scheme: dark)": {
          [n]: a
        }
      } : i ? {
        [i.replace("%s", t)]: a,
        [`${n}, ${i.replace("%s", t)}`]: r
      } : {
        [n]: {
          ...r,
          ...a
        }
      };
    }
    if (i && i !== "media")
      return `${n}, ${i.replace("%s", String(t))}`;
  } else if (t) {
    if (i === "media")
      return {
        [`@media (prefers-color-scheme: ${String(t)})`]: {
          [n]: r
        }
      };
    if (i)
      return i.replace("%s", String(t));
  }
  return n;
};
function nl(e) {
  return qe(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function ol(e = {}) {
  const t = {
    ...e
  };
  function r(n) {
    const o = Object.entries(n);
    for (let i = 0; i < o.length; i++) {
      const [a, s] = o[i];
      !nl(s) || a.startsWith("unstable_") ? delete n[a] : qe(s) && (n[a] = {
        ...s
      }, r(n[a]));
    }
  }
  return r(t), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(t, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function il(e, t) {
  t.forEach((r) => {
    e[r] || (e[r] = {});
  });
}
function S(e, t, r) {
  !e[t] && r && (e[t] = r);
}
function At(e) {
  return !e || !e.startsWith("hsl") ? e : bo(e);
}
function He(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = Pt(At(e[t]), `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function al(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const We = (e) => {
  try {
    return e();
  } catch {
  }
}, sl = (e = "mui") => Rc(e);
function Dr(e, t, r, n) {
  if (!t)
    return;
  t = t === !0 ? {} : t;
  const o = n === "dark" ? "dark" : "light";
  if (!r) {
    e[n] = Zc({
      ...t,
      palette: {
        mode: o,
        ...t == null ? void 0 : t.palette
      }
    });
    return;
  }
  const {
    palette: i,
    ...a
  } = Gr({
    ...r,
    palette: {
      mode: o,
      ...t == null ? void 0 : t.palette
    }
  });
  return e[n] = {
    ...t,
    palette: i,
    opacity: {
      ...qo(o),
      ...t == null ? void 0 : t.opacity
    },
    overlays: (t == null ? void 0 : t.overlays) || Go(o)
  }, a;
}
function cl(e = {}, ...t) {
  const {
    colorSchemes: r = {
      light: !0
    },
    defaultColorScheme: n,
    disableCssColorScheme: o = !1,
    cssVarPrefix: i = "mui",
    shouldSkipGeneratingVar: a = el,
    colorSchemeSelector: s = r.light && r.dark ? "media" : void 0,
    rootSelector: f = ":root",
    ...d
  } = e, p = Object.keys(r)[0], h = n || (r.light && p !== "light" ? "light" : p), g = sl(i), {
    [h]: C,
    light: v,
    dark: y,
    ...m
  } = r, E = {
    ...m
  };
  let O = C;
  if ((h === "dark" && !("dark" in r) || h === "light" && !("light" in r)) && (O = !0), !O)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${h}\` option is either missing or invalid.` : Je(21, h));
  const R = Dr(E, O, d, h);
  v && !E.light && Dr(E, v, void 0, "light"), y && !E.dark && Dr(E, y, void 0, "dark");
  let x = {
    defaultColorScheme: h,
    ...R,
    cssVarPrefix: i,
    colorSchemeSelector: s,
    rootSelector: f,
    getCssVar: g,
    colorSchemes: E,
    font: {
      ...Dc(R.typography),
      ...R.font
    },
    spacing: al(d.spacing)
  };
  Object.keys(x.colorSchemes).forEach((J) => {
    const c = x.colorSchemes[J].palette, _ = (j) => {
      const D = j.split("-"), Y = D[1], le = D[2];
      return g(j, c[Y][le]);
    };
    if (c.mode === "light" && (S(c.common, "background", "#fff"), S(c.common, "onBackground", "#000")), c.mode === "dark" && (S(c.common, "background", "#000"), S(c.common, "onBackground", "#fff")), il(c, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), c.mode === "light") {
      S(c.Alert, "errorColor", fe(c.error.light, 0.6)), S(c.Alert, "infoColor", fe(c.info.light, 0.6)), S(c.Alert, "successColor", fe(c.success.light, 0.6)), S(c.Alert, "warningColor", fe(c.warning.light, 0.6)), S(c.Alert, "errorFilledBg", _("palette-error-main")), S(c.Alert, "infoFilledBg", _("palette-info-main")), S(c.Alert, "successFilledBg", _("palette-success-main")), S(c.Alert, "warningFilledBg", _("palette-warning-main")), S(c.Alert, "errorFilledColor", We(() => c.getContrastText(c.error.main))), S(c.Alert, "infoFilledColor", We(() => c.getContrastText(c.info.main))), S(c.Alert, "successFilledColor", We(() => c.getContrastText(c.success.main))), S(c.Alert, "warningFilledColor", We(() => c.getContrastText(c.warning.main))), S(c.Alert, "errorStandardBg", de(c.error.light, 0.9)), S(c.Alert, "infoStandardBg", de(c.info.light, 0.9)), S(c.Alert, "successStandardBg", de(c.success.light, 0.9)), S(c.Alert, "warningStandardBg", de(c.warning.light, 0.9)), S(c.Alert, "errorIconColor", _("palette-error-main")), S(c.Alert, "infoIconColor", _("palette-info-main")), S(c.Alert, "successIconColor", _("palette-success-main")), S(c.Alert, "warningIconColor", _("palette-warning-main")), S(c.AppBar, "defaultBg", _("palette-grey-100")), S(c.Avatar, "defaultBg", _("palette-grey-400")), S(c.Button, "inheritContainedBg", _("palette-grey-300")), S(c.Button, "inheritContainedHoverBg", _("palette-grey-A100")), S(c.Chip, "defaultBorder", _("palette-grey-400")), S(c.Chip, "defaultAvatarColor", _("palette-grey-700")), S(c.Chip, "defaultIconColor", _("palette-grey-700")), S(c.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), S(c.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), S(c.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), S(c.LinearProgress, "primaryBg", de(c.primary.main, 0.62)), S(c.LinearProgress, "secondaryBg", de(c.secondary.main, 0.62)), S(c.LinearProgress, "errorBg", de(c.error.main, 0.62)), S(c.LinearProgress, "infoBg", de(c.info.main, 0.62)), S(c.LinearProgress, "successBg", de(c.success.main, 0.62)), S(c.LinearProgress, "warningBg", de(c.warning.main, 0.62)), S(c.Skeleton, "bg", `rgba(${_("palette-text-primaryChannel")} / 0.11)`), S(c.Slider, "primaryTrack", de(c.primary.main, 0.62)), S(c.Slider, "secondaryTrack", de(c.secondary.main, 0.62)), S(c.Slider, "errorTrack", de(c.error.main, 0.62)), S(c.Slider, "infoTrack", de(c.info.main, 0.62)), S(c.Slider, "successTrack", de(c.success.main, 0.62)), S(c.Slider, "warningTrack", de(c.warning.main, 0.62));
      const j = Ht(c.background.default, 0.8);
      S(c.SnackbarContent, "bg", j), S(c.SnackbarContent, "color", We(() => c.getContrastText(j))), S(c.SpeedDialAction, "fabHoverBg", Ht(c.background.paper, 0.15)), S(c.StepConnector, "border", _("palette-grey-400")), S(c.StepContent, "border", _("palette-grey-400")), S(c.Switch, "defaultColor", _("palette-common-white")), S(c.Switch, "defaultDisabledColor", _("palette-grey-100")), S(c.Switch, "primaryDisabledColor", de(c.primary.main, 0.62)), S(c.Switch, "secondaryDisabledColor", de(c.secondary.main, 0.62)), S(c.Switch, "errorDisabledColor", de(c.error.main, 0.62)), S(c.Switch, "infoDisabledColor", de(c.info.main, 0.62)), S(c.Switch, "successDisabledColor", de(c.success.main, 0.62)), S(c.Switch, "warningDisabledColor", de(c.warning.main, 0.62)), S(c.TableCell, "border", de(Gt(c.divider, 1), 0.88)), S(c.Tooltip, "bg", Gt(c.grey[700], 0.92));
    }
    if (c.mode === "dark") {
      S(c.Alert, "errorColor", de(c.error.light, 0.6)), S(c.Alert, "infoColor", de(c.info.light, 0.6)), S(c.Alert, "successColor", de(c.success.light, 0.6)), S(c.Alert, "warningColor", de(c.warning.light, 0.6)), S(c.Alert, "errorFilledBg", _("palette-error-dark")), S(c.Alert, "infoFilledBg", _("palette-info-dark")), S(c.Alert, "successFilledBg", _("palette-success-dark")), S(c.Alert, "warningFilledBg", _("palette-warning-dark")), S(c.Alert, "errorFilledColor", We(() => c.getContrastText(c.error.dark))), S(c.Alert, "infoFilledColor", We(() => c.getContrastText(c.info.dark))), S(c.Alert, "successFilledColor", We(() => c.getContrastText(c.success.dark))), S(c.Alert, "warningFilledColor", We(() => c.getContrastText(c.warning.dark))), S(c.Alert, "errorStandardBg", fe(c.error.light, 0.9)), S(c.Alert, "infoStandardBg", fe(c.info.light, 0.9)), S(c.Alert, "successStandardBg", fe(c.success.light, 0.9)), S(c.Alert, "warningStandardBg", fe(c.warning.light, 0.9)), S(c.Alert, "errorIconColor", _("palette-error-main")), S(c.Alert, "infoIconColor", _("palette-info-main")), S(c.Alert, "successIconColor", _("palette-success-main")), S(c.Alert, "warningIconColor", _("palette-warning-main")), S(c.AppBar, "defaultBg", _("palette-grey-900")), S(c.AppBar, "darkBg", _("palette-background-paper")), S(c.AppBar, "darkColor", _("palette-text-primary")), S(c.Avatar, "defaultBg", _("palette-grey-600")), S(c.Button, "inheritContainedBg", _("palette-grey-800")), S(c.Button, "inheritContainedHoverBg", _("palette-grey-700")), S(c.Chip, "defaultBorder", _("palette-grey-700")), S(c.Chip, "defaultAvatarColor", _("palette-grey-300")), S(c.Chip, "defaultIconColor", _("palette-grey-300")), S(c.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), S(c.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), S(c.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), S(c.LinearProgress, "primaryBg", fe(c.primary.main, 0.5)), S(c.LinearProgress, "secondaryBg", fe(c.secondary.main, 0.5)), S(c.LinearProgress, "errorBg", fe(c.error.main, 0.5)), S(c.LinearProgress, "infoBg", fe(c.info.main, 0.5)), S(c.LinearProgress, "successBg", fe(c.success.main, 0.5)), S(c.LinearProgress, "warningBg", fe(c.warning.main, 0.5)), S(c.Skeleton, "bg", `rgba(${_("palette-text-primaryChannel")} / 0.13)`), S(c.Slider, "primaryTrack", fe(c.primary.main, 0.5)), S(c.Slider, "secondaryTrack", fe(c.secondary.main, 0.5)), S(c.Slider, "errorTrack", fe(c.error.main, 0.5)), S(c.Slider, "infoTrack", fe(c.info.main, 0.5)), S(c.Slider, "successTrack", fe(c.success.main, 0.5)), S(c.Slider, "warningTrack", fe(c.warning.main, 0.5));
      const j = Ht(c.background.default, 0.98);
      S(c.SnackbarContent, "bg", j), S(c.SnackbarContent, "color", We(() => c.getContrastText(j))), S(c.SpeedDialAction, "fabHoverBg", Ht(c.background.paper, 0.15)), S(c.StepConnector, "border", _("palette-grey-600")), S(c.StepContent, "border", _("palette-grey-600")), S(c.Switch, "defaultColor", _("palette-grey-300")), S(c.Switch, "defaultDisabledColor", _("palette-grey-600")), S(c.Switch, "primaryDisabledColor", fe(c.primary.main, 0.55)), S(c.Switch, "secondaryDisabledColor", fe(c.secondary.main, 0.55)), S(c.Switch, "errorDisabledColor", fe(c.error.main, 0.55)), S(c.Switch, "infoDisabledColor", fe(c.info.main, 0.55)), S(c.Switch, "successDisabledColor", fe(c.success.main, 0.55)), S(c.Switch, "warningDisabledColor", fe(c.warning.main, 0.55)), S(c.TableCell, "border", fe(Gt(c.divider, 1), 0.68)), S(c.Tooltip, "bg", Gt(c.grey[700], 0.92));
    }
    He(c.background, "default"), He(c.background, "paper"), He(c.common, "background"), He(c.common, "onBackground"), He(c, "divider"), Object.keys(c).forEach((j) => {
      const D = c[j];
      D && typeof D == "object" && (D.main && S(c[j], "mainChannel", Pt(At(D.main))), D.light && S(c[j], "lightChannel", Pt(At(D.light))), D.dark && S(c[j], "darkChannel", Pt(At(D.dark))), D.contrastText && S(c[j], "contrastTextChannel", Pt(At(D.contrastText))), j === "text" && (He(c[j], "primary"), He(c[j], "secondary")), j === "action" && (D.active && He(c[j], "active"), D.selected && He(c[j], "selected")));
    });
  }), x = t.reduce((J, c) => Me(J, c), x);
  const b = {
    prefix: i,
    disableCssColorScheme: o,
    shouldSkipGeneratingVar: a,
    getSelector: rl(x)
  }, {
    vars: A,
    generateThemeVars: I,
    generateStyleSheets: Z
  } = kc(x, b);
  return x.vars = A, Object.entries(x.colorSchemes[x.defaultColorScheme]).forEach(([J, c]) => {
    x[J] = c;
  }), x.generateThemeVars = I, x.generateStyleSheets = Z, x.generateSpacing = function() {
    return Do(d.spacing, tn(this));
  }, x.getColorSchemeSelector = _c(s), x.spacing = x.generateSpacing(), x.shouldSkipGeneratingVar = a, x.unstable_sxConfig = {
    ...Vt,
    ...d == null ? void 0 : d.unstable_sxConfig
  }, x.unstable_sx = function(c) {
    return st({
      sx: c,
      theme: this
    });
  }, x.toRuntimeSource = ol, x;
}
function po(e, t, r) {
  e.colorSchemes && r && (e.colorSchemes[t] = {
    ...r !== !0 && r,
    palette: fn({
      ...r === !0 ? {} : r.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function Ho(e = {}, ...t) {
  const {
    palette: r,
    cssVariables: n = !1,
    colorSchemes: o = r ? void 0 : {
      light: !0
    },
    defaultColorScheme: i = r == null ? void 0 : r.mode,
    ...a
  } = e, s = i || "light", f = o == null ? void 0 : o[s], d = {
    ...o,
    ...r ? {
      [s]: {
        ...typeof f != "boolean" && f,
        palette: r
      }
    } : void 0
  };
  if (n === !1) {
    if (!("colorSchemes" in e))
      return Gr(e, ...t);
    let p = r;
    "palette" in e || d[s] && (d[s] !== !0 ? p = d[s].palette : s === "dark" && (p = {
      mode: "dark"
    }));
    const h = Gr({
      ...e,
      palette: p
    }, ...t);
    return h.defaultColorScheme = s, h.colorSchemes = d, h.palette.mode === "light" && (h.colorSchemes.light = {
      ...d.light !== !0 && d.light,
      palette: h.palette
    }, po(h, "dark", d.dark)), h.palette.mode === "dark" && (h.colorSchemes.dark = {
      ...d.dark !== !0 && d.dark,
      palette: h.palette
    }, po(h, "light", d.light)), h;
  }
  return !r && !("light" in d) && s === "light" && (d.light = !0), cl({
    ...a,
    colorSchemes: d,
    defaultColorScheme: s,
    ...typeof n != "boolean" && n
  }, ...t);
}
const ll = Ho(), Ko = "$$material", Ve = nc({
  themeId: Ko,
  defaultTheme: ll,
  rootShouldForwardProp: vo
});
function ul() {
  return xo;
}
const Ct = wc;
process.env.NODE_ENV !== "production" && (u.node, u.object.isRequired);
function ct(e) {
  return Tc(e);
}
class sr {
  constructor() {
    Rt(this, "mountEffect", () => {
      this.shouldMount && !this.didMount && this.ref.current !== null && (this.didMount = !0, this.mounted.resolve());
    });
    this.ref = {
      current: null
    }, this.mounted = null, this.didMount = !1, this.shouldMount = !1, this.setShouldMount = null;
  }
  /** React ref to the ripple instance */
  /** If the ripple component should be mounted */
  /** Promise that resolves when the ripple component is mounted */
  /** If the ripple component has been mounted */
  /** React state hook setter */
  static create() {
    return new sr();
  }
  static use() {
    const t = Yo(sr.create).current, [r, n] = N.useState(!1);
    return t.shouldMount = r, t.setShouldMount = n, N.useEffect(t.mountEffect, [r]), t;
  }
  mount() {
    return this.mounted || (this.mounted = dl(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
  }
  /* Ripple API */
  start(...t) {
    this.mount().then(() => {
      var r;
      return (r = this.ref.current) == null ? void 0 : r.start(...t);
    });
  }
  stop(...t) {
    this.mount().then(() => {
      var r;
      return (r = this.ref.current) == null ? void 0 : r.stop(...t);
    });
  }
  pulsate(...t) {
    this.mount().then(() => {
      var r;
      return (r = this.ref.current) == null ? void 0 : r.pulsate(...t);
    });
  }
}
function fl() {
  return sr.use();
}
function dl() {
  let e, t;
  const r = new Promise((n, o) => {
    e = n, t = o;
  });
  return r.resolve = e, r.reject = t, r;
}
function pl(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.includes(n)) continue;
    r[n] = e[n];
  }
  return r;
}
function Hr(e, t) {
  return Hr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
    return r.__proto__ = n, r;
  }, Hr(e, t);
}
function hl(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Hr(e, t);
}
const ho = it.createContext(null);
function ml(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function dn(e, t) {
  var r = function(i) {
    return t && Jt(i) ? t(i) : i;
  }, n = /* @__PURE__ */ Object.create(null);
  return e && Ri.map(e, function(o) {
    return o;
  }).forEach(function(o) {
    n[o.key] = r(o);
  }), n;
}
function gl(e, t) {
  e = e || {}, t = t || {};
  function r(p) {
    return p in t ? t[p] : e[p];
  }
  var n = /* @__PURE__ */ Object.create(null), o = [];
  for (var i in e)
    i in t ? o.length && (n[i] = o, o = []) : o.push(i);
  var a, s = {};
  for (var f in t) {
    if (n[f])
      for (a = 0; a < n[f].length; a++) {
        var d = n[f][a];
        s[n[f][a]] = r(d);
      }
    s[f] = r(f);
  }
  for (a = 0; a < o.length; a++)
    s[o[a]] = r(o[a]);
  return s;
}
function at(e, t, r) {
  return r[t] != null ? r[t] : e.props[t];
}
function yl(e, t) {
  return dn(e.children, function(r) {
    return Qt(r, {
      onExited: t.bind(null, r),
      in: !0,
      appear: at(r, "appear", e),
      enter: at(r, "enter", e),
      exit: at(r, "exit", e)
    });
  });
}
function bl(e, t, r) {
  var n = dn(e.children), o = gl(t, n);
  return Object.keys(o).forEach(function(i) {
    var a = o[i];
    if (Jt(a)) {
      var s = i in t, f = i in n, d = t[i], p = Jt(d) && !d.props.in;
      f && (!s || p) ? o[i] = Qt(a, {
        onExited: r.bind(null, a),
        in: !0,
        exit: at(a, "exit", e),
        enter: at(a, "enter", e)
      }) : !f && s && !p ? o[i] = Qt(a, {
        in: !1
      }) : f && s && Jt(d) && (o[i] = Qt(a, {
        onExited: r.bind(null, a),
        in: d.props.in,
        exit: at(a, "exit", e),
        enter: at(a, "enter", e)
      }));
    }
  }), o;
}
var vl = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, Sl = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, pn = /* @__PURE__ */ function(e) {
  hl(t, e);
  function t(n, o) {
    var i;
    i = e.call(this, n, o) || this;
    var a = i.handleExited.bind(ml(i));
    return i.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: a,
      firstRender: !0
    }, i;
  }
  var r = t.prototype;
  return r.componentDidMount = function() {
    this.mounted = !0, this.setState({
      contextValue: {
        isMounting: !1
      }
    });
  }, r.componentWillUnmount = function() {
    this.mounted = !1;
  }, t.getDerivedStateFromProps = function(o, i) {
    var a = i.children, s = i.handleExited, f = i.firstRender;
    return {
      children: f ? yl(o, s) : bl(o, a, s),
      firstRender: !1
    };
  }, r.handleExited = function(o, i) {
    var a = dn(this.props.children);
    o.key in a || (o.props.onExited && o.props.onExited(i), this.mounted && this.setState(function(s) {
      var f = ir({}, s.children);
      return delete f[o.key], {
        children: f
      };
    }));
  }, r.render = function() {
    var o = this.props, i = o.component, a = o.childFactory, s = pl(o, ["component", "childFactory"]), f = this.state.contextValue, d = vl(this.state.children).map(a);
    return delete s.appear, delete s.enter, delete s.exit, i === null ? /* @__PURE__ */ it.createElement(ho.Provider, {
      value: f
    }, d) : /* @__PURE__ */ it.createElement(ho.Provider, {
      value: f
    }, /* @__PURE__ */ it.createElement(i, s, d));
  }, t;
}(it.Component);
pn.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: u.any,
  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: u.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: u.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: u.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: u.bool,
  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: u.func
} : {};
pn.defaultProps = Sl;
function Xo(e) {
  const {
    className: t,
    classes: r,
    pulsate: n = !1,
    rippleX: o,
    rippleY: i,
    rippleSize: a,
    in: s,
    onExited: f,
    timeout: d
  } = e, [p, h] = N.useState(!1), g = we(t, r.ripple, r.rippleVisible, n && r.ripplePulsate), C = {
    width: a,
    height: a,
    top: -(a / 2) + i,
    left: -(a / 2) + o
  }, v = we(r.child, p && r.childLeaving, n && r.childPulsate);
  return !s && !p && h(!0), N.useEffect(() => {
    if (!s && f != null) {
      const y = setTimeout(f, d);
      return () => {
        clearTimeout(y);
      };
    }
  }, [f, s, d]), /* @__PURE__ */ re.jsx("span", {
    className: g,
    style: C,
    children: /* @__PURE__ */ re.jsx("span", {
      className: v
    })
  });
}
process.env.NODE_ENV !== "production" && (Xo.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: u.object.isRequired,
  className: u.string,
  /**
   * @ignore - injected from TransitionGroup
   */
  in: u.bool,
  /**
   * @ignore - injected from TransitionGroup
   */
  onExited: u.func,
  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: u.bool,
  /**
   * Diameter of the ripple.
   */
  rippleSize: u.number,
  /**
   * Horizontal position of the ripple center.
   */
  rippleX: u.number,
  /**
   * Vertical position of the ripple center.
   */
  rippleY: u.number,
  /**
   * exit delay
   */
  timeout: u.number.isRequired
});
const De = tt("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), Kr = 550, Cl = 80, xl = cn`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, El = cn`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, Tl = cn`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, wl = Ve("span", {
  name: "MuiTouchRipple",
  slot: "Root"
})({
  overflow: "hidden",
  pointerEvents: "none",
  position: "absolute",
  zIndex: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: "inherit"
}), Rl = Ve(Xo, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${De.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${xl};
    animation-duration: ${Kr}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  &.${De.ripplePulsate} {
    animation-duration: ${({
  theme: e
}) => e.transitions.duration.shorter}ms;
  }

  & .${De.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${De.childLeaving} {
    opacity: 0;
    animation-name: ${El};
    animation-duration: ${Kr}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  & .${De.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${Tl};
    animation-duration: 2500ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, Jo = /* @__PURE__ */ N.forwardRef(function(t, r) {
  const n = ct({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: o = !1,
    classes: i = {},
    className: a,
    ...s
  } = n, [f, d] = N.useState([]), p = N.useRef(0), h = N.useRef(null);
  N.useEffect(() => {
    h.current && (h.current(), h.current = null);
  }, [f]);
  const g = N.useRef(!1), C = gc(), v = N.useRef(null), y = N.useRef(null), m = N.useCallback((x) => {
    const {
      pulsate: b,
      rippleX: A,
      rippleY: I,
      rippleSize: Z,
      cb: J
    } = x;
    d((c) => [...c, /* @__PURE__ */ re.jsx(Rl, {
      classes: {
        ripple: we(i.ripple, De.ripple),
        rippleVisible: we(i.rippleVisible, De.rippleVisible),
        ripplePulsate: we(i.ripplePulsate, De.ripplePulsate),
        child: we(i.child, De.child),
        childLeaving: we(i.childLeaving, De.childLeaving),
        childPulsate: we(i.childPulsate, De.childPulsate)
      },
      timeout: Kr,
      pulsate: b,
      rippleX: A,
      rippleY: I,
      rippleSize: Z
    }, p.current)]), p.current += 1, h.current = J;
  }, [i]), E = N.useCallback((x = {}, b = {}, A = () => {
  }) => {
    const {
      pulsate: I = !1,
      center: Z = o || b.pulsate,
      fakeElement: J = !1
      // For test purposes
    } = b;
    if ((x == null ? void 0 : x.type) === "mousedown" && g.current) {
      g.current = !1;
      return;
    }
    (x == null ? void 0 : x.type) === "touchstart" && (g.current = !0);
    const c = J ? null : y.current, _ = c ? c.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let j, D, Y;
    if (Z || x === void 0 || x.clientX === 0 && x.clientY === 0 || !x.clientX && !x.touches)
      j = Math.round(_.width / 2), D = Math.round(_.height / 2);
    else {
      const {
        clientX: le,
        clientY: ce
      } = x.touches && x.touches.length > 0 ? x.touches[0] : x;
      j = Math.round(le - _.left), D = Math.round(ce - _.top);
    }
    if (Z)
      Y = Math.sqrt((2 * _.width ** 2 + _.height ** 2) / 3), Y % 2 === 0 && (Y += 1);
    else {
      const le = Math.max(Math.abs((c ? c.clientWidth : 0) - j), j) * 2 + 2, ce = Math.max(Math.abs((c ? c.clientHeight : 0) - D), D) * 2 + 2;
      Y = Math.sqrt(le ** 2 + ce ** 2);
    }
    x != null && x.touches ? v.current === null && (v.current = () => {
      m({
        pulsate: I,
        rippleX: j,
        rippleY: D,
        rippleSize: Y,
        cb: A
      });
    }, C.start(Cl, () => {
      v.current && (v.current(), v.current = null);
    })) : m({
      pulsate: I,
      rippleX: j,
      rippleY: D,
      rippleSize: Y,
      cb: A
    });
  }, [o, m, C]), O = N.useCallback(() => {
    E({}, {
      pulsate: !0
    });
  }, [E]), R = N.useCallback((x, b) => {
    if (C.clear(), (x == null ? void 0 : x.type) === "touchend" && v.current) {
      v.current(), v.current = null, C.start(0, () => {
        R(x, b);
      });
      return;
    }
    v.current = null, d((A) => A.length > 0 ? A.slice(1) : A), h.current = b;
  }, [C]);
  return N.useImperativeHandle(r, () => ({
    pulsate: O,
    start: E,
    stop: R
  }), [O, E, R]), /* @__PURE__ */ re.jsx(wl, {
    className: we(De.root, i.root, a),
    ref: y,
    ...s,
    children: /* @__PURE__ */ re.jsx(pn, {
      component: null,
      exit: !0,
      children: f
    })
  });
});
process.env.NODE_ENV !== "production" && (Jo.propTypes = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: u.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: u.object,
  /**
   * @ignore
   */
  className: u.string
});
function Ol(e) {
  return et("MuiButtonBase", e);
}
const $l = tt("MuiButtonBase", ["root", "disabled", "focusVisible"]), kl = (e) => {
  const {
    disabled: t,
    focusVisible: r,
    focusVisibleClassName: n,
    classes: o
  } = e, a = xt({
    root: ["root", t && "disabled", r && "focusVisible"]
  }, Ol, o);
  return r && n && (a.root += ` ${n}`), a;
}, _l = Ve("button", {
  name: "MuiButtonBase",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  boxSizing: "border-box",
  WebkitTapHighlightColor: "transparent",
  backgroundColor: "transparent",
  // Reset default value
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  border: 0,
  margin: 0,
  // Remove the margin in Safari
  borderRadius: 0,
  padding: 0,
  // Remove the padding in Firefox
  cursor: "pointer",
  userSelect: "none",
  verticalAlign: "middle",
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  textDecoration: "none",
  // So we take precedent over the style of a native <a /> element.
  color: "inherit",
  "&::-moz-focus-inner": {
    borderStyle: "none"
    // Remove Firefox dotted outline.
  },
  [`&.${$l.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), hn = /* @__PURE__ */ N.forwardRef(function(t, r) {
  const n = ct({
    props: t,
    name: "MuiButtonBase"
  }), {
    action: o,
    centerRipple: i = !1,
    children: a,
    className: s,
    component: f = "button",
    disabled: d = !1,
    disableRipple: p = !1,
    disableTouchRipple: h = !1,
    focusRipple: g = !1,
    focusVisibleClassName: C,
    LinkComponent: v = "a",
    onBlur: y,
    onClick: m,
    onContextMenu: E,
    onDragLeave: O,
    onFocus: R,
    onFocusVisible: x,
    onKeyDown: b,
    onKeyUp: A,
    onMouseDown: I,
    onMouseLeave: Z,
    onMouseUp: J,
    onTouchEnd: c,
    onTouchMove: _,
    onTouchStart: j,
    tabIndex: D = 0,
    TouchRippleProps: Y,
    touchRippleRef: le,
    type: ce,
    ...ye
  } = n, Ee = N.useRef(null), Te = fl(), w = qr(Te.ref, le), [$, z] = N.useState(!1);
  d && $ && z(!1), N.useImperativeHandle(o, () => ({
    focusVisible: () => {
      z(!0), Ee.current.focus();
    }
  }), []);
  const W = Te.shouldMount && !p && !d;
  N.useEffect(() => {
    $ && g && !p && Te.pulsate();
  }, [p, g, $, Te]);
  function B(U, Ut, Yt = h) {
    return Xt((wt) => (Ut && Ut(wt), Yt || Te[U](wt), !0));
  }
  const H = B("start", I), V = B("stop", E), L = B("stop", O), q = B("stop", J), K = B("stop", (U) => {
    $ && U.preventDefault(), Z && Z(U);
  }), G = B("start", j), Se = B("stop", c), k = B("stop", _), Oe = B("stop", (U) => {
    no(U.target) || z(!1), y && y(U);
  }, !1), M = Xt((U) => {
    Ee.current || (Ee.current = U.currentTarget), no(U.target) && (z(!0), x && x(U)), R && R(U);
  }), ke = () => {
    const U = Ee.current;
    return f && f !== "button" && !(U.tagName === "A" && U.href);
  }, je = Xt((U) => {
    g && !U.repeat && $ && U.key === " " && Te.stop(U, () => {
      Te.start(U);
    }), U.target === U.currentTarget && ke() && U.key === " " && U.preventDefault(), b && b(U), U.target === U.currentTarget && ke() && U.key === "Enter" && !d && (U.preventDefault(), m && m(U));
  }), rt = Xt((U) => {
    g && U.key === " " && $ && !U.defaultPrevented && Te.stop(U, () => {
      Te.pulsate(U);
    }), A && A(U), m && U.target === U.currentTarget && ke() && U.key === " " && !U.defaultPrevented && m(U);
  });
  let nt = f;
  nt === "button" && (ye.href || ye.to) && (nt = v);
  const Le = {};
  nt === "button" ? (Le.type = ce === void 0 ? "button" : ce, Le.disabled = d) : (!ye.href && !ye.to && (Le.role = "button"), d && (Le["aria-disabled"] = d));
  const xr = qr(r, Ee), Wt = {
    ...n,
    centerRipple: i,
    component: f,
    disabled: d,
    disableRipple: p,
    disableTouchRipple: h,
    focusRipple: g,
    tabIndex: D,
    focusVisible: $
  }, Tt = kl(Wt);
  return /* @__PURE__ */ re.jsxs(_l, {
    as: nt,
    className: we(Tt.root, s),
    ownerState: Wt,
    onBlur: Oe,
    onClick: m,
    onContextMenu: V,
    onFocus: M,
    onKeyDown: je,
    onKeyUp: rt,
    onMouseDown: H,
    onMouseLeave: K,
    onMouseUp: q,
    onDragLeave: L,
    onTouchEnd: Se,
    onTouchMove: k,
    onTouchStart: G,
    ref: xr,
    tabIndex: d ? -1 : D,
    type: ce,
    ...Le,
    ...ye,
    children: [a, W ? /* @__PURE__ */ re.jsx(Jo, {
      ref: w,
      center: i,
      ...Y
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (hn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: dc,
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: u.bool,
  /**
   * The content of the component.
   */
  children: u.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: u.object,
  /**
   * @ignore
   */
  className: u.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: fc,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: u.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: u.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: u.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: u.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: u.string,
  /**
   * @ignore
   */
  href: u.any,
  /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */
  LinkComponent: u.elementType,
  /**
   * @ignore
   */
  onBlur: u.func,
  /**
   * @ignore
   */
  onClick: u.func,
  /**
   * @ignore
   */
  onContextMenu: u.func,
  /**
   * @ignore
   */
  onDragLeave: u.func,
  /**
   * @ignore
   */
  onFocus: u.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: u.func,
  /**
   * @ignore
   */
  onKeyDown: u.func,
  /**
   * @ignore
   */
  onKeyUp: u.func,
  /**
   * @ignore
   */
  onMouseDown: u.func,
  /**
   * @ignore
   */
  onMouseLeave: u.func,
  /**
   * @ignore
   */
  onMouseUp: u.func,
  /**
   * @ignore
   */
  onTouchEnd: u.func,
  /**
   * @ignore
   */
  onTouchMove: u.func,
  /**
   * @ignore
   */
  onTouchStart: u.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: u.oneOfType([u.arrayOf(u.oneOfType([u.func, u.object, u.bool])), u.func, u.object]),
  /**
   * @default 0
   */
  tabIndex: u.number,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: u.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: u.oneOfType([u.func, u.shape({
    current: u.shape({
      pulsate: u.func.isRequired,
      start: u.func.isRequired,
      stop: u.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  type: u.oneOfType([u.oneOf(["button", "reset", "submit"]), u.string])
});
function Pl(e) {
  return typeof e.main == "string";
}
function Al(e, t = []) {
  if (!Pl(e))
    return !1;
  for (const r of t)
    if (!e.hasOwnProperty(r) || typeof e[r] != "string")
      return !1;
  return !0;
}
function cr(e = []) {
  return ([, t]) => t && Al(t, e);
}
function Il(e) {
  return et("MuiButton", e);
}
const yt = tt("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge"]), Qo = /* @__PURE__ */ N.createContext({});
process.env.NODE_ENV !== "production" && (Qo.displayName = "ButtonGroupContext");
const Zo = /* @__PURE__ */ N.createContext(void 0);
process.env.NODE_ENV !== "production" && (Zo.displayName = "ButtonGroupButtonContext");
const Ml = (e) => {
  const {
    color: t,
    disableElevation: r,
    fullWidth: n,
    size: o,
    variant: i,
    classes: a
  } = e, s = {
    root: ["root", i, `${i}${pe(t)}`, `size${pe(o)}`, `${i}Size${pe(o)}`, `color${pe(t)}`, r && "disableElevation", n && "fullWidth"],
    label: ["label"],
    startIcon: ["icon", "startIcon", `iconSize${pe(o)}`],
    endIcon: ["icon", "endIcon", `iconSize${pe(o)}`]
  }, f = xt(s, Il, a);
  return {
    ...a,
    // forward the focused, disabled, etc. classes to the ButtonBase
    ...f
  };
}, ei = [{
  props: {
    size: "small"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 18
    }
  }
}, {
  props: {
    size: "medium"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 20
    }
  }
}, {
  props: {
    size: "large"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 22
    }
  }
}], Nl = Ve(hn, {
  shouldForwardProp: (e) => vo(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[r.variant], t[`${r.variant}${pe(r.color)}`], t[`size${pe(r.size)}`], t[`${r.variant}Size${pe(r.size)}`], r.color === "inherit" && t.colorInherit, r.disableElevation && t.disableElevation, r.fullWidth && t.fullWidth];
  }
})(Ct(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? e.palette.grey[300] : e.palette.grey[800], r = e.palette.mode === "light" ? e.palette.grey.A100 : e.palette.grey[700];
  return {
    ...e.typography.button,
    minWidth: 64,
    padding: "6px 16px",
    border: 0,
    borderRadius: (e.vars || e).shape.borderRadius,
    transition: e.transitions.create(["background-color", "box-shadow", "border-color", "color"], {
      duration: e.transitions.duration.short
    }),
    "&:hover": {
      textDecoration: "none"
    },
    [`&.${yt.disabled}`]: {
      color: (e.vars || e).palette.action.disabled
    },
    variants: [{
      props: {
        variant: "contained"
      },
      style: {
        color: "var(--variant-containedColor)",
        backgroundColor: "var(--variant-containedBg)",
        boxShadow: (e.vars || e).shadows[2],
        "&:hover": {
          boxShadow: (e.vars || e).shadows[4],
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            boxShadow: (e.vars || e).shadows[2]
          }
        },
        "&:active": {
          boxShadow: (e.vars || e).shadows[8]
        },
        [`&.${yt.focusVisible}`]: {
          boxShadow: (e.vars || e).shadows[6]
        },
        [`&.${yt.disabled}`]: {
          color: (e.vars || e).palette.action.disabled,
          boxShadow: (e.vars || e).shadows[0],
          backgroundColor: (e.vars || e).palette.action.disabledBackground
        }
      }
    }, {
      props: {
        variant: "outlined"
      },
      style: {
        padding: "5px 15px",
        border: "1px solid currentColor",
        borderColor: "var(--variant-outlinedBorder, currentColor)",
        backgroundColor: "var(--variant-outlinedBg)",
        color: "var(--variant-outlinedColor)",
        [`&.${yt.disabled}`]: {
          border: `1px solid ${(e.vars || e).palette.action.disabledBackground}`
        }
      }
    }, {
      props: {
        variant: "text"
      },
      style: {
        padding: "6px 8px",
        color: "var(--variant-textColor)",
        backgroundColor: "var(--variant-textBg)"
      }
    }, ...Object.entries(e.palette).filter(cr()).map(([n]) => ({
      props: {
        color: n
      },
      style: {
        "--variant-textColor": (e.vars || e).palette[n].main,
        "--variant-outlinedColor": (e.vars || e).palette[n].main,
        "--variant-outlinedBorder": e.vars ? `rgba(${e.vars.palette[n].mainChannel} / 0.5)` : Xe(e.palette[n].main, 0.5),
        "--variant-containedColor": (e.vars || e).palette[n].contrastText,
        "--variant-containedBg": (e.vars || e).palette[n].main,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": (e.vars || e).palette[n].dark,
            "--variant-textBg": e.vars ? `rgba(${e.vars.palette[n].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Xe(e.palette[n].main, e.palette.action.hoverOpacity),
            "--variant-outlinedBorder": (e.vars || e).palette[n].main,
            "--variant-outlinedBg": e.vars ? `rgba(${e.vars.palette[n].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Xe(e.palette[n].main, e.palette.action.hoverOpacity)
          }
        }
      }
    })), {
      props: {
        color: "inherit"
      },
      style: {
        color: "inherit",
        borderColor: "currentColor",
        "--variant-containedBg": e.vars ? e.vars.palette.Button.inheritContainedBg : t,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": e.vars ? e.vars.palette.Button.inheritContainedHoverBg : r,
            "--variant-textBg": e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : Xe(e.palette.text.primary, e.palette.action.hoverOpacity),
            "--variant-outlinedBg": e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : Xe(e.palette.text.primary, e.palette.action.hoverOpacity)
          }
        }
      }
    }, {
      props: {
        size: "small",
        variant: "text"
      },
      style: {
        padding: "4px 5px",
        fontSize: e.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "text"
      },
      style: {
        padding: "8px 11px",
        fontSize: e.typography.pxToRem(15)
      }
    }, {
      props: {
        size: "small",
        variant: "outlined"
      },
      style: {
        padding: "3px 9px",
        fontSize: e.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "outlined"
      },
      style: {
        padding: "7px 21px",
        fontSize: e.typography.pxToRem(15)
      }
    }, {
      props: {
        size: "small",
        variant: "contained"
      },
      style: {
        padding: "4px 10px",
        fontSize: e.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "contained"
      },
      style: {
        padding: "8px 22px",
        fontSize: e.typography.pxToRem(15)
      }
    }, {
      props: {
        disableElevation: !0
      },
      style: {
        boxShadow: "none",
        "&:hover": {
          boxShadow: "none"
        },
        [`&.${yt.focusVisible}`]: {
          boxShadow: "none"
        },
        "&:active": {
          boxShadow: "none"
        },
        [`&.${yt.disabled}`]: {
          boxShadow: "none"
        }
      }
    }, {
      props: {
        fullWidth: !0
      },
      style: {
        width: "100%"
      }
    }]
  };
})), jl = Ve("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.startIcon, t[`iconSize${pe(r.size)}`]];
  }
})({
  display: "inherit",
  marginRight: 8,
  marginLeft: -4,
  variants: [{
    props: {
      size: "small"
    },
    style: {
      marginLeft: -2
    }
  }, ...ei]
}), Bl = Ve("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.endIcon, t[`iconSize${pe(r.size)}`]];
  }
})({
  display: "inherit",
  marginRight: -4,
  marginLeft: 8,
  variants: [{
    props: {
      size: "small"
    },
    style: {
      marginRight: -2
    }
  }, ...ei]
}), mn = /* @__PURE__ */ N.forwardRef(function(t, r) {
  const n = N.useContext(Qo), o = N.useContext(Zo), i = nr(n, t), a = ct({
    props: i,
    name: "MuiButton"
  }), {
    children: s,
    color: f = "primary",
    component: d = "button",
    className: p,
    disabled: h = !1,
    disableElevation: g = !1,
    disableFocusRipple: C = !1,
    endIcon: v,
    focusVisibleClassName: y,
    fullWidth: m = !1,
    size: E = "medium",
    startIcon: O,
    type: R,
    variant: x = "text",
    ...b
  } = a, A = {
    ...a,
    color: f,
    component: d,
    disabled: h,
    disableElevation: g,
    disableFocusRipple: C,
    fullWidth: m,
    size: E,
    type: R,
    variant: x
  }, I = Ml(A), Z = O && /* @__PURE__ */ re.jsx(jl, {
    className: I.startIcon,
    ownerState: A,
    children: O
  }), J = v && /* @__PURE__ */ re.jsx(Bl, {
    className: I.endIcon,
    ownerState: A,
    children: v
  }), c = o || "";
  return /* @__PURE__ */ re.jsxs(Nl, {
    ownerState: A,
    className: we(n.className, I.root, p, c),
    component: d,
    disabled: h,
    focusRipple: !C,
    focusVisibleClassName: we(I.focusVisible, y),
    ref: r,
    type: R,
    ...b,
    classes: I,
    children: [Z, s, J]
  });
});
process.env.NODE_ENV !== "production" && (mn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: u.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: u.object,
  /**
   * @ignore
   */
  className: u.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: u.oneOfType([u.oneOf(["inherit", "primary", "secondary", "success", "error", "info", "warning"]), u.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: u.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: u.bool,
  /**
   * If `true`, no elevation is used.
   * @default false
   */
  disableElevation: u.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: u.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: u.bool,
  /**
   * Element placed after the children.
   */
  endIcon: u.node,
  /**
   * @ignore
   */
  focusVisibleClassName: u.string,
  /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth: u.bool,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: u.string,
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: u.oneOfType([u.oneOf(["small", "medium", "large"]), u.string]),
  /**
   * Element placed before the children.
   */
  startIcon: u.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: u.oneOfType([u.arrayOf(u.oneOfType([u.func, u.object, u.bool])), u.func, u.object]),
  /**
   * @ignore
   */
  type: u.oneOfType([u.oneOf(["button", "reset", "submit"]), u.string]),
  /**
   * The variant to use.
   * @default 'text'
   */
  variant: u.oneOfType([u.oneOf(["contained", "outlined", "text"]), u.string])
});
function uu(e) {
  const { bgcolor: t, text: r, txtcolor: n, disabled: o, onClick: i, size: a } = e;
  return (
    //Uso el Button de la librería MUI y lo personalizo con las props que pasan a mi componente.
    /* @__PURE__ */ re.jsx(
      mn,
      {
        type: "button",
        onClick: i,
        disabled: o,
        size: a,
        sx: { backgroundColor: t, color: n },
        children: r
      }
    )
  );
}
function fu(e) {
  const {
    text: t,
    txtcolor: r,
    bgcolor: n,
    bordercolor: o,
    borderwidth: i,
    size: a = "medium",
    // Valor por defecto 'medium'
    hoverTxtColor: s,
    hoverBgColor: f,
    disabled: d = !1,
    // Valor por defecto false
    onClick: p
  } = e;
  return (
    // Uso el Button de MUI y lo personalizo con las props pasadas al componente
    /* @__PURE__ */ re.jsx(
      mn,
      {
        onClick: p,
        disabled: d,
        size: a,
        sx: {
          color: r,
          backgroundColor: n,
          borderColor: o,
          borderWidth: i,
          ":hover": {
            backgroundColor: f,
            color: s
          }
        },
        children: t
      }
    )
  );
}
function Dl(e) {
  return et("MuiIconButton", e);
}
const Fl = tt("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge"]), zl = (e) => {
  const {
    classes: t,
    disabled: r,
    color: n,
    edge: o,
    size: i
  } = e, a = {
    root: ["root", r && "disabled", n !== "default" && `color${pe(n)}`, o && `edge${pe(o)}`, `size${pe(i)}`]
  };
  return xt(a, Dl, t);
}, Vl = Ve(hn, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.color !== "default" && t[`color${pe(r.color)}`], r.edge && t[`edge${pe(r.edge)}`], t[`size${pe(r.size)}`]];
  }
})(Ct(({
  theme: e
}) => ({
  textAlign: "center",
  flex: "0 0 auto",
  fontSize: e.typography.pxToRem(24),
  padding: 8,
  borderRadius: "50%",
  color: (e.vars || e).palette.action.active,
  transition: e.transitions.create("background-color", {
    duration: e.transitions.duration.shortest
  }),
  variants: [{
    props: {
      disableRipple: !1
    },
    style: {
      "&:hover": {
        backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : Xe(e.palette.action.active, e.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }
    }
  }, {
    props: {
      edge: "start"
    },
    style: {
      marginLeft: -12
    }
  }, {
    props: {
      edge: "start",
      size: "small"
    },
    style: {
      marginLeft: -3
    }
  }, {
    props: {
      edge: "end"
    },
    style: {
      marginRight: -12
    }
  }, {
    props: {
      edge: "end",
      size: "small"
    },
    style: {
      marginRight: -3
    }
  }]
})), Ct(({
  theme: e
}) => ({
  variants: [{
    props: {
      color: "inherit"
    },
    style: {
      color: "inherit"
    }
  }, ...Object.entries(e.palette).filter(cr()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].main
    }
  })), ...Object.entries(e.palette).filter(cr()).map(([t]) => ({
    props: {
      color: t,
      disableRipple: !1
    },
    style: {
      "&:hover": {
        backgroundColor: e.vars ? `rgba(${(e.vars || e).palette[t].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Xe((e.vars || e).palette[t].main, e.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }
    }
  })), {
    props: {
      size: "small"
    },
    style: {
      padding: 5,
      fontSize: e.typography.pxToRem(18)
    }
  }, {
    props: {
      size: "large"
    },
    style: {
      padding: 12,
      fontSize: e.typography.pxToRem(28)
    }
  }],
  [`&.${Fl.disabled}`]: {
    backgroundColor: "transparent",
    color: (e.vars || e).palette.action.disabled
  }
}))), gn = /* @__PURE__ */ N.forwardRef(function(t, r) {
  const n = ct({
    props: t,
    name: "MuiIconButton"
  }), {
    edge: o = !1,
    children: i,
    className: a,
    color: s = "default",
    disabled: f = !1,
    disableFocusRipple: d = !1,
    disableRipple: p = !1,
    size: h = "medium",
    ...g
  } = n, C = {
    ...n,
    edge: o,
    color: s,
    disabled: f,
    disableFocusRipple: d,
    disableRipple: p,
    size: h
  }, v = zl(C);
  return /* @__PURE__ */ re.jsx(Vl, {
    className: we(v.root, a),
    centerRipple: !0,
    focusRipple: !d,
    disabled: f,
    disableRipple: p,
    ref: r,
    ...g,
    ownerState: C,
    children: i
  });
});
process.env.NODE_ENV !== "production" && (gn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The icon to display.
   */
  children: Uo(u.node, (e) => N.Children.toArray(e.children).some((r) => /* @__PURE__ */ N.isValidElement(r) && r.props.onClick) ? new Error(["MUI: You are providing an onClick event listener to a child of a button element.", "Prefer applying it to the IconButton directly.", "This guarantees that the whole <button> will be responsive to click events."].join(`
`)) : null),
  /**
   * Override or extend the styles applied to the component.
   */
  classes: u.object,
  /**
   * @ignore
   */
  className: u.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'default'
   */
  color: u.oneOfType([u.oneOf(["inherit", "default", "primary", "secondary", "error", "info", "success", "warning"]), u.string]),
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: u.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: u.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: u.bool,
  /**
   * If given, uses a negative margin to counteract the padding on one
   * side (this is often helpful for aligning the left or right
   * side of the icon with content above or below, without ruining the border
   * size and shape).
   * @default false
   */
  edge: u.oneOf(["end", "start", !1]),
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: u.oneOfType([u.oneOf(["small", "medium", "large"]), u.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: u.oneOfType([u.arrayOf(u.oneOfType([u.func, u.object, u.bool])), u.func, u.object])
});
function Ll(e) {
  return et("MuiSvgIcon", e);
}
tt("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const Wl = (e) => {
  const {
    color: t,
    fontSize: r,
    classes: n
  } = e, o = {
    root: ["root", t !== "inherit" && `color${pe(t)}`, `fontSize${pe(r)}`]
  };
  return xt(o, Ll, n);
}, Ul = Ve("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.color !== "inherit" && t[`color${pe(r.color)}`], t[`fontSize${pe(r.fontSize)}`]];
  }
})(Ct(({
  theme: e
}) => {
  var t, r, n, o, i, a, s, f, d, p, h, g, C, v;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    flexShrink: 0,
    transition: (o = (t = e.transitions) == null ? void 0 : t.create) == null ? void 0 : o.call(t, "fill", {
      duration: (n = (r = (e.vars ?? e).transitions) == null ? void 0 : r.duration) == null ? void 0 : n.shorter
    }),
    variants: [
      {
        props: (y) => !y.hasSvgAsChild,
        style: {
          // the <svg> will define the property that has `currentColor`
          // for example heroicons uses fill="none" and stroke="currentColor"
          fill: "currentColor"
        }
      },
      {
        props: {
          fontSize: "inherit"
        },
        style: {
          fontSize: "inherit"
        }
      },
      {
        props: {
          fontSize: "small"
        },
        style: {
          fontSize: ((a = (i = e.typography) == null ? void 0 : i.pxToRem) == null ? void 0 : a.call(i, 20)) || "1.25rem"
        }
      },
      {
        props: {
          fontSize: "medium"
        },
        style: {
          fontSize: ((f = (s = e.typography) == null ? void 0 : s.pxToRem) == null ? void 0 : f.call(s, 24)) || "1.5rem"
        }
      },
      {
        props: {
          fontSize: "large"
        },
        style: {
          fontSize: ((p = (d = e.typography) == null ? void 0 : d.pxToRem) == null ? void 0 : p.call(d, 35)) || "2.1875rem"
        }
      },
      // TODO v5 deprecate color prop, v6 remove for sx
      ...Object.entries((e.vars ?? e).palette).filter(([, y]) => y && y.main).map(([y]) => {
        var m, E;
        return {
          props: {
            color: y
          },
          style: {
            color: (E = (m = (e.vars ?? e).palette) == null ? void 0 : m[y]) == null ? void 0 : E.main
          }
        };
      }),
      {
        props: {
          color: "action"
        },
        style: {
          color: (g = (h = (e.vars ?? e).palette) == null ? void 0 : h.action) == null ? void 0 : g.active
        }
      },
      {
        props: {
          color: "disabled"
        },
        style: {
          color: (v = (C = (e.vars ?? e).palette) == null ? void 0 : C.action) == null ? void 0 : v.disabled
        }
      },
      {
        props: {
          color: "inherit"
        },
        style: {
          color: void 0
        }
      }
    ]
  };
})), Dt = /* @__PURE__ */ N.forwardRef(function(t, r) {
  const n = ct({
    props: t,
    name: "MuiSvgIcon"
  }), {
    children: o,
    className: i,
    color: a = "inherit",
    component: s = "svg",
    fontSize: f = "medium",
    htmlColor: d,
    inheritViewBox: p = !1,
    titleAccess: h,
    viewBox: g = "0 0 24 24",
    ...C
  } = n, v = /* @__PURE__ */ N.isValidElement(o) && o.type === "svg", y = {
    ...n,
    color: a,
    component: s,
    fontSize: f,
    instanceFontSize: t.fontSize,
    inheritViewBox: p,
    viewBox: g,
    hasSvgAsChild: v
  }, m = {};
  p || (m.viewBox = g);
  const E = Wl(y);
  return /* @__PURE__ */ re.jsxs(Ul, {
    as: s,
    className: we(E.root, i),
    focusable: "false",
    color: d,
    "aria-hidden": h ? void 0 : !0,
    role: h ? "img" : void 0,
    ref: r,
    ...m,
    ...C,
    ...v && o.props,
    ownerState: y,
    children: [v ? o.props.children : o, h ? /* @__PURE__ */ re.jsx("title", {
      children: h
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (Dt.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Node passed into the SVG element.
   */
  children: u.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: u.object,
  /**
   * @ignore
   */
  className: u.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   * @default 'inherit'
   */
  color: u.oneOfType([u.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), u.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: u.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: u.oneOfType([u.oneOf(["inherit", "large", "medium", "small"]), u.string]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: u.string,
  /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */
  inheritViewBox: u.bool,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: u.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: u.oneOfType([u.arrayOf(u.oneOfType([u.func, u.object, u.bool])), u.func, u.object]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: u.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: u.string
});
Dt && (Dt.muiName = "SvgIcon");
function yn(e, t) {
  function r(n, o) {
    return /* @__PURE__ */ re.jsx(Dt, {
      "data-testid": `${t}Icon`,
      ref: o,
      ...n,
      children: e
    });
  }
  return process.env.NODE_ENV !== "production" && (r.displayName = `${t}Icon`), r.muiName = Dt.muiName, /* @__PURE__ */ N.memo(/* @__PURE__ */ N.forwardRef(r));
}
const Yl = yn(/* @__PURE__ */ re.jsx("path", {
  d: "m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54z"
}), "Favorite");
function du(e) {
  const {
    color: t,
    disabled: r = !1,
    // Valor por defecto false
    onClick: n
  } = e;
  return (
    // Uso el IconButton de MUI y lo personalizo con las props pasadas al componente
    /* @__PURE__ */ re.jsx(
      gn,
      {
        onClick: n,
        disabled: r,
        color: t,
        children: /* @__PURE__ */ re.jsx(Yl, {})
      }
    )
  );
}
const ql = yn(/* @__PURE__ */ re.jsx("path", {
  d: "M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3m-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05"
}), "FavoriteBorder");
function pu(e) {
  const {
    color: t,
    disabled: r = !1,
    // Valor por defecto false
    onClick: n
  } = e;
  return (
    // Uso el IconButton de MUI y lo personalizo con las props pasadas al componente
    /* @__PURE__ */ re.jsx(
      gn,
      {
        onClick: n,
        disabled: r,
        color: t,
        children: /* @__PURE__ */ re.jsx(ql, {})
      }
    )
  );
}
function Gl(e, t) {
  const {
    className: r,
    elementType: n,
    ownerState: o,
    externalForwardedProps: i,
    getSlotOwnerState: a,
    internalForwardedProps: s,
    ...f
  } = t, {
    component: d,
    slots: p = {
      [e]: void 0
    },
    slotProps: h = {
      [e]: void 0
    },
    ...g
  } = i, C = p[e] || n, v = Cc(h[e], o), {
    props: {
      component: y,
      ...m
    },
    internalRef: E
  } = Sc({
    className: r,
    ...f,
    externalForwardedProps: void 0,
    externalSlotProps: v
  }), O = qr(E, v == null ? void 0 : v.ref, t.ref), R = a ? a(m) : {}, x = {
    ...o,
    ...R
  }, b = y, A = bc(C, {
    ...e === "root",
    ...!p[e] && s,
    ...m,
    ...b && {
      as: b
    },
    ref: O
  }, x);
  return Object.keys(R).forEach((I) => {
    delete A[I];
  }), [C, A];
}
function Hl(e) {
  return et("MuiTypography", e);
}
tt("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
const Kl = {
  primary: !0,
  secondary: !0,
  error: !0,
  info: !0,
  success: !0,
  warning: !0,
  textPrimary: !0,
  textSecondary: !0,
  textDisabled: !0
}, Xl = ul(), Jl = (e) => {
  const {
    align: t,
    gutterBottom: r,
    noWrap: n,
    paragraph: o,
    variant: i,
    classes: a
  } = e, s = {
    root: ["root", i, e.align !== "inherit" && `align${pe(t)}`, r && "gutterBottom", n && "noWrap", o && "paragraph"]
  };
  return xt(s, Hl, a);
}, Ql = Ve("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.variant && t[r.variant], r.align !== "inherit" && t[`align${pe(r.align)}`], r.noWrap && t.noWrap, r.gutterBottom && t.gutterBottom, r.paragraph && t.paragraph];
  }
})(Ct(({
  theme: e
}) => {
  var t;
  return {
    margin: 0,
    variants: [{
      props: {
        variant: "inherit"
      },
      style: {
        // Some elements, like <button> on Chrome have default font that doesn't inherit, reset this.
        font: "inherit",
        lineHeight: "inherit",
        letterSpacing: "inherit"
      }
    }, ...Object.entries(e.typography).filter(([r, n]) => r !== "inherit" && n && typeof n == "object").map(([r, n]) => ({
      props: {
        variant: r
      },
      style: n
    })), ...Object.entries(e.palette).filter(cr()).map(([r]) => ({
      props: {
        color: r
      },
      style: {
        color: (e.vars || e).palette[r].main
      }
    })), ...Object.entries(((t = e.palette) == null ? void 0 : t.text) || {}).filter(([, r]) => typeof r == "string").map(([r]) => ({
      props: {
        color: `text${pe(r)}`
      },
      style: {
        color: (e.vars || e).palette.text[r]
      }
    })), {
      props: ({
        ownerState: r
      }) => r.align !== "inherit",
      style: {
        textAlign: "var(--Typography-textAlign)"
      }
    }, {
      props: ({
        ownerState: r
      }) => r.noWrap,
      style: {
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      }
    }, {
      props: ({
        ownerState: r
      }) => r.gutterBottom,
      style: {
        marginBottom: "0.35em"
      }
    }, {
      props: ({
        ownerState: r
      }) => r.paragraph,
      style: {
        marginBottom: 16
      }
    }]
  };
})), mo = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "h6",
  subtitle2: "h6",
  body1: "p",
  body2: "p",
  inherit: "p"
}, ti = /* @__PURE__ */ N.forwardRef(function(t, r) {
  const {
    color: n,
    ...o
  } = ct({
    props: t,
    name: "MuiTypography"
  }), i = !Kl[n], a = Xl({
    ...o,
    ...i && {
      color: n
    }
  }), {
    align: s = "inherit",
    className: f,
    component: d,
    gutterBottom: p = !1,
    noWrap: h = !1,
    paragraph: g = !1,
    variant: C = "body1",
    variantMapping: v = mo,
    ...y
  } = a, m = {
    ...a,
    align: s,
    color: n,
    className: f,
    component: d,
    gutterBottom: p,
    noWrap: h,
    paragraph: g,
    variant: C,
    variantMapping: v
  }, E = d || (g ? "p" : v[C] || mo[C]) || "span", O = Jl(m);
  return /* @__PURE__ */ re.jsx(Ql, {
    as: E,
    ref: r,
    className: we(O.root, f),
    ...y,
    ownerState: m,
    style: {
      ...s !== "inherit" && {
        "--Typography-textAlign": s
      },
      ...y.style
    }
  });
});
process.env.NODE_ENV !== "production" && (ti.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Set the text-align on the component.
   * @default 'inherit'
   */
  align: u.oneOf(["center", "inherit", "justify", "left", "right"]),
  /**
   * The content of the component.
   */
  children: u.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: u.object,
  /**
   * @ignore
   */
  className: u.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   */
  color: u.oneOfType([u.oneOf(["primary", "secondary", "success", "error", "info", "warning", "textPrimary", "textSecondary", "textDisabled"]), u.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: u.elementType,
  /**
   * If `true`, the text will have a bottom margin.
   * @default false
   */
  gutterBottom: u.bool,
  /**
   * If `true`, the text will not wrap, but instead will truncate with a text overflow ellipsis.
   *
   * Note that text overflow can only happen with block or inline-block level elements
   * (the element needs to have a width in order to overflow).
   * @default false
   */
  noWrap: u.bool,
  /**
   * If `true`, the element will be a paragraph element.
   * @default false
   * @deprecated Use the `component` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  paragraph: u.bool,
  /**
   * @ignore
   */
  style: u.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: u.oneOfType([u.arrayOf(u.oneOfType([u.func, u.object, u.bool])), u.func, u.object]),
  /**
   * Applies the theme typography styles.
   * @default 'body1'
   */
  variant: u.oneOfType([u.oneOf(["body1", "body2", "button", "caption", "h1", "h2", "h3", "h4", "h5", "h6", "inherit", "overline", "subtitle1", "subtitle2"]), u.string]),
  /**
   * The component maps the variant prop to a range of different HTML element types.
   * For instance, subtitle1 to `<h6>`.
   * If you wish to change that mapping, you can provide your own.
   * Alternatively, you can use the `component` prop.
   * @default {
   *   h1: 'h1',
   *   h2: 'h2',
   *   h3: 'h3',
   *   h4: 'h4',
   *   h5: 'h5',
   *   h6: 'h6',
   *   subtitle1: 'h6',
   *   subtitle2: 'h6',
   *   body1: 'p',
   *   body2: 'p',
   *   inherit: 'p',
   * }
   */
  variantMapping: u.object
});
const Zl = yn(/* @__PURE__ */ re.jsx("path", {
  d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
}), "Person");
function eu(e) {
  return et("MuiAvatar", e);
}
tt("MuiAvatar", ["root", "colorDefault", "circular", "rounded", "square", "img", "fallback"]);
const tu = (e) => {
  const {
    classes: t,
    variant: r,
    colorDefault: n
  } = e;
  return xt({
    root: ["root", r, n && "colorDefault"],
    img: ["img"],
    fallback: ["fallback"]
  }, eu, t);
}, ru = Ve("div", {
  name: "MuiAvatar",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[r.variant], r.colorDefault && t.colorDefault];
  }
})(Ct(({
  theme: e
}) => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  width: 40,
  height: 40,
  fontFamily: e.typography.fontFamily,
  fontSize: e.typography.pxToRem(20),
  lineHeight: 1,
  borderRadius: "50%",
  overflow: "hidden",
  userSelect: "none",
  variants: [{
    props: {
      variant: "rounded"
    },
    style: {
      borderRadius: (e.vars || e).shape.borderRadius
    }
  }, {
    props: {
      variant: "square"
    },
    style: {
      borderRadius: 0
    }
  }, {
    props: {
      colorDefault: !0
    },
    style: {
      color: (e.vars || e).palette.background.default,
      ...e.vars ? {
        backgroundColor: e.vars.palette.Avatar.defaultBg
      } : {
        backgroundColor: e.palette.grey[400],
        ...e.applyStyles("dark", {
          backgroundColor: e.palette.grey[600]
        })
      }
    }
  }]
}))), nu = Ve("img", {
  name: "MuiAvatar",
  slot: "Img",
  overridesResolver: (e, t) => t.img
})({
  width: "100%",
  height: "100%",
  textAlign: "center",
  // Handle non-square image.
  objectFit: "cover",
  // Hide alt text.
  color: "transparent",
  // Hide the image broken icon, only works on Chrome.
  textIndent: 1e4
}), ou = Ve(Zl, {
  name: "MuiAvatar",
  slot: "Fallback",
  overridesResolver: (e, t) => t.fallback
})({
  width: "75%",
  height: "75%"
});
function iu({
  crossOrigin: e,
  referrerPolicy: t,
  src: r,
  srcSet: n
}) {
  const [o, i] = N.useState(!1);
  return N.useEffect(() => {
    if (!r && !n)
      return;
    i(!1);
    let a = !0;
    const s = new Image();
    return s.onload = () => {
      a && i("loaded");
    }, s.onerror = () => {
      a && i("error");
    }, s.crossOrigin = e, s.referrerPolicy = t, s.src = r, n && (s.srcset = n), () => {
      a = !1;
    };
  }, [e, t, r, n]), o;
}
const ri = /* @__PURE__ */ N.forwardRef(function(t, r) {
  const n = ct({
    props: t,
    name: "MuiAvatar"
  }), {
    alt: o,
    children: i,
    className: a,
    component: s = "div",
    slots: f = {},
    slotProps: d = {},
    imgProps: p,
    sizes: h,
    src: g,
    srcSet: C,
    variant: v = "circular",
    ...y
  } = n;
  let m = null;
  const E = iu({
    ...p,
    src: g,
    srcSet: C
  }), O = g || C, R = O && E !== "error", x = {
    ...n,
    colorDefault: !R,
    component: s,
    variant: v
  };
  delete x.ownerState;
  const b = tu(x), [A, I] = Gl("img", {
    className: b.img,
    elementType: nu,
    externalForwardedProps: {
      slots: f,
      slotProps: {
        img: {
          ...p,
          ...d.img
        }
      }
    },
    additionalProps: {
      alt: o,
      src: g,
      srcSet: C,
      sizes: h
    },
    ownerState: x
  });
  return R ? m = /* @__PURE__ */ re.jsx(A, {
    ...I
  }) : i || i === 0 ? m = i : O && o ? m = o[0] : m = /* @__PURE__ */ re.jsx(ou, {
    ownerState: x,
    className: b.fallback
  }), /* @__PURE__ */ re.jsx(ru, {
    as: s,
    className: we(b.root, a),
    ref: r,
    ...y,
    ownerState: x,
    children: m
  });
});
process.env.NODE_ENV !== "production" && (ri.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Used in combination with `src` or `srcSet` to
   * provide an alt attribute for the rendered `img` element.
   */
  alt: u.string,
  /**
   * Used to render icon or text elements inside the Avatar if `src` is not set.
   * This can be an element, or just a string.
   */
  children: u.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: u.object,
  /**
   * @ignore
   */
  className: u.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: u.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attributes) applied to the `img` element if the component is used to display an image.
   * It can be used to listen for the loading error event.
   */
  imgProps: u.object,
  /**
   * The `sizes` attribute for the `img` element.
   */
  sizes: u.string,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: u.shape({
    img: u.oneOfType([u.func, u.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: u.shape({
    img: u.elementType
  }),
  /**
   * The `src` attribute for the `img` element.
   */
  src: u.string,
  /**
   * The `srcSet` attribute for the `img` element.
   * Use this attribute for responsive image display.
   */
  srcSet: u.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: u.oneOfType([u.arrayOf(u.oneOfType([u.func, u.object, u.bool])), u.func, u.object]),
  /**
   * The shape of the avatar.
   * @default 'circular'
   */
  variant: u.oneOfType([u.oneOf(["circular", "rounded", "square"]), u.string])
});
const au = tt("MuiBox", ["root"]), su = Ho(), ni = Ks({
  themeId: Ko,
  defaultTheme: su,
  defaultClassName: au.root,
  generateClassName: Fo.generate
});
process.env.NODE_ENV !== "production" && (ni.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: u.node,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: u.elementType,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: u.oneOfType([u.arrayOf(u.oneOfType([u.func, u.object, u.bool])), u.func, u.object])
});
function hu(e) {
  const { nombre: t, imagen: r, altImagen: n, tamaño: o = "medium" } = e, i = o === "small" ? 40 : o === "large" ? 80 : 56;
  return (
    // Uso el componente Box para alinear el Avatar y el nombre horizontalmente
    /* @__PURE__ */ re.jsxs(ni, { display: "flex", alignItems: "center", sx: { marginBottom: 2 }, children: [
      /* @__PURE__ */ re.jsx(ri, { alt: n, src: r, sx: { width: i, height: i, marginRight: 2 } }),
      /* @__PURE__ */ re.jsx(ti, { variant: "h6", children: t })
    ] })
  );
}
export {
  uu as CustomButton,
  hu as IzanHM,
  fu as MyButton,
  du as MyFavorite,
  pu as MyFavoriteBorder
};
//# sourceMappingURL=index.es.js.map
