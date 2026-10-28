function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var htmldiff_min=function(e){var t={};function n(s){if(t[s])return t[s].exports;var r=t[s]={i:s,l:false,exports:{}};return e[s].call(r.exports,r,r.exports,n),r.l=true,r.exports}return n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{configurable:false,enumerable:true,get:s});},n.r=function(e){Object.defineProperty(e,"__esModule",{value:true});},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist/",n(n.s=1)}([function(e,t,n){n.r(t);var s={equal:0,delete:1,insert:2,none:3,replace:4};class r{constructor(e,t,n){this.startInOld=e,this.startInNew=t,this.size=n;}get endInOld(){return this.startInOld+this.size}get endInNew(){return this.startInNew+this.size}}class i{constructor(){this.blockSize=0,this.repeatingWordsAccuracy=0,this.ignoreWhitespaceDifferences=false;}}const o=/^\s*<\/?[^>]+>\s*$/,l=/<[^\s>]+/,h=/^(\s|&nbsp;)+$/,c=/[\w\#@]+/,d=["<img"];function a(e){return !d.some(t=>null!==e&&e.startsWith(t))&&o.test(e)}function u(e,t,n){return ["<",t,' class="',n,'">',e,"</",t,">"].join("")}function p(e){return "<"===e}function f(e){return "&"===e}function w(e){return ";"===e}function g(e){return h.test(e)}function I(e){return a(e)?function(e){return e=l.exec(e)[0]+(e.endsWith("/>")?"/>":">")}(e):e}function W(e){return c.test(e)}function O(e,t,n){return e.push(t),e.length>n&&e.shift(),e.length!==n?null:e.join("")}class x{constructor(e,t,n,s,r,i,o){this.oldWords=e,this.newWords=t,this.startInOld=n,this.endInOld=s,this.startInNew=r,this.endInNew=i,this.options=o;}indexNewWords(){this.wordIndices=new Map;let e=[];for(let t=this.startInNew;t<this.endInNew;t++){let n=O(e,this.normalizeForIndex(this.newWords[t]),this.options.blockSize);null!==n&&(this.wordIndices.has(n)?this.wordIndices.get(n).push(t):this.wordIndices.set(n,[t]));}}normalizeForIndex(e){return e=I(e),this.options.IgnoreWhiteSpaceDifferences&&g(e)?" ":e}findMatch(){if(this.indexNewWords(),this.removeRepeatingWords(),0===this.wordIndices.length)return null;let e=this.startInOld,t=this.startInNew,n=0,s=new Map;const i=this.options.blockSize;let o=[];for(let r=this.startInOld;r<this.endInOld;r++){let l=O(o,this.normalizeForIndex(this.oldWords[r]),i);if(null===l)continue;let h=new Map;if(this.wordIndices.has(l)){for(let o of this.wordIndices.get(l)){let l=(s.has(o-1)?s.get(o-1):0)+1;h.set(o,l),l>n&&(e=r-l-i+2,t=o-l-i+2,n=l);}s=h;}else s=h;}return 0!==n?new r(e,t,n+i-1):null}removeRepeatingWords(){let e=this.newWords.length+this.options.repeatingWordsAccuracy,t=Array.from(this.wordIndices.entries()).filter(t=>t[1].length>e).map(e=>e[0]);for(let e of t)this.wordIndices.delete(e);}}class m{constructor(e,t,n,s,r){this.action=e,this.startInOld=t,this.endInOld=n,this.startInNew=s,this.endInNew=r;}}var b={character:0,tag:1,whitespace:2,entity:3};function N(e,t){let n={mode:b.character,currentWord:[],words:[]},s=function(e,t){let n=new Map;if(null===t)return n;for(let s of t){let t;for(;null!==(t=s.exec(e));){if(n.has(t.index))throw new Error("One or more block expressions result in a text sequence that overlaps. Current expression: "+s.toString());n.set(t.index,t.index+t[0].length);}}return n}(e,t),r=!!s.size,i=false,o=-1;for(let t=0;t<e.length;t++){var l=e[t];if(r){o===index&&(o=-1,i=false);if(s.has(index)&&(i=true,o=s.get(index)),i){n.currentWord.push(l),n.mode=b.character;continue}}switch(n.mode){case b.character:p(l)?k(n,"<",b.tag):f(l)?k(n,l,b.entity):g(l)?k(n,l,b.whitespace):W(l)&&(0===n.currentWord.length||W(n.currentWord[n.currentWord.length-1]))?n.currentWord.push(l):k(n,l,b.character);break;case b.tag:">"===l?(n.currentWord.push(l),n.words.push(n.currentWord.join("")),n.currentWord=[],n.mode=g(l)?b.whitespace:b.character):n.currentWord.push(l);break;case b.whitespace:p(l)?k(n,l,b.tag):f(l)?k(n,l,b.entity):g(l)?n.currentWord.push(l):k(n,l,b.character);break;case b.entity:if(p(l))k(n,l,b.tag);else if(g(l))k(n,l,b.whitespace);else if(w(l)){let e=true;if(0!==n.currentWord.length&&(n.currentWord.push(l),n.words.push(n.currentWord.join("")),n.words.length>2&&g(n.words[n.words.length-2])&&g(n.words[n.words.length-1]))){let t=n.words[n.words.length-2],s=n.words[n.words.length-1];n.words.splice(n.words.length-2,2),n.currentWord=[(t+s).split()],n.mode=b.whitespace,e=false;}e&&(n.currentWord=[],n.mode=b.character);}else W(l)?n.currentWord.push(l):k(n,l,b.character);}}return 0!==n.currentWord.length&&n.words.push(n.currentWord.join("")),n.words}function k(e,t,n){0!==e.currentWord.length&&e.words.push(e.currentWord.join("")),e.currentWord=[t],e.mode=n;}const y=4,M=new Map([["</strong>",0],["</em>",0],["</b>",0],["</i>",0],["</big>",0],["</small>",0],["</u>",0],["</sub>",0],["</strike>",0],["</s>",0]]),T=/<((strong)|(b)|(i)|(em)|(big)|(small)|(u)|(sub)|(sup)|(strike)|(s))[\>\s]+/gi;class v{constructor(e,t){this.content=[],this.newText=t,this.oldText=e,this.specialTagDiffStack=[],this.newWords=[],this.oldWords=[],this.matchGranularity=0,this.blockExpressions=[],this.repeatingWordsAccuracy=1,this.ignoreWhiteSpaceDifferences=false,this.orphanMatchThreshold=0;}build(){if(this.oldText===this.newText)return this.newText;this.splitInputsIntoWords(),this.matchGranularity=Math.min(y,this.oldWords.length,this.newWords.length);let e=this.operations();for(let t of e)this.performOperation(t);return this.content.join("")}addBlockExpression(e){this.blockExpressions.push(e);}splitInputsIntoWords(){this.oldWords=N(this.oldText,this.blockExpressions),this.oldText=null,this.newWords=N(this.newText,this.blockExpressions),this.newText=null;}performOperation(e){switch(e.action){case s.equal:this.processEqualOperation(e);break;case s.delete:this.processDeleteOperation(e,"diffdel");break;case s.insert:this.processInsertOperation(e,"diffins");break;case s.none:break;case s.replace:this.processReplaceOperation(e);}}processReplaceOperation(e){this.processDeleteOperation(e,"diffmod"),this.processInsertOperation(e,"diffmod");}processInsertOperation(e,t){let n=this.newWords.filter((t,n)=>n>=e.startInNew&&n<e.endInNew);this.insertTag("ins",t,n);}processDeleteOperation(e,t){let n=this.oldWords.filter((t,n)=>n>=e.startInOld&&n<e.endInOld);this.insertTag("del",t,n);}processEqualOperation(e){let t=this.newWords.filter((t,n)=>n>=e.startInNew&&n<e.endInNew);this.content.push(t.join(""));}insertTag(e,t,n){for(;n.length;){let s=this.extractConsecutiveWords(n,e=>!a(e)),r="",i=false;if(0!==s.length){let n=u(s.join(""),e,t);this.content.push(n);}else {if(T.test(n[0])){if(this.specialTagDiffStack.push(n[0]),r='<ins class="mod">',"del"===e)for(n.shift();n.length>0&&T.test(n[0]);)n.shift();}else if(M.has(n[0])){let t=0===this.specialTagDiffStack.length?null:this.specialTagDiffStack.pop();if(null!==t&&t===n[0].replace(/\//g,"")&&(r="</ins>",i=true),"del"===e)for(n.shift();n.length>0&&M.has(n[0]);)n.shift();}if(0===n.length&&0===r.length)break;i?this.content.push(r+this.extractConsecutiveWords(n,a).join("")):this.content.push(this.extractConsecutiveWords(n,a).join("")+r);}}}extractConsecutiveWords(e,t){let n=null;for(let s=0;s<e.length;s++){let r=e[s];if(0===s&&" "===r&&(e[s]="&nbsp;"),!t(r)){n=s;break}}if(null!==n){let t=e.filter((e,t)=>t>=0&&t<n);return n>0&&e.splice(0,n),t}{let t=e.filter((t,n)=>n>=0&&n<e.length);return e.splice(0,e.length),t}}operations(){let e=0,t=0,n=[],i=this.matchingBlocks();i.push(new r(this.oldWords.length,this.newWords.length,0));let o=this.removeOrphans(i);for(let r of o){let i,o=e===r.startInOld,l=t===r.startInNew;(i=o||l?o&&!l?s.insert:o?s.none:s.delete:s.replace)!==s.none&&n.push(new m(i,e,r.startInOld,t,r.startInNew)),0!==r.length&&n.push(new m(s.equal,r.startInOld,r.endInOld,r.startInNew,r.endInNew)),e=r.endInOld,t=r.endInNew;}return n}*removeOrphans(e){let t=null,n=null;for(let s of e){if(null===n){t=new r(0,0,0),n=s;continue}if(t.endInOld===n.startInOld&&t.endInNew===n.startInNew||n.endInOld===s.startInOld&&n.endInNew===s.startInNew){yield n;t=n;n=s;continue}let e=(e,t)=>e+t.length,i=this.oldWords.slice(t.endInOld,s.startInOld).reduce(e,0),o=this.newWords.slice(t.endInNew,s.startInNew).reduce(e,0);this.newWords.slice(n.startInNew,n.endInNew).reduce(e,0)>Math.max(i,o)*this.orphanMatchThreshold&&(yield n),t=n,n=s;}yield n;}matchingBlocks(){let e=[];return this.findMatchingBlocks(0,this.oldWords.length,0,this.newWords.length,e),e}findMatchingBlocks(e,t,n,s,r){let i=this.findMatch(e,t,n,s);null!==i&&(e<i.startInOld&&n<i.startInNew&&this.findMatchingBlocks(e,i.startInOld,n,i.startInNew,r),r.push(i),i.endInOld<t&&i.endInNew<s&&this.findMatchingBlocks(i.endInOld,t,i.endInNew,s,r));}findMatch(e,t,n,s){for(let r=this.matchGranularity;r>0;r--){let o=new i;o.blockSize=r,o.repeatingWordsAccuracy=this.repeatingWordsAccuracy,o.ignoreWhitespaceDifferences=this.ignoreWhiteSpaceDifferences;let l=new x(this.oldWords,this.newWords,e,t,n,s,o).findMatch();if(null!==l)return l}return null}}v.execute=function(e,t){return new v(e,t).build()};t.default=v;},function(e,t,n){e.exports=n(0);}]);

var HtmlDiff = /*@__PURE__*/getDefaultExportFromCjs(htmldiff_min);

/**
 * htmldiff-js 引擎封装
 * 直接导入依赖，打包时一起打包
 */

// 引擎名称
const engineName$1 = 'htmldiff';

/**
 * 对比 HTML 内容
 * @param {string} oldHtml - 旧 HTML
 * @param {string} newHtml - 新 HTML
 * @returns {string} 带 <ins>/<del> 标签的 HTML
 */
function diffHTML$2(oldHtml, newHtml) {
  // 快速相等判断
  if (oldHtml === newHtml) return newHtml
  if (!oldHtml) return newHtml
  if (!newHtml) return ''

  // 使用打包进来的 HtmlDiff
  if (!HtmlDiff) {
    console.warn('[rich-diff] htmldiff-js 未正确加载');
    return newHtml
  }

  try {
    return HtmlDiff.execute(oldHtml, newHtml)
  } catch (error) {
    console.warn('[rich-diff] htmldiff 对比失败:', error);
    return newHtml
  }
}

/**
 * 对比纯文本
 * @param {string} oldText - 旧文本
 * @param {string} newText - 新文本
 * @returns {string} 带差异标记的文本
 */
function diffText$2(oldText, newText) {
  return diffHTML$2(oldText, newText)
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


var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        var arguments$1 = arguments;

        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments$1[i];
            for (var p in s) { if (Object.prototype.hasOwnProperty.call(s, p)) { t[p] = s[p]; } }
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __spreadArray(to, from, pack) {
    { for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) { ar = Array.prototype.slice.call(from, 0, i); }
            ar[i] = from[i];
        }
    } }
    return to.concat(ar || Array.prototype.slice.call(from));
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var Diff = /** @class */ (function () {
    function Diff(options) {
        if (options === void 0) { options = {}; }
        var _this = this;
        Object.entries(options).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            return (_this[key] = value);
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
}());
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

    if (simplifiedCheck === void 0) { simplifiedCheck = false; }
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
                return (element.nodeType === 1 ||
                    (typeof element.nodeName === "string" &&
                        element.nodeName !== "#text" &&
                        element.nodeName !== "#comment") ||
                    // Additional check for real DOM elements that might not have nodeType
                    (element.tagName && typeof element.tagName === "string") ||
                    // Check if it has DOM element-like properties (fallback)
                    (element.setAttribute &&
                        typeof element.setAttribute === "function"));
            }
            if (elementTypeName === "Text") {
                return element.nodeType === 3 || element.nodeName === "#text";
            }
            if (elementTypeName === "Comment") {
                return element.nodeType === 8 || element.nodeName === "#comment";
            }
            // For HTML element types, check nodeName or tagName
            if (elementTypeName.startsWith("HTML") &&
                elementTypeName.endsWith("Element")) {
                var tagName = elementTypeName.slice(4, -7).toLowerCase();
                return ((element.nodeName &&
                    element.nodeName.toLowerCase() === tagName) ||
                    (element.tagName &&
                        element.tagName.toLowerCase() === tagName));
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
                return typeof ((_b = (_a = element === null || element === void 0 ? void 0 : element.ownerDocument) === null || _a === void 0 ? void 0 : _a.defaultView) === null || _b === void 0 ? void 0 : _b[elementTypeName]) === "function" &&
                    element instanceof
                        element.ownerDocument.defaultView[elementTypeName];
            });
        }
        return false;
    }
    // DOM-based check
    return elementTypeNames.some(function (elementTypeName) {
        var _a, _b;
        // We need to check if the specified type is defined
        // because otherwise instanceof throws an exception.
        return typeof ((_b = (_a = element === null || element === void 0 ? void 0 : element.ownerDocument) === null || _a === void 0 ? void 0 : _a.defaultView) === null || _b === void 0 ? void 0 : _b[elementTypeName]) ===
            "function" &&
            element instanceof
                element.ownerDocument.defaultView[elementTypeName];
    });
}

function objToNode(objNode, insideSvg, options) {
    var node;
    if (objNode.nodeName === "#text") {
        node = options.document.createTextNode(objNode.data);
    }
    else if (objNode.nodeName === "#comment") {
        node = options.document.createComment(objNode.data);
    }
    else {
        if (insideSvg) {
            node = options.document.createElementNS("http://www.w3.org/2000/svg", objNode.nodeName);
            if (objNode.nodeName === "foreignObject") {
                insideSvg = false;
            }
        }
        else if (objNode.nodeName.toLowerCase() === "svg") {
            node = options.document.createElementNS("http://www.w3.org/2000/svg", "svg");
            insideSvg = true;
        }
        else {
            node = options.document.createElement(objNode.nodeName);
        }
        if (objNode.attributes) {
            Object.entries(objNode.attributes).forEach(function (_a) {
                var key = _a[0], value = _a[1];
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
            if (objNode.value &&
                checkElementType(node, options.simplifiedElementCheck, "HTMLButtonElement", "HTMLDataElement", "HTMLInputElement", "HTMLLIElement", "HTMLMeterElement", "HTMLOptionElement", "HTMLProgressElement", "HTMLParamElement")) {
                node.value = objNode.value;
            }
            if (objNode.checked &&
                checkElementType(node, options.simplifiedElementCheck, "HTMLInputElement")) {
                node.checked = objNode.checked;
            }
            if (objNode.selected &&
                checkElementType(node, options.simplifiedElementCheck, "HTMLOptionElement")) {
                node.selected = objNode.selected;
            }
        }
    }
    return node;
}

// ===== Apply a diff =====
var getFromRoute = function (node, route) {
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
            if (!node ||
                !checkElementType(node, options.simplifiedElementCheck, "Element")) {
                return false;
            }
            node.setAttribute(diff[options._const.name], diff[options._const.value]);
            break;
        case options._const.modifyAttribute:
            if (!node ||
                !checkElementType(node, options.simplifiedElementCheck, "Element")) {
                return false;
            }
            node.setAttribute(diff[options._const.name], diff[options._const.newValue]);
            if (checkElementType(node, options.simplifiedElementCheck, "HTMLInputElement") &&
                diff[options._const.name] === "value") {
                node.value = diff[options._const.newValue];
            }
            break;
        case options._const.removeAttribute:
            if (!node ||
                !checkElementType(node, options.simplifiedElementCheck, "Element")) {
                return false;
            }
            node.removeAttribute(diff[options._const.name]);
            break;
        case options._const.modifyTextElement:
            if (!node ||
                !checkElementType(node, options.simplifiedElementCheck, "Text")) {
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
            if (!node ||
                !checkElementType(node, options.simplifiedElementCheck, "Comment")) {
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
        case options._const.replaceElement: {
            var insideSvg = diff[options._const.newValue].nodeName.toLowerCase() === "svg" ||
                node.parentNode.namespaceURI === "http://www.w3.org/2000/svg";
            node.parentNode.replaceChild(objToNode(diff[options._const.newValue], insideSvg, options), node);
            break;
        }
        case options._const.relocateGroup:
            nodeArray = __spreadArray([], new Array(diff[options._const.groupLength])).map(function () {
                return node.removeChild(node.childNodes[diff[options._const.from]]);
            });
            nodeArray.forEach(function (childNode, index) {
                if (index === 0) {
                    reference =
                        node.childNodes[diff[options._const.to]];
                }
                node.insertBefore(childNode, reference || null);
            });
            break;
        case options._const.removeElement:
            node.parentNode.removeChild(node);
            break;
        case options._const.addElement: {
            var parentRoute = route.slice();
            var c = parentRoute.splice(parentRoute.length - 1, 1)[0];
            node = getFromRoute(tree, parentRoute);
            if (!checkElementType(node, options.simplifiedElementCheck, "Element")) {
                return false;
            }
            node.insertBefore(objToNode(diff[options._const.element], node.namespaceURI === "http://www.w3.org/2000/svg", options), node.childNodes[c] || null);
            break;
        }
        case options._const.removeTextElement: {
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
        case options._const.addTextElement: {
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

var elementDescriptors = function (el) {
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
var findUniqueDescriptors = function (li) {
    var uniqueDescriptors = {};
    var duplicateDescriptors = {};
    li.forEach(function (node) {
        elementDescriptors(node).forEach(function (descriptor) {
            var inUnique = descriptor in uniqueDescriptors;
            var inDupes = descriptor in duplicateDescriptors;
            if (!inUnique && !inDupes) {
                uniqueDescriptors[descriptor] = true;
            }
            else if (inUnique) {
                delete uniqueDescriptors[descriptor];
                duplicateDescriptors[descriptor] = true;
            }
        });
    });
    return uniqueDescriptors;
};
var uniqueInBoth = function (l1, l2) {
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
var removeDone = function (tree) {
    delete tree.outerDone;
    delete tree.innerDone;
    delete tree.valueDone;
    if (tree.childNodes) {
        return tree.childNodes.every(removeDone);
    }
    else {
        return true;
    }
};
var cleanNode = function (diffNode) {
    if (Object.prototype.hasOwnProperty.call(diffNode, "data")) {
        var textNode = {
            nodeName: diffNode.nodeName === "#text" ? "#text" : "#comment",
            data: diffNode.data
        };
        return textNode;
    }
    else {
        var elementNode = {
            nodeName: diffNode.nodeName
        };
        diffNode = diffNode;
        if (Object.prototype.hasOwnProperty.call(diffNode, "attributes")) {
            elementNode.attributes = __assign({}, diffNode.attributes);
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
                return cleanNode(diffChildNode);
            });
        }
        return elementNode;
    }
};
var isEqual = function (e1, e2) {
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
            if (e1.attributes[attribute] !==
                e2.attributes[attribute]) {
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
            return isEqual(childNode, e2.childNodes[index]);
        })) {
            return false;
        }
    }
    return true;
};
var roughlyEqual = function (e1, e2, uniqueDescriptors, sameSiblings, preventRecursion) {
    if (preventRecursion === void 0) { preventRecursion = false; }
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
        return preventRecursion
            ? true
            : e1.data === e2.data;
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
            }
            else {
                var idDescriptor = "".concat(e1.nodeName, "#").concat(e1.attributes.id);
                if (idDescriptor in uniqueDescriptors) {
                    return true;
                }
            }
        }
        if (e1.attributes["class"] &&
            e1.attributes["class"] === e2.attributes["class"]) {
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
    }
    else {
        // note: we only allow one level of recursion at any depth. If 'preventRecursion'
        // was not set, we must explicitly force it to true for child iterations.
        var childUniqueDescriptors_1 = uniqueInBoth(nodeList1, nodeList2);
        return nodeList1.every(function (element, index) {
            return roughlyEqual(element, nodeList2[index], childUniqueDescriptors_1, true, true);
        });
    }
};
/**
 * based on https://en.wikibooks.org/wiki/Algorithm_implementation/Strings/Longest_common_substring#JavaScript
 */
var findCommonSubsets = function (c1, c2, marked1, marked2) {
    var lcsSize = 0;
    var index = [];
    var c1Length = c1.length;
    var c2Length = c2.length;
    var // set up the matching table
    matches = __spreadArray([], new Array(c1Length + 1)).map(function () { return []; });
    var uniqueDescriptors = uniqueInBoth(c1, c2);
    var // If all of the elements are the same tag, id and class, then we can
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
            if (!marked1[c1Index] &&
                !marked2[c2Index] &&
                roughlyEqual(c1Element, c2Element, uniqueDescriptors, subsetsSame)) {
                matches[c1Index + 1][c2Index + 1] = matches[c1Index][c2Index]
                    ? matches[c1Index][c2Index] + 1
                    : 1;
                if (matches[c1Index + 1][c2Index + 1] >= lcsSize) {
                    lcsSize = matches[c1Index + 1][c2Index + 1];
                    index = [c1Index + 1, c2Index + 1];
                }
            }
            else {
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
var makeBooleanArray = function (n, v) {
    return __spreadArray([], new Array(n)).map(function () { return v; });
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
var getGapInformation = function (t1, t2, stable) {
    var gaps1 = t1.childNodes
        ? makeBooleanArray(t1.childNodes.length, true)
        : [];
    var gaps2 = t2.childNodes
        ? makeBooleanArray(t2.childNodes.length, true)
        : [];
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
var markBoth = function (marked1, marked2, subset, i) {
    marked1[subset.oldValue + i] = true;
    marked2[subset.newValue + i] = true;
};
var markSubTrees = function (oldTree, newTree) {
    // note: the child lists are views, and so update as we update old/newTree
    var oldChildren = oldTree.childNodes ? oldTree.childNodes : [];
    var newChildren = newTree.childNodes ? newTree.childNodes : [];
    var marked1 = makeBooleanArray(oldChildren.length, false);
    var marked2 = makeBooleanArray(newChildren.length, false);
    var subsets = [];
    var returnIndex = function () {
        return arguments[1];
    };
    var foundAllSubsets = false;
    var _loop_1 = function () {
        var subset = findCommonSubsets(oldChildren, newChildren, marked1, marked2);
        if (subset) {
            subsets.push(subset);
            var subsetArray = __spreadArray([], new Array(subset.length)).map(returnIndex);
            subsetArray.forEach(function (item) {
                return markBoth(marked1, marked2, subset, item);
            });
        }
        else {
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
var DiffTracker = /** @class */ (function () {
    function DiffTracker() {
        this.list = [];
    }
    DiffTracker.prototype.add = function (diffs) {
        var _a;
        (_a = this.list).push.apply(_a, diffs);
    };
    DiffTracker.prototype.forEach = function (fn) {
        this.list.forEach(function (li) { return fn(li); });
    };
    return DiffTracker;
}());

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
            node.attributes[diff[options._const.name]] =
                diff[options._const.value];
            if (diff[options._const.name] === "checked") {
                node.checked = true;
            }
            else if (diff[options._const.name] === "selected") {
                node.selected = true;
            }
            else if (node.nodeName === "INPUT" &&
                diff[options._const.name] === "value") {
                node.value = diff[options._const.value];
            }
            break;
        case options._const.modifyAttribute:
            node.attributes[diff[options._const.name]] =
                diff[options._const.newValue];
            break;
        case options._const.removeAttribute:
            delete node.attributes[diff[options._const.name]];
            if (Object.keys(node.attributes).length === 0) {
                delete node.attributes;
            }
            if (diff[options._const.name] === "checked") {
                node.checked = false;
            }
            else if (diff[options._const.name] === "selected") {
                delete node.selected;
            }
            else if (node.nodeName === "INPUT" &&
                diff[options._const.name] === "value") {
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
            newNode = cleanNode(diff[options._const.newValue]);
            parentNode.childNodes[nodeIndex] = newNode;
            break;
        case options._const.relocateGroup:
            nodeArray = node.childNodes
                .splice(diff[options._const.from], diff[options._const.groupLength])
                .reverse();
            nodeArray.forEach(function (movedNode) {
                return node.childNodes.splice(diff[options._const.to], 0, movedNode);
            });
            if (node.subsets) {
                node.subsets.forEach(function (map) {
                    if (diff[options._const.from] < diff[options._const.to] &&
                        map.oldValue <= diff[options._const.to] &&
                        map.oldValue > diff[options._const.from]) {
                        map.oldValue -= diff[options._const.groupLength];
                        var splitLength = map.oldValue + map.length - diff[options._const.to];
                        if (splitLength > 0) {
                            // new insertion splits map.
                            newSubsets.push({
                                oldValue: diff[options._const.to] +
                                    diff[options._const.groupLength],
                                newValue: map.newValue + map.length - splitLength,
                                length: splitLength
                            });
                            map.length -= splitLength;
                        }
                    }
                    else if (diff[options._const.from] > diff[options._const.to] &&
                        map.oldValue > diff[options._const.to] &&
                        map.oldValue < diff[options._const.from]) {
                        map.oldValue += diff[options._const.groupLength];
                        var splitLength = map.oldValue + map.length - diff[options._const.to];
                        if (splitLength > 0) {
                            // new insertion splits map.
                            newSubsets.push({
                                oldValue: diff[options._const.to] +
                                    diff[options._const.groupLength],
                                newValue: map.newValue + map.length - splitLength,
                                length: splitLength
                            });
                            map.length -= splitLength;
                        }
                    }
                    else if (map.oldValue === diff[options._const.from]) {
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
                    }
                    else if (map.oldValue === nodeIndex) {
                        map["delete"] = true;
                    }
                    else if (map.oldValue < nodeIndex &&
                        map.oldValue + map.length > nodeIndex) {
                        if (map.oldValue + map.length - 1 === nodeIndex) {
                            map.length--;
                        }
                        else {
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
        case options._const.addElement: {
            route = diff[options._const.route].slice();
            var c_1 = route.splice(route.length - 1, 1)[0];
            node = (_a = getFromVirtualRoute(tree, route)) === null || _a === void 0 ? void 0 : _a.node;
            newNode = cleanNode(diff[options._const.element]);
            if (!node.childNodes) {
                node.childNodes = [];
            }
            if (c_1 >= node.childNodes.length) {
                node.childNodes.push(newNode);
            }
            else {
                node.childNodes.splice(c_1, 0, newNode);
            }
            if (node.subsets) {
                node.subsets.forEach(function (map) {
                    if (map.oldValue >= c_1) {
                        map.oldValue += 1;
                    }
                    else if (map.oldValue < c_1 &&
                        map.oldValue + map.length > c_1) {
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
                    }
                    else if (map.oldValue === nodeIndex) {
                        map["delete"] = true;
                    }
                    else if (map.oldValue < nodeIndex &&
                        map.oldValue + map.length > nodeIndex) {
                        if (map.oldValue + map.length - 1 === nodeIndex) {
                            map.length--;
                        }
                        else {
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
        case options._const.addTextElement: {
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
            }
            else {
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
        node.subsets = node.subsets.filter(function (map) { return !map["delete"] && map.oldValue !== map.newValue; });
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
    if (options === void 0) { options = {
        valueDiffing: true,
        simplifiedElementCheck: true
    }; }
    var objNode = {
        nodeName: aNode.nodeName
    };
    if (checkElementType(aNode, options.simplifiedElementCheck, "Text", "Comment")) {
        objNode.data = aNode.data;
    }
    else {
        if (aNode.attributes && aNode.attributes.length > 0) {
            objNode.attributes = {};
            var nodeArray = Array.prototype.slice.call(aNode.attributes);
            nodeArray.forEach(function (attribute) {
                return (objNode.attributes[attribute.name] = attribute.value);
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
            if (checkElementType(aNode, options.simplifiedElementCheck, "HTMLInputElement") &&
                ["radio", "checkbox"].includes(aNode.type.toLowerCase()) &&
                aNode.checked !== undefined) {
                objNode.checked = aNode.checked;
            }
            else if (checkElementType(aNode, options.simplifiedElementCheck, "HTMLButtonElement", "HTMLDataElement", "HTMLInputElement", "HTMLLIElement", "HTMLMeterElement", "HTMLOptionElement", "HTMLProgressElement", "HTMLParamElement")) {
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
    return string
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&amp;/g, "&");
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
var parseTag = function (tag, caseSensitive) {
    var res = {
        nodeName: "",
        attributes: {}
    };
    var voidElement = false;
    var type = "tag";
    var tagMatch = tag.match(/<\/?([^\s]+?)[/\s>]/);
    if (tagMatch) {
        res.nodeName =
            caseSensitive || tagMatch[1] === "svg"
                ? tagMatch[1]
                : tagMatch[1].toUpperCase();
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
        }
        else if (result[0].trim()) {
            if (result[1]) {
                var attr = result[1].trim();
                var arr = [attr, ""];
                if (attr.indexOf("=") > -1)
                    { arr = attr.split("="); }
                res.attributes[arr[0]] = arr[1];
                reg.lastIndex--;
            }
            else if (result[2])
                { res.attributes[result[2]] = result[3]
                    .trim()
                    .substring(1, result[3].length - 1); }
        }
    }
    return {
        type: type,
        node: res,
        voidElement: voidElement
    };
};
var stringToObj = function (html, options) {
    if (options === void 0) { options = {
        valueDiffing: true,
        caseSensitive: false
    }; }
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
            if (!current.voidElement &&
                true &&
                nextChar &&
                nextChar !== "<") {
                if (!current.node.childNodes) {
                    current.node.childNodes = [];
                }
                var data = unescape(html.slice(start, html.indexOf("<", start)));
                current.node.childNodes.push({
                    nodeName: "#text",
                    data: data
                });
                if (options.valueDiffing &&
                    current.node.nodeName === "TEXTAREA") {
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
            if (level > -1 &&
                (current.voidElement ||
                    (options.caseSensitive &&
                        current.node.nodeName === tag.slice(2, -1)) ||
                    (!options.caseSensitive &&
                        current.node.nodeName.toUpperCase() ===
                            tag.slice(2, -1).toUpperCase()))) {
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
var DiffFinder = /** @class */ (function () {
    function DiffFinder(t1Node, t2Node, options) {
        this.options = options;
        this.t1 = (typeof Element !== "undefined" &&
            checkElementType(t1Node, this.options.simplifiedElementCheck, "Element")
            ? nodeToObj(t1Node, this.options)
            : typeof t1Node === "string"
                ? stringToObj(t1Node, this.options)
                : JSON.parse(JSON.stringify(t1Node)));
        this.t2 = (typeof Element !== "undefined" &&
            checkElementType(t2Node, this.options.simplifiedElementCheck, "Element")
            ? nodeToObj(t2Node, this.options)
            : typeof t2Node === "string"
                ? stringToObj(t2Node, this.options)
                : JSON.parse(JSON.stringify(t2Node)));
        this.diffcount = 0;
        this.foundAll = false;
        if (this.debug) {
            this.t1Orig =
                typeof Element !== "undefined" &&
                    checkElementType(t1Node, this.options.simplifiedElementCheck, "Element")
                    ? nodeToObj(t1Node, this.options)
                    : typeof t1Node === "string"
                        ? stringToObj(t1Node, this.options)
                        : JSON.parse(JSON.stringify(t1Node));
            this.t2Orig =
                typeof Element !== "undefined" &&
                    checkElementType(t2Node, this.options.simplifiedElementCheck, "Element")
                    ? nodeToObj(t2Node, this.options)
                    : typeof t2Node === "string"
                        ? stringToObj(t2Node, this.options)
                        : JSON.parse(JSON.stringify(t2Node));
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
                if (!isEqual(t1, t2)) {
                    if (this.foundAll) {
                        console.error("Could not find remaining diffs!");
                    }
                    else {
                        this.foundAll = true;
                        removeDone(t1);
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
                if (fdiffs)
                    { diffs = fdiffs; }
            }
            if (diffs.length > 0) {
                t1.outerDone = true;
                return diffs;
            }
            else {
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
            }
            else {
                t1.innerDone = true;
            }
        }
        if (this.options.valueDiffing && !t1.valueDone) {
            // value differences?
            diffs = this.findValueDiff(t1, t2, route);
            if (diffs.length > 0) {
                t1.valueDone = true;
                return diffs;
            }
            else {
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
            return [
                new Diff()
                    .setValue(this.options._const.action, this.options._const.replaceElement)
                    .setValue(this.options._const.oldValue, cleanNode(t1))
                    .setValue(this.options._const.newValue, cleanNode(t2))
                    .setValue(this.options._const.route, route) ];
        }
        if (route.length &&
            this.options.diffcap <
                Math.abs((t1.childNodes || []).length - (t2.childNodes || []).length)) {
            return [
                new Diff()
                    .setValue(this.options._const.action, this.options._const.replaceElement)
                    .setValue(this.options._const.oldValue, cleanNode(t1))
                    .setValue(this.options._const.newValue, cleanNode(t2))
                    .setValue(this.options._const.route, route) ];
        }
        if (Object.prototype.hasOwnProperty.call(t1, "data") &&
            t1.data !== t2.data) {
            // Comment or text node.
            if (t1.nodeName === "#text") {
                return [
                    new Diff()
                        .setValue(this.options._const.action, this.options._const.modifyTextElement)
                        .setValue(this.options._const.route, route)
                        .setValue(this.options._const.oldValue, t1.data)
                        .setValue(this.options._const.newValue, t2.data) ];
            }
            else {
                return [
                    new Diff()
                        .setValue(this.options._const.action, this.options._const.modifyComment)
                        .setValue(this.options._const.route, route)
                        .setValue(this.options._const.oldValue, t1.data)
                        .setValue(this.options._const.newValue, t2.data) ];
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
                diffs.push(new Diff()
                    .setValue(this.options._const.action, this.options._const.removeAttribute)
                    .setValue(this.options._const.route, route)
                    .setValue(this.options._const.name, attr)
                    .setValue(this.options._const.value, t1.attributes[attr]));
            }
            else {
                attr2.splice(pos, 1);
                if (t1.attributes[attr] !== t2.attributes[attr]) {
                    diffs.push(new Diff()
                        .setValue(this.options._const.action, this.options._const.modifyAttribute)
                        .setValue(this.options._const.route, route)
                        .setValue(this.options._const.name, attr)
                        .setValue(this.options._const.oldValue, t1.attributes[attr])
                        .setValue(this.options._const.newValue, t2.attributes[attr]));
                }
            }
        }
        attrLength = attr2.length;
        for (i = 0; i < attrLength; i++) {
            attr = attr2[i];
            diffs.push(new Diff()
                .setValue(this.options._const.action, this.options._const.addAttribute)
                .setValue(this.options._const.route, route)
                .setValue(this.options._const.name, attr)
                .setValue(this.options._const.value, t2.attributes[attr]));
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
            var subtrees = cachedSubtrees
                ? t1.subsets
                : t1.childNodes && t2.childNodes
                    ? markSubTrees(t1, t2)
                    : [];
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
                        diffs.push(new Diff()
                            .setValue(this.options._const.action, this.options._const.removeTextElement)
                            .setValue(this.options._const.route, route.concat(index))
                            .setValue(this.options._const.value, e1.data));
                        index -= 1;
                    }
                    else {
                        diffs.push(new Diff()
                            .setValue(this.options._const.action, this.options._const.removeElement)
                            .setValue(this.options._const.route, route.concat(index))
                            .setValue(this.options._const.element, cleanNode(e1)));
                        index -= 1;
                    }
                }
                else if (e2 && !e1) {
                    if (e2.nodeName === "#text") {
                        diffs.push(new Diff()
                            .setValue(this.options._const.action, this.options._const.addTextElement)
                            .setValue(this.options._const.route, route.concat(index))
                            .setValue(this.options._const.value, e2.data));
                    }
                    else {
                        diffs.push(new Diff()
                            .setValue(this.options._const.action, this.options._const.addElement)
                            .setValue(this.options._const.route, route.concat(index))
                            .setValue(this.options._const.element, cleanNode(e2)));
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
                if (!this.options.maxChildCount ||
                    last < this.options.maxChildCount) {
                    diffs = diffs.concat(this.findNextDiff(e1, e2, route.concat(index)));
                }
                else if (!isEqual(e1, e2)) {
                    if (t1ChildNodes.length > t2ChildNodes.length) {
                        if (e1.nodeName === "#text") {
                            diffs.push(new Diff()
                                .setValue(this.options._const.action, this.options._const.removeTextElement)
                                .setValue(this.options._const.route, route.concat(index))
                                .setValue(this.options._const.value, e1.data));
                        }
                        else {
                            diffs.push(new Diff()
                                .setValue(this.options._const.action, this.options._const.removeElement)
                                .setValue(this.options._const.element, cleanNode(e1))
                                .setValue(this.options._const.route, route.concat(index)));
                        }
                        t1ChildNodes.splice(i, 1);
                        i -= 1;
                        index -= 1;
                        childNodesLengthDifference -= 1;
                    }
                    else if (t1ChildNodes.length < t2ChildNodes.length) {
                        diffs = diffs.concat([
                            new Diff()
                                .setValue(this.options._const.action, this.options._const.addElement)
                                .setValue(this.options._const.element, cleanNode(e2))
                                .setValue(this.options._const.route, route.concat(index)) ]);
                        t1ChildNodes.splice(i, 0, cleanNode(e2));
                        childNodesLengthDifference -= 1;
                    }
                    else {
                        diffs = diffs.concat([
                            new Diff()
                                .setValue(this.options._const.action, this.options._const.replaceElement)
                                .setValue(this.options._const.oldValue, cleanNode(e1))
                                .setValue(this.options._const.newValue, cleanNode(e2))
                                .setValue(this.options._const.route, route.concat(index)) ]);
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
            if (cachedSubtrees &&
                (gaps1[index2] === true || gaps2[index2] === true)) ;
            else if (gaps1[index1] === true) {
                node = t1ChildNodes[index1];
                if (node.nodeName === "#text") {
                    if (t2ChildNodes[index2].nodeName === "#text") {
                        if (node.data !==
                            t2ChildNodes[index2].data) {
                            // Check whether a text node with the same value follows later on.
                            var testI = index1;
                            while (t1ChildNodes.length > testI + 1 &&
                                t1ChildNodes[testI + 1].nodeName === "#text") {
                                testI += 1;
                                if (t2ChildNodes[index2]
                                    .data ===
                                    t1ChildNodes[testI]
                                        .data) {
                                    similarNode = true;
                                    break;
                                }
                            }
                            if (!similarNode) {
                                diffs.push(new Diff()
                                    .setValue(this.options._const.action, this.options._const
                                    .modifyTextElement)
                                    .setValue(this.options._const.route, route.concat(index1))
                                    .setValue(this.options._const.oldValue, node.data)
                                    .setValue(this.options._const.newValue, t2ChildNodes[index2].data));
                            }
                        }
                    }
                    else {
                        diffs.push(new Diff()
                            .setValue(this.options._const.action, this.options._const.removeTextElement)
                            .setValue(this.options._const.route, route.concat(index1))
                            .setValue(this.options._const.value, node.data));
                        gaps1.splice(index1, 1);
                        t1ChildNodes.splice(index1, 1);
                        shortest = Math.min(gaps1.length, gaps2.length);
                        index1 -= 1;
                        index2 -= 1;
                    }
                }
                else if (gaps2[index2] === true) {
                    // both gaps1[index1] and gaps2[index2]  are true.
                    // We replace one element with another.
                    diffs.push(new Diff()
                        .setValue(this.options._const.action, this.options._const.replaceElement)
                        .setValue(this.options._const.oldValue, cleanNode(node))
                        .setValue(this.options._const.newValue, cleanNode(t2ChildNodes[index2]))
                        .setValue(this.options._const.route, route.concat(index1)));
                    // t1ChildNodes at position index1 is not up-to-date, but that does not matter as
                    // index1 will increase +1
                }
                else {
                    diffs.push(new Diff()
                        .setValue(this.options._const.action, this.options._const.removeElement)
                        .setValue(this.options._const.route, route.concat(index1))
                        .setValue(this.options._const.element, cleanNode(node)));
                    gaps1.splice(index1, 1);
                    t1ChildNodes.splice(index1, 1);
                    shortest = Math.min(gaps1.length, gaps2.length);
                    index1 -= 1;
                    index2 -= 1;
                }
            }
            else if (gaps2[index2] === true) {
                node = t2ChildNodes[index2];
                if (node.nodeName === "#text") {
                    diffs.push(new Diff()
                        .setValue(this.options._const.action, this.options._const.addTextElement)
                        .setValue(this.options._const.route, route.concat(index1))
                        .setValue(this.options._const.value, node.data));
                    gaps1.splice(index1, 0, true);
                    t1ChildNodes.splice(index1, 0, {
                        nodeName: "#text",
                        data: node.data
                    });
                    shortest = Math.min(gaps1.length, gaps2.length);
                    //index1 += 1
                }
                else {
                    diffs.push(new Diff()
                        .setValue(this.options._const.action, this.options._const.addElement)
                        .setValue(this.options._const.route, route.concat(index1))
                        .setValue(this.options._const.element, cleanNode(node)));
                    gaps1.splice(index1, 0, true);
                    t1ChildNodes.splice(index1, 0, cleanNode(node));
                    shortest = Math.min(gaps1.length, gaps2.length);
                    //index1 += 1
                }
            }
            else if (gaps1[index1] !== gaps2[index2]) {
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
                        if (!roughlyEqual(t1ChildNodes[toGroup + j], t1ChildNodes[group.oldValue + j], {}, false, true)) {
                            destinationDifferent = true;
                        }
                    }
                    if (destinationDifferent) {
                        return [
                            new Diff()
                                .setValue(this.options._const.action, this.options._const.relocateGroup)
                                .setValue(this.options._const.groupLength, group.length)
                                .setValue(this.options._const.from, group.oldValue)
                                .setValue(this.options._const.to, toGroup)
                                .setValue(this.options._const.route, route) ];
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
            diffs.push(new Diff()
                .setValue(this.options._const.action, this.options._const.modifySelected)
                .setValue(this.options._const.oldValue, t1.selected)
                .setValue(this.options._const.newValue, t2.selected)
                .setValue(this.options._const.route, route));
        }
        if ((t1.value || t2.value) &&
            t1.value !== t2.value &&
            t1.nodeName !== "OPTION") {
            diffs.push(new Diff()
                .setValue(this.options._const.action, this.options._const.modifyValue)
                .setValue(this.options._const.oldValue, t1.value || "")
                .setValue(this.options._const.newValue, t2.value || "")
                .setValue(this.options._const.route, route));
        }
        if (t1.checked !== t2.checked) {
            diffs.push(new Diff()
                .setValue(this.options._const.action, this.options._const.modifyChecked)
                .setValue(this.options._const.oldValue, t1.checked)
                .setValue(this.options._const.newValue, t2.checked)
                .setValue(this.options._const.route, route));
        }
        return diffs;
    };
    return DiffFinder;
}());

var DEFAULT_OPTIONS = {
    debug: false,
    diffcap: 10,
    maxDepth: false,
    maxChildCount: 50,
    valueDiffing: true,
    simplifiedElementCheck: false,
    // syntax: textDiff: function (node, currentValue, expectedValue, newValue)
    textDiff: function (node, currentValue, expectedValue, newValue) {
        node.data = newValue;
        return;
    },
    // empty functions were benchmarked as running faster than both
    // `f && f()` and `if (f) { f(); }`
    preVirtualDiffApply: function () { },
    postVirtualDiffApply: function () { },
    preDiffApply: function () { },
    postDiffApply: function () { },
    filterOuterDiff: null,
    compress: false,
    _const: false,
    document: typeof window !== "undefined" && window.document
        ? window.document
        : false,
    components: []
};
var DiffDOM = /** @class */ (function () {
    function DiffDOM(options) {
        if (options === void 0) { options = {}; }
        // IE11 doesn't have Object.assign and buble doesn't translate object spreaders
        // by default, so this is the safest way of doing it currently.
        Object.entries(DEFAULT_OPTIONS).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            if (!Object.prototype.hasOwnProperty.call(options, key)) {
                options[key] = value;
            }
        });
        if (!options._const) {
            var varNames = [
                "addAttribute",
                "modifyAttribute",
                "removeAttribute",
                "modifyTextElement",
                "relocateGroup",
                "removeElement",
                "addElement",
                "removeTextElement",
                "addTextElement",
                "replaceElement",
                "modifyValue",
                "modifyChecked",
                "modifySelected",
                "modifyComment",
                "action",
                "route",
                "oldValue",
                "newValue",
                "element",
                "group",
                "groupLength",
                "from",
                "to",
                "name",
                "value",
                "data",
                "attributes",
                "nodeName",
                "childNodes",
                "checked",
                "selected" ];
            var constNames_1 = {};
            if (options.compress) {
                varNames.forEach(function (varName, index) { return (constNames_1[varName] = index); });
            }
            else {
                varNames.forEach(function (varName) { return (constNames_1[varName] = varName); });
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
}());

/**
 * DOM 工具函数
 */

/**
 * 解析 HTML 字符串为 DOM 节点
 * @param {string} html - HTML 字符串
 * @returns {Element} DOM 节点
 */
function parseHTML(html) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(`<div>${html}</div>`, 'text/html');
  return doc.body.firstChild
}

/**
 * 从 HTML 中提取纯文本
 * @param {string} html - HTML 字符串
 * @returns {string} 纯文本
 */
function extractPlainText(html) {
  if (!html) return ''

  return html
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .trim()
}

/**
 * 检查是否支持 ShadowDOM
 * @returns {boolean}
 */
function supportsShadowDOM() {
  return typeof Element !== 'undefined' &&
         Element.prototype.attachShadow !== undefined
}

/**
 * 创建差异标记的唯一 ID
 * @param {string} type - 标记类型 (add/del)
 * @param {string} field - 字段名称
 * @param {number} index - 索引
 * @returns {string}
 */
function createDiffId(type, field, index) {
  return `diff-${type}-${field}-${index}`
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
  if (!path) return root

  let current = root;
  for (const index of path) {
    if (!current || !current.childNodes) return null
    current = current.childNodes[index];
  }
  return current
}

/**
 * diff-dom 引擎封装
 */

/**
 * 引擎名称
 */
const engineName = 'diffdom';

/**
 * 对比 HTML 内容
 * @param {string} oldHtml - 旧 HTML
 * @param {string} newHtml - 新 HTML
 * @returns {Object} { oldNode, diffs }
 */
function diffHTML$1(oldHtml, newHtml) {
  // 快速相等判断
  if (oldHtml === newHtml) return { oldNode: null, diffs: [] }
  if (!oldHtml) return { oldNode: null, diffs: [{ action: 'fullReplace', newHtml }] }
  if (!newHtml) return { oldNode: null, diffs: [{ action: 'fullRemove', oldHtml }] }

  try {
    const oldDoc = parseHTML(oldHtml);
    const newDoc = parseHTML(newHtml);

    const dd = new DiffDOM();
    const diffs = dd.diff(oldDoc, newDoc);

    return { oldNode: oldDoc, diffs }
  } catch (error) {
    console.warn('[rich-diff] diff-dom 对比失败:', error);
    return { oldNode: null, diffs: [] }
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
  const targetNode = findNodeByPath(node, diff.path);
  if (!targetNode) return

  switch (diff.action) {
    case 'addElement':
      handleAddElement(targetNode, diff, fieldName, counters);
      break
    case 'removeElement':
      handleRemoveElement(targetNode, diff, fieldName, counters);
      break
    case 'replaceElement':
      handleReplaceElement(targetNode, diff, fieldName, counters);
      break
    case 'addTextElement':
      handleAddTextElement(targetNode, diff, fieldName, counters);
      break
    case 'removeTextElement':
      handleRemoveTextElement(targetNode, diff, fieldName, counters);
      break
    case 'replaceTextElement':
      handleReplaceTextElement(targetNode, diff, fieldName, counters);
      break
  }
}

// === 内部处理函数 ===

function handleAddElement(parent, diff, fieldName, counters) {
  const wrapper = createInsWrapper(fieldName, counters);
  wrapper.innerHTML = diff.element.outerHTML || diff.element.textContent;
  insertAt(parent, wrapper, diff.index);
}

function handleRemoveElement(parent, diff, fieldName, counters) {
  const targetChild = parent.childNodes[diff.index];
  if (!targetChild) return

  const wrapper = createDelWrapper(fieldName, counters);
  wrapper.appendChild(targetChild.cloneNode(true));
  parent.replaceChild(wrapper, targetChild);
}

function handleReplaceElement(parent, diff, fieldName, counters) {
  const oldChild = parent.childNodes[diff.index];
  if (!oldChild) return

  const delWrapper = createDelWrapper(fieldName, counters);
  delWrapper.appendChild(oldChild.cloneNode(true));

  const insWrapper = createInsWrapper(fieldName, counters);
  insWrapper.innerHTML = diff.element.outerHTML || diff.element.textContent;

  const fragment = document.createDocumentFragment();
  fragment.appendChild(delWrapper);
  fragment.appendChild(insWrapper);
  parent.replaceChild(fragment, oldChild);
}

function handleAddTextElement(parent, diff, fieldName, counters) {
  const wrapper = createInsWrapper(fieldName, counters);
  wrapper.textContent = diff.text;
  insertAt(parent, wrapper, diff.index);
}

function handleRemoveTextElement(parent, diff, fieldName, counters) {
  const targetChild = parent.childNodes[diff.index];
  if (!targetChild) return

  const wrapper = createDelWrapper(fieldName, counters);
  wrapper.textContent = diff.text;
  parent.replaceChild(wrapper, targetChild);
}

function handleReplaceTextElement(parent, diff, fieldName, counters) {
  const oldChild = parent.childNodes[diff.index];
  if (!oldChild) return

  const oldText = oldChild.textContent || oldChild.nodeValue || '';

  const delWrapper = createDelWrapper(fieldName, counters);
  delWrapper.textContent = oldText;

  const insWrapper = createInsWrapper(fieldName, counters);
  insWrapper.textContent = diff.text;

  const fragment = document.createDocumentFragment();
  fragment.appendChild(delWrapper);
  fragment.appendChild(insWrapper);
  parent.replaceChild(fragment, oldChild);
}

function createDelWrapper(fieldName, counters) {
  const wrapper = document.createElement('del');
  wrapper.style.color = 'red';
  wrapper.style.textDecoration = 'line-through';
  wrapper.setAttribute('data-diff', 'del');
  wrapper.setAttribute('data-diff-id', `diff-del-${fieldName}-${counters.del++}`);
  wrapper.setAttribute('data-diff-field', fieldName);
  return wrapper
}

function createInsWrapper(fieldName, counters) {
  const wrapper = document.createElement('ins');
  wrapper.style.color = '#1878E8';
  wrapper.setAttribute('data-diff', 'add');
  wrapper.setAttribute('data-diff-id', `diff-add-${fieldName}-${counters.add++}`);
  wrapper.setAttribute('data-diff-field', fieldName);
  return wrapper
}

/**
 * 对比纯文本
 * @param {string} oldText - 旧文本
 * @param {string} newText - 新文本
 * @returns {string} 带差异标记的文本
 */
function diffText$1(oldText, newText) {
  // 使用 htmldiff 风格的简单文本对比
  if (oldText === newText) return newText
  if (!oldText) return newText
  if (!newText) return ''

  // 简单实现：直接返回新文本，带上新增部分标记
  // 在实际使用中，应该使用 htmldiff 引擎处理纯文本
  return newText
}

var diffdom = {
  engineName,
  diffHTML: diffHTML$1,
  diffText: diffText$1,
  applyDiff
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
const engines = {
  'htmldiff': htmldiffEngine,
  'diffdom': diffdomEngine
};

// 当前使用的引擎
let currentEngine = 'htmldiff';

/**
 * 设置当前使用的对比引擎
 * @param {string} engine - 引擎名称
 */
function setEngine(engine) {
  if (!engines[engine]) {
    const available = Object.keys(engines).join(', ');
    console.warn(`[rich-diff] 不支持的引擎: ${engine}，可用引擎: ${available}`);
    return false
  }
  currentEngine = engine;
  console.log(`[rich-diff] 已切换到 ${engine} 引擎`);
  return true
}

/**
 * 获取当前引擎名称
 * @returns {string}
 */
function getEngineName() {
  return currentEngine
}

/**
 * 获取当前引擎实例
 * @returns {Object}
 */
function getEngine() {
  return engines[currentEngine]
}

/**
 * 获取所有可用引擎
 * @returns {string[]}
 */
function getAvailableEngines() {
  return Object.keys(engines)
}

/**
 * 检查引擎是否存在
 * @param {string} engine - 引擎名称
 * @returns {boolean}
 */
function hasEngine(engine) {
  return !!engines[engine]
}

/**
 * 常量定义
 */

// 错误类型
const ErrorTypes = {
  ENGINE_NOT_FOUND: 'ENGINE_NOT_FOUND',
  INVALID_INPUT: 'INVALID_INPUT',
  PARSE_ERROR: 'PARSE_ERROR',
  DOM_ERROR: 'DOM_ERROR'
};

// 默认配置
const DefaultConfig = {
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
const MediaTypes = {
  IMAGE: 'image',
  VIDEO: 'video',
  DOCUMENT: 'document'
};

// 变更类型
const ChangeTypes = {
  ADD: 'add',
  DEL: 'del',
  MODIFY: 'modify',
  SAME: 'same'
};

/**
 * 纯文本对比适配器
 */

// 计数器
let addCounter$1 = 0;
let delCounter$1 = 0;

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
function diffText(oldText = '', newText = '', fieldName = 'content') {
  resetCounters$1();

  // 快速判断
  if (oldText === newText) {
    return createResult$1(newText, false, [])
  }

  if (!oldText) {
    return wrapWithInsertTag$1(newText, fieldName)
  }

  if (!newText) {
    return createResult$1('', false, [])
  }

  // 调用引擎对比
  const engine = getEngine();
  const result = engine.diffText(String(oldText), String(newText));

  // 注入 data-diff 属性
  const html = injectDiffAttributes(result, fieldName);
  const markers = extractMarkerIds$1(html);

  return createResult$1(html, false, markers)
}

/**
 * 创建返回结果
 */
function createResult$1(html, useShadowDOM, markers) {
  return { html, useShadowDOM, markers }
}

/**
 * 用 ins 标签包裹内容
 */
function wrapWithInsertTag$1(text, fieldName) {
  const diffId = createDiffId('add', fieldName, addCounter$1++);
  const html = `<ins style="color: ${DefaultConfig.diffStyles.add.color};" data-diff="add" data-diff-id="${diffId}" data-diff-field="${fieldName}">${text}</ins>`;
  return createResult$1(html, false, [diffId])
}

/**
 * 注入 data-diff 属性
 */
function injectDiffAttributes(html, fieldName) {
  let result = html;

  result = result.replace(/<ins([^>]*)>/g, (match, attrs) => {
    if (attrs.includes('data-diff')) return match
    const diffId = createDiffId('add', fieldName, addCounter$1++);
    return `<ins${attrs} data-diff="add" data-diff-id="${diffId}" data-diff-field="${fieldName}">`
  });

  result = result.replace(/<del([^>]*)>/g, (match, attrs) => {
    if (attrs.includes('data-diff')) return match
    const diffId = createDiffId('del', fieldName, delCounter$1++);
    return `<del${attrs} data-diff="del" data-diff-id="${diffId}" data-diff-field="${fieldName}">`
  });

  return result
}

/**
 * 提取标记 ID 列表
 */
function extractMarkerIds$1(html) {
  const ids = [];
  const pattern = /data-diff-id="([^"]+)"/g;
  let match;

  while ((match = pattern.exec(html)) !== null) {
    ids.push(match[1]);
  }

  return ids
}

/**
 * HTML 对比适配器
 * 支持 ShadowDOM 降级兼容
 */

// 计数器
let addCounter = 0;
let delCounter = 0;

// ShadowDOM 支持状态
let shadowDOMSupported = null;

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
function diffHTML(oldHtml = '', newHtml = '', fieldName = 'content') {
  resetCounters();

  // 检测 ShadowDOM 支持性
  if (shadowDOMSupported === null) {
    shadowDOMSupported = supportsShadowDOM();
  }

  // 快速判断
  if (oldHtml === newHtml) {
    return createResult(newHtml, false, [])
  }

  if (!oldHtml) {
    return wrapWithInsertTag(newHtml, fieldName)
  }

  if (!newHtml) {
    return createResult('', false, [])
  }

  const engineName = getEngineName();

  try {
    let html;
    switch (engineName) {
      case 'htmldiff':
        html = adaptHtmlDiffEngine(oldHtml, newHtml, fieldName);
        break
      case 'diffdom':
        html = adaptDiffDomEngine(oldHtml, newHtml, fieldName);
        break
      default:
        html = adaptHtmlDiffEngine(oldHtml, newHtml, fieldName);
    }

    // 过滤仅样式变化
    html = filterStyleOnlyChanges(html);

    // 如果支持 ShadowDOM，转换标签
    if (shadowDOMSupported) {
      html = convertToShadowDOM(html);
    }

    const markers = extractMarkerIds(html);
    return createResult(html, shadowDOMSupported, markers)

  } catch (error) {
    console.warn(`[rich-diff] ${engineName} 适配器对比失败:`, error);
    return createResult(newHtml, false, [])
  }
}

/**
 * 创建返回结果
 */
function createResult(html, useShadowDOM, markers) {
  return { html, useShadowDOM, markers }
}

/**
 * 适配 htmldiff 引擎输出
 */
function adaptHtmlDiffEngine(oldHtml, newHtml, fieldName) {
  const engine = getEngine();
  let result = engine.diffHTML(oldHtml, newHtml);

  // 注入 data-diff 属性
  result = result.replace(/<ins([^>]*)>/g, (match, attrs) => {
    if (attrs.includes('data-diff')) return match
    const diffId = createDiffId('add', fieldName, addCounter++);
    return `<ins${attrs} data-diff="add" data-diff-id="${diffId}" data-diff-field="${fieldName}">`
  });

  result = result.replace(/<del([^>]*)>/g, (match, attrs) => {
    if (attrs.includes('data-diff')) return match
    const diffId = createDiffId('del', fieldName, delCounter++);
    return `<del${attrs} data-diff="del" data-diff-id="${diffId}" data-diff-field="${fieldName}">`
  });

  return result
}

/**
 * 适配 diffdom 引擎输出
 */
function adaptDiffDomEngine(oldHtml, newHtml, fieldName) {
  const engine = getEngine();
  const { oldNode, diffs } = engine.diffHTML(oldHtml, newHtml);

  if (!diffs || diffs.length === 0) {
    return oldNode ? oldNode.innerHTML : newHtml
  }

  // 处理特殊情况
  if (diffs.length === 1 && diffs[0].action === 'fullReplace') {
    return wrapWithInsertTag(diffs[0].newHtml || newHtml, fieldName).html
  }
  if (diffs.length === 1 && diffs[0].action === 'fullRemove') {
    return ''
  }

  // 应用差异
  const markedDoc = oldNode.cloneNode(true);
  const counters = { add: addCounter, del: delCounter };
  const sortedDiffs = [...diffs].reverse();

  for (const diff of sortedDiffs) {
    engine.applyDiff(markedDoc, diff, fieldName, counters);
  }

  addCounter = counters.add;
  delCounter = counters.del;

  return markedDoc.innerHTML
}

/**
 * 用 ins 标签包裹内容
 */
function wrapWithInsertTag(html, fieldName) {
  const diffId = createDiffId('add', fieldName, addCounter++);
  const result = `<ins style="color: ${DefaultConfig.diffStyles.add.color};" data-diff="add" data-diff-id="${diffId}" data-diff-field="${fieldName}">${html}</ins>`;
  return createResult(result, false, [diffId])
}

/**
 * 过滤仅样式变化的差异标记
 */
function filterStyleOnlyChanges(html) {
  const pattern = /<del[^>]*class="[^"]*diffmod[^"]*"[^>]*>([\s\S]*?)<\/del>\s*<ins[^>]*class="[^"]*diffmod[^"]*"[^>]*>([\s\S]*?)<\/ins>/gi;

  let result = html;
  const matches = [];
  let match;

  while ((match = pattern.exec(html)) !== null) {
    matches.push({
      fullMatch: match[0],
      delContent: match[1],
      insContent: match[2],
      index: match.index
    });
  }

  for (let i = matches.length - 1; i >= 0; i--) {
    const m = matches[i];
    if (isStyleOnlyChange(m.delContent, m.insContent)) {
      result = result.substring(0, m.index) + m.insContent + result.substring(m.index + m.fullMatch.length);
    }
  }

  return result
}

/**
 * 判断是否仅为样式变化
 */
function isStyleOnlyChange(oldHtml, newHtml) {
  const oldText = extractPlainText(oldHtml);
  const newText = extractPlainText(newHtml);
  if (oldText !== newText) return false

  const oldTag = oldHtml.match(/^<(\w+)/);
  const newTag = newHtml.match(/^<(\w+)/);
  if (!oldTag || !newTag) return false

  return oldTag[1].toLowerCase() === newTag[1].toLowerCase()
}

/**
 * 转换为 ShadowDOM 格式
 */
function convertToShadowDOM(html) {
  let result = html;

  result = result.replace(/<ins([^>]*)>([\s\S]*?)<\/ins>/gi, (match, attrs, content) => {
    return `<difftext${attrs}>${content}</difftext>`
  });

  result = result.replace(/<del([^>]*)>([\s\S]*?)<\/del>/gi, (match, attrs, content) => {
    return `<difftext${attrs}>${content}</difftext>`
  });

  return result
}

/**
 * 提取标记 ID 列表
 */
function extractMarkerIds(html) {
  const ids = [];
  const pattern = /data-diff-id="([^"]+)"/g;
  let match;

  while ((match = pattern.exec(html)) !== null) {
    ids.push(match[1]);
  }

  return ids
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
 * @param {string} oldVal - 旧值
 * @param {string} newVal - 新值
 * @param {string} fieldName - 字段名称
 * @param {Object} options - 配置选项
 * @returns {Object} { html, useShadowDOM, markers }
 */
function diffField(oldVal, newVal, fieldName, options = {}) {
  const { mayContainHtml = false } = options;

  // 快速相等判断
  if (oldVal === newVal) {
    return { html: newVal, useShadowDOM: false, markers: [] }
  }

  const oldStr = String(oldVal || '');
  const newStr = String(newVal || '');

  // 判断是否包含 HTML
  if (mayContainHtml && (oldStr.includes('<') || newStr.includes('<'))) {
    return diffHTML(oldStr, newStr, fieldName)
  }

  return diffText(oldStr, newStr, fieldName)
}

/**
 * 对比优先级字段
 * @param {number} oldPriority - 旧优先级
 * @param {number} newPriority - 新优先级
 * @returns {Object} { html, useShadowDOM, markers }
 */
function diffPriority(oldPriority, newPriority) {
  const priorityMap = { 0: '低', 1: '高' };
  const oldText = priorityMap[oldPriority] ?? '未设置';
  const newText = priorityMap[newPriority] ?? '未设置';
  return diffText(oldText, newText, 'priority')
}

/**
 * 批量对比固定字段
 * @param {Object} current - 当前版本数据
 * @param {Object} last - 历史版本数据
 * @param {string[]} fields - 要对比的字段列表
 * @returns {Object} { diffed, hasDiff }
 */
function diffFixedFields(current, last, fields = []) {
  const defaultFields = ['title', 'subtitle', 'digest', 'task', 'siteName', 'channelName'];
  const targetFields = fields.length > 0 ? fields : defaultFields;

  const diffed = {};
  let hasDiff = false;

  targetFields.forEach(field => {
    if (current[field] !== last[field]) {
      const mayContainHtml = field === 'title';
      diffed[field] = diffField(
        String(last[field] || ''),
        String(current[field] || ''),
        field,
        { mayContainHtml }
      );
      hasDiff = true;
    }
  });

  // 对比优先级
  if (current.priority !== last.priority) {
    diffed.priority = diffPriority(last.priority, current.priority);
    hasDiff = true;
  }

  return { diffed, hasDiff }
}

/**
 * 媒体资源对比工具
 */

/**
 * 对比图片/视频列表
 * @param {Array} oldList - 旧列表
 * @param {Array} newList - 新列表
 * @param {string} idField - 标识字段名
 * @returns {Object} { newList, oldList }
 */
function diffMediaList(oldList = [], newList = [], idField = 'fileValue') {
  const processedNewList = newList.map(newItem => {
    const oldItem = oldList.find(item => item[idField] === newItem[idField]);

    if (!oldItem) {
      return { ...newItem, diffType: ChangeTypes.ADD }
    }

    const hasChange = checkMediaItemChange(oldItem, newItem);
    if (hasChange) {
      return { ...newItem, diffType: ChangeTypes.MODIFY }
    }

    return { ...newItem, diffType: ChangeTypes.SAME }
  });

  // 找出被删除的项
  oldList.forEach(oldItem => {
    const newItem = newList.find(item => item[idField] === oldItem[idField]);
    if (!newItem) {
      processedNewList.push({ ...oldItem, diffType: ChangeTypes.DEL });
    }
  });

  return {
    newList: processedNewList,
    oldList
  }
}

/**
 * 检查媒体项是否有变化
 * @param {Object} oldItem - 旧媒体项
 * @param {Object} newItem - 新媒体项
 * @returns {boolean}
 */
function checkMediaItemChange(oldItem, newItem) {
  const compareFields = ['title', 'describes', 'type', 'coverAddress'];
  return compareFields.some(field => oldItem[field] !== newItem[field])
}

/**
 * 对比文档文件
 * @param {Object} oldFile - 旧文档
 * @param {Object} newFile - 新文档
 * @returns {Object} 带差异类型的文档信息
 */
function diffDocFile(oldFile, newFile) {
  if (!oldFile && !newFile) {
    return { diffType: 'none', newFile: null, oldFile: null }
  }

  if (!oldFile) {
    return { diffType: ChangeTypes.ADD, newFile: { ...newFile, diffType: ChangeTypes.ADD }, oldFile: null }
  }

  if (!newFile) {
    return { diffType: ChangeTypes.DEL, newFile: null, oldFile }
  }

  if (oldFile.fileId === newFile.fileId) {
    return { diffType: ChangeTypes.SAME, newFile: { ...newFile, diffType: ChangeTypes.SAME }, oldFile }
  }

  return { diffType: ChangeTypes.MODIFY, newFile: { ...newFile, diffType: ChangeTypes.MODIFY }, oldFile }
}

/**
 * 解析文档文件信息
 * @param {string} content - 文档内容（JSON 字符串）
 * @returns {Object|null}
 */
function parseDocFile(content) {
  if (!content) return null

  try {
    const docInfo = JSON.parse(content);
    if (docInfo && docInfo.fileId) {
      return { fileId: docInfo.fileId, fileName: docInfo.fileName || '' }
    }
  } catch (e) {
    // 不是 JSON 格式
  }

  return null
}

/**
 * 提取媒体项的具体变更
 * @param {Object} newItem - 新媒体项
 * @param {Object} oldItem - 旧媒体项
 * @returns {Array} 变更列表
 */
function extractMediaChanges$1(newItem, oldItem) {
  const changes = [];
  const compareFields = ['title', 'describes', 'coverAddress'];

  compareFields.forEach(field => {
    if (oldItem && newItem[field] !== oldItem[field]) {
      changes.push({
        field,
        oldValue: oldItem[field] || '',
        newValue: newItem[field] || ''
      });
    }
  });

  return changes
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
function diffCustomFields(oldFields = {}, newFields = {}, options = {}) {
  const result = {};
  const allKeys = new Set([...Object.keys(oldFields), ...Object.keys(newFields)]);

  allKeys.forEach(key => {
    const oldVal = oldFields[key] || '';
    const newVal = newFields[key] || '';

    if (oldVal === newVal) {
      result[key] = newVal;
      return
    }

    // 根据选项判断对比方式
    const { fieldTypeMap = {} } = options;
    const fieldType = fieldTypeMap[key];

    if (fieldType === 'file') {
      result[key] = diffFileField(oldVal, newVal);
    } else if (fieldType === 'html' || String(oldVal).includes('<') || String(newVal).includes('<')) {
      result[key] = diffHTML(String(oldVal), String(newVal), key);
    } else {
      result[key] = diffText(String(oldVal), String(newVal), key);
    }
  });

  return result
}

/**
 * 对比单个自定义字段
 * @param {string} oldVal - 旧值
 * @param {string} newVal - 新值
 * @param {string} fieldName - 字段名称
 * @param {string} fieldType - 字段类型
 * @returns {Object} { html, useShadowDOM, markers }
 */
function diffCustomField(oldVal, newVal, fieldName, fieldType = 'text') {
  if (oldVal === newVal) {
    return { html: newVal, useShadowDOM: false, markers: [] }
  }

  const oldStr = String(oldVal || '');
  const newStr = String(newVal || '');

  if (fieldType === 'file') {
    return { html: diffFileField(oldStr, newStr), useShadowDOM: false, markers: [] }
  }

  if (fieldType === 'html' || oldStr.includes('<') || newStr.includes('<')) {
    return diffHTML(oldStr, newStr, fieldName)
  }

  return diffText(oldStr, newStr, fieldName)
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
      return `<ins style="color: #1878E8;" data-diff="add" data-diff-field="file">${newFile}</ins>`
    }
    return newFile
  }

  if (oldFile) {
    return `<del style="color: red;" data-diff="del" data-diff-field="file">${oldFile}</del>`
  }

  return ''
}

/**
 * 工具层入口
 */

/**
 * 计算文章所有字段的差异
 * @param {Object} current - 当前版本数据
 * @param {Object} last - 历史版本数据
 * @param {Object} options - 配置选项
 * @returns {Object} { diffed, last: lastCopy, hasDiff }
 */
function computeArticleDiff(current, last, options = {}) {
  if (!last) {
    return { diffed: { ...current }, last: null, hasDiff: false }
  }

  const { siteEssayType = 0 } = options;

  // 深拷贝避免污染原数据
  const diffed = JSON.parse(JSON.stringify(current));
  const lastCopy = JSON.parse(JSON.stringify(last));

  let hasDiff = false;

  // 1. 固定字段对比
  const fixedResult = diffFixedFields(current, last);
  Object.keys(fixedResult.diffed).forEach(key => {
    diffed[key] = fixedResult.diffed[key].html;
  });
  hasDiff = hasDiff || fixedResult.hasDiff;

  // 2. 根据文章类型对比内容
  switch (siteEssayType) {
    case 0: // 文本文章
      if (current.content !== last.content) {
        const result = diffHTML(last.content || '', current.content || '', 'content');
        diffed.content = result.html;
        hasDiff = true;
      }
      break

    case 1: // 图集文章
    case 2: // 视频文章
      if (current.cmsFileList || last.cmsFileList) {
        const { newList, oldList } = diffMediaList(last.cmsFileList, current.cmsFileList);
        diffed.cmsFileList = newList;
        lastCopy.cmsFileList = oldList;
        if (newList.some(item => item.diffType !== 'same')) {
          hasDiff = true;
        }
      }
      break

    case 3: // 链接文章
      if (current.content !== last.content) {
        const result = diffHTML(last.content || '', current.content || '', 'content');
        diffed.content = result.html;
        hasDiff = true;
      }
      break

    case 4: // 文档文章
      const docDiff = diffDocFile(parseDocFile(last.content), parseDocFile(current.content));
      if (docDiff.diffType !== 'same') {
        diffed._docFile = docDiff.newFile;
        lastCopy._docFile = docDiff.oldFile;
        hasDiff = true;
      }
      break
  }

  // 3. 自定义字段对比
  if (current.customFieldMap && last.customFieldMap) {
    const customResult = diffCustomFields(last.customFieldMap, current.customFieldMap);
    diffed.customFieldMap = customResult;
    hasDiff = true;
  }

  return { diffed, last: lastCopy, hasDiff }
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
  if (!html || typeof html !== 'string') return []

  const ranges = [];
  const pattern = /<(ins|del|difftext)([^>]*)>([\s\S]*?)<\/\1>/gi;
  let match;

  while ((match = pattern.exec(html)) !== null) {
    const attrs = match[2];
    const diffId = extractAttr(attrs, 'data-diff-id');
    const diffType = extractAttr(attrs, 'data-diff');

    ranges.push({
      type: diffType || (match[1].toLowerCase() === 'ins' ? 'add' : 'del'),
      range: [match.index, match.index + match[0].length],
      content: match[3],
      diffId
    });
  }

  return ranges
}

/**
 * 检查是否有差异标记
 * @param {string} str - 字符串
 * @returns {boolean}
 */
function hasDiffMarkers(str) {
  if (!str || typeof str !== 'string') return false
  return str.includes('data-diff="') || str.includes('<ins') || str.includes('<del') || str.includes('<difftext')
}

/**
 * 检测变更类型
 * @param {string} str - 字符串
 * @returns {string} 'add' | 'del' | 'modify' | 'none'
 */
function detectChangeType(str) {
  if (!str || typeof str !== 'string') return 'none'

  const hasIns = str.includes('data-diff="add"') || str.includes('<ins') || str.includes('<difftext');
  const hasDel = str.includes('data-diff="del"') || str.includes('<del');

  if (hasIns && hasDel) return 'modify'
  if (hasIns) return 'add'
  if (hasDel) return 'del'
  return 'none'
}

/**
 * 提取差异标记
 * @param {string} html - HTML 字符串
 * @returns {Object} { insTags, delTags }
 */
function extractDiffMarkers(html) {
  const insTags = [];
  const delTags = [];

  if (!html || typeof html !== 'string') {
    return { insTags, delTags }
  }

  const pattern = /<(ins|del|difftext)([^>]*)>([\s\S]*?)<\/\1>/gi;
  let match;

  while ((match = pattern.exec(html)) !== null) {
    const tagType = match[1].toLowerCase();
    const attrs = match[2];
    const content = match[3];
    const diffId = extractAttr(attrs, 'data-diff-id');
    const diffType = extractAttr(attrs, 'data-diff');

    const item = {
      text: cleanContent(content),
      diffId,
      attrs
    };

    // 根据类型分类
    if (diffType === 'add' || tagType === 'ins') {
      insTags.push(item);
    } else if (diffType === 'del' || tagType === 'del') {
      delTags.push(item);
    }
  }

  return { insTags, delTags }
}

/**
 * 根据ID查找元素
 * @param {string} html - HTML 字符串
 * @param {string} diffId - 差异ID
 * @returns {Object|null} { tagName, content, attrs }
 */
function findElementById(html, diffId) {
  if (!html || !diffId) return null

  const pattern = new RegExp(`<(ins|del|difftext)([^>]*data-diff-id="${diffId}"[^>]*)>([\\s\\S]*?)<\\/\\1>`, 'i');
  const match = pattern.exec(html);

  if (match) {
    return {
      tagName: match[1].toLowerCase(),
      content: match[3],
      attrs: match[2]
    }
  }

  return null
}

/**
 * 清理内容（移除标签）
 * @param {string} html - HTML 字符串
 * @returns {string}
 */
function cleanContent(html) {
  if (!html) return ''
  return html
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
    .trim()
}

/**
 * 提取属性值
 * @param {string} attrs - 属性字符串
 * @param {string} attrName - 属性名
 * @returns {string|null}
 */
function extractAttr(attrs, attrName) {
  if (!attrs) return null
  const pattern = new RegExp(`${attrName}="([^"]*)"`, 'i');
  const match = pattern.exec(attrs);
  return match ? match[1] : null
}

/**
 * 文本字段变更提取器
 */

const FIELD_LABELS$1 = DefaultConfig.fieldLabels;
const FIELD_STRATEGIES$1 = {
  shortText: ['title', 'subtitle', 'task', 'siteName', 'channelName'],
  mediumText: ['digest']
};

/**
 * 提取基础文本字段变更
 */
function extractTextMarkers(diffed, last, current, markers) {
  const allTextFields = [...FIELD_STRATEGIES$1.shortText, ...FIELD_STRATEGIES$1.mediumText];

  allTextFields.forEach((field, index) => {
    if (diffed[field] && hasDiffMarkers(diffed[field])) {
      const changeType = detectChangeType(diffed[field]);
      const { oldValue, newValue } = extractDiffContent(diffed[field]);

      markers.push({
        id: `diff-text-${field}`,
        type: 'text',
        field,
        fieldLabel: FIELD_LABELS$1[field] || field,
        position: index + 1,
        changeType,
        oldValue,
        newValue,
        targetSelector: `[data-diff-field="${field}"]`,
        range: getFirstDiffRange$1(diffed[field])
      });
    }
  });
}

/**
 * 从差异内容中提取旧值和新值
 */
function extractDiffContent(html) {
  const { insTags, delTags } = extractDiffMarkers(html);

  let oldValue = '';
  let newValue = '';

  if (insTags.length > 0) {
    newValue = insTags.map(tag => tag.text).join(' ');
  }
  if (delTags.length > 0) {
    oldValue = delTags.map(tag => tag.text).join(' ');
  }

  return { oldValue, newValue }
}

/**
 * 获取第一个差异范围
 */
function getFirstDiffRange$1(html) {
  if (!html || typeof html !== 'string') return null
  const ranges = getDiffRanges(html);
  return ranges.length > 0 ? ranges[0].range : null
}

/**
 * HTML 内容变更提取器
 */

const FIELD_LABELS = DefaultConfig.fieldLabels;
const FIELD_STRATEGIES = {
  longText: ['content']
};

/**
 * 提取 HTML 内容变更
 */
function extractHTMLMarkers(diffed, last, current, markers) {
  const htmlFields = FIELD_STRATEGIES.longText;

  htmlFields.forEach(field => {
    if (diffed[field] && hasDiffMarkers(diffed[field])) {
      const subMarkers = extractDiffMarkersFromHTML(diffed[field], field);
      subMarkers.forEach(m => markers.push(m));
    }
  });
}

/**
 * 从差异 HTML 中提取细粒度的差异标记
 */
function extractDiffMarkersFromHTML(html, field) {
  if (!html || typeof html !== 'string') return []

  const tags = collectDiffTags(html);
  if (tags.length === 0) return []

  tags.sort((a, b) => a.range[0] - b.range[0]);

  const groups = mergeTagsIntoGroups(tags, html);

  return groups.map((group, idx) => {
    const targetSelector = group.diffIds && group.diffIds.length > 0
      ? `[data-diff-id="${group.diffIds[0]}"]`
      : `[data-diff-field="${field}"]`;

    return {
      id: `diff-html-${field}-${idx}`,
      type: 'html',
      field,
      fieldLabel: FIELD_LABELS[field] || field,
      position: idx + 1,
      changeType: group.changeType,
      oldValue: group.oldValue ? group.oldValue.substring(0, 200) : '',
      newValue: group.newValue ? group.newValue.substring(0, 200) : '',
      targetSelector,
      range: group.range,
      diffIds: group.diffIds
    }
  })
}

/**
 * 收集 HTML 中所有差异标签
 */
function collectDiffTags(html) {
  const pattern = /<(ins|del|difftext)([^>]*)>([\s\S]*?)<\/\1>/gi;
  const tags = [];
  let match;

  while ((match = pattern.exec(html)) !== null) {
    const attrsStr = match[2];
    const idMatch = attrsStr.match(/data-diff-id="([^"]+)"/);
    const typeMatch = attrsStr.match(/data-diff="([^"]+)"/);
    const diffId = idMatch ? idMatch[1] : null;
    const diffType = typeMatch ? typeMatch[1] : null;

    tags.push({
      type: diffType || (match[1].toLowerCase() === 'ins' ? 'add' : 'del'),
      attrs: attrsStr,
      content: match[3],
      range: [match.index, match.index + match[0].length],
      diffId
    });
  }

  return tags
}

/**
 * 合并相邻标签为组
 */
function mergeTagsIntoGroups(tags, html) {
  const groups = [];
  let i = 0;

  while (i < tags.length) {
    const current = tags[i];
    const group = {
      type: current.type,
      range: [...current.range],
      oldValue: current.type === 'del' ? current.content : '',
      newValue: current.type === 'add' || current.type === 'ins' ? current.content : '',
      changeType: null,
      diffIds: current.diffId ? [current.diffId] : []
    };

    while (i + 1 < tags.length) {
      const next = tags[i + 1];
      const gap = html.substring(group.range[1], next.range[0]);

      if (!/^\s*$/.test(gap)) break

      if (group.type === 'del' && (next.type === 'add' || next.type === 'ins')) {
        group.changeType = 'modify';
        group.newValue = next.content;
        group.range[1] = next.range[1];
        group.type = 'mod';
        if (next.diffId) group.diffIds.push(next.diffId);
        i++;
        break
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
        continue
      }

      break
    }

    if (!group.changeType) {
      group.changeType = group.type === 'del' ? 'del' : 'add';
    }

    groups.push(group);
    i++;
  }

  return groups
}

/**
 * 媒体资源变更提取器
 */

/**
 * 提取媒体资源变更
 */
function extractMediaMarkers(diffed, last, markers) {
  if (!diffed.cmsFileList) return

  const mediaList = Array.isArray(diffed.cmsFileList) ? diffed.cmsFileList : [];
  const oldMediaList = last?.cmsFileList || [];

  mediaList.forEach((item, index) => {
    if (item.diffType && item.diffType !== 'same') {
      const oldItem = oldMediaList.find(m => m.fileValue === item.fileValue);
      let oldValue = '';
      let newValue = '';

      if (item.diffType === 'add') {
        newValue = item.title || item.describes || '';
      } else if (item.diffType === 'del') {
        oldValue = oldItem?.title || oldItem?.describes || '';
      } else {
        oldValue = oldItem?.title || oldItem?.describes || '';
        newValue = item.title || item.describes || '';
      }

      markers.push({
        id: `diff-media-${index}`,
        type: 'media',
        field: 'cmsFileList',
        fieldLabel: '媒体资源',
        position: index + 1,
        changeType: item.diffType === 'add' ? 'add' : item.diffType === 'alter' ? 'modify' : 'del',
        mediaType: item.type || 'image',
        mediaIndex: index,
        targetSelector: `[data-media-index="${index}"]`,
        oldValue,
        newValue,
        changes: extractMediaChanges(item, oldItem)
      });
    }
  });
}

/**
 * 提取媒体项的具体变更
 */
function extractMediaChanges(newItem, oldItem) {
  const changes = [];
  const compareFields = ['title', 'describes', 'coverAddress'];

  compareFields.forEach(field => {
    if (oldItem && newItem[field] !== oldItem[field]) {
      changes.push({
        field,
        oldValue: oldItem[field] || '',
        newValue: newItem[field] || ''
      });
    }
  });

  return changes
}

/**
 * 自定义字段变更提取器
 */

/**
 * 提取自定义字段变更
 */
function extractCustomMarkers(diffed, last, current, markers) {
  if (!diffed.customFieldMap) return

  Object.keys(diffed.customFieldMap).forEach((field, index) => {
    if (hasDiffMarkers(diffed.customFieldMap[field])) {
      markers.push({
        id: `diff-custom-${field}`,
        type: 'custom',
        field,
        fieldLabel: field,
        position: index + 1,
        changeType: detectChangeType(diffed.customFieldMap[field]),
        oldValue: last?.customFieldMap?.[field] ? String(last.customFieldMap[field]) : '',
        newValue: current?.customFieldMap?.[field] ? String(current.customFieldMap[field]) : '',
        targetSelector: `[data-custom-field="${field}"]`,
        range: getFirstDiffRange(diffed.customFieldMap[field])
      });
    }
  });
}

/**
 * 获取第一个差异范围
 */
function getFirstDiffRange(html) {
  if (!html || typeof html !== 'string') return null
  const ranges = getDiffRanges(html);
  return ranges.length > 0 ? ranges[0].range : null
}

/**
 * 标记生成器
 * 从差异结果中提取变更标记
 */

const GROUP_PRIORITY = DefaultConfig.groupPriority;

/**
 * 生成变更标记列表
 * @param {Object} diffResult - 差异结果 { diffed, last, current }
 * @param {Object} options - 配置选项
 * @returns {Marker[]}
 */
function generateMarkers(diffResult, options = {}) {
  if (!diffResult || !diffResult.diffed) {
    return []
  }

  const markers = [];
  const { diffed, last, current } = diffResult;

  // 1. 提取基础字段变更
  extractTextMarkers(diffed, last, current, markers);

  // 2. 提取 HTML 内容变更
  extractHTMLMarkers(diffed, last, current, markers);

  // 3. 提取媒体资源变更
  extractMediaMarkers(diffed, last, markers);

  // 4. 提取自定义字段变更
  extractCustomMarkers(diffed, last, current, markers);

  // 排序
  return sortMarkers(markers)
}

/**
 * 排序标记
 */
function sortMarkers(markers) {
  return markers.sort((a, b) => {
    const priorityDiff = (GROUP_PRIORITY[a.type] || 99) - (GROUP_PRIORITY[b.type] || 99);
    if (priorityDiff !== 0) return priorityDiff
    return (a.position || 99) - (b.position || 99)
  })
}

/*! LeaderLine v1.0.7 (c) anseki https://anseki.github.io/leader-line/ */
(function(){var Z,w,O,M,I,o,t,s,h,u,n,a,e,_,v,l,r,i,E,x,p,c,d,C="leader-line",b=1,k=2,L=3,A=4,V={top:b,right:k,bottom:L,left:A},P=1,N=2,T=3,W=4,B=5,R={straight:P,arc:N,fluid:T,magnet:W,grid:B},Y="behind",f=C+"-defs",y='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="leader-line-defs"><style><![CDATA[.leader-line{position:absolute;overflow:visible!important;pointer-events:none!important;font-size:16px}#leader-line-defs{width:0;height:0;position:absolute;left:0;top:0}.leader-line-line-path{fill:none}.leader-line-mask-bg-rect{fill:white}.leader-line-caps-mask-anchor,.leader-line-caps-mask-marker-shape{fill:black}.leader-line-caps-mask-anchor{stroke:black}.leader-line-caps-mask-line,.leader-line-plugs-face{stroke:rgba(0,0,0,0)}.leader-line-line-mask-shape{stroke:white}.leader-line-line-outline-mask-shape{stroke:black}.leader-line-plug-mask-shape{fill:white;stroke:black}.leader-line-plug-outline-mask-shape{fill:black;stroke:white}.leader-line-areaAnchor{position:absolute;overflow:visible!important}]]></style><defs><circle id="leader-line-disc" cx="0" cy="0" r="5"/><rect id="leader-line-square" x="-5" y="-5" width="10" height="10"/><polygon id="leader-line-arrow1" points="-8,-8 8,0 -8,8 -5,0"/><polygon id="leader-line-arrow2" points="-4,-8 4,0 -4,8 -7,5 -2,0 -7,-5"/><polygon id="leader-line-arrow3" points="-4,-5 8,0 -4,5"/><g id="leader-line-hand"><path style="fill: #fcfcfc" d="M9.19 11.14h4.75c1.38 0 2.49-1.11 2.49-2.49 0-.51-.15-.98-.41-1.37h1.3c1.38 0 2.49-1.11 2.49-2.49s-1.11-2.53-2.49-2.53h1.02c1.38 0 2.49-1.11 2.49-2.49s-1.11-2.49-2.49-2.49h14.96c1.37 0 2.49-1.11 2.49-2.49s-1.11-2.49-2.49-2.49H16.58C16-9.86 14.28-11.14 9.7-11.14c-4.79 0-6.55 3.42-7.87 4.73H-2.14v13.23h3.68C3.29 9.97 5.47 11.14 9.19 11.14L9.19 11.14Z"/><path style="fill: black" d="M13.95 12c1.85 0 3.35-1.5 3.35-3.35 0-.17-.02-.34-.04-.51h.07c1.85 0 3.35-1.5 3.35-3.35 0-.79-.27-1.51-.72-2.08 1.03-.57 1.74-1.67 1.74-2.93 0-.59-.16-1.15-.43-1.63h12.04c1.85 0 3.35-1.5 3.35-3.35 0-1.85-1.5-3.35-3.35-3.35H17.2C16.26-10.93 13.91-12 9.7-12 5.36-12 3.22-9.4 1.94-7.84c0 0-.29.33-.5.57-.63 0-3.58 0-3.58 0C-2.61-7.27-3-6.88-3-6.41v13.23c0 .47.39.86.86.86 0 0 2.48 0 3.2 0C2.9 10.73 5.29 12 9.19 12L13.95 12ZM9.19 10.28c-3.46 0-5.33-1.05-6.9-3.87-.15-.27-.44-.44-.75-.44 0 0-1.81 0-2.82 0V-5.55c1.06 0 3.11 0 3.11 0 .25 0 .44-.06.61-.25l.83-.95c1.23-1.49 2.91-3.53 6.43-3.53 3.45 0 4.9.74 5.57 1.72h-4.3c-.48 0-.86.38-.86.86s.39.86.86.86h22.34c.9 0 1.63.73 1.63 1.63 0 .9-.73 1.63-1.63 1.63H15.83c-.48 0-.86.38-.86.86 0 .47.39.86.86.86h2.52c.9 0 1.63.73 1.63 1.63s-.73 1.63-1.63 1.63h-3.12c-.48 0-.86.38-.86.86 0 .47.39.86.86.86h2.11c.88 0 1.63.76 1.63 1.67 0 .9-.73 1.63-1.63 1.63h-3.2c-.48 0-.86.39-.86.86 0 .47.39.86.86.86h1.36c.05.16.09.34.09.51 0 .9-.73 1.63-1.63 1.63C13.95 10.28 9.19 10.28 9.19 10.28Z"/></g><g id="leader-line-crosshair"><path d="M0-78.97c-43.54 0-78.97 35.43-78.97 78.97 0 43.54 35.43 78.97 78.97 78.97s78.97-35.43 78.97-78.97C78.97-43.54 43.55-78.97 0-78.97ZM76.51-1.21h-9.91v-9.11h-2.43v9.11h-11.45c-.64-28.12-23.38-50.86-51.5-51.5V-64.17h9.11V-66.6h-9.11v-9.91C42.46-75.86 75.86-42.45 76.51-1.21ZM-1.21-30.76h-9.11v2.43h9.11V-4.2c-1.44.42-2.57 1.54-2.98 2.98H-28.33v-9.11h-2.43v9.11H-50.29C-49.65-28-27.99-49.65-1.21-50.29V-30.76ZM-30.76 1.21v9.11h2.43v-9.11H-4.2c.42 1.44 1.54 2.57 2.98 2.98v24.13h-9.11v2.43h9.11v19.53C-27.99 49.65-49.65 28-50.29 1.21H-30.76ZM1.22 30.75h9.11v-2.43h-9.11V4.2c1.44-.42 2.56-1.54 2.98-2.98h24.13v9.11h2.43v-9.11h19.53C49.65 28 28 49.65 1.22 50.29V30.75ZM30.76-1.21v-9.11h-2.43v9.11H4.2c-.42-1.44-1.54-2.56-2.98-2.98V-28.33h9.11v-2.43h-9.11V-50.29C28-49.65 49.65-28 50.29-1.21H30.76ZM-1.21-76.51v9.91h-9.11v2.43h9.11v11.45c-28.12.64-50.86 23.38-51.5 51.5H-64.17v-9.11H-66.6v9.11h-9.91C-75.86-42.45-42.45-75.86-1.21-76.51ZM-76.51 1.21h9.91v9.11h2.43v-9.11h11.45c.64 28.12 23.38 50.86 51.5 51.5v11.45h-9.11v2.43h9.11v9.91C-42.45 75.86-75.86 42.45-76.51 1.21ZM1.22 76.51v-9.91h9.11v-2.43h-9.11v-11.45c28.12-.64 50.86-23.38 51.5-51.5h11.45v9.11h2.43v-9.11h9.91C75.86 42.45 42.45 75.86 1.22 76.51Z"/><path d="M0 83.58-7.1 96 7.1 96Z"/><path d="M0-83.58 7.1-96-7.1-96"/><path d="M83.58 0 96 7.1 96-7.1Z"/><path d="M-83.58 0-96-7.1-96 7.1Z"/></g></defs></svg>',X={disc:{elmId:"leader-line-disc",noRotate:true,bBox:{left:-5,top:-5,width:10,height:10,right:5,bottom:5},widthR:2.5,heightR:2.5,bCircle:5,sideLen:5,backLen:5,overhead:0,outlineBase:1,outlineMax:4},square:{elmId:"leader-line-square",noRotate:true,bBox:{left:-5,top:-5,width:10,height:10,right:5,bottom:5},widthR:2.5,heightR:2.5,bCircle:5,sideLen:5,backLen:5,overhead:0,outlineBase:1,outlineMax:4},arrow1:{elmId:"leader-line-arrow1",bBox:{left:-8,top:-8,width:16,height:16,right:8,bottom:8},widthR:4,heightR:4,bCircle:8,sideLen:8,backLen:8,overhead:8,outlineBase:2,outlineMax:1.5},arrow2:{elmId:"leader-line-arrow2",bBox:{left:-7,top:-8,width:11,height:16,right:4,bottom:8},widthR:2.75,heightR:4,bCircle:8,sideLen:8,backLen:7,overhead:4,outlineBase:1,outlineMax:1.75},arrow3:{elmId:"leader-line-arrow3",bBox:{left:-4,top:-5,width:12,height:10,right:8,bottom:5},widthR:3,heightR:2.5,bCircle:8,sideLen:5,backLen:4,overhead:8,outlineBase:1,outlineMax:2.5},hand:{elmId:"leader-line-hand",bBox:{left:-3,top:-12,width:40,height:24,right:37,bottom:12},widthR:10,heightR:6,bCircle:37,sideLen:12,backLen:3,overhead:37},crosshair:{elmId:"leader-line-crosshair",noRotate:true,bBox:{left:-96,top:-96,width:192,height:192,right:96,bottom:96},widthR:48,heightR:48,bCircle:96,sideLen:96,backLen:96,overhead:0}},F={behind:Y,disc:"disc",square:"square",arrow1:"arrow1",arrow2:"arrow2",arrow3:"arrow3",hand:"hand",crosshair:"crosshair"},q={disc:"disc",square:"square",arrow1:"arrow1",arrow2:"arrow2",arrow3:"arrow3",hand:"hand",crosshair:"crosshair"},G=[b,k,L,A],D="auto",Q={x:"left",y:"top",width:"width",height:"height"},z=80,j=4,H=5,U=120,K=8,J=3.75,$=10,ee=30,te=.5522847,ne=.25*Math.PI,m=/^\s*(\-?[\d\.]+)\s*(\%)?\s*$/,ae="http://www.w3.org/2000/svg",S="-ms-scroll-limit"in document.documentElement.style&&"-ms-ime-align"in document.documentElement.style&&!window.navigator.msPointerEnabled,ie=!S&&!!document.uniqueID,oe="MozAppearance"in document.documentElement.style,le=!(S||oe||!window.chrome||!window.CSS),re=!S&&!ie&&!oe&&!le&&!window.chrome&&"WebkitAppearance"in document.documentElement.style,se=ie||S?.2:.1,ue={path:T,lineColor:"coral",lineSize:4,plugSE:[Y,"arrow1"],plugSizeSE:[1,1],lineOutlineEnabled:false,lineOutlineColor:"indianred",lineOutlineSize:.25,plugOutlineEnabledSE:[false,false],plugOutlineSizeSE:[1,1]},he=(p={}.toString,c={}.hasOwnProperty.toString,d=c.call(Object),function(e){return e&&"[object Object]"===p.call(e)&&(!(e=Object.getPrototypeOf(e))||(e=e.hasOwnProperty("constructor")&&e.constructor)&&"function"==typeof e&&c.call(e)===d)}),pe=Number.isFinite||function(e){return "number"==typeof e&&window.isFinite(e)},g=(_={ease:[.25,.1,.25,1],linear:[0,0,1,1],"ease-in":[.42,0,1,1],"ease-out":[0,0,.58,1],"ease-in-out":[.42,0,.58,1]},v=1e3/60/2,l=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame||function(e){setTimeout(e,v);},r=window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame||window.msCancelAnimationFrame||function(e){clearTimeout(e);},i=Number.isFinite||function(e){return "number"==typeof e&&window.isFinite(e)},E=[],x=0,{add:function(n,e,t,a,i,o,l){var r,s,u,h,p,c,d,f,y,m,S=++x;function g(e,t){return {value:n(t),timeRatio:e,outputRatio:t}}if("string"==typeof i&&(i=_[i]),n=n||function(){},t<v)r=[g(0,0),g(1,1)];else {if(s=v/t,r=[g(0,0)],0===i[0]&&0===i[1]&&1===i[2]&&1===i[3])for(h=s;h<=1;h+=s)r.push(g(h,h));else for(p=u=(h=s)/10;p<=1;p+=u)d=p,m=y=f=void 0,f=(m=p*p)*p,m*=3*(y=1-p),h<=(c={x:(d=3*(y*y)*p)*i[0]+m*i[2]+f,y:d*i[1]+m*i[3]+f}).x&&(r.push(g(c.x,c.y)),h+=s);r.push(g(1,1));}return E.push(o={animId:S,frameCallback:e,duration:t,count:a,frames:r,reverse:!!o}),false!==l&&be(o,l),S},remove:function(n){var a;E.some(function(e,t){return e.animId===n&&(a=t,!(e.framesStart=null))})&&E.splice(a,1);},start:function(t,n,a){E.some(function(e){return e.animId===t&&(e.reverse=!!n,be(e,a),true)});},stop:function(t,n){var a;return E.some(function(e){return e.animId===t&&(n?null!=e.lastFrame&&(a=e.frames[e.lastFrame].timeRatio):(a=(Date.now()-e.framesStart)/e.duration,(a=e.reverse?1-a:a)<0?a=0:1<a&&(a=1)),!(e.framesStart=null))}),a},validTiming:function(t){return "string"==typeof t?_[t]:Array.isArray(t)&&[0,1,2,3].every(function(e){return i(t[e])&&0<=t[e]&&t[e]<=1})?[t[0],t[1],t[2],t[3]]:null}}),ce=function(e){e.SVGPathElement.prototype.getPathData&&e.SVGPathElement.prototype.setPathData||function(){function i(e){this._string=e,this._currentIndex=0,this._endIndex=this._string.length,this._prevCommand=null,this._skipOptionalSpaces();}var a={Z:"Z",M:"M",L:"L",C:"C",Q:"Q",A:"A",H:"H",V:"V",S:"S",T:"T",z:"Z",m:"m",l:"l",c:"c",q:"q",a:"a",h:"h",v:"v",s:"s",t:"t"},o=-1!==e.navigator.userAgent.indexOf("MSIE ");i.prototype={parseSegment:function(){var e=this._string[this._currentIndex],t=a[e]||null;if(null===t){if(null===this._prevCommand)return null;if(null===(t=("+"===e||"-"===e||"."===e||"0"<=e&&e<="9")&&"Z"!==this._prevCommand?"M"===this._prevCommand?"L":"m"===this._prevCommand?"l":this._prevCommand:null))return null}else this._currentIndex+=1;var n=null,e=(this._prevCommand=t).toUpperCase();return "H"===e||"V"===e?n=[this._parseNumber()]:"M"===e||"L"===e||"T"===e?n=[this._parseNumber(),this._parseNumber()]:"S"===e||"Q"===e?n=[this._parseNumber(),this._parseNumber(),this._parseNumber(),this._parseNumber()]:"C"===e?n=[this._parseNumber(),this._parseNumber(),this._parseNumber(),this._parseNumber(),this._parseNumber(),this._parseNumber()]:"A"===e?n=[this._parseNumber(),this._parseNumber(),this._parseNumber(),this._parseArcFlag(),this._parseArcFlag(),this._parseNumber(),this._parseNumber()]:"Z"===e&&(this._skipOptionalSpaces(),n=[]),null===n||0<=n.indexOf(null)?null:{type:t,values:n}},hasMoreData:function(){return this._currentIndex<this._endIndex},peekSegmentType:function(){var e=this._string[this._currentIndex];return a[e]||null},initialCommandIsMoveTo:function(){if(!this.hasMoreData())return  true;var e=this.peekSegmentType();return "M"===e||"m"===e},_isCurrentSpace:function(){var e=this._string[this._currentIndex];return e<=" "&&(" "===e||"\n"===e||"\t"===e||"\r"===e||"\f"===e)},_skipOptionalSpaces:function(){for(;this._currentIndex<this._endIndex&&this._isCurrentSpace();)this._currentIndex+=1;return this._currentIndex<this._endIndex},_skipOptionalSpacesOrDelimiter:function(){return !(this._currentIndex<this._endIndex&&!this._isCurrentSpace()&&","!==this._string[this._currentIndex])&&(this._skipOptionalSpaces()&&this._currentIndex<this._endIndex&&","===this._string[this._currentIndex]&&(this._currentIndex+=1,this._skipOptionalSpaces()),this._currentIndex<this._endIndex)},_parseNumber:function(){var e=0,t=0,n=1,a=0,i=1,o=1,l=this._currentIndex;if(this._skipOptionalSpaces(),this._currentIndex<this._endIndex&&"+"===this._string[this._currentIndex]?this._currentIndex+=1:this._currentIndex<this._endIndex&&"-"===this._string[this._currentIndex]&&(this._currentIndex+=1,i=-1),this._currentIndex===this._endIndex||(this._string[this._currentIndex]<"0"||"9"<this._string[this._currentIndex])&&"."!==this._string[this._currentIndex])return null;for(var r=this._currentIndex;this._currentIndex<this._endIndex&&"0"<=this._string[this._currentIndex]&&this._string[this._currentIndex]<="9";)this._currentIndex+=1;if(this._currentIndex!==r)for(var s=this._currentIndex-1,u=1;r<=s;)t+=u*(this._string[s]-"0"),--s,u*=10;if(this._currentIndex<this._endIndex&&"."===this._string[this._currentIndex]){if(this._currentIndex+=1,this._currentIndex>=this._endIndex||this._string[this._currentIndex]<"0"||"9"<this._string[this._currentIndex])return null;for(;this._currentIndex<this._endIndex&&"0"<=this._string[this._currentIndex]&&this._string[this._currentIndex]<="9";)n*=10,a+=(this._string.charAt(this._currentIndex)-"0")/n,this._currentIndex+=1;}if(this._currentIndex!==l&&this._currentIndex+1<this._endIndex&&("e"===this._string[this._currentIndex]||"E"===this._string[this._currentIndex])&&"x"!==this._string[this._currentIndex+1]&&"m"!==this._string[this._currentIndex+1]){if(this._currentIndex+=1,"+"===this._string[this._currentIndex]?this._currentIndex+=1:"-"===this._string[this._currentIndex]&&(this._currentIndex+=1,o=-1),this._currentIndex>=this._endIndex||this._string[this._currentIndex]<"0"||"9"<this._string[this._currentIndex])return null;for(;this._currentIndex<this._endIndex&&"0"<=this._string[this._currentIndex]&&this._string[this._currentIndex]<="9";)e*=10,e+=this._string[this._currentIndex]-"0",this._currentIndex+=1;}var h=t+a;return h*=i,e&&(h*=Math.pow(10,o*e)),l===this._currentIndex?null:(this._skipOptionalSpacesOrDelimiter(),h)},_parseArcFlag:function(){if(this._currentIndex>=this._endIndex)return null;var e=null,t=this._string[this._currentIndex];if(this._currentIndex+=1,"0"===t)e=0;else {if("1"!==t)return null;e=1;}return this._skipOptionalSpacesOrDelimiter(),e}};function n(e){if(!e||0===e.length)return [];var t=new i(e),n=[];if(t.initialCommandIsMoveTo())for(;t.hasMoreData();){var a=t.parseSegment();if(null===a)break;n.push(a);}return n}function l(e){return e.map(function(e){return {type:e.type,values:Array.prototype.slice.call(e.values)}})}function r(e){var u=[],h=null,p=null,c=null,d=null,f=null,y=null,m=null;return e.forEach(function(e){var t,n,a,i,o,l,r,s;"M"===e.type?(r=e.values[0],s=e.values[1],u.push({type:"M",values:[r,s]}),d=y=r,f=m=s):"C"===e.type?(o=e.values[0],l=e.values[1],t=e.values[2],n=e.values[3],r=e.values[4],s=e.values[5],u.push({type:"C",values:[o,l,t,n,r,s]}),p=t,c=n,d=r,f=s):"L"===e.type?(r=e.values[0],s=e.values[1],u.push({type:"L",values:[r,s]}),d=r,f=s):"H"===e.type?(r=e.values[0],u.push({type:"L",values:[r,f]}),d=r):"V"===e.type?(s=e.values[0],u.push({type:"L",values:[d,s]}),f=s):"S"===e.type?(t=e.values[0],n=e.values[1],r=e.values[2],s=e.values[3],i="C"===h||"S"===h?(a=d+(d-p),f+(f-c)):(a=d,f),u.push({type:"C",values:[a,i,t,n,r,s]}),p=t,c=n,d=r,f=s):"T"===e.type?(r=e.values[0],s=e.values[1],l="Q"===h||"T"===h?(o=d+(d-p),f+(f-c)):(o=d,f),u.push({type:"C",values:[a=d+2*(o-d)/3,i=f+2*(l-f)/3,r+2*(o-r)/3,s+2*(l-s)/3,r,s]}),p=o,c=l,d=r,f=s):"Q"===e.type?(o=e.values[0],l=e.values[1],r=e.values[2],s=e.values[3],u.push({type:"C",values:[a=d+2*(o-d)/3,i=f+2*(l-f)/3,r+2*(o-r)/3,s+2*(l-s)/3,r,s]}),p=o,c=l,d=r,f=s):"A"===e.type?(n=e.values[0],a=e.values[1],i=e.values[2],o=e.values[3],l=e.values[4],r=e.values[5],s=e.values[6],0===n||0===a?(u.push({type:"C",values:[d,f,r,s,r,s]}),d=r,f=s):d===r&&f===s||b(d,f,r,s,n,a,i,o,l).forEach(function(e){u.push({type:"C",values:e}),d=r,f=s;})):"Z"===e.type&&(u.push(e),d=y,f=m),h=e.type;}),u}var s=e.SVGPathElement.prototype.setAttribute,u=e.SVGPathElement.prototype.removeAttribute,d=e.Symbol?e.Symbol():"__cachedPathData",f=e.Symbol?e.Symbol():"__cachedNormalizedPathData",b=function(e,t,n,a,i,o,l,r,s,u){function h(e,t,n){return {x:e*Math.cos(n)-t*Math.sin(n),y:e*Math.sin(n)+t*Math.cos(n)}}var p=Math.PI*l/180,c=[];u?(_=u[0],v=u[1],S=u[2],g=u[3]):(e=(m=h(e,t,-p)).x,t=m.y,1<(m=(y=(e-(n=(f=h(n,a,-p)).x))/2)*y/(i*i)+(d=(t-(a=f.y))/2)*d/(o*o))&&(i*=m=Math.sqrt(m),o*=m),f=i*i,m=o*o,S=(f=(r===s?-1:1)*Math.sqrt(Math.abs((f*m-f*d*d-m*y*y)/(f*d*d+m*y*y))))*i*d/o+(e+n)/2,g=f*-o*y/i+(t+a)/2,_=Math.asin(parseFloat(((t-g)/o).toFixed(9))),v=Math.asin(parseFloat(((a-g)/o).toFixed(9))),e<S&&(_=Math.PI-_),n<S&&(v=Math.PI-v),_<0&&(_=2*Math.PI+_),v<0&&(v=2*Math.PI+v),s&&v<_&&(_-=2*Math.PI),!s&&_<v&&(v-=2*Math.PI));var d,f,y,m=v-_;Math.abs(m)>120*Math.PI/180&&(d=v,f=n,y=a,v=s&&_<v?_+120*Math.PI/180*1:_+120*Math.PI/180*-1,n=S+i*Math.cos(v),a=g+o*Math.sin(v),c=b(n,a,f,y,i,o,l,0,s,[v,d,S,g]));var m=v-_,S=Math.cos(_),g=Math.sin(_),_=Math.cos(v),v=Math.sin(v),m=Math.tan(m/4),i=4/3*i*m,o=4/3*o*m,m=[e,t],S=[e+i*g,t-o*S],_=[n+i*v,a-o*_],a=[n,a];if(S[0]=2*m[0]-S[0],S[1]=2*m[1]-S[1],u)return [S,_,a].concat(c);var c=[S,_,a].concat(c).join().split(","),E=[],x=[];return c.forEach(function(e,t){t%2?x.push(h(c[t-1],c[t],p).y):x.push(h(c[t],c[t+1],p).x),6===x.length&&(E.push(x),x=[]);}),E};e.SVGPathElement.prototype.setAttribute=function(e,t){"d"===e&&(this[d]=null,this[f]=null),s.call(this,e,t);},e.SVGPathElement.prototype.removeAttribute=function(e,t){"d"===e&&(this[d]=null,this[f]=null),u.call(this,e);},e.SVGPathElement.prototype.getPathData=function(e){if(e&&e.normalize){if(this[f])return l(this[f]);this[d]?t=l(this[d]):(t=n(this.getAttribute("d")||""),this[d]=l(t));e=r((s=[],c=p=h=u=null,t.forEach(function(e){var t,n,a,i,o,l,r=e.type;"M"===r?(o=e.values[0],l=e.values[1],s.push({type:"M",values:[o,l]}),u=p=o,h=c=l):"m"===r?(o=u+e.values[0],l=h+e.values[1],s.push({type:"M",values:[o,l]}),u=p=o,h=c=l):"L"===r?(o=e.values[0],l=e.values[1],s.push({type:"L",values:[o,l]}),u=o,h=l):"l"===r?(o=u+e.values[0],l=h+e.values[1],s.push({type:"L",values:[o,l]}),u=o,h=l):"C"===r?(t=e.values[0],n=e.values[1],a=e.values[2],i=e.values[3],o=e.values[4],l=e.values[5],s.push({type:"C",values:[t,n,a,i,o,l]}),u=o,h=l):"c"===r?(t=u+e.values[0],n=h+e.values[1],a=u+e.values[2],i=h+e.values[3],o=u+e.values[4],l=h+e.values[5],s.push({type:"C",values:[t,n,a,i,o,l]}),u=o,h=l):"Q"===r?(t=e.values[0],n=e.values[1],o=e.values[2],l=e.values[3],s.push({type:"Q",values:[t,n,o,l]}),u=o,h=l):"q"===r?(t=u+e.values[0],n=h+e.values[1],o=u+e.values[2],l=h+e.values[3],s.push({type:"Q",values:[t,n,o,l]}),u=o,h=l):"A"===r?(o=e.values[5],l=e.values[6],s.push({type:"A",values:[e.values[0],e.values[1],e.values[2],e.values[3],e.values[4],o,l]}),u=o,h=l):"a"===r?(o=u+e.values[5],l=h+e.values[6],s.push({type:"A",values:[e.values[0],e.values[1],e.values[2],e.values[3],e.values[4],o,l]}),u=o,h=l):"H"===r?(o=e.values[0],s.push({type:"H",values:[o]}),u=o):"h"===r?(o=u+e.values[0],s.push({type:"H",values:[o]}),u=o):"V"===r?(l=e.values[0],s.push({type:"V",values:[l]}),h=l):"v"===r?(l=h+e.values[0],s.push({type:"V",values:[l]}),h=l):"S"===r?(a=e.values[0],i=e.values[1],o=e.values[2],l=e.values[3],s.push({type:"S",values:[a,i,o,l]}),u=o,h=l):"s"===r?(a=u+e.values[0],i=h+e.values[1],o=u+e.values[2],l=h+e.values[3],s.push({type:"S",values:[a,i,o,l]}),u=o,h=l):"T"===r?(o=e.values[0],l=e.values[1],s.push({type:"T",values:[o,l]}),u=o,h=l):"t"===r?(o=u+e.values[0],l=h+e.values[1],s.push({type:"T",values:[o,l]}),u=o,h=l):"Z"!==r&&"z"!==r||(s.push({type:"Z",values:[]}),u=p,h=c);}),s));return this[f]=l(e),e}if(this[d])return l(this[d]);var s,u,h,p,c,t=n(this.getAttribute("d")||"");return this[d]=l(t),t},e.SVGPathElement.prototype.setPathData=function(e){if(0===e.length)o?this.setAttribute("d",""):this.removeAttribute("d");else {for(var t="",n=0,a=e.length;n<a;n+=1){var i=e[n];0<n&&(t+=" "),t+=i.type,i.values&&0<i.values.length&&(t+=" "+i.values.join(" "));}this.setAttribute("d",t);}},e.SVGRectElement.prototype.getPathData=function(e){var t=this.x.baseVal.value,n=this.y.baseVal.value,a=this.width.baseVal.value,i=this.height.baseVal.value,o=(this.hasAttribute("rx")?this.rx:this.ry).baseVal.value,l=(this.hasAttribute("ry")?this.ry:this.rx).baseVal.value,n=(n=[{type:"M",values:[t+(o=a/2<o?a/2:o),n]},{type:"H",values:[t+a-o]},{type:"A",values:[o,l=i/2<l?i/2:l,0,0,1,t+a,n+l]},{type:"V",values:[n+i-l]},{type:"A",values:[o,l,0,0,1,t+a-o,n+i]},{type:"H",values:[t+o]},{type:"A",values:[o,l,0,0,1,t,n+i-l]},{type:"V",values:[n+l]},{type:"A",values:[o,l,0,0,1,t+o,n]},{type:"Z",values:[]}]).filter(function(e){return "A"!==e.type||0!==e.values[0]&&0!==e.values[1]});return n=e&&true===e.normalize?r(n):n},e.SVGCircleElement.prototype.getPathData=function(e){var t=this.cx.baseVal.value,n=this.cy.baseVal.value,a=this.r.baseVal.value,n=[{type:"M",values:[t+a,n]},{type:"A",values:[a,a,0,0,1,t,n+a]},{type:"A",values:[a,a,0,0,1,t-a,n]},{type:"A",values:[a,a,0,0,1,t,n-a]},{type:"A",values:[a,a,0,0,1,t+a,n]},{type:"Z",values:[]}];return n=e&&true===e.normalize?r(n):n},e.SVGEllipseElement.prototype.getPathData=function(e){var t=this.cx.baseVal.value,n=this.cy.baseVal.value,a=this.rx.baseVal.value,i=this.ry.baseVal.value,n=[{type:"M",values:[t+a,n]},{type:"A",values:[a,i,0,0,1,t,n+i]},{type:"A",values:[a,i,0,0,1,t-a,n]},{type:"A",values:[a,i,0,0,1,t,n-i]},{type:"A",values:[a,i,0,0,1,t+a,n]},{type:"Z",values:[]}];return n=e&&true===e.normalize?r(n):n},e.SVGLineElement.prototype.getPathData=function(){return [{type:"M",values:[this.x1.baseVal.value,this.y1.baseVal.value]},{type:"L",values:[this.x2.baseVal.value,this.y2.baseVal.value]}]},e.SVGPolylineElement.prototype.getPathData=function(){for(var e=[],t=0;t<this.points.numberOfItems;t+=1){var n=this.points.getItem(t);e.push({type:0===t?"M":"L",values:[n.x,n.y]});}return e},e.SVGPolygonElement.prototype.getPathData=function(){for(var e=[],t=0;t<this.points.numberOfItems;t+=1){var n=this.points.getItem(t);e.push({type:0===t?"M":"L",values:[n.x,n.y]});}return e.push({type:"Z",values:[]}),e};}();},S=(a={},Ee.m=n=[function(e,t,n){n.r(t);var a=500,i=[],o=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame||function(e){return setTimeout(e,1e3/60)},l=window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame||window.msCancelAnimationFrame||function(e){return clearTimeout(e)},r=Date.now(),s=void 0;function u(){var n=void 0,e=void 0;s&&(l.call(window,s),s=null),i.forEach(function(e){var t;(t=e.event)&&(e.event=null,e.listener(t),n=true);}),n?(r=Date.now(),e=true):Date.now()-r<a&&(e=true),e&&(s=o.call(window,u));}function h(n){var a=-1;return i.some(function(e,t){return e.listener===n&&(a=t,true)}),a}t.default={add:function(e){var t=void 0;return  -1===h(e)?(i.push(t={listener:e}),function(e){t.event=e,s||u();}):null},remove:function(e){ -1<(e=h(e))&&(i.splice(e,1),!i.length&&s&&(l.call(window,s),s=null));}};}],Ee.c=a,Ee.d=function(e,t,n){Ee.o(e,t)||Object.defineProperty(e,t,{enumerable:true,get:n});},Ee.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:true});},Ee.t=function(t,e){if(1&e&&(t=Ee(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(Ee.r(n),Object.defineProperty(n,"default",{enumerable:true,value:t}),2&e&&"string"!=typeof t)for(var a in t)Ee.d(n,a,function(e){return t[e]}.bind(null,a));return n},Ee.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return Ee.d(t,"a",t),t},Ee.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},Ee.p="",Ee(Ee.s=0).default),de={line_altColor:{iniValue:false},line_color:{},line_colorTra:{iniValue:false},line_strokeWidth:{},plug_enabled:{iniValue:false},plug_enabledSE:{hasSE:true,iniValue:false},plug_plugSE:{hasSE:true,iniValue:Y},plug_colorSE:{hasSE:true},plug_colorTraSE:{hasSE:true,iniValue:false},plug_markerWidthSE:{hasSE:true},plug_markerHeightSE:{hasSE:true},lineOutline_enabled:{iniValue:false},lineOutline_color:{},lineOutline_colorTra:{iniValue:false},lineOutline_strokeWidth:{},lineOutline_inStrokeWidth:{},plugOutline_enabledSE:{hasSE:true,iniValue:false},plugOutline_plugSE:{hasSE:true,iniValue:Y},plugOutline_colorSE:{hasSE:true},plugOutline_colorTraSE:{hasSE:true,iniValue:false},plugOutline_strokeWidthSE:{hasSE:true},plugOutline_inStrokeWidthSE:{hasSE:true},position_socketXYSE:{hasSE:true,hasProps:true},position_plugOverheadSE:{hasSE:true},position_path:{},position_lineStrokeWidth:{},position_socketGravitySE:{hasSE:true},path_pathData:{},path_edge:{hasProps:true},viewBox_bBox:{hasProps:true},viewBox_plugBCircleSE:{hasSE:true},lineMask_enabled:{iniValue:false},lineMask_outlineMode:{iniValue:false},lineMask_x:{},lineMask_y:{},lineOutlineMask_x:{},lineOutlineMask_y:{},maskBGRect_x:{},maskBGRect_y:{},capsMaskAnchor_enabledSE:{hasSE:true,iniValue:false},capsMaskAnchor_pathDataSE:{hasSE:true},capsMaskAnchor_strokeWidthSE:{hasSE:true},capsMaskMarker_enabled:{iniValue:false},capsMaskMarker_enabledSE:{hasSE:true,iniValue:false},capsMaskMarker_plugSE:{hasSE:true,iniValue:Y},capsMaskMarker_markerWidthSE:{hasSE:true},capsMaskMarker_markerHeightSE:{hasSE:true},caps_enabled:{iniValue:false},attach_plugSideLenSE:{hasSE:true},attach_plugBackLenSE:{hasSE:true}},fe={show_on:{},show_effect:{},show_animOptions:{},show_animId:{},show_inAnim:{}},ye="fade",me=[],Se={},ge=0,_e={},ve=0;function Ee(e){if(a[e])return a[e].exports;var t=a[e]={i:e,l:false,exports:{}};return n[e].call(t.exports,t,t.exports,Ee),t.l=true,t.exports}function xe(){var i=Date.now(),o=false;e&&(r.call(window,e),e=null),E.forEach(function(e){var t,n,a;if(e.framesStart){if((t=i-e.framesStart)>=e.duration&&e.count&&e.loopsLeft<=1)return a=e.frames[e.lastFrame=e.reverse?0:e.frames.length-1],e.frameCallback(a.value,true,a.timeRatio,a.outputRatio),void(e.framesStart=null);if(t>e.duration){if(n=Math.floor(t/e.duration),e.count){if(n>=e.loopsLeft)return a=e.frames[e.lastFrame=e.reverse?0:e.frames.length-1],e.frameCallback(a.value,true,a.timeRatio,a.outputRatio),void(e.framesStart=null);e.loopsLeft-=n;}e.framesStart+=e.duration*n,t=i-e.framesStart;}e.reverse&&(t=e.duration-t),a=e.frames[e.lastFrame=Math.round(t/v)],false!==e.frameCallback(a.value,false,a.timeRatio,a.outputRatio)?o=true:e.framesStart=null;}}),o&&(e=l.call(window,xe));}function be(e,t){e.framesStart=Date.now(),null!=t&&(e.framesStart-=e.duration*(e.reverse?1-t:t)),e.loopsLeft=e.count,e.lastFrame=null,xe();}function ke(t,n){var e,a;return typeof t!=typeof n||(e=he(t)?"obj":Array.isArray(t)?"array":"")!=(he(n)?"obj":Array.isArray(n)?"array":"")||("obj"===e?ke(a=Object.keys(t).sort(),Object.keys(n).sort())||a.some(function(e){return ke(t[e],n[e])}):"array"===e?t.length!==n.length||t.some(function(e,t){return ke(e,n[t])}):t!==n)}function we(n){return n&&(he(n)?Object.keys(n).reduce(function(e,t){return e[t]=we(n[t]),e},{}):Array.isArray(n)?n.map(we):n)}function Oe(e){var t,n,a,i=1,o=e=(e+"").trim();function l(e){var t=1,e=m.exec(e);return e&&(t=parseFloat(e[1]),e[2]?t=0<=t&&t<=100?t/100:1:(t<0||1<t)&&(t=1)),t}return (t=/^(rgba|hsla|hwb|gray|device\-cmyk)\s*\(([\s\S]+)\)$/i.exec(e))?(n=t[1].toLowerCase(),a=t[2].trim().split(/\s*,\s*/),"rgba"===n&&4===a.length?(i=l(a[3]),o="rgb("+a.slice(0,3).join(", ")+")"):"hsla"===n&&4===a.length?(i=l(a[3]),o="hsl("+a.slice(0,3).join(", ")+")"):"hwb"===n&&4===a.length?(i=l(a[3]),o="hwb("+a.slice(0,3).join(", ")+")"):"gray"===n&&2===a.length?(i=l(a[1]),o="gray("+a[0]+")"):"device-cmyk"===n&&5<=a.length&&(i=l(a[4]),o="device-cmyk("+a.slice(0,4).join(", ")+")")):(t=/^\#(?:([\da-f]{6})([\da-f]{2})|([\da-f]{3})([\da-f]))$/i.exec(e))?o=t[1]?(i=parseInt(t[2],16)/255,"#"+t[1]):(i=parseInt(t[4]+t[4],16)/255,"#"+t[3]):"transparent"===e.toLocaleLowerCase()&&(i=0),[i,o]}function Me(e){return !(!e||e.nodeType!==Node.ELEMENT_NODE||"function"!=typeof e.getBoundingClientRect)}function Ie(e,t){var n,a,i,o={};if(!(i=e.ownerDocument))return console.error("Cannot get document that contains the element."),null;if(e.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_DISCONNECTED)return console.error("A disconnected element was passed."),null;for(a in n=e.getBoundingClientRect())o[a]=n[a];if(!t){if(!(i=i.defaultView))return console.error("Cannot get window that contains the element."),null;o.left+=i.pageXOffset,o.right+=i.pageXOffset,o.top+=i.pageYOffset,o.bottom+=i.pageYOffset;}return o}function Ce(e,t){var n,a=[],i=e;for(t=t||window;;){if(!(n=i.ownerDocument))return console.error("Cannot get document that contains the element."),null;if(!(n=n.defaultView))return console.error("Cannot get window that contains the element."),null;if(n===t)break;if(!(i=n.frameElement))return console.error("`baseWindow` was not found."),null;a.unshift(i);}return a}function Le(e,t){var a=0,i=0;return (t=Ce(e,t=t||window))?t.length?(t.forEach(function(e,t){var n=Ie(e,0<t);a+=n.left,i+=n.top,e=(t=e).ownerDocument.defaultView.getComputedStyle(t,""),n={left:t.clientLeft+parseFloat(e.paddingLeft),top:t.clientTop+parseFloat(e.paddingTop)},a+=n.left,i+=n.top;}),(t=Ie(e,true)).left+=a,t.right+=a,t.top+=i,t.bottom+=i,t):Ie(e):null}function Ae(e,t){var n=e.x-t.x,t=e.y-t.y;return Math.sqrt(n*n+t*t)}function Ve(e,t,n){var a=t.x-e.x,t=t.y-e.y;return {x:e.x+a*n,y:e.y+t*n,angle:Math.atan2(t,a)/(Math.PI/180)}}function Pe(e,t,n){e=Math.atan2(e.y-t.y,t.x-e.x);return {x:t.x+Math.cos(e)*n,y:t.y+Math.sin(e)*n*-1}}function Ne(e,t,n,a,i){var o=i*i,l=o*i,r=1-i,s=r*r,u=s*r,h=u*e.x+3*s*i*t.x+3*r*o*n.x+l*a.x,p=u*e.y+3*s*i*t.y+3*r*o*n.y+l*a.y,c=e.x+2*i*(t.x-e.x)+o*(n.x-2*t.x+e.x),u=e.y+2*i*(t.y-e.y)+o*(n.y-2*t.y+e.y),s=t.x+2*i*(n.x-t.x)+o*(a.x-2*n.x+t.x),l=t.y+2*i*(n.y-t.y)+o*(a.y-2*n.y+t.y),o=r*e.x+i*t.x,e=r*e.y+i*t.y,t=r*n.x+i*a.x,i=r*n.y+i*a.y,a=90-180*Math.atan2(c-s,u-l)/Math.PI;return {x:h,y:p,fromP2:{x:c,y:u},toP1:{x:s,y:l},fromP1:{x:o,y:e},toP2:{x:t,y:i},angle:a+=180<a?-180:180}}function Te(n,a,i,o,e){function l(e,t,n,a,i){return e*(e*(-3*t+9*n-9*a+3*i)+6*t-12*n+6*a)-3*t+3*n}var r,s,u=[.2491,.2491,.2335,.2335,.2032,.2032,.1601,.1601,.1069,.1069,.0472,.0472],h=0,p=(e=null==e||1<e?1:e<0?0:e)/2;return [-0.1252,.1252,-0.3678,.3678,-0.5873,.5873,-0.7699,.7699,-0.9041,.9041,-0.9816,.9816].forEach(function(e,t){r=l(s=p*e+p,n.x,a.x,i.x,o.x),s=l(s,n.y,a.y,i.y,o.y),s=r*r+s*s,h+=u[t]*Math.sqrt(s);}),p*h}function We(e,t,n,a,i){for(var o,l=.5,r=1-l;o=Te(e,t,n,a,r),!(Math.abs(o-i)<=.01);)r+=(o<i?1:-1)*(l/=2);return r}function Be(e,t){var n;return e.forEach(function(e){e=t?e.map(function(e){e={x:e.x,y:e.y};return t(e),e}):e;(n=n||[{type:"M",values:[e[0].x,e[0].y]}]).push(e.length?2===e.length?{type:"L",values:[e[1].x,e[1].y]}:{type:"C",values:[e[1].x,e[1].y,e[2].x,e[2].y,e[3].x,e[3].y]}:{type:"Z",values:[]});}),n}function Re(e){var t=[],n=0;return e.forEach(function(e){e=(2===e.length?Ae:Te).apply(null,e);t.push(e),n+=e;}),{segsLen:t,lenAll:n}}function Fe(e,a){return null==e||null==a||e.length!==a.length||e.some(function(e,t){var n=a[t];return e.type!==n.type||e.values.some(function(e,t){return e!==n.values[t]})})}function Ge(e,t,n){e.events[t]?e.events[t].indexOf(n)<0&&e.events[t].push(n):e.events[t]=[n];}function De(e,t,n){var a;e.events[t]&&-1<(a=e.events[t].indexOf(n))&&e.events[t].splice(a,1);}function ze(e){t&&clearTimeout(t),me.push(e),t=setTimeout(function(){me.forEach(function(e){e();}),me=[];},0);}function je(e,t){e.reflowTargets.indexOf(t)<0&&e.reflowTargets.push(t);}function He(e){e.reflowTargets.forEach(function(e){var n;n=e,setTimeout(function(){var e=n.parentNode,t=n.nextSibling;e.insertBefore(e.removeChild(n),t);},0);}),e.reflowTargets=[];}function Ue(e,t,n,a,i,o,l){var r;"auto-start-reverse"===n?("boolean"!=typeof s&&(t.setAttribute("orient","auto-start-reverse"),s=t.orientType.baseVal===SVGMarkerElement.SVG_MARKER_ORIENT_UNKNOWN),s?t.setAttribute("orient",n):((r=i.createSVGTransform()).setRotate(180,0,0),o.transform.baseVal.appendItem(r),t.setAttribute("orient","auto"),r=true)):(t.setAttribute("orient",n),false===s&&o.transform.baseVal.clear()),t=t.viewBox.baseVal,r?(t.x=-a.right,t.y=-a.bottom):(t.x=a.left,t.y=a.top),t.width=a.width,t.height=a.height,ie&&je(e,l);}function Ze(e,t){return {prop:e?"markerEnd":"markerStart",orient:t?t.noRotate?"0":e?"auto":"auto-start-reverse":null}}function Ye(n,a){Object.keys(a).forEach(function(e){var t=a[e];n[e]=null!=t.iniValue?t.hasSE?[t.iniValue,t.iniValue]:t.iniValue:t.hasSE?t.hasProps?[{},{}]:[]:t.hasProps?{}:null;});}function Xe(t,e,n,a,i){return a!==e[n]&&(e[n]=a,i&&i.forEach(function(e){e(t,a,n);}),true)}function qe(e){function t(e,t){return e+parseFloat(t)}var n=e.document,a=e.getComputedStyle(n.documentElement,""),e=e.getComputedStyle(n.body,""),n={x:0,y:0};return "static"!==e.position?(n.x-=[a.marginLeft,a.borderLeftWidth,a.paddingLeft,e.marginLeft,e.borderLeftWidth].reduce(t,0),n.y-=[a.marginTop,a.borderTopWidth,a.paddingTop,e.marginTop,e.borderTopWidth].reduce(t,0)):"static"!==a.position&&(n.x-=[a.marginLeft,a.borderLeftWidth].reduce(t,0),n.y-=[a.marginTop,a.borderTopWidth].reduce(t,0)),n}function Qe(e){var t,n=e.document;n.getElementById(f)||(t=(new e.DOMParser).parseFromString(y,"image/svg+xml"),n.body.appendChild(t.documentElement),ce(e));}function Ke(l){var g,c,_,e,n,a,i,d,o,r,s,t,u,h,p=l.options,f=l.curStats,y=l.aplStats,v=f.position_socketXYSE,m=false;function S(e,t){e=t===b?{x:e.left+e.width/2,y:e.top}:t===k?{x:e.right,y:e.top+e.height/2}:t===L?{x:e.left+e.width/2,y:e.bottom}:{x:e.left,y:e.top+e.height/2};return e.socketId=t,e}function E(e){return {x:e.x,y:e.y}}if(f.position_path=p.path,f.position_lineStrokeWidth=f.line_strokeWidth,f.position_socketGravitySE=g=we(p.socketGravitySE),c=[0,1].map(function(e){var t=p.anchorSE[e],n=l.optionIsAttach.anchorSE[e],a=false!==n?_e[t._id]:null,i=false!==n&&a.conf.getStrokeWidth?a.conf.getStrokeWidth(a,l):0,o=false!==n&&a.conf.getBBoxNest?a.conf.getBBoxNest(a,l,i):Le(t,l.baseWindow);return f.capsMaskAnchor_pathDataSE[e]=false!==n&&a.conf.getPathData?a.conf.getPathData(a,l,i):(n=null!=(t=o).right?t.right:t.left+t.width,a=null!=t.bottom?t.bottom:t.top+t.height,[{type:"M",values:[t.left,t.top]},{type:"L",values:[n,t.top]},{type:"L",values:[n,a]},{type:"L",values:[t.left,a]},{type:"Z",values:[]}]),f.capsMaskAnchor_strokeWidthSE[e]=i,o}),i=-1,p.socketSE[0]&&p.socketSE[1]?(v[0]=S(c[0],p.socketSE[0]),v[1]=S(c[1],p.socketSE[1])):(p.socketSE[0]||p.socketSE[1]?(a=p.socketSE[0]?(n=0,1):(n=1,0),v[n]=S(c[n],p.socketSE[n]),(e=G.map(function(e){return S(c[a],e)})).forEach(function(e){var t=Ae(e,v[n]);(t<i||-1===i)&&(v[a]=e,i=t);})):(e=G.map(function(e){return S(c[1],e)}),G.map(function(e){return S(c[0],e)}).forEach(function(n){e.forEach(function(e){var t=Ae(n,e);(t<i||-1===i)&&(v[0]=n,v[1]=e,i=t);});})),[0,1].forEach(function(e){var t,n;p.socketSE[e]||(c[e].width||c[e].height?c[e].width||v[e].socketId!==A&&v[e].socketId!==k?c[e].height||v[e].socketId!==b&&v[e].socketId!==L||(v[e].socketId=0<=v[e?0:1].y-c[e].top?L:b):v[e].socketId=0<=v[e?0:1].x-c[e].left?k:A:(t=v[e?0:1].x-c[e].left,n=v[e?0:1].y-c[e].top,v[e].socketId=Math.abs(t)>=Math.abs(n)?0<=t?k:A:0<=n?L:b));})),f.position_path!==y.position_path||f.position_lineStrokeWidth!==y.position_lineStrokeWidth||[0,1].some(function(e){return f.position_plugOverheadSE[e]!==y.position_plugOverheadSE[e]||(t=v[e],n=y.position_socketXYSE[e],t.x!==n.x||t.y!==n.y||t.socketId!==n.socketId)||(t=g[e],n=y.position_socketGravitySE[e],(e=null==t?"auto":Array.isArray(t)?"array":"number")!=(null==n?"auto":Array.isArray(n)?"array":"number")||("array"==e?t[0]!==n[0]||t[1]!==n[1]:t!==n));var t,n;})){switch(l.pathList.baseVal=_=[],l.pathList.animVal=null,f.position_path){case P:_.push([E(v[0]),E(v[1])]);break;case N:t="number"==typeof g[0]&&0<g[0]||"number"==typeof g[1]&&0<g[1],u=ne*(t?-1:1),h=Math.atan2(v[1].y-v[0].y,v[1].x-v[0].x),t=u-h,h=Math.PI-h-u,u=Ae(v[0],v[1])/Math.sqrt(2)*te,t={x:v[0].x+Math.cos(t)*u,y:v[0].y+Math.sin(t)*u*-1},u={x:v[1].x+Math.cos(h)*u,y:v[1].y+Math.sin(h)*u*-1},_.push([E(v[0]),t,u,E(v[1])]);break;case T:case W:o=[g[0],f.position_path===W?0:g[1]],r=[],s=[],v.forEach(function(e,t){var n,a=o[t],i=Array.isArray(a)?{x:a[0],y:a[1]}:"number"==typeof a?e.socketId===b?{x:0,y:-a}:e.socketId===k?{x:a,y:0}:e.socketId===L?{x:0,y:a}:{x:-a,y:0}:(n=v[t?0:1],a=0<(a=f.position_plugOverheadSE[t])?U+(K<a?(a-K)*J:0):z+(f.position_lineStrokeWidth>j?(f.position_lineStrokeWidth-j)*H:0),e.socketId===b?{x:0,y:-(i=(i=(e.y-n.y)/2)<a?a:i)}:e.socketId===k?{x:i=(i=(n.x-e.x)/2)<a?a:i,y:0}:e.socketId===L?{x:0,y:i=(i=(n.y-e.y)/2)<a?a:i}:{x:-(i=(i=(e.x-n.x)/2)<a?a:i),y:0});r[t]=e.x+i.x,s[t]=e.y+i.y;}),_.push([E(v[0]),{x:r[0],y:s[0]},{x:r[1],y:s[1]},E(v[1])]);break;case B:!function(){var n,i=1,l=2,r=3,o=4,s=[[],[]],u=[];function h(e){return e===i?r:e===l?o:e===r?i:l}function p(e){return e===l||e===o?"x":"y"}function c(e,t,n){var a={x:e.x,y:e.y};if(n){if(n===h(e.dirId))throw new Error("Invalid dirId: "+n);a.dirId=n;}else a.dirId=e.dirId;return a.dirId===i?a.y-=t:a.dirId===l?a.x+=t:a.dirId===r?a.y+=t:a.x-=t,a}function d(e,t){return t.dirId===i?e.y<=t.y:t.dirId===l?e.x>=t.x:t.dirId===r?e.y>=t.y:e.x<=t.x}function f(e,t){return t.dirId===i||t.dirId===r?e.x===t.x:e.y===t.y}function y(e){return e[0]?{contain:0,notContain:1}:{contain:1,notContain:0}}function m(e,t,n){return Math.abs(t[n]-e[n])}function S(e,t,n){return "x"===n?e.x<t.x?l:o:e.y<t.y?r:i}for(v.forEach(function(e,t){var n=E(e),a=g[t];e=Array.isArray(a)?a[0]<0?[o,-a[0]]:0<a[0]?[l,a[0]]:a[1]<0?[i,-a[1]]:0<a[1]?[r,a[1]]:[e.socketId,0]:"number"!=typeof a?[e.socketId,ee]:0<=a?[e.socketId,a]:[h(e.socketId),-a],n.dirId=e[0],a=e[1],s[t].push(n),u[t]=c(n,a);});function(){var e,t,a,i,n=[d(u[1],u[0]),d(u[0],u[1])],o=[p(u[0].dirId),p(u[1].dirId)];if(o[0]===o[1]){if(n[0]&&n[1])return void(f(u[1],u[0])||(u[0][o[0]]===u[1][o[1]]?(s[0].push(u[0]),s[1].push(u[1])):(e=u[0][o[0]]+(u[1][o[1]]-u[0][o[0]])/2,s[0].push(c(u[0],Math.abs(e-u[0][o[0]]))),s[1].push(c(u[1],Math.abs(e-u[1][o[1]]))))));n[0]!==n[1]?(t=y(n),(a=m(u[t.notContain],u[t.contain],o[t.notContain]))<ee&&(u[t.notContain]=c(u[t.notContain],ee-a)),s[t.notContain].push(u[t.notContain]),u[t.notContain]=c(u[t.notContain],ee,f(u[t.contain],u[t.notContain])?"x"===o[t.notContain]?r:l:S(u[t.notContain],u[t.contain],"x"===o[t.notContain]?"y":"x"))):(a=m(u[0],u[1],"x"===o[0]?"y":"x"),s.forEach(function(e,t){var n=0===t?1:0;e.push(u[t]),u[t]=c(u[t],ee,2*ee<=a?S(u[t],u[n],"x"===o[t]?"y":"x"):"x"===o[t]?r:l);}));}else {if(n[0]&&n[1])return void(f(u[1],u[0])?s[1].push(u[1]):f(u[0],u[1])?s[0].push(u[0]):s[0].push("x"===o[0]?{x:u[1].x,y:u[0].y}:{x:u[0].x,y:u[1].y}));n[0]!==n[1]?(t=y(n),s[t.notContain].push(u[t.notContain]),u[t.notContain]=c(u[t.notContain],ee,m(u[t.notContain],u[t.contain],o[t.contain])>=ee?S(u[t.notContain],u[t.contain],o[t.contain]):u[t.contain].dirId)):(i=[{x:u[0].x,y:u[0].y},{x:u[1].x,y:u[1].y}],s.forEach(function(e,t){var n=0===t?1:0,a=m(i[t],i[n],o[t]);a<ee&&(u[t]=c(u[t],ee-a)),e.push(u[t]),u[t]=c(u[t],ee,S(u[t],u[n],o[n]));}));}return 1}(););s[1].reverse(),s[0].concat(s[1]).forEach(function(e,t){e={x:e.x,y:e.y};0<t&&_.push([n,e]),n=e;});}();}d=[],f.position_plugOverheadSE.forEach(function(e,t){var n,a,i,o,l,r,s,u,h,p=!t;0<e?2===(n=_[a=p?0:_.length-1]).length?(d[a]=d[a]||Ae.apply(null,n),d[a]>$&&(d[a]-e<$&&(e=d[a]-$),s=Ve(n[0],n[1],(p?e:d[a]-e)/d[a]),_[a]=p?[s,n[1]]:[n[0],s],d[a]-=e)):(d[a]=d[a]||Te.apply(null,n),d[a]>$&&(d[a]-e<$&&(e=d[a]-$),s=Ne(n[0],n[1],n[2],n[3],We(n[0],n[1],n[2],n[3],p?e:d[a]-e)),o=p?(i=n[0],s.toP1):(i=n[3],s.fromP2),l=Math.atan2(i.y-s.y,s.x-i.x),r=Ae(s,o),s.x=i.x+Math.cos(l)*e,s.y=i.y+Math.sin(l)*e*-1,o.x=s.x+Math.cos(l)*r,o.y=s.y+Math.sin(l)*r*-1,_[a]=p?[s,s.toP1,s.toP2,n[3]]:[n[0],s.fromP1,s.fromP2,s],d[a]=null)):e<0&&(n=_[a=p?0:_.length-1],s=v[t].socketId,t=-c[t]["x"==(u=s===A||s===k?"x":"y")?"width":"height"],h=(e=e<t?t:e)*(s===A||s===b?-1:1),2===n.length?n[p?0:n.length-1][u]+=h:(p?[0,1]:[n.length-2,n.length-1]).forEach(function(e){n[e][u]+=h;}),d[a]=null);}),y.position_socketXYSE=we(v),y.position_plugOverheadSE=we(f.position_plugOverheadSE),y.position_path=f.position_path,y.position_lineStrokeWidth=f.position_lineStrokeWidth,y.position_socketGravitySE=we(g),m=true,l.events.apl_position&&l.events.apl_position.forEach(function(e){e(l,_);});}return m}function Je(t,n){n!==t.isShown&&(!!n!=!!t.isShown&&(t.svg.style.visibility=n?"":"hidden"),t.isShown=n,t.events&&t.events.svgShow&&t.events.svgShow.forEach(function(e){e(t,n);}));}function $e(e,t){var n,a,h,p,c,d,f,i,o,l,r,s,u,y,m,S,g,_,v,E,x,b,k,w,O,M,I,C,L,A,V,P,N,T,W,B,R,F,G,D,z,j,H,U={};t.line&&(U.line=(i=(n=e).options,a=n.curStats,o=n.events,l=false,l=Xe(n,a,"line_color",i.lineColor,o.cur_line_color)||l,l=Xe(n,a,"line_colorTra",Oe(a.line_color)[0]<1)||l,l=Xe(n,a,"line_strokeWidth",i.lineSize,o.cur_line_strokeWidth)||l)),(t.plug||U.line)&&(U.plug=(p=(h=e).options,c=h.curStats,d=h.events,f=false,[0,1].forEach(function(e){var t,n,a,i,o,l,r,s,u=p.plugSE[e];f=Xe(h,c.plug_enabledSE,e,u!==Y)||f,f=Xe(h,c.plug_plugSE,e,u)||f,f=Xe(h,c.plug_colorSE,e,s=p.plugColorSE[e]||c.line_color,d.cur_plug_colorSE)||f,f=Xe(h,c.plug_colorTraSE,e,Oe(s)[0]<1)||f,u!==Y&&(i=n=(t=X[q[u]]).widthR*p.plugSizeSE[e],o=a=t.heightR*p.plugSizeSE[e],re&&(i*=c.line_strokeWidth,o*=c.line_strokeWidth),f=Xe(h,c.plug_markerWidthSE,e,i)||f,f=Xe(h,c.plug_markerHeightSE,e,o)||f,c.capsMaskMarker_markerWidthSE[e]=n,c.capsMaskMarker_markerHeightSE[e]=a),c.plugOutline_plugSE[e]=c.capsMaskMarker_plugSE[e]=u,c.plug_enabledSE[e]?(s=c.line_strokeWidth/ue.lineSize*p.plugSizeSE[e],c.position_plugOverheadSE[e]=t.overhead*s,c.viewBox_plugBCircleSE[e]=t.bCircle*s,l=t.sideLen*s,r=t.backLen*s):(c.position_plugOverheadSE[e]=-c.line_strokeWidth/2,c.viewBox_plugBCircleSE[e]=l=r=0),Xe(h,c.attach_plugSideLenSE,e,l,d.cur_attach_plugSideLenSE),Xe(h,c.attach_plugBackLenSE,e,r,d.cur_attach_plugBackLenSE),c.capsMaskAnchor_enabledSE[e]=!c.plug_enabledSE[e];}),f=Xe(h,c,"plug_enabled",c.plug_enabledSE[0]||c.plug_enabledSE[1])||f)),(t.lineOutline||U.line)&&(U.lineOutline=(o=(i=e).options,l=i.curStats,k=false,k=Xe(i,l,"lineOutline_enabled",o.lineOutlineEnabled)||k,k=Xe(i,l,"lineOutline_color",o.lineOutlineColor)||k,k=Xe(i,l,"lineOutline_colorTra",Oe(l.lineOutline_color)[0]<1)||k,o=l.line_strokeWidth*o.lineOutlineSize,k=Xe(i,l,"lineOutline_strokeWidth",l.line_strokeWidth-2*o)||k,k=Xe(i,l,"lineOutline_inStrokeWidth",l.lineOutline_colorTra?l.lineOutline_strokeWidth+2*se:l.line_strokeWidth-o)||k)),(t.plugOutline||U.line||U.plug||U.lineOutline)&&(U.plugOutline=(s=(r=e).options,u=r.curStats,y=false,[0,1].forEach(function(e){var t=u.plugOutline_plugSE[e],n=t!==Y?X[q[t]]:null;y=Xe(r,u.plugOutline_enabledSE,e,s.plugOutlineEnabledSE[e]&&u.plug_enabled&&u.plug_enabledSE[e]&&!!n&&!!n.outlineBase)||y,y=Xe(r,u.plugOutline_colorSE,e,t=s.plugOutlineColorSE[e]||u.lineOutline_color)||y,y=Xe(r,u.plugOutline_colorTraSE,e,Oe(t)[0]<1)||y,n&&n.outlineBase&&((t=s.plugOutlineSizeSE[e])>n.outlineMax&&(t=n.outlineMax),t*=2*n.outlineBase,y=Xe(r,u.plugOutline_strokeWidthSE,e,t)||y,y=Xe(r,u.plugOutline_inStrokeWidthSE,e,u.plugOutline_colorTraSE[e]?t-se/(u.line_strokeWidth/ue.lineSize)/s.plugSizeSE[e]*2:t/2)||y);}),y)),(t.faces||U.line||U.plug||U.lineOutline||U.plugOutline)&&(U.faces=(g=(m=e).curStats,_=m.aplStats,v=m.events,E=false,!g.line_altColor&&Xe(m,_,"line_color",S=g.line_color,v.apl_line_color)&&(m.lineFace.style.stroke=S,E=true),Xe(m,_,"line_strokeWidth",S=g.line_strokeWidth,v.apl_line_strokeWidth)&&(m.lineShape.style.strokeWidth=S+"px",E=true,(oe||ie)&&(je(m,m.lineShape),ie&&(je(m,m.lineFace),je(m,m.lineMaskCaps)))),Xe(m,_,"lineOutline_enabled",S=g.lineOutline_enabled,v.apl_lineOutline_enabled)&&(m.lineOutlineFace.style.display=S?"inline":"none",E=true),g.lineOutline_enabled&&(Xe(m,_,"lineOutline_color",S=g.lineOutline_color,v.apl_lineOutline_color)&&(m.lineOutlineFace.style.stroke=S,E=true),Xe(m,_,"lineOutline_strokeWidth",S=g.lineOutline_strokeWidth,v.apl_lineOutline_strokeWidth)&&(m.lineOutlineMaskShape.style.strokeWidth=S+"px",E=true,ie&&(je(m,m.lineOutlineMaskCaps),je(m,m.lineOutlineFace))),Xe(m,_,"lineOutline_inStrokeWidth",S=g.lineOutline_inStrokeWidth,v.apl_lineOutline_inStrokeWidth)&&(m.lineMaskShape.style.strokeWidth=S+"px",E=true,ie&&(je(m,m.lineOutlineMaskCaps),je(m,m.lineOutlineFace)))),Xe(m,_,"plug_enabled",S=g.plug_enabled,v.apl_plug_enabled)&&(m.plugsFace.style.display=S?"inline":"none",E=true),g.plug_enabled&&[0,1].forEach(function(n){var e=g.plug_plugSE[n],t=e!==Y?X[q[e]]:null,a=Ze(n,t);Xe(m,_.plug_enabledSE,n,S=g.plug_enabledSE[n],v.apl_plug_enabledSE)&&(m.plugsFace.style[a.prop]=S?"url(#"+m.plugMarkerIdSE[n]+")":"none",E=true),g.plug_enabledSE[n]&&(Xe(m,_.plug_plugSE,n,e,v.apl_plug_plugSE)&&(m.plugFaceSE[n].href.baseVal="#"+t.elmId,Ue(m,m.plugMarkerSE[n],a.orient,t.bBox,m.svg,m.plugMarkerShapeSE[n],m.plugsFace),E=true,oe&&je(m,m.plugsFace)),Xe(m,_.plug_colorSE,n,S=g.plug_colorSE[n],v.apl_plug_colorSE)&&(m.plugFaceSE[n].style.fill=S,E=true,(le||re||ie)&&!g.line_colorTra&&je(m,ie?m.lineMaskCaps:m.capsMaskLine)),["markerWidth","markerHeight"].forEach(function(e){var t="plug_"+e+"SE";Xe(m,_[t],n,S=g[t][n],v["apl_"+t])&&(m.plugMarkerSE[n][e].baseVal.value=S,E=true);}),Xe(m,_.plugOutline_enabledSE,n,S=g.plugOutline_enabledSE[n],v.apl_plugOutline_enabledSE)&&(S?(m.plugFaceSE[n].style.mask="url(#"+m.plugMaskIdSE[n]+")",m.plugOutlineFaceSE[n].style.display="inline"):(m.plugFaceSE[n].style.mask="none",m.plugOutlineFaceSE[n].style.display="none"),E=true),g.plugOutline_enabledSE[n]&&(Xe(m,_.plugOutline_plugSE,n,e,v.apl_plugOutline_plugSE)&&(m.plugOutlineFaceSE[n].href.baseVal=m.plugMaskShapeSE[n].href.baseVal=m.plugOutlineMaskShapeSE[n].href.baseVal="#"+t.elmId,[m.plugMaskSE[n],m.plugOutlineMaskSE[n]].forEach(function(e){e.x.baseVal.value=t.bBox.left,e.y.baseVal.value=t.bBox.top,e.width.baseVal.value=t.bBox.width,e.height.baseVal.value=t.bBox.height;}),E=true),Xe(m,_.plugOutline_colorSE,n,S=g.plugOutline_colorSE[n],v.apl_plugOutline_colorSE)&&(m.plugOutlineFaceSE[n].style.fill=S,E=true,ie&&(je(m,m.lineMaskCaps),je(m,m.lineOutlineMaskCaps))),Xe(m,_.plugOutline_strokeWidthSE,n,S=g.plugOutline_strokeWidthSE[n],v.apl_plugOutline_strokeWidthSE)&&(m.plugOutlineMaskShapeSE[n].style.strokeWidth=S+"px",E=true),Xe(m,_.plugOutline_inStrokeWidthSE,n,S=g.plugOutline_inStrokeWidthSE[n],v.apl_plugOutline_inStrokeWidthSE)&&(m.plugMaskShapeSE[n].style.strokeWidth=S+"px",E=true)));}),E)),(t.position||U.line||U.plug)&&(U.position=Ke(e)),(t.path||U.position)&&(U.path=(k=(x=e).curStats,I=x.aplStats,M=x.pathList.animVal||x.pathList.baseVal,w=k.path_edge,C=false,M&&(w.x1=w.x2=M[0][0].x,w.y1=w.y2=M[0][0].y,k.path_pathData=b=Be(M,function(e){e.x<w.x1&&(w.x1=e.x),e.y<w.y1&&(w.y1=e.y),e.x>w.x2&&(w.x2=e.x),e.y>w.y2&&(w.y2=e.y);}),Fe(b,I.path_pathData)&&(x.linePath.setPathData(b),I.path_pathData=b,C=true,ie?(je(x,x.plugsFace),je(x,x.lineMaskCaps)):oe&&je(x,x.linePath),x.events.apl_path&&x.events.apl_path.forEach(function(e){e(x,b);}))),C)),U.viewBox=(M=(O=e).curStats,I=O.aplStats,C=M.path_edge,L=M.viewBox_bBox,A=I.viewBox_bBox,V=O.svg.viewBox.baseVal,P=O.svg.style,N=false,I=Math.max(M.line_strokeWidth/2,M.viewBox_plugBCircleSE[0]||0,M.viewBox_plugBCircleSE[1]||0),T={x1:C.x1-I,y1:C.y1-I,x2:C.x2+I,y2:C.y2+I},O.events.new_edge4viewBox&&O.events.new_edge4viewBox.forEach(function(e){e(O,T);}),L.x=M.lineMask_x=M.lineOutlineMask_x=M.maskBGRect_x=T.x1,L.y=M.lineMask_y=M.lineOutlineMask_y=M.maskBGRect_y=T.y1,L.width=T.x2-T.x1,L.height=T.y2-T.y1,["x","y","width","height"].forEach(function(e){var t;(t=L[e])!==A[e]&&(V[e]=A[e]=t,P[Q[e]]=t+("x"===e||"y"===e?O.bodyOffset[e]:0)+"px",N=true);}),N),U.mask=(R=(W=e).curStats,F=W.aplStats,G=false,R.plug_enabled?[0,1].forEach(function(e){R.capsMaskMarker_enabledSE[e]=R.plug_enabledSE[e]&&R.plug_colorTraSE[e]||R.plugOutline_enabledSE[e]&&R.plugOutline_colorTraSE[e];}):R.capsMaskMarker_enabledSE[0]=R.capsMaskMarker_enabledSE[1]=false,R.capsMaskMarker_enabled=R.capsMaskMarker_enabledSE[0]||R.capsMaskMarker_enabledSE[1],R.lineMask_outlineMode=R.lineOutline_enabled,R.caps_enabled=R.capsMaskMarker_enabled||R.capsMaskAnchor_enabledSE[0]||R.capsMaskAnchor_enabledSE[1],R.lineMask_enabled=R.caps_enabled||R.lineMask_outlineMode,(R.lineMask_enabled&&!R.lineMask_outlineMode||R.lineOutline_enabled)&&["x","y"].forEach(function(e){var t="maskBGRect_"+e;Xe(W,F,t,B=R[t])&&(W.maskBGRect[e].baseVal.value=B,G=true);}),Xe(W,F,"lineMask_enabled",B=R.lineMask_enabled)&&(W.lineFace.style.mask=B?"url(#"+W.lineMaskId+")":"none",G=true,re&&je(W,W.lineMask)),R.lineMask_enabled&&(Xe(W,F,"lineMask_outlineMode",B=R.lineMask_outlineMode)&&(B?(W.lineMaskBG.style.display="none",W.lineMaskShape.style.display="inline"):(W.lineMaskBG.style.display="inline",W.lineMaskShape.style.display="none"),G=true),["x","y"].forEach(function(e){var t="lineMask_"+e;Xe(W,F,t,B=R[t])&&(W.lineMask[e].baseVal.value=B,G=true);}),Xe(W,F,"caps_enabled",B=R.caps_enabled)&&(W.lineMaskCaps.style.display=W.lineOutlineMaskCaps.style.display=B?"inline":"none",G=true,re&&je(W,W.capsMaskLine)),R.caps_enabled&&([0,1].forEach(function(e){var t;Xe(W,F.capsMaskAnchor_enabledSE,e,B=R.capsMaskAnchor_enabledSE[e])&&(W.capsMaskAnchorSE[e].style.display=B?"inline":"none",G=true,re&&je(W,W.lineMask)),R.capsMaskAnchor_enabledSE[e]&&(Fe(t=R.capsMaskAnchor_pathDataSE[e],F.capsMaskAnchor_pathDataSE[e])&&(W.capsMaskAnchorSE[e].setPathData(t),F.capsMaskAnchor_pathDataSE[e]=t,G=true),Xe(W,F.capsMaskAnchor_strokeWidthSE,e,B=R.capsMaskAnchor_strokeWidthSE[e])&&(W.capsMaskAnchorSE[e].style.strokeWidth=B+"px",G=true));}),Xe(W,F,"capsMaskMarker_enabled",B=R.capsMaskMarker_enabled)&&(W.capsMaskLine.style.display=B?"inline":"none",G=true),R.capsMaskMarker_enabled&&[0,1].forEach(function(n){var e=R.capsMaskMarker_plugSE[n],t=e!==Y?X[q[e]]:null,a=Ze(n,t);Xe(W,F.capsMaskMarker_enabledSE,n,B=R.capsMaskMarker_enabledSE[n])&&(W.capsMaskLine.style[a.prop]=B?"url(#"+W.lineMaskMarkerIdSE[n]+")":"none",G=true),R.capsMaskMarker_enabledSE[n]&&(Xe(W,F.capsMaskMarker_plugSE,n,e)&&(W.capsMaskMarkerShapeSE[n].href.baseVal="#"+t.elmId,Ue(W,W.capsMaskMarkerSE[n],a.orient,t.bBox,W.svg,W.capsMaskMarkerShapeSE[n],W.capsMaskLine),G=true,oe&&(je(W,W.capsMaskLine),je(W,W.lineFace))),["markerWidth","markerHeight"].forEach(function(e){var t="capsMaskMarker_"+e+"SE";Xe(W,F[t],n,B=R[t][n])&&(W.capsMaskMarkerSE[n][e].baseVal.value=B,G=true);}));}))),R.lineOutline_enabled&&["x","y"].forEach(function(e){var t="lineOutlineMask_"+e;Xe(W,F,t,B=R[t])&&(W.lineOutlineMask[e].baseVal.value=B,G=true);}),G),t.effect&&(j=(D=e).curStats,H=D.aplStats,Object.keys(Z).forEach(function(e){var t=Z[e],n=e+"_enabled",a=e+"_options",e=j[a];Xe(D,H,n,z=j[n])?(z&&(H[a]=we(e)),t[z?"init":"remove"](D)):z&&ke(e,H[a])&&(t.remove(D),H[n]=true,H[a]=we(e),t.init(D));})),(le||re)&&U.line&&!U.path&&je(e,e.lineShape),le&&U.plug&&!U.line&&je(e,e.plugsFace),He(e);}function et(e,t){return {duration:(pe(e.duration)&&0<e.duration?e:t).duration,timing:g.validTiming(e.timing)?e.timing:we(t.timing)}}function tt(e,t,n,a){var i=e.curStats,o=e.aplStats,l={};function r(){["show_on","show_effect","show_animOptions"].forEach(function(e){o[e]=i[e];});}i.show_on=t,n&&w[n]&&(i.show_effect=n,i.show_animOptions=et(he(a)?a:{},w[n].defaultAnimOptions)),l.show_on=i.show_on!==o.show_on,l.show_effect=i.show_effect!==o.show_effect,l.show_animOptions=ke(i.show_animOptions,o.show_animOptions),l.show_effect||l.show_animOptions?i.show_inAnim?(n=l.show_effect?w[o.show_effect].stop(e,true,true):w[o.show_effect].stop(e),r(),w[o.show_effect].init(e,n)):l.show_on&&(o.show_effect&&l.show_effect&&w[o.show_effect].stop(e,true,true),r(),w[o.show_effect].init(e)):l.show_on&&(r(),w[o.show_effect].start(e));}function nt(e,t,n){n={props:e,optionName:n};return e.attachments.indexOf(t)<0&&(!t.conf.bind||t.conf.bind(t,n))&&(e.attachments.push(t),t.boundTargets.push(n),1)}function at(n,a,e){var i=n.attachments.indexOf(a);-1<i&&n.attachments.splice(i,1),a.boundTargets.some(function(e,t){return e.props===n&&(a.conf.unbind&&a.conf.unbind(a,e),i=t,true)})&&(a.boundTargets.splice(i,1),e||ze(function(){a.boundTargets.length||o(a);}));}function it(s,u){var i,n,e,t,a,o,l,r,h,p,c,d,f,y,m,S=s.options,g={};function _(e,t,n,a,i){var o={};return n?null!=a?(o.container=e[n],o.key=a):(o.container=e,o.key=n):(o.container=e,o.key=t),o.default=i,o.acceptsAuto=null==o.default,o}function v(e,t,n,a,i,o,l){var r,s,u,l=_(e,n,i,o,l);return null!=t[n]&&(s=(t[n]+"").toLowerCase())&&(l.acceptsAuto&&s===D||(u=a[s]))&&u!==l.container[l.key]&&(l.container[l.key]=u,r=true),null!=l.container[l.key]||l.acceptsAuto||(l.container[l.key]=l.default,r=true),r}function E(e,t,n,a,i,o,l,r,s){var u,h,p,c,l=_(e,n,i,o,l);if(!a){if(null==l.default)throw new Error("Invalid `type`: "+n);a=typeof l.default;}return null!=t[n]&&(l.acceptsAuto&&(t[n]+"").toLowerCase()===D||(p=h=t[n],("number"===(c=a)?pe(p):typeof p===c)&&(h=s&&"string"===a&&h?h.trim():h,1)&&(!r||r(h))))&&h!==l.container[l.key]&&(l.container[l.key]=h,u=true),null!=l.container[l.key]||l.acceptsAuto||(l.container[l.key]=l.default,u=true),u}if(u=u||{},["start","end"].forEach(function(e,t){var n=u[e],a=false;if(n&&(Me(n)||(a=I(n,"anchor")))&&n!==S.anchorSE[t]){if(false!==s.optionIsAttach.anchorSE[t]&&at(s,_e[S.anchorSE[t]._id]),a&&!nt(s,_e[n._id],e))throw new Error("Can't bind attachment");S.anchorSE[t]=n,s.optionIsAttach.anchorSE[t]=a,i=g.position=true;}}),!S.anchorSE[0]||!S.anchorSE[1]||S.anchorSE[0]===S.anchorSE[1])throw new Error("`start` and `end` are required.");function x(e){var t=a.appendChild(y.createElementNS(ae,"mask"));return t.id=e,t.maskUnits.baseVal=SVGUnitTypes.SVG_UNIT_TYPE_USERSPACEONUSE,[t.x,t.y,t.width,t.height].forEach(function(e){e.baseVal.newValueSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_PX,0);}),t}function b(e){var t=a.appendChild(y.createElementNS(ae,"marker"));return t.id=e,t.markerUnits.baseVal=SVGMarkerElement.SVG_MARKERUNITS_STROKEWIDTH,t.viewBox.baseVal||t.setAttribute("viewBox","0 0 0 0"),t}function k(e){return [e.width,e.height].forEach(function(e){e.baseVal.newValueSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_PERCENTAGE,100);}),e}i&&(c=function(e,t){var n,a;if(!(e=Ce(e))||!(n=Ce(t)))throw new Error("Cannot get frames.");return e.length&&n.length&&(e.reverse(),n.reverse(),e.some(function(t){return n.some(function(e){return e===t&&(a=e.contentWindow,true)})})),a||window}(false!==s.optionIsAttach.anchorSE[0]?_e[S.anchorSE[0]._id].element:S.anchorSE[0],false!==s.optionIsAttach.anchorSE[1]?_e[S.anchorSE[1]._id].element:S.anchorSE[1]))!==s.baseWindow&&(e=c,f=(n=s).aplStats,y=e.document,m=C+"-"+n._id,n.pathList={},Ye(f,de),Object.keys(Z).forEach(function(e){var t=e+"_enabled";f[t]&&(Z[e].remove(n),f[t]=false);}),n.baseWindow&&n.svg&&n.baseWindow.document.body.removeChild(n.svg),Qe(n.baseWindow=e),n.bodyOffset=qe(e),n.svg=t=y.createElementNS(ae,"svg"),t.className.baseVal=C,t.viewBox.baseVal||t.setAttribute("viewBox","0 0 0 0"),n.defs=a=t.appendChild(y.createElementNS(ae,"defs")),n.linePath=l=a.appendChild(y.createElementNS(ae,"path")),l.id=r=m+"-line-path",l.className.baseVal=C+"-line-path",re&&(l.style.fill="none"),n.lineShape=l=a.appendChild(y.createElementNS(ae,"use")),l.id=h=m+"-line-shape",l.href.baseVal="#"+r,(o=a.appendChild(y.createElementNS(ae,"g"))).id=p=m+"-caps",n.capsMaskAnchorSE=[0,1].map(function(){var e=o.appendChild(y.createElementNS(ae,"path"));return e.className.baseVal=C+"-caps-mask-anchor",e}),n.lineMaskMarkerIdSE=[m+"-caps-mask-marker-0",m+"-caps-mask-marker-1"],n.capsMaskMarkerSE=[0,1].map(function(e){return b(n.lineMaskMarkerIdSE[e])}),n.capsMaskMarkerShapeSE=[0,1].map(function(e){e=n.capsMaskMarkerSE[e].appendChild(y.createElementNS(ae,"use"));return e.className.baseVal=C+"-caps-mask-marker-shape",e}),n.capsMaskLine=l=o.appendChild(y.createElementNS(ae,"use")),l.className.baseVal=C+"-caps-mask-line",l.href.baseVal="#"+h,n.maskBGRect=l=k(a.appendChild(y.createElementNS(ae,"rect"))),l.id=c=m+"-mask-bg-rect",l.className.baseVal=C+"-mask-bg-rect",re&&(l.style.fill="white"),n.lineMask=k(x(n.lineMaskId=m+"-line-mask")),n.lineMaskBG=l=n.lineMask.appendChild(y.createElementNS(ae,"use")),l.href.baseVal="#"+c,n.lineMaskShape=l=n.lineMask.appendChild(y.createElementNS(ae,"use")),l.className.baseVal=C+"-line-mask-shape",l.href.baseVal="#"+r,l.style.display="none",n.lineMaskCaps=l=n.lineMask.appendChild(y.createElementNS(ae,"use")),l.href.baseVal="#"+p,n.lineOutlineMask=k(x(e=m+"-line-outline-mask")),(l=n.lineOutlineMask.appendChild(y.createElementNS(ae,"use"))).href.baseVal="#"+c,n.lineOutlineMaskShape=l=n.lineOutlineMask.appendChild(y.createElementNS(ae,"use")),l.className.baseVal=C+"-line-outline-mask-shape",l.href.baseVal="#"+r,n.lineOutlineMaskCaps=l=n.lineOutlineMask.appendChild(y.createElementNS(ae,"use")),l.href.baseVal="#"+p,n.face=t.appendChild(y.createElementNS(ae,"g")),n.lineFace=l=n.face.appendChild(y.createElementNS(ae,"use")),l.href.baseVal="#"+h,n.lineOutlineFace=l=n.face.appendChild(y.createElementNS(ae,"use")),l.href.baseVal="#"+h,l.style.mask="url(#"+e+")",l.style.display="none",n.plugMaskIdSE=[m+"-plug-mask-0",m+"-plug-mask-1"],n.plugMaskSE=[0,1].map(function(e){return x(n.plugMaskIdSE[e])}),n.plugMaskShapeSE=[0,1].map(function(e){e=n.plugMaskSE[e].appendChild(y.createElementNS(ae,"use"));return e.className.baseVal=C+"-plug-mask-shape",e}),d=[],n.plugOutlineMaskSE=[0,1].map(function(e){return x(d[e]=m+"-plug-outline-mask-"+e)}),n.plugOutlineMaskShapeSE=[0,1].map(function(e){e=n.plugOutlineMaskSE[e].appendChild(y.createElementNS(ae,"use"));return e.className.baseVal=C+"-plug-outline-mask-shape",e}),n.plugMarkerIdSE=[m+"-plug-marker-0",m+"-plug-marker-1"],n.plugMarkerSE=[0,1].map(function(e){e=b(n.plugMarkerIdSE[e]);return re&&(e.markerUnits.baseVal=SVGMarkerElement.SVG_MARKERUNITS_USERSPACEONUSE),e}),n.plugMarkerShapeSE=[0,1].map(function(e){return n.plugMarkerSE[e].appendChild(y.createElementNS(ae,"g"))}),n.plugFaceSE=[0,1].map(function(e){return n.plugMarkerShapeSE[e].appendChild(y.createElementNS(ae,"use"))}),n.plugOutlineFaceSE=[0,1].map(function(e){var t=n.plugMarkerShapeSE[e].appendChild(y.createElementNS(ae,"use"));return t.style.mask="url(#"+d[e]+")",t.style.display="none",t}),n.plugsFace=l=n.face.appendChild(y.createElementNS(ae,"use")),l.className.baseVal=C+"-plugs-face",l.href.baseVal="#"+h,l.style.display="none",n.curStats.show_inAnim?(n.isShown=1,w[f.show_effect].stop(n,true)):n.isShown||(t.style.visibility="hidden"),y.body.appendChild(t),[0,1,2].forEach(function(e){var t,e=n.options.labelSEM[e];e&&I(e,"label")&&(t=_e[e._id]).conf.initSvg&&t.conf.initSvg(t,n);}),g.line=g.plug=g.lineOutline=g.plugOutline=g.faces=g.effect=true),g.position=v(S,u,"path",R,null,null,ue.path)||g.position,g.position=v(S,u,"startSocket",V,"socketSE",0)||g.position,g.position=v(S,u,"endSocket",V,"socketSE",1)||g.position,[u.startSocketGravity,u.endSocketGravity].forEach(function(e,t){var n,a,i=false;null!=e&&(Array.isArray(e)?pe(e[0])&&pe(e[1])&&(i=[e[0],e[1]],Array.isArray(S.socketGravitySE[t])&&(n=i,a=S.socketGravitySE[t],n.length===a.length&&n.every(function(e,t){return e===a[t]}))&&(i=false)):((e+"").toLowerCase()===D?i=null:pe(e)&&0<=e&&(i=e),i===S.socketGravitySE[t]&&(i=false)),false!==i&&(S.socketGravitySE[t]=i,g.position=true));}),g.line=E(S,u,"color",null,"lineColor",null,ue.lineColor,null,true)||g.line,g.line=E(S,u,"size",null,"lineSize",null,ue.lineSize,function(e){return 0<e})||g.line,["startPlug","endPlug"].forEach(function(e,t){g.plug=v(S,u,e,F,"plugSE",t,ue.plugSE[t])||g.plug,g.plug=E(S,u,e+"Color","string","plugColorSE",t,null,null,true)||g.plug,g.plug=E(S,u,e+"Size",null,"plugSizeSE",t,ue.plugSizeSE[t],function(e){return 0<e})||g.plug;}),g.lineOutline=E(S,u,"outline",null,"lineOutlineEnabled",null,ue.lineOutlineEnabled)||g.lineOutline,g.lineOutline=E(S,u,"outlineColor",null,"lineOutlineColor",null,ue.lineOutlineColor,null,true)||g.lineOutline,g.lineOutline=E(S,u,"outlineSize",null,"lineOutlineSize",null,ue.lineOutlineSize,function(e){return 0<e&&e<=.48})||g.lineOutline,["startPlugOutline","endPlugOutline"].forEach(function(e,t){g.plugOutline=E(S,u,e,null,"plugOutlineEnabledSE",t,ue.plugOutlineEnabledSE[t])||g.plugOutline,g.plugOutline=E(S,u,e+"Color","string","plugOutlineColorSE",t,null,null,true)||g.plugOutline,g.plugOutline=E(S,u,e+"Size",null,"plugOutlineSizeSE",t,ue.plugOutlineSizeSE[t],function(e){return 1<=e})||g.plugOutline;}),["startLabel","endLabel","middleLabel"].forEach(function(e,t){var n,a,i,o=u[e],l=S.labelSEM[t]&&!s.optionIsAttach.labelSEM[t]?_e[S.labelSEM[t]._id].text:S.labelSEM[t],r=false;if((n="string"==typeof o)&&(o=o.trim()),(n||o&&(r=I(o,"label")))&&o!==l){if(S.labelSEM[t]&&(at(s,_e[S.labelSEM[t]._id]),S.labelSEM[t]=""),o){if(r?(a=_e[(i=o)._id]).boundTargets.slice().forEach(function(e){a.conf.removeOption(a,e);}):i=new M(O.captionLabel,[o]),!nt(s,_e[i._id],e))throw new Error("Can't bind attachment");S.labelSEM[t]=i;}s.optionIsAttach.labelSEM[t]=r;}}),Object.keys(Z).forEach(function(a){var e,t,o=Z[a],n=a+"_enabled",i=a+"_options";function l(a){var i={};return o.optionsConf.forEach(function(e){var t=e[0],n=e[3];null==e[4]||i[n]||(i[n]=[]),("function"==typeof t?t:"id"===t?v:E).apply(null,[i,a].concat(e.slice(1)));}),i}function r(e){var t,n=a+"_animOptions";return e.hasOwnProperty("animation")?he(e.animation)?t=s.curStats[n]=et(e.animation,o.defaultAnimOptions):(t=!!e.animation,s.curStats[n]=t?et({},o.defaultAnimOptions):null):(t=!!o.defaultEnabled,s.curStats[n]=t?et({},o.defaultAnimOptions):null),t}u.hasOwnProperty(a)&&(e=u[a],he(e)?(s.curStats[n]=true,t=s.curStats[i]=l(e),o.anim&&(s.curStats[i].animation=r(e))):(t=s.curStats[n]=!!e)&&(s.curStats[i]=l({}),o.anim&&(s.curStats[i].animation=r({}))),ke(t,S[a])&&(S[a]=t,g.effect=true));}),$e(s,g);}function ot(e,t,n){var a={options:{anchorSE:[],socketSE:[],socketGravitySE:[],plugSE:[],plugColorSE:[],plugSizeSE:[],plugOutlineEnabledSE:[],plugOutlineColorSE:[],plugOutlineSizeSE:[],labelSEM:["","",""]},optionIsAttach:{anchorSE:[false,false],labelSEM:[false,false,false]},curStats:{},aplStats:{},attachments:[],events:{},reflowTargets:[]};Ye(a.curStats,de),Ye(a.aplStats,de),Object.keys(Z).forEach(function(e){var t=Z[e].stats;Ye(a.curStats,t),Ye(a.aplStats,t),a.options[e]=false;}),Ye(a.curStats,fe),Ye(a.aplStats,fe),a.curStats.show_effect=ye,a.curStats.show_animOptions=we(w[ye].defaultAnimOptions),Object.defineProperty(this,"_id",{value:++ge}),a._id=this._id,Se[this._id]=a,1===arguments.length&&(n=e,e=null),n=n||{},(e||t)&&(n=we(n),e&&(n.start=e),t&&(n.end=t)),a.isShown=a.aplStats.show_on=!n.hide,this.setOptions(n);}function lt(n){return function(e){var t={};t[n]=e,this.setOptions(t);}}function rt(e,t){var n,a={conf:e,curStats:{},aplStats:{},boundTargets:[]},i={};e.argOptions.every(function(e){return !(!t.length||("string"==typeof e.type?typeof t[0]!==e.type:"function"!=typeof e.type||!e.type(t[0])))&&(i[e.optionName]=t.shift(),true)}),n=t.length&&he(t[0])?we(t[0]):{},Object.keys(i).forEach(function(e){n[e]=i[e];}),e.stats&&(Ye(a.curStats,e.stats),Ye(a.aplStats,e.stats)),Object.defineProperty(this,"_id",{value:++ve}),Object.defineProperty(this,"isRemoved",{get:function(){return !_e[this._id]}}),a._id=this._id,e.init&&!e.init(a,n)||(_e[this._id]=a);}return Z={dash:{stats:{dash_len:{},dash_gap:{},dash_maxOffset:{}},anim:true,defaultAnimOptions:{duration:1e3,timing:"linear"},optionsConf:[["type","len","number",null,null,null,function(e){return 0<e}],["type","gap","number",null,null,null,function(e){return 0<e}]],init:function(e){Ge(e,"apl_line_strokeWidth",Z.dash.update),e.lineFace.style.strokeDashoffset=0,Z.dash.update(e);},remove:function(e){var t=e.curStats;De(e,"apl_line_strokeWidth",Z.dash.update),t.dash_animId&&(g.remove(t.dash_animId),t.dash_animId=null),e.lineFace.style.strokeDasharray="none",e.lineFace.style.strokeDashoffset=0,Ye(e.aplStats,Z.dash.stats);},update:function(t){var e,n=t.curStats,a=t.aplStats,i=a.dash_options,o=false;n.dash_len=i.len||2*a.line_strokeWidth,n.dash_gap=i.gap||a.line_strokeWidth,n.dash_maxOffset=n.dash_len+n.dash_gap,o=Xe(t,a,"dash_len",n.dash_len)||o,(o=Xe(t,a,"dash_gap",n.dash_gap)||o)&&(t.lineFace.style.strokeDasharray=a.dash_len+","+a.dash_gap),n.dash_animOptions?(o=Xe(t,a,"dash_maxOffset",n.dash_maxOffset),a.dash_animOptions&&(o||ke(n.dash_animOptions,a.dash_animOptions))&&(n.dash_animId&&(e=g.stop(n.dash_animId),g.remove(n.dash_animId)),a.dash_animOptions=null),a.dash_animOptions||(n.dash_animId=g.add(function(e){return (1-e)*a.dash_maxOffset+"px"},function(e){t.lineFace.style.strokeDashoffset=e;},n.dash_animOptions.duration,0,n.dash_animOptions.timing,false,e),a.dash_animOptions=we(n.dash_animOptions))):a.dash_animOptions&&(n.dash_animId&&(g.remove(n.dash_animId),n.dash_animId=null),t.lineFace.style.strokeDashoffset=0,a.dash_animOptions=null);}},gradient:{stats:{gradient_colorSE:{hasSE:true},gradient_pointSE:{hasSE:true,hasProps:true}},optionsConf:[["type","startColor","string","colorSE",0,null,null,true],["type","endColor","string","colorSE",1,null,null,true]],init:function(e){var a=e.baseWindow.document,t=e.defs,n=C+"-"+e._id+"-gradient";e.efc_gradient_gradient=t=t.appendChild(a.createElementNS(ae,"linearGradient")),t.id=n,t.gradientUnits.baseVal=SVGUnitTypes.SVG_UNIT_TYPE_USERSPACEONUSE,[t.x1,t.y1,t.x2,t.y2].forEach(function(e){e.baseVal.newValueSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_PX,0);}),e.efc_gradient_stopSE=[0,1].map(function(t){var n=e.efc_gradient_gradient.appendChild(a.createElementNS(ae,"stop"));try{n.offset.baseVal=t;}catch(e){if(e.code!==DOMException.NO_MODIFICATION_ALLOWED_ERR)throw e;n.setAttribute("offset",t);}return n}),Ge(e,"cur_plug_colorSE",Z.gradient.update),Ge(e,"apl_path",Z.gradient.update),e.curStats.line_altColor=true,e.lineFace.style.stroke="url(#"+n+")",Z.gradient.update(e);},remove:function(e){e.efc_gradient_gradient&&(e.defs.removeChild(e.efc_gradient_gradient),e.efc_gradient_gradient=e.efc_gradient_stopSE=null),De(e,"cur_plug_colorSE",Z.gradient.update),De(e,"apl_path",Z.gradient.update),e.curStats.line_altColor=false,e.lineFace.style.stroke=e.curStats.line_color,Ye(e.aplStats,Z.gradient.stats);},update:function(a){var e,i=a.curStats,o=a.aplStats,t=o.gradient_options,n=a.pathList.animVal||a.pathList.baseVal;[0,1].forEach(function(e){i.gradient_colorSE[e]=t.colorSE[e]||i.plug_colorSE[e];}),e=n[0][0],i.gradient_pointSE[0]={x:e.x,y:e.y},e=(n=n[n.length-1])[n.length-1],i.gradient_pointSE[1]={x:e.x,y:e.y},[0,1].forEach(function(t){var n;Xe(a,o.gradient_colorSE,t,n=i.gradient_colorSE[t])&&(re?(n=Oe(n),a.efc_gradient_stopSE[t].style.stopColor=n[1],a.efc_gradient_stopSE[t].style.stopOpacity=n[0]):a.efc_gradient_stopSE[t].style.stopColor=n),["x","y"].forEach(function(e){(n=i.gradient_pointSE[t][e])!==o.gradient_pointSE[t][e]&&(a.efc_gradient_gradient[e+(t+1)].baseVal.value=o.gradient_pointSE[t][e]=n);});});}},dropShadow:{stats:{dropShadow_dx:{},dropShadow_dy:{},dropShadow_blur:{},dropShadow_color:{},dropShadow_opacity:{},dropShadow_x:{},dropShadow_y:{}},optionsConf:[["type","dx",null,null,null,2],["type","dy",null,null,null,4],["type","blur",null,null,null,3,function(e){return 0<=e}],["type","color",null,null,null,"#000",null,true],["type","opacity",null,null,null,.8,function(e){return 0<=e&&e<=1}]],init:function(t){var e,n,a,i,o=t.baseWindow.document,l=t.defs,r=C+"-"+t._id+"-dropShadow",s=(e=o,n=r,i={},"boolean"!=typeof u&&(u=!!window.SVGFEDropShadowElement&&!re),i.elmsAppend=[i.elmFilter=o=e.createElementNS(ae,"filter")],o.filterUnits.baseVal=SVGUnitTypes.SVG_UNIT_TYPE_USERSPACEONUSE,o.x.baseVal.newValueSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_PX,0),o.y.baseVal.newValueSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_PX,0),o.width.baseVal.newValueSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_PERCENTAGE,100),o.height.baseVal.newValueSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_PERCENTAGE,100),o.id=n,u?(i.elmOffset=i.elmBlur=a=o.appendChild(e.createElementNS(ae,"feDropShadow")),i.styleFlood=a.style):(i.elmBlur=o.appendChild(e.createElementNS(ae,"feGaussianBlur")),i.elmOffset=a=o.appendChild(e.createElementNS(ae,"feOffset")),a.result.baseVal="offsetblur",a=o.appendChild(e.createElementNS(ae,"feFlood")),i.styleFlood=a.style,(a=o.appendChild(e.createElementNS(ae,"feComposite"))).in2.baseVal="offsetblur",a.operator.baseVal=SVGFECompositeElement.SVG_FECOMPOSITE_OPERATOR_IN,(a=o.appendChild(e.createElementNS(ae,"feMerge"))).appendChild(e.createElementNS(ae,"feMergeNode")),a.appendChild(e.createElementNS(ae,"feMergeNode")).in1.baseVal="SourceGraphic"),i);["elmFilter","elmOffset","elmBlur","styleFlood","elmsAppend"].forEach(function(e){t["efc_dropShadow_"+e]=s[e];}),s.elmsAppend.forEach(function(e){l.appendChild(e);}),t.face.setAttribute("filter","url(#"+r+")"),Ge(t,"new_edge4viewBox",Z.dropShadow.adjustEdge),Z.dropShadow.update(t);},remove:function(e){var t=e.defs;e.efc_dropShadow_elmsAppend&&(e.efc_dropShadow_elmsAppend.forEach(function(e){t.removeChild(e);}),e.efc_dropShadow_elmFilter=e.efc_dropShadow_elmOffset=e.efc_dropShadow_elmBlur=e.efc_dropShadow_styleFlood=e.efc_dropShadow_elmsAppend=null),De(e,"new_edge4viewBox",Z.dropShadow.adjustEdge),$e(e,{}),e.face.removeAttribute("filter"),Ye(e.aplStats,Z.dropShadow.stats);},update:function(e){var t,n,a=e.curStats,i=e.aplStats,o=i.dropShadow_options;a.dropShadow_dx=t=o.dx,Xe(e,i,"dropShadow_dx",t)&&(e.efc_dropShadow_elmOffset.dx.baseVal=t,n=true),a.dropShadow_dy=t=o.dy,Xe(e,i,"dropShadow_dy",t)&&(e.efc_dropShadow_elmOffset.dy.baseVal=t,n=true),a.dropShadow_blur=t=o.blur,Xe(e,i,"dropShadow_blur",t)&&(e.efc_dropShadow_elmBlur.setStdDeviation(t,t),n=true),n&&$e(e,{}),a.dropShadow_color=t=o.color,Xe(e,i,"dropShadow_color",t)&&(e.efc_dropShadow_styleFlood.floodColor=t),a.dropShadow_opacity=t=o.opacity,Xe(e,i,"dropShadow_opacity",t)&&(e.efc_dropShadow_styleFlood.floodOpacity=t);},adjustEdge:function(a,i){var e,o=a.curStats,l=a.aplStats;null!=o.dropShadow_dx&&(e=3*o.dropShadow_blur,(e={x1:i.x1-e+o.dropShadow_dx,y1:i.y1-e+o.dropShadow_dy,x2:i.x2+e+o.dropShadow_dx,y2:i.y2+e+o.dropShadow_dy}).x1<i.x1&&(i.x1=e.x1),e.y1<i.y1&&(i.y1=e.y1),e.x2>i.x2&&(i.x2=e.x2),e.y2>i.y2&&(i.y2=e.y2),["x","y"].forEach(function(e){var t,n="dropShadow_"+e;o[n]=t=i[e+"1"],Xe(a,l,n,t)&&(a.efc_dropShadow_elmFilter[e].baseVal.value=t);}));}}},Object.keys(Z).forEach(function(e){var t=Z[e],n=t.stats;n[e+"_enabled"]={iniValue:false},n[e+"_options"]={hasProps:true},t.anim&&(n[e+"_animOptions"]={},n[e+"_animId"]={});}),w={none:{defaultAnimOptions:{},init:function(e,t){var n=e.curStats;n.show_animId&&(g.remove(n.show_animId),n.show_animId=null),w.none.start(e,t);},start:function(e,t){w.none.stop(e,true);},stop:function(e,t,n){var a=e.curStats;return n=null!=n?n:e.aplStats.show_on,a.show_inAnim=false,t&&Je(e,n),n?1:0}},fade:{defaultAnimOptions:{duration:300,timing:"linear"},init:function(n,e){var t=n.curStats,a=n.aplStats;t.show_animId&&g.remove(t.show_animId),t.show_animId=g.add(function(e){return e},function(e,t){t?w.fade.stop(n,true):(n.svg.style.opacity=e+"",ie&&(je(n,n.svg),He(n)));},a.show_animOptions.duration,1,a.show_animOptions.timing,null,false),w.fade.start(n,e);},start:function(e,t){var n,a=e.curStats;a.show_inAnim&&(n=g.stop(a.show_animId)),Je(e,1),a.show_inAnim=true,g.start(a.show_animId,!e.aplStats.show_on,null!=t?t:n);},stop:function(e,t,n){var a,i=e.curStats;return n=null!=n?n:e.aplStats.show_on,a=i.show_inAnim?g.stop(i.show_animId):n?1:0,i.show_inAnim=false,t&&(e.svg.style.opacity=n?"":"0",Je(e,n)),a}},draw:{defaultAnimOptions:{duration:500,timing:[.58,0,.42,1]},init:function(n,e){var t=n.curStats,a=n.aplStats,o=n.pathList.baseVal,i=Re(o),l=i.segsLen,r=i.lenAll;t.show_animId&&g.remove(t.show_animId),t.show_animId=g.add(function(e){var t,n,a,i=-1;if(0===e)n=[[o[0][0],o[0][0]]];else if(1===e)n=o;else {for(t=r*e,n=[];t>=l[++i];)n.push(o[i]),t-=l[i];t&&(2===(a=o[i]).length?n.push([a[0],Ve(a[0],a[1],t/l[i])]):(e=Ne(a[0],a[1],a[2],a[3],We(a[0],a[1],a[2],a[3],t)),n.push([a[0],e.fromP1,e.fromP2,e])));}return n},function(e,t){t?w.draw.stop(n,true):(n.pathList.animVal=e,$e(n,{path:true}));},a.show_animOptions.duration,1,a.show_animOptions.timing,null,false),w.draw.start(n,e);},start:function(e,t){var n,a=e.curStats;a.show_inAnim&&(n=g.stop(a.show_animId)),Je(e,1),a.show_inAnim=true,Ge(e,"apl_position",w.draw.update),g.start(a.show_animId,!e.aplStats.show_on,null!=t?t:n);},stop:function(e,t,n){var a,i=e.curStats;return n=null!=n?n:e.aplStats.show_on,a=i.show_inAnim?g.stop(i.show_animId):n?1:0,i.show_inAnim=false,t&&(e.pathList.animVal=n?null:[[e.pathList.baseVal[0][0],e.pathList.baseVal[0][0]]],$e(e,{path:true}),Je(e,n)),a},update:function(e){De(e,"apl_position",w.draw.update),e.curStats.show_inAnim?w.draw.init(e,w.draw.stop(e)):e.aplStats.show_animOptions={};}}},[["start","anchorSE",0],["end","anchorSE",1],["color","lineColor"],["size","lineSize"],["startSocketGravity","socketGravitySE",0],["endSocketGravity","socketGravitySE",1],["startPlugColor","plugColorSE",0],["endPlugColor","plugColorSE",1],["startPlugSize","plugSizeSE",0],["endPlugSize","plugSizeSE",1],["outline","lineOutlineEnabled"],["outlineColor","lineOutlineColor"],["outlineSize","lineOutlineSize"],["startPlugOutline","plugOutlineEnabledSE",0],["endPlugOutline","plugOutlineEnabledSE",1],["startPlugOutlineColor","plugOutlineColorSE",0],["endPlugOutlineColor","plugOutlineColorSE",1],["startPlugOutlineSize","plugOutlineSizeSE",0],["endPlugOutlineSize","plugOutlineSizeSE",1]].forEach(function(e){var t=e[0],n=e[1],a=e[2];Object.defineProperty(ot.prototype,t,{get:function(){var e=null!=a?Se[this._id].options[n][a]:n?Se[this._id].options[n]:Se[this._id].options[t];return null==e?D:we(e)},set:lt(t),enumerable:true});}),[["path",R],["startSocket",V,"socketSE",0],["endSocket",V,"socketSE",1],["startPlug",F,"plugSE",0],["endPlug",F,"plugSE",1]].forEach(function(e){var a=e[0],i=e[1],o=e[2],l=e[3];Object.defineProperty(ot.prototype,a,{get:function(){var t,n=null!=l?Se[this._id].options[o][l]:o?Se[this._id].options[o]:Se[this._id].options[a];return n?Object.keys(i).some(function(e){return i[e]===n&&(t=e,true)})?t:new Error("It's broken"):D},set:lt(a),enumerable:true});}),Object.keys(Z).forEach(function(n){var a=Z[n];Object.defineProperty(ot.prototype,n,{get:function(){var s,e,t=Se[this._id].options[n];return he(t)?(s=t,e=a.optionsConf.reduce(function(e,t){var n,a=t[0],i=t[1],o=t[2],l=t[3],t=t[4],r=null!=t?s[l][t]:l?s[l]:s[i];return e[i]="id"===a?r?Object.keys(o).some(function(e){return o[e]===r&&(n=e,true)})?n:new Error("It's broken"):D:null==r?D:we(r),e},{}),a.anim&&(e.animation=we(s.animation)),e):t},set:lt(n),enumerable:true});}),["startLabel","endLabel","middleLabel"].forEach(function(e,n){Object.defineProperty(ot.prototype,e,{get:function(){var e=Se[this._id],t=e.options;return t.labelSEM[n]&&!e.optionIsAttach.labelSEM[n]?_e[t.labelSEM[n]._id].text:t.labelSEM[n]||""},set:lt(e),enumerable:true});}),ot.prototype.setOptions=function(e){return it(Se[this._id],e),this},ot.prototype.position=function(){return $e(Se[this._id],{position:true}),this},ot.prototype.remove=function(){var t=Se[this._id],n=t.curStats;Object.keys(Z).forEach(function(e){e+="_animId";n[e]&&g.remove(n[e]);}),n.show_animId&&g.remove(n.show_animId),t.attachments.slice().forEach(function(e){at(t,e);}),t.baseWindow&&t.svg&&t.baseWindow.document.body.removeChild(t.svg),delete Se[this._id];},ot.prototype.show=function(e,t){return tt(Se[this._id],true,e,t),this},ot.prototype.hide=function(e,t){return tt(Se[this._id],false,e,t),this},o=function(t){t&&_e[t._id]&&(t.boundTargets.slice().forEach(function(e){at(e.props,t,true);}),t.conf.remove&&t.conf.remove(t),delete _e[t._id]);},rt.prototype.remove=function(){var t=this,n=_e[t._id];n&&(n.boundTargets.slice().forEach(function(e){n.conf.removeOption(n,e);}),ze(function(){var e=_e[t._id];e&&(console.error("LeaderLineAttachment was not removed by removeOption"),o(e));}));},M=rt,window.LeaderLineAttachment=M,I=function(e,t){return e instanceof M&&(!(e.isRemoved||t&&_e[e._id].conf.type!==t)||null)},O={pointAnchor:{type:"anchor",argOptions:[{optionName:"element",type:Me}],init:function(e,t){return e.element=O.pointAnchor.checkElement(t.element),e.x=O.pointAnchor.parsePercent(t.x,true)||[.5,true],e.y=O.pointAnchor.parsePercent(t.y,true)||[.5,true],true},removeOption:function(e,t){var n=t.props,a={},i=e.element,e=n.options.anchorSE["start"===t.optionName?1:0];i===e&&(i=e===document.body?new M(O.pointAnchor,[i]):document.body),a[t.optionName]=i,it(n,a);},getBBoxNest:function(e,t){var n=Le(e.element,t.baseWindow),a=n.width,t=n.height;return n.width=n.height=0,n.left=n.right=n.left+e.x[0]*(e.x[1]?a:1),n.top=n.bottom=n.top+e.y[0]*(e.y[1]?t:1),n},parsePercent:function(e,t){var n,a,i=false;return pe(e)?a=e:"string"==typeof e&&(n=m.exec(e))&&n[2]&&(i=0!==(a=parseFloat(n[1])/100)),null!=a&&(t||0<=a)?[a,i]:null},checkElement:function(e){if(null==e)e=document.body;else if(!Me(e))throw new Error("`element` must be Element");return e}},areaAnchor:{type:"anchor",argOptions:[{optionName:"element",type:Me},{optionName:"shape",type:"string"}],stats:{color:{},strokeWidth:{},elementWidth:{},elementHeight:{},elementLeft:{},elementTop:{},pathListRel:{},bBoxRel:{},pathData:{},viewBoxBBox:{hasProps:true},dashLen:{},dashGap:{}},init:function(a,e){var t,n=[];return a.element=O.pointAnchor.checkElement(e.element),"string"==typeof e.color&&(a.color=e.color.trim()),"string"==typeof e.fillColor&&(a.fill=e.fillColor.trim()),pe(e.size)&&0<=e.size&&(a.size=e.size),e.dash&&(a.dash=true,pe(e.dash.len)&&0<e.dash.len&&(a.dashLen=e.dash.len),pe(e.dash.gap)&&0<e.dash.gap&&(a.dashGap=e.dash.gap)),"circle"===e.shape?a.shape=e.shape:"polygon"===e.shape&&Array.isArray(e.points)&&3<=e.points.length&&e.points.every(function(e){var t={};return !(!(t.x=O.pointAnchor.parsePercent(e[0],true))||!(t.y=O.pointAnchor.parsePercent(e[1],true)))&&(n.push(t),(t.x[1]||t.y[1])&&(a.hasRatio=true),true)})?(a.shape=e.shape,a.points=n):(a.shape="rect",a.radius=pe(e.radius)&&0<=e.radius?e.radius:0),"rect"!==a.shape&&"circle"!==a.shape||(a.x=O.pointAnchor.parsePercent(e.x,true)||[-0.05,true],a.y=O.pointAnchor.parsePercent(e.y,true)||[-0.05,true],a.width=O.pointAnchor.parsePercent(e.width)||[1.1,true],a.height=O.pointAnchor.parsePercent(e.height)||[1.1,true],(a.x[1]||a.y[1]||a.width[1]||a.height[1])&&(a.hasRatio=true)),t=a.element.ownerDocument,a.svg=e=t.createElementNS(ae,"svg"),e.className.baseVal=C+"-areaAnchor",e.viewBox.baseVal||e.setAttribute("viewBox","0 0 0 0"),a.path=e.appendChild(t.createElementNS(ae,"path")),a.path.style.fill=a.fill||"none",a.isShown=false,e.style.visibility="hidden",t.body.appendChild(e),Qe(t=t.defaultView),a.bodyOffset=qe(t),a.updateColor=function(){var e=a.curStats,t=a.aplStats,n=a.boundTargets.length?a.boundTargets[0].props.curStats:null;e.color=n=a.color||(n?n.line_color:ue.lineColor),Xe(a,t,"color",n)&&(a.path.style.stroke=n);},a.updateShow=function(){Je(a,a.boundTargets.some(function(e){return  true===e.props.isShown}));},true},bind:function(e,t){t=t.props;return e.color||Ge(t,"cur_line_color",e.updateColor),Ge(t,"svgShow",e.updateShow),ze(function(){e.updateColor(),e.updateShow();}),true},unbind:function(e,t){t=t.props;e.color||De(t,"cur_line_color",e.updateColor),De(t,"svgShow",e.updateShow),1<e.boundTargets.length&&ze(function(){e.updateColor(),e.updateShow(),O.areaAnchor.update(e)&&e.boundTargets.forEach(function(e){$e(e.props,{position:true});});});},removeOption:function(e,t){O.pointAnchor.removeOption(e,t);},remove:function(t){t.boundTargets.length&&(console.error("LeaderLineAttachment was not unbound by remove"),t.boundTargets.forEach(function(e){O.areaAnchor.unbind(t,e);})),t.svg.parentNode.removeChild(t.svg);},getStrokeWidth:function(e,t){return O.areaAnchor.update(e)&&1<e.boundTargets.length&&ze(function(){e.boundTargets.forEach(function(e){e.props!==t&&$e(e.props,{position:true});});}),e.curStats.strokeWidth},getPathData:function(e,t){var n=Le(e.element,t.baseWindow);return Be(e.curStats.pathListRel,function(e){e.x+=n.left,e.y+=n.top;})},getBBoxNest:function(e,t){t=Le(e.element,t.baseWindow),e=e.curStats.bBoxRel;return {left:e.left+t.left,top:e.top+t.top,right:e.right+t.left,bottom:e.bottom+t.top,width:e.width,height:e.height}},update:function(t){var n,a,i,o,e,l,r,s,u,h,p,c,d,f,y,m,S=t.curStats,g=t.aplStats,_=t.boundTargets.length?t.boundTargets[0].props.curStats:null,v={};if(v.strokeWidth=Xe(t,S,"strokeWidth",null!=t.size?t.size:_?_.line_strokeWidth:ue.lineSize),n=Ie(t.element),v.elementWidth=Xe(t,S,"elementWidth",n.width),v.elementHeight=Xe(t,S,"elementHeight",n.height),v.elementLeft=Xe(t,S,"elementLeft",n.left),v.elementTop=Xe(t,S,"elementTop",n.top),v.strokeWidth||t.hasRatio&&(v.elementWidth||v.elementHeight)){switch(t.shape){case "rect":(c={left:t.x[0]*(t.x[1]?n.width:1),top:t.y[0]*(t.y[1]?n.height:1),width:t.width[0]*(t.width[1]?n.width:1),height:t.height[0]*(t.height[1]?n.height:1)}).right=c.left+c.width,c.bottom=c.top+c.height,p=S.strokeWidth/2,s=(r=Math.min(c.width,c.height))?r/2*Math.SQRT2+p:0,h=(r=t.radius?t.radius<=s?t.radius:s:0)?(s=(r-p)/Math.SQRT2,h=[{x:c.left-(u=r-s),y:c.top+s},{x:c.left+s,y:c.top-u},{x:c.right-s,y:c.top-u},{x:c.right+u,y:c.top+s},{x:c.right+u,y:c.bottom-s},{x:c.right-s,y:c.bottom+u},{x:c.left+s,y:c.bottom+u},{x:c.left-u,y:c.bottom-s}],S.pathListRel=[[h[0],{x:h[0].x,y:h[0].y-(p=r*te)},{x:h[1].x-p,y:h[1].y},h[1]]],h[1].x!==h[2].x&&S.pathListRel.push([h[1],h[2]]),S.pathListRel.push([h[2],{x:h[2].x+p,y:h[2].y},{x:h[3].x,y:h[3].y-p},h[3]]),h[3].y!==h[4].y&&S.pathListRel.push([h[3],h[4]]),S.pathListRel.push([h[4],{x:h[4].x,y:h[4].y+p},{x:h[5].x+p,y:h[5].y},h[5]]),h[5].x!==h[6].x&&S.pathListRel.push([h[5],h[6]]),S.pathListRel.push([h[6],{x:h[6].x-p,y:h[6].y},{x:h[7].x,y:h[7].y+p},h[7]]),h[7].y!==h[0].y&&S.pathListRel.push([h[7],h[0]]),S.pathListRel.push([]),u=r-s+S.strokeWidth/2,[{x:c.left-u,y:c.top-u},{x:c.right+u,y:c.bottom+u}]):(u=S.strokeWidth/2,h=[{x:c.left-u,y:c.top-u},{x:c.right+u,y:c.bottom+u}],S.pathListRel=[[h[0],{x:h[1].x,y:h[0].y}],[{x:h[1].x,y:h[0].y},h[1]],[h[1],{x:h[0].x,y:h[1].y}],[]],[{x:c.left-S.strokeWidth,y:c.top-S.strokeWidth},{x:c.right+S.strokeWidth,y:c.bottom+S.strokeWidth}]),S.bBoxRel={left:h[0].x,top:h[0].y,right:h[1].x,bottom:h[1].y,width:h[1].x-h[0].x,height:h[1].y-h[0].y};break;case "circle":(l={left:t.x[0]*(t.x[1]?n.width:1),top:t.y[0]*(t.y[1]?n.height:1),width:t.width[0]*(t.width[1]?n.width:1),height:t.height[0]*(t.height[1]?n.height:1)}).width||l.height||(l.width=l.height=10),l.width||(l.width=l.height),l.height||(l.height=l.width),l.right=l.left+l.width,l.bottom=l.top+l.height,p=l.left+l.width/2,r=l.top+l.height/2,e=S.strokeWidth/2,s=l.width/2,u=l.height/2,c=s*Math.SQRT2+e,h=u*Math.SQRT2+e,S.pathListRel=[[(e=[{x:p-c,y:r},{x:p,y:r-h},{x:p+c,y:r},{x:p,y:r+h}])[0],{x:e[0].x,y:e[0].y-(p=h*te)},{x:e[1].x-(r=c*te),y:e[1].y},e[1]],[e[1],{x:e[1].x+r,y:e[1].y},{x:e[2].x,y:e[2].y-p},e[2]],[e[2],{x:e[2].x,y:e[2].y+p},{x:e[3].x+r,y:e[3].y},e[3]],[e[3],{x:e[3].x-r,y:e[3].y},{x:e[0].x,y:e[0].y+p},e[0]],[]],s=c-s+S.strokeWidth/2,u=h-u+S.strokeWidth/2,e=[{x:l.left-s,y:l.top-u},{x:l.right+s,y:l.bottom+u}],S.bBoxRel={left:e[0].x,top:e[0].y,right:e[1].x,bottom:e[1].y,width:e[1].x-e[0].x,height:e[1].y-e[0].y};break;case "polygon":t.points.forEach(function(e){var t=e.x[0]*(e.x[1]?n.width:1),e=e.y[0]*(e.y[1]?n.height:1);i?(t<i.left&&(i.left=t),t>i.right&&(i.right=t),e<i.top&&(i.top=e),e>i.bottom&&(i.bottom=e)):i={left:t,right:t,top:e,bottom:e},o?S.pathListRel.push([o,{x:t,y:e}]):S.pathListRel=[],o={x:t,y:e};}),S.pathListRel.push([]),e=S.strokeWidth/2,e=[{x:i.left-e,y:i.top-e},{x:i.right+e,y:i.bottom+e}],S.bBoxRel={left:e[0].x,top:e[0].y,right:e[1].x,bottom:e[1].y,width:e[1].x-e[0].x,height:e[1].y-e[0].y};}v.pathListRel=v.bBoxRel=true;}return (v.pathListRel||v.elementLeft||v.elementTop)&&(S.pathData=Be(S.pathListRel,function(e){e.x+=n.left,e.y+=n.top;})),Xe(t,g,"strokeWidth",a=S.strokeWidth)&&(t.path.style.strokeWidth=a+"px"),Fe(a=S.pathData,g.pathData)&&(t.path.setPathData(a),g.pathData=a,v.pathData=true),t.dash&&(!v.pathData&&(!v.strokeWidth||t.dashLen&&t.dashGap)||(S.dashLen=t.dashLen||2*S.strokeWidth,S.dashGap=t.dashGap||S.strokeWidth),v.dash=Xe(t,g,"dashLen",S.dashLen)||v.dash,v.dash=Xe(t,g,"dashGap",S.dashGap)||v.dash,v.dash&&(t.path.style.strokeDasharray=g.dashLen+","+g.dashGap)),d=S.viewBoxBBox,f=g.viewBoxBBox,y=t.svg.viewBox.baseVal,m=t.svg.style,d.x=S.bBoxRel.left+n.left,d.y=S.bBoxRel.top+n.top,d.width=S.bBoxRel.width,d.height=S.bBoxRel.height,["x","y","width","height"].forEach(function(e){(a=d[e])!==f[e]&&(y[e]=f[e]=a,m[Q[e]]=a+("x"===e||"y"===e?t.bodyOffset[e]:0)+"px");}),v.strokeWidth||v.pathListRel||v.bBoxRel}},mouseHoverAnchor:{type:"anchor",argOptions:[{optionName:"element",type:Me},{optionName:"showEffectName",type:"string"}],style:{backgroundImage:"url('data:image/svg+xml;charset=utf-8;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ij48cG9seWdvbiBwb2ludHM9IjI0LDAgMCw4IDgsMTEgMCwxOSA1LDI0IDEzLDE2IDE2LDI0IiBmaWxsPSJjb3JhbCIvPjwvc3ZnPg==')",backgroundSize:"",backgroundRepeat:"no-repeat",backgroundColor:"#f8f881",cursor:"default"},hoverStyle:{backgroundImage:"none",backgroundColor:"#fadf8f"},padding:{top:1,right:15,bottom:1,left:2},minHeight:15,backgroundPosition:{right:2,top:2},backgroundSize:{width:12,height:12},dirKeys:[["top","Top"],["right","Right"],["bottom","Bottom"],["left","Left"]],init:function(a,i){var n,t,e,o,l,r,s,u,h,p=O.mouseHoverAnchor,c={};if(a.element=O.pointAnchor.checkElement(i.element),s=a.element,!((u=s.ownerDocument)&&(h=u.defaultView)&&h.HTMLElement&&s instanceof h.HTMLElement))throw new Error("`element` must be HTML element");return p.style.backgroundSize=p.backgroundSize.width+"px "+p.backgroundSize.height+"px",["style","hoverStyle"].forEach(function(e){var n=p[e];a[e]=Object.keys(n).reduce(function(e,t){return e[t]=n[t],e},{});}),"inline"===(n=a.element.ownerDocument.defaultView.getComputedStyle(a.element,"")).display?a.style.display="inline-block":"none"===n.display&&(a.style.display="block"),O.mouseHoverAnchor.dirKeys.forEach(function(e){var t=e[0],e="padding"+e[1];parseFloat(n[e])<p.padding[t]&&(a.style[e]=p.padding[t]+"px");}),a.style.display&&(e=a.element.style.display,a.element.style.display=a.style.display),O.mouseHoverAnchor.dirKeys.forEach(function(e){e="padding"+e[1];a.style[e]&&(c[e]=a.element.style[e],a.element.style[e]=a.style[e]);}),(s=a.element.getBoundingClientRect()).height<p.minHeight&&(ie?(h=p.minHeight,"content-box"===n.boxSizing?h-=parseFloat(n.borderTopWidth)+parseFloat(n.borderBottomWidth)+parseFloat(n.paddingTop)+parseFloat(n.paddingBottom):"padding-box"===n.boxSizing&&(h-=parseFloat(n.borderTopWidth)+parseFloat(n.borderBottomWidth)),a.style.height=h+"px"):a.style.height=parseFloat(n.height)+(p.minHeight-s.height)+"px"),a.style.backgroundPosition=re?s.width-p.backgroundSize.width-p.backgroundPosition.right+"px "+p.backgroundPosition.top+"px":"right "+p.backgroundPosition.right+"px top "+p.backgroundPosition.top+"px",a.style.display&&(a.element.style.display=e),O.mouseHoverAnchor.dirKeys.forEach(function(e){e="padding"+e[1];a.style[e]&&(a.element.style[e]=c[e]);}),["style","hoverStyle"].forEach(function(e){var t=a[e],n=i[e];he(n)&&Object.keys(n).forEach(function(e){"string"==typeof n[e]||pe(n[e])?t[e]=n[e]:null==n[e]&&delete t[e];});}),"function"==typeof i.onSwitch&&(r=i.onSwitch),i.showEffectName&&w[i.showEffectName]&&(a.showEffectName=o=i.showEffectName),l=i.animOptions,a.elmStyle=t=a.element.style,a.mouseenter=function(e){a.hoverStyleSave=p.getStyles(t,Object.keys(a.hoverStyle)),p.setStyles(t,a.hoverStyle),a.boundTargets.forEach(function(e){tt(e.props,true,o,l);}),r&&r(e);},a.mouseleave=function(e){p.setStyles(t,a.hoverStyleSave),a.boundTargets.forEach(function(e){tt(e.props,false,o,l);}),r&&r(e);},true},bind:function(e,t){var n,a,i,o,l;return t.props.svg?O.mouseHoverAnchor.llShow(t.props,false,e.showEffectName):ze(function(){O.mouseHoverAnchor.llShow(t.props,false,e.showEffectName);}),e.enabled||(e.styleSave=O.mouseHoverAnchor.getStyles(e.elmStyle,Object.keys(e.style)),O.mouseHoverAnchor.setStyles(e.elmStyle,e.style),e.removeEventListener=(n=e.element,a=e.mouseenter,i=e.mouseleave,"onmouseenter"in n&&"onmouseleave"in n?(n.addEventListener("mouseenter",a,false),n.addEventListener("mouseleave",i,false),function(){n.removeEventListener("mouseenter",a,false),n.removeEventListener("mouseleave",i,false);}):(console.warn("mouseenter and mouseleave events polyfill is enabled."),n.addEventListener("mouseover",o=function(e){e.relatedTarget&&(e.relatedTarget===this||this.compareDocumentPosition(e.relatedTarget)&Node.DOCUMENT_POSITION_CONTAINED_BY)||a.apply(this,arguments);}),n.addEventListener("mouseout",l=function(e){e.relatedTarget&&(e.relatedTarget===this||this.compareDocumentPosition(e.relatedTarget)&Node.DOCUMENT_POSITION_CONTAINED_BY)||i.apply(this,arguments);}),function(){n.removeEventListener("mouseover",o,false),n.removeEventListener("mouseout",l,false);})),e.enabled=true),true},unbind:function(e,t){e.enabled&&e.boundTargets.length<=1&&(e.removeEventListener(),O.mouseHoverAnchor.setStyles(e.elmStyle,e.styleSave),e.enabled=false),O.mouseHoverAnchor.llShow(t.props,true,e.showEffectName);},removeOption:function(e,t){O.pointAnchor.removeOption(e,t);},remove:function(t){t.boundTargets.length&&(console.error("LeaderLineAttachment was not unbound by remove"),t.boundTargets.forEach(function(e){O.mouseHoverAnchor.unbind(t,e);}));},getBBoxNest:function(e,t){return Le(e.element,t.baseWindow)},llShow:function(e,t,n){w[n||e.curStats.show_effect].stop(e,true,t),e.aplStats.show_on=t;},getStyles:function(n,e){return e.reduce(function(e,t){return e[t]=n[t],e},{})},setStyles:function(t,n){Object.keys(n).forEach(function(e){t[e]=n[e];});}},captionLabel:{type:"label",argOptions:[{optionName:"text",type:"string"}],stats:{color:{},x:{},y:{}},textStyleProps:["fontFamily","fontStyle","fontVariant","fontWeight","fontStretch","fontSize","fontSizeAdjust","kerning","letterSpacing","wordSpacing","textDecoration"],init:function(l,t){return "string"==typeof t.text&&(l.text=t.text.trim()),!!l.text&&("string"==typeof t.color&&(l.color=t.color.trim()),l.outlineColor="string"==typeof t.outlineColor?t.outlineColor.trim():"#fff",Array.isArray(t.offset)&&pe(t.offset[0])&&pe(t.offset[1])&&(l.offset={x:t.offset[0],y:t.offset[1]}),pe(t.lineOffset)&&(l.lineOffset=t.lineOffset),O.captionLabel.textStyleProps.forEach(function(e){null!=t[e]&&(l[e]=t[e]);}),l.updateColor=function(e){O.captionLabel.updateColor(l,e);},l.updateSocketXY=function(e){var t,n=l.curStats,a=l.aplStats,i=e.curStats,o=i.position_socketXYSE[l.socketIndex];null!=o.x&&(l.offset?(n.x=o.x+l.offset.x,n.y=o.y+l.offset.y):(t=l.height/2,e=Math.max(i.attach_plugSideLenSE[l.socketIndex]||0,i.line_strokeWidth/2),i=i.position_socketXYSE[l.socketIndex?0:1],o.socketId===A||o.socketId===k?(n.x=o.socketId===A?o.x-t-l.width:o.x+t,n.y=i.y<o.y?o.y+e+t:o.y-e-t-l.height):(n.x=i.x<o.x?o.x+e+t:o.x-e-t-l.width,n.y=o.socketId===b?o.y-t-l.height:o.y+t)),Xe(l,a,"x",t=n.x)&&(l.elmPosition.x.baseVal.getItem(0).value=t),Xe(l,a,"y",t=n.y)&&(l.elmPosition.y.baseVal.getItem(0).value=t+l.height));},l.updatePath=function(e){var t=l.curStats,n=l.aplStats,e=e.pathList.animVal||e.pathList.baseVal;e&&(e=O.captionLabel.getMidPoint(e,l.lineOffset),t.x=e.x-l.width/2,t.y=e.y-l.height/2,Xe(l,n,"x",e=t.x)&&(l.elmPosition.x.baseVal.getItem(0).value=e),Xe(l,n,"y",e=t.y)&&(l.elmPosition.y.baseVal.getItem(0).value=e+l.height));},l.updateShow=function(e){O.captionLabel.updateShow(l,e);},re&&(l.adjustEdge=function(e,t){var n=l.curStats;null!=n.x&&O.captionLabel.adjustEdge(t,{x:n.x,y:n.y,width:l.width,height:l.height},l.strokeWidth/2);}),true)},updateColor:function(e,t){var n=e.curStats,a=e.aplStats,t=t.curStats;n.color=t=e.color||t.line_color,Xe(e,a,"color",t)&&(e.styleFill.fill=t);},updateShow:function(e,t){t=true===t.isShown;t!==e.isShown&&(e.styleShow.visibility=t?"":"hidden",e.isShown=t);},adjustEdge:function(e,t,n){n={x1:t.x-n,y1:t.y-n,x2:t.x+t.width+n,y2:t.y+t.height+n};n.x1<e.x1&&(e.x1=n.x1),n.y1<e.y1&&(e.y1=n.y1),n.x2>e.x2&&(e.x2=n.x2),n.y2>e.y2&&(e.y2=n.y2);},newText:function(e,t,n,a,i){var o,l,r=t.createElementNS(ae,"text");return r.textContent=e,[r.x,r.y].forEach(function(e){var t=n.createSVGLength();t.newValueSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_PX,0),e.baseVal.initialize(t);}),"boolean"!=typeof h&&(h="paintOrder"in r.style),i&&!h?(o=t.createElementNS(ae,"defs"),r.id=a,o.appendChild(r),(l=(e=t.createElementNS(ae,"g")).appendChild(t.createElementNS(ae,"use"))).href.baseVal="#"+a,(t=e.appendChild(t.createElementNS(ae,"use"))).href.baseVal="#"+a,(l=l.style).strokeLinejoin="round",{elmPosition:r,styleText:r.style,styleFill:t.style,styleStroke:l,styleShow:e.style,elmsAppend:[o,e]}):(l=r.style,i&&(l.strokeLinejoin="round",l.paintOrder="stroke"),{elmPosition:r,styleText:l,styleFill:l,styleStroke:i?l:null,styleShow:l,elmsAppend:[r]})},getMidPoint:function(e,t){var n,a,i=Re(e),o=i.segsLen,i=i.lenAll,l=-1,r=i/2+(t||0);if(r<=0)return 2===(n=e[0]).length?Ve(n[0],n[1],0):Ne(n[0],n[1],n[2],n[3],0);if(i<=r)return 2===(n=e[e.length-1]).length?Ve(n[0],n[1],1):Ne(n[0],n[1],n[2],n[3],1);for(a=[];r>o[++l];)a.push(e[l]),r-=o[l];return 2===(n=e[l]).length?Ve(n[0],n[1],r/o[l]):Ne(n[0],n[1],n[2],n[3],We(n[0],n[1],n[2],n[3],r))},initSvg:function(t,n){var e,a,i=O.captionLabel.newText(t.text,n.baseWindow.document,n.svg,C+"-captionLabel-"+t._id,t.outlineColor);["elmPosition","styleFill","styleShow","elmsAppend"].forEach(function(e){t[e]=i[e];}),t.isShown=false,t.styleShow.visibility="hidden",O.captionLabel.textStyleProps.forEach(function(e){null!=t[e]&&(i.styleText[e]=t[e]);}),i.elmsAppend.forEach(function(e){n.svg.appendChild(e);}),e=i.elmPosition.getBBox(),t.width=e.width,t.height=e.height,t.outlineColor&&(a=e.height/9,i.styleStroke.strokeWidth=(a=10<a?10:a<2?2:a)+"px",i.styleStroke.stroke=t.outlineColor),t.strokeWidth=a||0,Ye(t.aplStats,O.captionLabel.stats),t.updateColor(n),t.refSocketXY?t.updateSocketXY(n):t.updatePath(n),re&&$e(n,{}),t.updateShow(n);},bind:function(e,t){var n=t.props;return e.color||Ge(n,"cur_line_color",e.updateColor),(e.refSocketXY="startLabel"===t.optionName||"endLabel"===t.optionName)?(e.socketIndex="startLabel"===t.optionName?0:1,Ge(n,"apl_position",e.updateSocketXY),e.offset||(Ge(n,"cur_attach_plugSideLenSE",e.updateSocketXY),Ge(n,"cur_line_strokeWidth",e.updateSocketXY))):Ge(n,"apl_path",e.updatePath),Ge(n,"svgShow",e.updateShow),re&&Ge(n,"new_edge4viewBox",e.adjustEdge),O.captionLabel.initSvg(e,n),true},unbind:function(e,t){var n=t.props;e.elmsAppend&&(e.elmsAppend.forEach(function(e){n.svg.removeChild(e);}),e.elmPosition=e.styleFill=e.styleShow=e.elmsAppend=null),Ye(e.curStats,O.captionLabel.stats),Ye(e.aplStats,O.captionLabel.stats),e.color||De(n,"cur_line_color",e.updateColor),e.refSocketXY?(De(n,"apl_position",e.updateSocketXY),e.offset||(De(n,"cur_attach_plugSideLenSE",e.updateSocketXY),De(n,"cur_line_strokeWidth",e.updateSocketXY))):De(n,"apl_path",e.updatePath),De(n,"svgShow",e.updateShow),re&&(De(n,"new_edge4viewBox",e.adjustEdge),$e(n,{}));},removeOption:function(e,t){var n=t.props,a={};a[t.optionName]="",it(n,a);},remove:function(t){t.boundTargets.length&&(console.error("LeaderLineAttachment was not unbound by remove"),t.boundTargets.forEach(function(e){O.captionLabel.unbind(t,e);}));}},pathLabel:{type:"label",argOptions:[{optionName:"text",type:"string"}],stats:{color:{},startOffset:{},pathData:{}},init:function(l,t){return "string"==typeof t.text&&(l.text=t.text.trim()),!!l.text&&("string"==typeof t.color&&(l.color=t.color.trim()),l.outlineColor="string"==typeof t.outlineColor?t.outlineColor.trim():"#fff",pe(t.lineOffset)&&(l.lineOffset=t.lineOffset),O.captionLabel.textStyleProps.forEach(function(e){null!=t[e]&&(l[e]=t[e]);}),l.updateColor=function(e){O.captionLabel.updateColor(l,e);},l.updatePath=function(e){var t=l.curStats,n=l.aplStats,a=e.curStats,i=e.pathList.animVal||e.pathList.baseVal;i&&(t.pathData=a=O.pathLabel.getOffsetPathData(i,a.line_strokeWidth/2+l.strokeWidth/2+l.height/4,1.25*l.height),Fe(a,n.pathData)&&(l.elmPath.setPathData(a),n.pathData=a,l.bBox=l.elmPosition.getBBox(),l.updateStartOffset(e)));},l.updateStartOffset=function(e){var i,t,n=l.curStats,a=l.aplStats,o=e.curStats;n.pathData&&(2===l.semIndex&&!l.lineOffset||(t=n.pathData.reduce(function(e,t){var n,a=t.values;switch(t.type){case "M":i={x:a[0],y:a[1]};break;case "L":n={x:a[0],y:a[1]},i&&(e+=Ae(i,n)),i=n;break;case "C":n={x:a[4],y:a[5]},i&&(e+=Te(i,{x:a[0],y:a[1]},{x:a[2],y:a[3]},n)),i=n;}return e},0),e=0===l.semIndex?0:1===l.semIndex?t:t/2,2!==l.semIndex&&(o=Math.max(o.attach_plugBackLenSE[l.semIndex]||0,o.line_strokeWidth/2)+l.strokeWidth/2+l.height/4,e=(e+=0===l.semIndex?o:-o)<0?0:t<e?t:e),l.lineOffset&&(e=(e+=l.lineOffset)<0?0:t<e?t:e),n.startOffset=e,Xe(l,a,"startOffset",e)&&(l.elmOffset.startOffset.baseVal.value=e)));},l.updateShow=function(e){O.captionLabel.updateShow(l,e);},re&&(l.adjustEdge=function(e,t){l.bBox&&O.captionLabel.adjustEdge(t,l.bBox,l.strokeWidth/2);}),true)},getOffsetPathData:function(e,c,n){var d,a,f=[];function y(e,t){return Math.abs(e.x-t.x)<3&&Math.abs(e.y-t.y)<3}return e.forEach(function(e){var t,n,a,i,o,l,r,s,u,h,p;2===e.length?(s=e[0],u=e[1],h=c,p=Math.atan2(s.y-u.y,u.x-s.x)+.5*Math.PI,t=[{x:s.x+Math.cos(p)*h,y:s.y+Math.sin(p)*h*-1},{x:u.x+Math.cos(p)*h,y:u.y+Math.sin(p)*h*-1}],d?(a=d.points,0<=(r=Math.atan2(a[1].y-a[0].y,a[0].x-a[1].x)-Math.atan2(e[0].y-e[1].y,e[1].x-e[0].x))&&r<=Math.PI?n={type:"line",points:t,inside:true}:(o=Pe(a[0],a[1],c),i=Pe(t[1],t[0],c),l=a[0],s=t[1],p=(u=o).x-l.x,h=u.y-l.y,r=s.x-i.x,u=s.y-i.y,s=(-h*(l.x-i.x)+p*(l.y-i.y))/(-r*h+p*u),u=(r*(l.y-i.y)-u*(l.x-i.x))/(-r*h+p*u),n=(h=0<=s&&s<=1&&0<=u&&u<=1?{x:l.x+u*p,y:l.y+u*h}:null)?{type:"line",points:[a[1]=h,t[1]]}:(a[1]=y(i,o)?i:o,{type:"line",points:[i,t[1]]}),d.len=Ae(a[0],a[1]))):n={type:"line",points:t},n.len=Ae(n.points[0],n.points[1]),f.push(d=n)):(f.push({type:"cubic",points:function(e,t,n,a,i,o){for(var l,r,s=Te(e,t,n,a)/o,u=1/(o<i?i/o*s:s),h=[],p=0;r=(90-(l=Ne(e,t,n,a,p)).angle)*(Math.PI/180),h.push({x:l.x+Math.cos(r)*i,y:l.y+Math.sin(r)*i*-1}),!(1<=p);)1<(p+=u)&&(p=1);return h}(e[0],e[1],e[2],e[3],c,16)}),d=null);}),d=null,f.forEach(function(e){var t;d="line"===e.type?(e.inside&&(d.len>c?((t=d.points)[1]=Pe(t[0],t[1],-c),d.len=Ae(t[0],t[1])):(d.points=null,d.len=0),e.len>c+n?((t=e.points)[0]=Pe(t[1],t[0],-(c+n)),e.len=Ae(t[0],t[1])):(e.points=null,e.len=0)),e):null;}),f.reduce(function(t,e){var n=e.points;return n&&(a&&y(n[0],a)||t.push({type:"M",values:[n[0].x,n[0].y]}),"line"===e.type?t.push({type:"L",values:[n[1].x,n[1].y]}):(n.shift(),n.forEach(function(e){t.push({type:"L",values:[e.x,e.y]});})),a=n[n.length-1]),t},[])},newText:function(e,t,n,a){var i,o,l,r,s=t.createElementNS(ae,"defs"),u=s.appendChild(t.createElementNS(ae,"path"));return u.id=i=n+"-path",(l=(o=t.createElementNS(ae,"text")).appendChild(t.createElementNS(ae,"textPath"))).href.baseVal="#"+i,l.startOffset.baseVal.newValueSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_PX,0),l.textContent=e,"boolean"!=typeof h&&(h="paintOrder"in o.style),a&&!h?(o.id=e=n+"-text",s.appendChild(o),(r=(n=t.createElementNS(ae,"g")).appendChild(t.createElementNS(ae,"use"))).href.baseVal="#"+e,(t=n.appendChild(t.createElementNS(ae,"use"))).href.baseVal="#"+e,(r=r.style).strokeLinejoin="round",{elmPosition:o,elmPath:u,elmOffset:l,styleText:o.style,styleFill:t.style,styleStroke:r,styleShow:n.style,elmsAppend:[s,n]}):(r=o.style,a&&(r.strokeLinejoin="round",r.paintOrder="stroke"),{elmPosition:o,elmPath:u,elmOffset:l,styleText:r,styleFill:r,styleStroke:a?r:null,styleShow:r,elmsAppend:[s,o]})},initSvg:function(t,n){var e,a,i,o=O.pathLabel.newText(t.text,n.baseWindow.document,C+"-pathLabel-"+t._id,t.outlineColor);["elmPosition","elmPath","elmOffset","styleFill","styleShow","elmsAppend"].forEach(function(e){t[e]=o[e];}),t.isShown=false,t.styleShow.visibility="hidden",O.captionLabel.textStyleProps.forEach(function(e){null!=t[e]&&(o.styleText[e]=t[e]);}),o.elmsAppend.forEach(function(e){n.svg.appendChild(e);}),o.elmPath.setPathData([{type:"M",values:[0,100]},{type:"h",values:[100]}]),le&&(i=o.elmOffset.href.baseVal,o.elmOffset.href.baseVal=""),e=o.elmPosition.getBBox(),le&&(o.elmOffset.href.baseVal=i),o.styleText.textAnchor=["start","end","middle"][t.semIndex],2!==t.semIndex||t.lineOffset||o.elmOffset.startOffset.baseVal.newValueSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_PERCENTAGE,50),t.height=e.height,t.outlineColor&&(a=e.height/9,o.styleStroke.strokeWidth=(a=10<a?10:a<2?2:a)+"px",o.styleStroke.stroke=t.outlineColor),t.strokeWidth=a||0,Ye(t.aplStats,O.pathLabel.stats),t.updateColor(n),t.updatePath(n),t.updateStartOffset(n),re&&$e(n,{}),t.updateShow(n);},bind:function(e,t){var n=t.props;return e.color||Ge(n,"cur_line_color",e.updateColor),Ge(n,"cur_line_strokeWidth",e.updatePath),Ge(n,"apl_path",e.updatePath),e.semIndex="startLabel"===t.optionName?0:"endLabel"===t.optionName?1:2,2===e.semIndex&&!e.lineOffset||Ge(n,"cur_attach_plugBackLenSE",e.updateStartOffset),Ge(n,"svgShow",e.updateShow),re&&Ge(n,"new_edge4viewBox",e.adjustEdge),O.pathLabel.initSvg(e,n),true},unbind:function(e,t){var n=t.props;e.elmsAppend&&(e.elmsAppend.forEach(function(e){n.svg.removeChild(e);}),e.elmPosition=e.elmPath=e.elmOffset=e.styleFill=e.styleShow=e.elmsAppend=null),Ye(e.curStats,O.pathLabel.stats),Ye(e.aplStats,O.pathLabel.stats),e.color||De(n,"cur_line_color",e.updateColor),De(n,"cur_line_strokeWidth",e.updatePath),De(n,"apl_path",e.updatePath),2===e.semIndex&&!e.lineOffset||De(n,"cur_attach_plugBackLenSE",e.updateStartOffset),De(n,"svgShow",e.updateShow),re&&(De(n,"new_edge4viewBox",e.adjustEdge),$e(n,{}));},removeOption:function(e,t){var n=t.props,a={};a[t.optionName]="",it(n,a);},remove:function(t){t.boundTargets.length&&(console.error("LeaderLineAttachment was not unbound by remove"),t.boundTargets.forEach(function(e){O.pathLabel.unbind(t,e);}));}}},Object.keys(O).forEach(function(e){ot[e]=function(){return new M(O[e],Array.prototype.slice.call(arguments))};}),ot.positionByWindowResize=true,window.addEventListener("resize",S.add(function(){ot.positionByWindowResize&&Object.keys(Se).forEach(function(e){$e(Se[e],{position:true});});}),false),ot})();

/**
 * LeaderLine 连接器封装
 * 用于在差异标记和原文之间绘制连线
 */

// LeaderLine 全局引用
const LeaderLine = window.LeaderLine;

/**
 * 连接器实例存储
 */
const connectors = new Map();

/**
 * 创建连线
 * @param {Element} startElement - 起始元素
 * @param {Element} endElement - 结束元素
 * @param {Object} options - 配置选项
 * @returns {Object} 连接器实例
 */
function createConnector(startElement, endElement, options = {}) {
  if (!LeaderLine) {
    console.warn('[rich-diff] LeaderLine 未加载');
    return null
  }

  if (!startElement || !endElement) {
    console.warn('[rich-diff] 起始或结束元素不存在');
    return null
  }

  const defaultOptions = {
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

  const mergedOptions = { ...defaultOptions, ...options };

  try {
    const line = new LeaderLine(startElement, endElement, mergedOptions);

    // 存储实例
    const id = `connector-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    connectors.set(id, line);

    return { id, line }
  } catch (error) {
    console.warn('[rich-diff] 创建连线失败:', error);
    return null
  }
}

/**
 * 根据标记创建连线
 * @param {Marker} marker - 变更标记
 * @param {Element} container - 容器元素
 * @param {Object} options - 配置选项
 * @returns {Object|null}
 */
function createConnectorFromMarker(marker, container, options = {}) {
  if (!marker || !marker.targetSelector) {
    return null
  }

  // 查找目标元素
  const targetElement = container.querySelector(marker.targetSelector);
  if (!targetElement) {
    console.warn(`[rich-diff] 未找到目标元素: ${marker.targetSelector}`);
    return null
  }

  // 查找对应的标记面板元素（假设有 data-marker-id 属性）
  const panelElement = container.querySelector(`[data-marker-id="${marker.id}"]`);
  if (!panelElement) {
    return null
  }

  return createConnector(panelElement, targetElement, options)
}

/**
 * 批量创建连线
 * @param {Marker[]} markers - 标记列表
 * @param {Element} container - 容器元素
 * @param {Object} options - 配置选项
 * @returns {Object[]} 连接器列表
 */
function createConnectors(markers, container, options = {}) {
  const results = [];

  markers.forEach(marker => {
    const connector = createConnectorFromMarker(marker, container, options);
    if (connector) {
      results.push(connector);
    }
  });

  return results
}

/**
 * 移除连线
 * @param {string} id - 连接器 ID
 */
function removeConnector(id) {
  const line = connectors.get(id);
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
  connectors.forEach((line, id) => {
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
  const line = connectors.get(id);
  if (line && line.position) {
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
  connectors.forEach((line, id) => {
    updateConnector(id);
  });
}

/**
 * 获取连接器数量
 * @returns {number}
 */
function getConnectorCount() {
  return connectors.size
}

/**
 * 检查 LeaderLine 是否可用
 * @returns {boolean}
 */
function isLeaderLineAvailable() {
  return !!LeaderLine
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
  return diffHTML(oldHtml, newHtml, fieldName)
}

// 默认导出
var index$1 = {
  // 引擎层
  setEngine,
  getEngineName,
  getAvailableEngines,
  // 适配器层
  diffHTML,
  diffText,
  // 工具层
  computeArticleDiff,
  diffMediaList,
  diffCustomFields,
  // 展示层
  generateMarkers,
  sortMarkers,
  // LeaderLine
  createConnector,
  clearConnectors,
  // 便捷
  diffWithEngine
};

export { ChangeTypes, DefaultConfig, ErrorTypes, MediaTypes, cleanContent, clearConnectors, computeArticleDiff, createConnector, createConnectorFromMarker, createConnectors, index$1 as default, detectChangeType, diffCustomField, diffCustomFields, diffDocFile, diffField, diffFixedFields, diffHTML, diffMediaList, diffPriority, diffText, diffWithEngine, extractDiffMarkers, extractMediaChanges$1 as extractMediaChanges, findElementById, generateMarkers, getAvailableEngines, getConnectorCount, getDiffRanges, getEngine, getEngineName, hasDiffMarkers, hasEngine, isLeaderLineAvailable, parseDocFile, removeConnector, resetAllCounters, setEngine, sortMarkers, updateAllConnectors, updateConnector };
//# sourceMappingURL=rich-diff.dev.js.map
