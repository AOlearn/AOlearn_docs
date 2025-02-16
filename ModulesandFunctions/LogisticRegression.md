## Logistic Regression (aolearn.logistic)

### fit_logistic(X, y, learningRate, numIterations)
Trains a logistic regression model using gradient descent.

#### Parameters:
- `X` (table): Training features.
- `y` (table): Training labels (0 or 1).
- `learningRate` (number): Learning rate.
- `numIterations` (number): Number of iterations.

#### Returns:
- `table`, `number`: A table containing the learned weights and the learned bias.

---

### predict_logistic_sigmoid(weights, bias, features)
Predicts probabilities using a fitted logistic regression model (producing a sigmoid output).

#### Parameters:
- `weights` (table): Learned weights from `fit_logistic`.
- `bias` (number): Learned bias from `fit_logistic`.
- `features` (table): Features for a single data point.

#### Returns:
- `number`: Predicted probability (a value between 0 and 1).
