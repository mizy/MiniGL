(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["MiniGL"] = factory();
	else
		root["MiniGL"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/gl-matrix/esm/common.js":
/*!**********************************************!*\
  !*** ./node_modules/gl-matrix/esm/common.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ARRAY_TYPE": () => (/* binding */ ARRAY_TYPE),
/* harmony export */   "EPSILON": () => (/* binding */ EPSILON),
/* harmony export */   "RANDOM": () => (/* binding */ RANDOM),
/* harmony export */   "equals": () => (/* binding */ equals),
/* harmony export */   "setMatrixArrayType": () => (/* binding */ setMatrixArrayType),
/* harmony export */   "toRadian": () => (/* binding */ toRadian)
/* harmony export */ });
/**
 * Common utilities
 * @module glMatrix
 */
// Configuration Constants
var EPSILON = 0.000001;
var ARRAY_TYPE = typeof Float32Array !== 'undefined' ? Float32Array : Array;
var RANDOM = Math.random;
/**
 * Sets the type of array used when creating new vectors and matrices
 *
 * @param {Float32ArrayConstructor | ArrayConstructor} type Array type, such as Float32Array or Array
 */

function setMatrixArrayType(type) {
  ARRAY_TYPE = type;
}
var degree = Math.PI / 180;
/**
 * Convert Degree To Radian
 *
 * @param {Number} a Angle in Degrees
 */

function toRadian(a) {
  return a * degree;
}
/**
 * Tests whether or not the arguments have approximately the same value, within an absolute
 * or relative tolerance of glMatrix.EPSILON (an absolute tolerance is used for values less
 * than or equal to 1.0, and a relative tolerance is used for larger values)
 *
 * @param {Number} a The first number to test.
 * @param {Number} b The second number to test.
 * @returns {Boolean} True if the numbers are approximately equal, false otherwise.
 */

function equals(a, b) {
  return Math.abs(a - b) <= EPSILON * Math.max(1.0, Math.abs(a), Math.abs(b));
}
if (!Math.hypot) Math.hypot = function () {
  var y = 0,
      i = arguments.length;

  while (i--) {
    y += arguments[i] * arguments[i];
  }

  return Math.sqrt(y);
};

/***/ }),

/***/ "./node_modules/gl-matrix/esm/mat3.js":
/*!********************************************!*\
  !*** ./node_modules/gl-matrix/esm/mat3.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "add": () => (/* binding */ add),
/* harmony export */   "adjoint": () => (/* binding */ adjoint),
/* harmony export */   "clone": () => (/* binding */ clone),
/* harmony export */   "copy": () => (/* binding */ copy),
/* harmony export */   "create": () => (/* binding */ create),
/* harmony export */   "determinant": () => (/* binding */ determinant),
/* harmony export */   "equals": () => (/* binding */ equals),
/* harmony export */   "exactEquals": () => (/* binding */ exactEquals),
/* harmony export */   "frob": () => (/* binding */ frob),
/* harmony export */   "fromMat2d": () => (/* binding */ fromMat2d),
/* harmony export */   "fromMat4": () => (/* binding */ fromMat4),
/* harmony export */   "fromQuat": () => (/* binding */ fromQuat),
/* harmony export */   "fromRotation": () => (/* binding */ fromRotation),
/* harmony export */   "fromScaling": () => (/* binding */ fromScaling),
/* harmony export */   "fromTranslation": () => (/* binding */ fromTranslation),
/* harmony export */   "fromValues": () => (/* binding */ fromValues),
/* harmony export */   "identity": () => (/* binding */ identity),
/* harmony export */   "invert": () => (/* binding */ invert),
/* harmony export */   "mul": () => (/* binding */ mul),
/* harmony export */   "multiply": () => (/* binding */ multiply),
/* harmony export */   "multiplyScalar": () => (/* binding */ multiplyScalar),
/* harmony export */   "multiplyScalarAndAdd": () => (/* binding */ multiplyScalarAndAdd),
/* harmony export */   "normalFromMat4": () => (/* binding */ normalFromMat4),
/* harmony export */   "projection": () => (/* binding */ projection),
/* harmony export */   "rotate": () => (/* binding */ rotate),
/* harmony export */   "scale": () => (/* binding */ scale),
/* harmony export */   "set": () => (/* binding */ set),
/* harmony export */   "str": () => (/* binding */ str),
/* harmony export */   "sub": () => (/* binding */ sub),
/* harmony export */   "subtract": () => (/* binding */ subtract),
/* harmony export */   "translate": () => (/* binding */ translate),
/* harmony export */   "transpose": () => (/* binding */ transpose)
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/esm/common.js");

/**
 * 3x3 Matrix
 * @module mat3
 */

/**
 * Creates a new identity mat3
 *
 * @returns {mat3} a new 3x3 matrix
 */

function create() {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(9);

  if (_common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE != Float32Array) {
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[5] = 0;
    out[6] = 0;
    out[7] = 0;
  }

  out[0] = 1;
  out[4] = 1;
  out[8] = 1;
  return out;
}
/**
 * Copies the upper-left 3x3 values into the given mat3.
 *
 * @param {mat3} out the receiving 3x3 matrix
 * @param {ReadonlyMat4} a   the source 4x4 matrix
 * @returns {mat3} out
 */

function fromMat4(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[4];
  out[4] = a[5];
  out[5] = a[6];
  out[6] = a[8];
  out[7] = a[9];
  out[8] = a[10];
  return out;
}
/**
 * Creates a new mat3 initialized with values from an existing matrix
 *
 * @param {ReadonlyMat3} a matrix to clone
 * @returns {mat3} a new 3x3 matrix
 */

function clone(a) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(9);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  return out;
}
/**
 * Copy the values from one mat3 to another
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the source matrix
 * @returns {mat3} out
 */

function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  return out;
}
/**
 * Create a new mat3 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m10 Component in column 1, row 0 position (index 3)
 * @param {Number} m11 Component in column 1, row 1 position (index 4)
 * @param {Number} m12 Component in column 1, row 2 position (index 5)
 * @param {Number} m20 Component in column 2, row 0 position (index 6)
 * @param {Number} m21 Component in column 2, row 1 position (index 7)
 * @param {Number} m22 Component in column 2, row 2 position (index 8)
 * @returns {mat3} A new mat3
 */

function fromValues(m00, m01, m02, m10, m11, m12, m20, m21, m22) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(9);
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m10;
  out[4] = m11;
  out[5] = m12;
  out[6] = m20;
  out[7] = m21;
  out[8] = m22;
  return out;
}
/**
 * Set the components of a mat3 to the given values
 *
 * @param {mat3} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m10 Component in column 1, row 0 position (index 3)
 * @param {Number} m11 Component in column 1, row 1 position (index 4)
 * @param {Number} m12 Component in column 1, row 2 position (index 5)
 * @param {Number} m20 Component in column 2, row 0 position (index 6)
 * @param {Number} m21 Component in column 2, row 1 position (index 7)
 * @param {Number} m22 Component in column 2, row 2 position (index 8)
 * @returns {mat3} out
 */

function set(out, m00, m01, m02, m10, m11, m12, m20, m21, m22) {
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m10;
  out[4] = m11;
  out[5] = m12;
  out[6] = m20;
  out[7] = m21;
  out[8] = m22;
  return out;
}
/**
 * Set a mat3 to the identity matrix
 *
 * @param {mat3} out the receiving matrix
 * @returns {mat3} out
 */

function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 1;
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}
/**
 * Transpose the values of a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the source matrix
 * @returns {mat3} out
 */

function transpose(out, a) {
  // If we are transposing ourselves we can skip a few steps but have to cache some values
  if (out === a) {
    var a01 = a[1],
        a02 = a[2],
        a12 = a[5];
    out[1] = a[3];
    out[2] = a[6];
    out[3] = a01;
    out[5] = a[7];
    out[6] = a02;
    out[7] = a12;
  } else {
    out[0] = a[0];
    out[1] = a[3];
    out[2] = a[6];
    out[3] = a[1];
    out[4] = a[4];
    out[5] = a[7];
    out[6] = a[2];
    out[7] = a[5];
    out[8] = a[8];
  }

  return out;
}
/**
 * Inverts a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the source matrix
 * @returns {mat3} out
 */

function invert(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2];
  var a10 = a[3],
      a11 = a[4],
      a12 = a[5];
  var a20 = a[6],
      a21 = a[7],
      a22 = a[8];
  var b01 = a22 * a11 - a12 * a21;
  var b11 = -a22 * a10 + a12 * a20;
  var b21 = a21 * a10 - a11 * a20; // Calculate the determinant

  var det = a00 * b01 + a01 * b11 + a02 * b21;

  if (!det) {
    return null;
  }

  det = 1.0 / det;
  out[0] = b01 * det;
  out[1] = (-a22 * a01 + a02 * a21) * det;
  out[2] = (a12 * a01 - a02 * a11) * det;
  out[3] = b11 * det;
  out[4] = (a22 * a00 - a02 * a20) * det;
  out[5] = (-a12 * a00 + a02 * a10) * det;
  out[6] = b21 * det;
  out[7] = (-a21 * a00 + a01 * a20) * det;
  out[8] = (a11 * a00 - a01 * a10) * det;
  return out;
}
/**
 * Calculates the adjugate of a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the source matrix
 * @returns {mat3} out
 */

function adjoint(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2];
  var a10 = a[3],
      a11 = a[4],
      a12 = a[5];
  var a20 = a[6],
      a21 = a[7],
      a22 = a[8];
  out[0] = a11 * a22 - a12 * a21;
  out[1] = a02 * a21 - a01 * a22;
  out[2] = a01 * a12 - a02 * a11;
  out[3] = a12 * a20 - a10 * a22;
  out[4] = a00 * a22 - a02 * a20;
  out[5] = a02 * a10 - a00 * a12;
  out[6] = a10 * a21 - a11 * a20;
  out[7] = a01 * a20 - a00 * a21;
  out[8] = a00 * a11 - a01 * a10;
  return out;
}
/**
 * Calculates the determinant of a mat3
 *
 * @param {ReadonlyMat3} a the source matrix
 * @returns {Number} determinant of a
 */

function determinant(a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2];
  var a10 = a[3],
      a11 = a[4],
      a12 = a[5];
  var a20 = a[6],
      a21 = a[7],
      a22 = a[8];
  return a00 * (a22 * a11 - a12 * a21) + a01 * (-a22 * a10 + a12 * a20) + a02 * (a21 * a10 - a11 * a20);
}
/**
 * Multiplies two mat3's
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the first operand
 * @param {ReadonlyMat3} b the second operand
 * @returns {mat3} out
 */

function multiply(out, a, b) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2];
  var a10 = a[3],
      a11 = a[4],
      a12 = a[5];
  var a20 = a[6],
      a21 = a[7],
      a22 = a[8];
  var b00 = b[0],
      b01 = b[1],
      b02 = b[2];
  var b10 = b[3],
      b11 = b[4],
      b12 = b[5];
  var b20 = b[6],
      b21 = b[7],
      b22 = b[8];
  out[0] = b00 * a00 + b01 * a10 + b02 * a20;
  out[1] = b00 * a01 + b01 * a11 + b02 * a21;
  out[2] = b00 * a02 + b01 * a12 + b02 * a22;
  out[3] = b10 * a00 + b11 * a10 + b12 * a20;
  out[4] = b10 * a01 + b11 * a11 + b12 * a21;
  out[5] = b10 * a02 + b11 * a12 + b12 * a22;
  out[6] = b20 * a00 + b21 * a10 + b22 * a20;
  out[7] = b20 * a01 + b21 * a11 + b22 * a21;
  out[8] = b20 * a02 + b21 * a12 + b22 * a22;
  return out;
}
/**
 * Translate a mat3 by the given vector
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the matrix to translate
 * @param {ReadonlyVec2} v vector to translate by
 * @returns {mat3} out
 */

function translate(out, a, v) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a10 = a[3],
      a11 = a[4],
      a12 = a[5],
      a20 = a[6],
      a21 = a[7],
      a22 = a[8],
      x = v[0],
      y = v[1];
  out[0] = a00;
  out[1] = a01;
  out[2] = a02;
  out[3] = a10;
  out[4] = a11;
  out[5] = a12;
  out[6] = x * a00 + y * a10 + a20;
  out[7] = x * a01 + y * a11 + a21;
  out[8] = x * a02 + y * a12 + a22;
  return out;
}
/**
 * Rotates a mat3 by the given angle
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat3} out
 */

function rotate(out, a, rad) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a10 = a[3],
      a11 = a[4],
      a12 = a[5],
      a20 = a[6],
      a21 = a[7],
      a22 = a[8],
      s = Math.sin(rad),
      c = Math.cos(rad);
  out[0] = c * a00 + s * a10;
  out[1] = c * a01 + s * a11;
  out[2] = c * a02 + s * a12;
  out[3] = c * a10 - s * a00;
  out[4] = c * a11 - s * a01;
  out[5] = c * a12 - s * a02;
  out[6] = a20;
  out[7] = a21;
  out[8] = a22;
  return out;
}
/**
 * Scales the mat3 by the dimensions in the given vec2
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the matrix to rotate
 * @param {ReadonlyVec2} v the vec2 to scale the matrix by
 * @returns {mat3} out
 **/

function scale(out, a, v) {
  var x = v[0],
      y = v[1];
  out[0] = x * a[0];
  out[1] = x * a[1];
  out[2] = x * a[2];
  out[3] = y * a[3];
  out[4] = y * a[4];
  out[5] = y * a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  return out;
}
/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.translate(dest, dest, vec);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {ReadonlyVec2} v Translation vector
 * @returns {mat3} out
 */

function fromTranslation(out, v) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 1;
  out[5] = 0;
  out[6] = v[0];
  out[7] = v[1];
  out[8] = 1;
  return out;
}
/**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.rotate(dest, dest, rad);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat3} out
 */

function fromRotation(out, rad) {
  var s = Math.sin(rad),
      c = Math.cos(rad);
  out[0] = c;
  out[1] = s;
  out[2] = 0;
  out[3] = -s;
  out[4] = c;
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}
/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.scale(dest, dest, vec);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {ReadonlyVec2} v Scaling vector
 * @returns {mat3} out
 */

function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = v[1];
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}
/**
 * Copies the values from a mat2d into a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat2d} a the matrix to copy
 * @returns {mat3} out
 **/

function fromMat2d(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = 0;
  out[3] = a[2];
  out[4] = a[3];
  out[5] = 0;
  out[6] = a[4];
  out[7] = a[5];
  out[8] = 1;
  return out;
}
/**
 * Calculates a 3x3 matrix from the given quaternion
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {ReadonlyQuat} q Quaternion to create matrix from
 *
 * @returns {mat3} out
 */

function fromQuat(out, q) {
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var yx = y * x2;
  var yy = y * y2;
  var zx = z * x2;
  var zy = z * y2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  out[0] = 1 - yy - zz;
  out[3] = yx - wz;
  out[6] = zx + wy;
  out[1] = yx + wz;
  out[4] = 1 - xx - zz;
  out[7] = zy - wx;
  out[2] = zx - wy;
  out[5] = zy + wx;
  out[8] = 1 - xx - yy;
  return out;
}
/**
 * Calculates a 3x3 normal matrix (transpose inverse) from the 4x4 matrix
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {ReadonlyMat4} a Mat4 to derive the normal matrix from
 *
 * @returns {mat3} out
 */

function normalFromMat4(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];
  var b00 = a00 * a11 - a01 * a10;
  var b01 = a00 * a12 - a02 * a10;
  var b02 = a00 * a13 - a03 * a10;
  var b03 = a01 * a12 - a02 * a11;
  var b04 = a01 * a13 - a03 * a11;
  var b05 = a02 * a13 - a03 * a12;
  var b06 = a20 * a31 - a21 * a30;
  var b07 = a20 * a32 - a22 * a30;
  var b08 = a20 * a33 - a23 * a30;
  var b09 = a21 * a32 - a22 * a31;
  var b10 = a21 * a33 - a23 * a31;
  var b11 = a22 * a33 - a23 * a32; // Calculate the determinant

  var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

  if (!det) {
    return null;
  }

  det = 1.0 / det;
  out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
  out[1] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
  out[2] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
  out[3] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
  out[4] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
  out[5] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
  out[6] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
  out[7] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
  out[8] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
  return out;
}
/**
 * Generates a 2D projection matrix with the given bounds
 *
 * @param {mat3} out mat3 frustum matrix will be written into
 * @param {number} width Width of your gl context
 * @param {number} height Height of gl context
 * @returns {mat3} out
 */

function projection(out, width, height) {
  out[0] = 2 / width;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = -2 / height;
  out[5] = 0;
  out[6] = -1;
  out[7] = 1;
  out[8] = 1;
  return out;
}
/**
 * Returns a string representation of a mat3
 *
 * @param {ReadonlyMat3} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */

function str(a) {
  return "mat3(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ", " + a[6] + ", " + a[7] + ", " + a[8] + ")";
}
/**
 * Returns Frobenius norm of a mat3
 *
 * @param {ReadonlyMat3} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */

function frob(a) {
  return Math.hypot(a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8]);
}
/**
 * Adds two mat3's
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the first operand
 * @param {ReadonlyMat3} b the second operand
 * @returns {mat3} out
 */

function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  out[6] = a[6] + b[6];
  out[7] = a[7] + b[7];
  out[8] = a[8] + b[8];
  return out;
}
/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the first operand
 * @param {ReadonlyMat3} b the second operand
 * @returns {mat3} out
 */

function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  out[4] = a[4] - b[4];
  out[5] = a[5] - b[5];
  out[6] = a[6] - b[6];
  out[7] = a[7] - b[7];
  out[8] = a[8] - b[8];
  return out;
}
/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat3} out
 */

function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  out[6] = a[6] * b;
  out[7] = a[7] * b;
  out[8] = a[8] * b;
  return out;
}
/**
 * Adds two mat3's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat3} out the receiving vector
 * @param {ReadonlyMat3} a the first operand
 * @param {ReadonlyMat3} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat3} out
 */

function multiplyScalarAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  out[3] = a[3] + b[3] * scale;
  out[4] = a[4] + b[4] * scale;
  out[5] = a[5] + b[5] * scale;
  out[6] = a[6] + b[6] * scale;
  out[7] = a[7] + b[7] * scale;
  out[8] = a[8] + b[8] * scale;
  return out;
}
/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyMat3} a The first matrix.
 * @param {ReadonlyMat3} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8];
}
/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {ReadonlyMat3} a The first matrix.
 * @param {ReadonlyMat3} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3],
      a4 = a[4],
      a5 = a[5],
      a6 = a[6],
      a7 = a[7],
      a8 = a[8];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3],
      b4 = b[4],
      b5 = b[5],
      b6 = b[6],
      b7 = b[7],
      b8 = b[8];
  return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a7), Math.abs(b7)) && Math.abs(a8 - b8) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a8), Math.abs(b8));
}
/**
 * Alias for {@link mat3.multiply}
 * @function
 */

var mul = multiply;
/**
 * Alias for {@link mat3.subtract}
 * @function
 */

var sub = subtract;

/***/ }),

/***/ "./src/Base.ts":
/*!*********************!*\
  !*** ./src/Base.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * 图层基础类
 * @class
 */
var Base = /** @class */ (function () {
    function Base() {
        this._listeners = {};
    }
    /**
     * 事件监听,用法同jQuery.on
     */
    Base.prototype.on = function (type, listener) {
        var listeners = this._listeners;
        if (listeners[type] === undefined) {
            listeners[type] = [];
        }
        if (listeners[type].indexOf(listener) === -1) {
            listeners[type].push(listener);
        }
    };
    /**
     * 触发事件
     * @example
     * this.fire("change",event)
     */
    Base.prototype.fire = function (type, event) {
        var listeners = this._listeners;
        var listenerArray = listeners[type];
        if (listenerArray !== undefined) {
            var array = listenerArray.slice(0);
            for (var i = 0, l = array.length; i < l; i++) {
                array[i].call(this, event);
            }
        }
    };
    /**
     * 关闭事件
     * @example
     * this.off('change',onChange)
     */
    Base.prototype.off = function (type, listener) {
        var listeners = this._listeners;
        var listenerArray = listeners[type];
        if (listenerArray !== undefined) {
            if (listener) {
                var index = listenerArray.indexOf(listener);
                if (index !== -1) {
                    listenerArray.splice(index, 1);
                }
            }
            else {
                this._listeners[type] = [];
            }
        }
    };
    Base.prototype.initConfig = function (config) {
    };
    /**
     * 地图添加图层时调用,由子类实现
     */
    Base.prototype.onAdd = function (map) {
        this.miniGL = map;
    };
    /**
     * 地图每帧调用该函数
     */
    Base.prototype.update = function () {
    };
    /**
     * 移除图层时调用
     */
    Base.prototype.onRemove = function () {
        this._listeners = {};
    };
    return Base;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Base);


/***/ }),

/***/ "./src/Mesh/BaseMesh.ts":
/*!******************************!*\
  !*** ./src/Mesh/BaseMesh.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var gl_matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/mat3.js");


/**
 * Base 基类方便继承以实现其他类型的情况
 */
var BaseMesh = /** @class */ (function () {
    function BaseMesh() {
        this.vSize = 2;
        this.offset = 0;
        this.depthMask = true;
        this.depthTest = true;
        this.transparent = true;
        this.uniformsNeedUpdate = true;
        this.uniformLocations = {};
        this.visible = true; // 是否需要重绘
        this.uniformData = {
            z: {
                value: 1,
                type: "uniform1f",
            },
        };
        this.vertex = [];
        this.buffers = {};
        this.buffersSize = {};
        this.indices = [];
    }
    BaseMesh.prototype.init = function (config) {
        if (config === void 0) { config = {}; }
        this.config = Object.assign({
            type: "ok",
        }, config);
        // 初始化模型转换矩阵，这个矩阵按需引用
        this.matrix = gl_matrix__WEBPACK_IMPORTED_MODULE_0__.create();
        if (config.shaders) {
            this.shaders = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, this.shaders), config.shaders);
        }
        if (config.miniGL) {
            config.miniGL.canvas.add(this);
        }
    };
    BaseMesh.prototype.setMatrix = function (matrix) {
        gl_matrix__WEBPACK_IMPORTED_MODULE_0__.copy(this.matrix, matrix);
    };
    BaseMesh.prototype.setUniformData = function () {
        if (!this.uniformData || !this.uniformsNeedUpdate)
            return;
        for (var key in this.uniformData) {
            var item = this.uniformData[key];
            this.setUniform(key, item);
        }
        // this.uniformsNeedUpdate = false;
    };
    /**
     * @param  {} texture
     * @param  {} key='u_Sampler'
     */
    BaseMesh.prototype.setTexture = function (texture, key) {
        if (key === void 0) { key = "u_Sampler"; }
        this.uniformData[key] = {
            type: "uniform1i",
            value: 0,
            texture: texture.webglTexture
                ? texture.webglTexture
                : texture,
        };
        this.texture = texture;
        this.uniformsNeedUpdate = true;
    };
    BaseMesh.prototype.setUniform = function (key, item) {
        var gl = this.gl;
        var value = item.value, type = item.type, texture = item.texture, _a = item.textureUnit, textureUnit = _a === void 0 ? 0 : _a;
        // 矩阵
        if (type.indexOf("uniformMatrix") > -1) {
            gl[type](this.getUniformLocation(key), false, value);
            // 图形数据
        }
        else if (texture) {
            // 激活纹理单元0，这里可以配置激活多个纹理单元，用来完成一个shader里多个纹理叠加处理的后期效果
            gl.activeTexture(gl["TEXTURE".concat(textureUnit)]);
            // 绑定纹理到单元0上
            gl.bindTexture(gl.TEXTURE_2D, item.texture);
            // 传值
            gl[type](this.getUniformLocation(key), value);
            // 行列数据
        }
        else if (type.slice(-1) === "v" || typeof value !== "object") {
            gl[type](this.getUniformLocation(key), value);
        }
        else {
            gl[type](this.getUniformLocation(key), value[0] || value, value[1], value[2], value[3]);
        }
        this.uniformData[key] = item;
    };
    /**
     * 新的缓存数据
     * @param  {} data
     * @param  {} name
     */
    BaseMesh.prototype.setBufferData = function (data, name, size, bufferType) {
        if (bufferType === void 0) { bufferType = this.bufferType; }
        // 没有的话初始化复用一个
        if (!this.buffers[name]) {
            this.buffers[name] = this.gl.createBuffer();
        }
        this.buffersSize[name] = size;
        // 顶点buffer
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.buffers[name]);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(data), this.gl[bufferType || "STATIC_DRAW"]);
    };
    /**
     * 更新缓冲区数据
     * @param {Array} data
     * @param {string} name
     * @param {number} offset
     */
    BaseMesh.prototype.updateBufferData = function (data, name, offset) {
        if (offset === void 0) { offset = 0; }
        // 顶点buffer
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.buffers[name]);
        this.gl.bufferSubData(this.gl.ARRAY_BUFFER, offset, new Float32Array(data));
    };
    BaseMesh.prototype.setIndices = function (indices) {
        this.indices = indices;
        this.count = !this.count ? indices.length : this.count;
        // 顶点buffer
        this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.indicesPointer);
        this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), this.gl.STATIC_DRAW);
    };
    // 生成shader程序
    BaseMesh.prototype.initShader = function () {
        var gl = this.gl;
        // 加载shader
        var vertexShaderObject = this.loadShader(this.shaders.vertex, this.gl.VERTEX_SHADER);
        var fragmentShaderObject = this.loadShader(this.shaders.fragment, this.gl.FRAGMENT_SHADER);
        // 创建程序
        var shaderProgram = this.gl.createProgram();
        this.gl.attachShader(shaderProgram, vertexShaderObject);
        this.gl.attachShader(shaderProgram, fragmentShaderObject);
        this.gl.linkProgram(shaderProgram);
        if (!this.gl.getProgramParameter(shaderProgram, this.gl.LINK_STATUS)) {
            console.error("shaderProgram Error: ", gl.getError(), gl.getProgramParameter(shaderProgram, 35715), gl.getProgramInfoLog(shaderProgram).trim());
            console.error("fragmentLog:", gl.getShaderInfoLog(vertexShaderObject).trim(), this.addLineNumbers(gl.getShaderSource(vertexShaderObject)));
            console.error("vertexLog:", gl.getShaderInfoLog(fragmentShaderObject).trim(), this.addLineNumbers(gl.getShaderSource(fragmentShaderObject)));
            return;
        }
        this.shaderProgram = shaderProgram;
    };
    BaseMesh.prototype.addLineNumbers = function (string) {
        var lines = string.split("\n");
        for (var i = 0; i < lines.length; i++) {
            lines[i] = i + 1 + ": " + lines[i];
        }
        return lines.join("\n");
    };
    // 获取顶点变量地址
    BaseMesh.prototype.getAttribLocation = function (name) {
        return this.gl.getAttribLocation(this.shaderProgram, name);
    };
    // 获取uniform变量地址
    BaseMesh.prototype.getUniformLocation = function (name) {
        // 缓存会每秒快20ms左右，节省一帧的时机
        if (this.uniformLocations[name])
            return this.uniformLocations[name];
        this.uniformLocations[name] = this.gl.getUniformLocation(this.shaderProgram, name);
        return this.uniformLocations[name];
    };
    // 加载shader
    BaseMesh.prototype.loadShader = function (shaderStr, type) {
        var shader = this.gl.createShader(type);
        this.gl.shaderSource(shader, shaderStr);
        this.gl.compileShader(shader);
        return shader;
    };
    BaseMesh.prototype.render = function () {
        if (!this.shaders)
            return;
        // 2D 只需要两个坐标轴标识位置
        var vLen = Math.ceil(this.vertex.length / this.vSize); // 几个点
        var offset = 0; // 从数据第几位开始偏移
        var normalize = false;
        for (var key in this.buffers) {
            var bufferData = this.buffers[key];
            var bufferPosition = this.getAttribLocation(key);
            // 分别绑定数据到shader程序中
            this.gl.bindBuffer(this.gl.ARRAY_BUFFER, bufferData);
            this.gl.vertexAttribPointer(bufferPosition, this.buffersSize[key], this.gl.FLOAT, normalize, 0, offset);
            this.gl.enableVertexAttribArray(bufferPosition);
        }
        // 加载shader程序
        this.gl.useProgram(this.shaderProgram);
        this.setUniformData();
        // 渲染
        if (this.vertex.length) {
            this.gl.drawArrays(this.gl[this.drawType], this.offset, vLen);
        }
    };
    BaseMesh.prototype.afterRender = function () { };
    BaseMesh.prototype.onAdd = function (miniGL) {
        this.miniGL = miniGL;
        // 获取顶点数据内存里的指针
        this.gl = miniGL.gl;
        // 没有初始化的情况
        if (!this.indicesPointer) {
            this.indicesPointer = this.gl.createBuffer();
        }
        if (this.shaders && !this.shaderProgram) {
            this.initShader();
        }
        this.afterAdd();
    };
    BaseMesh.prototype.afterAdd = function () { };
    BaseMesh.prototype.translate = function (x, y) {
        gl_matrix__WEBPACK_IMPORTED_MODULE_0__.translate(this.matrix, this.matrix, [x, y]);
    };
    BaseMesh.prototype.scale = function (x, y) {
        y = y || x;
        gl_matrix__WEBPACK_IMPORTED_MODULE_0__.scale(this.matrix, this.matrix, [x, y]);
    };
    // 销毁shader
    BaseMesh.prototype.destroy = function () {
        var _this = this;
        var shaders = this.gl.getAttachedShaders(this.shaderProgram);
        shaders.forEach(function (item) {
            _this.gl.deleteShader(item);
        });
        this.gl.deleteBuffer(this.indicesPointer);
        this.gl.deleteProgram(this.shaderProgram);
        this.parent = undefined;
        this.dispose();
    };
    // 释放buffer空间
    BaseMesh.prototype.dispose = function () {
        for (var key in this.buffers) {
            this.gl.disableVertexAttribArray(this.getAttribLocation(key));
            this.gl.deleteBuffer(this.buffers[key]);
        }
        for (var key in this.uniformData) {
            if (this.uniformData[key].texture) {
                this.gl.deleteTexture(this.uniformData[key].texture);
            }
        }
        this.buffers = {};
    };
    return BaseMesh;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BaseMesh);


/***/ }),

/***/ "./src/Mesh/Line.ts":
/*!**************************!*\
  !*** ./src/Mesh/Line.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Shaders_line__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Shaders/line */ "./src/Shaders/line.ts");
/* harmony import */ var _BaseMesh__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseMesh */ "./src/Mesh/BaseMesh.ts");



var Line = /** @class */ (function (_super) {
    __extends_1(Line, _super);
    function Line(config) {
        var _this = _super.call(this) || this;
        _this.drawType = 'LINE_STRIP';
        _this.shaders = {
            vertex: _Shaders_line__WEBPACK_IMPORTED_MODULE_0__["default"].vertexShader,
            fragment: _Shaders_line__WEBPACK_IMPORTED_MODULE_0__["default"].fragmentShader
        };
        _this.offset = 0;
        config = Object.assign({
            z: 1
        }, config);
        _this.uniformData = {
            z: {
                value: Math.min(config.z, 1),
                type: 'uniform1f'
            }
        };
        _this.init(config);
        return _this;
    }
    Line.prototype.setData = function (data) {
        var _this = this;
        this.dispose();
        var points = [];
        this.data = data;
        var colors = [];
        data.forEach(function (item) {
            points.push(item.position.x, item.position.y);
            colors.push.apply(colors, (item.color || _this.config.color || [1, 0, 1, 1]));
        });
        this.vertex = points;
        this.setBufferData(points, 'position', 2);
        this.setBufferData(colors, 'color', 4);
    };
    /**
     *
     * @param {any} param 入参
     */
    Line.prototype.setBufferDatas = function (_a) {
        var position = _a.position, color = _a.color;
        this.dispose();
        this.vertex = position;
        position && this.setBufferData(position, 'position', 2);
        color && this.setBufferData(color, 'color', 4);
    };
    return Line;
}(_BaseMesh__WEBPACK_IMPORTED_MODULE_1__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Line);


/***/ }),

/***/ "./src/Mesh/Mesh.ts":
/*!**************************!*\
  !*** ./src/Mesh/Mesh.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Shaders_mesh__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Shaders/mesh */ "./src/Shaders/mesh.ts");
/* harmony import */ var _BaseMesh__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseMesh */ "./src/Mesh/BaseMesh.ts");



var Mesh = /** @class */ (function (_super) {
    __extends_1(Mesh, _super);
    function Mesh(config) {
        if (config === void 0) { config = {
            wireFrame: false
        }; }
        var _this = _super.call(this) || this;
        _this.drawType = 'TRIANGLES';
        _this.offset = 0; // array.BYTES_PER_ELEMENT * indicesEachLength
        _this.shaders = {
            vertex: _Shaders_mesh__WEBPACK_IMPORTED_MODULE_0__["default"].vertexShader,
            fragment: _Shaders_mesh__WEBPACK_IMPORTED_MODULE_0__["default"].fragmentShader
        };
        _this.uniformData.z = {
            value: config.z || 1,
            type: 'uniform1f'
        };
        _this.init(config);
        _this.vSize = 2;
        return _this;
    }
    Mesh.prototype.setData = function (data, indices) {
        this.dispose();
        var points = [];
        var colors = [];
        this.data = data;
        data.forEach(function (item) {
            var coord = [item.position.x, item.position.y];
            var color = item.color || [1, 1, 0, 1];
            colors.push.apply(colors, color);
            points.push.apply(points, coord);
        });
        this.vertex = points;
        this.setBufferData(points, 'position', 2);
        this.setBufferData(colors, 'color', 4);
        this.setIndices(indices);
    };
    Mesh.prototype.setBufferDatas = function (_a) {
        var position = _a.position, color = _a.color, indices = _a.indices, uvs = _a.uvs;
        var viewport = this.miniGL.viewport;
        this.dispose();
        this.vertex = position;
        this.setBufferData(position, 'position', 2);
        this.setBufferData(color, 'color', 4);
        this.setBufferData(uvs, 'uv', 2);
        this.setIndices(indices);
    };
    Mesh.prototype.setIndices = function (input) {
        var indices = [];
        // 支持显示网格线
        if (this.config.wireFrame && this.drawType === 'TRIANGLES') {
            for (var i = 0; i < input.length - 2; i += 3) {
                indices.push(input[i], input[i + 1], input[i + 1], input[i + 2], input[i + 2], input[i]);
            }
        }
        else {
            indices = input;
        }
        this.indices = indices;
        // 顶点buffer
        this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.indicesPointer);
        this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), this.gl.STATIC_DRAW);
    };
    Mesh.prototype.render = function () {
        // 2D 只需要两个坐标轴标识位置
        var offset = 0; // 从数据第几位开始偏移
        var normalize = false;
        // 分别绑定数据到shader程序中
        for (var key in this.buffers) {
            var bufferData = this.buffers[key];
            var bufferPosition = this.getAttribLocation(key);
            // 分别绑定数据到shader程序中
            this.gl.bindBuffer(this.gl.ARRAY_BUFFER, bufferData);
            this.gl.vertexAttribPointer(bufferPosition, this.buffersSize[key], this.gl.FLOAT, normalize, 0, offset);
            this.gl.enableVertexAttribArray(bufferPosition);
        }
        // 使用顶点数据
        this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.indicesPointer);
        // 加载shader程序
        this.gl.useProgram(this.shaderProgram);
        this.setUniformData();
        // 渲染
        if (this.indices.length) {
            var drawType = this.config.wireFrame ? 'LINES' : this.gl[this.drawType];
            // offset必须乘以类型数组的长度，意味着要从内存中数据的对应字节数开始算 根据类型乘对应的BYTES_PER_ELEMENT
            this.gl.drawElements(drawType, this.indices.length, this.gl.UNSIGNED_SHORT, this.offset);
        }
    };
    return Mesh;
}(_BaseMesh__WEBPACK_IMPORTED_MODULE_1__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Mesh);


/***/ }),

/***/ "./src/Mesh/Point.ts":
/*!***************************!*\
  !*** ./src/Mesh/Point.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Shaders_point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Shaders/point */ "./src/Shaders/point.ts");
/* harmony import */ var _BaseMesh__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseMesh */ "./src/Mesh/BaseMesh.ts");



var Point = /** @class */ (function (_super) {
    __extends_1(Point, _super);
    function Point(config) {
        var _this = _super.call(this) || this;
        _this.drawType = 'POINTS';
        _this.vertex = [];
        _this.offset = 0;
        _this.vSize = 2;
        _this.bufferType = 'DYNAMIC_DRAW';
        config = Object.assign({
            isRound: true,
            initTime: false,
            sizeAttenuation: true,
        }, config);
        _this.shaders = {
            vertex: config.vertexShader || _Shaders_point__WEBPACK_IMPORTED_MODULE_0__["default"].vertexShader(config),
            fragment: config.fragmentShader || _Shaders_point__WEBPACK_IMPORTED_MODULE_0__["default"].fragmentShader(config)
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
    Point.prototype.setData = function (data) {
        var _this = this;
        this.dispose();
        var points = [];
        var colors = [];
        var size = [];
        var vTime = [];
        data.forEach(function (item) {
            points.push(item.position.x, item.position.y);
            colors.push.apply(colors, (item.color || [1, 0, 0, 1]));
            size.push(item.size || 10);
            vTime.push(item.initTime || _this.config.initTime || 2 * Math.random() * Math.PI);
        });
        this.vertex = points;
        this.setBufferData(points, 'position', 2);
        this.setBufferData(colors, 'color', 4);
        this.setBufferData(size, 'size', 1);
        this.setBufferData(vTime, 'initTime', 1);
    };
    /**
     *
     * @param {any} param 入参
     */
    Point.prototype.setBufferDatas = function (_a) {
        var position = _a.position, color = _a.color, size = _a.size, initTime = _a.initTime;
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
    };
    return Point;
}(_BaseMesh__WEBPACK_IMPORTED_MODULE_1__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Point);


/***/ }),

/***/ "./src/Mesh/WidthLine.ts":
/*!*******************************!*\
  !*** ./src/Mesh/WidthLine.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Shaders_widthLine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Shaders/widthLine */ "./src/Shaders/widthLine.ts");
/* harmony import */ var _BaseMesh__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseMesh */ "./src/Mesh/BaseMesh.ts");



var WidthLine = /** @class */ (function (_super) {
    __extends_1(WidthLine, _super);
    function WidthLine(config) {
        var _this = _super.call(this) || this;
        _this.drawType = 'TRIANGLES'; // "TRIANGLE_STRIP";
        _this.shaders = {
            vertex: _Shaders_widthLine__WEBPACK_IMPORTED_MODULE_0__["default"].vertexShader,
            fragment: _Shaders_widthLine__WEBPACK_IMPORTED_MODULE_0__["default"].fragmentShader
        };
        _this.offset = 0;
        _this.data = [];
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
    WidthLine.prototype.setData = function (data) {
        if (!data.length && data.length < 2)
            return console.warn('need input data.length >= 2');
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
        });
        // 生产双倍点for两个边
        var res = this.calcSidePoints(points);
        this.setBufferData(res.nowData, 'now', 2);
        this.setBufferData(res.preData, 'pre', 2);
        this.setBufferData(res.nextData, 'next', 2);
        this.setBufferData(res.side, 'side', 1);
        // 生成顶点
        var indices = [];
        var indicesLength = res.nowData.length / 2;
        // TRIANGLES情况
        for (var i = 0; i < indicesLength - 2; i += 2) {
            indices.push(i);
            indices.push(i + 1);
            indices.push(i + 2);
            indices.push(i + 2);
            indices.push(i + 1);
            indices.push(i + 3);
        }
        // Strip退化方案太反人类，不hack 了
        // for (let i = 0; i < indicesLength; i++) {
        // 	//012 213 233 336 366 667 678
        // 	// 4 =>3 5=>6 //退化过程
        // 	// data[length - 1],
        // 	indices.push(i);
        // }
        this.setIndices(indices);
        this.res = res;
    };
    WidthLine.prototype.addData = function (data) {
    };
    WidthLine.prototype.calcSidePoints = function (data) {
        if (data === void 0) { data = []; }
        var length = data.length;
        var side = [];
        var nextData = [];
        var preData = [];
        var nowData = [];
        // 生产双倍点for两个边
        for (var i = 0; i < length; i += 2) {
            side.push(1, -1);
            nowData.push(data[i], data[i + 1], data[i], data[i + 1]);
        }
        var next = [2 * data[length - 2] - data[length - 4], 2 * data[length - 1] - data[length - 3]];
        nextData = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__spreadArray)([], nowData, true), next, true), next, true);
        nextData.splice(0, 4);
        var pre = [2 * data[0] - data[2], 2 * data[1] - data[3]];
        preData = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__spreadArray)([], pre, true), pre, true), nowData, true);
        return {
            nowData: nowData,
            preData: preData,
            side: side,
            nextData: nextData
        };
    };
    WidthLine.prototype.render = function () {
        // 2D 只需要两个坐标轴标识位置
        var offset = 0; // 从数据第几位开始偏移
        var normalize = false;
        for (var key in this.buffers) {
            var bufferData = this.buffers[key];
            var bufferPosition = this.getAttribLocation(key);
            // 分别绑定数据到shader程序中
            this.gl.bindBuffer(this.gl.ARRAY_BUFFER, bufferData);
            this.gl.vertexAttribPointer(bufferPosition, this.buffersSize[key], this.gl.FLOAT, normalize, 0, offset);
            // todo:webgl2.0 实例数组能减少同样形状但渲染不同的高性能方案
            this.gl.enableVertexAttribArray(bufferPosition);
        }
        // 使用顶点数据
        this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.indicesPointer);
        // 加载shader程序
        this.gl.useProgram(this.shaderProgram);
        this.setUniformData();
        // 渲染
        if (this.indices.length) {
            this.gl.drawElements(this.gl[this.drawType], this.indices.length, this.gl.UNSIGNED_SHORT, this.offset);
        }
    };
    return WidthLine;
}(_BaseMesh__WEBPACK_IMPORTED_MODULE_1__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WidthLine);


/***/ }),

/***/ "./src/Shaders/line.ts":
/*!*****************************!*\
  !*** ./src/Shaders/line.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    // shader中进行坐标转换会不会快？CPU只会调用一次，GPU每帧都要重复去运算，2d情况下没有相机，
    // 没有坐标因相机而变化的情况，所以不用再shader中运算，可以减少cpu的调用率
    // 发现还是会大规模常常对坐标进行替换，那还是放进shader中运算吧
    vertexShader: "\n\tprecision highp float;\n\tattribute vec2 position;\n\tattribute vec4 color;\n    uniform mat3 transform;\n    uniform mat3 modelView;\n\tuniform float z;\n\tvarying vec4 vColor;\n\tvoid main()\n\t{\n\t\tvColor = color;\n\t\tvec3 mPosition = transform * modelView * vec3(position,1.);\n\t\tgl_Position = vec4(mPosition.xy,z,1.);\n\t}\n\t",
    fragmentShader: "\n\tprecision highp float;\n\tvarying vec4 vColor;\n\tvoid main()\n\t{\n\t\tgl_FragColor = vColor;\n\t}\n\t"
});


/***/ }),

/***/ "./src/Shaders/mesh.ts":
/*!*****************************!*\
  !*** ./src/Shaders/mesh.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    vertexShader: "\n\tprecision highp float;\n\tattribute vec2 position;\n\tattribute vec4 color;\n\tvarying vec4 vColor;\n    uniform mat3 transform;\n    uniform mat3 modelView;\n\tuniform float z;\n\tvoid main()\n\t{\n\t\tvColor = color;\n\t\tvec3 mPosition = transform * modelView * vec3(position,1.);\n\t\tgl_Position = vec4(mPosition.xy,z,1.0);\n\t\t\n\t}\n\t",
    fragmentShader: "\n\tprecision highp float;\n\tvarying vec4 vColor;\n\tvoid main()\n\t{\n\t\tgl_FragColor = vColor;\n\t}\n\t"
});


/***/ }),

/***/ "./src/Shaders/point.ts":
/*!******************************!*\
  !*** ./src/Shaders/point.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    vertexShader: function (config) {
        return "\n\t\tprecision mediump float;\n\t\tattribute vec2 position;\n\t\tattribute vec4 color;\n\t\tattribute float size;\n\t\tattribute float initTime;\n\t\tuniform float z;\n\t\tuniform mat3 transform;\n\t\tvarying vec4 vColor;\n\t\tuniform float t;\n\t\tuniform float scale;\n        uniform float pixelRatio;\n\t\tvarying float vTime;\n\t\t\n\t\tvoid main()\n\t\t{\n\t\t\tvColor = color;\n\t\t\tgl_PointSize = size * pixelRatio ".concat(config.sizeAttenuation ? '* scale' : '', ";\n\t\t\tvec3 mPosition = transform * vec3(position,1.);\n\t\t\tgl_Position = vec4(mPosition.xy,z,1.);\n\t\t\tvTime = initTime;\n\t\t}\n\t\t");
    },
    fragmentShader: function (_a) {
        var _b = _a.isRound, isRound = _b === void 0 ? true : _b, map = _a.map, isGradual = _a.isGradual;
        return "\n\t\tprecision mediump float;\n\t\tuniform float t;\n\t\tuniform float antialias;\n\t\tuniform sampler2D map;\n\t\tvarying float vTime;\n\t\tvarying vec4 vColor;\n\t\tvoid main()\n\t\t{\n\t\t\tfloat distance = distance(gl_PointCoord, vec2(0.5, 0.5));\n\t\t".concat(isRound ? "\n\t\t\tif (distance <= 0.5){" : '', "\n\t\t\t").concat(map ? "\n\t\t\t\tvec4 texelColor = texture2D( map, gl_PointCoord ); \n\t\t\t\tgl_FragColor = texelColor;\n\t\t\t\t".concat(isGradual ? "\n\t\t\t\tgl_FragColor.w *= sin(t+vTime)*0.75/2. + 1.-0.75/2." : '', ";\n\t\t\t\tif(texelColor.w<=0.01){\n\t\t\t\t\tdiscard;\n\t\t\t\t}\n\t\t\t") : "\n\t\t\t\tgl_FragColor = vColor;\n\t\t\t\t".concat(isGradual ? "\n\t\t\t\tgl_FragColor.w = 1. - distance*2.;\n\t\t\t\tgl_FragColor.w *= sin(t+vTime)*0.75/2. + 1.-0.75/2. ;" : '', "\n\t\t\t"), "\n\t\t").concat(isRound ? "\n\t\t\t\tfloat smoothSideRatio = smoothstep(0.,antialias,(0.5-distance));\n\t\t\t\tgl_FragColor.w *= smoothSideRatio;\n\t\t\t}else{\n\t\t\t\tdiscard;\n\t\t\t}\n\t\t" : '', "\n\t\t}\n\t\t");
    }
});


/***/ }),

/***/ "./src/Shaders/widthLine.ts":
/*!**********************************!*\
  !*** ./src/Shaders/widthLine.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    // 先求连接线然后再求垂线
    // 求出等比放大的值
    vertexShader: "\n\tprecision lowp float;\n\tattribute vec2 now;\n\tattribute vec2 pre;\n\tattribute vec2 next;\n\tattribute float side;\n\tuniform float width;\n\tuniform float aspect;\n\tuniform mat3 transform;\n\tuniform float offset;\n\tvarying float vSide;\n\tvoid main()\n\t{\n\t\tvSide = side;\n\n\t\t// \u5148\u8F6C\u6362\u5750\u6807\u7CFB\n\t\tvec2 mNow = (transform*vec3(now,1.)).xy;\n\t\tvec2 mNext = (transform*vec3(next,1.)).xy;\n\t\tvec2 mPre = (transform*vec3(pre,1.)).xy;\n\t\tvec2 _now = vec2(mNow);\n\t\tvec2 _next = vec2(mNext);\n\t\tvec2 _pre =  vec2(mPre);\n\t\n\t\t// \u5148\u628A\u672C\u5750\u6807\u7CFB\u7684\u5750\u6807\u653E\u5927\uFF0C\u548C\u771F\u5B9E\u7684\u5916\u754C\u5750\u6807\u4E00\u6837,\u8FD9\u6837\u6C42\u51FA\u6765\u7684\u76F8\u5BF9\u5411\u91CF\u662F\u51C6\u786E\u7684\uFF0C\u5982\u679C\u5728\u540E\u9762\u4E4B\u95F4\u5BF9normal\u8FDB\u884C\u53D8\u5316\uFF0C\u5C31\u4F1A\u5F97\u51FA\u9519\u8BEF\u7684\u7ED3\u679C\n\t\t_now.x *= aspect;\n\t\t_next.x *= aspect;\n\t\t_pre.x *= aspect;\n\t\t\n\t\tvec2 point0_1 = normalize(_now - _pre);\n\t\tvec2 point2_1 = normalize(_next - _now);\n\t\tvec2 point2_1_0v = normalize(point2_1 + point0_1);\n\t\t\n\t\tvec2 normal = vec2( -point2_1_0v.y , point2_1_0v.x );\n\t\tvec2 offsets = offset*normal;\n\n\t\t//\u8FD9\u4E2A\u7B97\u6CD5\u4E0B\u5148\u653E\u5927,\u6C42\u51FA\u7684Normal\u6BD4\u4F8B\u5728\u653E\u5927\u7684\u5750\u6807\u7CFB\u4E0B\u662F\u5BF9\u7684\uFF0C\u6839\u636E\u8FD9\u4E2Anormal\u6C42\u51FA\u653E\u5927\u7684\u6BD4\u4F8B\n\t\tfloat ratio = sqrt(1.0 - pow(dot(normal,point0_1),2.0));\n\t\tvec2 dir = normal * width/ratio * .5 * side + offsets;\n\n\t\t// \u5F97\u51FA\u7684x\u5750\u6807\u4F1A\u88AB\u653E\u5927\uFF0C\u8FD9\u91CC\u8981\u9664\u6389,\u8BB0\u5F97\u8981\u7528\u8F6C\u6362\u540E\u5750\u6807\u8FDB\u884C\u52A0\u51CF\n\t\tgl_Position = vec4(mNow.x + dir.x/aspect,mNow.y+dir.y , 1., 1.);\n\t}\n\t",
    fragmentShader: "\n\tprecision lowp float;\n\tuniform vec4 color;\n\tvarying float vSide;\n\tvoid main()\n\t{\n\t\tfloat smoothSideRatio = max(0.1,smoothstep(0.,0.4,(1. - abs(vSide))));\n\t\tgl_FragColor = color;\n\t\tgl_FragColor.w = smoothSideRatio;\n\t}\n\t"
});


/***/ }),

/***/ "./src/Utils/Controller.ts":
/*!*********************************!*\
  !*** ./src/Utils/Controller.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var gl_matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/mat3.js");

var Controller = /** @class */ (function () {
    function Controller(config) {
        var _this = this;
        this.onMouseMove = function (e) {
            if (_this.status === 'disable')
                return;
            var x = e.offsetX - _this.startXY.x + _this.startXY.startX;
            var y = e.offsetY - _this.startXY.y + _this.startXY.startY;
            _this.moveTo(x, y);
        };
        this.onMouseUp = function () {
            var container = _this.miniGL.container;
            container.removeEventListener('mousemove', _this.onMouseMove);
            container.removeEventListener('mouseup', _this.onMouseUp);
        };
        this.miniGL = config.miniGL;
        this.viewport = this.miniGL.viewport;
        this.gl = this.miniGL.gl;
        this.status = 'enable';
        this.config = Object.assign({
        // 默认参数
        }, config.config);
        if (!config.disableController) {
            this.addEvents();
        }
        this.matrix = gl_matrix__WEBPACK_IMPORTED_MODULE_0__.create();
    }
    Controller.prototype.disable = function () {
        this.status = 'disable';
    };
    Controller.prototype.enable = function () {
        this.status = 'enable';
    };
    Controller.prototype.addEvents = function () {
        var _this = this;
        var container = this.miniGL.container;
        container.addEventListener('mousedown', function (e) {
            if (e.ctrlKey) {
                e.preventDefault();
                return;
            }
            _this.startXY = {
                x: e.offsetX,
                y: e.offsetY,
                startX: _this.viewport.translate[0],
                startY: _this.viewport.translate[1]
            };
            _this.addMoveEvents();
        });
        container.addEventListener('wheel', function (e) {
            e.preventDefault();
            _this.zoom(e.deltaY > 0 ? 0.99 : 1.01, e.pageX, e.pageY);
        });
    };
    Controller.prototype.addMoveEvents = function () {
        var container = this.miniGL.container;
        container.addEventListener('mousemove', this.onMouseMove);
        container.addEventListener('mouseup', this.onMouseUp);
    };
    /**
     * 放大到制定的倍率
     * @param scale
     * @param cx
     * @param cy
     */
    Controller.prototype.zoomTo = function (scale, cx, cy) {
        var changeScale = scale / this.viewport.scale;
        this.zoom(changeScale, cx, cy);
    };
    /**
     * 当前基础的放大倍率
     * @param  {number} scale
     * @param  {number} cx
     * @param  {number} cy
     */
    Controller.prototype.zoom = function (scale, cx, cy) {
        // 求世界坐标
        var canvasPos = this.viewport.convertScreenToWorld(cx, cy);
        var nextScale = scale * this.viewport.scale;
        // 求出变换后的偏移坐标
        var x = cx - canvasPos.x * nextScale;
        var y = cy - canvasPos.y * nextScale;
        this.transform(nextScale, x, y);
    };
    /**
     * 这个x,y是当前屏幕的x,y,变换后的
     * @param  {number} x
     * @param  {number} y
     */
    Controller.prototype.moveTo = function (x, y) {
        var scale = this.viewport.scale;
        this.transform(scale, x, y);
    };
    /**
     * 移动到指定的坐标
     * @param x
     * @param y
     */
    Controller.prototype.move = function (x, y) {
        var scale = this.viewport.scale;
        x = x + this.viewport.translate[0];
        y = y + this.viewport.translate[1];
        this.transform(scale, x, y);
    };
    /**
     *  转换到指定情形，先放大后平移，然后注入到viewport.transform
     * @param scale
     * @param x
     * @param y
     */
    Controller.prototype.transform = function (scale, x, y) {
        this.viewport.translate = [x, y];
        this.viewport.scale = scale;
        this.matrix = gl_matrix__WEBPACK_IMPORTED_MODULE_0__.create();
        gl_matrix__WEBPACK_IMPORTED_MODULE_0__.translate(this.matrix, this.matrix, new Float32Array(this.viewport.translate));
        gl_matrix__WEBPACK_IMPORTED_MODULE_0__.scale(this.matrix, this.matrix, [scale, scale]);
        gl_matrix__WEBPACK_IMPORTED_MODULE_0__.mul(this.viewport.transform, this.viewport.matrix, this.matrix);
    };
    /**
     * @param  {number} rad
     * @param  {number} cx=this.viewport.width/2
     * @param  {number} cy=this.viewport.height/2
     */
    Controller.prototype.rotateTo = function (rad, cx, cy) {
        if (cx === void 0) { cx = this.viewport.width / 2; }
        if (cy === void 0) { cy = this.viewport.height / 2; }
        var changeRad = rad - this.viewport.rotation || 0;
        this.rotate(changeRad, cx, cy);
    };
    /**
     *
     * @param rad
     * @param cx
     * @param cy
     */
    Controller.prototype.rotate = function (rad, cx, cy) {
        if (cx === void 0) { cx = this.viewport.width / 2; }
        if (cy === void 0) { cy = this.viewport.height / 2; }
        var transform = this.viewport.transform;
        this.viewport.rotation += rad;
        gl_matrix__WEBPACK_IMPORTED_MODULE_0__.translate(transform, transform, [cx, cy]); // 再平移回去
        gl_matrix__WEBPACK_IMPORTED_MODULE_0__.rotate(transform, transform, rad); // 再平移回去
        gl_matrix__WEBPACK_IMPORTED_MODULE_0__.translate(transform, transform, [-cx, -cy]); // 先平移到原点
    };
    return Controller;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Controller);


/***/ }),

/***/ "./src/View/Canvas.ts":
/*!****************************!*\
  !*** ./src/View/Canvas.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Mesh_Mesh__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Mesh/Mesh */ "./src/Mesh/Mesh.ts");
/* harmony import */ var _Mesh_Point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Mesh/Point */ "./src/Mesh/Point.ts");
/* harmony import */ var _Mesh_Line__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Mesh/Line */ "./src/Mesh/Line.ts");
/* harmony import */ var _Mesh_WidthLine__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Mesh/WidthLine */ "./src/Mesh/WidthLine.ts");
/* harmony import */ var gl_matrix__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/mat3.js");






/**
 * @class
 */
var Canvas = /** @class */ (function () {
    function Canvas(config) {
        var _this = this;
        this.index = 0;
        this.meshes = [];
        this.status = "update";
        this.update = function () {
            var time = new Date().getTime();
            var delta = time - _this.beforeTime;
            _this.beforeTime = time;
            _this.render(delta);
            if (_this.status === "update")
                requestAnimationFrame(_this.update);
        };
        this.meshes = [];
        this.miniGL = config.miniGL;
        this.gl = this.miniGL.gl;
        // 基础渲染以下类，其他形状让让用户自己new
        // 牺牲一些性能，渲染多次drawElements来避免通过退化三角形合并形状，导致的事件处理困难（需要分层处理合并的图层，然后按照像素去检测，比较恶心）
        this.mesh = new _Mesh_Mesh__WEBPACK_IMPORTED_MODULE_0__["default"](config.meshConfig);
        this.point = new _Mesh_Point__WEBPACK_IMPORTED_MODULE_1__["default"](config.pointConfig);
        this.line = new _Mesh_Line__WEBPACK_IMPORTED_MODULE_2__["default"](config.lineConfig);
        this.widthLine = new _Mesh_WidthLine__WEBPACK_IMPORTED_MODULE_3__["default"](config.widthLineConfig);
        this.add(this.mesh);
        this.add(this.line);
        this.add(this.point);
        this.add(this.widthLine);
    }
    Canvas.prototype.dispose = function () {
        var _this = this;
        this.meshes.forEach(function (item) {
            _this.remove(item);
            item.destroy && item.destroy();
        });
        this.meshes = [];
    };
    Canvas.prototype.toDataUrl = function () {
        return this.gl.canvas.toDataURL();
    };
    /**
     * @param  {} mesh
     * @param  {} [key]
     * @returns {String} key
     */
    Canvas.prototype.add = function (mesh) {
        this.meshes.push(mesh);
        mesh.onAdd && mesh.onAdd(this.miniGL);
        mesh.parent = this;
        return mesh;
    };
    Canvas.prototype.remove = function (child) {
        var index = this.meshes.indexOf(child);
        this.meshes.splice(index, 1);
    };
    Canvas.prototype.addChild = function () {
        var _a;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        (_a = this.add).call.apply(_a, (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__spreadArray)([this], args, false));
    };
    Canvas.prototype.removeChild = function () {
        var _a;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        (_a = this.remove).call.apply(_a, (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__spreadArray)([this], args, false));
    };
    Canvas.prototype.render = function (delta) {
        var _this = this;
        var gl = this.gl;
        this.miniGL.fire("beforerender", delta);
        // 清空
        gl.clearDepth(1.0);
        // gl.enable(gl.DEPTH_TEST);
        gl.disable(gl.DEPTH_TEST);
        gl.depthFunc(gl.LEQUAL);
        gl.disable(gl.CULL_FACE);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        this.meshes.forEach(function (mesh) {
            _this.renderMesh(mesh, delta);
        });
    };
    /**
     * @param  {} mesh
     * @param  {} delta
     * @param  {} parentMatrix 一级级传下来的矩阵
     */
    Canvas.prototype.renderMesh = function (mesh, delta, parentMatrix) {
        var _this = this;
        var gl = this.gl;
        var blendMode = (mesh.texture || {}).premultiplyAlpha
            ? "ONE"
            : "SRC_ALPHA";
        gl.enable(gl.BLEND);
        gl.blendFunc(gl[blendMode], mesh.blendMode || gl.ONE_MINUS_SRC_ALPHA);
        // 写入深度缓冲
        if (mesh.visible) {
            this.makeTransform(mesh, parentMatrix);
            this.makeNeedUniform(mesh);
            mesh.render(delta);
            // 更新子元素
            if (mesh.children) {
                mesh.children.forEach(function (item) {
                    _this.renderMesh(item, delta, mesh.uniformData.modelView.value);
                });
            }
        }
    };
    Canvas.prototype.makeNeedUniform = function (item) {
        item.uniformData.aspect = {
            value: this.miniGL.viewport.ratio,
            type: "uniform1f",
        };
        item.uniformData.pixelRatio = {
            value: this.miniGL.viewport.pixelRatio,
            type: "uniform1f",
        };
        item.uniformData.scale = {
            value: this.miniGL.viewport.scale,
            type: "uniform1f",
        };
    };
    Canvas.prototype.makeTransform = function (item, parentMatrix) {
        if (parentMatrix) {
            var modelView = gl_matrix__WEBPACK_IMPORTED_MODULE_5__.mul(gl_matrix__WEBPACK_IMPORTED_MODULE_5__.create(), parentMatrix, item.matrix);
            item.uniformData.modelView = {
                value: modelView,
                type: "uniformMatrix3fv",
            };
        }
        else {
            item.uniformData.modelView = {
                value: item.matrix,
                type: "uniformMatrix3fv",
            };
        }
        item.uniformData.transform = {
            value: this.miniGL.viewport.transform,
            type: "uniformMatrix3fv",
        };
    };
    return Canvas;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Canvas);


/***/ }),

/***/ "./src/View/Viewport.ts":
/*!******************************!*\
  !*** ./src/View/Viewport.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var gl_matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/mat3.js");

/**
 * @class
 */
var ViewPort = /** @class */ (function () {
    function ViewPort(config) {
        this.scale = 1;
        this.translate = [0, 0];
        this.rotation = Math.PI * 2;
        this.width = 100;
        this.height = 100;
        this.pixelRatio = 1;
        this.renderWidth = 200;
        this.renderHeight = 200;
        this.ratio = 1;
        this.miniGL = config.miniGL;
        this.gl = this.miniGL.gl;
        this.config = Object.assign({}, config.config);
        this.transform = gl_matrix__WEBPACK_IMPORTED_MODULE_0__.create(); // 2d视图转换矩阵
        this.convertTransform = gl_matrix__WEBPACK_IMPORTED_MODULE_0__.create(); // 空间转换矩阵
    }
    ViewPort.prototype.convertScreenToWorld = function (x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        return {
            x: (x - this.translate[0]) / this.scale,
            y: (y - this.translate[1]) / this.scale,
        };
    };
    ViewPort.prototype.convertWorldToScreen = function (x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        return {
            x: this.scale * x + this.translate[0],
            y: this.scale * y + this.translate[1],
        };
    };
    /**
     * @param  {} x=0
     * @param  {} y=0
     */
    ViewPort.prototype.convertScreenToClip = function (x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        return {
            x: x * 2 / this.width - 1,
            y: 1 - y * 2 / this.height
        };
    };
    /**
     * @param  {} x=0
     * @param  {} y=0
     */
    ViewPort.prototype.convertClipToScreen = function (x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        return {
            x: (x + 1) * this.width / 2,
            y: (1 - y) * this.height / 2
        };
    };
    /**
     * 重新布局
     */
    ViewPort.prototype.resize = function () {
        var ratio = window.devicePixelRatio;
        this.pixelRatio = ratio;
        var width = (this.config.width || this.miniGL.container.clientWidth);
        var height = (this.config.height || this.miniGL.container.clientHeight);
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
    };
    ViewPort.prototype.makeMatrix = function () {
        // 计算好坐标转换矩阵
        var transform = gl_matrix__WEBPACK_IMPORTED_MODULE_0__.create();
        gl_matrix__WEBPACK_IMPORTED_MODULE_0__.scale(transform, transform, [2 / this.width, -2 / this.height]);
        // gl-matrix会以初次进行换算的坐标系为基准空间，来进行换算
        // 也就是说每次进行转换的时候，都是在原矩阵上做计算和转换，而不只是改变矩阵的值
        gl_matrix__WEBPACK_IMPORTED_MODULE_0__.translate(transform, transform, [-this.width / 2, -this.height / 2]);
        this.matrix = transform;
        gl_matrix__WEBPACK_IMPORTED_MODULE_0__.copy(this.transform, transform);
    };
    return ViewPort;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ViewPort);


/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__assign": () => (/* binding */ __assign),
/* harmony export */   "__asyncDelegator": () => (/* binding */ __asyncDelegator),
/* harmony export */   "__asyncGenerator": () => (/* binding */ __asyncGenerator),
/* harmony export */   "__asyncValues": () => (/* binding */ __asyncValues),
/* harmony export */   "__await": () => (/* binding */ __await),
/* harmony export */   "__awaiter": () => (/* binding */ __awaiter),
/* harmony export */   "__classPrivateFieldGet": () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   "__classPrivateFieldSet": () => (/* binding */ __classPrivateFieldSet),
/* harmony export */   "__createBinding": () => (/* binding */ __createBinding),
/* harmony export */   "__decorate": () => (/* binding */ __decorate),
/* harmony export */   "__exportStar": () => (/* binding */ __exportStar),
/* harmony export */   "__extends": () => (/* binding */ __extends),
/* harmony export */   "__generator": () => (/* binding */ __generator),
/* harmony export */   "__importDefault": () => (/* binding */ __importDefault),
/* harmony export */   "__importStar": () => (/* binding */ __importStar),
/* harmony export */   "__makeTemplateObject": () => (/* binding */ __makeTemplateObject),
/* harmony export */   "__metadata": () => (/* binding */ __metadata),
/* harmony export */   "__param": () => (/* binding */ __param),
/* harmony export */   "__read": () => (/* binding */ __read),
/* harmony export */   "__rest": () => (/* binding */ __rest),
/* harmony export */   "__spread": () => (/* binding */ __spread),
/* harmony export */   "__spreadArray": () => (/* binding */ __spreadArray),
/* harmony export */   "__spreadArrays": () => (/* binding */ __spreadArrays),
/* harmony export */   "__values": () => (/* binding */ __values)
/* harmony export */ });
/*! *****************************************************************************
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
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}


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
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base */ "./src/Base.ts");
/* harmony import */ var _View_Viewport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./View/Viewport */ "./src/View/Viewport.ts");
/* harmony import */ var _View_Canvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./View/Canvas */ "./src/View/Canvas.ts");
/* harmony import */ var _Utils_Controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Utils/Controller */ "./src/Utils/Controller.ts");





var MiniGL = /** @class */ (function (_super) {
    __extends_1(MiniGL, _super);
    /**
     *
     * @param {any} config
     * @param {HTMLDivElement} config.container
     */
    function MiniGL(config) {
        var _this = _super.call(this) || this;
        _this.autoUpdate = false;
        _this.container = config.container;
        _this.config = Object.assign({
            contextOption: {
                alpha: true,
                antialias: true,
                antialiasSamples: 16,
                stencil: true,
                powerPreference: "high-performance",
                preserveDrawingBuffer: true,
            },
            pointConfig: {},
        }, config);
        return _this;
    }
    MiniGL.prototype.init = function () {
        var _a = this.config.contextOption, contextOption = _a === void 0 ? {} : _a;
        this.canvasDOM = document.createElement("canvas");
        this.container.appendChild(this.canvasDOM);
        this.gl = this.canvasDOM.getContext("webgl2", contextOption);
        if (this.gl == null) {
            return console.error("你的浏览器不支持webgl2,请更新使用chrome浏览器");
        }
        this.viewport = new _View_Viewport__WEBPACK_IMPORTED_MODULE_1__["default"]((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({ miniGL: this }, this.config));
        this.viewport.resize();
        this.canvas = new _View_Canvas__WEBPACK_IMPORTED_MODULE_2__["default"]((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({ miniGL: this }, this.config));
        this.controller = new _Utils_Controller__WEBPACK_IMPORTED_MODULE_3__["default"]((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({ miniGL: this }, this.config));
        this.canvas.update();
    };
    return MiniGL;
}(_Base__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MiniGL);

})();

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=mini-gl.js.map