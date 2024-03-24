import { useState } from 'react';
import { FiMinus, FiPlus } from 'react-icons/fi';

const NumericInput = () => {
    const [value, setValue] = useState(0);

    const increment = () => {
        setValue(value + 1);
    };

    const decrement = () => {
        setValue(value - 1);
    };

    return (
        <div className="border border-gray-300 rounded-md p-4 shadow-md relative">
            <h2 className="text-xl font-bold text-center mb-4">NumericInput</h2>
            <div className="flex items-center justify-center">
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-l hover:bg-blue-600 focus:outline-none"
                    onClick={decrement}
                >
                    <FiMinus />
                </button>
                <input
                    type="number"
                    className="w-16 text-center border border-gray-400 focus:outline-none"
                    value={value}
                    onChange={(e) => setValue(parseInt(e.target.value))}
                />
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600 focus:outline-none"
                    onClick={increment}
                >
                    <FiPlus />
                </button>
            </div>
        </div>
    );
};

export default NumericInput;
