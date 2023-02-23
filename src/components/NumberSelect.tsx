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
            <label htmlFor="numberSelect" className="font-medium text-gray-700 text-xl">
                Number of images:
            </label>
            <select
                id="numberSelect"
                className="w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
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
