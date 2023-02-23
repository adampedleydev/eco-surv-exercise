"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var ImagesView = function (_a) {
    var breed = _a.breed, subBreed = _a.subBreed, imagesCount = _a.imagesCount;
    var _b = (0, react_1.useState)([]), imageUrls = _b[0], setImageUrls = _b[1];
    var breedString = subBreed ? "".concat(subBreed, " ").concat(breed) : breed;
    (0, react_1.useEffect)(function () {
        var apiUrl = "https://dog.ceo/api/breed/".concat(breed).concat(subBreed ? "/".concat(subBreed) : '', "/images/random/").concat(imagesCount);
        fetch(apiUrl)
            .then(function (response) { return response.json(); })
            .then(function (data) { return setImageUrls(data.message); });
    }, [breed, subBreed, imagesCount]);
    return (react_1.default.createElement("div", { className: "" },
        react_1.default.createElement("h2", null, breedString),
        react_1.default.createElement("div", { className: "flex flex-wrap" }, imageUrls.map(function (url, index) { return (react_1.default.createElement("img", { key: "".concat(breed, "-").concat(subBreed, "-").concat(index), src: url, className: "w-96 h-96 object-fill border-4 border-cyan-300", alt: "".concat(breedString, " image ").concat(index) })); }))));
};
exports.default = ImagesView;
//# sourceMappingURL=ImagesView.js.map