import React from 'react';

interface Props {
    prediction: string;
}

const ResultDisplay: React.FC<Props> = ({ prediction }) => {
    return (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
            <strong className="font-bold">Prediction:</strong> {prediction}
        </div>
    );
};

export default ResultDisplay;