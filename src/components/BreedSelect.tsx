import React, { useState, useEffect } from 'react';

interface BreedSelectProps {
    onBreedSelect: (breed: string) => void;
    breedList: string[];
}

interface Breed {
    name: string;
    subBreeds: string[];
}

const BreedSelect: React.FC<BreedSelectProps> = ({ onBreedSelect }) => {
    const [breeds, setBreeds] = useState<Breed[]>([]);
    const [selectedBreed, setSelectedBreed] = useState<string>('');
    const [selectedSubBreed, setSelectedSubBreed] = useState<string>('');

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/list/all')
            .then((res) => res.json())
            .then((data) => {
                const breeds: Breed[] = Object.keys(data.message).map((breed) => ({
                    name: breed,
                    subBreeds: data.message[breed],
                }));
                setBreeds(breeds);
            });
    }, []);

    const handleBreedChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedBreed(event.target.value);
        setSelectedSubBreed('');
        onBreedSelect(event.target.value);
    };

    const handleSubBreedChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedSubBreed(event.target.value);
        onBreedSelect(selectedBreed);
    };

    return (
        <div className="flex flex-row justify-between">
            <span className={"text-xl"}>
                test
            </span>
            <div className="mr-2">
                <label htmlFor="breed-select" className="block font-medium text-gray-700 mb-2 text-xl">
                    Select a breed:
                </label>
                <select
                    id="breed-select"
                    value={selectedBreed}
                    onChange={handleBreedChange}
                    className="w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                >
                    <option value="">Select a breed</option>
                    {breeds.map((breed) => (
                        <option key={breed.name} value={breed.name}>
                            {breed.name}
                        </option>
                    ))}
                </select>
            </div>
            {selectedBreed && (
                <div className="ml-2">
                    <label htmlFor="sub-breed-select" className="block font-medium text-gray-700 mb-2">
                        Select a sub-breed:
                    </label>
                    <select
                        id="sub-breed-select"
                        value={selectedSubBreed}
                        onChange={handleSubBreedChange}
                        className="w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    >
                        <option value="">Select a sub-breed</option>
                        {breeds
                            .find((breed) => breed.name === selectedBreed)
                            ?.subBreeds.map((subBreed) => (
                                <option key={subBreed} value={subBreed}>
                                    {subBreed}
                                </option>
                            ))}
                    </select>
                </div>
            )}
        </div>
    );
};

export default BreedSelect;
