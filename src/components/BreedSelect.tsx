import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface BreedSelectProps {
    onBreedSelect: (breed: string) => void;
    breedList: string[];
    isButtonPressed: boolean;
}

const BreedSelect: React.FC<BreedSelectProps> = ({
                                                     onBreedSelect,
                                                     breedList,
                                                     isButtonPressed
                                                 }) => {
    const [breeds, setBreeds] = useState<string[]>([]);
    const [selectedBreed, setSelectedBreed] = useState<string>('');

    useEffect(() => {
        const fetchBreeds = async () => {
            const response = await axios.get('https://dog.ceo/api/breeds/list/all');
            const breedsObject = response.data.message;
            const breedsArray = Object.keys(breedsObject);
            setBreeds(breedsArray);
        };

        fetchBreeds();
    }, []);

    const handleBreedSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const breed = event.target.value;
        setSelectedBreed(breed);
        onBreedSelect(breed);
    };

    const capitalizeFirstLetter = (str: string) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    return (
        <div>
            <label htmlFor="breedSelect" className="font-medium text-gray-700 mb-2 text-xl">
                Breed:
            </label>
            <select
                id="breedSelect"
                className={`w-full py-2 px-3 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 ${
                    isButtonPressed && !selectedBreed ? 'border-red-500' : 'border-gray-300'
                }`}
                value={selectedBreed}
                onChange={handleBreedSelect}
            >
                <option value="">* Select a breed *</option>
                {breeds.map((breed) => (
                    <option key={breed} value={breed}>
                        {capitalizeFirstLetter(breed)}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default BreedSelect;
