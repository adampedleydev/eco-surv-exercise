import React, { useState } from 'react';
import BreedSelect from './components/BreedSelect';
import SubBreedSelect from './components/SubBreedSelect';
import NumberSelect from './components/NumberSelect';
import ImagesView from './components/ImagesView';

const App: React.FC = () => {
    const [selectedBreed, setSelectedBreed] = useState<string>('');
    const [selectedSubBreed, setSelectedSubBreed] = useState<string>('');
    const [selectedNumber, setSelectedNumber] = useState<number>(1);
    const [showImages, setShowImages] = useState<boolean>(false);
    const [buttonPressed, setButtonPressed] = useState<boolean>(false);

    const handleBreedSelect = (breed: string) => {
        setSelectedBreed(breed);
        setSelectedSubBreed('');
    };

    const handleSubBreedSelect = (subBreed: string) => {
        setSelectedSubBreed(subBreed);
    };

    const handleNumberSelect = (number: number) => {
        setSelectedNumber(number);
    };

    const handleViewImagesClick = () => {
        if (selectedBreed) {
            setShowImages(true);
            setButtonPressed(true);
        }
    };

    return (
        <div className="container m-5">
            <div className="flex flex-wrap justify-center items-center mb-4">
                <div className="mr-4">
                    <BreedSelect onBreedSelect={handleBreedSelect} breedList={[]} isButtonPressed={buttonPressed} />
                </div>
                {selectedBreed && (
                    <div className="mr-4">
                        <SubBreedSelect
                            breed={selectedBreed}
                            onSubBreedSelect={handleSubBreedSelect}
                        />
                    </div>
                )}
                <div className="mr-4">
                    <NumberSelect onNumberSelect={handleNumberSelect} />
                </div>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-6 rounded"
                    onClick={handleViewImagesClick}
                >
                    View Images
                </button>
            </div>
            {showImages && (
                <div>
                    <ImagesView
                        breed={selectedBreed}
                        subBreed={selectedSubBreed}
                        imagesCount={selectedNumber}
                    />
                </div>
            )}
        </div>
    );
};

export default App;
