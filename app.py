from flask import Flask, render_template, request
import torch
import numpy as np

app = Flask(__name__)

# Load the trained model
class IrisClassifier(torch.nn.Module):
    def __init__(self):
        super().__init__()
        self.fc1 = torch.nn.Linear(4, 10)  # 4 input features, 10 hidden units
        self.fc2 = torch.nn.Linear(10, 3)  # 10 hidden units, 3 output classes

    def forward(self, x):
        x = torch.nn.functional.relu(self.fc1(x))
        x = self.fc2(x)
        return x

model = IrisClassifier()
model.load_state_dict(torch.load('models/model.pth'))
model.eval()  # Set the model to evaluation mode

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        # Get input values from the form
        sepal_length = float(request.form['sepal_length'])
        sepal_width = float(request.form['sepal_width'])
        petal_length = float(request.form['petal_length'])
        petal_width = float(request.form['petal_width'])

        # Make prediction
        input