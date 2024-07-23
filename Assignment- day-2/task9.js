function calculate(num1, num2, operation) {
    return new Promise((resolve, reject) => { if (typeof num1 !== 'number' || typeof num2 !== 'number'){
        reject('invalid input');
        return;
    }
    switch (operation) {
        case 'addition':
            resolve(num1 + num2);
            break;

        case 'substraction':
            resolve(num1 - num2);
            break;

        case 'multiplication':
            resolve(num1 * num2);
            break;

        case 'division':
            if (num2 == 0) {
                reject('division by 0 is not allowed')
            }
            else {
                resolve(num1 / num2);
            }

            break;

        default:
            reject('invalid operations')
    }

});
}

calculate(10,5,'addition')
.then(result=>console.log('result: ',result))
.catch(error=>console.error('error: ',error))

calculate(0,0,'division')
.then(result=>console.log('result: ',result))
.catch(error=>console.error('error: ',error))