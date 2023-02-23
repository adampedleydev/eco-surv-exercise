"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var NumberSelect = function (_a) {
    var onNumberSelect = _a.onNumberSelect;
    var _b = (0, react_1.useState)(1), selectedNumber = _b[0], setSelectedNumber = _b[1];
    var handleNumberSelect = function (event) {
        var number = parseInt(event.target.value);
        setSelectedNumber(number);
        onNumberSelect(number);
    };
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("label", { htmlFor: "numberSelect", className: "font-medium text-gray-700 text-xl" }, "Number of images:"),
        react_1.default.createElement("select", { id: "numberSelect", className: "w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500", value: selectedNumber, onChange: handleNumberSelect },
            react_1.default.createElement("option", { value: "1" }, "1"),
            react_1.default.createElement("option", { value: "3" }, "3"),
            react_1.default.createElement("option", { value: "5" }, "5"),
            react_1.default.createElement("option", { value: "10" }, "10"))));
};
exports.default = NumberSelect;
//# sourceMappingURL=NumberSelect.js.map