function exer05(){
    let valor = parseInt(prompt("Digite um valor..."));
    let ant = valor - 1;
    let next = valor + 1;

    alert(`O antecessor de ${valor} é: ${ant} \nO sucessor de ${valor} é: ${next}`)
}

function exer06(){
    let base = parseInt(prompt("Informe o tamanho da Base (Bcm²)"));
    let altura = parseInt(prompt("Informe o a altura (Acm²)"));

    let area = base * altura
    alert(`A area do retângulo é: ${area}cm²`)
}

function exer07(){
    let ano = parseInt(prompt("Informe sua idade (somente os anos): "));
    let mes = parseInt(prompt("Informe sua idade (somente meses): "));
    let dia = parseInt(prompt("Informe sua idade (somente os dias): "))

    let result = dia + (ano * 365) + (mes * 30);
    alert (`Você possui ${result} dias vividos!`)
}

function exer08(){
    let eleitores = parseInt(prompt("Digite o numero de eleitores: "));
    let branco = parseInt(prompt("Quantidade de votos em branco: "));
    let nulos = parseInt(prompt("Quantidade de votos nulos: "));
    let validos = parseInt(prompt("Quantidade de votos válidos: "));
    let pcBranco, pcNulo, pcValido = undefined;

    pcBranco = (branco * 100) / eleitores
    pcNulo = (nulos * 100) / eleitores
    pcValido = (nulos * 100) / eleitores

    alert(`O total de eleitores foi: ${eleitores} \nOs votos brancos foram: ${pcBranco}% \nOs votos nulos foram: ${pcNulo}% \nOs votos validos foram: ${pcValido}%`)
}

function exer09(){
    let salarioAtual = parseInt(prompt("Informe seu salario atual: "))
    let pcReajuste = parseInt(prompt("Informe o percentual de reajuste: "))
    let ajuste, novoSalario = undefined;

    ajuste = (salarioAtual / 100) * pcReajuste
    novoSalario = salarioAtual + ajuste

    alert(`Seu novo salario será: R$${novoSalario.toFixed(2)}`)
}

function exer10(){
    let custo = parseInt(prompt("Informe o custo de fabrica: "));
    let distribuidor = 28;
    let imposto = 45;
    let calcDistribuidor, calcImposto, calcConsulmidor = undefined;

    calcDistribuidor = custo + (custo * distribuidor / 100);
    calcImposto = custo + (custo * imposto / 100);
    calcConsulmidor = custo + calcDistribuidor + calcImposto

    alert(`O valor total que o consumidor irá pagar é: ${calcConsulmidor}`)

}

function exer11(){
    let qtdCarroVendido = parseInt(prompt("Informe quantidade de carros vendidos: "));
    let totalVendas = parseInt(prompt("Informe o valor total de suas vendas: "));
    let salarioFixo = parseInt(prompt("Informe seu salario fixo: "));
    let comissaoFixa = parseInt(prompt("Informe a comissão fixa para os carros vendidos: "));
    let comissaoFixaTotal, comissaoVariavel, salarioFinal = undefined;

    comissaoFixaTotal = qtdCarroVendido * comissaoFixa
    comissaoVariavel = totalVendas * (5/100)
    salarioFinal = salarioFixo + comissaoFixaTotal + comissaoVariavel;

    alert(`O salario final será: RS${salarioFinal.toFixed(2)}`);
}

function exer12(){
    let farh = parseInt(prompt("Digite a temperatura em Fahrenheit: "));
    let celsius = 5 * (farh - 32) / 9

    alert(`${farh} Fahrenheit em celsius é: ${celsius}°`)
}

function exer13(){
    let n1 = parseInt(prompt("Digite a nota da primeira avaliação: "));
    let n2 = parseInt(prompt("Digite a nota da segunda avaliação: "));
    let n3 = parseInt(prompt("Digite a nota da terceira avaliação: "));

    let media = ((n1 * 2) + (n2 * 3) + (n3 * 5)) / 10

    if(media >= 6){
        alert(`A media final do aluno foi: ${media} \naluno APROVADO!`)

    } if (media < 6){
        alert(`A media final do aluno foi: ${media} \naluno REPROVADO!`)
    }
}

function exer14(){
    let valor = parseInt(prompt("Digite um valor:"))

    if(valor > 10) {
        alert(`O valor "${valor} é MAIOR que 10!`)

    }else if (valor == 10) {
        alert(`O valor "${valor}" é IGUAL a 10`)

    } else {
        alert(`O valor "${valor} "é MENOR que 10!`)
    }
}

function exer15(){
    let valor = parseInt(prompt("Digite um valor: "));

    if(valor < 0){
        alert(`O valor ${valor} é NEGATIVO!`)

    }else if(valor >= 0) {
        alert(`O valor ${valor} é POSITIVO`)
    }
}

function exer16(){
    let maca = parseInt(prompt("Informe o numero de maças compradas: "));
    let total = undefined;

    if (maca < 12) {
        total = maca * 1.3
        alert(`O cliente irá pagar: R$${total.toFixed(2)}`)

    }else {
        alert(`O cliente irá pagar: R$${maca.toFixed(2)}`);
    }
}

function exer17(){
    let n1 = parseInt(prompt("Informe a nota da 1° Avaliação: "));
    let n2 = parseInt(prompt("Informe a nota da 2° Avaliação: "));
    let media = (n1 + n2) / 2

    if(media >= 6) {
        alert(`A média do aluno foi: ${media} APROVADO!`)

    }else {
        alert(`A média do aluno foi: ${media} REPROVADO!`)
    }
}

function exer18(){
    let dataAtual = new Date();
    let anoAtual = dataAtual.getFullYear();
    let anoNasc = parseInt(prompt("Informe seu ano de nascimento: "));
    let idade = anoAtual - anoNasc

    if (idade < 16 ){
        alert("Você ainda é menor de 16, por tanto não pode votar!")

    }if(idade >= 16 && idade <= 17) {
        alert("Você já pode votar, porém seu voto não é obrigatório!")

    }else  {
        alert("Você precisa votar. Seu voto é obrigátorio!!")
    }
}

function exer19(){
    let valores = Array();
    valores[0] = parseInt(prompt("Digite um valor: "));
    valores[1] = parseInt(prompt("Digite outro valor: "))

    if (valores[0] > valores[1]) {
        alert(`O maior valor digitado é: ${valores[0]}`)

    } else {
        alert(`O maior valor digitado é: ${valores[1]}`)
    }
}

function exer20(){
    let valores = Array();
    valores[0] = parseInt(prompt("Digite um valor: "));
    valores[1] = parseInt(prompt("Digite outro valor: "));

    if(valores[0] < valores[1]) {
        alert(`A ordem crescente dos valores é: ${valores[0]} ... ${valores[1]}`)

    }else {
        alert(`A ordem crescente dos valores é: ${valores[1]} ... ${valores[0]}`)

    }
}

function exer21(){
    let inicio = parseInt(prompt("Digite a hora de ínicio do jogo: "));
    let final = parseInt(prompt("Digite a hora do final do jogo: "));
    let hora = undefined;

    if(inicio == final) {
        alert(`A partida teve duração de 24Horas`);

    }if(inicio < final) {
        hora = final - inicio
        alert(`A partida teve duração de ${hora}Horas`)

    }if(inicio > final) {
        hora = (final + 24) - inicio
        alert(`A partida teve duração de ${hora}Horas`)
    }
}

function exer22(){
    let horasFixas = Number(160);
    let horasTrabalhadas = parseInt(prompt("Quantidade de horas trabalhas no mês: "));
    let salarioFixo = parseInt(prompt("Valor salario fixo: "));
    let salarioHora = salarioFixo / horasFixas
    let desconto, salarioFinal, qtdHoraExtra, ganhoExtra = undefined;

    if (horasTrabalhadas > horasFixas) {
        qtdHoraExtra = horasTrabalhadas - horasFixas
        ganhoExtra = qtdHoraExtra * (salarioHora * (50/100) + salarioHora)
        salarioFinal = salarioFixo + ganhoExtra

        alert(`O funcionario irá receber R$${ganhoExtra.toFixed(2)} pelas horas extras. \nO salario final será: R$${salarioFinal.toFixed(2)}`)

    }else if (horasTrabalhadas = horasFixas) {
        alert(`O funcionario irá receber seu salario fixo: R$${salarioFixo.toFixed(2)}`)
    }

}

function exer24(){
    let salario = parseInt(prompt("Informe o valor do seu salario fixo: "));
    let vendas = parseInt(prompt("Informe o valor total de suas vendas: "));
    let total, diferenca = undefined;

    if(vendas <= 1500) {
        total = salario + (vendas * (3/100));
        alert(`O salario total que o funcionario irá receber é: R$${total.toFixed(2)}`)

    }if (vendas > 1500) {
        diferenca = vendas - 1500
        total = salario + (1500 * (3/100)) + (diferenca * (5/100));
        alert(`O salario total que o funcionario irá receber é: R$${total.toFixed(2)}`);
    }

}

function exer25(){
    let conta = parseInt(prompt("Informe o numero da conta: "));
    let saldo = parseInt(prompt("Digite o saldo: "));
    let debito = parseInt(prompt("Digite o valor em debito: "));
    let credito = parseInt(prompt("Digite o valor de crédito: "));
    let saldoAtual = saldo - debito + credito

    if(saldoAtual >= 0) {
        alert(`O saldo ${saldoAtual} está POSITIVO!`)
    } else {
        alert(`O saldo ${saldoAtual} está NEGATIVO!`)
    }
}

function exer26(){
    let qtdAtual = parseInt(prompt("Informe a quantidade atual do estoque: "));
    let qtdMaxima = parseInt(prompt("informe a capacidade maxima do estoque:"));
    let qtdMinima = parseInt(prompt("Informe a quantidade minina do estoque: "));
    let media = (qtdMaxima + qtdMinima) / 2

    if (qtdAtual >= media) {
        alert(`Não efetuar compra do produto, estoque disponivel!`)

    } else {
        alert(`A quantidade atual está baixa, efetue a reposição do produto!!`)
    }
}

function exer27(){
    let valor = parseInt(prompt("Informe um valor: "))

    if(valor == 0){
        alert(`O valor ${valor} é NEUTRO!`)

    }else if (valor > 0) {
        alert(`O valor ${valor} é POSITIVO!`)

    }else {
        alert(`O valor ${valor} é NEGATIVO`)
    }
}

function exer28(){
    let valores = Array();
    valores[0] = parseInt(prompt("Digite o 1° valor: "));
    valores[1] = parseInt(prompt("Digite o 2° valor: "));
    valores[2] = parseInt(prompt("Digite o 3° valor: "));
    let maior = undefined;

    if(valores[0] > valores[1]){
        maior = valores[0]

    } else {
        maior = valores[1]
    }

    if(valores[2] > maior) {
        maior = valores[2]
    }

    alert(`O maior digitado foi: ${maior}`)
}

function exer29(){
    let valores = Array();
    valores[0] = parseInt(prompt("Digite o 1° valor: "));
    valores[1] = parseInt(prompt("Digite o 2° valor: "));
    valores[2] = parseInt(prompt("Digite o 3° valor: "));
    let soma = undefined;

    if (valores[0] > valores[1] && valores[1] > valores[2]) {
        soma = valores[0] + valores[1]
        alert(`a soma entre os maiores valores é: ${soma}`)
    } 
    
    if (valores[0] > valores[2] && valores[2] > valores[1]){
        soma = valores[0] + valores[2]
        alert(`a soma entre os maiores valores é: ${soma}`)
    }
    if (valores[1] > valores[0] && valores[0] > valores[2]) {
        soma = valores[1] + valores[0]
        alert(`a soma entre os maiores valores é: ${soma}`)
    }
    
    if (valores[1] > valores[2] && valores[2] > valores[0]) {
        soma = valores[1] + valores[2]
        alert(`a soma entre os maiores valores é: ${soma}`)
    }
    
    if (valores[2] > valores[0] && valores[0] > valores[1]) {
         soma = valores[2] + valores[0]
        alert(`a soma entre os maiores valores é: ${soma}`)
    }
    
    if (valores[2] > valores[1] && valores[1] > valores[0]){
        soma = valores[2] + valores[1]
        alert(`a soma entre os maiores valores é: ${soma}`)
    }
    
}

function exer30(){
    let valores = Array();
    valores[0] = parseInt(prompt("Digite o 1° valor: "));
    valores[1] = parseInt(prompt("Digite o 2° valor: "));
    valores[2] = parseInt(prompt("Digite o 3° valor: "));
    let soma = undefined;

    if (valores[0] > valores[1] && valores[1] > valores[2]) {
        soma = valores[0] + valores[1]
        alert(`A ordem crescente é: ${valores[2]} ... ${valores[1]} ... ${valores[0]}`)
    } 
    
    if (valores[0] > valores[2] && valores[2] > valores[1]){
        soma = valores[0] + valores[2]
        alert(`A ordem crescente é: ${valores[1]} ... ${valores[2]} ... ${valores[0]}`)
    }
    if (valores[1] > valores[0] && valores[0] > valores[2]) {
        soma = valores[1] + valores[0]
        alert(`A ordem crescente é: ${valores[2]} ... ${valores[0]} ... ${valores[1]}`)
    }
    
    if (valores[1] > valores[2] && valores[2] > valores[0]) {
        soma = valores[1] + valores[2]
        alert(`A ordem crescente é: ${valores[0]} ... ${valores[2]} ... ${valores[1]}`)
    }
    
    if (valores[2] > valores[0] && valores[0] > valores[1]) {
         soma = valores[2] + valores[0]
         alert(`A ordem crescente é: ${valores[1]} ... ${valores[0]} ... ${valores[2]}`)
    }
    
    if (valores[2] > valores[1] && valores[1] > valores[0]){
        soma = valores[2] + valores[1]
        alert(`A ordem crescente é: ${valores[0]} ... ${valores[1]} ... ${valores[2]}`)
    }
    
}

function exer31(){
    let ladoA = parseInt(prompt("Informe o valor de um lado do trângulo: "));
    let ladoB = parseInt(prompt("Informe o valor do segundo lado do trângulo: "));
    let ladoC = parseInt(prompt("Informe o valor do terceiro do trângulo: "));
    

    if((ladoA < ladoB + ladoC) && (ladoB < ladoA + ladoC) && (ladoC < ladoA + ladoB)) {
        alert(`Esse valor forma um triângulo`)

    }else {
        alert(`Esse valor não forma um triângulo`)
    }

    
}

function exer32(){
    let time1 = prompt("Informe o nome do primeiro time");
    let golTime1 = parseInt(prompt(`Quantidade de gols marcados pelo ${time1}`));

    let time2 = prompt("Informe o nome do segundo time");
    let golTime2 = parseInt(prompt(`Quantidade de gols marcados pelo ${time2}`));

    if(golTime1 == golTime2) {
        alert(`A quantidade de gols marcados foram iguas. EMPATE!`)
    }

    if(golTime1 > golTime2) {
        alert(`O time ${time1} foi o VENCEDOR \nResultado: ${time1} ${golTime1} x ${golTime2} ${time2}`)
    }

    if(golTime2 > golTime1) {
        alert(`O time ${time2} foi o VENCEDOR \nResultado: ${time2} ${golTime2} x ${golTime1} ${time1}`)
    }
}

function exer33(){
    let valores = Array();
    valores[0] = parseInt(prompt("Informe um valor: "));
    valores[1] = parseInt(prompt("Informe outro valor: "));

    if(valores[0] == valores[1]){
        alert(`Os valores ${valores[0]} e ${valores[1]} são IGUAIS!`);

    }else if(valores[0] > valores[1]){
        alert(`O PRIMEIRO valor é MAIOR`);

    }else {
        alert(`O SEGUNDO valor é MAIOR`)
    }
}

function exer35(){
    let tipo = prompt("Escolha o combustível: [A]-Álcool | [G]-Gasolina: ");
    let qtdAbastecida = parseInt(prompt("Quantidade em litros abastecida: "));
    let total = null;

    //Alcool
    if (tipo === "A" || tipo === "a"){
        if(qtdAbastecida <= 20){
            total = 2.9 * (qtdAbastecida - (qtdAbastecida * 3/100));
            alert(`O valor com desconto será: R$${total.toFixed(2)}`);

        }else{
            total = 2.9 * (qtdAbastecida - (qtdAbastecida * 5/100));
            alert(`O valor com desconto será: R$${total.toFixed(2)}`);
        }
    }

    //Galosina
    if (tipo === "G" || tipo === "g"){
        if(qtdAbastecida <= 20){
            total = 3.3 * (qtdAbastecida - (qtdAbastecida * 4/100));
            alert(`O valor com desconto será: R$${total.toFixed(2)}`);

        }else{
            total = 3.3 * (qtdAbastecida - (qtdAbastecida * 6/100));
            alert(`O valor com desconto será: R$${total.toFixed(2)}`);
        }
    }

  
    
}

function exer36(){

    let HomemUm, HomemDois, MulherUm, MulherDois = null;
    let soma, produto = null;

    HomemUm = Number(prompt("Digite a idade do primerio homem"))
    HomemDois = Number(prompt("Digite a idade do segundo homem"))
    MulherUm = Number(prompt("Digite a idade da primeira mulher"))
    MulherDois = Number(prompt("Digite a idade da primeira mulher"))

   

    if (HomemUm > HomemDois && MulherUm >MulherDois) {
        soma = HomemUm + MulherDois 
        produto = HomemDois * MulherUm

        alert(`A soma da idade do homem mais velho com a mulher mais nova é: ${soma}. \nE o produto do homem mais novo com a mulher com mais idade é de ${produto}`)
    }

    if (HomemUm > HomemDois && MulherDois > MulherUm) {
        soma = HomemUm + MulherUm 
        produto = HomemDois * MulherDois

        return alert(`A soma da idade do homem mais velho com a mulher mais nova é: ${soma}. \nE o produto do homem mais novo com a mulher com mais idade é de ${produto}`)
    }
    if (HomemDois > HomemUm && MulherUm > MulherDois) {
        soma = HomemDois + MulherDois 
        produto = HomemUm * MulherUm

        return alert(`A soma da idade do homem mais velho com a mulher mais nova é: ${soma}. \nE o produto do homem mais novo com a mulher com mais idade é de ${produto}`)
    }
    if (HomemDois > HomemUm &&  MulherDois > MulherUm) {
        soma = HomemDois + MulherUm
        produto = HomemUm * MulherDois

        return alert(`A soma da idade do homem mais velho com a mulher mais nova é: ${soma}. \nE o produto do homem mais novo com a mulher com mais idade é de ${produto}`)
    }


}

function exer37(){
    let morango = parseInt(prompt("Digite o valor em Kg de morangos comprados: "));
    let maca = parseInt(prompt("Digite o valor em Kg de maças compradas: "));
    let totalKg = morango + maca
    let totalMorango, totalMaca, totalCompra, valorFinal = null;

    //Calculo valor pago pelo morango
    if (morango <= 5) {
        totalMorango = morango * 2.5
    } else {
        totalMorango = morango * 2.2
    }

     //Calculo valor pago pelo morango
     if (maca <= 5) {
        totalMaca = maca * 1.8
    } else {
        totalMaca = maca * 1.5
    }

    totalCompra = totalMorango + totalMaca

    if(totalKg > 8 || totalCompra > 25) {
        valorFinal = totalCompra - (totalCompra * 10/100)
        alert(`O valor total que o cliente irá pagar é: R$${valorFinal.toFixed(2)}`)

    } else {
        alert(`O valor total que o cliente irá pagar é: R$${totalCompra.toFixed(2)}`)
    }
}

function exer38(){
    let bancoDeDados = [1234, 9999];
    let usuario = parseInt(prompt("Digite seu codigo de usuario: "));

    if (usuario !== bancoDeDados[0]){
        alert(`{Erro} Usuario inválido, tente novamente!`);

    }else if (usuario == bancoDeDados[0]) {
        let senha = parseInt(prompt("Digite sua senha:"));

        if(senha !== bancoDeDados[1]) {
            alert(`{Erro} Senha inválida, tente novamente!`)

        }else if(senha == bancoDeDados[1]){
            alert(`Acesso pertimido! seja bem vindo :)`)
        }
    }
  
}

function exer40(){
    let nomeProduto = prompt("Informe a descrição do produto (Nome): ");
    let valorUnitario = parseInt(prompt("Digite o preço unitário do produto: "));
    let qtdComprada = parseInt(prompt("Quantidade adquirida: "));
    let total = valorUnitario * qtdComprada;
    let valorComDesconto = null;

    if (qtdComprada <= 5) {
        valorComDesconto = total - (total * 2/100);
    }

    if (qtdComprada > 5 && qtdComprada <= 10){
        valorComDesconto = total - (total * 3/100);
    }

    if (qtdComprada > 10) {
        valorComDesconto = total - (total * 5/100);
    }

    alert(`O preço do produto ${nomeProduto} será: R$${valorComDesconto.toFixed(2)}`)
}

function exer41(){
    let notas = Array();
    notas[0] = prompt("Digite a nota da primeira avaliação");
    notas[1] = prompt("Digite a nota da segunda avaliação");
    notas[2] = prompt("Digite a nota da terceira avaliação");
    notas[3] = prompt("Digite a nota da recuperação");

    let media = (notas[0] + (notas[1]*2) + (notas[2]*3) + notas[3]) / 7

    if(media >= 9){
        alert(`Conceito A`)

    }else if(media >= 7.5 && media < 9){
        alert(`Conceito B`)

    }else if(media >= 6.0 && media < 7.5){
        alert(`Conceito C`)

    }else if(media < 6) {
        alert(`Conceito D`)
    }

    
    
}

function exer42(){
    let Idade, AnosDeTrabalho = null;
    Idade = parseInt(prompt("Digite a sua idade"))
    AnosDeTrabalho = parseInt(prompt("Digite o seus anos de trabalho"))

    if (Idade >= 65){ 
         alert("Requerer aposentadoria!");

    }else if (AnosDeTrabalho >= 30){ 
         alert("Requerer aposentadoria!");

    }else if (Idade >= 60 && AnosDeTrabalho >= 25){
         alert("Requerer aposentadoria!");

    }else {
        alert("Você ainda não pode se aposentar")
    }     
 
}