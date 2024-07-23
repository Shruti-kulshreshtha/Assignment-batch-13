function isPrime(num){
    if(num<=1)return false;
    for(let i=2;i*i<=num;i++){
        if(num%i===0)
            return false;
    }
    return true;
}

function filterPrime(arr){
    return arr.filter(function(num){
        return isPrime(num);
    });
}

const numbers=[1,2,3,4,5,6,7,8,9,11,12,13];
const prime = filterPrime(numbers);
console.log(prime);