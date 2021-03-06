/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(2);

	__webpack_require__(6);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/index.js!./main.scss", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/index.js!./main.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	exports.push([module.id, "body {\n  background: #fff; }\n\nheader {\n  text-align: center; }\n\nheader .todo-title {\n  font-weight: bold; }\n\n.text-success {\n  color: #090; }\n\n.task-done {\n  text-decoration: line-through; }\n\n.btn {\n  display: inline-block;\n  padding: 4px 12px;\n  margin-bottom: 0;\n  font-size: 14px;\n  line-height: 20px;\n  text-align: center;\n  vertical-align: middle;\n  cursor: pointer;\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);\n  border-radius: 4px; }\n\n.btn-edit {\n  color: #fff;\n  background-color: lightgreen;\n  border: 1px solid lightgreen; }\n\n.btn-edit:hover {\n  color: #fff;\n  background-color: green; }\n\n.btn-danger {\n  color: #fff;\n  background-color: #da4f49;\n  border: 1px solid #bd362f; }\n\n.btn-danger:hover {\n  color: #fff;\n  background-color: #bd362f; }\n\n.btn:focus {\n  outline: none; }\n\n.container {\n  width: 600px;\n  margin: 0 auto; }\n  .container .todo-wrap {\n    padding: 10px;\n    border: 1px solid #ddd;\n    border-radius: 5px; }\n    .container .todo-wrap .todo-edit input {\n      width: 560px;\n      height: 28px;\n      font-size: 14px;\n      border: 1px solid #ccc;\n      border-radius: 4px;\n      padding: 4px 7px; }\n    .container .todo-wrap .todo-edit input:focus {\n      outline: none;\n      border-color: rgba(82, 168, 236, 0.8);\n      box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6); }\n    .container .todo-wrap .todo-show {\n      margin-left: 0;\n      border: 1px solid #ddd;\n      border-radius: 2px;\n      padding: 0; }\n      .container .todo-wrap .todo-show li {\n        list-style: none;\n        height: 36px;\n        line-height: 36px;\n        padding: 0 5px;\n        border-bottom: 1px solid #ddd; }\n        .container .todo-wrap .todo-show li label {\n          float: left;\n          cursor: pointer; }\n          .container .todo-wrap .todo-show li label input {\n            vertical-align: middle;\n            margin-right: 6px;\n            position: relative;\n            top: -1px; }\n        .container .todo-wrap .todo-show li button {\n          float: right;\n          display: none;\n          margin-top: 3px; }\n      .container .todo-wrap .todo-show li:before {\n        content: initial; }\n      .container .todo-wrap .todo-show li:last-child {\n        border-bottom: none; }\n    .container .todo-wrap .todo-empty {\n      height: 40px;\n      line-height: 40px;\n      border: 1px solid #ddd;\n      border-radius: 2px;\n      padding-left: 5px;\n      margin-top: 10px; }\n    .container .todo-wrap .todo-handler {\n      height: 40px;\n      line-height: 40px;\n      padding-left: 6px;\n      margin-top: 5px; }\n      .container .todo-wrap .todo-handler label {\n        display: inline-block;\n        margin-right: 20px;\n        cursor: pointer; }\n        .container .todo-wrap .todo-handler label input {\n          position: relative;\n          top: -1px;\n          vertical-align: middle;\n          margin-right: 5px; }\n      .container .todo-wrap .todo-handler button {\n        float: right;\n        margin-top: 5px; }\n", ""]);

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}

	function createLinkElement() {
		var linkElement = document.createElement("link");
		var head = getHeadElement();
		linkElement.rel = "stylesheet";
		head.appendChild(linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement();
			update = updateLink.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _localDb = __webpack_require__(8);

	var _localDb2 = _interopRequireDefault(_localDb);

	var _TodoEditJs = __webpack_require__(9);

	var _TodoEditJs2 = _interopRequireDefault(_TodoEditJs);

	var _TodoShowJs = __webpack_require__(10);

	var _TodoShowJs2 = _interopRequireDefault(_TodoShowJs);

	var _TodoHandlerJs = __webpack_require__(12);

	var _TodoHandlerJs2 = _interopRequireDefault(_TodoHandlerJs);

	var App = (function (_React$Component) {
	    _inherits(App, _React$Component);

	    function App() {
	        _classCallCheck(this, App);

	        _get(Object.getPrototypeOf(App.prototype), 'constructor', this).call(this);
	        this.db = new _localDb2['default']('ReactTodos');
	        this.state = {
	            todos: this.db.get('todos') || [],
	            isAllChecked: false
	        };
	    }

	    _createClass(App, [{
	        key: 'allChecked',
	        value: function allChecked() {

	            var isAllChecked = false;
	            if (this.state.todos.every(function (todo) {
	                return todo.isDone;
	            })) {
	                isAllChecked = true;
	            }

	            this.setState({
	                todos: this.state.todos,
	                isAllChecked: isAllChecked
	            });
	        }
	    }, {
	        key: 'addTodo',
	        value: function addTodo(todoItem) {

	            this.state.todos.push(todoItem);
	            this.db.set('todos', this.state.todos);
	            this.allChecked();
	        }
	    }, {
	        key: 'deleteTodo',
	        value: function deleteTodo(index) {

	            this.state.todos.splice(index, 1);
	            this.setState({
	                todos: this.state.todos
	            });
	            this.db.set('todos', this.state.todos);
	        }
	    }, {
	        key: 'editTodo',
	        value: function editTodo(index, newtext) {

	            this.state.todos[index].text = newtext;
	            this.setState({
	                todos: this.state.todos
	            });
	            this.db.set('todos', this.state.todos);
	        }
	    }, {
	        key: 'clearDone',
	        value: function clearDone() {

	            var todos = this.state.todos.filter(function (todo) {
	                return !todo.isDone;
	            });
	            this.setState({
	                todos: todos,
	                isALlChecked: false
	            });
	            this.db.set('todos', todos);
	        }
	    }, {
	        key: 'changeTodoState',
	        value: function changeTodoState(todoIndex, isDone) {
	            var isChangeAll = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];

	            if (isChangeAll) {
	                this.setState({
	                    todos: this.state.todos.map(function (todo) {
	                        todo.isDone = isDone;
	                        return todo;
	                    }),
	                    isAllChecked: isDone
	                });
	            } else {
	                this.state.todos[todoIndex].isDone = isDone;
	                this.allChecked();
	            }
	            this.db.set('todos', this.state.todos);
	        }
	    }, {
	        key: 'render',
	        value: function render() {

	            var infos = {
	                isAllChecked: this.state.isAllChecked,
	                todoCount: this.state.todos.length || 0,
	                todoDoneCount: (this.state.todos && this.state.todos.filter(function (todo) {
	                    return todo.isDone;
	                })).length || 0
	            };

	            return _react2['default'].createElement(
	                'div',
	                { className: 'todo-wrap' },
	                _react2['default'].createElement(_TodoEditJs2['default'], { addTodo: this.addTodo.bind(this) }),
	                _react2['default'].createElement(_TodoShowJs2['default'], { todos: this.state.todos, deleteTodo: this.deleteTodo.bind(this),
	                    changeTodoState: this.changeTodoState.bind(this), editTodo: this.editTodo.bind(this) }),
	                _react2['default'].createElement(_TodoHandlerJs2['default'], _extends({}, infos, { changeTodoState: this.changeTodoState.bind(this),
	                    clearDone: this.clearDone.bind(this) }))
	            );
	        }
	    }]);

	    return App;
	})(_react2['default'].Component);

	_react2['default'].render(_react2['default'].createElement(App, null), document.getElementById('app'));

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	module.exports = React;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	
	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var LocalDb = (function () {
	    function LocalDb() {
	        var localDb = arguments[0] === undefined ? 'localDb' : arguments[0];

	        _classCallCheck(this, LocalDb);

	        if (!window.localStorage) {
	            throw new Error('Not supports localStorage');
	        }
	        this.localDb = localDb;

	        if (localStorage[localDb]) {
	            this.db = JSON.parse(localStorage[localDb]);
	        } else {
	            this.db = {};
	        }
	    }

	    _createClass(LocalDb, [{
	        key: 'getDb',
	        value: function getDb() {
	            return this.db;
	        }
	    }, {
	        key: 'set',
	        value: function set(key, value) {
	            if (key) {
	                this.db[key] = value;

	                return this._saveToLocalStorage();
	            }

	            throw new Error('set参数key不能为空');
	        }
	    }, {
	        key: 'get',
	        value: function get(key) {
	            if (key) {
	                var value = this.db[key];
	                if (typeof value === 'undefined') {
	                    console.warn(key + '的值不存在');
	                }
	                return value;
	            }

	            throw new Error('get参数key不能为空');
	        }
	    }, {
	        key: 'clean',
	        value: function clean() {
	            this.db = {};
	            this._saveToLocalStorage();
	        }
	    }, {
	        key: '_saveToLocalStorage',
	        value: function _saveToLocalStorage() {
	            localStorage[this.localDb] = JSON.stringify(this.getDb());
	        }
	    }]);

	    return LocalDb;
	})();

	module.exports = LocalDb;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var TodoEdit = (function (_React$Component) {
	    _inherits(TodoEdit, _React$Component);

	    function TodoEdit() {
	        _classCallCheck(this, TodoEdit);

	        _get(Object.getPrototypeOf(TodoEdit.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(TodoEdit, [{
	        key: 'handlerKeyUp',
	        value: function handlerKeyUp(event) {
	            if (event.key == 'Enter') {
	                var _self = event.target;
	                var value = _self.value;

	                if (!value) {
	                    return false;
	                }

	                var newTodoItem = {
	                    text: value,
	                    isDone: false
	                };

	                _self.value = '';
	                this.props.addTodo(newTodoItem);
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2['default'].createElement(
	                'div',
	                { className: 'todo-edit' },
	                _react2['default'].createElement('input', { onKeyUp: this.handlerKeyUp.bind(this), type: 'text', placeholder: 'Put your task here' })
	            );
	        }
	    }]);

	    return TodoEdit;
	})(_react2['default'].Component);

	exports['default'] = TodoEdit;
	module.exports = exports['default'];

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	
	'use strict';
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _TodoItemJs = __webpack_require__(11);

	var _TodoItemJs2 = _interopRequireDefault(_TodoItemJs);

	var TodoShow = (function (_React$Component) {
	    _inherits(TodoShow, _React$Component);

	    function TodoShow() {
	        _classCallCheck(this, TodoShow);

	        _get(Object.getPrototypeOf(TodoShow.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(TodoShow, [{
	        key: 'render',
	        value: function render() {
	            var _this = this;

	            if (this.props.todos.length == 0) {
	                return _react2['default'].createElement(
	                    'div',
	                    { className: 'todo-empty' },
	                    'No todos right now'
	                );
	            } else {
	                return _react2['default'].createElement(
	                    'ul',
	                    { className: 'todo-show' },
	                    this.props.todos.map(function (todo, index) {
	                        return _react2['default'].createElement(_TodoItemJs2['default'], _extends({ text: todo.text, isDone: todo.isDone, index: index }, _this.props));
	                    })
	                );
	            }
	        }
	    }]);

	    return TodoShow;
	})(_react2['default'].Component);

	exports['default'] = TodoShow;
	module.exports = exports['default'];

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var TodoItem = (function (_React$Component) {
	    _inherits(TodoItem, _React$Component);

	    function TodoItem(props) {
	        _classCallCheck(this, TodoItem);

	        _get(Object.getPrototypeOf(TodoItem.prototype), 'constructor', this).call(this, props);
	        this.state = {
	            text: this.props.text
	        };
	    }

	    _createClass(TodoItem, [{
	        key: 'handlerChange',
	        value: function handlerChange() {

	            var isDone = !this.props.isDone;
	            this.props.changeTodoState(this.props.index, isDone);
	        }
	    }, {
	        key: 'handlerMouseOver',
	        value: function handlerMouseOver() {

	            _react2['default'].findDOMNode(this).style.background = '#eee';
	            _react2['default'].findDOMNode(this.refs.delButton).style.display = 'inline-block';
	        }
	    }, {
	        key: 'handlerMouseOut',
	        value: function handlerMouseOut() {

	            _react2['default'].findDOMNode(this).style.background = '#fff';
	            _react2['default'].findDOMNode(this.refs.delButton).style.display = 'none';
	        }
	    }, {
	        key: 'handlerDelete',
	        value: function handlerDelete() {
	            this.props.deleteTodo(this.props.index);
	        }
	    }, {
	        key: 'handlerFocusSpan',
	        value: function handlerFocusSpan(event) {

	            var item = event.target;
	            item.contentEditable = true;
	            item.focus();
	        }
	    }, {
	        key: 'handlerUserInput',
	        value: function handlerUserInput(event) {
	            var _this = this;

	            if (event.key === 'Enter') {
	                // console.log('按下了回车键')
	                event.preventDefault();
	                this.setState({ text: event.target.innerHTML }, function () {
	                    var newtext = _this.state.text;
	                    _this.props.editTodo(_this.props.index, newtext);
	                });
	                event.target.contentEditable = false;
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            // console.log('this.state.text', this.state.text)
	            var className = this.props.isDone ? 'task-done' : '';
	            return _react2['default'].createElement(
	                'li',
	                { onMouseOver: this.handlerMouseOver.bind(this), onMouseOut: this.handlerMouseOut.bind(this) },
	                _react2['default'].createElement(
	                    'label',
	                    null,
	                    _react2['default'].createElement('input', { ref: 'checkboxInput', type: 'checkbox', checked: this.props.isDone,
	                        onChange: this.handlerChange.bind(this) })
	                ),
	                _react2['default'].createElement(
	                    'span',
	                    { ref: 'itemText', className: className,
	                        onKeyPress: this.handlerUserInput.bind(this),
	                        onClick: this.handlerFocusSpan.bind(this) },
	                    this.state.text
	                ),
	                _react2['default'].createElement(
	                    'button',
	                    { ref: 'delButton', className: 'btn btn-danger', onClick: this.handlerDelete.bind(this) },
	                    'Delete'
	                )
	            );
	        }
	    }]);

	    return TodoItem;
	})(_react2['default'].Component);

	exports['default'] = TodoItem;
	module.exports = exports['default'];

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var TodoHandler = (function (_React$Component) {
	    _inherits(TodoHandler, _React$Component);

	    function TodoHandler() {
	        _classCallCheck(this, TodoHandler);

	        _get(Object.getPrototypeOf(TodoHandler.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(TodoHandler, [{
	        key: 'handlerSelectAll',
	        value: function handlerSelectAll(event) {
	            this.props.changeTodoState(null, event.target.checked, true);
	        }
	    }, {
	        key: 'handlerDeleteDone',
	        value: function handlerDeleteDone() {
	            this.props.clearDone();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2['default'].createElement(
	                'div',
	                { className: 'todo-handler' },
	                _react2['default'].createElement(
	                    'label',
	                    null,
	                    _react2['default'].createElement('input', { type: 'checkbox', checked: this.props.isAllChecked,
	                        onChange: this.handlerSelectAll.bind(this) }),
	                    'SelectAll'
	                ),
	                _react2['default'].createElement(
	                    'span',
	                    null,
	                    _react2['default'].createElement(
	                        'span',
	                        { className: 'text-success' },
	                        'TodoDone: ',
	                        this.props.todoDoneCount
	                    ),
	                    ' / AllTodos: ',
	                    this.props.todoCount
	                ),
	                _react2['default'].createElement(
	                    'button',
	                    { className: 'btn btn-danger', onClick: this.handlerDeleteDone.bind(this) },
	                    'Clear finished Todos'
	                )
	            );
	        }
	    }]);

	    return TodoHandler;
	})(_react2['default'].Component);

	exports['default'] = TodoHandler;
	module.exports = exports['default'];

/***/ })
/******/ ]);