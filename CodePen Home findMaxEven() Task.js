// TASK: да се дефинира функцията findMaxEven(), която да връща максималното четно число от подаденият й масив.

// ---> YOUR CODE HERE <---
let findMaxEven= function (numbers){
    for (let i=0; i<numbers.length; i++)
    {
        let max=0
        if (max<numbers[i] && numbers[i]%2===0)
        {
            max= numbers[i];
            console.log(max);
            return max;
        }
        
    }
    

};

// TESTz
let numbers = [2, -4, 5, 3, 9, 0, 1];
let max = findMaxEven(numbers);
console.log(`The max of ${numbers} is ${max}`);
