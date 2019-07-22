(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// The chunk loading function for additional chunks
/******/ 	// Since all referenced chunks are already included
/******/ 	// in this file, this function is empty here.
/******/ 	__webpack_require__.e = function requireEnsure() {
/******/ 		return Promise.resolve();
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 47);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-scrollable-anchor");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("@reach/router");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/defineProperty");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof = __webpack_require__(19);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _requireUniversalModule = __webpack_require__(50);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(52);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks)["default"];
  }
});
exports["default"] = universal;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(26);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(27);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _vm = __webpack_require__(53);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _utils = __webpack_require__(20);

var _helpers = __webpack_require__(54);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function _objectWithoutProperties(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
}

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (// $FlowIgnore
    module.hot && (false)
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(asyncModule) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var userRender = opts.render,
      _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['render', 'loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var renderFunc = userRender || (0, _utils.createDefaultRender)(Loading, Err);
  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.usesBabelPlugin = hasBabelPlugin;
  options.modCache = {};
  options.promCache = {};
  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, [{
      key: 'requireAsyncInner',
      value: function requireAsyncInner(requireAsync, props, state, context, isMount) {
        var _this2 = this;

        if (!state.mod && loadingTransition) {
          this.update({
            mod: null,
            props: props
          }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();
        requireAsync(props, context).then(function (mod) {
          var state = {
            mod: mod,
            props: props,
            context: context
          };
          var timeLapsed = new Date() - time;

          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this2.update(state, isMount);
            }, extraDelay);
          }

          _this2.update(state, isMount);
        })["catch"](function (error) {
          return _this2.update({
            error: error,
            props: props,
            context: context
          });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;
          var info = {
            isMount: isMount,
            isSync: isSync,
            isServer: isServer
          };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var mod = state.mod,
            error = state.error;

        if (mod && !error) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;
            var info = {
              isMount: isMount,
              isSync: isSync,
              isServer: isServer
            };
            onAfter(info, mod);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      } // $FlowFixMe

    }, {
      key: 'init',
      value: function init(props, context) {
        var _req = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            addModule = _req.addModule,
            requireSync = _req.requireSync,
            requireAsync = _req.requireAsync,
            asyncOnly = _req.asyncOnly;

        var mod = void 0;

        try {
          mod = requireSync(props, context);
        } catch (error) {
          return (0, _helpers.__update)(props, {
            error: error,
            props: props,
            context: context
          }, this._initialized);
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(props); // record the module for SSR flushing :)

        if (context.report) {
          context.report(chunkName);
        }

        if (mod || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          return (0, _helpers.__update)(props, {
            asyncOnly: asyncOnly,
            props: props,
            mod: mod,
            context: context
          }, this._initialized, true, true, _utils.isServer);
        }

        this.handleBefore(true, false);
        this.requireAsyncInner(requireAsync, props, {
          props: props,
          asyncOnly: asyncOnly,
          mod: mod,
          context: context
        }, context, true);
        return {
          mod: mod,
          asyncOnly: asyncOnly,
          context: context,
          props: props
        };
      }
    }], [{
      key: 'preload',

      /* eslint-enable react/sort-comp */
      value: function preload(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        props = props || {};

        var _req2 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            requireAsync = _req2.requireAsync,
            requireSync = _req2.requireSync;

        var mod = void 0;

        try {
          mod = requireSync(props, context);
        } catch (error) {
          return Promise.reject(error);
        }

        return Promise.resolve().then(function () {
          if (mod) return mod;
          return requireAsync(props, context);
        }).then(function (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
          return mod;
        });
      }
      /* eslint-disable react/sort-comp */

    }, {
      key: 'preloadWeak',
      value: function preloadWeak(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        props = props || {};

        var _req3 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            requireSync = _req3.requireSync;

        var mod = requireSync(props, context);

        if (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
        }

        return mod;
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        if (!_this._initialized) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = _this.init(_this.props, _this.context); // $FlowFixMe

      _this.state.error = null;
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this._initialized = true;
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        var _this3 = this;

        if (isDynamic || this._asyncOnly) {
          var _req4 = (0, _requireUniversalModule2["default"])(asyncModule, options, this.props, prevProps),
              requireSync = _req4.requireSync,
              requireAsync = _req4.requireAsync,
              shouldUpdate = _req4.shouldUpdate;

          if (shouldUpdate(this.props, prevProps)) {
            var mod = void 0;

            try {
              mod = requireSync(this.props, this.context);
            } catch (error) {
              return this.update({
                error: error
              });
            }

            this.handleBefore(false, !!mod);

            if (!mod) {
              return this.requireAsyncInner(requireAsync, this.props, {
                mod: mod
              });
            }

            var state = {
              mod: mod
            };

            if (alwaysDelay) {
              if (loadingTransition) this.update({
                mod: null
              }); // display `loading` during componentWillReceiveProps

              setTimeout(function () {
                return _this3.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          }
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._initialized = false;
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        var _state = this.state,
            mod = _state.mod,
            error = _state.error;
        return renderFunc(props, mod, isLoading, userError || error);
      }
    }], [{
      key: 'getDerivedStateFromProps',
      value: function getDerivedStateFromProps(nextProps, currentState) {
        var _req5 = (0, _requireUniversalModule2["default"])(asyncModule, options, nextProps, currentState.props),
            requireSync = _req5.requireSync,
            shouldUpdate = _req5.shouldUpdate;

        if (isHMR() && shouldUpdate(currentState.props, nextProps)) {
          var mod = requireSync(nextProps, currentState.context);
          return _extends({}, currentState, {
            mod: mod
          });
        }

        return null;
      }
    }]);

    return UniversalComponent;
  }(_react2["default"].Component), _class.contextTypes = {
    store: _propTypes2["default"].object,
    report: _propTypes2["default"].func
  }, _temp;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(18)(module)))

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/assertThisInitialized");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/classCallCheck");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/createClass");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/possibleConstructorReturn");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/getPrototypeOf");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/inherits");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(20);

var requireById = function requireById(id) {
  if (!(0, _utils.isWebpack)() && typeof id === 'string') {
    return __webpack_require__(51)("" + id);
  }

  return __webpack_require__('' + id);
};

exports["default"] = requireById;

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (Object(react_static__WEBPACK_IMPORTED_MODULE_1__["withRouteData"])(function (_ref) {
  var post = _ref.post;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
    className: "blog-card"
  }, post && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "post-main-title "
  }, post.title), post && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "placeholder"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    alt: post.title,
    src: "https://media.graphcms.com/resize=w:650,h:366,fit:crop/".concat(post.image[0].handle)
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "blog-content"
  }, post && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_markdown__WEBPACK_IMPORTED_MODULE_2___default.a, {
    source: post.content
  })));
})); // export default withRouteData(post);

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-static"
var external_react_static_ = __webpack_require__(1);

// EXTERNAL MODULE: external "@reach/router"
var router_ = __webpack_require__(5);

// CONCATENATED MODULE: /Users/kumi5605/Desktop/projects/pr-blog/src/frontend/components/Router/Router.js

// EXTERNAL MODULE: /Users/kumi5605/Desktop/projects/pr-blog/src/frontend/images/instagram.svg
var instagram = __webpack_require__(38);
var instagram_default = /*#__PURE__*/__webpack_require__.n(instagram);

// EXTERNAL MODULE: /Users/kumi5605/Desktop/projects/pr-blog/src/frontend/images/facebook.svg
var facebook = __webpack_require__(39);
var facebook_default = /*#__PURE__*/__webpack_require__.n(facebook);

// EXTERNAL MODULE: /Users/kumi5605/Desktop/projects/pr-blog/src/frontend/images/linkedin.svg
var linkedin = __webpack_require__(40);
var linkedin_default = /*#__PURE__*/__webpack_require__.n(linkedin);

// EXTERNAL MODULE: /Users/kumi5605/Desktop/projects/pr-blog/src/frontend/components/Header/Header.css
var Header = __webpack_require__(63);

// CONCATENATED MODULE: /Users/kumi5605/Desktop/projects/pr-blog/src/frontend/components/Header/Header.js







/* harmony default export */ var Header_Header = (Object(external_react_static_["withSiteData"])(function (_ref) {
  var title = _ref.title;
  return external_react_default.a.createElement("header", {
    className: "home-header"
  }, external_react_default.a.createElement("div", {
    className: "title-link-container"
  }, external_react_default.a.createElement("div", null), external_react_default.a.createElement("div", null, external_react_default.a.createElement("h1", {
    className: "header-h1"
  }, external_react_default.a.createElement(router_["Link"], {
    className: "main-header-link",
    to: "/"
  }, "KIMALEEN"))), external_react_default.a.createElement("div", {
    className: "header-link-container"
  }, external_react_default.a.createElement("a", {
    href: "https://www.instagram.com/kimaleentran/",
    target: "_blank",
    rel: "noopener noreferrer"
  }, external_react_default.a.createElement("img", {
    className: "social-image",
    src: instagram_default.a,
    alt: "instagram"
  })), external_react_default.a.createElement("a", {
    href: "https://www.linkedin.com/in/kimaleentran/",
    target: "_blank",
    rel: "noopener noreferrer"
  }, external_react_default.a.createElement("img", {
    className: "social-image",
    src: linkedin_default.a,
    alt: "linkedin"
  })), external_react_default.a.createElement("a", {
    href: "https://www.facebook.com/kimaleen.tran.3",
    target: "_blank",
    rel: "noopener noreferrer"
  }, external_react_default.a.createElement("img", {
    className: "social-image",
    src: facebook_default.a,
    alt: "facebook"
  })))));
}));
// EXTERNAL MODULE: external "@babel/runtime/helpers/classCallCheck"
var classCallCheck_ = __webpack_require__(9);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/createClass"
var createClass_ = __webpack_require__(10);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/possibleConstructorReturn"
var possibleConstructorReturn_ = __webpack_require__(11);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/getPrototypeOf"
var getPrototypeOf_ = __webpack_require__(12);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/assertThisInitialized"
var assertThisInitialized_ = __webpack_require__(8);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/inherits"
var inherits_ = __webpack_require__(13);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/defineProperty"
var defineProperty_ = __webpack_require__(6);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty_);

// CONCATENATED MODULE: /Users/kumi5605/Desktop/projects/pr-blog/src/frontend/utils/toggleStickyNav.js
var toggleStickyNav = function toggleStickyNav() {
  var nav = document.querySelector('.header-nav');
  var header = document.querySelector('.home-header');
  if (nav === null) return;
  var topOfNav = nav.offsetTop;
  var totalHeight = header.offsetHeight;

  if (window.scrollY >= topOfNav) {
    document.body.style.marginTop = nav.offsetHeight + 'px';
    document.body.classList.add('fixed-nav');
    nav.style.marginTop = -(nav.offsetHeight + header.offsetHeight) + 'px';
  }

  if (window.scrollY <= totalHeight) {
    document.body.style.marginTop = 0;
    document.body.classList.remove('fixed-nav');
    nav.style.marginTop = 0;
  }
};
// EXTERNAL MODULE: external "react-scrollable-anchor"
var external_react_scrollable_anchor_ = __webpack_require__(4);

// EXTERNAL MODULE: /Users/kumi5605/Desktop/projects/pr-blog/src/frontend/components/Navbar/Navbar.css
var Navbar_Navbar = __webpack_require__(64);

// CONCATENATED MODULE: /Users/kumi5605/Desktop/projects/pr-blog/src/frontend/components/Navbar/Navbar.js













var isActive = function isActive(_ref) {
  var isCurrent = _ref.isCurrent;
  return isCurrent ? {
    className: 'active'
  } : {
    className: 'header-link'
  };
};

var Navbar_Navbar_Navbar =
/*#__PURE__*/
function (_Component) {
  inherits_default()(Navbar, _Component);

  function Navbar() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, Navbar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(Navbar)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(_this), "handleNav", function () {
      toggleStickyNav();
    });

    return _this;
  }

  createClass_default()(Navbar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('scroll', this.handleNav);
    }
  }, {
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("nav", {
        className: "header-nav"
      }, external_react_default.a.createElement("span", {
        className: "logo"
      }, "K"), external_react_default.a.createElement(router_["Link"], {
        getProps: isActive,
        className: "header-link",
        id: "home",
        to: "/",
        onClick: external_react_scrollable_anchor_["goToTop"]
      }, "Home"), external_react_default.a.createElement(router_["Link"], {
        getProps: isActive,
        className: "header-link",
        id: "blog",
        to: "/blog",
        onClick: external_react_scrollable_anchor_["goToTop"]
      }, "Blog"), external_react_default.a.createElement(router_["Link"], {
        getProps: isActive,
        className: "header-link",
        id: "lifestyle",
        to: "/lifestyle",
        onClick: external_react_scrollable_anchor_["goToTop"]
      }, "Life + Style"), external_react_default.a.createElement(router_["Link"], {
        getProps: isActive,
        className: "header-link",
        id: "travel",
        to: "/travel",
        onClick: external_react_scrollable_anchor_["goToTop"]
      }, "Travel"), external_react_default.a.createElement(router_["Link"], {
        getProps: isActive,
        className: "header-link",
        id: "food",
        to: "/food",
        onClick: external_react_scrollable_anchor_["goToTop"]
      }, "Food"), external_react_default.a.createElement(router_["Link"], {
        getProps: isActive,
        className: "header-link",
        id: "contact",
        to: "/contact",
        onClick: external_react_scrollable_anchor_["goToTop"]
      }, "Contact"));
    }
  }]);

  return Navbar;
}(external_react_["Component"]);


// EXTERNAL MODULE: external "react-helmet"
var external_react_helmet_ = __webpack_require__(41);

// EXTERNAL MODULE: /Users/kumi5605/Desktop/projects/pr-blog/src/frontend/app.css
var app = __webpack_require__(65);

// CONCATENATED MODULE: /Users/kumi5605/Desktop/projects/pr-blog/src/frontend/App.js









var App_App = function App() {
  // const handleScroll = () => {
  //   configureAnchors({ scrollDuration: 350 });
  // };
  return external_react_default.a.createElement(external_react_static_["Root"], null, external_react_default.a.createElement(external_react_helmet_["Helmet"], null, external_react_default.a.createElement("title", null, "Kimaleen Tran")), external_react_default.a.createElement(external_react_default.a.Suspense, {
    fallback: external_react_default.a.createElement("em", null, "Loading...")
  }, external_react_default.a.createElement(Header_Header, null), external_react_default.a.createElement(Navbar_Navbar_Navbar, null), external_react_default.a.createElement("div", {
    className: "content"
  }, external_react_default.a.createElement(router_["Router"], null, external_react_default.a.createElement(external_react_static_["Routes"], {
    path: "*" // handleScroll={handleScroll}

  })))));
};

/* harmony default export */ var frontend_App = __webpack_exports__["a"] = (App_App);

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/typeof");

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(19);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createDefaultRender = exports.createElement = exports.findExport = exports.resolveExport = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
};

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _requireById = __webpack_require__(15);

var _requireById2 = _interopRequireDefault(_requireById);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};

var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod["default"] : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return React.createElement('div', null, 'Loading...');
};

var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return React.createElement('div', null, 'Error: ', error && error.message);
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return (0, _requireById2["default"])(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {}
  }

  return null;
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, context, modCache) {
  var isSync = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;
  var exp = findExport(mod, key);

  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';

    var info = {
      isServer: _isServer,
      isSync: isSync
    };
    onLoad(mod, info, props, context);
  }

  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return React.isValidElement(Component) ? React.cloneElement(Component, props) : React.createElement(Component, props);
};

var createDefaultRender = exports.createDefaultRender = function createDefaultRender(Loading, Err) {
  return function (props, mod, isLoading, error) {
    if (isLoading) {
      return createElement(Loading, props);
    } else if (error) {
      return createElement(Err, _extends({}, props, {
        error: error
      }));
    } else if (mod) {
      // primary usage (for async import loading + errors):
      return createElement(mod, props);
    }

    return createElement(Loading, props);
  };
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36);
/* harmony import */ var _node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports
 // Plugins

var plugins = [{
  location: "../node_modules/react-static-plugin-source-filesystem",
  plugins: [],
  hooks: {}
}, {
  location: "../node_modules/react-static-plugin-reach-router",
  plugins: [],
  hooks: _node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0___default()({})
}, {
  location: "../node_modules/react-static-plugin-sitemap/dist",
  plugins: [],
  hooks: {}
}, {
  location: "..",
  plugins: [],
  hooks: {}
}]; // Export em!

/* harmony default export */ __webpack_exports__["default"] = (plugins);

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("/Users/kumi5605/Desktop/projects/pr-blog/node_modules/react-static/lib/browser");

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notFoundTemplate", function() { return notFoundTemplate; });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Users_kumi5605_Desktop_projects_pr_blog_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var _Users_kumi5605_Desktop_projects_pr_blog_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_kumi5605_Desktop_projects_pr_blog_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3__);






















Object(_Users_kumi5605_Desktop_projects_pr_blog_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3__["setHasBabelPlugin"])();
var universalOptions = {
  loading: function loading() {
    return null;
  },
  error: function error(props) {
    console.error(props.error);
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, "An error occurred loading this page's template. More information is available in the console.");
  },
  ignoreBabelRename: true
};
var t_0 = _Users_kumi5605_Desktop_projects_pr_blog_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "../src/pages/404.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | src/pages/404 */).then(__webpack_require__.bind(null, 28))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '../src/pages/404.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(28);
  },
  chunkName: function chunkName() {
    return "src/pages/404";
  }
}), universalOptions);
t_0.template = '../src/pages/404.js';
var t_1 = _Users_kumi5605_Desktop_projects_pr_blog_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "../src/pages/about.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | src/pages/about */).then(__webpack_require__.bind(null, 29))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '../src/pages/about.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(29);
  },
  chunkName: function chunkName() {
    return "src/pages/about";
  }
}), universalOptions);
t_1.template = '../src/pages/about.js';
var t_2 = _Users_kumi5605_Desktop_projects_pr_blog_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "../src/pages/blog.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | src/pages/blog */).then(__webpack_require__.bind(null, 30))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '../src/pages/blog.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(30);
  },
  chunkName: function chunkName() {
    return "src/pages/blog";
  }
}), universalOptions);
t_2.template = '../src/pages/blog.js';
var t_3 = _Users_kumi5605_Desktop_projects_pr_blog_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "../src/pages/contact.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | src/pages/contact */).then(__webpack_require__.bind(null, 35))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '../src/pages/contact.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(35);
  },
  chunkName: function chunkName() {
    return "src/pages/contact";
  }
}), universalOptions);
t_3.template = '../src/pages/contact.js';
var t_4 = _Users_kumi5605_Desktop_projects_pr_blog_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "../src/pages/food.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | src/pages/food */).then(__webpack_require__.bind(null, 31))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '../src/pages/food.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(31);
  },
  chunkName: function chunkName() {
    return "src/pages/food";
  }
}), universalOptions);
t_4.template = '../src/pages/food.js';
var t_5 = _Users_kumi5605_Desktop_projects_pr_blog_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "../src/pages/index.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | src/pages/index */).then(__webpack_require__.bind(null, 34))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '../src/pages/index.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(34);
  },
  chunkName: function chunkName() {
    return "src/pages/index";
  }
}), universalOptions);
t_5.template = '../src/pages/index.js';
var t_6 = _Users_kumi5605_Desktop_projects_pr_blog_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "../src/pages/lifestyle.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | src/pages/lifestyle */).then(__webpack_require__.bind(null, 32))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '../src/pages/lifestyle.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(32);
  },
  chunkName: function chunkName() {
    return "src/pages/lifestyle";
  }
}), universalOptions);
t_6.template = '../src/pages/lifestyle.js';
var t_7 = _Users_kumi5605_Desktop_projects_pr_blog_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "../src/pages/post.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | src/pages/post */).then(__webpack_require__.bind(null, 16))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '../src/pages/post.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(16);
  },
  chunkName: function chunkName() {
    return "src/pages/post";
  }
}), universalOptions);
t_7.template = '../src/pages/post.js';
var t_8 = _Users_kumi5605_Desktop_projects_pr_blog_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "../src/pages/travel.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | src/pages/travel */).then(__webpack_require__.bind(null, 33))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '../src/pages/travel.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(33);
  },
  chunkName: function chunkName() {
    return "src/pages/travel";
  }
}), universalOptions);
t_8.template = '../src/pages/travel.js';
var t_9 = _Users_kumi5605_Desktop_projects_pr_blog_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "../src/pages/post",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | src/pages/post */).then(__webpack_require__.bind(null, 16))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '../src/pages/post');
  },
  resolve: function resolve() {
    return /*require.resolve*/(16);
  },
  chunkName: function chunkName() {
    return "src/pages/post";
  }
}), universalOptions);
t_9.template = '../src/pages/post'; // Template Map

/* harmony default export */ __webpack_exports__["default"] = ({
  '../src/pages/404.js': t_0,
  '../src/pages/about.js': t_1,
  '../src/pages/blog.js': t_2,
  '../src/pages/contact.js': t_3,
  '../src/pages/food.js': t_4,
  '../src/pages/index.js': t_5,
  '../src/pages/lifestyle.js': t_6,
  '../src/pages/post.js': t_7,
  '../src/pages/travel.js': t_8,
  '../src/pages/post': t_9 // Not Found Template

});
var notFoundTemplate = "../src/pages/404.js";
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "404 - Oh no! We couldn't find that page :("));
});

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (Object(react_static__WEBPACK_IMPORTED_MODULE_1__["withRouteData"])(function (_ref) {
  var authors = _ref.authors;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, authors.map(function (author) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "about-author",
      key: author.id
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: "about-avatar",
      alt: author.name,
      src: "https://media.graphcms.com/resize=w:100,h:100,fit:crop/".concat(author.avatar.handle)
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Hi I'm ", author.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      style: {
        textAlign: 'center'
      }
    }, author.bibliography));
  }));
}));

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_scrollable_anchor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var react_scrollable_anchor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_scrollable_anchor__WEBPACK_IMPORTED_MODULE_3__);




/* harmony default export */ __webpack_exports__["default"] = (Object(react_static__WEBPACK_IMPORTED_MODULE_1__["withRouteData"])(function (_ref) {
  var posts = _ref.posts;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "blog-container"
  }, posts.map(function (post) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      key: post.id,
      to: "/post/".concat(post.id),
      className: "card",
      onClick: react_scrollable_anchor__WEBPACK_IMPORTED_MODULE_3__["goToTop"]
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        paddingRight: '1rem'
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      alt: post.title,
      className: "card-img",
      src: "https://media.graphcms.com/resize=w:170,h:150,fit:crop/".concat(post.image[0].handle)
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      style: {
        color: '#2b2b2b',
        margin: 0
      }
    }, post.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      style: {
        color: '#2b2b2b',
        display: 'flex'
      }
    }, "By ", post.author.name)));
  }));
}));

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_scrollable_anchor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var react_scrollable_anchor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_scrollable_anchor__WEBPACK_IMPORTED_MODULE_3__);




/* harmony default export */ __webpack_exports__["default"] = (Object(react_static__WEBPACK_IMPORTED_MODULE_1__["withRouteData"])(function (_ref) {
  var posts = _ref.posts;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "blog-container"
  }, posts.map(function (post) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      key: post.id,
      to: "/post/".concat(post.id),
      className: "card",
      onClick: react_scrollable_anchor__WEBPACK_IMPORTED_MODULE_3__["goToTop"]
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        paddingRight: '1rem'
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      alt: post.title,
      className: "card-img",
      src: "https://media.graphcms.com/resize=w:170,h:150,fit:crop/".concat(post.image[0].handle)
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      style: {
        color: '#2b2b2b',
        margin: 0
      }
    }, post.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      style: {
        color: '#2b2b2b',
        display: 'flex'
      }
    }, "By ", post.author.name)));
  }));
}));

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_scrollable_anchor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var react_scrollable_anchor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_scrollable_anchor__WEBPACK_IMPORTED_MODULE_3__);




/* harmony default export */ __webpack_exports__["default"] = (Object(react_static__WEBPACK_IMPORTED_MODULE_1__["withRouteData"])(function (_ref) {
  var posts = _ref.posts;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "blog-container"
  }, posts.map(function (post) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      key: post.id,
      to: "/post/".concat(post.id),
      className: "card",
      onClick: react_scrollable_anchor__WEBPACK_IMPORTED_MODULE_3__["goToTop"]
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        paddingRight: '1rem'
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      alt: post.title,
      className: "card-img",
      src: "https://media.graphcms.com/resize=w:170,h:150,fit:crop/".concat(post.image[0].handle)
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      style: {
        color: '#2b2b2b',
        margin: 0
      }
    }, post.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      style: {
        color: '#2b2b2b',
        display: 'flex'
      }
    }, "By ", post.author.name)));
  }));
}));

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_scrollable_anchor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var react_scrollable_anchor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_scrollable_anchor__WEBPACK_IMPORTED_MODULE_3__);




/* harmony default export */ __webpack_exports__["default"] = (Object(react_static__WEBPACK_IMPORTED_MODULE_1__["withRouteData"])(function (_ref) {
  var posts = _ref.posts;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "blog-container"
  }, posts.map(function (post) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      key: post.id,
      to: "/post/".concat(post.id),
      className: "card",
      onClick: react_scrollable_anchor__WEBPACK_IMPORTED_MODULE_3__["goToTop"]
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        paddingRight: '1rem'
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      alt: post.title,
      className: "card-img",
      src: "https://media.graphcms.com/resize=w:170,h:150,fit:crop/".concat(post.image[0].handle)
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      style: {
        color: '#2b2b2b',
        margin: 0
      }
    }, post.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      style: {
        color: '#2b2b2b',
        display: 'flex'
      }
    }, "By ", post.author.name)));
  }));
}));

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "@babel/runtime/helpers/classCallCheck"
var classCallCheck_ = __webpack_require__(9);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/createClass"
var createClass_ = __webpack_require__(10);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/possibleConstructorReturn"
var possibleConstructorReturn_ = __webpack_require__(11);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/getPrototypeOf"
var getPrototypeOf_ = __webpack_require__(12);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/assertThisInitialized"
var assertThisInitialized_ = __webpack_require__(8);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/inherits"
var inherits_ = __webpack_require__(13);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/defineProperty"
var defineProperty_ = __webpack_require__(6);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-static"
var external_react_static_ = __webpack_require__(1);

// EXTERNAL MODULE: /Users/kumi5605/Desktop/projects/pr-blog/src/frontend/components/RecentCard/RecentCard.css
var RecentCard = __webpack_require__(67);

// CONCATENATED MODULE: /Users/kumi5605/Desktop/projects/pr-blog/src/frontend/components/RecentCard/RecentCard.js


/* harmony default export */ var RecentCard_RecentCard = (function (props) {
  return external_react_default.a.createElement("article", {
    className: "post-card",
    style: {
      backgroundImage: "url(\"https://media.graphcms.com/".concat(props.image[0].handle, "\")"),
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100%'
    }
  }, external_react_default.a.createElement("h5", {
    className: "recent-text"
  }, props.title));
});
// EXTERNAL MODULE: external "@reach/router"
var router_ = __webpack_require__(5);

// EXTERNAL MODULE: external "react-scrollable-anchor"
var external_react_scrollable_anchor_ = __webpack_require__(4);

// EXTERNAL MODULE: /Users/kumi5605/Desktop/projects/pr-blog/src/frontend/components/RecentPosts/RecentPosts.css
var RecentPosts = __webpack_require__(68);

// CONCATENATED MODULE: /Users/kumi5605/Desktop/projects/pr-blog/src/frontend/components/RecentPosts/RecentPosts.js





/* harmony default export */ var RecentPosts_RecentPosts = (function (props) {
  return external_react_default.a.createElement("section", {
    className: "recent-posts"
  }, external_react_default.a.createElement("h2", {
    className: "recent-header"
  }, "Recent Blog Posts"), external_react_default.a.createElement("div", {
    className: "recent-card-container"
  }, props.posts.map(function (post) {
    return external_react_default.a.createElement(router_["Link"], {
      to: "/post/".concat(post.id),
      onClick: external_react_scrollable_anchor_["goToTop"],
      key: post.id
    }, external_react_default.a.createElement(RecentCard_RecentCard, post));
  })));
});
// EXTERNAL MODULE: /Users/kumi5605/Desktop/projects/pr-blog/src/frontend/components/EmailForm/EmailForm.css
var EmailForm_EmailForm = __webpack_require__(69);

// CONCATENATED MODULE: /Users/kumi5605/Desktop/projects/pr-blog/src/frontend/components/EmailForm/EmailForm.js










var EmailForm_EmailForm_EmailForm =
/*#__PURE__*/
function (_Component) {
  inherits_default()(EmailForm, _Component);

  function EmailForm() {
    var _this;

    classCallCheck_default()(this, EmailForm);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(EmailForm).call(this));

    defineProperty_default()(assertThisInitialized_default()(_this), "handleChange", function (e) {
      var _e$target = e.target,
          name = _e$target.name,
          value = _e$target.value;

      _this.setState(defineProperty_default()({}, name, value));
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleSubmit", function (e) {
      e.preventDefault();
      var email = _this.state.email;

      _this.props.addIdea(email);
    });

    _this.state = {
      email: ''
    };
    return _this;
  }

  createClass_default()(EmailForm, [{
    key: "render",
    value: function render() {
      var email = this.state.email;
      return external_react_default.a.createElement("form", {
        className: "email-form",
        onSubmit: this.handleSubmit
      }, external_react_default.a.createElement("input", {
        className: "email-input",
        name: "email",
        value: email,
        onChange: this.handleChange,
        placeholder: "Email Address"
      }), external_react_default.a.createElement("button", {
        className: "subscribe-button"
      }, "Subscribe!"));
    }
  }]);

  return EmailForm;
}(external_react_["Component"]);


// EXTERNAL MODULE: /Users/kumi5605/Desktop/projects/pr-blog/src/frontend/images/instagram-light.svg
var instagram_light = __webpack_require__(43);
var instagram_light_default = /*#__PURE__*/__webpack_require__.n(instagram_light);

// EXTERNAL MODULE: /Users/kumi5605/Desktop/projects/pr-blog/src/frontend/images/facebook-light.svg
var facebook_light = __webpack_require__(44);
var facebook_light_default = /*#__PURE__*/__webpack_require__.n(facebook_light);

// EXTERNAL MODULE: /Users/kumi5605/Desktop/projects/pr-blog/src/frontend/images/linkedin-light.svg
var linkedin_light = __webpack_require__(45);
var linkedin_light_default = /*#__PURE__*/__webpack_require__.n(linkedin_light);

// EXTERNAL MODULE: /Users/kumi5605/Desktop/projects/pr-blog/src/frontend/components/Footer/Footer.css
var Footer_Footer = __webpack_require__(70);

// CONCATENATED MODULE: /Users/kumi5605/Desktop/projects/pr-blog/src/frontend/components/Footer/Footer.js












var Footer_Footer_Footer =
/*#__PURE__*/
function (_Component) {
  inherits_default()(Footer, _Component);

  function Footer() {
    classCallCheck_default()(this, Footer);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(Footer).apply(this, arguments));
  }

  createClass_default()(Footer, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("section", {
        className: "footer"
      }, external_react_default.a.createElement("div", {
        className: "weekly-email"
      }, external_react_default.a.createElement("h3", {
        className: "footer-header"
      }, "Subscribe to Receive Updates"), external_react_default.a.createElement(EmailForm_EmailForm_EmailForm, {
        addIdea: this.props.addIdea
      })), external_react_default.a.createElement("div", {
        className: "footer-link-container"
      }, external_react_default.a.createElement("a", {
        href: "https://www.instagram.com/kimaleentran/",
        target: "_blank",
        rel: "noopener noreferrer"
      }, external_react_default.a.createElement("img", {
        className: "social-image",
        src: instagram_light_default.a,
        alt: "instagram"
      })), external_react_default.a.createElement("a", {
        href: "https://www.linkedin.com/in/kimaleentran/",
        target: "_blank",
        rel: "noopener noreferrer"
      }, external_react_default.a.createElement("img", {
        className: "social-image",
        src: linkedin_light_default.a,
        alt: "linkedin"
      })), external_react_default.a.createElement("a", {
        href: "https://www.facebook.com/kimaleen.tran.3",
        target: "_blank",
        rel: "noopener noreferrer"
      }, external_react_default.a.createElement("img", {
        className: "social-image",
        src: facebook_light_default.a,
        alt: "facebook"
      }))));
    }
  }]);

  return Footer;
}(external_react_["Component"]);


// CONCATENATED MODULE: /Users/kumi5605/Desktop/projects/pr-blog/src/pages/index.js












var pages_index =
/*#__PURE__*/
function (_Component) {
  inherits_default()(index, _Component);

  function index() {
    var _this;

    classCallCheck_default()(this, index);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(index).call(this));

    defineProperty_default()(assertThisInitialized_default()(_this), "getPosts", function () {
      var posts = _this.props.posts;
      var newPosts = [];

      for (var i = 1; i <= 3; i++) {
        if (posts[posts.length - i]) {
          newPosts.push(posts[posts.length - i]);
        }
      }

      return newPosts;
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "addIdea", function (email, idea) {
      // const newIdea = { ...idea, id: Date.now() };
      // const ideas = [...this.state.ideas, newIdea];
      // this.setState({ ideas });
      console.log('email', email);
    });

    _this.state = {
      ideas: []
    };
    return _this;
  }

  createClass_default()(index, [{
    key: "render",
    value: function render() {
      var handle = this.props.authors[0].avatar.handle;
      var bibliography = this.props.authors[0].bibliography;
      var recentPosts = this.getPosts();
      return external_react_default.a.createElement("div", {
        className: "home-container"
      }, external_react_default.a.createElement("article", {
        className: "image-container banner-image"
      }, external_react_default.a.createElement("aside", {
        className: "author-image-container"
      }, external_react_default.a.createElement("img", {
        className: "author-image",
        src: "https://media.graphcms.com/".concat(handle),
        alt: "Kimaleen"
      })), external_react_default.a.createElement("aside", {
        className: "bio-text"
      }, external_react_default.a.createElement("p", null, bibliography), external_react_default.a.createElement("h4", {
        className: "signature"
      }, "Kimaleen"))), external_react_default.a.createElement(RecentPosts_RecentPosts, {
        posts: recentPosts
      }), external_react_default.a.createElement(Footer_Footer_Footer, {
        addIdea: this.addIdea
      }));
    }
  }]);

  return index;
}(external_react_["Component"]);

/* harmony default export */ var pages = __webpack_exports__["default"] = (Object(external_react_static_["withRouteData"])(pages_index));

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(22);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/asyncToGenerator"
var asyncToGenerator_ = __webpack_require__(42);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/classCallCheck"
var classCallCheck_ = __webpack_require__(9);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/createClass"
var createClass_ = __webpack_require__(10);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/possibleConstructorReturn"
var possibleConstructorReturn_ = __webpack_require__(11);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/getPrototypeOf"
var getPrototypeOf_ = __webpack_require__(12);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/assertThisInitialized"
var assertThisInitialized_ = __webpack_require__(8);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/inherits"
var inherits_ = __webpack_require__(13);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/defineProperty"
var defineProperty_ = __webpack_require__(6);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty_);

// EXTERNAL MODULE: /Users/kumi5605/Desktop/projects/pr-blog/src/frontend/components/ContactForm/ContactForm.css
var ContactForm_ContactForm = __webpack_require__(66);

// CONCATENATED MODULE: /Users/kumi5605/Desktop/projects/pr-blog/src/frontend/components/ContactForm/ContactForm.js









 // import * as emailjs from 'emailjs-com';
// import mailgun from 'mailgun-js';



var ContactForm_ContactForm_ContactForm =
/*#__PURE__*/
function (_Component) {
  inherits_default()(ContactForm, _Component);

  function ContactForm() {
    var _this;

    classCallCheck_default()(this, ContactForm);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(ContactForm).call(this));

    defineProperty_default()(assertThisInitialized_default()(_this), "handleChange", function (e) {
      var _e$target = e.target,
          name = _e$target.name,
          value = _e$target.value;

      _this.setState(defineProperty_default()({}, name, value));
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleSubmit",
    /*#__PURE__*/
    function () {
      var _ref = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee(e) {
        var templateId, receiverEmail, _this$state, email, message;

        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault();
                templateId = "template_aF6JSrdI";
                receiverEmail = process.env.REACT_APP_EMAILJS_RECEIVER;
                _this$state = _this.state, email = _this$state.email, message = _this$state.message;
                _context.prev = 4;
                _context.next = 7;
                return fetch('/api/contact', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(_this.state)
                });

              case 7:
                _this.setState({
                  email: '',
                  subject: '',
                  message: ''
                }); // this.setState({
                //   formSubmitted: true
                // });


                _context.next = 13;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](4);
                throw _context.t0;

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[4, 10]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    _this.state = {
      // firstName: '',
      // lastName: '',
      email: '',
      subject: '',
      message: '' // formSubmitted: false,
      // formEmailSent: false

    };
    return _this;
  }

  createClass_default()(ContactForm, [{
    key: "render",
    // sendMessage(templateId, email, receiverEmail, message) {
    //   mailgun.messages
    //     .create('sandbox-123.mailgun.org', {
    //       from: 'Excited User <mailgun@sandbox-123.mailgun.org>',
    //       to: ['test@example.com'],
    //       subject: 'Hello',
    //       text: 'Testing some Mailgun awesomness!',
    //       html: '<h1>Testing some Mailgun awesomness!</h1>'
    //     })
    //     .then(msg => console.log(msg)) // logs response data
    //     .catch(err => console.log(err)); // logs any error
    // }
    value: function render() {
      var _this2 = this;

      var _this$state2 = this.state,
          email = _this$state2.email,
          firstName = _this$state2.firstName,
          lastName = _this$state2.lastName,
          subject = _this$state2.subject,
          message = _this$state2.message;
      return external_react_default.a.createElement("form", {
        className: "contact-form",
        onSubmit: function onSubmit(e) {
          return _this2.handleSubmit(e);
        }
      }, external_react_default.a.createElement("div", {
        className: "contact-info"
      }, external_react_default.a.createElement("input", {
        className: "contact-input",
        id: "email-input",
        name: "email",
        value: email,
        onChange: this.handleChange,
        placeholder: "Email Address",
        required: true
      }), external_react_default.a.createElement("input", {
        className: "contact-input",
        id: "subject-input",
        name: "subject",
        value: subject,
        onChange: this.handleChange,
        placeholder: "Subject",
        required: true
      }), external_react_default.a.createElement("textarea", {
        className: "contact-message",
        name: "message",
        value: message,
        onChange: this.handleChange,
        placeholder: "Message",
        required: true
      })), external_react_default.a.createElement("button", {
        className: "contact-info-button"
      }, "Connect!"));
    }
  }]);

  return ContactForm;
}(external_react_["Component"]);


// CONCATENATED MODULE: /Users/kumi5605/Desktop/projects/pr-blog/src/pages/contact.js


/* harmony default export */ var contact = __webpack_exports__["default"] = (function () {
  return external_react_default.a.createElement("div", {
    className: "contact-container"
  }, external_react_default.a.createElement("h2", {
    className: "contact-header"
  }, "Let's Connect"), external_react_default.a.createElement(ContactForm_ContactForm_ContactForm, null));
});

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _reactStatic = __webpack_require__(1);

var _router = __webpack_require__(5);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var _default = function _default(_ref) {
  var _ref$RouterProps = _ref.RouterProps,
      userRouterProps = _ref$RouterProps === void 0 ? {} : _ref$RouterProps;
  return {
    Root: function Root(PreviousRoot) {
      return function (_ref2) {
        var children = _ref2.children,
            rest = _objectWithoutProperties(_ref2, ["children"]);

        var basepath = (0, _reactStatic.useBasepath)();
        var staticInfo = (0, _reactStatic.useStaticInfo)();

        var RouteHandler = function RouteHandler(props) {
          return _react["default"].createElement(PreviousRoot, _extends({}, rest, props), children);
        };

        var renderedChildren = // Place a top-level router inside the root
        // This will give proper context to Link and other reach components
        _react["default"].createElement(_router.Router, _extends({}, basepath ? {
          basepath: basepath
        } : {}, userRouterProps), _react["default"].createElement(RouteHandler, {
          path: "/*"
        })); // If we're in SSR, use a manual server location


        return typeof document === 'undefined' ? _react["default"].createElement(_router.ServerLocation, {
          url: (0, _reactStatic.makePathAbsolute)(staticInfo.path)
        }, renderedChildren) : renderedChildren;
      };
    },
    Routes: function Routes(PreviousRoutes) {
      return function (props) {
        return (// Wrap Routes in location
          _react["default"].createElement(_router.Location, null, function (location) {
            return _react["default"].createElement(PreviousRoutes, _extends({
              path: "/*"
            }, props, {
              location: location
            }));
          })
        );
      };
    }
  };
};

exports["default"] = _default;

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHdpZHRoPSIxNjkuMDYzcHgiIGhlaWdodD0iMTY5LjA2M3B4IiB2aWV3Qm94PSIwIDAgMTY5LjA2MyAxNjkuMDYzIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxNjkuMDYzIDE2OS4wNjM7Ig0KCSB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxwYXRoIGQ9Ik0xMjIuNDA2LDBINDYuNjU0QzIwLjkyOSwwLDAsMjAuOTMsMCw0Ni42NTV2NzUuNzUyYzAsMjUuNzI2LDIwLjkyOSw0Ni42NTUsNDYuNjU0LDQ2LjY1NWg3NS43NTINCgkJYzI1LjcyNywwLDQ2LjY1Ni0yMC45Myw0Ni42NTYtNDYuNjU1VjQ2LjY1NUMxNjkuMDYzLDIwLjkzLDE0OC4xMzMsMCwxMjIuNDA2LDB6IE0xNTQuMDYzLDEyMi40MDcNCgkJYzAsMTcuNDU1LTE0LjIwMSwzMS42NTUtMzEuNjU2LDMxLjY1NUg0Ni42NTRDMjkuMiwxNTQuMDYzLDE1LDEzOS44NjIsMTUsMTIyLjQwN1Y0Ni42NTVDMTUsMjkuMjAxLDI5LjIsMTUsNDYuNjU0LDE1aDc1Ljc1Mg0KCQljMTcuNDU1LDAsMzEuNjU2LDE0LjIwMSwzMS42NTYsMzEuNjU1VjEyMi40MDd6Ii8+DQoJPHBhdGggZD0iTTg0LjUzMSw0MC45N2MtMjQuMDIxLDAtNDMuNTYzLDE5LjU0Mi00My41NjMsNDMuNTYzYzAsMjQuMDIsMTkuNTQyLDQzLjU2MSw0My41NjMsNDMuNTYxczQzLjU2My0xOS41NDEsNDMuNTYzLTQzLjU2MQ0KCQlDMTI4LjA5NCw2MC41MTIsMTA4LjU1Miw0MC45Nyw4NC41MzEsNDAuOTd6IE04NC41MzEsMTEzLjA5M2MtMTUuNzQ5LDAtMjguNTYzLTEyLjgxMi0yOC41NjMtMjguNTYxDQoJCWMwLTE1Ljc1LDEyLjgxMy0yOC41NjMsMjguNTYzLTI4LjU2M3MyOC41NjMsMTIuODEzLDI4LjU2MywyOC41NjNDMTEzLjA5NCwxMDAuMjgxLDEwMC4yOCwxMTMuMDkzLDg0LjUzMSwxMTMuMDkzeiIvPg0KCTxwYXRoIGQ9Ik0xMjkuOTIxLDI4LjI1MWMtMi44OSwwLTUuNzI5LDEuMTctNy43NywzLjIyYy0yLjA1MSwyLjA0LTMuMjMsNC44OC0zLjIzLDcuNzhjMCwyLjg5MSwxLjE4LDUuNzMsMy4yMyw3Ljc4DQoJCWMyLjA0LDIuMDQsNC44OCwzLjIyLDcuNzcsMy4yMmMyLjksMCw1LjczLTEuMTgsNy43OC0zLjIyYzIuMDUtMi4wNSwzLjIyLTQuODksMy4yMi03Ljc4YzAtMi45LTEuMTctNS43NC0zLjIyLTcuNzgNCgkJQzEzNS42NjEsMjkuNDIxLDEzMi44MjEsMjguMjUxLDEyOS45MjEsMjguMjUxeiIvPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo="

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9IjQzMC4xMTNweCIgaGVpZ2h0PSI0MzAuMTE0cHgiIHZpZXdCb3g9IjAgMCA0MzAuMTEzIDQzMC4xMTQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQzMC4xMTMgNDMwLjExNDsiDQoJIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggaWQ9IkZhY2Vib29rIiBkPSJNMTU4LjA4MSw4My4zYzAsMTAuODM5LDAsNTkuMjE4LDAsNTkuMjE4aC00My4zODV2NzIuNDEyaDQzLjM4NXYyMTUuMTgzaDg5LjEyMlYyMTQuOTM2aDU5LjgwNQ0KCQljMCwwLDUuNjAxLTM0LjcyMSw4LjMxNi03Mi42ODVjLTcuNzg0LDAtNjcuNzg0LDAtNjcuNzg0LDBzMC00Mi4xMjcsMC00OS41MTFjMC03LjQsOS43MTctMTcuMzU0LDE5LjMyMS0xNy4zNTQNCgkJYzkuNTg2LDAsMjkuODE4LDAsNDguNTU3LDBjMC05Ljg1OSwwLTQzLjkyNCwwLTc1LjM4NWMtMjUuMDE2LDAtNTMuNDc2LDAtNjYuMDIxLDBDMTU1Ljg3OC0wLjAwNCwxNTguMDgxLDcyLjQ4LDE1OC4wODEsODMuM3oiLz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K"

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9IjQzMC4xMTdweCIgaGVpZ2h0PSI0MzAuMTE4cHgiIHZpZXdCb3g9IjAgMCA0MzAuMTE3IDQzMC4xMTgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQzMC4xMTcgNDMwLjExODsiDQoJIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggaWQ9IkxpbmtlZEluX194MjhfYWx0X3gyOV8iIGQ9Ik0zOTguMzU1LDBIMzEuNzgyQzE0LjIyOSwwLDAuMDAyLDEzLjc5MywwLjAwMiwzMC44MTd2MzY4LjQ3MQ0KCQljMCwxNy4wMjUsMTQuMjMyLDMwLjgzLDMxLjc4LDMwLjgzaDM2Ni41NzNjMTcuNTQ5LDAsMzEuNzYtMTMuODE0LDMxLjc2LTMwLjgzVjMwLjgxN0M0MzAuMTE1LDEzLjc5OCw0MTUuOTA0LDAsMzk4LjM1NSwweg0KCQkgTTEzMC40LDM2MC4wMzhINjUuNDEzVjE2NS44NDVIMTMwLjRWMzYwLjAzOHogTTk3LjkxMywxMzkuMzE1aC0wLjQzN2MtMjEuNzkzLDAtMzUuOTItMTQuOTA0LTM1LjkyLTMzLjU2Mw0KCQljMC0xOS4wMzUsMTQuNTQyLTMzLjUzNSwzNi43NjctMzMuNTM1YzIyLjIyNywwLDM1Ljg5OSwxNC40OTYsMzYuMzMxLDMzLjUzNUMxMzQuNjU0LDEyNC40MTUsMTIwLjU1NSwxMzkuMzE1LDk3LjkxMywxMzkuMzE1eg0KCQkgTTM2NC42NTksMzYwLjAzOGgtNjQuOTY2VjI1Ni4xMzhjMC0yNi4xMDctOS40MTMtNDMuOTIxLTMyLjkwNy00My45MjFjLTE3Ljk3MywwLTI4LjY0MiwxMi4wMTgtMzMuMzI3LDIzLjYyMQ0KCQljLTEuNzM2LDQuMTQ0LTIuMTY2LDkuOTQtMi4xNjYsMTUuNzI4djEwOC40NjhoLTY0Ljk1NGMwLDAsMC44NS0xNzUuOTc5LDAtMTk0LjE5Mmg2NC45NjR2MjcuNTMxDQoJCWM4LjYyNC0xMy4yMjksMjQuMDM1LTMyLjEsNTguNTM0LTMyLjFjNDIuNzYsMCw3NC44MjIsMjcuNzM5LDc0LjgyMiw4Ny40MTRWMzYwLjAzOHogTTIzMC44ODMsMTkzLjk5DQoJCWMwLjExMS0wLjE4MiwwLjI2Ni0wLjQwMSwwLjQyLTAuNjE0djAuNjE0SDIzMC44ODN6Ii8+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg=="

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/asyncToGenerator");

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCIgdmlld0JveD0iMCAwIDE2OS4wNjMgMTY5LjA2MyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTY5LjA2MyAxNjkuMDYzOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PGc+PGc+Cgk8cGF0aCBkPSJNMTIyLjQwNiwwSDQ2LjY1NEMyMC45MjksMCwwLDIwLjkzLDAsNDYuNjU1djc1Ljc1MmMwLDI1LjcyNiwyMC45MjksNDYuNjU1LDQ2LjY1NCw0Ni42NTVoNzUuNzUyICAgYzI1LjcyNywwLDQ2LjY1Ni0yMC45Myw0Ni42NTYtNDYuNjU1VjQ2LjY1NUMxNjkuMDYzLDIwLjkzLDE0OC4xMzMsMCwxMjIuNDA2LDB6IE0xNTQuMDYzLDEyMi40MDcgICBjMCwxNy40NTUtMTQuMjAxLDMxLjY1NS0zMS42NTYsMzEuNjU1SDQ2LjY1NEMyOS4yLDE1NC4wNjMsMTUsMTM5Ljg2MiwxNSwxMjIuNDA3VjQ2LjY1NUMxNSwyOS4yMDEsMjkuMiwxNSw0Ni42NTQsMTVoNzUuNzUyICAgYzE3LjQ1NSwwLDMxLjY1NiwxNC4yMDEsMzEuNjU2LDMxLjY1NVYxMjIuNDA3eiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iI2Y3ZjdmNyIgZmlsbD0iI2Y3ZjdmNyIvPgoJPHBhdGggZD0iTTg0LjUzMSw0MC45N2MtMjQuMDIxLDAtNDMuNTYzLDE5LjU0Mi00My41NjMsNDMuNTYzYzAsMjQuMDIsMTkuNTQyLDQzLjU2MSw0My41NjMsNDMuNTYxczQzLjU2My0xOS41NDEsNDMuNTYzLTQzLjU2MSAgIEMxMjguMDk0LDYwLjUxMiwxMDguNTUyLDQwLjk3LDg0LjUzMSw0MC45N3ogTTg0LjUzMSwxMTMuMDkzYy0xNS43NDksMC0yOC41NjMtMTIuODEyLTI4LjU2My0yOC41NjEgICBjMC0xNS43NSwxMi44MTMtMjguNTYzLDI4LjU2My0yOC41NjNzMjguNTYzLDEyLjgxMywyOC41NjMsMjguNTYzQzExMy4wOTQsMTAwLjI4MSwxMDAuMjgsMTEzLjA5Myw4NC41MzEsMTEzLjA5M3oiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiNmN2Y3ZjciIGZpbGw9IiNmN2Y3ZjciLz4KCTxwYXRoIGQ9Ik0xMjkuOTIxLDI4LjI1MWMtMi44OSwwLTUuNzI5LDEuMTctNy43NywzLjIyYy0yLjA1MSwyLjA0LTMuMjMsNC44OC0zLjIzLDcuNzhjMCwyLjg5MSwxLjE4LDUuNzMsMy4yMyw3Ljc4ICAgYzIuMDQsMi4wNCw0Ljg4LDMuMjIsNy43NywzLjIyYzIuOSwwLDUuNzMtMS4xOCw3Ljc4LTMuMjJjMi4wNS0yLjA1LDMuMjItNC44OSwzLjIyLTcuNzhjMC0yLjktMS4xNy01Ljc0LTMuMjItNy43OCAgIEMxMzUuNjYxLDI5LjQyMSwxMzIuODIxLDI4LjI1MSwxMjkuOTIxLDI4LjI1MXoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiNmN2Y3ZjciIGZpbGw9IiNmN2Y3ZjciLz4KPC9nPjwvZz4gPC9zdmc+Cg=="

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4IiB2aWV3Qm94PSIwIDAgNDMwLjExMyA0MzAuMTE0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MzAuMTEzIDQzMC4xMTQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIj48Zz48Zz4KCTxwYXRoIGlkPSJGYWNlYm9vayIgZD0iTTE1OC4wODEsODMuM2MwLDEwLjgzOSwwLDU5LjIxOCwwLDU5LjIxOGgtNDMuMzg1djcyLjQxMmg0My4zODV2MjE1LjE4M2g4OS4xMjJWMjE0LjkzNmg1OS44MDUgICBjMCwwLDUuNjAxLTM0LjcyMSw4LjMxNi03Mi42ODVjLTcuNzg0LDAtNjcuNzg0LDAtNjcuNzg0LDBzMC00Mi4xMjcsMC00OS41MTFjMC03LjQsOS43MTctMTcuMzU0LDE5LjMyMS0xNy4zNTQgICBjOS41ODYsMCwyOS44MTgsMCw0OC41NTcsMGMwLTkuODU5LDAtNDMuOTI0LDAtNzUuMzg1Yy0yNS4wMTYsMC01My40NzYsMC02Ni4wMjEsMEMxNTUuODc4LTAuMDA0LDE1OC4wODEsNzIuNDgsMTU4LjA4MSw4My4zeiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iI2Y3ZjdmNyIgZmlsbD0iI2Y3ZjdmNyIvPgo8L2c+PC9nPiA8L3N2Zz4K"

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4IiB2aWV3Qm94PSIwIDAgNDMwLjExNyA0MzAuMTE4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MzAuMTE3IDQzMC4xMTg7IiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIj48Zz48Zz4KCTxwYXRoIGlkPSJMaW5rZWRJbl9feDI4X2FsdF94MjlfIiBkPSJNMzk4LjM1NSwwSDMxLjc4MkMxNC4yMjksMCwwLjAwMiwxMy43OTMsMC4wMDIsMzAuODE3djM2OC40NzEgICBjMCwxNy4wMjUsMTQuMjMyLDMwLjgzLDMxLjc4LDMwLjgzaDM2Ni41NzNjMTcuNTQ5LDAsMzEuNzYtMTMuODE0LDMxLjc2LTMwLjgzVjMwLjgxN0M0MzAuMTE1LDEzLjc5OCw0MTUuOTA0LDAsMzk4LjM1NSwweiAgICBNMTMwLjQsMzYwLjAzOEg2NS40MTNWMTY1Ljg0NUgxMzAuNFYzNjAuMDM4eiBNOTcuOTEzLDEzOS4zMTVoLTAuNDM3Yy0yMS43OTMsMC0zNS45Mi0xNC45MDQtMzUuOTItMzMuNTYzICAgYzAtMTkuMDM1LDE0LjU0Mi0zMy41MzUsMzYuNzY3LTMzLjUzNWMyMi4yMjcsMCwzNS44OTksMTQuNDk2LDM2LjMzMSwzMy41MzVDMTM0LjY1NCwxMjQuNDE1LDEyMC41NTUsMTM5LjMxNSw5Ny45MTMsMTM5LjMxNXogICAgTTM2NC42NTksMzYwLjAzOGgtNjQuOTY2VjI1Ni4xMzhjMC0yNi4xMDctOS40MTMtNDMuOTIxLTMyLjkwNy00My45MjFjLTE3Ljk3MywwLTI4LjY0MiwxMi4wMTgtMzMuMzI3LDIzLjYyMSAgIGMtMS43MzYsNC4xNDQtMi4xNjYsOS45NC0yLjE2NiwxNS43Mjh2MTA4LjQ2OGgtNjQuOTU0YzAsMCwwLjg1LTE3NS45NzksMC0xOTQuMTkyaDY0Ljk2NHYyNy41MzEgICBjOC42MjQtMTMuMjI5LDI0LjAzNS0zMi4xLDU4LjUzNC0zMi4xYzQyLjc2LDAsNzQuODIyLDI3LjczOSw3NC44MjIsODcuNDE0VjM2MC4wMzh6IE0yMzAuODgzLDE5My45OSAgIGMwLjExMS0wLjE4MiwwLjI2Ni0wLjQwMSwwLjQyLTAuNjE0djAuNjE0SDIzMC44ODN6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjZjdmN2Y3IiBmaWxsPSIjZjdmN2Y3Ii8+CjwvZz48L2c+IDwvc3ZnPgo="

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("react-markdown");

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(48);
__webpack_require__(49);
module.exports = __webpack_require__(55);


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
/* eslint-disable import/no-dynamic-require */

var plugins = __webpack_require__(23)["default"];

var _require = __webpack_require__(24),
    registerPlugins = _require.registerPlugins;

registerPlugins(plugins);

if (typeof document !== 'undefined' && module && module.hot) {
  module.hot.accept("/Users/kumi5605/Desktop/projects/pr-blog/artifacts/react-static-browser-plugins.js", function () {
    registerPlugins(__webpack_require__(23)["default"]);
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(18)(module)))

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
/* eslint-disable import/no-dynamic-require */

var _require = __webpack_require__(24),
    registerTemplates = _require.registerTemplates;

var _require2 = __webpack_require__(25),
    templates = _require2["default"],
    notFoundTemplate = _require2.notFoundTemplate;

registerTemplates(templates, notFoundTemplate);

if (typeof document !== 'undefined' && module && module.hot) {
  module.hot.accept("/Users/kumi5605/Desktop/projects/pr-blog/artifacts/react-static-templates.js", function () {
    var _require3 = __webpack_require__(25),
        templates = _require3["default"],
        notFoundTemplate = _require3.notFoundTemplate;

    registerTemplates(templates, notFoundTemplate);
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(18)(module)))

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

exports["default"] = requireUniversalModule;

var _utils = __webpack_require__(20);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache,
      usesBabelPlugin = options.usesBabelPlugin;
  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;
  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);
    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;
    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);

        if (onError) {
          var _isServer = typeof window === 'undefined';

          var info = {
            isServer: _isServer
          };
          onError(error, info);
        }

        rej(error);
      }; // const timer = timeout && setTimeout(reject, timeout)


      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);
        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache);
        if (exp) return res(exp);
        reject(new Error('export not found'));
      };

      var request = load(props, {
        resolve: resolve,
        reject: reject
      }); // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.

      if (!request || typeof request.then !== 'function') return;
      request.then(resolve)["catch"](reject);
    });
    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);

        if (usesBabelPlugin) {
          // if ignoreBabelRename is true, don't apply regex
          var shouldKeepName = options && !!options.ignoreBabelRename;

          if (!shouldKeepName) {
            name = name.replace(/\//g, '-');
          }
        }

        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);
    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);
    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    var resultingConfig = typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;

    if (options) {
      resultingConfig = _extends({}, resultingConfig, options);
    }

    return resultingConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };
  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load,
    ignoreBabelRename: true
  };
};

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	".": 15,
	"./": 15,
	"./index": 15,
	"./index.js": 15
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 51;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = __webpack_require__(19);

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(26);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks() {
    _classCallCheck(this, ReportChunks);

    return _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).apply(this, arguments));
  }

  _createClass(ReportChunks, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        report: this.props.report
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2["default"].Children.only(this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2["default"].Component);

ReportChunks.propTypes = {
  report: _propTypes2["default"].func.isRequired
};
ReportChunks.childContextTypes = {
  report: _propTypes2["default"].func.isRequired
};
exports["default"] = ReportChunks;

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = require("vm");

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__handleAfter = exports.__update = undefined;

var _hoistNonReactStatics = __webpack_require__(27);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _index = __webpack_require__(7);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var __update = exports.__update = function __update(props, state, isInitialized) {
  var isMount = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var isSync = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var isServer = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
  if (!isInitialized) return state;

  if (!state.error) {
    state.error = null;
  }

  return __handleAfter(props, state, isMount, isSync, isServer);
};
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["__handleAfter"] }] */


var __handleAfter = exports.__handleAfter = function __handleAfter(props, state, isMount, isSync, isServer) {
  var mod = state.mod,
      error = state.error;

  if (mod && !error) {
    (0, _hoistNonReactStatics2["default"])(_index2["default"], mod, {
      preload: true,
      preloadWeak: true
    });

    if (props.onAfter) {
      var onAfter = props.onAfter;
      var info = {
        isMount: isMount,
        isSync: isSync,
        isServer: isServer
      };
      onAfter(info, mod);
    }
  } else if (error && props.onError) {
    props.onError(error);
  }

  return state;
};

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(56);

var _interopRequireDefault = __webpack_require__(57);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(58));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(59));

var React = _interopRequireWildcard(__webpack_require__(0));

var _useStaticInfo = __webpack_require__(60);
/* eslint-disable import/no-dynamic-require */


var OriginalSuspense = React.Suspense;

function Suspense(_ref) {
  var key = _ref.key,
      children = _ref.children,
      rest = (0, _objectWithoutProperties2["default"])(_ref, ["key", "children"]);
  return typeof document !== 'undefined' ? React.createElement(OriginalSuspense, (0, _extends2["default"])({
    key: key
  }, rest), children) : React.createElement(React.Fragment, {
    key: key
  }, children);
} // Override the suspense module to be our own


React.Suspense = Suspense;
React["default"].Suspense = Suspense;

var App = __webpack_require__(61)["default"];

var _default = function _default(staticInfo) {
  return function (props) {
    return React.createElement(_useStaticInfo.staticInfoContext.Provider, {
      value: staticInfo
    }, React.createElement(App, props));
  };
};

exports["default"] = _default;

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireWildcard");

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireDefault");

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/extends");

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/objectWithoutProperties");

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = require("/Users/kumi5605/Desktop/projects/pr-blog/node_modules/react-static/lib/browser/hooks/useStaticInfo");

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _frontend_App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17);


 // Your top level component

 // Export your top level component as JSX (for static rendering)

/* harmony default export */ __webpack_exports__["default"] = (_frontend_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]); // Render your app

if (typeof document !== 'undefined') {
  var target = document.getElementById('root');
  var renderMethod = target.hasChildNodes() ? react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.hydrate : react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render;

  var render = function render(Comp) {
    renderMethod(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__["AppContainer"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Comp, null)), target);
  }; // Render!


  render(_frontend_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]); // Hot Module Replacement

  if (module && module.hot) {
    module.hot.accept('./frontend/App', function () {
      render(_frontend_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]);
    });
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(62)(module)))

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = function (originalModule) {
  if (!originalModule.webpackPolyfill) {
    var module = Object.create(originalModule); // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    Object.defineProperty(module, "exports", {
      enumerable: true
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// Module
exports.push([module.i, ".home-header {\n  text-align: center;\n}\n\n.title-link-container {\n  display: grid;\n  grid-template-columns: 1fr 2fr 1fr;\n}\n\n.header-h1 {\n  /* font: 65px 'Oswald', sans-serif; */\n  font-size: 65px;\n  font-style: italic;\n  font-weight: 300;\n  /* font-weight: 100; */\n  margin-top: -0.5rem;\n  margin-bottom: 0;\n  text-align: center;\n  text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.3);\n}\n\n.main-header-link {\n  color: #2b2b2b;\n}\n\n.header-link-container {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: end;\n      justify-content: flex-end;\n  margin-right: 3rem;\n  margin-top: 0.5rem;\n}\n\n.social-image {\n  height: 20px;\n  width: 20px;\n  padding: 0.6rem;\n}\n", ""]);



/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// Module
exports.push([module.i, "nav {\n  width: 100%;\n}\n\nnav a {\n  display: inline-block;\n}\n\n.header-nav {\n  background-color: #fff;\n  -webkit-box-shadow: 0 7px 6px -6px rgba(32, 33, 36, 0.35);\n          box-shadow: 0 7px 6px -6px rgba(32, 33, 36, 0.35);\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n      justify-content: center;\n  position: relative;\n  width: 100vw;\n}\n\n.fixed-nav nav {\n  background-color: #fff;\n  position: fixed;\n  width: 100vw;\n  z-index: 1000;\n}\n\nspan.logo {\n  max-width: 0;\n  overflow: hidden;\n  font: 30px 'Oswald', sans-serif;\n  font-style: italic;\n  font-weight: bold;\n  font-weight: 100;\n  text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.15);\n  -webkit-transition: all 0.35s;\n  -o-transition: all 0.35s;\n  transition: all 0.35s;\n}\n\n.header-link {\n  border-bottom: 2px solid #fff;\n  color: #2b2b2b;\n  font: 20px 'Open Sans', sans-serif;\n  font-size: 15px;\n  padding: 1rem 1rem 0.5rem 1rem;\n  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);\n}\n\n.active {\n  border-bottom: 2.3px solid #2b2b2b;\n  color: #2b2b2b;\n  font: 20px 'Open Sans', sans-serif;\n  font-size: 15px;\n  padding: 1rem 1rem 0.5rem 1rem;\n  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);\n}\n\n#home:hover,\n#contact:hover,\n#blog:hover,\n#lifestyle:hover,\n#travel:hover,\n#food:hover {\n  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);\n  font-weight: 700;\n}\n", ""]);



/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// Imports
exports.push([module.i, "@import url(http://fonts.googleapis.com/css?family=Arizonia:regular,bold,italic&subset=latin,latin-ext);", ""]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Open+Sans&display=swap);", ""]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Oswald&display=swap);", ""]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Dr+Sugiyama&display=swap);", ""]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Caveat+Brush&display=swap);", ""]);

// Module
exports.push([module.i, "* {\n  scroll-behavior: smooth;\n}\n\nbody {\n  font-family: 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue',\n    Helvetica, Arial, 'Lucida Grande', sans-serif;\n  font-weight: 300;\n  font-size: 16px;\n  margin: 0;\n  padding: 0;\n  text-rendering: optimizeLegibility;\n}\n\na {\n  text-decoration: none;\n}\n\n/* Home */\n.home-container {\n  height: 100vh;\n  width: 100vw;\n}\n\n.image-container {\n  border-bottom: 1.5px solid #d8d8d8;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n}\n\n.banner-image {\n  background-image: url('https://images.unsplash.com/photo-1501419737817-eadda6b445e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=968&q=80');\n  background-size: cover;\n  height: 100%;\n  width: 100%;\n}\n\n.author-image-container {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex-align: center;\n      align-items: center;\n}\n\n.author-image {\n  -webkit-box-shadow: 0 0 10px #191919;\n          box-shadow: 0 0 10px #191919;\n  height: 600px;\n  width: 440px;\n  -webkit-box-shadow: 0 0 5px #191919;\n}\n\n.bio-text {\n  -ms-flex-align: center;\n      align-items: center;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  font-size: 20px;\n  font-weight: 500;\n  -ms-flex-pack: center;\n      justify-content: center;\n  line-height: 140%;\n  padding-bottom: 4rem;\n  width: 75%;\n}\n\n.bio-text p {\n  margin: 0;\n  text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.1);\n}\n\n.signature {\n  font: 65px 'Dr Sugiyama', cursive;\n  margin: 1rem 0 0 0;\n}\n\n/* Blog Pages */\n.blog-container {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column-reverse;\n      flex-direction: column-reverse;\n}\n\n.card {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  margin: 16px 0;\n  border: 1px solid #eee;\n  overflow: hidden;\n  border-radius: 5px;\n}\n\n.card:hover {\n  -webkit-box-shadow: 1px 1px 5px #999;\n          box-shadow: 1px 1px 5px #999;\n}\n\n.card-img {\n  display: block;\n  height: 100%;\n}\n\n/* Post */\n.blog-card {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-align: center;\n      align-items: center;\n}\n\n.post-main-title {\n  text-align: center;\n}\n\n.placeholder {\n  height: 366;\n}\n\n.blog-content {\n  margin: 0 auto;\n  width: 640px;\n}\n\n.blog-content h2 {\n  text-align: center;\n}\n\n.blog-content p {\n  line-height: 160%;\n  text-indent: 1rem;\n}\n\n/* Contact */\n.contact-container {\n  -ms-flex-align: center;\n      align-items: center;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n}\n\n.contact-header {\n  font: 30px 'Open Sans', sans-serif;\n}\n", ""]);



/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// Module
exports.push([module.i, ".contact-form {\n  -ms-flex-align: center;\n      align-items: center;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n}\n\n.contact-info {\n  -ms-flex-align: center;\n      align-items: center;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n}\n\n.contact-input {\n  background-color: #fafafa;\n  border-radius: 2px;\n  font-size: 0.95rem;\n  height: 30px;\n  margin: 1rem;\n  width: 221px;\n}\n\n#email-input,\n#subject-input {\n  background-color: #fafafa;\n  border-radius: 2px;\n  width: 480.5px;\n}\n\n.contact-message {\n  background-color: #fafafa;\n  border-color: #ccc;\n  border-radius: 2px;\n  font-size: 0.95rem;\n  height: 75px;\n  margin: 0.3rem;\n  max-width: 480.5px;\n  width: 480.5px;\n}\n\n.contact-info-button {\n  background-color: #f0efefd4;\n  color: #757575;\n  cursor: pointer;\n  font-size: 1rem;\n  height: 45px;\n  width: 205px;\n  margin-top: 1.75rem;\n  -webkit-transition: 0.3s ease-in-out;\n  -o-transition: 0.3s ease-in-out;\n  transition: 0.3s ease-in-out;\n}\n\n.contact-info-button:hover {\n  background-color: #368fcd;\n  border-color: #368fcd;\n  color: #fff;\n}\n\n::-webkit-input-placeholder {\n  padding-left: 0.5rem;\n}\n\n::-moz-placeholder {\n  padding-left: 0.5rem;\n}\n\n:-ms-input-placeholder {\n  padding-left: 0.5rem;\n}\n\n::-ms-input-placeholder {\n  padding-left: 0.5rem;\n}\n\n::placeholder {\n  padding-left: 0.5rem;\n}\n\n::-moz-placeholder {\n  padding-left: 0.5rem;\n}\n\n:-moz-placeholder {\n  padding-left: 0.5rem;\n}\n\n:-ms-input-placeholder {\n  padding-left: 0.5rem;\n}\n", ""]);



/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// Imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Open+Sans&display=swap);", ""]);

// Module
exports.push([module.i, ".post-card {\n  -ms-flex-align: center;\n      align-items: center;\n  cursor: pointer;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n      justify-content: center;\n  margin: 0 1.5rem 3rem 1.5rem;\n  height: 260px;\n  -webkit-transition: 0.4s ease-in-out;\n  -o-transition: 0.4s ease-in-out;\n  transition: 0.4s ease-in-out;\n  width: 400px;\n}\n\n.post-card:hover {\n  box-shadow: 0 0 5px #191919;\n  -webkit-transform: translateY(-3.5px);\n      -ms-transform: translateY(-3.5px);\n          transform: translateY(-3.5px);\n  -webkit-box-shadow: 0 0 5px #191919;\n}\n\n.recent-text {\n  color: #f7f7f7;\n  font-family: 'Open Sans', sans-serif;\n  font-size: 16px;\n  text-align: center;\n  margin: 0;\n  padding-top: 14rem;\n  position: absolute;\n  text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.8);\n}\n", ""]);



/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// Imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Open+Sans&display=swap);", ""]);

// Module
exports.push([module.i, ".recent-posts {\n  -ms-flex-align: center;\n      align-items: center;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  margin-bottom: 3rem;\n}\n\n.recent-card-container {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n      flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -ms-flex-pack: center;\n      justify-content: center;\n}\n\n.recent-header {\n  font: 30px 'Open Sans', sans-serif;\n  margin: 2rem 0 3rem 0;\n}\n", ""]);



/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// Module
exports.push([module.i, ".email-form {\n  -ms-flex-align: center;\n      align-items: center;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n}\n\n.email-input {\n  font-size: 0.95rem;\n  height: 40px;\n  width: 200px;\n  margin: 0.3rem;\n}\n\n.subscribe-button {\n  background-color: #181818;\n  border-color: #f7f7f7;\n  color: #f7f7f7;\n  cursor: pointer;\n  font-size: 1rem;\n  height: 45px;\n  width: 205px;\n  margin-top: 0.75rem;\n  -webkit-transition: 0.3s ease-in-out;\n  -o-transition: 0.3s ease-in-out;\n  transition: 0.3s ease-in-out;\n}\n\n.subscribe-button:hover {\n  background-color: #368fcd;\n  border-color: #368fcd;\n  color: #fff;\n}\n\n::-webkit-input-placeholder {\n  padding-left: 0.5rem;\n}\n\n::-moz-placeholder {\n  padding-left: 0.5rem;\n}\n\n:-ms-input-placeholder {\n  padding-left: 0.5rem;\n}\n\n::-ms-input-placeholder {\n  padding-left: 0.5rem;\n}\n\n::placeholder {\n  padding-left: 0.5rem;\n}\n\n::-moz-placeholder {\n  padding-left: 0.5rem;\n}\n\n:-moz-placeholder {\n  padding-left: 0.5rem;\n}\n\n:-ms-input-placeholder {\n  padding-left: 0.5rem;\n}\n", ""]);



/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// Imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Open+Sans&display=swap);", ""]);

// Module
exports.push([module.i, ".footer {\n  -ms-flex-align: space-evenly;\n      align-items: space-evenly;\n  background-color: #181818;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  height: 300px;\n  width: 100%;\n}\n\n.weekly-email {\n  -ms-flex-align: center;\n      align-items: center;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n}\n\n.footer-header {\n  font-family: 'Open Sans', sans-serif;\n  font-size: 22px;\n  color: #f7f7f7e5;\n}\n\n.footer-link-container {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n      justify-content: center;\n  padding-top: 3rem;\n}\n\n.social-image {\n  height: 20px;\n  width: 20px;\n  padding: 0.6rem;\n}\n", ""]);



/***/ })
/******/ ]);
});