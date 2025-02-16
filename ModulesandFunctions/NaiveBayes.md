# Naive Bayes (aolearn.naive_bayes)

## fit_naive_bayes(X, y)
Trains a Naive Bayes classifier (assuming discrete feature values).

### Parameters:
- `X` (table): Training features (discrete values).
- `y` (table): Training labels.

### Returns:
- `table`, `table`: Class probabilities and conditional feature probabilities.  
  The structure is:  
  `classProbabilities[class] = probability`,  
  `featureProbabilities[class][featureIndex][featureValue] = probability`.

---

## predict_naive_bayes(classProbabilities, featureProbabilities, features)
Predicts the class using a fitted Naive Bayes model.

### Parameters:
- `classProbabilities` (table): Class probabilities obtained from `fit_naive_bayes`.
- `featureProbabilities` (table): Feature probabilities obtained from `fit_naive_bayes`.
- `features` (table): Features for a single data point (discrete values).

### Returns:
- `any`: The predicted class label.
