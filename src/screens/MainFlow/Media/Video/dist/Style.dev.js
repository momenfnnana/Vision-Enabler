"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Constant = _interopRequireDefault(require("@Assets/Constant"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var styles = {
  container: {
    backgroundColor: _Constant["default"].white,
    alignItems: 'center'
  },
  img: {
    borderRadius: 10,
    marginHorizontal: "2%",
    marginVertical: "4%",
    width: 165,
    height: 110,
    resizeMode: "contain"
  },
  video: {
    height: 40,
    width: 40,
    borderRadius: 10,
    backgroundColor: "".concat(_Constant["default"].primary, "95"),
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: "15%",
    left: "10%"
  },
  FlatList: {
    alignSelf: "center",
    marginTop: "5%"
  }
};
var _default = styles;
exports["default"] = _default;