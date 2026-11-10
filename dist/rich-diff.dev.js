function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _createForOfIteratorHelperLoose(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (t) return (t = t.call(r)).next.bind(t);
  if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e) {
    t && (r = t);
    var o = 0;
    return function () {
      return o >= r.length ? {
        done: true
      } : {
        done: false,
        value: r[o++]
      };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _defineAccessor(e, r, n, t) {
  var c = {
    configurable: true,
    enumerable: true
  };
  return c[e] = t, Object.defineProperty(r, n, c);
}
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
function _regenerator() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
  var e,
    t,
    r = "function" == typeof Symbol ? Symbol : {},
    n = r.iterator || "@@iterator",
    o = r.toStringTag || "@@toStringTag";
  function i(r, n, o, i) {
    var c = n && n.prototype instanceof Generator ? n : Generator,
      u = Object.create(c.prototype);
    return _regeneratorDefine(u, "_invoke", function (r, n, o) {
      var i,
        c,
        u,
        f = 0,
        p = o || [],
        y = false,
        G = {
          p: 0,
          n: 0,
          v: e,
          a: d,
          f: d.bind(e, 4),
          d: function (t, r) {
            return i = t, c = 0, u = e, G.n = r, a;
          }
        };
      function d(r, n) {
        for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) {
          var o,
            i = p[t],
            d = G.p,
            l = i[2];
          r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0));
        }
        if (o || r > 1) return a;
        throw y = true, n;
      }
      return function (o, p, l) {
        if (f > 1) throw TypeError("Generator is already running");
        for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) {
          i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u);
          try {
            if (f = 2, i) {
              if (c || (o = "next"), t = i[o]) {
                if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object");
                if (!t.done) return t;
                u = t.value, c < 2 && (c = 0);
              } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1);
              i = e;
            } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break;
          } catch (t) {
            i = e, c = 1, u = t;
          } finally {
            f = 1;
          }
        }
        return {
          value: t,
          done: y
        };
      };
    }(r, o, i), true), u;
  }
  var a = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  t = Object.getPrototypeOf;
  var c = [][n] ? t(t([][n]())) : (_regeneratorDefine(t = {}, n, function () {
      return this;
    }), t),
    u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c);
  function f(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e;
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine(u), _regeneratorDefine(u, o, "Generator"), _regeneratorDefine(u, n, function () {
    return this;
  }), _regeneratorDefine(u, "toString", function () {
    return "[object Generator]";
  }), (_regenerator = function () {
    return {
      w: i,
      m: f
    };
  })();
}
function _regeneratorDefine(e, r, n, t) {
  var i = Object.defineProperty;
  try {
    i({}, "", {});
  } catch (e) {
    i = 0;
  }
  _regeneratorDefine = function (e, r, n, t) {
    function o(r, n) {
      _regeneratorDefine(e, r, function (e) {
        return this._invoke(r, n, e);
      });
    }
    r ? i ? i(e, r, {
      value: n,
      enumerable: !t,
      configurable: !t,
      writable: !t
    }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, _regeneratorDefine(e, r, n, t);
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var htmldiff_min = function (e) {
  var t = {};
  function n(s) {
    if (t[s]) return t[s].exports;
    var r = t[s] = {
      i: s,
      l: false,
      exports: {}
    };
    return e[s].call(r.exports, r, r.exports, n), r.l = true, r.exports;
  }
  return n.m = e, n.c = t, n.d = function (e, t, s) {
    n.o(e, t) || Object.defineProperty(e, t, {
      configurable: false,
      enumerable: true,
      get: s
    });
  }, n.r = function (e) {
    Object.defineProperty(e, "__esModule", {
      value: true
    });
  }, n.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };
    return n.d(t, "a", t), t;
  }, n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, n.p = "/dist/", n(n.s = 1);
}([function (e, t, n) {

  n.r(t);
  var s = {
    equal: 0,
    delete: 1,
    insert: 2,
    none: 3,
    replace: 4
  };
  var r = /*#__PURE__*/function () {
    function r(e, t, n) {
      this.startInOld = e, this.startInNew = t, this.size = n;
    }
    var _proto = r.prototype;
    _defineAccessor("get", _proto, "endInOld", function () {
      return this.startInOld + this.size;
    });
    _defineAccessor("get", _proto, "endInNew", function () {
      return this.startInNew + this.size;
    });
    return r;
  }();
  var i = function i() {
    this.blockSize = 0, this.repeatingWordsAccuracy = 0, this.ignoreWhitespaceDifferences = false;
  };
  var o = /^\s*<\/?[^>]+>\s*$/,
    l = /<[^\s>]+/,
    h = /^(\s|&nbsp;)+$/,
    c = /[\w\#@]+/,
    d = ["<img"];
  function a(e) {
    return !d.some(function (t) {
      return null !== e && e.startsWith(t);
    }) && o.test(e);
  }
  function u(e, t, n) {
    return ["<", t, ' class="', n, '">', e, "</", t, ">"].join("");
  }
  function p(e) {
    return "<" === e;
  }
  function f(e) {
    return "&" === e;
  }
  function w(e) {
    return ";" === e;
  }
  function g(e) {
    return h.test(e);
  }
  function I(e) {
    return a(e) ? function (e) {
      return e = l.exec(e)[0] + (e.endsWith("/>") ? "/>" : ">");
    }(e) : e;
  }
  function W(e) {
    return c.test(e);
  }
  function O(e, t, n) {
    return e.push(t), e.length > n && e.shift(), e.length !== n ? null : e.join("");
  }
  var x = /*#__PURE__*/function () {
    function x(e, t, n, s, r, i, o) {
      this.oldWords = e, this.newWords = t, this.startInOld = n, this.endInOld = s, this.startInNew = r, this.endInNew = i, this.options = o;
    }
    var _proto2 = x.prototype;
    _proto2.indexNewWords = function indexNewWords() {
      this.wordIndices = new Map();
      var e = [];
      for (var _t = this.startInNew; _t < this.endInNew; _t++) {
        var _n = O(e, this.normalizeForIndex(this.newWords[_t]), this.options.blockSize);
        null !== _n && (this.wordIndices.has(_n) ? this.wordIndices.get(_n).push(_t) : this.wordIndices.set(_n, [_t]));
      }
    };
    _proto2.normalizeForIndex = function normalizeForIndex(e) {
      return e = I(e), this.options.IgnoreWhiteSpaceDifferences && g(e) ? " " : e;
    };
    _proto2.findMatch = function findMatch() {
      if (this.indexNewWords(), this.removeRepeatingWords(), 0 === this.wordIndices.length) return null;
      var e = this.startInOld,
        t = this.startInNew,
        n = 0,
        s = new Map();
      var i = this.options.blockSize;
      var o = [];
      for (var _r = this.startInOld; _r < this.endInOld; _r++) {
        var _l = O(o, this.normalizeForIndex(this.oldWords[_r]), i);
        if (null === _l) continue;
        var _h = new Map();
        if (this.wordIndices.has(_l)) {
          for (var _iterator = _createForOfIteratorHelperLoose(this.wordIndices.get(_l)), _step; !(_step = _iterator()).done;) {
            var _o = _step.value;
            var _l2 = (s.has(_o - 1) ? s.get(_o - 1) : 0) + 1;
            _h.set(_o, _l2), _l2 > n && (e = _r - _l2 - i + 2, t = _o - _l2 - i + 2, n = _l2);
          }
          s = _h;
        } else s = _h;
      }
      return 0 !== n ? new r(e, t, n + i - 1) : null;
    };
    _proto2.removeRepeatingWords = function removeRepeatingWords() {
      var e = this.newWords.length + this.options.repeatingWordsAccuracy,
        t = Array.from(this.wordIndices.entries()).filter(function (t) {
          return t[1].length > e;
        }).map(function (e) {
          return e[0];
        });
      for (var _iterator2 = _createForOfIteratorHelperLoose(t), _step2; !(_step2 = _iterator2()).done;) {
        var _e = _step2.value;
        this.wordIndices.delete(_e);
      }
    };
    return x;
  }();
  var m = function m(e, t, n, s, r) {
    this.action = e, this.startInOld = t, this.endInOld = n, this.startInNew = s, this.endInNew = r;
  };
  var b = {
    character: 0,
    tag: 1,
    whitespace: 2,
    entity: 3
  };
  function N(e, t) {
    var n = {
        mode: b.character,
        currentWord: [],
        words: []
      },
      s = function (e, t) {
        var n = new Map();
        if (null === t) return n;
        for (var _iterator3 = _createForOfIteratorHelperLoose(t), _step3; !(_step3 = _iterator3()).done;) {
          var _s = _step3.value;
          var _t2 = void 0;
          for (; null !== (_t2 = _s.exec(e));) {
            if (n.has(_t2.index)) throw new Error("One or more block expressions result in a text sequence that overlaps. Current expression: " + _s.toString());
            n.set(_t2.index, _t2.index + _t2[0].length);
          }
        }
        return n;
      }(e, t),
      r = !!s.size,
      i = false,
      o = -1;
    for (var _t3 = 0; _t3 < e.length; _t3++) {
      var l = e[_t3];
      if (r) {
        o === index && (o = -1, i = false);
        if (s.has(index) && (i = true, o = s.get(index)), i) {
          n.currentWord.push(l), n.mode = b.character;
          continue;
        }
      }
      switch (n.mode) {
        case b.character:
          p(l) ? k(n, "<", b.tag) : f(l) ? k(n, l, b.entity) : g(l) ? k(n, l, b.whitespace) : W(l) && (0 === n.currentWord.length || W(n.currentWord[n.currentWord.length - 1])) ? n.currentWord.push(l) : k(n, l, b.character);
          break;
        case b.tag:
          ">" === l ? (n.currentWord.push(l), n.words.push(n.currentWord.join("")), n.currentWord = [], n.mode = g(l) ? b.whitespace : b.character) : n.currentWord.push(l);
          break;
        case b.whitespace:
          p(l) ? k(n, l, b.tag) : f(l) ? k(n, l, b.entity) : g(l) ? n.currentWord.push(l) : k(n, l, b.character);
          break;
        case b.entity:
          if (p(l)) k(n, l, b.tag);else if (g(l)) k(n, l, b.whitespace);else if (w(l)) {
            var _e3 = true;
            if (0 !== n.currentWord.length && (n.currentWord.push(l), n.words.push(n.currentWord.join("")), n.words.length > 2 && g(n.words[n.words.length - 2]) && g(n.words[n.words.length - 1]))) {
              var _t4 = n.words[n.words.length - 2],
                _s2 = n.words[n.words.length - 1];
              n.words.splice(n.words.length - 2, 2), n.currentWord = [(_t4 + _s2).split()], n.mode = b.whitespace, _e3 = false;
            }
            _e3 && (n.currentWord = [], n.mode = b.character);
          } else W(l) ? n.currentWord.push(l) : k(n, l, b.character);
      }
    }
    return 0 !== n.currentWord.length && n.words.push(n.currentWord.join("")), n.words;
  }
  function k(e, t, n) {
    0 !== e.currentWord.length && e.words.push(e.currentWord.join("")), e.currentWord = [t], e.mode = n;
  }
  var y = 4,
    M = new Map([["</strong>", 0], ["</em>", 0], ["</b>", 0], ["</i>", 0], ["</big>", 0], ["</small>", 0], ["</u>", 0], ["</sub>", 0], ["</strike>", 0], ["</s>", 0]]),
    T = /<((strong)|(b)|(i)|(em)|(big)|(small)|(u)|(sub)|(sup)|(strike)|(s))[\>\s]+/gi;
  var v = /*#__PURE__*/function () {
    function v(e, t) {
      this.content = [], this.newText = t, this.oldText = e, this.specialTagDiffStack = [], this.newWords = [], this.oldWords = [], this.matchGranularity = 0, this.blockExpressions = [], this.repeatingWordsAccuracy = 1, this.ignoreWhiteSpaceDifferences = false, this.orphanMatchThreshold = 0;
    }
    var _proto3 = v.prototype;
    _proto3.build = function build() {
      if (this.oldText === this.newText) return this.newText;
      this.splitInputsIntoWords(), this.matchGranularity = Math.min(y, this.oldWords.length, this.newWords.length);
      var e = this.operations();
      for (var _iterator4 = _createForOfIteratorHelperLoose(e), _step4; !(_step4 = _iterator4()).done;) {
        var _t5 = _step4.value;
        this.performOperation(_t5);
      }
      return this.content.join("");
    };
    _proto3.addBlockExpression = function addBlockExpression(e) {
      this.blockExpressions.push(e);
    };
    _proto3.splitInputsIntoWords = function splitInputsIntoWords() {
      this.oldWords = N(this.oldText, this.blockExpressions), this.oldText = null, this.newWords = N(this.newText, this.blockExpressions), this.newText = null;
    };
    _proto3.performOperation = function performOperation(e) {
      switch (e.action) {
        case s.equal:
          this.processEqualOperation(e);
          break;
        case s.delete:
          this.processDeleteOperation(e, "diffdel");
          break;
        case s.insert:
          this.processInsertOperation(e, "diffins");
          break;
        case s.none:
          break;
        case s.replace:
          this.processReplaceOperation(e);
      }
    };
    _proto3.processReplaceOperation = function processReplaceOperation(e) {
      this.processDeleteOperation(e, "diffmod"), this.processInsertOperation(e, "diffmod");
    };
    _proto3.processInsertOperation = function processInsertOperation(e, t) {
      var n = this.newWords.filter(function (t, n) {
        return n >= e.startInNew && n < e.endInNew;
      });
      this.insertTag("ins", t, n);
    };
    _proto3.processDeleteOperation = function processDeleteOperation(e, t) {
      var n = this.oldWords.filter(function (t, n) {
        return n >= e.startInOld && n < e.endInOld;
      });
      this.insertTag("del", t, n);
    };
    _proto3.processEqualOperation = function processEqualOperation(e) {
      var t = this.newWords.filter(function (t, n) {
        return n >= e.startInNew && n < e.endInNew;
      });
      this.content.push(t.join(""));
    };
    _proto3.insertTag = function insertTag(e, t, n) {
      for (; n.length;) {
        var _s3 = this.extractConsecutiveWords(n, function (e) {
            return !a(e);
          }),
          _r2 = "",
          _i = false;
        if (0 !== _s3.length) {
          var _n2 = u(_s3.join(""), e, t);
          this.content.push(_n2);
        } else {
          if (T.test(n[0])) {
            if (this.specialTagDiffStack.push(n[0]), _r2 = '<ins class="mod">', "del" === e) for (n.shift(); n.length > 0 && T.test(n[0]);) n.shift();
          } else if (M.has(n[0])) {
            var _t6 = 0 === this.specialTagDiffStack.length ? null : this.specialTagDiffStack.pop();
            if (null !== _t6 && _t6 === n[0].replace(/\//g, "") && (_r2 = "</ins>", _i = true), "del" === e) for (n.shift(); n.length > 0 && M.has(n[0]);) n.shift();
          }
          if (0 === n.length && 0 === _r2.length) break;
          _i ? this.content.push(_r2 + this.extractConsecutiveWords(n, a).join("")) : this.content.push(this.extractConsecutiveWords(n, a).join("") + _r2);
        }
      }
    };
    _proto3.extractConsecutiveWords = function extractConsecutiveWords(e, t) {
      var n = null;
      for (var _s4 = 0; _s4 < e.length; _s4++) {
        var _r3 = e[_s4];
        if (0 === _s4 && " " === _r3 && (e[_s4] = "&nbsp;"), !t(_r3)) {
          n = _s4;
          break;
        }
      }
      if (null !== n) {
        var _t7 = e.filter(function (e, t) {
          return t >= 0 && t < n;
        });
        return n > 0 && e.splice(0, n), _t7;
      }
      {
        var _t8 = e.filter(function (t, n) {
          return n >= 0 && n < e.length;
        });
        return e.splice(0, e.length), _t8;
      }
    };
    _proto3.operations = function operations() {
      var e = 0,
        t = 0,
        n = [],
        i = this.matchingBlocks();
      i.push(new r(this.oldWords.length, this.newWords.length, 0));
      var o = this.removeOrphans(i);
      for (var _iterator5 = _createForOfIteratorHelperLoose(o), _step5; !(_step5 = _iterator5()).done;) {
        var _r4 = _step5.value;
        var _i2 = void 0,
          _o2 = e === _r4.startInOld,
          _l3 = t === _r4.startInNew;
        (_i2 = _o2 || _l3 ? _o2 && !_l3 ? s.insert : _o2 ? s.none : s.delete : s.replace) !== s.none && n.push(new m(_i2, e, _r4.startInOld, t, _r4.startInNew)), 0 !== _r4.length && n.push(new m(s.equal, _r4.startInOld, _r4.endInOld, _r4.startInNew, _r4.endInNew)), e = _r4.endInOld, t = _r4.endInNew;
      }
      return n;
    };
    _proto3.removeOrphans = /*#__PURE__*/_regenerator().m(function removeOrphans(e) {
      var t, n, _iterator6, _step6, _s5, _e4, _i3, _o3, _t9;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            t = null, n = null;
            _iterator6 = _createForOfIteratorHelperLoose(e);
          case 1:
            if ((_step6 = _iterator6()).done) {
              _context.n = 7;
              break;
            }
            _s5 = _step6.value;
            if (!(null === n)) {
              _context.n = 2;
              break;
            }
            t = new r(0, 0, 0), n = _s5;
            return _context.a(3, 6);
          case 2:
            if (!(t.endInOld === n.startInOld && t.endInNew === n.startInNew || n.endInOld === _s5.startInOld && n.endInNew === _s5.startInNew)) {
              _context.n = 4;
              break;
            }
            _context.n = 3;
            return n;
          case 3:
            t = n;
            n = _s5;
            return _context.a(3, 6);
          case 4:
            _e4 = function _e4(e, t) {
              return e + t.length;
            }, _i3 = this.oldWords.slice(t.endInOld, _s5.startInOld).reduce(_e4, 0), _o3 = this.newWords.slice(t.endInNew, _s5.startInNew).reduce(_e4, 0);
            _t9 = this.newWords.slice(n.startInNew, n.endInNew).reduce(_e4, 0) > Math.max(_i3, _o3) * this.orphanMatchThreshold;
            if (!_t9) {
              _context.n = 5;
              break;
            }
            _context.n = 5;
            return n;
          case 5:
            t = n;
            n = _s5;
          case 6:
            _context.n = 1;
            break;
          case 7:
            _context.n = 8;
            return n;
          case 8:
            return _context.a(2);
        }
      }, removeOrphans, this);
    });
    _proto3.matchingBlocks = function matchingBlocks() {
      var e = [];
      return this.findMatchingBlocks(0, this.oldWords.length, 0, this.newWords.length, e), e;
    };
    _proto3.findMatchingBlocks = function findMatchingBlocks(e, t, n, s, r) {
      var i = this.findMatch(e, t, n, s);
      null !== i && (e < i.startInOld && n < i.startInNew && this.findMatchingBlocks(e, i.startInOld, n, i.startInNew, r), r.push(i), i.endInOld < t && i.endInNew < s && this.findMatchingBlocks(i.endInOld, t, i.endInNew, s, r));
    };
    _proto3.findMatch = function findMatch(e, t, n, s) {
      for (var _r5 = this.matchGranularity; _r5 > 0; _r5--) {
        var _o4 = new i();
        _o4.blockSize = _r5, _o4.repeatingWordsAccuracy = this.repeatingWordsAccuracy, _o4.ignoreWhitespaceDifferences = this.ignoreWhiteSpaceDifferences;
        var _l4 = new x(this.oldWords, this.newWords, e, t, n, s, _o4).findMatch();
        if (null !== _l4) return _l4;
      }
      return null;
    };
    return v;
  }();
  v.execute = function (e, t) {
    return new v(e, t).build();
  };
  t.default = v;
}, function (e, t, n) {
  e.exports = n(0);
}]);
var HtmlDiff = /*@__PURE__*/getDefaultExportFromCjs(htmldiff_min);

/**
 * htmldiff-js 引擎封装
 * 直接导入依赖，打包时一起打包
 */

// 引擎名称
var engineName$1 = 'htmldiff';

/**
 * 生成基于内容的唯一占位符
 * 相同内容生成相同的占位符，避免 htmldiff 误判
 */
function generatePlaceholder(type, content) {
  // 使用内容的简单哈希（取前 8 位字符编码和）
  var hash = 0;
  for (var i = 0; i < content.length; i++) {
    hash = (hash << 5) - hash + content.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
  }
  // 使用绝对值，确保正数
  var hashValue = Math.abs(hash).toString(36);
  return "__RICH_DIFF_PROTECTED_" + type + "_" + hashValue + "__";
}

/**
 * 保护用户原内容中的 ins/del 标签
 * 将整个标签块（包括内容）替换为占位符，避免被 htmldiff-js 对比
 * @param {string} html - HTML 内容
 * @returns {Object} { protected: 保护后的 HTML, placeholders: 占位符映射 }
 */
function protectUserInsDel(html) {
  if (!html || typeof html !== 'string') return {
    protected: html,
    placeholders: new Map()
  };

  // 不重置计数器，保证全局唯一
  var placeholders = new Map();

  // 替换用户 ins 标签（整个标签块，包括内容）
  // 只保护不带 data-diff 属性的标签（即用户原内容）
  html = html.replace(/<ins(\s[^>]*)?>([\s\S]*?)<\/ins>/gi, function (match, attrs, content) {
    // 如果带有 data-diff 属性，说明是差异标记，不保护
    if (attrs && attrs.includes('data-diff=')) {
      return match;
    }
    // 整个标签块替换为占位符（包括内容）
    // 使用内容哈希，确保相同内容得到相同的占位符
    var placeholder = generatePlaceholder('INS', match);
    placeholders.set(placeholder, match);
    return placeholder;
  });

  // 替换用户 del 标签（整个标签块，包括内容）
  html = html.replace(/<del(\s[^>]*)?>([\s\S]*?)<\/del>/gi, function (match, attrs, content) {
    if (attrs && attrs.includes('data-diff=')) {
      return match;
    }
    // 使用内容哈希，确保相同内容得到相同的占位符
    var placeholder = generatePlaceholder('DEL', match);
    placeholders.set(placeholder, match);
    return placeholder;
  });
  return {
    protected: html,
    placeholders: placeholders
  };
}

/**
 * 恢复用户原内容中的 ins/del 标签
 * @param {string} html - HTML 内容
 * @param {Map} placeholders - 占位符映射
 * @returns {string} 恢复后的 HTML
 */
function restoreUserInsDel(html, placeholders) {
  if (!html || !placeholders || placeholders.size === 0) return html;
  var result = html;

  // 多轮还原，确保所有占位符都被替换
  var maxIterations = 10; // 防止无限循环
  var changed = true;
  while (changed && maxIterations > 0) {
    changed = false;
    placeholders.forEach(function (original, placeholder) {
      if (result.includes(placeholder)) {
        result = result.replace(placeholder, original);
        changed = true;
      }
    });
    maxIterations--;
  }

  // 清理残留的占位符（无法还原的直接删除）
  result = result.replace(/__RICH_DIFF_PROTECTED_(INS|DEL)_[a-z0-9]+__/g, '');
  return result;
}

/**
 * 标准化 HTML 格式
 * 统一自闭合标签、空白字符等，避免格式差异
 * @param {string} html - HTML 内容
 * @returns {string} 标准化后的 HTML
 */
function normalizeHtml(html) {
  if (!html || typeof html !== 'string') return html;
  var result = html;

  // 统一自闭合标签格式：<br/> -> <br>, <img ... /> -> <img ...>
  result = result.replace(/<br\s*\/>/gi, '<br>');
  result = result.replace(/<img([^>]*)\s*\/>/gi, '<img$1>');
  result = result.replace(/<hr\s*\/>/gi, '<hr>');
  result = result.replace(/<input([^>]*)\s*\/>/gi, '<input$1>');

  // 移除标签间的多余空白（保留标签内文本中的空格）
  // 只处理标签之间的空白，不影响文本内容
  result = result.replace(/>\s+</g, '><');

  // 移除行首行尾空白
  result = result.trim();
  return result;
}

/**
 * 对比 HTML 内容
 * @param {string} oldHtml - 旧 HTML
 * @param {string} newHtml - 新 HTML
 * @returns {string} 带 <ins>/<del> 标签的 HTML
 */
function diffHTML$2(oldHtml, newHtml) {
  // 快速相等判断
  if (oldHtml === newHtml) return newHtml;
  if (!oldHtml) return newHtml;
  if (!newHtml) return '';

  // 使用打包进来的 HtmlDiff
  if (!HtmlDiff) {
    console.warn('[rich-diff] htmldiff-js 未正确加载');
    return newHtml;
  }
  try {
    // 标准化 HTML 格式，避免空白字符和自闭合标签差异
    var normalizedOld = normalizeHtml(oldHtml);
    var normalizedNew = normalizeHtml(newHtml);

    // 保护用户原内容中的 ins/del 标签
    var _protectUserInsDel = protectUserInsDel(normalizedOld),
      protectedOld = _protectUserInsDel.protected,
      oldPlaceholders = _protectUserInsDel.placeholders;
    var _protectUserInsDel2 = protectUserInsDel(normalizedNew),
      protectedNew = _protectUserInsDel2.protected,
      newPlaceholders = _protectUserInsDel2.placeholders;

    // 执行对比
    var result = HtmlDiff.execute(protectedOld, protectedNew);

    // 合并占位符映射
    var allPlaceholders = new Map();
    Array.from(oldPlaceholders.entries()).forEach(function (_ref) {
      var k = _ref[0],
        v = _ref[1];
      return allPlaceholders.set(k, v);
    });
    Array.from(newPlaceholders.entries()).forEach(function (_ref2) {
      var k = _ref2[0],
        v = _ref2[1];
      return allPlaceholders.set(k, v);
    });

    // 恢复用户原内容中的 ins/del 标签
    result = restoreUserInsDel(result, allPlaceholders);
    return result;
  } catch (error) {
    console.warn('[rich-diff] htmldiff 对比失败:', error);
    return newHtml;
  }
}

/**
 * 对比纯文本
 * @param {string} oldText - 旧文本
 * @param {string} newText - 新文本
 * @returns {string} 带差异标记的文本
 */
function diffText$2(oldText, newText) {
  return diffHTML$2(oldText, newText);
}
var htmldiff = {
  engineName: engineName$1,
  diffHTML: diffHTML$2,
  diffText: diffText$2
};

var htmldiffEngine = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: htmldiff,
  diffHTML: diffHTML$2,
  diffText: diffText$2,
  engineName: engineName$1
});

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */

var _assign = function __assign() {
  _assign = Object.assign || function __assign(t) {
    var arguments$1 = arguments;
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments$1[i];
      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) {
          t[p] = s[p];
        }
      }
    }
    return t;
  };
  return _assign.apply(this, arguments);
};
function __spreadArray(to, from, pack) {
  {
    for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
        if (!ar) {
          ar = Array.prototype.slice.call(from, 0, i);
        }
        ar[i] = from[i];
      }
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}
typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
var Diff = /** @class */function () {
  function Diff(options) {
    if (options === void 0) {
      options = {};
    }
    var _this = this;
    Object.entries(options).forEach(function (_a) {
      var key = _a[0],
        value = _a[1];
      return _this[key] = value;
    });
  }
  Diff.prototype.toString = function () {
    return JSON.stringify(this);
  };
  Diff.prototype.setValue = function (aKey, aValue) {
    this[aKey] = aValue;
    return this;
  };
  return Diff;
}();
/**
 * Checks if an element is of a certain type using direct property checking or DOM instanceof
 *
 * @param element The element to check
 * @param elementTypeNames The element type names to check against
 * @param simplifiedCheck If true, uses simplified checking based on nodeName/nodeType
 * @returns boolean indicating if the element matches any of the specified types
 */
function checkElementType(element, simplifiedCheck) {
  var arguments$1 = arguments;
  if (simplifiedCheck === void 0) {
    simplifiedCheck = false;
  }
  var elementTypeNames = [];
  for (var _i = 2; _i < arguments.length; _i++) {
    elementTypeNames[_i - 2] = arguments$1[_i];
  }
  if (typeof element === "undefined" || element === null) {
    return false;
  }
  // Simplified check for primitive virtual DOMs without ownerDocument
  if (simplifiedCheck) {
    var simplifiedResult = elementTypeNames.some(function (elementTypeName) {
      // Special case for basic element types
      if (elementTypeName === "Element") {
        // Enhanced check that handles both virtual DOM objects and real DOM elements
        return element.nodeType === 1 || typeof element.nodeName === "string" && element.nodeName !== "#text" && element.nodeName !== "#comment" ||
        // Additional check for real DOM elements that might not have nodeType
        element.tagName && typeof element.tagName === "string" ||
        // Check if it has DOM element-like properties (fallback)
        element.setAttribute && typeof element.setAttribute === "function";
      }
      if (elementTypeName === "Text") {
        return element.nodeType === 3 || element.nodeName === "#text";
      }
      if (elementTypeName === "Comment") {
        return element.nodeType === 8 || element.nodeName === "#comment";
      }
      // For HTML element types, check nodeName or tagName
      if (elementTypeName.startsWith("HTML") && elementTypeName.endsWith("Element")) {
        var tagName = elementTypeName.slice(4, -7).toLowerCase();
        return element.nodeName && element.nodeName.toLowerCase() === tagName || element.tagName && element.tagName.toLowerCase() === tagName;
      }
      return false;
    });
    // If simplified check succeeds, return true
    if (simplifiedResult) {
      return true;
    }
    // Fallback to DOM-based check if simplified check fails and element has ownerDocument
    if (element.ownerDocument) {
      return elementTypeNames.some(function (elementTypeName) {
        var _a, _b;
        return typeof ((_b = (_a = element === null || element === void 0 ? void 0 : element.ownerDocument) === null || _a === void 0 ? void 0 : _a.defaultView) === null || _b === void 0 ? void 0 : _b[elementTypeName]) === "function" && element instanceof element.ownerDocument.defaultView[elementTypeName];
      });
    }
    return false;
  }
  // DOM-based check
  return elementTypeNames.some(function (elementTypeName) {
    var _a, _b;
    // We need to check if the specified type is defined
    // because otherwise instanceof throws an exception.
    return typeof ((_b = (_a = element === null || element === void 0 ? void 0 : element.ownerDocument) === null || _a === void 0 ? void 0 : _a.defaultView) === null || _b === void 0 ? void 0 : _b[elementTypeName]) === "function" && element instanceof element.ownerDocument.defaultView[elementTypeName];
  });
}
function objToNode(objNode, insideSvg, options) {
  var node;
  if (objNode.nodeName === "#text") {
    node = options.document.createTextNode(objNode.data);
  } else if (objNode.nodeName === "#comment") {
    node = options.document.createComment(objNode.data);
  } else {
    if (insideSvg) {
      node = options.document.createElementNS("http://www.w3.org/2000/svg", objNode.nodeName);
      if (objNode.nodeName === "foreignObject") {
        insideSvg = false;
      }
    } else if (objNode.nodeName.toLowerCase() === "svg") {
      node = options.document.createElementNS("http://www.w3.org/2000/svg", "svg");
      insideSvg = true;
    } else {
      node = options.document.createElement(objNode.nodeName);
    }
    if (objNode.attributes) {
      Object.entries(objNode.attributes).forEach(function (_a) {
        var key = _a[0],
          value = _a[1];
        return node.setAttribute(key, value);
      });
    }
    if (objNode.childNodes) {
      node = node;
      objNode.childNodes.forEach(function (childNode) {
        return node.appendChild(objToNode(childNode, insideSvg, options));
      });
    }
    if (options.valueDiffing) {
      if (objNode.value && checkElementType(node, options.simplifiedElementCheck, "HTMLButtonElement", "HTMLDataElement", "HTMLInputElement", "HTMLLIElement", "HTMLMeterElement", "HTMLOptionElement", "HTMLProgressElement", "HTMLParamElement")) {
        node.value = objNode.value;
      }
      if (objNode.checked && checkElementType(node, options.simplifiedElementCheck, "HTMLInputElement")) {
        node.checked = objNode.checked;
      }
      if (objNode.selected && checkElementType(node, options.simplifiedElementCheck, "HTMLOptionElement")) {
        node.selected = objNode.selected;
      }
    }
  }
  return node;
}

// ===== Apply a diff =====
var getFromRoute = function getFromRoute(node, route) {
  route = route.slice();
  while (route.length > 0) {
    var c = route.splice(0, 1)[0];
    node = node.childNodes[c];
  }
  return node;
};
function applyDiff$1(tree, diff, options) {
  var action = diff[options._const.action];
  var route = diff[options._const.route];
  var node;
  if (![options._const.addElement, options._const.addTextElement].includes(action)) {
    // For adding nodes, we calculate the route later on. It's different because it includes the position of the newly added item.
    node = getFromRoute(tree, route);
  }
  var newNode;
  var reference;
  var nodeArray;
  // pre-diff hook
  var info = {
    diff: diff,
    node: node
  };
  if (options.preDiffApply(info)) {
    return true;
  }
  switch (action) {
    case options._const.addAttribute:
      if (!node || !checkElementType(node, options.simplifiedElementCheck, "Element")) {
        return false;
      }
      node.setAttribute(diff[options._const.name], diff[options._const.value]);
      break;
    case options._const.modifyAttribute:
      if (!node || !checkElementType(node, options.simplifiedElementCheck, "Element")) {
        return false;
      }
      node.setAttribute(diff[options._const.name], diff[options._const.newValue]);
      if (checkElementType(node, options.simplifiedElementCheck, "HTMLInputElement") && diff[options._const.name] === "value") {
        node.value = diff[options._const.newValue];
      }
      break;
    case options._const.removeAttribute:
      if (!node || !checkElementType(node, options.simplifiedElementCheck, "Element")) {
        return false;
      }
      node.removeAttribute(diff[options._const.name]);
      break;
    case options._const.modifyTextElement:
      if (!node || !checkElementType(node, options.simplifiedElementCheck, "Text")) {
        return false;
      }
      options.textDiff(node, node.data, diff[options._const.oldValue], diff[options._const.newValue]);
      if (checkElementType(node.parentNode, options.simplifiedElementCheck, "HTMLTextAreaElement")) {
        node.parentNode.value = diff[options._const.newValue];
      }
      break;
    case options._const.modifyValue:
      if (!node || typeof node.value === "undefined") {
        return false;
      }
      node.value = diff[options._const.newValue];
      break;
    case options._const.modifyComment:
      if (!node || !checkElementType(node, options.simplifiedElementCheck, "Comment")) {
        return false;
      }
      options.textDiff(node, node.data, diff[options._const.oldValue], diff[options._const.newValue]);
      break;
    case options._const.modifyChecked:
      if (!node || typeof node.checked === "undefined") {
        return false;
      }
      node.checked = diff[options._const.newValue];
      break;
    case options._const.modifySelected:
      if (!node || typeof node.selected === "undefined") {
        return false;
      }
      node.selected = diff[options._const.newValue];
      break;
    case options._const.replaceElement:
      {
        var insideSvg = diff[options._const.newValue].nodeName.toLowerCase() === "svg" || node.parentNode.namespaceURI === "http://www.w3.org/2000/svg";
        node.parentNode.replaceChild(objToNode(diff[options._const.newValue], insideSvg, options), node);
        break;
      }
    case options._const.relocateGroup:
      nodeArray = __spreadArray([], new Array(diff[options._const.groupLength])).map(function () {
        return node.removeChild(node.childNodes[diff[options._const.from]]);
      });
      nodeArray.forEach(function (childNode, index) {
        if (index === 0) {
          reference = node.childNodes[diff[options._const.to]];
        }
        node.insertBefore(childNode, reference || null);
      });
      break;
    case options._const.removeElement:
      node.parentNode.removeChild(node);
      break;
    case options._const.addElement:
      {
        var parentRoute = route.slice();
        var c = parentRoute.splice(parentRoute.length - 1, 1)[0];
        node = getFromRoute(tree, parentRoute);
        if (!checkElementType(node, options.simplifiedElementCheck, "Element")) {
          return false;
        }
        node.insertBefore(objToNode(diff[options._const.element], node.namespaceURI === "http://www.w3.org/2000/svg", options), node.childNodes[c] || null);
        break;
      }
    case options._const.removeTextElement:
      {
        if (!node || node.nodeType !== 3) {
          return false;
        }
        var parentNode = node.parentNode;
        parentNode.removeChild(node);
        if (checkElementType(parentNode, options.simplifiedElementCheck, "HTMLTextAreaElement")) {
          parentNode.value = "";
        }
        break;
      }
    case options._const.addTextElement:
      {
        var parentRoute = route.slice();
        var c = parentRoute.splice(parentRoute.length - 1, 1)[0];
        newNode = options.document.createTextNode(diff[options._const.value]);
        node = getFromRoute(tree, parentRoute);
        if (!node.childNodes) {
          return false;
        }
        node.insertBefore(newNode, node.childNodes[c] || null);
        if (checkElementType(node.parentNode, options.simplifiedElementCheck, "HTMLTextAreaElement")) {
          node.parentNode.value = diff[options._const.value];
        }
        break;
      }
    default:
      console.log("unknown action");
  }
  // if a new node was created, we might be interested in its
  // post diff hook
  options.postDiffApply({
    diff: info.diff,
    node: info.node,
    newNode: newNode
  });
  return true;
}
function applyDOM(tree, diffs, options) {
  return diffs.every(function (diff) {
    return applyDiff$1(tree, diff, options);
  });
}

// ===== Undo a diff =====
function swap(obj, p1, p2) {
  var tmp = obj[p1];
  obj[p1] = obj[p2];
  obj[p2] = tmp;
}
function undoDiff(tree, diff, options) {
  switch (diff[options._const.action]) {
    case options._const.addAttribute:
      diff[options._const.action] = options._const.removeAttribute;
      applyDiff$1(tree, diff, options);
      break;
    case options._const.modifyAttribute:
      swap(diff, options._const.oldValue, options._const.newValue);
      applyDiff$1(tree, diff, options);
      break;
    case options._const.removeAttribute:
      diff[options._const.action] = options._const.addAttribute;
      applyDiff$1(tree, diff, options);
      break;
    case options._const.modifyTextElement:
      swap(diff, options._const.oldValue, options._const.newValue);
      applyDiff$1(tree, diff, options);
      break;
    case options._const.modifyValue:
      swap(diff, options._const.oldValue, options._const.newValue);
      applyDiff$1(tree, diff, options);
      break;
    case options._const.modifyComment:
      swap(diff, options._const.oldValue, options._const.newValue);
      applyDiff$1(tree, diff, options);
      break;
    case options._const.modifyChecked:
      swap(diff, options._const.oldValue, options._const.newValue);
      applyDiff$1(tree, diff, options);
      break;
    case options._const.modifySelected:
      swap(diff, options._const.oldValue, options._const.newValue);
      applyDiff$1(tree, diff, options);
      break;
    case options._const.replaceElement:
      swap(diff, options._const.oldValue, options._const.newValue);
      applyDiff$1(tree, diff, options);
      break;
    case options._const.relocateGroup:
      swap(diff, options._const.from, options._const.to);
      applyDiff$1(tree, diff, options);
      break;
    case options._const.removeElement:
      diff[options._const.action] = options._const.addElement;
      applyDiff$1(tree, diff, options);
      break;
    case options._const.addElement:
      diff[options._const.action] = options._const.removeElement;
      applyDiff$1(tree, diff, options);
      break;
    case options._const.removeTextElement:
      diff[options._const.action] = options._const.addTextElement;
      applyDiff$1(tree, diff, options);
      break;
    case options._const.addTextElement:
      diff[options._const.action] = options._const.removeTextElement;
      applyDiff$1(tree, diff, options);
      break;
    default:
      console.log("unknown action");
  }
}
function undoDOM(tree, diffs, options) {
  diffs = diffs.slice();
  diffs.reverse();
  diffs.forEach(function (diff) {
    undoDiff(tree, diff, options);
  });
}
var elementDescriptors = function elementDescriptors(el) {
  var output = [];
  output.push(el.nodeName);
  if (el.nodeName !== "#text" && el.nodeName !== "#comment") {
    el = el;
    if (el.attributes) {
      if (el.attributes["class"]) {
        output.push("".concat(el.nodeName, ".").concat(el.attributes["class"].replace(/ /g, ".")));
      }
      if (el.attributes.id) {
        output.push("".concat(el.nodeName, "#").concat(el.attributes.id));
      }
    }
  }
  return output;
};
var findUniqueDescriptors = function findUniqueDescriptors(li) {
  var uniqueDescriptors = {};
  var duplicateDescriptors = {};
  li.forEach(function (node) {
    elementDescriptors(node).forEach(function (descriptor) {
      var inUnique = descriptor in uniqueDescriptors;
      var inDupes = descriptor in duplicateDescriptors;
      if (!inUnique && !inDupes) {
        uniqueDescriptors[descriptor] = true;
      } else if (inUnique) {
        delete uniqueDescriptors[descriptor];
        duplicateDescriptors[descriptor] = true;
      }
    });
  });
  return uniqueDescriptors;
};
var uniqueInBoth = function uniqueInBoth(l1, l2) {
  var l1Unique = findUniqueDescriptors(l1);
  var l2Unique = findUniqueDescriptors(l2);
  var inBoth = {};
  Object.keys(l1Unique).forEach(function (key) {
    if (l2Unique[key]) {
      inBoth[key] = true;
    }
  });
  return inBoth;
};
var _removeDone = function removeDone(tree) {
  delete tree.outerDone;
  delete tree.innerDone;
  delete tree.valueDone;
  if (tree.childNodes) {
    return tree.childNodes.every(_removeDone);
  } else {
    return true;
  }
};
var _cleanNode = function cleanNode(diffNode) {
  if (Object.prototype.hasOwnProperty.call(diffNode, "data")) {
    var textNode = {
      nodeName: diffNode.nodeName === "#text" ? "#text" : "#comment",
      data: diffNode.data
    };
    return textNode;
  } else {
    var elementNode = {
      nodeName: diffNode.nodeName
    };
    diffNode = diffNode;
    if (Object.prototype.hasOwnProperty.call(diffNode, "attributes")) {
      elementNode.attributes = _assign({}, diffNode.attributes);
    }
    if (Object.prototype.hasOwnProperty.call(diffNode, "checked")) {
      elementNode.checked = diffNode.checked;
    }
    if (Object.prototype.hasOwnProperty.call(diffNode, "value")) {
      elementNode.value = diffNode.value;
    }
    if (Object.prototype.hasOwnProperty.call(diffNode, "selected")) {
      elementNode.selected = diffNode.selected;
    }
    if (Object.prototype.hasOwnProperty.call(diffNode, "childNodes")) {
      elementNode.childNodes = diffNode.childNodes.map(function (diffChildNode) {
        return _cleanNode(diffChildNode);
      });
    }
    return elementNode;
  }
};
var _isEqual = function isEqual(e1, e2) {
  if (!["nodeName", "value", "checked", "selected", "data"].every(function (element) {
    if (e1[element] !== e2[element]) {
      return false;
    }
    return true;
  })) {
    return false;
  }
  if (Object.prototype.hasOwnProperty.call(e1, "data")) {
    // Comment or Text
    return true;
  }
  e1 = e1;
  e2 = e2;
  if (Boolean(e1.attributes) !== Boolean(e2.attributes)) {
    return false;
  }
  if (Boolean(e1.childNodes) !== Boolean(e2.childNodes)) {
    return false;
  }
  if (e1.attributes) {
    var e1Attributes = Object.keys(e1.attributes);
    var e2Attributes = Object.keys(e2.attributes);
    if (e1Attributes.length !== e2Attributes.length) {
      return false;
    }
    if (!e1Attributes.every(function (attribute) {
      if (e1.attributes[attribute] !== e2.attributes[attribute]) {
        return false;
      }
      return true;
    })) {
      return false;
    }
  }
  if (e1.childNodes) {
    if (e1.childNodes.length !== e2.childNodes.length) {
      return false;
    }
    if (!e1.childNodes.every(function (childNode, index) {
      return _isEqual(childNode, e2.childNodes[index]);
    })) {
      return false;
    }
  }
  return true;
};
var _roughlyEqual = function roughlyEqual(e1, e2, uniqueDescriptors, sameSiblings, preventRecursion) {
  if (preventRecursion === void 0) {
    preventRecursion = false;
  }
  if (!e1 || !e2) {
    return false;
  }
  if (e1.nodeName !== e2.nodeName) {
    return false;
  }
  if (["#text", "#comment"].includes(e1.nodeName)) {
    // Note that we initially don't care what the text content of a node is,
    // the mere fact that it's the same tag and "has text" means it's roughly
    // equal, and then we can find out the true text difference later.
    return preventRecursion ? true : e1.data === e2.data;
  }
  e1 = e1;
  e2 = e2;
  if (e1.nodeName in uniqueDescriptors) {
    return true;
  }
  if (e1.attributes && e2.attributes) {
    if (e1.attributes.id) {
      if (e1.attributes.id !== e2.attributes.id) {
        return false;
      } else {
        var idDescriptor = "".concat(e1.nodeName, "#").concat(e1.attributes.id);
        if (idDescriptor in uniqueDescriptors) {
          return true;
        }
      }
    }
    if (e1.attributes["class"] && e1.attributes["class"] === e2.attributes["class"]) {
      var classDescriptor = "".concat(e1.nodeName, ".").concat(e1.attributes["class"].replace(/ /g, "."));
      if (classDescriptor in uniqueDescriptors) {
        return true;
      }
    }
  }
  if (sameSiblings) {
    return true;
  }
  var nodeList1 = e1.childNodes ? e1.childNodes.slice().reverse() : [];
  var nodeList2 = e2.childNodes ? e2.childNodes.slice().reverse() : [];
  if (nodeList1.length !== nodeList2.length) {
    return false;
  }
  if (preventRecursion) {
    return nodeList1.every(function (element, index) {
      return element.nodeName === nodeList2[index].nodeName;
    });
  } else {
    // note: we only allow one level of recursion at any depth. If 'preventRecursion'
    // was not set, we must explicitly force it to true for child iterations.
    var childUniqueDescriptors_1 = uniqueInBoth(nodeList1, nodeList2);
    return nodeList1.every(function (element, index) {
      return _roughlyEqual(element, nodeList2[index], childUniqueDescriptors_1, true, true);
    });
  }
};
/**
 * based on https://en.wikibooks.org/wiki/Algorithm_implementation/Strings/Longest_common_substring#JavaScript
 */
var findCommonSubsets = function findCommonSubsets(c1, c2, marked1, marked2) {
  var lcsSize = 0;
  var index = [];
  var c1Length = c1.length;
  var c2Length = c2.length;
  var
  // set up the matching table
  matches = __spreadArray([], new Array(c1Length + 1)).map(function () {
    return [];
  });
  var uniqueDescriptors = uniqueInBoth(c1, c2);
  var
  // If all of the elements are the same tag, id and class, then we can
  // consider them roughly the same even if they have a different number of
  // children. This will reduce removing and re-adding similar elements.
  subsetsSame = c1Length === c2Length;
  if (subsetsSame) {
    c1.some(function (element, i) {
      var c1Desc = elementDescriptors(element);
      var c2Desc = elementDescriptors(c2[i]);
      if (c1Desc.length !== c2Desc.length) {
        subsetsSame = false;
        return true;
      }
      c1Desc.some(function (description, i) {
        if (description !== c2Desc[i]) {
          subsetsSame = false;
          return true;
        }
      });
      if (!subsetsSame) {
        return true;
      }
    });
  }
  // fill the matches with distance values
  for (var c1Index = 0; c1Index < c1Length; c1Index++) {
    var c1Element = c1[c1Index];
    for (var c2Index = 0; c2Index < c2Length; c2Index++) {
      var c2Element = c2[c2Index];
      if (!marked1[c1Index] && !marked2[c2Index] && _roughlyEqual(c1Element, c2Element, uniqueDescriptors, subsetsSame)) {
        matches[c1Index + 1][c2Index + 1] = matches[c1Index][c2Index] ? matches[c1Index][c2Index] + 1 : 1;
        if (matches[c1Index + 1][c2Index + 1] >= lcsSize) {
          lcsSize = matches[c1Index + 1][c2Index + 1];
          index = [c1Index + 1, c2Index + 1];
        }
      } else {
        matches[c1Index + 1][c2Index + 1] = 0;
      }
    }
  }
  if (lcsSize === 0) {
    return false;
  }
  return {
    oldValue: index[0] - lcsSize,
    newValue: index[1] - lcsSize,
    length: lcsSize
  };
};
var makeBooleanArray = function makeBooleanArray(n, v) {
  return __spreadArray([], new Array(n)).map(function () {
    return v;
  });
};
/**
 * Generate arrays that indicate which node belongs to which subset,
 * or whether it's actually an orphan node, existing in only one
 * of the two trees, rather than somewhere in both.
 *
 * So if t1 = <img><canvas><br>, t2 = <canvas><br><img>.
 * The longest subset is "<canvas><br>" (length 2), so it will group 0.
 * The second longest is "<img>" (length 1), so it will be group 1.
 * gaps1 will therefore be [1,0,0] and gaps2 [0,0,1].
 *
 * If an element is not part of any group, it will stay being 'true', which
 * is the initial value. For example:
 * t1 = <img><p></p><br><canvas>, t2 = <b></b><br><canvas><img>
 *
 * The "<p></p>" and "<b></b>" do only show up in one of the two and will
 * therefore be marked by "true". The remaining parts are parts of the
 * groups 0 and 1:
 * gaps1 = [1, true, 0, 0], gaps2 = [true, 0, 0, 1]
 *
 */
var getGapInformation = function getGapInformation(t1, t2, stable) {
  var gaps1 = t1.childNodes ? makeBooleanArray(t1.childNodes.length, true) : [];
  var gaps2 = t2.childNodes ? makeBooleanArray(t2.childNodes.length, true) : [];
  var group = 0;
  // give elements from the same subset the same group number
  stable.forEach(function (subset) {
    var endOld = subset.oldValue + subset.length;
    var endNew = subset.newValue + subset.length;
    for (var j = subset.oldValue; j < endOld; j += 1) {
      gaps1[j] = group;
    }
    for (var j = subset.newValue; j < endNew; j += 1) {
      gaps2[j] = group;
    }
    group += 1;
  });
  return {
    gaps1: gaps1,
    gaps2: gaps2
  };
};
/**
 * Find all matching subsets, based on immediate child differences only.
 */
var markBoth = function markBoth(marked1, marked2, subset, i) {
  marked1[subset.oldValue + i] = true;
  marked2[subset.newValue + i] = true;
};
var markSubTrees = function markSubTrees(oldTree, newTree) {
  // note: the child lists are views, and so update as we update old/newTree
  var oldChildren = oldTree.childNodes ? oldTree.childNodes : [];
  var newChildren = newTree.childNodes ? newTree.childNodes : [];
  var marked1 = makeBooleanArray(oldChildren.length, false);
  var marked2 = makeBooleanArray(newChildren.length, false);
  var subsets = [];
  var returnIndex = function returnIndex() {
    return arguments[1];
  };
  var foundAllSubsets = false;
  var _loop_1 = function _loop_1() {
    var subset = findCommonSubsets(oldChildren, newChildren, marked1, marked2);
    if (subset) {
      subsets.push(subset);
      var subsetArray = __spreadArray([], new Array(subset.length)).map(returnIndex);
      subsetArray.forEach(function (item) {
        return markBoth(marked1, marked2, subset, item);
      });
    } else {
      foundAllSubsets = true;
    }
  };
  while (!foundAllSubsets) {
    _loop_1();
  }
  oldTree.subsets = subsets;
  oldTree.subsetsAge = 100;
  return subsets;
};
var DiffTracker = /** @class */function () {
  function DiffTracker() {
    this.list = [];
  }
  DiffTracker.prototype.add = function (diffs) {
    var _a;
    (_a = this.list).push.apply(_a, diffs);
  };
  DiffTracker.prototype.forEach = function (fn) {
    this.list.forEach(function (li) {
      return fn(li);
    });
  };
  return DiffTracker;
}();

// ===== Apply a virtual diff =====
function getFromVirtualRoute(tree, route) {
  var node = tree;
  var parentNode;
  var nodeIndex;
  route = route.slice();
  while (route.length > 0) {
    nodeIndex = route.splice(0, 1)[0];
    parentNode = node;
    node = node.childNodes ? node.childNodes[nodeIndex] : undefined;
  }
  return {
    node: node,
    parentNode: parentNode,
    nodeIndex: nodeIndex
  };
}
function applyVirtualDiff(tree, diff, options) {
  var _a;
  var node, parentNode, nodeIndex;
  if (![options._const.addElement, options._const.addTextElement].includes(diff[options._const.action])) {
    // For adding nodes, we calculate the route later on. It's different because it includes the position of the newly added item.
    var routeInfo = getFromVirtualRoute(tree, diff[options._const.route]);
    node = routeInfo.node;
    parentNode = routeInfo.parentNode;
    nodeIndex = routeInfo.nodeIndex;
  }
  var newSubsets = [];
  // pre-diff hook
  var info = {
    diff: diff,
    node: node
  };
  if (options.preVirtualDiffApply(info)) {
    return true;
  }
  var newNode;
  var nodeArray;
  var route;
  switch (diff[options._const.action]) {
    case options._const.addAttribute:
      if (!node.attributes) {
        node.attributes = {};
      }
      node.attributes[diff[options._const.name]] = diff[options._const.value];
      if (diff[options._const.name] === "checked") {
        node.checked = true;
      } else if (diff[options._const.name] === "selected") {
        node.selected = true;
      } else if (node.nodeName === "INPUT" && diff[options._const.name] === "value") {
        node.value = diff[options._const.value];
      }
      break;
    case options._const.modifyAttribute:
      node.attributes[diff[options._const.name]] = diff[options._const.newValue];
      break;
    case options._const.removeAttribute:
      delete node.attributes[diff[options._const.name]];
      if (Object.keys(node.attributes).length === 0) {
        delete node.attributes;
      }
      if (diff[options._const.name] === "checked") {
        node.checked = false;
      } else if (diff[options._const.name] === "selected") {
        delete node.selected;
      } else if (node.nodeName === "INPUT" && diff[options._const.name] === "value") {
        delete node.value;
      }
      break;
    case options._const.modifyTextElement:
      node.data = diff[options._const.newValue];
      if (parentNode.nodeName === "TEXTAREA") {
        parentNode.value = diff[options._const.newValue];
      }
      break;
    case options._const.modifyValue:
      node.value = diff[options._const.newValue];
      break;
    case options._const.modifyComment:
      node.data = diff[options._const.newValue];
      break;
    case options._const.modifyChecked:
      node.checked = diff[options._const.newValue];
      break;
    case options._const.modifySelected:
      node.selected = diff[options._const.newValue];
      break;
    case options._const.replaceElement:
      newNode = _cleanNode(diff[options._const.newValue]);
      parentNode.childNodes[nodeIndex] = newNode;
      break;
    case options._const.relocateGroup:
      nodeArray = node.childNodes.splice(diff[options._const.from], diff[options._const.groupLength]).reverse();
      nodeArray.forEach(function (movedNode) {
        return node.childNodes.splice(diff[options._const.to], 0, movedNode);
      });
      if (node.subsets) {
        node.subsets.forEach(function (map) {
          if (diff[options._const.from] < diff[options._const.to] && map.oldValue <= diff[options._const.to] && map.oldValue > diff[options._const.from]) {
            map.oldValue -= diff[options._const.groupLength];
            var splitLength = map.oldValue + map.length - diff[options._const.to];
            if (splitLength > 0) {
              // new insertion splits map.
              newSubsets.push({
                oldValue: diff[options._const.to] + diff[options._const.groupLength],
                newValue: map.newValue + map.length - splitLength,
                length: splitLength
              });
              map.length -= splitLength;
            }
          } else if (diff[options._const.from] > diff[options._const.to] && map.oldValue > diff[options._const.to] && map.oldValue < diff[options._const.from]) {
            map.oldValue += diff[options._const.groupLength];
            var splitLength = map.oldValue + map.length - diff[options._const.to];
            if (splitLength > 0) {
              // new insertion splits map.
              newSubsets.push({
                oldValue: diff[options._const.to] + diff[options._const.groupLength],
                newValue: map.newValue + map.length - splitLength,
                length: splitLength
              });
              map.length -= splitLength;
            }
          } else if (map.oldValue === diff[options._const.from]) {
            map.oldValue = diff[options._const.to];
          }
        });
      }
      break;
    case options._const.removeElement:
      parentNode.childNodes.splice(nodeIndex, 1);
      if (parentNode.subsets) {
        parentNode.subsets.forEach(function (map) {
          if (map.oldValue > nodeIndex) {
            map.oldValue -= 1;
          } else if (map.oldValue === nodeIndex) {
            map["delete"] = true;
          } else if (map.oldValue < nodeIndex && map.oldValue + map.length > nodeIndex) {
            if (map.oldValue + map.length - 1 === nodeIndex) {
              map.length--;
            } else {
              newSubsets.push({
                newValue: map.newValue + nodeIndex - map.oldValue,
                oldValue: nodeIndex,
                length: map.length - nodeIndex + map.oldValue - 1
              });
              map.length = nodeIndex - map.oldValue;
            }
          }
        });
      }
      node = parentNode;
      break;
    case options._const.addElement:
      {
        route = diff[options._const.route].slice();
        var c_1 = route.splice(route.length - 1, 1)[0];
        node = (_a = getFromVirtualRoute(tree, route)) === null || _a === void 0 ? void 0 : _a.node;
        newNode = _cleanNode(diff[options._const.element]);
        if (!node.childNodes) {
          node.childNodes = [];
        }
        if (c_1 >= node.childNodes.length) {
          node.childNodes.push(newNode);
        } else {
          node.childNodes.splice(c_1, 0, newNode);
        }
        if (node.subsets) {
          node.subsets.forEach(function (map) {
            if (map.oldValue >= c_1) {
              map.oldValue += 1;
            } else if (map.oldValue < c_1 && map.oldValue + map.length > c_1) {
              var splitLength = map.oldValue + map.length - c_1;
              newSubsets.push({
                newValue: map.newValue + map.length - splitLength,
                oldValue: c_1 + 1,
                length: splitLength
              });
              map.length -= splitLength;
            }
          });
        }
        break;
      }
    case options._const.removeTextElement:
      parentNode.childNodes.splice(nodeIndex, 1);
      if (parentNode.nodeName === "TEXTAREA") {
        delete parentNode.value;
      }
      if (parentNode.subsets) {
        parentNode.subsets.forEach(function (map) {
          if (map.oldValue > nodeIndex) {
            map.oldValue -= 1;
          } else if (map.oldValue === nodeIndex) {
            map["delete"] = true;
          } else if (map.oldValue < nodeIndex && map.oldValue + map.length > nodeIndex) {
            if (map.oldValue + map.length - 1 === nodeIndex) {
              map.length--;
            } else {
              newSubsets.push({
                newValue: map.newValue + nodeIndex - map.oldValue,
                oldValue: nodeIndex,
                length: map.length - nodeIndex + map.oldValue - 1
              });
              map.length = nodeIndex - map.oldValue;
            }
          }
        });
      }
      node = parentNode;
      break;
    case options._const.addTextElement:
      {
        route = diff[options._const.route].slice();
        var c_2 = route.splice(route.length - 1, 1)[0];
        newNode = {
          nodeName: "#text",
          data: diff[options._const.value]
        };
        node = getFromVirtualRoute(tree, route).node;
        if (!node.childNodes) {
          node.childNodes = [];
        }
        if (c_2 >= node.childNodes.length) {
          node.childNodes.push(newNode);
        } else {
          node.childNodes.splice(c_2, 0, newNode);
        }
        if (node.nodeName === "TEXTAREA") {
          node.value = diff[options._const.newValue];
        }
        if (node.subsets) {
          node.subsets.forEach(function (map) {
            if (map.oldValue >= c_2) {
              map.oldValue += 1;
            }
            if (map.oldValue < c_2 && map.oldValue + map.length > c_2) {
              var splitLength = map.oldValue + map.length - c_2;
              newSubsets.push({
                newValue: map.newValue + map.length - splitLength,
                oldValue: c_2 + 1,
                length: splitLength
              });
              map.length -= splitLength;
            }
          });
        }
        break;
      }
    default:
      console.log("unknown action");
  }
  if (node.subsets) {
    node.subsets = node.subsets.filter(function (map) {
      return !map["delete"] && map.oldValue !== map.newValue;
    });
    if (newSubsets.length) {
      node.subsets = node.subsets.concat(newSubsets);
    }
  }
  options.postVirtualDiffApply({
    node: info.node,
    diff: info.diff,
    newNode: newNode
  });
  return;
}
function applyVirtual(tree, diffs, options) {
  diffs.forEach(function (diff) {
    applyVirtualDiff(tree, diff, options);
  });
  return true;
}
function nodeToObj(aNode, options) {
  if (options === void 0) {
    options = {
      valueDiffing: true,
      simplifiedElementCheck: true
    };
  }
  var objNode = {
    nodeName: aNode.nodeName
  };
  if (checkElementType(aNode, options.simplifiedElementCheck, "Text", "Comment")) {
    objNode.data = aNode.data;
  } else {
    if (aNode.attributes && aNode.attributes.length > 0) {
      objNode.attributes = {};
      var nodeArray = Array.prototype.slice.call(aNode.attributes);
      nodeArray.forEach(function (attribute) {
        return objNode.attributes[attribute.name] = attribute.value;
      });
    }
    if (aNode.childNodes && aNode.childNodes.length > 0) {
      objNode.childNodes = [];
      var nodeArray = Array.prototype.slice.call(aNode.childNodes);
      nodeArray.forEach(function (childNode) {
        return objNode.childNodes.push(nodeToObj(childNode, options));
      });
    }
    if (options.valueDiffing) {
      if (checkElementType(aNode, options.simplifiedElementCheck, "HTMLTextAreaElement")) {
        objNode.value = aNode.value;
      }
      if (checkElementType(aNode, options.simplifiedElementCheck, "HTMLInputElement") && ["radio", "checkbox"].includes(aNode.type.toLowerCase()) && aNode.checked !== undefined) {
        objNode.checked = aNode.checked;
      } else if (checkElementType(aNode, options.simplifiedElementCheck, "HTMLButtonElement", "HTMLDataElement", "HTMLInputElement", "HTMLLIElement", "HTMLMeterElement", "HTMLOptionElement", "HTMLProgressElement", "HTMLParamElement")) {
        objNode.value = aNode.value;
      }
      if (checkElementType(aNode, options.simplifiedElementCheck, "HTMLOptionElement")) {
        objNode.selected = aNode.selected;
      }
    }
  }
  return objNode;
}

// from html-parse-stringify (MIT)
var tagRE = /<\s*\/*[a-zA-Z:_][a-zA-Z0-9:_\-.]*\s*(?:"[^"]*"['"]*|'[^']*'['"]*|[^'"/>])*\/*\s*>|<!--(?:.|\n|\r)*?-->/g;
var attrRE = /\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?("[^"]*"|'[^']*')/g;
function unescape(string) {
  return string.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");
}
// create optimized lookup object for
// void elements as listed here:
// https://www.w3.org/html/wg/drafts/html/master/syntax.html#void-elements
var lookup = {
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
  menuItem: true,
  meta: true,
  param: true,
  source: true,
  track: true,
  wbr: true
};
var parseTag = function parseTag(tag, caseSensitive) {
  var res = {
    nodeName: "",
    attributes: {}
  };
  var voidElement = false;
  var type = "tag";
  var tagMatch = tag.match(/<\/?([^\s]+?)[/\s>]/);
  if (tagMatch) {
    res.nodeName = caseSensitive || tagMatch[1] === "svg" ? tagMatch[1] : tagMatch[1].toUpperCase();
    if (lookup[tagMatch[1]] || tag.charAt(tag.length - 2) === "/") {
      voidElement = true;
    }
    // handle comment tag
    if (res.nodeName.startsWith("!--")) {
      var endIndex = tag.indexOf("-->");
      return {
        type: "comment",
        node: {
          nodeName: "#comment",
          data: endIndex !== -1 ? tag.slice(4, endIndex) : ""
        },
        voidElement: voidElement
      };
    }
  }
  var reg = new RegExp(attrRE);
  var result = null;
  var done = false;
  while (!done) {
    result = reg.exec(tag);
    if (result === null) {
      done = true;
    } else if (result[0].trim()) {
      if (result[1]) {
        var attr = result[1].trim();
        var arr = [attr, ""];
        if (attr.indexOf("=") > -1) {
          arr = attr.split("=");
        }
        res.attributes[arr[0]] = arr[1];
        reg.lastIndex--;
      } else if (result[2]) {
        res.attributes[result[2]] = result[3].trim().substring(1, result[3].length - 1);
      }
    }
  }
  return {
    type: type,
    node: res,
    voidElement: voidElement
  };
};
var stringToObj = function stringToObj(html, options) {
  if (options === void 0) {
    options = {
      valueDiffing: true,
      caseSensitive: false
    };
  }
  var result = [];
  var current;
  var level = -1;
  var arr = [];
  var insideSvg = false;
  // handle text at top level
  if (html.indexOf("<") !== 0) {
    var end = html.indexOf("<");
    result.push({
      nodeName: "#text",
      data: end === -1 ? html : html.substring(0, end)
    });
  }
  html.replace(tagRE, function (tag, index) {
    var isOpen = tag.charAt(1) !== "/";
    var isComment = tag.startsWith("<!--");
    var start = index + tag.length;
    var nextChar = html.charAt(start);
    if (isComment) {
      var comment = parseTag(tag, options.caseSensitive).node;
      // if we're at root, push new base node
      if (level < 0) {
        result.push(comment);
        return "";
      }
      var parent_1 = arr[level];
      if (parent_1 && comment.nodeName) {
        if (!parent_1.node.childNodes) {
          parent_1.node.childNodes = [];
        }
        parent_1.node.childNodes.push(comment);
      }
      return "";
    }
    if (isOpen) {
      current = parseTag(tag, options.caseSensitive || insideSvg);
      if (current.node.nodeName === "svg") {
        insideSvg = true;
      }
      level++;
      if (!current.voidElement && true && nextChar && nextChar !== "<") {
        if (!current.node.childNodes) {
          current.node.childNodes = [];
        }
        var data = unescape(html.slice(start, html.indexOf("<", start)));
        current.node.childNodes.push({
          nodeName: "#text",
          data: data
        });
        if (options.valueDiffing && current.node.nodeName === "TEXTAREA") {
          current.node.value = data;
        }
      }
      // if we're at root, push new base node
      if (level === 0 && current.node.nodeName) {
        result.push(current.node);
      }
      var parent_2 = arr[level - 1];
      if (parent_2 && current.node.nodeName) {
        if (!parent_2.node.childNodes) {
          parent_2.node.childNodes = [];
        }
        parent_2.node.childNodes.push(current.node);
      }
      arr[level] = current;
    }
    if (!isOpen || current.voidElement) {
      if (level > -1 && (current.voidElement || options.caseSensitive && current.node.nodeName === tag.slice(2, -1) || !options.caseSensitive && current.node.nodeName.toUpperCase() === tag.slice(2, -1).toUpperCase())) {
        level--;
        // move current up a level to match the end tag
        if (level > -1) {
          if (current.node.nodeName === "svg") {
            insideSvg = false;
          }
          current = arr[level];
        }
      }
      if (nextChar !== "<" && nextChar) {
        // trailing text node
        // if we're at the root, push a base text node. otherwise add as
        // a child to the current node.
        var childNodes = level === -1 ? result : arr[level].node.childNodes || [];
        // calculate correct end of the data slice in case there's
        // no tag after the text node.
        var end = html.indexOf("<", start);
        var data = unescape(html.slice(start, end === -1 ? undefined : end));
        childNodes.push({
          nodeName: "#text",
          data: data
        });
      }
    }
    return "";
  });
  return result[0];
};

// ===== Create a diff =====
var DiffFinder = /** @class */function () {
  function DiffFinder(t1Node, t2Node, options) {
    this.options = options;
    this.t1 = typeof Element !== "undefined" && checkElementType(t1Node, this.options.simplifiedElementCheck, "Element") ? nodeToObj(t1Node, this.options) : typeof t1Node === "string" ? stringToObj(t1Node, this.options) : JSON.parse(JSON.stringify(t1Node));
    this.t2 = typeof Element !== "undefined" && checkElementType(t2Node, this.options.simplifiedElementCheck, "Element") ? nodeToObj(t2Node, this.options) : typeof t2Node === "string" ? stringToObj(t2Node, this.options) : JSON.parse(JSON.stringify(t2Node));
    this.diffcount = 0;
    this.foundAll = false;
    if (this.debug) {
      this.t1Orig = typeof Element !== "undefined" && checkElementType(t1Node, this.options.simplifiedElementCheck, "Element") ? nodeToObj(t1Node, this.options) : typeof t1Node === "string" ? stringToObj(t1Node, this.options) : JSON.parse(JSON.stringify(t1Node));
      this.t2Orig = typeof Element !== "undefined" && checkElementType(t2Node, this.options.simplifiedElementCheck, "Element") ? nodeToObj(t2Node, this.options) : typeof t2Node === "string" ? stringToObj(t2Node, this.options) : JSON.parse(JSON.stringify(t2Node));
    }
    this.tracker = new DiffTracker();
  }
  DiffFinder.prototype.init = function () {
    return this.findDiffs(this.t1, this.t2);
  };
  DiffFinder.prototype.findDiffs = function (t1, t2) {
    var diffs;
    do {
      if (this.options.debug) {
        this.diffcount += 1;
        if (this.diffcount > this.options.diffcap) {
          throw new Error("surpassed diffcap:".concat(JSON.stringify(this.t1Orig), " -> ").concat(JSON.stringify(this.t2Orig)));
        }
      }
      diffs = this.findNextDiff(t1, t2, []);
      if (diffs.length === 0) {
        // Last check if the elements really are the same now.
        // If not, remove all info about being done and start over.
        // Sometimes a node can be marked as done, but the creation of subsequent diffs means that it has to be changed again.
        if (!_isEqual(t1, t2)) {
          if (this.foundAll) {
            console.error("Could not find remaining diffs!");
          } else {
            this.foundAll = true;
            _removeDone(t1);
            diffs = this.findNextDiff(t1, t2, []);
          }
        }
      }
      if (diffs.length > 0) {
        this.foundAll = false;
        this.tracker.add(diffs);
        applyVirtual(t1, diffs, this.options);
      }
    } while (diffs.length > 0);
    return this.tracker.list;
  };
  DiffFinder.prototype.findNextDiff = function (t1, t2, route) {
    var diffs;
    var fdiffs;
    if (this.options.maxDepth && route.length > this.options.maxDepth) {
      return [];
    }
    // outer differences?
    if (!t1.outerDone) {
      diffs = this.findOuterDiff(t1, t2, route);
      if (this.options.filterOuterDiff) {
        fdiffs = this.options.filterOuterDiff(t1, t2, diffs);
        if (fdiffs) {
          diffs = fdiffs;
        }
      }
      if (diffs.length > 0) {
        t1.outerDone = true;
        return diffs;
      } else {
        t1.outerDone = true;
      }
    }
    if (Object.prototype.hasOwnProperty.call(t1, "data")) {
      // Comment or Text
      return [];
    }
    t1 = t1;
    t2 = t2;
    // inner differences?
    if (!t1.innerDone) {
      diffs = this.findInnerDiff(t1, t2, route);
      if (diffs.length > 0) {
        return diffs;
      } else {
        t1.innerDone = true;
      }
    }
    if (this.options.valueDiffing && !t1.valueDone) {
      // value differences?
      diffs = this.findValueDiff(t1, t2, route);
      if (diffs.length > 0) {
        t1.valueDone = true;
        return diffs;
      } else {
        t1.valueDone = true;
      }
    }
    // no differences
    return [];
  };
  DiffFinder.prototype.findOuterDiff = function (t1, t2, route) {
    var diffs = [];
    var attr;
    var attr1;
    var attr2;
    var attrLength;
    var pos;
    var i;
    if (t1.nodeName !== t2.nodeName) {
      if (!route.length) {
        throw new Error("Top level nodes have to be of the same kind.");
      }
      return [new Diff().setValue(this.options._const.action, this.options._const.replaceElement).setValue(this.options._const.oldValue, _cleanNode(t1)).setValue(this.options._const.newValue, _cleanNode(t2)).setValue(this.options._const.route, route)];
    }
    if (route.length && this.options.diffcap < Math.abs((t1.childNodes || []).length - (t2.childNodes || []).length)) {
      return [new Diff().setValue(this.options._const.action, this.options._const.replaceElement).setValue(this.options._const.oldValue, _cleanNode(t1)).setValue(this.options._const.newValue, _cleanNode(t2)).setValue(this.options._const.route, route)];
    }
    if (Object.prototype.hasOwnProperty.call(t1, "data") && t1.data !== t2.data) {
      // Comment or text node.
      if (t1.nodeName === "#text") {
        return [new Diff().setValue(this.options._const.action, this.options._const.modifyTextElement).setValue(this.options._const.route, route).setValue(this.options._const.oldValue, t1.data).setValue(this.options._const.newValue, t2.data)];
      } else {
        return [new Diff().setValue(this.options._const.action, this.options._const.modifyComment).setValue(this.options._const.route, route).setValue(this.options._const.oldValue, t1.data).setValue(this.options._const.newValue, t2.data)];
      }
    }
    t1 = t1;
    t2 = t2;
    attr1 = t1.attributes ? Object.keys(t1.attributes).sort() : [];
    attr2 = t2.attributes ? Object.keys(t2.attributes).sort() : [];
    attrLength = attr1.length;
    for (i = 0; i < attrLength; i++) {
      attr = attr1[i];
      pos = attr2.indexOf(attr);
      if (pos === -1) {
        diffs.push(new Diff().setValue(this.options._const.action, this.options._const.removeAttribute).setValue(this.options._const.route, route).setValue(this.options._const.name, attr).setValue(this.options._const.value, t1.attributes[attr]));
      } else {
        attr2.splice(pos, 1);
        if (t1.attributes[attr] !== t2.attributes[attr]) {
          diffs.push(new Diff().setValue(this.options._const.action, this.options._const.modifyAttribute).setValue(this.options._const.route, route).setValue(this.options._const.name, attr).setValue(this.options._const.oldValue, t1.attributes[attr]).setValue(this.options._const.newValue, t2.attributes[attr]));
        }
      }
    }
    attrLength = attr2.length;
    for (i = 0; i < attrLength; i++) {
      attr = attr2[i];
      diffs.push(new Diff().setValue(this.options._const.action, this.options._const.addAttribute).setValue(this.options._const.route, route).setValue(this.options._const.name, attr).setValue(this.options._const.value, t2.attributes[attr]));
    }
    return diffs;
  };
  DiffFinder.prototype.findInnerDiff = function (t1, t2, route) {
    var t1ChildNodes = t1.childNodes ? t1.childNodes.slice() : [];
    var t2ChildNodes = t2.childNodes ? t2.childNodes.slice() : [];
    var last = Math.max(t1ChildNodes.length, t2ChildNodes.length);
    var childNodesLengthDifference = Math.abs(t1ChildNodes.length - t2ChildNodes.length);
    var diffs = [];
    var index = 0;
    if (!this.options.maxChildCount || last < this.options.maxChildCount) {
      var cachedSubtrees = Boolean(t1.subsets && t1.subsetsAge--);
      var subtrees = cachedSubtrees ? t1.subsets : t1.childNodes && t2.childNodes ? markSubTrees(t1, t2) : [];
      if (subtrees.length > 0) {
        /* One or more groups have been identified among the childnodes of t1
         * and t2.
         */
        diffs = this.attemptGroupRelocation(t1, t2, subtrees, route, cachedSubtrees);
        if (diffs.length > 0) {
          return diffs;
        }
      }
    }
    /* 0 or 1 groups of similar child nodes have been found
     * for t1 and t2. 1 If there is 1, it could be a sign that the
     * contents are the same. When the number of groups is below 2,
     * t1 and t2 are made to have the same length and each of the
     * pairs of child nodes are diffed.
     */
    for (var i = 0; i < last; i += 1) {
      var e1 = t1ChildNodes[i];
      var e2 = t2ChildNodes[i];
      if (childNodesLengthDifference) {
        /* t1 and t2 have different amounts of childNodes. Add
         * and remove as necessary to obtain the same length */
        if (e1 && !e2) {
          if (e1.nodeName === "#text") {
            diffs.push(new Diff().setValue(this.options._const.action, this.options._const.removeTextElement).setValue(this.options._const.route, route.concat(index)).setValue(this.options._const.value, e1.data));
            index -= 1;
          } else {
            diffs.push(new Diff().setValue(this.options._const.action, this.options._const.removeElement).setValue(this.options._const.route, route.concat(index)).setValue(this.options._const.element, _cleanNode(e1)));
            index -= 1;
          }
        } else if (e2 && !e1) {
          if (e2.nodeName === "#text") {
            diffs.push(new Diff().setValue(this.options._const.action, this.options._const.addTextElement).setValue(this.options._const.route, route.concat(index)).setValue(this.options._const.value, e2.data));
          } else {
            diffs.push(new Diff().setValue(this.options._const.action, this.options._const.addElement).setValue(this.options._const.route, route.concat(index)).setValue(this.options._const.element, _cleanNode(e2)));
          }
        }
      }
      /* We are now guaranteed that childNodes e1 and e2 exist,
       * and that they can be diffed.
       */
      /* Diffs in child nodes should not affect the parent node,
       * so we let these diffs be submitted together with other
       * diffs.
       */
      if (e1 && e2) {
        if (!this.options.maxChildCount || last < this.options.maxChildCount) {
          diffs = diffs.concat(this.findNextDiff(e1, e2, route.concat(index)));
        } else if (!_isEqual(e1, e2)) {
          if (t1ChildNodes.length > t2ChildNodes.length) {
            if (e1.nodeName === "#text") {
              diffs.push(new Diff().setValue(this.options._const.action, this.options._const.removeTextElement).setValue(this.options._const.route, route.concat(index)).setValue(this.options._const.value, e1.data));
            } else {
              diffs.push(new Diff().setValue(this.options._const.action, this.options._const.removeElement).setValue(this.options._const.element, _cleanNode(e1)).setValue(this.options._const.route, route.concat(index)));
            }
            t1ChildNodes.splice(i, 1);
            i -= 1;
            index -= 1;
            childNodesLengthDifference -= 1;
          } else if (t1ChildNodes.length < t2ChildNodes.length) {
            diffs = diffs.concat([new Diff().setValue(this.options._const.action, this.options._const.addElement).setValue(this.options._const.element, _cleanNode(e2)).setValue(this.options._const.route, route.concat(index))]);
            t1ChildNodes.splice(i, 0, _cleanNode(e2));
            childNodesLengthDifference -= 1;
          } else {
            diffs = diffs.concat([new Diff().setValue(this.options._const.action, this.options._const.replaceElement).setValue(this.options._const.oldValue, _cleanNode(e1)).setValue(this.options._const.newValue, _cleanNode(e2)).setValue(this.options._const.route, route.concat(index))]);
          }
        }
      }
      index += 1;
    }
    t1.innerDone = true;
    return diffs;
  };
  DiffFinder.prototype.attemptGroupRelocation = function (t1, t2, subtrees, route, cachedSubtrees) {
    /* Either t1.childNodes and t2.childNodes have the same length, or
     * there are at least two groups of similar elements can be found.
     * attempts are made at equalizing t1 with t2. First all initial
     * elements with no group affiliation (gaps=true) are removed (if
     * only in t1) or added (if only in t2). Then the creation of a group
     * relocation diff is attempted.
     */
    var gapInformation = getGapInformation(t1, t2, subtrees);
    var gaps1 = gapInformation.gaps1;
    var gaps2 = gapInformation.gaps2;
    var t1ChildNodes = t1.childNodes.slice();
    var t2ChildNodes = t2.childNodes.slice();
    var shortest = Math.min(gaps1.length, gaps2.length);
    var destinationDifferent;
    var toGroup;
    var group;
    var node;
    var similarNode;
    var diffs = [];
    for (var index2 = 0, index1 = 0; index2 < shortest; index1 += 1, index2 += 1) {
      if (cachedSubtrees && (gaps1[index2] === true || gaps2[index2] === true)) ;else if (gaps1[index1] === true) {
        node = t1ChildNodes[index1];
        if (node.nodeName === "#text") {
          if (t2ChildNodes[index2].nodeName === "#text") {
            if (node.data !== t2ChildNodes[index2].data) {
              // Check whether a text node with the same value follows later on.
              var testI = index1;
              while (t1ChildNodes.length > testI + 1 && t1ChildNodes[testI + 1].nodeName === "#text") {
                testI += 1;
                if (t2ChildNodes[index2].data === t1ChildNodes[testI].data) {
                  similarNode = true;
                  break;
                }
              }
              if (!similarNode) {
                diffs.push(new Diff().setValue(this.options._const.action, this.options._const.modifyTextElement).setValue(this.options._const.route, route.concat(index1)).setValue(this.options._const.oldValue, node.data).setValue(this.options._const.newValue, t2ChildNodes[index2].data));
              }
            }
          } else {
            diffs.push(new Diff().setValue(this.options._const.action, this.options._const.removeTextElement).setValue(this.options._const.route, route.concat(index1)).setValue(this.options._const.value, node.data));
            gaps1.splice(index1, 1);
            t1ChildNodes.splice(index1, 1);
            shortest = Math.min(gaps1.length, gaps2.length);
            index1 -= 1;
            index2 -= 1;
          }
        } else if (gaps2[index2] === true) {
          // both gaps1[index1] and gaps2[index2]  are true.
          // We replace one element with another.
          diffs.push(new Diff().setValue(this.options._const.action, this.options._const.replaceElement).setValue(this.options._const.oldValue, _cleanNode(node)).setValue(this.options._const.newValue, _cleanNode(t2ChildNodes[index2])).setValue(this.options._const.route, route.concat(index1)));
          // t1ChildNodes at position index1 is not up-to-date, but that does not matter as
          // index1 will increase +1
        } else {
          diffs.push(new Diff().setValue(this.options._const.action, this.options._const.removeElement).setValue(this.options._const.route, route.concat(index1)).setValue(this.options._const.element, _cleanNode(node)));
          gaps1.splice(index1, 1);
          t1ChildNodes.splice(index1, 1);
          shortest = Math.min(gaps1.length, gaps2.length);
          index1 -= 1;
          index2 -= 1;
        }
      } else if (gaps2[index2] === true) {
        node = t2ChildNodes[index2];
        if (node.nodeName === "#text") {
          diffs.push(new Diff().setValue(this.options._const.action, this.options._const.addTextElement).setValue(this.options._const.route, route.concat(index1)).setValue(this.options._const.value, node.data));
          gaps1.splice(index1, 0, true);
          t1ChildNodes.splice(index1, 0, {
            nodeName: "#text",
            data: node.data
          });
          shortest = Math.min(gaps1.length, gaps2.length);
          //index1 += 1
        } else {
          diffs.push(new Diff().setValue(this.options._const.action, this.options._const.addElement).setValue(this.options._const.route, route.concat(index1)).setValue(this.options._const.element, _cleanNode(node)));
          gaps1.splice(index1, 0, true);
          t1ChildNodes.splice(index1, 0, _cleanNode(node));
          shortest = Math.min(gaps1.length, gaps2.length);
          //index1 += 1
        }
      } else if (gaps1[index1] !== gaps2[index2]) {
        if (diffs.length > 0) {
          return diffs;
        }
        // group relocation
        group = subtrees[gaps1[index1]];
        toGroup = Math.min(group.newValue, t1ChildNodes.length - group.length);
        if (toGroup !== group.oldValue && toGroup > -1) {
          // Check whether destination nodes are different than originating ones.
          destinationDifferent = false;
          for (var j = 0; j < group.length; j += 1) {
            if (!_roughlyEqual(t1ChildNodes[toGroup + j], t1ChildNodes[group.oldValue + j], {}, false, true)) {
              destinationDifferent = true;
            }
          }
          if (destinationDifferent) {
            return [new Diff().setValue(this.options._const.action, this.options._const.relocateGroup).setValue(this.options._const.groupLength, group.length).setValue(this.options._const.from, group.oldValue).setValue(this.options._const.to, toGroup).setValue(this.options._const.route, route)];
          }
        }
      }
    }
    return diffs;
  };
  DiffFinder.prototype.findValueDiff = function (t1, t2, route) {
    // Differences of value. Only useful if the value/selection/checked value
    // differs from what is represented in the DOM. For example in the case
    // of filled out forms, etc.
    var diffs = [];
    if (t1.selected !== t2.selected) {
      diffs.push(new Diff().setValue(this.options._const.action, this.options._const.modifySelected).setValue(this.options._const.oldValue, t1.selected).setValue(this.options._const.newValue, t2.selected).setValue(this.options._const.route, route));
    }
    if ((t1.value || t2.value) && t1.value !== t2.value && t1.nodeName !== "OPTION") {
      diffs.push(new Diff().setValue(this.options._const.action, this.options._const.modifyValue).setValue(this.options._const.oldValue, t1.value || "").setValue(this.options._const.newValue, t2.value || "").setValue(this.options._const.route, route));
    }
    if (t1.checked !== t2.checked) {
      diffs.push(new Diff().setValue(this.options._const.action, this.options._const.modifyChecked).setValue(this.options._const.oldValue, t1.checked).setValue(this.options._const.newValue, t2.checked).setValue(this.options._const.route, route));
    }
    return diffs;
  };
  return DiffFinder;
}();
var DEFAULT_OPTIONS = {
  debug: false,
  diffcap: 10,
  maxDepth: false,
  maxChildCount: 50,
  valueDiffing: true,
  simplifiedElementCheck: false,
  // syntax: textDiff: function (node, currentValue, expectedValue, newValue)
  textDiff: function textDiff(node, currentValue, expectedValue, newValue) {
    node.data = newValue;
    return;
  },
  // empty functions were benchmarked as running faster than both
  // `f && f()` and `if (f) { f(); }`
  preVirtualDiffApply: function preVirtualDiffApply() {},
  postVirtualDiffApply: function postVirtualDiffApply() {},
  preDiffApply: function preDiffApply() {},
  postDiffApply: function postDiffApply() {},
  filterOuterDiff: null,
  compress: false,
  _const: false,
  document: typeof window !== "undefined" && window.document ? window.document : false,
  components: []
};
var DiffDOM = /** @class */function () {
  function DiffDOM(options) {
    if (options === void 0) {
      options = {};
    }
    // IE11 doesn't have Object.assign and buble doesn't translate object spreaders
    // by default, so this is the safest way of doing it currently.
    Object.entries(DEFAULT_OPTIONS).forEach(function (_a) {
      var key = _a[0],
        value = _a[1];
      if (!Object.prototype.hasOwnProperty.call(options, key)) {
        options[key] = value;
      }
    });
    if (!options._const) {
      var varNames = ["addAttribute", "modifyAttribute", "removeAttribute", "modifyTextElement", "relocateGroup", "removeElement", "addElement", "removeTextElement", "addTextElement", "replaceElement", "modifyValue", "modifyChecked", "modifySelected", "modifyComment", "action", "route", "oldValue", "newValue", "element", "group", "groupLength", "from", "to", "name", "value", "data", "attributes", "nodeName", "childNodes", "checked", "selected"];
      var constNames_1 = {};
      if (options.compress) {
        varNames.forEach(function (varName, index) {
          return constNames_1[varName] = index;
        });
      } else {
        varNames.forEach(function (varName) {
          return constNames_1[varName] = varName;
        });
      }
      options._const = constNames_1;
    }
    this.options = options;
  }
  DiffDOM.prototype.apply = function (tree, diffs) {
    return applyDOM(tree, diffs, this.options);
  };
  DiffDOM.prototype.undo = function (tree, diffs) {
    return undoDOM(tree, diffs, this.options);
  };
  DiffDOM.prototype.diff = function (t1Node, t2Node) {
    var finder = new DiffFinder(t1Node, t2Node, this.options);
    return finder.init();
  };
  return DiffDOM;
}();

/**
 * DOM 工具函数
 */

/**
 * 解析 HTML 字符串为 DOM 节点
 * @param {string} html - HTML 字符串
 * @returns {Element} DOM 节点
 */
function parseHTML(html) {
  var parser = new DOMParser();
  var doc = parser.parseFromString("<div>" + html + "</div>", 'text/html');
  return doc.body.firstChild;
}

/**
 * 从 HTML 中提取纯文本
 * @param {string} html - HTML 字符串
 * @returns {string} 纯文本
 */
function extractPlainText(html) {
  if (!html) return '';
  return html.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '').replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '').replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&').replace(/&quot;/g, '"').trim();
}

/**
 * 检查是否支持 ShadowDOM
 * @returns {boolean}
 */
function supportsShadowDOM() {
  return typeof Element !== 'undefined' && Element.prototype.attachShadow !== undefined;
}

/**
 * 创建差异标记的唯一 ID
 * @param {string} type - 标记类型 (add/del)
 * @param {string} field - 字段名称
 * @param {number} index - 索引
 * @returns {string}
 */
function createDiffId(type, field, index) {
  return "diff-" + type + "-" + field + "-" + index;
}

/**
 * 在指定位置插入节点
 * @param {Element} parent - 父节点
 * @param {Element} newNode - 新节点
 * @param {number} index - 位置索引
 */
function insertAt(parent, newNode, index) {
  if (index < parent.childNodes.length) {
    parent.insertBefore(newNode, parent.childNodes[index]);
  } else {
    parent.appendChild(newNode);
  }
}

/**
 * 根据路径查找 DOM 节点
 * @param {Element} root - 根节点
 * @param {number[]} path - 路径数组
 * @returns {Element|null}
 */
function findNodeByPath(root, path) {
  if (!path) return root;
  var current = root;
  for (var _iterator = _createForOfIteratorHelperLoose(path), _step; !(_step = _iterator()).done;) {
    var index = _step.value;
    if (!current || !current.childNodes) return null;
    current = current.childNodes[index];
  }
  return current;
}

/**
 * diff-dom 引擎封装
 */

/**
 * 引擎名称
 */
var engineName = 'diffdom';

/**
 * 对比 HTML 内容
 * @param {string} oldHtml - 旧 HTML
 * @param {string} newHtml - 新 HTML
 * @returns {Object} { oldNode, diffs }
 */
function diffHTML$1(oldHtml, newHtml) {
  // 快速相等判断
  if (oldHtml === newHtml) return {
    oldNode: null,
    diffs: []
  };
  if (!oldHtml) return {
    oldNode: null,
    diffs: [{
      action: 'fullReplace',
      newHtml: newHtml
    }]
  };
  if (!newHtml) return {
    oldNode: null,
    diffs: [{
      action: 'fullRemove',
      oldHtml: oldHtml
    }]
  };
  try {
    var oldDoc = parseHTML(oldHtml);
    var newDoc = parseHTML(newHtml);
    var dd = new DiffDOM();
    var diffs = dd.diff(oldDoc, newDoc);
    return {
      oldNode: oldDoc,
      diffs: diffs
    };
  } catch (error) {
    console.warn('[rich-diff] diff-dom 对比失败:', error);
    return {
      oldNode: null,
      diffs: []
    };
  }
}

/**
 * 在 DOM 节点上应用差异操作
 * @param {Element} node - 目标节点
 * @param {Object} diff - 差异操作
 * @param {string} fieldName - 字段名称
 * @param {Object} counters - 计数器 { add, del }
 */
function applyDiff(node, diff, fieldName, counters) {
  var targetNode = findNodeByPath(node, diff.path);
  if (!targetNode) return;
  switch (diff.action) {
    case 'addElement':
      handleAddElement(targetNode, diff, fieldName, counters);
      break;
    case 'removeElement':
      handleRemoveElement(targetNode, diff, fieldName, counters);
      break;
    case 'replaceElement':
      handleReplaceElement(targetNode, diff, fieldName, counters);
      break;
    case 'addTextElement':
      handleAddTextElement(targetNode, diff, fieldName, counters);
      break;
    case 'removeTextElement':
      handleRemoveTextElement(targetNode, diff, fieldName, counters);
      break;
    case 'replaceTextElement':
      handleReplaceTextElement(targetNode, diff, fieldName, counters);
      break;
  }
}

// === 内部处理函数 ===

function handleAddElement(parent, diff, fieldName, counters) {
  var wrapper = createInsWrapper(fieldName, counters);
  wrapper.innerHTML = diff.element.outerHTML || diff.element.textContent;
  insertAt(parent, wrapper, diff.index);
}
function handleRemoveElement(parent, diff, fieldName, counters) {
  var targetChild = parent.childNodes[diff.index];
  if (!targetChild) return;
  var wrapper = createDelWrapper(fieldName, counters);
  wrapper.appendChild(targetChild.cloneNode(true));
  parent.replaceChild(wrapper, targetChild);
}
function handleReplaceElement(parent, diff, fieldName, counters) {
  var oldChild = parent.childNodes[diff.index];
  if (!oldChild) return;
  var delWrapper = createDelWrapper(fieldName, counters);
  delWrapper.appendChild(oldChild.cloneNode(true));
  var insWrapper = createInsWrapper(fieldName, counters);
  insWrapper.innerHTML = diff.element.outerHTML || diff.element.textContent;
  var fragment = document.createDocumentFragment();
  fragment.appendChild(delWrapper);
  fragment.appendChild(insWrapper);
  parent.replaceChild(fragment, oldChild);
}
function handleAddTextElement(parent, diff, fieldName, counters) {
  var wrapper = createInsWrapper(fieldName, counters);
  wrapper.textContent = diff.text;
  insertAt(parent, wrapper, diff.index);
}
function handleRemoveTextElement(parent, diff, fieldName, counters) {
  var targetChild = parent.childNodes[diff.index];
  if (!targetChild) return;
  var wrapper = createDelWrapper(fieldName, counters);
  wrapper.textContent = diff.text;
  parent.replaceChild(wrapper, targetChild);
}
function handleReplaceTextElement(parent, diff, fieldName, counters) {
  var oldChild = parent.childNodes[diff.index];
  if (!oldChild) return;
  var oldText = oldChild.textContent || oldChild.nodeValue || '';
  var delWrapper = createDelWrapper(fieldName, counters);
  delWrapper.textContent = oldText;
  var insWrapper = createInsWrapper(fieldName, counters);
  insWrapper.textContent = diff.text;
  var fragment = document.createDocumentFragment();
  fragment.appendChild(delWrapper);
  fragment.appendChild(insWrapper);
  parent.replaceChild(fragment, oldChild);
}
function createDelWrapper(fieldName, counters) {
  var wrapper = document.createElement('del');
  wrapper.style.color = 'red';
  wrapper.style.textDecoration = 'line-through';
  wrapper.setAttribute('data-diff', 'del');
  wrapper.setAttribute('data-diff-id', "diff-del-" + fieldName + "-" + counters.del++);
  wrapper.setAttribute('data-diff-field', fieldName);
  return wrapper;
}
function createInsWrapper(fieldName, counters) {
  var wrapper = document.createElement('ins');
  wrapper.style.color = '#1878E8';
  wrapper.setAttribute('data-diff', 'add');
  wrapper.setAttribute('data-diff-id', "diff-add-" + fieldName + "-" + counters.add++);
  wrapper.setAttribute('data-diff-field', fieldName);
  return wrapper;
}

/**
 * 对比纯文本
 * @param {string} oldText - 旧文本
 * @param {string} newText - 新文本
 * @returns {string} 带差异标记的文本
 */
function diffText$1(oldText, newText) {
  // 使用 htmldiff 风格的简单文本对比
  if (oldText === newText) return newText;
  if (!oldText) return newText;
  if (!newText) return '';

  // 简单实现：直接返回新文本，带上新增部分标记
  // 在实际使用中，应该使用 htmldiff 引擎处理纯文本
  return newText;
}
var diffdom = {
  engineName: engineName,
  diffHTML: diffHTML$1,
  diffText: diffText$1,
  applyDiff: applyDiff
};

var diffdomEngine = /*#__PURE__*/Object.freeze({
  __proto__: null,
  applyDiff: applyDiff,
  default: diffdom,
  diffHTML: diffHTML$1,
  diffText: diffText$1,
  engineName: engineName
});

/**
 * 引擎管理模块
 * 支持多引擎切换
 */

// 引擎注册表
var engines = {
  'htmldiff': htmldiffEngine,
  'diffdom': diffdomEngine
};

// 当前使用的引擎
var currentEngine = 'htmldiff';

/**
 * 设置当前使用的对比引擎
 * @param {string} engine - 引擎名称
 */
function setEngine(engine) {
  if (!engines[engine]) {
    var available = Object.keys(engines).join(', ');
    console.warn("[rich-diff] \u4E0D\u652F\u6301\u7684\u5F15\u64CE: " + engine + "\uFF0C\u53EF\u7528\u5F15\u64CE: " + available);
    return false;
  }
  currentEngine = engine;
  console.log("[rich-diff] \u5DF2\u5207\u6362\u5230 " + engine + " \u5F15\u64CE");
  return true;
}

/**
 * 获取当前引擎名称
 * @returns {string}
 */
function getEngineName() {
  return currentEngine;
}

/**
 * 获取当前引擎实例
 * @returns {Object}
 */
function getEngine() {
  return engines[currentEngine];
}

/**
 * 获取所有可用引擎
 * @returns {string[]}
 */
function getAvailableEngines() {
  return Object.keys(engines);
}

/**
 * 检查引擎是否存在
 * @param {string} engine - 引擎名称
 * @returns {boolean}
 */
function hasEngine(engine) {
  return !!engines[engine];
}

/**
 * 常量定义
 */

// 错误类型
var ErrorTypes = {
  ENGINE_NOT_FOUND: 'ENGINE_NOT_FOUND',
  INVALID_INPUT: 'INVALID_INPUT',
  PARSE_ERROR: 'PARSE_ERROR',
  DOM_ERROR: 'DOM_ERROR'
};

// 默认配置
var DefaultConfig = {
  // 默认引擎
  defaultEngine: 'htmldiff',
  // 字段标签映射
  fieldLabels: {
    title: '标题',
    subtitle: '副标题',
    digest: '摘要',
    task: '关联任务',
    siteName: '预投站点',
    channelName: '预投栏目',
    content: '正文内容',
    author: '作者',
    source: '来源单位',
    cmsFileList: '媒体资源'
  },
  // 差异样式
  diffStyles: {
    add: {
      color: '#1878E8',
      background: '#E8F4FF'
    },
    del: {
      color: '#D32F2F',
      background: '#FFEBEE',
      textDecoration: 'line-through'
    }
  },
  // 字段分组优先级
  groupPriority: {
    text: 1,
    html: 2,
    media: 3,
    custom: 4
  }
};

// 媒体类型
var MediaTypes = {
  IMAGE: 'image',
  VIDEO: 'video',
  DOCUMENT: 'document'
};

// 变更类型
var ChangeTypes = {
  ADD: 'add',
  DEL: 'del',
  MODIFY: 'modify',
  SAME: 'same'
};

/**
 * 纯文本对比适配器
 */

// 计数器
var addCounter$1 = 0;
var delCounter$1 = 0;

/**
 * 重置计数器
 */
function resetCounters$1() {
  addCounter$1 = 0;
  delCounter$1 = 0;
}

/**
 * 对比纯文本
 * @param {string} oldText - 旧文本
 * @param {string} newText - 新文本
 * @param {string} fieldName - 字段名称
 * @returns {Object} { html, useShadowDOM, markers }
 */
function diffText(oldText, newText, fieldName) {
  if (oldText === void 0) {
    oldText = '';
  }
  if (newText === void 0) {
    newText = '';
  }
  if (fieldName === void 0) {
    fieldName = 'content';
  }
  resetCounters$1();

  // 快速判断
  if (oldText === newText) {
    return createResult$1(newText, false, []);
  }
  if (!oldText) {
    return wrapWithInsertTag$1(newText, fieldName);
  }
  if (!newText) {
    return createResult$1('', false, []);
  }

  // 调用引擎对比
  var engine = getEngine();
  var result = engine.diffText(String(oldText), String(newText));

  // 注入 data-diff 属性
  var html = injectDiffAttributes(result, fieldName);
  var markers = extractMarkerIds$1(html);
  return createResult$1(html, false, markers);
}

/**
 * 创建返回结果
 */
function createResult$1(html, useShadowDOM, markers) {
  return {
    html: html,
    useShadowDOM: useShadowDOM,
    markers: markers
  };
}

/**
 * 用 ins 标签包裹内容
 */
function wrapWithInsertTag$1(text, fieldName) {
  var diffId = createDiffId('add', fieldName, addCounter$1++);
  var html = "<ins style=\"color: " + DefaultConfig.diffStyles.add.color + ";\" data-diff=\"add\" data-diff-id=\"" + diffId + "\" data-diff-field=\"" + fieldName + "\">" + text + "</ins>";
  return createResult$1(html, false, [diffId]);
}

/**
 * 注入 data-diff 属性
 */
function injectDiffAttributes(html, fieldName) {
  var result = html;
  result = result.replace(/<ins([^>]*)>/g, function (match, attrs) {
    if (attrs.includes('data-diff')) return match;
    var diffId = createDiffId('add', fieldName, addCounter$1++);
    return "<ins" + attrs + " data-diff=\"add\" data-diff-id=\"" + diffId + "\" data-diff-field=\"" + fieldName + "\">";
  });
  result = result.replace(/<del([^>]*)>/g, function (match, attrs) {
    if (attrs.includes('data-diff')) return match;
    var diffId = createDiffId('del', fieldName, delCounter$1++);
    return "<del" + attrs + " data-diff=\"del\" data-diff-id=\"" + diffId + "\" data-diff-field=\"" + fieldName + "\">";
  });
  return result;
}

/**
 * 提取标记 ID 列表
 */
function extractMarkerIds$1(html) {
  var ids = [];
  var pattern = /data-diff-id="([^"]+)"/g;
  var match;
  while ((match = pattern.exec(html)) !== null) {
    ids.push(match[1]);
  }
  return ids;
}

// 计数器
var addCounter = 0;
var delCounter = 0;

// ShadowDOM 支持状态
var shadowDOMSupported = null;

/**
 * 重置计数器
 */
function resetCounters() {
  addCounter = 0;
  delCounter = 0;
  resetCounters$1();
}

/**
 * 对比 HTML 内容
 * @param {string} oldHtml - 旧 HTML
 * @param {string} newHtml - 新 HTML
 * @param {string} fieldName - 字段名称
 * @returns {Object} { html, useShadowDOM, markers }
 */
function diffHTML(oldHtml, newHtml, fieldName) {
  if (oldHtml === void 0) {
    oldHtml = '';
  }
  if (newHtml === void 0) {
    newHtml = '';
  }
  if (fieldName === void 0) {
    fieldName = 'content';
  }
  resetCounters();

  // 检测 ShadowDOM 支持性
  if (shadowDOMSupported === null) {
    shadowDOMSupported = supportsShadowDOM();
  }

  // 快速判断
  if (oldHtml === newHtml) {
    return createResult(newHtml, false, []);
  }
  if (!oldHtml) {
    return wrapWithInsertTag(newHtml, fieldName);
  }
  if (!newHtml) {
    return createResult('', false, []);
  }
  var engineName = getEngineName();
  try {
    var html;
    switch (engineName) {
      case 'htmldiff':
        html = adaptHtmlDiffEngine(oldHtml, newHtml, fieldName);
        break;
      case 'diffdom':
        html = adaptDiffDomEngine(oldHtml, newHtml, fieldName);
        break;
      default:
        html = adaptHtmlDiffEngine(oldHtml, newHtml, fieldName);
    }

    // 过滤仅样式变化
    html = filterStyleOnlyChanges(html);

    // 如果支持 ShadowDOM，转换标签
    if (shadowDOMSupported) {
      html = convertToShadowDOM(html);
    }
    var markers = extractMarkerIds(html);
    return createResult(html, shadowDOMSupported, markers);
  } catch (error) {
    console.warn("[rich-diff] " + engineName + " \u9002\u914D\u5668\u5BF9\u6BD4\u5931\u8D25:", error);
    return createResult(newHtml, false, []);
  }
}

/**
 * 创建返回结果
 */
function createResult(html, useShadowDOM, markers) {
  return {
    html: html,
    useShadowDOM: useShadowDOM,
    markers: markers
  };
}

/**
 * 适配 htmldiff 引擎输出
 */
function adaptHtmlDiffEngine(oldHtml, newHtml, fieldName) {
  var engine = getEngine();
  var result = engine.diffHTML(oldHtml, newHtml);

  // 注入 data-diff 属性和样式（只给 htmldiff 生成的差异标签添加）
  // htmldiff 生成的标签特征：带有 class="diffins"、"diffdel"、"diffmod"
  result = result.replace(/<ins(\s[^>]*)?>/gi, function (match, attrs) {
    // 如果已经有 data-diff 属性，跳过（已经是处理过的）
    if (attrs && attrs.includes('data-diff')) return match;

    // 检查是否是 htmldiff 生成的差异标签
    var isDiffTag = attrs && (attrs.includes('class="diffins"') || attrs.includes('class="diffmod"') || attrs.includes("class='diffins'") || attrs.includes("class='diffmod'"));
    if (isDiffTag) {
      var diffId = createDiffId('add', fieldName, addCounter++);
      // 移除原有的 class，添加内联样式和 data-diff 属性
      var cleanAttrs = attrs.replace(/class="[^"]*"/gi, '').replace(/class='[^']*'/gi, '').trim();
      var style = "style=\"color: " + DefaultConfig.diffStyles.add.color + "; background: " + DefaultConfig.diffStyles.add.background + ";\"";
      return "<ins " + cleanAttrs + " " + style + " data-diff=\"add\" data-diff-id=\"" + diffId + "\" data-diff-field=\"" + fieldName + "\">";
    }
    // 用户原内容的标签，不处理
    return match;
  });
  result = result.replace(/<del(\s[^>]*)?>/gi, function (match, attrs) {
    if (attrs && attrs.includes('data-diff')) return match;
    var isDiffTag = attrs && (attrs.includes('class="diffdel"') || attrs.includes('class="diffmod"') || attrs.includes("class='diffdel'") || attrs.includes("class='diffmod'"));
    if (isDiffTag) {
      var diffId = createDiffId('del', fieldName, delCounter++);
      var cleanAttrs = attrs.replace(/class="[^"]*"/gi, '').replace(/class='[^']*'/gi, '').trim();
      var style = "style=\"color: " + DefaultConfig.diffStyles.del.color + "; background: " + DefaultConfig.diffStyles.del.background + "; text-decoration: " + DefaultConfig.diffStyles.del.textDecoration + ";\"";
      return "<del " + cleanAttrs + " " + style + " data-diff=\"del\" data-diff-id=\"" + diffId + "\" data-diff-field=\"" + fieldName + "\">";
    }
    return match;
  });

  // 处理 difftext 标签（htmldiff 在某些情况下会生成）
  result = result.replace(/<difftext(\s[^>]*)?>/gi, function (match, attrs) {
    if (attrs && attrs.includes('data-diff')) return match;
    var isAdd = attrs && (attrs.includes('class="diffins"') || attrs.includes("class='diffins'"));
    var isDel = attrs && (attrs.includes('class="diffdel"') || attrs.includes("class='diffdel'"));
    var isMod = attrs && (attrs.includes('class="diffmod"') || attrs.includes("class='diffmod'"));
    if (isAdd || isDel || isMod) {
      var diffType = isMod ? 'modify' : isAdd ? 'add' : 'del';
      var diffId = createDiffId(diffType === 'add' ? 'add' : 'del', fieldName, diffType === 'add' ? addCounter++ : delCounter++);
      var cleanAttrs = attrs.replace(/class="[^"]*"/gi, '').replace(/class='[^']*'/gi, '').trim();
      var styleConfig = diffType === 'add' ? DefaultConfig.diffStyles.add : DefaultConfig.diffStyles.del;
      var style = "style=\"color: " + styleConfig.color + "; background: " + styleConfig.background + ";" + (diffType !== 'add' ? " text-decoration: " + DefaultConfig.diffStyles.del.textDecoration + ";" : '') + "\"";
      return "<difftext " + cleanAttrs + " " + style + " data-diff=\"" + diffType + "\" data-diff-id=\"" + diffId + "\" data-diff-field=\"" + fieldName + "\">";
    }
    return match;
  });
  return result;
}

/**
 * 适配 diffdom 引擎输出
 */
function adaptDiffDomEngine(oldHtml, newHtml, fieldName) {
  var engine = getEngine();
  var _engine$diffHTML = engine.diffHTML(oldHtml, newHtml),
    oldNode = _engine$diffHTML.oldNode,
    diffs = _engine$diffHTML.diffs;
  if (!diffs || diffs.length === 0) {
    return oldNode ? oldNode.innerHTML : newHtml;
  }

  // 处理特殊情况
  if (diffs.length === 1 && diffs[0].action === 'fullReplace') {
    return wrapWithInsertTag(diffs[0].newHtml || newHtml, fieldName).html;
  }
  if (diffs.length === 1 && diffs[0].action === 'fullRemove') {
    return '';
  }

  // 应用差异
  var markedDoc = oldNode.cloneNode(true);
  var counters = {
    add: addCounter,
    del: delCounter
  };
  var sortedDiffs = [].concat(diffs).reverse();
  for (var _iterator = _createForOfIteratorHelperLoose(sortedDiffs), _step; !(_step = _iterator()).done;) {
    var diff = _step.value;
    engine.applyDiff(markedDoc, diff, fieldName, counters);
  }
  addCounter = counters.add;
  delCounter = counters.del;
  return markedDoc.innerHTML;
}

/**
 * 用 ins 标签包裹内容
 */
function wrapWithInsertTag(html, fieldName) {
  var diffId = createDiffId('add', fieldName, addCounter++);
  var result = "<ins style=\"color: " + DefaultConfig.diffStyles.add.color + ";\" data-diff=\"add\" data-diff-id=\"" + diffId + "\" data-diff-field=\"" + fieldName + "\">" + html + "</ins>";
  return createResult(result, false, [diffId]);
}

/**
 * 过滤仅样式变化的差异标记
 */
function filterStyleOnlyChanges(html) {
  var pattern = /<del[^>]*class="[^"]*diffmod[^"]*"[^>]*>([\s\S]*?)<\/del>\s*<ins[^>]*class="[^"]*diffmod[^"]*"[^>]*>([\s\S]*?)<\/ins>/gi;
  var result = html;
  var matches = [];
  var match;
  while ((match = pattern.exec(html)) !== null) {
    matches.push({
      fullMatch: match[0],
      delContent: match[1],
      insContent: match[2],
      index: match.index
    });
  }
  for (var i = matches.length - 1; i >= 0; i--) {
    var m = matches[i];
    if (isStyleOnlyChange(m.delContent, m.insContent)) {
      result = result.substring(0, m.index) + m.insContent + result.substring(m.index + m.fullMatch.length);
    }
  }
  return result;
}

/**
 * 判断是否仅为样式变化
 */
function isStyleOnlyChange(oldHtml, newHtml) {
  var oldText = extractPlainText(oldHtml);
  var newText = extractPlainText(newHtml);
  if (oldText !== newText) return false;
  var oldTag = oldHtml.match(/^<(\w+)/);
  var newTag = newHtml.match(/^<(\w+)/);
  if (!oldTag || !newTag) return false;
  return oldTag[1].toLowerCase() === newTag[1].toLowerCase();
}

/**
 * 转换为 ShadowDOM 格式
 * 只转换差异引擎生成的标签（带有 data-diff 属性）
 */
function convertToShadowDOM(html) {
  var result = html;

  // 只转换带有 data-diff 属性的 ins 标签
  result = result.replace(/<ins([^>]*)>([\s\S]*?)<\/ins>/gi, function (match, attrs, content) {
    // 只有带有 data-diff 属性的才转换
    if (attrs && attrs.includes('data-diff=')) {
      return "<difftext" + attrs + ">" + content + "</difftext>";
    }
    // 用户原内容的标签保持不变
    return match;
  });

  // 只转换带有 data-diff 属性的 del 标签
  result = result.replace(/<del([^>]*)>([\s\S]*?)<\/del>/gi, function (match, attrs, content) {
    if (attrs && attrs.includes('data-diff=')) {
      return "<difftext" + attrs + ">" + content + "</difftext>";
    }
    return match;
  });
  return result;
}

/**
 * 提取标记 ID 列表
 */
function extractMarkerIds(html) {
  var ids = [];
  var pattern = /data-diff-id="([^"]+)"/g;
  var match;
  while ((match = pattern.exec(html)) !== null) {
    ids.push(match[1]);
  }
  return ids;
}

/**
 * 适配器层入口
 */

/**
 * 重置所有计数器
 */
function resetAllCounters() {
  resetCounters();
  resetCounters$1();
}

/**
 * 字段对比工具
 */

/**
 * 对比单个字段
 * @param {string|Array} oldVal - 旧值
 * @param {string|Array} newVal - 新值
 * @param {string} fieldName - 字段名称
 * @param {Object} options - 配置选项
 * @param {string} options.type - 字段类型: 'text' | 'dynamic' | 'file' | 'image' | 'video'
 * @param {boolean} options.mayContainHtml - 是否可能包含 HTML
 * @returns {Object} { html, useShadowDOM, markers, hasDiff }
 */
function diffField(oldVal, newVal, fieldName, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options,
    _options$type = _options.type,
    type = _options$type === void 0 ? 'text' : _options$type,
    _options$mayContainHt = _options.mayContainHtml,
    mayContainHtml = _options$mayContainHt === void 0 ? false : _options$mayContainHt;

  // 根据 type 选择对比方式
  if (type === 'dynamic') {
    return diffDynamicField(oldVal, newVal, fieldName);
  }

  // 资源类型：file, image, video（根据 value 类型自动判断单个/数组）
  if (type === 'file' || type === 'image' || type === 'video') {
    // 判断是否为数组
    var isOldArray = Array.isArray(oldVal) || typeof oldVal === 'string' && isJsonArray(oldVal);
    var isNewArray = Array.isArray(newVal) || typeof newVal === 'string' && isJsonArray(newVal);
    if (isOldArray || isNewArray) {
      // 数组模式
      return diffResourcesField(oldVal, newVal, fieldName, type);
    }
    // 单个模式
    return diffResourceField(oldVal, newVal, fieldName, type);
  }

  // text 类型：快速相等判断
  if (oldVal === newVal) {
    return {
      html: newVal,
      useShadowDOM: false,
      markers: [],
      hasDiff: false
    };
  }
  var oldStr = String(oldVal || '');
  var newStr = String(newVal || '');

  // 判断是否包含 HTML
  if (mayContainHtml && (oldStr.includes('<') || newStr.includes('<'))) {
    return diffHTML(oldStr, newStr, fieldName);
  }
  return diffText(oldStr, newStr, fieldName);
}

/**
 * 判断字符串是否为 JSON 数组
 * @param {string} str - 字符串
 * @returns {boolean}
 */
function isJsonArray(str) {
  if (!str || typeof str !== 'string') return false;
  try {
    var parsed = JSON.parse(str);
    return Array.isArray(parsed);
  } catch (_unused) {
    return false;
  }
}

/**
 * 对比单个资源字段
 * @param {string|Object} oldVal - 旧值（资源地址或对象）
 * @param {string|Object} newVal - 新值（资源地址或对象）
 * @param {string} fieldName - 字段名称
 * @param {string} resourceType - 资源类型: 'file' | 'image' | 'video'
 * @returns {Object} { html, useShadowDOM, markers, hasDiff }
 */
function diffResourceField(oldVal, newVal, fieldName, resourceType) {
  // 支持字符串和对象格式
  var oldUrl = extractUrl$1(oldVal);
  var newUrl = extractUrl$1(newVal);

  // 快速判断
  if (oldUrl === newUrl) {
    return {
      html: newUrl ? generateResourceHtml$1(newVal, resourceType) : '',
      useShadowDOM: false,
      markers: [],
      hasDiff: false,
      resourceType: resourceType,
      oldResource: oldUrl ? {
        url: oldUrl,
        diffType: 'same'
      } : null,
      newResource: newUrl ? {
        url: newUrl,
        diffType: 'same'
      } : null
    };
  }
  var result = {
    html: '',
    useShadowDOM: false,
    markers: [],
    hasDiff: true,
    resourceType: resourceType,
    oldResource: null,
    newResource: null
  };
  if (!oldUrl && newUrl) {
    // 新增资源
    result.newResource = {
      url: newUrl,
      diffType: 'add'
    };
    result.html = generateDiffTag$1(newVal, 'add', fieldName, resourceType);
  } else if (oldUrl && !newUrl) {
    // 删除资源
    result.oldResource = {
      url: oldUrl,
      diffType: 'del'
    };
    result.html = generateDiffTag$1(oldVal, 'del', fieldName, resourceType);
  } else {
    // 资源变更
    result.oldResource = {
      url: oldUrl,
      diffType: 'del'
    };
    result.newResource = {
      url: newUrl,
      diffType: 'add'
    };
    result.html = generateDiffTag$1(oldVal, 'del', fieldName, resourceType) + generateDiffTag$1(newVal, 'add', fieldName, resourceType);
  }
  return result;
}

/**
 * 对比资源数组字段
 * @param {Array|string} oldVal - 旧值（资源地址数组）
 * @param {Array|string} newVal - 新值（资源地址数组）
 * @param {string} fieldName - 字段名称
 * @param {string} resourceType - 资源类型: 'files' | 'images' | 'videos'
 * @returns {Object} { html, useShadowDOM, markers, hasDiff }
 */
function diffResourcesField(oldVal, newVal, fieldName, resourceType) {
  var oldArr = normalizeArray$1(oldVal);
  var newArr = normalizeArray$1(newVal);

  // 提取 URL 用于对比
  var oldUrls = oldArr.map(function (v) {
    return extractUrl$1(v);
  });
  var newUrls = newArr.map(function (v) {
    return extractUrl$1(v);
  });

  // 快速判断
  if (arraysEqual(oldUrls, newUrls)) {
    return {
      html: newArr.map(function (v) {
        return generateResourceHtml$1(v, resourceType);
      }).join(''),
      useShadowDOM: false,
      markers: [],
      hasDiff: false,
      resourceType: resourceType,
      oldResources: oldUrls.map(function (url) {
        return {
          url: url,
          diffType: 'same'
        };
      }),
      newResources: newUrls.map(function (url) {
        return {
          url: url,
          diffType: 'same'
        };
      })
    };
  }
  return diffResourceArrays(oldArr, newArr, fieldName, resourceType);
}

/**
 * 标准化数组
 * @param {Array|string} val - 输入值
 * @returns {Array} 标准化后的数组
 */
function normalizeArray$1(val) {
  if (!val) return [];
  if (typeof val === 'string') {
    try {
      var parsed = JSON.parse(val);
      return Array.isArray(parsed) ? parsed : [];
    } catch (_unused2) {
      // 如果不是 JSON，尝试按逗号分割
      return val.split(',').map(function (s) {
        return s.trim();
      }).filter(Boolean);
    }
  }
  return Array.isArray(val) ? val : [];
}

/**
 * 判断两个数组是否相等
 * @param {Array} a - 数组 a
 * @param {Array} b - 数组 b
 * @returns {boolean}
 */
function arraysEqual(a, b) {
  if (a.length !== b.length) return false;
  for (var i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

/**
 * 对比资源数组
 * @param {Array} oldArr - 旧数组
 * @param {Array} newArr - 新数组
 * @param {string} fieldName - 字段名称
 * @param {string} resourceType - 资源类型
 * @returns {Object} { html, useShadowDOM, markers, hasDiff }
 */
function diffResourceArrays(oldArr, newArr, fieldName, resourceType) {
  var result = [];
  var markers = [];

  // 提取 URL 用于对比
  var oldUrls = oldArr.map(function (v) {
    return extractUrl$1(v);
  });
  var newUrls = newArr.map(function (v) {
    return extractUrl$1(v);
  });

  // 建立索引映射
  var oldSet = new Set(oldUrls);
  var newSet = new Set(newUrls);

  // 处理旧资源
  var oldResources = oldUrls.map(function (url) {
    var exists = newSet.has(url);
    return {
      url: url,
      diffType: exists ? 'same' : 'del'
    };
  });

  // 处理新资源
  var newResources = newUrls.map(function (url) {
    var exists = oldSet.has(url);
    return {
      url: url,
      diffType: exists ? 'same' : 'add'
    };
  });

  // 合并所有项（用于生成 HTML）
  var allItems = [].concat(oldArr, newArr);
  var seenUrls = new Set();
  var hasDiff = false;
  allItems.forEach(function (item) {
    var url = extractUrl$1(item);
    if (!url || seenUrls.has(url)) return;
    seenUrls.add(url);
    var inOld = oldSet.has(url);
    var inNew = newSet.has(url);
    if (!inOld && inNew) {
      result.push(generateDiffTag$1(item, 'add', fieldName, resourceType));
      hasDiff = true;
    } else if (inOld && !inNew) {
      result.push(generateDiffTag$1(item, 'del', fieldName, resourceType));
      hasDiff = true;
    } else {
      result.push(generateResourceHtml$1(item, resourceType));
    }
  });
  return {
    html: result.join(''),
    useShadowDOM: false,
    markers: markers,
    hasDiff: hasDiff,
    resourceType: resourceType,
    oldResources: oldResources,
    newResources: newResources
  };
}

/**
 * 对比动态字段（数组对象）
 * @param {Array} oldVal - 旧值数组，格式: [{ label, value, sort }]
 * @param {Array} newVal - 新值数组，格式: [{ label, value, sort }]
 * @param {string} fieldName - 字段名称
 * @returns {Object} { html, useShadowDOM, markers, hasDiff }
 */
function diffDynamicField(oldVal, newVal, fieldName) {
  var oldArr = normalizeDynamicArray(oldVal);
  var newArr = normalizeDynamicArray(newVal);

  // 对比并生成差异结果
  var result = diffDynamicArrays(oldArr, newArr, fieldName);
  return result;
}

/**
 * 标准化动态字段数组
 * @param {Array|string} val - 输入值
 * @returns {Array} 标准化后的数组
 */
function normalizeDynamicArray(val) {
  if (!val) return [];
  if (typeof val === 'string') {
    try {
      var parsed = JSON.parse(val);
      return Array.isArray(parsed) ? parsed : [];
    } catch (_unused3) {
      return [];
    }
  }
  return Array.isArray(val) ? val : [];
}

/**
 * 对比两个动态字段数组
 * @param {Array} oldArr - 旧数组
 * @param {Array} newArr - 新数组
 * @param {string} fieldName - 字段名称
 * @returns {Object} { html, useShadowDOM, markers, hasDiff }
 */
function diffDynamicArrays(oldArr, newArr, fieldName) {
  var result = [];
  var markers = [];

  // 建立索引映射（过滤掉没有 label 的项）
  var oldMap = new Map(oldArr.filter(function (item) {
    return item && item.label;
  }).map(function (item) {
    return [item.label, item];
  }));
  var newMap = new Map(newArr.filter(function (item) {
    return item && item.label;
  }).map(function (item) {
    return [item.label, item];
  }));

  // 获取所有标签
  var oldLabels = Array.from(oldMap.keys());
  var newLabels = Array.from(newMap.keys());
  var allLabels = new Set([].concat(oldLabels, newLabels));

  // 快速判断：如果标签集合相同且所有值相同，则无差异
  var hasDiff = oldMap.size !== newMap.size;
  allLabels.forEach(function (label) {
    var _ref, _newItem$sort;
    var oldItem = oldMap.get(label);
    var newItem = newMap.get(label);
    var processedItem = {
      label: label,
      value: '',
      sort: (_ref = (_newItem$sort = newItem == null ? void 0 : newItem.sort) != null ? _newItem$sort : oldItem == null ? void 0 : oldItem.sort) != null ? _ref : 0,
      diffType: 'same',
      diffHtml: ''
    };
    if (!oldItem && newItem) {
      var _newItem$value, _newItem$value2;
      // 新增项
      processedItem.value = (_newItem$value = newItem.value) != null ? _newItem$value : '';
      processedItem.diffType = 'add';
      processedItem.diffHtml = wrapWithDiffTag((_newItem$value2 = newItem.value) != null ? _newItem$value2 : '', 'add', fieldName);
      hasDiff = true;
    } else if (oldItem && !newItem) {
      var _oldItem$value, _oldItem$value2;
      // 删除项
      processedItem.value = (_oldItem$value = oldItem.value) != null ? _oldItem$value : '';
      processedItem.diffType = 'del';
      processedItem.diffHtml = wrapWithDiffTag((_oldItem$value2 = oldItem.value) != null ? _oldItem$value2 : '', 'del', fieldName);
      hasDiff = true;
    } else if (oldItem && newItem) {
      if (oldItem.value !== newItem.value) {
        var _newItem$value3;
        // 值变更
        processedItem.value = (_newItem$value3 = newItem.value) != null ? _newItem$value3 : '';
        processedItem.diffType = 'change';
        var diffResult = diffText(String(oldItem.value || ''), String(newItem.value || ''), fieldName);
        processedItem.diffHtml = diffResult.html;
        markers.push.apply(markers, diffResult.markers);
        hasDiff = true;
      } else {
        var _newItem$value4, _newItem$value5;
        // 无变化
        processedItem.value = (_newItem$value4 = newItem.value) != null ? _newItem$value4 : '';
        processedItem.diffType = 'same';
        processedItem.diffHtml = (_newItem$value5 = newItem.value) != null ? _newItem$value5 : '';
      }
    }
    result.push(processedItem);
  });

  // 按 sort 重新排序
  result.sort(function (a, b) {
    return a.sort - b.sort;
  });
  return {
    html: result,
    useShadowDOM: false,
    markers: markers,
    hasDiff: hasDiff
  };
}

/**
 * 用差异标签包裹内容
 * @param {string} content - 内容
 * @param {string} type - 差异类型: 'add' | 'del'
 * @param {string} fieldName - 字段名称
 * @returns {string}
 */
function wrapWithDiffTag(content, type, fieldName) {
  var tag = type === 'add' ? 'ins' : 'del';
  var color = type === 'add' ? '#1878E8' : 'red';
  var diffId = fieldName + "_" + type + "_" + Date.now() + "_" + Math.random().toString(36).substr(2, 9);
  return "<" + tag + " style=\"color: " + color + ";\" data-diff=\"" + type + "\" data-diff-id=\"" + diffId + "\" data-diff-field=\"" + fieldName + "\">" + content + "</" + tag + ">";
}

/**
 * 从值中提取 URL
 * 支持字符串和对象格式
 * @param {string|Object} value - 值
 * @returns {string} URL
 */
function extractUrl$1(value) {
  if (!value) return '';
  if (typeof value === 'string') return value;
  if (typeof value === 'object' && value.url) return value.url;
  return '';
}

/**
 * 从值中提取标签
 * @param {string|Object} value - 值
 * @returns {string} 标签
 */
function extractLabel$1(value) {
  if (!value) return '';
  if (typeof value === 'string') return getFileName$1(value);
  if (typeof value === 'object') {
    if (value.label) return value.label;
    if (value.url) return getFileName$1(value.url);
  }
  return '';
}

/**
 * 从值中提取 target
 * @param {string|Object} value - 值
 * @returns {string} target ('_blank' | '_self' | '_preview' | '_inline')
 */
function extractTarget$1(value) {
  if (!value || typeof value !== 'object') return '_blank';
  return value.target || '_blank';
}

/**
 * 生成资源 HTML
 * @param {string|Object} value - 值（字符串或对象）
 * @param {string} type - 资源类型
 * @returns {string}
 */
function generateResourceHtml$1(value, type) {
  if (!value) return '';
  var url = extractUrl$1(value);
  var label = extractLabel$1(value);
  var target = extractTarget$1(value);
  if (!url) return '';
  switch (type) {
    case 'image':
    case 'images':
      return "<span class=\"resource-preview resource-image\" data-type=\"image\" data-url=\"" + escapeAttr$2(url) + "\" title=\"\u70B9\u51FB\u9884\u89C8\">\n        <img src=\"" + escapeAttr$2(url) + "\" alt=\"" + escapeAttr$2(label) + "\" />\n      </span>";
    case 'video':
    case 'videos':
      return "<span class=\"resource-preview resource-video\" data-type=\"video\" data-url=\"" + escapeAttr$2(url) + "\" title=\"\u70B9\u51FB\u64AD\u653E\">\n        <span class=\"resource-icon\">\uD83C\uDFAC</span>\n        <span class=\"resource-name\">" + escapeHtml$2(label) + "</span>\n      </span>";
    case 'file':
    case 'files':
      {
        var linkTarget = target === '_self' ? '' : "target=\"" + target + "\"";
        return "<span class=\"resource-preview resource-file\" data-type=\"file\" data-url=\"" + escapeAttr$2(url) + "\" data-target=\"" + escapeAttr$2(target) + "\">\n        <span class=\"resource-icon\">\uD83D\uDCCE</span>\n        <a href=\"" + escapeAttr$2(url) + "\" " + linkTarget + " class=\"resource-link\">" + escapeHtml$2(label) + "</a>\n      </span>";
      }
    default:
      return escapeHtml$2(url);
  }
}

/**
 * 生成带差异标记的资源 HTML
 * @param {string|Object} value - 值（字符串或对象）
 * @param {string} diffType - 差异类型 ('add' | 'del')
 * @param {string} fieldName - 字段名
 * @param {string} type - 资源类型
 * @returns {string}
 */
function generateDiffTag$1(value, diffType, fieldName, type) {
  var tag = diffType === 'add' ? 'ins' : 'del';
  var color = diffType === 'add' ? '#1878E8' : '#D32F2F';
  var diffId = fieldName + "_" + diffType + "_" + Date.now() + "_" + Math.random().toString(36).substr(2, 9);
  var content = generateResourceHtml$1(value, type);
  return "<" + tag + " style=\"color: " + color + ";\" data-diff=\"" + diffType + "\" data-diff-id=\"" + diffId + "\" data-diff-field=\"" + fieldName + "\">" + content + "</" + tag + ">";
}

/**
 * 获取文件名
 * @param {string} url - URL
 * @returns {string} 文件名
 */
function getFileName$1(url) {
  if (!url || typeof url !== 'string') return '';
  try {
    var pathname = new URL(url).pathname;
    return pathname.split('/').pop() || url;
  } catch (_unused4) {
    return url.split('/').pop() || url;
  }
}

/**
 * HTML 转义
 */
function escapeHtml$2(str) {
  if (!str) return '';
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

/**
 * 属性转义
 */
function escapeAttr$2(str) {
  if (!str) return '';
  return String(str).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

/**
 * 对比优先级字段
 * @param {number} oldPriority - 旧优先级
 * @param {number} newPriority - 新优先级
 * @returns {Object} { html, useShadowDOM, markers }
 */
function diffPriority(oldPriority, newPriority) {
  var _priorityMap$oldPrior, _priorityMap$newPrior;
  var priorityMap = {
    0: '低',
    1: '高'
  };
  var oldText = (_priorityMap$oldPrior = priorityMap[oldPriority]) != null ? _priorityMap$oldPrior : '未设置';
  var newText = (_priorityMap$newPrior = priorityMap[newPriority]) != null ? _priorityMap$newPrior : '未设置';
  return diffText(oldText, newText, 'priority');
}

/**
 * 批量对比固定字段
 * @param {Object} current - 当前版本数据
 * @param {Object} last - 历史版本数据
 * @param {string[]} fields - 要对比的字段列表
 * @returns {Object} { diffed, hasDiff }
 */
function diffFixedFields(current, last, fields) {
  if (fields === void 0) {
    fields = [];
  }
  var defaultFields = ['title', 'subtitle', 'digest', 'task', 'siteName', 'channelName'];
  var targetFields = fields.length > 0 ? fields : defaultFields;
  var diffed = {};
  var hasDiff = false;
  targetFields.forEach(function (field) {
    if (current[field] !== last[field]) {
      var mayContainHtml = field === 'title';
      diffed[field] = diffField(String(last[field] || ''), String(current[field] || ''), field, {
        mayContainHtml: mayContainHtml
      });
      hasDiff = true;
    }
  });

  // 对比优先级
  if (current.priority !== last.priority) {
    diffed.priority = diffPriority(last.priority, current.priority);
    hasDiff = true;
  }
  return {
    diffed: diffed,
    hasDiff: hasDiff
  };
}

/**
 * 对比图片/视频列表
 * @param {Array} oldList - 旧列表
 * @param {Array} newList - 新列表
 * @param {string} idField - 标识字段名
 * @returns {Object} { newList, oldList }
 */
function diffMediaList(oldList, newList, idField) {
  if (oldList === void 0) {
    oldList = [];
  }
  if (newList === void 0) {
    newList = [];
  }
  if (idField === void 0) {
    idField = 'fileValue';
  }
  var processedNewList = newList.map(function (newItem) {
    var oldItem = oldList.find(function (item) {
      return item[idField] === newItem[idField];
    });
    if (!oldItem) {
      return _extends({}, newItem, {
        diffType: ChangeTypes.ADD
      });
    }
    var hasChange = checkMediaItemChange(oldItem, newItem);
    if (hasChange) {
      return _extends({}, newItem, {
        diffType: ChangeTypes.MODIFY
      });
    }
    return _extends({}, newItem, {
      diffType: ChangeTypes.SAME
    });
  });

  // 找出被删除的项
  oldList.forEach(function (oldItem) {
    var newItem = newList.find(function (item) {
      return item[idField] === oldItem[idField];
    });
    if (!newItem) {
      processedNewList.push(_extends({}, oldItem, {
        diffType: ChangeTypes.DEL
      }));
    }
  });
  return {
    newList: processedNewList,
    oldList: oldList
  };
}

/**
 * 检查媒体项是否有变化
 * @param {Object} oldItem - 旧媒体项
 * @param {Object} newItem - 新媒体项
 * @returns {boolean}
 */
function checkMediaItemChange(oldItem, newItem) {
  var compareFields = ['title', 'describes', 'type', 'coverAddress'];
  return compareFields.some(function (field) {
    return oldItem[field] !== newItem[field];
  });
}

/**
 * 对比文档文件
 * @param {Object} oldFile - 旧文档
 * @param {Object} newFile - 新文档
 * @returns {Object} 带差异类型的文档信息
 */
function diffDocFile(oldFile, newFile) {
  if (!oldFile && !newFile) {
    return {
      diffType: 'none',
      newFile: null,
      oldFile: null
    };
  }
  if (!oldFile) {
    return {
      diffType: ChangeTypes.ADD,
      newFile: _extends({}, newFile, {
        diffType: ChangeTypes.ADD
      }),
      oldFile: null
    };
  }
  if (!newFile) {
    return {
      diffType: ChangeTypes.DEL,
      newFile: null,
      oldFile: oldFile
    };
  }
  if (oldFile.fileId === newFile.fileId) {
    return {
      diffType: ChangeTypes.SAME,
      newFile: _extends({}, newFile, {
        diffType: ChangeTypes.SAME
      }),
      oldFile: oldFile
    };
  }
  return {
    diffType: ChangeTypes.MODIFY,
    newFile: _extends({}, newFile, {
      diffType: ChangeTypes.MODIFY
    }),
    oldFile: oldFile
  };
}

/**
 * 解析文档文件信息
 * @param {string} content - 文档内容（JSON 字符串）
 * @returns {Object|null}
 */
function parseDocFile(content) {
  if (!content) return null;
  try {
    var docInfo = JSON.parse(content);
    if (docInfo && docInfo.fileId) {
      return {
        fileId: docInfo.fileId,
        fileName: docInfo.fileName || ''
      };
    }
  } catch (e) {
    // 不是 JSON 格式
  }
  return null;
}

/**
 * 提取媒体项的具体变更
 * @param {Object} newItem - 新媒体项
 * @param {Object} oldItem - 旧媒体项
 * @returns {Array} 变更列表
 */
function extractMediaChanges$1(newItem, oldItem) {
  var changes = [];
  var compareFields = ['title', 'describes', 'coverAddress'];
  compareFields.forEach(function (field) {
    if (oldItem && newItem[field] !== oldItem[field]) {
      changes.push({
        field: field,
        oldValue: oldItem[field] || '',
        newValue: newItem[field] || ''
      });
    }
  });
  return changes;
}

/**
 * 自定义字段对比工具
 */

/**
 * 对比自定义字段
 * @param {Object} oldFields - 旧自定义字段
 * @param {Object} newFields - 新自定义字段
 * @param {Object} options - 配置选项
 * @returns {Object} 带差异标记的字段对象
 */
function diffCustomFields$1(oldFields, newFields, options) {
  if (oldFields === void 0) {
    oldFields = {};
  }
  if (newFields === void 0) {
    newFields = {};
  }
  if (options === void 0) {
    options = {};
  }
  var result = {};
  var allKeys = new Set([].concat(Object.keys(oldFields), Object.keys(newFields)));
  allKeys.forEach(function (key) {
    var oldVal = oldFields[key] || '';
    var newVal = newFields[key] || '';
    if (oldVal === newVal) {
      result[key] = newVal;
      return;
    }

    // 根据选项判断对比方式
    var _options = options,
      _options$fieldTypeMap = _options.fieldTypeMap,
      fieldTypeMap = _options$fieldTypeMap === void 0 ? {} : _options$fieldTypeMap;
    var fieldType = fieldTypeMap[key];
    if (fieldType === 'file') {
      result[key] = diffFileField(oldVal, newVal);
    } else if (fieldType === 'html' || String(oldVal).includes('<') || String(newVal).includes('<')) {
      result[key] = diffHTML(String(oldVal), String(newVal), key);
    } else {
      result[key] = diffText(String(oldVal), String(newVal), key);
    }
  });
  return result;
}

/**
 * 对比单个自定义字段
 * @param {string} oldVal - 旧值
 * @param {string} newVal - 新值
 * @param {string} fieldName - 字段名称
 * @param {string} fieldType - 字段类型
 * @returns {Object} { html, useShadowDOM, markers }
 */
function diffCustomField(oldVal, newVal, fieldName, fieldType) {
  if (fieldType === void 0) {
    fieldType = 'text';
  }
  if (oldVal === newVal) {
    return {
      html: newVal,
      useShadowDOM: false,
      markers: []
    };
  }
  var oldStr = String(oldVal || '');
  var newStr = String(newVal || '');
  if (fieldType === 'file') {
    return {
      html: diffFileField(oldStr, newStr),
      useShadowDOM: false,
      markers: []
    };
  }
  if (fieldType === 'html' || oldStr.includes('<') || newStr.includes('<')) {
    return diffHTML(oldStr, newStr, fieldName);
  }
  return diffText(oldStr, newStr, fieldName);
}

/**
 * 对比文件字段内容
 * @param {string} oldFile - 旧文件名
 * @param {string} newFile - 新文件名
 * @returns {string} 带差异标记的字符串
 */
function diffFileField(oldFile, newFile) {
  if (newFile) {
    if (newFile !== oldFile) {
      return "<ins style=\"color: #1878E8;\" data-diff=\"add\" data-diff-field=\"file\">" + newFile + "</ins>";
    }
    return newFile;
  }
  if (oldFile) {
    return "<del style=\"color: red;\" data-diff=\"del\" data-diff-field=\"file\">" + oldFile + "</del>";
  }
  return '';
}

/**
 * 自定义字段对比工具
 */

/**
 * 对比自定义字段数组
 * @param {Array} oldVal - 旧值数组，格式: [{ field, type, label, value }]
 * @param {Array} newVal - 新值数组，格式: [{ field, type, label, value }]
 * @param {string} fieldName - 字段名称
 * @returns {Object} { items, markers, hasDiff }
 */
function diffCustomFields(oldVal, newVal, fieldName) {
  var oldArr = normalizeArray(oldVal);
  var newArr = normalizeArray(newVal);

  // 校验数据格式
  if (!isValidCustomFieldArray(oldArr) || !isValidCustomFieldArray(newArr)) {
    console.warn('[rich-diff] 自定义字段数据格式不正确，跳过对比');
    return {
      items: [],
      markers: [],
      hasDiff: false
    };
  }

  // 按 label 匹配对比
  return diffCustomFieldItems(oldArr, newArr, fieldName);
}

/**
 * 校验自定义字段数组格式
 * @param {Array} arr - 数组
 * @returns {boolean}
 */
function isValidCustomFieldArray(arr) {
  if (!Array.isArray(arr)) return false;
  if (arr.length === 0) return true;
  return arr.every(function (item) {
    return item && typeof item === 'object' &&
    // label 必须存在且为字符串（允许空字符串）
    'label' in item && typeof item.label === 'string' &&
    // value 必须存在
    'value' in item;
  });
}

/**
 * 标准化数组
 */
function normalizeArray(val) {
  if (!val) return [];
  if (typeof val === 'string') {
    try {
      var parsed = JSON.parse(val);
      return Array.isArray(parsed) ? parsed : [];
    } catch (_unused) {
      return [];
    }
  }
  return Array.isArray(val) ? val : [];
}

/**
 * 获取字段项的唯一标识
 * 优先使用 label，label 为空时使用 field
 * @param {Object} item - 字段项
 * @returns {string} 唯一标识
 */
function getItemKey(item) {
  var _item$label;
  if (!item) return '';
  // 优先使用 label，label 为空时使用 field
  var label = ((_item$label = item.label) == null ? void 0 : _item$label.trim()) || '';
  if (label) return label;
  return item.field || '';
}

/**
 * 对比自定义字段项
 */
function diffCustomFieldItems(oldArr, newArr, parentFieldName) {
  var items = [];
  var markers = [];

  // 按唯一标识建立索引
  var oldMap = new Map(oldArr.filter(function (item) {
    return item && (item.label !== undefined || item.field);
  }).map(function (item) {
    return [getItemKey(item), item];
  }));
  var newMap = new Map(newArr.filter(function (item) {
    return item && (item.label !== undefined || item.field);
  }).map(function (item) {
    return [getItemKey(item), item];
  }));

  // 获取所有标识
  var oldKeys = Array.from(oldMap.keys());
  var newKeys = Array.from(newMap.keys());
  var allKeys = new Set([].concat(oldKeys, newKeys));
  var hasDiff = oldMap.size !== newMap.size;
  allKeys.forEach(function (key) {
    var _newItem$label, _oldItem$label;
    var oldItem = oldMap.get(key);
    var newItem = newMap.get(key);

    // 显示标签：优先使用 label，否则使用 field
    var displayLabel = (newItem == null || (_newItem$label = newItem.label) == null ? void 0 : _newItem$label.trim()) || (oldItem == null || (_oldItem$label = oldItem.label) == null ? void 0 : _oldItem$label.trim()) || key;
    var itemFieldName = parentFieldName + "_" + key;
    var type = (newItem == null ? void 0 : newItem.type) || (oldItem == null ? void 0 : oldItem.type) || 'text';
    var processedItem = {
      label: displayLabel,
      type: type,
      field: (newItem == null ? void 0 : newItem.field) || (oldItem == null ? void 0 : oldItem.field) || '',
      fieldName: itemFieldName,
      diffType: 'same',
      oldValue: null,
      newValue: null,
      diffHtml: '',
      hasDiff: false
    };
    if (!oldItem && newItem) {
      // 新增项
      processedItem.diffType = 'add';
      processedItem.newValue = newItem.value;
      processedItem.hasDiff = true;
      processedItem.diffHtml = generateValueHtml(newItem.value, type, itemFieldName, 'add');
      hasDiff = true;
    } else if (oldItem && !newItem) {
      // 删除项
      processedItem.diffType = 'del';
      processedItem.oldValue = oldItem.value;
      processedItem.hasDiff = true;
      processedItem.diffHtml = generateValueHtml(oldItem.value, type, itemFieldName, 'del');
      hasDiff = true;
    } else if (oldItem && newItem) {
      // 对比值
      processedItem.oldValue = oldItem.value;
      processedItem.newValue = newItem.value;
      var valueDiff = compareValues(oldItem.value, newItem.value, type, itemFieldName);
      processedItem.hasDiff = valueDiff.hasDiff;
      processedItem.diffHtml = valueDiff.diffHtml;
      if (valueDiff.hasDiff) {
        processedItem.diffType = 'change';
        markers.push.apply(markers, valueDiff.markers);
        hasDiff = true;
      }
    }
    items.push(processedItem);
  });
  return {
    items: items,
    markers: markers,
    hasDiff: hasDiff
  };
}

/**
 * 对比值
 */
function compareValues(oldVal, newVal, type, fieldName) {
  var oldValues = toArray(oldVal);
  var newValues = toArray(newVal);

  // 如果都是单值
  if (oldValues.length === 1 && newValues.length === 1) {
    // 使用 isValueEqual 判断值是否相等（支持对象格式）
    if (isValueEqual(oldValues[0], newValues[0])) {
      return {
        hasDiff: false,
        diffHtml: generateResourceHtml(newValues[0], type),
        markers: []
      };
    }

    // 文本类型使用 diffText
    if (type === 'text') {
      // 检查是否包含 HTML
      var isHtml = String(oldVal).includes('<') || String(newVal).includes('<');
      if (isHtml) {
        var _result = diffHTML(String(oldVal || ''), String(newVal || ''), fieldName);
        return {
          hasDiff: true,
          diffHtml: _result.html,
          markers: _result.markers || []
        };
      }
      var result = diffText(String(oldVal || ''), String(newVal || ''), fieldName);
      return {
        hasDiff: true,
        diffHtml: result.html,
        markers: result.markers || []
      };
    }

    // 资源类型
    return {
      hasDiff: true,
      diffHtml: generateResourceDiffHtml(oldValues[0], newValues[0], type, fieldName),
      markers: []
    };
  }

  // 数组对比
  return compareArrays(oldValues, newValues, type, fieldName);
}

/**
 * 转换为数组
 * 支持：字符串、对象、数组
 */
function toArray(val) {
  if (!val) return [];
  if (Array.isArray(val)) return val;
  return [val];
}

/**
 * 从值中提取 URL
 * 支持字符串和对象格式
 * @param {string|Object} value - 值
 * @returns {string} URL
 */
function extractUrl(value) {
  if (!value) return '';
  if (typeof value === 'string') return value;
  if (typeof value === 'object' && value.url) return value.url;
  return '';
}

/**
 * 从值中提取标签
 * @param {string|Object} value - 值
 * @returns {string} 标签
 */
function extractLabel(value) {
  if (!value) return '';
  if (typeof value === 'string') return getFileName(value);
  if (typeof value === 'object') {
    // 优先使用 label，其次用 url 提取文件名
    if (value.label) return value.label;
    if (value.url) return getFileName(value.url);
  }
  return '';
}

/**
 * 从值中提取 target
 * @param {string|Object} value - 值
 * @returns {string} target ('_blank' | '_self' | '_preview' | '_inline')
 */
function extractTarget(value) {
  if (!value || typeof value !== 'object') return '_blank';
  return value.target || '_blank';
}

/**
 * 判断两个值是否相等
 * 支持字符串和对象格式
 */
function isValueEqual(val1, val2) {
  var url1 = extractUrl(val1);
  var url2 = extractUrl(val2);
  return url1 === url2;
}

/**
 * 对比数组
 * 支持字符串和对象格式的值
 */
function compareArrays(oldArr, newArr, type, fieldName) {
  // 确保参数是数组
  oldArr = Array.isArray(oldArr) ? oldArr : [];
  newArr = Array.isArray(newArr) ? newArr : [];

  // 提取 URL 用于对比
  var oldUrls = oldArr.map(function (v) {
    return extractUrl(v);
  });
  var newUrls = newArr.map(function (v) {
    return extractUrl(v);
  });
  var oldUrlSet = new Set(oldUrls);
  var newUrlSet = new Set(newUrls);

  // 检查是否完全相同
  if (oldUrlSet.size === newUrlSet.size) {
    var allSame = oldUrls.every(function (url) {
      return newUrlSet.has(url);
    });
    if (allSame) {
      return {
        hasDiff: false,
        diffHtml: newArr.map(function (v) {
          return generateResourceHtml(v, type);
        }).join(''),
        markers: []
      };
    }
  }

  // 有差异，按 URL 合并所有项
  var allItems = [].concat(oldArr, newArr);
  var seenUrls = new Set();
  var result = [];
  allItems.forEach(function (item) {
    var url = extractUrl(item);
    if (!url || seenUrls.has(url)) return;
    seenUrls.add(url);
    var inOld = oldUrlSet.has(url);
    var inNew = newUrlSet.has(url);
    if (!inOld && inNew) {
      result.push(generateDiffTag(item, 'add', fieldName, type));
    } else if (inOld && !inNew) {
      result.push(generateDiffTag(item, 'del', fieldName, type));
    } else {
      result.push(generateResourceHtml(item, type));
    }
  });
  return {
    hasDiff: true,
    diffHtml: result.join(''),
    markers: []
  };
}

/**
 * 生成值的 HTML（带差异标记）
 * 支持字符串和对象格式
 */
function generateValueHtml(value, type, fieldName, diffType) {
  var values = toArray(value);
  return values.map(function (v) {
    return generateDiffTag(v, diffType, fieldName, type);
  }).join('');
}

/**
 * 生成资源 HTML
 * 支持字符串和对象格式的值
 */
function generateResourceHtml(value, type) {
  if (!value) return '';

  // 提取 URL、标签、target
  var url = extractUrl(value);
  var label = extractLabel(value);
  var target = extractTarget(value);
  if (!url) return '';
  switch (type) {
    case 'image':
      return "<span class=\"resource-preview resource-image\" data-type=\"image\" data-url=\"" + escapeAttr$1(url) + "\" title=\"\u70B9\u51FB\u9884\u89C8\">\n        <img src=\"" + escapeAttr$1(url) + "\" alt=\"" + escapeAttr$1(label) + "\" />\n      </span>";
    case 'video':
      return "<span class=\"resource-preview resource-video\" data-type=\"video\" data-url=\"" + escapeAttr$1(url) + "\" title=\"\u70B9\u51FB\u64AD\u653E\">\n        <span class=\"resource-icon\">\uD83C\uDFAC</span>\n        <span class=\"resource-name\">" + escapeHtml$1(label) + "</span>\n      </span>";
    case 'file':
      {
        // target 支持：_blank（新页签）、_self（当前页）、_preview（预览弹窗）、_inline（内联显示）
        var linkTarget = target === '_self' ? '' : "target=\"" + target + "\"";
        return "<span class=\"resource-preview resource-file\" data-type=\"file\" data-url=\"" + escapeAttr$1(url) + "\" data-target=\"" + escapeAttr$1(target) + "\">\n        <span class=\"resource-icon\">\uD83D\uDCCE</span>\n        <a href=\"" + escapeAttr$1(url) + "\" " + linkTarget + " class=\"resource-link\">" + escapeHtml$1(label) + "</a>\n      </span>";
      }
    default:
      return escapeHtml$1(url);
  }
}

/**
 * 生成带差异标记的资源 HTML
 * @param {string|Object} value - 值（字符串或对象）
 * @param {string} diffType - 差异类型 ('add' | 'del')
 * @param {string} fieldName - 字段名
 * @param {string} type - 资源类型
 */
function generateDiffTag(value, diffType, fieldName, type) {
  var tag = diffType === 'add' ? 'ins' : 'del';
  var color = diffType === 'add' ? '#1878E8' : '#D32F2F';
  var diffId = fieldName + "_" + diffType + "_" + Date.now() + "_" + Math.random().toString(36).substr(2, 9);
  var content = generateResourceHtml(value, type);
  return "<" + tag + " style=\"color: " + color + ";\" data-diff=\"" + diffType + "\" data-diff-id=\"" + diffId + "\" data-diff-field=\"" + fieldName + "\">" + content + "</" + tag + ">";
}

/**
 * 生成资源对比 HTML
 * @param {string|Object} oldVal - 旧值
 * @param {string|Object} newVal - 新值
 * @param {string} type - 资源类型
 * @param {string} fieldName - 字段名
 */
function generateResourceDiffHtml(oldVal, newVal, type, fieldName) {
  var oldHtml = oldVal ? generateDiffTag(oldVal, 'del', fieldName, type) : '';
  var newHtml = newVal ? generateDiffTag(newVal, 'add', fieldName, type) : '';
  return oldHtml + newHtml;
}

/**
 * 获取文件名
 * 支持字符串和对象格式
 */
function getFileName(value) {
  var url = extractUrl(value);
  if (!url || typeof url !== 'string') return '';
  try {
    var pathname = new URL(url).pathname;
    return pathname.split('/').pop() || url;
  } catch (_unused2) {
    return url.split('/').pop() || url;
  }
}

/**
 * HTML 转义
 */
function escapeHtml$1(str) {
  if (!str) return '';
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

/**
 * 属性转义
 */
function escapeAttr$1(str) {
  if (!str) return '';
  return String(str).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

/**
 * 计算文章所有字段的差异
 * @param {Object} current - 当前版本数据
 * @param {Object} last - 历史版本数据
 * @param {Object} options - 配置选项
 * @returns {Object} { diffed, last: lastCopy, hasDiff }
 */
function computeArticleDiff(current, last, options) {
  if (options === void 0) {
    options = {};
  }
  if (!last) {
    return {
      diffed: _extends({}, current),
      last: null,
      hasDiff: false
    };
  }
  var _options = options,
    _options$siteEssayTyp = _options.siteEssayType,
    siteEssayType = _options$siteEssayTyp === void 0 ? 0 : _options$siteEssayTyp;

  // 深拷贝避免污染原数据
  var diffed = JSON.parse(JSON.stringify(current));
  var lastCopy = JSON.parse(JSON.stringify(last));
  var hasDiff = false;

  // 1. 固定字段对比
  var fixedResult = diffFixedFields(current, last);
  Object.keys(fixedResult.diffed).forEach(function (key) {
    diffed[key] = fixedResult.diffed[key].html;
  });
  hasDiff = hasDiff || fixedResult.hasDiff;

  // 2. 根据文章类型对比内容
  switch (siteEssayType) {
    case 0:
      // 文本文章
      if (current.content !== last.content) {
        var result = diffHTML(last.content || '', current.content || '', 'content');
        diffed.content = result.html;
        hasDiff = true;
      }
      break;
    case 1: // 图集文章
    case 2:
      // 视频文章
      if (current.cmsFileList || last.cmsFileList) {
        var _diffMediaList = diffMediaList(last.cmsFileList, current.cmsFileList),
          newList = _diffMediaList.newList,
          oldList = _diffMediaList.oldList;
        diffed.cmsFileList = newList;
        lastCopy.cmsFileList = oldList;
        if (newList.some(function (item) {
          return item.diffType !== 'same';
        })) {
          hasDiff = true;
        }
      }
      break;
    case 3:
      // 链接文章
      if (current.content !== last.content) {
        var _result = diffHTML(last.content || '', current.content || '', 'content');
        diffed.content = _result.html;
        hasDiff = true;
      }
      break;
    case 4:
      // 文档文章
      var docDiff = diffDocFile(parseDocFile(last.content), parseDocFile(current.content));
      if (docDiff.diffType !== 'same') {
        diffed._docFile = docDiff.newFile;
        lastCopy._docFile = docDiff.oldFile;
        hasDiff = true;
      }
      break;
  }

  // 3. 自定义字段对比
  if (current.customFieldMap && last.customFieldMap) {
    var customResult = diffCustomFields$1(last.customFieldMap, current.customFieldMap);
    diffed.customFieldMap = customResult;
    hasDiff = true;
  }
  return {
    diffed: diffed,
    last: lastCopy,
    hasDiff: hasDiff
  };
}

/**
 * DOM 解析工具
 * 用于解析差异标记
 */

/**
 * 获取差异范围
 * @param {string} html - HTML 字符串
 * @returns {Array} 范围列表 [{ type, range, content }]
 */
function getDiffRanges(html) {
  if (!html || typeof html !== 'string') return [];
  var ranges = [];
  var pattern = /<(ins|del|difftext)([^>]*)>([\s\S]*?)<\/\1>/gi;
  var match;
  while ((match = pattern.exec(html)) !== null) {
    var attrs = match[2];
    var diffId = extractAttr(attrs, 'data-diff-id');
    var diffType = extractAttr(attrs, 'data-diff');
    ranges.push({
      type: diffType || (match[1].toLowerCase() === 'ins' ? 'add' : 'del'),
      range: [match.index, match.index + match[0].length],
      content: match[3],
      diffId: diffId
    });
  }
  return ranges;
}

/**
 * 检查是否有差异标记
 * @param {string} str - 字符串
 * @returns {boolean}
 */
function hasDiffMarkers(str) {
  if (!str || typeof str !== 'string') return false;
  return str.includes('data-diff="') || str.includes('<ins') || str.includes('<del') || str.includes('<difftext');
}

/**
 * 检测变更类型
 * @param {string} str - 字符串
 * @returns {string} 'add' | 'del' | 'modify' | 'none'
 */
function detectChangeType(str) {
  if (!str || typeof str !== 'string') return 'none';
  var hasIns = str.includes('data-diff="add"') || str.includes('<ins') || str.includes('<difftext');
  var hasDel = str.includes('data-diff="del"') || str.includes('<del');
  if (hasIns && hasDel) return 'modify';
  if (hasIns) return 'add';
  if (hasDel) return 'del';
  return 'none';
}

/**
 * 提取差异标记
 * @param {string} html - HTML 字符串
 * @returns {Object} { insTags, delTags }
 */
function extractDiffMarkers(html) {
  var insTags = [];
  var delTags = [];
  if (!html || typeof html !== 'string') {
    return {
      insTags: insTags,
      delTags: delTags
    };
  }
  var pattern = /<(ins|del|difftext)([^>]*)>([\s\S]*?)<\/\1>/gi;
  var match;
  while ((match = pattern.exec(html)) !== null) {
    var tagType = match[1].toLowerCase();
    var attrs = match[2];
    var content = match[3];
    var diffId = extractAttr(attrs, 'data-diff-id');
    var diffType = extractAttr(attrs, 'data-diff');
    var item = {
      text: cleanContent(content),
      diffId: diffId,
      attrs: attrs
    };

    // 根据类型分类
    if (diffType === 'add' || tagType === 'ins') {
      insTags.push(item);
    } else if (diffType === 'del' || tagType === 'del') {
      delTags.push(item);
    }
  }
  return {
    insTags: insTags,
    delTags: delTags
  };
}

/**
 * 根据ID查找元素
 * @param {string} html - HTML 字符串
 * @param {string} diffId - 差异ID
 * @returns {Object|null} { tagName, content, attrs }
 */
function findElementById(html, diffId) {
  if (!html || !diffId) return null;
  var pattern = new RegExp("<(ins|del|difftext)([^>]*data-diff-id=\"" + diffId + "\"[^>]*)>([\\s\\S]*?)<\\/\\1>", 'i');
  var match = pattern.exec(html);
  if (match) {
    return {
      tagName: match[1].toLowerCase(),
      content: match[3],
      attrs: match[2]
    };
  }
  return null;
}

/**
 * 清理内容（移除标签）
 * @param {string} html - HTML 字符串
 * @returns {string}
 */
function cleanContent(html) {
  if (!html) return '';
  return html.replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&').trim();
}

/**
 * 提取属性值
 * @param {string} attrs - 属性字符串
 * @param {string} attrName - 属性名
 * @returns {string|null}
 */
function extractAttr(attrs, attrName) {
  if (!attrs) return null;
  var pattern = new RegExp(attrName + "=\"([^\"]*)\"", 'i');
  var match = pattern.exec(attrs);
  return match ? match[1] : null;
}

/**
 * 文本字段变更提取器
 */
var FIELD_LABELS$1 = DefaultConfig.fieldLabels;
var FIELD_STRATEGIES$1 = {
  shortText: ['title', 'subtitle', 'task', 'siteName', 'channelName'],
  mediumText: ['digest']
};

/**
 * 提取基础文本字段变更
 */
function extractTextMarkers(diffed, last, current, markers) {
  var allTextFields = [].concat(FIELD_STRATEGIES$1.shortText, FIELD_STRATEGIES$1.mediumText);
  allTextFields.forEach(function (field, index) {
    if (diffed[field] && hasDiffMarkers(diffed[field])) {
      var changeType = detectChangeType(diffed[field]);
      var _extractDiffContent = extractDiffContent(diffed[field]),
        oldValue = _extractDiffContent.oldValue,
        newValue = _extractDiffContent.newValue;
      markers.push({
        id: "diff-text-" + field,
        type: 'text',
        field: field,
        fieldLabel: FIELD_LABELS$1[field] || field,
        position: index + 1,
        changeType: changeType,
        oldValue: oldValue,
        newValue: newValue,
        targetSelector: "[data-diff-field=\"" + field + "\"]",
        range: getFirstDiffRange$1(diffed[field])
      });
    }
  });
}

/**
 * 从差异内容中提取旧值和新值
 */
function extractDiffContent(html) {
  var _extractDiffMarkers = extractDiffMarkers(html),
    insTags = _extractDiffMarkers.insTags,
    delTags = _extractDiffMarkers.delTags;
  var oldValue = '';
  var newValue = '';
  if (insTags.length > 0) {
    newValue = insTags.map(function (tag) {
      return tag.text;
    }).join(' ');
  }
  if (delTags.length > 0) {
    oldValue = delTags.map(function (tag) {
      return tag.text;
    }).join(' ');
  }
  return {
    oldValue: oldValue,
    newValue: newValue
  };
}

/**
 * 获取第一个差异范围
 */
function getFirstDiffRange$1(html) {
  if (!html || typeof html !== 'string') return null;
  var ranges = getDiffRanges(html);
  return ranges.length > 0 ? ranges[0].range : null;
}

/**
 * HTML 内容变更提取器
 */
var FIELD_LABELS = DefaultConfig.fieldLabels;
var FIELD_STRATEGIES = {
  longText: ['content']
};

/**
 * 提取 HTML 内容变更
 */
function extractHTMLMarkers(diffed, last, current, markers) {
  var htmlFields = FIELD_STRATEGIES.longText;
  htmlFields.forEach(function (field) {
    if (diffed[field] && hasDiffMarkers(diffed[field])) {
      var subMarkers = extractDiffMarkersFromHTML(diffed[field], field);
      subMarkers.forEach(function (m) {
        return markers.push(m);
      });
    }
  });
}

/**
 * 从差异 HTML 中提取细粒度的差异标记
 */
function extractDiffMarkersFromHTML(html, field) {
  if (!html || typeof html !== 'string') return [];
  var tags = collectDiffTags(html);
  if (tags.length === 0) return [];
  tags.sort(function (a, b) {
    return a.range[0] - b.range[0];
  });
  var groups = mergeTagsIntoGroups(tags, html);
  return groups.map(function (group, idx) {
    var targetSelector = group.diffIds && group.diffIds.length > 0 ? "[data-diff-id=\"" + group.diffIds[0] + "\"]" : "[data-diff-field=\"" + field + "\"]";
    return {
      id: "diff-html-" + field + "-" + idx,
      type: 'html',
      field: field,
      fieldLabel: FIELD_LABELS[field] || field,
      position: idx + 1,
      changeType: group.changeType,
      oldValue: group.oldValue ? group.oldValue.substring(0, 200) : '',
      newValue: group.newValue ? group.newValue.substring(0, 200) : '',
      targetSelector: targetSelector,
      range: group.range,
      diffIds: group.diffIds
    };
  });
}

/**
 * 收集 HTML 中所有差异标签
 */
function collectDiffTags(html) {
  var pattern = /<(ins|del|difftext)([^>]*)>([\s\S]*?)<\/\1>/gi;
  var tags = [];
  var match;
  while ((match = pattern.exec(html)) !== null) {
    var attrsStr = match[2];
    var idMatch = attrsStr.match(/data-diff-id="([^"]+)"/);
    var typeMatch = attrsStr.match(/data-diff="([^"]+)"/);
    var diffId = idMatch ? idMatch[1] : null;
    var diffType = typeMatch ? typeMatch[1] : null;
    tags.push({
      type: diffType || (match[1].toLowerCase() === 'ins' ? 'add' : 'del'),
      attrs: attrsStr,
      content: match[3],
      range: [match.index, match.index + match[0].length],
      diffId: diffId
    });
  }
  return tags;
}

/**
 * 合并相邻标签为组
 */
function mergeTagsIntoGroups(tags, html) {
  var groups = [];
  var i = 0;
  while (i < tags.length) {
    var current = tags[i];
    var group = {
      type: current.type,
      range: [].concat(current.range),
      oldValue: current.type === 'del' ? current.content : '',
      newValue: current.type === 'add' || current.type === 'ins' ? current.content : '',
      changeType: null,
      diffIds: current.diffId ? [current.diffId] : []
    };
    while (i + 1 < tags.length) {
      var next = tags[i + 1];
      var gap = html.substring(group.range[1], next.range[0]);
      if (!/^\s*$/.test(gap)) break;
      if (group.type === 'del' && (next.type === 'add' || next.type === 'ins')) {
        group.changeType = 'modify';
        group.newValue = next.content;
        group.range[1] = next.range[1];
        group.type = 'mod';
        if (next.diffId) group.diffIds.push(next.diffId);
        i++;
        break;
      }
      if (group.type === next.type) {
        if (next.type === 'del') {
          group.oldValue += next.content;
        } else {
          group.newValue += next.content;
        }
        group.range[1] = next.range[1];
        if (next.diffId) group.diffIds.push(next.diffId);
        i++;
        continue;
      }
      break;
    }
    if (!group.changeType) {
      group.changeType = group.type === 'del' ? 'del' : 'add';
    }
    groups.push(group);
    i++;
  }
  return groups;
}

/**
 * 媒体资源变更提取器
 */

/**
 * 提取媒体资源变更
 */
function extractMediaMarkers(diffed, last, markers) {
  if (!diffed.cmsFileList) return;
  var mediaList = Array.isArray(diffed.cmsFileList) ? diffed.cmsFileList : [];
  var oldMediaList = (last == null ? void 0 : last.cmsFileList) || [];
  mediaList.forEach(function (item, index) {
    if (item.diffType && item.diffType !== 'same') {
      var oldItem = oldMediaList.find(function (m) {
        return m.fileValue === item.fileValue;
      });
      var oldValue = '';
      var newValue = '';
      if (item.diffType === 'add') {
        newValue = item.title || item.describes || '';
      } else if (item.diffType === 'del') {
        oldValue = (oldItem == null ? void 0 : oldItem.title) || (oldItem == null ? void 0 : oldItem.describes) || '';
      } else {
        oldValue = (oldItem == null ? void 0 : oldItem.title) || (oldItem == null ? void 0 : oldItem.describes) || '';
        newValue = item.title || item.describes || '';
      }
      markers.push({
        id: "diff-media-" + index,
        type: 'media',
        field: 'cmsFileList',
        fieldLabel: '媒体资源',
        position: index + 1,
        changeType: item.diffType === 'add' ? 'add' : item.diffType === 'alter' ? 'modify' : 'del',
        mediaType: item.type || 'image',
        mediaIndex: index,
        targetSelector: "[data-media-index=\"" + index + "\"]",
        oldValue: oldValue,
        newValue: newValue,
        changes: extractMediaChanges(item, oldItem)
      });
    }
  });
}

/**
 * 提取媒体项的具体变更
 */
function extractMediaChanges(newItem, oldItem) {
  var changes = [];
  var compareFields = ['title', 'describes', 'coverAddress'];
  compareFields.forEach(function (field) {
    if (oldItem && newItem[field] !== oldItem[field]) {
      changes.push({
        field: field,
        oldValue: oldItem[field] || '',
        newValue: newItem[field] || ''
      });
    }
  });
  return changes;
}

/**
 * 自定义字段变更提取器
 */

/**
 * 提取自定义字段变更
 */
function extractCustomMarkers(diffed, last, current, markers) {
  if (!diffed.customFieldMap) return;
  Object.keys(diffed.customFieldMap).forEach(function (field, index) {
    if (hasDiffMarkers(diffed.customFieldMap[field])) {
      var _last$customFieldMap, _current$customFieldM;
      markers.push({
        id: "diff-custom-" + field,
        type: 'custom',
        field: field,
        fieldLabel: field,
        position: index + 1,
        changeType: detectChangeType(diffed.customFieldMap[field]),
        oldValue: last != null && (_last$customFieldMap = last.customFieldMap) != null && _last$customFieldMap[field] ? String(last.customFieldMap[field]) : '',
        newValue: current != null && (_current$customFieldM = current.customFieldMap) != null && _current$customFieldM[field] ? String(current.customFieldMap[field]) : '',
        targetSelector: "[data-custom-field=\"" + field + "\"]",
        range: getFirstDiffRange(diffed.customFieldMap[field])
      });
    }
  });
}

/**
 * 获取第一个差异范围
 */
function getFirstDiffRange(html) {
  if (!html || typeof html !== 'string') return null;
  var ranges = getDiffRanges(html);
  return ranges.length > 0 ? ranges[0].range : null;
}

/**
 * CSS 样式解析工具
 * 用于解析和对比内联样式
 */

/**
 * 解析样式字符串为键值对对象
 * @param {string} styleString - 样式字符串，如 'color: red; font-size: 14px'
 * @returns {Object} 键值对对象 { color: 'red', 'font-size': '14px' }
 */
function parseStyle(styleString) {
  if (!styleString || typeof styleString !== 'string') {
    return {};
  }
  var result = {};
  var declarations = styleString.split(';');
  for (var _iterator = _createForOfIteratorHelperLoose(declarations), _step; !(_step = _iterator()).done;) {
    var declaration = _step.value;
    var trimmed = declaration.trim();
    if (!trimmed) continue;

    // 处理带引号的值（可能包含分号）
    var colonIndex = trimmed.indexOf(':');
    if (colonIndex === -1) continue;
    var property = trimmed.substring(0, colonIndex).trim().toLowerCase();
    var value = trimmed.substring(colonIndex + 1).trim();
    if (property && value) {
      result[property] = value;
    }
  }
  return result;
}

/**
 * 对比两个样式对象，生成差异详情
 * @param {Object} oldStyle - 旧样式对象
 * @param {Object} newStyle - 新样式对象
 * @returns {Object} { added, removed, changed }
 */
function compareStyles(oldStyle, newStyle) {
  if (oldStyle === void 0) {
    oldStyle = {};
  }
  if (newStyle === void 0) {
    newStyle = {};
  }
  var added = [];
  var removed = [];
  var changed = [];
  var oldKeys = Object.keys(oldStyle);
  var newKeys = Object.keys(newStyle);

  // 检查新增和修改
  for (var _i = 0, _newKeys = newKeys; _i < _newKeys.length; _i++) {
    var key = _newKeys[_i];
    if (!(key in oldStyle)) {
      added.push({
        property: key,
        value: newStyle[key]
      });
    } else if (oldStyle[key] !== newStyle[key]) {
      changed.push({
        property: key,
        oldValue: oldStyle[key],
        newValue: newStyle[key]
      });
    }
  }

  // 检查删除
  for (var _i2 = 0, _oldKeys = oldKeys; _i2 < _oldKeys.length; _i2++) {
    var _key = _oldKeys[_i2];
    if (!(_key in newStyle)) {
      removed.push({
        property: _key,
        value: oldStyle[_key]
      });
    }
  }
  return {
    added: added,
    removed: removed,
    changed: changed
  };
}

/**
 * 判断是否有样式差异
 * @param {Object} diffResult - compareStyles 的返回值
 * @returns {boolean}
 */
function hasStyleDiff(diffResult) {
  return diffResult.added.length > 0 || diffResult.removed.length > 0 || diffResult.changed.length > 0;
}

/**
 * 从 HTML 字符串中提取带 style 属性的元素
 * @param {string} html - HTML 字符串
 * @returns {Array} 元素列表 [{ id, path, tagName, style, outerHTML, innerHTML }]
 */
function extractStyleElements(html) {
  if (!html || typeof html !== 'string') {
    return [];
  }
  var elements = [];
  var parser = new DOMParser();
  var doc = parser.parseFromString(html, 'text/html');
  var allElements = doc.querySelectorAll('[style]');
  allElements.forEach(function (element, index) {
    elements.push({
      id: element.id || null,
      path: getElementPath(element),
      tagName: element.tagName.toLowerCase(),
      style: element.getAttribute('style'),
      outerHTML: element.outerHTML,
      innerHTML: element.innerHTML
    });
  });
  return elements;
}

/**
 * 获取元素的 DOM 路径
 * @param {Element} element - DOM 元素
 * @returns {string} 路径字符串，如 'div > p:nth-child(2)'
 */
function getElementPath(element) {
  var path = [];
  var current = element;
  while (current && current.nodeType === Node.ELEMENT_NODE) {
    var selector = current.tagName.toLowerCase();
    if (current.id) {
      selector += "#" + current.id;
      path.unshift(selector);
      break;
    }
    var parent = current.parentElement;
    if (parent) {
      var siblings = Array.from(parent.children).filter(function (child) {
        return child.tagName === current.tagName;
      });
      if (siblings.length > 1) {
        var index = siblings.indexOf(current) + 1;
        selector += ":nth-child(" + index + ")";
      }
    }
    path.unshift(selector);
    current = parent;
  }
  return path.join(' > ');
}

/**
 * 匹配新旧元素对
 * @param {Array} oldElements - 旧元素列表
 * @param {Array} newElements - 新元素列表
 * @param {string} strategy - 匹配策略 'id' | 'path' | 'auto'
 * @returns {Array} 匹配结果 [{ oldElement, newElement }]
 */
function matchElements(oldElements, newElements, strategy) {
  if (strategy === void 0) {
    strategy = 'auto';
  }
  var matches = [];
  var matchedOld = new Set();
  var matchedNew = new Set();

  // 策略函数列表
  var strategies = strategy === 'auto' ? [matchById, matchByPath, matchBySimilarity] : strategy === 'id' ? [matchById] : strategy === 'path' ? [matchByPath] : [matchById, matchByPath];
  for (var _i = 0, _strategies = strategies; _i < _strategies.length; _i++) {
    var matchFn = _strategies[_i];
    for (var _iterator = _createForOfIteratorHelperLoose(oldElements), _step; !(_step = _iterator()).done;) {
      var oldEl = _step.value;
      if (matchedOld.has(oldEl)) continue;
      for (var _iterator2 = _createForOfIteratorHelperLoose(newElements), _step2; !(_step2 = _iterator2()).done;) {
        var newEl = _step2.value;
        if (matchedNew.has(newEl)) continue;
        if (matchFn(oldEl, newEl)) {
          matches.push({
            oldElement: oldEl,
            newElement: newEl
          });
          matchedOld.add(oldEl);
          matchedNew.add(newEl);
          break;
        }
      }
    }
  }
  return matches;
}

/**
 * 通过 ID 匹配
 */
function matchById(oldEl, newEl) {
  return oldEl.id && newEl.id && oldEl.id === newEl.id;
}

/**
 * 通过路径匹配
 */
function matchByPath(oldEl, newEl) {
  return oldEl.path === newEl.path;
}

/**
 * 通过内容相似度匹配（阈值 80%）
 */
function matchBySimilarity(oldEl, newEl) {
  if (oldEl.tagName !== newEl.tagName) return false;
  var oldText = oldEl.innerHTML.replace(/<[^>]+>/g, '').trim();
  var newText = newEl.innerHTML.replace(/<[^>]+>/g, '').trim();
  if (!oldText || !newText) return false;
  var similarity = calculateSimilarity(oldText, newText);
  return similarity >= 0.8;
}

/**
 * 计算字符串相似度（简单实现）
 */
function calculateSimilarity(str1, str2) {
  if (str1 === str2) return 1;
  var len1 = str1.length;
  var len2 = str2.length;
  var maxLen = Math.max(len1, len2);
  if (maxLen === 0) return 1;

  // 使用简单的编辑距离
  var distance = levenshteinDistance(str1, str2);
  return 1 - distance / maxLen;
}

/**
 * 计算编辑距离
 */
function levenshteinDistance(str1, str2) {
  var m = str1.length;
  var n = str2.length;
  var dp = Array(m + 1).fill(null).map(function () {
    return Array(n + 1).fill(0);
  });
  for (var i = 0; i <= m; i++) dp[i][0] = i;
  for (var j = 0; j <= n; j++) dp[0][j] = j;
  for (var _i2 = 1; _i2 <= m; _i2++) {
    for (var _j = 1; _j <= n; _j++) {
      if (str1[_i2 - 1] === str2[_j - 1]) {
        dp[_i2][_j] = dp[_i2 - 1][_j - 1];
      } else {
        dp[_i2][_j] = 1 + Math.min(dp[_i2 - 1][_j], dp[_i2][_j - 1], dp[_i2 - 1][_j - 1]);
      }
    }
  }
  return dp[m][n];
}

/**
 * 对比两个 HTML 的样式差异
 * @param {string} oldHtml - 旧 HTML
 * @param {string} newHtml - 新 HTML
 * @param {Object} options - 配置选项
 * @returns {Object} { hasStyleDiff, styleChanges }
 */
function diffStyle(oldHtml, newHtml, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options,
    _options$matchStrateg = _options.matchStrategy,
    matchStrategy = _options$matchStrateg === void 0 ? 'auto' : _options$matchStrateg;
  if (!oldHtml || !newHtml) {
    return {
      hasStyleDiff: false,
      styleChanges: []
    };
  }

  // 提取元素
  var oldElements = extractStyleElements(oldHtml);
  var newElements = extractStyleElements(newHtml);

  // 匹配元素
  var matches = matchElements(oldElements, newElements, matchStrategy);

  // 对比样式
  var styleChanges = [];
  for (var _iterator3 = _createForOfIteratorHelperLoose(matches), _step3; !(_step3 = _iterator3()).done;) {
    var _step3$value = _step3.value,
      oldElement = _step3$value.oldElement,
      newElement = _step3$value.newElement;
    var oldStyleObj = parseStyle(oldElement.style);
    var newStyleObj = parseStyle(newElement.style);
    var diffResult = compareStyles(oldStyleObj, newStyleObj);
    if (hasStyleDiff(diffResult)) {
      styleChanges.push({
        selector: newElement.id ? "#" + newElement.id : newElement.path,
        tagName: newElement.tagName,
        oldStyle: oldElement.style,
        newStyle: newElement.style,
        oldHtml: oldElement.outerHTML,
        newHtml: newElement.outerHTML,
        diffDetails: diffResult
      });
    }
  }
  return {
    hasStyleDiff: styleChanges.length > 0,
    styleChanges: styleChanges
  };
}

/**
 * 提取样式变更
 * @param {Object} diffed - 差异后的数据
 * @param {Object} last - 旧数据
 * @param {Object} current - 新数据
 * @param {Array} markers - 现有 marker 列表（会被修改）
 * @param {Object} options - 配置选项
 */
function extractStyleMarkers(diffed, last, current, markers, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options,
    _options$detectStyle = _options.detectStyle,
    detectStyle = _options$detectStyle === void 0 ? true : _options$detectStyle,
    _options$styleDiffCon = _options.styleDiffConfig,
    styleDiffConfig = _options$styleDiffCon === void 0 ? {} : _options$styleDiffCon;
  if (!detectStyle) return;

  // 收集已处理的字段
  var processedFields = new Set();

  // 1. 遍历现有 marker，检查是否有样式变更
  for (var _iterator = _createForOfIteratorHelperLoose(markers), _step; !(_step = _iterator()).done;) {
    var marker = _step.value;
    // 支持 field、html、text 类型的 marker
    if (marker.type !== 'field' && marker.type !== 'html' && marker.type !== 'text') continue;
    var field = marker.field;
    processedFields.add(field);
    var oldContent = last ? last[field] : '';
    var newContent = current ? current[field] : '';
    if (!oldContent || !newContent) continue;

    // 对比样式
    var styleResult = diffStyle(oldContent, newContent, styleDiffConfig);
    if (styleResult.hasStyleDiff) {
      // 将样式变更附加到现有 marker
      marker.styleChanges = {
        hasStyleDiff: true,
        elements: styleResult.styleChanges.map(function (change) {
          return {
            selector: change.selector,
            oldHtml: change.oldHtml,
            newHtml: change.newHtml
          };
        }),
        diffDetails: mergeDiffDetails(styleResult.styleChanges)
      };
    }
  }

  // 2. 检查未处理的字段（纯样式变更，没有内容变更）
  var allFields = new Set([].concat(Object.keys(diffed || {}), Object.keys(last || {}), Object.keys(current || {})));
  for (var _iterator2 = _createForOfIteratorHelperLoose(allFields), _step2; !(_step2 = _iterator2()).done;) {
    var _field = _step2.value;
    if (processedFields.has(_field)) continue;
    if (_field.startsWith('_')) continue;
    var _oldContent = last ? last[_field] : '';
    var _newContent = current ? current[_field] : '';
    if (!_oldContent || !_newContent) continue;
    if (typeof _oldContent !== 'string' || typeof _newContent !== 'string') continue;

    // 检查是否可能是 HTML 内容
    if (!looksLikeHtml(_oldContent) && !looksLikeHtml(_newContent)) continue;

    // 对比样式
    var _styleResult = diffStyle(_oldContent, _newContent, styleDiffConfig);
    if (_styleResult.hasStyleDiff) {
      // 创建独立的样式变更 marker
      markers.push({
        id: "diff-style-" + _field + "-0",
        type: 'style',
        field: _field,
        fieldLabel: _field,
        position: markers.length + 1,
        changeType: 'modify',
        oldValue: '',
        newValue: '',
        styleChanges: {
          hasStyleDiff: true,
          elements: _styleResult.styleChanges.map(function (change) {
            return {
              selector: change.selector,
              oldHtml: change.oldHtml,
              newHtml: change.newHtml
            };
          }),
          diffDetails: mergeDiffDetails(_styleResult.styleChanges)
        }
      });
    }
  }
}

/**
 * 检查字符串是否看起来像 HTML
 * @param {string} str - 字符串
 * @returns {boolean}
 */
function looksLikeHtml(str) {
  if (!str || typeof str !== 'string') return false;
  return /<[a-z][^>]*>/i.test(str);
}

/**
 * 合并多个元素的差异详情
 * @param {Array} styleChanges - 样式变更列表
 * @returns {Object} 合并后的差异详情
 */
function mergeDiffDetails(styleChanges) {
  var added = [];
  var removed = [];
  var changed = [];
  for (var _iterator3 = _createForOfIteratorHelperLoose(styleChanges), _step3; !(_step3 = _iterator3()).done;) {
    var change = _step3.value;
    var details = change.diffDetails;

    // 去重合并
    var _loop = function _loop() {
      var item = _step4.value;
      if (!added.find(function (a) {
        return a.property === item.property;
      })) {
        added.push(item);
      }
    };
    for (var _iterator4 = _createForOfIteratorHelperLoose(details.added), _step4; !(_step4 = _iterator4()).done;) {
      _loop();
    }
    var _loop2 = function _loop2() {
      var item = _step5.value;
      if (!removed.find(function (r) {
        return r.property === item.property;
      })) {
        removed.push(item);
      }
    };
    for (var _iterator5 = _createForOfIteratorHelperLoose(details.removed), _step5; !(_step5 = _iterator5()).done;) {
      _loop2();
    }
    var _loop3 = function _loop3() {
      var item = _step6.value;
      if (!changed.find(function (c) {
        return c.property === item.property;
      })) {
        changed.push(item);
      }
    };
    for (var _iterator6 = _createForOfIteratorHelperLoose(details.changed), _step6; !(_step6 = _iterator6()).done;) {
      _loop3();
    }
  }
  return {
    added: added,
    removed: removed,
    changed: changed
  };
}

/**
 * 标记生成器
 * 从差异结果中提取变更标记
 */
var GROUP_PRIORITY = DefaultConfig.groupPriority;

/**
 * 生成变更标记列表
 * @param {Object} diffResult - 差异结果 { diffed, last, current }
 * @param {Object} options - 配置选项
 * @returns {Marker[]}
 */
function generateMarkers(diffResult, options) {
  if (options === void 0) {
    options = {};
  }
  if (!diffResult || !diffResult.diffed) {
    return [];
  }
  var markers = [];
  var diffed = diffResult.diffed,
    last = diffResult.last,
    current = diffResult.current;

  // 1. 提取基础字段变更
  extractTextMarkers(diffed, last, current, markers);

  // 2. 提取 HTML 内容变更
  extractHTMLMarkers(diffed, last, current, markers);

  // 3. 提取媒体资源变更
  extractMediaMarkers(diffed, last, markers);

  // 4. 提取自定义字段变更
  extractCustomMarkers(diffed, last, current, markers);

  // 5. 提取样式变更（新增）
  extractStyleMarkers(diffed, last, current, markers, options);

  // 排序
  return sortMarkers(markers);
}

/**
 * 排序标记
 */
function sortMarkers(markers) {
  return markers.sort(function (a, b) {
    var priorityDiff = (GROUP_PRIORITY[a.type] || 99) - (GROUP_PRIORITY[b.type] || 99);
    if (priorityDiff !== 0) return priorityDiff;
    return (a.position || 99) - (b.position || 99);
  });
}

/*! LeaderLine v1.0.0-alpha.0 (c) Lionad-Morotar https://github.com/Lionad-Morotar/leader-line#readme */
//#region src/anim.js
var e = function () {
  var e = {
      ease: [.25, .1, .25, 1],
      linear: [0, 0, 1, 1],
      "ease-in": [.42, 0, 1, 1],
      "ease-out": [0, 0, .58, 1],
      "ease-in-out": [.42, 0, .58, 1]
    },
    t = 1e3 / 60 / 2,
    n = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function (e) {
      setTimeout(e, t);
    },
    r = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame || function (e) {
      clearTimeout(e);
    },
    i = Number.isFinite || function (e) {
      return typeof e == "number" && window.isFinite(e);
    },
    a = [],
    o = 0,
    s;
  function c() {
    var e = Date.now(),
      i = false;
    s && (r.call(window, s), s = null), a.forEach(function (n) {
      var r, a, o;
      if (n.framesStart) {
        if (r = e - n.framesStart, r >= n.duration && n.count && n.loopsLeft <= 1) {
          o = n.frames[n.lastFrame = n.reverse ? 0 : n.frames.length - 1], n.frameCallback(o.value, true, o.timeRatio, o.outputRatio), n.framesStart = null;
          return;
        }
        if (r > n.duration) {
          if (a = Math.floor(r / n.duration), n.count) {
            if (a >= n.loopsLeft) {
              o = n.frames[n.lastFrame = n.reverse ? 0 : n.frames.length - 1], n.frameCallback(o.value, true, o.timeRatio, o.outputRatio), n.framesStart = null;
              return;
            }
            n.loopsLeft -= a;
          }
          n.framesStart += n.duration * a, r = e - n.framesStart;
        }
        n.reverse && (r = n.duration - r), o = n.frames[n.lastFrame = Math.round(r / t)], n.frameCallback(o.value, false, o.timeRatio, o.outputRatio) === false ? n.framesStart = null : i = true;
      }
    }), i && (s = n.call(window, c));
  }
  function l(e, t) {
    e.framesStart = Date.now(), t != null && (e.framesStart -= e.duration * (e.reverse ? 1 - t : t)), e.loopsLeft = e.count, e.lastFrame = null, c();
  }
  return {
    add: function add(n, r, i, s, c, u, d) {
      var f = ++o,
        p,
        m,
        h,
        g,
        _,
        v,
        y;
      function b(e) {
        var t = e * e,
          n = t * e,
          r = 1 - e,
          i = r * r * 3 * e,
          a = 3 * r * t;
        return {
          x: i * c[0] + a * c[2] + n,
          y: i * c[1] + a * c[3] + n
        };
      }
      function x(e, t) {
        return {
          value: n(t),
          timeRatio: e,
          outputRatio: t
        };
      }
      if (typeof c == "string" && (c = e[c]), n = n || function () {}, i < t) m = [x(0, 0), x(1, 1)];else {
        if (h = t / i, m = [x(0, 0)], c[0] === 0 && c[1] === 0 && c[2] === 1 && c[3] === 1) for (_ = h; _ <= 1; _ += h) m.push(x(_, _));else for (g = h / 10, _ = h, v = g; v <= 1; v += g) y = b(v), y.x >= _ && (m.push(x(y.x, y.y)), _ += h);
        m.push(x(1, 1));
      }
      return p = {
        animId: f,
        frameCallback: r,
        duration: i,
        count: s,
        frames: m,
        reverse: !!u
      }, a.push(p), d !== false && l(p, d), f;
    },
    remove: function remove(e) {
      var t;
      a.some(function (n, r) {
        return n.animId === e ? (t = r, n.framesStart = null, true) : false;
      }) && a.splice(t, 1);
    },
    start: function start(e, t, n) {
      a.some(function (r) {
        return r.animId === e ? (r.reverse = !!t, l(r, n), true) : false;
      });
    },
    stop: function stop(e, t) {
      var n;
      return a.some(function (r) {
        return r.animId === e ? (t ? r.lastFrame != null && (n = r.frames[r.lastFrame].timeRatio) : (n = (Date.now() - r.framesStart) / r.duration, r.reverse && (n = 1 - n), n < 0 ? n = 0 : n > 1 && (n = 1)), r.framesStart = null, true) : false;
      }), n;
    },
    validTiming: function validTiming(t) {
      return typeof t == "string" ? e[t] : Array.isArray(t) && [0, 1, 2, 3].every(function (e) {
        return i(t[e]) && t[e] >= 0 && t[e] <= 1;
      }) ? [t[0], t[1], t[2], t[3]] : null;
    }
  };
}();
//#endregion
//#region src/path-data-polyfill/path-data-polyfill.js
function t(e) {
  (!e.SVGPathElement.prototype.getPathData || !e.SVGPathElement.prototype.setPathData) && function () {
    var t = {
        Z: "Z",
        M: "M",
        L: "L",
        C: "C",
        Q: "Q",
        A: "A",
        H: "H",
        V: "V",
        S: "S",
        T: "T",
        z: "Z",
        m: "m",
        l: "l",
        c: "c",
        q: "q",
        a: "a",
        h: "h",
        v: "v",
        s: "s",
        t: "t"
      },
      n = function n(e) {
        this._string = e, this._currentIndex = 0, this._endIndex = this._string.length, this._prevCommand = null, this._skipOptionalSpaces();
      },
      r = e.navigator.userAgent.indexOf("MSIE ") !== -1;
    n.prototype = {
      parseSegment: function parseSegment() {
        var e = this._string[this._currentIndex],
          n = t[e] ? t[e] : null;
        if (n === null) {
          if (this._prevCommand === null || (n = (e === "+" || e === "-" || e === "." || e >= "0" && e <= "9") && this._prevCommand !== "Z" ? this._prevCommand === "M" ? "L" : this._prevCommand === "m" ? "l" : this._prevCommand : null, n === null)) return null;
        } else this._currentIndex += 1;
        this._prevCommand = n;
        var r = null,
          i = n.toUpperCase();
        return i === "H" || i === "V" ? r = [this._parseNumber()] : i === "M" || i === "L" || i === "T" ? r = [this._parseNumber(), this._parseNumber()] : i === "S" || i === "Q" ? r = [this._parseNumber(), this._parseNumber(), this._parseNumber(), this._parseNumber()] : i === "C" ? r = [this._parseNumber(), this._parseNumber(), this._parseNumber(), this._parseNumber(), this._parseNumber(), this._parseNumber()] : i === "A" ? r = [this._parseNumber(), this._parseNumber(), this._parseNumber(), this._parseArcFlag(), this._parseArcFlag(), this._parseNumber(), this._parseNumber()] : i === "Z" && (this._skipOptionalSpaces(), r = []), r === null || r.indexOf(null) >= 0 ? null : {
          type: n,
          values: r
        };
      },
      hasMoreData: function hasMoreData() {
        return this._currentIndex < this._endIndex;
      },
      peekSegmentType: function peekSegmentType() {
        var e = this._string[this._currentIndex];
        return t[e] ? t[e] : null;
      },
      initialCommandIsMoveTo: function initialCommandIsMoveTo() {
        if (!this.hasMoreData()) return true;
        var e = this.peekSegmentType();
        return e === "M" || e === "m";
      },
      _isCurrentSpace: function _isCurrentSpace() {
        var e = this._string[this._currentIndex];
        return e <= " " && (e === " " || e === "\n" || e === "	" || e === "\r" || e === "\f");
      },
      _skipOptionalSpaces: function _skipOptionalSpaces() {
        for (; this._currentIndex < this._endIndex && this._isCurrentSpace();) this._currentIndex += 1;
        return this._currentIndex < this._endIndex;
      },
      _skipOptionalSpacesOrDelimiter: function _skipOptionalSpacesOrDelimiter() {
        return this._currentIndex < this._endIndex && !this._isCurrentSpace() && this._string[this._currentIndex] !== "," ? false : (this._skipOptionalSpaces() && this._currentIndex < this._endIndex && this._string[this._currentIndex] === "," && (this._currentIndex += 1, this._skipOptionalSpaces()), this._currentIndex < this._endIndex);
      },
      _parseNumber: function _parseNumber() {
        var e = 0,
          t = 0,
          n = 1,
          r = 0,
          i = 1,
          a = 1,
          o = this._currentIndex;
        if (this._skipOptionalSpaces(), this._currentIndex < this._endIndex && this._string[this._currentIndex] === "+" ? this._currentIndex += 1 : this._currentIndex < this._endIndex && this._string[this._currentIndex] === "-" && (this._currentIndex += 1, i = -1), this._currentIndex === this._endIndex || (this._string[this._currentIndex] < "0" || this._string[this._currentIndex] > "9") && this._string[this._currentIndex] !== ".") return null;
        for (var s = this._currentIndex; this._currentIndex < this._endIndex && this._string[this._currentIndex] >= "0" && this._string[this._currentIndex] <= "9";) this._currentIndex += 1;
        if (this._currentIndex !== s) for (var c = this._currentIndex - 1, l = 1; c >= s;) t += l * (this._string[c] - "0"), --c, l *= 10;
        if (this._currentIndex < this._endIndex && this._string[this._currentIndex] === ".") {
          if (this._currentIndex += 1, this._currentIndex >= this._endIndex || this._string[this._currentIndex] < "0" || this._string[this._currentIndex] > "9") return null;
          for (; this._currentIndex < this._endIndex && this._string[this._currentIndex] >= "0" && this._string[this._currentIndex] <= "9";) n *= 10, r += (this._string.charAt(this._currentIndex) - "0") / n, this._currentIndex += 1;
        }
        if (this._currentIndex !== o && this._currentIndex + 1 < this._endIndex && (this._string[this._currentIndex] === "e" || this._string[this._currentIndex] === "E") && this._string[this._currentIndex + 1] !== "x" && this._string[this._currentIndex + 1] !== "m") {
          if (this._currentIndex += 1, this._string[this._currentIndex] === "+" ? this._currentIndex += 1 : this._string[this._currentIndex] === "-" && (this._currentIndex += 1, a = -1), this._currentIndex >= this._endIndex || this._string[this._currentIndex] < "0" || this._string[this._currentIndex] > "9") return null;
          for (; this._currentIndex < this._endIndex && this._string[this._currentIndex] >= "0" && this._string[this._currentIndex] <= "9";) e *= 10, e += this._string[this._currentIndex] - "0", this._currentIndex += 1;
        }
        var u = t + r;
        return u *= i, e && (u *= Math.pow(10, a * e)), o === this._currentIndex ? null : (this._skipOptionalSpacesOrDelimiter(), u);
      },
      _parseArcFlag: function _parseArcFlag() {
        if (this._currentIndex >= this._endIndex) return null;
        var e = null,
          t = this._string[this._currentIndex];
        if (this._currentIndex += 1, t === "0") e = 0;else if (t === "1") e = 1;else return null;
        return this._skipOptionalSpacesOrDelimiter(), e;
      }
    };
    var i = function i(e) {
        if (!e || e.length === 0) return [];
        var t = new n(e),
          r = [];
        if (t.initialCommandIsMoveTo()) for (; t.hasMoreData();) {
          var i = t.parseSegment();
          if (i === null) break;
          r.push(i);
        }
        return r;
      },
      a = e.SVGPathElement.prototype.setAttribute,
      o = e.SVGPathElement.prototype.removeAttribute,
      s = e.Symbol ? e.Symbol() : "__cachedPathData",
      c = e.Symbol ? e.Symbol() : "__cachedNormalizedPathData",
      _l = function l(e, t, n, r, i, a, o, s, c, u) {
        var d = function d(e) {
            return Math.PI * e / 180;
          },
          f = function f(e, t, n) {
            return {
              x: e * Math.cos(n) - t * Math.sin(n),
              y: e * Math.sin(n) + t * Math.cos(n)
            };
          },
          p = d(o),
          m = [],
          h,
          g,
          _,
          v;
        if (u) h = u[0], g = u[1], _ = u[2], v = u[3];else {
          var y = f(e, t, -p);
          e = y.x, t = y.y;
          var b = f(n, r, -p);
          n = b.x, r = b.y;
          var x = (e - n) / 2,
            S = (t - r) / 2,
            C = x * x / (i * i) + S * S / (a * a);
          C > 1 && (C = Math.sqrt(C), i = C * i, a = C * a);
          var w = s === c ? -1 : 1,
            ee = i * i,
            te = a * a,
            ne = ee * te - ee * S * S - te * x * x,
            re = ee * S * S + te * x * x,
            ie = w * Math.sqrt(Math.abs(ne / re));
          _ = ie * i * S / a + (e + n) / 2, v = ie * -a * x / i + (t + r) / 2, h = Math.asin(parseFloat(((t - v) / a).toFixed(9))), g = Math.asin(parseFloat(((r - v) / a).toFixed(9))), e < _ && (h = Math.PI - h), n < _ && (g = Math.PI - g), h < 0 && (h = Math.PI * 2 + h), g < 0 && (g = Math.PI * 2 + g), c && h > g && (h -= Math.PI * 2), !c && g > h && (g -= Math.PI * 2);
        }
        var ae = g - h;
        if (Math.abs(ae) > Math.PI * 120 / 180) {
          var oe = g,
            T = n,
            E = r;
          g = c && g > h ? h + Math.PI * 120 / 180 * 1 : h + Math.PI * 120 / 180 * -1, n = _ + i * Math.cos(g), r = v + a * Math.sin(g), m = _l(n, r, T, E, i, a, o, 0, c, [g, oe, _, v]);
        }
        ae = g - h;
        var se = Math.cos(h),
          ce = Math.sin(h),
          le = Math.cos(g),
          D = Math.sin(g),
          O = Math.tan(ae / 4),
          k = 4 / 3 * i * O,
          A = 4 / 3 * a * O,
          j = [e, t],
          M = [e + k * ce, t - A * se],
          ue = [n + k * D, r - A * le],
          N = [n, r];
        if (M[0] = 2 * j[0] - M[0], M[1] = 2 * j[1] - M[1], u) return [M, ue, N].concat(m);
        m = [M, ue, N].concat(m).join().split(",");
        var P = [],
          F = [];
        return m.forEach(function (e, t) {
          t % 2 ? F.push(f(m[t - 1], m[t], p).y) : F.push(f(m[t], m[t + 1], p).x), F.length === 6 && (P.push(F), F = []);
        }), P;
      },
      u = function u(e) {
        return e.map(function (e) {
          return {
            type: e.type,
            values: Array.prototype.slice.call(e.values)
          };
        });
      },
      d = function d(e) {
        var t = [],
          n = null,
          r = null,
          i = null,
          a = null;
        return e.forEach(function (e) {
          var o = e.type;
          if (o === "M") {
            var s = e.values[0],
              c = e.values[1];
            t.push({
              type: "M",
              values: [s, c]
            }), i = s, a = c, n = s, r = c;
          } else if (o === "m") {
            var s = n + e.values[0],
              c = r + e.values[1];
            t.push({
              type: "M",
              values: [s, c]
            }), i = s, a = c, n = s, r = c;
          } else if (o === "L") {
            var s = e.values[0],
              c = e.values[1];
            t.push({
              type: "L",
              values: [s, c]
            }), n = s, r = c;
          } else if (o === "l") {
            var s = n + e.values[0],
              c = r + e.values[1];
            t.push({
              type: "L",
              values: [s, c]
            }), n = s, r = c;
          } else if (o === "C") {
            var l = e.values[0],
              u = e.values[1],
              d = e.values[2],
              f = e.values[3],
              s = e.values[4],
              c = e.values[5];
            t.push({
              type: "C",
              values: [l, u, d, f, s, c]
            }), n = s, r = c;
          } else if (o === "c") {
            var l = n + e.values[0],
              u = r + e.values[1],
              d = n + e.values[2],
              f = r + e.values[3],
              s = n + e.values[4],
              c = r + e.values[5];
            t.push({
              type: "C",
              values: [l, u, d, f, s, c]
            }), n = s, r = c;
          } else if (o === "Q") {
            var l = e.values[0],
              u = e.values[1],
              s = e.values[2],
              c = e.values[3];
            t.push({
              type: "Q",
              values: [l, u, s, c]
            }), n = s, r = c;
          } else if (o === "q") {
            var l = n + e.values[0],
              u = r + e.values[1],
              s = n + e.values[2],
              c = r + e.values[3];
            t.push({
              type: "Q",
              values: [l, u, s, c]
            }), n = s, r = c;
          } else if (o === "A") {
            var s = e.values[5],
              c = e.values[6];
            t.push({
              type: "A",
              values: [e.values[0], e.values[1], e.values[2], e.values[3], e.values[4], s, c]
            }), n = s, r = c;
          } else if (o === "a") {
            var s = n + e.values[5],
              c = r + e.values[6];
            t.push({
              type: "A",
              values: [e.values[0], e.values[1], e.values[2], e.values[3], e.values[4], s, c]
            }), n = s, r = c;
          } else if (o === "H") {
            var s = e.values[0];
            t.push({
              type: "H",
              values: [s]
            }), n = s;
          } else if (o === "h") {
            var s = n + e.values[0];
            t.push({
              type: "H",
              values: [s]
            }), n = s;
          } else if (o === "V") {
            var c = e.values[0];
            t.push({
              type: "V",
              values: [c]
            }), r = c;
          } else if (o === "v") {
            var c = r + e.values[0];
            t.push({
              type: "V",
              values: [c]
            }), r = c;
          } else if (o === "S") {
            var d = e.values[0],
              f = e.values[1],
              s = e.values[2],
              c = e.values[3];
            t.push({
              type: "S",
              values: [d, f, s, c]
            }), n = s, r = c;
          } else if (o === "s") {
            var d = n + e.values[0],
              f = r + e.values[1],
              s = n + e.values[2],
              c = r + e.values[3];
            t.push({
              type: "S",
              values: [d, f, s, c]
            }), n = s, r = c;
          } else if (o === "T") {
            var s = e.values[0],
              c = e.values[1];
            t.push({
              type: "T",
              values: [s, c]
            }), n = s, r = c;
          } else if (o === "t") {
            var s = n + e.values[0],
              c = r + e.values[1];
            t.push({
              type: "T",
              values: [s, c]
            }), n = s, r = c;
          } else (o === "Z" || o === "z") && (t.push({
            type: "Z",
            values: []
          }), n = i, r = a);
        }), t;
      },
      f = function f(e) {
        var t = [],
          n = null,
          r = null,
          i = null,
          a = null,
          o = null,
          s = null,
          c = null;
        return e.forEach(function (e) {
          if (e.type === "M") {
            var u = e.values[0],
              d = e.values[1];
            t.push({
              type: "M",
              values: [u, d]
            }), s = u, c = d, a = u, o = d;
          } else if (e.type === "C") {
            var f = e.values[0],
              p = e.values[1],
              m = e.values[2],
              h = e.values[3],
              u = e.values[4],
              d = e.values[5];
            t.push({
              type: "C",
              values: [f, p, m, h, u, d]
            }), r = m, i = h, a = u, o = d;
          } else if (e.type === "L") {
            var u = e.values[0],
              d = e.values[1];
            t.push({
              type: "L",
              values: [u, d]
            }), a = u, o = d;
          } else if (e.type === "H") {
            var u = e.values[0];
            t.push({
              type: "L",
              values: [u, o]
            }), a = u;
          } else if (e.type === "V") {
            var d = e.values[0];
            t.push({
              type: "L",
              values: [a, d]
            }), o = d;
          } else if (e.type === "S") {
            var m = e.values[0],
              h = e.values[1],
              u = e.values[2],
              d = e.values[3],
              g,
              _;
            n === "C" || n === "S" ? (g = a + (a - r), _ = o + (o - i)) : (g = a, _ = o), t.push({
              type: "C",
              values: [g, _, m, h, u, d]
            }), r = m, i = h, a = u, o = d;
          } else if (e.type === "T") {
            var u = e.values[0],
              d = e.values[1],
              f,
              p;
            n === "Q" || n === "T" ? (f = a + (a - r), p = o + (o - i)) : (f = a, p = o);
            var g = a + 2 * (f - a) / 3,
              _ = o + 2 * (p - o) / 3,
              v = u + 2 * (f - u) / 3,
              y = d + 2 * (p - d) / 3;
            t.push({
              type: "C",
              values: [g, _, v, y, u, d]
            }), r = f, i = p, a = u, o = d;
          } else if (e.type === "Q") {
            var f = e.values[0],
              p = e.values[1],
              u = e.values[2],
              d = e.values[3],
              g = a + 2 * (f - a) / 3,
              _ = o + 2 * (p - o) / 3,
              v = u + 2 * (f - u) / 3,
              y = d + 2 * (p - d) / 3;
            t.push({
              type: "C",
              values: [g, _, v, y, u, d]
            }), r = f, i = p, a = u, o = d;
          } else if (e.type === "A") {
            var b = e.values[0],
              x = e.values[1],
              S = e.values[2],
              C = e.values[3],
              w = e.values[4],
              u = e.values[5],
              d = e.values[6];
            b === 0 || x === 0 ? (t.push({
              type: "C",
              values: [a, o, u, d, u, d]
            }), a = u, o = d) : (a !== u || o !== d) && _l(a, o, u, d, b, x, S, C, w).forEach(function (e) {
              t.push({
                type: "C",
                values: e
              }), a = u, o = d;
            });
          } else e.type === "Z" && (t.push(e), a = s, o = c);
          n = e.type;
        }), t;
      };
    e.SVGPathElement.prototype.setAttribute = function (e, t) {
      e === "d" && (this[s] = null, this[c] = null), a.call(this, e, t);
    }, e.SVGPathElement.prototype.removeAttribute = function (e, t) {
      e === "d" && (this[s] = null, this[c] = null), o.call(this, e);
    }, e.SVGPathElement.prototype.getPathData = function (e) {
      if (e && e.normalize) {
        if (this[c]) return u(this[c]);
        var t;
        this[s] ? t = u(this[s]) : (t = i(this.getAttribute("d") || ""), this[s] = u(t));
        var n = f(d(t));
        return this[c] = u(n), n;
      } else if (this[s]) return u(this[s]);else {
        var t = i(this.getAttribute("d") || "");
        return this[s] = u(t), t;
      }
    }, e.SVGPathElement.prototype.setPathData = function (e) {
      if (e.length === 0) r ? this.setAttribute("d", "") : this.removeAttribute("d");else {
        for (var t = "", n = 0, i = e.length; n < i; n += 1) {
          var a = e[n];
          n > 0 && (t += " "), t += a.type, a.values && a.values.length > 0 && (t += " " + a.values.join(" "));
        }
        this.setAttribute("d", t);
      }
    }, e.SVGRectElement.prototype.getPathData = function (e) {
      var t = this.x.baseVal.value,
        n = this.y.baseVal.value,
        r = this.width.baseVal.value,
        i = this.height.baseVal.value,
        a = this.hasAttribute("rx") ? this.rx.baseVal.value : this.ry.baseVal.value,
        o = this.hasAttribute("ry") ? this.ry.baseVal.value : this.rx.baseVal.value;
      a > r / 2 && (a = r / 2), o > i / 2 && (o = i / 2);
      var s = [{
        type: "M",
        values: [t + a, n]
      }, {
        type: "H",
        values: [t + r - a]
      }, {
        type: "A",
        values: [a, o, 0, 0, 1, t + r, n + o]
      }, {
        type: "V",
        values: [n + i - o]
      }, {
        type: "A",
        values: [a, o, 0, 0, 1, t + r - a, n + i]
      }, {
        type: "H",
        values: [t + a]
      }, {
        type: "A",
        values: [a, o, 0, 0, 1, t, n + i - o]
      }, {
        type: "V",
        values: [n + o]
      }, {
        type: "A",
        values: [a, o, 0, 0, 1, t + a, n]
      }, {
        type: "Z",
        values: []
      }];
      return s = s.filter(function (e) {
        return !(e.type === "A" && (e.values[0] === 0 || e.values[1] === 0));
      }), e && e.normalize === true && (s = f(s)), s;
    }, e.SVGCircleElement.prototype.getPathData = function (e) {
      var t = this.cx.baseVal.value,
        n = this.cy.baseVal.value,
        r = this.r.baseVal.value,
        i = [{
          type: "M",
          values: [t + r, n]
        }, {
          type: "A",
          values: [r, r, 0, 0, 1, t, n + r]
        }, {
          type: "A",
          values: [r, r, 0, 0, 1, t - r, n]
        }, {
          type: "A",
          values: [r, r, 0, 0, 1, t, n - r]
        }, {
          type: "A",
          values: [r, r, 0, 0, 1, t + r, n]
        }, {
          type: "Z",
          values: []
        }];
      return e && e.normalize === true && (i = f(i)), i;
    }, e.SVGEllipseElement.prototype.getPathData = function (e) {
      var t = this.cx.baseVal.value,
        n = this.cy.baseVal.value,
        r = this.rx.baseVal.value,
        i = this.ry.baseVal.value,
        a = [{
          type: "M",
          values: [t + r, n]
        }, {
          type: "A",
          values: [r, i, 0, 0, 1, t, n + i]
        }, {
          type: "A",
          values: [r, i, 0, 0, 1, t - r, n]
        }, {
          type: "A",
          values: [r, i, 0, 0, 1, t, n - i]
        }, {
          type: "A",
          values: [r, i, 0, 0, 1, t + r, n]
        }, {
          type: "Z",
          values: []
        }];
      return e && e.normalize === true && (a = f(a)), a;
    }, e.SVGLineElement.prototype.getPathData = function () {
      return [{
        type: "M",
        values: [this.x1.baseVal.value, this.y1.baseVal.value]
      }, {
        type: "L",
        values: [this.x2.baseVal.value, this.y2.baseVal.value]
      }];
    }, e.SVGPolylineElement.prototype.getPathData = function () {
      for (var e = [], t = 0; t < this.points.numberOfItems; t += 1) {
        var n = this.points.getItem(t);
        e.push({
          type: t === 0 ? "M" : "L",
          values: [n.x, n.y]
        });
      }
      return e;
    }, e.SVGPolygonElement.prototype.getPathData = function () {
      for (var e = [], t = 0; t < this.points.numberOfItems; t += 1) {
        var n = this.points.getItem(t);
        e.push({
          type: t === 0 ? "M" : "L",
          values: [n.x, n.y]
        });
      }
      return e.push({
        type: "Z",
        values: []
      }), e;
    };
  }();
}
//#endregion
//#region src/anim-event/anim-event.js
var n = function (e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var i = t[r] = {
      i: r,
      l: false,
      exports: {}
    };
    return e[r].call(i.exports, i, i.exports, n), i.l = true, i.exports;
  }
  return n.m = e, n.c = t, n.d = function (e, t, r) {
    n.o(e, t) || Object.defineProperty(e, t, {
      enumerable: true,
      get: r
    });
  }, n.r = function (e) {
    typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: true
    });
  }, n.t = function (e, t) {
    if (1 & t && (e = n(e)), 8 & t || 4 & t && typeof e == "object" && e && e.__esModule) return e;
    var r = Object.create(null);
    if (n.r(r), Object.defineProperty(r, "default", {
      enumerable: true,
      value: e
    }), 2 & t && typeof e != "string") for (var i in e) n.d(r, i, function (t) {
      return e[t];
    }.bind(null, i));
    return r;
  }, n.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };
    return n.d(t, "a", t), t;
  }, n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, n.p = "", n(n.s = 0);
}([function (e, t, n) {
  n.r(t);
  var r,
    i = [],
    a = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function (e) {
      return setTimeout(e, 1e3 / 60);
    },
    o = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame || function (e) {
      return clearTimeout(e);
    },
    s = Date.now();
  function c() {
    var e, t;
    r && (o.call(window, r), r = null), i.forEach(function (t) {
      var n;
      (n = t.event) && (t.event = null, t.listener(n), e = true);
    }), e ? (s = Date.now(), t = true) : Date.now() - s < 500 && (t = true), t && (r = a.call(window, c));
  }
  function l(e) {
    var t = -1;
    return i.some(function (n, r) {
      return n.listener === e && (t = r, true);
    }), t;
  }
  t.default = {
    add: function add(e) {
      var t;
      return l(e) === -1 ? (i.push(t = {
        listener: e
      }), function (e) {
        t.event = e, r || c();
      }) : null;
    },
    remove: function remove(e) {
      var t;
      (t = l(e)) > -1 && (i.splice(t, 1), !i.length && r && (o.call(window, r), r = null));
    }
  };
}]).default;
//#endregion
//#region src/update-scheduler.js
function r(e) {
  var t = /* @__PURE__ */new Set(),
    n = false,
    r = {
      lastFlushMs: 0,
      flushCount: 0
    };
  function i(t, n, r) {
    e.onError ? e.onError(t, n, r) : console.error("[leader-line] scheduled " + r + " failed:", t);
  }
  function a() {
    n = false;
    var a = typeof performance < "u" ? performance.now() : 0,
      o = [];
    t.forEach(function (e) {
      t.delete(e), o.push(e);
    });
    var s = /* @__PURE__ */new Set();
    o.forEach(function (t) {
      try {
        e.measure(t);
      } catch (e) {
        s.add(t), i(e, t, "measure");
      }
    }), o.forEach(function (t) {
      if (!s.has(t)) try {
        e.apply(t);
      } catch (e) {
        i(e, t, "apply");
      }
    }), a && (r.lastFlushMs = performance.now() - a, r.flushCount++);
  }
  return {
    schedule: function schedule(r) {
      t.add(r), n || (n = true, e.raf(a));
    },
    unschedule: function unschedule(e) {
      t.delete(e);
    },
    get size() {
      return t.size;
    },
    stats: r
  };
}
//#endregion
//#region \0virtual:leader-line-defs
var i = "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" id=\"leader-line-defs\"><style><![CDATA[.leader-line{position:absolute;overflow:visible!important;pointer-events:none!important;font-size:16px}#leader-line-defs{width:0;height:0;position:absolute;left:0;top:0}.leader-line-line-path{fill:none}.leader-line-mask-bg-rect{fill:white}.leader-line-caps-mask-anchor,.leader-line-caps-mask-marker-shape{fill:black}.leader-line-caps-mask-anchor{stroke:black}.leader-line-caps-mask-line,.leader-line-plugs-face{stroke:rgba(0,0,0,0)}.leader-line-line-mask-shape{stroke:white}.leader-line-line-outline-mask-shape{stroke:black}.leader-line-plug-mask-shape{fill:white;stroke:black}.leader-line-plug-outline-mask-shape{fill:black;stroke:white}.leader-line-areaAnchor{position:absolute;overflow:visible!important}]]></style><defs><circle id=\"leader-line-disc\" cx=\"0\" cy=\"0\" r=\"5\"/><rect id=\"leader-line-square\" x=\"-5\" y=\"-5\" width=\"10\" height=\"10\"/><polygon id=\"leader-line-arrow1\" points=\"-8,-8 8,0 -8,8 -5,0\"/><polygon id=\"leader-line-arrow2\" points=\"-4,-8 4,0 -4,8 -7,5 -2,0 -7,-5\"/><polygon id=\"leader-line-arrow3\" points=\"-4,-5 8,0 -4,5\"/><g id=\"leader-line-hand\"><path style=\"fill: #fcfcfc\" d=\"M9.19 11.14h4.75c1.38 0 2.49-1.11 2.49-2.49 0-.51-.15-.98-.41-1.37h1.3c1.38 0 2.49-1.11 2.49-2.49s-1.11-2.53-2.49-2.53h1.02c1.38 0 2.49-1.11 2.49-2.49s-1.11-2.49-2.49-2.49h14.96c1.37 0 2.49-1.11 2.49-2.49s-1.11-2.49-2.49-2.49H16.58C16-9.86 14.28-11.14 9.7-11.14c-4.79 0-6.55 3.42-7.87 4.73H-2.14v13.23h3.68C3.29 9.97 5.47 11.14 9.19 11.14L9.19 11.14Z\"/><path style=\"fill: black\" d=\"M13.95 12c1.85 0 3.35-1.5 3.35-3.35 0-.17-.02-.34-.04-.51h.07c1.85 0 3.35-1.5 3.35-3.35 0-.79-.27-1.51-.72-2.08 1.03-.57 1.74-1.67 1.74-2.93 0-.59-.16-1.15-.43-1.63h12.04c1.85 0 3.35-1.5 3.35-3.35 0-1.85-1.5-3.35-3.35-3.35H17.2C16.26-10.93 13.91-12 9.7-12 5.36-12 3.22-9.4 1.94-7.84c0 0-.29.33-.5.57-.63 0-3.58 0-3.58 0C-2.61-7.27-3-6.88-3-6.41v13.23c0 .47.39.86.86.86 0 0 2.48 0 3.2 0C2.9 10.73 5.29 12 9.19 12L13.95 12ZM9.19 10.28c-3.46 0-5.33-1.05-6.9-3.87-.15-.27-.44-.44-.75-.44 0 0-1.81 0-2.82 0V-5.55c1.06 0 3.11 0 3.11 0 .25 0 .44-.06.61-.25l.83-.95c1.23-1.49 2.91-3.53 6.43-3.53 3.45 0 4.9.74 5.57 1.72h-4.3c-.48 0-.86.38-.86.86s.39.86.86.86h22.34c.9 0 1.63.73 1.63 1.63 0 .9-.73 1.63-1.63 1.63H15.83c-.48 0-.86.38-.86.86 0 .47.39.86.86.86h2.52c.9 0 1.63.73 1.63 1.63s-.73 1.63-1.63 1.63h-3.12c-.48 0-.86.38-.86.86 0 .47.39.86.86.86h2.11c.88 0 1.63.76 1.63 1.67 0 .9-.73 1.63-1.63 1.63h-3.2c-.48 0-.86.39-.86.86 0 .47.39.86.86.86h1.36c.05.16.09.34.09.51 0 .9-.73 1.63-1.63 1.63C13.95 10.28 9.19 10.28 9.19 10.28Z\"/></g><g id=\"leader-line-crosshair\"><path d=\"M0-78.97c-43.54 0-78.97 35.43-78.97 78.97 0 43.54 35.43 78.97 78.97 78.97s78.97-35.43 78.97-78.97C78.97-43.54 43.55-78.97 0-78.97ZM76.51-1.21h-9.91v-9.11h-2.43v9.11h-11.45c-.64-28.12-23.38-50.86-51.5-51.5V-64.17h9.11V-66.6h-9.11v-9.91C42.46-75.86 75.86-42.45 76.51-1.21ZM-1.21-30.76h-9.11v2.43h9.11V-4.2c-1.44.42-2.57 1.54-2.98 2.98H-28.33v-9.11h-2.43v9.11H-50.29C-49.65-28-27.99-49.65-1.21-50.29V-30.76ZM-30.76 1.21v9.11h2.43v-9.11H-4.2c.42 1.44 1.54 2.57 2.98 2.98v24.13h-9.11v2.43h9.11v19.53C-27.99 49.65-49.65 28-50.29 1.21H-30.76ZM1.22 30.75h9.11v-2.43h-9.11V4.2c1.44-.42 2.56-1.54 2.98-2.98h24.13v9.11h2.43v-9.11h19.53C49.65 28 28 49.65 1.22 50.29V30.75ZM30.76-1.21v-9.11h-2.43v9.11H4.2c-.42-1.44-1.54-2.56-2.98-2.98V-28.33h9.11v-2.43h-9.11V-50.29C28-49.65 49.65-28 50.29-1.21H30.76ZM-1.21-76.51v9.91h-9.11v2.43h9.11v11.45c-28.12.64-50.86 23.38-51.5 51.5H-64.17v-9.11H-66.6v9.11h-9.91C-75.86-42.45-42.45-75.86-1.21-76.51ZM-76.51 1.21h9.91v9.11h2.43v-9.11h11.45c.64 28.12 23.38 50.86 51.5 51.5v11.45h-9.11v2.43h9.11v9.91C-42.45 75.86-75.86 42.45-76.51 1.21ZM1.22 76.51v-9.91h9.11v-2.43h-9.11v-11.45c28.12-.64 50.86-23.38 51.5-51.5h11.45v9.11h2.43v-9.11h9.91C75.86 42.45 42.45 75.86 1.22 76.51Z\"/><path d=\"M0 83.58-7.1 96 7.1 96Z\"/><path d=\"M0-83.58 7.1-96-7.1-96\"/><path d=\"M83.58 0 96 7.1 96-7.1Z\"/><path d=\"M-83.58 0-96-7.1-96 7.1Z\"/></g></defs></svg>",
  a = {
    disc: {
      elmId: "leader-line-disc",
      noRotate: true,
      bBox: {
        left: -5,
        top: -5,
        width: 10,
        height: 10,
        right: 5,
        bottom: 5
      },
      widthR: 2.5,
      heightR: 2.5,
      bCircle: 5,
      sideLen: 5,
      backLen: 5,
      overhead: 0,
      outlineBase: 1,
      outlineMax: 4
    },
    square: {
      elmId: "leader-line-square",
      noRotate: true,
      bBox: {
        left: -5,
        top: -5,
        width: 10,
        height: 10,
        right: 5,
        bottom: 5
      },
      widthR: 2.5,
      heightR: 2.5,
      bCircle: 5,
      sideLen: 5,
      backLen: 5,
      overhead: 0,
      outlineBase: 1,
      outlineMax: 4
    },
    arrow1: {
      elmId: "leader-line-arrow1",
      bBox: {
        left: -8,
        top: -8,
        width: 16,
        height: 16,
        right: 8,
        bottom: 8
      },
      widthR: 4,
      heightR: 4,
      bCircle: 8,
      sideLen: 8,
      backLen: 8,
      overhead: 8,
      outlineBase: 2,
      outlineMax: 1.5
    },
    arrow2: {
      elmId: "leader-line-arrow2",
      bBox: {
        left: -7,
        top: -8,
        width: 11,
        height: 16,
        right: 4,
        bottom: 8
      },
      widthR: 2.75,
      heightR: 4,
      bCircle: 8,
      sideLen: 8,
      backLen: 7,
      overhead: 4,
      outlineBase: 1,
      outlineMax: 1.75
    },
    arrow3: {
      elmId: "leader-line-arrow3",
      bBox: {
        left: -4,
        top: -5,
        width: 12,
        height: 10,
        right: 8,
        bottom: 5
      },
      widthR: 3,
      heightR: 2.5,
      bCircle: 8,
      sideLen: 5,
      backLen: 4,
      overhead: 8,
      outlineBase: 1,
      outlineMax: 2.5
    },
    hand: {
      elmId: "leader-line-hand",
      bBox: {
        left: -3,
        top: -12,
        width: 40,
        height: 24,
        right: 37,
        bottom: 12
      },
      widthR: 10,
      heightR: 6,
      bCircle: 37,
      sideLen: 12,
      backLen: 3,
      overhead: 37
    },
    crosshair: {
      elmId: "leader-line-crosshair",
      noRotate: true,
      bBox: {
        left: -96,
        top: -96,
        width: 192,
        height: 192,
        right: 96,
        bottom: 96
      },
      widthR: 48,
      heightR: 48,
      bCircle: 96,
      sideLen: 96,
      backLen: 96,
      overhead: 0
    }
  },
  o = {
    behind: "behind",
    disc: "disc",
    square: "square",
    arrow1: "arrow1",
    arrow2: "arrow2",
    arrow3: "arrow3",
    hand: "hand",
    crosshair: "crosshair"
  },
  s = {
    disc: "disc",
    square: "square",
    arrow1: "arrow1",
    arrow2: "arrow2",
    arrow3: "arrow3",
    hand: "hand",
    crosshair: "crosshair"
  },
  c = "arrow1",
  l = function () {
    var l = "leader-line",
      u = 1,
      d = 2,
      f = 3,
      p = 4,
      m = {
        top: u,
        right: d,
        bottom: f,
        left: p
      },
      h = 1,
      g = 2,
      _ = 3,
      v = 4,
      y = 5,
      b = {
        straight: h,
        arc: g,
        fluid: _,
        magnet: v,
        grid: y
      },
      x = "behind",
      S = l + "-defs",
      C = [u, d, f, p],
      w = "auto",
      ee = {
        x: "left",
        y: "top",
        width: "width",
        height: "height"
      },
      te = 80,
      ne = 4,
      re = 5,
      ie = 120,
      ae = 8,
      oe = 3.75,
      T = 10,
      E = 30,
      se = .5522847,
      ce = 1 / 4 * Math.PI,
      le = /^\s*(\-?[\d\.]+)\s*(\%)?\s*$/,
      D = "http://www.w3.org/2000/svg",
      O = "-ms-scroll-limit" in document.documentElement.style && "-ms-ime-align" in document.documentElement.style && !window.navigator.msPointerEnabled,
      k = !O && !!document.uniqueID,
      A = "MozAppearance" in document.documentElement.style,
      j = !O && !A && !!window.CSS && (!!window.chrome || /Chrome\//.test(window.navigator.userAgent)),
      M = !O && !k && !A && !j && !window.chrome && "WebkitAppearance" in document.documentElement.style,
      ue = k || O ? .2 : .1,
      N = {
        path: _,
        lineColor: "coral",
        lineSize: 4,
        plugSE: [x, c],
        plugSizeSE: [1, 1],
        lineOutlineEnabled: false,
        lineOutlineColor: "indianred",
        lineOutlineSize: .25,
        plugOutlineEnabledSE: [false, false],
        plugOutlineSizeSE: [1, 1]},
      P = function () {
        var e = {}.toString,
          t = {}.hasOwnProperty.toString,
          n = t.call(Object);
        return function (r) {
          var i, a;
          return r && e.call(r) === "[object Object]" && (!(i = Object.getPrototypeOf(r)) || (a = i.hasOwnProperty("constructor") && i.constructor) && typeof a == "function" && t.call(a) === n);
        };
      }(),
      F = Number.isFinite || function (e) {
        return typeof e == "number" && window.isFinite(e);
      },
      de = {
        line_altColor: {
          iniValue: false
        },
        line_color: {},
        line_colorTra: {
          iniValue: false
        },
        line_strokeWidth: {},
        plug_enabled: {
          iniValue: false
        },
        plug_enabledSE: {
          hasSE: true,
          iniValue: false
        },
        plug_plugSE: {
          hasSE: true,
          iniValue: x
        },
        plug_colorSE: {
          hasSE: true
        },
        plug_colorTraSE: {
          hasSE: true,
          iniValue: false
        },
        plug_markerWidthSE: {
          hasSE: true
        },
        plug_markerHeightSE: {
          hasSE: true
        },
        lineOutline_enabled: {
          iniValue: false
        },
        lineOutline_color: {},
        lineOutline_colorTra: {
          iniValue: false
        },
        lineOutline_strokeWidth: {},
        lineOutline_inStrokeWidth: {},
        plugOutline_enabledSE: {
          hasSE: true,
          iniValue: false
        },
        plugOutline_plugSE: {
          hasSE: true,
          iniValue: x
        },
        plugOutline_colorSE: {
          hasSE: true
        },
        plugOutline_colorTraSE: {
          hasSE: true,
          iniValue: false
        },
        plugOutline_strokeWidthSE: {
          hasSE: true
        },
        plugOutline_inStrokeWidthSE: {
          hasSE: true
        },
        position_socketXYSE: {
          hasSE: true,
          hasProps: true
        },
        position_plugOverheadSE: {
          hasSE: true
        },
        position_path: {},
        position_lineStrokeWidth: {},
        position_socketGravitySE: {
          hasSE: true
        },
        path_pathData: {},
        path_edge: {
          hasProps: true
        },
        viewBox_bBox: {
          hasProps: true
        },
        viewBox_plugBCircleSE: {
          hasSE: true
        },
        lineMask_enabled: {
          iniValue: false
        },
        lineMask_outlineMode: {
          iniValue: false
        },
        lineMask_x: {},
        lineMask_y: {},
        lineOutlineMask_x: {},
        lineOutlineMask_y: {},
        maskBGRect_x: {},
        maskBGRect_y: {},
        capsMaskAnchor_enabledSE: {
          hasSE: true,
          iniValue: false
        },
        capsMaskAnchor_pathDataSE: {
          hasSE: true
        },
        capsMaskAnchor_strokeWidthSE: {
          hasSE: true
        },
        capsMaskMarker_enabled: {
          iniValue: false
        },
        capsMaskMarker_enabledSE: {
          hasSE: true,
          iniValue: false
        },
        capsMaskMarker_plugSE: {
          hasSE: true,
          iniValue: x
        },
        capsMaskMarker_markerWidthSE: {
          hasSE: true
        },
        capsMaskMarker_markerHeightSE: {
          hasSE: true
        },
        caps_enabled: {
          iniValue: false
        },
        attach_plugSideLenSE: {
          hasSE: true
        },
        attach_plugBackLenSE: {
          hasSE: true
        }
      },
      fe = {
        show_on: {},
        show_effect: {},
        show_animOptions: {},
        show_animId: {},
        show_inAnim: {}
      },
      I,
      L,
      R,
      z,
      pe = "fade",
      me,
      he,
      ge = [],
      _e,
      B = {},
      ve = 0,
      V = {},
      ye = 0,
      be = r({
        raf: function raf(e) {
          window.requestAnimationFrame(e);
        },
        measure: function measure(e) {
          e.measuredBBoxSE = rt(e);
        },
        apply: function apply(e) {
          var t = e.measuredBBoxSE;
          delete e.measuredBBoxSE, Q(e, {
            position: true
          }, t);
        }
      }),
      xe,
      H,
      Se;
    function U(e, t) {
      var n, r;
      return typeof e != typeof t || (n = P(e) ? "obj" : Array.isArray(e) ? "array" : "") != (P(t) ? "obj" : Array.isArray(t) ? "array" : "") || (n === "obj" ? U(r = Object.keys(e).sort(), Object.keys(t).sort()) || r.some(function (n) {
        return U(e[n], t[n]);
      }) : n === "array" ? e.length !== t.length || e.some(function (e, n) {
        return U(e, t[n]);
      }) : e !== t);
    }
    function W(e) {
      return e && (P(e) ? Object.keys(e).reduce(function (t, n) {
        return t[n] = W(e[n]), t;
      }, {}) : Array.isArray(e) ? e.map(W) : e);
    }
    function Ce(e) {
      var t,
        n,
        r,
        i = 1,
        a = e = (e + "").trim();
      function o(e) {
        var t = 1,
          n = le.exec(e);
        return n && (t = parseFloat(n[1]), n[2] ? t = t >= 0 && t <= 100 ? t / 100 : 1 : (t < 0 || t > 1) && (t = 1)), t;
      }
      return (t = /^(rgba|hsla|hwb|gray|device\-cmyk)\s*\(([\s\S]+)\)$/i.exec(e)) ? (n = t[1].toLowerCase(), r = t[2].trim().split(/\s*,\s*/), n === "rgba" && r.length === 4 ? (i = o(r[3]), a = "rgb(" + r.slice(0, 3).join(", ") + ")") : n === "hsla" && r.length === 4 ? (i = o(r[3]), a = "hsl(" + r.slice(0, 3).join(", ") + ")") : n === "hwb" && r.length === 4 ? (i = o(r[3]), a = "hwb(" + r.slice(0, 3).join(", ") + ")") : n === "gray" && r.length === 2 ? (i = o(r[1]), a = "gray(" + r[0] + ")") : n === "device-cmyk" && r.length >= 5 && (i = o(r[4]), a = "device-cmyk(" + r.slice(0, 4).join(", ") + ")")) : (t = /^\#(?:([\da-f]{6})([\da-f]{2})|([\da-f]{3})([\da-f]))$/i.exec(e)) ? t[1] ? (i = parseInt(t[2], 16) / 255, a = "#" + t[1]) : (i = parseInt(t[4] + t[4], 16) / 255, a = "#" + t[3]) : e.toLocaleLowerCase() === "transparent" && (i = 0), [i, a];
    }
    function we(e, t, n) {
      var r, i;
      return "onmouseenter" in e && "onmouseleave" in e ? (e.addEventListener("mouseenter", t, false), e.addEventListener("mouseleave", n, false), function () {
        e.removeEventListener("mouseenter", t, false), e.removeEventListener("mouseleave", n, false);
      }) : (console.warn("mouseenter and mouseleave events polyfill is enabled."), r = function r(e) {
        (!e.relatedTarget || e.relatedTarget !== this && !(this.compareDocumentPosition(e.relatedTarget) & Node.DOCUMENT_POSITION_CONTAINED_BY)) && t.apply(this, arguments);
      }, e.addEventListener("mouseover", r), i = function i(e) {
        (!e.relatedTarget || e.relatedTarget !== this && !(this.compareDocumentPosition(e.relatedTarget) & Node.DOCUMENT_POSITION_CONTAINED_BY)) && n.apply(this, arguments);
      }, e.addEventListener("mouseout", i), function () {
        e.removeEventListener("mouseover", r, false), e.removeEventListener("mouseout", i, false);
      });
    }
    function G(e) {
      return !!(e && e.nodeType === Node.ELEMENT_NODE && typeof e.getBoundingClientRect == "function");
    }
    function Te(e, t) {
      var n = {},
        r,
        i,
        a,
        o;
      if (!(a = e.ownerDocument)) return console.error("Cannot get document that contains the element."), null;
      if (e.compareDocumentPosition(a) & Node.DOCUMENT_POSITION_DISCONNECTED) return console.error("A disconnected element was passed."), null;
      for (i in r = e.getBoundingClientRect(), r) n[i] = r[i];
      if (!t) {
        if (!(o = a.defaultView)) return console.error("Cannot get window that contains the element."), null;
        n.left += o.pageXOffset, n.right += o.pageXOffset, n.top += o.pageYOffset, n.bottom += o.pageYOffset;
      }
      return n;
    }
    function Ee(e) {
      var t = e.ownerDocument.defaultView.getComputedStyle(e, "");
      return {
        left: e.clientLeft + parseFloat(t.paddingLeft),
        top: e.clientTop + parseFloat(t.paddingTop)
      };
    }
    function De(e, t) {
      if (window.__MICRO_APP_NAME__) return [];
      var n = [],
        r = e,
        i,
        a;
      for (t = t || window;;) {
        if (!(i = r.ownerDocument)) return console.error("Cannot get document that contains the element."), null;
        if (!(a = i.defaultView)) return console.error("Cannot get window that contains the element."), null;
        if (a === t) break;
        if (!(r = a.frameElement)) return console.error("`baseWindow` was not found."), null;
        n.unshift(r);
      }
      return n;
    }
    function Oe(e, t) {
      var n = 0,
        r = 0,
        i,
        a;
      return t = t || window, (a = De(e, t)) ? a.length ? (a.forEach(function (e, t) {
        var i = Te(e, t > 0);
        n += i.left, r += i.top, i = Ee(e), n += i.left, r += i.top;
      }), i = Te(e, true), i.left += n, i.right += n, i.top += r, i.bottom += r, i) : Te(e) : null;
    }
    function ke(e, t) {
      var n, r, i;
      if (!(n = De(e)) || !(r = De(t))) throw Error("Cannot get frames.");
      return n.length && r.length && (n.reverse(), r.reverse(), n.some(function (e) {
        return r.some(function (t) {
          return t === e ? (i = t.contentWindow, true) : false;
        });
      })), i || window;
    }
    function K(e, t) {
      var n = e.x - t.x,
        r = e.y - t.y;
      return Math.sqrt(n * n + r * r);
    }
    function Ae(e, t, n) {
      var r = t.x - e.x,
        i = t.y - e.y;
      return {
        x: e.x + r * n,
        y: e.y + i * n,
        angle: Math.atan2(i, r) / (Math.PI / 180)
      };
    }
    function je(e, t, n, r) {
      var i = t.x - e.x,
        a = t.y - e.y,
        o = r.x - n.x,
        s = r.y - n.y,
        c = (-a * (e.x - n.x) + i * (e.y - n.y)) / (-o * a + i * s),
        l = (o * (e.y - n.y) - s * (e.x - n.x)) / (-o * a + i * s);
      return c >= 0 && c <= 1 && l >= 0 && l <= 1 ? {
        x: e.x + l * i,
        y: e.y + l * a
      } : null;
    }
    function Me(e, t, n) {
      var r = Math.atan2(e.y - t.y, t.x - e.x);
      return {
        x: t.x + Math.cos(r) * n,
        y: t.y + Math.sin(r) * n * -1
      };
    }
    function Ne(e, t, n, r, i) {
      var a = i * i,
        o = a * i,
        s = 1 - i,
        c = s * s,
        l = c * s,
        u = l * e.x + 3 * c * i * t.x + 3 * s * a * n.x + o * r.x,
        d = l * e.y + 3 * c * i * t.y + 3 * s * a * n.y + o * r.y,
        f = e.x + 2 * i * (t.x - e.x) + a * (n.x - 2 * t.x + e.x),
        p = e.y + 2 * i * (t.y - e.y) + a * (n.y - 2 * t.y + e.y),
        m = t.x + 2 * i * (n.x - t.x) + a * (r.x - 2 * n.x + t.x),
        h = t.y + 2 * i * (n.y - t.y) + a * (r.y - 2 * n.y + t.y),
        g = s * e.x + i * t.x,
        _ = s * e.y + i * t.y,
        v = s * n.x + i * r.x,
        y = s * n.y + i * r.y,
        b = 90 - Math.atan2(f - m, p - h) * 180 / Math.PI;
      return b += b > 180 ? -180 : 180, {
        x: u,
        y: d,
        fromP2: {
          x: f,
          y: p
        },
        toP1: {
          x: m,
          y: h
        },
        fromP1: {
          x: g,
          y: _
        },
        toP2: {
          x: v,
          y: y
        },
        angle: b
      };
    }
    function Pe(e, t, n, r, i) {
      function a(e, t, n, r, i) {
        return e * (e * (-3 * t + 9 * n - 9 * r + 3 * i) + 6 * t - 12 * n + 6 * r) - 3 * t + 3 * n;
      }
      var o = [-0.1252, .1252, -0.3678, .3678, -0.5873, .5873, -0.7699, .7699, -0.9041, .9041, -0.9816, .9816],
        s = [.2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472],
        c = 0,
        l,
        u,
        d,
        f,
        p;
      return i = i == null || i > 1 ? 1 : i < 0 ? 0 : i, l = i / 2, o.forEach(function (i, o) {
        u = l * i + l, d = a(u, e.x, t.x, n.x, r.x), f = a(u, e.y, t.y, n.y, r.y), p = d * d + f * f, c += s[o] * Math.sqrt(p);
      }), l * c;
    }
    function Fe(e, t, n, r, i) {
      for (var a = .01, o = 1 / 2, s = 1 - o, c; c = Pe(e, t, n, r, s), !(Math.abs(c - i) <= a);) o /= 2, s += (c < i ? 1 : -1) * o;
      return s;
    }
    function Ie(e, t, n) {
      var r = Math.atan2(e.y - t.y, t.x - e.x) + Math.PI * .5;
      return [{
        x: e.x + Math.cos(r) * n,
        y: e.y + Math.sin(r) * n * -1
      }, {
        x: t.x + Math.cos(r) * n,
        y: t.y + Math.sin(r) * n * -1
      }];
    }
    function Le(e, t, n, r, i, a) {
      for (var o = Pe(e, t, n, r) / a, s = 1 / (i > a ? i / a * o : o), c = [], l, u, d = 0; l = Ne(e, t, n, r, d), u = (-l.angle + 90) * (Math.PI / 180), c.push({
        x: l.x + Math.cos(u) * i,
        y: l.y + Math.sin(u) * i * -1
      }), !(d >= 1);) d += s, d > 1 && (d = 1);
      return c;
    }
    function Re(e, t) {
      var n;
      return e.forEach(function (e) {
        var r = t ? e.map(function (e) {
          var n = {
            x: e.x,
            y: e.y
          };
          return t(n), n;
        }) : e;
        n || (n = [{
          type: "M",
          values: [r[0].x, r[0].y]
        }]), n.push(r.length ? r.length === 2 ? {
          type: "L",
          values: [r[1].x, r[1].y]
        } : {
          type: "C",
          values: [r[1].x, r[1].y, r[2].x, r[2].y, r[3].x, r[3].y]
        } : {
          type: "Z",
          values: []
        });
      }), n;
    }
    function ze(e) {
      var t = [],
        n = 0;
      return e.forEach(function (e) {
        var r = (e.length === 2 ? K : Pe).apply(null, e);
        t.push(r), n += r;
      }), {
        segsLen: t,
        lenAll: n
      };
    }
    function Be(e) {
      var t;
      return e.reduce(function (e, n) {
        var r = n.values,
          i;
        switch (n.type) {
          case "M":
            t = {
              x: r[0],
              y: r[1]
            };
            break;
          case "L":
            i = {
              x: r[0],
              y: r[1]
            }, t && (e += K(t, i)), t = i;
            break;
          case "C":
            i = {
              x: r[4],
              y: r[5]
            }, t && (e += Pe(t, {
              x: r[0],
              y: r[1]
            }, {
              x: r[2],
              y: r[3]
            }, i)), t = i;
            break;
        }
        return e;
      }, 0);
    }
    function Ve(e, t) {
      return e == null || t == null || e.length !== t.length || e.some(function (e, n) {
        var r = t[n];
        return e.type !== r.type || e.values.some(function (e, t) {
          return e !== r.values[t];
        });
      });
    }
    function He(e) {
      var t = e.right == null ? e.left + e.width : e.right,
        n = e.bottom == null ? e.top + e.height : e.bottom;
      return [{
        type: "M",
        values: [e.left, e.top]
      }, {
        type: "L",
        values: [t, e.top]
      }, {
        type: "L",
        values: [t, n]
      }, {
        type: "L",
        values: [e.left, n]
      }, {
        type: "Z",
        values: []
      }];
    }
    function q(e, t, n) {
      e.events[t] ? e.events[t].indexOf(n) < 0 && e.events[t].push(n) : e.events[t] = [n];
    }
    function J(e, t, n) {
      var r;
      e.events[t] && (r = e.events[t].indexOf(n)) > -1 && e.events[t].splice(r, 1);
    }
    function Ue(e) {
      function t() {
        ge.forEach(function (e) {
          e();
        }), ge = [];
      }
      _e && clearTimeout(_e), ge.push(e), _e = setTimeout(t, 0);
    }
    function We(e) {
      setTimeout(function () {
        var t = e.parentNode,
          n = e.nextSibling;
        t.insertBefore(t.removeChild(e), n);
      }, 0);
    }
    function Y(e, t) {
      e.reflowTargets.indexOf(t) < 0 && e.reflowTargets.push(t);
    }
    function Ge(e) {
      e.reflowTargets.forEach(function (e) {
        We(e);
      }), e.reflowTargets = [];
    }
    function Ke(e, t, n, r, i, a, o) {
      var s, c, l;
      n === "auto-start-reverse" ? (typeof xe != "boolean" && (t.setAttribute("orient", "auto-start-reverse"), xe = t.orientType.baseVal === SVGMarkerElement.SVG_MARKER_ORIENT_UNKNOWN), xe ? t.setAttribute("orient", n) : (s = i.createSVGTransform(), s.setRotate(180, 0, 0), a.transform.baseVal.appendItem(s), t.setAttribute("orient", "auto"), l = true)) : (t.setAttribute("orient", n), xe === false && a.transform.baseVal.clear()), c = t.viewBox.baseVal, l ? (c.x = -r.right, c.y = -r.bottom) : (c.x = r.left, c.y = r.top), c.width = r.width, c.height = r.height, k && Y(e, o);
    }
    function qe(e, t) {
      return {
        prop: e ? "markerEnd" : "markerStart",
        orient: t ? t.noRotate ? "0" : e ? "auto" : "auto-start-reverse" : null
      };
    }
    function Je(e, t) {
      var n = {},
        r,
        i;
      return typeof Se != "boolean" && (Se = !!window.SVGFEDropShadowElement && !M), n.elmsAppend = [n.elmFilter = r = e.createElementNS(D, "filter")], r.filterUnits.baseVal = SVGUnitTypes.SVG_UNIT_TYPE_USERSPACEONUSE, r.x.baseVal.newValueSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_PX, 0), r.y.baseVal.newValueSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_PX, 0), r.width.baseVal.newValueSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_PERCENTAGE, 100), r.height.baseVal.newValueSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_PERCENTAGE, 100), r.id = t, Se ? (n.elmOffset = n.elmBlur = i = r.appendChild(e.createElementNS(D, "feDropShadow")), n.styleFlood = i.style) : (n.elmBlur = r.appendChild(e.createElementNS(D, "feGaussianBlur")), n.elmOffset = i = r.appendChild(e.createElementNS(D, "feOffset")), i.result.baseVal = "offsetblur", i = r.appendChild(e.createElementNS(D, "feFlood")), n.styleFlood = i.style, i = r.appendChild(e.createElementNS(D, "feComposite")), i.in2.baseVal = "offsetblur", i.operator.baseVal = SVGFECompositeElement.SVG_FECOMPOSITE_OPERATOR_IN, i = r.appendChild(e.createElementNS(D, "feMerge")), i.appendChild(e.createElementNS(D, "feMergeNode")), i.appendChild(e.createElementNS(D, "feMergeNode")).in1.baseVal = "SourceGraphic"), n;
    }
    function X(e, t) {
      Object.keys(t).forEach(function (n) {
        var r = t[n];
        e[n] = r.iniValue == null ? r.hasSE ? r.hasProps ? [{}, {}] : [] : r.hasProps ? {} : null : r.hasSE ? [r.iniValue, r.iniValue] : r.iniValue;
      });
    }
    function Z(e, t, n, r, i) {
      return r === t[n] ? false : (t[n] = r, i && i.forEach(function (t) {
        t(e, r, n);
      }), true);
    }
    function Ye(e) {
      function t(e, t) {
        return e += parseFloat(t);
      }
      var n = e.document,
        r = e.getComputedStyle(n.documentElement, ""),
        i = e.getComputedStyle(n.body, ""),
        a = {
          x: 0,
          y: 0
        };
      return i.position === "static" ? r.position !== "static" && (a.x -= [r.marginLeft, r.borderLeftWidth].reduce(t, 0), a.y -= [r.marginTop, r.borderTopWidth].reduce(t, 0)) : (a.x -= [r.marginLeft, r.borderLeftWidth, r.paddingLeft, i.marginLeft, i.borderLeftWidth].reduce(t, 0), a.y -= [r.marginTop, r.borderTopWidth, r.paddingTop, i.marginTop, i.borderTopWidth].reduce(t, 0)), a;
    }
    function Xe(e, n) {
      var r = n.document,
        a;
      r.getElementById(S) || (a = new n.DOMParser().parseFromString(i, "image/svg+xml"), (e.svgContainer || r.body).appendChild(a.documentElement), t(n));
    }
    function Ze(e, t) {
      var n = e.aplStats,
        r = t.document,
        i,
        a,
        o,
        s,
        c = l + "-" + e._id,
        u,
        d,
        f,
        p,
        m,
        h;
      function g(e) {
        var t = a.appendChild(r.createElementNS(D, "mask"));
        return t.id = e, t.maskUnits.baseVal = SVGUnitTypes.SVG_UNIT_TYPE_USERSPACEONUSE, [t.x, t.y, t.width, t.height].forEach(function (e) {
          e.baseVal.newValueSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_PX, 0);
        }), t;
      }
      function _(e) {
        var t = a.appendChild(r.createElementNS(D, "marker"));
        return t.id = e, t.markerUnits.baseVal = SVGMarkerElement.SVG_MARKERUNITS_STROKEWIDTH, t.viewBox.baseVal || t.setAttribute("viewBox", "0 0 0 0"), t;
      }
      function v(e) {
        return [e.width, e.height].forEach(function (e) {
          e.baseVal.newValueSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_PERCENTAGE, 100);
        }), e;
      }
      e.svgContainer = e.svgContainer || e.options.svgContainer || r.body, e.pathList = {}, X(n, de), Object.keys(I).forEach(function (t) {
        var r = t + "_enabled";
        n[r] && (I[t].remove(e), n[r] = false);
      }), e.baseWindow && e.svg && (e.svgContainer || e.baseWindow.document.body).removeChild(e.svg), e.baseWindow = t, Xe(e, t), e.bodyOffset = Ye(t), e.svg = i = r.createElementNS(D, "svg"), i.className.baseVal = l, i.viewBox.baseVal || i.setAttribute("viewBox", "0 0 0 0"), e.defs = a = i.appendChild(r.createElementNS(D, "defs")), e.linePath = s = a.appendChild(r.createElementNS(D, "path")), s.id = u = c + "-line-path", s.className.baseVal = l + "-line-path", M && (s.style.fill = "none"), e.lineShape = s = a.appendChild(r.createElementNS(D, "use")), s.id = d = c + "-line-shape", s.href.baseVal = "#" + u, o = a.appendChild(r.createElementNS(D, "g")), o.id = f = c + "-caps", e.capsMaskAnchorSE = [0, 1].map(function () {
        var e = o.appendChild(r.createElementNS(D, "path"));
        return e.className.baseVal = l + "-caps-mask-anchor", e;
      }), e.lineMaskMarkerIdSE = [c + "-caps-mask-marker-0", c + "-caps-mask-marker-1"], e.capsMaskMarkerSE = [0, 1].map(function (t) {
        return _(e.lineMaskMarkerIdSE[t]);
      }), e.capsMaskMarkerShapeSE = [0, 1].map(function (t) {
        var n = e.capsMaskMarkerSE[t].appendChild(r.createElementNS(D, "use"));
        return n.className.baseVal = l + "-caps-mask-marker-shape", n;
      }), e.capsMaskLine = s = o.appendChild(r.createElementNS(D, "use")), s.className.baseVal = l + "-caps-mask-line", s.href.baseVal = "#" + d, e.maskBGRect = s = v(a.appendChild(r.createElementNS(D, "rect"))), s.id = p = c + "-mask-bg-rect", s.className.baseVal = l + "-mask-bg-rect", M && (s.style.fill = "white"), e.lineMask = v(g(e.lineMaskId = c + "-line-mask")), e.lineMaskBG = s = e.lineMask.appendChild(r.createElementNS(D, "use")), s.href.baseVal = "#" + p, e.lineMaskShape = s = e.lineMask.appendChild(r.createElementNS(D, "use")), s.className.baseVal = l + "-line-mask-shape", s.href.baseVal = "#" + u, s.style.display = "none", e.lineMaskCaps = s = e.lineMask.appendChild(r.createElementNS(D, "use")), s.href.baseVal = "#" + f, e.lineOutlineMask = v(g(m = c + "-line-outline-mask")), s = e.lineOutlineMask.appendChild(r.createElementNS(D, "use")), s.href.baseVal = "#" + p, e.lineOutlineMaskShape = s = e.lineOutlineMask.appendChild(r.createElementNS(D, "use")), s.className.baseVal = l + "-line-outline-mask-shape", s.href.baseVal = "#" + u, e.lineOutlineMaskCaps = s = e.lineOutlineMask.appendChild(r.createElementNS(D, "use")), s.href.baseVal = "#" + f, e.face = i.appendChild(r.createElementNS(D, "g")), e.lineFace = s = e.face.appendChild(r.createElementNS(D, "use")), s.href.baseVal = "#" + d, e.lineOutlineFace = s = e.face.appendChild(r.createElementNS(D, "use")), s.href.baseVal = "#" + d, s.style.mask = "url(#" + m + ")", s.style.display = "none", e.plugMaskIdSE = [c + "-plug-mask-0", c + "-plug-mask-1"], e.plugMaskSE = [0, 1].map(function (t) {
        return g(e.plugMaskIdSE[t]);
      }), e.plugMaskShapeSE = [0, 1].map(function (t) {
        var n = e.plugMaskSE[t].appendChild(r.createElementNS(D, "use"));
        return n.className.baseVal = l + "-plug-mask-shape", n;
      }), h = [], e.plugOutlineMaskSE = [0, 1].map(function (e) {
        return g(h[e] = c + "-plug-outline-mask-" + e);
      }), e.plugOutlineMaskShapeSE = [0, 1].map(function (t) {
        var n = e.plugOutlineMaskSE[t].appendChild(r.createElementNS(D, "use"));
        return n.className.baseVal = l + "-plug-outline-mask-shape", n;
      }), e.plugMarkerIdSE = [c + "-plug-marker-0", c + "-plug-marker-1"], e.plugMarkerSE = [0, 1].map(function (t) {
        var n = _(e.plugMarkerIdSE[t]);
        return M && (n.markerUnits.baseVal = SVGMarkerElement.SVG_MARKERUNITS_USERSPACEONUSE), n;
      }), e.plugMarkerShapeSE = [0, 1].map(function (t) {
        return e.plugMarkerSE[t].appendChild(r.createElementNS(D, "g"));
      }), e.plugFaceSE = [0, 1].map(function (t) {
        return e.plugMarkerShapeSE[t].appendChild(r.createElementNS(D, "use"));
      }), e.plugOutlineFaceSE = [0, 1].map(function (t) {
        var n = e.plugMarkerShapeSE[t].appendChild(r.createElementNS(D, "use"));
        return n.style.mask = "url(#" + h[t] + ")", n.style.display = "none", n;
      }), e.plugsFace = s = e.face.appendChild(r.createElementNS(D, "use")), s.className.baseVal = l + "-plugs-face", s.href.baseVal = "#" + d, s.style.display = "none", e.curStats.show_inAnim ? (e.isShown = 1, L[n.show_effect].stop(e, true)) : e.isShown || (i.style.visibility = "hidden"), (e.svgContainer || r.body).appendChild(i), [0, 1, 2].forEach(function (t) {
        var n = e.options.labelSEM[t],
          r;
        n && me(n, "label") && (r = V[n._id], r.conf.initSvg && r.conf.initSvg(r, e));
      });
    }
    function Qe(e) {
      var t = e.options,
        n = e.curStats,
        r = e.events,
        i = false;
      return i = Z(e, n, "line_color", t.lineColor, r.cur_line_color) || i, i = Z(e, n, "line_colorTra", Ce(n.line_color)[0] < 1) || i, i = Z(e, n, "line_strokeWidth", t.lineSize, r.cur_line_strokeWidth) || i, i;
    }
    function $e(e) {
      var t = e.options,
        n = e.curStats,
        r = e.events,
        i = false;
      return [0, 1].forEach(function (o) {
        var c = t.plugSE[o],
          l,
          u,
          d,
          f,
          p,
          m,
          h,
          g;
        i = Z(e, n.plug_enabledSE, o, c !== x) || i, i = Z(e, n.plug_plugSE, o, c) || i, i = Z(e, n.plug_colorSE, o, g = t.plugColorSE[o] || n.line_color, r.cur_plug_colorSE) || i, i = Z(e, n.plug_colorTraSE, o, Ce(g)[0] < 1) || i, c !== x && (l = a[s[c]], f = u = l.widthR * t.plugSizeSE[o], p = d = l.heightR * t.plugSizeSE[o], M && (f *= n.line_strokeWidth, p *= n.line_strokeWidth), i = Z(e, n.plug_markerWidthSE, o, f) || i, i = Z(e, n.plug_markerHeightSE, o, p) || i, n.capsMaskMarker_markerWidthSE[o] = u, n.capsMaskMarker_markerHeightSE[o] = d), n.plugOutline_plugSE[o] = n.capsMaskMarker_plugSE[o] = c, n.plug_enabledSE[o] ? (g = n.line_strokeWidth / N.lineSize * t.plugSizeSE[o], n.position_plugOverheadSE[o] = l.overhead * g, n.viewBox_plugBCircleSE[o] = l.bCircle * g, m = l.sideLen * g, h = l.backLen * g) : (n.position_plugOverheadSE[o] = -(n.line_strokeWidth / 2), n.viewBox_plugBCircleSE[o] = m = h = 0), Z(e, n.attach_plugSideLenSE, o, m, r.cur_attach_plugSideLenSE), Z(e, n.attach_plugBackLenSE, o, h, r.cur_attach_plugBackLenSE), n.capsMaskAnchor_enabledSE[o] = !n.plug_enabledSE[o];
      }), i = Z(e, n, "plug_enabled", n.plug_enabledSE[0] || n.plug_enabledSE[1]) || i, i;
    }
    function et(e) {
      var t = e.options,
        n = e.curStats,
        r,
        i = false;
      return i = Z(e, n, "lineOutline_enabled", t.lineOutlineEnabled) || i, i = Z(e, n, "lineOutline_color", t.lineOutlineColor) || i, i = Z(e, n, "lineOutline_colorTra", Ce(n.lineOutline_color)[0] < 1) || i, r = n.line_strokeWidth * t.lineOutlineSize, i = Z(e, n, "lineOutline_strokeWidth", n.line_strokeWidth - r * 2) || i, i = Z(e, n, "lineOutline_inStrokeWidth", n.lineOutline_colorTra ? n.lineOutline_strokeWidth + ue * 2 : n.line_strokeWidth - r) || i, i;
    }
    function tt(e) {
      var t = e.options,
        n = e.curStats,
        r = false;
      return [0, 1].forEach(function (i) {
        var o = n.plugOutline_plugSE[i],
          c = o === x ? null : a[s[o]],
          l;
        r = Z(e, n.plugOutline_enabledSE, i, t.plugOutlineEnabledSE[i] && n.plug_enabled && n.plug_enabledSE[i] && !!c && !!c.outlineBase) || r, r = Z(e, n.plugOutline_colorSE, i, l = t.plugOutlineColorSE[i] || n.lineOutline_color) || r, r = Z(e, n.plugOutline_colorTraSE, i, Ce(l)[0] < 1) || r, c && c.outlineBase && (l = t.plugOutlineSizeSE[i], l > c.outlineMax && (l = c.outlineMax), l *= c.outlineBase * 2, r = Z(e, n.plugOutline_strokeWidthSE, i, l) || r, r = Z(e, n.plugOutline_inStrokeWidthSE, i, n.plugOutline_colorTraSE[i] ? l - ue / (n.line_strokeWidth / N.lineSize) / t.plugSizeSE[i] * 2 : l / 2) || r);
      }), r;
    }
    function nt(e) {
      var t = e.curStats,
        n = e.aplStats,
        r = e.events,
        i,
        o = false;
      return !t.line_altColor && Z(e, n, "line_color", i = t.line_color, r.apl_line_color) && (e.lineFace.style.stroke = i, o = true), Z(e, n, "line_strokeWidth", i = t.line_strokeWidth, r.apl_line_strokeWidth) && (e.lineShape.style.strokeWidth = i + "px", o = true, (A || k) && (Y(e, e.lineShape), k && (Y(e, e.lineFace), Y(e, e.lineMaskCaps)))), Z(e, n, "lineOutline_enabled", i = t.lineOutline_enabled, r.apl_lineOutline_enabled) && (e.lineOutlineFace.style.display = i ? "inline" : "none", o = true), t.lineOutline_enabled && (Z(e, n, "lineOutline_color", i = t.lineOutline_color, r.apl_lineOutline_color) && (e.lineOutlineFace.style.stroke = i, o = true), Z(e, n, "lineOutline_strokeWidth", i = t.lineOutline_strokeWidth, r.apl_lineOutline_strokeWidth) && (e.lineOutlineMaskShape.style.strokeWidth = i + "px", o = true, k && (Y(e, e.lineOutlineMaskCaps), Y(e, e.lineOutlineFace))), Z(e, n, "lineOutline_inStrokeWidth", i = t.lineOutline_inStrokeWidth, r.apl_lineOutline_inStrokeWidth) && (e.lineMaskShape.style.strokeWidth = i + "px", o = true, k && (Y(e, e.lineOutlineMaskCaps), Y(e, e.lineOutlineFace)))), Z(e, n, "plug_enabled", i = t.plug_enabled, r.apl_plug_enabled) && (e.plugsFace.style.display = i ? "inline" : "none", o = true), t.plug_enabled && [0, 1].forEach(function (c) {
        var l = t.plug_plugSE[c],
          u = l === x ? null : a[s[l]],
          d = qe(c, u);
        Z(e, n.plug_enabledSE, c, i = t.plug_enabledSE[c], r.apl_plug_enabledSE) && (e.plugsFace.style[d.prop] = i ? "url(#" + e.plugMarkerIdSE[c] + ")" : "none", o = true), t.plug_enabledSE[c] && (Z(e, n.plug_plugSE, c, l, r.apl_plug_plugSE) && (e.plugFaceSE[c].href.baseVal = "#" + u.elmId, Ke(e, e.plugMarkerSE[c], d.orient, u.bBox, e.svg, e.plugMarkerShapeSE[c], e.plugsFace), o = true, A && Y(e, e.plugsFace)), Z(e, n.plug_colorSE, c, i = t.plug_colorSE[c], r.apl_plug_colorSE) && (e.plugFaceSE[c].style.fill = i, o = true, (j || M || k) && !t.line_colorTra && Y(e, k ? e.lineMaskCaps : e.capsMaskLine)), ["markerWidth", "markerHeight"].forEach(function (a) {
          var s = "plug_" + a + "SE";
          Z(e, n[s], c, i = t[s][c], r["apl_" + s]) && (e.plugMarkerSE[c][a].baseVal.value = i, o = true);
        }), Z(e, n.plugOutline_enabledSE, c, i = t.plugOutline_enabledSE[c], r.apl_plugOutline_enabledSE) && (i ? (e.plugFaceSE[c].style.mask = "url(#" + e.plugMaskIdSE[c] + ")", e.plugOutlineFaceSE[c].style.display = "inline") : (e.plugFaceSE[c].style.mask = "none", e.plugOutlineFaceSE[c].style.display = "none"), o = true), t.plugOutline_enabledSE[c] && (Z(e, n.plugOutline_plugSE, c, l, r.apl_plugOutline_plugSE) && (e.plugOutlineFaceSE[c].href.baseVal = e.plugMaskShapeSE[c].href.baseVal = e.plugOutlineMaskShapeSE[c].href.baseVal = "#" + u.elmId, [e.plugMaskSE[c], e.plugOutlineMaskSE[c]].forEach(function (e) {
          e.x.baseVal.value = u.bBox.left, e.y.baseVal.value = u.bBox.top, e.width.baseVal.value = u.bBox.width, e.height.baseVal.value = u.bBox.height;
        }), o = true), Z(e, n.plugOutline_colorSE, c, i = t.plugOutline_colorSE[c], r.apl_plugOutline_colorSE) && (e.plugOutlineFaceSE[c].style.fill = i, o = true, k && (Y(e, e.lineMaskCaps), Y(e, e.lineOutlineMaskCaps))), Z(e, n.plugOutline_strokeWidthSE, c, i = t.plugOutline_strokeWidthSE[c], r.apl_plugOutline_strokeWidthSE) && (e.plugOutlineMaskShapeSE[c].style.strokeWidth = i + "px", o = true), Z(e, n.plugOutline_inStrokeWidthSE, c, i = t.plugOutline_inStrokeWidthSE[c], r.apl_plugOutline_inStrokeWidthSE) && (e.plugMaskShapeSE[c].style.strokeWidth = i + "px", o = true)));
      }), o;
    }
    function rt(e) {
      var t = e.options;
      return [0, 1].map(function (n) {
        var r = t.anchorSE[n],
          i = e.optionIsAttach.anchorSE[n],
          a = i === false ? null : V[r._id];
        if (i !== false && !a) return null;
        var o = i !== false && a.conf.getStrokeWidth ? a.conf.getStrokeWidth(a, e) : 0,
          s = i !== false && a.conf.getBBoxNest ? a.conf.getBBoxNest(a, e, o) : Oe(r, e.baseWindow);
        return e.curStats.capsMaskAnchor_pathDataSE[n] = i !== false && a.conf.getPathData ? a.conf.getPathData(a, e, o) : He(s), e.curStats.capsMaskAnchor_strokeWidthSE[n] = o, s;
      });
    }
    function it(e, t) {
      var n = e.options,
        r = e.curStats,
        i = e.aplStats,
        a = r.position_socketXYSE,
        o,
        s,
        c,
        l = false;
      function m(e, t) {
        var n = t === u ? {
          x: e.left + e.width / 2,
          y: e.top
        } : t === d ? {
          x: e.right,
          y: e.top + e.height / 2
        } : t === f ? {
          x: e.left + e.width / 2,
          y: e.bottom
        } : {
          x: e.left,
          y: e.top + e.height / 2
        };
        return n.socketId = t, n;
      }
      function b(e) {
        return {
          x: e.x,
          y: e.y
        };
      }
      function x(e, t) {
        return e.x !== t.x || e.y !== t.y || e.socketId !== t.socketId;
      }
      function S(e, t) {
        var n = e == null ? "auto" : Array.isArray(e) ? "array" : "number";
        return n === (t == null ? "auto" : Array.isArray(t) ? "array" : "number") ? n === "array" ? e[0] !== t[0] || e[1] !== t[1] : e !== t : true;
      }
      if (r.position_path = n.path, r.position_lineStrokeWidth = r.line_strokeWidth, r.position_socketGravitySE = o = W(n.socketGravitySE), s = t || rt(e), !s[0] || !s[1]) return false;
      if (function () {
        var e,
          t = -1,
          r,
          i;
        n.socketSE[0] && n.socketSE[1] ? (a[0] = m(s[0], n.socketSE[0]), a[1] = m(s[1], n.socketSE[1])) : (!n.socketSE[0] && !n.socketSE[1] ? (e = C.map(function (e) {
          return m(s[1], e);
        }), C.map(function (e) {
          return m(s[0], e);
        }).forEach(function (n) {
          e.forEach(function (e) {
            var r = K(n, e);
            (r < t || t === -1) && (a[0] = n, a[1] = e, t = r);
          });
        })) : (n.socketSE[0] ? (r = 0, i = 1) : (r = 1, i = 0), a[r] = m(s[r], n.socketSE[r]), e = C.map(function (e) {
          return m(s[i], e);
        }), e.forEach(function (e) {
          var n = K(e, a[r]);
          (n < t || t === -1) && (a[i] = e, t = n);
        })), [0, 1].forEach(function (e) {
          var t, r;
          n.socketSE[e] || (!s[e].width && !s[e].height ? (t = a[+!e].x - s[e].left, r = a[+!e].y - s[e].top, a[e].socketId = Math.abs(t) >= Math.abs(r) ? t >= 0 ? d : p : r >= 0 ? f : u) : !s[e].width && (a[e].socketId === p || a[e].socketId === d) ? a[e].socketId = a[+!e].x - s[e].left >= 0 ? d : p : !s[e].height && (a[e].socketId === u || a[e].socketId === f) && (a[e].socketId = a[+!e].y - s[e].top >= 0 ? f : u));
        }));
      }(), r.position_path !== i.position_path || r.position_lineStrokeWidth !== i.position_lineStrokeWidth || [0, 1].some(function (e) {
        return r.position_plugOverheadSE[e] !== i.position_plugOverheadSE[e] || x(a[e], i.position_socketXYSE[e]) || S(o[e], i.position_socketGravitySE[e]);
      })) {
        switch (e.pathList.baseVal = c = [], e.pathList.animVal = null, r.position_path) {
          case h:
            c.push([b(a[0]), b(a[1])]);
            break;
          case g:
            (function () {
              var e = ce * (typeof o[0] == "number" && o[0] > 0 || typeof o[1] == "number" && o[1] > 0 ? -1 : 1),
                t = Math.atan2(a[1].y - a[0].y, a[1].x - a[0].x),
                n = -t + e,
                r = Math.PI - t - e,
                i = K(a[0], a[1]) / Math.sqrt(2) * se,
                s = {
                  x: a[0].x + Math.cos(n) * i,
                  y: a[0].y + Math.sin(n) * i * -1
                },
                l = {
                  x: a[1].x + Math.cos(r) * i,
                  y: a[1].y + Math.sin(r) * i * -1
                };
              c.push([b(a[0]), s, l, b(a[1])]);
            })();
            break;
          case _:
          case v:
            (function (e) {
              var t = [],
                n = [];
              a.forEach(function (i, o) {
                var s = e[o],
                  c,
                  l,
                  p,
                  m,
                  h;
                Array.isArray(s) ? c = {
                  x: s[0],
                  y: s[1]
                } : typeof s == "number" ? c = i.socketId === u ? {
                  x: 0,
                  y: -s
                } : i.socketId === d ? {
                  x: s,
                  y: 0
                } : i.socketId === f ? {
                  x: 0,
                  y: s
                } : {
                  x: -s,
                  y: 0
                } : (l = a[+!o], p = r.position_plugOverheadSE[o], m = p > 0 ? ie + (p > ae ? (p - ae) * oe : 0) : te + (r.position_lineStrokeWidth > ne ? (r.position_lineStrokeWidth - ne) * re : 0), i.socketId === u ? (h = (i.y - l.y) / 2, h < m && (h = m), c = {
                  x: 0,
                  y: -h
                }) : i.socketId === d ? (h = (l.x - i.x) / 2, h < m && (h = m), c = {
                  x: h,
                  y: 0
                }) : i.socketId === f ? (h = (l.y - i.y) / 2, h < m && (h = m), c = {
                  x: 0,
                  y: h
                }) : (h = (i.x - l.x) / 2, h < m && (h = m), c = {
                  x: -h,
                  y: 0
                })), t[o] = i.x + c.x, n[o] = i.y + c.y;
              }), c.push([b(a[0]), {
                x: t[0],
                y: n[0]
              }, {
                x: t[1],
                y: n[1]
              }, b(a[1])]);
            })([o[0], r.position_path === v ? 0 : o[1]]);
            break;
          case y:
            (function () {
              var e = [[], []],
                t = [],
                n;
              function r(e) {
                return e === 1 ? 3 : e === 2 ? 4 : e === 3 ? 1 : 2;
              }
              function i(e) {
                return e === 2 || e === 4 ? "x" : "y";
              }
              function s(e, t, n) {
                var i = {
                  x: e.x,
                  y: e.y
                };
                if (n) {
                  if (n === r(e.dirId)) throw Error("Invalid dirId: " + n);
                  i.dirId = n;
                } else i.dirId = e.dirId;
                return i.dirId === 1 ? i.y -= t : i.dirId === 2 ? i.x += t : i.dirId === 3 ? i.y += t : i.x -= t, i;
              }
              function l(e, t) {
                return t.dirId === 1 ? e.y <= t.y : t.dirId === 2 ? e.x >= t.x : t.dirId === 3 ? e.y >= t.y : e.x <= t.x;
              }
              function u(e, t) {
                return t.dirId === 1 || t.dirId === 3 ? e.x === t.x : e.y === t.y;
              }
              function d(e) {
                return e[0] ? {
                  contain: 0,
                  notContain: 1
                } : {
                  contain: 1,
                  notContain: 0
                };
              }
              function f(e, t, n) {
                return Math.abs(t[n] - e[n]);
              }
              function p(e, t, n) {
                return n === "x" ? e.x < t.x ? 2 : 4 : e.y < t.y ? 3 : 1;
              }
              function m() {
                var n = [l(t[1], t[0]), l(t[0], t[1])],
                  r = [i(t[0].dirId), i(t[1].dirId)],
                  a,
                  o,
                  c,
                  m;
                if (r[0] === r[1]) {
                  if (n[0] && n[1]) return u(t[1], t[0]) || (t[0][r[0]] === t[1][r[1]] ? (e[0].push(t[0]), e[1].push(t[1])) : (a = t[0][r[0]] + (t[1][r[1]] - t[0][r[0]]) / 2, e[0].push(s(t[0], Math.abs(a - t[0][r[0]]))), e[1].push(s(t[1], Math.abs(a - t[1][r[1]]))))), false;
                  n[0] === n[1] ? (c = f(t[0], t[1], r[0] === "x" ? "y" : "x"), e.forEach(function (e, n) {
                    var i = +(n === 0);
                    e.push(t[n]), t[n] = s(t[n], E, c >= E * 2 ? p(t[n], t[i], r[n] === "x" ? "y" : "x") : r[n] === "x" ? 3 : 2);
                  })) : (o = d(n), c = f(t[o.notContain], t[o.contain], r[o.notContain]), c < E && (t[o.notContain] = s(t[o.notContain], E - c)), e[o.notContain].push(t[o.notContain]), t[o.notContain] = s(t[o.notContain], E, u(t[o.contain], t[o.notContain]) ? r[o.notContain] === "x" ? 3 : 2 : p(t[o.notContain], t[o.contain], r[o.notContain] === "x" ? "y" : "x")));
                } else if (n[0] && n[1]) return u(t[1], t[0]) ? e[1].push(t[1]) : u(t[0], t[1]) ? e[0].push(t[0]) : e[0].push(r[0] === "x" ? {
                  x: t[1].x,
                  y: t[0].y
                } : {
                  x: t[0].x,
                  y: t[1].y
                }), false;else n[0] === n[1] ? (m = [{
                  x: t[0].x,
                  y: t[0].y
                }, {
                  x: t[1].x,
                  y: t[1].y
                }], e.forEach(function (e, n) {
                  var i = +(n === 0),
                    a = f(m[n], m[i], r[n]);
                  a < E && (t[n] = s(t[n], E - a)), e.push(t[n]), t[n] = s(t[n], E, p(t[n], t[i], r[i]));
                })) : (o = d(n), e[o.notContain].push(t[o.notContain]), t[o.notContain] = s(t[o.notContain], E, f(t[o.notContain], t[o.contain], r[o.contain]) >= E ? p(t[o.notContain], t[o.contain], r[o.contain]) : t[o.contain].dirId));
                return true;
              }
              for (a.forEach(function (n, i) {
                var a = b(n),
                  c = o[i];
                ((function (e) {
                  a.dirId = e[0], c = e[1];
                }))(Array.isArray(c) ? c[0] < 0 ? [4, -c[0]] : c[0] > 0 ? [2, c[0]] : c[1] < 0 ? [1, -c[1]] : c[1] > 0 ? [3, c[1]] : [n.socketId, 0] : typeof c == "number" ? c >= 0 ? [n.socketId, c] : [r(n.socketId), -c] : [n.socketId, E]), e[i].push(a), t[i] = s(a, c);
              }); m(););
              e[1].reverse(), e[0].concat(e[1]).forEach(function (e, t) {
                var r = {
                  x: e.x,
                  y: e.y
                };
                t > 0 && c.push([n, r]), n = r;
              });
            })();
            break;
        }
        ((function () {
          var e = [];
          r.position_plugOverheadSE.forEach(function (t, n) {
            var r = !n,
              i,
              o,
              l,
              f,
              m,
              h,
              g,
              _,
              v,
              y,
              b;
            t > 0 ? (i = c[o = r ? 0 : c.length - 1], i.length === 2 ? (e[o] = e[o] || K.apply(null, i), e[o] > T && (e[o] - t < T && (t = e[o] - T), l = Ae(i[0], i[1], (r ? t : e[o] - t) / e[o]), c[o] = r ? [l, i[1]] : [i[0], l], e[o] -= t)) : (e[o] = e[o] || Pe.apply(null, i), e[o] > T && (e[o] - t < T && (t = e[o] - T), l = Ne(i[0], i[1], i[2], i[3], Fe(i[0], i[1], i[2], i[3], r ? t : e[o] - t)), r ? (f = i[0], m = l.toP1) : (f = i[3], m = l.fromP2), h = Math.atan2(f.y - l.y, l.x - f.x), g = K(l, m), l.x = f.x + Math.cos(h) * t, l.y = f.y + Math.sin(h) * t * -1, m.x = l.x + Math.cos(h) * g, m.y = l.y + Math.sin(h) * g * -1, c[o] = r ? [l, l.toP1, l.toP2, i[3]] : [i[0], l.fromP1, l.fromP2, l], e[o] = null))) : t < 0 && (i = c[o = r ? 0 : c.length - 1], _ = a[n].socketId, v = _ === p || _ === d ? "x" : "y", b = -s[n][v === "x" ? "width" : "height"], t < b && (t = b), y = t * (_ === p || _ === u ? -1 : 1), i.length === 2 ? i[r ? 0 : i.length - 1][v] += y : (r ? [0, 1] : [i.length - 2, i.length - 1]).forEach(function (e) {
              i[e][v] += y;
            }), e[o] = null);
          });
        }))(), i.position_socketXYSE = W(a), i.position_plugOverheadSE = W(r.position_plugOverheadSE), i.position_path = r.position_path, i.position_lineStrokeWidth = r.position_lineStrokeWidth, i.position_socketGravitySE = W(o), l = true, e.events.apl_position && e.events.apl_position.forEach(function (t) {
          t(e, c);
        });
      }
      return l;
    }
    function at(e) {
      var t = e.curStats,
        n = e.aplStats,
        r = e.pathList.animVal || e.pathList.baseVal,
        i,
        a = t.path_edge,
        o = false;
      return r && (a.x1 = a.x2 = r[0][0].x, a.y1 = a.y2 = r[0][0].y, t.path_pathData = i = Re(r, function (e) {
        e.x < a.x1 && (a.x1 = e.x), e.y < a.y1 && (a.y1 = e.y), e.x > a.x2 && (a.x2 = e.x), e.y > a.y2 && (a.y2 = e.y);
      }), Ve(i, n.path_pathData) && (e.linePath.setPathData(i), n.path_pathData = i, o = true, k ? (Y(e, e.plugsFace), Y(e, e.lineMaskCaps)) : A && Y(e, e.linePath), e.events.apl_path && e.events.apl_path.forEach(function (t) {
        t(e, i);
      }))), o;
    }
    function ot(e) {
      var t = e.curStats,
        n = e.aplStats,
        r = t.path_edge,
        i,
        a,
        o = t.viewBox_bBox,
        s = n.viewBox_bBox,
        c = e.svg.viewBox.baseVal,
        l = e.svg.style,
        u = false;
      return i = Math.max(t.line_strokeWidth / 2, t.viewBox_plugBCircleSE[0] || 0, t.viewBox_plugBCircleSE[1] || 0), a = {
        x1: r.x1 - i,
        y1: r.y1 - i,
        x2: r.x2 + i,
        y2: r.y2 + i
      }, e.events.new_edge4viewBox && e.events.new_edge4viewBox.forEach(function (t) {
        t(e, a);
      }), o.x = t.lineMask_x = t.lineOutlineMask_x = t.maskBGRect_x = a.x1, o.y = t.lineMask_y = t.lineOutlineMask_y = t.maskBGRect_y = a.y1, o.width = a.x2 - a.x1, o.height = a.y2 - a.y1, ["x", "y", "width", "height"].forEach(function (t) {
        var n;
        (n = o[t]) !== s[t] && (c[t] = s[t] = n, l[ee[t]] = n + (t === "x" || t === "y" ? e.bodyOffset[t] : 0) + "px", u = true);
      }), u;
    }
    function st(e) {
      var t = e.curStats,
        n = e.aplStats,
        r,
        i,
        o = false;
      return t.plug_enabled ? [0, 1].forEach(function (e) {
        t.capsMaskMarker_enabledSE[e] = t.plug_enabledSE[e] && t.plug_colorTraSE[e] || t.plugOutline_enabledSE[e] && t.plugOutline_colorTraSE[e];
      }) : t.capsMaskMarker_enabledSE[0] = t.capsMaskMarker_enabledSE[1] = false, t.capsMaskMarker_enabled = t.capsMaskMarker_enabledSE[0] || t.capsMaskMarker_enabledSE[1], t.lineMask_outlineMode = t.lineOutline_enabled, t.caps_enabled = t.capsMaskMarker_enabled || t.capsMaskAnchor_enabledSE[0] || t.capsMaskAnchor_enabledSE[1], t.lineMask_enabled = t.caps_enabled || t.lineMask_outlineMode, r = t.lineMask_enabled && !t.lineMask_outlineMode, (r || t.lineOutline_enabled) && ["x", "y"].forEach(function (r) {
        var a = "maskBGRect_" + r;
        Z(e, n, a, i = t[a]) && (e.maskBGRect[r].baseVal.value = i, o = true);
      }), Z(e, n, "lineMask_enabled", i = t.lineMask_enabled) && (e.lineFace.style.mask = i ? "url(#" + e.lineMaskId + ")" : "none", o = true, M && Y(e, e.lineMask)), t.lineMask_enabled && (Z(e, n, "lineMask_outlineMode", i = t.lineMask_outlineMode) && (i ? (e.lineMaskBG.style.display = "none", e.lineMaskShape.style.display = "inline") : (e.lineMaskBG.style.display = "inline", e.lineMaskShape.style.display = "none"), o = true), ["x", "y"].forEach(function (r) {
        var a = "lineMask_" + r;
        Z(e, n, a, i = t[a]) && (e.lineMask[r].baseVal.value = i, o = true);
      }), Z(e, n, "caps_enabled", i = t.caps_enabled) && (e.lineMaskCaps.style.display = e.lineOutlineMaskCaps.style.display = i ? "inline" : "none", o = true, M && Y(e, e.capsMaskLine)), t.caps_enabled && ([0, 1].forEach(function (r) {
        var a;
        Z(e, n.capsMaskAnchor_enabledSE, r, i = t.capsMaskAnchor_enabledSE[r]) && (e.capsMaskAnchorSE[r].style.display = i ? "inline" : "none", o = true, M && Y(e, e.lineMask)), t.capsMaskAnchor_enabledSE[r] && (Ve(a = t.capsMaskAnchor_pathDataSE[r], n.capsMaskAnchor_pathDataSE[r]) && (e.capsMaskAnchorSE[r].setPathData(a), n.capsMaskAnchor_pathDataSE[r] = a, o = true), Z(e, n.capsMaskAnchor_strokeWidthSE, r, i = t.capsMaskAnchor_strokeWidthSE[r]) && (e.capsMaskAnchorSE[r].style.strokeWidth = i + "px", o = true));
      }), Z(e, n, "capsMaskMarker_enabled", i = t.capsMaskMarker_enabled) && (e.capsMaskLine.style.display = i ? "inline" : "none", o = true), t.capsMaskMarker_enabled && [0, 1].forEach(function (r) {
        var c = t.capsMaskMarker_plugSE[r],
          l = c === x ? null : a[s[c]],
          u = qe(r, l);
        Z(e, n.capsMaskMarker_enabledSE, r, i = t.capsMaskMarker_enabledSE[r]) && (e.capsMaskLine.style[u.prop] = i ? "url(#" + e.lineMaskMarkerIdSE[r] + ")" : "none", o = true), t.capsMaskMarker_enabledSE[r] && (Z(e, n.capsMaskMarker_plugSE, r, c) && (e.capsMaskMarkerShapeSE[r].href.baseVal = "#" + l.elmId, Ke(e, e.capsMaskMarkerSE[r], u.orient, l.bBox, e.svg, e.capsMaskMarkerShapeSE[r], e.capsMaskLine), o = true, A && (Y(e, e.capsMaskLine), Y(e, e.lineFace))), ["markerWidth", "markerHeight"].forEach(function (a) {
          var s = "capsMaskMarker_" + a + "SE";
          Z(e, n[s], r, i = t[s][r]) && (e.capsMaskMarkerSE[r][a].baseVal.value = i, o = true);
        }));
      }))), t.lineOutline_enabled && ["x", "y"].forEach(function (r) {
        var a = "lineOutlineMask_" + r;
        Z(e, n, a, i = t[a]) && (e.lineOutlineMask[r].baseVal.value = i, o = true);
      }), o;
    }
    function ct(e) {
      var t = e.svgContainer || e.baseWindow.document.body,
        n = e.options.svgContainer || e.baseWindow.document.body,
        r = false;
      return e.svg && n !== t && (t.removeChild(e.svg), n.appendChild(e.svg), e.svgContainer = e.options.svgContainer || null, r = true), r;
    }
    function lt(e, t) {
      t !== e.isShown && (!!t != !!e.isShown && (e.svg.style.visibility = t ? "" : "hidden"), e.isShown = t, e.events && e.events.svgShow && e.events.svgShow.forEach(function (n) {
        n(e, t);
      }));
    }
    function ut(e) {
      var t = e.curStats,
        n = e.aplStats,
        r;
      Object.keys(I).forEach(function (i) {
        var a = I[i],
          o = i + "_enabled",
          s = i + "_options",
          c = t[s];
        Z(e, n, o, r = t[o]) ? (r && (n[s] = W(c)), a[r ? "init" : "remove"](e)) : r && U(c, n[s]) && (a.remove(e), n[o] = true, n[s] = W(c), a.init(e));
      });
    }
    function Q(e, t, n) {
      var r = {};
      t.line && (r.line = Qe(e)), (t.plug || r.line) && (r.plug = $e(e)), (t.lineOutline || r.line) && (r.lineOutline = et(e)), (t.plugOutline || r.line || r.plug || r.lineOutline) && (r.plugOutline = tt(e)), (t.faces || r.line || r.plug || r.lineOutline || r.plugOutline) && (r.faces = nt(e)), (t.position || r.line || r.plug) && (r.position = it(e, n)), (t.path || r.position) && (r.path = at(e)), r.viewBox = ot(e), r.mask = st(e), t.svgContainer && (r.svgContainer = ct(e)), t.effect && ut(e), (j || M) && r.line && !r.path && Y(e, e.lineShape), j && r.plug && !r.line && Y(e, e.plugsFace), Ge(e);
    }
    function dt(t, n) {
      return {
        duration: F(t.duration) && t.duration > 0 ? t.duration : n.duration,
        timing: e.validTiming(t.timing) ? t.timing : W(n.timing)
      };
    }
    function ft(e, t, n, r) {
      var i = e.curStats,
        a = e.aplStats,
        o = {},
        s;
      function c() {
        ["show_on", "show_effect", "show_animOptions"].forEach(function (e) {
          a[e] = i[e];
        });
      }
      i.show_on = t, n && L[n] && (i.show_effect = n, i.show_animOptions = dt(P(r) ? r : {}, L[n].defaultAnimOptions)), o.show_on = i.show_on !== a.show_on, o.show_effect = i.show_effect !== a.show_effect, o.show_animOptions = U(i.show_animOptions, a.show_animOptions), o.show_effect || o.show_animOptions ? i.show_inAnim ? (s = o.show_effect ? L[a.show_effect].stop(e, true, true) : L[a.show_effect].stop(e), c(), L[a.show_effect].init(e, s)) : o.show_on && (a.show_effect && o.show_effect && L[a.show_effect].stop(e, true, true), c(), L[a.show_effect].init(e)) : o.show_on && (c(), L[a.show_effect].start(e));
    }
    function pt(e, t, n) {
      var r = {
        props: e,
        optionName: n
      };
      return e.attachments.indexOf(t) < 0 && (!t.conf.bind || t.conf.bind(t, r)) ? (e.attachments.push(t), t.boundTargets.push(r), true) : false;
    }
    function mt(e, t, n) {
      var r = e.attachments.indexOf(t);
      r > -1 && e.attachments.splice(r, 1), t.boundTargets.some(function (n, i) {
        return n.props === e ? (t.conf.unbind && t.conf.unbind(t, n), r = i, true) : false;
      }) && (t.boundTargets.splice(r, 1), n || Ue(function () {
        t.boundTargets.length || he(t);
      }));
    }
    function ht(e, t) {
      var n = e.options,
        r,
        i,
        a = {};
      function s(e, t, n, r, i) {
        var a = {};
        return n ? r == null ? (a.container = e, a.key = n) : (a.container = e[n], a.key = r) : (a.container = e, a.key = t), a.default = i, a.acceptsAuto = a.default == null, a;
      }
      function c(e, t, n, r, i, a, o) {
        var c = s(e, n, i, a, o),
          l,
          u,
          d;
        return t[n] != null && (u = (t[n] + "").toLowerCase()) && (c.acceptsAuto && u === w || (d = r[u])) && d !== c.container[c.key] && (c.container[c.key] = d, l = true), c.container[c.key] == null && !c.acceptsAuto && (c.container[c.key] = c.default, l = true), l;
      }
      function l(e, t, n, r, i, a, o, c, l) {
        var u = s(e, n, i, a, o),
          d,
          f;
        function p(e, t) {
          return t === "number" ? F(e) : typeof e === t;
        }
        if (!r) {
          if (u.default == null) throw Error("Invalid `type`: " + n);
          r = typeof u.default;
        }
        return t[n] != null && (u.acceptsAuto && (t[n] + "").toLowerCase() === w || p(f = t[n], r) && ((f = l && r === "string" && f ? f.trim() : f) || true) && (!c || c(f))) && f !== u.container[u.key] && (u.container[u.key] = f, d = true), u.container[u.key] == null && !u.acceptsAuto && (u.container[u.key] = u.default, d = true), d;
      }
      if (t = t || {}, ["start", "end"].forEach(function (r, o) {
        var s = t[r],
          c = false;
        if (s && (G(s) || (c = me(s, "anchor"))) && s !== n.anchorSE[o]) {
          if (e.optionIsAttach.anchorSE[o] !== false && mt(e, V[n.anchorSE[o]._id]), c && !pt(e, V[s._id], r)) throw Error("Can't bind attachment");
          n.anchorSE[o] = s, e.optionIsAttach.anchorSE[o] = c, i = a.position = true;
        }
      }), !n.anchorSE[0] || !n.anchorSE[1] || n.anchorSE[0] === n.anchorSE[1]) throw Error("`start` and `end` are required.");
      ["svgContainer"].forEach(function (e, r) {
        var i = t[e];
        i && G(i) && i !== n[e] && (n[e] = i, a[e] = true);
      }), i && (r = ke(e.optionIsAttach.anchorSE[0] === false ? n.anchorSE[0] : V[n.anchorSE[0]._id].element, e.optionIsAttach.anchorSE[1] === false ? n.anchorSE[1] : V[n.anchorSE[1]._id].element)) !== e.baseWindow && (Ze(e, r), a.line = a.plug = a.lineOutline = a.plugOutline = a.faces = a.effect = true), a.position = c(n, t, "path", b, null, null, N.path) || a.position, a.position = c(n, t, "startSocket", m, "socketSE", 0) || a.position, a.position = c(n, t, "endSocket", m, "socketSE", 1) || a.position, [t.startSocketGravity, t.endSocketGravity].forEach(function (e, t) {
        function r(e, t) {
          return e.length === t.length && e.every(function (e, n) {
            return e === t[n];
          });
        }
        var i = false;
        e != null && (Array.isArray(e) ? F(e[0]) && F(e[1]) && (i = [e[0], e[1]], Array.isArray(n.socketGravitySE[t]) && r(i, n.socketGravitySE[t]) && (i = false)) : ((e + "").toLowerCase() === w ? i = null : F(e) && e >= 0 && (i = e), i === n.socketGravitySE[t] && (i = false)), i !== false && (n.socketGravitySE[t] = i, a.position = true));
      }), a.line = l(n, t, "color", null, "lineColor", null, N.lineColor, null, true) || a.line, a.line = l(n, t, "size", null, "lineSize", null, N.lineSize, function (e) {
        return e > 0;
      }) || a.line, ["startPlug", "endPlug"].forEach(function (e, r) {
        a.plug = c(n, t, e, o, "plugSE", r, N.plugSE[r]) || a.plug, a.plug = l(n, t, e + "Color", "string", "plugColorSE", r, null, null, true) || a.plug, a.plug = l(n, t, e + "Size", null, "plugSizeSE", r, N.plugSizeSE[r], function (e) {
          return e > 0;
        }) || a.plug;
      }), a.lineOutline = l(n, t, "outline", null, "lineOutlineEnabled", null, N.lineOutlineEnabled) || a.lineOutline, a.lineOutline = l(n, t, "outlineColor", null, "lineOutlineColor", null, N.lineOutlineColor, null, true) || a.lineOutline, a.lineOutline = l(n, t, "outlineSize", null, "lineOutlineSize", null, N.lineOutlineSize, function (e) {
        return e > 0 && e <= .48;
      }) || a.lineOutline, ["startPlugOutline", "endPlugOutline"].forEach(function (e, r) {
        a.plugOutline = l(n, t, e, null, "plugOutlineEnabledSE", r, N.plugOutlineEnabledSE[r]) || a.plugOutline, a.plugOutline = l(n, t, e + "Color", "string", "plugOutlineColorSE", r, null, null, true) || a.plugOutline, a.plugOutline = l(n, t, e + "Size", null, "plugOutlineSizeSE", r, N.plugOutlineSizeSE[r], function (e) {
          return e >= 1;
        }) || a.plugOutline;
      }), ["startLabel", "endLabel", "middleLabel"].forEach(function (r, i) {
        var a = t[r],
          o = n.labelSEM[i] && !e.optionIsAttach.labelSEM[i] ? V[n.labelSEM[i]._id].text : n.labelSEM[i],
          s = false,
          c,
          l,
          u;
        if ((c = typeof a == "string") && (a = a.trim()), (c || a && (s = me(a, "label"))) && a !== o) {
          if (n.labelSEM[i] && (mt(e, V[n.labelSEM[i]._id]), n.labelSEM[i] = ""), a) {
            if (s ? (u = a, l = V[u._id], l.boundTargets.slice().forEach(function (e) {
              l.conf.removeOption(l, e);
            })) : u = new z(R.captionLabel, [a]), !pt(e, V[u._id], r)) throw Error("Can't bind attachment");
            n.labelSEM[i] = u;
          }
          e.optionIsAttach.labelSEM[i] = s;
        }
      }), Object.keys(I).forEach(function (r) {
        var i = I[r],
          o = r + "_enabled",
          s = r + "_options",
          u,
          d;
        function f(e) {
          var t = {};
          return i.optionsConf.forEach(function (n) {
            var r = n[0],
              i = n[3];
            n[4] != null && !t[i] && (t[i] = []), (typeof r == "function" ? r : r === "id" ? c : l).apply(null, [t, e].concat(n.slice(1)));
          }), t;
        }
        function p(t) {
          var n,
            a = r + "_animOptions";
          return t.hasOwnProperty("animation") ? P(t.animation) ? n = e.curStats[a] = dt(t.animation, i.defaultAnimOptions) : (n = !!t.animation, e.curStats[a] = n ? dt({}, i.defaultAnimOptions) : null) : (n = !!i.defaultEnabled, e.curStats[a] = n ? dt({}, i.defaultAnimOptions) : null), n;
        }
        t.hasOwnProperty(r) && (u = t[r], P(u) ? (e.curStats[o] = true, d = e.curStats[s] = f(u), i.anim && (e.curStats[s].animation = p(u))) : (d = e.curStats[o] = !!u, d && (e.curStats[s] = f({}), i.anim && (e.curStats[s].animation = p({})))), U(d, n[r]) && (n[r] = d, a.effect = true));
      }), Q(e, a);
    }
    I = {
      dash: {
        stats: {
          dash_len: {},
          dash_gap: {},
          dash_maxOffset: {}
        },
        anim: true,
        defaultAnimOptions: {
          duration: 1e3,
          timing: "linear"
        },
        optionsConf: [["type", "len", "number", null, null, null, function (e) {
          return e > 0;
        }], ["type", "gap", "number", null, null, null, function (e) {
          return e > 0;
        }]],
        init: function init(e) {
          q(e, "apl_line_strokeWidth", I.dash.update), e.lineFace.style.strokeDashoffset = 0, I.dash.update(e);
        },
        remove: function remove(t) {
          var n = t.curStats;
          J(t, "apl_line_strokeWidth", I.dash.update), n.dash_animId && (e.remove(n.dash_animId), n.dash_animId = null), t.lineFace.style.strokeDasharray = "none", t.lineFace.style.strokeDashoffset = 0, X(t.aplStats, I.dash.stats);
        },
        update: function update(t) {
          var n = t.curStats,
            r = t.aplStats,
            i = r.dash_options,
            a = false,
            o;
          n.dash_len = i.len || r.line_strokeWidth * 2, n.dash_gap = i.gap || r.line_strokeWidth, n.dash_maxOffset = n.dash_len + n.dash_gap, a = Z(t, r, "dash_len", n.dash_len) || a, a = Z(t, r, "dash_gap", n.dash_gap) || a, a && (t.lineFace.style.strokeDasharray = r.dash_len + "," + r.dash_gap), n.dash_animOptions ? (a = Z(t, r, "dash_maxOffset", n.dash_maxOffset), r.dash_animOptions && (a || U(n.dash_animOptions, r.dash_animOptions)) && (n.dash_animId && (o = e.stop(n.dash_animId), e.remove(n.dash_animId)), r.dash_animOptions = null), r.dash_animOptions || (n.dash_animId = e.add(function (e) {
            return (1 - e) * r.dash_maxOffset + "px";
          }, function (e) {
            t.lineFace.style.strokeDashoffset = e;
          }, n.dash_animOptions.duration, 0, n.dash_animOptions.timing, false, o), r.dash_animOptions = W(n.dash_animOptions))) : r.dash_animOptions && (n.dash_animId && (e.remove(n.dash_animId), n.dash_animId = null), t.lineFace.style.strokeDashoffset = 0, r.dash_animOptions = null);
        }
      },
      gradient: {
        stats: {
          gradient_colorSE: {
            hasSE: true
          },
          gradient_pointSE: {
            hasSE: true,
            hasProps: true
          }
        },
        optionsConf: [["type", "startColor", "string", "colorSE", 0, null, null, true], ["type", "endColor", "string", "colorSE", 1, null, null, true]],
        init: function init(e) {
          var t = e.baseWindow.document,
            n = e.defs,
            r,
            i = l + "-" + e._id + "-gradient";
          e.efc_gradient_gradient = r = n.appendChild(t.createElementNS(D, "linearGradient")), r.id = i, r.gradientUnits.baseVal = SVGUnitTypes.SVG_UNIT_TYPE_USERSPACEONUSE, [r.x1, r.y1, r.x2, r.y2].forEach(function (e) {
            e.baseVal.newValueSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_PX, 0);
          }), e.efc_gradient_stopSE = [0, 1].map(function (n) {
            var r = e.efc_gradient_gradient.appendChild(t.createElementNS(D, "stop"));
            try {
              r.offset.baseVal = n;
            } catch (e) {
              if (e.code === DOMException.NO_MODIFICATION_ALLOWED_ERR) r.setAttribute("offset", n);else throw e;
            }
            return r;
          }), q(e, "cur_plug_colorSE", I.gradient.update), q(e, "apl_path", I.gradient.update), e.curStats.line_altColor = true, e.lineFace.style.stroke = "url(#" + i + ")", I.gradient.update(e);
        },
        remove: function remove(e) {
          e.efc_gradient_gradient && (e.defs.removeChild(e.efc_gradient_gradient), e.efc_gradient_gradient = e.efc_gradient_stopSE = null), J(e, "cur_plug_colorSE", I.gradient.update), J(e, "apl_path", I.gradient.update), e.curStats.line_altColor = false, e.lineFace.style.stroke = e.curStats.line_color, X(e.aplStats, I.gradient.stats);
        },
        update: function update(e) {
          var t = e.curStats,
            n = e.aplStats,
            r = n.gradient_options,
            i = e.pathList.animVal || e.pathList.baseVal,
            a,
            o;
          [0, 1].forEach(function (e) {
            t.gradient_colorSE[e] = r.colorSE[e] || t.plug_colorSE[e];
          }), o = i[0][0], t.gradient_pointSE[0] = {
            x: o.x,
            y: o.y
          }, a = i[i.length - 1], o = a[a.length - 1], t.gradient_pointSE[1] = {
            x: o.x,
            y: o.y
          }, [0, 1].forEach(function (r) {
            var i;
            Z(e, n.gradient_colorSE, r, i = t.gradient_colorSE[r]) && (M ? (i = Ce(i), e.efc_gradient_stopSE[r].style.stopColor = i[1], e.efc_gradient_stopSE[r].style.stopOpacity = i[0]) : e.efc_gradient_stopSE[r].style.stopColor = i), ["x", "y"].forEach(function (a) {
              (i = t.gradient_pointSE[r][a]) !== n.gradient_pointSE[r][a] && (e.efc_gradient_gradient[a + (r + 1)].baseVal.value = n.gradient_pointSE[r][a] = i);
            });
          });
        }
      },
      dropShadow: {
        stats: {
          dropShadow_dx: {},
          dropShadow_dy: {},
          dropShadow_blur: {},
          dropShadow_color: {},
          dropShadow_opacity: {},
          dropShadow_x: {},
          dropShadow_y: {}
        },
        optionsConf: [["type", "dx", null, null, null, 2], ["type", "dy", null, null, null, 4], ["type", "blur", null, null, null, 3, function (e) {
          return e >= 0;
        }], ["type", "color", null, null, null, "#000", null, true], ["type", "opacity", null, null, null, .8, function (e) {
          return e >= 0 && e <= 1;
        }]],
        init: function init(e) {
          var t = e.baseWindow.document,
            n = e.defs,
            r = l + "-" + e._id + "-dropShadow",
            i = Je(t, r);
          ["elmFilter", "elmOffset", "elmBlur", "styleFlood", "elmsAppend"].forEach(function (t) {
            e["efc_dropShadow_" + t] = i[t];
          }), i.elmsAppend.forEach(function (e) {
            n.appendChild(e);
          }), e.face.setAttribute("filter", "url(#" + r + ")"), q(e, "new_edge4viewBox", I.dropShadow.adjustEdge), I.dropShadow.update(e);
        },
        remove: function remove(e) {
          var t = e.defs;
          e.efc_dropShadow_elmsAppend && (e.efc_dropShadow_elmsAppend.forEach(function (e) {
            t.removeChild(e);
          }), e.efc_dropShadow_elmFilter = e.efc_dropShadow_elmOffset = e.efc_dropShadow_elmBlur = e.efc_dropShadow_styleFlood = e.efc_dropShadow_elmsAppend = null), J(e, "new_edge4viewBox", I.dropShadow.adjustEdge), Q(e, {}), e.face.removeAttribute("filter"), X(e.aplStats, I.dropShadow.stats);
        },
        update: function update(e) {
          var t = e.curStats,
            n = e.aplStats,
            r = n.dropShadow_options,
            i,
            a;
          t.dropShadow_dx = i = r.dx, Z(e, n, "dropShadow_dx", i) && (e.efc_dropShadow_elmOffset.dx.baseVal = i, a = true), t.dropShadow_dy = i = r.dy, Z(e, n, "dropShadow_dy", i) && (e.efc_dropShadow_elmOffset.dy.baseVal = i, a = true), t.dropShadow_blur = i = r.blur, Z(e, n, "dropShadow_blur", i) && (e.efc_dropShadow_elmBlur.setStdDeviation(i, i), a = true), a && Q(e, {}), t.dropShadow_color = i = r.color, Z(e, n, "dropShadow_color", i) && (e.efc_dropShadow_styleFlood.floodColor = i), t.dropShadow_opacity = i = r.opacity, Z(e, n, "dropShadow_opacity", i) && (e.efc_dropShadow_styleFlood.floodOpacity = i);
        },
        adjustEdge: function adjustEdge(e, t) {
          var n = e.curStats,
            r = e.aplStats,
            i,
            a;
          n.dropShadow_dx != null && (i = n.dropShadow_blur * 3, a = {
            x1: t.x1 - i + n.dropShadow_dx,
            y1: t.y1 - i + n.dropShadow_dy,
            x2: t.x2 + i + n.dropShadow_dx,
            y2: t.y2 + i + n.dropShadow_dy
          }, a.x1 < t.x1 && (t.x1 = a.x1), a.y1 < t.y1 && (t.y1 = a.y1), a.x2 > t.x2 && (t.x2 = a.x2), a.y2 > t.y2 && (t.y2 = a.y2), ["x", "y"].forEach(function (i) {
            var a = "dropShadow_" + i,
              o;
            n[a] = o = t[i + "1"], Z(e, r, a, o) && (e.efc_dropShadow_elmFilter[i].baseVal.value = o);
          }));
        }
      }
    }, Object.keys(I).forEach(function (e) {
      var t = I[e],
        n = t.stats;
      n[e + "_enabled"] = {
        iniValue: false
      }, n[e + "_options"] = {
        hasProps: true
      }, t.anim && (n[e + "_animOptions"] = {}, n[e + "_animId"] = {});
    }), L = {
      none: {
        defaultAnimOptions: {},
        init: function init(t, n) {
          var r = t.curStats;
          r.show_animId && (e.remove(r.show_animId), r.show_animId = null), L.none.start(t, n);
        },
        start: function start(e, t) {
          L.none.stop(e, true);
        },
        stop: function stop(e, t, n) {
          var r = e.curStats;
          return n = n != null ? n : e.aplStats.show_on, r.show_inAnim = false, t && lt(e, n), +!!n;
        }
      },
      fade: {
        defaultAnimOptions: {
          duration: 300,
          timing: "linear"
        },
        init: function init(t, n) {
          var r = t.curStats,
            i = t.aplStats;
          r.show_animId && e.remove(r.show_animId), r.show_animId = e.add(function (e) {
            return e;
          }, function (e, n) {
            n ? L.fade.stop(t, true) : (t.svg.style.opacity = e + "", k && (Y(t, t.svg), Ge(t)));
          }, i.show_animOptions.duration, 1, i.show_animOptions.timing, null, false), L.fade.start(t, n);
        },
        start: function start(t, n) {
          var r = t.curStats,
            i;
          r.show_inAnim && (i = e.stop(r.show_animId)), lt(t, 1), r.show_inAnim = true, e.start(r.show_animId, !t.aplStats.show_on, n != null ? n : i);
        },
        stop: function stop(t, n, r) {
          var i = t.curStats,
            a;
          return r = r != null ? r : t.aplStats.show_on, a = i.show_inAnim ? e.stop(i.show_animId) : +!!r, i.show_inAnim = false, n && (t.svg.style.opacity = r ? "" : "0", lt(t, r)), a;
        }
      },
      draw: {
        defaultAnimOptions: {
          duration: 500,
          timing: [.58, 0, .42, 1]
        },
        init: function init(t, n) {
          var r = t.curStats,
            i = t.aplStats,
            a = t.pathList.baseVal,
            o = ze(a),
            s = o.segsLen,
            c = o.lenAll;
          r.show_animId && e.remove(r.show_animId), r.show_animId = e.add(function (e) {
            var t,
              n = -1,
              r,
              i,
              o;
            if (e === 0) r = [[a[0][0], a[0][0]]];else if (e === 1) r = a;else {
              for (t = c * e, r = []; t >= s[++n];) r.push(a[n]), t -= s[n];
              t && (i = a[n], i.length === 2 ? r.push([i[0], Ae(i[0], i[1], t / s[n])]) : (o = Ne(i[0], i[1], i[2], i[3], Fe(i[0], i[1], i[2], i[3], t)), r.push([i[0], o.fromP1, o.fromP2, o])));
            }
            return r;
          }, function (e, n) {
            n ? L.draw.stop(t, true) : (t.pathList.animVal = e, Q(t, {
              path: true
            }));
          }, i.show_animOptions.duration, 1, i.show_animOptions.timing, null, false), L.draw.start(t, n);
        },
        start: function start(t, n) {
          var r = t.curStats,
            i;
          r.show_inAnim && (i = e.stop(r.show_animId)), lt(t, 1), r.show_inAnim = true, q(t, "apl_position", L.draw.update), e.start(r.show_animId, !t.aplStats.show_on, n != null ? n : i);
        },
        stop: function stop(t, n, r) {
          var i = t.curStats,
            a;
          return r = r != null ? r : t.aplStats.show_on, a = i.show_inAnim ? e.stop(i.show_animId) : +!!r, i.show_inAnim = false, n && (r ? (t.pathList.animVal = null, Q(t, {
            path: true
          })) : (t.pathList.animVal = [[t.pathList.baseVal[0][0], t.pathList.baseVal[0][0]]], Q(t, {
            path: true
          })), lt(t, r)), a;
        },
        update: function update(e) {
          J(e, "apl_position", L.draw.update), e.curStats.show_inAnim ? L.draw.init(e, L.draw.stop(e)) : e.aplStats.show_animOptions = {};
        }
      }
    };
    function $(e, t, n) {
      var r = {
        options: {
          anchorSE: [],
          socketSE: [],
          socketGravitySE: [],
          plugSE: [],
          plugColorSE: [],
          plugSizeSE: [],
          plugOutlineEnabledSE: [],
          plugOutlineColorSE: [],
          plugOutlineSizeSE: [],
          labelSEM: ["", "", ""]
        },
        optionIsAttach: {
          anchorSE: [false, false],
          labelSEM: [false, false, false]
        },
        curStats: {},
        aplStats: {},
        attachments: [],
        events: {},
        reflowTargets: []
      };
      X(r.curStats, de), X(r.aplStats, de), Object.keys(I).forEach(function (e) {
        var t = I[e].stats;
        X(r.curStats, t), X(r.aplStats, t), r.options[e] = false;
      }), X(r.curStats, fe), X(r.aplStats, fe), r.curStats.show_effect = pe, r.curStats.show_animOptions = W(L[pe].defaultAnimOptions), Object.defineProperty(this, "_id", {
        value: ++ve
      }), r._id = this._id, B[this._id] = r, arguments.length === 1 && (n = e, e = null), n = n || {}, (e || t) && (n = W(n), e && (n.start = e), t && (n.end = t)), r.isShown = r.aplStats.show_on = !n.hide, this.setOptions(n);
    }
    return function () {
      function e(e) {
        return function (t) {
          var n = {};
          n[e] = t, this.setOptions(n);
        };
      }
      [["start", "anchorSE", 0], ["end", "anchorSE", 1], ["color", "lineColor"], ["size", "lineSize"], ["startSocketGravity", "socketGravitySE", 0], ["endSocketGravity", "socketGravitySE", 1], ["startPlugColor", "plugColorSE", 0], ["endPlugColor", "plugColorSE", 1], ["startPlugSize", "plugSizeSE", 0], ["endPlugSize", "plugSizeSE", 1], ["outline", "lineOutlineEnabled"], ["outlineColor", "lineOutlineColor"], ["outlineSize", "lineOutlineSize"], ["startPlugOutline", "plugOutlineEnabledSE", 0], ["endPlugOutline", "plugOutlineEnabledSE", 1], ["startPlugOutlineColor", "plugOutlineColorSE", 0], ["endPlugOutlineColor", "plugOutlineColorSE", 1], ["startPlugOutlineSize", "plugOutlineSizeSE", 0], ["endPlugOutlineSize", "plugOutlineSizeSE", 1]].forEach(function (t) {
        var n = t[0],
          r = t[1],
          i = t[2];
        Object.defineProperty($.prototype, n, {
          get: function get() {
            var e = i == null ? r ? B[this._id].options[r] : B[this._id].options[n] : B[this._id].options[r][i];
            return e == null ? w : W(e);
          },
          set: e(n),
          enumerable: true
        });
      }), [["path", b], ["startSocket", m, "socketSE", 0], ["endSocket", m, "socketSE", 1], ["startPlug", o, "plugSE", 0], ["endPlug", o, "plugSE", 1]].forEach(function (t) {
        var n = t[0],
          r = t[1],
          i = t[2],
          a = t[3];
        Object.defineProperty($.prototype, n, {
          get: function get() {
            var e = a == null ? i ? B[this._id].options[i] : B[this._id].options[n] : B[this._id].options[i][a],
              t;
            return e ? Object.keys(r).some(function (n) {
              return r[n] === e ? (t = n, true) : false;
            }) ? t : /* @__PURE__ */Error("It's broken") : w;
          },
          set: e(n),
          enumerable: true
        });
      }), Object.keys(I).forEach(function (t) {
        var n = I[t];
        function r(e) {
          var t = n.optionsConf.reduce(function (t, n) {
            var r = n[0],
              i = n[1],
              a = n[2],
              o = n[3],
              s = n[4],
              c = s == null ? o ? e[o] : e[i] : e[o][s],
              l;
            return t[i] = r === "id" ? c ? Object.keys(a).some(function (e) {
              return a[e] === c ? (l = e, true) : false;
            }) ? l : /* @__PURE__ */Error("It's broken") : w : c == null ? w : W(c), t;
          }, {});
          return n.anim && (t.animation = W(e.animation)), t;
        }
        Object.defineProperty($.prototype, t, {
          get: function get() {
            var e = B[this._id].options[t];
            return P(e) ? r(e) : e;
          },
          set: e(t),
          enumerable: true
        });
      }), ["startLabel", "endLabel", "middleLabel"].forEach(function (t, n) {
        Object.defineProperty($.prototype, t, {
          get: function get() {
            var e = B[this._id],
              t = e.options;
            return t.labelSEM[n] && !e.optionIsAttach.labelSEM[n] ? V[t.labelSEM[n]._id].text : t.labelSEM[n] || "";
          },
          set: e(t),
          enumerable: true
        });
      });
    }(), $.prototype.setOptions = function (e) {
      return ht(B[this._id], e), this;
    }, $.prototype.position = function () {
      return $.deferPositionUpdate ? this.requestPosition() : (Q(B[this._id], {
        position: true
      }), this);
    }, $.prototype.requestPosition = function () {
      return be.schedule(B[this._id]), this;
    }, $.prototype.remove = function () {
      var t = B[this._id],
        n = t.curStats;
      be.unschedule(t), Object.keys(I).forEach(function (t) {
        var r = t + "_animId";
        n[r] && e.remove(n[r]);
      }), n.show_animId && e.remove(n.show_animId), t.attachments.slice().forEach(function (e) {
        mt(t, e);
      }), t.baseWindow && t.svg && (t.svgContainer || t.baseWindow.document.body).removeChild(t.svg), delete B[this._id];
    }, $.prototype.show = function (e, t) {
      return ft(B[this._id], true, e, t), this;
    }, $.prototype.hide = function (e, t) {
      return ft(B[this._id], false, e, t), this;
    }, he = function he(e) {
      e && V[e._id] && (e.boundTargets.slice().forEach(function (t) {
        mt(t.props, e, true);
      }), e.conf.remove && e.conf.remove(e), delete V[e._id]);
    }, z = function () {
      function e(e, t) {
        var n = {
            conf: e,
            curStats: {},
            aplStats: {},
            boundTargets: []
          },
          r,
          i = {};
        e.argOptions.every(function (e) {
          return t.length && (typeof e.type == "string" ? typeof t[0] === e.type : typeof e.type == "function" && e.type(t[0])) ? (i[e.optionName] = t.shift(), true) : false;
        }), r = t.length && P(t[0]) ? W(t[0]) : {}, Object.keys(i).forEach(function (e) {
          r[e] = i[e];
        }), e.stats && (X(n.curStats, e.stats), X(n.aplStats, e.stats)), Object.defineProperty(this, "_id", {
          value: ++ye
        }), Object.defineProperty(this, "isRemoved", {
          get: function get() {
            return !V[this._id];
          }
        }), n._id = this._id, (!e.init || e.init(n, r)) && (V[this._id] = n);
      }
      return e.prototype.remove = function () {
        var e = this,
          t = V[e._id];
        t && (t.boundTargets.slice().forEach(function (e) {
          t.conf.removeOption(t, e);
        }), Ue(function () {
          var t = V[e._id];
          t && (console.error("LeaderLineAttachment was not removed by removeOption"), he(t));
        }));
      }, e;
    }(), window.LeaderLineAttachment = z, me = function me(e, t) {
      return e instanceof z ? !e.isRemoved && (!t || V[e._id].conf.type === t) || null : false;
    }, R = {
      pointAnchor: {
        type: "anchor",
        argOptions: [{
          optionName: "element",
          type: G
        }],
        init: function init(e, t) {
          return e.element = R.pointAnchor.checkElement(t.element), e.x = R.pointAnchor.parsePercent(t.x, true) || [.5, true], e.y = R.pointAnchor.parsePercent(t.y, true) || [.5, true], true;
        },
        removeOption: function removeOption(e, t) {
          var n = t.props,
            r = {},
            i = e.element,
            a = n.options.anchorSE[+(t.optionName === "start")];
          i === a && (i = a === document.body ? new z(R.pointAnchor, [i]) : document.body), r[t.optionName] = i, ht(n, r);
        },
        getBBoxNest: function getBBoxNest(e, t) {
          var n = Oe(e.element, t.baseWindow),
            r = n.width,
            i = n.height;
          return n.width = n.height = 0, n.left = n.right = n.left + e.x[0] * (e.x[1] ? r : 1), n.top = n.bottom = n.top + e.y[0] * (e.y[1] ? i : 1), n;
        },
        parsePercent: function parsePercent(e, t) {
          var n,
            r,
            i = false;
          return F(e) ? r = e : typeof e == "string" && (n = le.exec(e)) && n[2] && (r = parseFloat(n[1]) / 100, i = r !== 0), r != null && (t || r >= 0) ? [r, i] : null;
        },
        checkElement: function checkElement(e) {
          if (e == null) e = document.body;else if (!G(e)) throw Error("`element` must be Element");
          return e;
        }
      },
      areaAnchor: {
        type: "anchor",
        argOptions: [{
          optionName: "element",
          type: G
        }, {
          optionName: "shape",
          type: "string"
        }],
        stats: {
          color: {},
          strokeWidth: {},
          elementWidth: {},
          elementHeight: {},
          elementLeft: {},
          elementTop: {},
          pathListRel: {},
          bBoxRel: {},
          pathData: {},
          viewBoxBBox: {
            hasProps: true
          },
          dashLen: {},
          dashGap: {}
        },
        init: function init(e, t) {
          var n = [],
            r,
            i,
            a,
            o;
          return e.element = R.pointAnchor.checkElement(t.element), typeof t.color == "string" && (e.color = t.color.trim()), typeof t.fillColor == "string" && (e.fill = t.fillColor.trim()), F(t.size) && t.size >= 0 && (e.size = t.size), t.dash && (e.dash = true, F(t.dash.len) && t.dash.len > 0 && (e.dashLen = t.dash.len), F(t.dash.gap) && t.dash.gap > 0 && (e.dashGap = t.dash.gap)), t.shape === "circle" ? e.shape = t.shape : t.shape === "polygon" && Array.isArray(t.points) && t.points.length >= 3 && t.points.every(function (t) {
            var r = {};
            return (r.x = R.pointAnchor.parsePercent(t[0], true)) && (r.y = R.pointAnchor.parsePercent(t[1], true)) ? (n.push(r), (r.x[1] || r.y[1]) && (e.hasRatio = true), true) : false;
          }) ? (e.shape = t.shape, e.points = n) : (e.shape = "rect", e.radius = F(t.radius) && t.radius >= 0 ? t.radius : 0), (e.shape === "rect" || e.shape === "circle") && (e.x = R.pointAnchor.parsePercent(t.x, true) || [-0.05, true], e.y = R.pointAnchor.parsePercent(t.y, true) || [-0.05, true], e.width = R.pointAnchor.parsePercent(t.width) || [1.1, true], e.height = R.pointAnchor.parsePercent(t.height) || [1.1, true], (e.x[1] || e.y[1] || e.width[1] || e.height[1]) && (e.hasRatio = true)), r = e.element.ownerDocument, e.svg = i = r.createElementNS(D, "svg"), i.className.baseVal = l + "-areaAnchor", i.viewBox.baseVal || i.setAttribute("viewBox", "0 0 0 0"), e.path = i.appendChild(r.createElementNS(D, "path")), e.path.style.fill = e.fill || "none", e.isShown = false, i.style.visibility = "hidden", o = t.svgContainer || r.body, o.appendChild(i), Xe({
            svgContainer: t.svgContainer
          }, a = r.defaultView), e.bodyOffset = Ye(a), e.updateColor = function () {
            var t = e.curStats,
              n = e.aplStats,
              r = e.boundTargets.length ? e.boundTargets[0].props.curStats : null,
              i;
            t.color = i = e.color || (r ? r.line_color : N.lineColor), Z(e, n, "color", i) && (e.path.style.stroke = i);
          }, e.updateShow = function () {
            lt(e, e.boundTargets.some(function (e) {
              return e.props.isShown === true;
            }));
          }, true;
        },
        bind: function bind(e, t) {
          var n = t.props;
          return e.color || q(n, "cur_line_color", e.updateColor), q(n, "svgShow", e.updateShow), Ue(function () {
            e.updateColor(), e.updateShow();
          }), true;
        },
        unbind: function unbind(e, t) {
          var n = t.props;
          e.color || J(n, "cur_line_color", e.updateColor), J(n, "svgShow", e.updateShow), e.boundTargets.length > 1 && Ue(function () {
            e.updateColor(), e.updateShow(), R.areaAnchor.update(e) && e.boundTargets.forEach(function (e) {
              Q(e.props, {
                position: true
              });
            });
          });
        },
        removeOption: function removeOption(e, t) {
          R.pointAnchor.removeOption(e, t);
        },
        remove: function remove(e) {
          e.boundTargets.length && (console.error("LeaderLineAttachment was not unbound by remove"), e.boundTargets.forEach(function (t) {
            R.areaAnchor.unbind(e, t);
          })), e.svg.parentNode.removeChild(e.svg);
        },
        getStrokeWidth: function getStrokeWidth(e, t) {
          return R.areaAnchor.update(e) && e.boundTargets.length > 1 && Ue(function () {
            e.boundTargets.forEach(function (e) {
              e.props !== t && Q(e.props, {
                position: true
              });
            });
          }), e.curStats.strokeWidth;
        },
        getPathData: function getPathData(e, t) {
          var n = Oe(e.element, t.baseWindow);
          return Re(e.curStats.pathListRel, function (e) {
            e.x += n.left, e.y += n.top;
          });
        },
        getBBoxNest: function getBBoxNest(e, t) {
          var n = Oe(e.element, t.baseWindow),
            r = e.curStats.bBoxRel;
          return {
            left: r.left + n.left,
            top: r.top + n.top,
            right: r.right + n.left,
            bottom: r.bottom + n.top,
            width: r.width,
            height: r.height
          };
        },
        update: function update(e) {
          var t = e.curStats,
            n = e.aplStats,
            r = e.boundTargets.length ? e.boundTargets[0].props.curStats : null,
            i,
            a,
            o = {};
          if (o.strokeWidth = Z(e, t, "strokeWidth", e.size == null ? r ? r.line_strokeWidth : N.lineSize : e.size), i = Te(e.element), o.elementWidth = Z(e, t, "elementWidth", i.width), o.elementHeight = Z(e, t, "elementHeight", i.height), o.elementLeft = Z(e, t, "elementLeft", i.left), o.elementTop = Z(e, t, "elementTop", i.top), o.strokeWidth || e.hasRatio && (o.elementWidth || o.elementHeight)) {
            switch (e.shape) {
              case "rect":
                (function () {
                  var n = {
                      left: e.x[0] * (e.x[1] ? i.width : 1),
                      top: e.y[0] * (e.y[1] ? i.height : 1),
                      width: e.width[0] * (e.width[1] ? i.width : 1),
                      height: e.height[0] * (e.height[1] ? i.height : 1)
                    },
                    r,
                    a,
                    o,
                    s,
                    c,
                    l,
                    u,
                    d;
                  n.right = n.left + n.width, n.bottom = n.top + n.height, s = t.strokeWidth / 2, a = (o = Math.min(n.width, n.height)) ? o / 2 * Math.SQRT2 + s : 0, r = e.radius ? e.radius <= a ? e.radius : a : 0, r ? (c = (r - s) / Math.SQRT2, l = r - c, d = r * se, u = [{
                    x: n.left - l,
                    y: n.top + c
                  }, {
                    x: n.left + c,
                    y: n.top - l
                  }, {
                    x: n.right - c,
                    y: n.top - l
                  }, {
                    x: n.right + l,
                    y: n.top + c
                  }, {
                    x: n.right + l,
                    y: n.bottom - c
                  }, {
                    x: n.right - c,
                    y: n.bottom + l
                  }, {
                    x: n.left + c,
                    y: n.bottom + l
                  }, {
                    x: n.left - l,
                    y: n.bottom - c
                  }], t.pathListRel = [[u[0], {
                    x: u[0].x,
                    y: u[0].y - d
                  }, {
                    x: u[1].x - d,
                    y: u[1].y
                  }, u[1]]], u[1].x !== u[2].x && t.pathListRel.push([u[1], u[2]]), t.pathListRel.push([u[2], {
                    x: u[2].x + d,
                    y: u[2].y
                  }, {
                    x: u[3].x,
                    y: u[3].y - d
                  }, u[3]]), u[3].y !== u[4].y && t.pathListRel.push([u[3], u[4]]), t.pathListRel.push([u[4], {
                    x: u[4].x,
                    y: u[4].y + d
                  }, {
                    x: u[5].x + d,
                    y: u[5].y
                  }, u[5]]), u[5].x !== u[6].x && t.pathListRel.push([u[5], u[6]]), t.pathListRel.push([u[6], {
                    x: u[6].x - d,
                    y: u[6].y
                  }, {
                    x: u[7].x,
                    y: u[7].y + d
                  }, u[7]]), u[7].y !== u[0].y && t.pathListRel.push([u[7], u[0]]), t.pathListRel.push([]), l = r - c + t.strokeWidth / 2, u = [{
                    x: n.left - l,
                    y: n.top - l
                  }, {
                    x: n.right + l,
                    y: n.bottom + l
                  }], t.bBoxRel = {
                    left: u[0].x,
                    top: u[0].y,
                    right: u[1].x,
                    bottom: u[1].y,
                    width: u[1].x - u[0].x,
                    height: u[1].y - u[0].y
                  }) : (l = t.strokeWidth / 2, u = [{
                    x: n.left - l,
                    y: n.top - l
                  }, {
                    x: n.right + l,
                    y: n.bottom + l
                  }], t.pathListRel = [[u[0], {
                    x: u[1].x,
                    y: u[0].y
                  }], [{
                    x: u[1].x,
                    y: u[0].y
                  }, u[1]], [u[1], {
                    x: u[0].x,
                    y: u[1].y
                  }], []], u = [{
                    x: n.left - t.strokeWidth,
                    y: n.top - t.strokeWidth
                  }, {
                    x: n.right + t.strokeWidth,
                    y: n.bottom + t.strokeWidth
                  }], t.bBoxRel = {
                    left: u[0].x,
                    top: u[0].y,
                    right: u[1].x,
                    bottom: u[1].y,
                    width: u[1].x - u[0].x,
                    height: u[1].y - u[0].y
                  });
                })();
                break;
              case "circle":
                (function () {
                  var n = {
                      left: e.x[0] * (e.x[1] ? i.width : 1),
                      top: e.y[0] * (e.y[1] ? i.height : 1),
                      width: e.width[0] * (e.width[1] ? i.width : 1),
                      height: e.height[0] * (e.height[1] ? i.height : 1)
                    },
                    r,
                    a,
                    o,
                    s,
                    c,
                    l,
                    u,
                    d,
                    f,
                    p,
                    m,
                    h;
                  !n.width && !n.height && (n.width = n.height = 10), n.width || (n.width = n.height), n.height || (n.height = n.width), n.right = n.left + n.width, n.bottom = n.top + n.height, r = n.left + n.width / 2, a = n.top + n.height / 2, u = t.strokeWidth / 2, d = n.width / 2, f = n.height / 2, o = d * Math.SQRT2 + u, s = f * Math.SQRT2 + u, c = o * se, l = s * se, h = [{
                    x: r - o,
                    y: a
                  }, {
                    x: r,
                    y: a - s
                  }, {
                    x: r + o,
                    y: a
                  }, {
                    x: r,
                    y: a + s
                  }], t.pathListRel = [[h[0], {
                    x: h[0].x,
                    y: h[0].y - l
                  }, {
                    x: h[1].x - c,
                    y: h[1].y
                  }, h[1]], [h[1], {
                    x: h[1].x + c,
                    y: h[1].y
                  }, {
                    x: h[2].x,
                    y: h[2].y - l
                  }, h[2]], [h[2], {
                    x: h[2].x,
                    y: h[2].y + l
                  }, {
                    x: h[3].x + c,
                    y: h[3].y
                  }, h[3]], [h[3], {
                    x: h[3].x - c,
                    y: h[3].y
                  }, {
                    x: h[0].x,
                    y: h[0].y + l
                  }, h[0]], []], p = o - d + t.strokeWidth / 2, m = s - f + t.strokeWidth / 2, h = [{
                    x: n.left - p,
                    y: n.top - m
                  }, {
                    x: n.right + p,
                    y: n.bottom + m
                  }], t.bBoxRel = {
                    left: h[0].x,
                    top: h[0].y,
                    right: h[1].x,
                    bottom: h[1].y,
                    width: h[1].x - h[0].x,
                    height: h[1].y - h[0].y
                  };
                })();
                break;
              case "polygon":
                (function () {
                  var n, r, a, o;
                  e.points.forEach(function (e) {
                    var a = e.x[0] * (e.x[1] ? i.width : 1),
                      o = e.y[0] * (e.y[1] ? i.height : 1);
                    n ? (a < n.left && (n.left = a), a > n.right && (n.right = a), o < n.top && (n.top = o), o > n.bottom && (n.bottom = o)) : n = {
                      left: a,
                      right: a,
                      top: o,
                      bottom: o
                    }, r ? t.pathListRel.push([r, {
                      x: a,
                      y: o
                    }]) : t.pathListRel = [], r = {
                      x: a,
                      y: o
                    };
                  }), t.pathListRel.push([]), a = t.strokeWidth / 2, o = [{
                    x: n.left - a,
                    y: n.top - a
                  }, {
                    x: n.right + a,
                    y: n.bottom + a
                  }], t.bBoxRel = {
                    left: o[0].x,
                    top: o[0].y,
                    right: o[1].x,
                    bottom: o[1].y,
                    width: o[1].x - o[0].x,
                    height: o[1].y - o[0].y
                  };
                })();
                break;
            }
            o.pathListRel = o.bBoxRel = true;
          }
          return (o.pathListRel || o.elementLeft || o.elementTop) && (t.pathData = Re(t.pathListRel, function (e) {
            e.x += i.left, e.y += i.top;
          })), Z(e, n, "strokeWidth", a = t.strokeWidth) && (e.path.style.strokeWidth = a + "px"), Ve(a = t.pathData, n.pathData) && (e.path.setPathData(a), n.pathData = a, o.pathData = true), e.dash && ((o.pathData || o.strokeWidth && (!e.dashLen || !e.dashGap)) && (t.dashLen = e.dashLen || t.strokeWidth * 2, t.dashGap = e.dashGap || t.strokeWidth), o.dash = Z(e, n, "dashLen", t.dashLen) || o.dash, o.dash = Z(e, n, "dashGap", t.dashGap) || o.dash, o.dash && (e.path.style.strokeDasharray = n.dashLen + "," + n.dashGap)), function () {
            var r = t.viewBoxBBox,
              o = n.viewBoxBBox,
              s = e.svg.viewBox.baseVal,
              c = e.svg.style;
            r.x = t.bBoxRel.left + i.left, r.y = t.bBoxRel.top + i.top, r.width = t.bBoxRel.width, r.height = t.bBoxRel.height, ["x", "y", "width", "height"].forEach(function (t) {
              (a = r[t]) !== o[t] && (s[t] = o[t] = a, c[ee[t]] = a + (t === "x" || t === "y" ? e.bodyOffset[t] : 0) + "px");
            });
          }(), o.strokeWidth || o.pathListRel || o.bBoxRel;
        }
      },
      mouseHoverAnchor: {
        type: "anchor",
        argOptions: [{
          optionName: "element",
          type: G
        }, {
          optionName: "showEffectName",
          type: "string"
        }],
        style: {
          backgroundImage: "url('data:image/svg+xml;charset=utf-8;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ij48cG9seWdvbiBwb2ludHM9IjI0LDAgMCw4IDgsMTEgMCwxOSA1LDI0IDEzLDE2IDE2LDI0IiBmaWxsPSJjb3JhbCIvPjwvc3ZnPg==')",
          backgroundSize: "",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#f8f881",
          cursor: "default"
        },
        hoverStyle: {
          backgroundImage: "none",
          backgroundColor: "#fadf8f"
        },
        padding: {
          top: 1,
          right: 15,
          bottom: 1,
          left: 2
        },
        minHeight: 15,
        backgroundPosition: {
          right: 2,
          top: 2
        },
        backgroundSize: {
          width: 12,
          height: 12
        },
        dirKeys: [["top", "Top"], ["right", "Right"], ["bottom", "Bottom"], ["left", "Left"]],
        init: function init(e, t) {
          var n = R.mouseHoverAnchor,
            r,
            i,
            a,
            o,
            s = {},
            c,
            l,
            u;
          if (e.element = R.pointAnchor.checkElement(t.element), !function (e) {
            var t, n;
            return !!((n = e.ownerDocument) && (t = n.defaultView) && t.HTMLElement && e instanceof t.HTMLElement);
          }(e.element)) throw Error("`element` must be HTML element");
          return n.style.backgroundSize = n.backgroundSize.width + "px " + n.backgroundSize.height + "px", ["style", "hoverStyle"].forEach(function (t) {
            var r = n[t];
            e[t] = Object.keys(r).reduce(function (e, t) {
              return e[t] = r[t], e;
            }, {});
          }), r = e.element.ownerDocument.defaultView.getComputedStyle(e.element, ""), r.display === "inline" ? e.style.display = "inline-block" : r.display === "none" && (e.style.display = "block"), R.mouseHoverAnchor.dirKeys.forEach(function (t) {
            var i = t[0],
              a = "padding" + t[1];
            parseFloat(r[a]) < n.padding[i] && (e.style[a] = n.padding[i] + "px");
          }), e.style.display && (o = e.element.style.display, e.element.style.display = e.style.display), R.mouseHoverAnchor.dirKeys.forEach(function (t) {
            var n = "padding" + t[1];
            e.style[n] && (s[n] = e.element.style[n], e.element.style[n] = e.style[n]);
          }), a = e.element.getBoundingClientRect(), a.height < n.minHeight && (k ? function () {
            var t = n.minHeight;
            r.boxSizing === "content-box" ? t -= parseFloat(r.borderTopWidth) + parseFloat(r.borderBottomWidth) + parseFloat(r.paddingTop) + parseFloat(r.paddingBottom) : r.boxSizing === "padding-box" && (t -= parseFloat(r.borderTopWidth) + parseFloat(r.borderBottomWidth)), e.style.height = t + "px";
          }() : e.style.height = parseFloat(r.height) + (n.minHeight - a.height) + "px"), M ? e.style.backgroundPosition = a.width - n.backgroundSize.width - n.backgroundPosition.right + "px " + n.backgroundPosition.top + "px" : e.style.backgroundPosition = "right " + n.backgroundPosition.right + "px top " + n.backgroundPosition.top + "px", e.style.display && (e.element.style.display = o), R.mouseHoverAnchor.dirKeys.forEach(function (t) {
            var n = "padding" + t[1];
            e.style[n] && (e.element.style[n] = s[n]);
          }), ["style", "hoverStyle"].forEach(function (n) {
            var r = e[n],
              i = t[n];
            P(i) && Object.keys(i).forEach(function (e) {
              var _i$e;
              typeof i[e] == "string" || F(i[e]) ? r[e] = i[e] : (_i$e = i[e]) != null ? _i$e : delete r[e];
            });
          }), typeof t.onSwitch == "function" && (u = t.onSwitch), t.showEffectName && L[t.showEffectName] && (e.showEffectName = c = t.showEffectName), l = t.animOptions, e.elmStyle = i = e.element.style, e.mouseenter = function (t) {
            e.hoverStyleSave = n.getStyles(i, Object.keys(e.hoverStyle)), n.setStyles(i, e.hoverStyle), e.boundTargets.forEach(function (e) {
              ft(e.props, true, c, l);
            }), u && u(t);
          }, e.mouseleave = function (t) {
            n.setStyles(i, e.hoverStyleSave), e.boundTargets.forEach(function (e) {
              ft(e.props, false, c, l);
            }), u && u(t);
          }, true;
        },
        bind: function bind(e, t) {
          return t.props.svg ? R.mouseHoverAnchor.llShow(t.props, false, e.showEffectName) : Ue(function () {
            R.mouseHoverAnchor.llShow(t.props, false, e.showEffectName);
          }), e.enabled || (e.styleSave = R.mouseHoverAnchor.getStyles(e.elmStyle, Object.keys(e.style)), R.mouseHoverAnchor.setStyles(e.elmStyle, e.style), e.removeEventListener = we(e.element, e.mouseenter, e.mouseleave), e.enabled = true), true;
        },
        unbind: function unbind(e, t) {
          e.enabled && e.boundTargets.length <= 1 && (e.removeEventListener(), R.mouseHoverAnchor.setStyles(e.elmStyle, e.styleSave), e.enabled = false), R.mouseHoverAnchor.llShow(t.props, true, e.showEffectName);
        },
        removeOption: function removeOption(e, t) {
          R.pointAnchor.removeOption(e, t);
        },
        remove: function remove(e) {
          e.boundTargets.length && (console.error("LeaderLineAttachment was not unbound by remove"), e.boundTargets.forEach(function (t) {
            R.mouseHoverAnchor.unbind(e, t);
          }));
        },
        getBBoxNest: function getBBoxNest(e, t) {
          return Oe(e.element, t.baseWindow);
        },
        llShow: function llShow(e, t, n) {
          L[n || e.curStats.show_effect].stop(e, true, t), e.aplStats.show_on = t;
        },
        getStyles: function getStyles(e, t) {
          return t.reduce(function (t, n) {
            return t[n] = e[n], t;
          }, {});
        },
        setStyles: function setStyles(e, t) {
          Object.keys(t).forEach(function (n) {
            e[n] = t[n];
          });
        }
      },
      captionLabel: {
        type: "label",
        argOptions: [{
          optionName: "text",
          type: "string"
        }],
        stats: {
          color: {},
          x: {},
          y: {}
        },
        textStyleProps: ["fontFamily", "fontStyle", "fontVariant", "fontWeight", "fontStretch", "fontSize", "fontSizeAdjust", "kerning", "letterSpacing", "wordSpacing", "textDecoration"],
        init: function init(e, t) {
          return typeof t.text == "string" && (e.text = t.text.trim()), e.text ? (typeof t.color == "string" && (e.color = t.color.trim()), e.outlineColor = typeof t.outlineColor == "string" ? t.outlineColor.trim() : "#fff", Array.isArray(t.offset) && F(t.offset[0]) && F(t.offset[1]) && (e.offset = {
            x: t.offset[0],
            y: t.offset[1]
          }), F(t.lineOffset) && (e.lineOffset = t.lineOffset), R.captionLabel.textStyleProps.forEach(function (n) {
            t[n] != null && (e[n] = t[n]);
          }), e.updateColor = function (t) {
            R.captionLabel.updateColor(e, t);
          }, e.updateSocketXY = function (t) {
            var n = e.curStats,
              r = e.aplStats,
              i = t.curStats,
              a = i.position_socketXYSE[e.socketIndex],
              o,
              s,
              c,
              l;
            a.x != null && (e.offset ? (n.x = a.x + e.offset.x, n.y = a.y + e.offset.y) : (o = e.height / 2, s = Math.max(i.attach_plugSideLenSE[e.socketIndex] || 0, i.line_strokeWidth / 2), c = i.position_socketXYSE[+!e.socketIndex], a.socketId === p || a.socketId === d ? (n.x = a.socketId === p ? a.x - o - e.width : a.x + o, n.y = c.y < a.y ? a.y + s + o : a.y - s - o - e.height) : (n.x = c.x < a.x ? a.x + s + o : a.x - s - o - e.width, n.y = a.socketId === u ? a.y - o - e.height : a.y + o)), Z(e, r, "x", l = n.x) && (e.elmPosition.x.baseVal.getItem(0).value = l), Z(e, r, "y", l = n.y) && (e.elmPosition.y.baseVal.getItem(0).value = l + e.height));
          }, e.updatePath = function (t) {
            var n = e.curStats,
              r = e.aplStats,
              i = t.pathList.animVal || t.pathList.baseVal,
              a,
              o;
            i && (a = R.captionLabel.getMidPoint(i, e.lineOffset), n.x = a.x - e.width / 2, n.y = a.y - e.height / 2, Z(e, r, "x", o = n.x) && (e.elmPosition.x.baseVal.getItem(0).value = o), Z(e, r, "y", o = n.y) && (e.elmPosition.y.baseVal.getItem(0).value = o + e.height));
          }, e.updateShow = function (t) {
            R.captionLabel.updateShow(e, t);
          }, M && (e.adjustEdge = function (t, n) {
            var r = e.curStats;
            r.x != null && R.captionLabel.adjustEdge(n, {
              x: r.x,
              y: r.y,
              width: e.width,
              height: e.height
            }, e.strokeWidth / 2);
          }), true) : false;
        },
        updateColor: function updateColor(e, t) {
          var n = e.curStats,
            r = e.aplStats,
            i = t.curStats,
            a;
          n.color = a = e.color || i.line_color, Z(e, r, "color", a) && (e.styleFill.fill = a);
        },
        updateShow: function updateShow(e, t) {
          var n = t.isShown === true;
          n !== e.isShown && (e.styleShow.visibility = n ? "" : "hidden", e.isShown = n);
        },
        adjustEdge: function adjustEdge(e, t, n) {
          var r = {
            x1: t.x - n,
            y1: t.y - n,
            x2: t.x + t.width + n,
            y2: t.y + t.height + n
          };
          r.x1 < e.x1 && (e.x1 = r.x1), r.y1 < e.y1 && (e.y1 = r.y1), r.x2 > e.x2 && (e.x2 = r.x2), r.y2 > e.y2 && (e.y2 = r.y2);
        },
        newText: function newText(e, t, n, r, i) {
          var a = t.createElementNS(D, "text"),
            o,
            s,
            c,
            l,
            u;
          return a.textContent = e, [a.x, a.y].forEach(function (e) {
            var t = n.createSVGLength();
            t.newValueSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_PX, 0), e.baseVal.initialize(t);
          }), typeof H != "boolean" && (H = "paintOrder" in a.style), i && !H ? (s = t.createElementNS(D, "defs"), a.id = r, s.appendChild(a), o = t.createElementNS(D, "g"), l = o.appendChild(t.createElementNS(D, "use")), l.href.baseVal = "#" + r, c = o.appendChild(t.createElementNS(D, "use")), c.href.baseVal = "#" + r, u = l.style, u.strokeLinejoin = "round", {
            elmPosition: a,
            styleText: a.style,
            styleFill: c.style,
            styleStroke: u,
            styleShow: o.style,
            elmsAppend: [s, o]
          }) : (u = a.style, i && (u.strokeLinejoin = "round", u.paintOrder = "stroke"), {
            elmPosition: a,
            styleText: u,
            styleFill: u,
            styleStroke: i ? u : null,
            styleShow: u,
            elmsAppend: [a]
          });
        },
        getMidPoint: function getMidPoint(e, t) {
          var n = ze(e),
            r = n.segsLen,
            i = n.lenAll,
            a,
            o,
            s = -1,
            c;
          if (a = i / 2 + (t || 0), a <= 0) return o = e[0], o.length === 2 ? Ae(o[0], o[1], 0) : Ne(o[0], o[1], o[2], o[3], 0);
          if (a >= i) return o = e[e.length - 1], o.length === 2 ? Ae(o[0], o[1], 1) : Ne(o[0], o[1], o[2], o[3], 1);
          for (c = []; a > r[++s];) c.push(e[s]), a -= r[s];
          return o = e[s], o.length === 2 ? Ae(o[0], o[1], a / r[s]) : Ne(o[0], o[1], o[2], o[3], Fe(o[0], o[1], o[2], o[3], a));
        },
        initSvg: function initSvg(e, t) {
          var n = R.captionLabel.newText(e.text, t.baseWindow.document, t.svg, l + "-captionLabel-" + e._id, e.outlineColor),
            r,
            i;
          ["elmPosition", "styleFill", "styleShow", "elmsAppend"].forEach(function (t) {
            e[t] = n[t];
          }), e.isShown = false, e.styleShow.visibility = "hidden", R.captionLabel.textStyleProps.forEach(function (t) {
            e[t] != null && (n.styleText[t] = e[t]);
          }), n.elmsAppend.forEach(function (e) {
            t.svg.appendChild(e);
          }), r = n.elmPosition.getBBox(), e.width = r.width, e.height = r.height, e.outlineColor && (i = r.height / 9, i = i > 10 ? 10 : i < 2 ? 2 : i, n.styleStroke.strokeWidth = i + "px", n.styleStroke.stroke = e.outlineColor), e.strokeWidth = i || 0, X(e.aplStats, R.captionLabel.stats), e.updateColor(t), e.refSocketXY ? e.updateSocketXY(t) : e.updatePath(t), M && Q(t, {}), e.updateShow(t);
        },
        bind: function bind(e, t) {
          var n = t.props;
          return e.color || q(n, "cur_line_color", e.updateColor), (e.refSocketXY = t.optionName === "startLabel" || t.optionName === "endLabel") ? (e.socketIndex = t.optionName === "startLabel" ? 0 : 1, q(n, "apl_position", e.updateSocketXY), e.offset || (q(n, "cur_attach_plugSideLenSE", e.updateSocketXY), q(n, "cur_line_strokeWidth", e.updateSocketXY))) : q(n, "apl_path", e.updatePath), q(n, "svgShow", e.updateShow), M && q(n, "new_edge4viewBox", e.adjustEdge), R.captionLabel.initSvg(e, n), true;
        },
        unbind: function unbind(e, t) {
          var n = t.props;
          e.elmsAppend && (e.elmsAppend.forEach(function (e) {
            n.svg.removeChild(e);
          }), e.elmPosition = e.styleFill = e.styleShow = e.elmsAppend = null), X(e.curStats, R.captionLabel.stats), X(e.aplStats, R.captionLabel.stats), e.color || J(n, "cur_line_color", e.updateColor), e.refSocketXY ? (J(n, "apl_position", e.updateSocketXY), e.offset || (J(n, "cur_attach_plugSideLenSE", e.updateSocketXY), J(n, "cur_line_strokeWidth", e.updateSocketXY))) : J(n, "apl_path", e.updatePath), J(n, "svgShow", e.updateShow), M && (J(n, "new_edge4viewBox", e.adjustEdge), Q(n, {}));
        },
        removeOption: function removeOption(e, t) {
          var n = t.props,
            r = {};
          r[t.optionName] = "", ht(n, r);
        },
        remove: function remove(e) {
          e.boundTargets.length && (console.error("LeaderLineAttachment was not unbound by remove"), e.boundTargets.forEach(function (t) {
            R.captionLabel.unbind(e, t);
          }));
        }
      },
      pathLabel: {
        type: "label",
        argOptions: [{
          optionName: "text",
          type: "string"
        }],
        stats: {
          color: {},
          startOffset: {},
          pathData: {}
        },
        init: function init(e, t) {
          return typeof t.text == "string" && (e.text = t.text.trim()), e.text ? (typeof t.color == "string" && (e.color = t.color.trim()), e.outlineColor = typeof t.outlineColor == "string" ? t.outlineColor.trim() : "#fff", F(t.lineOffset) && (e.lineOffset = t.lineOffset), R.captionLabel.textStyleProps.forEach(function (n) {
            t[n] != null && (e[n] = t[n]);
          }), e.updateColor = function (t) {
            R.captionLabel.updateColor(e, t);
          }, e.updatePath = function (t) {
            var n = e.curStats,
              r = e.aplStats,
              i = t.curStats,
              a = t.pathList.animVal || t.pathList.baseVal,
              o;
            a && (n.pathData = o = R.pathLabel.getOffsetPathData(a, i.line_strokeWidth / 2 + e.strokeWidth / 2 + e.height / 4, e.height * 1.25), Ve(o, r.pathData) && (e.elmPath.setPathData(o), r.pathData = o, e.bBox = e.elmPosition.getBBox(), e.updateStartOffset(t)));
          }, e.updateStartOffset = function (t) {
            var n = e.curStats,
              r = e.aplStats,
              i = t.curStats,
              a,
              o,
              s;
            n.pathData && (e.semIndex === 2 && !e.lineOffset || (a = Be(n.pathData), s = e.semIndex === 0 ? 0 : e.semIndex === 1 ? a : a / 2, e.semIndex !== 2 && (o = Math.max(i.attach_plugBackLenSE[e.semIndex] || 0, i.line_strokeWidth / 2) + e.strokeWidth / 2 + e.height / 4, s += e.semIndex === 0 ? o : -o, s = s < 0 ? 0 : s > a ? a : s), e.lineOffset && (s += e.lineOffset, s = s < 0 ? 0 : s > a ? a : s), n.startOffset = s, Z(e, r, "startOffset", s) && (e.elmOffset.startOffset.baseVal.value = s)));
          }, e.updateShow = function (t) {
            R.captionLabel.updateShow(e, t);
          }, M && (e.adjustEdge = function (t, n) {
            e.bBox && R.captionLabel.adjustEdge(n, e.bBox, e.strokeWidth / 2);
          }), true) : false;
        },
        getOffsetPathData: function getOffsetPathData(e, t, n) {
          var r = [],
            i,
            a;
          function o(e, t) {
            return Math.abs(e.x - t.x) < 3 && Math.abs(e.y - t.y) < 3;
          }
          return e.forEach(function (e) {
            var n, a, s, c, l, u, d;
            e.length === 2 ? (n = Ie(e[0], e[1], t), i ? (s = i.points, c = Math.atan2(s[1].y - s[0].y, s[0].x - s[1].x) - Math.atan2(e[0].y - e[1].y, e[1].x - e[0].x), c >= 0 && c <= Math.PI ? a = {
              type: "line",
              points: n,
              inside: true
            } : (u = Me(s[0], s[1], t), l = Me(n[1], n[0], t), (d = je(s[0], u, l, n[1])) ? (s[1] = d, a = {
              type: "line",
              points: [d, n[1]]
            }) : (s[1] = o(l, u) ? l : u, a = {
              type: "line",
              points: [l, n[1]]
            }), i.len = K(s[0], s[1]))) : a = {
              type: "line",
              points: n
            }, a.len = K(a.points[0], a.points[1]), r.push(i = a)) : (r.push({
              type: "cubic",
              points: Le(e[0], e[1], e[2], e[3], t, 16)
            }), i = null);
          }), i = null, r.forEach(function (e) {
            var r;
            e.type === "line" ? (e.inside && (i.len > t ? (r = i.points, r[1] = Me(r[0], r[1], -t), i.len = K(r[0], r[1])) : (i.points = null, i.len = 0), e.len > t + n ? (r = e.points, r[0] = Me(r[1], r[0], -(t + n)), e.len = K(r[0], r[1])) : (e.points = null, e.len = 0)), i = e) : i = null;
          }), r.reduce(function (e, t) {
            var n = t.points;
            return n && ((!a || !o(n[0], a)) && e.push({
              type: "M",
              values: [n[0].x, n[0].y]
            }), t.type === "line" ? e.push({
              type: "L",
              values: [n[1].x, n[1].y]
            }) : (n.shift(), n.forEach(function (t) {
              e.push({
                type: "L",
                values: [t.x, t.y]
              });
            })), a = n[n.length - 1]), e;
          }, []);
        },
        newText: function newText(e, t, n, r) {
          var i,
            a,
            o = t.createElementNS(D, "defs"),
            s = o.appendChild(t.createElementNS(D, "path")),
            c,
            l,
            u,
            d,
            f,
            p;
          return s.id = i = n + "-path", c = t.createElementNS(D, "text"), l = c.appendChild(t.createElementNS(D, "textPath")), l.href.baseVal = "#" + i, l.startOffset.baseVal.newValueSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_PX, 0), l.textContent = e, typeof H != "boolean" && (H = "paintOrder" in c.style), r && !H ? (c.id = a = n + "-text", o.appendChild(c), u = t.createElementNS(D, "g"), f = u.appendChild(t.createElementNS(D, "use")), f.href.baseVal = "#" + a, d = u.appendChild(t.createElementNS(D, "use")), d.href.baseVal = "#" + a, p = f.style, p.strokeLinejoin = "round", {
            elmPosition: c,
            elmPath: s,
            elmOffset: l,
            styleText: c.style,
            styleFill: d.style,
            styleStroke: p,
            styleShow: u.style,
            elmsAppend: [o, u]
          }) : (p = c.style, r && (p.strokeLinejoin = "round", p.paintOrder = "stroke"), {
            elmPosition: c,
            elmPath: s,
            elmOffset: l,
            styleText: p,
            styleFill: p,
            styleStroke: r ? p : null,
            styleShow: p,
            elmsAppend: [o, c]
          });
        },
        initSvg: function initSvg(e, t) {
          var n = R.pathLabel.newText(e.text, t.baseWindow.document, l + "-pathLabel-" + e._id, e.outlineColor),
            r,
            i;
          ["elmPosition", "elmPath", "elmOffset", "styleFill", "styleShow", "elmsAppend"].forEach(function (t) {
            e[t] = n[t];
          }), e.isShown = false, e.styleShow.visibility = "hidden", R.captionLabel.textStyleProps.forEach(function (t) {
            e[t] != null && (n.styleText[t] = e[t]);
          }), n.elmsAppend.forEach(function (e) {
            t.svg.appendChild(e);
          }), n.elmPath.setPathData([{
            type: "M",
            values: [0, 100]
          }, {
            type: "h",
            values: [100]
          }]);
          var a;
          j && (a = n.elmOffset.href.baseVal, n.elmOffset.href.baseVal = ""), r = n.elmPosition.getBBox(), j && (n.elmOffset.href.baseVal = a), n.styleText.textAnchor = ["start", "end", "middle"][e.semIndex], e.semIndex === 2 && !e.lineOffset && n.elmOffset.startOffset.baseVal.newValueSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_PERCENTAGE, 50), e.height = r.height, e.outlineColor && (i = r.height / 9, i = i > 10 ? 10 : i < 2 ? 2 : i, n.styleStroke.strokeWidth = i + "px", n.styleStroke.stroke = e.outlineColor), e.strokeWidth = i || 0, X(e.aplStats, R.pathLabel.stats), e.updateColor(t), e.updatePath(t), e.updateStartOffset(t), M && Q(t, {}), e.updateShow(t);
        },
        bind: function bind(e, t) {
          var n = t.props;
          return e.color || q(n, "cur_line_color", e.updateColor), q(n, "cur_line_strokeWidth", e.updatePath), q(n, "apl_path", e.updatePath), e.semIndex = t.optionName === "startLabel" ? 0 : t.optionName === "endLabel" ? 1 : 2, (e.semIndex !== 2 || e.lineOffset) && q(n, "cur_attach_plugBackLenSE", e.updateStartOffset), q(n, "svgShow", e.updateShow), M && q(n, "new_edge4viewBox", e.adjustEdge), R.pathLabel.initSvg(e, n), true;
        },
        unbind: function unbind(e, t) {
          var n = t.props;
          e.elmsAppend && (e.elmsAppend.forEach(function (e) {
            n.svg.removeChild(e);
          }), e.elmPosition = e.elmPath = e.elmOffset = e.styleFill = e.styleShow = e.elmsAppend = null), X(e.curStats, R.pathLabel.stats), X(e.aplStats, R.pathLabel.stats), e.color || J(n, "cur_line_color", e.updateColor), J(n, "cur_line_strokeWidth", e.updatePath), J(n, "apl_path", e.updatePath), (e.semIndex !== 2 || e.lineOffset) && J(n, "cur_attach_plugBackLenSE", e.updateStartOffset), J(n, "svgShow", e.updateShow), M && (J(n, "new_edge4viewBox", e.adjustEdge), Q(n, {}));
        },
        removeOption: function removeOption(e, t) {
          var n = t.props,
            r = {};
          r[t.optionName] = "", ht(n, r);
        },
        remove: function remove(e) {
          e.boundTargets.length && (console.error("LeaderLineAttachment was not unbound by remove"), e.boundTargets.forEach(function (t) {
            R.pathLabel.unbind(e, t);
          }));
        }
      }
    }, Object.keys(R).forEach(function (e) {
      $[e] = function () {
        return new z(R[e], Array.prototype.slice.call(arguments));
      };
    }), $.positionByWindowResize = true, $.deferPositionUpdate = false, window.addEventListener("resize", n.add(function () {
      $.positionByWindowResize && Object.keys(B).forEach(function (e) {
        be.schedule(B[e]);
      });
    }), false), $;
  }();

// 自动挂载到 window（供外部调试使用）
if (typeof window !== 'undefined') {
  window.LeaderLine = l;
}

/**
 * 连接器实例存储
 */
var connectors = new Map();

/**
 * 创建连线
 * @param {Element} startElement - 起始元素
 * @param {Element} endElement - 结束元素
 * @param {Object} options - 配置选项
 * @returns {Object} 连接器实例
 */
function createConnector(startElement, endElement, options) {
  if (options === void 0) {
    options = {};
  }
  if (!startElement || !endElement) {
    console.warn('[rich-diff] 起始或结束元素不存在');
    return null;
  }
  var defaultOptions = {
    color: '#1878E8',
    size: 2,
    path: 'fluid',
    startPlug: 'disc',
    endPlug: 'disc',
    startPlugSize: 1.5,
    endPlugSize: 1.5,
    outline: false,
    dash: false
  };
  var mergedOptions = _extends({}, defaultOptions, options);
  try {
    var line = new l(startElement, endElement, mergedOptions);
    var id = "connector-" + Date.now() + "-" + Math.random().toString(36).substr(2, 9);
    connectors.set(id, line);
    return {
      id: id,
      line: line
    };
  } catch (error) {
    console.warn('[rich-diff] 创建连线失败:', error);
    return null;
  }
}

/**
 * 根据标记创建连线
 * @param {Marker} marker - 变更标记
 * @param {Element} container - 容器元素
 * @param {Object} options - 配置选项
 * @returns {Object|null}
 */
function createConnectorFromMarker(marker, container, options) {
  if (options === void 0) {
    options = {};
  }
  if (!marker || !marker.targetSelector) {
    return null;
  }
  var targetElement = container.querySelector(marker.targetSelector);
  if (!targetElement) {
    console.warn("[rich-diff] \u672A\u627E\u5230\u76EE\u6807\u5143\u7D20: " + marker.targetSelector);
    return null;
  }
  var panelElement = container.querySelector("[data-marker-id=\"" + marker.id + "\"]");
  if (!panelElement) {
    return null;
  }
  return createConnector(panelElement, targetElement, options);
}

/**
 * 批量创建连线
 * @param {Marker[]} markers - 标记列表
 * @param {Element} container - 容器元素
 * @param {Object} options - 配置选项
 * @returns {Object[]} 连接器列表
 */
function createConnectors(markers, container, options) {
  if (options === void 0) {
    options = {};
  }
  return markers.map(function (marker) {
    return createConnectorFromMarker(marker, container, options);
  }).filter(Boolean);
}

/**
 * 移除连线
 * @param {string} id - 连接器 ID
 */
function removeConnector(id) {
  var line = connectors.get(id);
  if (line) {
    try {
      line.remove();
    } catch (e) {
      // 忽略移除错误
    }
    connectors.delete(id);
  }
}

/**
 * 清除所有连线
 */
function clearConnectors() {
  connectors.forEach(function (line) {
    try {
      line.remove();
    } catch (e) {
      // 忽略移除错误
    }
  });
  connectors.clear();
}

/**
 * 更新连线位置
 * @param {string} id - 连接器 ID
 */
function updateConnector(id) {
  var line = connectors.get(id);
  if (line != null && line.position) {
    try {
      line.position();
    } catch (e) {
      // 忽略更新错误
    }
  }
}

/**
 * 更新所有连线位置
 */
function updateAllConnectors() {
  connectors.forEach(function (_, id) {
    return updateConnector(id);
  });
}

/**
 * 获取连接器数量
 * @returns {number}
 */
function getConnectorCount() {
  return connectors.size;
}

/**
 * 检查 LeaderLine 是否可用
 * @returns {boolean}
 */
function isLeaderLineAvailable() {
  return true;
}

/**
 * 弹窗组件
 * 用于展示样式变更的新旧版本对比
 */

/**
 * 创建弹窗实例
 * @param {Object} options - 配置选项
 * @returns {Object} 弹窗实例
 */
function createPopup(options) {
  var popupElement = createPopupElement();
  var isVisible = false;

  /**
   * 显示弹窗
   * @param {HTMLElement} targetElement - 目标元素（marker）
   * @param {Object} marker - marker 数据
   */
  function show(targetElement, marker) {
    if (!marker.styleChanges) return;
    renderContent(marker.styleChanges);
    positionPopup(targetElement);
    popupElement.classList.add('visible');
    isVisible = true;
  }

  /**
   * 隐藏弹窗
   */
  function hide() {
    popupElement.classList.remove('visible');
    isVisible = false;
  }

  /**
   * 定位弹窗
   * @param {HTMLElement} targetElement - 目标元素
   */
  function positionPopup(targetElement) {
    var targetRect = targetElement.getBoundingClientRect();
    var popupRect = popupElement.getBoundingClientRect();
    var viewport = {
      width: window.innerWidth,
      height: window.innerHeight,
      scrollX: window.scrollX,
      scrollY: window.scrollY
    };

    // 计算位置（优先级：左侧 > 下方 > 右侧 > 上方）
    var positions = [{
      name: 'left',
      x: targetRect.left - popupRect.width - 10,
      y: targetRect.top
    }, {
      name: 'bottom',
      x: targetRect.left,
      y: targetRect.bottom + 10
    }, {
      name: 'right',
      x: targetRect.right + 10,
      y: targetRect.top
    }, {
      name: 'top',
      x: targetRect.left,
      y: targetRect.top - popupRect.height - 10
    }];
    var selectedPosition = positions[0];
    for (var _i = 0, _positions = positions; _i < _positions.length; _i++) {
      var pos = _positions[_i];
      if (isInViewport(pos, popupRect, viewport)) {
        selectedPosition = pos;
        break;
      }
    }
    var finalX = selectedPosition.x + viewport.scrollX;
    var finalY = selectedPosition.y + viewport.scrollY;
    var maxX = viewport.width - popupRect.width;
    var maxY = viewport.height - popupRect.height;
    if (finalX > maxX + viewport.scrollX) finalX = maxX + viewport.scrollX;
    if (finalX < viewport.scrollX) finalX = viewport.scrollX;
    if (finalY > maxY + viewport.scrollY) finalY = maxY + viewport.scrollY;
    if (finalY < viewport.scrollY) finalY = viewport.scrollY;
    popupElement.style.left = finalX + "px";
    popupElement.style.top = finalY + "px";
  }

  /**
   * 检查位置是否在视口内
   */
  function isInViewport(pos, popupRect, viewport) {
    return pos.x >= 0 && pos.x + popupRect.width <= viewport.width && pos.y >= 0 && pos.y + popupRect.height <= viewport.height;
  }

  /**
   * 渲染弹窗内容
   * @param {Object} styleChanges - 样式变更数据
   */
  function renderContent(styleChanges) {
    var content = popupElement.querySelector('.rich-diff-popup-content');
    content.innerHTML = "\n      <div class=\"rich-diff-popup-panels\">\n        <div class=\"rich-diff-popup-panel\">\n          <div class=\"rich-diff-popup-panel-title old-version\">\u65E7\u7248\u672C</div>\n          <div class=\"rich-diff-popup-panel-content\" id=\"popup-old-panel\"></div>\n        </div>\n        <div class=\"rich-diff-popup-panel\">\n          <div class=\"rich-diff-popup-panel-title new-version\">\u65B0\u7248\u672C</div>\n          <div class=\"rich-diff-popup-panel-content\" id=\"popup-new-panel\"></div>\n        </div>\n      </div>\n    ";

    // 渲染面板内容
    if (styleChanges.elements && styleChanges.elements.length > 0) {
      renderPanelContent('popup-old-panel', styleChanges.elements, 'oldHtml');
      renderPanelContent('popup-new-panel', styleChanges.elements, 'newHtml');
    }
  }

  /**
   * 渲染面板内容
   */
  function renderPanelContent(panelId, elements, htmlKey) {
    var panel = document.getElementById(panelId);
    if (!panel) return;
    panel.innerHTML = '';
    for (var _iterator = _createForOfIteratorHelperLoose(elements), _step; !(_step = _iterator()).done;) {
      var element = _step.value;
      var container = document.createElement('div');
      container.style.marginBottom = '8px';

      // 使用 ShadowDOM 隔离样式
      var shadow = container.attachShadow({
        mode: 'open'
      });
      shadow.innerHTML = element[htmlKey];
      panel.appendChild(container);
    }
  }

  /**
   * 销毁弹窗
   */
  function destroy() {
    if (popupElement.parentElement) {
      popupElement.parentElement.removeChild(popupElement);
    }
  }
  return {
    element: popupElement,
    show: show,
    hide: hide,
    destroy: destroy,
    get isVisible() {
      return isVisible;
    }
  };
}

/**
 * 创建弹窗 DOM 元素
 */
function createPopupElement() {
  var popup = document.createElement('div');
  popup.className = 'rich-diff-popup';
  popup.innerHTML = "\n    <div class=\"rich-diff-popup-header\">\n      <span class=\"rich-diff-popup-title\">\u6837\u5F0F\u53D8\u66F4</span>\n    </div>\n    <div class=\"rich-diff-popup-content\"></div>\n  ";
  injectStyles$1();
  document.body.appendChild(popup);
  return popup;
}

/**
 * 注入弹窗样式
 */
var stylesInjected = false;
function injectStyles$1() {
  if (stylesInjected) return;
  var styleText = "\n.rich-diff-popup {\n  position: absolute;\n  z-index: 10000;\n  background: #fff;\n  border: 1px solid #e0e0e0;\n  border-radius: 8px;\n  box-shadow: 0 4px 20px rgba(0,0,0,.15);\n  max-width: 600px;\n  min-width: 320px;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;\n  font-size: 14px;\n  opacity: 0;\n  transition: opacity .15s ease-in-out;\n  pointer-events: none;\n}\n.rich-diff-popup.visible {\n  opacity: 1;\n  pointer-events: auto;\n}\n.rich-diff-popup-header {\n  padding: 10px 14px;\n  border-bottom: 1px solid #e0e0e0;\n  font-weight: 600;\n  color: #333;\n  background: #fafafa;\n  border-radius: 8px 8px 0 0;\n}\n.rich-diff-popup-content {\n  padding: 12px;\n}\n/* \u6837\u5F0F\u5BF9\u6BD4\u9762\u677F */\n.rich-diff-popup-panels {\n  display: flex;\n  gap: 12px;\n}\n.rich-diff-popup-panel {\n  flex: 1;\n  border: 1px solid #e0e0e0;\n  border-radius: 6px;\n  overflow: hidden;\n}\n.rich-diff-popup-panel-title {\n  padding: 6px 10px;\n  font-size: 12px;\n  font-weight: 600;\n  text-align: center;\n}\n.rich-diff-popup-panel-title.old-version {\n  background: #ffebee;\n  color: #c62828;\n}\n.rich-diff-popup-panel-title.new-version {\n  background: #e3f2fd;\n  color: #1565c0;\n}\n.rich-diff-popup-panel-content {\n  padding: 12px;\n  min-height: 50px;\n  max-height: 200px;\n  overflow-y: auto;\n  background: #fafafa;\n}\n/* \u54CD\u5E94\u5F0F */\n@media (max-width: 600px) {\n  .rich-diff-popup {\n    max-width: 90vw;\n    min-width: 280px;\n  }\n  .rich-diff-popup-panels {\n    flex-direction: column;\n  }\n}\n";
  var style = document.createElement('style');
  style.textContent = styleText;
  document.head.appendChild(style);
  stylesInjected = true;
}

/**
 * 资源预览弹窗
 */

// 弹窗实例
var previewInstance = null;

// 样式
var PREVIEW_STYLES = "\n  .resource-preview-popup {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background: rgba(0, 0, 0, 0.8);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    z-index: 99999;\n    opacity: 0;\n    visibility: hidden;\n    transition: opacity 0.2s, visibility 0.2s;\n  }\n\n  .resource-preview-popup.active {\n    opacity: 1;\n    visibility: visible;\n  }\n\n  .resource-preview-content {\n    position: relative;\n    max-width: 90vw;\n    max-height: 90vh;\n    background: #fff;\n    border-radius: 8px;\n    overflow: hidden;\n    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);\n  }\n\n  .resource-preview-close {\n    position: absolute;\n    top: 10px;\n    right: 10px;\n    width: 36px;\n    height: 36px;\n    border: none;\n    background: rgba(0, 0, 0, 0.5);\n    color: white;\n    border-radius: 50%;\n    cursor: pointer;\n    font-size: 20px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    z-index: 1;\n    transition: background 0.2s;\n  }\n\n  .resource-preview-close:hover {\n    background: rgba(0, 0, 0, 0.7);\n  }\n\n  .resource-preview-image {\n    max-width: 90vw;\n    max-height: 90vh;\n    display: block;\n  }\n\n  .resource-preview-video {\n    max-width: 90vw;\n    max-height: 80vh;\n    display: block;\n  }\n\n  .resource-preview-nav {\n    position: absolute;\n    top: 50%;\n    transform: translateY(-50%);\n    width: 48px;\n    height: 48px;\n    border: none;\n    background: rgba(0, 0, 0, 0.5);\n    color: white;\n    border-radius: 50%;\n    cursor: pointer;\n    font-size: 24px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    transition: background 0.2s;\n  }\n\n  .resource-preview-nav:hover {\n    background: rgba(0, 0, 0, 0.7);\n  }\n\n  .resource-preview-nav.prev {\n    left: 20px;\n  }\n\n  .resource-preview-nav.next {\n    right: 20px;\n  }\n\n  .resource-preview-counter {\n    position: absolute;\n    bottom: 20px;\n    left: 50%;\n    transform: translateX(-50%);\n    background: rgba(0, 0, 0, 0.6);\n    color: white;\n    padding: 6px 16px;\n    border-radius: 20px;\n    font-size: 14px;\n  }\n";

/**
 * 创建预览弹窗实例
 */
function createResourcePreview() {
  if (previewInstance) {
    return previewInstance;
  }

  // 注入样式
  var styleId = 'resource-preview-styles';
  if (!document.getElementById(styleId)) {
    var style = document.createElement('style');
    style.id = styleId;
    style.textContent = PREVIEW_STYLES;
    document.head.appendChild(style);
  }

  // 创建弹窗 DOM
  var popup = document.createElement('div');
  popup.className = 'resource-preview-popup';
  popup.innerHTML = "\n    <div class=\"resource-preview-content\">\n      <button class=\"resource-preview-close\" title=\"\u5173\u95ED\">\xD7</button>\n      <button class=\"resource-preview-nav prev\" style=\"display: none;\">\u2039</button>\n      <button class=\"resource-preview-nav next\" style=\"display: none;\">\u203A</button>\n      <div class=\"resource-preview-body\"></div>\n      <div class=\"resource-preview-counter\" style=\"display: none;\"></div>\n    </div>\n  ";
  document.body.appendChild(popup);

  // 状态
  var currentUrls = [];
  var currentIndex = 0;
  var currentType = 'image';

  // 获取元素
  var closeBtn = popup.querySelector('.resource-preview-close');
  var prevBtn = popup.querySelector('.resource-preview-nav.prev');
  var nextBtn = popup.querySelector('.resource-preview-nav.next');
  var body = popup.querySelector('.resource-preview-body');
  var counter = popup.querySelector('.resource-preview-counter');

  // 关闭弹窗
  var close = function close() {
    popup.classList.remove('active');
    // 停止视频播放
    var video = body.querySelector('video');
    if (video) {
      video.pause();
    }
  };

  // 显示指定索引的资源
  var showResource = function showResource(index) {
    if (index < 0 || index >= currentUrls.length) return;
    currentIndex = index;
    var url = currentUrls[index];
    if (currentType === 'image') {
      body.innerHTML = "<img class=\"resource-preview-image\" src=\"" + escapeAttr(url) + "\" alt=\"\u9884\u89C8\u56FE\u7247\" />";
    } else if (currentType === 'video') {
      body.innerHTML = "<video class=\"resource-preview-video\" src=\"" + escapeAttr(url) + "\" controls autoplay></video>";
    }

    // 更新计数器
    if (currentUrls.length > 1) {
      counter.textContent = index + 1 + " / " + currentUrls.length;
      counter.style.display = 'block';
    } else {
      counter.style.display = 'none';
    }

    // 更新导航按钮
    prevBtn.style.display = currentUrls.length > 1 ? 'flex' : 'none';
    nextBtn.style.display = currentUrls.length > 1 ? 'flex' : 'none';
    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === currentUrls.length - 1;
  };

  // 事件绑定
  closeBtn.addEventListener('click', close);
  prevBtn.addEventListener('click', function () {
    return showResource(currentIndex - 1);
  });
  nextBtn.addEventListener('click', function () {
    return showResource(currentIndex + 1);
  });

  // 点击背景关闭
  popup.addEventListener('click', function (e) {
    if (e.target === popup) {
      close();
    }
  });

  // 键盘控制
  var handleKeydown = function handleKeydown(e) {
    if (!popup.classList.contains('active')) return;
    switch (e.key) {
      case 'Escape':
        close();
        break;
      case 'ArrowLeft':
        showResource(currentIndex - 1);
        break;
      case 'ArrowRight':
        showResource(currentIndex + 1);
        break;
    }
  };
  document.addEventListener('keydown', handleKeydown);

  // 实例方法
  var instance = {
    /**
     * 显示预览
     * @param {string|string[]} urls - 资源 URL 或 URL 数组
     * @param {string} type - 资源类型: 'image' | 'video'
     * @param {number} startIndex - 初始显示索引
     */
    show: function show(urls, type, startIndex) {
      if (type === void 0) {
        type = 'image';
      }
      if (startIndex === void 0) {
        startIndex = 0;
      }
      currentType = type;
      currentUrls = Array.isArray(urls) ? urls : [urls];
      currentIndex = Math.max(0, Math.min(startIndex, currentUrls.length - 1));
      showResource(currentIndex);
      popup.classList.add('active');
    },
    /**
     * 关闭预览
     */
    hide: function hide() {
      close();
    },
    /**
     * 销毁实例
     */
    destroy: function destroy() {
      document.removeEventListener('keydown', handleKeydown);
      popup.remove();
      previewInstance = null;
    }
  };
  previewInstance = instance;
  return instance;
}

/**
 * 获取预览实例
 */
function getResourcePreview() {
  if (!previewInstance) {
    return createResourcePreview();
  }
  return previewInstance;
}

/**
 * 属性转义
 */
function escapeAttr(str) {
  if (!str) return '';
  return String(str).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

// 弹窗实例
var popupInstance = null;
// 资源预览实例
var resourcePreviewInstance = null;
// marker 数据存储
var markerStore = new Map();

// 默认样式
var DEFAULT_STYLES = "\n  .rich-diff-container {\n    display: flex;\n    height: 600px;\n    max-height: 80vh;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;\n    font-size: 14px;\n    line-height: 1.6;\n    color: #333;\n    background: #f5f7fa;\n  }\n\n  /* \u5DE6\u4FA7\u53D8\u66F4\u6807\u8BB0\u9762\u677F */\n  .rich-diff-markers-panel {\n    width: 320px;\n    min-width: 280px;\n    max-width: 400px;\n    height: 100%;\n    background: #fff;\n    border-right: 1px solid #e9ecef;\n    overflow-y: auto;\n    overflow-x: hidden;\n    padding: 0 16px;\n    box-sizing: border-box;\n    flex-shrink: 0;\n  }\n\n  .rich-diff-markers-panel h3 {\n    font-size: 14px;\n    color: #666;\n    margin: 0 0 12px 0;\n    padding-bottom: 8px;\n    border-bottom: 1px solid #eee;\n    position: sticky;\n    top: 0;\n    background: #fff;\n    z-index: 1;\n  }\n\n  .rich-diff-stats {\n    display: flex;\n    gap: 12px;\n    padding: 8px 12px;\n    background: #f8f9fa;\n    border-radius: 6px;\n    margin-bottom: 12px;\n  }\n\n  .rich-diff-stat {\n    display: flex;\n    align-items: center;\n    gap: 4px;\n    font-size: 12px;\n  }\n\n  .rich-diff-stat-dot {\n    width: 8px;\n    height: 8px;\n    border-radius: 50%;\n  }\n\n  .rich-diff-stat-dot.add { background: #1878E8; }\n  .rich-diff-stat-dot.del { background: #D32F2F; }\n  .rich-diff-stat-dot.modify { background: #E65100; }\n\n  .rich-diff-marker-item {\n    padding: 10px 12px;\n    margin-bottom: 6px;\n    background: #f8f9fa;\n    border-radius: 6px;\n    cursor: pointer;\n    transition: all 0.2s;\n    border-left: 3px solid transparent;\n  }\n\n  .rich-diff-marker-item:hover {\n    background: #e9ecef;\n    transform: translateX(2px);\n  }\n\n  .rich-diff-marker-item.active {\n    background: #e8f4ff;\n    border-left-color: #1878E8;\n  }\n\n  .rich-diff-marker-item.add { border-left-color: #1878E8; }\n  .rich-diff-marker-item.del { border-left-color: #D32F2F; }\n  .rich-diff-marker-item.modify { border-left-color: #E65100; }\n\n  .rich-diff-marker-header {\n    display: flex;\n    align-items: center;\n    gap: 6px;\n    margin-bottom: 4px;\n  }\n\n  .rich-diff-marker-type {\n    display: inline-block;\n    padding: 1px 6px;\n    border-radius: 3px;\n    font-size: 11px;\n    font-weight: 600;\n  }\n\n  .rich-diff-marker-type.add { background: #E8F4FF; color: #1878E8; }\n  .rich-diff-marker-type.del { background: #FFEBEE; color: #D32F2F; }\n  .rich-diff-marker-type.modify { background: #FFF3E0; color: #E65100; }\n\n  .rich-diff-marker-field {\n    font-weight: 600;\n    font-size: 12px;\n  }\n\n  .rich-diff-marker-content {\n    font-size: 11px;\n    color: #666;\n    margin-top: 4px;\n    word-break: break-all;\n  }\n\n  .rich-diff-marker-content .old { color: #D32F2F; }\n  .rich-diff-marker-content .new { color: #1878E8; }\n\n  .rich-diff-marker-content .marker-prefix {\n    font-weight: bold;\n    font-family: monospace;\n  }\n\n  /* \u5DE6\u4FA7 marker \u533A\u57DF\u56FE\u7247\u81EA\u9002\u5E94 */\n  .rich-diff-markers-panel img {\n    max-width: 120px;\n    height: auto;\n    display: block;\n  }\n\n  /* \u53F3\u4FA7\u5185\u5BB9\u9762\u677F */\n  .rich-diff-content-panel {\n    flex: 1;\n    height: 100%;\n    background: #fff;\n    overflow-y: auto;\n    overflow-x: hidden;\n    padding: 0 20px;\n    box-sizing: border-box;\n  }\n\n  .rich-diff-content-panel h3 {\n    font-size: 14px;\n    color: #666;\n    margin: 0 0 12px 0;\n    padding-bottom: 8px;\n    border-bottom: 1px solid #eee;\n    position: sticky;\n    top: 0;\n    background: #fff;\n    z-index: 1;\n  }\n\n  /* \u8868\u5355\u5E03\u5C40 */\n  .rich-diff-form {\n    max-width: 800px;\n  }\n\n  /* \u9632\u6B62\u5185\u5BB9\u6EA2\u51FA */\n  .rich-diff-form *,\n  .rich-diff-form *::before,\n  .rich-diff-form *::after {\n    max-width: 100%;\n    box-sizing: border-box;\n  }\n\n  /* \u56FE\u7247/\u89C6\u9891\u81EA\u9002\u5E94 */\n  .rich-diff-form img,\n  .rich-diff-form video,\n  .rich-diff-form audio,\n  .rich-diff-form iframe,\n  .rich-diff-form embed,\n  .rich-diff-form object {\n    max-width: 100%;\n    height: auto;\n    display: block;\n  }\n\n  /* \u957F\u6587\u672C/URL \u81EA\u52A8\u6362\u884C */\n  .rich-diff-form pre,\n  .rich-diff-form code,\n  .rich-diff-form a {\n    word-break: break-word;\n    overflow-wrap: break-word;\n  }\n\n  /* \u8868\u683C\u6EA2\u51FA\u5904\u7406 */\n  .rich-diff-form table {\n    width: 100%;\n    table-layout: fixed;\n    overflow-x: auto;\n    display: block;\n  }\n\n  /* \u4EE3\u7801\u5757\u6A2A\u5411\u6EDA\u52A8 */\n  .rich-diff-form pre {\n    overflow-x: auto;\n    white-space: pre-wrap;\n    word-wrap: break-word;\n  }\n\n  .rich-diff-field {\n    display: flex;\n    margin-bottom: 16px;\n    padding: 12px;\n    background: #fafafa;\n    border-radius: 6px;\n    border: 1px solid #eee;\n    transition: all 0.2s;\n  }\n\n  .rich-diff-field:hover {\n    background: #f5f5f5;\n  }\n\n  .rich-diff-field.highlight {\n    background: #e8f4ff;\n    border-color: #1878E8;\n    box-shadow: 0 0 0 2px rgba(24, 120, 232, 0.2);\n  }\n\n  .rich-diff-field-label {\n    width: 100px;\n    min-width: 100px;\n    font-weight: 600;\n    color: #555;\n    padding-right: 12px;\n    border-right: 1px solid #ddd;\n    display: flex;\n    align-items: flex-start;\n  }\n\n  .rich-diff-field-content {\n    flex: 1;\n    padding-left: 12px;\n    line-height: 1.8;\n    word-break: break-word;\n  }\n\n  /* \u5DEE\u5F02\u6837\u5F0F */\n  .rich-diff-field-content ins[data-diff],\n  .rich-diff-field-content .diff-add,\n  .rich-diff-field-content difftext[data-diff=\"add\"] {\n    color: #1878E8;\n    background: #E8F4FF;\n    text-decoration: none;\n    padding: 1px 3px;\n    border-radius: 2px;\n    display: inline-block;\n  }\n  .rich-diff-field-content del[data-diff],\n  .rich-diff-field-content .diff-del,\n  .rich-diff-field-content difftext[data-diff=\"del\"] {\n    color: #D32F2F;\n    background: #FFEBEE;\n    text-decoration: line-through;\n    padding: 1px 3px;\n    border-radius: 2px;\n    display: inline-block;\n  }\n\n  .rich-diff-empty {\n    text-align: center;\n    color: #999;\n    padding: 40px 20px;\n  }\n\n  .rich-diff-no-change {\n    color: #999;\n    font-style: italic;\n  }\n\n  /* \u8D44\u6E90\u9884\u89C8\u6837\u5F0F */\n  .resource-preview {\n    display: inline-flex;\n    align-items: center;\n    gap: 6px;\n    padding: 4px 8px;\n    background: #f5f5f5;\n    border-radius: 4px;\n    cursor: pointer;\n    margin: 2px 0;\n    transition: background 0.2s;\n  }\n\n  .resource-preview:hover {\n    background: #e9ecef;\n  }\n\n  .resource-preview.resource-image {\n    padding: 2px;\n  }\n\n  .resource-preview.resource-image img {\n    max-width: 100px;\n    max-height: 60px;\n    border-radius: 3px;\n    object-fit: cover;\n  }\n\n  .resource-preview.resource-file {\n    text-decoration: none;\n    color: inherit;\n  }\n\n  .resource-preview.resource-file:hover {\n    background: #e8f4ff;\n  }\n\n  .resource-icon {\n    font-size: 16px;\n  }\n\n  .resource-name {\n    font-size: 12px;\n    color: inherit;\n    max-width: 150px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n\n  /* \u5DE6\u4FA7 marker \u533A\u57DF\u56FE\u7247\u81EA\u9002\u5E94 */\n  .rich-diff-markers-panel img {\n    max-width: 100%;\n    height: auto;\n    display: block;\n  }\n\n  /* LeaderLine \u8FDE\u7EBF\u6837\u5F0F */\n  svg.leader-line {\n    z-index: 99999 !important;\n    pointer-events: none !important;\n  }\n";

/**
 * 默认渲染器
 */
var defaultRenderer = {
  /**
   * 渲染对比结果
   * @param {Object} options - 渲染选项
   * @returns {Object} { html, markers, container, destroy }
   */
  render: function render(options) {
    if (options === void 0) {
      options = {};
    }
    var _options = options,
      container = _options.container,
      _options$oldContent = _options.oldContent,
      oldContent = _options$oldContent === void 0 ? '' : _options$oldContent,
      _options$newContent = _options.newContent,
      newContent = _options$newContent === void 0 ? '' : _options$newContent,
      _options$fieldName = _options.fieldName,
      fieldName = _options$fieldName === void 0 ? 'content' : _options$fieldName,
      diffResult = _options.diffResult,
      _options$config = _options.config,
      config = _options$config === void 0 ? {} : _options$config,
      detectStyle = _options.detectStyle,
      styleDiffConfig = _options.styleDiffConfig;

    // 新增：支持多字段对比
    var _options2 = options,
      oldData = _options2.oldData,
      newData = _options2.newData,
      fields = _options2.fields;
    if (!container) {
      return diffResult || null;
    }

    // 合并配置
    var mergedConfig = _extends({}, config, {
      detectStyle: detectStyle !== undefined ? detectStyle : config.detectStyle,
      styleDiffConfig: styleDiffConfig || config.styleDiffConfig || {},
      emptyPlaceholder: options.emptyPlaceholder !== undefined ? options.emptyPlaceholder : config.emptyPlaceholder
    });

    // 判断使用哪种模式
    if (oldData && newData && fields) {
      // 多字段对比模式
      return this.renderMultiFields(container, oldData, newData, fields, mergedConfig);
    } else {
      // 单字段模式（兼容旧 API）
      return this.renderSingleField(container, oldContent, newContent, fieldName, diffResult, mergedConfig);
    }
  },
  /**
   * 多字段对比渲染
   */
  renderMultiFields: function renderMultiFields(container, oldData, newData, fields, config) {
    if (config === void 0) {
      config = {};
    }
    // 注入样式
    injectStyles();

    // 排序字段
    var sortedFields = [].concat(fields).sort(function (a, b) {
      return (a.sort || 0) - (b.sort || 0);
    });

    // 对比所有字段
    var fieldResults = [];
    var allMarkers = [];

    // 获取样式检测配置
    var _config = config,
      _config$detectStyle = _config.detectStyle,
      detectStyle = _config$detectStyle === void 0 ? false : _config$detectStyle,
      _config$styleDiffConf = _config.styleDiffConfig,
      styleDiffConfig = _config$styleDiffConf === void 0 ? {} : _config$styleDiffConf;
    sortedFields.forEach(function (fieldConfig, index) {
      var field = fieldConfig.field,
        label = fieldConfig.label,
        type = fieldConfig.type,
        mayContainHtml = fieldConfig.mayContainHtml;
      var oldValue = oldData[field] || '';
      var newValue = newData[field] || '';

      // dynamic 类型特殊处理
      if (type === 'dynamic') {
        // 校验数据格式
        if (!Array.isArray(oldValue) && !Array.isArray(newValue)) {
          return; // 跳过非数组类型
        }

        // 对比自定义字段
        var customResult = diffCustomFields(oldValue || [], newValue || [], field);

        // 将每个项作为独立字段处理
        customResult.items.forEach(function (item, itemIndex) {
          var itemField = item.fieldName;
          var itemLabel = label + " - " + item.label;

          // 生成标记，并获取带有 marker-id 的 HTML
          var markers = createFieldMarkers(item.diffHtml, itemField, itemLabel, fieldResults.length + itemIndex);
          var markedHtml = markers.html || item.diffHtml;
          fieldResults.push({
            field: itemField,
            label: itemLabel,
            result: {
              html: markedHtml,
              hasDiff: item.hasDiff
            },
            markers: markers,
            hasDiff: item.hasDiff,
            isCustomField: true,
            customType: item.type,
            customData: item
          });
          allMarkers.push.apply(allMarkers, markers);
        });
        return;
      }

      // 执行对比
      var result;
      if (type) {
        // 指定了字段类型，使用 diffField
        result = diffField(oldValue, newValue, field, {
          type: type,
          mayContainHtml: mayContainHtml
        });
      } else {
        // 未指定类型，自动判断
        var isHtml = isHtmlContent(oldValue) || isHtmlContent(newValue);
        result = isHtml ? diffHTML(String(oldValue), String(newValue), field) : diffText(String(oldValue), String(newValue), field);
      }

      // 直接生成标记（不依赖预定义字段），并获取带 ID 的 HTML
      var markers = createFieldMarkers(result.html, field, label, index);

      // 使用修改后的 HTML（带有 marker-id）
      var markedHtml = markers.html || result.html;

      // 优先使用 result.hasDiff，否则使用 hasDifference 判断
      var fieldHasDiff = result.hasDiff !== undefined ? result.hasDiff : hasDifference(result.html, oldValue, newValue);
      fieldResults.push({
        field: field,
        label: label,
        result: _extends({}, result, {
          html: markedHtml
        }),
        markers: markers,
        hasDiff: fieldHasDiff
      });
      allMarkers.push.apply(allMarkers, markers);
    });

    // 样式检测：提取纯样式变更的 markers
    if (detectStyle) {
      var diffResult = {
        diffed: {},
        last: oldData,
        current: newData
      };

      // 构建 diffed 对象
      fieldResults.forEach(function (_ref) {
        var field = _ref.field,
          result = _ref.result;
        diffResult.diffed[field] = result.html;
      });

      // 直接调用 extractStyleMarkers 处理 allMarkers
      // 这会：1. 为现有 marker 附加 styleChanges  2. 为纯样式变更创建新 marker（添加到 allMarkers）
      extractStyleMarkers(diffResult.diffed, diffResult.last, diffResult.current, allMarkers, {
        detectStyle: detectStyle,
        styleDiffConfig: styleDiffConfig
      });
    }

    // 渲染 UI
    var elements = renderFormLayout(container, fieldResults, allMarkers, config);

    // 绑定交互
    var state = bindInteractions(elements, allMarkers, config);
    return {
      container: container,
      fieldResults: fieldResults,
      markers: allMarkers,
      destroy: function destroy() {
        return destroyRenderer(state, elements.container);
      }
    };
  },
  /**
   * 单字段对比渲染（兼容旧 API）
   */
  renderSingleField: function renderSingleField(container, oldContent, newContent, fieldName, diffResult, config) {
    var _diffed, _last, _current;
    var result = diffResult || diffHTML(oldContent, newContent, fieldName);
    if (!result) {
      container.innerHTML = '<div class="rich-diff-empty">无对比结果</div>';
      return {
        container: container,
        html: '',
        markers: []
      };
    }
    var markers = generateMarkers({
      diffed: (_diffed = {}, _diffed[fieldName] = result.html, _diffed),
      last: (_last = {}, _last[fieldName] = oldContent, _last),
      current: (_current = {}, _current[fieldName] = newContent, _current)
    });
    injectStyles();
    var elements = renderUI(container, result, markers);
    var state = bindInteractions(elements, markers);
    return {
      container: container,
      html: result.html,
      markers: markers,
      destroy: function destroy() {
        return destroyRenderer(state);
      }
    };
  }
};

/**
 * 判断是否为 HTML 内容
 */
function isHtmlContent(content) {
  if (!content) return false;
  var str = String(content);
  return str.includes('<') && str.includes('>');
}

/**
 * 从差异 HTML 中创建字段标记，并给差异标签添加 ID
 */
function createFieldMarkers(html, field, label, index) {
  if (!html || typeof html !== 'string') return [];
  var markers = [];
  var parts = [];
  var lastIndex = 0;
  var markerIndex = 0;

  // 匹配差异标签
  var pattern = /<(ins|del|difftext)([^>]*)>([\s\S]*?)<\/\1>/gi;
  var match;
  while ((match = pattern.exec(html)) !== null) {
    var tagType = match[1].toLowerCase();
    var attrs = match[2];
    var content = match[3];

    // 解析属性：必须有 data-diff 属性才识别为差异标记
    var diffTypeMatch = attrs.match(/data-diff="([^"]+)"/);

    // 如果没有 data-diff 属性，说明是原内容的原生标签，跳过不处理
    if (!diffTypeMatch) {
      continue;
    }
    var diffType = diffTypeMatch[1];

    // 检查是否已有 data-diff-id 或 data-marker-id
    var diffIdMatch = attrs.match(/data-diff-id="([^"]+)"/);
    var markerIdMatch = attrs.match(/data-marker-id="([^"]+)"/);

    // 使用已有的 ID 或生成新 ID
    var markerId = markerIdMatch ? markerIdMatch[1] : diffIdMatch ? diffIdMatch[1] : "diff-" + field + "-" + markerIndex;

    // 添加前面的内容
    if (match.index > lastIndex) {
      parts.push(html.substring(lastIndex, match.index));
    }

    // 检查是否需要添加 marker-id
    var newAttrs = attrs;
    if (!markerIdMatch) {
      // 添加 data-marker-id（使用 diffId 或生成的新 ID）
      newAttrs += " data-marker-id=\"" + markerId + "\"";
    }

    // 添加标签
    parts.push("<" + tagType + newAttrs + ">" + content + "</" + tagType + ">");
    markers.push({
      id: markerId,
      type: 'field',
      field: field,
      fieldLabel: label,
      position: index + 1,
      changeType: diffType,
      oldValue: diffType === 'del' ? content : '',
      newValue: diffType === 'add' ? content : '',
      targetSelector: "[data-marker-id=\"" + markerId + "\"]",
      range: [match.index, match.index + match[0].length]
    });
    lastIndex = match.index + match[0].length;
    markerIndex++;
  }

  // 添加剩余内容
  if (lastIndex < html.length) {
    parts.push(html.substring(lastIndex));
  }

  // 返回标记和修改后的 HTML
  markers.html = parts.length > 0 ? parts.join('') : html;

  // 合并相邻的 add/del 为 modify
  return mergeMarkers(markers);
}

/**
 * 合并相邻标记
 */
function mergeMarkers(markers) {
  // 保存 html 属性
  var html = markers.html;
  if (markers.length < 2) {
    markers.html = html;
    return markers;
  }
  var merged = [];
  var i = 0;
  while (i < markers.length) {
    var current = markers[i];

    // 检查是否可以合并为 modify
    if (current.changeType === 'del' && i + 1 < markers.length && markers[i + 1].changeType === 'add') {
      var next = markers[i + 1];
      merged.push(_extends({}, current, {
        id: current.id + '-merged',
        changeType: 'modify',
        newValue: next.newValue,
        oldValue: current.oldValue,
        // 保存所有关联的 marker ID，用于查找目标元素
        targetIds: [current.id, next.id]
      }));
      i += 2;
    } else {
      merged.push(current);
      i++;
    }
  }

  // 恢复 html 属性
  merged.html = html;
  return merged;
}

/**
 * 判断是否有差异
 */
function hasDifference(html, oldValue, newValue) {
  if (!html) return false;
  // 检查是否包含差异标签
  if (/<(ins|del|difftext)[^>]*>/i.test(html)) return true;
  // 检查值是否不同
  return String(oldValue) !== String(newValue);
}

/**
 * 注入样式
 */
function injectStyles(container) {
  var styleId = 'rich-diff-default-styles';
  if (document.getElementById(styleId)) return;
  var style = document.createElement('style');
  style.id = styleId;
  style.textContent = DEFAULT_STYLES;
  document.head.appendChild(style);
}

/**
 * 渲染表单布局
 */
function renderFormLayout(container, fieldResults, markers, config) {
  container.innerHTML = '';
  container.className = 'rich-diff-container';

  // 左侧标记面板
  var markersPanel = document.createElement('div');
  markersPanel.className = 'rich-diff-markers-panel';
  markersPanel.innerHTML = "\n    <h3>\u53D8\u66F4\u6807\u8BB0</h3>\n    <div class=\"rich-diff-stats\">\n      <div class=\"rich-diff-stat\"><span class=\"rich-diff-stat-dot add\"></span><span class=\"add-count\">0</span> \u65B0\u589E</div>\n      <div class=\"rich-diff-stat\"><span class=\"rich-diff-stat-dot del\"></span><span class=\"del-count\">0</span> \u5220\u9664</div>\n      <div class=\"rich-diff-stat\"><span class=\"rich-diff-stat-dot modify\"></span><span class=\"modify-count\">0</span> \u4FEE\u6539</div>\n    </div>\n    <div class=\"rich-diff-markers-list\"></div>\n  ";

  // 右侧表单面板
  var contentPanel = document.createElement('div');
  contentPanel.className = 'rich-diff-content-panel';
  contentPanel.innerHTML = "\n    <h3>\u5BF9\u6BD4\u7ED3\u679C</h3>\n    <div class=\"rich-diff-form\"></div>\n  ";
  container.appendChild(markersPanel);
  container.appendChild(contentPanel);

  // 渲染字段
  var formEl = contentPanel.querySelector('.rich-diff-form');
  renderFields(formEl, fieldResults, config);

  // 渲染标记列表
  renderMarkersList(markersPanel.querySelector('.rich-diff-markers-list'), markers);

  // 更新统计
  updateStats(markersPanel, markers);
  return {
    container: container,
    markersPanel: markersPanel,
    contentPanel: contentPanel,
    markersList: markersPanel.querySelector('.rich-diff-markers-list'),
    formEl: formEl
  };
}

/**
 * 渲染字段列表
 * @param {HTMLElement} formEl - 表单容器
 * @param {Array} fieldResults - 字段结果
 * @param {Object} config - 配置选项
 * @param {string} config.emptyPlaceholder - 空内容占位符，不传则不显示空内容字段
 */
function renderFields(formEl, fieldResults, config) {
  if (config === void 0) {
    config = {};
  }
  var _config2 = config,
    emptyPlaceholder = _config2.emptyPlaceholder;
  formEl.innerHTML = '';
  fieldResults.forEach(function (_ref2) {
    var field = _ref2.field,
      label = _ref2.label,
      result = _ref2.result,
      hasDiff = _ref2.hasDiff;
    var fieldEl = document.createElement('div');
    fieldEl.className = 'rich-diff-field';
    fieldEl.dataset.field = field;
    var contentEl = document.createElement('div');
    contentEl.className = 'rich-diff-field-content';
    contentEl.dataset.field = field;
    if (hasDiff && result.html) {
      // 有差异，直接渲染 HTML（浏览器会正确解析）
      contentEl.innerHTML = result.html;
    } else {
      // 无差异，显示纯文本
      var plainText = result.html ? result.html.replace(/<[^>]*>/g, '') : emptyPlaceholder;
      contentEl.innerHTML = "<span class=\"rich-diff-no-change\">" + escapeHtml(plainText) + "</span>";
    }

    // 创建标签
    var labelEl = document.createElement('div');
    labelEl.className = 'rich-diff-field-label';
    labelEl.textContent = label;
    fieldEl.appendChild(labelEl);
    fieldEl.appendChild(contentEl);
    formEl.appendChild(fieldEl);
  });
}

/**
 * 渲染标记列表
 */
function renderMarkersList(listEl, markers) {
  if (!markers || markers.length === 0) {
    listEl.innerHTML = '<div class="rich-diff-empty">无变更标记</div>';
    return;
  }
  listEl.innerHTML = markers.map(function (marker, index) {
    var typeClass = marker.changeType || 'modify';
    var typeText = {
      add: '新增',
      del: '删除',
      modify: '修改'
    }[typeClass] || typeClass;

    // 渲染 HTML 内容而非源代码
    var oldContent = marker.oldValue || '';
    var newContent = marker.newValue || '';
    return "\n      <div class=\"rich-diff-marker-item " + typeClass + "\" data-marker-index=\"" + index + "\" data-marker-id=\"" + marker.id + "\" data-marker-field=\"" + marker.field + "\">\n        <div class=\"rich-diff-marker-header\">\n          <span class=\"rich-diff-marker-type " + typeClass + "\">" + typeText + "</span>\n          <span class=\"rich-diff-marker-field\">" + (marker.fieldLabel || marker.field) + "</span>\n        </div>\n        <div class=\"rich-diff-marker-content\">\n          " + (oldContent ? "<div class=\"old\"><span class=\"marker-prefix\">- </span>" + truncateHtml(oldContent, 60) + "</div>" : '') + "\n          " + (newContent ? "<div class=\"new\"><span class=\"marker-prefix\">+ </span>" + truncateHtml(newContent, 60) + "</div>" : '') + "\n        </div>\n      </div>\n    ";
  }).join('');
}

/**
 * 更新统计
 */
function updateStats(panel, markers) {
  var counts = {
    add: 0,
    del: 0,
    modify: 0
  };
  markers.forEach(function (m) {
    var type = m.changeType || 'modify';
    counts[type] = (counts[type] || 0) + 1;
  });
  panel.querySelector('.add-count').textContent = counts.add;
  panel.querySelector('.del-count').textContent = counts.del;
  panel.querySelector('.modify-count').textContent = counts.modify;
}

/**
 * 渲染单字段 UI（兼容旧 API）
 */
function renderUI(container, result, markers, fieldName, config) {
  container.innerHTML = '';
  container.className = 'rich-diff-container';
  var markersPanel = document.createElement('div');
  markersPanel.className = 'rich-diff-markers-panel';
  markersPanel.innerHTML = "\n    <h3>\u53D8\u66F4\u6807\u8BB0</h3>\n    <div class=\"rich-diff-stats\">\n      <div class=\"rich-diff-stat\"><span class=\"rich-diff-stat-dot add\"></span><span class=\"add-count\">0</span> \u65B0\u589E</div>\n      <div class=\"rich-diff-stat\"><span class=\"rich-diff-stat-dot del\"></span><span class=\"del-count\">0</span> \u5220\u9664</div>\n      <div class=\"rich-diff-stat\"><span class=\"rich-diff-stat-dot modify\"></span><span class=\"modify-count\">0</span> \u4FEE\u6539</div>\n    </div>\n    <div class=\"rich-diff-markers-list\"></div>\n  ";
  var contentPanel = document.createElement('div');
  contentPanel.className = 'rich-diff-content-panel';
  contentPanel.innerHTML = "\n    <h3>\u5BF9\u6BD4\u7ED3\u679C</h3>\n    <div class=\"rich-diff-content\">" + (result.html || '<div class="rich-diff-empty">无差异</div>') + "</div>\n  ";
  container.appendChild(markersPanel);
  container.appendChild(contentPanel);
  renderMarkersList(markersPanel.querySelector('.rich-diff-markers-list'), markers);
  updateStats(markersPanel, markers);
  return {
    container: container,
    markersPanel: markersPanel,
    contentPanel: contentPanel,
    markersList: markersPanel.querySelector('.rich-diff-markers-list'),
    contentEl: contentPanel.querySelector('.rich-diff-content')
  };
}

/**
 * 绑定交互事件
 */
function bindInteractions(elements, markers, config) {
  var _elements$contentPane, _elements$formEl3;
  if (config === void 0) {
    config = {};
  }
  var state = {
    currentConnector: null,
    activeMarker: null,
    pendingTargetEl: null,
    scrollTimeout: null,
    isScrolling: false
  };
  var _config3 = config,
    _config3$detectStyle = _config3.detectStyle,
    detectStyle = _config3$detectStyle === void 0 ? false : _config3$detectStyle;

  // 滚动监听（只监听右侧内容面板）
  var handleContentScroll = function handleContentScroll() {
    // 滚动时清除连线
    if (state.currentConnector) {
      try {
        state.currentConnector.line.remove();
      } catch (e) {}
      state.currentConnector = null;
    }
    clearConnectors();

    // 标记滚动状态
    state.isScrolling = true;

    // 防抖：滚动结束后重置状态
    if (state.scrollTimeout) {
      clearTimeout(state.scrollTimeout);
    }
    state.scrollTimeout = setTimeout(function () {
      state.isScrolling = false;
    }, 150);
  };

  // 只监听右侧内容面板的滚动
  (_elements$contentPane = elements.contentPanel) == null || _elements$contentPane.addEventListener('scroll', handleContentScroll, {
    passive: true
  });

  // 鼠标进入标记项
  elements.markersList.addEventListener('mouseenter', function (e) {
    var item = e.target.closest('.rich-diff-marker-item');
    if (!item) return;

    // 如果已经激活了同一个 marker，跳过
    if (state.activeMarker === item) return;
    var markerId = item.dataset.markerId;
    var markerIndex = parseInt(item.dataset.markerIndex, 10);
    var marker = markers[markerIndex];

    // 查找目标元素
    var targetEl = null;
    if (marker && marker.targetIds && marker.targetIds.length > 0) {
      // 合并的标记：找到第一个存在的目标元素
      for (var _iterator = _createForOfIteratorHelperLoose(marker.targetIds), _step; !(_step = _iterator()).done;) {
        var _elements$formEl;
        var tid = _step.value;
        var el = (_elements$formEl = elements.formEl) == null ? void 0 : _elements$formEl.querySelector("[data-marker-id=\"" + tid + "\"]");
        if (el) {
          targetEl = el;
          break;
        }
      }
    } else if (markerId) {
      var _elements$formEl2;
      // 单个标记：直接查找
      targetEl = (_elements$formEl2 = elements.formEl) == null ? void 0 : _elements$formEl2.querySelector("[data-marker-id=\"" + markerId + "\"]");
    }
    highlightMarker(elements, item, targetEl, state);

    // 样式变更弹窗
    if (detectStyle && marker && marker.styleChanges) {
      if (!popupInstance) {
        popupInstance = createPopup();
      }
      popupInstance.show(item, marker);
    }
  }, true);

  // 鼠标离开标记项（使用 mouseout 检查是否真正离开）
  elements.markersList.addEventListener('mouseout', function (e) {
    var item = e.target.closest('.rich-diff-marker-item');
    if (!item) return;

    // 检查鼠标是否移动到了 marker 项内部的其他子元素
    // relatedTarget 是鼠标移动到的目标元素
    var relatedTarget = e.relatedTarget;

    // 如果 relatedTarget 仍然在当前 marker 项内，则不清除高亮
    if (relatedTarget && item.contains(relatedTarget)) {
      return;
    }

    // 如果 relatedTarget 是另一个 marker 项，也不清除（由 mouseenter 处理切换）
    if (relatedTarget) {
      var relatedItem = relatedTarget.closest('.rich-diff-marker-item');
      if (relatedItem && relatedItem !== item) {
        // 鼠标移动到另一个 marker 项，由那个项的 mouseenter 处理
        return;
      }
    }

    // 鼠标真正离开了 marker 列表区域
    clearHighlight(elements, state);

    // 隐藏弹窗
    if (popupInstance) {
      popupInstance.hide();
    }
  }, true);

  // 资源预览点击事件
  (_elements$formEl3 = elements.formEl) == null || _elements$formEl3.addEventListener('click', function (e) {
    var previewEl = e.target.closest('.resource-preview[data-type]');
    if (!previewEl) return;
    var type = previewEl.dataset.type;
    var url = previewEl.dataset.url;
    if (!url || type === 'file') return; // file 类型由 a 标签处理

    // 获取预览实例
    if (!resourcePreviewInstance) {
      resourcePreviewInstance = getResourcePreview();
    }

    // 收集同一字段内的所有同类型资源
    var fieldEl = previewEl.closest('.rich-diff-field');
    var allResources = (fieldEl == null ? void 0 : fieldEl.querySelectorAll(".resource-preview[data-type=\"" + type + "\"]")) || [];
    var urls = [].concat(allResources).map(function (el) {
      return el.dataset.url;
    });
    var currentIndex = urls.indexOf(url);
    resourcePreviewInstance.show(urls, type, currentIndex);
  });
  return state;
}

/**
 * 高亮标记
 */
function highlightMarker(elements, markerItem, targetEl, state) {
  clearHighlight(elements, state);
  markerItem.classList.add('active');
  state.activeMarker = markerItem;
  state.pendingTargetEl = targetEl;
  if (targetEl) {
    targetEl.classList.add('highlight');

    // 滚动右侧内容面板到目标元素
    scrollContentToTarget(elements, targetEl, state, function () {
      // 滚动结束后渲染连线
      if (state.activeMarker === markerItem && state.pendingTargetEl === targetEl) {
        renderLeaderLine(markerItem, targetEl, state);
      }
    });
  }
}

/**
 * 滚动内容面板到目标元素
 */
function scrollContentToTarget(elements, targetEl, state, callback) {
  var contentPanel = elements.contentPanel;
  if (!contentPanel) {
    callback == null || callback();
    return;
  }

  // 计算目标元素相对于内容面板的位置
  var targetRect = targetEl.getBoundingClientRect();
  var panelRect = contentPanel.getBoundingClientRect();

  // 判断目标是否在可视区域内
  var isFullyVisible = targetRect.top >= panelRect.top && targetRect.bottom <= panelRect.bottom;
  if (isFullyVisible) {
    // 已经在可视区域，直接渲染连线
    callback == null || callback();
    return;
  }

  // 标记正在滚动
  state.isScrolling = true;

  // 计算滚动位置
  var targetTop = targetEl.offsetTop;
  var panelHeight = contentPanel.clientHeight;
  var targetHeight = targetEl.offsetHeight;

  // 居中显示
  var scrollTop = targetTop - panelHeight / 2 + targetHeight / 2;

  // 监听滚动结束
  var _onScrollEnd = function onScrollEnd() {
    state.isScrolling = false;
    contentPanel.removeEventListener('scrollend', _onScrollEnd);
    callback == null || callback();
  };

  // 使用 scrollend 事件（现代浏览器支持）
  if ('onscrollend' in contentPanel) {
    contentPanel.addEventListener('scrollend', _onScrollEnd, {
      once: true
    });
  } else {
    // 降级：使用防抖
    var scrollTimer = null;
    var _onScroll = function onScroll() {
      if (scrollTimer) clearTimeout(scrollTimer);
      scrollTimer = setTimeout(function () {
        state.isScrolling = false;
        contentPanel.removeEventListener('scroll', _onScroll);
        callback == null || callback();
      }, 150);
    };
    contentPanel.addEventListener('scroll', _onScroll, {
      passive: true
    });
  }

  // 执行滚动
  contentPanel.scrollTo({
    top: Math.max(0, scrollTop),
    behavior: 'smooth'
  });
}

/**
 * 渲染 LeaderLine 连线
 */
function renderLeaderLine(markerItem, targetEl, state) {
  // 如果正在滚动，跳过渲染
  if (state.isScrolling) return;

  // 清除旧连线
  if (state.currentConnector) {
    try {
      state.currentConnector.line.remove();
    } catch (e) {}
    state.currentConnector = null;
  }
  clearConnectors();

  // 创建新连线
  if (typeof window !== 'undefined' && window.LeaderLine) {
    try {
      var changeType = markerItem.classList.contains('add') ? 'add' : markerItem.classList.contains('del') ? 'del' : 'modify';
      var color = changeType === 'add' ? '#1878E8' : changeType === 'del' ? '#D32F2F' : '#E65100';
      state.currentConnector = createConnector(markerItem, targetEl, {
        color: color,
        size: 2,
        path: 'fluid',
        startPlug: 'disc',
        endPlug: 'arrow2'
      });
    } catch (e) {
      // 忽略连线创建错误
    }
  }
}

/**
 * 清除高亮
 */
function clearHighlight(elements, state) {
  elements.markersList.querySelectorAll('.active').forEach(function (el) {
    el.classList.remove('active');
  });
  var formEl = elements.formEl || elements.contentEl;
  if (formEl) {
    formEl.querySelectorAll('.highlight').forEach(function (el) {
      el.classList.remove('highlight');
    });
  }
  if (state.currentConnector) {
    try {
      state.currentConnector.line.remove();
    } catch (e) {}
    state.currentConnector = null;
  }
  clearConnectors();
  state.activeMarker = null;
}

/**
 * 销毁渲染器
 */
function destroyRenderer(state, container) {
  // 清理定时器
  if (state.scrollTimeout) {
    clearTimeout(state.scrollTimeout);
    state.scrollTimeout = null;
  }
  if (state.currentConnector) {
    try {
      state.currentConnector.line.remove();
    } catch (e) {}
  }
  clearConnectors();

  // 销毁弹窗
  if (popupInstance) {
    popupInstance.destroy();
    popupInstance = null;
  }

  // 销毁资源预览
  if (resourcePreviewInstance) {
    resourcePreviewInstance.destroy();
    resourcePreviewInstance = null;
  }

  // 清理 marker 存储
  if (container) {
    var markerElements = container.querySelectorAll('[data-style-diff]');
    markerElements.forEach(function (el) {
      el.removeEventListener('mouseenter', null);
      el.removeEventListener('mouseleave', null);
    });
  }
  markerStore.clear();
}

/**
 * HTML 转义
 */
function escapeHtml(str) {
  if (!str) return '';
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

/**
 * 截断 HTML 内容（保留标签结构）
 * @param {string} html - HTML 字符串
 * @param {number} maxLen - 最大文本长度
 * @returns {string}
 */
function truncateHtml(html, maxLen) {
  if (!html) return '';

  // 创建临时容器解析 HTML
  var temp = document.createElement('div');
  temp.innerHTML = html;

  // 获取纯文本内容
  var text = temp.textContent || temp.innerText || '';

  // 如果文本长度在限制内，直接返回原 HTML
  if (text.length <= maxLen) {
    return html;
  }

  // 截断文本并添加省略号
  var truncatedText = text.substring(0, maxLen) + '...';

  // 返回截断后的纯文本（保留差异标签样式）
  return "<span>" + escapeHtml(truncatedText) + "</span>";
}

/**
 * 渲染器模块
 * 提供默认渲染器和自定义渲染器支持
 */

// 默认渲染器实例
var currentRenderer = defaultRenderer;

/**
 * 设置自定义渲染器
 * @param {Object} renderer - 渲染器对象，需实现 render 方法
 */
function setRenderer(renderer) {
  if (renderer && typeof renderer.render === 'function') {
    currentRenderer = renderer;
  } else {
    console.warn('[rich-diff] 无效的渲染器，使用默认渲染器');
    currentRenderer = defaultRenderer;
  }
}

/**
 * 获取当前渲染器
 * @returns {Object} 当前渲染器
 */
function getRenderer() {
  return currentRenderer;
}

/**
 * 渲染对比结果
 * @param {Object} options - 渲染选项
 * @param {HTMLElement} options.container - 渲染目标容器（可选）
 * @param {string} options.oldContent - 旧内容（单字段模式）
 * @param {string} options.newContent - 新内容（单字段模式）
 * @param {string} options.fieldName - 字段名称（默认 'content'）
 * @param {Object} options.oldData - 旧数据对象（多字段模式）
 * @param {Object} options.newData - 新数据对象（多字段模式）
 * @param {Array} options.fields - 字段配置 [{ label, field, sort }]
 * @param {Object} options.diffResult - 已有的对比结果（可选，优先使用）
 * @param {Object} options.rendererConfig - 渲染器配置（可选）
 * @param {boolean} options.detectStyle - 是否检测样式变更（可选）
 * @param {Object} options.styleDiffConfig - 样式对比配置（可选）
 * @returns {Object} { html, markers, container } - 若传入容器则已渲染，否则返回原始数据
 */
function render(options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options,
    container = _options.container,
    oldContent = _options.oldContent,
    newContent = _options.newContent,
    _options$fieldName = _options.fieldName,
    fieldName = _options$fieldName === void 0 ? 'content' : _options$fieldName,
    oldData = _options.oldData,
    newData = _options.newData,
    fields = _options.fields,
    diffResult = _options.diffResult,
    rendererConfig = _options.rendererConfig,
    detectStyle = _options.detectStyle,
    styleDiffConfig = _options.styleDiffConfig;

  // 如果不传容器，返回原始数据供用户自行渲染
  if (!container) {
    return diffResult || null;
  }

  // 传了容器，使用渲染器渲染
  return currentRenderer.render({
    container: container,
    oldContent: oldContent,
    newContent: newContent,
    fieldName: fieldName,
    oldData: oldData,
    newData: newData,
    fields: fields,
    diffResult: diffResult,
    config: rendererConfig,
    detectStyle: detectStyle,
    styleDiffConfig: styleDiffConfig
  });
}

/**
 * rich-diff - 可扩展的富文本对比框架
 *
 * API 分层：
 * - 引擎层：多引擎支持（htmldiff / diffdom）
 * - 适配器层：统一输出格式（ShadowDOM 降级兼容）
 * - 工具层：业务对比（字段、媒体、自定义字段）
 * - 展示层：标记提取、LeaderLine 连线
 */


// ── 便捷方法 ──

/**
 * 使用指定引擎对比 HTML 内容
 * @param {string} engine - 引擎名称
 * @param {string} oldHtml - 旧 HTML
 * @param {string} newHtml - 新 HTML
 * @param {string} fieldName - 字段名称
 * @returns {Object} { html, useShadowDOM, markers }
 */
function diffWithEngine(engine, oldHtml, newHtml, fieldName) {
  setEngine(engine);
  return diffHTML(oldHtml, newHtml, fieldName);
}

// 默认导出
var index$1 = {
  // 引擎层
  setEngine: setEngine,
  getEngineName: getEngineName,
  getAvailableEngines: getAvailableEngines,
  // 适配器层
  diffHTML: diffHTML,
  diffText: diffText,
  // 工具层
  computeArticleDiff: computeArticleDiff,
  diffMediaList: diffMediaList,
  diffCustomFields: diffCustomFields$1,
  // 展示层
  generateMarkers: generateMarkers,
  sortMarkers: sortMarkers,
  // 渲染器
  render: render,
  setRenderer: setRenderer,
  // LeaderLine
  createConnector: createConnector,
  clearConnectors: clearConnectors,
  // 便捷
  diffWithEngine: diffWithEngine
};

export { ChangeTypes, DefaultConfig, ErrorTypes, MediaTypes, cleanContent, clearConnectors, compareStyles, computeArticleDiff, createConnector, createConnectorFromMarker, createConnectors, createPopup, index$1 as default, defaultRenderer, detectChangeType, diffCustomField, diffCustomFields as diffCustomFieldItems, diffCustomFields$1 as diffCustomFields, diffDocFile, diffDynamicField, diffField, diffFixedFields, diffHTML, diffMediaList, diffPriority, diffStyle, diffText, diffWithEngine, extractDiffMarkers, extractMediaChanges$1 as extractMediaChanges, extractStyleElements, findElementById, generateMarkers, getAvailableEngines, getConnectorCount, getDiffRanges, getEngine, getEngineName, getRenderer, hasDiffMarkers, hasEngine, hasStyleDiff, isLeaderLineAvailable, matchElements, parseDocFile, parseStyle, removeConnector, render, resetAllCounters, setEngine, setRenderer, sortMarkers, updateAllConnectors, updateConnector };
//# sourceMappingURL=rich-diff.dev.js.map
