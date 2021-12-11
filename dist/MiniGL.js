(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("gl-matrix"));
	else if(typeof define === 'function' && define.amd)
		define(["gl-matrix"], factory);
	else if(typeof exports === 'object')
		exports["MiniGL"] = factory(require("gl-matrix"));
	else
		root["MiniGL"] = factory(root["gl-matrix"]);
})(self, function(__WEBPACK_EXTERNAL_MODULE__925__) {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 349:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ _assertThisInitialized)
/* harmony export */ });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ 610:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ _classCallCheck)
/* harmony export */ });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ 991:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ _createClass)
/* harmony export */ });
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

/***/ }),

/***/ 156:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ _defineProperty)
/* harmony export */ });
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

/***/ }),

/***/ 608:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ _getPrototypeOf)
/* harmony export */ });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ 255:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ _inherits)
});

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js

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
  if (superClass) _setPrototypeOf(subClass, superClass);
}

/***/ }),

/***/ 70:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ _possibleConstructorReturn)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(484);
/* harmony import */ var _assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(349);


function _possibleConstructorReturn(self, call) {
  if (call && ((0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z)(call) === "object" || typeof call === "function")) {
    return call;
  }

  return (0,_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)(self);
}

/***/ }),

/***/ 18:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ _toConsumableArray)
});

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js




function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

/***/ }),

/***/ 484:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ 33:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(484);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(610);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(991);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(156);
/* harmony import */ var gl_matrix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(925);
/* harmony import */ var gl_matrix__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gl_matrix__WEBPACK_IMPORTED_MODULE_1__);





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


/**
 * Base 基类方便继承以实现其他类型的情况
 */

var Base = /*#__PURE__*/function () {
  // 是否需要重绘
  function Base(config) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(this, Base);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z)(this, "vSize", 2);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z)(this, "offset", 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z)(this, "depthMask", true);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z)(this, "depthTest", true);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z)(this, "transparent", true);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z)(this, "uniformsNeedUpdate", true);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z)(this, "uniformLocations", {});

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z)(this, "visible", true);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z)(this, "uniformData", {
      z: {
        value: 1,
        type: 'uniform1f'
      }
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z)(this, "vertex", []);

    this.init(config);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(Base, [{
    key: "init",
    value: function init() {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.config = Object.assign({
        type: 'ok'
      }, config);
      this.buffers = [];
      this.buffersSize = []; // 初始化数据数组

      this.indices = []; // 初始化模型转换矩阵，这个矩阵按需引用

      this.matrix = gl_matrix__WEBPACK_IMPORTED_MODULE_1__.mat3.create();

      if (config.shaders) {
        this.shaders = _objectSpread(_objectSpread({}, this.shaders), config.shaders);
      }

      if (config.miniGL) {
        config.miniGL.canvas.add(this);
      }
    }
  }, {
    key: "setMatrix",
    value: function setMatrix(matrix) {
      gl_matrix__WEBPACK_IMPORTED_MODULE_1__.mat3.copy(this.matrix, matrix);
    }
  }, {
    key: "setData",
    value: function setData(data) {
      this.setBufferData(data, 'position', 2);
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
    /**
     * @param  {} texture
     * @param  {} key='u_Sampler'
     */

  }, {
    key: "setTexture",
    value: function setTexture(texture) {
      var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'u_Sampler';
      this.uniformData[key] = {
        type: 'uniform1i',
        // image
        value: 0,
        // 0号纹理传递
        texture: texture.webglTexture ? texture.webglTexture : texture
      };
      this.texture = texture;
      this.uniformsNeedUpdate = true;
    }
  }, {
    key: "setUniform",
    value: function setUniform(key, item) {
      var gl = this.gl;
      var value = item.value,
          type = item.type,
          texture = item.texture,
          _item$textureUnit = item.textureUnit,
          textureUnit = _item$textureUnit === void 0 ? 0 : _item$textureUnit; // 矩阵

      if (type.indexOf('uniformMatrix') > -1) {
        gl[type](this.getUniformLocation(key), false, value); // 图形数据
      } else if (texture) {
        // 激活纹理单元0，这里可以配置激活多个纹理单元，用来完成一个shader里多个纹理叠加处理的后期效果
        gl.activeTexture(gl["TEXTURE".concat(textureUnit)]); // 绑定纹理到单元0上

        gl.bindTexture(gl.TEXTURE_2D, item.texture); // 传值

        gl[type](this.getUniformLocation(key), value); // 行列数据
      } else if (type.slice(-1) === 'v' || (0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(value) !== 'object') {
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
    value: function setBufferData(data, name, size, bufferType) {
      // 没有的话初始化复用一个
      if (!this.buffers[name]) {
        this.buffers[name] = this.gl.createBuffer();
      }

      this.buffersSize[name] = size; // 顶点buffer

      this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.buffers[name]);
      this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(data), this.gl[bufferType || 'STATIC_DRAW']);
    }
    /**
     * 更新缓冲区数据
     * @param {Array} data 
     * @param {string} name 
     * @param {number} offset 
     */

  }, {
    key: "updateBufferData",
    value: function updateBufferData(data, name) {
      var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      // 顶点buffer
      this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.buffers[name]);
      this.gl.bufferSubData(this.gl.ARRAY_BUFFER, offset, new Float32Array(data));
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

      var shaderProgram = this.gl.createProgram();
      this.gl.attachShader(shaderProgram, vertexShaderObject);
      this.gl.attachShader(shaderProgram, fragmentShaderObject);
      this.gl.linkProgram(shaderProgram);

      if (!this.gl.getProgramParameter(shaderProgram, this.gl.LINK_STATUS)) {
        console.error('shaderProgram Error: ', gl.getError(), gl.getProgramParameter(shaderProgram, 35715), gl.getProgramInfoLog(shaderProgram).trim());
        console.error('fragmentLog:', gl.getShaderInfoLog(vertexShaderObject).trim(), this.addLineNumbers(gl.getShaderSource(vertexShaderObject)));
        console.error('vertexLog:', gl.getShaderInfoLog(fragmentShaderObject).trim(), this.addLineNumbers(gl.getShaderSource(fragmentShaderObject)));
        return;
      }

      this.shaderProgram = shaderProgram;
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
      return this.gl.getAttribLocation(this.shaderProgram, name);
    } // 获取uniform变量地址

  }, {
    key: "getUniformLocation",
    value: function getUniformLocation(name) {
      // 缓存会每秒快20ms左右，节省一帧的时机
      if (this.uniformLocations[name]) return this.uniformLocations[name];
      this.uniformLocations[name] = this.gl.getUniformLocation(this.shaderProgram, name);
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
      if (!this.shaders) return; // 2D 只需要两个坐标轴标识位置

      var vLen = Math.ceil(this.vertex.length / this.vSize); // 几个点

      var offset = 0; // 从数据第几位开始偏移

      var normalize = false;

      for (var key in this.buffers) {
        var bufferData = this.buffers[key];
        var bufferPosition = this.getAttribLocation(key); // 分别绑定数据到shader程序中

        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, bufferData);
        this.gl.vertexAttribPointer(bufferPosition, this.buffersSize[key], this.gl.FLOAT, normalize, 0, offset);
        this.gl.enableVertexAttribArray(bufferPosition);
      } // 加载shader程序


      this.gl.useProgram(this.shaderProgram);
      this.setUniformData(); // 渲染

      if (this.vertex.length) {
        this.gl.drawArrays(this.gl[this.drawType], this.offset, vLen);
      }
    }
  }, {
    key: "afterRender",
    value: function afterRender() {}
  }, {
    key: "onAdd",
    value: function onAdd(miniGL) {
      this.miniGL = miniGL; // 获取顶点数据内存里的指针

      this.gl = miniGL.gl; // 没有初始化的情况

      if (!this.indicesPointer) {
        this.indicesPointer = this.gl.createBuffer();
      }

      if (this.shaders && !this.shaderProgram) {
        this.initShader();
      }
    }
  }, {
    key: "translate",
    value: function translate(x, y) {
      gl_matrix__WEBPACK_IMPORTED_MODULE_1__.mat3.translate(this.matrix, this.matrix, [x, y]);
    }
  }, {
    key: "scale",
    value: function scale(x, y) {
      y = y || x;
      gl_matrix__WEBPACK_IMPORTED_MODULE_1__.mat3.scale(this.matrix, this.matrix, [x, y]);
    } // 销毁shader

  }, {
    key: "destroy",
    value: function destroy() {
      var _this = this;

      var shaders = this.gl.getAttachedShaders(this.shaderProgram);
      shaders.forEach(function (item) {
        _this.gl.deleteShader(item);
      });
      this.gl.deleteBuffer(this.indicesPointer);
      this.gl.deleteProgram(this.shaderProgram);
      this.parent = undefined;
      this.dispose();
    } // 释放buffer空间

  }, {
    key: "dispose",
    value: function dispose() {
      for (var key in this.buffers) {
        this.gl.disableVertexAttribArray(this.buffers[key]);
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Base);

/***/ }),

/***/ 947:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Mesh_InstanceMesh)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 5 modules
var toConsumableArray = __webpack_require__(18);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(610);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(991);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(349);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(255);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(70);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(608);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(156);
;// CONCATENATED MODULE: ./src/Shaders/instanceMeshShader.js
/* harmony default export */ const instanceMeshShader = ({
  vertexShader: "\n\tprecision lowp float;\n\tattribute vec2 position;\n    attribute vec4 color;\n    attribute vec3 instanceOffset;\n\tvarying vec4 vColor;\n\tuniform mat3 transform;\n    uniform float z;\n\tvoid main()\n\t{\n\t\tvColor = color;\n        vColor.a = instanceOffset.z;\n\n\t\tvec3 mPosition = transform * vec3(vec2(position.x+instanceOffset.x,position.y+instanceOffset.y),z);\n\t\tgl_Position = vec4(mPosition.xy,z,1.0);\n\t}\n\t",
  fragmentShader: "\n\tprecision lowp float;\n\tvarying vec4 vColor;\n\tvoid main()\n\t{\n\t\tgl_FragColor = vColor;\n\t}\n\t"
});
// EXTERNAL MODULE: ./src/Utils/LoadTexture.js
var LoadTexture = __webpack_require__(816);
// EXTERNAL MODULE: ./src/Mesh/Base.js
var Base = __webpack_require__(33);
;// CONCATENATED MODULE: ./src/Mesh/InstanceMesh.js









function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,getPrototypeOf/* default */.Z)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,getPrototypeOf/* default */.Z)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,possibleConstructorReturn/* default */.Z)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }





var InstanceMesh = /*#__PURE__*/function (_Base) {
  (0,inherits/* default */.Z)(InstanceMesh, _Base);

  var _super = _createSuper(InstanceMesh);

  // array.BYTES_PER_ELEMENT * indicesEachLength
  function InstanceMesh() {
    var _this;

    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      // 一个值对应几个对象
      instanceDivisor: 1
    };

    (0,classCallCheck/* default */.Z)(this, InstanceMesh);

    _this = _super.call(this, config);

    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "drawType", 'TRIANGLES');

    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "offset", 0);

    _this.shaders = {
      vertex: instanceMeshShader.vertexShader,
      fragment: instanceMeshShader.fragmentShader
    };
    _this.uniformData = {
      z: {
        value: config.z || 1,
        type: 'uniform1f'
      }
    };

    _this.init(config);

    _this.vSize = 2;
    return _this;
  }

  (0,createClass/* default */.Z)(InstanceMesh, [{
    key: "setMap",
    value: function setMap(src) {
      var _this2 = this;

      return (0,LoadTexture/* default */.Z)(this.gl, src).then(function (texture) {
        _this2.uniformData['map'] = {
          type: 'uniform1i',
          // image
          value: 0,
          // 0号纹理传递
          texture: texture
        };
        _this2.uniformsNeedUpdate = true;
      });
    }
  }, {
    key: "setData",
    value: function setData(data, indices) {
      this.dispose();
      var points = [];
      var colors = [];
      this.data = data;
      data.forEach(function (item) {
        var coord = [item.position.x, item.position.y];
        var color = item.color || [0, 0.1, 0.2, 1];
        colors.push.apply(colors, (0,toConsumableArray/* default */.Z)(color));
        points.push.apply(points, coord);
      });
      this.vertex = points;
      this.setBufferData(points, 'position', 2);
      this.setBufferData(colors, 'color', 4);
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
      this.vertex = position;
      this.setBufferData(position, 'position', 2);
      this.setBufferData(color, 'color', 4);
      this.setBufferData(uvs, 'uv', 2);
      this.setIndices(indices);
    }
  }, {
    key: "setIndices",
    value: function setIndices(input) {
      var indices = []; // 支持显示网格线

      if (this.config.wireFrame && this.drawType === 'TRIANGLES') {
        for (var i = 0; i < input.length - 2; i += 3) {
          indices.push(input[i], input[i + 1], input[i + 1], input[i + 2], input[i + 2], input[i]);
        }
      } else {
        indices = input;
      }

      this.indices = indices;
      this.count = !this.count ? indices.length : this.count; // 顶点buffer

      this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.indicesPointer);
      this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), this.gl.STATIC_DRAW);
    } // 设置实例数组

  }, {
    key: "setInstanceData",
    value: function setInstanceData(instanceData) {
      this.instanceData = instanceData;
      var eachLength = instanceData[0].length;
      var arr = [];
      this.instanceData.forEach(function (item) {
        arr.push.apply(arr, (0,toConsumableArray/* default */.Z)(item));
      });
      this.setBufferData(arr, 'instanceOffset', eachLength);
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

        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, bufferData); // 绑定数据
        // 挂载到对应的指针上

        this.gl.vertexAttribPointer(bufferPosition, this.buffersSize[key], this.gl.FLOAT, normalize, 0, offset);
        this.gl.enableVertexAttribArray(bufferPosition);
      } // 加载实例偏移数组，这里写死instanceOffset的数据指针名，注意不要导致命名冲突了


      this.gl.vertexAttribDivisor(this.getAttribLocation('instanceOffset'), this.config.instanceDivisor); // 使用顶点数据

      this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.indicesPointer); // 加载shader程序

      this.gl.useProgram(this.shaderProgram); // 配置uniform

      this.setUniformData(); // 渲染

      if (this.indices.length) {
        var drawType = this.config.wireFrame ? 'LINES' : this.gl[this.drawType]; // offset必须乘以类型数组的长度，意味着要从内存中数据的对应字节数开始算 根据类型乘对应的TypeArray.BYTES_PER_ELEMENT

        this.gl.drawElementsInstanced(drawType, this.count, this.gl.UNSIGNED_SHORT, this.offset, this.instanceData.length);
      }
    }
  }]);

  return InstanceMesh;
}(Base/* default */.Z);

/* harmony default export */ const Mesh_InstanceMesh = (InstanceMesh);

/***/ }),

/***/ 323:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Mesh_Line)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 5 modules
var toConsumableArray = __webpack_require__(18);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(610);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(991);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(349);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(255);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(70);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(608);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(156);
;// CONCATENATED MODULE: ./src/Shaders/line.js
/* harmony default export */ const line = ({
  // shader中进行坐标转换会不会快？CPU只会调用一次，GPU每帧都要重复去运算，2d情况下没有相机，
  // 没有坐标因相机而变化的情况，所以不用再shader中运算，可以减少cpu的调用率
  // 发现还是会大规模常常对坐标进行替换，那还是放进shader中运算吧
  vertexShader: "\n\tprecision highp float;\n\tattribute vec2 position;\n\tattribute vec4 color;\n    uniform mat3 transform;\n    uniform mat3 modelView;\n\tuniform float z;\n\tvarying vec4 vColor;\n\tvoid main()\n\t{\n\t\tvColor = color;\n\t\tvec3 mPosition = transform * modelView * vec3(position,1.);\n\t\tgl_Position = vec4(mPosition.xy,z,1.);\n\t}\n\t",
  fragmentShader: "\n\tprecision highp float;\n\tvarying vec4 vColor;\n\tvoid main()\n\t{\n\t\tgl_FragColor = vColor;\n\t}\n\t"
});
// EXTERNAL MODULE: ./src/Mesh/Base.js
var Base = __webpack_require__(33);
;// CONCATENATED MODULE: ./src/Mesh/Line.js









function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,getPrototypeOf/* default */.Z)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,getPrototypeOf/* default */.Z)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,possibleConstructorReturn/* default */.Z)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




var Line = /*#__PURE__*/function (_Base) {
  (0,inherits/* default */.Z)(Line, _Base);

  var _super = _createSuper(Line);

  function Line(config) {
    var _this;

    (0,classCallCheck/* default */.Z)(this, Line);

    config = Object.assign({
      z: 1
    }, config);
    _this = _super.call(this, config);

    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "drawType", 'LINE_STRIP');

    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "shaders", {
      vertex: line.vertexShader,
      fragment: line.fragmentShader
    });

    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "offset", 0);

    _this.uniformData = {
      z: {
        value: Math.min(config.z, 1),
        type: 'uniform1f'
      }
    };

    _this.init(config);

    return _this;
  }

  (0,createClass/* default */.Z)(Line, [{
    key: "setData",
    value: function setData(data) {
      var _this2 = this;

      this.dispose();
      var points = [];
      this.data = data;
      var colors = [];
      data.forEach(function (item) {
        points.push(item.position.x, item.position.y);
        colors.push.apply(colors, (0,toConsumableArray/* default */.Z)(item.color || _this2.config.color || [1, 1, 0, 1]));
      });
      this.vertex = points;
      this.setBufferData(points, 'position', 2);
      this.setBufferData(colors, 'color', 4);
    }
  }]);

  return Line;
}(Base/* default */.Z);

/* harmony default export */ const Mesh_Line = (Line);

/***/ }),

/***/ 776:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(610);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(991);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(156);




var Texture = /*#__PURE__*/function () {
  /**
   * @param {Boolean} 是否支持预乘，默认为true，会提前乘好rgb*a，不需要再次乘alpha
   */
  function Texture(miniGL) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z)(this, Texture);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)(this, "premultiplyAlpha", true);

    this.miniGL = miniGL;
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(Texture, [{
    key: "lg2",
    value: function lg2(n) {
      return Math.log(n) / Math.log(2);
    }
  }, {
    key: "create",
    value: function create(_ref) {
      var image = _ref.image,
          rect = _ref.rect,
          _ref$reverseY = _ref.reverseY,
          reverseY = _ref$reverseY === void 0 ? true : _ref$reverseY,
          name = _ref.name;

      if (rect) {
        this.canvas.width = rect.width;
        this.canvas.height = rect.height;
        this.canvas.setAttribute('data-name', name);
        this.ctx.drawImage(image, -rect.x, -rect.y);
        image = this.canvas;
      }

      var gl = this.miniGL.gl;
      var texture = gl.createTexture(); // 挂载当前的空材质开始操作

      gl.bindTexture(gl.TEXTURE_2D, texture); // 这个在读取图片数据前使用

      gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.premultiplyAlpha); // 灌入图形数据

      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image); // 反转y轴

      if (reverseY) {
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, reverseY);
      } // 支持缩小纹理


      gl.generateMipmap(gl.TEXTURE_2D); // 放大缩小的时候都使用线性插值，减少颗粒感

      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE); // 取消挂载

      gl.bindTexture(gl.TEXTURE_2D, null);
      this.webglTexture = texture;
      return texture;
    }
    /**
     * 更新材质数据
     * @param {*} texture
     * @param {*} image
     */

  }, {
    key: "update",
    value: function update(texture, image) {
      var gl = this.miniGL.gl;
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
    }
  }]);

  return Texture;
}();

;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Texture);

/***/ }),

/***/ 816:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ loadTexture)
/* harmony export */ });
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(905);

function loadTexture(gl, imagePath) {
  function lg2(n) {
    return Math.log(n) / Math.log(2);
  }

  return (0,_Loader__WEBPACK_IMPORTED_MODULE_0__.loadImage)(imagePath).then(function (image) {
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
    return texture;
  });
}

/***/ }),

/***/ 905:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "load": () => (/* binding */ load),
/* harmony export */   "loadImage": () => (/* binding */ loadImage)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(156);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * 加载资源
 * @param  {} url
 * @param  {} option={}
 */
function load(url) {
  var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (option.type === 'image') {
    return loadImage(url);
  }

  option = Object.assign({
    method: 'GET',
    headers: {}
  }, option);
  return fetch(url, _objectSpread({}, option)).then(function (res) {
    if (option.responseType) {
      return res[option.responseType]();
    }

    return res.json();
  });
}
/**
 * 加载图片
 * @param  {} url
 */


function loadImage(url) {
  return new Promise(function (resolve, reject) {
    var image = new Image();
    image.src = url;

    image.onload = function () {
      resolve(image);
    };

    image.onerror = function (e) {
      reject(e);
    };
  });
}



/***/ }),

/***/ 88:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(905);

var Util = {
  Loader: _Loader__WEBPACK_IMPORTED_MODULE_0__
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Util);

/***/ }),

/***/ 925:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__925__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ src)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(610);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(991);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(349);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(255);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(70);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(608);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(156);
;// CONCATENATED MODULE: ./src/Base.js




/**
 * 图层基础类
 * @class
 */
var Base = /*#__PURE__*/function () {
  function Base() {
    (0,classCallCheck/* default */.Z)(this, Base);

    (0,defineProperty/* default */.Z)(this, "layers", []);

    (0,defineProperty/* default */.Z)(this, "_listeners", {});
  }

  (0,createClass/* default */.Z)(Base, [{
    key: "on",
    value:
    /**
     * 事件监听,用法同jQuery.on
     */
    function on(type, listener) {
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
     * @param {any} map
     */

  }, {
    key: "onAdd",
    value: function onAdd(map) {
      this.miniGL = map;
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
      this._listeners = {};
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
      layer.onAdd(this); // 初始化layer
    }
    /**
     * 删除图层
     * @param {Layer} layer - 图层
     */

  }, {
    key: "removeLayer",
    value: function removeLayer(layer) {
      for (var x in this.layers) {
        if (this.layers[x].id === layer.id) {
          this.layers[x].onRemove && this.layers[x].onRemove();
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
        if (this.layers[i].id === id) return this.layers[i];
      }
    }
  }]);

  return Base;
}();

/* harmony default export */ const src_Base = (Base);
// EXTERNAL MODULE: external "gl-matrix"
var external_gl_matrix_ = __webpack_require__(925);
;// CONCATENATED MODULE: ./src/View/Viewport.js



/**
 * @class
 */

var ViewPort = /*#__PURE__*/function () {
  function ViewPort(config) {
    (0,classCallCheck/* default */.Z)(this, ViewPort);

    this.miniGL = config.miniGL;
    this.gl = this.miniGL.gl;
    this.config = Object.assign({}, config.config);
    this.transform = external_gl_matrix_.mat3.create(); // 2d视图转换矩阵

    this.convertTransform = external_gl_matrix_.mat3.create(); // 空间转换矩阵

    this.scale = 1;
    this.translate = [0, 0];
    this.rotation = Math.PI * 2; // 弧度
  }
  /**
   * @param  {} x=0
   * @param  {} y=0
   */


  (0,createClass/* default */.Z)(ViewPort, [{
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
      var ratio = window.devicePixelRatio;
      this.pixelRatio = ratio;
      var width = this.config.width || this.miniGL.container.clientWidth;
      var height = this.config.height || this.miniGL.container.clientHeight;
      var renderWidth = width * ratio;
      var renderHeight = height * ratio;
      this.miniGL.canvasDOM.width = renderWidth;
      this.miniGL.canvasDOM.height = renderHeight;
      this.miniGL.canvasDOM.style.width = width + 'px';
      this.miniGL.canvasDOM.style.height = height + 'px';
      this.gl.viewport(0, 0, renderWidth, renderHeight);
      this.renderWidth = renderWidth;
      this.renderHeight = renderHeight;
      this.width = width;
      this.height = height;
      this.ratio = width / height;
      this.makeMatrix();
    }
  }, {
    key: "makeMatrix",
    value: function makeMatrix() {
      // 计算好坐标转换矩阵
      var transform = external_gl_matrix_.mat3.create();
      external_gl_matrix_.mat3.scale(transform, transform, [2 / this.width, -2 / this.height]); // gl-matrix会以初次进行换算的坐标系为基准空间，来进行换算
      // 也就是说每次进行转换的时候，都是在原矩阵上做计算和转换，而不只是改变矩阵的值

      external_gl_matrix_.mat3.translate(transform, transform, [-this.width / 2, -this.height / 2]);
      this.matrix = transform;
      external_gl_matrix_.mat3.copy(this.transform, transform);
    }
  }]);

  return ViewPort;
}();

/* harmony default export */ const Viewport = (ViewPort);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 5 modules
var toConsumableArray = __webpack_require__(18);
;// CONCATENATED MODULE: ./src/Shaders/mesh.js
/* harmony default export */ const mesh = ({
  vertexShader: "\n\tprecision highp float;\n\tattribute vec2 position;\n\tattribute vec4 color;\n\tvarying vec4 vColor;\n    uniform mat3 transform;\n    uniform mat3 modelView;\n\tuniform float z;\n\tvoid main()\n\t{\n\t\tvColor = color;\n\t\tvec3 mPosition = transform * modelView * vec3(position,1.);\n\t\tgl_Position = vec4(mPosition.xy,z,1.0);\n\t\t\n\t}\n\t",
  fragmentShader: "\n\tprecision highp float;\n\tvarying vec4 vColor;\n\tvoid main()\n\t{\n\t\tgl_FragColor = vColor;\n\t}\n\t"
});
// EXTERNAL MODULE: ./src/Mesh/Base.js
var Mesh_Base = __webpack_require__(33);
;// CONCATENATED MODULE: ./src/Mesh/Mesh.js









function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,getPrototypeOf/* default */.Z)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,getPrototypeOf/* default */.Z)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,possibleConstructorReturn/* default */.Z)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }





var Mesh = /*#__PURE__*/function (_Base) {
  (0,inherits/* default */.Z)(Mesh, _Base);

  var _super = _createSuper(Mesh);

  // array.BYTES_PER_ELEMENT * indicesEachLength
  function Mesh() {
    var _this;

    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      wireFrame: false
    };

    (0,classCallCheck/* default */.Z)(this, Mesh);

    _this = _super.call(this, config);

    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "drawType", 'TRIANGLES');

    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "offset", 0);

    _this.shaders = {
      vertex: mesh.vertexShader,
      fragment: mesh.fragmentShader
    };
    _this.uniformData.z = {
      value: config.z || 1,
      type: 'uniform1f'
    };

    _this.init(config);

    _this.vSize = 2;
    return _this;
  }

  (0,createClass/* default */.Z)(Mesh, [{
    key: "setMap",
    value: function setMap(src) {
      var _this2 = this;

      return this.loadTexture(this.gl, src).then(function (texture) {
        _this2.setData(texture);
      });
    }
  }, {
    key: "setData",
    value: function setData(data, indices) {
      this.dispose();
      var points = [];
      var colors = [];
      this.data = data;
      data.forEach(function (item) {
        var coord = [item.position.x, item.position.y];
        var color = item.color || [1, 1, 0, 1];
        colors.push.apply(colors, (0,toConsumableArray/* default */.Z)(color));
        points.push.apply(points, coord);
      });
      this.vertex = points;
      this.setBufferData(points, 'position', 2);
      this.setBufferData(colors, 'color', 4);
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
      this.vertex = position;
      this.setBufferData(position, 'position', 2);
      this.setBufferData(color, 'color', 4);
      this.setBufferData(uvs, 'uv', 2);
      this.setIndices(indices);
    }
  }, {
    key: "setIndices",
    value: function setIndices(input) {
      var indices = []; // 支持显示网格线

      if (this.config.wireFrame && this.drawType === 'TRIANGLES') {
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

      this.gl.useProgram(this.shaderProgram);
      this.setUniformData(); // 渲染

      if (this.indices.length) {
        var drawType = this.config.wireFrame ? 'LINES' : this.gl[this.drawType]; // offset必须乘以类型数组的长度，意味着要从内存中数据的对应字节数开始算 根据类型乘对应的BYTES_PER_ELEMENT

        this.gl.drawElements(drawType, this.indices.length, this.gl.UNSIGNED_SHORT, this.offset);
      }
    }
  }]);

  return Mesh;
}(Mesh_Base/* default */.Z);

/* harmony default export */ const Mesh_Mesh = (Mesh);
;// CONCATENATED MODULE: ./src/Shaders/point.js
/* harmony default export */ const point = ({
  vertexShader: function vertexShader(config) {
    return "\n\t\tprecision mediump float;\n\t\tattribute vec2 position;\n\t\tattribute vec4 color;\n\t\tattribute float size;\n\t\tattribute float initTime;\n\t\tuniform float z;\n\t\tuniform mat3 transform;\n\t\tvarying vec4 vColor;\n\t\tuniform float t;\n        uniform float pixelRatio;\n\t\tvarying float vTime;\n\t\t\n\t\tvoid main()\n\t\t{\n\t\t\tvColor = color;\n\t\t\tgl_PointSize = size * pixelRatio;\n\t\t\tvec3 mPosition = transform * vec3(position,1.);\n\t\t\tgl_Position = vec4(mPosition.xy,z,1.);\n\t\t\tvTime = initTime;\n\t\t}\n\t\t";
  },
  fragmentShader: function fragmentShader(_ref) {
    var isRound = _ref.isRound,
        map = _ref.map,
        isGradual = _ref.isGradual;
    console.log(isRound);
    return "\n\t\tprecision mediump float;\n\t\tuniform float t;\n\t\tuniform float antialias;\n\t\tuniform sampler2D map;\n\t\tvarying float vTime;\n\t\tvarying vec4 vColor;\n\t\tvoid main()\n\t\t{\n\t\t\tfloat distance = distance(gl_PointCoord, vec2(0.5, 0.5));\n\t\t".concat(isRound ? "\n\t\t\tif (distance <= 0.5){" : '', "\n\t\t\t").concat(map ? "\n\t\t\t\tvec4 texelColor = texture2D( map, gl_PointCoord ); \n\t\t\t\tgl_FragColor = texelColor;\n\t\t\t\t".concat(isGradual ? "\n\t\t\t\tgl_FragColor.w *= sin(t+vTime)*0.75/2. + 1.-0.75/2." : '', ";\n\t\t\t\tif(texelColor.w<=0.01){\n\t\t\t\t\tdiscard;\n\t\t\t\t}\n\t\t\t") : "\n\t\t\t\tgl_FragColor = vColor;\n\t\t\t\t".concat(isGradual ? "\n\t\t\t\tgl_FragColor.w = 1. - distance*2.;\n\t\t\t\tgl_FragColor.w *= sin(t+vTime)*0.75/2. + 1.-0.75/2. ;" : '', "\n\t\t\t"), "\n\t\t").concat(isRound ? "\n\t\t\t\tfloat smoothSideRatio = smoothstep(0.,antialias,(0.5-distance));\n\t\t\t\tgl_FragColor.w *= smoothSideRatio;\n\t\t\t}else{\n\t\t\t\tdiscard;\n\t\t\t}\n\t\t" : '', "\n\t\t}\n\t\t");
  }
});
;// CONCATENATED MODULE: ./src/Mesh/Point.js









function Point_createSuper(Derived) { var hasNativeReflectConstruct = Point_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,getPrototypeOf/* default */.Z)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,getPrototypeOf/* default */.Z)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,possibleConstructorReturn/* default */.Z)(this, result); }; }

function Point_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




var Point = /*#__PURE__*/function (_Base) {
  (0,inherits/* default */.Z)(Point, _Base);

  var _super = Point_createSuper(Point);

  function Point(config) {
    var _this;

    (0,classCallCheck/* default */.Z)(this, Point);

    config = Object.assign({
      isRound: true,
      initTime: false
    }, config);
    _this = _super.call(this, config);

    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "drawType", 'POINTS');

    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "vertex", []);

    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "offset", 0);

    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "vSize", 2);

    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "bufferType", 'GL_DYNAMIC_DRAW');

    _this.shaders = {
      vertex: config.vertexShader || point.vertexShader(config),
      fragment: config.fragmentShader || point.fragmentShader(config)
    };
    _this.uniformData = {
      z: {
        value: 1,
        type: 'uniform1f'
      },
      t: {
        value: 1,
        type: 'uniform1f'
      },
      antialias: {
        value: 0.1,
        type: 'uniform1f'
      }
    };

    _this.init(config);

    return _this;
  }

  (0,createClass/* default */.Z)(Point, [{
    key: "setData",
    value: function setData(data) {
      var _this2 = this;

      this.dispose();
      var points = [];
      var colors = [];
      var size = [];
      var vTime = [];
      data.forEach(function (item) {
        points.push(item.position.x, item.position.y);
        colors.push.apply(colors, (0,toConsumableArray/* default */.Z)(item.color || [1, 0, 0, 1]));
        size.push(item.size || 10);
        vTime.push(item.initTime || _this2.config.initTime || 2 * Math.random() * Math.PI);
      });
      this.vertex = points;
      this.setBufferData(points, 'position', 2);
      this.setBufferData(colors, 'color', 4);
      this.setBufferData(size, 'size', 1);
      this.setBufferData(vTime, 'initTime', 1);
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
        type: 'uniformMatrix3fv'
      };
      this.vertex = position;
      position && this.setBufferData(position, 'position', 2);
      color && this.setBufferData(color, 'color', 4);
      size && this.setBufferData(size, 'size', 1);

      if (initTime) {
        this.setBufferData(initTime, 'initTime', 1);
      }
    }
  }]);

  return Point;
}(Mesh_Base/* default */.Z);

/* harmony default export */ const Mesh_Point = (Point);
// EXTERNAL MODULE: ./src/Mesh/Line.js + 1 modules
var Line = __webpack_require__(323);
;// CONCATENATED MODULE: ./src/Shaders/widthLine.js
/* harmony default export */ const widthLine = ({
  // 先求连接线然后再求垂线
  // 求出等比放大的值
  vertexShader: "\n\tprecision lowp float;\n\tattribute vec2 now;\n\tattribute vec2 pre;\n\tattribute vec2 next;\n\tattribute float side;\n\tuniform float width;\n\tuniform float aspect;\n\tuniform mat3 transform;\n\tuniform float offset;\n\tvarying float vSide;\n\tvoid main()\n\t{\n\t\tvSide = side;\n\n\t\t// \u5148\u8F6C\u6362\u5750\u6807\u7CFB\n\t\tvec2 mNow = (transform*vec3(now,1.)).xy;\n\t\tvec2 mNext = (transform*vec3(next,1.)).xy;\n\t\tvec2 mPre = (transform*vec3(pre,1.)).xy;\n\t\tvec2 _now = vec2(mNow);\n\t\tvec2 _next = vec2(mNext);\n\t\tvec2 _pre =  vec2(mPre);\n\t\n\t\t// \u5148\u628A\u672C\u5750\u6807\u7CFB\u7684\u5750\u6807\u653E\u5927\uFF0C\u548C\u771F\u5B9E\u7684\u5916\u754C\u5750\u6807\u4E00\u6837,\u8FD9\u6837\u6C42\u51FA\u6765\u7684\u76F8\u5BF9\u5411\u91CF\u662F\u51C6\u786E\u7684\uFF0C\u5982\u679C\u5728\u540E\u9762\u4E4B\u95F4\u5BF9normal\u8FDB\u884C\u53D8\u5316\uFF0C\u5C31\u4F1A\u5F97\u51FA\u9519\u8BEF\u7684\u7ED3\u679C\n\t\t_now.x *= aspect;\n\t\t_next.x *= aspect;\n\t\t_pre.x *= aspect;\n\t\t\n\t\tvec2 point0_1 = normalize(_now - _pre);\n\t\tvec2 point2_1 = normalize(_next - _now);\n\t\tvec2 point2_1_0v = normalize(point2_1 + point0_1);\n\t\t\n\t\tvec2 normal = vec2( -point2_1_0v.y , point2_1_0v.x );\n\t\tvec2 offsets = offset*normal;\n\n\t\t//\u8FD9\u4E2A\u7B97\u6CD5\u4E0B\u5148\u653E\u5927,\u6C42\u51FA\u7684Normal\u6BD4\u4F8B\u5728\u653E\u5927\u7684\u5750\u6807\u7CFB\u4E0B\u662F\u5BF9\u7684\uFF0C\u6839\u636E\u8FD9\u4E2Anormal\u6C42\u51FA\u653E\u5927\u7684\u6BD4\u4F8B\n\t\tfloat ratio = sqrt(1.0 - pow(dot(normal,point0_1),2.0));\n\t\tvec2 dir = normal * width/ratio * .5 * side + offsets;\n\n\t\t// \u5F97\u51FA\u7684x\u5750\u6807\u4F1A\u88AB\u653E\u5927\uFF0C\u8FD9\u91CC\u8981\u9664\u6389,\u8BB0\u5F97\u8981\u7528\u8F6C\u6362\u540E\u5750\u6807\u8FDB\u884C\u52A0\u51CF\n\t\tgl_Position = vec4(mNow.x + dir.x/aspect,mNow.y+dir.y , 1., 1.);\n\t}\n\t",
  fragmentShader: "\n\tprecision lowp float;\n\tuniform vec4 color;\n\tvarying float vSide;\n\tvoid main()\n\t{\n\t\tfloat smoothSideRatio = max(0.1,smoothstep(0.,0.4,(1. - abs(vSide))));\n\t\tgl_FragColor = color;\n\t\tgl_FragColor.w = smoothSideRatio;\n\t}\n\t"
});
;// CONCATENATED MODULE: ./src/Mesh/WidthLine.js








function WidthLine_createSuper(Derived) { var hasNativeReflectConstruct = WidthLine_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,getPrototypeOf/* default */.Z)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,getPrototypeOf/* default */.Z)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,possibleConstructorReturn/* default */.Z)(this, result); }; }

function WidthLine_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




var WidthLine = /*#__PURE__*/function (_Base) {
  (0,inherits/* default */.Z)(WidthLine, _Base);

  var _super = WidthLine_createSuper(WidthLine);

  // "TRIANGLE_STRIP";
  function WidthLine(config) {
    var _this;

    (0,classCallCheck/* default */.Z)(this, WidthLine);

    _this = _super.call(this);

    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "drawType", 'TRIANGLES');

    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "shaders", {
      vertex: widthLine.vertexShader,
      fragment: widthLine.fragmentShader
    });

    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "offset", 0);

    config = Object.assign({
      width: 20,
      z: 1,
      offset: 0
    }, config);
    _this.uniformData = {
      z: {
        value: config.z || 1,
        type: 'uniform1f'
      }
    };

    _this.init(config);

    return _this;
  }

  (0,createClass/* default */.Z)(WidthLine, [{
    key: "setData",
    value: function setData(data) {
      var viewport = this.miniGL.viewport;
      if (!data.length && data.length < 2) return console.warn('need input data.length >= 2');
      this.uniformData.color = {
        value: this.config.color || [1, 0, 1, 1],
        type: 'uniform4fv'
      };
      this.uniformData.width = {
        value: 2 * this.config.width / this.miniGL.viewport.height,
        type: 'uniform1f'
      };
      this.uniformData.offset = {
        value: 2 * this.config.offset / this.miniGL.viewport.height,
        type: 'uniform1f'
      };
      this.data = data;
      var points = [];
      data.forEach(function (item) {
        points.push(item.position.x, item.position.y);
      }); // 生产双倍点for两个边

      var res = this.calcSidePoints(points);
      this.setBufferData(res.nowData, 'now', 2);
      this.setBufferData(res.preData, 'pre', 2);
      this.setBufferData(res.nextData, 'next', 2);
      this.setBufferData(res.side, 'side', 1); // 生成顶点

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
    key: "addData",
    value: function addData(data) {}
  }, {
    key: "calcSidePoints",
    value: function calcSidePoints() {
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
      return {
        nowData: nowData,
        preData: preData,
        side: side,
        nextData: nextData
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
        this.gl.vertexAttribPointer(bufferPosition, this.buffersSize[key], this.gl.FLOAT, normalize, 0, offset); // todo:webgl2.0 实例数组能减少同样形状但渲染不同的高性能方案

        this.gl.enableVertexAttribArray(bufferPosition);
      } // 使用顶点数据


      this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.indicesPointer); // 加载shader程序

      this.gl.useProgram(this.shaderProgram);
      this.setUniformData(); // 渲染

      if (this.indices.length) {
        this.gl.drawElements(this.gl[this.drawType], this.indices.length, this.gl.UNSIGNED_SHORT, this.offset);
      }
    }
  }]);

  return WidthLine;
}(Mesh_Base/* default */.Z);

/* harmony default export */ const Mesh_WidthLine = (WidthLine);
;// CONCATENATED MODULE: ./src/View/Canvas.js








/**
 * @class
 */

var Canvas = /*#__PURE__*/function () {
  function Canvas(config) {
    var _this = this;

    (0,classCallCheck/* default */.Z)(this, Canvas);

    (0,defineProperty/* default */.Z)(this, "status", 'update');

    (0,defineProperty/* default */.Z)(this, "update", function () {
      var time = new Date().getTime();
      var delta = time - _this.beforeTime;
      _this.beforeTime = time;

      _this.render(delta);

      if (_this.status === 'update') requestAnimationFrame(_this.update);
    });

    this.index = 0;
    this.meshes = [];
    this.miniGL = config.miniGL;
    this.gl = this.miniGL.gl; // 基础渲染以下类，其他形状让让用户自己new
    // 牺牲一些性能，渲染多次drawElements来避免通过退化三角形合并形状，导致的事件处理困难（需要分层处理合并的图层，然后按照像素去检测，比较恶心）

    this.mesh = new Mesh_Mesh(config.meshConfig);
    this.point = new Mesh_Point(config.pointConfig);
    this.line = new Line/* default */.Z(config.lineConfig);
    this.widthLine = new Mesh_WidthLine(config.widthLineConfig);
    this.add(this.mesh);
    this.add(this.line);
    this.add(this.point);
    this.add(this.widthLine);
  }

  (0,createClass/* default */.Z)(Canvas, [{
    key: "dispose",
    value: function dispose() {
      var _this2 = this;

      this.meshes.forEach(function (item) {
        _this2.remove(item);

        item.destroy && item.destroy();
      });
      this.meshes = [];
    }
  }, {
    key: "toDataUrl",
    value: function toDataUrl() {
      return this.gl.canvas.toDataUrl();
    }
  }, {
    key: "add",
    value:
    /**
     * @param  {} mesh
     * @param  {} [key]
     * @returns {String} key
     */
    function add(mesh) {
      this.meshes.push(mesh);
      mesh.onAdd && mesh.onAdd(this.miniGL);
      mesh.parent = this;
      return mesh;
    }
  }, {
    key: "remove",
    value: function remove(child) {
      var index = this.meshes.indexOf(child);
      this.meshes.splice(index, 1);
    }
  }, {
    key: "addChild",
    value: function addChild() {
      var _this$add;

      (_this$add = this.add).call.apply(_this$add, [this].concat(Array.prototype.slice.call(arguments)));
    }
  }, {
    key: "removeChild",
    value: function removeChild() {
      var _this$remove;

      (_this$remove = this.remove).call.apply(_this$remove, [this].concat(Array.prototype.slice.call(arguments)));
    }
  }, {
    key: "render",
    value: function render(delta) {
      var _this3 = this;

      var gl = this.gl;
      this.miniGL.fire('beforerender', delta); // 清空

      gl.clearDepth(1.0); // gl.enable(gl.DEPTH_TEST);

      gl.disable(gl.DEPTH_TEST);
      gl.depthFunc(gl.LEQUAL);
      gl.disable(gl.CULL_FACE);
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
      this.meshes.forEach(function (mesh) {
        _this3.renderMesh(mesh, delta);
      });
    }
    /**
     * @param  {} mesh
     * @param  {} delta
     * @param  {} parentMatrix 一级级传下来的矩阵
     */

  }, {
    key: "renderMesh",
    value: function renderMesh(mesh, delta, parentMatrix) {
      var _this4 = this;

      var gl = this.gl;
      var blendMode = (mesh.texture || {}).premultiplyAlpha ? 'ONE' : 'SRC_ALPHA';
      gl.enable(gl.BLEND);
      gl.blendFunc(gl[blendMode], mesh.blendMode || gl.ONE_MINUS_SRC_ALPHA); // 写入深度缓冲

      if (mesh.visible) {
        this.makeTransform(mesh, parentMatrix);
        this.makeNeedUniform(mesh);
        mesh.render(delta); // 更新子元素

        if (mesh.children) {
          mesh.children.forEach(function (item) {
            _this4.renderMesh(item, delta, mesh.uniformData.modelView.value);
          });
        }
      }
    }
  }, {
    key: "makeNeedUniform",
    value: function makeNeedUniform(item) {
      item.uniformData.aspect = {
        value: this.miniGL.viewport.ratio,
        type: 'uniform1f'
      };
      item.uniformData.pixelRatio = {
        value: this.miniGL.viewport.pixelRatio,
        type: 'uniform1f'
      };
    }
  }, {
    key: "makeTransform",
    value: function makeTransform(item, parentMatrix) {
      if (parentMatrix) {
        var modelView = external_gl_matrix_.mat3.mul(external_gl_matrix_.mat3.create(), parentMatrix, item.matrix);
        item.uniformData.modelView = {
          value: modelView,
          type: 'uniformMatrix3fv'
        };
      } else {
        item.uniformData.modelView = {
          value: item.matrix,
          type: 'uniformMatrix3fv'
        };
      }

      item.uniformData.transform = {
        value: this.miniGL.viewport.transform,
        type: 'uniformMatrix3fv'
      };
    }
  }]);

  return Canvas;
}();

/* harmony default export */ const View_Canvas = (Canvas);
;// CONCATENATED MODULE: ./src/Control/Controller.js





var Controller = /*#__PURE__*/function () {
  function Controller(config) {
    var _this = this;

    (0,classCallCheck/* default */.Z)(this, Controller);

    (0,defineProperty/* default */.Z)(this, "onMouseMove", function (e) {
      var x = e.offsetX - _this.startXY.x + _this.startXY.startX;
      var y = e.offsetY - _this.startXY.y + _this.startXY.startY;

      _this.moveTo(x, y);
    });

    (0,defineProperty/* default */.Z)(this, "onMouseUp", function () {
      var container = _this.miniGL.container;
      container.removeEventListener('mousemove', _this.onMouseMove);
      container.removeEventListener('mouseup', _this.onMouseUp);
    });

    this.miniGL = config.miniGL;
    this.viewport = this.miniGL.viewport;
    this.gl = this.miniGL.gl;
    this.config = Object.assign({// 默认参数
    }, config.config);

    if (!config.disableController) {
      this.addEvents();
    }

    this.matrix = external_gl_matrix_.mat3.create();
  }

  (0,createClass/* default */.Z)(Controller, [{
    key: "addEvents",
    value: function addEvents() {
      var _this2 = this;

      var container = this.miniGL.container;
      container.addEventListener('mousedown', function (e) {
        if (e.ctrlKey) {
          e.preventDefault();
          return;
        }

        _this2.startXY = {
          x: e.offsetX,
          y: e.offsetY,
          startX: _this2.viewport.translate[0],
          startY: _this2.viewport.translate[1]
        };

        _this2.addMoveEvents();
      });
      container.addEventListener('wheel', function (e) {
        e.preventDefault();

        _this2.zoom(e.deltaY > 0 ? 0.99 : 1.01, e.pageX, e.pageY);
      });
    }
  }, {
    key: "addMoveEvents",
    value: function addMoveEvents() {
      var container = this.miniGL.container;
      container.addEventListener('mousemove', this.onMouseMove);
      container.addEventListener('mouseup', this.onMouseUp);
    }
  }, {
    key: "zoomTo",
    value:
    /**
     * @param  {} scale
     * @param  {} cx
     * @param  {} cy
     */
    function zoomTo(scale, cx, cy) {
      var changeScale = scale / this.viewport.scale;
      this.zoom(changeScale, cx, cy);
    }
    /**
     * @param  {} scale
     * @param  {} cx
     * @param  {} cy
     */

  }, {
    key: "zoom",
    value: function zoom(scale, cx, cy) {
      // 求变换前的屏幕坐标
      var canvasPos = [(cx - this.viewport.translate[0]) / this.viewport.scale, (cy - this.viewport.translate[1]) / this.viewport.scale];
      var nextScale = scale * this.viewport.scale; // 求出变换后的偏移坐标

      var x = cx - canvasPos[0] * nextScale;
      var y = cy - canvasPos[1] * nextScale;
      this.transform(nextScale, x, y);
    } // 这个x,y是当前屏幕的x,y,变换后的

    /**
     * @param  {} x
     * @param  {} y
     */

  }, {
    key: "moveTo",
    value: function moveTo(x, y) {
      var scale = this.viewport.scale;
      this.transform(scale, x, y);
    }
  }, {
    key: "move",
    value: function move(x, y) {
      var scale = this.viewport.scale;
      x = x + this.viewport.translate[0];
      y = y + this.viewport.translate[1];
      this.transform(scale, x, y);
    }
    /** 转换到指定情形，先放大后平移，然后注入到viewport.transform
     * @param  {} scale
     * @param  {} x
     * @param  {} y
     */

  }, {
    key: "transform",
    value: function transform(scale, x, y) {
      this.viewport.translate = [x, y];
      this.viewport.scale = scale;
      this.matrix = external_gl_matrix_.mat3.create();
      external_gl_matrix_.mat3.translate(this.matrix, this.matrix, this.viewport.translate);
      external_gl_matrix_.mat3.scale(this.matrix, this.matrix, [scale, scale]);
      external_gl_matrix_.mat3.mul(this.viewport.transform, this.viewport.matrix, this.matrix);
    }
    /**
     * @param  {} rad
     * @param  {} cx=this.viewport.width/2
     * @param  {} cy=this.viewport.height/2
     */

  }, {
    key: "rotateTo",
    value: function rotateTo(rad) {
      var cx = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.viewport.width / 2;
      var cy = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.viewport.height / 2;
      var changeRad = rad - this.viewport.rotation || 0;
      this.rotate(changeRad, cx, cy);
    }
  }, {
    key: "rotate",
    value: function rotate(rad) {
      var cx = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.viewport.width / 2;
      var cy = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.viewport.height / 2;
      var transform = this.viewport.transform;
      this.viewport.rotation += rad;
      external_gl_matrix_.mat3.translate(transform, transform, [cx, cy]); // 再平移回去

      external_gl_matrix_.mat3.rotate(transform, transform, rad); // 再平移回去

      external_gl_matrix_.mat3.translate(transform, transform, [-cx, -cy]); // 先平移到原点
    }
  }]);

  return Controller;
}();

/* harmony default export */ const Control_Controller = (Controller);
;// CONCATENATED MODULE: ./src/Shaders/flyline.js
/* harmony default export */ const flyline = ({
  // shader中进行坐标转换会不会快？CPU只会调用一次，GPU每帧都要重复去运算，2d情况下没有相机，
  // 没有坐标因相机而变化的情况，所以不用再shader中运算，可以减少cpu的调用率
  vertexShader: "\n\tprecision mediump float;\n\tattribute vec4 position;\n\tattribute float number;\n\tuniform vec4 startColor;\n\tuniform vec4 endColor;\n\tuniform float length;\n\tuniform float t;\n\tuniform float z;\n\tvarying vec4 vColor;\n\tvoid main()\n\t{\n\t\tgl_Position = vec4(position.xy,z,1.);\n\t\tvColor = endColor - (length + t - number)/length*(endColor - startColor);\n\t}\n\t",
  fragmentShader: "\n\tprecision mediump float;\n\tvarying vec4 vColor;\n\tvoid main()\n\t{\n\t\tif(vColor.w<=0.02){\n\t\t\tdiscard;\n\t\t}\n\t\tgl_FragColor = vColor;\n\t}\n\t"
});
;// CONCATENATED MODULE: ./src/Utils/vector.js
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


;// CONCATENATED MODULE: ./src/Utils/BezierLine.js




var BezierLine = /*#__PURE__*/function () {
  function BezierLine() {
    (0,classCallCheck/* default */.Z)(this, BezierLine);
  }

  (0,createClass/* default */.Z)(BezierLine, [{
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
      var nextIndex;
      var nowIndex = 0;
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

/* harmony default export */ const Utils_BezierLine = (BezierLine);
;// CONCATENATED MODULE: ./src/Mesh/FlyLine.js








function FlyLine_createSuper(Derived) { var hasNativeReflectConstruct = FlyLine_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,getPrototypeOf/* default */.Z)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,getPrototypeOf/* default */.Z)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,possibleConstructorReturn/* default */.Z)(this, result); }; }

function FlyLine_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }






var FlyLine_Line = /*#__PURE__*/function (_Base) {
  (0,inherits/* default */.Z)(Line, _Base);

  var _super = FlyLine_createSuper(Line);

  function Line(config) {
    var _this;

    (0,classCallCheck/* default */.Z)(this, Line);

    config = Object.assign({
      z: 0.1,
      length: 50,
      lineHeight: 0.2,
      speed: 1,
      smoothNumber: 1
    }, config);
    _this = _super.call(this, config);

    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "drawType", 'LINE_STRIP');

    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "shaders", {
      vertex: flyline.vertexShader,
      fragment: flyline.fragmentShader
    });

    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "offset", 0);

    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "depthMask", false);

    _this.init(config);

    _this.bezierLine = new Utils_BezierLine();
    _this.uniformData = {
      t: {
        value: 0,
        type: 'uniform1f'
      },
      length: {
        value: config.length,
        type: 'uniform1f'
      },
      startColor: {
        value: config.startColor || [1, 0, 0, 0],
        type: 'uniform4fv'
      },
      endColor: {
        value: config.endColor || [1, 0, 0, 1],
        type: 'uniform4fv'
      },
      z: {
        value: _this.config.z,
        type: 'uniform1f'
      }
    };
    return _this;
  }

  (0,createClass/* default */.Z)(Line, [{
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

      this.setBufferData(points, 'position', 2);
      this.setBufferData(numbers, 'number', 1);
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


      this.gl.useProgram(this.shaderProgram);
      this.setUniformData(); // 渲染

      if (this.vertex.length) {
        // specifying the starting index in the array of vector points.
        // specifying the number of indices to be rendered.
        var offset = Math.max(uniformData.t.value, 0); // 起步时要算出真实的减掉负数的size，到达时，不能超过整个数组长度

        var size = Math.min(uniformData.t.value + config.length - offset, length - offset);
        if (size === 0) return;
        this.gl.drawArrays(this.gl[this.drawType], offset, size);
      }
    }
  }]);

  return Line;
}(Mesh_Base/* default */.Z);

/* harmony default export */ const FlyLine = (FlyLine_Line);
;// CONCATENATED MODULE: ./src/Shaders/image.js
/* harmony default export */ const Shaders_image = ({
  vertexShader: "\n\tprecision highp float;\n\tattribute vec2 position;\n\tattribute vec2 uv;\n\tvarying vec4 vColor;\n\tvarying vec2 vUv;\n    uniform mat3 transform;\n    uniform mat3 modelView;\n    uniform float z;\n\tvoid main()\n\t{\n        vUv = uv;\n\t\tvec3 mPosition = transform * modelView * vec3(position,1.0);\n\t\tgl_Position = vec4(mPosition.xy,z,1.0);\n\t}\n\t",
  fragmentShader: "\n\tprecision highp float;\n    varying vec2 vUv;\n    uniform vec4 alphaColor;\n\tuniform sampler2D u_Sampler;\n\tvoid main()\n\t{\n        gl_FragColor = texture2D(u_Sampler,vUv)*alphaColor;\n\t}\n\t"
});
// EXTERNAL MODULE: ./src/Utils/LoadTexture.js
var LoadTexture = __webpack_require__(816);
;// CONCATENATED MODULE: ./src/Mesh/Image.js








function Image_createSuper(Derived) { var hasNativeReflectConstruct = Image_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,getPrototypeOf/* default */.Z)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,getPrototypeOf/* default */.Z)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,possibleConstructorReturn/* default */.Z)(this, result); }; }

function Image_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }





var Image = /*#__PURE__*/function (_Base) {
  (0,inherits/* default */.Z)(Image, _Base);

  var _super = Image_createSuper(Image);

  // array.BYTES_PER_ELEMENT * indicesEachLength
  function Image() {
    var _this;

    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    (0,classCallCheck/* default */.Z)(this, Image);

    _this = _super.call(this, config);

    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "drawType", 'TRIANGLES');

    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "offset", 0);

    _this.shaders = {
      vertex: Shaders_image.vertexShader,
      fragment: Shaders_image.fragmentShader
    };
    _this.uniformData = {
      z: {
        value: config.z || 1,
        type: 'uniform1f'
      },
      alphaColor: {
        value: config.alphaColor || [1, 1, 1, 1],
        type: 'uniform4fv'
      }
    };

    _this.init(config);

    _this.vSize = 2;
    return _this;
  }

  (0,createClass/* default */.Z)(Image, [{
    key: "setMap",
    value: function setMap(imagePath) {
      var _this2 = this;

      (0,LoadTexture/* default */.Z)(this.gl, imagePath).then(function (texture) {
        _this2.setTexture(texture);
      });
    }
  }, {
    key: "setData",
    value: function setData(data) {
      if (!this.miniGL) {
        throw new Error('请先将组件通过miniGL.canvas.add()加入实例中');
      } // 释放内存空间


      this.dispose();
      this.data = data;
      var width = data.width,
          height = data.height,
          src = data.src,
          texture = data.texture,
          _data$x = data.x,
          x = _data$x === void 0 ? 0 : _data$x,
          _data$y = data.y,
          y = _data$y === void 0 ? 0 : _data$y; // 设置纹理

      if (src) {
        this.setMap(src);
      }

      if (texture) {
        this.setTexture(texture);
      } // 计算uv


      var points = [x, y, x, y + height, x + width, y, x + width, y + height];
      var indices = [0, 1, 2, 2, 1, 3];
      var uv = [0, 0, 0, 1, 1, 0, 1, 1];
      this.vertex = points;
      this.setBufferData(points, 'position', 2);
      this.setBufferData(uv, 'uv', 2);
      this.setIndices(indices);
      this.uniformsNeedUpdate = true;
    } // 设置纹理数据

  }, {
    key: "setTexture",
    value: function setTexture(texture) {
      var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'u_Sampler';
      this.uniformData[key] = {
        type: 'uniform1i',
        // image
        value: 0,
        // 0号纹理传递
        texture: texture.webglTexture ? texture.webglTexture : texture
      };
      this.texture = texture;
      this.uniformsNeedUpdate = true;
    }
  }, {
    key: "render",
    value: function render() {
      // 2D 只需要两个坐标轴标识位置
      var offset = 0; // 从数据第几位开始偏移

      var normalize = false;
      var gl = this.gl; // 图片加载完了再说

      if (!this.uniformData || !this.uniformData['u_Sampler']) {
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

      gl.useProgram(this.shaderProgram);
      this.setUniformData(); // offset必须乘以类型数组的长度，意味着要从内存中数据的对应字节数开始算 根据类型乘对应的BYTES_PER_ELEMENT
      // 渲染

      if (this.indices.length) {
        gl.drawElements(gl[this.drawType], this.indices.length, gl.UNSIGNED_SHORT, this.offset);
      }
    }
  }]);

  return Image;
}(Mesh_Base/* default */.Z);

/* harmony default export */ const Mesh_Image = (Image);
;// CONCATENATED MODULE: ./src/Shaders/roundLine.js
/* harmony default export */ const roundLine = ({
  // 先求连接线然后再求垂线
  // 求出等比放大的值
  vertexShader: "\n\tprecision lowp float;\n\tattribute vec2 now;\n\tattribute vec2 pre;\n\tattribute vec2 next;\n\tattribute float side;\n\tattribute float status;\n\tuniform float width;\n\tuniform float aspect;\n\tuniform mat3 transform;\n\tuniform float offset;\n\tvarying float vSide;\n\tvoid main()\n\t{\n\t\tvSide = side;\n\t\t\n\t\t// \u5148\u8F6C\u6362\u5750\u6807\u7CFB\n\t\tvec2 mNow = (transform*vec3(now,1.)).xy;\n\t\tvec2 mNext = (transform*vec3(next,1.)).xy;\n\t\tvec2 mPre = (transform*vec3(pre,1.)).xy;\n\t\tvec2 _now = vec2(mNow);\n\t\tvec2 _next = vec2(mNext);\n\t\tvec2 _pre =  vec2(mPre);\n\t\n\t\t// \u5148\u628A\u672C\u5750\u6807\u7CFB\u7684\u5750\u6807\u653E\u5927\uFF0C\u548C\u771F\u5B9E\u7684\u5916\u754C\u5750\u6807\u4E00\u6837,\u8FD9\u6837\u6C42\u51FA\u6765\u7684\u76F8\u5BF9\u5411\u91CF\u662F\u51C6\u786E\u7684\uFF0C\u5982\u679C\u5728\u540E\u9762\u4E4B\u95F4\u5BF9normal\u8FDB\u884C\u53D8\u5316\uFF0C\u5C31\u4F1A\u5F97\u51FA\u9519\u8BEF\u7684\u7ED3\u679C\n\t\t_now.x *= aspect;\n\t\t_next.x *= aspect;\n\t\t_pre.x *= aspect;\n\t\t\n\t\tvec2 _dir = normalize(status*_now - status*_pre + (1.0-status)*_next - (1.0-status)*_now);\n\n\t\tvec2 normal = vec2( -_dir.y , _dir.x );\n\t\tvec2 dir = normal * width * .5 * side;\n\n\t\t// \u504F\u79FB\u91CF\n\t\tif(offset!=0.){\n\t\t\tvec2 point21 = normalize(_next - _now);\n\t\t\tvec2 point10 = normalize(_now - _pre);\n\t\t\tvec2 offsetDir = normalize( point21 + point10);\n\t\t\tvec2 offsetNormal = vec2( -offsetDir.y, offsetDir.x);\n\t\t\tfloat ratio = sqrt(1.0 - pow(dot(offsetNormal,point10),2.0));\n\t\t\tvec2 offsets =  offsetNormal * offset/ratio  ;\n\t\t\tdir += offsets;\n\t\t}\n\n\t\t// \u5F97\u51FA\u7684x\u5750\u6807\u4F1A\u88AB\u653E\u5927\uFF0C\u8FD9\u91CC\u8981\u9664\u6389,\u8BB0\u5F97\u8981\u7528\u8F6C\u6362\u540E\u5750\u6807\u8FDB\u884C\u52A0\u51CF\n\t\tgl_Position = vec4(mNow.x + dir.x/aspect,mNow.y+dir.y , 1., 1.);\n\t}\n\t",
  fragmentShader: "\n\tprecision lowp float;\n\tuniform vec4 color;\n\tvarying float vSide;\n\tvoid main()\n\t{\n\t\tfloat smoothSideRatio = max(0.1,smoothstep(0.,0.3,(1. - abs(vSide))));\n\t\tgl_FragColor = color;\n\t\tgl_FragColor.w *= smoothSideRatio;\n\t}\n\t"
});
;// CONCATENATED MODULE: ./src/Mesh/RoundLine/Line.js








function Line_createSuper(Derived) { var hasNativeReflectConstruct = Line_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,getPrototypeOf/* default */.Z)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,getPrototypeOf/* default */.Z)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,possibleConstructorReturn/* default */.Z)(this, result); }; }

function Line_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




var RoundLine = /*#__PURE__*/function (_Base) {
  (0,inherits/* default */.Z)(RoundLine, _Base);

  var _super = Line_createSuper(RoundLine);

  //"TRIANGLE_STRIP";
  function RoundLine(config) {
    var _this;

    (0,classCallCheck/* default */.Z)(this, RoundLine);

    _this = _super.call(this);

    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "drawType", "TRIANGLES");

    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "shaders", {
      vertex: roundLine.vertexShader,
      fragment: roundLine.fragmentShader
    });

    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "offset", 0);

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

  (0,createClass/* default */.Z)(RoundLine, [{
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

      this.gl.useProgram(this.shaderProgram);
      this.setUniformData(); // 渲染

      if (this.indices.length) {
        this.gl.drawElements(this.gl[this.drawType], this.indices.length, this.gl.UNSIGNED_SHORT, this.offset);
      }
    }
  }]);

  return RoundLine;
}(Mesh_Base/* default */.Z);

/* harmony default export */ const RoundLine_Line = (RoundLine);
;// CONCATENATED MODULE: ./src/Shaders/roundLinePoint.js
/* harmony default export */ const roundLinePoint = ({
  // 先求连接线然后再求垂线
  // 求出等比放大的值
  vertexShader: "\n\tprecision highp float;\n\tattribute vec2 now;\n\tattribute vec2 pre;\n\tattribute vec2 next;\n\tuniform float width;\n\tuniform float aspect;\n\tuniform float z;\n\tuniform mat3 transform;\n\tuniform float offset;\n\tvoid main()\n\t{\n\t\t// \u5148\u8F6C\u6362\u5750\u6807\u7CFB\n\t\tvec2 mNow = (transform*vec3(now,1.)).xy;\n\t\tvec2 mNext = (transform*vec3(next,1.)).xy;\n\t\tvec2 mPre = (transform*vec3(pre,1.)).xy;\n\t\tvec2 _now = vec2(mNow);\n\t\tvec2 _next = vec2(mNext);\n\t\tvec2 _pre =  vec2(mPre);\n\t\n\t\t// \u5148\u628A\u672C\u5750\u6807\u7CFB\u7684\u5750\u6807\u653E\u5927\uFF0C\u548C\u771F\u5B9E\u7684\u5916\u754C\u5750\u6807\u4E00\u6837,\u8FD9\u6837\u6C42\u51FA\u6765\u7684\u76F8\u5BF9\u5411\u91CF\u662F\u51C6\u786E\u7684\uFF0C\u5982\u679C\u5728\u540E\u9762\u4E4B\u95F4\u5BF9normal\u8FDB\u884C\u53D8\u5316\uFF0C\u5C31\u4F1A\u5F97\u51FA\u9519\u8BEF\u7684\u7ED3\u679C\n\t\t_now.x *= aspect;\n\t\t_next.x *= aspect;\n\t\t_pre.x *= aspect;\n\t\t\n\t\t// \u504F\u79FB\n\t\tif(offset!=0.){\n\t\t\tvec2 point21 = normalize(_next - _now);\n\t\t\tvec2 point10 = normalize(_now - _pre);\n\t\t\tvec2 offsetDir = normalize( point21 + point10);\n\t\t\tvec2 offsetNormal = vec2( -offsetDir.y, offsetDir.x);\n\t\t\tfloat ratio = sqrt(1.0 - pow(dot(offsetNormal,point10),2.0));\n\t\t\tvec2 offsets =  offsetNormal * offset/ratio ;\n\t\t\toffsets.x /= aspect;\n\t\t\tmNow += offsets;\n\t\t}\n\n\t\t// \u5F97\u51FA\u7684x\u5750\u6807\u4F1A\u88AB\u653E\u5927\uFF0C\u8FD9\u91CC\u8981\u9664\u6389,\u8BB0\u5F97\u8981\u7528\u8F6C\u6362\u540E\u5750\u6807\u8FDB\u884C\u52A0\u51CF\n\t\tgl_PointSize = width;\n\n\t\tgl_Position = vec4(mNow.x,mNow.y , z, 1.);\n\t}\n\t",
  fragmentShader: "\n\tprecision highp float;\n\tuniform vec4 color;\n\tvoid main()\n\t{\n\t\tfloat l = length(gl_PointCoord - vec2(0.5,0.5));\n\t\t\n\t\tfloat smoothSideRatio = smoothstep(0.,0.3,(0.5-l));\n\t\tgl_FragColor = color;\n\t\tgl_FragColor.w *= smoothSideRatio;\n\t}\n\t"
});
;// CONCATENATED MODULE: ./src/Mesh/RoundLine/LinePoint.js








function LinePoint_createSuper(Derived) { var hasNativeReflectConstruct = LinePoint_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,getPrototypeOf/* default */.Z)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,getPrototypeOf/* default */.Z)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,possibleConstructorReturn/* default */.Z)(this, result); }; }

function LinePoint_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




var LinePoint = /*#__PURE__*/function (_Base) {
  (0,inherits/* default */.Z)(LinePoint, _Base);

  var _super = LinePoint_createSuper(LinePoint);

  //"TRIANGLE_STRIP";
  function LinePoint(config) {
    var _this;

    (0,classCallCheck/* default */.Z)(this, LinePoint);

    _this = _super.call(this);

    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "drawType", "POINTS");

    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "shaders", {
      vertex: roundLinePoint.vertexShader,
      fragment: roundLinePoint.fragmentShader
    });

    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "offset", 0);

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

  (0,createClass/* default */.Z)(LinePoint, [{
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
}(Mesh_Base/* default */.Z);

/* harmony default export */ const RoundLine_LinePoint = (LinePoint);
;// CONCATENATED MODULE: ./src/Mesh/RoundLine/index.js






var RoundLine_RoundLine = /*#__PURE__*/function () {
  function RoundLine(config) {
    (0,classCallCheck/* default */.Z)(this, RoundLine);

    (0,defineProperty/* default */.Z)(this, "depthMask", true);

    (0,defineProperty/* default */.Z)(this, "depthTest", true);

    (0,defineProperty/* default */.Z)(this, "transparent", true);

    this.line = new RoundLine_Line(config);
    this.linePoint = new RoundLine_LinePoint(config);
  }

  (0,createClass/* default */.Z)(RoundLine, [{
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

/* harmony default export */ const Mesh_RoundLine = (RoundLine_RoundLine);
;// CONCATENATED MODULE: ./src/Group/Group.js








function Group_createSuper(Derived) { var hasNativeReflectConstruct = Group_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,getPrototypeOf/* default */.Z)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,getPrototypeOf/* default */.Z)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,possibleConstructorReturn/* default */.Z)(this, result); }; }

function Group_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



/**
 * 进行批量渲染
 * @class
 */

var Group = /*#__PURE__*/function (_Base) {
  (0,inherits/* default */.Z)(Group, _Base);

  var _super = Group_createSuper(Group);

  function Group(config) {
    var _this;

    (0,classCallCheck/* default */.Z)(this, Group);

    _this = _super.call(this);

    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "depthMask", true);

    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "depthTest", true);

    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "transparent", true);

    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "children", []);

    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "childId", -1);

    _this.children = [];

    _this.init(config);

    return _this;
  }

  (0,createClass/* default */.Z)(Group, [{
    key: "dispose",
    value: function dispose() {
      Mesh_Base/* default.dispose.call */.Z.dispose.call(this);
      this.children.forEach(function (item, index) {
        item.destroy && item.destroy();
      });
    }
  }, {
    key: "onAdd",
    value: function onAdd(miniGL) {
      this.miniGL = miniGL; // 获取顶点数据内存里的指针

      this.gl = miniGL.gl;
      this.indicesPointer = this.gl.createBuffer();
      this.children.forEach(function (each) {
        if (!each.miniGL) {
          each.onAdd(miniGL);
        }
      });
    }
  }, {
    key: "addChild",
    value: function addChild(child) {
      this.childId++;
      child.childId = this.childId;
      child.parent = this;
      this.children.push(child);
      child.zOrder = this.children.length - 1;

      if (this.miniGL) {
        child.onAdd(this.miniGL);
      }
    }
  }, {
    key: "addChildAt",
    value: function addChildAt(child, index) {
      child.childId = this.childId++;
      child.parent = this;

      if (this.miniGL) {
        child.onAdd(this.miniGL);
      }

      this.children.splice(index, 0, child);
      child.zOrder = index + 1;
    }
  }, {
    key: "removeChild",
    value: function removeChild(child) {
      var pos = this.children.indexOf(child);

      if (!pos <= -1) {
        return;
      }

      this.children[pos].parent = undefined;
      this.children.splice(pos, 1);
    }
  }, {
    key: "swapChildren",
    value: function swapChildren(a, b) {
      var _this2 = this;

      this.children.forEach(function (item, index) {
        if (item === a) {
          _this2.children[index] = b;
          _this2.children[index].zOrder = index;
        }

        if (item === b) {
          _this2.children[index] = a;
          _this2.children[index].zOrder = index;
        }
      });
    }
  }]);

  return Group;
}(Mesh_Base/* default */.Z);

/* harmony default export */ const Group_Group = (Group);
;// CONCATENATED MODULE: ./src/dragonBones/Enum.js
var BlendMode = {
  Normal: 0,
  Add: 1,
  Alpha: 2,
  Darken: 3,
  Difference: 4,
  Erase: 5,
  HardLight: 6,
  Invert: 7,
  Layer: 8,
  Lighten: 9,
  Multiply: 10,
  Overlay: 11,
  Screen: 12,
  Subtract: 13
};
var BoneType = {
  Bone: 0,
  Surface: 1
};
var BinaryOffset = {
  WeigthBoneCount: 0,
  WeigthFloatOffset: 1,
  WeigthBoneIndices: 2,
  GeometryVertexCount: 0,
  GeometryTriangleCount: 1,
  GeometryFloatOffset: 2,
  GeometryWeightOffset: 3,
  GeometryVertexIndices: 4,
  TimelineScale: 0,
  TimelineOffset: 1,
  TimelineKeyFrameCount: 2,
  TimelineFrameValueCount: 3,
  TimelineFrameValueOffset: 4,
  TimelineFrameOffset: 5,
  FramePosition: 0,
  FrameTweenType: 1,
  FrameTweenEasingOrCurveSampleCount: 2,
  FrameCurveSamples: 3,
  DeformVertexOffset: 0,
  DeformCount: 1,
  DeformValueCount: 2,
  DeformValueOffset: 3,
  DeformFloatOffset: 4
};

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/superPropBase.js

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = (0,getPrototypeOf/* default */.Z)(object);
    if (object === null) break;
  }

  return object;
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/get.js

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}
// EXTERNAL MODULE: ./src/Texture/Texture.js
var Texture = __webpack_require__(776);
;// CONCATENATED MODULE: ./src/dragonBones/MiniGLTextureAtlasData.js









function MiniGLTextureAtlasData_createSuper(Derived) { var hasNativeReflectConstruct = MiniGLTextureAtlasData_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,getPrototypeOf/* default */.Z)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,getPrototypeOf/* default */.Z)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,possibleConstructorReturn/* default */.Z)(this, result); }; }

function MiniGLTextureAtlasData_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var _ref = window.dragonBones || {},
    _ref$TextureData = _ref.TextureData,
    TextureData = _ref$TextureData === void 0 ? null : _ref$TextureData,
    _ref$BaseObject = _ref.BaseObject,
    BaseObject = _ref$BaseObject === void 0 ? null : _ref$BaseObject,
    _ref$TextureAtlasData = _ref.TextureAtlasData,
    TextureAtlasData = _ref$TextureAtlasData === void 0 ? null : _ref$TextureAtlasData;



var MiniGLTextureAtlasData = /*#__PURE__*/function (_TextureAtlasData) {
  (0,inherits/* default */.Z)(MiniGLTextureAtlasData, _TextureAtlasData);

  var _super = MiniGLTextureAtlasData_createSuper(MiniGLTextureAtlasData);

  function MiniGLTextureAtlasData() {
    var _this;

    (0,classCallCheck/* default */.Z)(this, MiniGLTextureAtlasData);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "scale", 1);

    return _this;
  }

  (0,createClass/* default */.Z)(MiniGLTextureAtlasData, [{
    key: "_onClear",
    value: function _onClear() {
      _get((0,getPrototypeOf/* default */.Z)(MiniGLTextureAtlasData.prototype), "_onClear", this).call(this);

      if (this.disposeEnabled && this._renderTexture !== null) {
        this._renderTexture.dispose();
      }

      this.disposeEnabled = false;
      this._renderTexture = null;
    }
  }, {
    key: "createTexture",
    value: function createTexture() {
      var texture = BaseObject.borrowObject(MiniTextureData);
      return texture;
    }
  }, {
    key: "setRenderTexture",
    value: function setRenderTexture(texture, miniGL) {
      this._renderTexture = texture;

      if (this._renderTexture !== null) {
        for (var k in this.textures) {
          var textureData = this.textures[k];

          if (textureData.region.rotated) {}

          var renderTexture = new Texture/* default */.Z(miniGL);
          renderTexture.create({
            image: texture,
            rect: textureData.region,
            reverseY: false,
            name: textureData.name
          });
          textureData.renderTexture = renderTexture;
        }
      } else {
        for (var _k in this.textures) {
          var _textureData = this.textures[_k];
          _textureData.renderTexture = null;
        }
      }

      return texture;
    }
  }]);

  return MiniGLTextureAtlasData;
}(TextureAtlasData);
/**
 * @internal
 */


var MiniTextureData = /*#__PURE__*/function (_TextureData) {
  (0,inherits/* default */.Z)(MiniTextureData, _TextureData);

  var _super2 = MiniGLTextureAtlasData_createSuper(MiniTextureData);

  function MiniTextureData() {
    var _this2;

    (0,classCallCheck/* default */.Z)(this, MiniTextureData);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this2 = _super2.call.apply(_super2, [this].concat(args));

    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this2), "renderTexture", null);

    return _this2;
  }

  (0,createClass/* default */.Z)(MiniTextureData, [{
    key: "_onClear",
    value: // Initial value.
    function _onClear() {
      TextureData.prototype._onClear.call(this);

      if (this.renderTexture !== null) {
        this.renderTexture.destroy(false);
      }

      this.renderTexture = null;
    }
  }]);

  return MiniTextureData;
}(TextureData);

MiniTextureData.toString = function () {
  return '[class dragonBones.MiniTextureData]';
};

MiniGLTextureAtlasData.toString = function () {
  return '[class dragonBones.MiniAtlasData]';
};

/* harmony default export */ const dragonBones_MiniGLTextureAtlasData = (MiniGLTextureAtlasData);
;// CONCATENATED MODULE: ./src/dragonBones/MiniGLSlot.js






function MiniGLSlot_createSuper(Derived) { var hasNativeReflectConstruct = MiniGLSlot_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,getPrototypeOf/* default */.Z)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,getPrototypeOf/* default */.Z)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,possibleConstructorReturn/* default */.Z)(this, result); }; }

function MiniGLSlot_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var MiniGLSlot_ref = window.dragonBones || {},
    _ref$Slot = MiniGLSlot_ref.Slot,
    Slot = _ref$Slot === void 0 ? function () {} : _ref$Slot;




/**
 * 骨骼插槽
 * @class
 */

var MiniGLSlot = /*#__PURE__*/function (_Slot) {
  (0,inherits/* default */.Z)(MiniGLSlot, _Slot);

  var _super = MiniGLSlot_createSuper(MiniGLSlot);

  function MiniGLSlot() {
    (0,classCallCheck/* default */.Z)(this, MiniGLSlot);

    return _super.apply(this, arguments);
  }

  (0,createClass/* default */.Z)(MiniGLSlot, [{
    key: "_onClear",
    value: function _onClear() {
      Slot.prototype._onClear.call(this);

      this._armatureDisplay = null; //

      this._renderDisplay = null; //

      this._colorFilter = null;
    }
  }, {
    key: "_initDisplay",
    value: function _initDisplay(value, isRetain) {}
  }, {
    key: "_disposeDisplay",
    value: function _disposeDisplay(value, isRelease) {
      // value.destroy();
      value.parent.remove(value);
      value.destroy();
    } // 更新前函数

  }, {
    key: "_onUpdateDisplay",
    value: function _onUpdateDisplay() {
      this._armatureDisplay = this._armature.display;
      this._renderDisplay = this._display ? this._display : this._rawDisplay;
    } // 添加到骨架容器中

  }, {
    key: "_addDisplay",
    value: function _addDisplay() {
      if (this._renderDisplay.parent) {
        this._renderDisplay.parent.removeChild(this._renderDisplay);
      }

      this._armature.display.addChild(this._renderDisplay);
    }
  }, {
    key: "_replaceDisplay",
    value: function _replaceDisplay(value) {
      this._renderDisplay.parent && this._renderDisplay.parent.removeChild(this._renderDisplay);

      this._armatureDisplay.addChild(this._renderDisplay);

      this._armatureDisplay.swapChildren(this._renderDisplay, value);

      this._armatureDisplay.removeChild(value);

      value.destroy();
    }
  }, {
    key: "_removeDisplay",
    value: function _removeDisplay() {
      this._armatureDisplay.removeChild(this._renderDisplay);
    }
  }, {
    key: "_updateZOrder",
    value: function _updateZOrder() {
      var index = this._renderDisplay.zOrder;

      if (index === this._zOrder) {
        return;
      }

      this._armatureDisplay.removeChild(this._renderDisplay);

      this._armatureDisplay.addChildAt(this._renderDisplay, this._zOrder);
    }
  }, {
    key: "_updateVisible",
    value: function _updateVisible() {
      var visible = this._parent.visible && this._visible;
      this._renderDisplay.visible = visible;
    }
  }, {
    key: "_updateBlendMode",
    value: function _updateBlendMode() {
      var gl = this._armatureDisplay.miniGL.gl;

      switch (this._blendMode) {
        case BlendMode.Normal:
          this._renderDisplay.blendMode = gl.ONE_MINUS_SRC_ALPHA;
          break;

        case BlendMode.Add:
          this._renderDisplay.blendMode = gl.ONE_MINUS_DST_ALPHA;
          break;

        case BlendMode.Erase:
          this._renderDisplay.blendMode = gl.DST_ALPHA;
          break;

        default:
          break;
      }
    }
  }, {
    key: "_updateColor",
    value: function _updateColor() {
      var alpha = this._colorTransform.alphaMultiplier * this._globalAlpha;

      try {
        this._renderDisplay.uniformData.alpha.value = alpha;
      } catch (e) {}
    }
  }, {
    key: "_updateFrame",
    value: function _updateFrame() {
      var currentTextureData = this._textureData;
      this._renderDisplay.textureData = this._textureData;

      if (this._displayFrame !== null && this._display !== null && currentTextureData !== null) {
        var currentTextureAtlasData = currentTextureData.parent;

        if (this._armature.replacedTexture !== null) {
          // Update replaced texture atlas.
          if (this._armature._replaceTextureAtlasData === null) {
            currentTextureAtlasData = new dragonBones_MiniGLTextureAtlasData();
            currentTextureAtlasData.copyFrom(currentTextureData.parent);
            currentTextureAtlasData.texture = this._armature.replacedTexture;
            this._armature._replaceTextureAtlasData = currentTextureAtlasData;
          } else {
            currentTextureAtlasData = this._armature._replaceTextureAtlasData;
          }

          currentTextureData = currentTextureAtlasData.getTexture(currentTextureData.name);
        }

        if (currentTextureData.renderTexture !== null) {
          if (this._geometryData !== null) {
            // Mesh.
            var data = this._geometryData.data;
            var intArray = data.intArray;
            var floatArray = data.floatArray;
            var vertexCount = intArray[this._geometryData.offset + BinaryOffset.GeometryVertexCount];
            var triangleCount = intArray[this._geometryData.offset + BinaryOffset.GeometryTriangleCount];
            var vertexOffset = intArray[this._geometryData.offset + BinaryOffset.GeometryFloatOffset];

            if (vertexOffset < 0) {
              vertexOffset += 65536; // Fixed out of bounds bug.
            }

            var uvOffset = vertexOffset + vertexCount * 2;
            var scale = this._armature._armatureData.scale;
            var meshDisplay = this._renderDisplay; // 这一步生成所需要的点和uv和索引

            var uvs = [];
            var vertices = [];
            var indices = [];

            for (var i = 0, l = vertexCount * 2; i < l; ++i) {
              vertices[i] = floatArray[vertexOffset + i] * scale;
              uvs[i] = floatArray[uvOffset + i];
            }

            for (var _i = 0; _i < triangleCount * 3; ++_i) {
              indices[_i] = intArray[this._geometryData.offset + BinaryOffset.GeometryVertexIndices + _i];
            }

            meshDisplay.dispose();
            meshDisplay.setTexture(currentTextureData.renderTexture);
            meshDisplay.setBufferData(vertices, 'position', 2);
            meshDisplay.setBufferData(uvs, 'uv', 2);
            meshDisplay.setIndices(indices);
            meshDisplay.vertex = vertices;
            var isSkinned = this._geometryData.weight !== null;
            var isSurface = this._parent._boneData.type !== BoneType.Bone;

            if (isSkinned || isSurface) {
              this._identityTransform();
            }
          } else {
            // Normal texture.
            var _scale = currentTextureData.parent.scale * this._armature._armatureData.scale;

            var textureWidth = currentTextureData.region.width * _scale;
            var textureHeight = currentTextureData.region.height * _scale;
            var normalDisplay = this._renderDisplay;
            var texture = currentTextureData.renderTexture;
            normalDisplay.setData({
              texture: texture,
              width: textureWidth,
              height: textureHeight
            });
          }

          this._visibleDirty = true;
          return;
        }
      }

      this._renderDisplay.visible = false;
    }
  }, {
    key: "_updateMesh",
    value: function _updateMesh() {
      var scale = this._armature._armatureData.scale;
      var deformVertices = this._displayFrame.deformVertices;
      var bones = this._geometryBones;
      var geometryData = this._geometryData;
      var weightData = geometryData.weight;
      var hasDeform = deformVertices.length > 0 && geometryData.inheritDeform;
      var meshDisplay = this._renderDisplay;

      if (weightData !== null) {
        var data = geometryData.data;
        var intArray = data.intArray;
        var floatArray = data.floatArray;
        var vertexCount = intArray[geometryData.offset + BinaryOffset.GeometryVertexCount];
        var weightFloatOffset = intArray[weightData.offset + BinaryOffset.WeigthFloatOffset];

        if (weightFloatOffset < 0) {
          weightFloatOffset += 65536; // Fixed out of bounds bug.
        }

        for (var i = 0, iD = 0, iB = weightData.offset + BinaryOffset.WeigthBoneIndices + bones.length, iV = weightFloatOffset, iF = 0; i < vertexCount; ++i) {
          var boneCount = intArray[iB++];
          var xG = 0.0;
          var yG = 0.0;

          for (var j = 0; j < boneCount; ++j) {
            var boneIndex = intArray[iB++];
            var bone = bones[boneIndex];

            if (bone !== null) {
              var matrix = bone.globalTransformMatrix;
              var weight = floatArray[iV++];
              var xL = floatArray[iV++] * scale;
              var yL = floatArray[iV++] * scale;

              if (hasDeform) {
                xL += deformVertices[iF++];
                yL += deformVertices[iF++];
              }

              xG += (matrix.a * xL + matrix.c * yL + matrix.tx) * weight;
              yG += (matrix.b * xL + matrix.d * yL + matrix.ty) * weight;
            }
          }

          meshDisplay.vertex[iD++] = xG;
          meshDisplay.vertex[iD++] = yG;
        }

        meshDisplay.setBufferData(meshDisplay.vertex, 'position', 2);
      } else {
        var isSurface = this._parent._boneData.type !== BoneType.Bone;
        var _data = geometryData.data;
        var _intArray = _data.intArray;
        var _floatArray = _data.floatArray;
        var _vertexCount = _intArray[geometryData.offset + BinaryOffset.GeometryVertexCount];
        var vertexOffset = _intArray[geometryData.offset + BinaryOffset.GeometryFloatOffset];

        if (vertexOffset < 0) {
          vertexOffset += 65536; // Fixed out of bounds bug.
        }

        for (var _i2 = 0, l = _vertexCount * 2; _i2 < l; _i2 += 2) {
          var x = _floatArray[vertexOffset + _i2] * scale;
          var y = _floatArray[vertexOffset + _i2 + 1] * scale;

          if (hasDeform) {
            x += deformVertices[_i2];
            y += deformVertices[_i2 + 1];
          }

          if (isSurface) {
            var _matrix = this._parent._getGlobalTransformMatrix(x, y);

            meshDisplay.vertex[_i2] = _matrix.a * x + _matrix.c * y + _matrix.tx;
            meshDisplay.vertex[_i2 + 1] = _matrix.b * x + _matrix.d * y + _matrix.ty;
          } else {
            meshDisplay.vertex[_i2] = x;
            meshDisplay.vertex[_i2 + 1] = y;
          }
        }

        meshDisplay.setBufferData(meshDisplay.vertex, 'position', 2);
      }
    }
  }, {
    key: "_identityTransform",
    value: function _identityTransform() {
      this._renderDisplay.setMatrix(external_gl_matrix_.mat3.create());
    }
  }, {
    key: "_updateTransform",
    value: function _updateTransform() {
      var matrix = this.globalTransformMatrix;
      var newMatrix = external_gl_matrix_.mat3.fromValues(matrix.a, matrix.b, 0, matrix.c, matrix.d, 0, matrix.tx, matrix.ty, 1);
      external_gl_matrix_.mat3.translate(newMatrix, newMatrix, [-this._pivotX, -this._pivotY]);

      this._renderDisplay.setMatrix(newMatrix);
    }
  }]);

  return MiniGLSlot;
}(Slot);

MiniGLSlot.toString = function () {
  return '[class dragonBones.MiniSlot]';
};

/* harmony default export */ const dragonBones_MiniGLSlot = (MiniGLSlot);
;// CONCATENATED MODULE: ./src/dragonBones/MiniGLArmatureDisplay.js








function MiniGLArmatureDisplay_createSuper(Derived) { var hasNativeReflectConstruct = MiniGLArmatureDisplay_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,getPrototypeOf/* default */.Z)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,getPrototypeOf/* default */.Z)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,possibleConstructorReturn/* default */.Z)(this, result); }; }

function MiniGLArmatureDisplay_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




/**
 * 骨架显示
 * @class
 */

var MiniGLArmatureDisplay = /*#__PURE__*/function (_Group) {
  (0,inherits/* default */.Z)(MiniGLArmatureDisplay, _Group);

  var _super = MiniGLArmatureDisplay_createSuper(MiniGLArmatureDisplay);

  function MiniGLArmatureDisplay() {
    var _this;

    (0,classCallCheck/* default */.Z)(this, MiniGLArmatureDisplay);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "_armature", null);

    return _this;
  }

  (0,createClass/* default */.Z)(MiniGLArmatureDisplay, [{
    key: "dispatchDBEvent",
    value: function dispatchDBEvent(type, eventObject) {
      this.listener.fire(type, eventObject);
    }
  }, {
    key: "hasDBEventListener",
    value: function hasDBEventListener(type) {
      return this.listener._listeners[type]; // .d.ts bug
    }
  }, {
    key: "addDBEventListener",
    value: function addDBEventListener(type, func) {
      this.listener.on(type, func);
    }
  }, {
    key: "removeDBEventListener",
    value: function removeDBEventListener(type, func) {
      this.listener.off(type, func);
    }
  }, {
    key: "dbInit",
    value: function dbInit(armature) {
      this._armature = armature;
      this.listener = new src_Base();
      var mesh = new Line/* default */.Z({
        color: [0, 0.1, 0.2, 1]
      });
      mesh.drawType = 'LINES';
      this.drawer = mesh;
      this.addChild(mesh);
    }
  }, {
    key: "dbClear",
    value: function dbClear() {
      this.destroy();
    }
  }, {
    key: "dbUpdate",
    value: function dbUpdate() {
      if (!this.mesh) return;

      var bones = this._armature.getBones();

      var data = [];

      for (var i = 0, l = bones.length; i < l; ++i) {
        var bone = bones[i];
        var boneLength = bone.boneData.length;
        var startX = bone.globalTransformMatrix.tx;
        var startY = bone.globalTransformMatrix.ty;
        var endX = startX + bone.globalTransformMatrix.a * boneLength;
        var endY = startY + bone.globalTransformMatrix.b * boneLength;
        data.push({
          position: {
            x: startX,
            y: startY
          }
        }, {
          position: {
            x: endX,
            y: endY
          }
        });
      }

      this.drawer.setData(data);
    }
  }, {
    key: "dispose",
    value: function dispose() {
      if (this._armature !== null) {
        this._armature.dispose();

        this._armature = null;
      }

      this.drawer.destroy();
      Group_Group.dispose.call(this);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.dispose();
    }
  }, {
    key: "getArmature",
    value: function getArmature() {
      return this._armature;
    }
  }, {
    key: "getAnimation",
    value: function getAnimation() {
      return this._armature.animation;
    }
  }]);

  return MiniGLArmatureDisplay;
}(Group_Group);

/* harmony default export */ const dragonBones_MiniGLArmatureDisplay = (MiniGLArmatureDisplay);
;// CONCATENATED MODULE: ./src/dragonBones/index.js






function dragonBones_createSuper(Derived) { var hasNativeReflectConstruct = dragonBones_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,getPrototypeOf/* default */.Z)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,getPrototypeOf/* default */.Z)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,possibleConstructorReturn/* default */.Z)(this, result); }; }

function dragonBones_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var dragonBones_ref = window.dragonBones || {},
    DragonBones = dragonBones_ref.DragonBones,
    _ref$BaseFactory = dragonBones_ref.BaseFactory,
    BaseFactory = _ref$BaseFactory === void 0 ? null : _ref$BaseFactory,
    BuildArmaturePackage = dragonBones_ref.BuildArmaturePackage,
    dragonBones_BaseObject = dragonBones_ref.BaseObject,
    Armature = dragonBones_ref.Armature;






var DragonBoneObject = /*#__PURE__*/function (_BaseFactory) {
  (0,inherits/* default */.Z)(DragonBoneObject, _BaseFactory);

  var _super = dragonBones_createSuper(DragonBoneObject);

  function DragonBoneObject(miniGL) {
    var _this;

    (0,classCallCheck/* default */.Z)(this, DragonBoneObject);

    _this = _super.call(this);

    if (!BaseFactory) {
      throw new Error('请先加载DragonBones基础JS库！');
    }

    _this.miniGL = miniGL;

    _this.getDragonBonesInstance();

    _this.display = new dragonBones_MiniGLArmatureDisplay();
    return _this;
  }

  (0,createClass/* default */.Z)(DragonBoneObject, [{
    key: "addFrameEvent",
    value: function addFrameEvent() {
      this.miniGL.on('beforerender', DragonBoneObject.update);
    }
  }, {
    key: "getDragonBonesInstance",
    value: function getDragonBonesInstance() {
      var _this2 = this;

      if (!DragonBoneObject._dragonBonesInstance) {
        DragonBoneObject._dragonBonesInstance = new DragonBones({
          hasDBEventListener: function hasDBEventListener(event) {
            return _this2.miniGL._listeners[event];
          },
          // 转发事件
          dispatchDBEvent: function dispatchDBEvent(event, data) {
            _this2.miniGL.fire(event, data);
          }
        });
        this.addFrameEvent();
      }

      this._dragonBonesInstance = DragonBoneObject._dragonBonesInstance;
    } // 构建对象

  }, {
    key: "buildArmatureDisplay",
    value: function buildArmatureDisplay(armatureName) {
      var dragonBonesName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var skinName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
      var textureAtlasName = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
      var armature = this.buildArmature(armatureName, dragonBonesName, skinName, textureAtlasName);

      this._dragonBonesInstance.clock.add(armature);

      return armature.display;
    }
    /**
     * @override 复现方法
     * @param {*} dataPackage
     */

  }, {
    key: "_buildArmature",
    value: function _buildArmature(dataPackage) {
      var armature = dragonBones_BaseObject.borrowObject(Armature);
      var armatureDisplay = new dragonBones_MiniGLArmatureDisplay({
        miniGL: this.miniGL
      });
      armature.init(dataPackage.armature, armatureDisplay, armatureDisplay, this._dragonBones);
      return armature;
    }
  }, {
    key: "_buildSlot",
    value: function _buildSlot(_dataPackage, slotData, armature) {
      var slot = dragonBones_BaseObject.borrowObject(dragonBones_MiniGLSlot);
      var sprite = new src.Image();
      slot.init(slotData, armature, sprite, sprite);
      return slot;
    }
  }, {
    key: "_buildTextureAtlasData",
    value: function _buildTextureAtlasData(textureAtlasData, textureAtlas) {
      if (textureAtlasData) {
        textureAtlasData.setRenderTexture(textureAtlas, this.miniGL);
      } else {
        textureAtlasData = dragonBones_BaseObject.borrowObject(dragonBones_MiniGLTextureAtlasData);
      }

      return textureAtlasData;
    }
  }, {
    key: "destroy",
    value: function destroy() {}
  }]);

  return DragonBoneObject;
}(BaseFactory);

DragonBoneObject.update = function (delta) {
  DragonBoneObject._dragonBonesInstance.advanceTime(delta * 0.001);
};

DragonBoneObject.MiniGLArmatureDisplay = dragonBones_MiniGLArmatureDisplay;
/* harmony default export */ const dragonBones = (DragonBoneObject);
;// CONCATENATED MODULE: ./src/index.js








function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function src_createSuper(Derived) { var hasNativeReflectConstruct = src_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,getPrototypeOf/* default */.Z)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,getPrototypeOf/* default */.Z)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,possibleConstructorReturn/* default */.Z)(this, result); }; }

function src_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }















var MiniGL = /*#__PURE__*/function (_Base) {
  (0,inherits/* default */.Z)(MiniGL, _Base);

  var _super = src_createSuper(MiniGL);

  /**
   * 
   * @param {object} config 
   * @param {HTMLDivElement} config.container
   */
  function MiniGL(config) {
    var _this;

    (0,classCallCheck/* default */.Z)(this, MiniGL);

    _this = _super.call(this, config);

    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "autoUpdate", false);

    _this.container = config.container;
    _this.config = Object.assign({
      contextOption: {
        alpha: true,
        antialias: true,
        antialiasSamples: 16,
        stencil: true,
        powerPreference: 'high-performance',
        preserveDrawingBuffer: true
      }
    }, config);
    return _this;
  }

  (0,createClass/* default */.Z)(MiniGL, [{
    key: "init",
    value: function init() {
      var _this$config$contextO = this.config.contextOption,
          contextOption = _this$config$contextO === void 0 ? {} : _this$config$contextO;
      this.canvasDOM = document.createElement('canvas');
      this.container.appendChild(this.canvasDOM);
      this.gl = this.canvasDOM.getContext('webgl2', contextOption);

      if (this.gl == null) {
        return console.error('你的浏览器不支持webgl2,请更新使用chrome浏览器');
      }

      this.viewport = new Viewport(_objectSpread({
        miniGL: this
      }, this.config));
      this.viewport.resize();
      this.canvas = new View_Canvas(_objectSpread({
        miniGL: this
      }, this.config));
      this.controller = new Control_Controller(_objectSpread({
        miniGL: this
      }, this.config));
      this.canvas.update();
    }
  }]);

  return MiniGL;
}(src_Base);

MiniGL.FlyLine = FlyLine;
MiniGL.Image = Mesh_Image;
MiniGL.Mesh = Mesh_Mesh;
MiniGL.Point = Mesh_Point;
MiniGL.Line = __webpack_require__(323)/* .default */ .Z;
;
MiniGL.MeshBase = Mesh_Base/* default */.Z;
MiniGL.WidthLine = Mesh_WidthLine;
MiniGL.RoundLine = Mesh_RoundLine; // 暂时做形状没有意义，本来是要专心做2d特效库的,另外去做形状，做重了和canvas性能没差了，还是专心利用gpu多进程运算
// MiniGL.Shape = require('./Shapes').default;

MiniGL.InstanceMesh = __webpack_require__(947)/* .default */ .Z;
MiniGL.Group = Group_Group;
MiniGL.Util = __webpack_require__(88)/* .default */ .Z;
MiniGL.Texture = __webpack_require__(776)/* .default */ .Z;
MiniGL.DragonBones = dragonBones;
/* harmony default export */ const src = (MiniGL);
})();

__webpack_exports__ = __webpack_exports__.default;
/******/ 	return __webpack_exports__;
/******/ })()
;
});