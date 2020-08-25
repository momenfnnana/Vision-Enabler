"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Constant = _interopRequireDefault(require("@Assets/Constant"));

var _reactNative = require("react-native");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var styles = _reactNative.StyleSheet.create({
  opinion: {
    fontSize: 22,
    color: _Constant["default"].white,
    fontFamily: "Altissimo_bold",
    textAlign: "center",
    marginTop: "7%"
  },
  opinionDescription: {
    color: _Constant["default"].white,
    width: "80%",
    textAlign: "center",
    alignSelf: "center",
    fontFamily: "DINNextLTProRegular",
    marginTop: "7%",
    lineHeight: 20,
    fontSize: 14
  },
  downloadButton: {
    backgroundColor: _Constant["default"].secondary,
    paddingVertical: "3%",
    paddingHorizontal: "5%",
    alignSelf: 'center',
    borderRadius: 50,
    marginVertical: "10%"
  },
  downloadButtonText: {
    color: _Constant["default"].white,
    fontFamily: "DINNextLTProRegular",
    fontSize: 16
  },
  WantInterView: {
    color: _Constant["default"].primary,
    fontSize: 20,
    fontFamily: "Altissimo_bold",
    marginTop: "10%",
    marginLeft: "7%",
    marginBottom: "3%",
    textTransform: "uppercase"
  },
  Input: {
    marginHorizontal: "8%",
    borderColor: _Constant["default"].secondary,
    borderWidth: 2,
    marginVertical: "2%",
    padding: "3%",
    borderRadius: 5
  },
  PickerContainerStyle: {
    height: 60,
    width: "85%",
    alignSelf: "center"
  },
  PickerStyle: {
    backgroundColor: _Constant["default"].white,
    borderColor: _Constant["default"].secondary,
    borderWidth: 2
  },
  PickerItemStyle: {
    justifyContent: 'flex-start'
  },
  dropDownStyle: {
    backgroundColor: '#fafafa'
  },
  textAreaContainer: {
    borderColor: _Constant["default"].secondary,
    borderWidth: 1,
    padding: 5,
    width: "85%",
    alignSelf: "center",
    borderRadius: 5,
    marginTop: "2%"
  },
  textArea: {
    height: 150,
    justifyContent: "flex-start"
  },
  button: {
    borderRadius: 50,
    backgroundColor: "".concat(_Constant["default"].primary),
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 12,
    marginVertical: 22,
    marginBottom: "10%",
    width: "85%",
    alignSelf: "center"
  },
  SignupText: {
    color: "".concat(_Constant["default"].white),
    fontSize: 16
  },
  privacyPolicy: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    paddingLeft: "2%",
    marginBottom: "10%",
    marginTop: "-5%",
    width: "90%",
    alignSelf: "center"
  }
});

var _default = styles;
exports["default"] = _default;