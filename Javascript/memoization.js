// Memoization is a concept of storing values formed by running some function on a particular input so that we need not to execute the function again for the same input and save timne\

//For example let us consider a function that returns a square of the input, but it is purposely written in a such a way that it takes more time by including for loops

function square(n){
    let res=0;
    for(i=1; i<=n;i++){
        for(j=1;j<=n;j++){
            res++
        }
    }
    return res;
}

// console.log(square(20000))
// console.log(square(20000))
// console.log(square(20000))
// console.log(square(20000))
// console.log(square(20000))
// console.log(square(20000))




//Now if we store the value for which the function already as been excecuted with the input we need not have to execute such a function again and again
let calculatedValues=[];
function squareWithMemoization(n){
    if(calculatedValues[n]){
        return calculatedValues[n]
    }
    let res=0;
    for(i=1; i<=n;i++){
        for(j=1;j<=n;j++){
            res++
        }
    }
    calculatedValues[n] = res;
    return res;
}

console.log(squareWithMemoization(20000))
console.log(squareWithMemoization(20000))
console.log(squareWithMemoization(20000))
console.log(squareWithMemoization(20000))
console.log(squareWithMemoization(20000))
console.log(squareWithMemoization(20000))

