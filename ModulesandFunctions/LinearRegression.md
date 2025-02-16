# Linear Regression (aolearn.linear_regression)

## fit_linear(X, y, learningRate, numIterations)
Trains a linear regression model via gradient descent.

### Parameters:
- `X` (table): Training features (a table of tables).
- `y` (table): Training labels.
- `learningRate` (number): The learning rate for gradient descent.
- `numIterations` (number): The number of iterations for gradient descent.

### Returns:
- `table`: The learned coefficients (theta), including the bias term as the first element.

---

## predict_linear(theta, features)
Generates predictions using a fitted linear regression model.

### Parameters:
- `theta` (table): Learned coefficients (including the bias) from `fit_linear`.
- `features` (table): Features for a single data point.

### Returns:
- `number`: The predicted value.