(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("gl-matrix"));
	else if(typeof define === 'function' && define.amd)
		define(["gl-matrix"], factory);
	else if(typeof exports === 'object')
		exports["MiniGL"] = factory(require("gl-matrix"));
	else
		root["MiniGL"] = factory(root["gl-matrix"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__6__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(10);

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(8);

var assertThisInitialized = __webpack_require__(11);

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__6__;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(12);

var iterableToArray = __webpack_require__(13);

var unsupportedIterableToArray = __webpack_require__(14);

var nonIterableSpread = __webpack_require__(15);

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(9);

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(9);

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(5);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(0);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(1);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(3);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(4);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(2);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// CONCATENATED MODULE: ./src/Base.js



/**
 * 图层基础类
 * @class 
 */
var Base_Base = /*#__PURE__*/function () {
  function Base() {
    classCallCheck_default()(this, Base);

    this.layers = [];
  }

  createClass_default()(Base, [{
    key: "on",

    /**
     * 事件监听,用法同jQuery.on
     */
    value: function on(type, listener) {
      if (this._listeners === undefined) this._listeners = {};
      var listeners = this._listeners;

      if (listeners[type] === undefined) {
        listeners[type] = [];
      }

      if (listeners[type].indexOf(listener) === -1) {
        listeners[type].push(listener);
      }
    }
    /**
     * 触发事件 
     * @example 
     * this.fire("change",event)
     */

  }, {
    key: "fire",
    value: function fire(type, event) {
      if (this._listeners === undefined) return;
      var listeners = this._listeners;
      var listenerArray = listeners[type];

      if (listenerArray !== undefined) {
        var array = listenerArray.slice(0);

        for (var i = 0, l = array.length; i < l; i++) {
          array[i].call(this, event);
        }
      }
    }
    /**
     * 关闭事件
     * @example
     * this.off('change',onChange)
     */

  }, {
    key: "off",
    value: function off(type, listener) {
      if (this._listeners === undefined) return;
      var listeners = this._listeners;
      var listenerArray = listeners[type];

      if (listenerArray !== undefined) {
        if (listener) {
          var index = listenerArray.indexOf(listener);

          if (index !== -1) {
            listenerArray.splice(index, 1);
          }
        } else {
          this._listeners[type] = [];
        }
      }
    }
  }, {
    key: "initConfig",
    value: function initConfig(config) {}
    /**
     * 地图添加图层时调用,由子类实现
     * @param {Map} map - PigeonGL.Map实例
     */

  }, {
    key: "onAdd",
    value: function onAdd(map) {
      this.pigeonMap = map;
    }
    /**
     * 地图每帧调用该函数
     */

  }, {
    key: "update",
    value: function update() {}
    /**
     * 移除图层时调用
     */

  }, {
    key: "onRemove",
    value: function onRemove() {
      if (this._listeners) {
        this._listeners = [];
      }
    }
    /**
     * 添加图层
     * @param {Layer} layer - 图层
     */

  }, {
    key: "addLayer",
    value: function addLayer(layer) {
      layer.id = ++this._layerid;
      this.layers.push(layer);
      layer.onAdd(this); //初始化layer
    }
    /**
     * 删除图层
     * @param {Layer} layer - 图层
     */

  }, {
    key: "removeLayer",
    value: function removeLayer(layer) {
      for (var x in this.layers) {
        if (this.layers[x].id == layer.id) {
          this.layers[x].onRemove();
          this.layers.splice(x, 1);
          return;
        }
      }
    }
    /**
     * 获取图层通过id
     */

  }, {
    key: "getLayerById",
    value: function getLayerById(id) {
      for (var i = 0; i < this.layers.length; i++) {
        if (this.layer.id === id) return layer;
      }
    }
  }]);

  return Base;
}();

/* harmony default export */ var src_Base = (Base_Base);
// EXTERNAL MODULE: external "gl-matrix"
var external_gl_matrix_ = __webpack_require__(6);

// CONCATENATED MODULE: ./src/View/Viewport.js



/**
 * @class
 */

var Viewport_ViewPort = /*#__PURE__*/function () {
  function ViewPort(config) {
    classCallCheck_default()(this, ViewPort);

    this.miniGL = config.miniGL;
    this.gl = this.miniGL.gl;
    this.config = Object.assign({}, config.config);
    this.transform = external_gl_matrix_["mat3"].create();
  }
  /**
   * @param  {} x=0
   * @param  {} y=0
   */


  createClass_default()(ViewPort, [{
    key: "convertScreenToClip",
    value: function convertScreenToClip() {
      var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      return {
        x: x * 2 / this.width - 1,
        y: 1 - y * 2 / this.height
      };
    }
    /**
     * @param  {} x=0
     * @param  {} y=0
     */

  }, {
    key: "convertClipToScreen",
    value: function convertClipToScreen() {
      var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      return {
        x: (x + 1) * this.width / 2,
        y: (1 - y) * this.height / 2
      };
    }
    /**
     * 重新布局
     */

  }, {
    key: "resize",
    value: function resize() {
      var width = this.config.width || this.miniGL.container.clientWidth;
      var height = this.config.height || this.miniGL.container.clientHeight;
      this.miniGL.canvas.width = width;
      this.miniGL.canvas.height = height;
      this.gl.viewport(0, 0, width, height);
      this.width = width;
      this.height = height;
      this.ratio = this.width / this.height; // 计算好坐标转换矩阵

      this.transform = external_gl_matrix_["mat3"].create();
      external_gl_matrix_["mat3"].scale(this.transform, this.transform, [2 / this.width, -2 / this.height]); // 这个矩阵工具真鸡儿难用，最讨厌内部偷偷帮我做转换的，我只想要个纯工具库！
      // gl-matrix会以初次进行换算的坐标系为基准空间，来进行换算，一般人思考都会以转换后的坐标系为基准，这里就得转换思维

      external_gl_matrix_["mat3"].translate(this.transform, this.transform, [-this.width / 2, -this.height / 2]);
      this.invertTransform = external_gl_matrix_["mat3"].create();
      external_gl_matrix_["mat3"].invert(this.invertTransform, this.transform);
    }
  }]);

  return ViewPort;
}();

/* harmony default export */ var Viewport = (Viewport_ViewPort);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(7);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// CONCATENATED MODULE: ./src/Shaders/mesh.js
/* harmony default export */ var mesh = ({
  vertexShader: "\n\tprecision lowp float;\n\tattribute vec2 position;\n\tattribute vec4 color;\n\tvarying vec4 vColor;\n\tuniform mat3 transform;\n\tuniform float z;\n\tvoid main()\n\t{\n\t\tvColor = color;\n\t\tvec3 mPosition = transform * vec3(position,1.);\n\t\tgl_Position = vec4(mPosition.xy,z,1.0);\n\t\t\n\t}\n\t",
  fragmentShader: "\n\tprecision lowp float;\n\tvarying vec4 vColor;\n\tvoid main()\n\t{\n\t\tgl_FragColor = vColor;\n\t}\n\t"
});
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/typeof.js
var helpers_typeof = __webpack_require__(8);
var typeof_default = /*#__PURE__*/__webpack_require__.n(helpers_typeof);

// CONCATENATED MODULE: ./src/Meshs/Base.js





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Base 基类方便继承以实现其他类型的情况
 */
var Meshs_Base_Base = /*#__PURE__*/function () {
  function Base() {
    classCallCheck_default()(this, Base);

    this.vSize = 2;
    this.offset = 0;
    this.depthMask = true;
    this.depthTest = true;
    this.transparent = true;
    this.uniformsNeedUpdate = true;
    this.uniformLocations = {};
  }

  createClass_default()(Base, [{
    key: "init",
    value: function init() {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.config = Object.assign({
        type: "ok"
      }, config);
      this.buffers = [];
      this.buffersSize = []; // 初始化数据数组

      this.indices = [];
      this.vertex = [];

      if (config.shaders) {
        this.shaders = _objectSpread(_objectSpread({}, this.shaders), config.shaders);
      }

      if (config.miniGL) {
        config.miniGL.canvas.add(this);
      }
    }
  }, {
    key: "setData",
    value: function setData(data) {
      this.vertex = data;
      this.setBufferData(data, "position", 2);
    }
  }, {
    key: "setBufferData",
    value: function setBufferData(data, key, size) {
      this.gl.deleteBuffer(this.buffers[key]);
      this.setBufferData(data, key, size);
    }
  }, {
    key: "setUniformData",
    value: function setUniformData() {
      if (!this.uniformData || !this.uniformsNeedUpdate) return;

      for (var key in this.uniformData) {
        var item = this.uniformData[key];
        this.setUniform(key, item);
      } // this.uniformsNeedUpdate = false;

    }
  }, {
    key: "setUniform",
    value: function setUniform(key, item) {
      var gl = this.gl;
      var value = item.value,
          type = item.type,
          texture = item.texture; // 矩阵

      if (type.indexOf("uniformMatrix") > -1) {
        gl[type](this.getUniformLocation(key), false, value); // 图形数据
      } else if (texture) {
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, item.texture);
        gl[type](this.getUniformLocation(key), value); // 行列数据
      } else if (type.slice(-1) === "v" || typeof_default()(value) !== 'object') {
        gl[type](this.getUniformLocation(key), value);
      } else {
        gl[type](this.getUniformLocation(key), value[0] || value, value[1], value[2], value[3]);
      }

      this.uniformData[key] = item;
    }
    /**
     * 新的缓存数据
     * @param  {} data
     * @param  {} name
     */

  }, {
    key: "setBufferData",
    value: function setBufferData(data, name, size) {
      // 没有的话初始化复用一个
      if (!this.buffers[name]) {
        this.buffers[name] = this.gl.createBuffer();
      }

      this.buffersSize[name] = size; // 顶点buffer

      this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.buffers[name]);
      this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(data), this.gl.STATIC_DRAW);
    }
  }, {
    key: "setIndices",
    value: function setIndices(indices) {
      this.indices = indices; // 顶点buffer

      this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.indicesPointer);
      this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), this.gl.STATIC_DRAW);
    } // 生成shader程序

  }, {
    key: "initShader",
    value: function initShader() {
      var gl = this.gl; // 加载shader

      var vertexShaderObject = this.loadShader(this.shaders.vertex, this.gl.VERTEX_SHADER);
      var fragmentShaderObject = this.loadShader(this.shaders.fragment, this.gl.FRAGMENT_SHADER); // 创建程序

      var shaderPorgram = this.gl.createProgram();
      this.gl.attachShader(shaderPorgram, vertexShaderObject);
      this.gl.attachShader(shaderPorgram, fragmentShaderObject);
      this.gl.linkProgram(shaderPorgram);

      if (!this.gl.getProgramParameter(shaderPorgram, this.gl.LINK_STATUS)) {
        console.error('shaderProgram Error: ', gl.getError(), gl.getProgramParameter(shaderPorgram, 35715), gl.getProgramInfoLog(shaderPorgram).trim());
        console.error('fragmentLog:', gl.getShaderInfoLog(vertexShaderObject).trim(), this.addLineNumbers(gl.getShaderSource(vertexShaderObject)));
        console.error('vertexLog:', gl.getShaderInfoLog(fragmentShaderObject).trim(), this.addLineNumbers(gl.getShaderSource(fragmentShaderObject)));
        return;
      }

      this.shaderPorgram = shaderPorgram;
    }
  }, {
    key: "addLineNumbers",
    value: function addLineNumbers(string) {
      var lines = string.split('\n');

      for (var i = 0; i < lines.length; i++) {
        lines[i] = i + 1 + ': ' + lines[i];
      }

      return lines.join('\n');
    } // 获取顶点变量地址

  }, {
    key: "getAttribLocation",
    value: function getAttribLocation(name) {
      return this.gl.getAttribLocation(this.shaderPorgram, name);
    } // 获取uniform变量地址

  }, {
    key: "getUniformLocation",
    value: function getUniformLocation(name) {
      // 缓存会每秒快20ms左右，节省一帧的时机
      if (this.uniformLocations[name]) return this.uniformLocations[name];
      this.uniformLocations[name] = this.gl.getUniformLocation(this.shaderPorgram, name);
      return this.uniformLocations[name];
    } // 加载shader

  }, {
    key: "loadShader",
    value: function loadShader(shaderStr, type) {
      var shader = this.gl.createShader(type);
      this.gl.shaderSource(shader, shaderStr);
      this.gl.compileShader(shader);
      return shader;
    }
  }, {
    key: "render",
    value: function render() {
      // 2D 只需要两个坐标轴标识位置
      var vLen = Math.ceil(this.vertex.length / this.vSize); //几个点

      var offset = 0; // 从数据第几位开始偏移

      var normalize = false;

      for (var key in this.buffers) {
        var bufferData = this.buffers[key];
        var bufferPosition = this.getAttribLocation(key); // 分别绑定数据到shader程序中

        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, bufferData);
        this.gl.vertexAttribPointer(bufferPosition, this.buffersSize[key], this.gl.FLOAT, normalize, 0, offset);
        this.gl.enableVertexAttribArray(bufferPosition);
      } // 加载shader程序


      this.gl.useProgram(this.shaderPorgram);
      this.setUniformData(); // 渲染

      if (this.vertex.length) this.gl.drawArrays(this.gl[this.drawType], this.offset, vLen);
    }
  }, {
    key: "onAdd",
    value: function onAdd(miniGL) {
      this.miniGL = miniGL; // 获取顶点数据内存里的指针

      this.gl = miniGL.gl;
      this.indicesPointer = this.gl.createBuffer();
      this.initShader();
    } // 销毁shader

  }, {
    key: "destroy",
    value: function destroy() {
      var _this = this;

      var shaders = this.gl.getAttachedShaders(this.shaderPorgram);
      shaders.forEach(function (item) {
        _this.gl.deleteShader(item);
      });
      this.gl.deleteBuffer(this.indicesPointer);
      this.gl.deleteProgram(this.shaderPorgram);
      this.dispose();
    } //释放buffer空间

  }, {
    key: "dispose",
    value: function dispose() {
      for (var key in this.buffers) {
        this.gl.deleteBuffer(this.buffers[key]);
      }

      for (var _key in this.uniformData) {
        if (this.uniformData[_key].texture) {
          this.gl.deleteTexture(this.uniformData[_key].texture);
        }
      }

      this.buffers = {};
    }
  }]);

  return Base;
}();

/* harmony default export */ var Meshs_Base = (Meshs_Base_Base);
// CONCATENATED MODULE: ./src/Meshs/Mesh.js







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var Mesh_Mesh = /*#__PURE__*/function (_Base) {
  inherits_default()(Mesh, _Base);

  var _super = _createSuper(Mesh);

  //array.BYTES_PER_ELEMENT * indicesEachLength
  function Mesh() {
    var _this;

    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      wireFrame: false
    };

    classCallCheck_default()(this, Mesh);

    _this = _super.call(this, config);
    _this.drawType = "TRIANGLES";
    _this.offset = 0;
    _this.shaders = {
      vertex: mesh.vertexShader,
      fragment: mesh.fragmentShader
    };
    _this.uniformData = {
      z: {
        value: config.z || 1,
        type: "uniform1f"
      }
    };

    _this.init(config);

    _this.vSize = 2;
    return _this;
  }

  createClass_default()(Mesh, [{
    key: "setMap",
    value: function setMap(src) {
      var _this2 = this;

      return loadTexture(this.gl, src).then(function (texture) {
        _this2.uniformData['map'] = {
          type: "uniform1i",
          //image
          value: 0,
          //0号纹理传递
          texture: texture
        };
        _this2.uniformsNeedUpdate = true;
      });
    }
  }, {
    key: "setData",
    value: function setData(data, indices) {
      var viewport = this.miniGL.viewport;
      this.dispose();
      this.uniformData.transform = {
        value: viewport.transform,
        type: "uniformMatrix3fv"
      };
      var points = [];
      var colors = [];
      this.data = data;
      data.forEach(function (item) {
        var coord = [item.position.x, item.position.y];
        var color = item.color || [1, 1, 0, 1];
        colors.push.apply(colors, toConsumableArray_default()(color));
        points.push.apply(points, coord);
      });
      this.vertex = points;
      this.setBufferData(points, "position", 2);
      this.setBufferData(colors, "color", 4);
      this.setIndices(indices);
    }
  }, {
    key: "setBufferDatas",
    value: function setBufferDatas(_ref) {
      var position = _ref.position,
          color = _ref.color,
          indices = _ref.indices,
          uvs = _ref.uvs;
      var viewport = this.miniGL.viewport;
      this.dispose();
      this.uniformData.transform = {
        value: viewport.transform,
        type: "uniformMatrix3fv"
      };
      this.vertex = position;
      this.setBufferData(position, "position", 2);
      this.setBufferData(color, "color", 4);
      this.setBufferData(uvs, "uv", 2);
      this.setIndices(indices);
    }
  }, {
    key: "setIndices",
    value: function setIndices(input) {
      var indices = []; // 支持显示网格线

      if (this.config.wireFrame && this.drawType === "TRIANGLES") {
        for (var i = 0; i < input.length - 2; i += 3) {
          indices.push(input[i], input[i + 1], input[i + 1], input[i + 2], input[i + 2], input[i]);
        }
      } else {
        indices = input;
      }

      this.indices = indices; // 顶点buffer

      this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.indicesPointer);
      this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), this.gl.STATIC_DRAW);
    }
  }, {
    key: "render",
    value: function render() {
      // 2D 只需要两个坐标轴标识位置
      var offset = 0; // 从数据第几位开始偏移

      var normalize = false; // 分别绑定数据到shader程序中

      for (var key in this.buffers) {
        var bufferData = this.buffers[key];
        var bufferPosition = this.getAttribLocation(key); // 分别绑定数据到shader程序中

        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, bufferData);
        this.gl.vertexAttribPointer(bufferPosition, this.buffersSize[key], this.gl.FLOAT, normalize, 0, offset);
        this.gl.enableVertexAttribArray(bufferPosition);
      } // 使用顶点数据


      this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.indicesPointer); // 加载shader程序

      this.gl.useProgram(this.shaderPorgram);
      this.setUniformData(); // 渲染

      if (this.indices.length) {
        var drawType = this.config.wireFrame ? "LINES" : this.gl[this.drawType]; // offset必须乘以类型数组的长度，意味着要从内存中数据的对应字节数开始算 根据类型乘对应的BYTES_PER_ELEMENT

        this.gl.drawElements(drawType, this.indices.length, this.gl.UNSIGNED_SHORT, this.offset);
      }
    }
  }]);

  return Mesh;
}(Meshs_Base);

/* harmony default export */ var Meshs_Mesh = (Mesh_Mesh);
// CONCATENATED MODULE: ./src/Shaders/point.js
/* harmony default export */ var point = ({
  vertexShader: function vertexShader(config) {
    return "\n\t\tprecision mediump float;\n\t\tattribute vec2 position;\n\t\tattribute vec4 color;\n\t\tattribute float size;\n\t\tattribute float initTime;\n\t\tuniform float z;\n\t\tuniform mat3 transform;\n\t\tvarying vec4 vColor;\n\t\tuniform float t;\n\t\tvarying float vTime;\n\t\t\n\t\tvoid main()\n\t\t{\n\t\t\tvColor = color;\n\t\t\tgl_PointSize = size;\n\t\t\tvec3 mPosition = transform * vec3(position,1.);\n\t\t\tgl_Position = vec4(mPosition.xy,z,1.);\n\t\t\tvTime = initTime;\n\t\t}\n\t\t";
  },
  fragmentShader: function fragmentShader(_ref) {
    var isRound = _ref.isRound,
        map = _ref.map,
        isGradual = _ref.isGradual;
    console.log(isRound);
    return "\n\t\tprecision mediump float;\n\t\tuniform float t;\n\t\tuniform float antialias;\n\t\tuniform sampler2D map;\n\t\tvarying float vTime;\n\t\tvarying vec4 vColor;\n\t\tvoid main()\n\t\t{\n\t\t\tfloat distance = distance(gl_PointCoord, vec2(0.5, 0.5));\n\t\t".concat(isRound ? "\n\t\t\tif (distance <= 0.5){" : '', "\n\t\t\t").concat(map ? "\n\t\t\t\tvec4 texelColor = texture2D( map, gl_PointCoord ); \n\t\t\t\tgl_FragColor = texelColor;\n\t\t\t\t".concat(isGradual ? "\n\t\t\t\tgl_FragColor.w *= sin(t+vTime)*0.75/2. + 1.-0.75/2." : '', ";\n\t\t\t\tif(texelColor.w<=0.01){\n\t\t\t\t\tdiscard;\n\t\t\t\t}\n\t\t\t") : "\n\t\t\t\tgl_FragColor = vColor;\n\t\t\t\t".concat(isGradual ? "\n\t\t\t\tgl_FragColor.w = 1. - distance*2.;\n\t\t\t\tgl_FragColor.w *= sin(t+vTime)*0.75/2. + 1.-0.75/2. ;" : '', "\n\t\t\t"), "\n\t\t").concat(isRound ? "\n\t\t\t\tfloat smoothSideRatio = smoothstep(0.,antialias,(0.5-distance));\n\t\t\t\tgl_FragColor.w *= smoothSideRatio;\n\t\t\t}else{\n\t\t\t\tdiscard;\n\t\t\t}\n\t\t" : '', "\n\t\t}\n\t\t");
  }
});
// CONCATENATED MODULE: ./src/Meshs/Point.js







function Point_createSuper(Derived) { var hasNativeReflectConstruct = Point_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function Point_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var Point_Point = /*#__PURE__*/function (_Base) {
  inherits_default()(Point, _Base);

  var _super = Point_createSuper(Point);

  function Point(config) {
    var _this;

    classCallCheck_default()(this, Point);

    config = Object.assign({
      isRound: true,
      initTime: false
    }, config);
    _this = _super.call(this, config);
    _this.drawType = "POINTS";
    _this.vertex = [];
    _this.offset = 0;
    _this.vSize = 2;
    _this.shaders = {
      vertex: config.vertexShader || point.vertexShader(config),
      fragment: config.fragmentShader || point.fragmentShader(config)
    };
    _this.uniformData = {
      z: {
        value: 1,
        type: "uniform1f"
      },
      t: {
        value: 1,
        type: "uniform1f"
      },
      antialias: {
        value: 0.1,
        type: "uniform1f"
      }
    };

    _this.init(config);

    return _this;
  }

  createClass_default()(Point, [{
    key: "setData",
    value: function setData(data) {
      var _this2 = this;

      var viewport = this.miniGL.viewport;
      this.dispose(); // 设置转换矩阵

      this.uniformData.transform = {
        value: viewport.transform,
        type: "uniformMatrix3fv"
      };
      var points = [];
      var colors = [];
      var size = [];
      var vTime = [];
      this.data = data;
      data.forEach(function (item) {
        points.push(item.position.x, item.position.y);
        colors.push.apply(colors, toConsumableArray_default()(item.color || [1, 0, 0, 1]));
        size.push(item.size || 10);
        vTime.push(item.initTime || _this2.config.initTime || 2 * Math.random() * Math.PI);
      });
      this.vertex = points;
      this.setBufferData(points, "position", 2);
      this.setBufferData(colors, "color", 4);
      this.setBufferData(size, "size", 1);
      this.setBufferData(vTime, "initTime", 1);
    }
  }, {
    key: "setBufferDatas",
    value: function setBufferDatas(_ref) {
      var position = _ref.position,
          color = _ref.color,
          size = _ref.size,
          initTime = _ref.initTime;
      var viewport = this.miniGL.viewport;
      this.dispose();
      this.uniformData.transform = {
        value: viewport.transform,
        type: "uniformMatrix3fv"
      };
      this.vertex = position;
      this.setBufferData(position, "position", 2);
      this.setBufferData(color, "color", 4);
      this.setBufferData(size, "size", 1);

      if (initTime) {
        this.setBufferData(initTime, 'initTime', 1);
      }
    }
  }]);

  return Point;
}(Meshs_Base);

/* harmony default export */ var Meshs_Point = (Point_Point);
// CONCATENATED MODULE: ./src/Shaders/line.js
/* harmony default export */ var line = ({
  // shader中进行坐标转换会不会快？CPU只会调用一次，GPU每帧都要重复去运算，2d情况下没有相机，
  // 没有坐标因相机而变化的情况，所以不用再shader中运算，可以减少cpu的调用率
  // 发现还是会大规模常常对坐标进行替换，那还是放进shader中运算吧
  vertexShader: "\n\tprecision mediump float;\n\tattribute vec2 position;\n\tattribute vec4 color;\n\tuniform mat3 transform;\n\tuniform float z;\n\tvarying vec4 vColor;\n\tvoid main()\n\t{\n\t\tvColor = color;\n\t\tvec3 mPosition = transform * vec3(position,1.);\n\t\tgl_Position = vec4(mPosition.xy,z,1.);\n\t}\n\t",
  fragmentShader: "\n\tprecision mediump float;\n\tvarying vec4 vColor;\n\tvoid main()\n\t{\n\t\tgl_FragColor = vColor;\n\t}\n\t"
});
// CONCATENATED MODULE: ./src/Meshs/Line.js







function Line_createSuper(Derived) { var hasNativeReflectConstruct = Line_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function Line_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var Line_Line = /*#__PURE__*/function (_Base) {
  inherits_default()(Line, _Base);

  var _super = Line_createSuper(Line);

  function Line(config) {
    var _this;

    classCallCheck_default()(this, Line);

    config = Object.assign({
      z: 1
    }, config);
    _this = _super.call(this, config);
    _this.drawType = "LINE_STRIP";
    _this.shaders = {
      vertex: line.vertexShader,
      fragment: line.fragmentShader
    };
    _this.offset = 0;
    _this.uniformData = {
      z: {
        value: Math.min(config.z, 1),
        type: "uniform1f"
      }
    };

    _this.init(config);

    return _this;
  }

  createClass_default()(Line, [{
    key: "setData",
    value: function setData(data) {
      var viewport = this.miniGL.viewport;
      this.dispose();
      var points = [];
      this.uniformData.transform = {
        value: viewport.transform,
        type: "uniformMatrix3fv"
      };
      this.data = data;
      var colors = [];
      data.forEach(function (item) {
        points.push(item.position.x, item.position.y);
        colors.push.apply(colors, toConsumableArray_default()(item.color || [1, 1, 0, 1]));
      });
      this.vertex = points;
      this.setBufferData(points, "position", 2);
      this.setBufferData(colors, "color", 4);
    }
  }]);

  return Line;
}(Meshs_Base);

/* harmony default export */ var Meshs_Line = (Line_Line);
// CONCATENATED MODULE: ./src/Shaders/widthLine.js
/* harmony default export */ var widthLine = ({
  // 先求连接线然后再求垂线
  // 求出等比放大的值
  vertexShader: "\n\tprecision lowp float;\n\tattribute vec2 now;\n\tattribute vec2 pre;\n\tattribute vec2 next;\n\tattribute float side;\n\tuniform float width;\n\tuniform float aspect;\n\tuniform mat3 transform;\n\tuniform float offset;\n\tvarying float vSide;\n\tvoid main()\n\t{\n\t\tvSide = side;\n\n\t\t// \u5148\u8F6C\u6362\u5750\u6807\u7CFB\n\t\tvec2 mNow = (transform*vec3(now,1.)).xy;\n\t\tvec2 mNext = (transform*vec3(next,1.)).xy;\n\t\tvec2 mPre = (transform*vec3(pre,1.)).xy;\n\t\tvec2 _now = vec2(mNow);\n\t\tvec2 _next = vec2(mNext);\n\t\tvec2 _pre =  vec2(mPre);\n\t\n\t\t// \u5148\u628A\u672C\u5750\u6807\u7CFB\u7684\u5750\u6807\u653E\u5927\uFF0C\u548C\u771F\u5B9E\u7684\u5916\u754C\u5750\u6807\u4E00\u6837,\u8FD9\u6837\u6C42\u51FA\u6765\u7684\u76F8\u5BF9\u5411\u91CF\u662F\u51C6\u786E\u7684\uFF0C\u5982\u679C\u5728\u540E\u9762\u4E4B\u95F4\u5BF9normal\u8FDB\u884C\u53D8\u5316\uFF0C\u5C31\u4F1A\u5F97\u51FA\u9519\u8BEF\u7684\u7ED3\u679C\n\t\t_now.x *= aspect;\n\t\t_next.x *= aspect;\n\t\t_pre.x *= aspect;\n\t\t\n\t\tvec2 point0_1 = normalize(_now - _pre);\n\t\tvec2 point2_1 = normalize(_next - _now);\n\t\tvec2 point2_1_0v = normalize(point2_1 + point0_1);\n\t\t\n\t\tvec2 normal = vec2( -point2_1_0v.y , point2_1_0v.x );\n\t\tvec2 offsets = offset*normal;\n\n\t\t//\u8FD9\u4E2A\u7B97\u6CD5\u4E0B\u5148\u653E\u5927,\u6C42\u51FA\u7684Normal\u6BD4\u4F8B\u5728\u653E\u5927\u7684\u5750\u6807\u7CFB\u4E0B\u662F\u5BF9\u7684\uFF0C\u6839\u636E\u8FD9\u4E2Anormal\u6C42\u51FA\u653E\u5927\u7684\u6BD4\u4F8B\n\t\tfloat ratio = sqrt(1.0 - pow(dot(normal,point0_1),2.0));\n\t\tvec2 dir = normal * width/ratio * .5 * side + offsets;\n\n\t\t// \u5F97\u51FA\u7684x\u5750\u6807\u4F1A\u88AB\u653E\u5927\uFF0C\u8FD9\u91CC\u8981\u9664\u6389,\u8BB0\u5F97\u8981\u7528\u8F6C\u6362\u540E\u5750\u6807\u8FDB\u884C\u52A0\u51CF\n\t\tgl_Position = vec4(mNow.x + dir.x/aspect,mNow.y+dir.y , 1., 1.);\n\t}\n\t",
  fragmentShader: "\n\tprecision lowp float;\n\tuniform vec4 color;\n\tvarying float vSide;\n\tvoid main()\n\t{\n\t\tfloat smoothSideRatio = max(0.1,smoothstep(0.,0.4,(1. - abs(vSide))));\n\t\tgl_FragColor = color;\n\t\tgl_FragColor.w = smoothSideRatio;\n\t}\n\t"
});
// CONCATENATED MODULE: ./src/Meshs/WidthLine.js







function WidthLine_createSuper(Derived) { var hasNativeReflectConstruct = WidthLine_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function WidthLine_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var WidthLine_WidthLine = /*#__PURE__*/function (_Base) {
  inherits_default()(WidthLine, _Base);

  var _super = WidthLine_createSuper(WidthLine);

  //"TRIANGLE_STRIP";
  function WidthLine(config) {
    var _this;

    classCallCheck_default()(this, WidthLine);

    _this = _super.call(this);
    _this.drawType = "TRIANGLES";
    _this.shaders = {
      vertex: widthLine.vertexShader,
      fragment: widthLine.fragmentShader
    };
    _this.offset = 0;
    config = Object.assign({
      width: 20,
      z: 1,
      offset: 0
    }, config);
    _this.uniformData = {
      z: {
        value: config.z || 1,
        type: "uniform1f"
      }
    };

    _this.init(config);

    return _this;
  }

  createClass_default()(WidthLine, [{
    key: "setData",
    value: function setData(data) {
      var viewport = this.miniGL.viewport;
      if (!data.length && data.length < 2) return console.warn("need input data.length >= 2");
      this.uniformData.transform = {
        value: viewport.transform,
        type: "uniformMatrix3fv"
      };
      this.uniformData.aspect = {
        value: viewport.ratio,
        type: "uniform1f"
      };
      this.uniformData.color = {
        value: this.config.color || [1, 0, 1, 1],
        type: "uniform4fv"
      };
      this.uniformData.width = {
        value: 2 * this.config.width / this.miniGL.viewport.height,
        type: "uniform1f"
      };
      this.uniformData.offset = {
        value: 2 * this.config.offset / this.miniGL.viewport.height,
        type: "uniform1f"
      };
      this.data = data;
      var points = [];
      data.forEach(function (item) {
        points.push(item.position.x, item.position.y);
      }); // 生产双倍点for两个边

      var res = this.calcSidePoints(points);
      this.setBufferData(res.nowData, "now", 2);
      this.setBufferData(res.preData, "pre", 2);
      this.setBufferData(res.nextData, "next", 2);
      this.setBufferData(res.side, "side", 1); // 生成顶点

      var indices = [];
      var indicesLength = res.nowData.length / 2; // TRIANGLES情况

      for (var i = 0; i < indicesLength - 2; i += 2) {
        indices.push(i);
        indices.push(i + 1);
        indices.push(i + 2);
        indices.push(i + 2);
        indices.push(i + 1);
        indices.push(i + 3);
      } // Strip退化方案太反人类，不hack 了
      // for (let i = 0; i < indicesLength; i++) {
      // 	//012 213 233 336 366 667 678
      // 	// 4 =>3 5=>6 //退化过程
      // 	// data[length - 1], 
      // 	indices.push(i);
      // }


      this.setIndices(indices);
      this.res = res;
    }
  }, {
    key: "calcSidePoints",
    value: function calcSidePoints() {
      var _ref;

      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var length = data.length;
      var side = [];
      var nextData = [];
      var preData = [];
      var nowData = []; // 生产双倍点for两个边

      for (var i = 0; i < length; i += 2) {
        side.push(1, -1);
        nowData.push(data[i], data[i + 1], data[i], data[i + 1]);
      }

      var next = [2 * data[length - 2] - data[length - 4], 2 * data[length - 1] - data[length - 3]];
      nextData = [].concat(nowData, next, next);
      nextData.splice(0, 4);
      var pre = [2 * data[0] - data[2], 2 * data[1] - data[3]];
      preData = [].concat(pre, pre, nowData);
      return _ref = {
        nowData: nowData,
        preData: preData
      }, defineProperty_default()(_ref, "nowData", nowData), defineProperty_default()(_ref, "side", side), defineProperty_default()(_ref, "nextData", nextData), _ref;
    }
  }, {
    key: "render",
    value: function render() {
      // 2D 只需要两个坐标轴标识位置
      var offset = 0; // 从数据第几位开始偏移

      var normalize = false;

      for (var key in this.buffers) {
        var bufferData = this.buffers[key];
        var bufferPosition = this.getAttribLocation(key); // 分别绑定数据到shader程序中

        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, bufferData);
        this.gl.vertexAttribPointer(bufferPosition, this.buffersSize[key], this.gl.FLOAT, normalize, 0, offset); //todo:webgl2.0 实例数组能减少同样形状但渲染不同的高性能方案

        this.gl.enableVertexAttribArray(bufferPosition);
      } // 使用顶点数据


      this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.indicesPointer); // 加载shader程序

      this.gl.useProgram(this.shaderPorgram);
      this.setUniformData(); // 渲染

      if (this.indices.length) this.gl.drawElements(this.gl[this.drawType], this.indices.length, this.gl.UNSIGNED_SHORT, this.offset);
    }
  }]);

  return WidthLine;
}(Meshs_Base);

/* harmony default export */ var Meshs_WidthLine = (WidthLine_WidthLine);
// CONCATENATED MODULE: ./src/View/Canvas.js






/**
 * @class
 */

var Canvas_Canvas = /*#__PURE__*/function () {
  function Canvas(config) {
    classCallCheck_default()(this, Canvas);

    this.index = 0;
    this.meshs = {};
    this.miniGL = config.miniGL;
    this.gl = this.miniGL.gl; // 基础渲染以下类，其他形状让让用户自己new
    // 牺牲一些性能，渲染多次drawElements来避免通过退化三角形合并形状，导致的事件处理困难（需要分层处理合并的图层，然后按照像素去检测，比较恶心）

    this.mesh = new Meshs_Mesh(config.meshConfig);
    this.point = new Meshs_Point(config.pointConfig);
    this.line = new Meshs_Line(config.lineConfig);
    this.widthLine = new Meshs_WidthLine(config.widthLineConfig);
    this.add(this.mesh);
    this.add(this.point);
    this.add(this.line);
    this.add(this.widthLine);
  }

  createClass_default()(Canvas, [{
    key: "dispose",
    value: function dispose() {
      for (var x in this.meshs) {
        this.remove(x);
      }

      this.meshs = [];
    }
  }, {
    key: "toDataUrl",
    value: function toDataUrl() {
      return this.gl.canvas.toDataUrl();
    }
  }, {
    key: "update",
    value: function update() {
      var _this = this;

      var delta = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 16;
      this.render(delta);
      var time = new Date().getTime();
      requestAnimationFrame(function () {
        var endTime = new Date().getTime();

        _this.update(endTime - time);
      });
    }
    /**
     * @param  {} mesh
     * @param  {} [key]
     * @returns {String} key
     */

  }, {
    key: "add",
    value: function add(mesh, key) {
      key = key ? key : ++this.index;
      this.meshs[key] = mesh;
      mesh.onAdd && mesh.onAdd(this.miniGL);
      return key;
    }
  }, {
    key: "remove",
    value: function remove(key) {
      this.meshs[key].destroy && this.meshs[key].destroy();
      delete this.meshs[key];
    }
  }, {
    key: "render",
    value: function render() {
      var gl = this.gl;
      this.miniGL.fire("beforerender"); // 清空

      gl.clearColor(1.0, 1.0, 1.0, 1.0);
      gl.clearDepth(1.0);
      gl.enable(gl.DEPTH_TEST);
      gl.depthFunc(gl.LEQUAL);
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

      for (var key in this.meshs) {
        var mesh = this.meshs[key]; // 是否支持深度测试

        if (mesh.depthTest) {
          gl.enable(gl.DEPTH_TEST);
        } else {
          gl.disable(gl.DEPTH_TEST);
        } // 是否支持透明混色


        if (mesh.transparent) {
          gl.enable(gl.BLEND);
          gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
        } else {
          gl.disable(gl.BLEND);
        } // 写入深度缓冲


        gl.depthMask(mesh.depthMask);
        mesh.render();
      }
    }
  }]);

  return Canvas;
}();

/* harmony default export */ var View_Canvas = (Canvas_Canvas);
// CONCATENATED MODULE: ./src/Shaders/flyline.js
/* harmony default export */ var flyline = ({
  // shader中进行坐标转换会不会快？CPU只会调用一次，GPU每帧都要重复去运算，2d情况下没有相机，
  // 没有坐标因相机而变化的情况，所以不用再shader中运算，可以减少cpu的调用率
  vertexShader: "\n\tprecision mediump float;\n\tattribute vec4 position;\n\tattribute float number;\n\tuniform vec4 startColor;\n\tuniform vec4 endColor;\n\tuniform float length;\n\tuniform float t;\n\tuniform float z;\n\tvarying vec4 vColor;\n\tvoid main()\n\t{\n\t\tgl_Position = vec4(position.xy,z,1.);\n\t\tvColor = endColor - (length + t - number)/length*(endColor - startColor);\n\t}\n\t",
  fragmentShader: "\n\tprecision mediump float;\n\tvarying vec4 vColor;\n\tvoid main()\n\t{\n\t\tif(vColor.w<=0.02){\n\t\t\tdiscard;\n\t\t}\n\t\tgl_FragColor = vColor;\n\t}\n\t"
});
// CONCATENATED MODULE: ./src/Utils/vector.js
function normalize(v) {
  var length = Math.sqrt(v.x * v.x + v.y * v.y);
  return {
    x: v.x / length,
    y: v.y / length
  };
}

function addVector(v0, v1) {
  return {
    x: v0.x + v1.x,
    y: v0.y + v1.y
  };
}

function getVectorLength(v) {
  var length = Math.sqrt(v.x * v.x + v.y * v.y);
  return length;
}

function subVector(v0, v1) {
  return {
    x: v1.x - v0.x,
    y: v1.y - v0.y
  };
}

function multiple(v, t) {
  return {
    x: v.x * t,
    y: v.y * t
  };
}


// CONCATENATED MODULE: ./src/Utils/BezierLine.js




var BezierLine_BezierLine = /*#__PURE__*/function () {
  function BezierLine() {
    classCallCheck_default()(this, BezierLine);
  }

  createClass_default()(BezierLine, [{
    key: "setControl",
    value: function setControl(v0, v1, v2, v3) {
      this.v0 = v0;
      this.v1 = v1;
      this.v2 = v2;
      this.v3 = v3;
    }
  }, {
    key: "setData",
    value: function setData(data) {
      this.data = data;
    }
  }, {
    key: "getPoint",
    value: function getPoint(t) {
      var v0 = this.v0,
          v1 = this.v1,
          v2 = this.v2,
          v3 = this.v3;
      return {
        x: this.cubicBezier(t, v0.x, v1.x, v2.x, v3.x),
        y: this.cubicBezier(t, v0.y, v1.y, v2.y, v3.y)
      };
    }
  }, {
    key: "cubicBezier",
    value: function cubicBezier(t, p0, p1, p2, p3) {
      return CubicBezierP0(t, p0) + CubicBezierP1(t, p1) + CubicBezierP2(t, p2) + CubicBezierP3(t, p3);
    }
  }, {
    key: "getSpacedPoints",
    value: function getSpacedPoints(n) {
      var points = [];
      this.lengths = this.getLengths(n); // 缓存起来

      for (var i = 0; i <= n; i++) {
        var t = this.getUtoTmapping(i / n);
        points.push(this.getPoint(t));
      }

      return points;
    }
  }, {
    key: "getLengths",
    value: function getLengths() {
      var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;
      var length = 0;
      var lengths = [0];

      for (var i = 1; i <= n; i++) {
        var current = this.getPoint(i / n);
        var last = this.getPoint((i - 1) / n);
        length += getVectorLength(subVector(last, current));
        lengths.push(length);
      }

      return lengths;
    }
  }, {
    key: "getLength",
    value: function getLength(n) {
      var lengths = this.getLengths(n);
      return lengths[lengths.length - 1];
    } // 根据总长度算出一定比例的长度所对应的t值，
    // 这个等距划分的算法不知道为何在贝塞尔中间的部分间距过大不再等距，有空再看下吧

  }, {
    key: "getUtoTmapping",
    value: function getUtoTmapping(u) {
      var lengths = this.lengths;
      var length = lengths[lengths.length - 1];
      var targetLength = u * length;
      var nextIndex,
          nowIndex = 0;
      lengths.find(function (item, index) {
        if (item >= targetLength) {
          nextIndex = index;
          return true;
        } else {
          nowIndex = index;
          return false;
        }
      });
      var restRatio = u === 0 ? 0 : (targetLength - lengths[nowIndex]) / (lengths[nextIndex] - lengths[nowIndex]);
      var t = (nowIndex + Math.max(restRatio, 0)) / (this.lengths.length - 1);
      return t;
    }
  }]);

  return BezierLine;
}();

function CubicBezierP0(t, p) {
  var k = 1 - t;
  return k * k * k * p;
}

function CubicBezierP1(t, p) {
  var k = 1 - t;
  return 3 * k * k * t * p;
}

function CubicBezierP2(t, p) {
  return 3 * (1 - t) * t * t * p;
}

function CubicBezierP3(t, p) {
  return t * t * t * p;
}

/* harmony default export */ var Utils_BezierLine = (BezierLine_BezierLine);
// CONCATENATED MODULE: ./src/Meshs/FlyLine.js






function FlyLine_createSuper(Derived) { var hasNativeReflectConstruct = FlyLine_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function FlyLine_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var FlyLine_Line = /*#__PURE__*/function (_Base) {
  inherits_default()(Line, _Base);

  var _super = FlyLine_createSuper(Line);

  function Line(config) {
    var _this;

    classCallCheck_default()(this, Line);

    config = Object.assign({
      z: 0.1,
      length: 50,
      lineHeight: 0.2,
      speed: 1,
      smoothNumber: 1
    }, config);
    _this = _super.call(this, config);
    _this.drawType = "LINE_STRIP";
    _this.shaders = {
      vertex: flyline.vertexShader,
      fragment: flyline.fragmentShader
    };
    _this.offset = 0;
    _this.depthMask = false;

    _this.init(config);

    _this.bezierLine = new Utils_BezierLine();
    _this.uniformData = {
      t: {
        value: 0,
        type: "uniform1f"
      },
      length: {
        value: config.length,
        type: "uniform1f"
      },
      startColor: {
        value: config.startColor || [1, 0, 0, 0],
        type: "uniform4fv"
      },
      endColor: {
        value: config.endColor || [1, 0, 0, 1],
        type: "uniform4fv"
      },
      z: {
        value: _this.config.z,
        type: "uniform1f"
      }
    };
    return _this;
  }

  createClass_default()(Line, [{
    key: "setData",
    value: function setData(data) {
      var viewport = this.miniGL.viewport;
      this.data = data;
      this.data.startXY = viewport.convertScreenToClip(data.start.x, data.start.y);
      this.data.endXY = viewport.convertScreenToClip(data.end.x, data.end.y);
      var midPoint = {
        x: this.data.start.x / 2 + this.data.end.x / 2,
        y: this.data.start.y / 2 + this.data.end.y / 2
      };
      var end_start = {
        x: this.data.end.x - this.data.start.x,
        y: this.data.end.y - this.data.start.y
      };
      var normal = {
        x: end_start.y,
        y: -end_start.x
      };

      if (end_start.x < 0) {
        normal = {
          x: -end_start.y,
          y: end_start.x
        };
      }

      var length = getVectorLength(subVector(data.end, data.start));
      var lineHeight = this.config.lineHeight * length;
      var controlPoint = addVector(multiple(normalize(normal), lineHeight), midPoint);
      this.bezierLine.setControl(this.data.start, this.data.start, controlPoint, this.data.end);
      var allPoints = this.bezierLine.getSpacedPoints(length * this.config.smoothNumber);
      var points = [];
      var numbers = [];
      allPoints.forEach(function (item, index) {
        // 最后再近些坐标转换，避免因为画布缩放导致长度计算失准
        var point = viewport.convertScreenToClip(item.x, item.y);
        points.push(point.x, point.y);
        numbers.push(index);
      });
      this.vertex = points; // this.pointsBufferLength = points.length*Float32Array.BYTES_PER_ELEMENT;

      this.setBufferData(points, "position", 2);
      this.setBufferData(numbers, "number", 1);
    }
  }, {
    key: "start",
    value: function start() {
      this.startFlag = true;
    }
  }, {
    key: "pause",
    value: function pause() {
      this.startFlag = false;
    }
  }, {
    key: "render",
    value: function render() {
      // 2D 只需要两个坐标轴标识位置
      var normalize = false;
      var length = this.vertex.length / 2;
      var _this$uniformData = this.uniformData,
          uniformData = _this$uniformData === void 0 ? {} : _this$uniformData,
          config = this.config;
      if (!this.startFlag) return;
      uniformData.t.value += this.config.speed;

      if (uniformData.t.value >= length) {
        uniformData.t.value = -this.config.length;
      } // 分别绑定数据到shader程序中


      for (var key in this.buffers) {
        var bufferData = this.buffers[key];
        var bufferPosition = this.getAttribLocation(key); // 分别绑定数据到shader程序中

        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, bufferData);
        this.gl.vertexAttribPointer(bufferPosition, this.buffersSize[key], this.gl.FLOAT, normalize, 0, 0);
        this.gl.enableVertexAttribArray(bufferPosition);
      } // 加载shader程序


      this.gl.useProgram(this.shaderPorgram);
      this.setUniformData(); // 渲染

      if (this.vertex.length) {
        //specifying the starting index in the array of vector points. 
        //specifying the number of indices to be rendered.
        var offset = Math.max(uniformData.t.value, 0); //起步时要算出真实的减掉负数的size，到达时，不能超过整个数组长度

        var size = Math.min(uniformData.t.value + config.length - offset, length - offset);
        if (size === 0) return;
        this.gl.drawArrays(this.gl[this.drawType], offset, size);
      }
    }
  }]);

  return Line;
}(Meshs_Base);

/* harmony default export */ var FlyLine = (FlyLine_Line);
// CONCATENATED MODULE: ./src/Shaders/image.js
/* harmony default export */ var Shaders_image = ({
  vertexShader: "\n\tprecision lowp float;\n\tattribute vec2 position;\n\tattribute vec2 uv;\n\tvarying vec4 vColor;\n\tvarying vec2 vUv;\n\tuniform mat3 transform;\n\tuniform float z;\n\tvoid main()\n\t{\n\t\tvUv = uv;\n\t\tvec3 mPosition = transform * vec3(position,1.0);\n\t\tgl_Position = vec4(mPosition.xy,z,1.0);\n\n\t}\n\t",
  fragmentShader: "\n\tprecision lowp float;\n\tvarying vec2 vUv;\n\tuniform sampler2D u_Sampler;\n\tvoid main()\n\t{\n\t\tgl_FragColor = texture2D(u_Sampler,vUv);\n\t\t// if(gl_FragColor.x*gl_FragColor.y*gl_FragColor.z>0.5){\n\t\t// \tdiscard;\n\t\t// }\n\t}\n\t"
});
// CONCATENATED MODULE: ./src/Utils/LoadTexture.js
function LoadTexture_loadTexture(gl, imagePath) {
  function lg2(n) {
    return Math.log(n) / Math.log(2);
  }

  return new Promise(function (resove, reject) {
    var image = new Image();
    image.src = imagePath;

    image.onload = function () {
      var texture = gl.createTexture(); // 挂载当前的空材质开始操作

      gl.bindTexture(gl.TEXTURE_2D, texture); // 灌入图形数据

      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image); // 反转y轴

      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1); // 支持放大缩小渐进加载和插值算法，整数倍情况

      if (lg2(image.width) === 0 && lg2(image.height) === 0) {
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_NEAREST);
        gl.generateMipmap(gl.TEXTURE_2D);
      } else {
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      } // 取消挂载


      gl.bindTexture(gl.TEXTURE_2D, null);
      resove(texture);
    };

    image.onerror = function (e) {
      reject(image, e);
    };
  });
}
// CONCATENATED MODULE: ./src/Meshs/Image.js






function Image_createSuper(Derived) { var hasNativeReflectConstruct = Image_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function Image_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var Image_Image = /*#__PURE__*/function (_Base) {
  inherits_default()(Image, _Base);

  var _super = Image_createSuper(Image);

  //array.BYTES_PER_ELEMENT * indicesEachLength
  function Image(config) {
    var _this;

    classCallCheck_default()(this, Image);

    _this = _super.call(this, config);
    _this.drawType = "TRIANGLES";
    _this.offset = 0;
    _this.shaders = {
      vertex: Shaders_image.vertexShader,
      fragment: Shaders_image.fragmentShader
    };
    _this.uniformData = {
      z: {
        value: config.z || 1,
        type: "uniform1f"
      }
    };

    _this.init(config);

    _this.vSize = 2;
    return _this;
  }

  createClass_default()(Image, [{
    key: "setTexture",
    value: function setTexture(key, imagePath) {
      var _this2 = this;

      LoadTexture_loadTexture(this.gl, imagePath).then(function (texture) {
        _this2.uniformData[key] = {
          type: "uniform1i",
          //image
          value: 0,
          //0号纹理传递
          texture: texture
        };
        _this2.uniformsNeedUpdate = true;
      });
    }
  }, {
    key: "setData",
    value: function setData(data) {
      if (!this.miniGL) {
        throw new Error("请先将组件通过minigl.canvas.add()加入实例中");
      } // 释放内存空间


      this.dispose();
      var viewport = this.miniGL.viewport;
      this.data = data; // 设置转换矩阵

      this.uniformData.transform = {
        value: viewport.transform,
        type: "uniformMatrix3fv"
      };
      var width = data.width,
          height = data.height,
          src = data.src,
          x = data.x,
          y = data.y; // 设置纹理

      this.setTexture('u_Sampler', src); // 计算uv

      var points = [x, y, x, y + height, x + width, y, x + width, y + height];
      var indices = [0, 1, 2, 2, 1, 3];
      var uv = [0, 0, 0, 1, 1, 0, 1, 1];
      this.vertex = points;
      this.setBufferData(points, "position", 2);
      this.setBufferData(uv, "uv", 2);
      this.setIndices(indices);
      this.uniformsNeedUpdate = true;
    }
  }, {
    key: "render",
    value: function render() {
      // 2D 只需要两个坐标轴标识位置
      var offset = 0; // 从数据第几位开始偏移

      var normalize = false;
      var gl = this.gl; // 图片加载完了再说

      if (!this.uniformData['u_Sampler']) {
        return;
      } // 分别绑定数据到shader程序中


      for (var key in this.buffers) {
        var bufferData = this.buffers[key];
        var bufferPosition = this.getAttribLocation(key); // 分别绑定数据到shader程序中

        gl.bindBuffer(gl.ARRAY_BUFFER, bufferData);
        gl.vertexAttribPointer(bufferPosition, this.buffersSize[key], gl.FLOAT, normalize, 0, offset);
        gl.enableVertexAttribArray(bufferPosition);
      } // 使用顶点数据


      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indicesPointer); // 加载shader程序

      gl.useProgram(this.shaderPorgram);
      this.setUniformData(); // 渲染

      if (this.indices.length) // offset必须乘以类型数组的长度，意味着要从内存中数据的对应字节数开始算 根据类型乘对应的BYTES_PER_ELEMENT
        gl.drawElements(gl[this.drawType], this.indices.length, gl.UNSIGNED_SHORT, this.offset);
    }
  }]);

  return Image;
}(Meshs_Base);

/* harmony default export */ var Meshs_Image = (Image_Image);
// CONCATENATED MODULE: ./src/Shaders/roundLine.js
/* harmony default export */ var roundLine = ({
  // 先求连接线然后再求垂线
  // 求出等比放大的值
  vertexShader: "\n\tprecision lowp float;\n\tattribute vec2 now;\n\tattribute vec2 pre;\n\tattribute vec2 next;\n\tattribute float side;\n\tattribute float status;\n\tuniform float width;\n\tuniform float aspect;\n\tuniform mat3 transform;\n\tuniform float offset;\n\tvarying float vSide;\n\tvoid main()\n\t{\n\t\tvSide = side;\n\t\t\n\t\t// \u5148\u8F6C\u6362\u5750\u6807\u7CFB\n\t\tvec2 mNow = (transform*vec3(now,1.)).xy;\n\t\tvec2 mNext = (transform*vec3(next,1.)).xy;\n\t\tvec2 mPre = (transform*vec3(pre,1.)).xy;\n\t\tvec2 _now = vec2(mNow);\n\t\tvec2 _next = vec2(mNext);\n\t\tvec2 _pre =  vec2(mPre);\n\t\n\t\t// \u5148\u628A\u672C\u5750\u6807\u7CFB\u7684\u5750\u6807\u653E\u5927\uFF0C\u548C\u771F\u5B9E\u7684\u5916\u754C\u5750\u6807\u4E00\u6837,\u8FD9\u6837\u6C42\u51FA\u6765\u7684\u76F8\u5BF9\u5411\u91CF\u662F\u51C6\u786E\u7684\uFF0C\u5982\u679C\u5728\u540E\u9762\u4E4B\u95F4\u5BF9normal\u8FDB\u884C\u53D8\u5316\uFF0C\u5C31\u4F1A\u5F97\u51FA\u9519\u8BEF\u7684\u7ED3\u679C\n\t\t_now.x *= aspect;\n\t\t_next.x *= aspect;\n\t\t_pre.x *= aspect;\n\t\t\n\t\tvec2 _dir = normalize(status*_now - status*_pre + (1.0-status)*_next - (1.0-status)*_now);\n\n\t\tvec2 normal = vec2( -_dir.y , _dir.x );\n\t\tvec2 dir = normal * width * .5 * side;\n\n\t\t// \u504F\u79FB\u91CF\n\t\tif(offset!=0.){\n\t\t\tvec2 point21 = normalize(_next - _now);\n\t\t\tvec2 point10 = normalize(_now - _pre);\n\t\t\tvec2 offsetDir = normalize( point21 + point10);\n\t\t\tvec2 offsetNormal = vec2( -offsetDir.y, offsetDir.x);\n\t\t\tfloat ratio = sqrt(1.0 - pow(dot(offsetNormal,point10),2.0));\n\t\t\tvec2 offsets =  offsetNormal * offset/ratio  ;\n\t\t\tdir += offsets;\n\t\t}\n\n\t\t// \u5F97\u51FA\u7684x\u5750\u6807\u4F1A\u88AB\u653E\u5927\uFF0C\u8FD9\u91CC\u8981\u9664\u6389,\u8BB0\u5F97\u8981\u7528\u8F6C\u6362\u540E\u5750\u6807\u8FDB\u884C\u52A0\u51CF\n\t\tgl_Position = vec4(mNow.x + dir.x/aspect,mNow.y+dir.y , 1., 1.);\n\t}\n\t",
  fragmentShader: "\n\tprecision lowp float;\n\tuniform vec4 color;\n\tvarying float vSide;\n\tvoid main()\n\t{\n\t\tfloat smoothSideRatio = max(0.1,smoothstep(0.,0.3,(1. - abs(vSide))));\n\t\tgl_FragColor = color;\n\t\tgl_FragColor.w *= smoothSideRatio;\n\t}\n\t"
});
// CONCATENATED MODULE: ./src/Meshs/RoundLine/Line.js






function RoundLine_Line_createSuper(Derived) { var hasNativeReflectConstruct = RoundLine_Line_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function RoundLine_Line_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var Line_RoundLine = /*#__PURE__*/function (_Base) {
  inherits_default()(RoundLine, _Base);

  var _super = RoundLine_Line_createSuper(RoundLine);

  //"TRIANGLE_STRIP";
  function RoundLine(config) {
    var _this;

    classCallCheck_default()(this, RoundLine);

    _this = _super.call(this);
    _this.drawType = "TRIANGLES";
    _this.shaders = {
      vertex: roundLine.vertexShader,
      fragment: roundLine.fragmentShader
    };
    _this.offset = 0;
    config = Object.assign({
      width: 20,
      z: 1,
      offset: 0
    }, config);
    _this.uniformData = {
      z: {
        value: config.z || 1,
        type: "uniform1f"
      }
    };

    _this.init(config);

    return _this;
  }

  createClass_default()(RoundLine, [{
    key: "setData",
    value: function setData(data) {
      var viewport = this.miniGL.viewport;
      if (!data.length && data.length < 2) return console.warn("need input data.length >= 2");
      this.uniformData.transform = {
        value: viewport.transform,
        type: "uniformMatrix3fv"
      };
      this.uniformData.aspect = {
        value: viewport.ratio,
        type: "uniform1f"
      };
      this.uniformData.color = {
        value: this.config.color || [1, 0, 1, 1],
        type: "uniform4fv"
      };
      this.uniformData.width = {
        value: 2 * this.config.width / this.miniGL.viewport.height,
        type: "uniform1f"
      };
      this.uniformData.offset = {
        value: 2 * this.config.offset / this.miniGL.viewport.height,
        type: "uniform1f"
      };
      this.data = data;
      var points = [];
      data.forEach(function (item) {
        points.push(item.position.x, item.position.y);
      }); // 生产双倍点for两个边

      var res = this.calcSidePoints(data);
      this.setBufferData(res.nowData, "now", 2);
      this.setBufferData(res.preData, "pre", 2);
      this.setBufferData(res.nextData, "next", 2);
      this.setBufferData(res.side, "side", 1);
      this.setBufferData(res.status, "status", 1); // 生成顶点

      var indices = [];

      for (var j = 0; j < data.length - 1; j++) {
        var n = j * 4;
        indices.push(n, n + 1, n + 2, n + 2, n + 1, n + 3);
      }

      this.setIndices(indices);
      this.res = res;
    }
  }, {
    key: "calcSidePoints",
    value: function calcSidePoints() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var length = data.length;
      var side = [];
      var nextData = [];
      var preData = [];
      var nowData = [];
      var status = []; // 生产双倍点for两个边

      for (var i = 0; i < length - 1; i++) {
        var point1 = data[i].position;
        var point0 = data[i - 1] ? data[i - 1].position : {
          x: 2 * data[i].position.x - data[i + 1].position.x,
          y: 2 * data[i].position.y - data[i + 1].position.y
        };
        var point2 = data[i + 1] ? data[i + 1].position : {
          x: 2 * data[i].position.x - data[i - 1].position.x,
          y: 2 * data[i].position.y - data[i - 1].position.y
        };
        side.push(1, -1);
        preData.push(point0.x, point0.y, point0.x, point0.y);
        nowData.push(point1.x, point1.y, point1.x, point1.y);
        nextData.push(point2.x, point2.y, point2.x, point2.y);
        var j = i + 1;
        point1 = data[j].position;
        point0 = data[j - 1] ? data[j - 1].position : {
          x: 2 * data[j].position.x - data[j + 1].position.x,
          y: 2 * data[j].position.y - data[j + 1].position.y
        };
        point2 = data[j + 1] ? data[j + 1].position : {
          x: 2 * data[j].position.x - data[j - 1].position.x,
          y: 2 * data[j].position.y - data[j - 1].position.y
        };
        side.push(1, -1);
        preData.push(point0.x, point0.y, point0.x, point0.y);
        nowData.push(point1.x, point1.y, point1.x, point1.y);
        nextData.push(point2.x, point2.y, point2.x, point2.y);
        status.push(0, 0, 1, 1);
      }

      return {
        preData: preData,
        nowData: nowData,
        nextData: nextData,
        side: side,
        status: status
      };
    }
  }, {
    key: "render",
    value: function render() {
      // 2D 只需要两个坐标轴标识位置
      var offset = 0; // 从数据第几位开始偏移

      var normalize = false;

      for (var key in this.buffers) {
        var bufferData = this.buffers[key];
        var bufferPosition = this.getAttribLocation(key); // 分别绑定数据到shader程序中

        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, bufferData);
        this.gl.vertexAttribPointer(bufferPosition, this.buffersSize[key], this.gl.FLOAT, normalize, 0, offset); //todo:webgl2.0 实例数组能减少同样形状但渲染不同的高性能方案

        this.gl.enableVertexAttribArray(bufferPosition);
      } // 使用顶点数据


      this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.indicesPointer); // 加载shader程序

      this.gl.useProgram(this.shaderPorgram);
      this.setUniformData(); // 渲染

      if (this.indices.length) {
        this.gl.drawElements(this.gl[this.drawType], this.indices.length, this.gl.UNSIGNED_SHORT, this.offset);
      }
    }
  }]);

  return RoundLine;
}(Meshs_Base);

/* harmony default export */ var RoundLine_Line = (Line_RoundLine);
// CONCATENATED MODULE: ./src/Shaders/roundLinePoint.js
/* harmony default export */ var roundLinePoint = ({
  // 先求连接线然后再求垂线
  // 求出等比放大的值
  vertexShader: "\n\tprecision highp float;\n\tattribute vec2 now;\n\tattribute vec2 pre;\n\tattribute vec2 next;\n\tuniform float width;\n\tuniform float aspect;\n\tuniform float z;\n\tuniform mat3 transform;\n\tuniform float offset;\n\tvoid main()\n\t{\n\t\t// \u5148\u8F6C\u6362\u5750\u6807\u7CFB\n\t\tvec2 mNow = (transform*vec3(now,1.)).xy;\n\t\tvec2 mNext = (transform*vec3(next,1.)).xy;\n\t\tvec2 mPre = (transform*vec3(pre,1.)).xy;\n\t\tvec2 _now = vec2(mNow);\n\t\tvec2 _next = vec2(mNext);\n\t\tvec2 _pre =  vec2(mPre);\n\t\n\t\t// \u5148\u628A\u672C\u5750\u6807\u7CFB\u7684\u5750\u6807\u653E\u5927\uFF0C\u548C\u771F\u5B9E\u7684\u5916\u754C\u5750\u6807\u4E00\u6837,\u8FD9\u6837\u6C42\u51FA\u6765\u7684\u76F8\u5BF9\u5411\u91CF\u662F\u51C6\u786E\u7684\uFF0C\u5982\u679C\u5728\u540E\u9762\u4E4B\u95F4\u5BF9normal\u8FDB\u884C\u53D8\u5316\uFF0C\u5C31\u4F1A\u5F97\u51FA\u9519\u8BEF\u7684\u7ED3\u679C\n\t\t_now.x *= aspect;\n\t\t_next.x *= aspect;\n\t\t_pre.x *= aspect;\n\t\t\n\t\t// \u504F\u79FB\n\t\tif(offset!=0.){\n\t\t\tvec2 point21 = normalize(_next - _now);\n\t\t\tvec2 point10 = normalize(_now - _pre);\n\t\t\tvec2 offsetDir = normalize( point21 + point10);\n\t\t\tvec2 offsetNormal = vec2( -offsetDir.y, offsetDir.x);\n\t\t\tfloat ratio = sqrt(1.0 - pow(dot(offsetNormal,point10),2.0));\n\t\t\tvec2 offsets =  offsetNormal * offset/ratio ;\n\t\t\toffsets.x /= aspect;\n\t\t\tmNow += offsets;\n\t\t}\n\n\t\t// \u5F97\u51FA\u7684x\u5750\u6807\u4F1A\u88AB\u653E\u5927\uFF0C\u8FD9\u91CC\u8981\u9664\u6389,\u8BB0\u5F97\u8981\u7528\u8F6C\u6362\u540E\u5750\u6807\u8FDB\u884C\u52A0\u51CF\n\t\tgl_PointSize = width;\n\n\t\tgl_Position = vec4(mNow.x,mNow.y , z, 1.);\n\t}\n\t",
  fragmentShader: "\n\tprecision highp float;\n\tuniform vec4 color;\n\tvoid main()\n\t{\n\t\tfloat l = length(gl_PointCoord - vec2(0.5,0.5));\n\t\t\n\t\tfloat smoothSideRatio = smoothstep(0.,0.3,(0.5-l));\n\t\tgl_FragColor = color;\n\t\tgl_FragColor.w *= smoothSideRatio;\n\t}\n\t"
});
// CONCATENATED MODULE: ./src/Meshs/RoundLine/LinePoint.js






function LinePoint_createSuper(Derived) { var hasNativeReflectConstruct = LinePoint_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function LinePoint_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var LinePoint_LinePoint = /*#__PURE__*/function (_Base) {
  inherits_default()(LinePoint, _Base);

  var _super = LinePoint_createSuper(LinePoint);

  //"TRIANGLE_STRIP";
  function LinePoint(config) {
    var _this;

    classCallCheck_default()(this, LinePoint);

    _this = _super.call(this);
    _this.drawType = "POINTS";
    _this.shaders = {
      vertex: roundLinePoint.vertexShader,
      fragment: roundLinePoint.fragmentShader
    };
    _this.offset = 0;
    config = Object.assign({
      width: 20,
      z: 1,
      offset: 0
    }, config);
    _this.uniformData = {
      z: {
        value: config.z || 1,
        type: "uniform1f"
      }
    };

    _this.init(config);

    return _this;
  }

  createClass_default()(LinePoint, [{
    key: "setData",
    value: function setData(res) {
      var viewport = this.miniGL.viewport;
      this.uniformData.transform = {
        value: viewport.transform,
        type: "uniformMatrix3fv"
      };
      this.uniformData.aspect = {
        value: viewport.ratio,
        type: "uniform1f"
      };
      this.uniformData.color = {
        value: this.config.color || [1, 0, 1, 1],
        type: "uniform4fv"
      };
      this.uniformData.width = {
        value: this.config.width,
        type: "uniform1f"
      };
      this.uniformData.offset = {
        value: 2 * this.config.offset / this.miniGL.viewport.height,
        type: "uniform1f"
      }; // 生产双倍点for两个边

      this.vertex = res.nowData;
      this.setBufferData(res.nowData, "now", 2);
      this.setBufferData(res.preData, "pre", 2);
      this.setBufferData(res.nextData, "next", 2);
    }
  }]);

  return LinePoint;
}(Meshs_Base);

/* harmony default export */ var RoundLine_LinePoint = (LinePoint_LinePoint);
// CONCATENATED MODULE: ./src/Meshs/RoundLine/index.js





var RoundLine_RoundLine = /*#__PURE__*/function () {
  function RoundLine(config) {
    classCallCheck_default()(this, RoundLine);

    this.depthMask = true;
    this.depthTest = true;
    this.transparent = true;
    this.line = new RoundLine_Line(config);
    this.linePoint = new RoundLine_LinePoint(config);
  }

  createClass_default()(RoundLine, [{
    key: "onAdd",
    value: function onAdd() {
      var _this$line, _this$linePoint;

      (_this$line = this.line).onAdd.apply(_this$line, arguments);

      (_this$linePoint = this.linePoint).onAdd.apply(_this$linePoint, arguments);
    }
  }, {
    key: "setData",
    value: function setData() {
      var _this$line2;

      (_this$line2 = this.line).setData.apply(_this$line2, arguments);

      this.linePoint.setData(this.line.res);
    }
  }, {
    key: "dispose",
    value: function dispose() {
      var _this$line3, _this$linePoint2;

      (_this$line3 = this.line).dispose.apply(_this$line3, arguments);

      (_this$linePoint2 = this.linePoint).dispose.apply(_this$linePoint2, arguments);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      var _this$line4, _this$linePoint3;

      (_this$line4 = this.line).destroy.apply(_this$line4, arguments);

      (_this$linePoint3 = this.linePoint).destroy.apply(_this$linePoint3, arguments);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$linePoint4, _this$line5;

      (_this$linePoint4 = this.linePoint).render.apply(_this$linePoint4, arguments);

      (_this$line5 = this.line).render.apply(_this$line5, arguments);
    }
  }]);

  return RoundLine;
}();

/* harmony default export */ var Meshs_RoundLine = (RoundLine_RoundLine);
// CONCATENATED MODULE: ./src/Shapes/Rect.js



/**
 * @class
 */

var Rect_Rect = /*#__PURE__*/function () {
  /**
   * 数据
   */

  /**
   * 索引
   */

  /**
   * @param  {} width
   * @param  {} height
   * @param  {} x
   * @param  {} y
   */
  function Rect(x, y, width, height) {
    classCallCheck_default()(this, Rect);

    this.data = [];
    this.indices = [];
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.makeData();
  }

  createClass_default()(Rect, [{
    key: "makeData",
    value: function makeData() {
      this.data = [{
        position: {
          x: this.x,
          y: this.y
        }
      }, {
        position: {
          x: this.x,
          y: this.y + this.height
        }
      }, {
        position: {
          x: this.x + this.width,
          y: this.y
        }
      }, {
        position: {
          x: this.x + this.width,
          y: this.y + this.height
        }
      }];
      this.indices = [0, 1, 2, 2, 1, 3];
    }
  }, {
    key: "addTo",
    value: function addTo(app) {
      if (this.meshKey) {
        app.canvas.remove(this.meshKey);
      }

      this.mesh = new Meshs_Mesh();
      this.meshKey = app.canvas.add(this.mesh);
      this.mesh.setData(this.data, this.indices);
    }
  }]);

  return Rect;
}();

/* harmony default export */ var Shapes_Rect = (Rect_Rect);
// CONCATENATED MODULE: ./src/index.js







function src_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function src_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { src_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { src_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function src_createSuper(Derived) { var hasNativeReflectConstruct = src_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function src_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }













var src_MiniGL = /*#__PURE__*/function (_Base) {
  inherits_default()(MiniGL, _Base);

  var _super = src_createSuper(MiniGL);

  function MiniGL(config) {
    var _this;

    classCallCheck_default()(this, MiniGL);

    _this = _super.call(this, config);
    _this.autoUpdate = false;
    _this.container = config.container;
    _this.config = Object.assign({}, config);
    return _this;
  }

  createClass_default()(MiniGL, [{
    key: "init",
    value: function init() {
      this.canvas = document.createElement("canvas");
      this.container.appendChild(this.canvas);
      this.gl = this.canvas.getContext("webgl", {
        antialias: true,
        antialiasSamples: 16,
        preserveDrawingBuffer: true
      });
      if (this.gl == null) console.error("你的浏览器不支持webgl,请更新使用chrome浏览器");
      this.viewport = new Viewport(src_objectSpread({
        miniGL: this
      }, this.config));
      this.viewport.resize();
      this.canvas = new View_Canvas(src_objectSpread({
        miniGL: this
      }, this.config));
      this.canvas.update();
    }
  }]);

  return MiniGL;
}(src_Base);

src_MiniGL.FlyLine = FlyLine;
src_MiniGL.Image = Meshs_Image;
src_MiniGL.Mesh = Meshs_Mesh;
src_MiniGL.Point = Meshs_Point;
src_MiniGL.MeshBase = Meshs_Base;
src_MiniGL.WidthLine = Meshs_WidthLine;
src_MiniGL.RoundLine = Meshs_RoundLine; // 暂时做形状没有意义，本来是要专心做2d特效库的,另外去做形状，做重了和canvas性能没差了，还是专心利用gpu多进程运算

src_MiniGL.Rect = Shapes_Rect;
/* harmony default export */ var src = __webpack_exports__["default"] = (src_MiniGL);

/***/ })
/******/ ])["default"];
});