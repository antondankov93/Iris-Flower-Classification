from flask import Flask, request, jsonify
from model import IrisModel

app = Flask(__name__)
model = IrisModel()

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    prediction = model.predict(data)
    return jsonify({'prediction': prediction})

if __name__ == '__main__':
    app.run(debug=True)