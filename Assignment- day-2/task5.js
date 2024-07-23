function findLongestString(numbers){
    const stringLength=numbers.map(str=>({string:str,length:str.length}));
    const longest =stringLength.reduce((longest,current)=>current.length>longest.length?current:longest,{string:'',length:0});

    return longest.string;
}

const numbers=['apple','mango','oragnes','pineapples'];
const longestStr=findLongestString(numbers);
console.log(longestStr) 