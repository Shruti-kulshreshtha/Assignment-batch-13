function capitalFirstLetter(sentence) {
    return sentence
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

const sentence = "hello my name i shruti kulshreshtha"
const capital = capitalFirstLetter(sentence)
console.log(capital);