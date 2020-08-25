"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Constant = _interopRequireDefault(require("@Assets/Constant"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var styles = {
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: _Constant["default"].white
  },
  headSection: {
    flex: 1,
    marginLeft: "10%",
    marginTop: "5%",
    marginRight: "10%"
  },
  title1: {
    color: "".concat(_Constant["default"].secondary),
    fontSize: 16,
    fontFamily: "Altissimo_bold",
    alignSelf: "flex-start"
  },
  title2: {
    color: "".concat(_Constant["default"].primary),
    fontSize: 30,
    fontFamily: "Altissimo",
    fontWeight: "bold",
    alignSelf: "flex-start"
  },
  button: {
    borderRadius: 50,
    backgroundColor: _Constant["default"].primary,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 12,
    marginVertical: 22
  },
  SignupText: {
    color: _Constant["default"].white,
    fontSize: 16
  },
  imgFooter: {
    resizeMode: "contain",
    position: "absolute",
    top: 230,
    right: -60
  }
};
var _default = styles;
exports["default"] = _default;