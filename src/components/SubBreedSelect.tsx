import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface SubBreedSelectProps {
    breed: string;
    onSubBreedSelect: (subBreed: string) => void;
}

const SubBreedSelect: React.FC<SubBreedSelectProps> = ({
                                                           breed,
                                                           onSubBreedSelect,
                                                       }) => {
    const [subBreeds, setSubBreeds] = useState<string[]>([]);
    const [selectedSubBreed, setSelectedSubBreed] = useState<string>('');

    useEffect(() => {
        const fetchSubBreeds = async () => {
            const response = await axios.get(
                `https://dog.ceo/api/breed/${breed}/list`
            );
            const subBreedsArray = response.data.message;
            setSubBreeds(subBreedsArray);
        };

        if (breed) {
            fetchSubBreeds();
        }
    }, [breed]);

    const handleSubBreedSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const subBreed = event.target.value;
        setSelectedSubBreed(subBreed);
        onSubBreedSelect(subBreed);
    };

    if (!subBreeds.length) {
        return null;
    }

    return (
        <div>
            <label htmlFor="subBreedSelect" className="form-label">
                Sub-breed:
            </label>
            <select
                id="subBreedSelect"
                className="form-select"
                value={selectedSubBreed}
                onChange={handleSubBreedSelect}
            >
                <option value="">-- Select a sub-breed --</option>
                {subBreeds.map((subBreed) => (
                    <option key={subBreed} value={subBreed}>
                        {subBreed}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SubBreedSelect;
