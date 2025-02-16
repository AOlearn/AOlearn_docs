# Lasso Regression (aolearn.lasso)

## fit_lasso(X, y, lambda, learningRate, numIterations)
Trains a Lasso regression model (employing L1 regularization) using gradient descent.

### Parameters:
- `X` (table): Training features.
- `y` (table): Training labels.
- `lambda` (number): Regularization strength.
- `learningRate` (number): Learning rate.
- `numIterations` (number): Number of iterations.

### Returns:
- `table`: Learned coefficients (theta), including the bias term.

---

## predict_lasso(theta, features)
Generates predictions using a fitted Lasso regression model.

### Parameters:
- `theta` (table): Learned coefficients (including the bias) from `fit_lasso`.
- `features` (table): Features for a single data point.

### Returns:
- `number`: Predicted value.
