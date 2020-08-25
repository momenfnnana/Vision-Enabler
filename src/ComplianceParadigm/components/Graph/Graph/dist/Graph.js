"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var wWidth = react_native_1.Dimensions.get("window").width;
var aspectRatio = 320 / 340;
var Constant_1 = require("@Assets/Constant");
var Underlay_1 = require("./Underlay");
var Scale_1 = require("./Scale");
var lines = [
    {
        id: 1,
        value: 10,
        img: require("@Assets/images/100%.png")
    },
    {
        id: 2,
        value: 7.5,
        img: require("@Assets/images/75%.png")
    },
    {
        id: 3,
        value: 5,
        img: require("@Assets/images/50%.png")
    },
    {
        id: 4,
        value: 2.5,
        img: require("@Assets/images/25%.png")
    },
    {
        id: 5,
        value: 0,
        img: require("@Assets/images/0%.png")
    },
];
var Graph = function (_a) {
    var data = _a.data;
    var canvasWidth = wWidth - 20;
    var canvasHeight = canvasWidth * aspectRatio;
    var width = canvasWidth - 20;
    var height = canvasHeight - 10;
    var step = width / data.length - 10;
    var values = data.map(function (p) { return p.value; });
    var dates = data.map(function (p) { return p.date; });
    var minX = Math.min.apply(Math, dates);
    var maxX = Math.max.apply(Math, dates);
    var minY = Math.min.apply(Math, values);
    var maxY = Math.max.apply(Math, values);
    return (react_1["default"].createElement(react_native_1.View, { style: { flex: 1 } },
        react_1["default"].createElement(react_native_1.ScrollView, { style: { flex: 1, paddingBottom: 20, backgroundColor: Constant_1["default"].primary } },
            react_1["default"].createElement(react_native_1.View, { style: {
                    flexDirection: "row",
                    width: width,
                    height: height,
                    backgroundColor: Constant_1["default"].primary,
                    alignSelf: "center",
                    marginLeft: 0
                } },
                react_1["default"].createElement(react_native_1.View, null, data.map(function (point, i) {
                    if (point.value === 0) {
                        return null;
                    }
                    return (react_1["default"].createElement(react_native_1.View, { key: i, style: {
                            position: "absolute",
                            left: i * step + 30,
                            bottom: 0,
                            width: step,
                            height: Scale_1.lerp(0, height / 1.2, point.value / maxY)
                        } },
                        react_1["default"].createElement(react_native_1.View, { style: { flex: 1, marginRight: 0 } },
                            react_1["default"].createElement(react_native_1.View, { style: {
                                    position: "absolute",
                                    top: -65,
                                    bottom: 65,
                                    left: 55,
                                    right: 0,
                                    backgroundColor: point.color,
                                    borderRadius: 10
                                } }))));
                })),
                react_1["default"].createElement(Underlay_1["default"], { minY: minY, maxY: maxY, data: lines, date: data, step: step })))));
};
exports["default"] = Graph;
