var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var require_stdin = __commonJS({
  "<stdin>"(exports, module) {
    (async () => {
      function bg(e, t) {
        for (var n = 0; n < t.length; n++) {
          const r = t[n];
          if (typeof r != "string" && !Array.isArray(r)) {
            for (const o in r) if (o !== "default" && !(o in e)) {
              const i = Object.getOwnPropertyDescriptor(r, o);
              i && Object.defineProperty(e, o, i.get ? i : {
                enumerable: true,
                get: () => r[o]
              });
            }
          }
        }
        return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
          value: "Module"
        }));
      }
      (function() {
        const t = document.createElement("link").relList;
        if (t && t.supports && t.supports("modulepreload")) return;
        for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
        new MutationObserver((o) => {
          for (const i of o) if (i.type === "childList") for (const s of i.addedNodes) s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
        }).observe(document, {
          childList: true,
          subtree: true
        });
        function n(o) {
          const i = {};
          return o.integrity && (i.integrity = o.integrity), o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy), o.crossOrigin === "use-credentials" ? i.credentials = "include" : o.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin", i;
        }
        function r(o) {
          if (o.ep) return;
          o.ep = true;
          const i = n(o);
          fetch(o.href, i);
        }
      })();
      var ec = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
      function Ta(e) {
        return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
      }
      var Zf = {
        exports: {}
      }, es = {}, Jf = {
        exports: {}
      }, Q = {};
      var Co = Symbol.for("react.element"), Cg = Symbol.for("react.portal"), kg = Symbol.for("react.fragment"), Rg = Symbol.for("react.strict_mode"), Tg = Symbol.for("react.profiler"), Ng = Symbol.for("react.provider"), Pg = Symbol.for("react.context"), Ag = Symbol.for("react.forward_ref"), Ig = Symbol.for("react.suspense"), Lg = Symbol.for("react.memo"), $g = Symbol.for("react.lazy"), tc = Symbol.iterator;
      function Og(e) {
        return e === null || typeof e != "object" ? null : (e = tc && e[tc] || e["@@iterator"], typeof e == "function" ? e : null);
      }
      var ed = {
        isMounted: function() {
          return false;
        },
        enqueueForceUpdate: function() {
        },
        enqueueReplaceState: function() {
        },
        enqueueSetState: function() {
        }
      }, td = Object.assign, nd = {};
      function _r(e, t, n) {
        this.props = e, this.context = t, this.refs = nd, this.updater = n || ed;
      }
      _r.prototype.isReactComponent = {};
      _r.prototype.setState = function(e, t) {
        if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, e, t, "setState");
      };
      _r.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
      };
      function rd() {
      }
      rd.prototype = _r.prototype;
      function Na(e, t, n) {
        this.props = e, this.context = t, this.refs = nd, this.updater = n || ed;
      }
      var Pa = Na.prototype = new rd();
      Pa.constructor = Na;
      td(Pa, _r.prototype);
      Pa.isPureReactComponent = true;
      var nc = Array.isArray, od = Object.prototype.hasOwnProperty, Aa = {
        current: null
      }, id = {
        key: true,
        ref: true,
        __self: true,
        __source: true
      };
      function sd(e, t, n) {
        var r, o = {}, i = null, s = null;
        if (t != null) for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (i = "" + t.key), t) od.call(t, r) && !id.hasOwnProperty(r) && (o[r] = t[r]);
        var l = arguments.length - 2;
        if (l === 1) o.children = n;
        else if (1 < l) {
          for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
          o.children = a;
        }
        if (e && e.defaultProps) for (r in l = e.defaultProps, l) o[r] === void 0 && (o[r] = l[r]);
        return {
          $$typeof: Co,
          type: e,
          key: i,
          ref: s,
          props: o,
          _owner: Aa.current
        };
      }
      function Dg(e, t) {
        return {
          $$typeof: Co,
          type: e.type,
          key: t,
          ref: e.ref,
          props: e.props,
          _owner: e._owner
        };
      }
      function Ia(e) {
        return typeof e == "object" && e !== null && e.$$typeof === Co;
      }
      function Mg(e) {
        var t = {
          "=": "=0",
          ":": "=2"
        };
        return "$" + e.replace(/[=:]/g, function(n) {
          return t[n];
        });
      }
      var rc = /\/+/g;
      function Is(e, t) {
        return typeof e == "object" && e !== null && e.key != null ? Mg("" + e.key) : t.toString(36);
      }
      function li(e, t, n, r, o) {
        var i = typeof e;
        (i === "undefined" || i === "boolean") && (e = null);
        var s = false;
        if (e === null) s = true;
        else switch (i) {
          case "string":
          case "number":
            s = true;
            break;
          case "object":
            switch (e.$$typeof) {
              case Co:
              case Cg:
                s = true;
            }
        }
        if (s) return s = e, o = o(s), e = r === "" ? "." + Is(s, 0) : r, nc(o) ? (n = "", e != null && (n = e.replace(rc, "$&/") + "/"), li(o, t, n, "", function(u) {
          return u;
        })) : o != null && (Ia(o) && (o = Dg(o, n + (!o.key || s && s.key === o.key ? "" : ("" + o.key).replace(rc, "$&/") + "/") + e)), t.push(o)), 1;
        if (s = 0, r = r === "" ? "." : r + ":", nc(e)) for (var l = 0; l < e.length; l++) {
          i = e[l];
          var a = r + Is(i, l);
          s += li(i, t, n, a, o);
        }
        else if (a = Og(e), typeof a == "function") for (e = a.call(e), l = 0; !(i = e.next()).done; ) i = i.value, a = r + Is(i, l++), s += li(i, t, n, a, o);
        else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
        return s;
      }
      function Mo(e, t, n) {
        if (e == null) return e;
        var r = [], o = 0;
        return li(e, r, "", "", function(i) {
          return t.call(n, i, o++);
        }), r;
      }
      function Fg(e) {
        if (e._status === -1) {
          var t = e._result;
          t = t(), t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n);
          }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n);
          }), e._status === -1 && (e._status = 0, e._result = t);
        }
        if (e._status === 1) return e._result.default;
        throw e._result;
      }
      var $e = {
        current: null
      }, ai = {
        transition: null
      }, jg = {
        ReactCurrentDispatcher: $e,
        ReactCurrentBatchConfig: ai,
        ReactCurrentOwner: Aa
      };
      function ld() {
        throw Error("act(...) is not supported in production builds of React.");
      }
      Q.Children = {
        map: Mo,
        forEach: function(e, t, n) {
          Mo(e, function() {
            t.apply(this, arguments);
          }, n);
        },
        count: function(e) {
          var t = 0;
          return Mo(e, function() {
            t++;
          }), t;
        },
        toArray: function(e) {
          return Mo(e, function(t) {
            return t;
          }) || [];
        },
        only: function(e) {
          if (!Ia(e)) throw Error("React.Children.only expected to receive a single React element child.");
          return e;
        }
      };
      Q.Component = _r;
      Q.Fragment = kg;
      Q.Profiler = Tg;
      Q.PureComponent = Na;
      Q.StrictMode = Rg;
      Q.Suspense = Ig;
      Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = jg;
      Q.act = ld;
      Q.cloneElement = function(e, t, n) {
        if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
        var r = td({}, e.props), o = e.key, i = e.ref, s = e._owner;
        if (t != null) {
          if (t.ref !== void 0 && (i = t.ref, s = Aa.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var l = e.type.defaultProps;
          for (a in t) od.call(t, a) && !id.hasOwnProperty(a) && (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
        }
        var a = arguments.length - 2;
        if (a === 1) r.children = n;
        else if (1 < a) {
          l = Array(a);
          for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
          r.children = l;
        }
        return {
          $$typeof: Co,
          type: e.type,
          key: o,
          ref: i,
          props: r,
          _owner: s
        };
      };
      Q.createContext = function(e) {
        return e = {
          $$typeof: Pg,
          _currentValue: e,
          _currentValue2: e,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null
        }, e.Provider = {
          $$typeof: Ng,
          _context: e
        }, e.Consumer = e;
      };
      Q.createElement = sd;
      Q.createFactory = function(e) {
        var t = sd.bind(null, e);
        return t.type = e, t;
      };
      Q.createRef = function() {
        return {
          current: null
        };
      };
      Q.forwardRef = function(e) {
        return {
          $$typeof: Ag,
          render: e
        };
      };
      Q.isValidElement = Ia;
      Q.lazy = function(e) {
        return {
          $$typeof: $g,
          _payload: {
            _status: -1,
            _result: e
          },
          _init: Fg
        };
      };
      Q.memo = function(e, t) {
        return {
          $$typeof: Lg,
          type: e,
          compare: t === void 0 ? null : t
        };
      };
      Q.startTransition = function(e) {
        var t = ai.transition;
        ai.transition = {};
        try {
          e();
        } finally {
          ai.transition = t;
        }
      };
      Q.unstable_act = ld;
      Q.useCallback = function(e, t) {
        return $e.current.useCallback(e, t);
      };
      Q.useContext = function(e) {
        return $e.current.useContext(e);
      };
      Q.useDebugValue = function() {
      };
      Q.useDeferredValue = function(e) {
        return $e.current.useDeferredValue(e);
      };
      Q.useEffect = function(e, t) {
        return $e.current.useEffect(e, t);
      };
      Q.useId = function() {
        return $e.current.useId();
      };
      Q.useImperativeHandle = function(e, t, n) {
        return $e.current.useImperativeHandle(e, t, n);
      };
      Q.useInsertionEffect = function(e, t) {
        return $e.current.useInsertionEffect(e, t);
      };
      Q.useLayoutEffect = function(e, t) {
        return $e.current.useLayoutEffect(e, t);
      };
      Q.useMemo = function(e, t) {
        return $e.current.useMemo(e, t);
      };
      Q.useReducer = function(e, t, n) {
        return $e.current.useReducer(e, t, n);
      };
      Q.useRef = function(e) {
        return $e.current.useRef(e);
      };
      Q.useState = function(e) {
        return $e.current.useState(e);
      };
      Q.useSyncExternalStore = function(e, t, n) {
        return $e.current.useSyncExternalStore(e, t, n);
      };
      Q.useTransition = function() {
        return $e.current.useTransition();
      };
      Q.version = "18.3.1";
      Jf.exports = Q;
      var b = Jf.exports;
      const cr = Ta(b), zg = bg({
        __proto__: null,
        default: cr
      }, [
        b
      ]);
      var Bg = b, Ug = Symbol.for("react.element"), Wg = Symbol.for("react.fragment"), Vg = Object.prototype.hasOwnProperty, Hg = Bg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Gg = {
        key: true,
        ref: true,
        __self: true,
        __source: true
      };
      function ad(e, t, n) {
        var r, o = {}, i = null, s = null;
        n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (s = t.ref);
        for (r in t) Vg.call(t, r) && !Gg.hasOwnProperty(r) && (o[r] = t[r]);
        if (e && e.defaultProps) for (r in t = e.defaultProps, t) o[r] === void 0 && (o[r] = t[r]);
        return {
          $$typeof: Ug,
          type: e,
          key: i,
          ref: s,
          props: o,
          _owner: Hg.current
        };
      }
      es.Fragment = Wg;
      es.jsx = ad;
      es.jsxs = ad;
      Zf.exports = es;
      var T = Zf.exports, bl = {}, ud = {
        exports: {}
      }, Xe = {}, cd = {
        exports: {}
      }, fd = {};
      (function(e) {
        function t(E, P) {
          var $ = E.length;
          E.push(P);
          e: for (; 0 < $; ) {
            var M = $ - 1 >>> 1, V = E[M];
            if (0 < o(V, P)) E[M] = P, E[$] = V, $ = M;
            else break e;
          }
        }
        function n(E) {
          return E.length === 0 ? null : E[0];
        }
        function r(E) {
          if (E.length === 0) return null;
          var P = E[0], $ = E.pop();
          if ($ !== P) {
            E[0] = $;
            e: for (var M = 0, V = E.length, ne = V >>> 1; M < ne; ) {
              var Z = 2 * (M + 1) - 1, te = E[Z], K = Z + 1, J = E[K];
              if (0 > o(te, $)) K < V && 0 > o(J, te) ? (E[M] = J, E[K] = $, M = K) : (E[M] = te, E[Z] = $, M = Z);
              else if (K < V && 0 > o(J, $)) E[M] = J, E[K] = $, M = K;
              else break e;
            }
          }
          return P;
        }
        function o(E, P) {
          var $ = E.sortIndex - P.sortIndex;
          return $ !== 0 ? $ : E.id - P.id;
        }
        if (typeof performance == "object" && typeof performance.now == "function") {
          var i = performance;
          e.unstable_now = function() {
            return i.now();
          };
        } else {
          var s = Date, l = s.now();
          e.unstable_now = function() {
            return s.now() - l;
          };
        }
        var a = [], u = [], p = 1, d = null, m = 3, h = false, v = false, _ = false, C = typeof setTimeout == "function" ? setTimeout : null, g = typeof clearTimeout == "function" ? clearTimeout : null, c = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function f(E) {
          for (var P = n(u); P !== null; ) {
            if (P.callback === null) r(u);
            else if (P.startTime <= E) r(u), P.sortIndex = P.expirationTime, t(a, P);
            else break;
            P = n(u);
          }
        }
        function y(E) {
          if (_ = false, f(E), !v) if (n(a) !== null) v = true, W(x);
          else {
            var P = n(u);
            P !== null && O(y, P.startTime - E);
          }
        }
        function x(E, P) {
          v = false, _ && (_ = false, g(k), k = -1), h = true;
          var $ = m;
          try {
            for (f(P), d = n(a); d !== null && (!(d.expirationTime > P) || E && !A()); ) {
              var M = d.callback;
              if (typeof M == "function") {
                d.callback = null, m = d.priorityLevel;
                var V = M(d.expirationTime <= P);
                P = e.unstable_now(), typeof V == "function" ? d.callback = V : d === n(a) && r(a), f(P);
              } else r(a);
              d = n(a);
            }
            if (d !== null) var ne = true;
            else {
              var Z = n(u);
              Z !== null && O(y, Z.startTime - P), ne = false;
            }
            return ne;
          } finally {
            d = null, m = $, h = false;
          }
        }
        var S = false, w = null, k = -1, R = 5, N = -1;
        function A() {
          return !(e.unstable_now() - N < R);
        }
        function L() {
          if (w !== null) {
            var E = e.unstable_now();
            N = E;
            var P = true;
            try {
              P = w(true, E);
            } finally {
              P ? z() : (S = false, w = null);
            }
          } else S = false;
        }
        var z;
        if (typeof c == "function") z = function() {
          c(L);
        };
        else if (typeof MessageChannel < "u") {
          var j = new MessageChannel(), B = j.port2;
          j.port1.onmessage = L, z = function() {
            B.postMessage(null);
          };
        } else z = function() {
          C(L, 0);
        };
        function W(E) {
          w = E, S || (S = true, z());
        }
        function O(E, P) {
          k = C(function() {
            E(e.unstable_now());
          }, P);
        }
        e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(E) {
          E.callback = null;
        }, e.unstable_continueExecution = function() {
          v || h || (v = true, W(x));
        }, e.unstable_forceFrameRate = function(E) {
          0 > E || 125 < E ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : R = 0 < E ? Math.floor(1e3 / E) : 5;
        }, e.unstable_getCurrentPriorityLevel = function() {
          return m;
        }, e.unstable_getFirstCallbackNode = function() {
          return n(a);
        }, e.unstable_next = function(E) {
          switch (m) {
            case 1:
            case 2:
            case 3:
              var P = 3;
              break;
            default:
              P = m;
          }
          var $ = m;
          m = P;
          try {
            return E();
          } finally {
            m = $;
          }
        }, e.unstable_pauseExecution = function() {
        }, e.unstable_requestPaint = function() {
        }, e.unstable_runWithPriority = function(E, P) {
          switch (E) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
              break;
            default:
              E = 3;
          }
          var $ = m;
          m = E;
          try {
            return P();
          } finally {
            m = $;
          }
        }, e.unstable_scheduleCallback = function(E, P, $) {
          var M = e.unstable_now();
          switch (typeof $ == "object" && $ !== null ? ($ = $.delay, $ = typeof $ == "number" && 0 < $ ? M + $ : M) : $ = M, E) {
            case 1:
              var V = -1;
              break;
            case 2:
              V = 250;
              break;
            case 5:
              V = 1073741823;
              break;
            case 4:
              V = 1e4;
              break;
            default:
              V = 5e3;
          }
          return V = $ + V, E = {
            id: p++,
            callback: P,
            priorityLevel: E,
            startTime: $,
            expirationTime: V,
            sortIndex: -1
          }, $ > M ? (E.sortIndex = $, t(u, E), n(a) === null && E === n(u) && (_ ? (g(k), k = -1) : _ = true, O(y, $ - M))) : (E.sortIndex = V, t(a, E), v || h || (v = true, W(x))), E;
        }, e.unstable_shouldYield = A, e.unstable_wrapCallback = function(E) {
          var P = m;
          return function() {
            var $ = m;
            m = P;
            try {
              return E.apply(this, arguments);
            } finally {
              m = $;
            }
          };
        };
      })(fd);
      cd.exports = fd;
      var Yg = cd.exports;
      var Kg = b, Ke = Yg;
      function D(e) {
        for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
      }
      var dd = /* @__PURE__ */ new Set(), ro = {};
      function Dn(e, t) {
        fr(e, t), fr(e + "Capture", t);
      }
      function fr(e, t) {
        for (ro[e] = t, e = 0; e < t.length; e++) dd.add(t[e]);
      }
      var zt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Cl = Object.prototype.hasOwnProperty, Qg = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, oc = {}, ic = {};
      function Xg(e) {
        return Cl.call(ic, e) ? true : Cl.call(oc, e) ? false : Qg.test(e) ? ic[e] = true : (oc[e] = true, false);
      }
      function qg(e, t, n, r) {
        if (n !== null && n.type === 0) return false;
        switch (typeof t) {
          case "function":
          case "symbol":
            return true;
          case "boolean":
            return r ? false : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
          default:
            return false;
        }
      }
      function Zg(e, t, n, r) {
        if (t === null || typeof t > "u" || qg(e, t, n, r)) return true;
        if (r) return false;
        if (n !== null) switch (n.type) {
          case 3:
            return !t;
          case 4:
            return t === false;
          case 5:
            return isNaN(t);
          case 6:
            return isNaN(t) || 1 > t;
        }
        return false;
      }
      function Oe(e, t, n, r, o, i, s) {
        this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = s;
      }
      var ke = {};
      "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
        ke[e] = new Oe(e, 0, false, e, null, false, false);
      });
      [
        [
          "acceptCharset",
          "accept-charset"
        ],
        [
          "className",
          "class"
        ],
        [
          "htmlFor",
          "for"
        ],
        [
          "httpEquiv",
          "http-equiv"
        ]
      ].forEach(function(e) {
        var t = e[0];
        ke[t] = new Oe(t, 1, false, e[1], null, false, false);
      });
      [
        "contentEditable",
        "draggable",
        "spellCheck",
        "value"
      ].forEach(function(e) {
        ke[e] = new Oe(e, 2, false, e.toLowerCase(), null, false, false);
      });
      [
        "autoReverse",
        "externalResourcesRequired",
        "focusable",
        "preserveAlpha"
      ].forEach(function(e) {
        ke[e] = new Oe(e, 2, false, e, null, false, false);
      });
      "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
        ke[e] = new Oe(e, 3, false, e.toLowerCase(), null, false, false);
      });
      [
        "checked",
        "multiple",
        "muted",
        "selected"
      ].forEach(function(e) {
        ke[e] = new Oe(e, 3, true, e, null, false, false);
      });
      [
        "capture",
        "download"
      ].forEach(function(e) {
        ke[e] = new Oe(e, 4, false, e, null, false, false);
      });
      [
        "cols",
        "rows",
        "size",
        "span"
      ].forEach(function(e) {
        ke[e] = new Oe(e, 6, false, e, null, false, false);
      });
      [
        "rowSpan",
        "start"
      ].forEach(function(e) {
        ke[e] = new Oe(e, 5, false, e.toLowerCase(), null, false, false);
      });
      var La = /[\-:]([a-z])/g;
      function $a(e) {
        return e[1].toUpperCase();
      }
      "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
        var t = e.replace(La, $a);
        ke[t] = new Oe(t, 1, false, e, null, false, false);
      });
      "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
        var t = e.replace(La, $a);
        ke[t] = new Oe(t, 1, false, e, "http://www.w3.org/1999/xlink", false, false);
      });
      [
        "xml:base",
        "xml:lang",
        "xml:space"
      ].forEach(function(e) {
        var t = e.replace(La, $a);
        ke[t] = new Oe(t, 1, false, e, "http://www.w3.org/XML/1998/namespace", false, false);
      });
      [
        "tabIndex",
        "crossOrigin"
      ].forEach(function(e) {
        ke[e] = new Oe(e, 1, false, e.toLowerCase(), null, false, false);
      });
      ke.xlinkHref = new Oe("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
      [
        "src",
        "href",
        "action",
        "formAction"
      ].forEach(function(e) {
        ke[e] = new Oe(e, 1, false, e.toLowerCase(), null, true, true);
      });
      function Oa(e, t, n, r) {
        var o = ke.hasOwnProperty(t) ? ke[t] : null;
        (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Zg(t, n, o, r) && (n = null), r || o === null ? Xg(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? false : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === true ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
      }
      var Yt = Kg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Fo = Symbol.for("react.element"), Vn = Symbol.for("react.portal"), Hn = Symbol.for("react.fragment"), Da = Symbol.for("react.strict_mode"), kl = Symbol.for("react.profiler"), pd = Symbol.for("react.provider"), md = Symbol.for("react.context"), Ma = Symbol.for("react.forward_ref"), Rl = Symbol.for("react.suspense"), Tl = Symbol.for("react.suspense_list"), Fa = Symbol.for("react.memo"), qt = Symbol.for("react.lazy"), gd = Symbol.for("react.offscreen"), sc = Symbol.iterator;
      function Pr(e) {
        return e === null || typeof e != "object" ? null : (e = sc && e[sc] || e["@@iterator"], typeof e == "function" ? e : null);
      }
      var de = Object.assign, Ls;
      function Ur(e) {
        if (Ls === void 0) try {
          throw Error();
        } catch (n) {
          var t = n.stack.trim().match(/\n( *(at )?)/);
          Ls = t && t[1] || "";
        }
        return `
` + Ls + e;
      }
      var $s = false;
      function Os(e, t) {
        if (!e || $s) return "";
        $s = true;
        var n = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
          if (t) if (t = function() {
            throw Error();
          }, Object.defineProperty(t.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(t, []);
            } catch (u) {
              var r = u;
            }
            Reflect.construct(e, [], t);
          } else {
            try {
              t.call();
            } catch (u) {
              r = u;
            }
            e.call(t.prototype);
          }
          else {
            try {
              throw Error();
            } catch (u) {
              r = u;
            }
            e();
          }
        } catch (u) {
          if (u && r && typeof u.stack == "string") {
            for (var o = u.stack.split(`
`), i = r.stack.split(`
`), s = o.length - 1, l = i.length - 1; 1 <= s && 0 <= l && o[s] !== i[l]; ) l--;
            for (; 1 <= s && 0 <= l; s--, l--) if (o[s] !== i[l]) {
              if (s !== 1 || l !== 1) do
                if (s--, l--, 0 > l || o[s] !== i[l]) {
                  var a = `
` + o[s].replace(" at new ", " at ");
                  return e.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e.displayName)), a;
                }
              while (1 <= s && 0 <= l);
              break;
            }
          }
        } finally {
          $s = false, Error.prepareStackTrace = n;
        }
        return (e = e ? e.displayName || e.name : "") ? Ur(e) : "";
      }
      function Jg(e) {
        switch (e.tag) {
          case 5:
            return Ur(e.type);
          case 16:
            return Ur("Lazy");
          case 13:
            return Ur("Suspense");
          case 19:
            return Ur("SuspenseList");
          case 0:
          case 2:
          case 15:
            return e = Os(e.type, false), e;
          case 11:
            return e = Os(e.type.render, false), e;
          case 1:
            return e = Os(e.type, true), e;
          default:
            return "";
        }
      }
      function Nl(e) {
        if (e == null) return null;
        if (typeof e == "function") return e.displayName || e.name || null;
        if (typeof e == "string") return e;
        switch (e) {
          case Hn:
            return "Fragment";
          case Vn:
            return "Portal";
          case kl:
            return "Profiler";
          case Da:
            return "StrictMode";
          case Rl:
            return "Suspense";
          case Tl:
            return "SuspenseList";
        }
        if (typeof e == "object") switch (e.$$typeof) {
          case md:
            return (e.displayName || "Context") + ".Consumer";
          case pd:
            return (e._context.displayName || "Context") + ".Provider";
          case Ma:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case Fa:
            return t = e.displayName || null, t !== null ? t : Nl(e.type) || "Memo";
          case qt:
            t = e._payload, e = e._init;
            try {
              return Nl(e(t));
            } catch {
            }
        }
        return null;
      }
      function eh(e) {
        var t = e.type;
        switch (e.tag) {
          case 24:
            return "Cache";
          case 9:
            return (t.displayName || "Context") + ".Consumer";
          case 10:
            return (t._context.displayName || "Context") + ".Provider";
          case 18:
            return "DehydratedFragment";
          case 11:
            return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
          case 7:
            return "Fragment";
          case 5:
            return t;
          case 4:
            return "Portal";
          case 3:
            return "Root";
          case 6:
            return "Text";
          case 16:
            return Nl(t);
          case 8:
            return t === Da ? "StrictMode" : "Mode";
          case 22:
            return "Offscreen";
          case 12:
            return "Profiler";
          case 21:
            return "Scope";
          case 13:
            return "Suspense";
          case 19:
            return "SuspenseList";
          case 25:
            return "TracingMarker";
          case 1:
          case 0:
          case 17:
          case 2:
          case 14:
          case 15:
            if (typeof t == "function") return t.displayName || t.name || null;
            if (typeof t == "string") return t;
        }
        return null;
      }
      function dn(e) {
        switch (typeof e) {
          case "boolean":
          case "number":
          case "string":
          case "undefined":
            return e;
          case "object":
            return e;
          default:
            return "";
        }
      }
      function hd(e) {
        var t = e.type;
        return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
      }
      function th(e) {
        var t = hd(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
        if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
          var o = n.get, i = n.set;
          return Object.defineProperty(e, t, {
            configurable: true,
            get: function() {
              return o.call(this);
            },
            set: function(s) {
              r = "" + s, i.call(this, s);
            }
          }), Object.defineProperty(e, t, {
            enumerable: n.enumerable
          }), {
            getValue: function() {
              return r;
            },
            setValue: function(s) {
              r = "" + s;
            },
            stopTracking: function() {
              e._valueTracker = null, delete e[t];
            }
          };
        }
      }
      function jo(e) {
        e._valueTracker || (e._valueTracker = th(e));
      }
      function yd(e) {
        if (!e) return false;
        var t = e._valueTracker;
        if (!t) return true;
        var n = t.getValue(), r = "";
        return e && (r = hd(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), true) : false;
      }
      function Ei(e) {
        if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
        try {
          return e.activeElement || e.body;
        } catch {
          return e.body;
        }
      }
      function Pl(e, t) {
        var n = t.checked;
        return de({}, t, {
          defaultChecked: void 0,
          defaultValue: void 0,
          value: void 0,
          checked: n ?? e._wrapperState.initialChecked
        });
      }
      function lc(e, t) {
        var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
        n = dn(t.value != null ? t.value : n), e._wrapperState = {
          initialChecked: r,
          initialValue: n,
          controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
        };
      }
      function vd(e, t) {
        t = t.checked, t != null && Oa(e, "checked", t, false);
      }
      function Al(e, t) {
        vd(e, t);
        var n = dn(t.value), r = t.type;
        if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
        else if (r === "submit" || r === "reset") {
          e.removeAttribute("value");
          return;
        }
        t.hasOwnProperty("value") ? Il(e, t.type, n) : t.hasOwnProperty("defaultValue") && Il(e, t.type, dn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
      }
      function ac(e, t, n) {
        if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
          var r = t.type;
          if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
          t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
        }
        n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
      }
      function Il(e, t, n) {
        (t !== "number" || Ei(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
      }
      var Wr = Array.isArray;
      function rr(e, t, n, r) {
        if (e = e.options, t) {
          t = {};
          for (var o = 0; o < n.length; o++) t["$" + n[o]] = true;
          for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = true);
        } else {
          for (n = "" + dn(n), t = null, o = 0; o < e.length; o++) {
            if (e[o].value === n) {
              e[o].selected = true, r && (e[o].defaultSelected = true);
              return;
            }
            t !== null || e[o].disabled || (t = e[o]);
          }
          t !== null && (t.selected = true);
        }
      }
      function Ll(e, t) {
        if (t.dangerouslySetInnerHTML != null) throw Error(D(91));
        return de({}, t, {
          value: void 0,
          defaultValue: void 0,
          children: "" + e._wrapperState.initialValue
        });
      }
      function uc(e, t) {
        var n = t.value;
        if (n == null) {
          if (n = t.children, t = t.defaultValue, n != null) {
            if (t != null) throw Error(D(92));
            if (Wr(n)) {
              if (1 < n.length) throw Error(D(93));
              n = n[0];
            }
            t = n;
          }
          t == null && (t = ""), n = t;
        }
        e._wrapperState = {
          initialValue: dn(n)
        };
      }
      function _d(e, t) {
        var n = dn(t.value), r = dn(t.defaultValue);
        n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
      }
      function cc(e) {
        var t = e.textContent;
        t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
      }
      function wd(e) {
        switch (e) {
          case "svg":
            return "http://www.w3.org/2000/svg";
          case "math":
            return "http://www.w3.org/1998/Math/MathML";
          default:
            return "http://www.w3.org/1999/xhtml";
        }
      }
      function $l(e, t) {
        return e == null || e === "http://www.w3.org/1999/xhtml" ? wd(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
      }
      var zo, Sd = function(e) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, o);
          });
        } : e;
      }(function(e, t) {
        if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
        else {
          for (zo = zo || document.createElement("div"), zo.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = zo.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
          for (; t.firstChild; ) e.appendChild(t.firstChild);
        }
      });
      function oo(e, t) {
        if (t) {
          var n = e.firstChild;
          if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return;
          }
        }
        e.textContent = t;
      }
      var Yr = {
        animationIterationCount: true,
        aspectRatio: true,
        borderImageOutset: true,
        borderImageSlice: true,
        borderImageWidth: true,
        boxFlex: true,
        boxFlexGroup: true,
        boxOrdinalGroup: true,
        columnCount: true,
        columns: true,
        flex: true,
        flexGrow: true,
        flexPositive: true,
        flexShrink: true,
        flexNegative: true,
        flexOrder: true,
        gridArea: true,
        gridRow: true,
        gridRowEnd: true,
        gridRowSpan: true,
        gridRowStart: true,
        gridColumn: true,
        gridColumnEnd: true,
        gridColumnSpan: true,
        gridColumnStart: true,
        fontWeight: true,
        lineClamp: true,
        lineHeight: true,
        opacity: true,
        order: true,
        orphans: true,
        tabSize: true,
        widows: true,
        zIndex: true,
        zoom: true,
        fillOpacity: true,
        floodOpacity: true,
        stopOpacity: true,
        strokeDasharray: true,
        strokeDashoffset: true,
        strokeMiterlimit: true,
        strokeOpacity: true,
        strokeWidth: true
      }, nh = [
        "Webkit",
        "ms",
        "Moz",
        "O"
      ];
      Object.keys(Yr).forEach(function(e) {
        nh.forEach(function(t) {
          t = t + e.charAt(0).toUpperCase() + e.substring(1), Yr[t] = Yr[e];
        });
      });
      function xd(e, t, n) {
        return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Yr.hasOwnProperty(e) && Yr[e] ? ("" + t).trim() : t + "px";
      }
      function Ed(e, t) {
        e = e.style;
        for (var n in t) if (t.hasOwnProperty(n)) {
          var r = n.indexOf("--") === 0, o = xd(n, t[n], r);
          n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
        }
      }
      var rh = de({
        menuitem: true
      }, {
        area: true,
        base: true,
        br: true,
        col: true,
        embed: true,
        hr: true,
        img: true,
        input: true,
        keygen: true,
        link: true,
        meta: true,
        param: true,
        source: true,
        track: true,
        wbr: true
      });
      function Ol(e, t) {
        if (t) {
          if (rh[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(D(137, e));
          if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(D(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(D(61));
          }
          if (t.style != null && typeof t.style != "object") throw Error(D(62));
        }
      }
      function Dl(e, t) {
        if (e.indexOf("-") === -1) return typeof t.is == "string";
        switch (e) {
          case "annotation-xml":
          case "color-profile":
          case "font-face":
          case "font-face-src":
          case "font-face-uri":
          case "font-face-format":
          case "font-face-name":
          case "missing-glyph":
            return false;
          default:
            return true;
        }
      }
      var Ml = null;
      function ja(e) {
        return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
      }
      var Fl = null, or = null, ir = null;
      function fc(e) {
        if (e = To(e)) {
          if (typeof Fl != "function") throw Error(D(280));
          var t = e.stateNode;
          t && (t = is(t), Fl(e.stateNode, e.type, t));
        }
      }
      function bd(e) {
        or ? ir ? ir.push(e) : ir = [
          e
        ] : or = e;
      }
      function Cd() {
        if (or) {
          var e = or, t = ir;
          if (ir = or = null, fc(e), t) for (e = 0; e < t.length; e++) fc(t[e]);
        }
      }
      function kd(e, t) {
        return e(t);
      }
      function Rd() {
      }
      var Ds = false;
      function Td(e, t, n) {
        if (Ds) return e(t, n);
        Ds = true;
        try {
          return kd(e, t, n);
        } finally {
          Ds = false, (or !== null || ir !== null) && (Rd(), Cd());
        }
      }
      function io(e, t) {
        var n = e.stateNode;
        if (n === null) return null;
        var r = is(n);
        if (r === null) return null;
        n = r[t];
        e: switch (t) {
          case "onClick":
          case "onClickCapture":
          case "onDoubleClick":
          case "onDoubleClickCapture":
          case "onMouseDown":
          case "onMouseDownCapture":
          case "onMouseMove":
          case "onMouseMoveCapture":
          case "onMouseUp":
          case "onMouseUpCapture":
          case "onMouseEnter":
            (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
            break e;
          default:
            e = false;
        }
        if (e) return null;
        if (n && typeof n != "function") throw Error(D(231, t, typeof n));
        return n;
      }
      var jl = false;
      if (zt) try {
        var Ar = {};
        Object.defineProperty(Ar, "passive", {
          get: function() {
            jl = true;
          }
        }), window.addEventListener("test", Ar, Ar), window.removeEventListener("test", Ar, Ar);
      } catch {
        jl = false;
      }
      function oh(e, t, n, r, o, i, s, l, a) {
        var u = Array.prototype.slice.call(arguments, 3);
        try {
          t.apply(n, u);
        } catch (p) {
          this.onError(p);
        }
      }
      var Kr = false, bi = null, Ci = false, zl = null, ih = {
        onError: function(e) {
          Kr = true, bi = e;
        }
      };
      function sh(e, t, n, r, o, i, s, l, a) {
        Kr = false, bi = null, oh.apply(ih, arguments);
      }
      function lh(e, t, n, r, o, i, s, l, a) {
        if (sh.apply(this, arguments), Kr) {
          if (Kr) {
            var u = bi;
            Kr = false, bi = null;
          } else throw Error(D(198));
          Ci || (Ci = true, zl = u);
        }
      }
      function Mn(e) {
        var t = e, n = e;
        if (e.alternate) for (; t.return; ) t = t.return;
        else {
          e = t;
          do
            t = e, t.flags & 4098 && (n = t.return), e = t.return;
          while (e);
        }
        return t.tag === 3 ? n : null;
      }
      function Nd(e) {
        if (e.tag === 13) {
          var t = e.memoizedState;
          if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
        }
        return null;
      }
      function dc(e) {
        if (Mn(e) !== e) throw Error(D(188));
      }
      function ah(e) {
        var t = e.alternate;
        if (!t) {
          if (t = Mn(e), t === null) throw Error(D(188));
          return t !== e ? null : e;
        }
        for (var n = e, r = t; ; ) {
          var o = n.return;
          if (o === null) break;
          var i = o.alternate;
          if (i === null) {
            if (r = o.return, r !== null) {
              n = r;
              continue;
            }
            break;
          }
          if (o.child === i.child) {
            for (i = o.child; i; ) {
              if (i === n) return dc(o), e;
              if (i === r) return dc(o), t;
              i = i.sibling;
            }
            throw Error(D(188));
          }
          if (n.return !== r.return) n = o, r = i;
          else {
            for (var s = false, l = o.child; l; ) {
              if (l === n) {
                s = true, n = o, r = i;
                break;
              }
              if (l === r) {
                s = true, r = o, n = i;
                break;
              }
              l = l.sibling;
            }
            if (!s) {
              for (l = i.child; l; ) {
                if (l === n) {
                  s = true, n = i, r = o;
                  break;
                }
                if (l === r) {
                  s = true, r = i, n = o;
                  break;
                }
                l = l.sibling;
              }
              if (!s) throw Error(D(189));
            }
          }
          if (n.alternate !== r) throw Error(D(190));
        }
        if (n.tag !== 3) throw Error(D(188));
        return n.stateNode.current === n ? e : t;
      }
      function Pd(e) {
        return e = ah(e), e !== null ? Ad(e) : null;
      }
      function Ad(e) {
        if (e.tag === 5 || e.tag === 6) return e;
        for (e = e.child; e !== null; ) {
          var t = Ad(e);
          if (t !== null) return t;
          e = e.sibling;
        }
        return null;
      }
      var Id = Ke.unstable_scheduleCallback, pc = Ke.unstable_cancelCallback, uh = Ke.unstable_shouldYield, ch = Ke.unstable_requestPaint, ge = Ke.unstable_now, fh = Ke.unstable_getCurrentPriorityLevel, za = Ke.unstable_ImmediatePriority, Ld = Ke.unstable_UserBlockingPriority, ki = Ke.unstable_NormalPriority, dh = Ke.unstable_LowPriority, $d = Ke.unstable_IdlePriority, ts = null, xt = null;
      function ph(e) {
        if (xt && typeof xt.onCommitFiberRoot == "function") try {
          xt.onCommitFiberRoot(ts, e, void 0, (e.current.flags & 128) === 128);
        } catch {
        }
      }
      var gt = Math.clz32 ? Math.clz32 : hh, mh = Math.log, gh = Math.LN2;
      function hh(e) {
        return e >>>= 0, e === 0 ? 32 : 31 - (mh(e) / gh | 0) | 0;
      }
      var Bo = 64, Uo = 4194304;
      function Vr(e) {
        switch (e & -e) {
          case 1:
            return 1;
          case 2:
            return 2;
          case 4:
            return 4;
          case 8:
            return 8;
          case 16:
            return 16;
          case 32:
            return 32;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
            return e & 4194240;
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            return e & 130023424;
          case 134217728:
            return 134217728;
          case 268435456:
            return 268435456;
          case 536870912:
            return 536870912;
          case 1073741824:
            return 1073741824;
          default:
            return e;
        }
      }
      function Ri(e, t) {
        var n = e.pendingLanes;
        if (n === 0) return 0;
        var r = 0, o = e.suspendedLanes, i = e.pingedLanes, s = n & 268435455;
        if (s !== 0) {
          var l = s & ~o;
          l !== 0 ? r = Vr(l) : (i &= s, i !== 0 && (r = Vr(i)));
        } else s = n & ~o, s !== 0 ? r = Vr(s) : i !== 0 && (r = Vr(i));
        if (r === 0) return 0;
        if (t !== 0 && t !== r && !(t & o) && (o = r & -r, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0)) return t;
        if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - gt(t), o = 1 << n, r |= e[n], t &= ~o;
        return r;
      }
      function yh(e, t) {
        switch (e) {
          case 1:
          case 2:
          case 4:
            return t + 250;
          case 8:
          case 16:
          case 32:
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
            return t + 5e3;
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            return -1;
          case 134217728:
          case 268435456:
          case 536870912:
          case 1073741824:
            return -1;
          default:
            return -1;
        }
      }
      function vh(e, t) {
        for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
          var s = 31 - gt(i), l = 1 << s, a = o[s];
          a === -1 ? (!(l & n) || l & r) && (o[s] = yh(l, t)) : a <= t && (e.expiredLanes |= l), i &= ~l;
        }
      }
      function Bl(e) {
        return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
      }
      function Od() {
        var e = Bo;
        return Bo <<= 1, !(Bo & 4194240) && (Bo = 64), e;
      }
      function Ms(e) {
        for (var t = [], n = 0; 31 > n; n++) t.push(e);
        return t;
      }
      function ko(e, t, n) {
        e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - gt(t), e[t] = n;
      }
      function _h(e, t) {
        var n = e.pendingLanes & ~t;
        e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
        var r = e.eventTimes;
        for (e = e.expirationTimes; 0 < n; ) {
          var o = 31 - gt(n), i = 1 << o;
          t[o] = 0, r[o] = -1, e[o] = -1, n &= ~i;
        }
      }
      function Ba(e, t) {
        var n = e.entangledLanes |= t;
        for (e = e.entanglements; n; ) {
          var r = 31 - gt(n), o = 1 << r;
          o & t | e[r] & t && (e[r] |= t), n &= ~o;
        }
      }
      var ee = 0;
      function Dd(e) {
        return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
      }
      var Md, Ua, Fd, jd, zd, Ul = false, Wo = [], rn = null, on = null, sn = null, so = /* @__PURE__ */ new Map(), lo = /* @__PURE__ */ new Map(), Jt = [], wh = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
      function mc(e, t) {
        switch (e) {
          case "focusin":
          case "focusout":
            rn = null;
            break;
          case "dragenter":
          case "dragleave":
            on = null;
            break;
          case "mouseover":
          case "mouseout":
            sn = null;
            break;
          case "pointerover":
          case "pointerout":
            so.delete(t.pointerId);
            break;
          case "gotpointercapture":
          case "lostpointercapture":
            lo.delete(t.pointerId);
        }
      }
      function Ir(e, t, n, r, o, i) {
        return e === null || e.nativeEvent !== i ? (e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: i,
          targetContainers: [
            o
          ]
        }, t !== null && (t = To(t), t !== null && Ua(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
      }
      function Sh(e, t, n, r, o) {
        switch (t) {
          case "focusin":
            return rn = Ir(rn, e, t, n, r, o), true;
          case "dragenter":
            return on = Ir(on, e, t, n, r, o), true;
          case "mouseover":
            return sn = Ir(sn, e, t, n, r, o), true;
          case "pointerover":
            var i = o.pointerId;
            return so.set(i, Ir(so.get(i) || null, e, t, n, r, o)), true;
          case "gotpointercapture":
            return i = o.pointerId, lo.set(i, Ir(lo.get(i) || null, e, t, n, r, o)), true;
        }
        return false;
      }
      function Bd(e) {
        var t = En(e.target);
        if (t !== null) {
          var n = Mn(t);
          if (n !== null) {
            if (t = n.tag, t === 13) {
              if (t = Nd(n), t !== null) {
                e.blockedOn = t, zd(e.priority, function() {
                  Fd(n);
                });
                return;
              }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
              e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
              return;
            }
          }
        }
        e.blockedOn = null;
      }
      function ui(e) {
        if (e.blockedOn !== null) return false;
        for (var t = e.targetContainers; 0 < t.length; ) {
          var n = Wl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
          if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            Ml = r, n.target.dispatchEvent(r), Ml = null;
          } else return t = To(n), t !== null && Ua(t), e.blockedOn = n, false;
          t.shift();
        }
        return true;
      }
      function gc(e, t, n) {
        ui(e) && n.delete(t);
      }
      function xh() {
        Ul = false, rn !== null && ui(rn) && (rn = null), on !== null && ui(on) && (on = null), sn !== null && ui(sn) && (sn = null), so.forEach(gc), lo.forEach(gc);
      }
      function Lr(e, t) {
        e.blockedOn === t && (e.blockedOn = null, Ul || (Ul = true, Ke.unstable_scheduleCallback(Ke.unstable_NormalPriority, xh)));
      }
      function ao(e) {
        function t(o) {
          return Lr(o, e);
        }
        if (0 < Wo.length) {
          Lr(Wo[0], e);
          for (var n = 1; n < Wo.length; n++) {
            var r = Wo[n];
            r.blockedOn === e && (r.blockedOn = null);
          }
        }
        for (rn !== null && Lr(rn, e), on !== null && Lr(on, e), sn !== null && Lr(sn, e), so.forEach(t), lo.forEach(t), n = 0; n < Jt.length; n++) r = Jt[n], r.blockedOn === e && (r.blockedOn = null);
        for (; 0 < Jt.length && (n = Jt[0], n.blockedOn === null); ) Bd(n), n.blockedOn === null && Jt.shift();
      }
      var sr = Yt.ReactCurrentBatchConfig, Ti = true;
      function Eh(e, t, n, r) {
        var o = ee, i = sr.transition;
        sr.transition = null;
        try {
          ee = 1, Wa(e, t, n, r);
        } finally {
          ee = o, sr.transition = i;
        }
      }
      function bh(e, t, n, r) {
        var o = ee, i = sr.transition;
        sr.transition = null;
        try {
          ee = 4, Wa(e, t, n, r);
        } finally {
          ee = o, sr.transition = i;
        }
      }
      function Wa(e, t, n, r) {
        if (Ti) {
          var o = Wl(e, t, n, r);
          if (o === null) Ys(e, t, r, Ni, n), mc(e, r);
          else if (Sh(o, e, t, n, r)) r.stopPropagation();
          else if (mc(e, r), t & 4 && -1 < wh.indexOf(e)) {
            for (; o !== null; ) {
              var i = To(o);
              if (i !== null && Md(i), i = Wl(e, t, n, r), i === null && Ys(e, t, r, Ni, n), i === o) break;
              o = i;
            }
            o !== null && r.stopPropagation();
          } else Ys(e, t, r, null, n);
        }
      }
      var Ni = null;
      function Wl(e, t, n, r) {
        if (Ni = null, e = ja(r), e = En(e), e !== null) if (t = Mn(e), t === null) e = null;
        else if (n = t.tag, n === 13) {
          if (e = Nd(t), e !== null) return e;
          e = null;
        } else if (n === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
        return Ni = e, null;
      }
      function Ud(e) {
        switch (e) {
          case "cancel":
          case "click":
          case "close":
          case "contextmenu":
          case "copy":
          case "cut":
          case "auxclick":
          case "dblclick":
          case "dragend":
          case "dragstart":
          case "drop":
          case "focusin":
          case "focusout":
          case "input":
          case "invalid":
          case "keydown":
          case "keypress":
          case "keyup":
          case "mousedown":
          case "mouseup":
          case "paste":
          case "pause":
          case "play":
          case "pointercancel":
          case "pointerdown":
          case "pointerup":
          case "ratechange":
          case "reset":
          case "resize":
          case "seeked":
          case "submit":
          case "touchcancel":
          case "touchend":
          case "touchstart":
          case "volumechange":
          case "change":
          case "selectionchange":
          case "textInput":
          case "compositionstart":
          case "compositionend":
          case "compositionupdate":
          case "beforeblur":
          case "afterblur":
          case "beforeinput":
          case "blur":
          case "fullscreenchange":
          case "focus":
          case "hashchange":
          case "popstate":
          case "select":
          case "selectstart":
            return 1;
          case "drag":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "mousemove":
          case "mouseout":
          case "mouseover":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "scroll":
          case "toggle":
          case "touchmove":
          case "wheel":
          case "mouseenter":
          case "mouseleave":
          case "pointerenter":
          case "pointerleave":
            return 4;
          case "message":
            switch (fh()) {
              case za:
                return 1;
              case Ld:
                return 4;
              case ki:
              case dh:
                return 16;
              case $d:
                return 536870912;
              default:
                return 16;
            }
          default:
            return 16;
        }
      }
      var tn = null, Va = null, ci = null;
      function Wd() {
        if (ci) return ci;
        var e, t = Va, n = t.length, r, o = "value" in tn ? tn.value : tn.textContent, i = o.length;
        for (e = 0; e < n && t[e] === o[e]; e++) ;
        var s = n - e;
        for (r = 1; r <= s && t[n - r] === o[i - r]; r++) ;
        return ci = o.slice(e, 1 < r ? 1 - r : void 0);
      }
      function fi(e) {
        var t = e.keyCode;
        return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
      }
      function Vo() {
        return true;
      }
      function hc() {
        return false;
      }
      function qe(e) {
        function t(n, r, o, i, s) {
          this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = s, this.currentTarget = null;
          for (var l in e) e.hasOwnProperty(l) && (n = e[l], this[l] = n ? n(i) : i[l]);
          return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === false) ? Vo : hc, this.isPropagationStopped = hc, this;
        }
        return de(t.prototype, {
          preventDefault: function() {
            this.defaultPrevented = true;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = false), this.isDefaultPrevented = Vo);
          },
          stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = true), this.isPropagationStopped = Vo);
          },
          persist: function() {
          },
          isPersistent: Vo
        }), t;
      }
      var wr = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
          return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0
      }, Ha = qe(wr), Ro = de({}, wr, {
        view: 0,
        detail: 0
      }), Ch = qe(Ro), Fs, js, $r, ns = de({}, Ro, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: Ga,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
          return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
        },
        movementX: function(e) {
          return "movementX" in e ? e.movementX : (e !== $r && ($r && e.type === "mousemove" ? (Fs = e.screenX - $r.screenX, js = e.screenY - $r.screenY) : js = Fs = 0, $r = e), Fs);
        },
        movementY: function(e) {
          return "movementY" in e ? e.movementY : js;
        }
      }), yc = qe(ns), kh = de({}, ns, {
        dataTransfer: 0
      }), Rh = qe(kh), Th = de({}, Ro, {
        relatedTarget: 0
      }), zs = qe(Th), Nh = de({}, wr, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
      }), Ph = qe(Nh), Ah = de({}, wr, {
        clipboardData: function(e) {
          return "clipboardData" in e ? e.clipboardData : window.clipboardData;
        }
      }), Ih = qe(Ah), Lh = de({}, wr, {
        data: 0
      }), vc = qe(Lh), $h = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
      }, Oh = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
      }, Dh = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
      };
      function Mh(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : (e = Dh[e]) ? !!t[e] : false;
      }
      function Ga() {
        return Mh;
      }
      var Fh = de({}, Ro, {
        key: function(e) {
          if (e.key) {
            var t = $h[e.key] || e.key;
            if (t !== "Unidentified") return t;
          }
          return e.type === "keypress" ? (e = fi(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Oh[e.keyCode] || "Unidentified" : "";
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: Ga,
        charCode: function(e) {
          return e.type === "keypress" ? fi(e) : 0;
        },
        keyCode: function(e) {
          return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        },
        which: function(e) {
          return e.type === "keypress" ? fi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        }
      }), jh = qe(Fh), zh = de({}, ns, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
      }), _c = qe(zh), Bh = de({}, Ro, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Ga
      }), Uh = qe(Bh), Wh = de({}, wr, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
      }), Vh = qe(Wh), Hh = de({}, ns, {
        deltaX: function(e) {
          return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
        },
        deltaY: function(e) {
          return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
        },
        deltaZ: 0,
        deltaMode: 0
      }), Gh = qe(Hh), Yh = [
        9,
        13,
        27,
        32
      ], Ya = zt && "CompositionEvent" in window, Qr = null;
      zt && "documentMode" in document && (Qr = document.documentMode);
      var Kh = zt && "TextEvent" in window && !Qr, Vd = zt && (!Ya || Qr && 8 < Qr && 11 >= Qr), wc = " ", Sc = false;
      function Hd(e, t) {
        switch (e) {
          case "keyup":
            return Yh.indexOf(t.keyCode) !== -1;
          case "keydown":
            return t.keyCode !== 229;
          case "keypress":
          case "mousedown":
          case "focusout":
            return true;
          default:
            return false;
        }
      }
      function Gd(e) {
        return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
      }
      var Gn = false;
      function Qh(e, t) {
        switch (e) {
          case "compositionend":
            return Gd(t);
          case "keypress":
            return t.which !== 32 ? null : (Sc = true, wc);
          case "textInput":
            return e = t.data, e === wc && Sc ? null : e;
          default:
            return null;
        }
      }
      function Xh(e, t) {
        if (Gn) return e === "compositionend" || !Ya && Hd(e, t) ? (e = Wd(), ci = Va = tn = null, Gn = false, e) : null;
        switch (e) {
          case "paste":
            return null;
          case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
              if (t.char && 1 < t.char.length) return t.char;
              if (t.which) return String.fromCharCode(t.which);
            }
            return null;
          case "compositionend":
            return Vd && t.locale !== "ko" ? null : t.data;
          default:
            return null;
        }
      }
      var qh = {
        color: true,
        date: true,
        datetime: true,
        "datetime-local": true,
        email: true,
        month: true,
        number: true,
        password: true,
        range: true,
        search: true,
        tel: true,
        text: true,
        time: true,
        url: true,
        week: true
      };
      function xc(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t === "input" ? !!qh[e.type] : t === "textarea";
      }
      function Yd(e, t, n, r) {
        bd(r), t = Pi(t, "onChange"), 0 < t.length && (n = new Ha("onChange", "change", null, n, r), e.push({
          event: n,
          listeners: t
        }));
      }
      var Xr = null, uo = null;
      function Zh(e) {
        op(e, 0);
      }
      function rs(e) {
        var t = Qn(e);
        if (yd(t)) return e;
      }
      function Jh(e, t) {
        if (e === "change") return t;
      }
      var Kd = false;
      if (zt) {
        var Bs;
        if (zt) {
          var Us = "oninput" in document;
          if (!Us) {
            var Ec = document.createElement("div");
            Ec.setAttribute("oninput", "return;"), Us = typeof Ec.oninput == "function";
          }
          Bs = Us;
        } else Bs = false;
        Kd = Bs && (!document.documentMode || 9 < document.documentMode);
      }
      function bc() {
        Xr && (Xr.detachEvent("onpropertychange", Qd), uo = Xr = null);
      }
      function Qd(e) {
        if (e.propertyName === "value" && rs(uo)) {
          var t = [];
          Yd(t, uo, e, ja(e)), Td(Zh, t);
        }
      }
      function ey(e, t, n) {
        e === "focusin" ? (bc(), Xr = t, uo = n, Xr.attachEvent("onpropertychange", Qd)) : e === "focusout" && bc();
      }
      function ty(e) {
        if (e === "selectionchange" || e === "keyup" || e === "keydown") return rs(uo);
      }
      function ny(e, t) {
        if (e === "click") return rs(t);
      }
      function ry(e, t) {
        if (e === "input" || e === "change") return rs(t);
      }
      function oy(e, t) {
        return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
      }
      var yt = typeof Object.is == "function" ? Object.is : oy;
      function co(e, t) {
        if (yt(e, t)) return true;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null) return false;
        var n = Object.keys(e), r = Object.keys(t);
        if (n.length !== r.length) return false;
        for (r = 0; r < n.length; r++) {
          var o = n[r];
          if (!Cl.call(t, o) || !yt(e[o], t[o])) return false;
        }
        return true;
      }
      function Cc(e) {
        for (; e && e.firstChild; ) e = e.firstChild;
        return e;
      }
      function kc(e, t) {
        var n = Cc(e);
        e = 0;
        for (var r; n; ) {
          if (n.nodeType === 3) {
            if (r = e + n.textContent.length, e <= t && r >= t) return {
              node: n,
              offset: t - e
            };
            e = r;
          }
          e: {
            for (; n; ) {
              if (n.nextSibling) {
                n = n.nextSibling;
                break e;
              }
              n = n.parentNode;
            }
            n = void 0;
          }
          n = Cc(n);
        }
      }
      function Xd(e, t) {
        return e && t ? e === t ? true : e && e.nodeType === 3 ? false : t && t.nodeType === 3 ? Xd(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : false : false;
      }
      function qd() {
        for (var e = window, t = Ei(); t instanceof e.HTMLIFrameElement; ) {
          try {
            var n = typeof t.contentWindow.location.href == "string";
          } catch {
            n = false;
          }
          if (n) e = t.contentWindow;
          else break;
          t = Ei(e.document);
        }
        return t;
      }
      function Ka(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
      }
      function iy(e) {
        var t = qd(), n = e.focusedElem, r = e.selectionRange;
        if (t !== n && n && n.ownerDocument && Xd(n.ownerDocument.documentElement, n)) {
          if (r !== null && Ka(n)) {
            if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
              e = e.getSelection();
              var o = n.textContent.length, i = Math.min(r.start, o);
              r = r.end === void 0 ? i : Math.min(r.end, o), !e.extend && i > r && (o = r, r = i, i = o), o = kc(n, i);
              var s = kc(n, r);
              o && s && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (t = t.createRange(), t.setStart(o.node, o.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset), e.addRange(t)));
            }
          }
          for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({
            element: e,
            left: e.scrollLeft,
            top: e.scrollTop
          });
          for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
        }
      }
      var sy = zt && "documentMode" in document && 11 >= document.documentMode, Yn = null, Vl = null, qr = null, Hl = false;
      function Rc(e, t, n) {
        var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
        Hl || Yn == null || Yn !== Ei(r) || (r = Yn, "selectionStart" in r && Ka(r) ? r = {
          start: r.selectionStart,
          end: r.selectionEnd
        } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset
        }), qr && co(qr, r) || (qr = r, r = Pi(Vl, "onSelect"), 0 < r.length && (t = new Ha("onSelect", "select", null, t, n), e.push({
          event: t,
          listeners: r
        }), t.target = Yn)));
      }
      function Ho(e, t) {
        var n = {};
        return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
      }
      var Kn = {
        animationend: Ho("Animation", "AnimationEnd"),
        animationiteration: Ho("Animation", "AnimationIteration"),
        animationstart: Ho("Animation", "AnimationStart"),
        transitionend: Ho("Transition", "TransitionEnd")
      }, Ws = {}, Zd = {};
      zt && (Zd = document.createElement("div").style, "AnimationEvent" in window || (delete Kn.animationend.animation, delete Kn.animationiteration.animation, delete Kn.animationstart.animation), "TransitionEvent" in window || delete Kn.transitionend.transition);
      function os(e) {
        if (Ws[e]) return Ws[e];
        if (!Kn[e]) return e;
        var t = Kn[e], n;
        for (n in t) if (t.hasOwnProperty(n) && n in Zd) return Ws[e] = t[n];
        return e;
      }
      var Jd = os("animationend"), ep = os("animationiteration"), tp = os("animationstart"), np = os("transitionend"), rp = /* @__PURE__ */ new Map(), Tc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
      function gn(e, t) {
        rp.set(e, t), Dn(t, [
          e
        ]);
      }
      for (var Vs = 0; Vs < Tc.length; Vs++) {
        var Hs = Tc[Vs], ly = Hs.toLowerCase(), ay = Hs[0].toUpperCase() + Hs.slice(1);
        gn(ly, "on" + ay);
      }
      gn(Jd, "onAnimationEnd");
      gn(ep, "onAnimationIteration");
      gn(tp, "onAnimationStart");
      gn("dblclick", "onDoubleClick");
      gn("focusin", "onFocus");
      gn("focusout", "onBlur");
      gn(np, "onTransitionEnd");
      fr("onMouseEnter", [
        "mouseout",
        "mouseover"
      ]);
      fr("onMouseLeave", [
        "mouseout",
        "mouseover"
      ]);
      fr("onPointerEnter", [
        "pointerout",
        "pointerover"
      ]);
      fr("onPointerLeave", [
        "pointerout",
        "pointerover"
      ]);
      Dn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
      Dn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
      Dn("onBeforeInput", [
        "compositionend",
        "keypress",
        "textInput",
        "paste"
      ]);
      Dn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
      Dn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
      Dn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
      var Hr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), uy = new Set("cancel close invalid load scroll toggle".split(" ").concat(Hr));
      function Nc(e, t, n) {
        var r = e.type || "unknown-event";
        e.currentTarget = n, lh(r, t, void 0, e), e.currentTarget = null;
      }
      function op(e, t) {
        t = (t & 4) !== 0;
        for (var n = 0; n < e.length; n++) {
          var r = e[n], o = r.event;
          r = r.listeners;
          e: {
            var i = void 0;
            if (t) for (var s = r.length - 1; 0 <= s; s--) {
              var l = r[s], a = l.instance, u = l.currentTarget;
              if (l = l.listener, a !== i && o.isPropagationStopped()) break e;
              Nc(o, l, u), i = a;
            }
            else for (s = 0; s < r.length; s++) {
              if (l = r[s], a = l.instance, u = l.currentTarget, l = l.listener, a !== i && o.isPropagationStopped()) break e;
              Nc(o, l, u), i = a;
            }
          }
        }
        if (Ci) throw e = zl, Ci = false, zl = null, e;
      }
      function ie(e, t) {
        var n = t[Xl];
        n === void 0 && (n = t[Xl] = /* @__PURE__ */ new Set());
        var r = e + "__bubble";
        n.has(r) || (ip(t, e, 2, false), n.add(r));
      }
      function Gs(e, t, n) {
        var r = 0;
        t && (r |= 4), ip(n, e, r, t);
      }
      var Go = "_reactListening" + Math.random().toString(36).slice(2);
      function fo(e) {
        if (!e[Go]) {
          e[Go] = true, dd.forEach(function(n) {
            n !== "selectionchange" && (uy.has(n) || Gs(n, false, e), Gs(n, true, e));
          });
          var t = e.nodeType === 9 ? e : e.ownerDocument;
          t === null || t[Go] || (t[Go] = true, Gs("selectionchange", false, t));
        }
      }
      function ip(e, t, n, r) {
        switch (Ud(t)) {
          case 1:
            var o = Eh;
            break;
          case 4:
            o = bh;
            break;
          default:
            o = Wa;
        }
        n = o.bind(null, t, n, e), o = void 0, !jl || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = true), r ? o !== void 0 ? e.addEventListener(t, n, {
          capture: true,
          passive: o
        }) : e.addEventListener(t, n, true) : o !== void 0 ? e.addEventListener(t, n, {
          passive: o
        }) : e.addEventListener(t, n, false);
      }
      function Ys(e, t, n, r, o) {
        var i = r;
        if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
          if (r === null) return;
          var s = r.tag;
          if (s === 3 || s === 4) {
            var l = r.stateNode.containerInfo;
            if (l === o || l.nodeType === 8 && l.parentNode === o) break;
            if (s === 4) for (s = r.return; s !== null; ) {
              var a = s.tag;
              if ((a === 3 || a === 4) && (a = s.stateNode.containerInfo, a === o || a.nodeType === 8 && a.parentNode === o)) return;
              s = s.return;
            }
            for (; l !== null; ) {
              if (s = En(l), s === null) return;
              if (a = s.tag, a === 5 || a === 6) {
                r = i = s;
                continue e;
              }
              l = l.parentNode;
            }
          }
          r = r.return;
        }
        Td(function() {
          var u = i, p = ja(n), d = [];
          e: {
            var m = rp.get(e);
            if (m !== void 0) {
              var h = Ha, v = e;
              switch (e) {
                case "keypress":
                  if (fi(n) === 0) break e;
                case "keydown":
                case "keyup":
                  h = jh;
                  break;
                case "focusin":
                  v = "focus", h = zs;
                  break;
                case "focusout":
                  v = "blur", h = zs;
                  break;
                case "beforeblur":
                case "afterblur":
                  h = zs;
                  break;
                case "click":
                  if (n.button === 2) break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                  h = yc;
                  break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                  h = Rh;
                  break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                  h = Uh;
                  break;
                case Jd:
                case ep:
                case tp:
                  h = Ph;
                  break;
                case np:
                  h = Vh;
                  break;
                case "scroll":
                  h = Ch;
                  break;
                case "wheel":
                  h = Gh;
                  break;
                case "copy":
                case "cut":
                case "paste":
                  h = Ih;
                  break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                  h = _c;
              }
              var _ = (t & 4) !== 0, C = !_ && e === "scroll", g = _ ? m !== null ? m + "Capture" : null : m;
              _ = [];
              for (var c = u, f; c !== null; ) {
                f = c;
                var y = f.stateNode;
                if (f.tag === 5 && y !== null && (f = y, g !== null && (y = io(c, g), y != null && _.push(po(c, y, f)))), C) break;
                c = c.return;
              }
              0 < _.length && (m = new h(m, v, null, n, p), d.push({
                event: m,
                listeners: _
              }));
            }
          }
          if (!(t & 7)) {
            e: {
              if (m = e === "mouseover" || e === "pointerover", h = e === "mouseout" || e === "pointerout", m && n !== Ml && (v = n.relatedTarget || n.fromElement) && (En(v) || v[Bt])) break e;
              if ((h || m) && (m = p.window === p ? p : (m = p.ownerDocument) ? m.defaultView || m.parentWindow : window, h ? (v = n.relatedTarget || n.toElement, h = u, v = v ? En(v) : null, v !== null && (C = Mn(v), v !== C || v.tag !== 5 && v.tag !== 6) && (v = null)) : (h = null, v = u), h !== v)) {
                if (_ = yc, y = "onMouseLeave", g = "onMouseEnter", c = "mouse", (e === "pointerout" || e === "pointerover") && (_ = _c, y = "onPointerLeave", g = "onPointerEnter", c = "pointer"), C = h == null ? m : Qn(h), f = v == null ? m : Qn(v), m = new _(y, c + "leave", h, n, p), m.target = C, m.relatedTarget = f, y = null, En(p) === u && (_ = new _(g, c + "enter", v, n, p), _.target = f, _.relatedTarget = C, y = _), C = y, h && v) t: {
                  for (_ = h, g = v, c = 0, f = _; f; f = jn(f)) c++;
                  for (f = 0, y = g; y; y = jn(y)) f++;
                  for (; 0 < c - f; ) _ = jn(_), c--;
                  for (; 0 < f - c; ) g = jn(g), f--;
                  for (; c--; ) {
                    if (_ === g || g !== null && _ === g.alternate) break t;
                    _ = jn(_), g = jn(g);
                  }
                  _ = null;
                }
                else _ = null;
                h !== null && Pc(d, m, h, _, false), v !== null && C !== null && Pc(d, C, v, _, true);
              }
            }
            e: {
              if (m = u ? Qn(u) : window, h = m.nodeName && m.nodeName.toLowerCase(), h === "select" || h === "input" && m.type === "file") var x = Jh;
              else if (xc(m)) if (Kd) x = ry;
              else {
                x = ty;
                var S = ey;
              }
              else (h = m.nodeName) && h.toLowerCase() === "input" && (m.type === "checkbox" || m.type === "radio") && (x = ny);
              if (x && (x = x(e, u))) {
                Yd(d, x, n, p);
                break e;
              }
              S && S(e, m, u), e === "focusout" && (S = m._wrapperState) && S.controlled && m.type === "number" && Il(m, "number", m.value);
            }
            switch (S = u ? Qn(u) : window, e) {
              case "focusin":
                (xc(S) || S.contentEditable === "true") && (Yn = S, Vl = u, qr = null);
                break;
              case "focusout":
                qr = Vl = Yn = null;
                break;
              case "mousedown":
                Hl = true;
                break;
              case "contextmenu":
              case "mouseup":
              case "dragend":
                Hl = false, Rc(d, n, p);
                break;
              case "selectionchange":
                if (sy) break;
              case "keydown":
              case "keyup":
                Rc(d, n, p);
            }
            var w;
            if (Ya) e: {
              switch (e) {
                case "compositionstart":
                  var k = "onCompositionStart";
                  break e;
                case "compositionend":
                  k = "onCompositionEnd";
                  break e;
                case "compositionupdate":
                  k = "onCompositionUpdate";
                  break e;
              }
              k = void 0;
            }
            else Gn ? Hd(e, n) && (k = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (k = "onCompositionStart");
            k && (Vd && n.locale !== "ko" && (Gn || k !== "onCompositionStart" ? k === "onCompositionEnd" && Gn && (w = Wd()) : (tn = p, Va = "value" in tn ? tn.value : tn.textContent, Gn = true)), S = Pi(u, k), 0 < S.length && (k = new vc(k, e, null, n, p), d.push({
              event: k,
              listeners: S
            }), w ? k.data = w : (w = Gd(n), w !== null && (k.data = w)))), (w = Kh ? Qh(e, n) : Xh(e, n)) && (u = Pi(u, "onBeforeInput"), 0 < u.length && (p = new vc("onBeforeInput", "beforeinput", null, n, p), d.push({
              event: p,
              listeners: u
            }), p.data = w));
          }
          op(d, t);
        });
      }
      function po(e, t, n) {
        return {
          instance: e,
          listener: t,
          currentTarget: n
        };
      }
      function Pi(e, t) {
        for (var n = t + "Capture", r = []; e !== null; ) {
          var o = e, i = o.stateNode;
          o.tag === 5 && i !== null && (o = i, i = io(e, n), i != null && r.unshift(po(e, i, o)), i = io(e, t), i != null && r.push(po(e, i, o))), e = e.return;
        }
        return r;
      }
      function jn(e) {
        if (e === null) return null;
        do
          e = e.return;
        while (e && e.tag !== 5);
        return e || null;
      }
      function Pc(e, t, n, r, o) {
        for (var i = t._reactName, s = []; n !== null && n !== r; ) {
          var l = n, a = l.alternate, u = l.stateNode;
          if (a !== null && a === r) break;
          l.tag === 5 && u !== null && (l = u, o ? (a = io(n, i), a != null && s.unshift(po(n, a, l))) : o || (a = io(n, i), a != null && s.push(po(n, a, l)))), n = n.return;
        }
        s.length !== 0 && e.push({
          event: t,
          listeners: s
        });
      }
      var cy = /\r\n?/g, fy = /\u0000|\uFFFD/g;
      function Ac(e) {
        return (typeof e == "string" ? e : "" + e).replace(cy, `
`).replace(fy, "");
      }
      function Yo(e, t, n) {
        if (t = Ac(t), Ac(e) !== t && n) throw Error(D(425));
      }
      function Ai() {
      }
      var Gl = null, Yl = null;
      function Kl(e, t) {
        return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
      }
      var Ql = typeof setTimeout == "function" ? setTimeout : void 0, dy = typeof clearTimeout == "function" ? clearTimeout : void 0, Ic = typeof Promise == "function" ? Promise : void 0, py = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ic < "u" ? function(e) {
        return Ic.resolve(null).then(e).catch(my);
      } : Ql;
      function my(e) {
        setTimeout(function() {
          throw e;
        });
      }
      function Ks(e, t) {
        var n = t, r = 0;
        do {
          var o = n.nextSibling;
          if (e.removeChild(n), o && o.nodeType === 8) if (n = o.data, n === "/$") {
            if (r === 0) {
              e.removeChild(o), ao(t);
              return;
            }
            r--;
          } else n !== "$" && n !== "$?" && n !== "$!" || r++;
          n = o;
        } while (n);
        ao(t);
      }
      function ln(e) {
        for (; e != null; e = e.nextSibling) {
          var t = e.nodeType;
          if (t === 1 || t === 3) break;
          if (t === 8) {
            if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
            if (t === "/$") return null;
          }
        }
        return e;
      }
      function Lc(e) {
        e = e.previousSibling;
        for (var t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
              if (t === 0) return e;
              t--;
            } else n === "/$" && t++;
          }
          e = e.previousSibling;
        }
        return null;
      }
      var Sr = Math.random().toString(36).slice(2), St = "__reactFiber$" + Sr, mo = "__reactProps$" + Sr, Bt = "__reactContainer$" + Sr, Xl = "__reactEvents$" + Sr, gy = "__reactListeners$" + Sr, hy = "__reactHandles$" + Sr;
      function En(e) {
        var t = e[St];
        if (t) return t;
        for (var n = e.parentNode; n; ) {
          if (t = n[Bt] || n[St]) {
            if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Lc(e); e !== null; ) {
              if (n = e[St]) return n;
              e = Lc(e);
            }
            return t;
          }
          e = n, n = e.parentNode;
        }
        return null;
      }
      function To(e) {
        return e = e[St] || e[Bt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
      }
      function Qn(e) {
        if (e.tag === 5 || e.tag === 6) return e.stateNode;
        throw Error(D(33));
      }
      function is(e) {
        return e[mo] || null;
      }
      var ql = [], Xn = -1;
      function hn(e) {
        return {
          current: e
        };
      }
      function le(e) {
        0 > Xn || (e.current = ql[Xn], ql[Xn] = null, Xn--);
      }
      function re(e, t) {
        Xn++, ql[Xn] = e.current, e.current = t;
      }
      var pn = {}, Pe = hn(pn), je = hn(false), Nn = pn;
      function dr(e, t) {
        var n = e.type.contextTypes;
        if (!n) return pn;
        var r = e.stateNode;
        if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
        var o = {}, i;
        for (i in n) o[i] = t[i];
        return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
      }
      function ze(e) {
        return e = e.childContextTypes, e != null;
      }
      function Ii() {
        le(je), le(Pe);
      }
      function $c(e, t, n) {
        if (Pe.current !== pn) throw Error(D(168));
        re(Pe, t), re(je, n);
      }
      function sp(e, t, n) {
        var r = e.stateNode;
        if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
        r = r.getChildContext();
        for (var o in r) if (!(o in t)) throw Error(D(108, eh(e) || "Unknown", o));
        return de({}, n, r);
      }
      function Li(e) {
        return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || pn, Nn = Pe.current, re(Pe, e), re(je, je.current), true;
      }
      function Oc(e, t, n) {
        var r = e.stateNode;
        if (!r) throw Error(D(169));
        n ? (e = sp(e, t, Nn), r.__reactInternalMemoizedMergedChildContext = e, le(je), le(Pe), re(Pe, e)) : le(je), re(je, n);
      }
      var Lt = null, ss = false, Qs = false;
      function lp(e) {
        Lt === null ? Lt = [
          e
        ] : Lt.push(e);
      }
      function yy(e) {
        ss = true, lp(e);
      }
      function yn() {
        if (!Qs && Lt !== null) {
          Qs = true;
          var e = 0, t = ee;
          try {
            var n = Lt;
            for (ee = 1; e < n.length; e++) {
              var r = n[e];
              do
                r = r(true);
              while (r !== null);
            }
            Lt = null, ss = false;
          } catch (o) {
            throw Lt !== null && (Lt = Lt.slice(e + 1)), Id(za, yn), o;
          } finally {
            ee = t, Qs = false;
          }
        }
        return null;
      }
      var qn = [], Zn = 0, $i = null, Oi = 0, Ze = [], Je = 0, Pn = null, Dt = 1, Mt = "";
      function Sn(e, t) {
        qn[Zn++] = Oi, qn[Zn++] = $i, $i = e, Oi = t;
      }
      function ap(e, t, n) {
        Ze[Je++] = Dt, Ze[Je++] = Mt, Ze[Je++] = Pn, Pn = e;
        var r = Dt;
        e = Mt;
        var o = 32 - gt(r) - 1;
        r &= ~(1 << o), n += 1;
        var i = 32 - gt(t) + o;
        if (30 < i) {
          var s = o - o % 5;
          i = (r & (1 << s) - 1).toString(32), r >>= s, o -= s, Dt = 1 << 32 - gt(t) + o | n << o | r, Mt = i + e;
        } else Dt = 1 << i | n << o | r, Mt = e;
      }
      function Qa(e) {
        e.return !== null && (Sn(e, 1), ap(e, 1, 0));
      }
      function Xa(e) {
        for (; e === $i; ) $i = qn[--Zn], qn[Zn] = null, Oi = qn[--Zn], qn[Zn] = null;
        for (; e === Pn; ) Pn = Ze[--Je], Ze[Je] = null, Mt = Ze[--Je], Ze[Je] = null, Dt = Ze[--Je], Ze[Je] = null;
      }
      var Ye = null, Ge = null, ae = false, pt = null;
      function up(e, t) {
        var n = tt(5, null, null, 0);
        n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [
          n
        ], e.flags |= 16) : t.push(n);
      }
      function Dc(e, t) {
        switch (e.tag) {
          case 5:
            var n = e.type;
            return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ye = e, Ge = ln(t.firstChild), true) : false;
          case 6:
            return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ye = e, Ge = null, true) : false;
          case 13:
            return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Pn !== null ? {
              id: Dt,
              overflow: Mt
            } : null, e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824
            }, n = tt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Ye = e, Ge = null, true) : false;
          default:
            return false;
        }
      }
      function Zl(e) {
        return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
      }
      function Jl(e) {
        if (ae) {
          var t = Ge;
          if (t) {
            var n = t;
            if (!Dc(e, t)) {
              if (Zl(e)) throw Error(D(418));
              t = ln(n.nextSibling);
              var r = Ye;
              t && Dc(e, t) ? up(r, n) : (e.flags = e.flags & -4097 | 2, ae = false, Ye = e);
            }
          } else {
            if (Zl(e)) throw Error(D(418));
            e.flags = e.flags & -4097 | 2, ae = false, Ye = e;
          }
        }
      }
      function Mc(e) {
        for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
        Ye = e;
      }
      function Ko(e) {
        if (e !== Ye) return false;
        if (!ae) return Mc(e), ae = true, false;
        var t;
        if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Kl(e.type, e.memoizedProps)), t && (t = Ge)) {
          if (Zl(e)) throw cp(), Error(D(418));
          for (; t; ) up(e, t), t = ln(t.nextSibling);
        }
        if (Mc(e), e.tag === 13) {
          if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(D(317));
          e: {
            for (e = e.nextSibling, t = 0; e; ) {
              if (e.nodeType === 8) {
                var n = e.data;
                if (n === "/$") {
                  if (t === 0) {
                    Ge = ln(e.nextSibling);
                    break e;
                  }
                  t--;
                } else n !== "$" && n !== "$!" && n !== "$?" || t++;
              }
              e = e.nextSibling;
            }
            Ge = null;
          }
        } else Ge = Ye ? ln(e.stateNode.nextSibling) : null;
        return true;
      }
      function cp() {
        for (var e = Ge; e; ) e = ln(e.nextSibling);
      }
      function pr() {
        Ge = Ye = null, ae = false;
      }
      function qa(e) {
        pt === null ? pt = [
          e
        ] : pt.push(e);
      }
      var vy = Yt.ReactCurrentBatchConfig;
      function Or(e, t, n) {
        if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
          if (n._owner) {
            if (n = n._owner, n) {
              if (n.tag !== 1) throw Error(D(309));
              var r = n.stateNode;
            }
            if (!r) throw Error(D(147, e));
            var o = r, i = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(s) {
              var l = o.refs;
              s === null ? delete l[i] : l[i] = s;
            }, t._stringRef = i, t);
          }
          if (typeof e != "string") throw Error(D(284));
          if (!n._owner) throw Error(D(290, e));
        }
        return e;
      }
      function Qo(e, t) {
        throw e = Object.prototype.toString.call(t), Error(D(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
      }
      function Fc(e) {
        var t = e._init;
        return t(e._payload);
      }
      function fp(e) {
        function t(g, c) {
          if (e) {
            var f = g.deletions;
            f === null ? (g.deletions = [
              c
            ], g.flags |= 16) : f.push(c);
          }
        }
        function n(g, c) {
          if (!e) return null;
          for (; c !== null; ) t(g, c), c = c.sibling;
          return null;
        }
        function r(g, c) {
          for (g = /* @__PURE__ */ new Map(); c !== null; ) c.key !== null ? g.set(c.key, c) : g.set(c.index, c), c = c.sibling;
          return g;
        }
        function o(g, c) {
          return g = fn(g, c), g.index = 0, g.sibling = null, g;
        }
        function i(g, c, f) {
          return g.index = f, e ? (f = g.alternate, f !== null ? (f = f.index, f < c ? (g.flags |= 2, c) : f) : (g.flags |= 2, c)) : (g.flags |= 1048576, c);
        }
        function s(g) {
          return e && g.alternate === null && (g.flags |= 2), g;
        }
        function l(g, c, f, y) {
          return c === null || c.tag !== 6 ? (c = nl(f, g.mode, y), c.return = g, c) : (c = o(c, f), c.return = g, c);
        }
        function a(g, c, f, y) {
          var x = f.type;
          return x === Hn ? p(g, c, f.props.children, y, f.key) : c !== null && (c.elementType === x || typeof x == "object" && x !== null && x.$$typeof === qt && Fc(x) === c.type) ? (y = o(c, f.props), y.ref = Or(g, c, f), y.return = g, y) : (y = vi(f.type, f.key, f.props, null, g.mode, y), y.ref = Or(g, c, f), y.return = g, y);
        }
        function u(g, c, f, y) {
          return c === null || c.tag !== 4 || c.stateNode.containerInfo !== f.containerInfo || c.stateNode.implementation !== f.implementation ? (c = rl(f, g.mode, y), c.return = g, c) : (c = o(c, f.children || []), c.return = g, c);
        }
        function p(g, c, f, y, x) {
          return c === null || c.tag !== 7 ? (c = Tn(f, g.mode, y, x), c.return = g, c) : (c = o(c, f), c.return = g, c);
        }
        function d(g, c, f) {
          if (typeof c == "string" && c !== "" || typeof c == "number") return c = nl("" + c, g.mode, f), c.return = g, c;
          if (typeof c == "object" && c !== null) {
            switch (c.$$typeof) {
              case Fo:
                return f = vi(c.type, c.key, c.props, null, g.mode, f), f.ref = Or(g, null, c), f.return = g, f;
              case Vn:
                return c = rl(c, g.mode, f), c.return = g, c;
              case qt:
                var y = c._init;
                return d(g, y(c._payload), f);
            }
            if (Wr(c) || Pr(c)) return c = Tn(c, g.mode, f, null), c.return = g, c;
            Qo(g, c);
          }
          return null;
        }
        function m(g, c, f, y) {
          var x = c !== null ? c.key : null;
          if (typeof f == "string" && f !== "" || typeof f == "number") return x !== null ? null : l(g, c, "" + f, y);
          if (typeof f == "object" && f !== null) {
            switch (f.$$typeof) {
              case Fo:
                return f.key === x ? a(g, c, f, y) : null;
              case Vn:
                return f.key === x ? u(g, c, f, y) : null;
              case qt:
                return x = f._init, m(g, c, x(f._payload), y);
            }
            if (Wr(f) || Pr(f)) return x !== null ? null : p(g, c, f, y, null);
            Qo(g, f);
          }
          return null;
        }
        function h(g, c, f, y, x) {
          if (typeof y == "string" && y !== "" || typeof y == "number") return g = g.get(f) || null, l(c, g, "" + y, x);
          if (typeof y == "object" && y !== null) {
            switch (y.$$typeof) {
              case Fo:
                return g = g.get(y.key === null ? f : y.key) || null, a(c, g, y, x);
              case Vn:
                return g = g.get(y.key === null ? f : y.key) || null, u(c, g, y, x);
              case qt:
                var S = y._init;
                return h(g, c, f, S(y._payload), x);
            }
            if (Wr(y) || Pr(y)) return g = g.get(f) || null, p(c, g, y, x, null);
            Qo(c, y);
          }
          return null;
        }
        function v(g, c, f, y) {
          for (var x = null, S = null, w = c, k = c = 0, R = null; w !== null && k < f.length; k++) {
            w.index > k ? (R = w, w = null) : R = w.sibling;
            var N = m(g, w, f[k], y);
            if (N === null) {
              w === null && (w = R);
              break;
            }
            e && w && N.alternate === null && t(g, w), c = i(N, c, k), S === null ? x = N : S.sibling = N, S = N, w = R;
          }
          if (k === f.length) return n(g, w), ae && Sn(g, k), x;
          if (w === null) {
            for (; k < f.length; k++) w = d(g, f[k], y), w !== null && (c = i(w, c, k), S === null ? x = w : S.sibling = w, S = w);
            return ae && Sn(g, k), x;
          }
          for (w = r(g, w); k < f.length; k++) R = h(w, g, k, f[k], y), R !== null && (e && R.alternate !== null && w.delete(R.key === null ? k : R.key), c = i(R, c, k), S === null ? x = R : S.sibling = R, S = R);
          return e && w.forEach(function(A) {
            return t(g, A);
          }), ae && Sn(g, k), x;
        }
        function _(g, c, f, y) {
          var x = Pr(f);
          if (typeof x != "function") throw Error(D(150));
          if (f = x.call(f), f == null) throw Error(D(151));
          for (var S = x = null, w = c, k = c = 0, R = null, N = f.next(); w !== null && !N.done; k++, N = f.next()) {
            w.index > k ? (R = w, w = null) : R = w.sibling;
            var A = m(g, w, N.value, y);
            if (A === null) {
              w === null && (w = R);
              break;
            }
            e && w && A.alternate === null && t(g, w), c = i(A, c, k), S === null ? x = A : S.sibling = A, S = A, w = R;
          }
          if (N.done) return n(g, w), ae && Sn(g, k), x;
          if (w === null) {
            for (; !N.done; k++, N = f.next()) N = d(g, N.value, y), N !== null && (c = i(N, c, k), S === null ? x = N : S.sibling = N, S = N);
            return ae && Sn(g, k), x;
          }
          for (w = r(g, w); !N.done; k++, N = f.next()) N = h(w, g, k, N.value, y), N !== null && (e && N.alternate !== null && w.delete(N.key === null ? k : N.key), c = i(N, c, k), S === null ? x = N : S.sibling = N, S = N);
          return e && w.forEach(function(L) {
            return t(g, L);
          }), ae && Sn(g, k), x;
        }
        function C(g, c, f, y) {
          if (typeof f == "object" && f !== null && f.type === Hn && f.key === null && (f = f.props.children), typeof f == "object" && f !== null) {
            switch (f.$$typeof) {
              case Fo:
                e: {
                  for (var x = f.key, S = c; S !== null; ) {
                    if (S.key === x) {
                      if (x = f.type, x === Hn) {
                        if (S.tag === 7) {
                          n(g, S.sibling), c = o(S, f.props.children), c.return = g, g = c;
                          break e;
                        }
                      } else if (S.elementType === x || typeof x == "object" && x !== null && x.$$typeof === qt && Fc(x) === S.type) {
                        n(g, S.sibling), c = o(S, f.props), c.ref = Or(g, S, f), c.return = g, g = c;
                        break e;
                      }
                      n(g, S);
                      break;
                    } else t(g, S);
                    S = S.sibling;
                  }
                  f.type === Hn ? (c = Tn(f.props.children, g.mode, y, f.key), c.return = g, g = c) : (y = vi(f.type, f.key, f.props, null, g.mode, y), y.ref = Or(g, c, f), y.return = g, g = y);
                }
                return s(g);
              case Vn:
                e: {
                  for (S = f.key; c !== null; ) {
                    if (c.key === S) if (c.tag === 4 && c.stateNode.containerInfo === f.containerInfo && c.stateNode.implementation === f.implementation) {
                      n(g, c.sibling), c = o(c, f.children || []), c.return = g, g = c;
                      break e;
                    } else {
                      n(g, c);
                      break;
                    }
                    else t(g, c);
                    c = c.sibling;
                  }
                  c = rl(f, g.mode, y), c.return = g, g = c;
                }
                return s(g);
              case qt:
                return S = f._init, C(g, c, S(f._payload), y);
            }
            if (Wr(f)) return v(g, c, f, y);
            if (Pr(f)) return _(g, c, f, y);
            Qo(g, f);
          }
          return typeof f == "string" && f !== "" || typeof f == "number" ? (f = "" + f, c !== null && c.tag === 6 ? (n(g, c.sibling), c = o(c, f), c.return = g, g = c) : (n(g, c), c = nl(f, g.mode, y), c.return = g, g = c), s(g)) : n(g, c);
        }
        return C;
      }
      var mr = fp(true), dp = fp(false), Di = hn(null), Mi = null, Jn = null, Za = null;
      function Ja() {
        Za = Jn = Mi = null;
      }
      function eu(e) {
        var t = Di.current;
        le(Di), e._currentValue = t;
      }
      function ea(e, t, n) {
        for (; e !== null; ) {
          var r = e.alternate;
          if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
          e = e.return;
        }
      }
      function lr(e, t) {
        Mi = e, Za = Jn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Fe = true), e.firstContext = null);
      }
      function ot(e) {
        var t = e._currentValue;
        if (Za !== e) if (e = {
          context: e,
          memoizedValue: t,
          next: null
        }, Jn === null) {
          if (Mi === null) throw Error(D(308));
          Jn = e, Mi.dependencies = {
            lanes: 0,
            firstContext: e
          };
        } else Jn = Jn.next = e;
        return t;
      }
      var bn = null;
      function tu(e) {
        bn === null ? bn = [
          e
        ] : bn.push(e);
      }
      function pp(e, t, n, r) {
        var o = t.interleaved;
        return o === null ? (n.next = n, tu(t)) : (n.next = o.next, o.next = n), t.interleaved = n, Ut(e, r);
      }
      function Ut(e, t) {
        e.lanes |= t;
        var n = e.alternate;
        for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
        return n.tag === 3 ? n.stateNode : null;
      }
      var Zt = false;
      function nu(e) {
        e.updateQueue = {
          baseState: e.memoizedState,
          firstBaseUpdate: null,
          lastBaseUpdate: null,
          shared: {
            pending: null,
            interleaved: null,
            lanes: 0
          },
          effects: null
        };
      }
      function mp(e, t) {
        e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects
        });
      }
      function Ft(e, t) {
        return {
          eventTime: e,
          lane: t,
          tag: 0,
          payload: null,
          callback: null,
          next: null
        };
      }
      function an(e, t, n) {
        var r = e.updateQueue;
        if (r === null) return null;
        if (r = r.shared, X & 2) {
          var o = r.pending;
          return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, Ut(e, n);
        }
        return o = r.interleaved, o === null ? (t.next = t, tu(r)) : (t.next = o.next, o.next = t), r.interleaved = t, Ut(e, n);
      }
      function di(e, t, n) {
        if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
          var r = t.lanes;
          r &= e.pendingLanes, n |= r, t.lanes = n, Ba(e, n);
        }
      }
      function jc(e, t) {
        var n = e.updateQueue, r = e.alternate;
        if (r !== null && (r = r.updateQueue, n === r)) {
          var o = null, i = null;
          if (n = n.firstBaseUpdate, n !== null) {
            do {
              var s = {
                eventTime: n.eventTime,
                lane: n.lane,
                tag: n.tag,
                payload: n.payload,
                callback: n.callback,
                next: null
              };
              i === null ? o = i = s : i = i.next = s, n = n.next;
            } while (n !== null);
            i === null ? o = i = t : i = i.next = t;
          } else o = i = t;
          n = {
            baseState: r.baseState,
            firstBaseUpdate: o,
            lastBaseUpdate: i,
            shared: r.shared,
            effects: r.effects
          }, e.updateQueue = n;
          return;
        }
        e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
      }
      function Fi(e, t, n, r) {
        var o = e.updateQueue;
        Zt = false;
        var i = o.firstBaseUpdate, s = o.lastBaseUpdate, l = o.shared.pending;
        if (l !== null) {
          o.shared.pending = null;
          var a = l, u = a.next;
          a.next = null, s === null ? i = u : s.next = u, s = a;
          var p = e.alternate;
          p !== null && (p = p.updateQueue, l = p.lastBaseUpdate, l !== s && (l === null ? p.firstBaseUpdate = u : l.next = u, p.lastBaseUpdate = a));
        }
        if (i !== null) {
          var d = o.baseState;
          s = 0, p = u = a = null, l = i;
          do {
            var m = l.lane, h = l.eventTime;
            if ((r & m) === m) {
              p !== null && (p = p.next = {
                eventTime: h,
                lane: 0,
                tag: l.tag,
                payload: l.payload,
                callback: l.callback,
                next: null
              });
              e: {
                var v = e, _ = l;
                switch (m = t, h = n, _.tag) {
                  case 1:
                    if (v = _.payload, typeof v == "function") {
                      d = v.call(h, d, m);
                      break e;
                    }
                    d = v;
                    break e;
                  case 3:
                    v.flags = v.flags & -65537 | 128;
                  case 0:
                    if (v = _.payload, m = typeof v == "function" ? v.call(h, d, m) : v, m == null) break e;
                    d = de({}, d, m);
                    break e;
                  case 2:
                    Zt = true;
                }
              }
              l.callback !== null && l.lane !== 0 && (e.flags |= 64, m = o.effects, m === null ? o.effects = [
                l
              ] : m.push(l));
            } else h = {
              eventTime: h,
              lane: m,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null
            }, p === null ? (u = p = h, a = d) : p = p.next = h, s |= m;
            if (l = l.next, l === null) {
              if (l = o.shared.pending, l === null) break;
              m = l, l = m.next, m.next = null, o.lastBaseUpdate = m, o.shared.pending = null;
            }
          } while (true);
          if (p === null && (a = d), o.baseState = a, o.firstBaseUpdate = u, o.lastBaseUpdate = p, t = o.shared.interleaved, t !== null) {
            o = t;
            do
              s |= o.lane, o = o.next;
            while (o !== t);
          } else i === null && (o.shared.lanes = 0);
          In |= s, e.lanes = s, e.memoizedState = d;
        }
      }
      function zc(e, t, n) {
        if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
          var r = e[t], o = r.callback;
          if (o !== null) {
            if (r.callback = null, r = n, typeof o != "function") throw Error(D(191, o));
            o.call(r);
          }
        }
      }
      var No = {}, Et = hn(No), go = hn(No), ho = hn(No);
      function Cn(e) {
        if (e === No) throw Error(D(174));
        return e;
      }
      function ru(e, t) {
        switch (re(ho, t), re(go, e), re(Et, No), e = t.nodeType, e) {
          case 9:
          case 11:
            t = (t = t.documentElement) ? t.namespaceURI : $l(null, "");
            break;
          default:
            e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = $l(t, e);
        }
        le(Et), re(Et, t);
      }
      function gr() {
        le(Et), le(go), le(ho);
      }
      function gp(e) {
        Cn(ho.current);
        var t = Cn(Et.current), n = $l(t, e.type);
        t !== n && (re(go, e), re(Et, n));
      }
      function ou(e) {
        go.current === e && (le(Et), le(go));
      }
      var ce = hn(0);
      function ji(e) {
        for (var t = e; t !== null; ) {
          if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t;
          } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128) return t;
          } else if (t.child !== null) {
            t.child.return = t, t = t.child;
            continue;
          }
          if (t === e) break;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) return null;
            t = t.return;
          }
          t.sibling.return = t.return, t = t.sibling;
        }
        return null;
      }
      var Xs = [];
      function iu() {
        for (var e = 0; e < Xs.length; e++) Xs[e]._workInProgressVersionPrimary = null;
        Xs.length = 0;
      }
      var pi = Yt.ReactCurrentDispatcher, qs = Yt.ReactCurrentBatchConfig, An = 0, fe = null, ve = null, Se = null, zi = false, Zr = false, yo = 0, _y = 0;
      function Re() {
        throw Error(D(321));
      }
      function su(e, t) {
        if (t === null) return false;
        for (var n = 0; n < t.length && n < e.length; n++) if (!yt(e[n], t[n])) return false;
        return true;
      }
      function lu(e, t, n, r, o, i) {
        if (An = i, fe = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, pi.current = e === null || e.memoizedState === null ? Ey : by, e = n(r, o), Zr) {
          i = 0;
          do {
            if (Zr = false, yo = 0, 25 <= i) throw Error(D(301));
            i += 1, Se = ve = null, t.updateQueue = null, pi.current = Cy, e = n(r, o);
          } while (Zr);
        }
        if (pi.current = Bi, t = ve !== null && ve.next !== null, An = 0, Se = ve = fe = null, zi = false, t) throw Error(D(300));
        return e;
      }
      function au() {
        var e = yo !== 0;
        return yo = 0, e;
      }
      function _t() {
        var e = {
          memoizedState: null,
          baseState: null,
          baseQueue: null,
          queue: null,
          next: null
        };
        return Se === null ? fe.memoizedState = Se = e : Se = Se.next = e, Se;
      }
      function it() {
        if (ve === null) {
          var e = fe.alternate;
          e = e !== null ? e.memoizedState : null;
        } else e = ve.next;
        var t = Se === null ? fe.memoizedState : Se.next;
        if (t !== null) Se = t, ve = e;
        else {
          if (e === null) throw Error(D(310));
          ve = e, e = {
            memoizedState: ve.memoizedState,
            baseState: ve.baseState,
            baseQueue: ve.baseQueue,
            queue: ve.queue,
            next: null
          }, Se === null ? fe.memoizedState = Se = e : Se = Se.next = e;
        }
        return Se;
      }
      function vo(e, t) {
        return typeof t == "function" ? t(e) : t;
      }
      function Zs(e) {
        var t = it(), n = t.queue;
        if (n === null) throw Error(D(311));
        n.lastRenderedReducer = e;
        var r = ve, o = r.baseQueue, i = n.pending;
        if (i !== null) {
          if (o !== null) {
            var s = o.next;
            o.next = i.next, i.next = s;
          }
          r.baseQueue = o = i, n.pending = null;
        }
        if (o !== null) {
          i = o.next, r = r.baseState;
          var l = s = null, a = null, u = i;
          do {
            var p = u.lane;
            if ((An & p) === p) a !== null && (a = a.next = {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null
            }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
            else {
              var d = {
                lane: p,
                action: u.action,
                hasEagerState: u.hasEagerState,
                eagerState: u.eagerState,
                next: null
              };
              a === null ? (l = a = d, s = r) : a = a.next = d, fe.lanes |= p, In |= p;
            }
            u = u.next;
          } while (u !== null && u !== i);
          a === null ? s = r : a.next = l, yt(r, t.memoizedState) || (Fe = true), t.memoizedState = r, t.baseState = s, t.baseQueue = a, n.lastRenderedState = r;
        }
        if (e = n.interleaved, e !== null) {
          o = e;
          do
            i = o.lane, fe.lanes |= i, In |= i, o = o.next;
          while (o !== e);
        } else o === null && (n.lanes = 0);
        return [
          t.memoizedState,
          n.dispatch
        ];
      }
      function Js(e) {
        var t = it(), n = t.queue;
        if (n === null) throw Error(D(311));
        n.lastRenderedReducer = e;
        var r = n.dispatch, o = n.pending, i = t.memoizedState;
        if (o !== null) {
          n.pending = null;
          var s = o = o.next;
          do
            i = e(i, s.action), s = s.next;
          while (s !== o);
          yt(i, t.memoizedState) || (Fe = true), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
        }
        return [
          i,
          r
        ];
      }
      function hp() {
      }
      function yp(e, t) {
        var n = fe, r = it(), o = t(), i = !yt(r.memoizedState, o);
        if (i && (r.memoizedState = o, Fe = true), r = r.queue, uu(wp.bind(null, n, r, e), [
          e
        ]), r.getSnapshot !== t || i || Se !== null && Se.memoizedState.tag & 1) {
          if (n.flags |= 2048, _o(9, _p.bind(null, n, r, o, t), void 0, null), xe === null) throw Error(D(349));
          An & 30 || vp(n, t, o);
        }
        return o;
      }
      function vp(e, t, n) {
        e.flags |= 16384, e = {
          getSnapshot: t,
          value: n
        }, t = fe.updateQueue, t === null ? (t = {
          lastEffect: null,
          stores: null
        }, fe.updateQueue = t, t.stores = [
          e
        ]) : (n = t.stores, n === null ? t.stores = [
          e
        ] : n.push(e));
      }
      function _p(e, t, n, r) {
        t.value = n, t.getSnapshot = r, Sp(t) && xp(e);
      }
      function wp(e, t, n) {
        return n(function() {
          Sp(t) && xp(e);
        });
      }
      function Sp(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
          var n = t();
          return !yt(e, n);
        } catch {
          return true;
        }
      }
      function xp(e) {
        var t = Ut(e, 1);
        t !== null && ht(t, e, 1, -1);
      }
      function Bc(e) {
        var t = _t();
        return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: vo,
          lastRenderedState: e
        }, t.queue = e, e = e.dispatch = xy.bind(null, fe, e), [
          t.memoizedState,
          e
        ];
      }
      function _o(e, t, n, r) {
        return e = {
          tag: e,
          create: t,
          destroy: n,
          deps: r,
          next: null
        }, t = fe.updateQueue, t === null ? (t = {
          lastEffect: null,
          stores: null
        }, fe.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
      }
      function Ep() {
        return it().memoizedState;
      }
      function mi(e, t, n, r) {
        var o = _t();
        fe.flags |= e, o.memoizedState = _o(1 | t, n, void 0, r === void 0 ? null : r);
      }
      function ls(e, t, n, r) {
        var o = it();
        r = r === void 0 ? null : r;
        var i = void 0;
        if (ve !== null) {
          var s = ve.memoizedState;
          if (i = s.destroy, r !== null && su(r, s.deps)) {
            o.memoizedState = _o(t, n, i, r);
            return;
          }
        }
        fe.flags |= e, o.memoizedState = _o(1 | t, n, i, r);
      }
      function Uc(e, t) {
        return mi(8390656, 8, e, t);
      }
      function uu(e, t) {
        return ls(2048, 8, e, t);
      }
      function bp(e, t) {
        return ls(4, 2, e, t);
      }
      function Cp(e, t) {
        return ls(4, 4, e, t);
      }
      function kp(e, t) {
        if (typeof t == "function") return e = e(), t(e), function() {
          t(null);
        };
        if (t != null) return e = e(), t.current = e, function() {
          t.current = null;
        };
      }
      function Rp(e, t, n) {
        return n = n != null ? n.concat([
          e
        ]) : null, ls(4, 4, kp.bind(null, t, e), n);
      }
      function cu() {
      }
      function Tp(e, t) {
        var n = it();
        t = t === void 0 ? null : t;
        var r = n.memoizedState;
        return r !== null && t !== null && su(t, r[1]) ? r[0] : (n.memoizedState = [
          e,
          t
        ], e);
      }
      function Np(e, t) {
        var n = it();
        t = t === void 0 ? null : t;
        var r = n.memoizedState;
        return r !== null && t !== null && su(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [
          e,
          t
        ], e);
      }
      function Pp(e, t, n) {
        return An & 21 ? (yt(n, t) || (n = Od(), fe.lanes |= n, In |= n, e.baseState = true), t) : (e.baseState && (e.baseState = false, Fe = true), e.memoizedState = n);
      }
      function wy(e, t) {
        var n = ee;
        ee = n !== 0 && 4 > n ? n : 4, e(true);
        var r = qs.transition;
        qs.transition = {};
        try {
          e(false), t();
        } finally {
          ee = n, qs.transition = r;
        }
      }
      function Ap() {
        return it().memoizedState;
      }
      function Sy(e, t, n) {
        var r = cn(e);
        if (n = {
          lane: r,
          action: n,
          hasEagerState: false,
          eagerState: null,
          next: null
        }, Ip(e)) Lp(t, n);
        else if (n = pp(e, t, n, r), n !== null) {
          var o = Ie();
          ht(n, e, r, o), $p(n, t, r);
        }
      }
      function xy(e, t, n) {
        var r = cn(e), o = {
          lane: r,
          action: n,
          hasEagerState: false,
          eagerState: null,
          next: null
        };
        if (Ip(e)) Lp(t, o);
        else {
          var i = e.alternate;
          if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
            var s = t.lastRenderedState, l = i(s, n);
            if (o.hasEagerState = true, o.eagerState = l, yt(l, s)) {
              var a = t.interleaved;
              a === null ? (o.next = o, tu(t)) : (o.next = a.next, a.next = o), t.interleaved = o;
              return;
            }
          } catch {
          } finally {
          }
          n = pp(e, t, o, r), n !== null && (o = Ie(), ht(n, e, r, o), $p(n, t, r));
        }
      }
      function Ip(e) {
        var t = e.alternate;
        return e === fe || t !== null && t === fe;
      }
      function Lp(e, t) {
        Zr = zi = true;
        var n = e.pending;
        n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
      }
      function $p(e, t, n) {
        if (n & 4194240) {
          var r = t.lanes;
          r &= e.pendingLanes, n |= r, t.lanes = n, Ba(e, n);
        }
      }
      var Bi = {
        readContext: ot,
        useCallback: Re,
        useContext: Re,
        useEffect: Re,
        useImperativeHandle: Re,
        useInsertionEffect: Re,
        useLayoutEffect: Re,
        useMemo: Re,
        useReducer: Re,
        useRef: Re,
        useState: Re,
        useDebugValue: Re,
        useDeferredValue: Re,
        useTransition: Re,
        useMutableSource: Re,
        useSyncExternalStore: Re,
        useId: Re,
        unstable_isNewReconciler: false
      }, Ey = {
        readContext: ot,
        useCallback: function(e, t) {
          return _t().memoizedState = [
            e,
            t === void 0 ? null : t
          ], e;
        },
        useContext: ot,
        useEffect: Uc,
        useImperativeHandle: function(e, t, n) {
          return n = n != null ? n.concat([
            e
          ]) : null, mi(4194308, 4, kp.bind(null, t, e), n);
        },
        useLayoutEffect: function(e, t) {
          return mi(4194308, 4, e, t);
        },
        useInsertionEffect: function(e, t) {
          return mi(4, 2, e, t);
        },
        useMemo: function(e, t) {
          var n = _t();
          return t = t === void 0 ? null : t, e = e(), n.memoizedState = [
            e,
            t
          ], e;
        },
        useReducer: function(e, t, n) {
          var r = _t();
          return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
          }, r.queue = e, e = e.dispatch = Sy.bind(null, fe, e), [
            r.memoizedState,
            e
          ];
        },
        useRef: function(e) {
          var t = _t();
          return e = {
            current: e
          }, t.memoizedState = e;
        },
        useState: Bc,
        useDebugValue: cu,
        useDeferredValue: function(e) {
          return _t().memoizedState = e;
        },
        useTransition: function() {
          var e = Bc(false), t = e[0];
          return e = wy.bind(null, e[1]), _t().memoizedState = e, [
            t,
            e
          ];
        },
        useMutableSource: function() {
        },
        useSyncExternalStore: function(e, t, n) {
          var r = fe, o = _t();
          if (ae) {
            if (n === void 0) throw Error(D(407));
            n = n();
          } else {
            if (n = t(), xe === null) throw Error(D(349));
            An & 30 || vp(r, t, n);
          }
          o.memoizedState = n;
          var i = {
            value: n,
            getSnapshot: t
          };
          return o.queue = i, Uc(wp.bind(null, r, i, e), [
            e
          ]), r.flags |= 2048, _o(9, _p.bind(null, r, i, n, t), void 0, null), n;
        },
        useId: function() {
          var e = _t(), t = xe.identifierPrefix;
          if (ae) {
            var n = Mt, r = Dt;
            n = (r & ~(1 << 32 - gt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = yo++, 0 < n && (t += "H" + n.toString(32)), t += ":";
          } else n = _y++, t = ":" + t + "r" + n.toString(32) + ":";
          return e.memoizedState = t;
        },
        unstable_isNewReconciler: false
      }, by = {
        readContext: ot,
        useCallback: Tp,
        useContext: ot,
        useEffect: uu,
        useImperativeHandle: Rp,
        useInsertionEffect: bp,
        useLayoutEffect: Cp,
        useMemo: Np,
        useReducer: Zs,
        useRef: Ep,
        useState: function() {
          return Zs(vo);
        },
        useDebugValue: cu,
        useDeferredValue: function(e) {
          var t = it();
          return Pp(t, ve.memoizedState, e);
        },
        useTransition: function() {
          var e = Zs(vo)[0], t = it().memoizedState;
          return [
            e,
            t
          ];
        },
        useMutableSource: hp,
        useSyncExternalStore: yp,
        useId: Ap,
        unstable_isNewReconciler: false
      }, Cy = {
        readContext: ot,
        useCallback: Tp,
        useContext: ot,
        useEffect: uu,
        useImperativeHandle: Rp,
        useInsertionEffect: bp,
        useLayoutEffect: Cp,
        useMemo: Np,
        useReducer: Js,
        useRef: Ep,
        useState: function() {
          return Js(vo);
        },
        useDebugValue: cu,
        useDeferredValue: function(e) {
          var t = it();
          return ve === null ? t.memoizedState = e : Pp(t, ve.memoizedState, e);
        },
        useTransition: function() {
          var e = Js(vo)[0], t = it().memoizedState;
          return [
            e,
            t
          ];
        },
        useMutableSource: hp,
        useSyncExternalStore: yp,
        useId: Ap,
        unstable_isNewReconciler: false
      };
      function ft(e, t) {
        if (e && e.defaultProps) {
          t = de({}, t), e = e.defaultProps;
          for (var n in e) t[n] === void 0 && (t[n] = e[n]);
          return t;
        }
        return t;
      }
      function ta(e, t, n, r) {
        t = e.memoizedState, n = n(r, t), n = n == null ? t : de({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
      }
      var as = {
        isMounted: function(e) {
          return (e = e._reactInternals) ? Mn(e) === e : false;
        },
        enqueueSetState: function(e, t, n) {
          e = e._reactInternals;
          var r = Ie(), o = cn(e), i = Ft(r, o);
          i.payload = t, n != null && (i.callback = n), t = an(e, i, o), t !== null && (ht(t, e, o, r), di(t, e, o));
        },
        enqueueReplaceState: function(e, t, n) {
          e = e._reactInternals;
          var r = Ie(), o = cn(e), i = Ft(r, o);
          i.tag = 1, i.payload = t, n != null && (i.callback = n), t = an(e, i, o), t !== null && (ht(t, e, o, r), di(t, e, o));
        },
        enqueueForceUpdate: function(e, t) {
          e = e._reactInternals;
          var n = Ie(), r = cn(e), o = Ft(n, r);
          o.tag = 2, t != null && (o.callback = t), t = an(e, o, r), t !== null && (ht(t, e, r, n), di(t, e, r));
        }
      };
      function Wc(e, t, n, r, o, i, s) {
        return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, s) : t.prototype && t.prototype.isPureReactComponent ? !co(n, r) || !co(o, i) : true;
      }
      function Op(e, t, n) {
        var r = false, o = pn, i = t.contextType;
        return typeof i == "object" && i !== null ? i = ot(i) : (o = ze(t) ? Nn : Pe.current, r = t.contextTypes, i = (r = r != null) ? dr(e, o) : pn), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = as, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t;
      }
      function Vc(e, t, n, r) {
        e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && as.enqueueReplaceState(t, t.state, null);
      }
      function na(e, t, n, r) {
        var o = e.stateNode;
        o.props = n, o.state = e.memoizedState, o.refs = {}, nu(e);
        var i = t.contextType;
        typeof i == "object" && i !== null ? o.context = ot(i) : (i = ze(t) ? Nn : Pe.current, o.context = dr(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (ta(e, t, i, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && as.enqueueReplaceState(o, o.state, null), Fi(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
      }
      function hr(e, t) {
        try {
          var n = "", r = t;
          do
            n += Jg(r), r = r.return;
          while (r);
          var o = n;
        } catch (i) {
          o = `
Error generating stack: ` + i.message + `
` + i.stack;
        }
        return {
          value: e,
          source: t,
          stack: o,
          digest: null
        };
      }
      function el(e, t, n) {
        return {
          value: e,
          source: null,
          stack: n ?? null,
          digest: t ?? null
        };
      }
      function ra(e, t) {
        try {
          console.error(t.value);
        } catch (n) {
          setTimeout(function() {
            throw n;
          });
        }
      }
      var ky = typeof WeakMap == "function" ? WeakMap : Map;
      function Dp(e, t, n) {
        n = Ft(-1, n), n.tag = 3, n.payload = {
          element: null
        };
        var r = t.value;
        return n.callback = function() {
          Wi || (Wi = true, pa = r), ra(e, t);
        }, n;
      }
      function Mp(e, t, n) {
        n = Ft(-1, n), n.tag = 3;
        var r = e.type.getDerivedStateFromError;
        if (typeof r == "function") {
          var o = t.value;
          n.payload = function() {
            return r(o);
          }, n.callback = function() {
            ra(e, t);
          };
        }
        var i = e.stateNode;
        return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
          ra(e, t), typeof r != "function" && (un === null ? un = /* @__PURE__ */ new Set([
            this
          ]) : un.add(this));
          var s = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: s !== null ? s : ""
          });
        }), n;
      }
      function Hc(e, t, n) {
        var r = e.pingCache;
        if (r === null) {
          r = e.pingCache = new ky();
          var o = /* @__PURE__ */ new Set();
          r.set(t, o);
        } else o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
        o.has(n) || (o.add(n), e = zy.bind(null, e, t, n), t.then(e, e));
      }
      function Gc(e) {
        do {
          var t;
          if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : true), t) return e;
          e = e.return;
        } while (e !== null);
        return null;
      }
      function Yc(e, t, n, r, o) {
        return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Ft(-1, 1), t.tag = 2, an(n, t, 1))), n.lanes |= 1), e);
      }
      var Ry = Yt.ReactCurrentOwner, Fe = false;
      function Ae(e, t, n, r) {
        t.child = e === null ? dp(t, null, n, r) : mr(t, e.child, n, r);
      }
      function Kc(e, t, n, r, o) {
        n = n.render;
        var i = t.ref;
        return lr(t, o), r = lu(e, t, n, r, i, o), n = au(), e !== null && !Fe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Wt(e, t, o)) : (ae && n && Qa(t), t.flags |= 1, Ae(e, t, r, o), t.child);
      }
      function Qc(e, t, n, r, o) {
        if (e === null) {
          var i = n.type;
          return typeof i == "function" && !vu(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, Fp(e, t, i, r, o)) : (e = vi(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
        }
        if (i = e.child, !(e.lanes & o)) {
          var s = i.memoizedProps;
          if (n = n.compare, n = n !== null ? n : co, n(s, r) && e.ref === t.ref) return Wt(e, t, o);
        }
        return t.flags |= 1, e = fn(i, r), e.ref = t.ref, e.return = t, t.child = e;
      }
      function Fp(e, t, n, r, o) {
        if (e !== null) {
          var i = e.memoizedProps;
          if (co(i, r) && e.ref === t.ref) if (Fe = false, t.pendingProps = r = i, (e.lanes & o) !== 0) e.flags & 131072 && (Fe = true);
          else return t.lanes = e.lanes, Wt(e, t, o);
        }
        return oa(e, t, n, r, o);
      }
      function jp(e, t, n) {
        var r = t.pendingProps, o = r.children, i = e !== null ? e.memoizedState : null;
        if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null
        }, re(tr, He), He |= n;
        else {
          if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null
          }, t.updateQueue = null, re(tr, He), He |= e, null;
          t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
          }, r = i !== null ? i.baseLanes : n, re(tr, He), He |= r;
        }
        else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, re(tr, He), He |= r;
        return Ae(e, t, o, n), t.child;
      }
      function zp(e, t) {
        var n = t.ref;
        (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
      }
      function oa(e, t, n, r, o) {
        var i = ze(n) ? Nn : Pe.current;
        return i = dr(t, i), lr(t, o), n = lu(e, t, n, r, i, o), r = au(), e !== null && !Fe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Wt(e, t, o)) : (ae && r && Qa(t), t.flags |= 1, Ae(e, t, n, o), t.child);
      }
      function Xc(e, t, n, r, o) {
        if (ze(n)) {
          var i = true;
          Li(t);
        } else i = false;
        if (lr(t, o), t.stateNode === null) gi(e, t), Op(t, n, r), na(t, n, r, o), r = true;
        else if (e === null) {
          var s = t.stateNode, l = t.memoizedProps;
          s.props = l;
          var a = s.context, u = n.contextType;
          typeof u == "object" && u !== null ? u = ot(u) : (u = ze(n) ? Nn : Pe.current, u = dr(t, u));
          var p = n.getDerivedStateFromProps, d = typeof p == "function" || typeof s.getSnapshotBeforeUpdate == "function";
          d || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== r || a !== u) && Vc(t, s, r, u), Zt = false;
          var m = t.memoizedState;
          s.state = m, Fi(t, r, s, o), a = t.memoizedState, l !== r || m !== a || je.current || Zt ? (typeof p == "function" && (ta(t, n, p, r), a = t.memoizedState), (l = Zt || Wc(t, n, l, r, m, a, u)) ? (d || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), s.props = r, s.state = a, s.context = u, r = l) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = false);
        } else {
          s = t.stateNode, mp(e, t), l = t.memoizedProps, u = t.type === t.elementType ? l : ft(t.type, l), s.props = u, d = t.pendingProps, m = s.context, a = n.contextType, typeof a == "object" && a !== null ? a = ot(a) : (a = ze(n) ? Nn : Pe.current, a = dr(t, a));
          var h = n.getDerivedStateFromProps;
          (p = typeof h == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== d || m !== a) && Vc(t, s, r, a), Zt = false, m = t.memoizedState, s.state = m, Fi(t, r, s, o);
          var v = t.memoizedState;
          l !== d || m !== v || je.current || Zt ? (typeof h == "function" && (ta(t, n, h, r), v = t.memoizedState), (u = Zt || Wc(t, n, u, r, m, v, a) || false) ? (p || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, v, a), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, v, a)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = v), s.props = r, s.state = v, s.context = a, r = u) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), r = false);
        }
        return ia(e, t, n, r, i, o);
      }
      function ia(e, t, n, r, o, i) {
        zp(e, t);
        var s = (t.flags & 128) !== 0;
        if (!r && !s) return o && Oc(t, n, false), Wt(e, t, i);
        r = t.stateNode, Ry.current = t;
        var l = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
        return t.flags |= 1, e !== null && s ? (t.child = mr(t, e.child, null, i), t.child = mr(t, null, l, i)) : Ae(e, t, l, i), t.memoizedState = r.state, o && Oc(t, n, true), t.child;
      }
      function Bp(e) {
        var t = e.stateNode;
        t.pendingContext ? $c(e, t.pendingContext, t.pendingContext !== t.context) : t.context && $c(e, t.context, false), ru(e, t.containerInfo);
      }
      function qc(e, t, n, r, o) {
        return pr(), qa(o), t.flags |= 256, Ae(e, t, n, r), t.child;
      }
      var sa = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0
      };
      function la(e) {
        return {
          baseLanes: e,
          cachePool: null,
          transitions: null
        };
      }
      function Up(e, t, n) {
        var r = t.pendingProps, o = ce.current, i = false, s = (t.flags & 128) !== 0, l;
        if ((l = s) || (l = e !== null && e.memoizedState === null ? false : (o & 2) !== 0), l ? (i = true, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), re(ce, o & 1), e === null) return Jl(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, s = {
          mode: "hidden",
          children: s
        }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = s) : i = fs(s, r, 0, null), e = Tn(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = la(n), t.memoizedState = sa, e) : fu(t, s));
        if (o = e.memoizedState, o !== null && (l = o.dehydrated, l !== null)) return Ty(e, t, s, r, l, o, n);
        if (i) {
          i = r.fallback, s = t.mode, o = e.child, l = o.sibling;
          var a = {
            mode: "hidden",
            children: r.children
          };
          return !(s & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = fn(o, a), r.subtreeFlags = o.subtreeFlags & 14680064), l !== null ? i = fn(l, i) : (i = Tn(i, s, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, s = e.child.memoizedState, s = s === null ? la(n) : {
            baseLanes: s.baseLanes | n,
            cachePool: null,
            transitions: s.transitions
          }, i.memoizedState = s, i.childLanes = e.childLanes & ~n, t.memoizedState = sa, r;
        }
        return i = e.child, e = i.sibling, r = fn(i, {
          mode: "visible",
          children: r.children
        }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [
          e
        ], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
      }
      function fu(e, t) {
        return t = fs({
          mode: "visible",
          children: t
        }, e.mode, 0, null), t.return = e, e.child = t;
      }
      function Xo(e, t, n, r) {
        return r !== null && qa(r), mr(t, e.child, null, n), e = fu(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
      }
      function Ty(e, t, n, r, o, i, s) {
        if (n) return t.flags & 256 ? (t.flags &= -257, r = el(Error(D(422))), Xo(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = fs({
          mode: "visible",
          children: r.children
        }, o, 0, null), i = Tn(i, o, s, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && mr(t, e.child, null, s), t.child.memoizedState = la(s), t.memoizedState = sa, i);
        if (!(t.mode & 1)) return Xo(e, t, s, null);
        if (o.data === "$!") {
          if (r = o.nextSibling && o.nextSibling.dataset, r) var l = r.dgst;
          return r = l, i = Error(D(419)), r = el(i, r, void 0), Xo(e, t, s, r);
        }
        if (l = (s & e.childLanes) !== 0, Fe || l) {
          if (r = xe, r !== null) {
            switch (s & -s) {
              case 4:
                o = 2;
                break;
              case 16:
                o = 8;
                break;
              case 64:
              case 128:
              case 256:
              case 512:
              case 1024:
              case 2048:
              case 4096:
              case 8192:
              case 16384:
              case 32768:
              case 65536:
              case 131072:
              case 262144:
              case 524288:
              case 1048576:
              case 2097152:
              case 4194304:
              case 8388608:
              case 16777216:
              case 33554432:
              case 67108864:
                o = 32;
                break;
              case 536870912:
                o = 268435456;
                break;
              default:
                o = 0;
            }
            o = o & (r.suspendedLanes | s) ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, Ut(e, o), ht(r, e, o, -1));
          }
          return yu(), r = el(Error(D(421))), Xo(e, t, s, r);
        }
        return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = By.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, Ge = ln(o.nextSibling), Ye = t, ae = true, pt = null, e !== null && (Ze[Je++] = Dt, Ze[Je++] = Mt, Ze[Je++] = Pn, Dt = e.id, Mt = e.overflow, Pn = t), t = fu(t, r.children), t.flags |= 4096, t);
      }
      function Zc(e, t, n) {
        e.lanes |= t;
        var r = e.alternate;
        r !== null && (r.lanes |= t), ea(e.return, t, n);
      }
      function tl(e, t, n, r, o) {
        var i = e.memoizedState;
        i === null ? e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: n,
          tailMode: o
        } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o);
      }
      function Wp(e, t, n) {
        var r = t.pendingProps, o = r.revealOrder, i = r.tail;
        if (Ae(e, t, r.children, n), r = ce.current, r & 2) r = r & 1 | 2, t.flags |= 128;
        else {
          if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
            if (e.tag === 13) e.memoizedState !== null && Zc(e, n, t);
            else if (e.tag === 19) Zc(e, n, t);
            else if (e.child !== null) {
              e.child.return = e, e = e.child;
              continue;
            }
            if (e === t) break e;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break e;
              e = e.return;
            }
            e.sibling.return = e.return, e = e.sibling;
          }
          r &= 1;
        }
        if (re(ce, r), !(t.mode & 1)) t.memoizedState = null;
        else switch (o) {
          case "forwards":
            for (n = t.child, o = null; n !== null; ) e = n.alternate, e !== null && ji(e) === null && (o = n), n = n.sibling;
            n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), tl(t, false, o, n, i);
            break;
          case "backwards":
            for (n = null, o = t.child, t.child = null; o !== null; ) {
              if (e = o.alternate, e !== null && ji(e) === null) {
                t.child = o;
                break;
              }
              e = o.sibling, o.sibling = n, n = o, o = e;
            }
            tl(t, true, n, null, i);
            break;
          case "together":
            tl(t, false, null, null, void 0);
            break;
          default:
            t.memoizedState = null;
        }
        return t.child;
      }
      function gi(e, t) {
        !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
      }
      function Wt(e, t, n) {
        if (e !== null && (t.dependencies = e.dependencies), In |= t.lanes, !(n & t.childLanes)) return null;
        if (e !== null && t.child !== e.child) throw Error(D(153));
        if (t.child !== null) {
          for (e = t.child, n = fn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = fn(e, e.pendingProps), n.return = t;
          n.sibling = null;
        }
        return t.child;
      }
      function Ny(e, t, n) {
        switch (t.tag) {
          case 3:
            Bp(t), pr();
            break;
          case 5:
            gp(t);
            break;
          case 1:
            ze(t.type) && Li(t);
            break;
          case 4:
            ru(t, t.stateNode.containerInfo);
            break;
          case 10:
            var r = t.type._context, o = t.memoizedProps.value;
            re(Di, r._currentValue), r._currentValue = o;
            break;
          case 13:
            if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (re(ce, ce.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Up(e, t, n) : (re(ce, ce.current & 1), e = Wt(e, t, n), e !== null ? e.sibling : null);
            re(ce, ce.current & 1);
            break;
          case 19:
            if (r = (n & t.childLanes) !== 0, e.flags & 128) {
              if (r) return Wp(e, t, n);
              t.flags |= 128;
            }
            if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), re(ce, ce.current), r) break;
            return null;
          case 22:
          case 23:
            return t.lanes = 0, jp(e, t, n);
        }
        return Wt(e, t, n);
      }
      var Vp, aa, Hp, Gp;
      Vp = function(e, t) {
        for (var n = t.child; n !== null; ) {
          if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
          else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n, n = n.child;
            continue;
          }
          if (n === t) break;
          for (; n.sibling === null; ) {
            if (n.return === null || n.return === t) return;
            n = n.return;
          }
          n.sibling.return = n.return, n = n.sibling;
        }
      };
      aa = function() {
      };
      Hp = function(e, t, n, r) {
        var o = e.memoizedProps;
        if (o !== r) {
          e = t.stateNode, Cn(Et.current);
          var i = null;
          switch (n) {
            case "input":
              o = Pl(e, o), r = Pl(e, r), i = [];
              break;
            case "select":
              o = de({}, o, {
                value: void 0
              }), r = de({}, r, {
                value: void 0
              }), i = [];
              break;
            case "textarea":
              o = Ll(e, o), r = Ll(e, r), i = [];
              break;
            default:
              typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Ai);
          }
          Ol(n, r);
          var s;
          n = null;
          for (u in o) if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null) if (u === "style") {
            var l = o[u];
            for (s in l) l.hasOwnProperty(s) && (n || (n = {}), n[s] = "");
          } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (ro.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
          for (u in r) {
            var a = r[u];
            if (l = o == null ? void 0 : o[u], r.hasOwnProperty(u) && a !== l && (a != null || l != null)) if (u === "style") if (l) {
              for (s in l) !l.hasOwnProperty(s) || a && a.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
              for (s in a) a.hasOwnProperty(s) && l[s] !== a[s] && (n || (n = {}), n[s] = a[s]);
            } else n || (i || (i = []), i.push(u, n)), n = a;
            else u === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, l = l ? l.__html : void 0, a != null && l !== a && (i = i || []).push(u, a)) : u === "children" ? typeof a != "string" && typeof a != "number" || (i = i || []).push(u, "" + a) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (ro.hasOwnProperty(u) ? (a != null && u === "onScroll" && ie("scroll", e), i || l === a || (i = [])) : (i = i || []).push(u, a));
          }
          n && (i = i || []).push("style", n);
          var u = i;
          (t.updateQueue = u) && (t.flags |= 4);
        }
      };
      Gp = function(e, t, n, r) {
        n !== r && (t.flags |= 4);
      };
      function Dr(e, t) {
        if (!ae) switch (e.tailMode) {
          case "hidden":
            t = e.tail;
            for (var n = null; t !== null; ) t.alternate !== null && (n = t), t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
          case "collapsed":
            n = e.tail;
            for (var r = null; n !== null; ) n.alternate !== null && (r = n), n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
        }
      }
      function Te(e) {
        var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
        if (t) for (var o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
        else for (o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
        return e.subtreeFlags |= r, e.childLanes = n, t;
      }
      function Py(e, t, n) {
        var r = t.pendingProps;
        switch (Xa(t), t.tag) {
          case 2:
          case 16:
          case 15:
          case 0:
          case 11:
          case 7:
          case 8:
          case 12:
          case 9:
          case 14:
            return Te(t), null;
          case 1:
            return ze(t.type) && Ii(), Te(t), null;
          case 3:
            return r = t.stateNode, gr(), le(je), le(Pe), iu(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Ko(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, pt !== null && (ha(pt), pt = null))), aa(e, t), Te(t), null;
          case 5:
            ou(t);
            var o = Cn(ho.current);
            if (n = t.type, e !== null && t.stateNode != null) Hp(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
            else {
              if (!r) {
                if (t.stateNode === null) throw Error(D(166));
                return Te(t), null;
              }
              if (e = Cn(Et.current), Ko(t)) {
                r = t.stateNode, n = t.type;
                var i = t.memoizedProps;
                switch (r[St] = t, r[mo] = i, e = (t.mode & 1) !== 0, n) {
                  case "dialog":
                    ie("cancel", r), ie("close", r);
                    break;
                  case "iframe":
                  case "object":
                  case "embed":
                    ie("load", r);
                    break;
                  case "video":
                  case "audio":
                    for (o = 0; o < Hr.length; o++) ie(Hr[o], r);
                    break;
                  case "source":
                    ie("error", r);
                    break;
                  case "img":
                  case "image":
                  case "link":
                    ie("error", r), ie("load", r);
                    break;
                  case "details":
                    ie("toggle", r);
                    break;
                  case "input":
                    lc(r, i), ie("invalid", r);
                    break;
                  case "select":
                    r._wrapperState = {
                      wasMultiple: !!i.multiple
                    }, ie("invalid", r);
                    break;
                  case "textarea":
                    uc(r, i), ie("invalid", r);
                }
                Ol(n, i), o = null;
                for (var s in i) if (i.hasOwnProperty(s)) {
                  var l = i[s];
                  s === "children" ? typeof l == "string" ? r.textContent !== l && (i.suppressHydrationWarning !== true && Yo(r.textContent, l, e), o = [
                    "children",
                    l
                  ]) : typeof l == "number" && r.textContent !== "" + l && (i.suppressHydrationWarning !== true && Yo(r.textContent, l, e), o = [
                    "children",
                    "" + l
                  ]) : ro.hasOwnProperty(s) && l != null && s === "onScroll" && ie("scroll", r);
                }
                switch (n) {
                  case "input":
                    jo(r), ac(r, i, true);
                    break;
                  case "textarea":
                    jo(r), cc(r);
                    break;
                  case "select":
                  case "option":
                    break;
                  default:
                    typeof i.onClick == "function" && (r.onclick = Ai);
                }
                r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
              } else {
                s = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = wd(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, {
                  is: r.is
                }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = true : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[St] = t, e[mo] = r, Vp(e, t, false, false), t.stateNode = e;
                e: {
                  switch (s = Dl(n, r), n) {
                    case "dialog":
                      ie("cancel", e), ie("close", e), o = r;
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      ie("load", e), o = r;
                      break;
                    case "video":
                    case "audio":
                      for (o = 0; o < Hr.length; o++) ie(Hr[o], e);
                      o = r;
                      break;
                    case "source":
                      ie("error", e), o = r;
                      break;
                    case "img":
                    case "image":
                    case "link":
                      ie("error", e), ie("load", e), o = r;
                      break;
                    case "details":
                      ie("toggle", e), o = r;
                      break;
                    case "input":
                      lc(e, r), o = Pl(e, r), ie("invalid", e);
                      break;
                    case "option":
                      o = r;
                      break;
                    case "select":
                      e._wrapperState = {
                        wasMultiple: !!r.multiple
                      }, o = de({}, r, {
                        value: void 0
                      }), ie("invalid", e);
                      break;
                    case "textarea":
                      uc(e, r), o = Ll(e, r), ie("invalid", e);
                      break;
                    default:
                      o = r;
                  }
                  Ol(n, o), l = o;
                  for (i in l) if (l.hasOwnProperty(i)) {
                    var a = l[i];
                    i === "style" ? Ed(e, a) : i === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && Sd(e, a)) : i === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && oo(e, a) : typeof a == "number" && oo(e, "" + a) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (ro.hasOwnProperty(i) ? a != null && i === "onScroll" && ie("scroll", e) : a != null && Oa(e, i, a, s));
                  }
                  switch (n) {
                    case "input":
                      jo(e), ac(e, r, false);
                      break;
                    case "textarea":
                      jo(e), cc(e);
                      break;
                    case "option":
                      r.value != null && e.setAttribute("value", "" + dn(r.value));
                      break;
                    case "select":
                      e.multiple = !!r.multiple, i = r.value, i != null ? rr(e, !!r.multiple, i, false) : r.defaultValue != null && rr(e, !!r.multiple, r.defaultValue, true);
                      break;
                    default:
                      typeof o.onClick == "function" && (e.onclick = Ai);
                  }
                  switch (n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      r = !!r.autoFocus;
                      break e;
                    case "img":
                      r = true;
                      break e;
                    default:
                      r = false;
                  }
                }
                r && (t.flags |= 4);
              }
              t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
            }
            return Te(t), null;
          case 6:
            if (e && t.stateNode != null) Gp(e, t, e.memoizedProps, r);
            else {
              if (typeof r != "string" && t.stateNode === null) throw Error(D(166));
              if (n = Cn(ho.current), Cn(Et.current), Ko(t)) {
                if (r = t.stateNode, n = t.memoizedProps, r[St] = t, (i = r.nodeValue !== n) && (e = Ye, e !== null)) switch (e.tag) {
                  case 3:
                    Yo(r.nodeValue, n, (e.mode & 1) !== 0);
                    break;
                  case 5:
                    e.memoizedProps.suppressHydrationWarning !== true && Yo(r.nodeValue, n, (e.mode & 1) !== 0);
                }
                i && (t.flags |= 4);
              } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[St] = t, t.stateNode = r;
            }
            return Te(t), null;
          case 13:
            if (le(ce), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
              if (ae && Ge !== null && t.mode & 1 && !(t.flags & 128)) cp(), pr(), t.flags |= 98560, i = false;
              else if (i = Ko(t), r !== null && r.dehydrated !== null) {
                if (e === null) {
                  if (!i) throw Error(D(318));
                  if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(D(317));
                  i[St] = t;
                } else pr(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
                Te(t), i = false;
              } else pt !== null && (ha(pt), pt = null), i = true;
              if (!i) return t.flags & 65536 ? t : null;
            }
            return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || ce.current & 1 ? _e === 0 && (_e = 3) : yu())), t.updateQueue !== null && (t.flags |= 4), Te(t), null);
          case 4:
            return gr(), aa(e, t), e === null && fo(t.stateNode.containerInfo), Te(t), null;
          case 10:
            return eu(t.type._context), Te(t), null;
          case 17:
            return ze(t.type) && Ii(), Te(t), null;
          case 19:
            if (le(ce), i = t.memoizedState, i === null) return Te(t), null;
            if (r = (t.flags & 128) !== 0, s = i.rendering, s === null) if (r) Dr(i, false);
            else {
              if (_e !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
                if (s = ji(e), s !== null) {
                  for (t.flags |= 128, Dr(i, false), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, s = i.alternate, s === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = s.childLanes, i.lanes = s.lanes, i.child = s.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = s.memoizedProps, i.memoizedState = s.memoizedState, i.updateQueue = s.updateQueue, i.type = s.type, e = s.dependencies, i.dependencies = e === null ? null : {
                    lanes: e.lanes,
                    firstContext: e.firstContext
                  }), n = n.sibling;
                  return re(ce, ce.current & 1 | 2), t.child;
                }
                e = e.sibling;
              }
              i.tail !== null && ge() > yr && (t.flags |= 128, r = true, Dr(i, false), t.lanes = 4194304);
            }
            else {
              if (!r) if (e = ji(s), e !== null) {
                if (t.flags |= 128, r = true, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Dr(i, true), i.tail === null && i.tailMode === "hidden" && !s.alternate && !ae) return Te(t), null;
              } else 2 * ge() - i.renderingStartTime > yr && n !== 1073741824 && (t.flags |= 128, r = true, Dr(i, false), t.lanes = 4194304);
              i.isBackwards ? (s.sibling = t.child, t.child = s) : (n = i.last, n !== null ? n.sibling = s : t.child = s, i.last = s);
            }
            return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = ge(), t.sibling = null, n = ce.current, re(ce, r ? n & 1 | 2 : n & 1), t) : (Te(t), null);
          case 22:
          case 23:
            return hu(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? He & 1073741824 && (Te(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Te(t), null;
          case 24:
            return null;
          case 25:
            return null;
        }
        throw Error(D(156, t.tag));
      }
      function Ay(e, t) {
        switch (Xa(t), t.tag) {
          case 1:
            return ze(t.type) && Ii(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
          case 3:
            return gr(), le(je), le(Pe), iu(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
          case 5:
            return ou(t), null;
          case 13:
            if (le(ce), e = t.memoizedState, e !== null && e.dehydrated !== null) {
              if (t.alternate === null) throw Error(D(340));
              pr();
            }
            return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
          case 19:
            return le(ce), null;
          case 4:
            return gr(), null;
          case 10:
            return eu(t.type._context), null;
          case 22:
          case 23:
            return hu(), null;
          case 24:
            return null;
          default:
            return null;
        }
      }
      var qo = false, Ne = false, Iy = typeof WeakSet == "function" ? WeakSet : Set, U = null;
      function er(e, t) {
        var n = e.ref;
        if (n !== null) if (typeof n == "function") try {
          n(null);
        } catch (r) {
          pe(e, t, r);
        }
        else n.current = null;
      }
      function ua(e, t, n) {
        try {
          n();
        } catch (r) {
          pe(e, t, r);
        }
      }
      var Jc = false;
      function Ly(e, t) {
        if (Gl = Ti, e = qd(), Ka(e)) {
          if ("selectionStart" in e) var n = {
            start: e.selectionStart,
            end: e.selectionEnd
          };
          else e: {
            n = (n = e.ownerDocument) && n.defaultView || window;
            var r = n.getSelection && n.getSelection();
            if (r && r.rangeCount !== 0) {
              n = r.anchorNode;
              var o = r.anchorOffset, i = r.focusNode;
              r = r.focusOffset;
              try {
                n.nodeType, i.nodeType;
              } catch {
                n = null;
                break e;
              }
              var s = 0, l = -1, a = -1, u = 0, p = 0, d = e, m = null;
              t: for (; ; ) {
                for (var h; d !== n || o !== 0 && d.nodeType !== 3 || (l = s + o), d !== i || r !== 0 && d.nodeType !== 3 || (a = s + r), d.nodeType === 3 && (s += d.nodeValue.length), (h = d.firstChild) !== null; ) m = d, d = h;
                for (; ; ) {
                  if (d === e) break t;
                  if (m === n && ++u === o && (l = s), m === i && ++p === r && (a = s), (h = d.nextSibling) !== null) break;
                  d = m, m = d.parentNode;
                }
                d = h;
              }
              n = l === -1 || a === -1 ? null : {
                start: l,
                end: a
              };
            } else n = null;
          }
          n = n || {
            start: 0,
            end: 0
          };
        } else n = null;
        for (Yl = {
          focusedElem: e,
          selectionRange: n
        }, Ti = false, U = t; U !== null; ) if (t = U, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, U = e;
        else for (; U !== null; ) {
          t = U;
          try {
            var v = t.alternate;
            if (t.flags & 1024) switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (v !== null) {
                  var _ = v.memoizedProps, C = v.memoizedState, g = t.stateNode, c = g.getSnapshotBeforeUpdate(t.elementType === t.type ? _ : ft(t.type, _), C);
                  g.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var f = t.stateNode.containerInfo;
                f.nodeType === 1 ? f.textContent = "" : f.nodeType === 9 && f.documentElement && f.removeChild(f.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(D(163));
            }
          } catch (y) {
            pe(t, t.return, y);
          }
          if (e = t.sibling, e !== null) {
            e.return = t.return, U = e;
            break;
          }
          U = t.return;
        }
        return v = Jc, Jc = false, v;
      }
      function Jr(e, t, n) {
        var r = t.updateQueue;
        if (r = r !== null ? r.lastEffect : null, r !== null) {
          var o = r = r.next;
          do {
            if ((o.tag & e) === e) {
              var i = o.destroy;
              o.destroy = void 0, i !== void 0 && ua(t, n, i);
            }
            o = o.next;
          } while (o !== r);
        }
      }
      function us(e, t) {
        if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
          var n = t = t.next;
          do {
            if ((n.tag & e) === e) {
              var r = n.create;
              n.destroy = r();
            }
            n = n.next;
          } while (n !== t);
        }
      }
      function ca(e) {
        var t = e.ref;
        if (t !== null) {
          var n = e.stateNode;
          switch (e.tag) {
            case 5:
              e = n;
              break;
            default:
              e = n;
          }
          typeof t == "function" ? t(e) : t.current = e;
        }
      }
      function Yp(e) {
        var t = e.alternate;
        t !== null && (e.alternate = null, Yp(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[St], delete t[mo], delete t[Xl], delete t[gy], delete t[hy])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
      function Kp(e) {
        return e.tag === 5 || e.tag === 3 || e.tag === 4;
      }
      function ef(e) {
        e: for (; ; ) {
          for (; e.sibling === null; ) {
            if (e.return === null || Kp(e.return)) return null;
            e = e.return;
          }
          for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            e.child.return = e, e = e.child;
          }
          if (!(e.flags & 2)) return e.stateNode;
        }
      }
      function fa(e, t, n) {
        var r = e.tag;
        if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Ai));
        else if (r !== 4 && (e = e.child, e !== null)) for (fa(e, t, n), e = e.sibling; e !== null; ) fa(e, t, n), e = e.sibling;
      }
      function da(e, t, n) {
        var r = e.tag;
        if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
        else if (r !== 4 && (e = e.child, e !== null)) for (da(e, t, n), e = e.sibling; e !== null; ) da(e, t, n), e = e.sibling;
      }
      var be = null, dt = false;
      function Xt(e, t, n) {
        for (n = n.child; n !== null; ) Qp(e, t, n), n = n.sibling;
      }
      function Qp(e, t, n) {
        if (xt && typeof xt.onCommitFiberUnmount == "function") try {
          xt.onCommitFiberUnmount(ts, n);
        } catch {
        }
        switch (n.tag) {
          case 5:
            Ne || er(n, t);
          case 6:
            var r = be, o = dt;
            be = null, Xt(e, t, n), be = r, dt = o, be !== null && (dt ? (e = be, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : be.removeChild(n.stateNode));
            break;
          case 18:
            be !== null && (dt ? (e = be, n = n.stateNode, e.nodeType === 8 ? Ks(e.parentNode, n) : e.nodeType === 1 && Ks(e, n), ao(e)) : Ks(be, n.stateNode));
            break;
          case 4:
            r = be, o = dt, be = n.stateNode.containerInfo, dt = true, Xt(e, t, n), be = r, dt = o;
            break;
          case 0:
          case 11:
          case 14:
          case 15:
            if (!Ne && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
              o = r = r.next;
              do {
                var i = o, s = i.destroy;
                i = i.tag, s !== void 0 && (i & 2 || i & 4) && ua(n, t, s), o = o.next;
              } while (o !== r);
            }
            Xt(e, t, n);
            break;
          case 1:
            if (!Ne && (er(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
              r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
            } catch (l) {
              pe(n, t, l);
            }
            Xt(e, t, n);
            break;
          case 21:
            Xt(e, t, n);
            break;
          case 22:
            n.mode & 1 ? (Ne = (r = Ne) || n.memoizedState !== null, Xt(e, t, n), Ne = r) : Xt(e, t, n);
            break;
          default:
            Xt(e, t, n);
        }
      }
      function tf(e) {
        var t = e.updateQueue;
        if (t !== null) {
          e.updateQueue = null;
          var n = e.stateNode;
          n === null && (n = e.stateNode = new Iy()), t.forEach(function(r) {
            var o = Uy.bind(null, e, r);
            n.has(r) || (n.add(r), r.then(o, o));
          });
        }
      }
      function ct(e, t) {
        var n = t.deletions;
        if (n !== null) for (var r = 0; r < n.length; r++) {
          var o = n[r];
          try {
            var i = e, s = t, l = s;
            e: for (; l !== null; ) {
              switch (l.tag) {
                case 5:
                  be = l.stateNode, dt = false;
                  break e;
                case 3:
                  be = l.stateNode.containerInfo, dt = true;
                  break e;
                case 4:
                  be = l.stateNode.containerInfo, dt = true;
                  break e;
              }
              l = l.return;
            }
            if (be === null) throw Error(D(160));
            Qp(i, s, o), be = null, dt = false;
            var a = o.alternate;
            a !== null && (a.return = null), o.return = null;
          } catch (u) {
            pe(o, t, u);
          }
        }
        if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Xp(t, e), t = t.sibling;
      }
      function Xp(e, t) {
        var n = e.alternate, r = e.flags;
        switch (e.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            if (ct(t, e), vt(e), r & 4) {
              try {
                Jr(3, e, e.return), us(3, e);
              } catch (_) {
                pe(e, e.return, _);
              }
              try {
                Jr(5, e, e.return);
              } catch (_) {
                pe(e, e.return, _);
              }
            }
            break;
          case 1:
            ct(t, e), vt(e), r & 512 && n !== null && er(n, n.return);
            break;
          case 5:
            if (ct(t, e), vt(e), r & 512 && n !== null && er(n, n.return), e.flags & 32) {
              var o = e.stateNode;
              try {
                oo(o, "");
              } catch (_) {
                pe(e, e.return, _);
              }
            }
            if (r & 4 && (o = e.stateNode, o != null)) {
              var i = e.memoizedProps, s = n !== null ? n.memoizedProps : i, l = e.type, a = e.updateQueue;
              if (e.updateQueue = null, a !== null) try {
                l === "input" && i.type === "radio" && i.name != null && vd(o, i), Dl(l, s);
                var u = Dl(l, i);
                for (s = 0; s < a.length; s += 2) {
                  var p = a[s], d = a[s + 1];
                  p === "style" ? Ed(o, d) : p === "dangerouslySetInnerHTML" ? Sd(o, d) : p === "children" ? oo(o, d) : Oa(o, p, d, u);
                }
                switch (l) {
                  case "input":
                    Al(o, i);
                    break;
                  case "textarea":
                    _d(o, i);
                    break;
                  case "select":
                    var m = o._wrapperState.wasMultiple;
                    o._wrapperState.wasMultiple = !!i.multiple;
                    var h = i.value;
                    h != null ? rr(o, !!i.multiple, h, false) : m !== !!i.multiple && (i.defaultValue != null ? rr(o, !!i.multiple, i.defaultValue, true) : rr(o, !!i.multiple, i.multiple ? [] : "", false));
                }
                o[mo] = i;
              } catch (_) {
                pe(e, e.return, _);
              }
            }
            break;
          case 6:
            if (ct(t, e), vt(e), r & 4) {
              if (e.stateNode === null) throw Error(D(162));
              o = e.stateNode, i = e.memoizedProps;
              try {
                o.nodeValue = i;
              } catch (_) {
                pe(e, e.return, _);
              }
            }
            break;
          case 3:
            if (ct(t, e), vt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
              ao(t.containerInfo);
            } catch (_) {
              pe(e, e.return, _);
            }
            break;
          case 4:
            ct(t, e), vt(e);
            break;
          case 13:
            ct(t, e), vt(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (mu = ge())), r & 4 && tf(e);
            break;
          case 22:
            if (p = n !== null && n.memoizedState !== null, e.mode & 1 ? (Ne = (u = Ne) || p, ct(t, e), Ne = u) : ct(t, e), vt(e), r & 8192) {
              if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !p && e.mode & 1) for (U = e, p = e.child; p !== null; ) {
                for (d = U = p; U !== null; ) {
                  switch (m = U, h = m.child, m.tag) {
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                      Jr(4, m, m.return);
                      break;
                    case 1:
                      er(m, m.return);
                      var v = m.stateNode;
                      if (typeof v.componentWillUnmount == "function") {
                        r = m, n = m.return;
                        try {
                          t = r, v.props = t.memoizedProps, v.state = t.memoizedState, v.componentWillUnmount();
                        } catch (_) {
                          pe(r, n, _);
                        }
                      }
                      break;
                    case 5:
                      er(m, m.return);
                      break;
                    case 22:
                      if (m.memoizedState !== null) {
                        rf(d);
                        continue;
                      }
                  }
                  h !== null ? (h.return = m, U = h) : rf(d);
                }
                p = p.sibling;
              }
              e: for (p = null, d = e; ; ) {
                if (d.tag === 5) {
                  if (p === null) {
                    p = d;
                    try {
                      o = d.stateNode, u ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (l = d.stateNode, a = d.memoizedProps.style, s = a != null && a.hasOwnProperty("display") ? a.display : null, l.style.display = xd("display", s));
                    } catch (_) {
                      pe(e, e.return, _);
                    }
                  }
                } else if (d.tag === 6) {
                  if (p === null) try {
                    d.stateNode.nodeValue = u ? "" : d.memoizedProps;
                  } catch (_) {
                    pe(e, e.return, _);
                  }
                } else if ((d.tag !== 22 && d.tag !== 23 || d.memoizedState === null || d === e) && d.child !== null) {
                  d.child.return = d, d = d.child;
                  continue;
                }
                if (d === e) break e;
                for (; d.sibling === null; ) {
                  if (d.return === null || d.return === e) break e;
                  p === d && (p = null), d = d.return;
                }
                p === d && (p = null), d.sibling.return = d.return, d = d.sibling;
              }
            }
            break;
          case 19:
            ct(t, e), vt(e), r & 4 && tf(e);
            break;
          case 21:
            break;
          default:
            ct(t, e), vt(e);
        }
      }
      function vt(e) {
        var t = e.flags;
        if (t & 2) {
          try {
            e: {
              for (var n = e.return; n !== null; ) {
                if (Kp(n)) {
                  var r = n;
                  break e;
                }
                n = n.return;
              }
              throw Error(D(160));
            }
            switch (r.tag) {
              case 5:
                var o = r.stateNode;
                r.flags & 32 && (oo(o, ""), r.flags &= -33);
                var i = ef(e);
                da(e, i, o);
                break;
              case 3:
              case 4:
                var s = r.stateNode.containerInfo, l = ef(e);
                fa(e, l, s);
                break;
              default:
                throw Error(D(161));
            }
          } catch (a) {
            pe(e, e.return, a);
          }
          e.flags &= -3;
        }
        t & 4096 && (e.flags &= -4097);
      }
      function $y(e, t, n) {
        U = e, qp(e);
      }
      function qp(e, t, n) {
        for (var r = (e.mode & 1) !== 0; U !== null; ) {
          var o = U, i = o.child;
          if (o.tag === 22 && r) {
            var s = o.memoizedState !== null || qo;
            if (!s) {
              var l = o.alternate, a = l !== null && l.memoizedState !== null || Ne;
              l = qo;
              var u = Ne;
              if (qo = s, (Ne = a) && !u) for (U = o; U !== null; ) s = U, a = s.child, s.tag === 22 && s.memoizedState !== null ? of(o) : a !== null ? (a.return = s, U = a) : of(o);
              for (; i !== null; ) U = i, qp(i), i = i.sibling;
              U = o, qo = l, Ne = u;
            }
            nf(e);
          } else o.subtreeFlags & 8772 && i !== null ? (i.return = o, U = i) : nf(e);
        }
      }
      function nf(e) {
        for (; U !== null; ) {
          var t = U;
          if (t.flags & 8772) {
            var n = t.alternate;
            try {
              if (t.flags & 8772) switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  Ne || us(5, t);
                  break;
                case 1:
                  var r = t.stateNode;
                  if (t.flags & 4 && !Ne) if (n === null) r.componentDidMount();
                  else {
                    var o = t.elementType === t.type ? n.memoizedProps : ft(t.type, n.memoizedProps);
                    r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                  }
                  var i = t.updateQueue;
                  i !== null && zc(t, i, r);
                  break;
                case 3:
                  var s = t.updateQueue;
                  if (s !== null) {
                    if (n = null, t.child !== null) switch (t.child.tag) {
                      case 5:
                        n = t.child.stateNode;
                        break;
                      case 1:
                        n = t.child.stateNode;
                    }
                    zc(t, s, n);
                  }
                  break;
                case 5:
                  var l = t.stateNode;
                  if (n === null && t.flags & 4) {
                    n = l;
                    var a = t.memoizedProps;
                    switch (t.type) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        a.autoFocus && n.focus();
                        break;
                      case "img":
                        a.src && (n.src = a.src);
                    }
                  }
                  break;
                case 6:
                  break;
                case 4:
                  break;
                case 12:
                  break;
                case 13:
                  if (t.memoizedState === null) {
                    var u = t.alternate;
                    if (u !== null) {
                      var p = u.memoizedState;
                      if (p !== null) {
                        var d = p.dehydrated;
                        d !== null && ao(d);
                      }
                    }
                  }
                  break;
                case 19:
                case 17:
                case 21:
                case 22:
                case 23:
                case 25:
                  break;
                default:
                  throw Error(D(163));
              }
              Ne || t.flags & 512 && ca(t);
            } catch (m) {
              pe(t, t.return, m);
            }
          }
          if (t === e) {
            U = null;
            break;
          }
          if (n = t.sibling, n !== null) {
            n.return = t.return, U = n;
            break;
          }
          U = t.return;
        }
      }
      function rf(e) {
        for (; U !== null; ) {
          var t = U;
          if (t === e) {
            U = null;
            break;
          }
          var n = t.sibling;
          if (n !== null) {
            n.return = t.return, U = n;
            break;
          }
          U = t.return;
        }
      }
      function of(e) {
        for (; U !== null; ) {
          var t = U;
          try {
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                var n = t.return;
                try {
                  us(4, t);
                } catch (a) {
                  pe(t, n, a);
                }
                break;
              case 1:
                var r = t.stateNode;
                if (typeof r.componentDidMount == "function") {
                  var o = t.return;
                  try {
                    r.componentDidMount();
                  } catch (a) {
                    pe(t, o, a);
                  }
                }
                var i = t.return;
                try {
                  ca(t);
                } catch (a) {
                  pe(t, i, a);
                }
                break;
              case 5:
                var s = t.return;
                try {
                  ca(t);
                } catch (a) {
                  pe(t, s, a);
                }
            }
          } catch (a) {
            pe(t, t.return, a);
          }
          if (t === e) {
            U = null;
            break;
          }
          var l = t.sibling;
          if (l !== null) {
            l.return = t.return, U = l;
            break;
          }
          U = t.return;
        }
      }
      var Oy = Math.ceil, Ui = Yt.ReactCurrentDispatcher, du = Yt.ReactCurrentOwner, nt = Yt.ReactCurrentBatchConfig, X = 0, xe = null, he = null, Ce = 0, He = 0, tr = hn(0), _e = 0, wo = null, In = 0, cs = 0, pu = 0, eo = null, Me = null, mu = 0, yr = 1 / 0, It = null, Wi = false, pa = null, un = null, Zo = false, nn = null, Vi = 0, to = 0, ma = null, hi = -1, yi = 0;
      function Ie() {
        return X & 6 ? ge() : hi !== -1 ? hi : hi = ge();
      }
      function cn(e) {
        return e.mode & 1 ? X & 2 && Ce !== 0 ? Ce & -Ce : vy.transition !== null ? (yi === 0 && (yi = Od()), yi) : (e = ee, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Ud(e.type)), e) : 1;
      }
      function ht(e, t, n, r) {
        if (50 < to) throw to = 0, ma = null, Error(D(185));
        ko(e, n, r), (!(X & 2) || e !== xe) && (e === xe && (!(X & 2) && (cs |= n), _e === 4 && en(e, Ce)), Be(e, r), n === 1 && X === 0 && !(t.mode & 1) && (yr = ge() + 500, ss && yn()));
      }
      function Be(e, t) {
        var n = e.callbackNode;
        vh(e, t);
        var r = Ri(e, e === xe ? Ce : 0);
        if (r === 0) n !== null && pc(n), e.callbackNode = null, e.callbackPriority = 0;
        else if (t = r & -r, e.callbackPriority !== t) {
          if (n != null && pc(n), t === 1) e.tag === 0 ? yy(sf.bind(null, e)) : lp(sf.bind(null, e)), py(function() {
            !(X & 6) && yn();
          }), n = null;
          else {
            switch (Dd(r)) {
              case 1:
                n = za;
                break;
              case 4:
                n = Ld;
                break;
              case 16:
                n = ki;
                break;
              case 536870912:
                n = $d;
                break;
              default:
                n = ki;
            }
            n = im(n, Zp.bind(null, e));
          }
          e.callbackPriority = t, e.callbackNode = n;
        }
      }
      function Zp(e, t) {
        if (hi = -1, yi = 0, X & 6) throw Error(D(327));
        var n = e.callbackNode;
        if (ar() && e.callbackNode !== n) return null;
        var r = Ri(e, e === xe ? Ce : 0);
        if (r === 0) return null;
        if (r & 30 || r & e.expiredLanes || t) t = Hi(e, r);
        else {
          t = r;
          var o = X;
          X |= 2;
          var i = em();
          (xe !== e || Ce !== t) && (It = null, yr = ge() + 500, Rn(e, t));
          do
            try {
              Fy();
              break;
            } catch (l) {
              Jp(e, l);
            }
          while (true);
          Ja(), Ui.current = i, X = o, he !== null ? t = 0 : (xe = null, Ce = 0, t = _e);
        }
        if (t !== 0) {
          if (t === 2 && (o = Bl(e), o !== 0 && (r = o, t = ga(e, o))), t === 1) throw n = wo, Rn(e, 0), en(e, r), Be(e, ge()), n;
          if (t === 6) en(e, r);
          else {
            if (o = e.current.alternate, !(r & 30) && !Dy(o) && (t = Hi(e, r), t === 2 && (i = Bl(e), i !== 0 && (r = i, t = ga(e, i))), t === 1)) throw n = wo, Rn(e, 0), en(e, r), Be(e, ge()), n;
            switch (e.finishedWork = o, e.finishedLanes = r, t) {
              case 0:
              case 1:
                throw Error(D(345));
              case 2:
                xn(e, Me, It);
                break;
              case 3:
                if (en(e, r), (r & 130023424) === r && (t = mu + 500 - ge(), 10 < t)) {
                  if (Ri(e, 0) !== 0) break;
                  if (o = e.suspendedLanes, (o & r) !== r) {
                    Ie(), e.pingedLanes |= e.suspendedLanes & o;
                    break;
                  }
                  e.timeoutHandle = Ql(xn.bind(null, e, Me, It), t);
                  break;
                }
                xn(e, Me, It);
                break;
              case 4:
                if (en(e, r), (r & 4194240) === r) break;
                for (t = e.eventTimes, o = -1; 0 < r; ) {
                  var s = 31 - gt(r);
                  i = 1 << s, s = t[s], s > o && (o = s), r &= ~i;
                }
                if (r = o, r = ge() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Oy(r / 1960)) - r, 10 < r) {
                  e.timeoutHandle = Ql(xn.bind(null, e, Me, It), r);
                  break;
                }
                xn(e, Me, It);
                break;
              case 5:
                xn(e, Me, It);
                break;
              default:
                throw Error(D(329));
            }
          }
        }
        return Be(e, ge()), e.callbackNode === n ? Zp.bind(null, e) : null;
      }
      function ga(e, t) {
        var n = eo;
        return e.current.memoizedState.isDehydrated && (Rn(e, t).flags |= 256), e = Hi(e, t), e !== 2 && (t = Me, Me = n, t !== null && ha(t)), e;
      }
      function ha(e) {
        Me === null ? Me = e : Me.push.apply(Me, e);
      }
      function Dy(e) {
        for (var t = e; ; ) {
          if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
              var o = n[r], i = o.getSnapshot;
              o = o.value;
              try {
                if (!yt(i(), o)) return false;
              } catch {
                return false;
              }
            }
          }
          if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
          else {
            if (t === e) break;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) return true;
              t = t.return;
            }
            t.sibling.return = t.return, t = t.sibling;
          }
        }
        return true;
      }
      function en(e, t) {
        for (t &= ~pu, t &= ~cs, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
          var n = 31 - gt(t), r = 1 << n;
          e[n] = -1, t &= ~r;
        }
      }
      function sf(e) {
        if (X & 6) throw Error(D(327));
        ar();
        var t = Ri(e, 0);
        if (!(t & 1)) return Be(e, ge()), null;
        var n = Hi(e, t);
        if (e.tag !== 0 && n === 2) {
          var r = Bl(e);
          r !== 0 && (t = r, n = ga(e, r));
        }
        if (n === 1) throw n = wo, Rn(e, 0), en(e, t), Be(e, ge()), n;
        if (n === 6) throw Error(D(345));
        return e.finishedWork = e.current.alternate, e.finishedLanes = t, xn(e, Me, It), Be(e, ge()), null;
      }
      function gu(e, t) {
        var n = X;
        X |= 1;
        try {
          return e(t);
        } finally {
          X = n, X === 0 && (yr = ge() + 500, ss && yn());
        }
      }
      function Ln(e) {
        nn !== null && nn.tag === 0 && !(X & 6) && ar();
        var t = X;
        X |= 1;
        var n = nt.transition, r = ee;
        try {
          if (nt.transition = null, ee = 1, e) return e();
        } finally {
          ee = r, nt.transition = n, X = t, !(X & 6) && yn();
        }
      }
      function hu() {
        He = tr.current, le(tr);
      }
      function Rn(e, t) {
        e.finishedWork = null, e.finishedLanes = 0;
        var n = e.timeoutHandle;
        if (n !== -1 && (e.timeoutHandle = -1, dy(n)), he !== null) for (n = he.return; n !== null; ) {
          var r = n;
          switch (Xa(r), r.tag) {
            case 1:
              r = r.type.childContextTypes, r != null && Ii();
              break;
            case 3:
              gr(), le(je), le(Pe), iu();
              break;
            case 5:
              ou(r);
              break;
            case 4:
              gr();
              break;
            case 13:
              le(ce);
              break;
            case 19:
              le(ce);
              break;
            case 10:
              eu(r.type._context);
              break;
            case 22:
            case 23:
              hu();
          }
          n = n.return;
        }
        if (xe = e, he = e = fn(e.current, null), Ce = He = t, _e = 0, wo = null, pu = cs = In = 0, Me = eo = null, bn !== null) {
          for (t = 0; t < bn.length; t++) if (n = bn[t], r = n.interleaved, r !== null) {
            n.interleaved = null;
            var o = r.next, i = n.pending;
            if (i !== null) {
              var s = i.next;
              i.next = o, r.next = s;
            }
            n.pending = r;
          }
          bn = null;
        }
        return e;
      }
      function Jp(e, t) {
        do {
          var n = he;
          try {
            if (Ja(), pi.current = Bi, zi) {
              for (var r = fe.memoizedState; r !== null; ) {
                var o = r.queue;
                o !== null && (o.pending = null), r = r.next;
              }
              zi = false;
            }
            if (An = 0, Se = ve = fe = null, Zr = false, yo = 0, du.current = null, n === null || n.return === null) {
              _e = 1, wo = t, he = null;
              break;
            }
            e: {
              var i = e, s = n.return, l = n, a = t;
              if (t = Ce, l.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
                var u = a, p = l, d = p.tag;
                if (!(p.mode & 1) && (d === 0 || d === 11 || d === 15)) {
                  var m = p.alternate;
                  m ? (p.updateQueue = m.updateQueue, p.memoizedState = m.memoizedState, p.lanes = m.lanes) : (p.updateQueue = null, p.memoizedState = null);
                }
                var h = Gc(s);
                if (h !== null) {
                  h.flags &= -257, Yc(h, s, l, i, t), h.mode & 1 && Hc(i, u, t), t = h, a = u;
                  var v = t.updateQueue;
                  if (v === null) {
                    var _ = /* @__PURE__ */ new Set();
                    _.add(a), t.updateQueue = _;
                  } else v.add(a);
                  break e;
                } else {
                  if (!(t & 1)) {
                    Hc(i, u, t), yu();
                    break e;
                  }
                  a = Error(D(426));
                }
              } else if (ae && l.mode & 1) {
                var C = Gc(s);
                if (C !== null) {
                  !(C.flags & 65536) && (C.flags |= 256), Yc(C, s, l, i, t), qa(hr(a, l));
                  break e;
                }
              }
              i = a = hr(a, l), _e !== 4 && (_e = 2), eo === null ? eo = [
                i
              ] : eo.push(i), i = s;
              do {
                switch (i.tag) {
                  case 3:
                    i.flags |= 65536, t &= -t, i.lanes |= t;
                    var g = Dp(i, a, t);
                    jc(i, g);
                    break e;
                  case 1:
                    l = a;
                    var c = i.type, f = i.stateNode;
                    if (!(i.flags & 128) && (typeof c.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (un === null || !un.has(f)))) {
                      i.flags |= 65536, t &= -t, i.lanes |= t;
                      var y = Mp(i, l, t);
                      jc(i, y);
                      break e;
                    }
                }
                i = i.return;
              } while (i !== null);
            }
            nm(n);
          } catch (x) {
            t = x, he === n && n !== null && (he = n = n.return);
            continue;
          }
          break;
        } while (true);
      }
      function em() {
        var e = Ui.current;
        return Ui.current = Bi, e === null ? Bi : e;
      }
      function yu() {
        (_e === 0 || _e === 3 || _e === 2) && (_e = 4), xe === null || !(In & 268435455) && !(cs & 268435455) || en(xe, Ce);
      }
      function Hi(e, t) {
        var n = X;
        X |= 2;
        var r = em();
        (xe !== e || Ce !== t) && (It = null, Rn(e, t));
        do
          try {
            My();
            break;
          } catch (o) {
            Jp(e, o);
          }
        while (true);
        if (Ja(), X = n, Ui.current = r, he !== null) throw Error(D(261));
        return xe = null, Ce = 0, _e;
      }
      function My() {
        for (; he !== null; ) tm(he);
      }
      function Fy() {
        for (; he !== null && !uh(); ) tm(he);
      }
      function tm(e) {
        var t = om(e.alternate, e, He);
        e.memoizedProps = e.pendingProps, t === null ? nm(e) : he = t, du.current = null;
      }
      function nm(e) {
        var t = e;
        do {
          var n = t.alternate;
          if (e = t.return, t.flags & 32768) {
            if (n = Ay(n, t), n !== null) {
              n.flags &= 32767, he = n;
              return;
            }
            if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
            else {
              _e = 6, he = null;
              return;
            }
          } else if (n = Py(n, t, He), n !== null) {
            he = n;
            return;
          }
          if (t = t.sibling, t !== null) {
            he = t;
            return;
          }
          he = t = e;
        } while (t !== null);
        _e === 0 && (_e = 5);
      }
      function xn(e, t, n) {
        var r = ee, o = nt.transition;
        try {
          nt.transition = null, ee = 1, jy(e, t, n, r);
        } finally {
          nt.transition = o, ee = r;
        }
        return null;
      }
      function jy(e, t, n, r) {
        do
          ar();
        while (nn !== null);
        if (X & 6) throw Error(D(327));
        n = e.finishedWork;
        var o = e.finishedLanes;
        if (n === null) return null;
        if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(D(177));
        e.callbackNode = null, e.callbackPriority = 0;
        var i = n.lanes | n.childLanes;
        if (_h(e, i), e === xe && (he = xe = null, Ce = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Zo || (Zo = true, im(ki, function() {
          return ar(), null;
        })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
          i = nt.transition, nt.transition = null;
          var s = ee;
          ee = 1;
          var l = X;
          X |= 4, du.current = null, Ly(e, n), Xp(n, e), iy(Yl), Ti = !!Gl, Yl = Gl = null, e.current = n, $y(n), ch(), X = l, ee = s, nt.transition = i;
        } else e.current = n;
        if (Zo && (Zo = false, nn = e, Vi = o), i = e.pendingLanes, i === 0 && (un = null), ph(n.stateNode), Be(e, ge()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], r(o.value, {
          componentStack: o.stack,
          digest: o.digest
        });
        if (Wi) throw Wi = false, e = pa, pa = null, e;
        return Vi & 1 && e.tag !== 0 && ar(), i = e.pendingLanes, i & 1 ? e === ma ? to++ : (to = 0, ma = e) : to = 0, yn(), null;
      }
      function ar() {
        if (nn !== null) {
          var e = Dd(Vi), t = nt.transition, n = ee;
          try {
            if (nt.transition = null, ee = 16 > e ? 16 : e, nn === null) var r = false;
            else {
              if (e = nn, nn = null, Vi = 0, X & 6) throw Error(D(331));
              var o = X;
              for (X |= 4, U = e.current; U !== null; ) {
                var i = U, s = i.child;
                if (U.flags & 16) {
                  var l = i.deletions;
                  if (l !== null) {
                    for (var a = 0; a < l.length; a++) {
                      var u = l[a];
                      for (U = u; U !== null; ) {
                        var p = U;
                        switch (p.tag) {
                          case 0:
                          case 11:
                          case 15:
                            Jr(8, p, i);
                        }
                        var d = p.child;
                        if (d !== null) d.return = p, U = d;
                        else for (; U !== null; ) {
                          p = U;
                          var m = p.sibling, h = p.return;
                          if (Yp(p), p === u) {
                            U = null;
                            break;
                          }
                          if (m !== null) {
                            m.return = h, U = m;
                            break;
                          }
                          U = h;
                        }
                      }
                    }
                    var v = i.alternate;
                    if (v !== null) {
                      var _ = v.child;
                      if (_ !== null) {
                        v.child = null;
                        do {
                          var C = _.sibling;
                          _.sibling = null, _ = C;
                        } while (_ !== null);
                      }
                    }
                    U = i;
                  }
                }
                if (i.subtreeFlags & 2064 && s !== null) s.return = i, U = s;
                else e: for (; U !== null; ) {
                  if (i = U, i.flags & 2048) switch (i.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Jr(9, i, i.return);
                  }
                  var g = i.sibling;
                  if (g !== null) {
                    g.return = i.return, U = g;
                    break e;
                  }
                  U = i.return;
                }
              }
              var c = e.current;
              for (U = c; U !== null; ) {
                s = U;
                var f = s.child;
                if (s.subtreeFlags & 2064 && f !== null) f.return = s, U = f;
                else e: for (s = c; U !== null; ) {
                  if (l = U, l.flags & 2048) try {
                    switch (l.tag) {
                      case 0:
                      case 11:
                      case 15:
                        us(9, l);
                    }
                  } catch (x) {
                    pe(l, l.return, x);
                  }
                  if (l === s) {
                    U = null;
                    break e;
                  }
                  var y = l.sibling;
                  if (y !== null) {
                    y.return = l.return, U = y;
                    break e;
                  }
                  U = l.return;
                }
              }
              if (X = o, yn(), xt && typeof xt.onPostCommitFiberRoot == "function") try {
                xt.onPostCommitFiberRoot(ts, e);
              } catch {
              }
              r = true;
            }
            return r;
          } finally {
            ee = n, nt.transition = t;
          }
        }
        return false;
      }
      function lf(e, t, n) {
        t = hr(n, t), t = Dp(e, t, 1), e = an(e, t, 1), t = Ie(), e !== null && (ko(e, 1, t), Be(e, t));
      }
      function pe(e, t, n) {
        if (e.tag === 3) lf(e, e, n);
        else for (; t !== null; ) {
          if (t.tag === 3) {
            lf(t, e, n);
            break;
          } else if (t.tag === 1) {
            var r = t.stateNode;
            if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (un === null || !un.has(r))) {
              e = hr(n, e), e = Mp(t, e, 1), t = an(t, e, 1), e = Ie(), t !== null && (ko(t, 1, e), Be(t, e));
              break;
            }
          }
          t = t.return;
        }
      }
      function zy(e, t, n) {
        var r = e.pingCache;
        r !== null && r.delete(t), t = Ie(), e.pingedLanes |= e.suspendedLanes & n, xe === e && (Ce & n) === n && (_e === 4 || _e === 3 && (Ce & 130023424) === Ce && 500 > ge() - mu ? Rn(e, 0) : pu |= n), Be(e, t);
      }
      function rm(e, t) {
        t === 0 && (e.mode & 1 ? (t = Uo, Uo <<= 1, !(Uo & 130023424) && (Uo = 4194304)) : t = 1);
        var n = Ie();
        e = Ut(e, t), e !== null && (ko(e, t, n), Be(e, n));
      }
      function By(e) {
        var t = e.memoizedState, n = 0;
        t !== null && (n = t.retryLane), rm(e, n);
      }
      function Uy(e, t) {
        var n = 0;
        switch (e.tag) {
          case 13:
            var r = e.stateNode, o = e.memoizedState;
            o !== null && (n = o.retryLane);
            break;
          case 19:
            r = e.stateNode;
            break;
          default:
            throw Error(D(314));
        }
        r !== null && r.delete(t), rm(e, n);
      }
      var om;
      om = function(e, t, n) {
        if (e !== null) if (e.memoizedProps !== t.pendingProps || je.current) Fe = true;
        else {
          if (!(e.lanes & n) && !(t.flags & 128)) return Fe = false, Ny(e, t, n);
          Fe = !!(e.flags & 131072);
        }
        else Fe = false, ae && t.flags & 1048576 && ap(t, Oi, t.index);
        switch (t.lanes = 0, t.tag) {
          case 2:
            var r = t.type;
            gi(e, t), e = t.pendingProps;
            var o = dr(t, Pe.current);
            lr(t, n), o = lu(null, t, r, e, o, n);
            var i = au();
            return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, ze(r) ? (i = true, Li(t)) : i = false, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, nu(t), o.updater = as, t.stateNode = o, o._reactInternals = t, na(t, r, e, n), t = ia(null, t, r, true, i, n)) : (t.tag = 0, ae && i && Qa(t), Ae(null, t, o, n), t = t.child), t;
          case 16:
            r = t.elementType;
            e: {
              switch (gi(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = Vy(r), e = ft(r, e), o) {
                case 0:
                  t = oa(null, t, r, e, n);
                  break e;
                case 1:
                  t = Xc(null, t, r, e, n);
                  break e;
                case 11:
                  t = Kc(null, t, r, e, n);
                  break e;
                case 14:
                  t = Qc(null, t, r, ft(r.type, e), n);
                  break e;
              }
              throw Error(D(306, r, ""));
            }
            return t;
          case 0:
            return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : ft(r, o), oa(e, t, r, o, n);
          case 1:
            return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : ft(r, o), Xc(e, t, r, o, n);
          case 3:
            e: {
              if (Bp(t), e === null) throw Error(D(387));
              r = t.pendingProps, i = t.memoizedState, o = i.element, mp(e, t), Fi(t, r, null, n);
              var s = t.memoizedState;
              if (r = s.element, i.isDehydrated) if (i = {
                element: r,
                isDehydrated: false,
                cache: s.cache,
                pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                transitions: s.transitions
              }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
                o = hr(Error(D(423)), t), t = qc(e, t, r, n, o);
                break e;
              } else if (r !== o) {
                o = hr(Error(D(424)), t), t = qc(e, t, r, n, o);
                break e;
              } else for (Ge = ln(t.stateNode.containerInfo.firstChild), Ye = t, ae = true, pt = null, n = dp(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
              else {
                if (pr(), r === o) {
                  t = Wt(e, t, n);
                  break e;
                }
                Ae(e, t, r, n);
              }
              t = t.child;
            }
            return t;
          case 5:
            return gp(t), e === null && Jl(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, s = o.children, Kl(r, o) ? s = null : i !== null && Kl(r, i) && (t.flags |= 32), zp(e, t), Ae(e, t, s, n), t.child;
          case 6:
            return e === null && Jl(t), null;
          case 13:
            return Up(e, t, n);
          case 4:
            return ru(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = mr(t, null, r, n) : Ae(e, t, r, n), t.child;
          case 11:
            return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : ft(r, o), Kc(e, t, r, o, n);
          case 7:
            return Ae(e, t, t.pendingProps, n), t.child;
          case 8:
            return Ae(e, t, t.pendingProps.children, n), t.child;
          case 12:
            return Ae(e, t, t.pendingProps.children, n), t.child;
          case 10:
            e: {
              if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, s = o.value, re(Di, r._currentValue), r._currentValue = s, i !== null) if (yt(i.value, s)) {
                if (i.children === o.children && !je.current) {
                  t = Wt(e, t, n);
                  break e;
                }
              } else for (i = t.child, i !== null && (i.return = t); i !== null; ) {
                var l = i.dependencies;
                if (l !== null) {
                  s = i.child;
                  for (var a = l.firstContext; a !== null; ) {
                    if (a.context === r) {
                      if (i.tag === 1) {
                        a = Ft(-1, n & -n), a.tag = 2;
                        var u = i.updateQueue;
                        if (u !== null) {
                          u = u.shared;
                          var p = u.pending;
                          p === null ? a.next = a : (a.next = p.next, p.next = a), u.pending = a;
                        }
                      }
                      i.lanes |= n, a = i.alternate, a !== null && (a.lanes |= n), ea(i.return, n, t), l.lanes |= n;
                      break;
                    }
                    a = a.next;
                  }
                } else if (i.tag === 10) s = i.type === t.type ? null : i.child;
                else if (i.tag === 18) {
                  if (s = i.return, s === null) throw Error(D(341));
                  s.lanes |= n, l = s.alternate, l !== null && (l.lanes |= n), ea(s, n, t), s = i.sibling;
                } else s = i.child;
                if (s !== null) s.return = i;
                else for (s = i; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (i = s.sibling, i !== null) {
                    i.return = s.return, s = i;
                    break;
                  }
                  s = s.return;
                }
                i = s;
              }
              Ae(e, t, o.children, n), t = t.child;
            }
            return t;
          case 9:
            return o = t.type, r = t.pendingProps.children, lr(t, n), o = ot(o), r = r(o), t.flags |= 1, Ae(e, t, r, n), t.child;
          case 14:
            return r = t.type, o = ft(r, t.pendingProps), o = ft(r.type, o), Qc(e, t, r, o, n);
          case 15:
            return Fp(e, t, t.type, t.pendingProps, n);
          case 17:
            return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : ft(r, o), gi(e, t), t.tag = 1, ze(r) ? (e = true, Li(t)) : e = false, lr(t, n), Op(t, r, o), na(t, r, o, n), ia(null, t, r, true, e, n);
          case 19:
            return Wp(e, t, n);
          case 22:
            return jp(e, t, n);
        }
        throw Error(D(156, t.tag));
      };
      function im(e, t) {
        return Id(e, t);
      }
      function Wy(e, t, n, r) {
        this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
      }
      function tt(e, t, n, r) {
        return new Wy(e, t, n, r);
      }
      function vu(e) {
        return e = e.prototype, !(!e || !e.isReactComponent);
      }
      function Vy(e) {
        if (typeof e == "function") return vu(e) ? 1 : 0;
        if (e != null) {
          if (e = e.$$typeof, e === Ma) return 11;
          if (e === Fa) return 14;
        }
        return 2;
      }
      function fn(e, t) {
        var n = e.alternate;
        return n === null ? (n = tt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
          lanes: t.lanes,
          firstContext: t.firstContext
        }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
      }
      function vi(e, t, n, r, o, i) {
        var s = 2;
        if (r = e, typeof e == "function") vu(e) && (s = 1);
        else if (typeof e == "string") s = 5;
        else e: switch (e) {
          case Hn:
            return Tn(n.children, o, i, t);
          case Da:
            s = 8, o |= 8;
            break;
          case kl:
            return e = tt(12, n, t, o | 2), e.elementType = kl, e.lanes = i, e;
          case Rl:
            return e = tt(13, n, t, o), e.elementType = Rl, e.lanes = i, e;
          case Tl:
            return e = tt(19, n, t, o), e.elementType = Tl, e.lanes = i, e;
          case gd:
            return fs(n, o, i, t);
          default:
            if (typeof e == "object" && e !== null) switch (e.$$typeof) {
              case pd:
                s = 10;
                break e;
              case md:
                s = 9;
                break e;
              case Ma:
                s = 11;
                break e;
              case Fa:
                s = 14;
                break e;
              case qt:
                s = 16, r = null;
                break e;
            }
            throw Error(D(130, e == null ? e : typeof e, ""));
        }
        return t = tt(s, n, t, o), t.elementType = e, t.type = r, t.lanes = i, t;
      }
      function Tn(e, t, n, r) {
        return e = tt(7, e, r, t), e.lanes = n, e;
      }
      function fs(e, t, n, r) {
        return e = tt(22, e, r, t), e.elementType = gd, e.lanes = n, e.stateNode = {
          isHidden: false
        }, e;
      }
      function nl(e, t, n) {
        return e = tt(6, e, null, t), e.lanes = n, e;
      }
      function rl(e, t, n) {
        return t = tt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
          containerInfo: e.containerInfo,
          pendingChildren: null,
          implementation: e.implementation
        }, t;
      }
      function Hy(e, t, n, r, o) {
        this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ms(0), this.expirationTimes = Ms(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ms(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
      }
      function _u(e, t, n, r, o, i, s, l, a) {
        return e = new Hy(e, t, n, l, a), t === 1 ? (t = 1, i === true && (t |= 8)) : t = 0, i = tt(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = {
          element: r,
          isDehydrated: n,
          cache: null,
          transitions: null,
          pendingSuspenseBoundaries: null
        }, nu(i), e;
      }
      function Gy(e, t, n) {
        var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
          $$typeof: Vn,
          key: r == null ? null : "" + r,
          children: e,
          containerInfo: t,
          implementation: n
        };
      }
      function sm(e) {
        if (!e) return pn;
        e = e._reactInternals;
        e: {
          if (Mn(e) !== e || e.tag !== 1) throw Error(D(170));
          var t = e;
          do {
            switch (t.tag) {
              case 3:
                t = t.stateNode.context;
                break e;
              case 1:
                if (ze(t.type)) {
                  t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                  break e;
                }
            }
            t = t.return;
          } while (t !== null);
          throw Error(D(171));
        }
        if (e.tag === 1) {
          var n = e.type;
          if (ze(n)) return sp(e, n, t);
        }
        return t;
      }
      function lm(e, t, n, r, o, i, s, l, a) {
        return e = _u(n, r, true, e, o, i, s, l, a), e.context = sm(null), n = e.current, r = Ie(), o = cn(n), i = Ft(r, o), i.callback = t ?? null, an(n, i, o), e.current.lanes = o, ko(e, o, r), Be(e, r), e;
      }
      function ds(e, t, n, r) {
        var o = t.current, i = Ie(), s = cn(o);
        return n = sm(n), t.context === null ? t.context = n : t.pendingContext = n, t = Ft(i, s), t.payload = {
          element: e
        }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = an(o, t, s), e !== null && (ht(e, o, s, i), di(e, o, s)), s;
      }
      function Gi(e) {
        if (e = e.current, !e.child) return null;
        switch (e.child.tag) {
          case 5:
            return e.child.stateNode;
          default:
            return e.child.stateNode;
        }
      }
      function af(e, t) {
        if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
          var n = e.retryLane;
          e.retryLane = n !== 0 && n < t ? n : t;
        }
      }
      function wu(e, t) {
        af(e, t), (e = e.alternate) && af(e, t);
      }
      function Yy() {
        return null;
      }
      var am = typeof reportError == "function" ? reportError : function(e) {
        console.error(e);
      };
      function Su(e) {
        this._internalRoot = e;
      }
      ps.prototype.render = Su.prototype.render = function(e) {
        var t = this._internalRoot;
        if (t === null) throw Error(D(409));
        ds(e, t, null, null);
      };
      ps.prototype.unmount = Su.prototype.unmount = function() {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          Ln(function() {
            ds(null, e, null, null);
          }), t[Bt] = null;
        }
      };
      function ps(e) {
        this._internalRoot = e;
      }
      ps.prototype.unstable_scheduleHydration = function(e) {
        if (e) {
          var t = jd();
          e = {
            blockedOn: null,
            target: e,
            priority: t
          };
          for (var n = 0; n < Jt.length && t !== 0 && t < Jt[n].priority; n++) ;
          Jt.splice(n, 0, e), n === 0 && Bd(e);
        }
      };
      function xu(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
      }
      function ms(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
      }
      function uf() {
      }
      function Ky(e, t, n, r, o) {
        if (o) {
          if (typeof r == "function") {
            var i = r;
            r = function() {
              var u = Gi(s);
              i.call(u);
            };
          }
          var s = lm(t, r, e, 0, null, false, false, "", uf);
          return e._reactRootContainer = s, e[Bt] = s.current, fo(e.nodeType === 8 ? e.parentNode : e), Ln(), s;
        }
        for (; o = e.lastChild; ) e.removeChild(o);
        if (typeof r == "function") {
          var l = r;
          r = function() {
            var u = Gi(a);
            l.call(u);
          };
        }
        var a = _u(e, 0, false, null, null, false, false, "", uf);
        return e._reactRootContainer = a, e[Bt] = a.current, fo(e.nodeType === 8 ? e.parentNode : e), Ln(function() {
          ds(t, a, n, r);
        }), a;
      }
      function gs(e, t, n, r, o) {
        var i = n._reactRootContainer;
        if (i) {
          var s = i;
          if (typeof o == "function") {
            var l = o;
            o = function() {
              var a = Gi(s);
              l.call(a);
            };
          }
          ds(t, s, e, o);
        } else s = Ky(n, t, e, o, r);
        return Gi(s);
      }
      Md = function(e) {
        switch (e.tag) {
          case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
              var n = Vr(t.pendingLanes);
              n !== 0 && (Ba(t, n | 1), Be(t, ge()), !(X & 6) && (yr = ge() + 500, yn()));
            }
            break;
          case 13:
            Ln(function() {
              var r = Ut(e, 1);
              if (r !== null) {
                var o = Ie();
                ht(r, e, 1, o);
              }
            }), wu(e, 1);
        }
      };
      Ua = function(e) {
        if (e.tag === 13) {
          var t = Ut(e, 134217728);
          if (t !== null) {
            var n = Ie();
            ht(t, e, 134217728, n);
          }
          wu(e, 134217728);
        }
      };
      Fd = function(e) {
        if (e.tag === 13) {
          var t = cn(e), n = Ut(e, t);
          if (n !== null) {
            var r = Ie();
            ht(n, e, t, r);
          }
          wu(e, t);
        }
      };
      jd = function() {
        return ee;
      };
      zd = function(e, t) {
        var n = ee;
        try {
          return ee = e, t();
        } finally {
          ee = n;
        }
      };
      Fl = function(e, t, n) {
        switch (t) {
          case "input":
            if (Al(e, n), t = n.name, n.type === "radio" && t != null) {
              for (n = e; n.parentNode; ) n = n.parentNode;
              for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                  var o = is(r);
                  if (!o) throw Error(D(90));
                  yd(r), Al(r, o);
                }
              }
            }
            break;
          case "textarea":
            _d(e, n);
            break;
          case "select":
            t = n.value, t != null && rr(e, !!n.multiple, t, false);
        }
      };
      kd = gu;
      Rd = Ln;
      var Qy = {
        usingClientEntryPoint: false,
        Events: [
          To,
          Qn,
          is,
          bd,
          Cd,
          gu
        ]
      }, Mr = {
        findFiberByHostInstance: En,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom"
      }, Xy = {
        bundleType: Mr.bundleType,
        version: Mr.version,
        rendererPackageName: Mr.rendererPackageName,
        rendererConfig: Mr.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: Yt.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(e) {
          return e = Pd(e), e === null ? null : e.stateNode;
        },
        findFiberByHostInstance: Mr.findFiberByHostInstance || Yy,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
      };
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var Jo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!Jo.isDisabled && Jo.supportsFiber) try {
          ts = Jo.inject(Xy), xt = Jo;
        } catch {
        }
      }
      Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Qy;
      Xe.createPortal = function(e, t) {
        var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!xu(t)) throw Error(D(200));
        return Gy(e, t, null, n);
      };
      Xe.createRoot = function(e, t) {
        if (!xu(e)) throw Error(D(299));
        var n = false, r = "", o = am;
        return t != null && (t.unstable_strictMode === true && (n = true), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = _u(e, 1, false, null, null, n, false, r, o), e[Bt] = t.current, fo(e.nodeType === 8 ? e.parentNode : e), new Su(t);
      };
      Xe.findDOMNode = function(e) {
        if (e == null) return null;
        if (e.nodeType === 1) return e;
        var t = e._reactInternals;
        if (t === void 0) throw typeof e.render == "function" ? Error(D(188)) : (e = Object.keys(e).join(","), Error(D(268, e)));
        return e = Pd(t), e = e === null ? null : e.stateNode, e;
      };
      Xe.flushSync = function(e) {
        return Ln(e);
      };
      Xe.hydrate = function(e, t, n) {
        if (!ms(t)) throw Error(D(200));
        return gs(null, e, t, true, n);
      };
      Xe.hydrateRoot = function(e, t, n) {
        if (!xu(e)) throw Error(D(405));
        var r = n != null && n.hydratedSources || null, o = false, i = "", s = am;
        if (n != null && (n.unstable_strictMode === true && (o = true), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = lm(t, null, e, 1, n ?? null, o, false, i, s), e[Bt] = t.current, fo(e), r) for (e = 0; e < r.length; e++) n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [
          n,
          o
        ] : t.mutableSourceEagerHydrationData.push(n, o);
        return new ps(t);
      };
      Xe.render = function(e, t, n) {
        if (!ms(t)) throw Error(D(200));
        return gs(null, e, t, false, n);
      };
      Xe.unmountComponentAtNode = function(e) {
        if (!ms(e)) throw Error(D(40));
        return e._reactRootContainer ? (Ln(function() {
          gs(null, null, e, false, function() {
            e._reactRootContainer = null, e[Bt] = null;
          });
        }), true) : false;
      };
      Xe.unstable_batchedUpdates = gu;
      Xe.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
        if (!ms(n)) throw Error(D(200));
        if (e == null || e._reactInternals === void 0) throw Error(D(38));
        return gs(e, t, n, false, r);
      };
      Xe.version = "18.3.1-next-f1338f8080-20240426";
      function um() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(um);
        } catch (e) {
          console.error(e);
        }
      }
      um(), ud.exports = Xe;
      var hs = ud.exports;
      const qy = Ta(hs);
      var cf = hs;
      bl.createRoot = cf.createRoot, bl.hydrateRoot = cf.hydrateRoot;
      const Zy = "/datafusion-wasm-playground-demo/assets/datafusion_wasm_bg-BfRNeF7Z.wasm", Jy = async (e = {}, t) => {
        let n;
        if (t.startsWith("data:")) {
          const r = t.replace(/^data:.*?base64,/, "");
          let o;
          if (typeof Buffer == "function" && typeof Buffer.from == "function") o = Buffer.from(r, "base64");
          else if (typeof atob == "function") {
            const i = atob(r);
            o = new Uint8Array(i.length);
            for (let s = 0; s < i.length; s++) o[s] = i.charCodeAt(s);
          } else throw new Error("Cannot decode base64-encoded data URL");
          n = await WebAssembly.instantiate(o, e);
        } else {
          const r = await fetch(t), o = r.headers.get("Content-Type") || "";
          if ("instantiateStreaming" in WebAssembly && o.startsWith("application/wasm")) n = await WebAssembly.instantiateStreaming(r, e);
          else {
            const i = await r.arrayBuffer();
            n = await WebAssembly.instantiate(i, e);
          }
        }
        return n.instance.exports;
      };
      let Y;
      function ev(e) {
        Y = e;
      }
      const tv = typeof TextDecoder > "u" ? (0, module.require)("util").TextDecoder : TextDecoder;
      let cm = new tv("utf-8", {
        ignoreBOM: true,
        fatal: true
      });
      cm.decode();
      let ei = null;
      function _i() {
        return (ei === null || ei.byteLength === 0) && (ei = new Uint8Array(Y.memory.buffer)), ei;
      }
      function Tt(e, t) {
        return e = e >>> 0, cm.decode(_i().subarray(e, e + t));
      }
      const $t = new Array(128).fill(void 0);
      $t.push(void 0, null, true, false);
      let no = $t.length;
      function H(e) {
        no === $t.length && $t.push($t.length + 1);
        const t = no;
        return no = $t[t], $t[t] = e, t;
      }
      function F(e) {
        return $t[e];
      }
      function nv(e) {
        e < 132 || ($t[e] = no, no = e);
      }
      function ys(e) {
        const t = F(e);
        return nv(e), t;
      }
      let et = 0;
      const rv = typeof TextEncoder > "u" ? (0, module.require)("util").TextEncoder : TextEncoder;
      let wi = new rv("utf-8");
      const ov = typeof wi.encodeInto == "function" ? function(e, t) {
        return wi.encodeInto(e, t);
      } : function(e, t) {
        const n = wi.encode(e);
        return t.set(n), {
          read: e.length,
          written: n.length
        };
      };
      function wt(e, t, n) {
        if (n === void 0) {
          const l = wi.encode(e), a = t(l.length, 1) >>> 0;
          return _i().subarray(a, a + l.length).set(l), et = l.length, a;
        }
        let r = e.length, o = t(r, 1) >>> 0;
        const i = _i();
        let s = 0;
        for (; s < r; s++) {
          const l = e.charCodeAt(s);
          if (l > 127) break;
          i[o + s] = l;
        }
        if (s !== r) {
          s !== 0 && (e = e.slice(s)), o = n(o, r, r = s + e.length * 3, 1) >>> 0;
          const l = _i().subarray(o + s, o + r), a = ov(e, l);
          s += a.written;
        }
        return et = s, o;
      }
      function vs(e) {
        return e == null;
      }
      let ti = null;
      function Nt() {
        return (ti === null || ti.byteLength === 0) && (ti = new Int32Array(Y.memory.buffer)), ti;
      }
      function ya(e) {
        const t = typeof e;
        if (t == "number" || t == "boolean" || e == null) return `${e}`;
        if (t == "string") return `"${e}"`;
        if (t == "symbol") {
          const o = e.description;
          return o == null ? "Symbol" : `Symbol(${o})`;
        }
        if (t == "function") {
          const o = e.name;
          return typeof o == "string" && o.length > 0 ? `Function(${o})` : "Function";
        }
        if (Array.isArray(e)) {
          const o = e.length;
          let i = "[";
          o > 0 && (i += ya(e[0]));
          for (let s = 1; s < o; s++) i += ", " + ya(e[s]);
          return i += "]", i;
        }
        const n = /\[object ([^\]]+)\]/.exec(toString.call(e));
        let r;
        if (n.length > 1) r = n[1];
        else return toString.call(e);
        if (r == "Object") try {
          return "Object(" + JSON.stringify(e) + ")";
        } catch {
          return "Object";
        }
        return e instanceof Error ? `${e.name}: ${e.message}
${e.stack}` : r;
      }
      function fm(e, t, n, r) {
        const o = {
          a: e,
          b: t,
          cnt: 1,
          dtor: n
        }, i = (...s) => {
          o.cnt++;
          const l = o.a;
          o.a = 0;
          try {
            return r(l, o.b, ...s);
          } finally {
            --o.cnt === 0 ? Y.__wbindgen_export_2.get(o.dtor)(l, o.b) : o.a = l;
          }
        };
        return i.original = o, i;
      }
      function iv(e, t, n) {
        Y.wasm_bindgen__convert__closures__invoke1_mut__h483e8df57983c0fc(e, t, H(n));
      }
      function sv(e, t, n) {
        Y.wasm_bindgen__convert__closures__invoke1_mut__he75e6abfe046c9ea(e, t, H(n));
      }
      function ue(e, t) {
        try {
          return e.apply(this, t);
        } catch (n) {
          Y.__wbindgen_exn_store(H(n));
        }
      }
      function lv(e, t, n, r) {
        Y.wasm_bindgen__convert__closures__invoke2_mut__h58ef9e5f9bba9436(e, t, H(n), H(r));
      }
      class So {
        static __wrap(t) {
          t = t >>> 0;
          const n = Object.create(So.prototype);
          return n.__wbg_ptr = t, n;
        }
        __destroy_into_raw() {
          const t = this.__wbg_ptr;
          return this.__wbg_ptr = 0, t;
        }
        free() {
          const t = this.__destroy_into_raw();
          Y.__wbg_datafusioncontext_free(t);
        }
        static greet() {
          let t, n;
          try {
            const i = Y.__wbindgen_add_to_stack_pointer(-16);
            Y.datafusioncontext_greet(i);
            var r = Nt()[i / 4 + 0], o = Nt()[i / 4 + 1];
            return t = r, n = o, Tt(r, o);
          } finally {
            Y.__wbindgen_add_to_stack_pointer(16), Y.__wbindgen_free(t, n, 1);
          }
        }
        static new() {
          const t = Y.datafusioncontext_new();
          return So.__wrap(t);
        }
        execute_sql(t) {
          const n = wt(t, Y.__wbindgen_malloc, Y.__wbindgen_realloc), r = et, o = Y.datafusioncontext_execute_sql(this.__wbg_ptr, n, r);
          return ys(o);
        }
        set_s3_config(t, n, r, o, i) {
          const s = wt(t, Y.__wbindgen_malloc, Y.__wbindgen_realloc), l = et, a = wt(n, Y.__wbindgen_malloc, Y.__wbindgen_realloc), u = et, p = wt(r, Y.__wbindgen_malloc, Y.__wbindgen_realloc), d = et, m = wt(o, Y.__wbindgen_malloc, Y.__wbindgen_realloc), h = et, v = wt(i, Y.__wbindgen_malloc, Y.__wbindgen_realloc), _ = et;
          Y.datafusioncontext_set_s3_config(this.__wbg_ptr, s, l, a, u, p, d, m, h, v, _);
        }
      }
      function av(e, t) {
        console.log(Tt(e, t));
      }
      function uv(e, t) {
        const n = Tt(e, t);
        return H(n);
      }
      function cv(e) {
        ys(e);
      }
      function fv() {
        const e = new Error();
        return H(e);
      }
      function dv(e, t) {
        const n = F(t).stack, r = wt(n, Y.__wbindgen_malloc, Y.__wbindgen_realloc), o = et;
        Nt()[e / 4 + 1] = o, Nt()[e / 4 + 0] = r;
      }
      function pv(e, t) {
        let n, r;
        try {
          n = e, r = t, console.error(Tt(e, t));
        } finally {
          Y.__wbindgen_free(n, r, 1);
        }
      }
      function mv(e) {
        const t = ys(e).original;
        return t.cnt-- == 1 ? (t.a = 0, true) : false;
      }
      function gv(e, t) {
        const n = F(t), r = typeof n == "string" ? n : void 0;
        var o = vs(r) ? 0 : wt(r, Y.__wbindgen_malloc, Y.__wbindgen_realloc), i = et;
        Nt()[e / 4 + 1] = i, Nt()[e / 4 + 0] = o;
      }
      function hv(e) {
        const t = fetch(F(e));
        return H(t);
      }
      function yv(e) {
        const t = F(e);
        return H(t);
      }
      function vv() {
        return ue(function(e) {
          const t = F(e).getReader();
          return H(t);
        }, arguments);
      }
      function _v(e) {
        return F(e).done;
      }
      function wv(e) {
        const t = F(e).value;
        return H(t);
      }
      function Sv(e) {
        queueMicrotask(F(e));
      }
      function xv(e) {
        const t = F(e).queueMicrotask;
        return H(t);
      }
      function Ev(e) {
        return typeof F(e) == "function";
      }
      function bv(e, t) {
        const n = F(e).fetch(F(t));
        return H(n);
      }
      function Cv(e) {
        const t = F(e).signal;
        return H(t);
      }
      function kv() {
        return ue(function() {
          const e = new AbortController();
          return H(e);
        }, arguments);
      }
      function Rv(e) {
        F(e).abort();
      }
      function Tv(e) {
        return F(e).now();
      }
      function Nv() {
        return ue(function(e, t, n) {
          const r = new Request(Tt(e, t), F(n));
          return H(r);
        }, arguments);
      }
      function Pv(e) {
        const t = F(e).view;
        return vs(t) ? 0 : H(t);
      }
      function Av() {
        return ue(function(e, t) {
          F(e).respond(t >>> 0);
        }, arguments);
      }
      function Iv() {
        return ue(function() {
          const e = new Headers();
          return H(e);
        }, arguments);
      }
      function Lv() {
        return ue(function(e, t, n, r, o) {
          F(e).append(Tt(t, n), Tt(r, o));
        }, arguments);
      }
      function $v(e) {
        const t = F(e).byobRequest;
        return vs(t) ? 0 : H(t);
      }
      function Ov() {
        return ue(function(e) {
          F(e).close();
        }, arguments);
      }
      function Dv() {
        return ue(function(e) {
          F(e).close();
        }, arguments);
      }
      function Mv() {
        return ue(function(e, t) {
          F(e).enqueue(F(t));
        }, arguments);
      }
      function Fv(e) {
        const t = F(e).read();
        return H(t);
      }
      function jv(e) {
        F(e).releaseLock();
      }
      function zv(e) {
        const t = F(e).cancel();
        return H(t);
      }
      function Bv(e) {
        let t;
        try {
          t = F(e) instanceof Response;
        } catch {
          t = false;
        }
        return t;
      }
      function Uv(e, t) {
        const n = F(t).url, r = wt(n, Y.__wbindgen_malloc, Y.__wbindgen_realloc), o = et;
        Nt()[e / 4 + 1] = o, Nt()[e / 4 + 0] = r;
      }
      function Wv(e) {
        return F(e).status;
      }
      function Vv(e) {
        const t = F(e).headers;
        return H(t);
      }
      function Hv(e) {
        const t = F(e).body;
        return vs(t) ? 0 : H(t);
      }
      function Gv() {
        return ue(function(e) {
          const t = F(e).text();
          return H(t);
        }, arguments);
      }
      function Yv(e) {
        const t = F(e).crypto;
        return H(t);
      }
      function Kv(e) {
        const t = F(e);
        return typeof t == "object" && t !== null;
      }
      function Qv(e) {
        const t = F(e).process;
        return H(t);
      }
      function Xv(e) {
        const t = F(e).versions;
        return H(t);
      }
      function qv(e) {
        const t = F(e).node;
        return H(t);
      }
      function Zv(e) {
        return typeof F(e) == "string";
      }
      function Jv() {
        return ue(function() {
          const e = module.require;
          return H(e);
        }, arguments);
      }
      function e0(e) {
        const t = F(e).msCrypto;
        return H(t);
      }
      function t0() {
        return ue(function(e, t) {
          F(e).randomFillSync(ys(t));
        }, arguments);
      }
      function n0() {
        return ue(function(e, t) {
          F(e).getRandomValues(F(t));
        }, arguments);
      }
      function r0(e, t) {
        const n = new Function(Tt(e, t));
        return H(n);
      }
      function o0(e) {
        const t = F(e).next;
        return H(t);
      }
      function i0() {
        return ue(function(e) {
          const t = F(e).next();
          return H(t);
        }, arguments);
      }
      function s0(e) {
        return F(e).done;
      }
      function l0(e) {
        const t = F(e).value;
        return H(t);
      }
      function a0() {
        return H(Symbol.iterator);
      }
      function u0() {
        return ue(function(e, t) {
          const n = Reflect.get(F(e), F(t));
          return H(n);
        }, arguments);
      }
      function c0() {
        return ue(function(e, t) {
          const n = F(e).call(F(t));
          return H(n);
        }, arguments);
      }
      function f0() {
        const e = new Object();
        return H(e);
      }
      function d0() {
        return ue(function() {
          const e = self.self;
          return H(e);
        }, arguments);
      }
      function p0() {
        return ue(function() {
          const e = window.window;
          return H(e);
        }, arguments);
      }
      function m0() {
        return ue(function() {
          const e = globalThis.globalThis;
          return H(e);
        }, arguments);
      }
      function g0() {
        return ue(function() {
          const e = global.global;
          return H(e);
        }, arguments);
      }
      function h0(e) {
        return F(e) === void 0;
      }
      function y0(e, t) {
        const n = new Error(Tt(e, t));
        return H(n);
      }
      function v0() {
        return ue(function(e, t, n) {
          const r = F(e).call(F(t), F(n));
          return H(r);
        }, arguments);
      }
      function _0(e) {
        return F(e).getTime();
      }
      function w0() {
        return H(/* @__PURE__ */ new Date());
      }
      function S0(e, t) {
        try {
          var n = {
            a: e,
            b: t
          }, r = (i, s) => {
            const l = n.a;
            n.a = 0;
            try {
              return lv(l, n.b, i, s);
            } finally {
              n.a = l;
            }
          };
          const o = new Promise(r);
          return H(o);
        } finally {
          n.a = n.b = 0;
        }
      }
      function x0(e) {
        const t = Promise.resolve(F(e));
        return H(t);
      }
      function E0(e, t) {
        const n = F(e).catch(F(t));
        return H(n);
      }
      function b0(e, t) {
        const n = F(e).then(F(t));
        return H(n);
      }
      function C0(e, t, n) {
        const r = F(e).then(F(t), F(n));
        return H(r);
      }
      function k0(e) {
        const t = F(e).buffer;
        return H(t);
      }
      function R0(e, t, n) {
        const r = new Uint8Array(F(e), t >>> 0, n >>> 0);
        return H(r);
      }
      function T0(e) {
        const t = new Uint8Array(F(e));
        return H(t);
      }
      function N0(e, t, n) {
        F(e).set(F(t), n >>> 0);
      }
      function P0(e) {
        return F(e).length;
      }
      function A0(e) {
        const t = new Uint8Array(e >>> 0);
        return H(t);
      }
      function I0(e) {
        const t = F(e).buffer;
        return H(t);
      }
      function L0(e, t, n) {
        const r = F(e).subarray(t >>> 0, n >>> 0);
        return H(r);
      }
      function $0(e) {
        return F(e).byteLength;
      }
      function O0(e) {
        return F(e).byteOffset;
      }
      function D0() {
        return ue(function(e, t) {
          return Reflect.has(F(e), F(t));
        }, arguments);
      }
      function M0() {
        return ue(function(e, t, n) {
          return Reflect.set(F(e), F(t), F(n));
        }, arguments);
      }
      function F0() {
        return ue(function(e) {
          const t = JSON.stringify(F(e));
          return H(t);
        }, arguments);
      }
      function j0(e, t) {
        const n = ya(F(t)), r = wt(n, Y.__wbindgen_malloc, Y.__wbindgen_realloc), o = et;
        Nt()[e / 4 + 1] = o, Nt()[e / 4 + 0] = r;
      }
      function z0(e, t) {
        throw new Error(Tt(e, t));
      }
      function B0() {
        const e = Y.memory;
        return H(e);
      }
      function U0(e, t, n) {
        const r = fm(e, t, 2209, iv);
        return H(r);
      }
      function W0(e, t, n) {
        const r = fm(e, t, 2217, sv);
        return H(r);
      }
      URL = globalThis.URL;
      const G = await Jy({
        "./datafusion_wasm_bg.js": {
          __wbg_log_4ff97616a5ce89f6: av,
          __wbindgen_string_new: uv,
          __wbindgen_object_drop_ref: cv,
          __wbg_new_abda76e883ba8a5f: fv,
          __wbg_stack_658279fe44541cf6: dv,
          __wbg_error_f851667af71bcfc6: pv,
          __wbindgen_cb_drop: mv,
          __wbindgen_string_get: gv,
          __wbg_fetch_27eb4c0a08a9ca04: hv,
          __wbindgen_object_clone_ref: yv,
          __wbg_getReader_ab94afcb5cb7689a: vv,
          __wbg_done_2ffa852272310e47: _v,
          __wbg_value_9f6eeb1e2aab8d96: wv,
          __wbg_queueMicrotask_118eeb525d584d9a: Sv,
          __wbg_queueMicrotask_26a89c14c53809c0: xv,
          __wbindgen_is_function: Ev,
          __wbg_fetch_06d656a1b748ac0d: bv,
          __wbg_signal_7876560d9d0f914c: Cv,
          __wbg_new_fa36281638875de8: kv,
          __wbg_abort_7792bf3f664d7bb3: Rv,
          __wbg_now_65ff8ec2b863300c: Tv,
          __wbg_newwithstrandinit_9fd2fc855c6327eb: Nv,
          __wbg_view_d7afa0120e493b2d: Pv,
          __wbg_respond_3233ecfa19b9b617: Av,
          __wbg_new_a979e9eedc5e81a3: Iv,
          __wbg_append_047382169b61373d: Lv,
          __wbg_byobRequest_004146c1db53bc14: $v,
          __wbg_close_54a5b70c42a72ee3: Ov,
          __wbg_close_21d8fce01634cc74: Dv,
          __wbg_enqueue_61ebfae3475d5d91: Mv,
          __wbg_read_e8fd432a834b70f7: Fv,
          __wbg_releaseLock_a7d9325c42d31fa3: jv,
          __wbg_cancel_c77410090bc02e06: zv,
          __wbg_instanceof_Response_0d25bb8436a9cefe: Bv,
          __wbg_url_47f8307501523859: Uv,
          __wbg_status_351700a30c61ba61: Wv,
          __wbg_headers_e38c00d713e8888c: Vv,
          __wbg_body_cf88172a13003d46: Hv,
          __wbg_text_10c88c5e55f873c7: Gv,
          __wbg_crypto_d05b68a3572bb8ca: Yv,
          __wbindgen_is_object: Kv,
          __wbg_process_b02b3570280d0366: Qv,
          __wbg_versions_c1cb42213cedf0f5: Xv,
          __wbg_node_43b1089f407e4ec2: qv,
          __wbindgen_is_string: Zv,
          __wbg_require_9a7e0f667ead4995: Jv,
          __wbg_msCrypto_10fc94afee92bd76: e0,
          __wbg_randomFillSync_b70ccbdf4926a99d: t0,
          __wbg_getRandomValues_7e42b4fb8779dc6d: n0,
          __wbg_newnoargs_5859b6d41c6fe9f7: r0,
          __wbg_next_1938cf110c9491d4: o0,
          __wbg_next_267398d0e0761bf9: i0,
          __wbg_done_506b44765ba84b9c: s0,
          __wbg_value_31485d8770eb06ab: l0,
          __wbg_iterator_364187e1ee96b750: a0,
          __wbg_get_5027b32da70f39b1: u0,
          __wbg_call_a79f1973a4f07d5e: c0,
          __wbg_new_87d841e70661f6e9: f0,
          __wbg_self_086b5302bcafb962: d0,
          __wbg_window_132fa5d7546f1de5: p0,
          __wbg_globalThis_e5f801a37ad7d07b: m0,
          __wbg_global_f9a61fce4af6b7c1: g0,
          __wbindgen_is_undefined: h0,
          __wbg_new_3a66822ed076951c: y0,
          __wbg_call_f6a2bc58c19c53c6: v0,
          __wbg_getTime_af7ca51c0bcefa08: _0,
          __wbg_new0_c0e40662db0749ee: w0,
          __wbg_new_1d93771b84541aa5: S0,
          __wbg_resolve_97ecd55ee839391b: x0,
          __wbg_catch_9aeb46e888e3b0d6: E0,
          __wbg_then_7aeb7c5f1536640f: b0,
          __wbg_then_5842e4e97f7beace: C0,
          __wbg_buffer_5d1b598a01b41a42: k0,
          __wbg_newwithbyteoffsetandlength_d695c7957788f922: R0,
          __wbg_new_ace717933ad7117f: T0,
          __wbg_set_74906aa30864df5a: N0,
          __wbg_length_f0764416ba5bb237: P0,
          __wbg_newwithlength_728575f3bba9959b: A0,
          __wbg_buffer_3da2aecfd9814cd8: I0,
          __wbg_subarray_7f7a652672800851: L0,
          __wbg_byteLength_a8d894d93425b2e0: $0,
          __wbg_byteOffset_89d0a5265d5bde53: O0,
          __wbg_has_a2919659b7b645b3: D0,
          __wbg_set_37a50e901587b477: M0,
          __wbg_stringify_daa6661e90c04140: F0,
          __wbindgen_debug_string: j0,
          __wbindgen_throw: z0,
          __wbindgen_memory: B0,
          __wbindgen_closure_wrapper4408: U0,
          __wbindgen_closure_wrapper4444: W0
        }
      }, Zy), V0 = G.memory, H0 = G.__wbg_datafusioncontext_free, G0 = G.datafusioncontext_greet, Y0 = G.datafusioncontext_new, K0 = G.datafusioncontext_execute_sql, Q0 = G.datafusioncontext_set_s3_config, X0 = G.__wbg_intounderlyingsource_free, q0 = G.intounderlyingsource_pull, Z0 = G.intounderlyingsource_cancel, J0 = G.__wbg_intounderlyingsink_free, e_ = G.intounderlyingsink_write, t_ = G.intounderlyingsink_close, n_ = G.intounderlyingsink_abort, r_ = G.__wbg_intounderlyingbytesource_free, o_ = G.intounderlyingbytesource_type, i_ = G.intounderlyingbytesource_autoAllocateChunkSize, s_ = G.intounderlyingbytesource_start, l_ = G.intounderlyingbytesource_pull, a_ = G.intounderlyingbytesource_cancel, u_ = G.rust_zstd_wasm_shim_qsort, c_ = G.rust_zstd_wasm_shim_malloc, f_ = G.rust_zstd_wasm_shim_memcmp, d_ = G.rust_zstd_wasm_shim_calloc, p_ = G.rust_zstd_wasm_shim_free, m_ = G.rust_zstd_wasm_shim_memcpy, g_ = G.rust_zstd_wasm_shim_memmove, h_ = G.rust_zstd_wasm_shim_memset, y_ = G.BrotliDecoderCreateInstance, v_ = G.BrotliDecoderSetParameter, __ = G.BrotliDecoderDecompressPrealloc, w_ = G.BrotliDecoderDecompressWithReturnInfo, S_ = G.BrotliDecoderDecompress, x_ = G.BrotliDecoderDecompressStream, E_ = G.BrotliDecoderDecompressStreaming, b_ = G.BrotliDecoderMallocU8, C_ = G.BrotliDecoderFreeU8, k_ = G.BrotliDecoderMallocUsize, R_ = G.BrotliDecoderFreeUsize, T_ = G.BrotliDecoderDestroyInstance, N_ = G.BrotliDecoderHasMoreOutput, P_ = G.BrotliDecoderTakeOutput, A_ = G.BrotliDecoderIsUsed, I_ = G.BrotliDecoderIsFinished, L_ = G.BrotliDecoderGetErrorCode, $_ = G.BrotliDecoderGetErrorString, O_ = G.BrotliDecoderErrorString, D_ = G.BrotliDecoderVersion, M_ = G.__wbindgen_malloc, F_ = G.__wbindgen_realloc, j_ = G.__wbindgen_export_2, z_ = G.wasm_bindgen__convert__closures__invoke1_mut__h483e8df57983c0fc, B_ = G.wasm_bindgen__convert__closures__invoke1_mut__he75e6abfe046c9ea, U_ = G.__wbindgen_add_to_stack_pointer, W_ = G.__wbindgen_free, V_ = G.__wbindgen_exn_store, H_ = G.wasm_bindgen__convert__closures__invoke2_mut__h58ef9e5f9bba9436, G_ = Object.freeze(Object.defineProperty({
        __proto__: null,
        BrotliDecoderCreateInstance: y_,
        BrotliDecoderDecompress: S_,
        BrotliDecoderDecompressPrealloc: __,
        BrotliDecoderDecompressStream: x_,
        BrotliDecoderDecompressStreaming: E_,
        BrotliDecoderDecompressWithReturnInfo: w_,
        BrotliDecoderDestroyInstance: T_,
        BrotliDecoderErrorString: O_,
        BrotliDecoderFreeU8: C_,
        BrotliDecoderFreeUsize: R_,
        BrotliDecoderGetErrorCode: L_,
        BrotliDecoderGetErrorString: $_,
        BrotliDecoderHasMoreOutput: N_,
        BrotliDecoderIsFinished: I_,
        BrotliDecoderIsUsed: A_,
        BrotliDecoderMallocU8: b_,
        BrotliDecoderMallocUsize: k_,
        BrotliDecoderSetParameter: v_,
        BrotliDecoderTakeOutput: P_,
        BrotliDecoderVersion: D_,
        __wbg_datafusioncontext_free: H0,
        __wbg_intounderlyingbytesource_free: r_,
        __wbg_intounderlyingsink_free: J0,
        __wbg_intounderlyingsource_free: X0,
        __wbindgen_add_to_stack_pointer: U_,
        __wbindgen_exn_store: V_,
        __wbindgen_export_2: j_,
        __wbindgen_free: W_,
        __wbindgen_malloc: M_,
        __wbindgen_realloc: F_,
        datafusioncontext_execute_sql: K0,
        datafusioncontext_greet: G0,
        datafusioncontext_new: Y0,
        datafusioncontext_set_s3_config: Q0,
        intounderlyingbytesource_autoAllocateChunkSize: i_,
        intounderlyingbytesource_cancel: a_,
        intounderlyingbytesource_pull: l_,
        intounderlyingbytesource_start: s_,
        intounderlyingbytesource_type: o_,
        intounderlyingsink_abort: n_,
        intounderlyingsink_close: t_,
        intounderlyingsink_write: e_,
        intounderlyingsource_cancel: Z0,
        intounderlyingsource_pull: q0,
        memory: V0,
        rust_zstd_wasm_shim_calloc: d_,
        rust_zstd_wasm_shim_free: p_,
        rust_zstd_wasm_shim_malloc: c_,
        rust_zstd_wasm_shim_memcmp: f_,
        rust_zstd_wasm_shim_memcpy: m_,
        rust_zstd_wasm_shim_memmove: g_,
        rust_zstd_wasm_shim_memset: h_,
        rust_zstd_wasm_shim_qsort: u_,
        wasm_bindgen__convert__closures__invoke1_mut__h483e8df57983c0fc: z_,
        wasm_bindgen__convert__closures__invoke1_mut__he75e6abfe046c9ea: B_,
        wasm_bindgen__convert__closures__invoke2_mut__h58ef9e5f9bba9436: H_
      }, Symbol.toStringTag, {
        value: "Module"
      }));
      ev(G_);
      function bt(e) {
        return Object.keys(e);
      }
      function ol(e) {
        return e && typeof e == "object" && !Array.isArray(e);
      }
      function Eu(e, t) {
        const n = {
          ...e
        }, r = t;
        return ol(e) && ol(t) && Object.keys(t).forEach((o) => {
          ol(r[o]) && o in e ? n[o] = Eu(n[o], r[o]) : n[o] = r[o];
        }), n;
      }
      function Y_(e) {
        return e.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`);
      }
      function K_(e) {
        var _a2;
        return typeof e != "string" || !e.includes("var(--mantine-scale)") ? e : (_a2 = e.match(/^calc\((.*?)\)$/)) == null ? void 0 : _a2[1].split("*")[0].trim();
      }
      function Q_(e) {
        const t = K_(e);
        return typeof t == "number" ? t : typeof t == "string" ? t.includes("calc") || t.includes("var") ? t : t.includes("px") ? Number(t.replace("px", "")) : t.includes("rem") ? Number(t.replace("rem", "")) * 16 : t.includes("em") ? Number(t.replace("em", "")) * 16 : Number(t) : NaN;
      }
      function il(e) {
        return e === "0rem" ? "0rem" : `calc(${e} * var(--mantine-scale))`;
      }
      function dm(e, { shouldScale: t = false } = {}) {
        function n(r) {
          if (r === 0 || r === "0") return `0${e}`;
          if (typeof r == "number") {
            const o = `${r / 16}${e}`;
            return t ? il(o) : o;
          }
          if (typeof r == "string") {
            if (r === "" || r.startsWith("calc(") || r.startsWith("clamp(") || r.includes("rgba(")) return r;
            if (r.includes(",")) return r.split(",").map((i) => n(i)).join(",");
            if (r.includes(" ")) return r.split(" ").map((i) => n(i)).join(" ");
            if (r.includes(e)) return t ? il(r) : r;
            const o = r.replace("px", "");
            if (!Number.isNaN(Number(o))) {
              const i = `${Number(o) / 16}${e}`;
              return t ? il(i) : i;
            }
          }
          return r;
        }
        return n;
      }
      const I = dm("rem", {
        shouldScale: true
      }), ff = dm("em");
      function bu(e) {
        return Object.keys(e).reduce((t, n) => (e[n] !== void 0 && (t[n] = e[n]), t), {});
      }
      function pm(e) {
        if (typeof e == "number") return true;
        if (typeof e == "string") {
          if (e.startsWith("calc(") || e.startsWith("var(") || e.includes(" ") && e.trim() !== "") return true;
          const t = /^[+-]?[0-9]+(\.[0-9]+)?(px|em|rem|ex|ch|lh|rlh|vw|vh|vmin|vmax|vb|vi|svw|svh|lvw|lvh|dvw|dvh|cm|mm|in|pt|pc|q|cqw|cqh|cqi|cqb|cqmin|cqmax|%)?$/;
          return e.trim().split(/\s+/).every((r) => t.test(r));
        }
        return false;
      }
      function mm(e) {
        return Array.isArray(e) || e === null ? false : typeof e == "object" ? e.type !== b.Fragment : false;
      }
      function gm(e = null) {
        const t = b.createContext(e);
        return [
          ({ children: o, value: i }) => T.jsx(t.Provider, {
            value: i,
            children: o
          }),
          () => b.useContext(t)
        ];
      }
      const X_ = {
        app: 100,
        modal: 200,
        popover: 300,
        overlay: 400,
        max: 9999
      };
      function hm(e) {
        return X_[e];
      }
      function Le(e, t = "size", n = true) {
        if (e !== void 0) return pm(e) ? n ? I(e) : e : `var(--${t}-${e})`;
      }
      function vn(e) {
        return e === void 0 ? "var(--mantine-radius-default)" : Le(e, "mantine-radius");
      }
      function rt(e) {
        return Le(e, "mantine-font-size");
      }
      function q_(e = "mantine-") {
        return `${e}${Math.random().toString(36).slice(2, 11)}`;
      }
      function Z_(e, t) {
        try {
          return e.addEventListener("change", t), () => e.removeEventListener("change", t);
        } catch {
          return e.addListener(t), () => e.removeListener(t);
        }
      }
      function J_(e, t) {
        return typeof window < "u" && "matchMedia" in window ? window.matchMedia(e).matches : false;
      }
      function e1(e, t, { getInitialValueInEffect: n } = {
        getInitialValueInEffect: true
      }) {
        const [r, o] = b.useState(n ? t : J_(e)), i = b.useRef(null);
        return b.useEffect(() => {
          if ("matchMedia" in window) return i.current = window.matchMedia(e), o(i.current.matches), Z_(i.current, (s) => o(s.matches));
        }, [
          e
        ]), r;
      }
      const _s = typeof document < "u" ? b.useLayoutEffect : b.useEffect;
      function Yi(e, t) {
        const n = b.useRef(false);
        b.useEffect(() => () => {
          n.current = false;
        }, []), b.useEffect(() => {
          if (n.current) return e();
          n.current = true;
        }, t);
      }
      const t1 = cr.useId || (() => {
      });
      function n1() {
        const e = t1();
        return e ? `mantine-${e.replace(/:/g, "")}` : "";
      }
      function Cu(e) {
        const t = n1(), [n, r] = b.useState(t);
        return _s(() => {
          r(q_());
        }, []), typeof e == "string" ? e : typeof window > "u" ? t : n;
      }
      function va(e, t) {
        if (typeof e == "function") return e(t);
        typeof e == "object" && e !== null && "current" in e && (e.current = t);
      }
      function r1(...e) {
        const t = /* @__PURE__ */ new Map();
        return (n) => {
          if (e.forEach((r) => {
            const o = va(r, n);
            o && t.set(r, o);
          }), t.size > 0) return () => {
            e.forEach((r) => {
              const o = t.get(r);
              o ? o() : va(r, null);
            }), t.clear();
          };
        };
      }
      function ym(...e) {
        return b.useCallback(r1(...e), e);
      }
      function o1({ value: e, defaultValue: t, finalValue: n, onChange: r = () => {
      } }) {
        const [o, i] = b.useState(t !== void 0 ? t : n), s = (l, ...a) => {
          i(l), r == null ? void 0 : r(l, ...a);
        };
        return e !== void 0 ? [
          e,
          r,
          true
        ] : [
          o,
          s,
          false
        ];
      }
      function i1(e, t) {
        return e1("(prefers-reduced-motion: reduce)", e, t);
      }
      function vm(e) {
        var _a2;
        const t = cr.version;
        return typeof cr.version != "string" || t.startsWith("18.") ? e == null ? void 0 : e.ref : (_a2 = e == null ? void 0 : e.props) == null ? void 0 : _a2.ref;
      }
      function _m(e) {
        var t, n, r = "";
        if (typeof e == "string" || typeof e == "number") r += e;
        else if (typeof e == "object") if (Array.isArray(e)) {
          var o = e.length;
          for (t = 0; t < o; t++) e[t] && (n = _m(e[t])) && (r && (r += " "), r += n);
        } else for (n in e) e[n] && (r && (r += " "), r += n);
        return r;
      }
      function Kt() {
        for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = _m(e)) && (r && (r += " "), r += t);
        return r;
      }
      const s1 = {};
      function l1(e) {
        const t = {};
        return e.forEach((n) => {
          Object.entries(n).forEach(([r, o]) => {
            t[r] ? t[r] = Kt(t[r], o) : t[r] = o;
          });
        }), t;
      }
      function ws({ theme: e, classNames: t, props: n, stylesCtx: r }) {
        const i = (Array.isArray(t) ? t : [
          t
        ]).map((s) => typeof s == "function" ? s(e, n, r) : s || s1);
        return l1(i);
      }
      function Ki({ theme: e, styles: t, props: n, stylesCtx: r }) {
        return (Array.isArray(t) ? t : [
          t
        ]).reduce((i, s) => typeof s == "function" ? {
          ...i,
          ...s(e, n, r)
        } : {
          ...i,
          ...s
        }, {});
      }
      const wm = b.createContext(null);
      function _n() {
        const e = b.useContext(wm);
        if (!e) throw new Error("[@mantine/core] MantineProvider was not found in tree");
        return e;
      }
      function a1() {
        return _n().cssVariablesResolver;
      }
      function u1() {
        return _n().classNamesPrefix;
      }
      function ku() {
        return _n().getStyleNonce;
      }
      function c1() {
        return _n().withStaticClasses;
      }
      function f1() {
        return _n().headless;
      }
      function d1() {
        var _a2;
        return (_a2 = _n().stylesTransform) == null ? void 0 : _a2.sx;
      }
      function p1() {
        var _a2;
        return (_a2 = _n().stylesTransform) == null ? void 0 : _a2.styles;
      }
      function Sm() {
        return _n().env || "default";
      }
      function m1(e) {
        return /^#?([0-9A-F]{3}){1,2}([0-9A-F]{2})?$/i.test(e);
      }
      function g1(e) {
        let t = e.replace("#", "");
        if (t.length === 3) {
          const s = t.split("");
          t = [
            s[0],
            s[0],
            s[1],
            s[1],
            s[2],
            s[2]
          ].join("");
        }
        if (t.length === 8) {
          const s = parseInt(t.slice(6, 8), 16) / 255;
          return {
            r: parseInt(t.slice(0, 2), 16),
            g: parseInt(t.slice(2, 4), 16),
            b: parseInt(t.slice(4, 6), 16),
            a: s
          };
        }
        const n = parseInt(t, 16), r = n >> 16 & 255, o = n >> 8 & 255, i = n & 255;
        return {
          r,
          g: o,
          b: i,
          a: 1
        };
      }
      function h1(e) {
        const [t, n, r, o] = e.replace(/[^0-9,./]/g, "").split(/[/,]/).map(Number);
        return {
          r: t,
          g: n,
          b: r,
          a: o || 1
        };
      }
      function y1(e) {
        const t = /^hsla?\(\s*(\d+)\s*,\s*(\d+%)\s*,\s*(\d+%)\s*(,\s*(0?\.\d+|\d+(\.\d+)?))?\s*\)$/i, n = e.match(t);
        if (!n) return {
          r: 0,
          g: 0,
          b: 0,
          a: 1
        };
        const r = parseInt(n[1], 10), o = parseInt(n[2], 10) / 100, i = parseInt(n[3], 10) / 100, s = n[5] ? parseFloat(n[5]) : void 0, l = (1 - Math.abs(2 * i - 1)) * o, a = r / 60, u = l * (1 - Math.abs(a % 2 - 1)), p = i - l / 2;
        let d, m, h;
        return a >= 0 && a < 1 ? (d = l, m = u, h = 0) : a >= 1 && a < 2 ? (d = u, m = l, h = 0) : a >= 2 && a < 3 ? (d = 0, m = l, h = u) : a >= 3 && a < 4 ? (d = 0, m = u, h = l) : a >= 4 && a < 5 ? (d = u, m = 0, h = l) : (d = l, m = 0, h = u), {
          r: Math.round((d + p) * 255),
          g: Math.round((m + p) * 255),
          b: Math.round((h + p) * 255),
          a: s || 1
        };
      }
      function Ru(e) {
        return m1(e) ? g1(e) : e.startsWith("rgb") ? h1(e) : e.startsWith("hsl") ? y1(e) : {
          r: 0,
          g: 0,
          b: 0,
          a: 1
        };
      }
      function ni(e, t) {
        if (e.startsWith("var(")) return `color-mix(in srgb, ${e}, black ${t * 100}%)`;
        const { r: n, g: r, b: o, a: i } = Ru(e), s = 1 - t, l = (a) => Math.round(a * s);
        return `rgba(${l(n)}, ${l(r)}, ${l(o)}, ${i})`;
      }
      function xo(e, t) {
        return typeof e.primaryShade == "number" ? e.primaryShade : t === "dark" ? e.primaryShade.dark : e.primaryShade.light;
      }
      function sl(e) {
        return e <= 0.03928 ? e / 12.92 : ((e + 0.055) / 1.055) ** 2.4;
      }
      function v1(e) {
        const t = e.match(/oklch\((.*?)%\s/);
        return t ? parseFloat(t[1]) : null;
      }
      function _1(e) {
        if (e.startsWith("oklch(")) return (v1(e) || 0) / 100;
        const { r: t, g: n, b: r } = Ru(e), o = t / 255, i = n / 255, s = r / 255, l = sl(o), a = sl(i), u = sl(s);
        return 0.2126 * l + 0.7152 * a + 0.0722 * u;
      }
      function Fr(e, t = 0.179) {
        return e.startsWith("var(") ? false : _1(e) > t;
      }
      function Po({ color: e, theme: t, colorScheme: n }) {
        if (typeof e != "string") throw new Error(`[@mantine/core] Failed to parse color. Expected color to be a string, instead got ${typeof e}`);
        if (e === "bright") return {
          color: e,
          value: n === "dark" ? t.white : t.black,
          shade: void 0,
          isThemeColor: false,
          isLight: Fr(n === "dark" ? t.white : t.black, t.luminanceThreshold),
          variable: "--mantine-color-bright"
        };
        if (e === "dimmed") return {
          color: e,
          value: n === "dark" ? t.colors.dark[2] : t.colors.gray[7],
          shade: void 0,
          isThemeColor: false,
          isLight: Fr(n === "dark" ? t.colors.dark[2] : t.colors.gray[6], t.luminanceThreshold),
          variable: "--mantine-color-dimmed"
        };
        if (e === "white" || e === "black") return {
          color: e,
          value: e === "white" ? t.white : t.black,
          shade: void 0,
          isThemeColor: false,
          isLight: Fr(e === "white" ? t.white : t.black, t.luminanceThreshold),
          variable: `--mantine-color-${e}`
        };
        const [r, o] = e.split("."), i = o ? Number(o) : void 0, s = r in t.colors;
        if (s) {
          const l = i !== void 0 ? t.colors[r][i] : t.colors[r][xo(t, n || "light")];
          return {
            color: r,
            value: l,
            shade: i,
            isThemeColor: s,
            isLight: Fr(l, t.luminanceThreshold),
            variable: o ? `--mantine-color-${r}-${i}` : `--mantine-color-${r}-filled`
          };
        }
        return {
          color: e,
          value: e,
          isThemeColor: s,
          isLight: Fr(e, t.luminanceThreshold),
          shade: i,
          variable: void 0
        };
      }
      function Eo(e, t) {
        const n = Po({
          color: e || t.primaryColor,
          theme: t
        });
        return n.variable ? `var(${n.variable})` : e;
      }
      function df(e, t) {
        const n = {
          from: (e == null ? void 0 : e.from) || t.defaultGradient.from,
          to: (e == null ? void 0 : e.to) || t.defaultGradient.to,
          deg: (e == null ? void 0 : e.deg) ?? t.defaultGradient.deg ?? 0
        }, r = Eo(n.from, t), o = Eo(n.to, t);
        return `linear-gradient(${n.deg}deg, ${r} 0%, ${o} 100%)`;
      }
      function At(e, t) {
        if (typeof e != "string" || t > 1 || t < 0) return "rgba(0, 0, 0, 1)";
        if (e.startsWith("var(")) {
          const i = (1 - t) * 100;
          return `color-mix(in srgb, ${e}, transparent ${i}%)`;
        }
        if (e.startsWith("oklch")) return e.includes("/") ? e.replace(/\/\s*[\d.]+\s*\)/, `/ ${t})`) : e.replace(")", ` / ${t})`);
        const { r: n, g: r, b: o } = Ru(e);
        return `rgba(${n}, ${r}, ${o}, ${t})`;
      }
      const zn = At, w1 = ({ color: e, theme: t, variant: n, gradient: r, autoContrast: o }) => {
        const i = Po({
          color: e,
          theme: t
        }), s = typeof o == "boolean" ? o : t.autoContrast;
        if (n === "filled") {
          const l = s && i.isLight ? "var(--mantine-color-black)" : "var(--mantine-color-white)";
          return i.isThemeColor ? i.shade === void 0 ? {
            background: `var(--mantine-color-${e}-filled)`,
            hover: `var(--mantine-color-${e}-filled-hover)`,
            color: l,
            border: `${I(1)} solid transparent`
          } : {
            background: `var(--mantine-color-${i.color}-${i.shade})`,
            hover: `var(--mantine-color-${i.color}-${i.shade === 9 ? 8 : i.shade + 1})`,
            color: l,
            border: `${I(1)} solid transparent`
          } : {
            background: e,
            hover: ni(e, 0.1),
            color: l,
            border: `${I(1)} solid transparent`
          };
        }
        if (n === "light") {
          if (i.isThemeColor) {
            if (i.shade === void 0) return {
              background: `var(--mantine-color-${e}-light)`,
              hover: `var(--mantine-color-${e}-light-hover)`,
              color: `var(--mantine-color-${e}-light-color)`,
              border: `${I(1)} solid transparent`
            };
            const l = t.colors[i.color][i.shade];
            return {
              background: At(l, 0.1),
              hover: At(l, 0.12),
              color: `var(--mantine-color-${i.color}-${Math.min(i.shade, 6)})`,
              border: `${I(1)} solid transparent`
            };
          }
          return {
            background: At(e, 0.1),
            hover: At(e, 0.12),
            color: e,
            border: `${I(1)} solid transparent`
          };
        }
        if (n === "outline") return i.isThemeColor ? i.shade === void 0 ? {
          background: "transparent",
          hover: `var(--mantine-color-${e}-outline-hover)`,
          color: `var(--mantine-color-${e}-outline)`,
          border: `${I(1)} solid var(--mantine-color-${e}-outline)`
        } : {
          background: "transparent",
          hover: At(t.colors[i.color][i.shade], 0.05),
          color: `var(--mantine-color-${i.color}-${i.shade})`,
          border: `${I(1)} solid var(--mantine-color-${i.color}-${i.shade})`
        } : {
          background: "transparent",
          hover: At(e, 0.05),
          color: e,
          border: `${I(1)} solid ${e}`
        };
        if (n === "subtle") {
          if (i.isThemeColor) {
            if (i.shade === void 0) return {
              background: "transparent",
              hover: `var(--mantine-color-${e}-light-hover)`,
              color: `var(--mantine-color-${e}-light-color)`,
              border: `${I(1)} solid transparent`
            };
            const l = t.colors[i.color][i.shade];
            return {
              background: "transparent",
              hover: At(l, 0.12),
              color: `var(--mantine-color-${i.color}-${Math.min(i.shade, 6)})`,
              border: `${I(1)} solid transparent`
            };
          }
          return {
            background: "transparent",
            hover: At(e, 0.12),
            color: e,
            border: `${I(1)} solid transparent`
          };
        }
        return n === "transparent" ? i.isThemeColor ? i.shade === void 0 ? {
          background: "transparent",
          hover: "transparent",
          color: `var(--mantine-color-${e}-light-color)`,
          border: `${I(1)} solid transparent`
        } : {
          background: "transparent",
          hover: "transparent",
          color: `var(--mantine-color-${i.color}-${Math.min(i.shade, 6)})`,
          border: `${I(1)} solid transparent`
        } : {
          background: "transparent",
          hover: "transparent",
          color: e,
          border: `${I(1)} solid transparent`
        } : n === "white" ? i.isThemeColor ? i.shade === void 0 ? {
          background: "var(--mantine-color-white)",
          hover: ni(t.white, 0.01),
          color: `var(--mantine-color-${e}-filled)`,
          border: `${I(1)} solid transparent`
        } : {
          background: "var(--mantine-color-white)",
          hover: ni(t.white, 0.01),
          color: `var(--mantine-color-${i.color}-${i.shade})`,
          border: `${I(1)} solid transparent`
        } : {
          background: "var(--mantine-color-white)",
          hover: ni(t.white, 0.01),
          color: e,
          border: `${I(1)} solid transparent`
        } : n === "gradient" ? {
          background: df(r, t),
          hover: df(r, t),
          color: "var(--mantine-color-white)",
          border: "none"
        } : n === "default" ? {
          background: "var(--mantine-color-default)",
          hover: "var(--mantine-color-default-hover)",
          color: "var(--mantine-color-default-color)",
          border: `${I(1)} solid var(--mantine-color-default-border)`
        } : {};
      }, S1 = {
        dark: [
          "#C9C9C9",
          "#b8b8b8",
          "#828282",
          "#696969",
          "#424242",
          "#3b3b3b",
          "#2e2e2e",
          "#242424",
          "#1f1f1f",
          "#141414"
        ],
        gray: [
          "#f8f9fa",
          "#f1f3f5",
          "#e9ecef",
          "#dee2e6",
          "#ced4da",
          "#adb5bd",
          "#868e96",
          "#495057",
          "#343a40",
          "#212529"
        ],
        red: [
          "#fff5f5",
          "#ffe3e3",
          "#ffc9c9",
          "#ffa8a8",
          "#ff8787",
          "#ff6b6b",
          "#fa5252",
          "#f03e3e",
          "#e03131",
          "#c92a2a"
        ],
        pink: [
          "#fff0f6",
          "#ffdeeb",
          "#fcc2d7",
          "#faa2c1",
          "#f783ac",
          "#f06595",
          "#e64980",
          "#d6336c",
          "#c2255c",
          "#a61e4d"
        ],
        grape: [
          "#f8f0fc",
          "#f3d9fa",
          "#eebefa",
          "#e599f7",
          "#da77f2",
          "#cc5de8",
          "#be4bdb",
          "#ae3ec9",
          "#9c36b5",
          "#862e9c"
        ],
        violet: [
          "#f3f0ff",
          "#e5dbff",
          "#d0bfff",
          "#b197fc",
          "#9775fa",
          "#845ef7",
          "#7950f2",
          "#7048e8",
          "#6741d9",
          "#5f3dc4"
        ],
        indigo: [
          "#edf2ff",
          "#dbe4ff",
          "#bac8ff",
          "#91a7ff",
          "#748ffc",
          "#5c7cfa",
          "#4c6ef5",
          "#4263eb",
          "#3b5bdb",
          "#364fc7"
        ],
        blue: [
          "#e7f5ff",
          "#d0ebff",
          "#a5d8ff",
          "#74c0fc",
          "#4dabf7",
          "#339af0",
          "#228be6",
          "#1c7ed6",
          "#1971c2",
          "#1864ab"
        ],
        cyan: [
          "#e3fafc",
          "#c5f6fa",
          "#99e9f2",
          "#66d9e8",
          "#3bc9db",
          "#22b8cf",
          "#15aabf",
          "#1098ad",
          "#0c8599",
          "#0b7285"
        ],
        teal: [
          "#e6fcf5",
          "#c3fae8",
          "#96f2d7",
          "#63e6be",
          "#38d9a9",
          "#20c997",
          "#12b886",
          "#0ca678",
          "#099268",
          "#087f5b"
        ],
        green: [
          "#ebfbee",
          "#d3f9d8",
          "#b2f2bb",
          "#8ce99a",
          "#69db7c",
          "#51cf66",
          "#40c057",
          "#37b24d",
          "#2f9e44",
          "#2b8a3e"
        ],
        lime: [
          "#f4fce3",
          "#e9fac8",
          "#d8f5a2",
          "#c0eb75",
          "#a9e34b",
          "#94d82d",
          "#82c91e",
          "#74b816",
          "#66a80f",
          "#5c940d"
        ],
        yellow: [
          "#fff9db",
          "#fff3bf",
          "#ffec99",
          "#ffe066",
          "#ffd43b",
          "#fcc419",
          "#fab005",
          "#f59f00",
          "#f08c00",
          "#e67700"
        ],
        orange: [
          "#fff4e6",
          "#ffe8cc",
          "#ffd8a8",
          "#ffc078",
          "#ffa94d",
          "#ff922b",
          "#fd7e14",
          "#f76707",
          "#e8590c",
          "#d9480f"
        ]
      }, pf = "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji", Tu = {
        scale: 1,
        fontSmoothing: true,
        focusRing: "auto",
        white: "#fff",
        black: "#000",
        colors: S1,
        primaryShade: {
          light: 6,
          dark: 8
        },
        primaryColor: "blue",
        variantColorResolver: w1,
        autoContrast: false,
        luminanceThreshold: 0.3,
        fontFamily: pf,
        fontFamilyMonospace: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
        respectReducedMotion: false,
        cursorType: "default",
        defaultGradient: {
          from: "blue",
          to: "cyan",
          deg: 45
        },
        defaultRadius: "sm",
        activeClassName: "mantine-active",
        focusClassName: "",
        headings: {
          fontFamily: pf,
          fontWeight: "700",
          textWrap: "wrap",
          sizes: {
            h1: {
              fontSize: I(34),
              lineHeight: "1.3"
            },
            h2: {
              fontSize: I(26),
              lineHeight: "1.35"
            },
            h3: {
              fontSize: I(22),
              lineHeight: "1.4"
            },
            h4: {
              fontSize: I(18),
              lineHeight: "1.45"
            },
            h5: {
              fontSize: I(16),
              lineHeight: "1.5"
            },
            h6: {
              fontSize: I(14),
              lineHeight: "1.5"
            }
          }
        },
        fontSizes: {
          xs: I(12),
          sm: I(14),
          md: I(16),
          lg: I(18),
          xl: I(20)
        },
        lineHeights: {
          xs: "1.4",
          sm: "1.45",
          md: "1.55",
          lg: "1.6",
          xl: "1.65"
        },
        radius: {
          xs: I(2),
          sm: I(4),
          md: I(8),
          lg: I(16),
          xl: I(32)
        },
        spacing: {
          xs: I(10),
          sm: I(12),
          md: I(16),
          lg: I(20),
          xl: I(32)
        },
        breakpoints: {
          xs: "36em",
          sm: "48em",
          md: "62em",
          lg: "75em",
          xl: "88em"
        },
        shadows: {
          xs: `0 ${I(1)} ${I(3)} rgba(0, 0, 0, 0.05), 0 ${I(1)} ${I(2)} rgba(0, 0, 0, 0.1)`,
          sm: `0 ${I(1)} ${I(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${I(10)} ${I(15)} ${I(-5)}, rgba(0, 0, 0, 0.04) 0 ${I(7)} ${I(7)} ${I(-5)}`,
          md: `0 ${I(1)} ${I(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${I(20)} ${I(25)} ${I(-5)}, rgba(0, 0, 0, 0.04) 0 ${I(10)} ${I(10)} ${I(-5)}`,
          lg: `0 ${I(1)} ${I(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${I(28)} ${I(23)} ${I(-7)}, rgba(0, 0, 0, 0.04) 0 ${I(12)} ${I(12)} ${I(-7)}`,
          xl: `0 ${I(1)} ${I(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${I(36)} ${I(28)} ${I(-7)}, rgba(0, 0, 0, 0.04) 0 ${I(17)} ${I(17)} ${I(-7)}`
        },
        other: {},
        components: {}
      };
      function mf(e) {
        return e === "auto" || e === "dark" || e === "light";
      }
      function x1({ key: e = "mantine-color-scheme-value" } = {}) {
        let t;
        return {
          get: (n) => {
            if (typeof window > "u") return n;
            try {
              const r = window.localStorage.getItem(e);
              return mf(r) ? r : n;
            } catch {
              return n;
            }
          },
          set: (n) => {
            try {
              window.localStorage.setItem(e, n);
            } catch (r) {
              console.warn("[@mantine/core] Local storage color scheme manager was unable to save color scheme.", r);
            }
          },
          subscribe: (n) => {
            t = (r) => {
              r.storageArea === window.localStorage && r.key === e && mf(r.newValue) && n(r.newValue);
            }, window.addEventListener("storage", t);
          },
          unsubscribe: () => {
            window.removeEventListener("storage", t);
          },
          clear: () => {
            window.localStorage.removeItem(e);
          }
        };
      }
      const E1 = "[@mantine/core] MantineProvider: Invalid theme.primaryColor, it accepts only key of theme.colors, learn more \u2013 https://mantine.dev/theming/colors/#primary-color", gf = "[@mantine/core] MantineProvider: Invalid theme.primaryShade, it accepts only 0-9 integers or an object { light: 0-9, dark: 0-9 }";
      function ll(e) {
        return e < 0 || e > 9 ? false : parseInt(e.toString(), 10) === e;
      }
      function hf(e) {
        if (!(e.primaryColor in e.colors)) throw new Error(E1);
        if (typeof e.primaryShade == "object" && (!ll(e.primaryShade.dark) || !ll(e.primaryShade.light))) throw new Error(gf);
        if (typeof e.primaryShade == "number" && !ll(e.primaryShade)) throw new Error(gf);
      }
      function b1(e, t) {
        var _a2;
        if (!t) return hf(e), e;
        const n = Eu(e, t);
        return t.fontFamily && !((_a2 = t.headings) == null ? void 0 : _a2.fontFamily) && (n.headings.fontFamily = t.fontFamily), hf(n), n;
      }
      const Nu = b.createContext(null), C1 = () => b.useContext(Nu) || Tu;
      function Qt() {
        const e = b.useContext(Nu);
        if (!e) throw new Error("@mantine/core: MantineProvider was not found in component tree, make sure you have it in your app");
        return e;
      }
      function xm({ theme: e, children: t, inherit: n = true }) {
        const r = C1(), o = b.useMemo(() => b1(n ? r : Tu, e), [
          e,
          r,
          n
        ]);
        return T.jsx(Nu.Provider, {
          value: o,
          children: t
        });
      }
      xm.displayName = "@mantine/core/MantineThemeProvider";
      function k1() {
        const e = Qt(), t = ku(), n = bt(e.breakpoints).reduce((r, o) => {
          const i = e.breakpoints[o].includes("px"), s = Q_(e.breakpoints[o]), l = i ? `${s - 0.1}px` : ff(s - 0.1), a = i ? `${s}px` : ff(s);
          return `${r}@media (max-width: ${l}) {.mantine-visible-from-${o} {display: none !important;}}@media (min-width: ${a}) {.mantine-hidden-from-${o} {display: none !important;}}`;
        }, "");
        return T.jsx("style", {
          "data-mantine-styles": "classes",
          nonce: t == null ? void 0 : t(),
          dangerouslySetInnerHTML: {
            __html: n
          }
        });
      }
      function al(e) {
        return Object.entries(e).map(([t, n]) => `${t}: ${n};`).join("");
      }
      function jr(e, t) {
        return (Array.isArray(e) ? e : [
          e
        ]).reduce((r, o) => `${o}{${r}}`, t);
      }
      function R1(e, t) {
        const n = al(e.variables), r = n ? jr(t, n) : "", o = al(e.dark), i = al(e.light), s = o ? jr(t === ":host" ? `${t}([data-mantine-color-scheme="dark"])` : `${t}[data-mantine-color-scheme="dark"]`, o) : "", l = i ? jr(t === ":host" ? `${t}([data-mantine-color-scheme="light"])` : `${t}[data-mantine-color-scheme="light"]`, i) : "";
        return `${r}${s}${l}`;
      }
      function T1({ color: e, theme: t, autoContrast: n }) {
        return t.autoContrast && Po({
          color: e || t.primaryColor,
          theme: t
        }).isLight ? "var(--mantine-color-black)" : "var(--mantine-color-white)";
      }
      function yf(e, t) {
        return T1({
          color: e.colors[e.primaryColor][xo(e, t)],
          theme: e,
          autoContrast: null
        });
      }
      function ri({ theme: e, color: t, colorScheme: n, name: r = t, withColorValues: o = true }) {
        if (!e.colors[t]) return {};
        if (n === "light") {
          const l = xo(e, "light"), a = {
            [`--mantine-color-${r}-text`]: `var(--mantine-color-${r}-filled)`,
            [`--mantine-color-${r}-filled`]: `var(--mantine-color-${r}-${l})`,
            [`--mantine-color-${r}-filled-hover`]: `var(--mantine-color-${r}-${l === 9 ? 8 : l + 1})`,
            [`--mantine-color-${r}-light`]: zn(e.colors[t][l], 0.1),
            [`--mantine-color-${r}-light-hover`]: zn(e.colors[t][l], 0.12),
            [`--mantine-color-${r}-light-color`]: `var(--mantine-color-${r}-${l})`,
            [`--mantine-color-${r}-outline`]: `var(--mantine-color-${r}-${l})`,
            [`--mantine-color-${r}-outline-hover`]: zn(e.colors[t][l], 0.05)
          };
          return o ? {
            [`--mantine-color-${r}-0`]: e.colors[t][0],
            [`--mantine-color-${r}-1`]: e.colors[t][1],
            [`--mantine-color-${r}-2`]: e.colors[t][2],
            [`--mantine-color-${r}-3`]: e.colors[t][3],
            [`--mantine-color-${r}-4`]: e.colors[t][4],
            [`--mantine-color-${r}-5`]: e.colors[t][5],
            [`--mantine-color-${r}-6`]: e.colors[t][6],
            [`--mantine-color-${r}-7`]: e.colors[t][7],
            [`--mantine-color-${r}-8`]: e.colors[t][8],
            [`--mantine-color-${r}-9`]: e.colors[t][9],
            ...a
          } : a;
        }
        const i = xo(e, "dark"), s = {
          [`--mantine-color-${r}-text`]: `var(--mantine-color-${r}-4)`,
          [`--mantine-color-${r}-filled`]: `var(--mantine-color-${r}-${i})`,
          [`--mantine-color-${r}-filled-hover`]: `var(--mantine-color-${r}-${i === 9 ? 8 : i + 1})`,
          [`--mantine-color-${r}-light`]: zn(e.colors[t][Math.max(0, i - 2)], 0.15),
          [`--mantine-color-${r}-light-hover`]: zn(e.colors[t][Math.max(0, i - 2)], 0.2),
          [`--mantine-color-${r}-light-color`]: `var(--mantine-color-${r}-${Math.max(i - 5, 0)})`,
          [`--mantine-color-${r}-outline`]: `var(--mantine-color-${r}-${Math.max(i - 4, 0)})`,
          [`--mantine-color-${r}-outline-hover`]: zn(e.colors[t][Math.max(i - 4, 0)], 0.05)
        };
        return o ? {
          [`--mantine-color-${r}-0`]: e.colors[t][0],
          [`--mantine-color-${r}-1`]: e.colors[t][1],
          [`--mantine-color-${r}-2`]: e.colors[t][2],
          [`--mantine-color-${r}-3`]: e.colors[t][3],
          [`--mantine-color-${r}-4`]: e.colors[t][4],
          [`--mantine-color-${r}-5`]: e.colors[t][5],
          [`--mantine-color-${r}-6`]: e.colors[t][6],
          [`--mantine-color-${r}-7`]: e.colors[t][7],
          [`--mantine-color-${r}-8`]: e.colors[t][8],
          [`--mantine-color-${r}-9`]: e.colors[t][9],
          ...s
        } : s;
      }
      function N1(e) {
        return !!e && typeof e == "object" && "mantine-virtual-color" in e;
      }
      function Bn(e, t, n) {
        bt(t).forEach((r) => Object.assign(e, {
          [`--mantine-${n}-${r}`]: t[r]
        }));
      }
      const Em = (e) => {
        const t = xo(e, "light"), n = e.defaultRadius in e.radius ? e.radius[e.defaultRadius] : I(e.defaultRadius), r = {
          variables: {
            "--mantine-scale": e.scale.toString(),
            "--mantine-cursor-type": e.cursorType,
            "--mantine-color-scheme": "light dark",
            "--mantine-webkit-font-smoothing": e.fontSmoothing ? "antialiased" : "unset",
            "--mantine-moz-font-smoothing": e.fontSmoothing ? "grayscale" : "unset",
            "--mantine-color-white": e.white,
            "--mantine-color-black": e.black,
            "--mantine-line-height": e.lineHeights.md,
            "--mantine-font-family": e.fontFamily,
            "--mantine-font-family-monospace": e.fontFamilyMonospace,
            "--mantine-font-family-headings": e.headings.fontFamily,
            "--mantine-heading-font-weight": e.headings.fontWeight,
            "--mantine-heading-text-wrap": e.headings.textWrap,
            "--mantine-radius-default": n,
            "--mantine-primary-color-filled": `var(--mantine-color-${e.primaryColor}-filled)`,
            "--mantine-primary-color-filled-hover": `var(--mantine-color-${e.primaryColor}-filled-hover)`,
            "--mantine-primary-color-light": `var(--mantine-color-${e.primaryColor}-light)`,
            "--mantine-primary-color-light-hover": `var(--mantine-color-${e.primaryColor}-light-hover)`,
            "--mantine-primary-color-light-color": `var(--mantine-color-${e.primaryColor}-light-color)`
          },
          light: {
            "--mantine-primary-color-contrast": yf(e, "light"),
            "--mantine-color-bright": "var(--mantine-color-black)",
            "--mantine-color-text": e.black,
            "--mantine-color-body": e.white,
            "--mantine-color-error": "var(--mantine-color-red-6)",
            "--mantine-color-placeholder": "var(--mantine-color-gray-5)",
            "--mantine-color-anchor": `var(--mantine-color-${e.primaryColor}-${t})`,
            "--mantine-color-default": "var(--mantine-color-white)",
            "--mantine-color-default-hover": "var(--mantine-color-gray-0)",
            "--mantine-color-default-color": "var(--mantine-color-black)",
            "--mantine-color-default-border": "var(--mantine-color-gray-4)",
            "--mantine-color-dimmed": "var(--mantine-color-gray-6)"
          },
          dark: {
            "--mantine-primary-color-contrast": yf(e, "dark"),
            "--mantine-color-bright": "var(--mantine-color-white)",
            "--mantine-color-text": "var(--mantine-color-dark-0)",
            "--mantine-color-body": "var(--mantine-color-dark-7)",
            "--mantine-color-error": "var(--mantine-color-red-8)",
            "--mantine-color-placeholder": "var(--mantine-color-dark-3)",
            "--mantine-color-anchor": `var(--mantine-color-${e.primaryColor}-4)`,
            "--mantine-color-default": "var(--mantine-color-dark-6)",
            "--mantine-color-default-hover": "var(--mantine-color-dark-5)",
            "--mantine-color-default-color": "var(--mantine-color-white)",
            "--mantine-color-default-border": "var(--mantine-color-dark-4)",
            "--mantine-color-dimmed": "var(--mantine-color-dark-2)"
          }
        };
        Bn(r.variables, e.breakpoints, "breakpoint"), Bn(r.variables, e.spacing, "spacing"), Bn(r.variables, e.fontSizes, "font-size"), Bn(r.variables, e.lineHeights, "line-height"), Bn(r.variables, e.shadows, "shadow"), Bn(r.variables, e.radius, "radius"), e.colors[e.primaryColor].forEach((i, s) => {
          r.variables[`--mantine-primary-color-${s}`] = `var(--mantine-color-${e.primaryColor}-${s})`;
        }), bt(e.colors).forEach((i) => {
          const s = e.colors[i];
          if (N1(s)) {
            Object.assign(r.light, ri({
              theme: e,
              name: s.name,
              color: s.light,
              colorScheme: "light",
              withColorValues: true
            })), Object.assign(r.dark, ri({
              theme: e,
              name: s.name,
              color: s.dark,
              colorScheme: "dark",
              withColorValues: true
            }));
            return;
          }
          s.forEach((l, a) => {
            r.variables[`--mantine-color-${i}-${a}`] = l;
          }), Object.assign(r.light, ri({
            theme: e,
            color: i,
            colorScheme: "light",
            withColorValues: false
          })), Object.assign(r.dark, ri({
            theme: e,
            color: i,
            colorScheme: "dark",
            withColorValues: false
          }));
        });
        const o = e.headings.sizes;
        return bt(o).forEach((i) => {
          r.variables[`--mantine-${i}-font-size`] = o[i].fontSize, r.variables[`--mantine-${i}-line-height`] = o[i].lineHeight, r.variables[`--mantine-${i}-font-weight`] = o[i].fontWeight || e.headings.fontWeight;
        }), r;
      };
      function P1({ theme: e, generator: t }) {
        const n = Em(e), r = t == null ? void 0 : t(e);
        return r ? Eu(n, r) : n;
      }
      const ul = Em(Tu);
      function A1(e) {
        const t = {
          variables: {},
          light: {},
          dark: {}
        };
        return bt(e.variables).forEach((n) => {
          ul.variables[n] !== e.variables[n] && (t.variables[n] = e.variables[n]);
        }), bt(e.light).forEach((n) => {
          ul.light[n] !== e.light[n] && (t.light[n] = e.light[n]);
        }), bt(e.dark).forEach((n) => {
          ul.dark[n] !== e.dark[n] && (t.dark[n] = e.dark[n]);
        }), t;
      }
      function I1(e) {
        return `
  ${e}[data-mantine-color-scheme="dark"] { --mantine-color-scheme: dark; }
  ${e}[data-mantine-color-scheme="light"] { --mantine-color-scheme: light; }
`;
      }
      function bm({ cssVariablesSelector: e, deduplicateCssVariables: t }) {
        const n = Qt(), r = ku(), o = a1(), i = P1({
          theme: n,
          generator: o
        }), s = e === ":root" && t, l = s ? A1(i) : i, a = R1(l, e);
        return a ? T.jsx("style", {
          "data-mantine-styles": true,
          nonce: r == null ? void 0 : r(),
          dangerouslySetInnerHTML: {
            __html: `${a}${s ? "" : I1(e)}`
          }
        }) : null;
      }
      bm.displayName = "@mantine/CssVariables";
      function L1() {
        const e = console.error;
        console.error = (...t) => {
          t.length > 1 && typeof t[0] == "string" && t[0].toLowerCase().includes("extra attributes from the server") && typeof t[1] == "string" && t[1].toLowerCase().includes("data-mantine-color-scheme") || e(...t);
        };
      }
      function Un(e, t) {
        var _a2, _b;
        const n = typeof window < "u" && "matchMedia" in window && ((_a2 = window.matchMedia("(prefers-color-scheme: dark)")) == null ? void 0 : _a2.matches), r = e !== "auto" ? e : n ? "dark" : "light";
        (_b = t()) == null ? void 0 : _b.setAttribute("data-mantine-color-scheme", r);
      }
      function $1({ manager: e, defaultColorScheme: t, getRootElement: n, forceColorScheme: r }) {
        const o = b.useRef(null), [i, s] = b.useState(() => e.get(t)), l = r || i, a = b.useCallback((p) => {
          r || (Un(p, n), s(p), e.set(p));
        }, [
          e.set,
          l,
          r
        ]), u = b.useCallback(() => {
          s(t), Un(t, n), e.clear();
        }, [
          e.clear,
          t
        ]);
        return b.useEffect(() => (e.subscribe(a), e.unsubscribe), [
          e.subscribe,
          e.unsubscribe
        ]), _s(() => {
          Un(e.get(t), n);
        }, []), b.useEffect(() => {
          var _a2;
          if (r) return Un(r, n), () => {
          };
          r === void 0 && Un(i, n), typeof window < "u" && "matchMedia" in window && (o.current = window.matchMedia("(prefers-color-scheme: dark)"));
          const p = (d) => {
            i === "auto" && Un(d.matches ? "dark" : "light", n);
          };
          return (_a2 = o.current) == null ? void 0 : _a2.addEventListener("change", p), () => {
            var _a3;
            return (_a3 = o.current) == null ? void 0 : _a3.removeEventListener("change", p);
          };
        }, [
          i,
          r
        ]), {
          colorScheme: l,
          setColorScheme: a,
          clearColorScheme: u
        };
      }
      function O1({ respectReducedMotion: e, getRootElement: t }) {
        _s(() => {
          var _a2;
          e && ((_a2 = t()) == null ? void 0 : _a2.setAttribute("data-respect-reduced-motion", "true"));
        }, [
          e
        ]);
      }
      L1();
      function Cm({ theme: e, children: t, getStyleNonce: n, withStaticClasses: r = true, withGlobalClasses: o = true, deduplicateCssVariables: i = true, withCssVariables: s = true, cssVariablesSelector: l = ":root", classNamesPrefix: a = "mantine", colorSchemeManager: u = x1(), defaultColorScheme: p = "light", getRootElement: d = () => document.documentElement, cssVariablesResolver: m, forceColorScheme: h, stylesTransform: v, env: _ }) {
        const { colorScheme: C, setColorScheme: g, clearColorScheme: c } = $1({
          defaultColorScheme: p,
          forceColorScheme: h,
          manager: u,
          getRootElement: d
        });
        return O1({
          respectReducedMotion: (e == null ? void 0 : e.respectReducedMotion) || false,
          getRootElement: d
        }), T.jsx(wm.Provider, {
          value: {
            colorScheme: C,
            setColorScheme: g,
            clearColorScheme: c,
            getRootElement: d,
            classNamesPrefix: a,
            getStyleNonce: n,
            cssVariablesResolver: m,
            cssVariablesSelector: l,
            withStaticClasses: r,
            stylesTransform: v,
            env: _
          },
          children: T.jsxs(xm, {
            theme: e,
            children: [
              s && T.jsx(bm, {
                cssVariablesSelector: l,
                deduplicateCssVariables: i
              }),
              o && T.jsx(k1, {}),
              t
            ]
          })
        });
      }
      Cm.displayName = "@mantine/core/MantineProvider";
      function km({ classNames: e, styles: t, props: n, stylesCtx: r }) {
        const o = Qt();
        return {
          resolvedClassNames: ws({
            theme: o,
            classNames: e,
            props: n,
            stylesCtx: r || void 0
          }),
          resolvedStyles: Ki({
            theme: o,
            styles: t,
            props: n,
            stylesCtx: r || void 0
          })
        };
      }
      const D1 = {
        always: "mantine-focus-always",
        auto: "mantine-focus-auto",
        never: "mantine-focus-never"
      };
      function M1({ theme: e, options: t, unstyled: n }) {
        return Kt((t == null ? void 0 : t.focusable) && !n && (e.focusClassName || D1[e.focusRing]), (t == null ? void 0 : t.active) && !n && e.activeClassName);
      }
      function F1({ selector: e, stylesCtx: t, options: n, props: r, theme: o }) {
        return ws({
          theme: o,
          classNames: n == null ? void 0 : n.classNames,
          props: (n == null ? void 0 : n.props) || r,
          stylesCtx: t
        })[e];
      }
      function vf({ selector: e, stylesCtx: t, theme: n, classNames: r, props: o }) {
        return ws({
          theme: n,
          classNames: r,
          props: o,
          stylesCtx: t
        })[e];
      }
      function j1({ rootSelector: e, selector: t, className: n }) {
        return e === t ? n : void 0;
      }
      function z1({ selector: e, classes: t, unstyled: n }) {
        return n ? void 0 : t[e];
      }
      function B1({ themeName: e, classNamesPrefix: t, selector: n, withStaticClass: r }) {
        return r === false ? [] : e.map((o) => `${t}-${o}-${n}`);
      }
      function U1({ themeName: e, theme: t, selector: n, props: r, stylesCtx: o }) {
        return e.map((i) => {
          var _a2, _b;
          return (_b = ws({
            theme: t,
            classNames: (_a2 = t.components[i]) == null ? void 0 : _a2.classNames,
            props: r,
            stylesCtx: o
          })) == null ? void 0 : _b[n];
        });
      }
      function W1({ options: e, classes: t, selector: n, unstyled: r }) {
        return (e == null ? void 0 : e.variant) && !r ? t[`${n}--${e.variant}`] : void 0;
      }
      function V1({ theme: e, options: t, themeName: n, selector: r, classNamesPrefix: o, classNames: i, classes: s, unstyled: l, className: a, rootSelector: u, props: p, stylesCtx: d, withStaticClasses: m, headless: h, transformedStyles: v }) {
        return Kt(M1({
          theme: e,
          options: t,
          unstyled: l || h
        }), U1({
          theme: e,
          themeName: n,
          selector: r,
          props: p,
          stylesCtx: d
        }), W1({
          options: t,
          classes: s,
          selector: r,
          unstyled: l
        }), vf({
          selector: r,
          stylesCtx: d,
          theme: e,
          classNames: i,
          props: p
        }), vf({
          selector: r,
          stylesCtx: d,
          theme: e,
          classNames: v,
          props: p
        }), F1({
          selector: r,
          stylesCtx: d,
          options: t,
          props: p,
          theme: e
        }), j1({
          rootSelector: u,
          selector: r,
          className: a
        }), z1({
          selector: r,
          classes: s,
          unstyled: l || h
        }), m && !h && B1({
          themeName: n,
          classNamesPrefix: o,
          selector: r,
          withStaticClass: t == null ? void 0 : t.withStaticClass
        }), t == null ? void 0 : t.className);
      }
      function H1({ theme: e, themeName: t, props: n, stylesCtx: r, selector: o }) {
        return t.map((i) => {
          var _a2;
          return Ki({
            theme: e,
            styles: (_a2 = e.components[i]) == null ? void 0 : _a2.styles,
            props: n,
            stylesCtx: r
          })[o];
        }).reduce((i, s) => ({
          ...i,
          ...s
        }), {});
      }
      function _a({ style: e, theme: t }) {
        return Array.isArray(e) ? [
          ...e
        ].reduce((n, r) => ({
          ...n,
          ..._a({
            style: r,
            theme: t
          })
        }), {}) : typeof e == "function" ? e(t) : e ?? {};
      }
      function G1(e) {
        return e.reduce((t, n) => (n && Object.keys(n).forEach((r) => {
          t[r] = {
            ...t[r],
            ...bu(n[r])
          };
        }), t), {});
      }
      function Y1({ vars: e, varsResolver: t, theme: n, props: r, stylesCtx: o, selector: i, themeName: s, headless: l }) {
        var _a2;
        return (_a2 = G1([
          l ? {} : t == null ? void 0 : t(n, r, o),
          ...s.map((a) => {
            var _a3, _b, _c2;
            return (_c2 = (_b = (_a3 = n.components) == null ? void 0 : _a3[a]) == null ? void 0 : _b.vars) == null ? void 0 : _c2.call(_b, n, r, o);
          }),
          e == null ? void 0 : e(n, r, o)
        ])) == null ? void 0 : _a2[i];
      }
      function K1({ theme: e, themeName: t, selector: n, options: r, props: o, stylesCtx: i, rootSelector: s, styles: l, style: a, vars: u, varsResolver: p, headless: d, withStylesTransform: m }) {
        return {
          ...!m && H1({
            theme: e,
            themeName: t,
            props: o,
            stylesCtx: i,
            selector: n
          }),
          ...!m && Ki({
            theme: e,
            styles: l,
            props: o,
            stylesCtx: i
          })[n],
          ...!m && Ki({
            theme: e,
            styles: r == null ? void 0 : r.styles,
            props: (r == null ? void 0 : r.props) || o,
            stylesCtx: i
          })[n],
          ...Y1({
            theme: e,
            props: o,
            stylesCtx: i,
            vars: u,
            varsResolver: p,
            selector: n,
            themeName: t,
            headless: d
          }),
          ...s === n ? _a({
            style: a,
            theme: e
          }) : null,
          ..._a({
            style: r == null ? void 0 : r.style,
            theme: e
          })
        };
      }
      function Q1({ props: e, stylesCtx: t, themeName: n }) {
        var _a2;
        const r = Qt(), o = (_a2 = p1()) == null ? void 0 : _a2();
        return {
          getTransformedStyles: (s) => o ? [
            ...s.map((a) => o(a, {
              props: e,
              theme: r,
              ctx: t
            })),
            ...n.map((a) => {
              var _a3;
              return o((_a3 = r.components[a]) == null ? void 0 : _a3.styles, {
                props: e,
                theme: r,
                ctx: t
              });
            })
          ].filter(Boolean) : [],
          withStylesTransform: !!o
        };
      }
      function we({ name: e, classes: t, props: n, stylesCtx: r, className: o, style: i, rootSelector: s = "root", unstyled: l, classNames: a, styles: u, vars: p, varsResolver: d }) {
        const m = Qt(), h = u1(), v = c1(), _ = f1(), C = (Array.isArray(e) ? e : [
          e
        ]).filter((f) => f), { withStylesTransform: g, getTransformedStyles: c } = Q1({
          props: n,
          stylesCtx: r,
          themeName: C
        });
        return (f, y) => ({
          className: V1({
            theme: m,
            options: y,
            themeName: C,
            selector: f,
            classNamesPrefix: h,
            classNames: a,
            classes: t,
            unstyled: l,
            className: o,
            rootSelector: s,
            props: n,
            stylesCtx: r,
            withStaticClasses: v,
            headless: _,
            transformedStyles: c([
              y == null ? void 0 : y.styles,
              u
            ])
          }),
          style: K1({
            theme: m,
            themeName: C,
            selector: f,
            options: y,
            props: n,
            stylesCtx: r,
            rootSelector: s,
            styles: u,
            style: i,
            vars: p,
            varsResolver: d,
            headless: _,
            withStylesTransform: g
          })
        });
      }
      function q(e, t, n) {
        var _a2;
        const r = Qt(), o = (_a2 = r.components[e]) == null ? void 0 : _a2.defaultProps, i = typeof o == "function" ? o(r) : o;
        return {
          ...t,
          ...i,
          ...bu(n)
        };
      }
      function cl(e) {
        return bt(e).reduce((t, n) => e[n] !== void 0 ? `${t}${Y_(n)}:${e[n]};` : t, "").trim();
      }
      function X1({ selector: e, styles: t, media: n, container: r }) {
        const o = t ? cl(t) : "", i = Array.isArray(n) ? n.map((l) => `@media${l.query}{${e}{${cl(l.styles)}}}`) : [], s = Array.isArray(r) ? r.map((l) => `@container ${l.query}{${e}{${cl(l.styles)}}}`) : [];
        return `${o ? `${e}{${o}}` : ""}${i.join("")}${s.join("")}`.trim();
      }
      function q1(e) {
        const t = ku();
        return T.jsx("style", {
          "data-mantine-styles": "inline",
          nonce: t == null ? void 0 : t(),
          dangerouslySetInnerHTML: {
            __html: X1(e)
          }
        });
      }
      function Ss(e) {
        const { m: t, mx: n, my: r, mt: o, mb: i, ml: s, mr: l, me: a, ms: u, p, px: d, py: m, pt: h, pb: v, pl: _, pr: C, pe: g, ps: c, bd: f, bg: y, c: x, opacity: S, ff: w, fz: k, fw: R, lts: N, ta: A, lh: L, fs: z, tt: j, td: B, w: W, miw: O, maw: E, h: P, mih: $, mah: M, bgsz: V, bgp: ne, bgr: Z, bga: te, pos: K, top: J, left: ye, bottom: De, right: me, inset: Ve, display: wn, flex: at, hiddenFrom: Fn, visibleFrom: Nr, lightHidden: ut, darkHidden: Sg, sx: xg, ...Eg } = e;
        return {
          styleProps: bu({
            m: t,
            mx: n,
            my: r,
            mt: o,
            mb: i,
            ml: s,
            mr: l,
            me: a,
            ms: u,
            p,
            px: d,
            py: m,
            pt: h,
            pb: v,
            pl: _,
            pr: C,
            pe: g,
            ps: c,
            bd: f,
            bg: y,
            c: x,
            opacity: S,
            ff: w,
            fz: k,
            fw: R,
            lts: N,
            ta: A,
            lh: L,
            fs: z,
            tt: j,
            td: B,
            w: W,
            miw: O,
            maw: E,
            h: P,
            mih: $,
            mah: M,
            bgsz: V,
            bgp: ne,
            bgr: Z,
            bga: te,
            pos: K,
            top: J,
            left: ye,
            bottom: De,
            right: me,
            inset: Ve,
            display: wn,
            flex: at,
            hiddenFrom: Fn,
            visibleFrom: Nr,
            lightHidden: ut,
            darkHidden: Sg,
            sx: xg
          }),
          rest: Eg
        };
      }
      const Z1 = {
        m: {
          type: "spacing",
          property: "margin"
        },
        mt: {
          type: "spacing",
          property: "marginTop"
        },
        mb: {
          type: "spacing",
          property: "marginBottom"
        },
        ml: {
          type: "spacing",
          property: "marginLeft"
        },
        mr: {
          type: "spacing",
          property: "marginRight"
        },
        ms: {
          type: "spacing",
          property: "marginInlineStart"
        },
        me: {
          type: "spacing",
          property: "marginInlineEnd"
        },
        mx: {
          type: "spacing",
          property: "marginInline"
        },
        my: {
          type: "spacing",
          property: "marginBlock"
        },
        p: {
          type: "spacing",
          property: "padding"
        },
        pt: {
          type: "spacing",
          property: "paddingTop"
        },
        pb: {
          type: "spacing",
          property: "paddingBottom"
        },
        pl: {
          type: "spacing",
          property: "paddingLeft"
        },
        pr: {
          type: "spacing",
          property: "paddingRight"
        },
        ps: {
          type: "spacing",
          property: "paddingInlineStart"
        },
        pe: {
          type: "spacing",
          property: "paddingInlineEnd"
        },
        px: {
          type: "spacing",
          property: "paddingInline"
        },
        py: {
          type: "spacing",
          property: "paddingBlock"
        },
        bd: {
          type: "border",
          property: "border"
        },
        bg: {
          type: "color",
          property: "background"
        },
        c: {
          type: "textColor",
          property: "color"
        },
        opacity: {
          type: "identity",
          property: "opacity"
        },
        ff: {
          type: "fontFamily",
          property: "fontFamily"
        },
        fz: {
          type: "fontSize",
          property: "fontSize"
        },
        fw: {
          type: "identity",
          property: "fontWeight"
        },
        lts: {
          type: "size",
          property: "letterSpacing"
        },
        ta: {
          type: "identity",
          property: "textAlign"
        },
        lh: {
          type: "lineHeight",
          property: "lineHeight"
        },
        fs: {
          type: "identity",
          property: "fontStyle"
        },
        tt: {
          type: "identity",
          property: "textTransform"
        },
        td: {
          type: "identity",
          property: "textDecoration"
        },
        w: {
          type: "spacing",
          property: "width"
        },
        miw: {
          type: "spacing",
          property: "minWidth"
        },
        maw: {
          type: "spacing",
          property: "maxWidth"
        },
        h: {
          type: "spacing",
          property: "height"
        },
        mih: {
          type: "spacing",
          property: "minHeight"
        },
        mah: {
          type: "spacing",
          property: "maxHeight"
        },
        bgsz: {
          type: "size",
          property: "backgroundSize"
        },
        bgp: {
          type: "identity",
          property: "backgroundPosition"
        },
        bgr: {
          type: "identity",
          property: "backgroundRepeat"
        },
        bga: {
          type: "identity",
          property: "backgroundAttachment"
        },
        pos: {
          type: "identity",
          property: "position"
        },
        top: {
          type: "size",
          property: "top"
        },
        left: {
          type: "size",
          property: "left"
        },
        bottom: {
          type: "size",
          property: "bottom"
        },
        right: {
          type: "size",
          property: "right"
        },
        inset: {
          type: "size",
          property: "inset"
        },
        display: {
          type: "identity",
          property: "display"
        },
        flex: {
          type: "identity",
          property: "flex"
        }
      };
      function Pu(e, t) {
        const n = Po({
          color: e,
          theme: t
        });
        return n.color === "dimmed" ? "var(--mantine-color-dimmed)" : n.color === "bright" ? "var(--mantine-color-bright)" : n.variable ? `var(${n.variable})` : n.color;
      }
      function J1(e, t) {
        const n = Po({
          color: e,
          theme: t
        });
        return n.isThemeColor && n.shade === void 0 ? `var(--mantine-color-${n.color}-text)` : Pu(e, t);
      }
      function ew(e, t) {
        if (typeof e == "number") return I(e);
        if (typeof e == "string") {
          const [n, r, ...o] = e.split(" ").filter((s) => s.trim() !== "");
          let i = `${I(n)}`;
          return r && (i += ` ${r}`), o.length > 0 && (i += ` ${Pu(o.join(" "), t)}`), i.trim();
        }
        return e;
      }
      const _f = {
        text: "var(--mantine-font-family)",
        mono: "var(--mantine-font-family-monospace)",
        monospace: "var(--mantine-font-family-monospace)",
        heading: "var(--mantine-font-family-headings)",
        headings: "var(--mantine-font-family-headings)"
      };
      function tw(e) {
        return typeof e == "string" && e in _f ? _f[e] : e;
      }
      const nw = [
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6"
      ];
      function rw(e, t) {
        return typeof e == "string" && e in t.fontSizes ? `var(--mantine-font-size-${e})` : typeof e == "string" && nw.includes(e) ? `var(--mantine-${e}-font-size)` : typeof e == "number" || typeof e == "string" ? I(e) : e;
      }
      function ow(e) {
        return e;
      }
      const iw = [
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6"
      ];
      function sw(e, t) {
        return typeof e == "string" && e in t.lineHeights ? `var(--mantine-line-height-${e})` : typeof e == "string" && iw.includes(e) ? `var(--mantine-${e}-line-height)` : e;
      }
      function lw(e) {
        return typeof e == "number" ? I(e) : e;
      }
      function aw(e, t) {
        if (typeof e == "number") return I(e);
        if (typeof e == "string") {
          const n = e.replace("-", "");
          if (!(n in t.spacing)) return I(e);
          const r = `--mantine-spacing-${n}`;
          return e.startsWith("-") ? `calc(var(${r}) * -1)` : `var(${r})`;
        }
        return e;
      }
      const fl = {
        color: Pu,
        textColor: J1,
        fontSize: rw,
        spacing: aw,
        identity: ow,
        size: lw,
        lineHeight: sw,
        fontFamily: tw,
        border: ew
      };
      function wf(e) {
        return e.replace("(min-width: ", "").replace("em)", "");
      }
      function uw({ media: e, ...t }) {
        const r = Object.keys(e).sort((o, i) => Number(wf(o)) - Number(wf(i))).map((o) => ({
          query: o,
          styles: e[o]
        }));
        return {
          ...t,
          media: r
        };
      }
      function cw(e) {
        if (typeof e != "object" || e === null) return false;
        const t = Object.keys(e);
        return !(t.length === 1 && t[0] === "base");
      }
      function fw(e) {
        return typeof e == "object" && e !== null ? "base" in e ? e.base : void 0 : e;
      }
      function dw(e) {
        return typeof e == "object" && e !== null ? bt(e).filter((t) => t !== "base") : [];
      }
      function pw(e, t) {
        return typeof e == "object" && e !== null && t in e ? e[t] : e;
      }
      function mw({ styleProps: e, data: t, theme: n }) {
        return uw(bt(e).reduce((r, o) => {
          if (o === "hiddenFrom" || o === "visibleFrom" || o === "sx") return r;
          const i = t[o], s = Array.isArray(i.property) ? i.property : [
            i.property
          ], l = fw(e[o]);
          if (!cw(e[o])) return s.forEach((u) => {
            r.inlineStyles[u] = fl[i.type](l, n);
          }), r;
          r.hasResponsiveStyles = true;
          const a = dw(e[o]);
          return s.forEach((u) => {
            l && (r.styles[u] = fl[i.type](l, n)), a.forEach((p) => {
              const d = `(min-width: ${n.breakpoints[p]})`;
              r.media[d] = {
                ...r.media[d],
                [u]: fl[i.type](pw(e[o], p), n)
              };
            });
          }), r;
        }, {
          hasResponsiveStyles: false,
          styles: {},
          inlineStyles: {},
          media: {}
        }));
      }
      function gw() {
        return `__m__-${b.useId().replace(/:/g, "")}`;
      }
      function Rm(e, t) {
        return Array.isArray(e) ? [
          ...e
        ].reduce((n, r) => ({
          ...n,
          ...Rm(r, t)
        }), {}) : typeof e == "function" ? e(t) : e ?? {};
      }
      function Tm(e) {
        return e.startsWith("data-") ? e : `data-${e}`;
      }
      function hw(e) {
        return Object.keys(e).reduce((t, n) => {
          const r = e[n];
          return r === void 0 || r === "" || r === false || r === null || (t[Tm(n)] = e[n]), t;
        }, {});
      }
      function Nm(e) {
        return e ? typeof e == "string" ? {
          [Tm(e)]: true
        } : Array.isArray(e) ? [
          ...e
        ].reduce((t, n) => ({
          ...t,
          ...Nm(n)
        }), {}) : hw(e) : null;
      }
      function wa(e, t) {
        return Array.isArray(e) ? [
          ...e
        ].reduce((n, r) => ({
          ...n,
          ...wa(r, t)
        }), {}) : typeof e == "function" ? e(t) : e ?? {};
      }
      function yw({ theme: e, style: t, vars: n, styleProps: r }) {
        const o = wa(t, e), i = wa(n, e);
        return {
          ...o,
          ...i,
          ...r
        };
      }
      const Pm = b.forwardRef(({ component: e, style: t, __vars: n, className: r, variant: o, mod: i, size: s, hiddenFrom: l, visibleFrom: a, lightHidden: u, darkHidden: p, renderRoot: d, __size: m, ...h }, v) => {
        var _a2, _b;
        const _ = Qt(), C = e || "div", { styleProps: g, rest: c } = Ss(h), y = (_b = (_a2 = d1()) == null ? void 0 : _a2()) == null ? void 0 : _b(g.sx), x = gw(), S = mw({
          styleProps: g,
          theme: _,
          data: Z1
        }), w = {
          ref: v,
          style: yw({
            theme: _,
            style: t,
            vars: n,
            styleProps: S.inlineStyles
          }),
          className: Kt(r, y, {
            [x]: S.hasResponsiveStyles,
            "mantine-light-hidden": u,
            "mantine-dark-hidden": p,
            [`mantine-hidden-from-${l}`]: l,
            [`mantine-visible-from-${a}`]: a
          }),
          "data-variant": o,
          "data-size": pm(s) ? void 0 : s || void 0,
          size: m,
          ...Nm(i),
          ...c
        };
        return T.jsxs(T.Fragment, {
          children: [
            S.hasResponsiveStyles && T.jsx(q1, {
              selector: `.${x}`,
              styles: S.styles,
              media: S.media
            }),
            typeof d == "function" ? d(w) : T.jsx(C, {
              ...w
            })
          ]
        });
      });
      Pm.displayName = "@mantine/core/Box";
      const oe = Pm;
      function Am(e) {
        return e;
      }
      function Ee(e) {
        const t = b.forwardRef(e);
        return t.extend = Am, t.withProps = (n) => {
          const r = b.forwardRef((o, i) => T.jsx(t, {
            ...n,
            ...o,
            ref: i
          }));
          return r.extend = t.extend, r.displayName = `WithProps(${t.displayName})`, r;
        }, t;
      }
      function xr(e) {
        const t = b.forwardRef(e);
        return t.withProps = (n) => {
          const r = b.forwardRef((o, i) => T.jsx(t, {
            ...n,
            ...o,
            ref: i
          }));
          return r.extend = t.extend, r.displayName = `WithProps(${t.displayName})`, r;
        }, t.extend = Am, t;
      }
      const vw = b.createContext({
        dir: "ltr",
        toggleDirection: () => {
        },
        setDirection: () => {
        }
      });
      function Im() {
        return b.useContext(vw);
      }
      function xs() {
        return typeof window < "u";
      }
      function Er(e) {
        return Lm(e) ? (e.nodeName || "").toLowerCase() : "#document";
      }
      function Ue(e) {
        var t;
        return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
      }
      function Pt(e) {
        var t;
        return (t = (Lm(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
      }
      function Lm(e) {
        return xs() ? e instanceof Node || e instanceof Ue(e).Node : false;
      }
      function se(e) {
        return xs() ? e instanceof Element || e instanceof Ue(e).Element : false;
      }
      function Qe(e) {
        return xs() ? e instanceof HTMLElement || e instanceof Ue(e).HTMLElement : false;
      }
      function Sa(e) {
        return !xs() || typeof ShadowRoot > "u" ? false : e instanceof ShadowRoot || e instanceof Ue(e).ShadowRoot;
      }
      function Ao(e) {
        const { overflow: t, overflowX: n, overflowY: r, display: o } = st(e);
        return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && ![
          "inline",
          "contents"
        ].includes(o);
      }
      function _w(e) {
        return [
          "table",
          "td",
          "th"
        ].includes(Er(e));
      }
      function Es(e) {
        return [
          ":popover-open",
          ":modal"
        ].some((t) => {
          try {
            return e.matches(t);
          } catch {
            return false;
          }
        });
      }
      function Au(e) {
        const t = bs(), n = se(e) ? st(e) : e;
        return [
          "transform",
          "translate",
          "scale",
          "rotate",
          "perspective"
        ].some((r) => n[r] ? n[r] !== "none" : false) || (n.containerType ? n.containerType !== "normal" : false) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : false) || !t && (n.filter ? n.filter !== "none" : false) || [
          "transform",
          "translate",
          "scale",
          "rotate",
          "perspective",
          "filter"
        ].some((r) => (n.willChange || "").includes(r)) || [
          "paint",
          "layout",
          "strict",
          "content"
        ].some((r) => (n.contain || "").includes(r));
      }
      function ww(e) {
        let t = Vt(e);
        for (; Qe(t) && !mn(t); ) {
          if (Au(t)) return t;
          if (Es(t)) return null;
          t = Vt(t);
        }
        return null;
      }
      function bs() {
        return typeof CSS > "u" || !CSS.supports ? false : CSS.supports("-webkit-backdrop-filter", "none");
      }
      function mn(e) {
        return [
          "html",
          "body",
          "#document"
        ].includes(Er(e));
      }
      function st(e) {
        return Ue(e).getComputedStyle(e);
      }
      function Cs(e) {
        return se(e) ? {
          scrollLeft: e.scrollLeft,
          scrollTop: e.scrollTop
        } : {
          scrollLeft: e.scrollX,
          scrollTop: e.scrollY
        };
      }
      function Vt(e) {
        if (Er(e) === "html") return e;
        const t = e.assignedSlot || e.parentNode || Sa(e) && e.host || Pt(e);
        return Sa(t) ? t.host : t;
      }
      function $m(e) {
        const t = Vt(e);
        return mn(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Qe(t) && Ao(t) ? t : $m(t);
      }
      function jt(e, t, n) {
        var r;
        t === void 0 && (t = []), n === void 0 && (n = true);
        const o = $m(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = Ue(o);
        if (i) {
          const l = xa(s);
          return t.concat(s, s.visualViewport || [], Ao(o) ? o : [], l && n ? jt(l) : []);
        }
        return t.concat(o, jt(o, [], n));
      }
      function xa(e) {
        return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
      }
      function Sf(e) {
        let t = e.activeElement;
        for (; ((n = t) == null || (n = n.shadowRoot) == null ? void 0 : n.activeElement) != null; ) {
          var n;
          t = t.shadowRoot.activeElement;
        }
        return t;
      }
      function bo(e, t) {
        if (!e || !t) return false;
        const n = t.getRootNode == null ? void 0 : t.getRootNode();
        if (e.contains(t)) return true;
        if (n && Sa(n)) {
          let r = t;
          for (; r; ) {
            if (e === r) return true;
            r = r.parentNode || r.host;
          }
        }
        return false;
      }
      function Om() {
        const e = navigator.userAgentData;
        return e != null && e.platform ? e.platform : navigator.platform;
      }
      function Dm() {
        const e = navigator.userAgentData;
        return e && Array.isArray(e.brands) ? e.brands.map((t) => {
          let { brand: n, version: r } = t;
          return n + "/" + r;
        }).join(" ") : navigator.userAgent;
      }
      function Sw(e) {
        return bw() ? false : !xf() && e.width === 0 && e.height === 0 || xf() && e.width === 1 && e.height === 1 && e.pressure === 0 && e.detail === 0 && e.pointerType === "mouse" || e.width < 1 && e.height < 1 && e.pressure === 0 && e.detail === 0 && e.pointerType === "touch";
      }
      function xw() {
        return /apple/i.test(navigator.vendor);
      }
      function xf() {
        const e = /android/i;
        return e.test(Om()) || e.test(Dm());
      }
      function Ew() {
        return Om().toLowerCase().startsWith("mac") && !navigator.maxTouchPoints;
      }
      function bw() {
        return Dm().includes("jsdom/");
      }
      function Ea(e, t) {
        const n = [
          "mouse",
          "pen"
        ];
        return n.push("", void 0), n.includes(e);
      }
      function Cw(e) {
        return "nativeEvent" in e;
      }
      function kw(e) {
        return e.matches("html,body");
      }
      function kn(e) {
        return (e == null ? void 0 : e.ownerDocument) || document;
      }
      function dl(e, t) {
        if (t == null) return false;
        if ("composedPath" in e) return e.composedPath().includes(t);
        const n = e;
        return n.target != null && t.contains(n.target);
      }
      function Wn(e) {
        return "composedPath" in e ? e.composedPath()[0] : e.target;
      }
      const Rw = "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";
      function Tw(e) {
        return Qe(e) && e.matches(Rw);
      }
      const Ht = Math.min, Ct = Math.max, Qi = Math.round, oi = Math.floor, kt = (e) => ({
        x: e,
        y: e
      }), Nw = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
      }, Pw = {
        start: "end",
        end: "start"
      };
      function ba(e, t, n) {
        return Ct(e, Ht(t, n));
      }
      function br(e, t) {
        return typeof e == "function" ? e(t) : e;
      }
      function Gt(e) {
        return e.split("-")[0];
      }
      function Io(e) {
        return e.split("-")[1];
      }
      function Mm(e) {
        return e === "x" ? "y" : "x";
      }
      function Iu(e) {
        return e === "y" ? "height" : "width";
      }
      function $n(e) {
        return [
          "top",
          "bottom"
        ].includes(Gt(e)) ? "y" : "x";
      }
      function Lu(e) {
        return Mm($n(e));
      }
      function Aw(e, t, n) {
        n === void 0 && (n = false);
        const r = Io(e), o = Lu(e), i = Iu(o);
        let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
        return t.reference[i] > t.floating[i] && (s = Xi(s)), [
          s,
          Xi(s)
        ];
      }
      function Iw(e) {
        const t = Xi(e);
        return [
          Ca(e),
          t,
          Ca(t)
        ];
      }
      function Ca(e) {
        return e.replace(/start|end/g, (t) => Pw[t]);
      }
      function Lw(e, t, n) {
        const r = [
          "left",
          "right"
        ], o = [
          "right",
          "left"
        ], i = [
          "top",
          "bottom"
        ], s = [
          "bottom",
          "top"
        ];
        switch (e) {
          case "top":
          case "bottom":
            return n ? t ? o : r : t ? r : o;
          case "left":
          case "right":
            return t ? i : s;
          default:
            return [];
        }
      }
      function $w(e, t, n, r) {
        const o = Io(e);
        let i = Lw(Gt(e), n === "start", r);
        return o && (i = i.map((s) => s + "-" + o), t && (i = i.concat(i.map(Ca)))), i;
      }
      function Xi(e) {
        return e.replace(/left|right|bottom|top/g, (t) => Nw[t]);
      }
      function Ow(e) {
        return {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          ...e
        };
      }
      function $u(e) {
        return typeof e != "number" ? Ow(e) : {
          top: e,
          right: e,
          bottom: e,
          left: e
        };
      }
      function vr(e) {
        const { x: t, y: n, width: r, height: o } = e;
        return {
          width: r,
          height: o,
          top: n,
          left: t,
          right: t + r,
          bottom: n + o,
          x: t,
          y: n
        };
      }
      function Ef(e, t, n) {
        let { reference: r, floating: o } = e;
        const i = $n(t), s = Lu(t), l = Iu(s), a = Gt(t), u = i === "y", p = r.x + r.width / 2 - o.width / 2, d = r.y + r.height / 2 - o.height / 2, m = r[l] / 2 - o[l] / 2;
        let h;
        switch (a) {
          case "top":
            h = {
              x: p,
              y: r.y - o.height
            };
            break;
          case "bottom":
            h = {
              x: p,
              y: r.y + r.height
            };
            break;
          case "right":
            h = {
              x: r.x + r.width,
              y: d
            };
            break;
          case "left":
            h = {
              x: r.x - o.width,
              y: d
            };
            break;
          default:
            h = {
              x: r.x,
              y: r.y
            };
        }
        switch (Io(t)) {
          case "start":
            h[s] -= m * (n && u ? -1 : 1);
            break;
          case "end":
            h[s] += m * (n && u ? -1 : 1);
            break;
        }
        return h;
      }
      const Dw = async (e, t, n) => {
        const { placement: r = "bottom", strategy: o = "absolute", middleware: i = [], platform: s } = n, l = i.filter(Boolean), a = await (s.isRTL == null ? void 0 : s.isRTL(t));
        let u = await s.getElementRects({
          reference: e,
          floating: t,
          strategy: o
        }), { x: p, y: d } = Ef(u, r, a), m = r, h = {}, v = 0;
        for (let _ = 0; _ < l.length; _++) {
          const { name: C, fn: g } = l[_], { x: c, y: f, data: y, reset: x } = await g({
            x: p,
            y: d,
            initialPlacement: r,
            placement: m,
            strategy: o,
            middlewareData: h,
            rects: u,
            platform: s,
            elements: {
              reference: e,
              floating: t
            }
          });
          p = c ?? p, d = f ?? d, h = {
            ...h,
            [C]: {
              ...h[C],
              ...y
            }
          }, x && v <= 50 && (v++, typeof x == "object" && (x.placement && (m = x.placement), x.rects && (u = x.rects === true ? await s.getElementRects({
            reference: e,
            floating: t,
            strategy: o
          }) : x.rects), { x: p, y: d } = Ef(u, m, a)), _ = -1);
        }
        return {
          x: p,
          y: d,
          placement: m,
          strategy: o,
          middlewareData: h
        };
      };
      async function Fm(e, t) {
        var n;
        t === void 0 && (t = {});
        const { x: r, y: o, platform: i, rects: s, elements: l, strategy: a } = e, { boundary: u = "clippingAncestors", rootBoundary: p = "viewport", elementContext: d = "floating", altBoundary: m = false, padding: h = 0 } = br(t, e), v = $u(h), C = l[m ? d === "floating" ? "reference" : "floating" : d], g = vr(await i.getClippingRect({
          element: (n = await (i.isElement == null ? void 0 : i.isElement(C))) == null || n ? C : C.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(l.floating)),
          boundary: u,
          rootBoundary: p,
          strategy: a
        })), c = d === "floating" ? {
          x: r,
          y: o,
          width: s.floating.width,
          height: s.floating.height
        } : s.reference, f = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(l.floating)), y = await (i.isElement == null ? void 0 : i.isElement(f)) ? await (i.getScale == null ? void 0 : i.getScale(f)) || {
          x: 1,
          y: 1
        } : {
          x: 1,
          y: 1
        }, x = vr(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
          elements: l,
          rect: c,
          offsetParent: f,
          strategy: a
        }) : c);
        return {
          top: (g.top - x.top + v.top) / y.y,
          bottom: (x.bottom - g.bottom + v.bottom) / y.y,
          left: (g.left - x.left + v.left) / y.x,
          right: (x.right - g.right + v.right) / y.x
        };
      }
      const Mw = (e) => ({
        name: "arrow",
        options: e,
        async fn(t) {
          const { x: n, y: r, placement: o, rects: i, platform: s, elements: l, middlewareData: a } = t, { element: u, padding: p = 0 } = br(e, t) || {};
          if (u == null) return {};
          const d = $u(p), m = {
            x: n,
            y: r
          }, h = Lu(o), v = Iu(h), _ = await s.getDimensions(u), C = h === "y", g = C ? "top" : "left", c = C ? "bottom" : "right", f = C ? "clientHeight" : "clientWidth", y = i.reference[v] + i.reference[h] - m[h] - i.floating[v], x = m[h] - i.reference[h], S = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
          let w = S ? S[f] : 0;
          (!w || !await (s.isElement == null ? void 0 : s.isElement(S))) && (w = l.floating[f] || i.floating[v]);
          const k = y / 2 - x / 2, R = w / 2 - _[v] / 2 - 1, N = Ht(d[g], R), A = Ht(d[c], R), L = N, z = w - _[v] - A, j = w / 2 - _[v] / 2 + k, B = ba(L, j, z), W = !a.arrow && Io(o) != null && j !== B && i.reference[v] / 2 - (j < L ? N : A) - _[v] / 2 < 0, O = W ? j < L ? j - L : j - z : 0;
          return {
            [h]: m[h] + O,
            data: {
              [h]: B,
              centerOffset: j - B - O,
              ...W && {
                alignmentOffset: O
              }
            },
            reset: W
          };
        }
      }), Fw = function(e) {
        return e === void 0 && (e = {}), {
          name: "flip",
          options: e,
          async fn(t) {
            var n, r;
            const { placement: o, middlewareData: i, rects: s, initialPlacement: l, platform: a, elements: u } = t, { mainAxis: p = true, crossAxis: d = true, fallbackPlacements: m, fallbackStrategy: h = "bestFit", fallbackAxisSideDirection: v = "none", flipAlignment: _ = true, ...C } = br(e, t);
            if ((n = i.arrow) != null && n.alignmentOffset) return {};
            const g = Gt(o), c = $n(l), f = Gt(l) === l, y = await (a.isRTL == null ? void 0 : a.isRTL(u.floating)), x = m || (f || !_ ? [
              Xi(l)
            ] : Iw(l)), S = v !== "none";
            !m && S && x.push(...$w(l, _, v, y));
            const w = [
              l,
              ...x
            ], k = await Fm(t, C), R = [];
            let N = ((r = i.flip) == null ? void 0 : r.overflows) || [];
            if (p && R.push(k[g]), d) {
              const j = Aw(o, s, y);
              R.push(k[j[0]], k[j[1]]);
            }
            if (N = [
              ...N,
              {
                placement: o,
                overflows: R
              }
            ], !R.every((j) => j <= 0)) {
              var A, L;
              const j = (((A = i.flip) == null ? void 0 : A.index) || 0) + 1, B = w[j];
              if (B) return {
                data: {
                  index: j,
                  overflows: N
                },
                reset: {
                  placement: B
                }
              };
              let W = (L = N.filter((O) => O.overflows[0] <= 0).sort((O, E) => O.overflows[1] - E.overflows[1])[0]) == null ? void 0 : L.placement;
              if (!W) switch (h) {
                case "bestFit": {
                  var z;
                  const O = (z = N.filter((E) => {
                    if (S) {
                      const P = $n(E.placement);
                      return P === c || P === "y";
                    }
                    return true;
                  }).map((E) => [
                    E.placement,
                    E.overflows.filter((P) => P > 0).reduce((P, $) => P + $, 0)
                  ]).sort((E, P) => E[1] - P[1])[0]) == null ? void 0 : z[0];
                  O && (W = O);
                  break;
                }
                case "initialPlacement":
                  W = l;
                  break;
              }
              if (o !== W) return {
                reset: {
                  placement: W
                }
              };
            }
            return {};
          }
        };
      };
      function jm(e) {
        const t = Ht(...e.map((i) => i.left)), n = Ht(...e.map((i) => i.top)), r = Ct(...e.map((i) => i.right)), o = Ct(...e.map((i) => i.bottom));
        return {
          x: t,
          y: n,
          width: r - t,
          height: o - n
        };
      }
      function jw(e) {
        const t = e.slice().sort((o, i) => o.y - i.y), n = [];
        let r = null;
        for (let o = 0; o < t.length; o++) {
          const i = t[o];
          !r || i.y - r.y > r.height / 2 ? n.push([
            i
          ]) : n[n.length - 1].push(i), r = i;
        }
        return n.map((o) => vr(jm(o)));
      }
      const zw = function(e) {
        return e === void 0 && (e = {}), {
          name: "inline",
          options: e,
          async fn(t) {
            const { placement: n, elements: r, rects: o, platform: i, strategy: s } = t, { padding: l = 2, x: a, y: u } = br(e, t), p = Array.from(await (i.getClientRects == null ? void 0 : i.getClientRects(r.reference)) || []), d = jw(p), m = vr(jm(p)), h = $u(l);
            function v() {
              if (d.length === 2 && d[0].left > d[1].right && a != null && u != null) return d.find((C) => a > C.left - h.left && a < C.right + h.right && u > C.top - h.top && u < C.bottom + h.bottom) || m;
              if (d.length >= 2) {
                if ($n(n) === "y") {
                  const N = d[0], A = d[d.length - 1], L = Gt(n) === "top", z = N.top, j = A.bottom, B = L ? N.left : A.left, W = L ? N.right : A.right, O = W - B, E = j - z;
                  return {
                    top: z,
                    bottom: j,
                    left: B,
                    right: W,
                    width: O,
                    height: E,
                    x: B,
                    y: z
                  };
                }
                const C = Gt(n) === "left", g = Ct(...d.map((N) => N.right)), c = Ht(...d.map((N) => N.left)), f = d.filter((N) => C ? N.left === c : N.right === g), y = f[0].top, x = f[f.length - 1].bottom, S = c, w = g, k = w - S, R = x - y;
                return {
                  top: y,
                  bottom: x,
                  left: S,
                  right: w,
                  width: k,
                  height: R,
                  x: S,
                  y
                };
              }
              return m;
            }
            const _ = await i.getElementRects({
              reference: {
                getBoundingClientRect: v
              },
              floating: r.floating,
              strategy: s
            });
            return o.reference.x !== _.reference.x || o.reference.y !== _.reference.y || o.reference.width !== _.reference.width || o.reference.height !== _.reference.height ? {
              reset: {
                rects: _
              }
            } : {};
          }
        };
      };
      async function Bw(e, t) {
        const { placement: n, platform: r, elements: o } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = Gt(n), l = Io(n), a = $n(n) === "y", u = [
          "left",
          "top"
        ].includes(s) ? -1 : 1, p = i && a ? -1 : 1, d = br(t, e);
        let { mainAxis: m, crossAxis: h, alignmentAxis: v } = typeof d == "number" ? {
          mainAxis: d,
          crossAxis: 0,
          alignmentAxis: null
        } : {
          mainAxis: d.mainAxis || 0,
          crossAxis: d.crossAxis || 0,
          alignmentAxis: d.alignmentAxis
        };
        return l && typeof v == "number" && (h = l === "end" ? v * -1 : v), a ? {
          x: h * p,
          y: m * u
        } : {
          x: m * u,
          y: h * p
        };
      }
      const Uw = function(e) {
        return e === void 0 && (e = 0), {
          name: "offset",
          options: e,
          async fn(t) {
            var n, r;
            const { x: o, y: i, placement: s, middlewareData: l } = t, a = await Bw(t, e);
            return s === ((n = l.offset) == null ? void 0 : n.placement) && (r = l.arrow) != null && r.alignmentOffset ? {} : {
              x: o + a.x,
              y: i + a.y,
              data: {
                ...a,
                placement: s
              }
            };
          }
        };
      }, Ww = function(e) {
        return e === void 0 && (e = {}), {
          name: "shift",
          options: e,
          async fn(t) {
            const { x: n, y: r, placement: o } = t, { mainAxis: i = true, crossAxis: s = false, limiter: l = {
              fn: (C) => {
                let { x: g, y: c } = C;
                return {
                  x: g,
                  y: c
                };
              }
            }, ...a } = br(e, t), u = {
              x: n,
              y: r
            }, p = await Fm(t, a), d = $n(Gt(o)), m = Mm(d);
            let h = u[m], v = u[d];
            if (i) {
              const C = m === "y" ? "top" : "left", g = m === "y" ? "bottom" : "right", c = h + p[C], f = h - p[g];
              h = ba(c, h, f);
            }
            if (s) {
              const C = d === "y" ? "top" : "left", g = d === "y" ? "bottom" : "right", c = v + p[C], f = v - p[g];
              v = ba(c, v, f);
            }
            const _ = l.fn({
              ...t,
              [m]: h,
              [d]: v
            });
            return {
              ..._,
              data: {
                x: _.x - n,
                y: _.y - r,
                enabled: {
                  [m]: i,
                  [d]: s
                }
              }
            };
          }
        };
      };
      function zm(e) {
        const t = st(e);
        let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
        const o = Qe(e), i = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, l = Qi(n) !== i || Qi(r) !== s;
        return l && (n = i, r = s), {
          width: n,
          height: r,
          $: l
        };
      }
      function Ou(e) {
        return se(e) ? e : e.contextElement;
      }
      function ur(e) {
        const t = Ou(e);
        if (!Qe(t)) return kt(1);
        const n = t.getBoundingClientRect(), { width: r, height: o, $: i } = zm(t);
        let s = (i ? Qi(n.width) : n.width) / r, l = (i ? Qi(n.height) : n.height) / o;
        return (!s || !Number.isFinite(s)) && (s = 1), (!l || !Number.isFinite(l)) && (l = 1), {
          x: s,
          y: l
        };
      }
      const Vw = kt(0);
      function Bm(e) {
        const t = Ue(e);
        return !bs() || !t.visualViewport ? Vw : {
          x: t.visualViewport.offsetLeft,
          y: t.visualViewport.offsetTop
        };
      }
      function Hw(e, t, n) {
        return t === void 0 && (t = false), !n || t && n !== Ue(e) ? false : t;
      }
      function On(e, t, n, r) {
        t === void 0 && (t = false), n === void 0 && (n = false);
        const o = e.getBoundingClientRect(), i = Ou(e);
        let s = kt(1);
        t && (r ? se(r) && (s = ur(r)) : s = ur(e));
        const l = Hw(i, n, r) ? Bm(i) : kt(0);
        let a = (o.left + l.x) / s.x, u = (o.top + l.y) / s.y, p = o.width / s.x, d = o.height / s.y;
        if (i) {
          const m = Ue(i), h = r && se(r) ? Ue(r) : r;
          let v = m, _ = xa(v);
          for (; _ && r && h !== v; ) {
            const C = ur(_), g = _.getBoundingClientRect(), c = st(_), f = g.left + (_.clientLeft + parseFloat(c.paddingLeft)) * C.x, y = g.top + (_.clientTop + parseFloat(c.paddingTop)) * C.y;
            a *= C.x, u *= C.y, p *= C.x, d *= C.y, a += f, u += y, v = Ue(_), _ = xa(v);
          }
        }
        return vr({
          width: p,
          height: d,
          x: a,
          y: u
        });
      }
      function Du(e, t) {
        const n = Cs(e).scrollLeft;
        return t ? t.left + n : On(Pt(e)).left + n;
      }
      function Um(e, t, n) {
        n === void 0 && (n = false);
        const r = e.getBoundingClientRect(), o = r.left + t.scrollLeft - (n ? 0 : Du(e, r)), i = r.top + t.scrollTop;
        return {
          x: o,
          y: i
        };
      }
      function Gw(e) {
        let { elements: t, rect: n, offsetParent: r, strategy: o } = e;
        const i = o === "fixed", s = Pt(r), l = t ? Es(t.floating) : false;
        if (r === s || l && i) return n;
        let a = {
          scrollLeft: 0,
          scrollTop: 0
        }, u = kt(1);
        const p = kt(0), d = Qe(r);
        if ((d || !d && !i) && ((Er(r) !== "body" || Ao(s)) && (a = Cs(r)), Qe(r))) {
          const h = On(r);
          u = ur(r), p.x = h.x + r.clientLeft, p.y = h.y + r.clientTop;
        }
        const m = s && !d && !i ? Um(s, a, true) : kt(0);
        return {
          width: n.width * u.x,
          height: n.height * u.y,
          x: n.x * u.x - a.scrollLeft * u.x + p.x + m.x,
          y: n.y * u.y - a.scrollTop * u.y + p.y + m.y
        };
      }
      function Yw(e) {
        return Array.from(e.getClientRects());
      }
      function Kw(e) {
        const t = Pt(e), n = Cs(e), r = e.ownerDocument.body, o = Ct(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = Ct(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
        let s = -n.scrollLeft + Du(e);
        const l = -n.scrollTop;
        return st(r).direction === "rtl" && (s += Ct(t.clientWidth, r.clientWidth) - o), {
          width: o,
          height: i,
          x: s,
          y: l
        };
      }
      function Qw(e, t) {
        const n = Ue(e), r = Pt(e), o = n.visualViewport;
        let i = r.clientWidth, s = r.clientHeight, l = 0, a = 0;
        if (o) {
          i = o.width, s = o.height;
          const u = bs();
          (!u || u && t === "fixed") && (l = o.offsetLeft, a = o.offsetTop);
        }
        return {
          width: i,
          height: s,
          x: l,
          y: a
        };
      }
      function Xw(e, t) {
        const n = On(e, true, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = Qe(e) ? ur(e) : kt(1), s = e.clientWidth * i.x, l = e.clientHeight * i.y, a = o * i.x, u = r * i.y;
        return {
          width: s,
          height: l,
          x: a,
          y: u
        };
      }
      function bf(e, t, n) {
        let r;
        if (t === "viewport") r = Qw(e, n);
        else if (t === "document") r = Kw(Pt(e));
        else if (se(t)) r = Xw(t, n);
        else {
          const o = Bm(e);
          r = {
            x: t.x - o.x,
            y: t.y - o.y,
            width: t.width,
            height: t.height
          };
        }
        return vr(r);
      }
      function Wm(e, t) {
        const n = Vt(e);
        return n === t || !se(n) || mn(n) ? false : st(n).position === "fixed" || Wm(n, t);
      }
      function qw(e, t) {
        const n = t.get(e);
        if (n) return n;
        let r = jt(e, [], false).filter((l) => se(l) && Er(l) !== "body"), o = null;
        const i = st(e).position === "fixed";
        let s = i ? Vt(e) : e;
        for (; se(s) && !mn(s); ) {
          const l = st(s), a = Au(s);
          !a && l.position === "fixed" && (o = null), (i ? !a && !o : !a && l.position === "static" && !!o && [
            "absolute",
            "fixed"
          ].includes(o.position) || Ao(s) && !a && Wm(e, s)) ? r = r.filter((p) => p !== s) : o = l, s = Vt(s);
        }
        return t.set(e, r), r;
      }
      function Zw(e) {
        let { element: t, boundary: n, rootBoundary: r, strategy: o } = e;
        const s = [
          ...n === "clippingAncestors" ? Es(t) ? [] : qw(t, this._c) : [].concat(n),
          r
        ], l = s[0], a = s.reduce((u, p) => {
          const d = bf(t, p, o);
          return u.top = Ct(d.top, u.top), u.right = Ht(d.right, u.right), u.bottom = Ht(d.bottom, u.bottom), u.left = Ct(d.left, u.left), u;
        }, bf(t, l, o));
        return {
          width: a.right - a.left,
          height: a.bottom - a.top,
          x: a.left,
          y: a.top
        };
      }
      function Jw(e) {
        const { width: t, height: n } = zm(e);
        return {
          width: t,
          height: n
        };
      }
      function eS(e, t, n) {
        const r = Qe(t), o = Pt(t), i = n === "fixed", s = On(e, true, i, t);
        let l = {
          scrollLeft: 0,
          scrollTop: 0
        };
        const a = kt(0);
        if (r || !r && !i) if ((Er(t) !== "body" || Ao(o)) && (l = Cs(t)), r) {
          const m = On(t, true, i, t);
          a.x = m.x + t.clientLeft, a.y = m.y + t.clientTop;
        } else o && (a.x = Du(o));
        const u = o && !r && !i ? Um(o, l) : kt(0), p = s.left + l.scrollLeft - a.x - u.x, d = s.top + l.scrollTop - a.y - u.y;
        return {
          x: p,
          y: d,
          width: s.width,
          height: s.height
        };
      }
      function pl(e) {
        return st(e).position === "static";
      }
      function Cf(e, t) {
        if (!Qe(e) || st(e).position === "fixed") return null;
        if (t) return t(e);
        let n = e.offsetParent;
        return Pt(e) === n && (n = n.ownerDocument.body), n;
      }
      function Vm(e, t) {
        const n = Ue(e);
        if (Es(e)) return n;
        if (!Qe(e)) {
          let o = Vt(e);
          for (; o && !mn(o); ) {
            if (se(o) && !pl(o)) return o;
            o = Vt(o);
          }
          return n;
        }
        let r = Cf(e, t);
        for (; r && _w(r) && pl(r); ) r = Cf(r, t);
        return r && mn(r) && pl(r) && !Au(r) ? n : r || ww(e) || n;
      }
      const tS = async function(e) {
        const t = this.getOffsetParent || Vm, n = this.getDimensions, r = await n(e.floating);
        return {
          reference: eS(e.reference, await t(e.floating), e.strategy),
          floating: {
            x: 0,
            y: 0,
            width: r.width,
            height: r.height
          }
        };
      };
      function nS(e) {
        return st(e).direction === "rtl";
      }
      const rS = {
        convertOffsetParentRelativeRectToViewportRelativeRect: Gw,
        getDocumentElement: Pt,
        getClippingRect: Zw,
        getOffsetParent: Vm,
        getElementRects: tS,
        getClientRects: Yw,
        getDimensions: Jw,
        getScale: ur,
        isElement: se,
        isRTL: nS
      };
      function Hm(e, t) {
        return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
      }
      function oS(e, t) {
        let n = null, r;
        const o = Pt(e);
        function i() {
          var l;
          clearTimeout(r), (l = n) == null || l.disconnect(), n = null;
        }
        function s(l, a) {
          l === void 0 && (l = false), a === void 0 && (a = 1), i();
          const u = e.getBoundingClientRect(), { left: p, top: d, width: m, height: h } = u;
          if (l || t(), !m || !h) return;
          const v = oi(d), _ = oi(o.clientWidth - (p + m)), C = oi(o.clientHeight - (d + h)), g = oi(p), f = {
            rootMargin: -v + "px " + -_ + "px " + -C + "px " + -g + "px",
            threshold: Ct(0, Ht(1, a)) || 1
          };
          let y = true;
          function x(S) {
            const w = S[0].intersectionRatio;
            if (w !== a) {
              if (!y) return s();
              w ? s(false, w) : r = setTimeout(() => {
                s(false, 1e-7);
              }, 1e3);
            }
            w === 1 && !Hm(u, e.getBoundingClientRect()) && s(), y = false;
          }
          try {
            n = new IntersectionObserver(x, {
              ...f,
              root: o.ownerDocument
            });
          } catch {
            n = new IntersectionObserver(x, f);
          }
          n.observe(e);
        }
        return s(true), i;
      }
      function iS(e, t, n, r) {
        r === void 0 && (r = {});
        const { ancestorScroll: o = true, ancestorResize: i = true, elementResize: s = typeof ResizeObserver == "function", layoutShift: l = typeof IntersectionObserver == "function", animationFrame: a = false } = r, u = Ou(e), p = o || i ? [
          ...u ? jt(u) : [],
          ...jt(t)
        ] : [];
        p.forEach((g) => {
          o && g.addEventListener("scroll", n, {
            passive: true
          }), i && g.addEventListener("resize", n);
        });
        const d = u && l ? oS(u, n) : null;
        let m = -1, h = null;
        s && (h = new ResizeObserver((g) => {
          let [c] = g;
          c && c.target === u && h && (h.unobserve(t), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
            var f;
            (f = h) == null || f.observe(t);
          })), n();
        }), u && !a && h.observe(u), h.observe(t));
        let v, _ = a ? On(e) : null;
        a && C();
        function C() {
          const g = On(e);
          _ && !Hm(_, g) && n(), _ = g, v = requestAnimationFrame(C);
        }
        return n(), () => {
          var g;
          p.forEach((c) => {
            o && c.removeEventListener("scroll", n), i && c.removeEventListener("resize", n);
          }), d == null ? void 0 : d(), (g = h) == null || g.disconnect(), h = null, a && cancelAnimationFrame(v);
        };
      }
      const sS = Uw, lS = Ww, aS = Fw, kf = Mw, uS = zw, cS = (e, t, n) => {
        const r = /* @__PURE__ */ new Map(), o = {
          platform: rS,
          ...n
        }, i = {
          ...o.platform,
          _c: r
        };
        return Dw(e, t, {
          ...o,
          platform: i
        });
      };
      var Si = typeof document < "u" ? b.useLayoutEffect : b.useEffect;
      function qi(e, t) {
        if (e === t) return true;
        if (typeof e != typeof t) return false;
        if (typeof e == "function" && e.toString() === t.toString()) return true;
        let n, r, o;
        if (e && t && typeof e == "object") {
          if (Array.isArray(e)) {
            if (n = e.length, n !== t.length) return false;
            for (r = n; r-- !== 0; ) if (!qi(e[r], t[r])) return false;
            return true;
          }
          if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length) return false;
          for (r = n; r-- !== 0; ) if (!{}.hasOwnProperty.call(t, o[r])) return false;
          for (r = n; r-- !== 0; ) {
            const i = o[r];
            if (!(i === "_owner" && e.$$typeof) && !qi(e[i], t[i])) return false;
          }
          return true;
        }
        return e !== e && t !== t;
      }
      function Gm(e) {
        return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
      }
      function Rf(e, t) {
        const n = Gm(e);
        return Math.round(t * n) / n;
      }
      function ml(e) {
        const t = b.useRef(e);
        return Si(() => {
          t.current = e;
        }), t;
      }
      function fS(e) {
        e === void 0 && (e = {});
        const { placement: t = "bottom", strategy: n = "absolute", middleware: r = [], platform: o, elements: { reference: i, floating: s } = {}, transform: l = true, whileElementsMounted: a, open: u } = e, [p, d] = b.useState({
          x: 0,
          y: 0,
          strategy: n,
          placement: t,
          middlewareData: {},
          isPositioned: false
        }), [m, h] = b.useState(r);
        qi(m, r) || h(r);
        const [v, _] = b.useState(null), [C, g] = b.useState(null), c = b.useCallback((E) => {
          E !== S.current && (S.current = E, _(E));
        }, []), f = b.useCallback((E) => {
          E !== w.current && (w.current = E, g(E));
        }, []), y = i || v, x = s || C, S = b.useRef(null), w = b.useRef(null), k = b.useRef(p), R = a != null, N = ml(a), A = ml(o), L = ml(u), z = b.useCallback(() => {
          if (!S.current || !w.current) return;
          const E = {
            placement: t,
            strategy: n,
            middleware: m
          };
          A.current && (E.platform = A.current), cS(S.current, w.current, E).then((P) => {
            const $ = {
              ...P,
              isPositioned: L.current !== false
            };
            j.current && !qi(k.current, $) && (k.current = $, hs.flushSync(() => {
              d($);
            }));
          });
        }, [
          m,
          t,
          n,
          A,
          L
        ]);
        Si(() => {
          u === false && k.current.isPositioned && (k.current.isPositioned = false, d((E) => ({
            ...E,
            isPositioned: false
          })));
        }, [
          u
        ]);
        const j = b.useRef(false);
        Si(() => (j.current = true, () => {
          j.current = false;
        }), []), Si(() => {
          if (y && (S.current = y), x && (w.current = x), y && x) {
            if (N.current) return N.current(y, x, z);
            z();
          }
        }, [
          y,
          x,
          z,
          N,
          R
        ]);
        const B = b.useMemo(() => ({
          reference: S,
          floating: w,
          setReference: c,
          setFloating: f
        }), [
          c,
          f
        ]), W = b.useMemo(() => ({
          reference: y,
          floating: x
        }), [
          y,
          x
        ]), O = b.useMemo(() => {
          const E = {
            position: n,
            left: 0,
            top: 0
          };
          if (!W.floating) return E;
          const P = Rf(W.floating, p.x), $ = Rf(W.floating, p.y);
          return l ? {
            ...E,
            transform: "translate(" + P + "px, " + $ + "px)",
            ...Gm(W.floating) >= 1.5 && {
              willChange: "transform"
            }
          } : {
            position: n,
            left: P,
            top: $
          };
        }, [
          n,
          l,
          W.floating,
          p.x,
          p.y
        ]);
        return b.useMemo(() => ({
          ...p,
          update: z,
          refs: B,
          elements: W,
          floatingStyles: O
        }), [
          p,
          z,
          B,
          W,
          O
        ]);
      }
      const dS = (e) => {
        function t(n) {
          return {}.hasOwnProperty.call(n, "current");
        }
        return {
          name: "arrow",
          options: e,
          fn(n) {
            const { element: r, padding: o } = typeof e == "function" ? e(n) : e;
            return r && t(r) ? r.current != null ? kf({
              element: r.current,
              padding: o
            }).fn(n) : {} : r ? kf({
              element: r,
              padding: o
            }).fn(n) : {};
          }
        };
      }, pS = (e, t) => ({
        ...sS(e),
        options: [
          e,
          t
        ]
      }), Ym = (e, t) => ({
        ...lS(e),
        options: [
          e,
          t
        ]
      }), Tf = (e, t) => ({
        ...aS(e),
        options: [
          e,
          t
        ]
      }), gl = (e, t) => ({
        ...uS(e),
        options: [
          e,
          t
        ]
      }), mS = (e, t) => ({
        ...dS(e),
        options: [
          e,
          t
        ]
      }), Km = {
        ...zg
      }, gS = Km.useInsertionEffect, hS = gS || ((e) => e());
      function Ot(e) {
        const t = b.useRef(() => {
        });
        return hS(() => {
          t.current = e;
        }), b.useCallback(function() {
          for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
          return t.current == null ? void 0 : t.current(...r);
        }, []);
      }
      var Rt = typeof document < "u" ? b.useLayoutEffect : b.useEffect;
      let Nf = false, yS = 0;
      const Pf = () => "floating-ui-" + Math.random().toString(36).slice(2, 6) + yS++;
      function vS() {
        const [e, t] = b.useState(() => Nf ? Pf() : void 0);
        return Rt(() => {
          e == null && t(Pf());
        }, []), b.useEffect(() => {
          Nf = true;
        }, []), e;
      }
      const _S = Km.useId, Qm = _S || vS;
      function wS() {
        const e = /* @__PURE__ */ new Map();
        return {
          emit(t, n) {
            var r;
            (r = e.get(t)) == null || r.forEach((o) => o(n));
          },
          on(t, n) {
            e.set(t, [
              ...e.get(t) || [],
              n
            ]);
          },
          off(t, n) {
            var r;
            e.set(t, ((r = e.get(t)) == null ? void 0 : r.filter((o) => o !== n)) || []);
          }
        };
      }
      const SS = b.createContext(null), xS = b.createContext(null), Mu = () => {
        var e;
        return ((e = b.useContext(SS)) == null ? void 0 : e.id) || null;
      }, Fu = () => b.useContext(xS);
      function ju(e) {
        return "data-floating-ui-" + e;
      }
      function hl(e) {
        const t = b.useRef(e);
        return Rt(() => {
          t.current = e;
        }), t;
      }
      const Af = ju("safe-polygon");
      function xi(e, t, n) {
        return n && !Ea(n) ? 0 : typeof e == "number" ? e : e == null ? void 0 : e[t];
      }
      function ES(e, t) {
        t === void 0 && (t = {});
        const { open: n, onOpenChange: r, dataRef: o, events: i, elements: s } = e, { enabled: l = true, delay: a = 0, handleClose: u = null, mouseOnly: p = false, restMs: d = 0, move: m = true } = t, h = Fu(), v = Mu(), _ = hl(u), C = hl(a), g = hl(n), c = b.useRef(), f = b.useRef(-1), y = b.useRef(), x = b.useRef(-1), S = b.useRef(true), w = b.useRef(false), k = b.useRef(() => {
        }), R = b.useRef(false), N = b.useCallback(() => {
          var O;
          const E = (O = o.current.openEvent) == null ? void 0 : O.type;
          return (E == null ? void 0 : E.includes("mouse")) && E !== "mousedown";
        }, [
          o
        ]);
        b.useEffect(() => {
          if (!l) return;
          function O(E) {
            let { open: P } = E;
            P || (clearTimeout(f.current), clearTimeout(x.current), S.current = true, R.current = false);
          }
          return i.on("openchange", O), () => {
            i.off("openchange", O);
          };
        }, [
          l,
          i
        ]), b.useEffect(() => {
          if (!l || !_.current || !n) return;
          function O(P) {
            N() && r(false, P, "hover");
          }
          const E = kn(s.floating).documentElement;
          return E.addEventListener("mouseleave", O), () => {
            E.removeEventListener("mouseleave", O);
          };
        }, [
          s.floating,
          n,
          r,
          l,
          _,
          N
        ]);
        const A = b.useCallback(function(O, E, P) {
          E === void 0 && (E = true), P === void 0 && (P = "hover");
          const $ = xi(C.current, "close", c.current);
          $ && !y.current ? (clearTimeout(f.current), f.current = window.setTimeout(() => r(false, O, P), $)) : E && (clearTimeout(f.current), r(false, O, P));
        }, [
          C,
          r
        ]), L = Ot(() => {
          k.current(), y.current = void 0;
        }), z = Ot(() => {
          if (w.current) {
            const O = kn(s.floating).body;
            O.style.pointerEvents = "", O.removeAttribute(Af), w.current = false;
          }
        }), j = Ot(() => o.current.openEvent ? [
          "click",
          "mousedown"
        ].includes(o.current.openEvent.type) : false);
        b.useEffect(() => {
          if (!l) return;
          function O(M) {
            if (clearTimeout(f.current), S.current = false, p && !Ea(c.current) || d > 0 && !xi(C.current, "open")) return;
            const V = xi(C.current, "open", c.current);
            V ? f.current = window.setTimeout(() => {
              g.current || r(true, M, "hover");
            }, V) : n || r(true, M, "hover");
          }
          function E(M) {
            if (j()) return;
            k.current();
            const V = kn(s.floating);
            if (clearTimeout(x.current), R.current = false, _.current && o.current.floatingContext) {
              n || clearTimeout(f.current), y.current = _.current({
                ...o.current.floatingContext,
                tree: h,
                x: M.clientX,
                y: M.clientY,
                onClose() {
                  z(), L(), j() || A(M, true, "safe-polygon");
                }
              });
              const Z = y.current;
              V.addEventListener("mousemove", Z), k.current = () => {
                V.removeEventListener("mousemove", Z);
              };
              return;
            }
            (c.current === "touch" ? !bo(s.floating, M.relatedTarget) : true) && A(M);
          }
          function P(M) {
            j() || o.current.floatingContext && (_.current == null || _.current({
              ...o.current.floatingContext,
              tree: h,
              x: M.clientX,
              y: M.clientY,
              onClose() {
                z(), L(), j() || A(M);
              }
            })(M));
          }
          if (se(s.domReference)) {
            var $;
            const M = s.domReference;
            return n && M.addEventListener("mouseleave", P), ($ = s.floating) == null || $.addEventListener("mouseleave", P), m && M.addEventListener("mousemove", O, {
              once: true
            }), M.addEventListener("mouseenter", O), M.addEventListener("mouseleave", E), () => {
              var V;
              n && M.removeEventListener("mouseleave", P), (V = s.floating) == null || V.removeEventListener("mouseleave", P), m && M.removeEventListener("mousemove", O), M.removeEventListener("mouseenter", O), M.removeEventListener("mouseleave", E);
            };
          }
        }, [
          s,
          l,
          e,
          p,
          d,
          m,
          A,
          L,
          z,
          r,
          n,
          g,
          h,
          C,
          _,
          o,
          j
        ]), Rt(() => {
          var O;
          if (l && n && (O = _.current) != null && O.__options.blockPointerEvents && N()) {
            w.current = true;
            const P = s.floating;
            if (se(s.domReference) && P) {
              var E;
              const $ = kn(s.floating).body;
              $.setAttribute(Af, "");
              const M = s.domReference, V = h == null || (E = h.nodesRef.current.find((ne) => ne.id === v)) == null || (E = E.context) == null ? void 0 : E.elements.floating;
              return V && (V.style.pointerEvents = ""), $.style.pointerEvents = "none", M.style.pointerEvents = "auto", P.style.pointerEvents = "auto", () => {
                $.style.pointerEvents = "", M.style.pointerEvents = "", P.style.pointerEvents = "";
              };
            }
          }
        }, [
          l,
          n,
          v,
          s,
          h,
          _,
          N
        ]), Rt(() => {
          n || (c.current = void 0, R.current = false, L(), z());
        }, [
          n,
          L,
          z
        ]), b.useEffect(() => () => {
          L(), clearTimeout(f.current), clearTimeout(x.current), z();
        }, [
          l,
          s.domReference,
          L,
          z
        ]);
        const B = b.useMemo(() => {
          function O(E) {
            c.current = E.pointerType;
          }
          return {
            onPointerDown: O,
            onPointerEnter: O,
            onMouseMove(E) {
              const { nativeEvent: P } = E;
              function $() {
                !S.current && !g.current && r(true, P, "hover");
              }
              p && !Ea(c.current) || n || d === 0 || R.current && E.movementX ** 2 + E.movementY ** 2 < 2 || (clearTimeout(x.current), c.current === "touch" ? $() : (R.current = true, x.current = window.setTimeout($, d)));
            }
          };
        }, [
          p,
          r,
          n,
          g,
          d
        ]), W = b.useMemo(() => ({
          onMouseEnter() {
            clearTimeout(f.current);
          },
          onMouseLeave(O) {
            j() || A(O.nativeEvent, false);
          }
        }), [
          A,
          j
        ]);
        return b.useMemo(() => l ? {
          reference: B,
          floating: W
        } : {}, [
          l,
          B,
          W
        ]);
      }
      const ka = () => {
      }, Xm = b.createContext({
        delay: 0,
        initialDelay: 0,
        timeoutMs: 0,
        currentId: null,
        setCurrentId: ka,
        setState: ka,
        isInstantPhase: false
      }), bS = () => b.useContext(Xm);
      function CS(e) {
        const { children: t, delay: n, timeoutMs: r = 0 } = e, [o, i] = b.useReducer((a, u) => ({
          ...a,
          ...u
        }), {
          delay: n,
          timeoutMs: r,
          initialDelay: n,
          currentId: null,
          isInstantPhase: false
        }), s = b.useRef(null), l = b.useCallback((a) => {
          i({
            currentId: a
          });
        }, []);
        return Rt(() => {
          o.currentId ? s.current === null ? s.current = o.currentId : o.isInstantPhase || i({
            isInstantPhase: true
          }) : (o.isInstantPhase && i({
            isInstantPhase: false
          }), s.current = null);
        }, [
          o.currentId,
          o.isInstantPhase
        ]), b.createElement(Xm.Provider, {
          value: b.useMemo(() => ({
            ...o,
            setState: i,
            setCurrentId: l
          }), [
            o,
            l
          ])
        }, t);
      }
      function kS(e, t) {
        t === void 0 && (t = {});
        const { open: n, onOpenChange: r, floatingId: o } = e, { id: i, enabled: s = true } = t, l = i ?? o, a = bS(), { currentId: u, setCurrentId: p, initialDelay: d, setState: m, timeoutMs: h } = a;
        return Rt(() => {
          s && u && (m({
            delay: {
              open: 1,
              close: xi(d, "close")
            }
          }), u !== l && r(false));
        }, [
          s,
          l,
          r,
          m,
          u,
          d
        ]), Rt(() => {
          function v() {
            r(false), m({
              delay: d,
              currentId: null
            });
          }
          if (s && u && !n && u === l) {
            if (h) {
              const _ = window.setTimeout(v, h);
              return () => {
                clearTimeout(_);
              };
            }
            v();
          }
        }, [
          s,
          n,
          m,
          u,
          l,
          r,
          d,
          h
        ]), Rt(() => {
          s && (p === ka || !n || p(l));
        }, [
          s,
          n,
          p,
          l
        ]), a;
      }
      function yl(e, t) {
        let n = e.filter((o) => {
          var i;
          return o.parentId === t && ((i = o.context) == null ? void 0 : i.open);
        }), r = n;
        for (; r.length; ) r = e.filter((o) => {
          var i;
          return (i = r) == null ? void 0 : i.some((s) => {
            var l;
            return o.parentId === s.id && ((l = o.context) == null ? void 0 : l.open);
          });
        }), n = n.concat(r);
        return n;
      }
      const RS = "data-floating-ui-focusable", TS = {
        pointerdown: "onPointerDown",
        mousedown: "onMouseDown",
        click: "onClick"
      }, NS = {
        pointerdown: "onPointerDownCapture",
        mousedown: "onMouseDownCapture",
        click: "onClickCapture"
      }, If = (e) => {
        var t, n;
        return {
          escapeKey: typeof e == "boolean" ? e : (t = e == null ? void 0 : e.escapeKey) != null ? t : false,
          outsidePress: typeof e == "boolean" ? e : (n = e == null ? void 0 : e.outsidePress) != null ? n : true
        };
      };
      function PS(e, t) {
        t === void 0 && (t = {});
        const { open: n, onOpenChange: r, elements: o, dataRef: i } = e, { enabled: s = true, escapeKey: l = true, outsidePress: a = true, outsidePressEvent: u = "pointerdown", referencePress: p = false, referencePressEvent: d = "pointerdown", ancestorScroll: m = false, bubbles: h, capture: v } = t, _ = Fu(), C = Ot(typeof a == "function" ? a : () => false), g = typeof a == "function" ? C : a, c = b.useRef(false), f = b.useRef(false), { escapeKey: y, outsidePress: x } = If(h), { escapeKey: S, outsidePress: w } = If(v), k = b.useRef(false), R = Ot((B) => {
          var W;
          if (!n || !s || !l || B.key !== "Escape" || k.current) return;
          const O = (W = i.current.floatingContext) == null ? void 0 : W.nodeId, E = _ ? yl(_.nodesRef.current, O) : [];
          if (!y && (B.stopPropagation(), E.length > 0)) {
            let P = true;
            if (E.forEach(($) => {
              var M;
              if ((M = $.context) != null && M.open && !$.context.dataRef.current.__escapeKeyBubbles) {
                P = false;
                return;
              }
            }), !P) return;
          }
          r(false, Cw(B) ? B.nativeEvent : B, "escape-key");
        }), N = Ot((B) => {
          var W;
          const O = () => {
            var E;
            R(B), (E = Wn(B)) == null || E.removeEventListener("keydown", O);
          };
          (W = Wn(B)) == null || W.addEventListener("keydown", O);
        }), A = Ot((B) => {
          var W;
          const O = c.current;
          c.current = false;
          const E = f.current;
          if (f.current = false, u === "click" && E || O || typeof g == "function" && !g(B)) return;
          const P = Wn(B), $ = "[" + ju("inert") + "]", M = kn(o.floating).querySelectorAll($);
          let V = se(P) ? P : null;
          for (; V && !mn(V); ) {
            const K = Vt(V);
            if (mn(K) || !se(K)) break;
            V = K;
          }
          if (M.length && se(P) && !kw(P) && !bo(P, o.floating) && Array.from(M).every((K) => !bo(V, K))) return;
          if (Qe(P) && j) {
            const K = P.clientWidth > 0 && P.scrollWidth > P.clientWidth, J = P.clientHeight > 0 && P.scrollHeight > P.clientHeight;
            let ye = J && B.offsetX > P.clientWidth;
            if (J && st(P).direction === "rtl" && (ye = B.offsetX <= P.offsetWidth - P.clientWidth), ye || K && B.offsetY > P.clientHeight) return;
          }
          const ne = (W = i.current.floatingContext) == null ? void 0 : W.nodeId, Z = _ && yl(_.nodesRef.current, ne).some((K) => {
            var J;
            return dl(B, (J = K.context) == null ? void 0 : J.elements.floating);
          });
          if (dl(B, o.floating) || dl(B, o.domReference) || Z) return;
          const te = _ ? yl(_.nodesRef.current, ne) : [];
          if (te.length > 0) {
            let K = true;
            if (te.forEach((J) => {
              var ye;
              if ((ye = J.context) != null && ye.open && !J.context.dataRef.current.__outsidePressBubbles) {
                K = false;
                return;
              }
            }), !K) return;
          }
          r(false, B, "outside-press");
        }), L = Ot((B) => {
          var W;
          const O = () => {
            var E;
            A(B), (E = Wn(B)) == null || E.removeEventListener(u, O);
          };
          (W = Wn(B)) == null || W.addEventListener(u, O);
        });
        b.useEffect(() => {
          if (!n || !s) return;
          i.current.__escapeKeyBubbles = y, i.current.__outsidePressBubbles = x;
          let B = -1;
          function W(M) {
            r(false, M, "ancestor-scroll");
          }
          function O() {
            window.clearTimeout(B), k.current = true;
          }
          function E() {
            B = window.setTimeout(() => {
              k.current = false;
            }, bs() ? 5 : 0);
          }
          const P = kn(o.floating);
          l && (P.addEventListener("keydown", S ? N : R, S), P.addEventListener("compositionstart", O), P.addEventListener("compositionend", E)), g && P.addEventListener(u, w ? L : A, w);
          let $ = [];
          return m && (se(o.domReference) && ($ = jt(o.domReference)), se(o.floating) && ($ = $.concat(jt(o.floating))), !se(o.reference) && o.reference && o.reference.contextElement && ($ = $.concat(jt(o.reference.contextElement)))), $ = $.filter((M) => {
            var V;
            return M !== ((V = P.defaultView) == null ? void 0 : V.visualViewport);
          }), $.forEach((M) => {
            M.addEventListener("scroll", W, {
              passive: true
            });
          }), () => {
            l && (P.removeEventListener("keydown", S ? N : R, S), P.removeEventListener("compositionstart", O), P.removeEventListener("compositionend", E)), g && P.removeEventListener(u, w ? L : A, w), $.forEach((M) => {
              M.removeEventListener("scroll", W);
            }), window.clearTimeout(B);
          };
        }, [
          i,
          o,
          l,
          g,
          u,
          n,
          r,
          m,
          s,
          y,
          x,
          R,
          S,
          N,
          A,
          w,
          L
        ]), b.useEffect(() => {
          c.current = false;
        }, [
          g,
          u
        ]);
        const z = b.useMemo(() => ({
          onKeyDown: R,
          [TS[d]]: (B) => {
            p && r(false, B.nativeEvent, "reference-press");
          }
        }), [
          R,
          r,
          p,
          d
        ]), j = b.useMemo(() => ({
          onKeyDown: R,
          onMouseDown() {
            f.current = true;
          },
          onMouseUp() {
            f.current = true;
          },
          [NS[u]]: () => {
            c.current = true;
          }
        }), [
          R,
          u
        ]);
        return b.useMemo(() => s ? {
          reference: z,
          floating: j
        } : {}, [
          s,
          z,
          j
        ]);
      }
      function AS(e) {
        const { open: t = false, onOpenChange: n, elements: r } = e, o = Qm(), i = b.useRef({}), [s] = b.useState(() => wS()), l = Mu() != null, [a, u] = b.useState(r.reference), p = Ot((h, v, _) => {
          i.current.openEvent = h ? v : void 0, s.emit("openchange", {
            open: h,
            event: v,
            reason: _,
            nested: l
          }), n == null ? void 0 : n(h, v, _);
        }), d = b.useMemo(() => ({
          setPositionReference: u
        }), []), m = b.useMemo(() => ({
          reference: a || r.reference || null,
          floating: r.floating || null,
          domReference: r.reference
        }), [
          a,
          r.reference,
          r.floating
        ]);
        return b.useMemo(() => ({
          dataRef: i,
          open: t,
          onOpenChange: p,
          elements: m,
          events: s,
          floatingId: o,
          refs: d
        }), [
          t,
          p,
          m,
          s,
          o,
          d
        ]);
      }
      function qm(e) {
        e === void 0 && (e = {});
        const { nodeId: t } = e, n = AS({
          ...e,
          elements: {
            reference: null,
            floating: null,
            ...e.elements
          }
        }), r = e.rootContext || n, o = r.elements, [i, s] = b.useState(null), [l, a] = b.useState(null), p = (o == null ? void 0 : o.domReference) || i, d = b.useRef(null), m = Fu();
        Rt(() => {
          p && (d.current = p);
        }, [
          p
        ]);
        const h = fS({
          ...e,
          elements: {
            ...o,
            ...l && {
              reference: l
            }
          }
        }), v = b.useCallback((f) => {
          const y = se(f) ? {
            getBoundingClientRect: () => f.getBoundingClientRect(),
            contextElement: f
          } : f;
          a(y), h.refs.setReference(y);
        }, [
          h.refs
        ]), _ = b.useCallback((f) => {
          (se(f) || f === null) && (d.current = f, s(f)), (se(h.refs.reference.current) || h.refs.reference.current === null || f !== null && !se(f)) && h.refs.setReference(f);
        }, [
          h.refs
        ]), C = b.useMemo(() => ({
          ...h.refs,
          setReference: _,
          setPositionReference: v,
          domReference: d
        }), [
          h.refs,
          _,
          v
        ]), g = b.useMemo(() => ({
          ...h.elements,
          domReference: p
        }), [
          h.elements,
          p
        ]), c = b.useMemo(() => ({
          ...h,
          ...r,
          refs: C,
          elements: g,
          nodeId: t
        }), [
          h,
          C,
          g,
          t,
          r
        ]);
        return Rt(() => {
          r.dataRef.current.floatingContext = c;
          const f = m == null ? void 0 : m.nodesRef.current.find((y) => y.id === t);
          f && (f.context = c);
        }), b.useMemo(() => ({
          ...h,
          context: c,
          refs: C,
          elements: g
        }), [
          h,
          C,
          g,
          c
        ]);
      }
      function IS(e, t) {
        t === void 0 && (t = {});
        const { open: n, onOpenChange: r, events: o, dataRef: i, elements: s } = e, { enabled: l = true, visibleOnly: a = true } = t, u = b.useRef(false), p = b.useRef(), d = b.useRef(true);
        b.useEffect(() => {
          if (!l) return;
          const h = Ue(s.domReference);
          function v() {
            !n && Qe(s.domReference) && s.domReference === Sf(kn(s.domReference)) && (u.current = true);
          }
          function _() {
            d.current = true;
          }
          return h.addEventListener("blur", v), h.addEventListener("keydown", _, true), () => {
            h.removeEventListener("blur", v), h.removeEventListener("keydown", _, true);
          };
        }, [
          s.domReference,
          n,
          l
        ]), b.useEffect(() => {
          if (!l) return;
          function h(v) {
            let { reason: _ } = v;
            (_ === "reference-press" || _ === "escape-key") && (u.current = true);
          }
          return o.on("openchange", h), () => {
            o.off("openchange", h);
          };
        }, [
          o,
          l
        ]), b.useEffect(() => () => {
          clearTimeout(p.current);
        }, []);
        const m = b.useMemo(() => ({
          onPointerDown(h) {
            Sw(h.nativeEvent) || (d.current = false);
          },
          onMouseLeave() {
            u.current = false;
          },
          onFocus(h) {
            if (u.current) return;
            const v = Wn(h.nativeEvent);
            if (a && se(v)) try {
              if (xw() && Ew()) throw Error();
              if (!v.matches(":focus-visible")) return;
            } catch {
              if (!d.current && !Tw(v)) return;
            }
            r(true, h.nativeEvent, "focus");
          },
          onBlur(h) {
            u.current = false;
            const v = h.relatedTarget, _ = h.nativeEvent, C = se(v) && v.hasAttribute(ju("focus-guard")) && v.getAttribute("data-type") === "outside";
            p.current = window.setTimeout(() => {
              var g;
              const c = Sf(s.domReference ? s.domReference.ownerDocument : document);
              !v && c === s.domReference || bo((g = i.current.floatingContext) == null ? void 0 : g.refs.floating.current, c) || bo(s.domReference, c) || C || r(false, _, "focus");
            });
          }
        }), [
          i,
          s.domReference,
          r,
          a
        ]);
        return b.useMemo(() => l ? {
          reference: m
        } : {}, [
          l,
          m
        ]);
      }
      const Lf = "active", $f = "selected";
      function vl(e, t, n) {
        const r = /* @__PURE__ */ new Map(), o = n === "item";
        let i = e;
        if (o && e) {
          const { [Lf]: s, [$f]: l, ...a } = e;
          i = a;
        }
        return {
          ...n === "floating" && {
            tabIndex: -1,
            [RS]: ""
          },
          ...i,
          ...t.map((s) => {
            const l = s ? s[n] : null;
            return typeof l == "function" ? e ? l(e) : null : l;
          }).concat(e).reduce((s, l) => (l && Object.entries(l).forEach((a) => {
            let [u, p] = a;
            if (!(o && [
              Lf,
              $f
            ].includes(u))) if (u.indexOf("on") === 0) {
              if (r.has(u) || r.set(u, []), typeof p == "function") {
                var d;
                (d = r.get(u)) == null || d.push(p), s[u] = function() {
                  for (var m, h = arguments.length, v = new Array(h), _ = 0; _ < h; _++) v[_] = arguments[_];
                  return (m = r.get(u)) == null ? void 0 : m.map((C) => C(...v)).find((C) => C !== void 0);
                };
              }
            } else s[u] = p;
          }), s), {})
        };
      }
      function LS(e) {
        e === void 0 && (e = []);
        const t = e.map((l) => l == null ? void 0 : l.reference), n = e.map((l) => l == null ? void 0 : l.floating), r = e.map((l) => l == null ? void 0 : l.item), o = b.useCallback((l) => vl(l, e, "reference"), t), i = b.useCallback((l) => vl(l, e, "floating"), n), s = b.useCallback((l) => vl(l, e, "item"), r);
        return b.useMemo(() => ({
          getReferenceProps: o,
          getFloatingProps: i,
          getItemProps: s
        }), [
          o,
          i,
          s
        ]);
      }
      const $S = /* @__PURE__ */ new Map([
        [
          "select",
          "listbox"
        ],
        [
          "combobox",
          "listbox"
        ],
        [
          "label",
          false
        ]
      ]);
      function OS(e, t) {
        var n;
        t === void 0 && (t = {});
        const { open: r, floatingId: o } = e, { enabled: i = true, role: s = "dialog" } = t, l = (n = $S.get(s)) != null ? n : s, a = Qm(), p = Mu() != null, d = b.useMemo(() => l === "tooltip" || s === "label" ? {
          ["aria-" + (s === "label" ? "labelledby" : "describedby")]: r ? o : void 0
        } : {
          "aria-expanded": r ? "true" : "false",
          "aria-haspopup": l === "alertdialog" ? "dialog" : l,
          "aria-controls": r ? o : void 0,
          ...l === "listbox" && {
            role: "combobox"
          },
          ...l === "menu" && {
            id: a
          },
          ...l === "menu" && p && {
            role: "menuitem"
          },
          ...s === "select" && {
            "aria-autocomplete": "none"
          },
          ...s === "combobox" && {
            "aria-autocomplete": "list"
          }
        }, [
          l,
          o,
          p,
          r,
          a,
          s
        ]), m = b.useMemo(() => {
          const v = {
            id: o,
            ...l && {
              role: l
            }
          };
          return l === "tooltip" || s === "label" ? v : {
            ...v,
            ...l === "menu" && {
              "aria-labelledby": a
            }
          };
        }, [
          l,
          o,
          a,
          s
        ]), h = b.useCallback((v) => {
          let { active: _, selected: C } = v;
          const g = {
            role: "option",
            ..._ && {
              id: o + "-option"
            }
          };
          switch (s) {
            case "select":
              return {
                ...g,
                "aria-selected": _ && C
              };
            case "combobox":
              return {
                ...g,
                ..._ && {
                  "aria-selected": true
                }
              };
          }
          return {};
        }, [
          o,
          s
        ]);
        return b.useMemo(() => i ? {
          reference: d,
          floating: m,
          item: h
        } : {}, [
          i,
          d,
          m,
          h
        ]);
      }
      var Zm = {
        root: "m_87cf2631"
      };
      const DS = {
        __staticSelector: "UnstyledButton"
      }, Cr = xr((e, t) => {
        const n = q("UnstyledButton", DS, e), { className: r, component: o = "button", __staticSelector: i, unstyled: s, classNames: l, styles: a, style: u, ...p } = n, d = we({
          name: i,
          props: n,
          classes: Zm,
          className: r,
          style: u,
          classNames: l,
          styles: a,
          unstyled: s
        });
        return T.jsx(oe, {
          ...d("root", {
            focusable: true
          }),
          component: o,
          ref: t,
          type: o === "button" ? "button" : void 0,
          ...p
        });
      });
      Cr.classes = Zm;
      Cr.displayName = "@mantine/core/UnstyledButton";
      function MS(e, t) {
        if (e === "rtl" && (t.includes("right") || t.includes("left"))) {
          const [n, r] = t.split("-"), o = n === "right" ? "left" : "right";
          return r === void 0 ? o : `${o}-${r}`;
        }
        return t;
      }
      function Of(e, t, n, r) {
        return e === "center" || r === "center" ? {
          top: t
        } : e === "end" ? {
          bottom: n
        } : e === "start" ? {
          top: n
        } : {};
      }
      function Df(e, t, n, r, o) {
        return e === "center" || r === "center" ? {
          left: t
        } : e === "end" ? {
          [o === "ltr" ? "right" : "left"]: n
        } : e === "start" ? {
          [o === "ltr" ? "left" : "right"]: n
        } : {};
      }
      const FS = {
        bottom: "borderTopLeftRadius",
        left: "borderTopRightRadius",
        right: "borderBottomLeftRadius",
        top: "borderBottomRightRadius"
      };
      function jS({ position: e, arrowSize: t, arrowOffset: n, arrowRadius: r, arrowPosition: o, arrowX: i, arrowY: s, dir: l }) {
        const [a, u = "center"] = e.split("-"), p = {
          width: t,
          height: t,
          transform: "rotate(45deg)",
          position: "absolute",
          [FS[a]]: r
        }, d = -t / 2;
        return a === "left" ? {
          ...p,
          ...Of(u, s, n, o),
          right: d,
          borderLeftColor: "transparent",
          borderBottomColor: "transparent",
          clipPath: "polygon(100% 0, 0 0, 100% 100%)"
        } : a === "right" ? {
          ...p,
          ...Of(u, s, n, o),
          left: d,
          borderRightColor: "transparent",
          borderTopColor: "transparent",
          clipPath: "polygon(0 100%, 0 0, 100% 100%)"
        } : a === "top" ? {
          ...p,
          ...Df(u, i, n, o, l),
          bottom: d,
          borderTopColor: "transparent",
          borderLeftColor: "transparent",
          clipPath: "polygon(0 100%, 100% 100%, 100% 0)"
        } : a === "bottom" ? {
          ...p,
          ...Df(u, i, n, o, l),
          top: d,
          borderBottomColor: "transparent",
          borderRightColor: "transparent",
          clipPath: "polygon(0 100%, 0 0, 100% 0)"
        } : {};
      }
      const Jm = b.forwardRef(({ position: e, arrowSize: t, arrowOffset: n, arrowRadius: r, arrowPosition: o, visible: i, arrowX: s, arrowY: l, style: a, ...u }, p) => {
        const { dir: d } = Im();
        return i ? T.jsx("div", {
          ...u,
          ref: p,
          style: {
            ...a,
            ...jS({
              position: e,
              arrowSize: t,
              arrowOffset: n,
              arrowRadius: r,
              arrowPosition: o,
              dir: d,
              arrowX: s,
              arrowY: l
            })
          }
        }) : null;
      });
      Jm.displayName = "@mantine/core/FloatingArrow";
      function _l(e) {
        const t = document.createElement("div");
        return t.setAttribute("data-portal", "true"), typeof e.className == "string" && t.classList.add(...e.className.split(" ").filter(Boolean)), typeof e.style == "object" && Object.assign(t.style, e.style), typeof e.id == "string" && t.setAttribute("id", e.id), t;
      }
      function zS({ target: e, reuseTargetNode: t, ...n }) {
        if (e) return typeof e == "string" ? document.querySelector(e) || _l(n) : e;
        if (t) {
          const r = document.querySelector("[data-mantine-shared-portal-node]");
          if (r) return r;
          const o = _l(n);
          return o.setAttribute("data-mantine-shared-portal-node", "true"), document.body.appendChild(o), o;
        }
        return _l(n);
      }
      const BS = {}, eg = Ee((e, t) => {
        const { children: n, target: r, reuseTargetNode: o, ...i } = q("Portal", BS, e), [s, l] = b.useState(false), a = b.useRef(null);
        return _s(() => (l(true), a.current = zS({
          target: r,
          reuseTargetNode: o,
          ...i
        }), va(t, a.current), !r && !o && a.current && document.body.appendChild(a.current), () => {
          !r && !o && a.current && document.body.removeChild(a.current);
        }), [
          r
        ]), !s || !a.current ? null : hs.createPortal(T.jsx(T.Fragment, {
          children: n
        }), a.current);
      });
      eg.displayName = "@mantine/core/Portal";
      const zu = Ee(({ withinPortal: e = true, children: t, ...n }, r) => Sm() === "test" || !e ? T.jsx(T.Fragment, {
        children: t
      }) : T.jsx(eg, {
        ref: r,
        ...n,
        children: t
      }));
      zu.displayName = "@mantine/core/OptionalPortal";
      const zr = (e) => ({
        in: {
          opacity: 1,
          transform: "scale(1)"
        },
        out: {
          opacity: 0,
          transform: `scale(.9) translateY(${e === "bottom" ? 10 : -10}px)`
        },
        transitionProperty: "transform, opacity"
      }), ii = {
        fade: {
          in: {
            opacity: 1
          },
          out: {
            opacity: 0
          },
          transitionProperty: "opacity"
        },
        "fade-up": {
          in: {
            opacity: 1,
            transform: "translateY(0)"
          },
          out: {
            opacity: 0,
            transform: "translateY(30px)"
          },
          transitionProperty: "opacity, transform"
        },
        "fade-down": {
          in: {
            opacity: 1,
            transform: "translateY(0)"
          },
          out: {
            opacity: 0,
            transform: "translateY(-30px)"
          },
          transitionProperty: "opacity, transform"
        },
        "fade-left": {
          in: {
            opacity: 1,
            transform: "translateX(0)"
          },
          out: {
            opacity: 0,
            transform: "translateX(30px)"
          },
          transitionProperty: "opacity, transform"
        },
        "fade-right": {
          in: {
            opacity: 1,
            transform: "translateX(0)"
          },
          out: {
            opacity: 0,
            transform: "translateX(-30px)"
          },
          transitionProperty: "opacity, transform"
        },
        scale: {
          in: {
            opacity: 1,
            transform: "scale(1)"
          },
          out: {
            opacity: 0,
            transform: "scale(0)"
          },
          common: {
            transformOrigin: "top"
          },
          transitionProperty: "transform, opacity"
        },
        "scale-y": {
          in: {
            opacity: 1,
            transform: "scaleY(1)"
          },
          out: {
            opacity: 0,
            transform: "scaleY(0)"
          },
          common: {
            transformOrigin: "top"
          },
          transitionProperty: "transform, opacity"
        },
        "scale-x": {
          in: {
            opacity: 1,
            transform: "scaleX(1)"
          },
          out: {
            opacity: 0,
            transform: "scaleX(0)"
          },
          common: {
            transformOrigin: "left"
          },
          transitionProperty: "transform, opacity"
        },
        "skew-up": {
          in: {
            opacity: 1,
            transform: "translateY(0) skew(0deg, 0deg)"
          },
          out: {
            opacity: 0,
            transform: "translateY(-20px) skew(-10deg, -5deg)"
          },
          common: {
            transformOrigin: "top"
          },
          transitionProperty: "transform, opacity"
        },
        "skew-down": {
          in: {
            opacity: 1,
            transform: "translateY(0) skew(0deg, 0deg)"
          },
          out: {
            opacity: 0,
            transform: "translateY(20px) skew(-10deg, -5deg)"
          },
          common: {
            transformOrigin: "bottom"
          },
          transitionProperty: "transform, opacity"
        },
        "rotate-left": {
          in: {
            opacity: 1,
            transform: "translateY(0) rotate(0deg)"
          },
          out: {
            opacity: 0,
            transform: "translateY(20px) rotate(-5deg)"
          },
          common: {
            transformOrigin: "bottom"
          },
          transitionProperty: "transform, opacity"
        },
        "rotate-right": {
          in: {
            opacity: 1,
            transform: "translateY(0) rotate(0deg)"
          },
          out: {
            opacity: 0,
            transform: "translateY(20px) rotate(5deg)"
          },
          common: {
            transformOrigin: "top"
          },
          transitionProperty: "transform, opacity"
        },
        "slide-down": {
          in: {
            opacity: 1,
            transform: "translateY(0)"
          },
          out: {
            opacity: 0,
            transform: "translateY(-100%)"
          },
          common: {
            transformOrigin: "top"
          },
          transitionProperty: "transform, opacity"
        },
        "slide-up": {
          in: {
            opacity: 1,
            transform: "translateY(0)"
          },
          out: {
            opacity: 0,
            transform: "translateY(100%)"
          },
          common: {
            transformOrigin: "bottom"
          },
          transitionProperty: "transform, opacity"
        },
        "slide-left": {
          in: {
            opacity: 1,
            transform: "translateX(0)"
          },
          out: {
            opacity: 0,
            transform: "translateX(100%)"
          },
          common: {
            transformOrigin: "left"
          },
          transitionProperty: "transform, opacity"
        },
        "slide-right": {
          in: {
            opacity: 1,
            transform: "translateX(0)"
          },
          out: {
            opacity: 0,
            transform: "translateX(-100%)"
          },
          common: {
            transformOrigin: "right"
          },
          transitionProperty: "transform, opacity"
        },
        pop: {
          ...zr("bottom"),
          common: {
            transformOrigin: "center center"
          }
        },
        "pop-bottom-left": {
          ...zr("bottom"),
          common: {
            transformOrigin: "bottom left"
          }
        },
        "pop-bottom-right": {
          ...zr("bottom"),
          common: {
            transformOrigin: "bottom right"
          }
        },
        "pop-top-left": {
          ...zr("top"),
          common: {
            transformOrigin: "top left"
          }
        },
        "pop-top-right": {
          ...zr("top"),
          common: {
            transformOrigin: "top right"
          }
        }
      }, Mf = {
        entering: "in",
        entered: "in",
        exiting: "out",
        exited: "out",
        "pre-exiting": "out",
        "pre-entering": "out"
      };
      function US({ transition: e, state: t, duration: n, timingFunction: r }) {
        const o = {
          WebkitBackfaceVisibility: "hidden",
          willChange: "transform, opacity",
          transitionDuration: `${n}ms`,
          transitionTimingFunction: r
        };
        return typeof e == "string" ? e in ii ? {
          transitionProperty: ii[e].transitionProperty,
          ...o,
          ...ii[e].common,
          ...ii[e][Mf[t]]
        } : {} : {
          transitionProperty: e.transitionProperty,
          ...o,
          ...e.common,
          ...e[Mf[t]]
        };
      }
      function WS({ duration: e, exitDuration: t, timingFunction: n, mounted: r, onEnter: o, onExit: i, onEntered: s, onExited: l, enterDelay: a, exitDelay: u }) {
        const p = Qt(), d = i1(), m = p.respectReducedMotion ? d : false, [h, v] = b.useState(m ? 0 : e), [_, C] = b.useState(r ? "entered" : "exited"), g = b.useRef(-1), c = b.useRef(-1), f = b.useRef(-1), y = (S) => {
          const w = S ? o : i, k = S ? s : l;
          window.clearTimeout(g.current);
          const R = m ? 0 : S ? e : t;
          v(R), R === 0 ? (typeof w == "function" && w(), typeof k == "function" && k(), C(S ? "entered" : "exited")) : f.current = requestAnimationFrame(() => {
            qy.flushSync(() => {
              C(S ? "pre-entering" : "pre-exiting");
            }), f.current = requestAnimationFrame(() => {
              typeof w == "function" && w(), C(S ? "entering" : "exiting"), g.current = window.setTimeout(() => {
                typeof k == "function" && k(), C(S ? "entered" : "exited");
              }, R);
            });
          });
        }, x = (S) => {
          if (window.clearTimeout(c.current), typeof (S ? a : u) != "number") {
            y(S);
            return;
          }
          c.current = window.setTimeout(() => {
            y(S);
          }, S ? a : u);
        };
        return Yi(() => {
          x(r);
        }, [
          r
        ]), b.useEffect(() => () => {
          window.clearTimeout(g.current), cancelAnimationFrame(f.current);
        }, []), {
          transitionDuration: h,
          transitionStatus: _,
          transitionTimingFunction: n || "ease"
        };
      }
      function ks({ keepMounted: e, transition: t = "fade", duration: n = 250, exitDuration: r = n, mounted: o, children: i, timingFunction: s = "ease", onExit: l, onEntered: a, onEnter: u, onExited: p, enterDelay: d, exitDelay: m }) {
        const h = Sm(), { transitionDuration: v, transitionStatus: _, transitionTimingFunction: C } = WS({
          mounted: o,
          exitDuration: r,
          duration: n,
          timingFunction: s,
          onExit: l,
          onEntered: a,
          onEnter: u,
          onExited: p,
          enterDelay: d,
          exitDelay: m
        });
        return v === 0 || h === "test" ? o ? T.jsx(T.Fragment, {
          children: i({})
        }) : e ? i({
          display: "none"
        }) : null : _ === "exited" ? e ? i({
          display: "none"
        }) : null : T.jsx(T.Fragment, {
          children: i(US({
            transition: t,
            duration: v,
            state: _,
            timingFunction: C
          }))
        });
      }
      ks.displayName = "@mantine/core/Transition";
      function VS({ opened: e, floating: t, position: n, positionDependencies: r }) {
        const [o, i] = b.useState(0);
        b.useEffect(() => {
          if (t.refs.reference.current && t.refs.floating.current && e) return iS(t.refs.reference.current, t.refs.floating.current, t.update);
        }, [
          t.refs.reference.current,
          t.refs.floating.current,
          e,
          o,
          n
        ]), Yi(() => {
          t.update();
        }, r), Yi(() => {
          i((s) => s + 1);
        }, [
          e
        ]);
      }
      var mt = {
        root: "m_5ae2e3c",
        barsLoader: "m_7a2bd4cd",
        bar: "m_870bb79",
        "bars-loader-animation": "m_5d2b3b9d",
        dotsLoader: "m_4e3f22d7",
        dot: "m_870c4af",
        "loader-dots-animation": "m_aac34a1",
        ovalLoader: "m_b34414df",
        "oval-loader-animation": "m_f8e89c4b"
      };
      const tg = b.forwardRef(({ className: e, ...t }, n) => T.jsxs(oe, {
        component: "span",
        className: Kt(mt.barsLoader, e),
        ...t,
        ref: n,
        children: [
          T.jsx("span", {
            className: mt.bar
          }),
          T.jsx("span", {
            className: mt.bar
          }),
          T.jsx("span", {
            className: mt.bar
          })
        ]
      }));
      tg.displayName = "@mantine/core/Bars";
      const ng = b.forwardRef(({ className: e, ...t }, n) => T.jsxs(oe, {
        component: "span",
        className: Kt(mt.dotsLoader, e),
        ...t,
        ref: n,
        children: [
          T.jsx("span", {
            className: mt.dot
          }),
          T.jsx("span", {
            className: mt.dot
          }),
          T.jsx("span", {
            className: mt.dot
          })
        ]
      }));
      ng.displayName = "@mantine/core/Dots";
      const rg = b.forwardRef(({ className: e, ...t }, n) => T.jsx(oe, {
        component: "span",
        className: Kt(mt.ovalLoader, e),
        ...t,
        ref: n
      }));
      rg.displayName = "@mantine/core/Oval";
      const og = {
        bars: tg,
        oval: rg,
        dots: ng
      }, HS = {
        loaders: og,
        type: "oval"
      }, GS = (e, { size: t, color: n }) => ({
        root: {
          "--loader-size": Le(t, "loader-size"),
          "--loader-color": n ? Eo(n, e) : void 0
        }
      }), Lo = Ee((e, t) => {
        const n = q("Loader", HS, e), { size: r, color: o, type: i, vars: s, className: l, style: a, classNames: u, styles: p, unstyled: d, loaders: m, variant: h, children: v, ..._ } = n, C = we({
          name: "Loader",
          props: n,
          classes: mt,
          className: l,
          style: a,
          classNames: u,
          styles: p,
          unstyled: d,
          vars: s,
          varsResolver: GS
        });
        return v ? T.jsx(oe, {
          ...C("root"),
          ref: t,
          ..._,
          children: v
        }) : T.jsx(oe, {
          ...C("root"),
          ref: t,
          component: m[i],
          variant: h,
          size: r,
          ..._
        });
      });
      Lo.defaultLoaders = og;
      Lo.classes = mt;
      Lo.displayName = "@mantine/core/Loader";
      var kr = {
        root: "m_8d3f4000",
        icon: "m_8d3afb97",
        loader: "m_302b9fb1",
        group: "m_1a0f1b21",
        groupSection: "m_437b6484"
      };
      const Ff = {
        orientation: "horizontal"
      }, YS = (e, { borderWidth: t }) => ({
        group: {
          "--ai-border-width": I(t)
        }
      }), Bu = Ee((e, t) => {
        const n = q("ActionIconGroup", Ff, e), { className: r, style: o, classNames: i, styles: s, unstyled: l, orientation: a, vars: u, borderWidth: p, variant: d, mod: m, ...h } = q("ActionIconGroup", Ff, e), v = we({
          name: "ActionIconGroup",
          props: n,
          classes: kr,
          className: r,
          style: o,
          classNames: i,
          styles: s,
          unstyled: l,
          vars: u,
          varsResolver: YS,
          rootSelector: "group"
        });
        return T.jsx(oe, {
          ...v("group"),
          ref: t,
          variant: d,
          mod: [
            {
              "data-orientation": a
            },
            m
          ],
          role: "group",
          ...h
        });
      });
      Bu.classes = kr;
      Bu.displayName = "@mantine/core/ActionIconGroup";
      const jf = {}, KS = (e, { radius: t, color: n, gradient: r, variant: o, autoContrast: i, size: s }) => {
        const l = e.variantColorResolver({
          color: n || e.primaryColor,
          theme: e,
          gradient: r,
          variant: o || "filled",
          autoContrast: i
        });
        return {
          groupSection: {
            "--section-height": Le(s, "section-height"),
            "--section-padding-x": Le(s, "section-padding-x"),
            "--section-fz": rt(s),
            "--section-radius": t === void 0 ? void 0 : vn(t),
            "--section-bg": n || o ? l.background : void 0,
            "--section-color": l.color,
            "--section-bd": n || o ? l.border : void 0
          }
        };
      }, Uu = Ee((e, t) => {
        const n = q("ActionIconGroupSection", jf, e), { className: r, style: o, classNames: i, styles: s, unstyled: l, vars: a, variant: u, gradient: p, radius: d, autoContrast: m, ...h } = q("ActionIconGroupSection", jf, e), v = we({
          name: "ActionIconGroupSection",
          props: n,
          classes: kr,
          className: r,
          style: o,
          classNames: i,
          styles: s,
          unstyled: l,
          vars: a,
          varsResolver: KS,
          rootSelector: "groupSection"
        });
        return T.jsx(oe, {
          ...v("groupSection"),
          ref: t,
          variant: u,
          ...h
        });
      });
      Uu.classes = kr;
      Uu.displayName = "@mantine/core/ActionIconGroupSection";
      const QS = {}, XS = (e, { size: t, radius: n, variant: r, gradient: o, color: i, autoContrast: s }) => {
        const l = e.variantColorResolver({
          color: i || e.primaryColor,
          theme: e,
          gradient: o,
          variant: r || "filled",
          autoContrast: s
        });
        return {
          root: {
            "--ai-size": Le(t, "ai-size"),
            "--ai-radius": n === void 0 ? void 0 : vn(n),
            "--ai-bg": i || r ? l.background : void 0,
            "--ai-hover": i || r ? l.hover : void 0,
            "--ai-hover-color": i || r ? l.hoverColor : void 0,
            "--ai-color": l.color,
            "--ai-bd": i || r ? l.border : void 0
          }
        };
      }, $o = xr((e, t) => {
        const n = q("ActionIcon", QS, e), { className: r, unstyled: o, variant: i, classNames: s, styles: l, style: a, loading: u, loaderProps: p, size: d, color: m, radius: h, __staticSelector: v, gradient: _, vars: C, children: g, disabled: c, "data-disabled": f, autoContrast: y, mod: x, ...S } = n, w = we({
          name: [
            "ActionIcon",
            v
          ],
          props: n,
          className: r,
          style: a,
          classes: kr,
          classNames: s,
          styles: l,
          unstyled: o,
          vars: C,
          varsResolver: XS
        });
        return T.jsxs(Cr, {
          ...w("root", {
            active: !c && !u && !f
          }),
          ...S,
          unstyled: o,
          variant: i,
          size: d,
          disabled: c || u,
          ref: t,
          mod: [
            {
              loading: u,
              disabled: c || f
            },
            x
          ],
          children: [
            T.jsx(ks, {
              mounted: !!u,
              transition: "slide-down",
              duration: 150,
              children: (k) => T.jsx(oe, {
                component: "span",
                ...w("loader", {
                  style: k
                }),
                "aria-hidden": true,
                children: T.jsx(Lo, {
                  color: "var(--ai-color)",
                  size: "calc(var(--ai-size) * 0.55)",
                  ...p
                })
              })
            }),
            T.jsx(oe, {
              component: "span",
              mod: {
                loading: u
              },
              ...w("icon"),
              children: g
            })
          ]
        });
      });
      $o.classes = kr;
      $o.displayName = "@mantine/core/ActionIcon";
      $o.Group = Bu;
      $o.GroupSection = Uu;
      const ig = b.forwardRef(({ size: e = "var(--cb-icon-size, 70%)", style: t, ...n }, r) => T.jsx("svg", {
        viewBox: "0 0 15 15",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        style: {
          ...t,
          width: e,
          height: e
        },
        ref: r,
        ...n,
        children: T.jsx("path", {
          d: "M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",
          fill: "currentColor",
          fillRule: "evenodd",
          clipRule: "evenodd"
        })
      }));
      ig.displayName = "@mantine/core/CloseIcon";
      var sg = {
        root: "m_86a44da5",
        "root--subtle": "m_220c80f2"
      };
      const qS = {
        variant: "subtle"
      }, ZS = (e, { size: t, radius: n, iconSize: r }) => ({
        root: {
          "--cb-size": Le(t, "cb-size"),
          "--cb-radius": n === void 0 ? void 0 : vn(n),
          "--cb-icon-size": I(r)
        }
      }), Wu = xr((e, t) => {
        const n = q("CloseButton", qS, e), { iconSize: r, children: o, vars: i, radius: s, className: l, classNames: a, style: u, styles: p, unstyled: d, "data-disabled": m, disabled: h, variant: v, icon: _, mod: C, __staticSelector: g, ...c } = n, f = we({
          name: g || "CloseButton",
          props: n,
          className: l,
          style: u,
          classes: sg,
          classNames: a,
          styles: p,
          unstyled: d,
          vars: i,
          varsResolver: ZS
        });
        return T.jsxs(Cr, {
          ref: t,
          ...c,
          unstyled: d,
          variant: v,
          disabled: h,
          mod: [
            {
              disabled: h || m
            },
            C
          ],
          ...f("root", {
            variant: v,
            active: !h && !m
          }),
          children: [
            _ || T.jsx(ig, {}),
            o
          ]
        });
      });
      Wu.classes = sg;
      Wu.displayName = "@mantine/core/CloseButton";
      const [JS, ex] = gm({
        size: "sm"
      }), tx = {}, lg = Ee((e, t) => {
        const n = q("InputClearButton", tx, e), { size: r, variant: o, vars: i, classNames: s, styles: l, ...a } = n, u = ex(), { resolvedClassNames: p, resolvedStyles: d } = km({
          classNames: s,
          styles: l,
          props: n
        });
        return T.jsx(Wu, {
          variant: o || "transparent",
          ref: t,
          size: r || (u == null ? void 0 : u.size) || "sm",
          classNames: p,
          styles: d,
          __staticSelector: "InputClearButton",
          ...a
        });
      });
      lg.displayName = "@mantine/core/InputClearButton";
      const [nx, Rs] = gm({
        offsetBottom: false,
        offsetTop: false,
        describedBy: void 0,
        getStyles: null,
        inputId: void 0,
        labelId: void 0
      });
      var lt = {
        wrapper: "m_6c018570",
        input: "m_8fb7ebe7",
        section: "m_82577fc2",
        placeholder: "m_88bacfd0",
        root: "m_46b77525",
        label: "m_8fdc1311",
        required: "m_78a94662",
        error: "m_8f816625",
        description: "m_fe47ce59"
      };
      const zf = {}, rx = (e, { size: t }) => ({
        description: {
          "--input-description-size": t === void 0 ? void 0 : `calc(${rt(t)} - ${I(2)})`
        }
      }), Ts = Ee((e, t) => {
        const n = q("InputDescription", zf, e), { classNames: r, className: o, style: i, styles: s, unstyled: l, vars: a, size: u, __staticSelector: p, __inheritStyles: d = true, variant: m, ...h } = q("InputDescription", zf, n), v = Rs(), _ = we({
          name: [
            "InputWrapper",
            p
          ],
          props: n,
          classes: lt,
          className: o,
          style: i,
          classNames: r,
          styles: s,
          unstyled: l,
          rootSelector: "description",
          vars: a,
          varsResolver: rx
        }), C = d && (v == null ? void 0 : v.getStyles) || _;
        return T.jsx(oe, {
          component: "p",
          ref: t,
          variant: m,
          size: u,
          ...C("description", (v == null ? void 0 : v.getStyles) ? {
            className: o,
            style: i
          } : void 0),
          ...h
        });
      });
      Ts.classes = lt;
      Ts.displayName = "@mantine/core/InputDescription";
      const ox = {}, ix = (e, { size: t }) => ({
        error: {
          "--input-error-size": t === void 0 ? void 0 : `calc(${rt(t)} - ${I(2)})`
        }
      }), Ns = Ee((e, t) => {
        const n = q("InputError", ox, e), { classNames: r, className: o, style: i, styles: s, unstyled: l, vars: a, size: u, __staticSelector: p, __inheritStyles: d = true, variant: m, ...h } = n, v = we({
          name: [
            "InputWrapper",
            p
          ],
          props: n,
          classes: lt,
          className: o,
          style: i,
          classNames: r,
          styles: s,
          unstyled: l,
          rootSelector: "error",
          vars: a,
          varsResolver: ix
        }), _ = Rs(), C = d && (_ == null ? void 0 : _.getStyles) || v;
        return T.jsx(oe, {
          component: "p",
          ref: t,
          variant: m,
          size: u,
          ...C("error", (_ == null ? void 0 : _.getStyles) ? {
            className: o,
            style: i
          } : void 0),
          ...h
        });
      });
      Ns.classes = lt;
      Ns.displayName = "@mantine/core/InputError";
      const Bf = {
        labelElement: "label"
      }, sx = (e, { size: t }) => ({
        label: {
          "--input-label-size": rt(t),
          "--input-asterisk-color": void 0
        }
      }), Ps = Ee((e, t) => {
        const n = q("InputLabel", Bf, e), { classNames: r, className: o, style: i, styles: s, unstyled: l, vars: a, labelElement: u, size: p, required: d, htmlFor: m, onMouseDown: h, children: v, __staticSelector: _, variant: C, mod: g, ...c } = q("InputLabel", Bf, n), f = we({
          name: [
            "InputWrapper",
            _
          ],
          props: n,
          classes: lt,
          className: o,
          style: i,
          classNames: r,
          styles: s,
          unstyled: l,
          rootSelector: "label",
          vars: a,
          varsResolver: sx
        }), y = Rs(), x = (y == null ? void 0 : y.getStyles) || f;
        return T.jsxs(oe, {
          ...x("label", (y == null ? void 0 : y.getStyles) ? {
            className: o,
            style: i
          } : void 0),
          component: u,
          variant: C,
          size: p,
          ref: t,
          htmlFor: u === "label" ? m : void 0,
          mod: [
            {
              required: d
            },
            g
          ],
          onMouseDown: (S) => {
            h == null ? void 0 : h(S), !S.defaultPrevented && S.detail > 1 && S.preventDefault();
          },
          ...c,
          children: [
            v,
            d && T.jsx("span", {
              ...x("required"),
              "aria-hidden": true,
              children: " *"
            })
          ]
        });
      });
      Ps.classes = lt;
      Ps.displayName = "@mantine/core/InputLabel";
      const Uf = {}, Vu = Ee((e, t) => {
        const n = q("InputPlaceholder", Uf, e), { classNames: r, className: o, style: i, styles: s, unstyled: l, vars: a, __staticSelector: u, variant: p, error: d, mod: m, ...h } = q("InputPlaceholder", Uf, n), v = we({
          name: [
            "InputPlaceholder",
            u
          ],
          props: n,
          classes: lt,
          className: o,
          style: i,
          classNames: r,
          styles: s,
          unstyled: l,
          rootSelector: "placeholder"
        });
        return T.jsx(oe, {
          ...v("placeholder"),
          mod: [
            {
              error: !!d
            },
            m
          ],
          component: "span",
          variant: p,
          ref: t,
          ...h
        });
      });
      Vu.classes = lt;
      Vu.displayName = "@mantine/core/InputPlaceholder";
      function lx(e, { hasDescription: t, hasError: n }) {
        const r = e.findIndex((a) => a === "input"), o = e.slice(0, r), i = e.slice(r + 1), s = t && o.includes("description") || n && o.includes("error");
        return {
          offsetBottom: t && i.includes("description") || n && i.includes("error"),
          offsetTop: s
        };
      }
      const ax = {
        labelElement: "label",
        inputContainer: (e) => e,
        inputWrapperOrder: [
          "label",
          "description",
          "input",
          "error"
        ]
      }, ux = (e, { size: t }) => ({
        label: {
          "--input-label-size": rt(t),
          "--input-asterisk-color": void 0
        },
        error: {
          "--input-error-size": t === void 0 ? void 0 : `calc(${rt(t)} - ${I(2)})`
        },
        description: {
          "--input-description-size": t === void 0 ? void 0 : `calc(${rt(t)} - ${I(2)})`
        }
      }), Hu = Ee((e, t) => {
        const n = q("InputWrapper", ax, e), { classNames: r, className: o, style: i, styles: s, unstyled: l, vars: a, size: u, variant: p, __staticSelector: d, inputContainer: m, inputWrapperOrder: h, label: v, error: _, description: C, labelProps: g, descriptionProps: c, errorProps: f, labelElement: y, children: x, withAsterisk: S, id: w, required: k, __stylesApiProps: R, mod: N, ...A } = n, L = we({
          name: [
            "InputWrapper",
            d
          ],
          props: R || n,
          classes: lt,
          className: o,
          style: i,
          classNames: r,
          styles: s,
          unstyled: l,
          vars: a,
          varsResolver: ux
        }), z = {
          size: u,
          variant: p,
          __staticSelector: d
        }, j = Cu(w), B = typeof S == "boolean" ? S : k, W = (f == null ? void 0 : f.id) || `${j}-error`, O = (c == null ? void 0 : c.id) || `${j}-description`, E = j, P = !!_ && typeof _ != "boolean", $ = !!C, M = `${P ? W : ""} ${$ ? O : ""}`, V = M.trim().length > 0 ? M.trim() : void 0, ne = (g == null ? void 0 : g.id) || `${j}-label`, Z = v && T.jsx(Ps, {
          labelElement: y,
          id: ne,
          htmlFor: E,
          required: B,
          ...z,
          ...g,
          children: v
        }, "label"), te = $ && T.jsx(Ts, {
          ...c,
          ...z,
          size: (c == null ? void 0 : c.size) || z.size,
          id: (c == null ? void 0 : c.id) || O,
          children: C
        }, "description"), K = T.jsx(b.Fragment, {
          children: m(x)
        }, "input"), J = P && b.createElement(Ns, {
          ...f,
          ...z,
          size: (f == null ? void 0 : f.size) || z.size,
          key: "error",
          id: (f == null ? void 0 : f.id) || W
        }, _), ye = h.map((De) => {
          switch (De) {
            case "label":
              return Z;
            case "input":
              return K;
            case "description":
              return te;
            case "error":
              return J;
            default:
              return null;
          }
        });
        return T.jsx(nx, {
          value: {
            getStyles: L,
            describedBy: V,
            inputId: E,
            labelId: ne,
            ...lx(h, {
              hasDescription: $,
              hasError: P
            })
          },
          children: T.jsx(oe, {
            ref: t,
            variant: p,
            size: u,
            mod: [
              {
                error: !!_
              },
              N
            ],
            ...L("root"),
            ...A,
            children: ye
          })
        });
      });
      Hu.classes = lt;
      Hu.displayName = "@mantine/core/InputWrapper";
      const cx = {
        variant: "default",
        leftSectionPointerEvents: "none",
        rightSectionPointerEvents: "none",
        withAria: true,
        withErrorStyles: true
      }, fx = (e, t, n) => ({
        wrapper: {
          "--input-margin-top": n.offsetTop ? "calc(var(--mantine-spacing-xs) / 2)" : void 0,
          "--input-margin-bottom": n.offsetBottom ? "calc(var(--mantine-spacing-xs) / 2)" : void 0,
          "--input-height": Le(t.size, "input-height"),
          "--input-fz": rt(t.size),
          "--input-radius": t.radius === void 0 ? void 0 : vn(t.radius),
          "--input-left-section-width": t.leftSectionWidth !== void 0 ? I(t.leftSectionWidth) : void 0,
          "--input-right-section-width": t.rightSectionWidth !== void 0 ? I(t.rightSectionWidth) : void 0,
          "--input-padding-y": t.multiline ? Le(t.size, "input-padding-y") : void 0,
          "--input-left-section-pointer-events": t.leftSectionPointerEvents,
          "--input-right-section-pointer-events": t.rightSectionPointerEvents
        }
      }), We = xr((e, t) => {
        const n = q("Input", cx, e), { classNames: r, className: o, style: i, styles: s, unstyled: l, required: a, __staticSelector: u, __stylesApiProps: p, size: d, wrapperProps: m, error: h, disabled: v, leftSection: _, leftSectionProps: C, leftSectionWidth: g, rightSection: c, rightSectionProps: f, rightSectionWidth: y, rightSectionPointerEvents: x, leftSectionPointerEvents: S, variant: w, vars: k, pointer: R, multiline: N, radius: A, id: L, withAria: z, withErrorStyles: j, mod: B, inputSize: W, __clearSection: O, __clearable: E, __defaultRightSection: P, ...$ } = n, { styleProps: M, rest: V } = Ss($), ne = Rs(), Z = {
          offsetBottom: ne == null ? void 0 : ne.offsetBottom,
          offsetTop: ne == null ? void 0 : ne.offsetTop
        }, te = we({
          name: [
            "Input",
            u
          ],
          props: p || n,
          classes: lt,
          className: o,
          style: i,
          classNames: r,
          styles: s,
          unstyled: l,
          stylesCtx: Z,
          rootSelector: "wrapper",
          vars: k,
          varsResolver: fx
        }), K = z ? {
          required: a,
          disabled: v,
          "aria-invalid": !!h,
          "aria-describedby": ne == null ? void 0 : ne.describedBy,
          id: (ne == null ? void 0 : ne.inputId) || L
        } : {}, J = c || E && O || P;
        return T.jsx(JS, {
          value: {
            size: d || "sm"
          },
          children: T.jsxs(oe, {
            ...te("wrapper"),
            ...M,
            ...m,
            mod: [
              {
                error: !!h && j,
                pointer: R,
                disabled: v,
                multiline: N,
                "data-with-right-section": !!J,
                "data-with-left-section": !!_
              },
              B
            ],
            variant: w,
            size: d,
            children: [
              _ && T.jsx("div", {
                ...C,
                "data-position": "left",
                ...te("section", {
                  className: C == null ? void 0 : C.className,
                  style: C == null ? void 0 : C.style
                }),
                children: _
              }),
              T.jsx(oe, {
                component: "input",
                ...V,
                ...K,
                ref: t,
                required: a,
                mod: {
                  disabled: v,
                  error: !!h && j
                },
                variant: w,
                __size: W,
                ...te("input")
              }),
              J && T.jsx("div", {
                ...f,
                "data-position": "right",
                ...te("section", {
                  className: f == null ? void 0 : f.className,
                  style: f == null ? void 0 : f.style
                }),
                children: J
              })
            ]
          })
        });
      });
      We.classes = lt;
      We.Wrapper = Hu;
      We.Label = Ps;
      We.Error = Ns;
      We.Description = Ts;
      We.Placeholder = Vu;
      We.ClearButton = lg;
      We.displayName = "@mantine/core/Input";
      function dx(e, t, n) {
        const r = q(e, t, n), { label: o, description: i, error: s, required: l, classNames: a, styles: u, className: p, unstyled: d, __staticSelector: m, __stylesApiProps: h, errorProps: v, labelProps: _, descriptionProps: C, wrapperProps: g, id: c, size: f, style: y, inputContainer: x, inputWrapperOrder: S, withAsterisk: w, variant: k, vars: R, mod: N, ...A } = r, { styleProps: L, rest: z } = Ss(A), j = {
          label: o,
          description: i,
          error: s,
          required: l,
          classNames: a,
          className: p,
          __staticSelector: m,
          __stylesApiProps: h || r,
          errorProps: v,
          labelProps: _,
          descriptionProps: C,
          unstyled: d,
          styles: u,
          size: f,
          style: y,
          inputContainer: x,
          inputWrapperOrder: S,
          withAsterisk: w,
          variant: k,
          id: c,
          mod: N,
          ...g
        };
        return {
          ...z,
          classNames: a,
          styles: u,
          unstyled: d,
          wrapperProps: {
            ...j,
            ...L
          },
          inputProps: {
            required: l,
            classNames: a,
            styles: u,
            unstyled: d,
            size: f,
            __staticSelector: m,
            __stylesApiProps: h || r,
            error: s,
            variant: k,
            id: c
          }
        };
      }
      const px = {
        __staticSelector: "InputBase",
        withAria: true
      }, Oo = xr((e, t) => {
        const { inputProps: n, wrapperProps: r, ...o } = dx("InputBase", px, e);
        return T.jsx(We.Wrapper, {
          ...r,
          children: T.jsx(We, {
            ...n,
            ...o,
            ref: t
          })
        });
      });
      Oo.classes = {
        ...We.classes,
        ...We.Wrapper.classes
      };
      Oo.displayName = "@mantine/core/InputBase";
      var Rr = {
        root: "m_77c9d27d",
        inner: "m_80f1301b",
        label: "m_811560b9",
        section: "m_a74036a",
        loader: "m_a25b86ee",
        group: "m_80d6d844",
        groupSection: "m_70be2a01"
      };
      const Wf = {
        orientation: "horizontal"
      }, mx = (e, { borderWidth: t }) => ({
        group: {
          "--button-border-width": I(t)
        }
      }), Gu = Ee((e, t) => {
        const n = q("ButtonGroup", Wf, e), { className: r, style: o, classNames: i, styles: s, unstyled: l, orientation: a, vars: u, borderWidth: p, variant: d, mod: m, ...h } = q("ButtonGroup", Wf, e), v = we({
          name: "ButtonGroup",
          props: n,
          classes: Rr,
          className: r,
          style: o,
          classNames: i,
          styles: s,
          unstyled: l,
          vars: u,
          varsResolver: mx,
          rootSelector: "group"
        });
        return T.jsx(oe, {
          ...v("group"),
          ref: t,
          variant: d,
          mod: [
            {
              "data-orientation": a
            },
            m
          ],
          role: "group",
          ...h
        });
      });
      Gu.classes = Rr;
      Gu.displayName = "@mantine/core/ButtonGroup";
      const Vf = {}, gx = (e, { radius: t, color: n, gradient: r, variant: o, autoContrast: i, size: s }) => {
        const l = e.variantColorResolver({
          color: n || e.primaryColor,
          theme: e,
          gradient: r,
          variant: o || "filled",
          autoContrast: i
        });
        return {
          groupSection: {
            "--section-height": Le(s, "section-height"),
            "--section-padding-x": Le(s, "section-padding-x"),
            "--section-fz": (s == null ? void 0 : s.includes("compact")) ? rt(s.replace("compact-", "")) : rt(s),
            "--section-radius": t === void 0 ? void 0 : vn(t),
            "--section-bg": n || o ? l.background : void 0,
            "--section-color": l.color,
            "--section-bd": n || o ? l.border : void 0
          }
        };
      }, Yu = Ee((e, t) => {
        const n = q("ButtonGroupSection", Vf, e), { className: r, style: o, classNames: i, styles: s, unstyled: l, vars: a, variant: u, gradient: p, radius: d, autoContrast: m, ...h } = q("ButtonGroupSection", Vf, e), v = we({
          name: "ButtonGroupSection",
          props: n,
          classes: Rr,
          className: r,
          style: o,
          classNames: i,
          styles: s,
          unstyled: l,
          vars: a,
          varsResolver: gx,
          rootSelector: "groupSection"
        });
        return T.jsx(oe, {
          ...v("groupSection"),
          ref: t,
          variant: u,
          ...h
        });
      });
      Yu.classes = Rr;
      Yu.displayName = "@mantine/core/ButtonGroupSection";
      const hx = {
        in: {
          opacity: 1,
          transform: `translate(-50%, calc(-50% + ${I(1)}))`
        },
        out: {
          opacity: 0,
          transform: "translate(-50%, -200%)"
        },
        common: {
          transformOrigin: "center"
        },
        transitionProperty: "transform, opacity"
      }, yx = {}, vx = (e, { radius: t, color: n, gradient: r, variant: o, size: i, justify: s, autoContrast: l }) => {
        const a = e.variantColorResolver({
          color: n || e.primaryColor,
          theme: e,
          gradient: r,
          variant: o || "filled",
          autoContrast: l
        });
        return {
          root: {
            "--button-justify": s,
            "--button-height": Le(i, "button-height"),
            "--button-padding-x": Le(i, "button-padding-x"),
            "--button-fz": (i == null ? void 0 : i.includes("compact")) ? rt(i.replace("compact-", "")) : rt(i),
            "--button-radius": t === void 0 ? void 0 : vn(t),
            "--button-bg": n || o ? a.background : void 0,
            "--button-hover": n || o ? a.hover : void 0,
            "--button-color": a.color,
            "--button-bd": n || o ? a.border : void 0,
            "--button-hover-color": n || o ? a.hoverColor : void 0
          }
        };
      }, Do = xr((e, t) => {
        const n = q("Button", yx, e), { style: r, vars: o, className: i, color: s, disabled: l, children: a, leftSection: u, rightSection: p, fullWidth: d, variant: m, radius: h, loading: v, loaderProps: _, gradient: C, classNames: g, styles: c, unstyled: f, "data-disabled": y, autoContrast: x, mod: S, ...w } = n, k = we({
          name: "Button",
          props: n,
          classes: Rr,
          className: i,
          style: r,
          classNames: g,
          styles: c,
          unstyled: f,
          vars: o,
          varsResolver: vx
        }), R = !!u, N = !!p;
        return T.jsxs(Cr, {
          ref: t,
          ...k("root", {
            active: !l && !v && !y
          }),
          unstyled: f,
          variant: m,
          disabled: l || v,
          mod: [
            {
              disabled: l || y,
              loading: v,
              block: d,
              "with-left-section": R,
              "with-right-section": N
            },
            S
          ],
          ...w,
          children: [
            T.jsx(ks, {
              mounted: !!v,
              transition: hx,
              duration: 150,
              children: (A) => T.jsx(oe, {
                component: "span",
                ...k("loader", {
                  style: A
                }),
                "aria-hidden": true,
                children: T.jsx(Lo, {
                  color: "var(--button-color)",
                  size: "calc(var(--button-height) / 1.8)",
                  ..._
                })
              })
            }),
            T.jsxs("span", {
              ...k("inner"),
              children: [
                u && T.jsx(oe, {
                  component: "span",
                  ...k("section"),
                  mod: {
                    position: "left"
                  },
                  children: u
                }),
                T.jsx(oe, {
                  component: "span",
                  mod: {
                    loading: v
                  },
                  ...k("label"),
                  children: a
                }),
                p && T.jsx(oe, {
                  component: "span",
                  ...k("section"),
                  mod: {
                    position: "right"
                  },
                  children: p
                })
              ]
            })
          ]
        });
      });
      Do.classes = Rr;
      Do.displayName = "@mantine/core/Button";
      Do.Group = Gu;
      Do.GroupSection = Yu;
      const _x = ({ reveal: e }) => T.jsx("svg", {
        viewBox: "0 0 15 15",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        style: {
          width: "var(--psi-icon-size)",
          height: "var(--psi-icon-size)"
        },
        children: T.jsx("path", {
          d: e ? "M13.3536 2.35355C13.5488 2.15829 13.5488 1.84171 13.3536 1.64645C13.1583 1.45118 12.8417 1.45118 12.6464 1.64645L10.6828 3.61012C9.70652 3.21671 8.63759 3 7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C0.902945 9.08812 2.02314 10.1861 3.36061 10.9323L1.64645 12.6464C1.45118 12.8417 1.45118 13.1583 1.64645 13.3536C1.84171 13.5488 2.15829 13.5488 2.35355 13.3536L4.31723 11.3899C5.29348 11.7833 6.36241 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C14.0971 5.9119 12.9769 4.81391 11.6394 4.06771L13.3536 2.35355ZM9.90428 4.38861C9.15332 4.1361 8.34759 4 7.5 4C4.80285 4 2.52952 5.37816 1.09622 7.50001C1.87284 8.6497 2.89609 9.58106 4.09974 10.1931L9.90428 4.38861ZM5.09572 10.6114L10.9003 4.80685C12.1039 5.41894 13.1272 6.35031 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11C6.65241 11 5.84668 10.8639 5.09572 10.6114Z" : "M7.5 11C4.80285 11 2.52952 9.62184 1.09622 7.50001C2.52952 5.37816 4.80285 4 7.5 4C10.1971 4 12.4705 5.37816 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11ZM7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C1.65639 10.2936 4.30786 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C13.3436 4.70638 10.6921 3 7.5 3ZM7.5 9.5C8.60457 9.5 9.5 8.60457 9.5 7.5C9.5 6.39543 8.60457 5.5 7.5 5.5C6.39543 5.5 5.5 6.39543 5.5 7.5C5.5 8.60457 6.39543 9.5 7.5 9.5Z",
          fill: "currentColor",
          fillRule: "evenodd",
          clipRule: "evenodd"
        })
      });
      var Ra = {
        root: "m_f61ca620",
        input: "m_ccf8da4c",
        innerInput: "m_f2d85dd2",
        visibilityToggle: "m_b1072d44"
      };
      const wx = {
        visibilityToggleIcon: _x
      }, Sx = (e, { size: t }) => ({
        root: {
          "--psi-icon-size": Le(t, "psi-icon-size"),
          "--psi-button-size": Le(t, "psi-button-size")
        }
      }), Ku = Ee((e, t) => {
        const n = q("PasswordInput", wx, e), { classNames: r, className: o, style: i, styles: s, unstyled: l, vars: a, required: u, error: p, leftSection: d, disabled: m, id: h, variant: v, inputContainer: _, description: C, label: g, size: c, errorProps: f, descriptionProps: y, labelProps: x, withAsterisk: S, inputWrapperOrder: w, wrapperProps: k, radius: R, rightSection: N, rightSectionWidth: A, rightSectionPointerEvents: L, leftSectionWidth: z, visible: j, defaultVisible: B, onVisibilityChange: W, visibilityToggleIcon: O, visibilityToggleButtonProps: E, rightSectionProps: P, leftSectionProps: $, leftSectionPointerEvents: M, withErrorStyles: V, mod: ne, ...Z } = n, te = Cu(h), [K, J] = o1({
          value: j,
          defaultValue: B,
          finalValue: false,
          onChange: W
        }), ye = () => J(!K), De = we({
          name: "PasswordInput",
          classes: Ra,
          props: n,
          className: o,
          style: i,
          classNames: r,
          styles: s,
          unstyled: l,
          vars: a,
          varsResolver: Sx
        }), { resolvedClassNames: me, resolvedStyles: Ve } = km({
          classNames: r,
          styles: s,
          props: n
        }), { styleProps: wn, rest: at } = Ss(Z), Fn = O, Nr = T.jsx($o, {
          ...De("visibilityToggle"),
          disabled: m,
          radius: R,
          "aria-hidden": !E,
          tabIndex: -1,
          ...E,
          variant: (E == null ? void 0 : E.variant) ?? "subtle",
          color: "gray",
          unstyled: l,
          onTouchEnd: (ut) => {
            var _a2;
            ut.preventDefault(), (_a2 = E == null ? void 0 : E.onTouchEnd) == null ? void 0 : _a2.call(E, ut), ye();
          },
          onMouseDown: (ut) => {
            var _a2;
            ut.preventDefault(), (_a2 = E == null ? void 0 : E.onMouseDown) == null ? void 0 : _a2.call(E, ut), ye();
          },
          onKeyDown: (ut) => {
            var _a2;
            (_a2 = E == null ? void 0 : E.onKeyDown) == null ? void 0 : _a2.call(E, ut), ut.key === " " && (ut.preventDefault(), ye());
          },
          children: T.jsx(Fn, {
            reveal: K
          })
        });
        return T.jsx(We.Wrapper, {
          required: u,
          id: te,
          label: g,
          error: p,
          description: C,
          size: c,
          classNames: me,
          styles: Ve,
          __staticSelector: "PasswordInput",
          errorProps: f,
          descriptionProps: y,
          unstyled: l,
          withAsterisk: S,
          inputWrapperOrder: w,
          inputContainer: _,
          variant: v,
          labelProps: {
            ...x,
            htmlFor: te
          },
          mod: ne,
          ...De("root"),
          ...wn,
          ...k,
          children: T.jsx(We, {
            component: "div",
            error: p,
            leftSection: d,
            size: c,
            classNames: {
              ...me,
              input: Kt(Ra.input, me.input)
            },
            styles: Ve,
            radius: R,
            disabled: m,
            __staticSelector: "PasswordInput",
            rightSectionWidth: A,
            rightSection: N ?? Nr,
            variant: v,
            unstyled: l,
            leftSectionWidth: z,
            rightSectionPointerEvents: L || "all",
            rightSectionProps: P,
            leftSectionProps: $,
            leftSectionPointerEvents: M,
            withAria: false,
            withErrorStyles: V,
            children: T.jsx("input", {
              required: u,
              "data-invalid": !!p || void 0,
              "data-with-left-section": !!d || void 0,
              ...De("innerInput"),
              disabled: m,
              id: te,
              ref: t,
              ...at,
              autoComplete: at.autoComplete || "off",
              type: K ? "text" : "password"
            })
          })
        });
      });
      Ku.classes = {
        ...Oo.classes,
        ...Ra
      };
      Ku.displayName = "@mantine/core/PasswordInput";
      const xx = {
        duration: 100,
        transition: "fade"
      };
      function Ex(e, t) {
        return {
          ...xx,
          ...t,
          ...e
        };
      }
      function bx({ offset: e, position: t, defaultOpened: n }) {
        const [r, o] = b.useState(n), i = b.useRef(null), { x: s, y: l, elements: a, refs: u, update: p, placement: d } = qm({
          placement: t,
          middleware: [
            Ym({
              crossAxis: true,
              padding: 5,
              rootBoundary: "document"
            })
          ]
        }), m = d.includes("right") ? e : t.includes("left") ? e * -1 : 0, h = d.includes("bottom") ? e : t.includes("top") ? e * -1 : 0, v = b.useCallback(({ clientX: _, clientY: C }) => {
          u.setPositionReference({
            getBoundingClientRect() {
              return {
                width: 0,
                height: 0,
                x: _,
                y: C,
                left: _ + m,
                top: C + h,
                right: _,
                bottom: C
              };
            }
          });
        }, [
          a.reference
        ]);
        return b.useEffect(() => {
          if (u.floating.current) {
            const _ = i.current;
            _.addEventListener("mousemove", v);
            const C = jt(u.floating.current);
            return C.forEach((g) => {
              g.addEventListener("scroll", p);
            }), () => {
              _.removeEventListener("mousemove", v), C.forEach((g) => {
                g.removeEventListener("scroll", p);
              });
            };
          }
        }, [
          a.reference,
          u.floating.current,
          p,
          v,
          r
        ]), {
          handleMouseMove: v,
          x: s,
          y: l,
          opened: r,
          setOpened: o,
          boundaryRef: i,
          floating: u.setFloating
        };
      }
      var As = {
        tooltip: "m_1b3c8819",
        arrow: "m_f898399f"
      };
      const Cx = {
        refProp: "ref",
        withinPortal: true,
        offset: 10,
        defaultOpened: false,
        position: "right",
        zIndex: hm("popover")
      }, kx = (e, { radius: t, color: n }) => ({
        tooltip: {
          "--tooltip-radius": t === void 0 ? void 0 : vn(t),
          "--tooltip-bg": n ? Eo(n, e) : void 0,
          "--tooltip-color": n ? "var(--mantine-color-white)" : void 0
        }
      }), Qu = Ee((e, t) => {
        const n = q("TooltipFloating", Cx, e), { children: r, refProp: o, withinPortal: i, style: s, className: l, classNames: a, styles: u, unstyled: p, radius: d, color: m, label: h, offset: v, position: _, multiline: C, zIndex: g, disabled: c, defaultOpened: f, variant: y, vars: x, portalProps: S, ...w } = n, k = Qt(), R = we({
          name: "TooltipFloating",
          props: n,
          classes: As,
          className: l,
          style: s,
          classNames: a,
          styles: u,
          unstyled: p,
          rootSelector: "tooltip",
          vars: x,
          varsResolver: kx
        }), { handleMouseMove: N, x: A, y: L, opened: z, boundaryRef: j, floating: B, setOpened: W } = bx({
          offset: v,
          position: _,
          defaultOpened: f
        });
        if (!mm(r)) throw new Error("[@mantine/core] Tooltip.Floating component children should be an element or a component that accepts ref, fragments, strings, numbers and other primitive values are not supported");
        const O = ym(j, vm(r), t), E = r.props, P = (M) => {
          var _a2;
          (_a2 = E.onMouseEnter) == null ? void 0 : _a2.call(E, M), N(M), W(true);
        }, $ = (M) => {
          var _a2;
          (_a2 = E.onMouseLeave) == null ? void 0 : _a2.call(E, M), W(false);
        };
        return T.jsxs(T.Fragment, {
          children: [
            T.jsx(zu, {
              ...S,
              withinPortal: i,
              children: T.jsx(oe, {
                ...w,
                ...R("tooltip", {
                  style: {
                    ...Rm(s, k),
                    zIndex: g,
                    display: !c && z ? "block" : "none",
                    top: (L && Math.round(L)) ?? "",
                    left: (A && Math.round(A)) ?? ""
                  }
                }),
                variant: y,
                ref: B,
                mod: {
                  multiline: C
                },
                children: h
              })
            }),
            b.cloneElement(r, {
              ...E,
              [o]: O,
              onMouseEnter: P,
              onMouseLeave: $
            })
          ]
        });
      });
      Qu.classes = As;
      Qu.displayName = "@mantine/core/TooltipFloating";
      const ag = b.createContext(false), Rx = ag.Provider, Tx = () => b.useContext(ag), Nx = {
        openDelay: 0,
        closeDelay: 0
      };
      function Xu(e) {
        const { openDelay: t, closeDelay: n, children: r } = q("TooltipGroup", Nx, e);
        return T.jsx(Rx, {
          value: true,
          children: T.jsx(CS, {
            delay: {
              open: t,
              close: n
            },
            children: r
          })
        });
      }
      Xu.displayName = "@mantine/core/TooltipGroup";
      Xu.extend = (e) => e;
      function Px(e) {
        if (e === void 0) return {
          shift: true,
          flip: true
        };
        const t = {
          ...e
        };
        return e.shift === void 0 && (t.shift = true), e.flip === void 0 && (t.flip = true), t;
      }
      function Ax(e) {
        const t = Px(e.middlewares), n = [
          pS(e.offset)
        ];
        return t.shift && n.push(Ym(typeof t.shift == "boolean" ? {
          padding: 8
        } : {
          padding: 8,
          ...t.shift
        })), t.flip && n.push(typeof t.flip == "boolean" ? Tf() : Tf(t.flip)), n.push(mS({
          element: e.arrowRef,
          padding: e.arrowOffset
        })), t.inline ? n.push(typeof t.inline == "boolean" ? gl() : gl(t.inline)) : e.inline && n.push(gl()), n;
      }
      function Ix(e) {
        var _a2, _b, _c2;
        const [t, n] = b.useState(e.defaultOpened), o = typeof e.opened == "boolean" ? e.opened : t, i = Tx(), s = Cu(), l = b.useCallback((S) => {
          n(S), S && c(s);
        }, [
          s
        ]), { x: a, y: u, context: p, refs: d, update: m, placement: h, middlewareData: { arrow: { x: v, y: _ } = {} } } = qm({
          strategy: e.strategy,
          placement: e.position,
          open: o,
          onOpenChange: l,
          middleware: Ax(e)
        }), { delay: C, currentId: g, setCurrentId: c } = kS(p, {
          id: s
        }), { getReferenceProps: f, getFloatingProps: y } = LS([
          ES(p, {
            enabled: (_a2 = e.events) == null ? void 0 : _a2.hover,
            delay: i ? C : {
              open: e.openDelay,
              close: e.closeDelay
            },
            mouseOnly: !((_b = e.events) == null ? void 0 : _b.touch)
          }),
          IS(p, {
            enabled: (_c2 = e.events) == null ? void 0 : _c2.focus,
            visibleOnly: true
          }),
          OS(p, {
            role: "tooltip"
          }),
          PS(p, {
            enabled: typeof e.opened > "u"
          })
        ]);
        VS({
          opened: o,
          position: e.position,
          positionDependencies: e.positionDependencies,
          floating: {
            refs: d,
            update: m
          }
        }), Yi(() => {
          var _a3;
          (_a3 = e.onPositionChange) == null ? void 0 : _a3.call(e, h);
        }, [
          h
        ]);
        const x = o && g && g !== s;
        return {
          x: a,
          y: u,
          arrowX: v,
          arrowY: _,
          reference: d.setReference,
          floating: d.setFloating,
          getFloatingProps: y,
          getReferenceProps: f,
          isGroupPhase: x,
          opened: o,
          placement: h
        };
      }
      const Hf = {
        position: "top",
        refProp: "ref",
        withinPortal: true,
        inline: false,
        defaultOpened: false,
        arrowSize: 4,
        arrowOffset: 5,
        arrowRadius: 0,
        arrowPosition: "side",
        offset: 5,
        transitionProps: {
          duration: 100,
          transition: "fade"
        },
        events: {
          hover: true,
          focus: false,
          touch: false
        },
        zIndex: hm("popover"),
        positionDependencies: [],
        middlewares: {
          flip: true,
          shift: true,
          inline: false
        }
      }, Lx = (e, { radius: t, color: n }) => ({
        tooltip: {
          "--tooltip-radius": t === void 0 ? void 0 : vn(t),
          "--tooltip-bg": n ? Eo(n, e) : void 0,
          "--tooltip-color": n ? "var(--mantine-color-white)" : void 0
        }
      }), Tr = Ee((e, t) => {
        const n = q("Tooltip", Hf, e), { children: r, position: o, refProp: i, label: s, openDelay: l, closeDelay: a, onPositionChange: u, opened: p, defaultOpened: d, withinPortal: m, radius: h, color: v, classNames: _, styles: C, unstyled: g, style: c, className: f, withArrow: y, arrowSize: x, arrowOffset: S, arrowRadius: w, arrowPosition: k, offset: R, transitionProps: N, multiline: A, events: L, zIndex: z, disabled: j, positionDependencies: B, onClick: W, onMouseEnter: O, onMouseLeave: E, inline: P, variant: $, keepMounted: M, vars: V, portalProps: ne, mod: Z, floatingStrategy: te, middlewares: K, ...J } = q("Tooltip", Hf, n), { dir: ye } = Im(), De = b.useRef(null), me = Ix({
          position: MS(ye, o),
          closeDelay: a,
          openDelay: l,
          onPositionChange: u,
          opened: p,
          defaultOpened: d,
          events: L,
          arrowRef: De,
          arrowOffset: S,
          offset: typeof R == "number" ? R + (y ? x / 2 : 0) : R,
          positionDependencies: [
            ...B,
            r
          ],
          inline: P,
          strategy: te,
          middlewares: K
        }), Ve = we({
          name: "Tooltip",
          props: n,
          classes: As,
          className: f,
          style: c,
          classNames: _,
          styles: C,
          unstyled: g,
          rootSelector: "tooltip",
          vars: V,
          varsResolver: Lx
        });
        if (!mm(r)) throw new Error("[@mantine/core] Tooltip component children should be an element or a component that accepts ref, fragments, strings, numbers and other primitive values are not supported");
        const wn = ym(me.reference, vm(r), t), at = Ex(N, {
          duration: 100,
          transition: "fade"
        }), Fn = r.props;
        return T.jsxs(T.Fragment, {
          children: [
            T.jsx(zu, {
              ...ne,
              withinPortal: m,
              children: T.jsx(ks, {
                ...at,
                keepMounted: M,
                mounted: !j && !!me.opened,
                duration: me.isGroupPhase ? 10 : at.duration,
                children: (Nr) => T.jsxs(oe, {
                  ...J,
                  "data-fixed": te === "fixed" || void 0,
                  variant: $,
                  mod: [
                    {
                      multiline: A
                    },
                    Z
                  ],
                  ...me.getFloatingProps({
                    ref: me.floating,
                    className: Ve("tooltip").className,
                    style: {
                      ...Ve("tooltip").style,
                      ...Nr,
                      zIndex: z,
                      top: me.y ?? 0,
                      left: me.x ?? 0
                    }
                  }),
                  children: [
                    s,
                    T.jsx(Jm, {
                      ref: De,
                      arrowX: me.arrowX,
                      arrowY: me.arrowY,
                      visible: y,
                      position: me.placement,
                      arrowSize: x,
                      arrowOffset: S,
                      arrowRadius: w,
                      arrowPosition: k,
                      ...Ve("arrow")
                    })
                  ]
                })
              })
            }),
            b.cloneElement(r, me.getReferenceProps({
              onClick: W,
              onMouseEnter: O,
              onMouseLeave: E,
              onMouseMove: n.onMouseMove,
              onPointerDown: n.onPointerDown,
              onPointerEnter: n.onPointerEnter,
              className: Kt(f, Fn.className),
              ...Fn,
              [i]: wn
            }))
          ]
        });
      });
      Tr.classes = As;
      Tr.displayName = "@mantine/core/Tooltip";
      Tr.Floating = Qu;
      Tr.Group = Xu;
      const $x = {}, nr = Ee((e, t) => {
        const n = q("TextInput", $x, e);
        return T.jsx(Oo, {
          component: "input",
          ref: t,
          ...n,
          __staticSelector: "TextInput"
        });
      });
      nr.classes = Oo.classes;
      nr.displayName = "@mantine/core/TextInput";
      const Ox = [
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6"
      ], Dx = [
        "xs",
        "sm",
        "md",
        "lg",
        "xl"
      ];
      function Mx(e, t) {
        const n = t !== void 0 ? t : `h${e}`;
        return Ox.includes(n) ? {
          fontSize: `var(--mantine-${n}-font-size)`,
          fontWeight: `var(--mantine-${n}-font-weight)`,
          lineHeight: `var(--mantine-${n}-line-height)`
        } : Dx.includes(n) ? {
          fontSize: `var(--mantine-font-size-${n})`,
          fontWeight: `var(--mantine-h${e}-font-weight)`,
          lineHeight: `var(--mantine-h${e}-line-height)`
        } : {
          fontSize: I(n),
          fontWeight: `var(--mantine-h${e}-font-weight)`,
          lineHeight: `var(--mantine-h${e}-line-height)`
        };
      }
      var ug = {
        root: "m_8a5d1357"
      };
      const Fx = {
        order: 1
      }, jx = (e, { order: t, size: n, lineClamp: r, textWrap: o }) => {
        const i = Mx(t, n);
        return {
          root: {
            "--title-fw": i.fontWeight,
            "--title-lh": i.lineHeight,
            "--title-fz": i.fontSize,
            "--title-line-clamp": typeof r == "number" ? r.toString() : void 0,
            "--title-text-wrap": o
          }
        };
      }, qu = Ee((e, t) => {
        const n = q("Title", Fx, e), { classNames: r, className: o, style: i, styles: s, unstyled: l, order: a, vars: u, size: p, variant: d, lineClamp: m, textWrap: h, mod: v, ..._ } = n, C = we({
          name: "Title",
          props: n,
          classes: ug,
          className: o,
          style: i,
          classNames: r,
          styles: s,
          unstyled: l,
          vars: u,
          varsResolver: jx
        });
        return [
          1,
          2,
          3,
          4,
          5,
          6
        ].includes(a) ? T.jsx(oe, {
          ...C("root"),
          component: `h${a}`,
          variant: d,
          ref: t,
          mod: [
            {
              order: a,
              "data-line-clamp": typeof m == "number"
            },
            v
          ],
          size: p,
          ..._
        }) : null;
      });
      qu.classes = ug;
      qu.displayName = "@mantine/core/Title";
      var cg = {
        exports: {}
      };
      (function(e) {
        var t = typeof window < "u" ? window : typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope ? self : {};
        var n = function(r) {
          var o = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i, i = 0, s = {}, l = {
            manual: r.Prism && r.Prism.manual,
            disableWorkerMessageHandler: r.Prism && r.Prism.disableWorkerMessageHandler,
            util: {
              encode: function c(f) {
                return f instanceof a ? new a(f.type, c(f.content), f.alias) : Array.isArray(f) ? f.map(c) : f.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
              },
              type: function(c) {
                return Object.prototype.toString.call(c).slice(8, -1);
              },
              objId: function(c) {
                return c.__id || Object.defineProperty(c, "__id", {
                  value: ++i
                }), c.__id;
              },
              clone: function c(f, y) {
                y = y || {};
                var x, S;
                switch (l.util.type(f)) {
                  case "Object":
                    if (S = l.util.objId(f), y[S]) return y[S];
                    x = {}, y[S] = x;
                    for (var w in f) f.hasOwnProperty(w) && (x[w] = c(f[w], y));
                    return x;
                  case "Array":
                    return S = l.util.objId(f), y[S] ? y[S] : (x = [], y[S] = x, f.forEach(function(k, R) {
                      x[R] = c(k, y);
                    }), x);
                  default:
                    return f;
                }
              },
              getLanguage: function(c) {
                for (; c; ) {
                  var f = o.exec(c.className);
                  if (f) return f[1].toLowerCase();
                  c = c.parentElement;
                }
                return "none";
              },
              setLanguage: function(c, f) {
                c.className = c.className.replace(RegExp(o, "gi"), ""), c.classList.add("language-" + f);
              },
              currentScript: function() {
                if (typeof document > "u") return null;
                if (document.currentScript && document.currentScript.tagName === "SCRIPT") return document.currentScript;
                try {
                  throw new Error();
                } catch (x) {
                  var c = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(x.stack) || [])[1];
                  if (c) {
                    var f = document.getElementsByTagName("script");
                    for (var y in f) if (f[y].src == c) return f[y];
                  }
                  return null;
                }
              },
              isActive: function(c, f, y) {
                for (var x = "no-" + f; c; ) {
                  var S = c.classList;
                  if (S.contains(f)) return true;
                  if (S.contains(x)) return false;
                  c = c.parentElement;
                }
                return !!y;
              }
            },
            languages: {
              plain: s,
              plaintext: s,
              text: s,
              txt: s,
              extend: function(c, f) {
                var y = l.util.clone(l.languages[c]);
                for (var x in f) y[x] = f[x];
                return y;
              },
              insertBefore: function(c, f, y, x) {
                x = x || l.languages;
                var S = x[c], w = {};
                for (var k in S) if (S.hasOwnProperty(k)) {
                  if (k == f) for (var R in y) y.hasOwnProperty(R) && (w[R] = y[R]);
                  y.hasOwnProperty(k) || (w[k] = S[k]);
                }
                var N = x[c];
                return x[c] = w, l.languages.DFS(l.languages, function(A, L) {
                  L === N && A != c && (this[A] = w);
                }), w;
              },
              DFS: function c(f, y, x, S) {
                S = S || {};
                var w = l.util.objId;
                for (var k in f) if (f.hasOwnProperty(k)) {
                  y.call(f, k, f[k], x || k);
                  var R = f[k], N = l.util.type(R);
                  N === "Object" && !S[w(R)] ? (S[w(R)] = true, c(R, y, null, S)) : N === "Array" && !S[w(R)] && (S[w(R)] = true, c(R, y, k, S));
                }
              }
            },
            plugins: {},
            highlightAll: function(c, f) {
              l.highlightAllUnder(document, c, f);
            },
            highlightAllUnder: function(c, f, y) {
              var x = {
                callback: y,
                container: c,
                selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
              };
              l.hooks.run("before-highlightall", x), x.elements = Array.prototype.slice.apply(x.container.querySelectorAll(x.selector)), l.hooks.run("before-all-elements-highlight", x);
              for (var S = 0, w; w = x.elements[S++]; ) l.highlightElement(w, f === true, x.callback);
            },
            highlightElement: function(c, f, y) {
              var x = l.util.getLanguage(c), S = l.languages[x];
              l.util.setLanguage(c, x);
              var w = c.parentElement;
              w && w.nodeName.toLowerCase() === "pre" && l.util.setLanguage(w, x);
              var k = c.textContent, R = {
                element: c,
                language: x,
                grammar: S,
                code: k
              };
              function N(L) {
                R.highlightedCode = L, l.hooks.run("before-insert", R), R.element.innerHTML = R.highlightedCode, l.hooks.run("after-highlight", R), l.hooks.run("complete", R), y && y.call(R.element);
              }
              if (l.hooks.run("before-sanity-check", R), w = R.element.parentElement, w && w.nodeName.toLowerCase() === "pre" && !w.hasAttribute("tabindex") && w.setAttribute("tabindex", "0"), !R.code) {
                l.hooks.run("complete", R), y && y.call(R.element);
                return;
              }
              if (l.hooks.run("before-highlight", R), !R.grammar) {
                N(l.util.encode(R.code));
                return;
              }
              if (f && r.Worker) {
                var A = new Worker(l.filename);
                A.onmessage = function(L) {
                  N(L.data);
                }, A.postMessage(JSON.stringify({
                  language: R.language,
                  code: R.code,
                  immediateClose: true
                }));
              } else N(l.highlight(R.code, R.grammar, R.language));
            },
            highlight: function(c, f, y) {
              var x = {
                code: c,
                grammar: f,
                language: y
              };
              if (l.hooks.run("before-tokenize", x), !x.grammar) throw new Error('The language "' + x.language + '" has no grammar.');
              return x.tokens = l.tokenize(x.code, x.grammar), l.hooks.run("after-tokenize", x), a.stringify(l.util.encode(x.tokens), x.language);
            },
            tokenize: function(c, f) {
              var y = f.rest;
              if (y) {
                for (var x in y) f[x] = y[x];
                delete f.rest;
              }
              var S = new d();
              return m(S, S.head, c), p(c, S, f, S.head, 0), v(S);
            },
            hooks: {
              all: {},
              add: function(c, f) {
                var y = l.hooks.all;
                y[c] = y[c] || [], y[c].push(f);
              },
              run: function(c, f) {
                var y = l.hooks.all[c];
                if (!(!y || !y.length)) for (var x = 0, S; S = y[x++]; ) S(f);
              }
            },
            Token: a
          };
          r.Prism = l;
          function a(c, f, y, x) {
            this.type = c, this.content = f, this.alias = y, this.length = (x || "").length | 0;
          }
          a.stringify = function c(f, y) {
            if (typeof f == "string") return f;
            if (Array.isArray(f)) {
              var x = "";
              return f.forEach(function(N) {
                x += c(N, y);
              }), x;
            }
            var S = {
              type: f.type,
              content: c(f.content, y),
              tag: "span",
              classes: [
                "token",
                f.type
              ],
              attributes: {},
              language: y
            }, w = f.alias;
            w && (Array.isArray(w) ? Array.prototype.push.apply(S.classes, w) : S.classes.push(w)), l.hooks.run("wrap", S);
            var k = "";
            for (var R in S.attributes) k += " " + R + '="' + (S.attributes[R] || "").replace(/"/g, "&quot;") + '"';
            return "<" + S.tag + ' class="' + S.classes.join(" ") + '"' + k + ">" + S.content + "</" + S.tag + ">";
          };
          function u(c, f, y, x) {
            c.lastIndex = f;
            var S = c.exec(y);
            if (S && x && S[1]) {
              var w = S[1].length;
              S.index += w, S[0] = S[0].slice(w);
            }
            return S;
          }
          function p(c, f, y, x, S, w) {
            for (var k in y) if (!(!y.hasOwnProperty(k) || !y[k])) {
              var R = y[k];
              R = Array.isArray(R) ? R : [
                R
              ];
              for (var N = 0; N < R.length; ++N) {
                if (w && w.cause == k + "," + N) return;
                var A = R[N], L = A.inside, z = !!A.lookbehind, j = !!A.greedy, B = A.alias;
                if (j && !A.pattern.global) {
                  var W = A.pattern.toString().match(/[imsuy]*$/)[0];
                  A.pattern = RegExp(A.pattern.source, W + "g");
                }
                for (var O = A.pattern || A, E = x.next, P = S; E !== f.tail && !(w && P >= w.reach); P += E.value.length, E = E.next) {
                  var $ = E.value;
                  if (f.length > c.length) return;
                  if (!($ instanceof a)) {
                    var M = 1, V;
                    if (j) {
                      if (V = u(O, P, c, z), !V || V.index >= c.length) break;
                      var K = V.index, ne = V.index + V[0].length, Z = P;
                      for (Z += E.value.length; K >= Z; ) E = E.next, Z += E.value.length;
                      if (Z -= E.value.length, P = Z, E.value instanceof a) continue;
                      for (var te = E; te !== f.tail && (Z < ne || typeof te.value == "string"); te = te.next) M++, Z += te.value.length;
                      M--, $ = c.slice(P, Z), V.index -= P;
                    } else if (V = u(O, 0, $, z), !V) continue;
                    var K = V.index, J = V[0], ye = $.slice(0, K), De = $.slice(K + J.length), me = P + $.length;
                    w && me > w.reach && (w.reach = me);
                    var Ve = E.prev;
                    ye && (Ve = m(f, Ve, ye), P += ye.length), h(f, Ve, M);
                    var wn = new a(k, L ? l.tokenize(J, L) : J, B, J);
                    if (E = m(f, Ve, wn), De && m(f, E, De), M > 1) {
                      var at = {
                        cause: k + "," + N,
                        reach: me
                      };
                      p(c, f, y, E.prev, P, at), w && at.reach > w.reach && (w.reach = at.reach);
                    }
                  }
                }
              }
            }
          }
          function d() {
            var c = {
              value: null,
              prev: null,
              next: null
            }, f = {
              value: null,
              prev: c,
              next: null
            };
            c.next = f, this.head = c, this.tail = f, this.length = 0;
          }
          function m(c, f, y) {
            var x = f.next, S = {
              value: y,
              prev: f,
              next: x
            };
            return f.next = S, x.prev = S, c.length++, S;
          }
          function h(c, f, y) {
            for (var x = f.next, S = 0; S < y && x !== c.tail; S++) x = x.next;
            f.next = x, x.prev = f, c.length -= S;
          }
          function v(c) {
            for (var f = [], y = c.head.next; y !== c.tail; ) f.push(y.value), y = y.next;
            return f;
          }
          if (!r.document) return r.addEventListener && (l.disableWorkerMessageHandler || r.addEventListener("message", function(c) {
            var f = JSON.parse(c.data), y = f.language, x = f.code, S = f.immediateClose;
            r.postMessage(l.highlight(x, l.languages[y], y)), S && r.close();
          }, false)), l;
          var _ = l.util.currentScript();
          _ && (l.filename = _.src, _.hasAttribute("data-manual") && (l.manual = true));
          function C() {
            l.manual || l.highlightAll();
          }
          if (!l.manual) {
            var g = document.readyState;
            g === "loading" || g === "interactive" && _ && _.defer ? document.addEventListener("DOMContentLoaded", C) : window.requestAnimationFrame ? window.requestAnimationFrame(C) : window.setTimeout(C, 16);
          }
          return l;
        }(t);
        e.exports && (e.exports = n), typeof ec < "u" && (ec.Prism = n), n.languages.markup = {
          comment: {
            pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
            greedy: true
          },
          prolog: {
            pattern: /<\?[\s\S]+?\?>/,
            greedy: true
          },
          doctype: {
            pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
            greedy: true,
            inside: {
              "internal-subset": {
                pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
                lookbehind: true,
                greedy: true,
                inside: null
              },
              string: {
                pattern: /"[^"]*"|'[^']*'/,
                greedy: true
              },
              punctuation: /^<!|>$|[[\]]/,
              "doctype-tag": /^DOCTYPE/i,
              name: /[^\s<>'"]+/
            }
          },
          cdata: {
            pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
            greedy: true
          },
          tag: {
            pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
            greedy: true,
            inside: {
              tag: {
                pattern: /^<\/?[^\s>\/]+/,
                inside: {
                  punctuation: /^<\/?/,
                  namespace: /^[^\s>\/:]+:/
                }
              },
              "special-attr": [],
              "attr-value": {
                pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
                inside: {
                  punctuation: [
                    {
                      pattern: /^=/,
                      alias: "attr-equals"
                    },
                    {
                      pattern: /^(\s*)["']|["']$/,
                      lookbehind: true
                    }
                  ]
                }
              },
              punctuation: /\/?>/,
              "attr-name": {
                pattern: /[^\s>\/]+/,
                inside: {
                  namespace: /^[^\s>\/:]+:/
                }
              }
            }
          },
          entity: [
            {
              pattern: /&[\da-z]{1,8};/i,
              alias: "named-entity"
            },
            /&#x?[\da-f]{1,8};/i
          ]
        }, n.languages.markup.tag.inside["attr-value"].inside.entity = n.languages.markup.entity, n.languages.markup.doctype.inside["internal-subset"].inside = n.languages.markup, n.hooks.add("wrap", function(r) {
          r.type === "entity" && (r.attributes.title = r.content.replace(/&amp;/, "&"));
        }), Object.defineProperty(n.languages.markup.tag, "addInlined", {
          value: function(o, i) {
            var s = {};
            s["language-" + i] = {
              pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
              lookbehind: true,
              inside: n.languages[i]
            }, s.cdata = /^<!\[CDATA\[|\]\]>$/i;
            var l = {
              "included-cdata": {
                pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
                inside: s
              }
            };
            l["language-" + i] = {
              pattern: /[\s\S]+/,
              inside: n.languages[i]
            };
            var a = {};
            a[o] = {
              pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() {
                return o;
              }), "i"),
              lookbehind: true,
              greedy: true,
              inside: l
            }, n.languages.insertBefore("markup", "cdata", a);
          }
        }), Object.defineProperty(n.languages.markup.tag, "addAttribute", {
          value: function(r, o) {
            n.languages.markup.tag.inside["special-attr"].push({
              pattern: RegExp(/(^|["'\s])/.source + "(?:" + r + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source, "i"),
              lookbehind: true,
              inside: {
                "attr-name": /^[^\s=]+/,
                "attr-value": {
                  pattern: /=[\s\S]+/,
                  inside: {
                    value: {
                      pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                      lookbehind: true,
                      alias: [
                        o,
                        "language-" + o
                      ],
                      inside: n.languages[o]
                    },
                    punctuation: [
                      {
                        pattern: /^=/,
                        alias: "attr-equals"
                      },
                      /"|'/
                    ]
                  }
                }
              }
            });
          }
        }), n.languages.html = n.languages.markup, n.languages.mathml = n.languages.markup, n.languages.svg = n.languages.markup, n.languages.xml = n.languages.extend("markup", {}), n.languages.ssml = n.languages.xml, n.languages.atom = n.languages.xml, n.languages.rss = n.languages.xml, function(r) {
          var o = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
          r.languages.css = {
            comment: /\/\*[\s\S]*?\*\//,
            atrule: {
              pattern: RegExp("@[\\w-](?:" + /[^;{\s"']|\s+(?!\s)/.source + "|" + o.source + ")*?" + /(?:;|(?=\s*\{))/.source),
              inside: {
                rule: /^@[\w-]+/,
                "selector-function-argument": {
                  pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
                  lookbehind: true,
                  alias: "selector"
                },
                keyword: {
                  pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
                  lookbehind: true
                }
              }
            },
            url: {
              pattern: RegExp("\\burl\\((?:" + o.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
              greedy: true,
              inside: {
                function: /^url/i,
                punctuation: /^\(|\)$/,
                string: {
                  pattern: RegExp("^" + o.source + "$"),
                  alias: "url"
                }
              }
            },
            selector: {
              pattern: RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + o.source + ")*(?=\\s*\\{)"),
              lookbehind: true
            },
            string: {
              pattern: o,
              greedy: true
            },
            property: {
              pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
              lookbehind: true
            },
            important: /!important\b/i,
            function: {
              pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
              lookbehind: true
            },
            punctuation: /[(){};:,]/
          }, r.languages.css.atrule.inside.rest = r.languages.css;
          var i = r.languages.markup;
          i && (i.tag.addInlined("style", "css"), i.tag.addAttribute("style", "css"));
        }(n), n.languages.clike = {
          comment: [
            {
              pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
              lookbehind: true,
              greedy: true
            },
            {
              pattern: /(^|[^\\:])\/\/.*/,
              lookbehind: true,
              greedy: true
            }
          ],
          string: {
            pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
            greedy: true
          },
          "class-name": {
            pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
            lookbehind: true,
            inside: {
              punctuation: /[.\\]/
            }
          },
          keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
          boolean: /\b(?:false|true)\b/,
          function: /\b\w+(?=\()/,
          number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
          operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
          punctuation: /[{}[\];(),.:]/
        }, n.languages.javascript = n.languages.extend("clike", {
          "class-name": [
            n.languages.clike["class-name"],
            {
              pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
              lookbehind: true
            }
          ],
          keyword: [
            {
              pattern: /((?:^|\})\s*)catch\b/,
              lookbehind: true
            },
            {
              pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
              lookbehind: true
            }
          ],
          function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
          number: {
            pattern: RegExp(/(^|[^\w$])/.source + "(?:" + (/NaN|Infinity/.source + "|" + /0[bB][01]+(?:_[01]+)*n?/.source + "|" + /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + /\d+(?:_\d+)*n/.source + "|" + /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source) + ")" + /(?![\w$])/.source),
            lookbehind: true
          },
          operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
        }), n.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/, n.languages.insertBefore("javascript", "keyword", {
          regex: {
            pattern: RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source + /\//.source + "(?:" + /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source + "|" + /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source + ")" + /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),
            lookbehind: true,
            greedy: true,
            inside: {
              "regex-source": {
                pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
                lookbehind: true,
                alias: "language-regex",
                inside: n.languages.regex
              },
              "regex-delimiter": /^\/|\/$/,
              "regex-flags": /^[a-z]+$/
            }
          },
          "function-variable": {
            pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
            alias: "function"
          },
          parameter: [
            {
              pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
              lookbehind: true,
              inside: n.languages.javascript
            },
            {
              pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
              lookbehind: true,
              inside: n.languages.javascript
            },
            {
              pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
              lookbehind: true,
              inside: n.languages.javascript
            },
            {
              pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
              lookbehind: true,
              inside: n.languages.javascript
            }
          ],
          constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
        }), n.languages.insertBefore("javascript", "string", {
          hashbang: {
            pattern: /^#!.*/,
            greedy: true,
            alias: "comment"
          },
          "template-string": {
            pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
            greedy: true,
            inside: {
              "template-punctuation": {
                pattern: /^`|`$/,
                alias: "string"
              },
              interpolation: {
                pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
                lookbehind: true,
                inside: {
                  "interpolation-punctuation": {
                    pattern: /^\$\{|\}$/,
                    alias: "punctuation"
                  },
                  rest: n.languages.javascript
                }
              },
              string: /[\s\S]+/
            }
          },
          "string-property": {
            pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
            lookbehind: true,
            greedy: true,
            alias: "property"
          }
        }), n.languages.insertBefore("javascript", "operator", {
          "literal-property": {
            pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
            lookbehind: true,
            alias: "property"
          }
        }), n.languages.markup && (n.languages.markup.tag.addInlined("script", "javascript"), n.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source, "javascript")), n.languages.js = n.languages.javascript, function() {
          if (typeof n > "u" || typeof document > "u") return;
          Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector);
          var r = "Loading\u2026", o = function(_, C) {
            return "\u2716 Error " + _ + " while fetching file: " + C;
          }, i = "\u2716 Error: File does not exist or is empty", s = {
            js: "javascript",
            py: "python",
            rb: "ruby",
            ps1: "powershell",
            psm1: "powershell",
            sh: "bash",
            bat: "batch",
            h: "c",
            tex: "latex"
          }, l = "data-src-status", a = "loading", u = "loaded", p = "failed", d = "pre[data-src]:not([" + l + '="' + u + '"]):not([' + l + '="' + a + '"])';
          function m(_, C, g) {
            var c = new XMLHttpRequest();
            c.open("GET", _, true), c.onreadystatechange = function() {
              c.readyState == 4 && (c.status < 400 && c.responseText ? C(c.responseText) : c.status >= 400 ? g(o(c.status, c.statusText)) : g(i));
            }, c.send(null);
          }
          function h(_) {
            var C = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(_ || "");
            if (C) {
              var g = Number(C[1]), c = C[2], f = C[3];
              return c ? f ? [
                g,
                Number(f)
              ] : [
                g,
                void 0
              ] : [
                g,
                g
              ];
            }
          }
          n.hooks.add("before-highlightall", function(_) {
            _.selector += ", " + d;
          }), n.hooks.add("before-sanity-check", function(_) {
            var C = _.element;
            if (C.matches(d)) {
              _.code = "", C.setAttribute(l, a);
              var g = C.appendChild(document.createElement("CODE"));
              g.textContent = r;
              var c = C.getAttribute("data-src"), f = _.language;
              if (f === "none") {
                var y = (/\.(\w+)$/.exec(c) || [
                  ,
                  "none"
                ])[1];
                f = s[y] || y;
              }
              n.util.setLanguage(g, f), n.util.setLanguage(C, f);
              var x = n.plugins.autoloader;
              x && x.loadLanguages(f), m(c, function(S) {
                C.setAttribute(l, u);
                var w = h(C.getAttribute("data-range"));
                if (w) {
                  var k = S.split(/\r\n?|\n/g), R = w[0], N = w[1] == null ? k.length : w[1];
                  R < 0 && (R += k.length), R = Math.max(0, Math.min(R - 1, k.length)), N < 0 && (N += k.length), N = Math.max(0, Math.min(N, k.length)), S = k.slice(R, N).join(`
`), C.hasAttribute("data-start") || C.setAttribute("data-start", String(R + 1));
                }
                g.textContent = S, n.highlightElement(g);
              }, function(S) {
                C.setAttribute(l, p), g.textContent = S;
              });
            }
          }), n.plugins.fileHighlight = {
            highlight: function(C) {
              for (var g = (C || document).querySelectorAll(d), c = 0, f; f = g[c++]; ) n.highlightElement(f);
            }
          };
          var v = false;
          n.fileHighlight = function() {
            v || (console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."), v = true), n.plugins.fileHighlight.highlight.apply(this, arguments);
          };
        }();
      })(cg);
      var zx = cg.exports;
      const Bx = Ta(zx);
      Prism.languages.sql = {
        comment: {
          pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,
          lookbehind: true
        },
        variable: [
          {
            pattern: /@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,
            greedy: true
          },
          /@[\w.$]+/
        ],
        string: {
          pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,
          greedy: true,
          lookbehind: true
        },
        identifier: {
          pattern: /(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/,
          greedy: true,
          lookbehind: true,
          inside: {
            punctuation: /^`|`$/
          }
        },
        function: /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,
        keyword: /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,
        boolean: /\b(?:FALSE|NULL|TRUE)\b/i,
        number: /\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,
        operator: /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,
        punctuation: /[;[\]()`,.]/
      };
      globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || {
        cache: /* @__PURE__ */ new Map(),
        get(e, t) {
          return this.cache.has(e) ? this.cache.get(e) : (this.cache.set(e, t), t);
        }
      };
      function Ux(e) {
        const t = e.split(`
`).filter((r) => r.trim() && !r.startsWith("+"));
        if (t.length === 0) return [];
        const n = t[0].split("|").slice(1, -1).map((r) => r.trim());
        return t.slice(1).map((r) => {
          const o = r.split("|").slice(1, -1).map((i) => i.trim());
          return n.reduce((i, s, l) => {
            const a = o[l];
            return i[s] = isNaN(Number(a)) ? a : Number(a), i;
          }, {});
        });
      }
      function Wx({ data: e }) {
        if (!e.length) return null;
        const t = Object.keys(e[0]);
        return T.jsxs("div", {
          className: "output-table",
          children: [
            T.jsx("div", {
              className: "table-header",
              children: t.map((n) => T.jsx("span", {
                className: "table-cell",
                children: n
              }, n))
            }),
            e.map((n, r) => T.jsx("div", {
              className: "table-row",
              children: t.map((o) => T.jsx("span", {
                className: "table-cell",
                children: n[o]
              }, o))
            }, r))
          ]
        });
      }
      function Vx({ logs: e }) {
        return b.useEffect(() => {
          Bx.highlightAll();
        }, [
          e
        ]), T.jsx("div", {
          className: "query-terminal",
          children: [
            ...e
          ].reverse().map((t, n) => T.jsxs("div", {
            className: "query-entry",
            children: [
              T.jsxs("div", {
                className: "query-input-field",
                children: [
                  T.jsx("span", {
                    children: "datafusion >"
                  }),
                  T.jsx("code", {
                    className: "language-sql",
                    children: t.query
                  })
                ]
              }),
              t.error && T.jsx("div", {
                className: "error",
                children: t.error
              }),
              t.result && T.jsx(Wx, {
                data: Ux(t.result)
              })
            ]
          }, n))
        });
      }
      function Hx({ logs: e, setLogs: t }) {
        const [n, r] = b.useState(""), [o, i] = b.useState(-1), s = async (a) => {
          a.preventDefault();
          try {
            const u = await wg.execute_sql(n);
            t([
              ...e,
              {
                query: n,
                result: u
              }
            ]);
          } catch (u) {
            t([
              ...e,
              {
                query: n,
                error: u.toString()
              }
            ]);
          }
          r(""), i(-1);
        }, l = (a) => {
          if (a.key === "ArrowUp") {
            const u = Math.min(e.length - 1, o + 1);
            e[u] && (r(e[u].query), i(u));
          }
          if (a.key === "ArrowDown") {
            const u = Math.max(-1, o - 1);
            u === -1 ? (r(""), i(-1)) : e[u] && (r(e[u].query), i(u));
          }
        };
        return T.jsxs("form", {
          className: "input-panel",
          onSubmit: s,
          children: [
            T.jsx("span", {
              children: "datafusion >"
            }),
            T.jsx("input", {
              type: "text",
              className: "query-input-field",
              value: n,
              onChange: (a) => r(a.target.value),
              onKeyDown: l,
              autoFocus: true
            })
          ]
        });
      }
      function Gx() {
        const [e, t] = b.useState([]);
        return T.jsxs("div", {
          className: "input-container",
          children: [
            T.jsx(Hx, {
              logs: e,
              setLogs: t
            }),
            T.jsx(Vx, {
              logs: e
            })
          ]
        });
      }
      const Gr = {}, Gf = (e, t) => e.unstable_is ? e.unstable_is(t) : t === e, Yf = (e) => "init" in e, wl = (e) => !!e.write, Kf = (e) => "v" in e || "e" in e, si = (e) => {
        if ("e" in e) throw e.e;
        if ((Gr ? "production" : void 0) !== "production" && !("v" in e)) throw new Error("[Bug] atom state is not initialized");
        return e.v;
      }, Zi = /* @__PURE__ */ new WeakMap(), Qf = (e) => {
        var t;
        return Ji(e) && !!((t = Zi.get(e)) != null && t[0]);
      }, Yx = (e) => {
        const t = Zi.get(e);
        (t == null ? void 0 : t[0]) && (t[0] = false, t[1].forEach((n) => n()));
      }, fg = (e, t) => {
        let n = Zi.get(e);
        if (!n) {
          n = [
            true,
            /* @__PURE__ */ new Set()
          ], Zi.set(e, n);
          const r = () => {
            n[0] = false;
          };
          e.then(r, r);
        }
        n[1].add(t);
      }, Ji = (e) => typeof (e == null ? void 0 : e.then) == "function", dg = (e, t, n) => {
        n.p.has(e) || (n.p.add(e), t.then(() => {
          n.p.delete(e);
        }, () => {
          n.p.delete(e);
        }));
      }, Sl = (e, t, n) => {
        const r = n(e), o = "v" in r, i = r.v;
        if (Ji(t)) for (const s of r.d.keys()) dg(e, t, n(s));
        r.v = t, delete r.e, (!o || !Object.is(i, r.v)) && (++r.n, Ji(i) && Yx(i));
      }, Xf = (e, t, n) => {
        var r;
        const o = /* @__PURE__ */ new Set();
        for (const i of ((r = n.get(e)) == null ? void 0 : r.t) || []) n.has(i) && o.add(i);
        for (const i of t.p) o.add(i);
        return o;
      }, Kx = () => {
        const e = /* @__PURE__ */ new Set(), t = () => {
          e.forEach((n) => n());
        };
        return t.add = (n) => (e.add(n), () => {
          e.delete(n);
        }), t;
      }, xl = () => {
        const e = {}, t = /* @__PURE__ */ new WeakMap(), n = (r) => {
          var o, i;
          (o = t.get(e)) == null || o.forEach((s) => s(r)), (i = t.get(r)) == null || i.forEach((s) => s());
        };
        return n.add = (r, o) => {
          const i = r || e, s = (t.has(i) ? t : t.set(i, /* @__PURE__ */ new Set())).get(i);
          return s.add(o), () => {
            s == null ? void 0 : s.delete(o), s.size || t.delete(i);
          };
        }, n;
      }, Qx = (e) => (e.c || (e.c = xl()), e.m || (e.m = xl()), e.u || (e.u = xl()), e.f || (e.f = Kx()), e), Xx = Symbol(), qx = (e = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set(), i = /* @__PURE__ */ new Set(), s = {}, l = (m, ...h) => m.read(...h), a = (m, ...h) => m.write(...h), u = (m, h) => {
        var v;
        return (v = m.unstable_onInit) == null ? void 0 : v.call(m, h);
      }, p = (m, h) => {
        var v;
        return (v = m.onMount) == null ? void 0 : v.call(m, h);
      }, ...d) => {
        const m = d[0] || ((w) => {
          if ((Gr ? "production" : void 0) !== "production" && !w) throw new Error("Atom is undefined or null");
          let k = e.get(w);
          return k || (k = {
            d: /* @__PURE__ */ new Map(),
            p: /* @__PURE__ */ new Set(),
            n: 0
          }, e.set(w, k), u == null ? void 0 : u(w, S)), k;
        }), h = d[1] || (() => {
          const w = [], k = (R) => {
            try {
              R();
            } catch (N) {
              w.push(N);
            }
          };
          do {
            s.f && k(s.f);
            const R = /* @__PURE__ */ new Set(), N = R.add.bind(R);
            r.forEach((A) => {
              var L;
              return (L = t.get(A)) == null ? void 0 : L.l.forEach(N);
            }), r.clear(), i.forEach(N), i.clear(), o.forEach(N), o.clear(), R.forEach(k), r.size && v();
          } while (r.size || i.size || o.size);
          if (w.length) throw new AggregateError(w);
        }), v = d[2] || (() => {
          const w = [], k = /* @__PURE__ */ new WeakSet(), R = /* @__PURE__ */ new WeakSet(), N = Array.from(r);
          for (; N.length; ) {
            const A = N[N.length - 1], L = m(A);
            if (R.has(A)) {
              N.pop();
              continue;
            }
            if (k.has(A)) {
              if (n.get(A) === L.n) w.push([
                A,
                L
              ]);
              else if ((Gr ? "production" : void 0) !== "production" && n.has(A)) throw new Error("[Bug] invalidated atom exists");
              R.add(A), N.pop();
              continue;
            }
            k.add(A);
            for (const z of Xf(A, L, t)) k.has(z) || N.push(z);
          }
          for (let A = w.length - 1; A >= 0; --A) {
            const [L, z] = w[A];
            let j = false;
            for (const B of z.d.keys()) if (B !== L && r.has(B)) {
              j = true;
              break;
            }
            j && (_(L), c(L)), n.delete(L);
          }
        }), _ = d[3] || ((w) => {
          var k;
          const R = m(w);
          if (Kf(R) && (t.has(w) && n.get(w) !== R.n || Array.from(R.d).every(([O, E]) => _(O).n === E))) return R;
          R.d.clear();
          let N = true;
          const A = () => {
            t.has(w) && (c(w), v(), h());
          }, L = (O) => {
            var E;
            if (Gf(w, O)) {
              const $ = m(O);
              if (!Kf($)) if (Yf(O)) Sl(O, O.init, m);
              else throw new Error("no atom init");
              return si($);
            }
            const P = _(O);
            try {
              return si(P);
            } finally {
              R.d.set(O, P.n), Qf(R.v) && dg(w, R.v, P), (E = t.get(O)) == null || E.t.add(w), N || A();
            }
          };
          let z, j;
          const B = {
            get signal() {
              return z || (z = new AbortController()), z.signal;
            },
            get setSelf() {
              return (Gr ? "production" : void 0) !== "production" && !wl(w) && console.warn("setSelf function cannot be used with read-only atom"), !j && wl(w) && (j = (...O) => {
                if ((Gr ? "production" : void 0) !== "production" && N && console.warn("setSelf function cannot be called in sync"), !N) try {
                  return g(w, ...O);
                } finally {
                  v(), h();
                }
              }), j;
            }
          }, W = R.n;
          try {
            const O = l(w, L, B);
            return Sl(w, O, m), Ji(O) && (fg(O, () => z == null ? void 0 : z.abort()), O.then(A, A)), R;
          } catch (O) {
            return delete R.v, R.e = O, ++R.n, R;
          } finally {
            N = false, W !== R.n && n.get(w) === W && (n.set(w, R.n), r.add(w), (k = s.c) == null || k.call(s, w));
          }
        }), C = d[4] || ((w) => {
          const k = [
            w
          ];
          for (; k.length; ) {
            const R = k.pop(), N = m(R);
            for (const A of Xf(R, N, t)) {
              const L = m(A);
              n.set(A, L.n), k.push(A);
            }
          }
        }), g = d[5] || ((w, ...k) => {
          let R = true;
          const N = (L) => si(_(L)), A = (L, ...z) => {
            var j;
            const B = m(L);
            try {
              if (Gf(w, L)) {
                if (!Yf(L)) throw new Error("atom not writable");
                const W = B.n, O = z[0];
                Sl(L, O, m), c(L), W !== B.n && (r.add(L), (j = s.c) == null || j.call(s, L), C(L));
                return;
              } else return g(L, ...z);
            } finally {
              R || (v(), h());
            }
          };
          try {
            return a(w, N, A, ...k);
          } finally {
            R = false;
          }
        }), c = d[6] || ((w) => {
          var k;
          const R = m(w), N = t.get(w);
          if (N && !Qf(R.v)) {
            for (const [A, L] of R.d) if (!N.d.has(A)) {
              const z = m(A);
              f(A).t.add(w), N.d.add(A), L !== z.n && (r.add(A), (k = s.c) == null || k.call(s, A), C(A));
            }
            for (const A of N.d || []) if (!R.d.has(A)) {
              N.d.delete(A);
              const L = y(A);
              L == null ? void 0 : L.t.delete(w);
            }
          }
        }), f = d[7] || ((w) => {
          var k;
          const R = m(w);
          let N = t.get(w);
          if (!N) {
            _(w);
            for (const A of R.d.keys()) f(A).t.add(w);
            if (N = {
              l: /* @__PURE__ */ new Set(),
              d: new Set(R.d.keys()),
              t: /* @__PURE__ */ new Set()
            }, t.set(w, N), (k = s.m) == null || k.call(s, w), wl(w)) {
              const A = () => {
                let L = true;
                const z = (...j) => {
                  try {
                    return g(w, ...j);
                  } finally {
                    L || (v(), h());
                  }
                };
                try {
                  const j = p(w, z);
                  j && (N.u = () => {
                    L = true;
                    try {
                      j();
                    } finally {
                      L = false;
                    }
                  });
                } finally {
                  L = false;
                }
              };
              o.add(A);
            }
          }
          return N;
        }), y = d[8] || ((w) => {
          var k;
          const R = m(w);
          let N = t.get(w);
          if (N && !N.l.size && !Array.from(N.t).some((A) => {
            var L;
            return (L = t.get(A)) == null ? void 0 : L.d.has(w);
          })) {
            N.u && i.add(N.u), N = void 0, t.delete(w), (k = s.u) == null || k.call(s, w);
            for (const A of R.d.keys()) {
              const L = y(A);
              L == null ? void 0 : L.t.delete(w);
            }
            return;
          }
          return N;
        }), x = [
          e,
          t,
          n,
          r,
          o,
          i,
          s,
          l,
          a,
          u,
          p,
          m,
          h,
          v,
          _,
          C,
          g,
          c,
          f,
          y
        ], S = {
          get: (w) => si(_(w)),
          set: (w, ...k) => {
            try {
              return g(w, ...k);
            } finally {
              v(), h();
            }
          },
          sub: (w, k) => {
            const N = f(w).l;
            return N.add(k), h(), () => {
              N.delete(k), y(w), h();
            };
          }
        };
        return Object.defineProperty(S, Xx, {
          value: x
        }), S;
      }, pg = qx, Zx = Qx, qf = fg, Zu = {};
      let Jx = 0;
      function mg(e, t) {
        const n = `atom${++Jx}`, r = {
          toString() {
            return (Zu ? "production" : void 0) !== "production" && this.debugLabel ? n + ":" + this.debugLabel : n;
          }
        };
        return typeof e == "function" ? r.read = e : (r.init = e, r.read = eE, r.write = tE), r;
      }
      function eE(e) {
        return e(this);
      }
      function tE(e, t, n) {
        return t(this, typeof n == "function" ? n(e(this)) : n);
      }
      const nE = () => {
        let e = 0;
        const t = Zx({}), n = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap(), o = pg(n, r, void 0, void 0, void 0, void 0, t, void 0, (l, a, u, ...p) => e ? u(l, ...p) : l.write(a, u, ...p)), i = /* @__PURE__ */ new Set();
        return t.m.add(void 0, (l) => {
          i.add(l);
          const a = n.get(l);
          a.m = r.get(l);
        }), t.u.add(void 0, (l) => {
          i.delete(l);
          const a = n.get(l);
          delete a.m;
        }), Object.assign(o, {
          dev4_get_internal_weak_map: () => n,
          dev4_get_mounted_atoms: () => i,
          dev4_restore_atoms: (l) => {
            const a = {
              read: () => null,
              write: (u, p) => {
                ++e;
                try {
                  for (const [d, m] of l) "init" in d && p(d, m);
                } finally {
                  --e;
                }
              }
            };
            o.set(a);
          }
        });
      };
      function rE() {
        return (Zu ? "production" : void 0) !== "production" ? nE() : pg();
      }
      let Br;
      function oE() {
        return Br || (Br = rE(), (Zu ? "production" : void 0) !== "production" && (globalThis.__JOTAI_DEFAULT_STORE__ || (globalThis.__JOTAI_DEFAULT_STORE__ = Br), globalThis.__JOTAI_DEFAULT_STORE__ !== Br && console.warn("Detected multiple Jotai instances. It may cause unexpected behavior with the default store. https://github.com/pmndrs/jotai/discussions/2044"))), Br;
      }
      const iE = {}, sE = b.createContext(void 0);
      function gg(e) {
        return b.useContext(sE) || oE();
      }
      const hg = (e) => typeof (e == null ? void 0 : e.then) == "function", lE = (e) => {
        e.status = "pending", e.then((t) => {
          e.status = "fulfilled", e.value = t;
        }, (t) => {
          e.status = "rejected", e.reason = t;
        });
      }, aE = cr.use || ((e) => {
        if (e.status === "pending") throw e;
        if (e.status === "fulfilled") return e.value;
        throw e.status === "rejected" ? e.reason : (lE(e), e);
      }), El = /* @__PURE__ */ new WeakMap(), uE = (e, t) => {
        let n = El.get(e);
        return n || (n = new Promise((r, o) => {
          let i = e;
          const s = (u) => (p) => {
            i === u && r(p);
          }, l = (u) => (p) => {
            i === u && o(p);
          }, a = () => {
            try {
              const u = t();
              hg(u) ? (El.set(u, n), i = u, u.then(s(u), l(u)), qf(u, a)) : r(u);
            } catch (u) {
              o(u);
            }
          };
          e.then(s(e), l(e)), qf(e, a);
        }), El.set(e, n)), n;
      };
      function yg(e, t) {
        const n = gg(), [[r, o, i], s] = b.useReducer((u) => {
          const p = n.get(e);
          return Object.is(u[0], p) && u[1] === n && u[2] === e ? u : [
            p,
            n,
            e
          ];
        }, void 0, () => [
          n.get(e),
          n,
          e
        ]);
        let l = r;
        if ((o !== n || i !== e) && (s(), l = n.get(e)), b.useEffect(() => {
          const u = n.sub(e, () => {
            s();
          });
          return s(), u;
        }, [
          n,
          e,
          void 0
        ]), b.useDebugValue(l), hg(l)) {
          const u = uE(l, () => n.get(e));
          return aE(u);
        }
        return l;
      }
      function cE(e, t) {
        const n = gg();
        return b.useCallback((...o) => {
          if ((iE ? "production" : void 0) !== "production" && !("write" in e)) throw new Error("not writable atom");
          return n.set(e, ...o);
        }, [
          n,
          e
        ]);
      }
      function vg(e, t) {
        return [
          yg(e),
          cE(e)
        ];
      }
      globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || {
        cache: /* @__PURE__ */ new Map(),
        get(e, t) {
          return this.cache.has(e) ? this.cache.get(e) : (this.cache.set(e, t), t);
        }
      };
      function fE() {
        return T.jsx(T.Fragment, {
          children: T.jsxs("div", {
            className: "",
            children: [
              T.jsx("header", {
                className: "text-3xl text-center",
                children: T.jsx("div", {
                  className: "mx-auto max-w-7xl py-6",
                  children: T.jsxs("h1", {
                    className: "text-3xl font-bold tracking-tight text-gray-900",
                    children: [
                      "DataFusion ",
                      T.jsx("br", {}),
                      " Playground"
                    ]
                  })
                })
              }),
              T.jsxs("div", {
                className: "explain",
                children: [
                  T.jsxs("p", {
                    children: [
                      "Playground of ",
                      T.jsx("a", {
                        href: "https://github.com/apache/arrow-datafusion",
                        children: "Apache DataFusion"
                      }),
                      ". In the early experimental stage as ",
                      T.jsx("a", {
                        href: "https://github.com/waynexia/datafusion-playground",
                        children: "my side project."
                      })
                    ]
                  }),
                  T.jsx("p", {
                    className: "c-gray",
                    children: "It might take a while to load the wasm file."
                  })
                ]
              })
            ]
          })
        });
      }
      globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || {
        cache: /* @__PURE__ */ new Map(),
        get(e, t) {
          return this.cache.has(e) ? this.cache.get(e) : (this.cache.set(e, t), t);
        }
      };
      const _g = globalThis.jotaiAtomCache.get("/home/shruti/Downloads/datafusion-wasm-playground-demo-main/src/components/CloudConfig.tsx/s3SavedAtom", mg(false));
      _g.debugLabel = "s3SavedAtom";
      function dE() {
        const [e, t] = vg(_g), n = b.useRef(null), r = b.useRef(null), o = b.useRef(null), i = b.useRef(null), s = b.useRef(null);
        return T.jsx(T.Fragment, {
          children: T.jsxs("div", {
            className: "",
            children: [
              T.jsx("p", {
                className: "italic c-gray",
                children: "Make sure the CORS permission is configured properly in your cloud storage provider"
              }),
              T.jsxs("div", {
                children: [
                  T.jsx("h2", {
                    className: "text-center",
                    children: "AWS S3"
                  }),
                  T.jsx(nr, {
                    type: "string",
                    label: "Root",
                    ref: n
                  }),
                  T.jsx(nr, {
                    type: "string",
                    label: "Bucket",
                    ref: r
                  }),
                  T.jsx(nr, {
                    type: "string",
                    label: "Region",
                    ref: o
                  }),
                  T.jsx(nr, {
                    type: "string",
                    label: "Access Key ID",
                    ref: i
                  }),
                  T.jsx(Ku, {
                    label: "Secret Access Key",
                    ref: s
                  }),
                  T.jsx("div", {
                    className: "text-center",
                    children: T.jsx(Tr, {
                      className: "inline-block ",
                      label: "Saved!",
                      offset: 5,
                      position: "bottom",
                      radius: "m",
                      transitionProps: {
                        duration: 100,
                        transition: "slide-down"
                      },
                      opened: e,
                      children: T.jsx(Do, {
                        className: "m-t-4",
                        variant: "outline",
                        rightSection: e ? T.jsx("div", {
                          className: "i-tabler-square-rounded-check",
                          style: {
                            width: I(20),
                            height: I(20)
                          }
                        }) : T.jsx("div", {
                          className: "i-tabler-device-floppy",
                          style: {
                            width: I(20),
                            height: I(20)
                          }
                        }),
                        radius: "m",
                        size: "m",
                        styles: {
                          root: {
                            paddingRight: I(14),
                            height: I(48)
                          },
                          section: {
                            marginLeft: I(22)
                          }
                        },
                        onClick: () => {
                          const l = n.current ? n.current.value : "", a = r.current ? r.current.value : "", u = o.current ? o.current.value : "", p = i.current ? i.current.value : "", d = s.current ? s.current.value : "";
                          wg.set_s3_config(l, a, u, p, d), t(true), setTimeout(() => {
                            t(false);
                          }, 2e3);
                        },
                        children: "Save"
                      })
                    })
                  })
                ]
              }),
              T.jsx("hr", {
                className: "c-gray"
              })
            ]
          })
        });
      }
      globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || {
        cache: /* @__PURE__ */ new Map(),
        get(e, t) {
          return this.cache.has(e) ? this.cache.get(e) : (this.cache.set(e, t), t);
        }
      };
      const pE = [
        {
          icon: "i-tabler-info-circle",
          label: "About"
        },
        {
          icon: "i-tabler-cloud-share",
          label: "Cloud"
        },
        {
          icon: "i-tabler-file-upload",
          label: "Upload"
        },
        {
          icon: "i-tabler-settings",
          label: "Settings"
        }
      ], Ju = globalThis.jotaiAtomCache.get("/home/shruti/Downloads/datafusion-wasm-playground-demo-main/src/components/Sidebar.tsx/activeTabAtom", mg("About"));
      Ju.debugLabel = "activeTabAtom";
      function mE() {
        switch (yg(Ju)) {
          case "About":
            return T.jsx(fE, {});
          case "Cloud":
            return T.jsx(dE, {});
          default:
            return T.jsx("div", {
              children: "Empty Tab"
            });
        }
      }
      function gE() {
        const [e, t] = vg(Ju), n = pE.map((r) => T.jsx(Tr, {
          label: r.label,
          position: "right",
          withArrow: true,
          transitionProps: {
            duration: 0
          },
          children: T.jsx(Cr, {
            onClick: () => t(r.label),
            className: "size-7 rounded-5 flex flex-items-center flex-justify-center " + (r.label === e ? " c-blue-5 bg-blue-1" : " hover:bg-gray-2"),
            "data-active": r.label === e || void 0,
            children: T.jsx("div", {
              className: r.icon + " m-1 rounded",
              style: {
                width: I(22),
                height: I(22)
              }
            })
          })
        }, r.label));
        return T.jsx("nav", {
          className: "bg-white h-full flex flex-col border-r-solid border-r-gray border-r-1",
          children: T.jsxs("div", {
            className: "flex flex-auto",
            children: [
              T.jsxs("div", {
                className: "flex-initial bg-white flex flex-col flex-items-center border-r-solid border-r-gray border-r-1",
                children: [
                  T.jsx("div", {
                    className: "w-full flex flex-justify-center h-30px border-b-solid border-b-gray-3 border-b-1",
                    children: T.jsx("div", {
                      className: "i-tabler-arrow-badge-right-filled size-7"
                    })
                  }),
                  n
                ]
              }),
              T.jsxs("div", {
                className: "flex-auto bg-gray-1",
                children: [
                  T.jsx(qu, {
                    order: 4,
                    className: "bg-white h-30px p-s border-b-solid border-b-gray border-b-1",
                    children: e
                  }),
                  T.jsx("div", {
                    className: "p2",
                    children: mE()
                  })
                ]
              })
            ]
          })
        });
      }
      globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || {
        cache: /* @__PURE__ */ new Map(),
        get(e, t) {
          return this.cache.has(e) ? this.cache.get(e) : (this.cache.set(e, t), t);
        }
      };
      console.log(So.greet());
      const wg = So.new();
      function hE() {
        return T.jsx(Cm, {
          children: T.jsxs("main", {
            className: "h-svh w-screen",
            children: [
              T.jsx("div", {
                className: "sidebar",
                children: T.jsx(gE, {})
              }),
              T.jsx(Gx, {})
            ]
          })
        });
      }
      globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || {
        cache: /* @__PURE__ */ new Map(),
        get(e, t) {
          return this.cache.has(e) ? this.cache.get(e) : (this.cache.set(e, t), t);
        }
      };
      bl.createRoot(document.getElementById("root")).render(T.jsx(cr.StrictMode, {
        children: T.jsx(hE, {})
      }));
    })();
  }
});
export default require_stdin();
