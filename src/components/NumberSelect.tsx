import React, { useState } from 'react';

interface NumberSelectProps {
    onNumberSelect: (number: number) => void;
}

const NumberSelect: React.FC<NumberSelectProps> = ({ onNumberSelect }) => {
    const [selectedNumber, setSelectedNumber] = useState<number>(1);

    const handleNumberSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const number = parseInt(event.target.value);
        setSelectedNumber(number);
        onNumberSelect(number);
    };

    return (
        <div>
            <label htmlFor="numberSelect" className="form-label">
                Number of images:
            </label>
            <select
                id="numberSelect"
                className="form-select"
                value={selectedNumber}
                onChange={handleNumberSelect}
            >
                <option value="1">1</option>
                <option value="3">3</option>
                <option value="5">5</option>
                <option value="10">10</option>
            </select>
        </div>
    );
};

export default NumberSelect;
