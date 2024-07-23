function sumArray(numbers){
    return numbers.reduce(function(sum,num){
        return sum+num;
    },0);

    
}

const numbers = [1,2,3,4,5];
    const sum =sumArray(numbers);
    console.log(sum)