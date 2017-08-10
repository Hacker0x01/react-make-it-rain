(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("prop-types"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["prop-types", "react"], factory);
	else if(typeof exports === 'object')
		exports["react-make-it-rain"] = factory(require("prop-types"), require("react"));
	else
		root["react-make-it-rain"] = factory(root["prop-types"], root["react"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__) {
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var sample = function sample(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

var paintDrop = function paintDrop(context, _ref) {
  var font = _ref.font,
      opacity = _ref.opacity,
      x = _ref.x,
      y = _ref.y,
      string = _ref.string;

  context.font = font;
  context.globalAlpha = opacity;
  context.fillText(string, x, y);
};

var newRandomDrop = function newRandomDrop(drops, fontStyles, width, height) {
  return {
    string: sample(drops),
    font: sample(fontStyles),
    x: Math.floor(Math.random() * width + 1),
    y: Math.floor(Math.random() * height + 1),
    verticalSpeed: Math.floor(Math.random() * 5 + 3),
    horizontalSpeed: Math.floor(Math.random() * 1 + 1),
    horizontalDirection: Math.random() > 0.5 ? "right" : "left",
    opacity: 1,
    opacitySpeed: 0.02 * (Math.random() * 1 + 1)
  };
};

var moveDrop = function moveDrop(drop) {
  return _extends({}, drop, {
    x: drop.horizontalDirection === "left" ? drop.x + drop.horizontalSpeed : drop.x - drop.horizontalSpeed,
    y: drop.y + drop.verticalSpeed,
    opacity: drop.opacity - drop.opacitySpeed
  });
};

var MakeItRain = function (_Component) {
  _inherits(MakeItRain, _Component);

  function MakeItRain() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, MakeItRain);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = MakeItRain.__proto__ || Object.getPrototypeOf(MakeItRain)).call.apply(_ref2, [this].concat(args))), _this), _this.state = {
      dropsForDrawing: new Array(_this.props.dropCount).fill(undefined)
    }, _this.componentDidMount = function () {
      window.addEventListener("resize", _this.__resizeCanvas);
      _this.__resizeCanvas();
      _this.__tick();
    }, _this.componentWillUnmount = function () {
      window.cancelAnimationFrame(_this.animationFrame);
      window.removeEventListener("resize", _this.__resizeCanvas);
    }, _this.shouldComponentUpdate = function () {
      return false;
    }, _this.componentWillReceiveProps = function (_ref3) {
      var nextDropCount = _ref3.dropCount;
      var dropCount = _this.props.dropCount;


      if (nextDropCount !== dropCount) {
        var dropsForDrawing = [].concat(_toConsumableArray(_this.state.dropsForDrawing));

        if (nextDropCount > dropCount) {
          while (dropCount > dropsForDrawing.length) {
            dropsForDrawing.push(undefined);
          }
        } else if (nextDropCount < dropCount) {
          while (dropCount < dropsForDrawing.length) {
            dropsForDrawing.pop();
          }
        }

        _this.setState({ dropsForDrawing: dropsForDrawing });
      }
    }, _this.__resizeCanvas = function () {
      var canvas = _this.refs.canvas;


      canvas.width = canvas.parentNode.clientWidth;
      canvas.height = canvas.parentNode.clientHeight;
    }, _this.__tick = function () {
      var context = _this.refs.canvas.getContext("2d");
      context.clearRect(0, 0, _this.refs.canvas.width, _this.refs.canvas.height);

      _this.setState({
        dropsForDrawing: _this.state.dropsForDrawing.map(_this.__stepDrop)
      }, function () {
        _this.state.dropsForDrawing.forEach(paintDrop.bind(null, context));
        _this.animationFrame = window.requestAnimationFrame(_this.__tick);
      });
    }, _this.__stepDrop = function (dropForDrawing) {
      var _this$props = _this.props,
          drops = _this$props.drops,
          fontStyles = _this$props.fontStyles;
      var _this$refs$canvas = _this.refs.canvas,
          height = _this$refs$canvas.height,
          width = _this$refs$canvas.width;


      if (dropForDrawing === undefined || dropForDrawing.y >= height || dropForDrawing.x >= width || dropForDrawing.opacity < 0.1) {
        return newRandomDrop(drops, fontStyles, width, height);
      } else {
        return moveDrop(dropForDrawing);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MakeItRain, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement("canvas", { ref: "canvas" });
    }
  }]);

  return MakeItRain;
}(_react.Component);

MakeItRain.defaultProps = {
  drops: ["💵", "💰", "👑", "🏆"],
  dropCount: 250,
  fontStyles: ["20px serif", "30px serif"]
};


MakeItRain.propTypes = {
  dropCount: _propTypes2.default.number,
  drops: _propTypes2.default.arrayOf(_propTypes2.default.string),
  fontStyles: _propTypes2.default.arrayOf(_propTypes2.default.string)
};

exports.default = MakeItRain;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ })
/******/ ]);
});