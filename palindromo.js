function checkpalindromo(word){
    if(!word) return "inexitente";
    return word.split("").reverse().join("") === word;
}

console.log(checkpalindromo("gato"));

//funcao 2

function checkpalindromo2(word2){
    if (!word2) return "inexistente";
    inverse = word2.localeCompare(word2.split("").reverse().join(""));
    if (inverse == 0) {
        return "palindromo";
    }
    return "não palindromo";

}
    console.log(checkpalindromo2("ovo 2"));
