"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
function DogImages(_a) {
    var breed = _a.breed, subBreed = _a.subBreed, number = _a.number;
    var _b = (0, react_1.useState)([]), dogImages = _b[0], setDogImages = _b[1];
    (0, react_1.useEffect)(function () {
        var apiUrl = "https://dog.ceo/api/breed/".concat(breed);
        if (subBreed) {
            apiUrl += "/".concat(subBreed);
        }
        apiUrl += "/images/random/".concat(number);
        // Make API call to fetch dog images
        fetch(apiUrl)
            .then(function (response) { return response.json(); })
            .then(function (data) { return setDogImages(data.message); });
    }, [breed, subBreed, number]);
    var capitalizedBreed = capitalize(breed);
    return (react_1.default.createElement("div", null, dogImages.map(function (imageUrl) { return (react_1.default.createElement("img", { key: imageUrl, src: imageUrl, alt: "".concat(capitalizedBreed, " ").concat(subBreed || '') })); })));
}
exports.default = DogImages;
//# sourceMappingURL=DogImages.js.map