import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import BreedSelect from '../components/BreedSelect';

describe('BreedSelect', () => {
    const onBreedSelect = jest.fn();
    const breedList = ['affenpinscher', 'bulldog', 'collie'];

    it('renders a select field', () => {
        const { getByLabelText } = render(
            <BreedSelect
                onBreedSelect={onBreedSelect}
                breedList={breedList}
                isButtonPressed={false}
            />
        );
        const selectField = getByLabelText('Select a breed');
        expect(selectField).toBeInTheDocument();
    });

    it('calls the onBreedSelect callback when a breed is selected', () => {
        const { getByLabelText } = render(
            <BreedSelect
                onBreedSelect={onBreedSelect}
                breedList={breedList}
                isButtonPressed={false}
            />
        );
        const selectField = getByLabelText('Select a breed');
        fireEvent.change(selectField, { target: { value: 'bulldog' } });
        expect(onBreedSelect).toHaveBeenCalledWith('bulldog');
    });

    it('displays an error message when isButtonPressed is true and no breed is selected', () => {
        const { getByRole, getByText } = render(
            <BreedSelect
                onBreedSelect={onBreedSelect}
                breedList={breedList}
                isButtonPressed={true}
            />
        );
        const selectField = screen.getByLabelText('Select a breed');
        fireEvent.change(selectField, { target: { value: '' } });
        const viewImagesButton = getByRole('button', { name: 'View Images' });
        fireEvent.click(viewImagesButton);
        const errorMessage = getByText('Please select a breed before viewing images');
        expect(errorMessage).toBeInTheDocument();
    });
});
