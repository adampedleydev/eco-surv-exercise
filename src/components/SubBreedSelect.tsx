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

    const capitalizeFirstLetter = (str: string) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    return (
        <div>
            <label htmlFor="subBreedSelect" className="font-medium text-gray-700 mb-2 text-xl">
                Sub-breed:
            </label>
            <select
                id="subBreedSelect"
                className="w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                value={selectedSubBreed}
                onChange={handleSubBreedSelect}
            >
                <option value="">* Select a sub-breed *</option>
                {subBreeds.map((subBreed) => (
                    <option key={subBreed} value={subBreed}>
                        {capitalizeFirstLetter(subBreed)}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SubBreedSelect;
