// What is Closore in Javascript ?

// It is a function with its lexical environment.

// Let us consider an example

const outerFunction = () => {
  let a = 10;
  console.log(a);
  const innerFunction = () => {
    console.log(a);
    const innerMostFunction = () => {
      console.log(a);
    };
    a = 0;
    innerMostFunction();
  };
  return innerFunction;
};

const something = outerFunction();
something();

// Here when the innerFunction is been returned by outerFunction , not only the function is returned but all its variable values are binded (lexical environment) is also returned
