let preco1 = Number(prompt('Informe o preço do primeiro produto: '));
let preco2 = Number(prompt('Informe o preço do segundo produto: '));
let preco3 = Number(prompt('Informe o preço do terceiro produto: '));

if(preco1 < preco2 && preco1 < preco3){
    console.log('Você deve comprar o primeiro produto!');
}else if(preco2 < preco1 && preco2 < preco3){
    console.log('Você deve comprar o segundo produto!');
}else if(preco3 < preco1 && preco3 < preco2){
    console.log('Você deve comprar o terceiro produto!');
} else{
    console.log('Os valores são iguais, você pode comprar qualquer produto.');
};

