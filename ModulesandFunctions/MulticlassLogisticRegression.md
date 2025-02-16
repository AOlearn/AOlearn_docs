# Multiclass Logistic Regression (aolearn.multiclass_logistic)

## fit_multiclass_logistic(X, y, numClasses, learningRate, numIterations)
Trains a multiclass logistic regression model (utilizing softmax).

### Parameters:
- `X` (table): Training features.
- `y` (table): Training labels (integers representing the different classes).
- `numClasses` (number): The total number of classes.
- `learningRate` (number): Learning rate.
- `numIterations` (number): Number of iterations.

### Returns:
- `table`, `table`: Learned weights (a table of tables, one for each class) and biases (a table, one for each class).

---

## predict_multiclass_logistic(weights, bias, features)
Predicts probabilities for each class.

### Parameters:
- `weights` (table): Learned weights (a table of tables) from `fit_multiclass_logistic`.
- `bias` (table): Learned biases from `fit_multiclass_logistic`.
- `features` (table): Features for a single data point.

### Returns:
- `table`: Probabilities for each class (table indices correspond to class labels).
