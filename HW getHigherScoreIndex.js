let students = ["Ivan", "Pesho", "Maria"];
let scores = [5, 4, 6];


// TASK: дефинирайте функция 'getHighestScoreIndex()', която да връща индекса на най-големият елемент от масива scores.

// ---> YOUR CODE HERE <---
let getHighestScoreIndex= function(students, scores)
{
    for (let i=0; i<scores.length; i++)
    {
        var maxScore= 0;
        if (scores[i]>maxScore)
        {
            maxScore= scores[i];
            console.log (maxScore);
            return maxScore;
        }

    }
getHighestScoreIndex(students,scores);
}

// TASK: като използвате функцията getHighestScoreIndex() изпишета в конзолата името на студента с най-висока оценка:

// ---> YOUR CODE HERE <---

// expected output
// Maria has the higest score: 6