"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var Constant_1 = require("@Assets/Constant");
var StatementAvarage_1 = require("@ParadigmFakeData/StatementAvarage");
var Underlay = function (_a) {
    var date = _a.date, data = _a.data, minY = _a.minY, maxY = _a.maxY, step = _a.step;
    return (react_1["default"].createElement(react_native_1.View, { style: (react_native_1.StyleSheet.absoluteFill, { flex: 1, marginLeft: 0 }) },
        react_1["default"].createElement(react_native_1.View, { style: { flex: 1, justifyContent: "space-between", marginLeft: 0 } }, StatementAvarage_1["default"].map(function (t, i) {
            return (react_1["default"].createElement(react_native_1.View, { key: t.img, style: { flexDirection: "row", alignItems: "center" } },
                react_1["default"].createElement(react_native_1.View, { style: {
                        marginRight: 30,
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center"
                    } },
                    react_1["default"].createElement(react_native_1.View, { style: {
                            backgroundColor: Constant_1["default"].secondary,
                            padding: 10,
                            borderRadius: 20,
                            justifyContent: "center",
                            height: 60,
                            width: 60,
                            alignItems: "center"
                        } },
                        react_1["default"].createElement(react_native_1.Image, { source: t.img, style: {
                                height: 45,
                                width: 45,
                                resizeMode: "contain"
                            } })),
                    react_1["default"].createElement(react_native_1.Text, { style: { color: Constant_1["default"].white, marginLeft: 10 } }, t.percentage)),
                react_1["default"].createElement(react_native_1.View, { style: { flex: 1, height: 1, backgroundColor: Constant_1["default"].secondary + 50 } })));
        })),
        react_1["default"].createElement(react_native_1.View, { style: { flexDirection: "row", marginLeft: 20 } }, date.map(function (data, index) { return (react_1["default"].createElement(react_native_1.View, { style: { width: step } },
            react_1["default"].createElement(react_native_1.Text, { key: index, style: { color: Constant_1["default"].white, textAlign: "center" } }, data.title))); }))));
};
exports["default"] = Underlay;
