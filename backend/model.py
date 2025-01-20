from sklearn.datasets import load_iris
from sklearn.linear_model import LogisticRegression
from sklearn.preprocessing import StandardScaler

class IrisModel:
    def __init__(self):
        iris = load_iris()
        self.X = iris.data
        self.y = iris.target
        self.scaler = StandardScaler()
        self.X = self.scaler.fit_transform(self.X)
        self.model = LogisticRegression(random_state=0).fit(self.X, self.y)

    def predict(self, data):
        input_data = [[
            data['sepal_length'],
            data['sepal_width'],
            data['petal_length'],
            data['petal_width']
        ]]
        input_data = self.scaler.transform(input_data)
        prediction = self.model.predict(input_data)[0]
        class_names = ['setosa', 'versicolor', 'virginica']
        return class_names[prediction]