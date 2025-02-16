## Features (X):

A Lua table composed of nested tables. Each inner table represents a single data instance (or example), with its elements representing individual feature values.
```
Example: 
X = { {1, 2}, {3, 4}, {5, 6} } represents three data points, each possessing two features.

```
## Labels (y):

A Lua table where each element holds the label associated with the corresponding data point in X.
```
Example: 
y = {0, 1, 0} provides labels for the three data points in the X example above.
```
## Features (For Prediction):
A Lua table containing feature values for a single data point.
```
Example: 
Features = { 7, 8 }

