let salarioAtual = prompt("Digite o salário atual: ");
let novoSalario = 0;
let bonus = 0;

salarioAtual = Number(salarioAtual);

if(salarioAtual <= 280){
    bonus = 20/100 * salarioAtual;
    novoSalario = salarioAtual + bonus;
    // salarioAtual = salarioAtual + ((20/100) * salarioAtual);
}; if(salarioAtual > 280 && salarioAtual < 700){
    bonus = 15/100 * salarioAtual;
    novoSalario = salarioAtual + bonus;
}; if(salarioAtual >= 700 && salarioAtual < 1500){
    bonus = 10/100 * salarioAtual;
    novoSalario = salarioAtual + bonus;
}; if(salarioAtual >= 1500){
    bonus = 5/100 * salarioAtual;
    novoSalario = salarioAtual + bonus;
}

console.log(salarioAtual);
console.log(bonus);
console.log(novoSalario);