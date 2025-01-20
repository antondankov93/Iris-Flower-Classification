import React, { useState } from 'react';
import axios from 'axios';
import IrisForm from './components/IrisForm';
import ResultDisplay from './components/ResultDisplay';

const App: React.FC = () => {
    const [prediction, setPrediction] = useState<string | null>(null);

    const handleSubmit = async (data: { [key: string]: number }) => {
        try {
            const response = await axios.post('/predict', data);
            setPrediction(response.data.prediction);
        } catch (error) {
            console.error("Error predicting:", error);
            setPrediction("Error occurred");
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Iris Flower Classification</h1>
            <IrisForm onSubmit={handleSubmit} />
            {prediction && <ResultDisplay prediction={prediction} />}
        </div>
    );
};

export default App;