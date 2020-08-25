"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Constant = _interopRequireDefault(require("@Assets/Constant"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var styles = {
  listContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginVertical: "2%",
    width: "90%",
    backgroundColor: _Constant["default"].white,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 4,
    borderRadius: 10,
    alignSelf: "center"
  },
  DateContainer: {
    height: 70,
    width: 70,
    backgroundColor: _Constant["default"].secondary,
    margin: "2%",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 5
  },
  date: {
    color: _Constant["default"].white
  },
  description: {
    fontSize: 16,
    color: _Constant["default"].primary,
    width: "70%",
    fontFamily: "DINNextLTProRegular"
  }
};
var _default = styles;
exports["default"] = _default;