import numpy as np

class NextInLineSequence:
  def __init__(self):
    w11 = -0.03484822 
    w12 = 0.39137393
    w21 = 0.41209901
    w22 = -1.31962197
    w31 = -0.98903699
    w32 = 1.98289056
    w01 = -0.46647543
    w02 = 1.04443566
    b1 = -1.25194322
    b2 = 0.40926036
    b3 = -0.42245592
    
    self.weights = [w11, w21, w31, w12, w22, w32, w01, w02]
    self.biases = [b1, b2, b3]

  def relu(self, x):
    return np.maximum(0, x)

  def relu_deriv(self, x):
    return np.where(x > 0, 1, 0)

  def forward_pass(self, inputs, weights, biases):
    # Extracting weights for different layers
    w_hidden1 = weights[:3]
    w_hidden2 = weights[3:6]
    w_out = weights[6:]
    
    # Forward pass through the first hidden layer
    net_hidden1 = self.relu(np.dot(inputs, w_hidden1) + biases[0])
    
    # Forward pass through the second hidden layer
    net_hidden2 = self.relu(np.dot(inputs, w_hidden2) + biases[1])
    
    # Output layer
    out_net = np.dot([net_hidden1, net_hidden2], w_out) + biases[2]
    return out_net

  def nextOf(self, num1, num2, num3):
    input = [num1, num2, num3]
    return self.forward_pass(input, self.weights, self.biases)