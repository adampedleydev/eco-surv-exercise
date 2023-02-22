import React, { useState } from 'react';
import BreedSelect from './components/BreedSelect';
import SubBreedSelect from './components/SubBreedSelect';
import NumberSelect from './components/NumberSelect';
import ImagesView from './components/ImagesView';

const App: React.FC = () => {
    const [selectedBreed, setSelectedBreed] = useState<string>('');
    const [selectedSubBreed, setSelectedSubBreed] = useState<string>('');
    const [selectedNumber, setSelectedNumber] = useState<number>(1);

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

    return (
        <div className="container">
            <div className="row my-3">
                <div className="col-md-4">
                    <BreedSelect onBreedSelect={handleBreedSelect} breedList={[]} />
                </div>
                {selectedBreed && (
                    <div className="col-md-4">
                        <SubBreedSelect
                            breed={selectedBreed}
                            onSubBreedSelect={handleSubBreedSelect}
                        />
                    </div>
                )}
                <div className="col-md-4">
                    <NumberSelect onNumberSelect={handleNumberSelect} />
                </div>
            </div>
            {selectedBreed && (
                <div className="row my-3">
                    <div className="col-md-12">
                        <ImagesView
                            breed={selectedBreed}
                            subBreed={selectedSubBreed}
                            imagesCount={selectedNumber}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default App;
