# Ridge Regression (aolearn.ridge)

## fit_ridge(X, y, lambda, learningRate, numIterations)
Trains a Ridge regression model (using L2 regularization) via gradient descent.

### Parameters:
- `X` (table): Training features.
- `y` (table): Training labels.
- `lambda` (number): Regularization strength.
- `learningRate` (number): Learning rate.
- `numIterations` (number): Number of iterations.

### Returns:
- `table`: Learned coefficients (theta), including the bias term.

---

## predict_ridge(theta, features)
Generates predictions using a fitted Ridge regression model.

### Parameters:
- `theta` (table): Learned coefficients (including the bias) from `fit_ridge`.
- `features` (table): Features for a single data point.

### Returns:
- `number`: Predicted value.
