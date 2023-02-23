import React from 'react';
interface SubBreedSelectProps {
    breed: string;
    onSubBreedSelect: (subBreed: string) => void;
}
declare const SubBreedSelect: React.FC<SubBreedSelectProps>;
export default SubBreedSelect;
