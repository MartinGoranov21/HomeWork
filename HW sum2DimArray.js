// TASK: Да се дефинира функция SumEven2DimArrayElements(), която връща сумата от четните елементи на подаденият й двумерен масив.

// ---> YOUR CODE HERE <---
let SumEven2DimArrayElements= function(arr)
{
    for (let i=0; i< arr.length; i++)
    {
        let sumArr1=0;
        if (arr[0][i]%2===0)
        {
            sumArr1+=arr[0][i];
            console.log (i);
        }

        let sumArr2=0;
        if (arr[1][i]%2===0)
        {
            sumArr2+=arr[1][i];
            console.log(i);
        }

       let sum= sumArr1+sumArr2;
        return sum;

    }
}

// TEST:
let arr = [
	[1,2,3],
	[4,5,6]
];

let sum = SumEven2DimArrayElements(arr);
console.log(sum);

// expected output: 12