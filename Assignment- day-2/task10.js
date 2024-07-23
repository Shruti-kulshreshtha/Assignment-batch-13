function calculateTotalScore(arr){
    let totalScore =0 ;

    arr.forEach(item => {
        if(item.hasOwnProperty('score') &&typeof item.score ==='number'){
            totalScore+=item.score;
        }
    })
    return totalScore

}

const data=[
    {name:'x',score:85},
    {name:'y',score:75},
    {name:'z',score:58},
    {name:'w',score:78}
]

const totalScore=calculateTotalScore(data);
console.log(totalScore);