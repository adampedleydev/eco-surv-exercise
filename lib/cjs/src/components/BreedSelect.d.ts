import React from 'react';
interface BreedSelectProps {
    onBreedSelect: (breed: string) => void;
    breedList: string[];
    isButtonPressed: boolean;
}
declare const BreedSelect: React.FC<BreedSelectProps>;
export default BreedSelect;
