"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var BreedSelect_1 = require("./components/BreedSelect");
var SubBreedSelect_1 = require("./components/SubBreedSelect");
var NumberSelect_1 = require("./components/NumberSelect");
var ImagesView_1 = require("./components/ImagesView");
var react_toastify_1 = require("react-toastify");
var react_toastify_2 = require("react-toastify");
require("react-toastify/dist/ReactToastify.css");
var App = function () {
    var _a = (0, react_1.useState)(''), selectedBreed = _a[0], setSelectedBreed = _a[1];
    var _b = (0, react_1.useState)(''), selectedSubBreed = _b[0], setSelectedSubBreed = _b[1];
    var _c = (0, react_1.useState)(1), selectedNumber = _c[0], setSelectedNumber = _c[1];
    var _d = (0, react_1.useState)(false), showImages = _d[0], setShowImages = _d[1];
    var _e = (0, react_1.useState)(false), buttonPressed = _e[0], setButtonPressed = _e[1];
    var handleBreedSelect = function (breed) {
        setSelectedBreed(breed);
        setSelectedSubBreed('');
    };
    var handleSubBreedSelect = function (subBreed) {
        setSelectedSubBreed(subBreed);
    };
    var handleNumberSelect = function (number) {
        setSelectedNumber(number);
    };
    var handleViewImagesClick = function () {
        if (selectedBreed) {
            setShowImages(true);
            setButtonPressed(true);
        }
        else {
            react_toastify_1.toast.error('Please select a breed before viewing images');
        }
    };
    return (react_1.default.createElement("div", { className: "container m-5" },
        react_1.default.createElement(react_toastify_2.ToastContainer, null),
        react_1.default.createElement("div", { className: "flex flex-wrap items-center mb-4" },
            react_1.default.createElement("div", { className: "mr-4" },
                react_1.default.createElement(BreedSelect_1.default, { onBreedSelect: handleBreedSelect, breedList: [], isButtonPressed: buttonPressed })),
            selectedBreed && (react_1.default.createElement("div", { className: "mr-4" },
                react_1.default.createElement(SubBreedSelect_1.default, { breed: selectedBreed, onSubBreedSelect: handleSubBreedSelect }))),
            react_1.default.createElement("div", { className: "mr-4" },
                react_1.default.createElement(NumberSelect_1.default, { onNumberSelect: handleNumberSelect })),
            react_1.default.createElement("button", { className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-6 rounded", onClick: handleViewImagesClick }, "View Images")),
        showImages && (react_1.default.createElement("div", null,
            react_1.default.createElement(ImagesView_1.default, { breed: selectedBreed, subBreed: selectedSubBreed, imagesCount: selectedNumber })))));
};
exports.default = App;
//# sourceMappingURL=App.js.map