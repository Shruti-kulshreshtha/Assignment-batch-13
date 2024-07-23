function avgOfSqOfOdds(arr){
    const oddNumbers=arr.filter(num=>num%2!==0)
    const sqOddNumbers =oddNumbers.map(num=>num*num);
    const sumOfSquares =sqOddNumbers.reduce((acc,num)=>acc+num,0);

   
    const average = sqOddNumbers.length>0 ? sumOfSquares/sqOddNumbers.length:0;
    return average;
}

const arr=[1,2,3,4,5,6,7,8,9,10];
const average=avgOfSqOfOdds(arr);
console.log(average);