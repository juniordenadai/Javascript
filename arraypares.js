function subst(array){
    if (!array) return "teste";
    if (!array.length) return "teste1";

    for(let i = 0; i < array.lenght; i++){
        if (array[i] === 0) {
            console.log("voce ja é zero");
        }
        else if (array[i] % 2 == 0) {
            console.log(`Substituindo ${array[i]} por 0...`);
            array[i] = 0;
        }
    }
    return array;
}
let arr = [1,2,3,4,5,6,7,8,9];
console.log(subst(arr));
console.log(arr.length);




