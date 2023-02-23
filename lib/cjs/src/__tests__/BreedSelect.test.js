"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_2 = require("@testing-library/react");
require("@testing-library/jest-dom");
require("@testing-library/jest-dom/extend-expect");
var BreedSelect_1 = require("../components/BreedSelect");
describe('BreedSelect', function () {
    var onBreedSelect = jest.fn();
    var breedList = ['affenpinscher', 'bulldog', 'collie'];
    it('renders a select field', function () {
        var getByLabelText = (0, react_2.render)(react_1.default.createElement(BreedSelect_1.default, { onBreedSelect: onBreedSelect, breedList: breedList, isButtonPressed: false })).getByLabelText;
        var selectField = getByLabelText('Select a breed');
        expect(selectField).toBeInTheDocument();
    });
    it('calls the onBreedSelect callback when a breed is selected', function () {
        var getByLabelText = (0, react_2.render)(react_1.default.createElement(BreedSelect_1.default, { onBreedSelect: onBreedSelect, breedList: breedList, isButtonPressed: false })).getByLabelText;
        var selectField = getByLabelText('Select a breed');
        react_2.fireEvent.change(selectField, { target: { value: 'bulldog' } });
        expect(onBreedSelect).toHaveBeenCalledWith('bulldog');
    });
    it('displays an error message when isButtonPressed is true and no breed is selected', function () {
        var _a = (0, react_2.render)(react_1.default.createElement(BreedSelect_1.default, { onBreedSelect: onBreedSelect, breedList: breedList, isButtonPressed: true })), getByRole = _a.getByRole, getByText = _a.getByText;
        var selectField = react_2.screen.getByLabelText('Select a breed');
        react_2.fireEvent.change(selectField, { target: { value: '' } });
        var viewImagesButton = getByRole('button', { name: 'View Images' });
        react_2.fireEvent.click(viewImagesButton);
        var errorMessage = getByText('Please select a breed before viewing images');
        expect(errorMessage).toBeInTheDocument();
    });
});
//# sourceMappingURL=BreedSelect.test.js.map