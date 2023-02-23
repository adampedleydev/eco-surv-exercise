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
    const [error, setError] = useState<string>('');

    useEffect(() => {
        const fetchSubBreeds = async () => {
            try {
                const response = await axios.get(
                    `https://dog.ceo/api/breed/${breed}/list`
                );
                const subBreedsArray = response.data.message.map((subBreed: string) => {
                    return subBreed.charAt(0).toUpperCase() + subBreed.slice(1);
                });
                setSubBreeds(subBreedsArray);
                setError('');
            } catch (error) {
                setError('Error fetching sub-breeds. Please try again later.');
            }
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
            <label htmlFor="subBreedSelect" className="font-medium text-gray-700 mb-2 text-xl">
                Sub-breed:
            </label>
            <select
                id="subBreedSelect"
                className={`w-full py-2 px-3 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 ${error ? 'border-red-500' : 'border-gray-300'}`}
                value={selectedSubBreed}
                onChange={handleSubBreedSelect}
            >
                <option value="">* Select a sub-breed *</option>
                {subBreeds.map((subBreed) => (
                    <option key={subBreed} value={subBreed}>
                        {subBreed}
                    </option>
                ))}
            </select>
            {error && (
                <p className="text-red-500 text-sm mt-1">{error}</p>
            )}
        </div>
    );
};

export default SubBreedSelect;
