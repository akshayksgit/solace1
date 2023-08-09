
const calculator = {
  add: (a, b, callback) => {
    setTimeout(() => {
      callback(null, a + b);
    }, 1000); 
  },

  subtract: (a, b, callback) => {
    setTimeout(() => {
      callback(null, a - b);
    }, 1000); 
  },

  multiply: (a, b, callback) => {
    setTimeout(() => {
      callback(null, a * b);
    }, 1000); 
  },

  divide: (a, b, callback) => {
    if (b === 0) {
      setTimeout(() => {
        callback(new Error("Division by zero is not allowed"));
      }, 1000); 
    } else {
      setTimeout(() => {
        callback(null, a / b);
      }, 1000); 
    }
  },
};

// Usage
calculator.add(10, 5, (err, result) => {
  if (err) {
    console.error(err);
  } else {
    console.log("Addition:", result);
  }
});

calculator.subtract(10, 5, (err, result) => {
  if (err) {
    console.error(err);
  } else {
    console.log("Subtraction:", result);
  }
});

calculator.multiply(10, 5, (err, result) => {
  if (err) {
    console.error(err);
  } else {
    console.log("Multiplication:", result);
  }
});

calculator.divide(10, 2, (err, result) => {
  if (err) {
    console.error(err);
  } else {
    console.log("Division:", result);
  }
});
