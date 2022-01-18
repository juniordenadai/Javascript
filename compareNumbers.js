/*
function compareNumbers(num1, num2){
const equals = num1 === num2;

return equals ? "sao iguals" : "nao igual";

}
*/
function compareNumbers(num1,num2){
    const firstPhrase = createFirstPhrase(num1,num2);
    const secondPhrase = createSecondPhrase(num1,num2);

    return `${firstPhrase} ${secondPhrase}`
}


function createFirstPhrase (num1,num2){
    let same = '';
    if (num1 !==num2){
        same = "'t";
    }
    return `The numbers ${num1} and ${num2} are${same} equal.`
}

function createSecondPhrase(num1,num2){
    const sum =  num1+num2;
    let result10 = 'less';
    let result20 = 'less';
    const compare10 = sum >10;
    const compare20 = sum >20;

    if(compare10){
        result10 = 'bigger';
    }
    if(compare20){
        result20 = 'bigger';
    }
    return `The sum is ${sum}, that is ${result10} than 10 and is ${result20} than 20.`

}

console.log(compareNumbers(10,3));
