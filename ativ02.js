//#1
var calculo = (numero, percentual) => {
    var formula = (numero / 100) * percentual;
    console.log(formula);
}
calculo(75, 0.50);

//#2
var conversao = (array1, array2) => {
    var array3 = array1.concat(array2);
    array3.join();
    console.log(array3);
}
conversao(["Mouse", "Teclado"], ["Headset", "Monitor"]);