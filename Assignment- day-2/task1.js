function cubeArray(numbers){
    return numbers.map(function(num){
        return Math.pow(num,3);
    
})
}

const numbers = [1,2,3,4,5];
const cubes=cubeArray(numbers);
console.log(cubes);