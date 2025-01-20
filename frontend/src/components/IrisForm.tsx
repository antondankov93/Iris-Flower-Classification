import React, { useState } from 'react';

interface Props {
    onSubmit: (data: { [key: string]: number }) => void;
}

const IrisForm: React.FC<Props> = ({ onSubmit }) => {
    const [sepalLength, setSepalLength] = useState('');
    const [sepalWidth, setSepalWidth] = useState('');
    const [petalLength, setPetalLength] = useState('');
    const [petalWidth, setPetalWidth] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        onSubmit({
            sepal_length: parseFloat(sepalLength),
            sepal_width: parseFloat(sepalWidth),
            petal_length: parseFloat(petalLength),
            petal_width: parseFloat(petalWidth),
        });
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4">
            {/* Input fields for sepal length, sepal width, petal length, petal width */}
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Predict
            </button>
        </form>
    );
};

export default IrisForm;