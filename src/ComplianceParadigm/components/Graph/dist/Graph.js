"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var wWidth = react_native_1.Dimensions.get("window").width;
var aspectRatio = 195 / 305;
var lerp = function (v0, v1, t) { return (1 - t) * v0 + t * v1; };
var Constant_1 = require("@Assets/Constant");
var Graph = function (_a) {
    var data = _a.data;
    var canvasWidth = wWidth - 20;
    var canvasHeight = canvasWidth * aspectRatio;
    var width = canvasWidth - 20;
    var height = canvasHeight - 20;
    var step = width / data.length;
    var values = data.map(function (p) { return p.value; });
    var dates = data.map(function (p) { return p.date; });
    var minX = Math.min.apply(Math, dates);
    var maxX = Math.max.apply(Math, dates);
    var minY = Math.min.apply(Math, values);
    var maxY = Math.max.apply(Math, values);
    return (react_1["default"].createElement(react_native_1.View, { style: { paddingLeft: "5%", paddingBottom: "5%", backgroundColor: "#000" } },
        react_1["default"].createElement(react_native_1.View, { style: { width: width, height: height, backgroundColor: Constant_1["default"].primary, alignSelf: "center" } }, data.map(function (point, i) {
            if (point.value === 0) {
                return null;
            }
            return (react_1["default"].createElement(react_native_1.View, { key: point.id, style: {
                    position: "absolute",
                    left: i * step,
                    bottom: 0,
                    width: step,
                    height: lerp(0, height, point.value / maxY)
                } },
                react_1["default"].createElement(react_native_1.View, { style: {
                        position: "absolute",
                        top: 0,
                        bottom: 0,
                        left: 35,
                        right: 35,
                        backgroundColor: point.color,
                        borderRadius: 10
                    } })));
        }))));
};
exports["default"] = Graph;
