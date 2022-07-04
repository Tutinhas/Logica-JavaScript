function exer01() {
    let celsius = parseInt(prompt("Digite o valor em graus Celsius"));
    let farh = null;

    farh = (9 * celsius + 160) / 5

    alert(`${celsius}C° = ${farh}F°`)
}

function exer02() {
    let farh = parseInt(prompt("Digite a temporatura em fahrenheit"));
    let celsius = null;

    celsius = (farh - 32) * (5 / 9);

    alert(`${farh}F° = ${celsius}C°`)
}

function exer03() {
    let valorPi = 3.14159;
    let volume, raio, altura;
    altura = parseInt(prompt("Digite a altura: "));
    raio = parseInt(prompt("Digite o valor do raio"));
    let litros = 0;

    volume = valorPi * (raio ** 2) * altura

    if(volume >= 1000) {
        litros = volume / 1000
        alert(`O volume é: ${litros.toFixed(2)}Litros`)
    }

    alert(`O volume é: ${volume.toFixed(2)}ml`)

    

  
}

function exer04() {
    let tempoGasto = parseInt(prompt("Informe o tempo gasto na viagem"));
    let velMedia = parseInt(prompt("Digite a velocidade media durante a viagem: "));
    let kml = 12;

    let distancia = tempoGasto * velMedia
    let litros = distancia / kml

    alert(`     A velocidade média durante a viagem foi: ${velMedia}Km/h
    O tempo gasto durante a viagem foi: ${tempoGasto}Horas
    A distancia percorrida foi de: ${distancia}Km
    A quantidade de combustível gasto foi de: ${litros.toFixed(2)}Litros`)
}

function exer05() {
    let taxa = parseInt(prompt("Quantos porcento de taxa está sendo cobrado? :"))
    let valor = parseInt(prompt("Informe o valor da prestação atrasada: "))
    let temp = parseInt(prompt("Informe a quanto tempo a prestação está atrásada: "))
    let prestacao, juros;

    prestacao = valor + (valor * (taxa / 100) * temp);
    juros = valor * (taxa/100) * temp

    alert(`O valor atual a ser pago é: ${prestacao.toFixed(2)}
    Sendo ${valor} o valor original, e ${juros} sendo cobrado de juros`)
}

function exer06(){
    let a = prompt("escreva algo:");
    let b = prompt("escreva algo novamente");
    let c = a;
    a = b;
    b = c;

    alert(`O valor atual da variavel A é ${a} e B é ${b}`)
}

function exer07() {
    let a = parseInt(prompt("Digite o primeiro valor: "));
    let b = parseInt(prompt("Digite o segundo valor: "));
    let c = parseInt(prompt("Digite o terceiro valor: "));
    let d = parseInt(prompt("Digite o quarto valor: "));
    let soma, mult;

    alert(`     ----- Resultado SOMA ----- 
    A soma entre ${a} e ${b} é = ${soma = a + b}
    A soma entre ${a} e ${c} é = ${soma = a + c}
    A soma entre ${a} e ${d} é = ${soma = a + d}
    A soma entre ${b} e ${c} é = ${soma = b + c}
    A soma entre ${b} e ${d} é = ${soma = b + d}
    A soma entre ${c} e ${d} é = ${soma = c + d}
    
            ----- Resultado Multiplicação -----
    A Multiplicação entre ${a} e ${b} é = ${mult = a * b}
    A Multiplicação entre ${a} e ${c} é = ${mult = a * c}
    A Multiplicação entre ${a} e ${d} é = ${mult = a * d}
    A Multiplicação entre ${b} e ${c} é = ${mult = b * c}
    A Multiplicação entre ${b} e ${d} é = ${mult = b * d}
    A Multiplicação entre ${c} e ${d} é = ${mult = c * d}`)

}

function exer08() {
    let largura = parseInt(prompt("Digite a largura: "));
    let altura = parseInt(prompt("Digite a altura: "));
    let comprimento = parseInt(prompt("Digite o valor do comprimento: "));
    let volume = comprimento * largura * altura;

    alert(`O volume da caixa é: ${volume}`)
}

function exer09(){
    let a = parseInt(prompt("Digite um valor: "));
    let b = parseInt(prompt("Digite outro valor: "))
    let dif = a - b;

    alert(`A diferente entre ${a} e ${b} é: ${dif} e ${dif}² = ${dif ** 2}`)

}

function exer10(){
    let dolarHoje = parseFloat(prompt("Cotação atual do dolar: "));
    let dolar = parseFloat(prompt("Digite a quantidade em Dolar que  será  convertida: "));
    let real = dolar * dolarHoje

    alert(`${dolar} Dolares equivalem a ${real} Reais`)
}

function exer11() {
    let dolarHoje = parseFloat(prompt("Cotação atual do dolar: "));
    let real = parseFloat(prompt("Informe a quantidade em Real que será convertida: "));
    let dolar = real / dolarHoje;

    alert(`${real} reais equivalem a ${dolar} Dolares`);
}

function exer12(){
    let a = parseInt(prompt("Digite um valor: "));
    let b = parseInt(prompt("Digite outro  valor: "));
    let c = parseInt(prompt("Digite o terceiro valor: "));
    let quadA, quadB, quadC, soma;

    quadA = a ** 2;
    quadB = b ** 2;
    quadC = c ** 2;
    soma =  quadA + quadB + quadC;

    alert(`A soma dos quadrados de ${a}, ${b} e ${c} é igual ${soma}`)
}

function exer13(){
    let a = parseInt(prompt("Digite um valor: "));
    let b = parseInt(prompt("Digite outro  valor: "));
    let c = parseInt(prompt("Digite o terceiro valor: "));
    let quad, soma;

    soma = a + b + c;
    quad = soma ** 2

    alert(`O quadrado da soma entre ${a}, ${b} e ${c} é igual ${quad}`)


}

function exer14(){
    let a = parseInt(prompt("Digite o 1° valor: "));
    let b = parseInt(prompt("Digite o 2° valor: "));
    let c = parseInt(prompt("Digite o 3° valor: "));
    let d = parseInt(prompt("Digite o 4° valor: "));

    let produto = a * c ;
    let soma = b + d;

    alert(`Produto entre ${a} e ${c}: ${produto} 
    Soma entre ${b} e ${d}: ${soma}`);
}

function exer15(){
    let salarioAtual = parseInt(prompt("Digite seu salario atual: "));
    let reajuste = parseInt(prompt("Quantos % será o reajuste: "));
    let novoSalario = salarioAtual + (salarioAtual * reajuste / 100);

    alert(`Seu novo salario será: ${novoSalario.toFixed(2)}`);
}

function exer16(){
    let candidatoA = parseInt(prompt("Quantida de votos validos para o candidato A: "));
    let candidatoB = parseInt(prompt("Quantida de votos validos para o candidato B: "));
    let candidatoC = parseInt(prompt("Quantida de votos validos para o candidato C: "));
    let votosNulos = parseInt(prompt("Quantidade de votos nulos: "));
    let votosBrancos = parseInt(prompt("Quantidade de votos em Branco: "));
    let votosValidos, totalEleitores, pcValidoA, pcValidoB, pcValidoC, pcNulo, pcBranco, pcTotalValido;

    votosValidos = candidatoA + candidatoB + candidatoC;
    totalEleitores = votosValidos + votosBrancos + votosNulos;

    pcTotalValido = (votosValidos * 100) / totalEleitores;

    pcValidoA = (candidatoA * 100) / totalEleitores;
    pcValidoB = (candidatoB * 100) / totalEleitores;
    pcValidoC = (candidatoC * 100) / totalEleitores;

    pcBranco = (votosBrancos * 100) / totalEleitores;
    pcNulo = (votosNulos * 100) / totalEleitores;

    alert(`Total de eleitores: ${totalEleitores}
    Percentual votos validos ${pcTotalValido.toFixed(2)}%
    Percentual validos candidato A ${pcValidoA.toFixed(2)}%
    Percentual validos candidato B ${pcValidoB.toFixed(2)}%
    Percentual validos candidato C ${pcValidoC.toFixed(2)}%
    Percentual votos em branco ${pcBranco.toFixed(2)}%
    Percentual votos nulos ${pcNulo.toFixed(2)}%`);
}

function exer17(){
    let num1 = parseInt(prompt("Digite um valor:"));
    let num2 = parseInt(prompt("Digite outro valor:"));
    let dif = null;

    if(num1 > num2){
        dif = num1 - num2;
    } else {
        dif = num2 - num1
    }

    alert(`A diferente do maior pelo menos é: ${dif}`);
}

function exer18(){
    let valor = parseInt(prompt("Digite um valor: "));

    if(valor < 0) {
        valor *= -1
    }

    alert(`O modulo é ${valor}`);
}

function exer19(){
    let n1 = parseInt(prompt("Informe a nota da 1° avaliação "));
    let n2 = parseInt(prompt("Informe a nota da 2° avaliação "));
    let n3 = parseInt(prompt("Informe a nota da 3° avaliação "));
    let n4 = parseInt(prompt("Informe a nota da 4° avaliação "));
    let media = (n1 + n2 + n3 + n4) / 4

    if(media >= 5){
        alert(`A media do aluno foi: ${media}. APROVADO! :)`)
    } else {
        alert(`A media do aluno foi: ${media}. REPROVADO! :(`)
    }
    
}

function exer20(){
    let n1 = parseInt(prompt("Informe a nota da 1° avaliação "));
    let n2 = parseInt(prompt("Informe a nota da 2° avaliação "));
    let n3 = parseInt(prompt("Informe a nota da 3° avaliação "));
    let n4 = parseInt(prompt("Informe a nota da 4° avaliação "));
    let media = (n1 + n2 + n3 + n4) / 4

    if(media >= 7){
        alert(`A media do aluno foi: ${media.toFixed(2)}. APROVADO! :)`)

    }else if(media < 7){
        let exame = parseInt(prompt("Digite a nota da recuperação: "))
        media = (media + exame) / 2

        if(media >= 5) {
            alert(`A media do aluno foi: ${media.toFixed(2)}. Aprovado pela recuperação!`)
        } else {
            alert(`A media do aluno foi: ${media.toFixed(2)}, REPROVADO!!`);
        }
    } 
}

function exer21() {
    let a = parseFloat(prompt("Valor de A: "));
    let b = parseFloat(prompt("Valor de B: "));
    let c = parseFloat(prompt("Valor de C: "));
    let x1, x2, delta;

    delta = (b * b) - (4 * a * c);

    if(delta < 0) {
        alert(`Essa equação não possui valores reais!`)

    }else if(delta == 0){
        x1 = -b / (2 * A)
        alert(`X = ${x1}`)
    } else {
        alert(delta)
        x1 = -b + Math.sqrt(delta) / (2 * a)
        x2 = -b - Math.sqrt(delta) / (2 * a)

        alert(`X1 = ${x1} e X2 = ${x2}`)
    }
}

function exer22(){
    let a = parseInt(prompt("Digite o 1° valor: "));
    let b = parseInt(prompt("Digite o 2° valor: "));
    let c = parseInt(prompt("Digite o 3° valor: "));

    if (a > b && b > c) {
        alert(`A ordem crescente é: ${a} ... ${b} ... ${c}`)
    } 
    
    if (a > c && c > b){
        alert(`A ordem crescente é: ${b} ... ${c} ... ${a}`)
    }

    if (b > a && a > c) {
        alert(`A ordem crescente é: ${c} ... ${a} ... ${b}`)
    }
    
    if (b > c && c > a) {
        alert(`A ordem crescente é: ${a} ... ${c} ... ${b}`)
    }
    
    if (c > a && a > b) {
         alert(`A ordem crescente é: ${b} ... ${a} ... ${c}`)
    }
    
    if (c > b && b > a){
        alert(`A ordem crescente é: ${a} ... ${b} ... ${c}`)
    }
}

function exer23(){
    let num1 = parseInt(prompt("Informe o 1° valor: "));
    let num2 = parseInt(prompt("Informe o 2° valor: "));
    let num3 = parseInt(prompt("Informe o 3° valor: "));
    let num4 = parseInt(prompt("Informe o 4° valor: "));
    let diviseis = [];

    if(num1 % 2 === 0 && num1 % 3 === 0){
        diviseis.push(num1)
    }

    if(num2 % 2 === 0 && num2 % 3 === 0){
        diviseis.push(num2)
    }

    if(num3 % 2 === 0 && num3 % 3 === 0){
        diviseis.push(num3)
    }

    if(num4 % 2 === 0 && num2 % 4 === 0){
        diviseis.push(num4)
    }

    alert(`Os numeros: ${diviseis} são diviseis por 2 e por 3`);

}

function exer24(){
    let num1 = parseInt(prompt("Digite o 1° valor: "));
    let num2 = parseInt(prompt("Digite o 2° valor: "));
    let num3 = parseInt(prompt("Digite o 3° valor: "));
    let num4 = parseInt(prompt("Digite o 4° valor: "));
    let num5 = parseInt(prompt("Digite o 5° valor: "));
    
    let valores = [num1, num2, num3, num4, num5];
    let menor = valores[0];
    let maior = null;
    for(let i = 0; i <= valores.length; i++){
        if(maior < valores[i]) {
            maior = valores[i];
            
        }
        if (menor > valores[i]){
            menor = valores[i];
        }
    }

    alert(`O menor valor digitado foi: ${menor}
        O maior valor digitado foi: ${maior}`) 
}

function exer25(){
    let valor = parseInt(prompt("Informe um numero inteiro: "));

    if(valor % 2 === 0){
        alert(`O número ${valor} é PAR`);

    } else {
        alert(`O número ${valor} é IMPAR`)
    }
}

function exer26(){
    let valor = parseInt(prompt("Informe um valor de 1 à 9: "));

    if(valor >= 1 && valor <= 9) {
        alert(`O valor ${valor} está na faixa permitida`)

    }else {
        alert(`O valor ${valor} está fora da faixa permitida.`)
    }
}

function exer27(){
    let num = parseInt(prompt("Informe um número: "));

    if(num <= 3){
        alert(`${num}`)
    }else {
        alert(`Valor incorreto`)
    }
}

function exer28(){
    let nome = prompt("Informe seu nome: ");
    let sexo = prompt("M - Masculino | F - Feminino");
    sexo = sexo.toUpperCase();

    if(sexo == "M") {
        alert(`ilustríssimo Senhor ${nome}`)
    }
    
    if(sexo == "F"){
        alert(`ilustríssima senhora ${nome}`)
    }
}

function exer29(){
    let valor = parseInt(prompt("Informe um valor para conferir a tabuada:"))
    let cont = 1;
    let contador = Array()
    let mult = Array();
    let soma = null;

    while (cont <= 10){
        soma = valor * cont
        mult.push(soma);
        contador.push(cont)
        cont++   
    }

    alert(`    ${valor} x ${contador[0]} = ${mult[0]} 
    ${valor} x ${contador[1]} = ${mult[1]} 
    ${valor} x ${contador[2]} = ${mult[2]} 
    ${valor} x ${contador[3]} = ${mult[3]}
    ${valor} x ${contador[4]} = ${mult[4]}
    ${valor} x ${contador[5]} = ${mult[5]}
    ${valor} x ${contador[6]} = ${mult[6]}
    ${valor} x ${contador[7]} = ${mult[7]}
    ${valor} x ${contador[8]} = ${mult[8]}
    ${valor} x ${contador[9]} = ${mult[9]}`)

}

function exer30(){
    let cont = 1;
    let soma = null;

    while(cont <= 100){
        soma = soma + cont;
        cont++;
    }

    alert(`A soma entre os cem primeiros números é: ${soma}`)
}

function exer31(){
    let cont = 0;
    let soma = null;

    while(cont <= 500){
        if(cont % 2 == 0){
            soma = soma + cont
        }

        cont++
    }

    alert(`A soma entre os valores pares entre 0 até 500 é: ${soma}`)
}
    
function exer32(){
    let cont = 0;
    let impar = Array();

    while(cont <= 20){
        if(cont % 2 == 1) {
            impar.push(cont)
        }
    
        cont++;
    }
    alert(`Esses valores são impares: ${impar}`)
}

function exer33(){
    let numero = null;
    let cont = null;
    let result = null;

    while (cont < 15){
        result = Math.pow(3, cont)
        cont++
        console.log(`${3}^${cont} = ${result}`);
    }

    alert("Verifique o console para ver o resultado.")
    
}

function exer34(){
    let base = parseInt(prompt("Informe um valor para a base:"));
    let exp = parseInt(prompt("Informe o valor do expoente: "));
    let cont  = 1;
    let potencia = 1;
    
    while(cont <= exp){
        potencia = potencia * base
        cont++;
    }

    alert(`${base} elevado a ${exp} = ${potencia}`)
   
}

function exer35(){
    let contador = 1;
    let anterior = 0;
    let atual = 0;
    let proximo = 1;
    result = Array();
    console.log(atual)

    while(contador < 16) {
        result.push(proximo)
        
        anterior = atual // 0 // 1 // 1 // 2 // 3 // 5 //...
        atual = proximo // 1 // 1 // 2 // 3 // 5 // 8 ... 
        proximo = atual + anterior // 1 + 0 = 1 // 1 + 1 = 2 // 1 + 2 = 3 // 2 + 3 = 5 // 3 + 5 = 8 // 5 + 8 = 13 ...
        
        contador++;
    }

    alert(`${result}`)
}

function exer36(){
    let celsius = 10;
    let farh = Array();
    let result = Array();
    let celsiusArray = Array();

    while(celsius <= 100){
        farh = (9 * celsius + 160) / 5
        
        result.push(farh)
        celsiusArray.push(celsius);
        celsius += 10
    }

    alert(`${celsiusArray[0]}C° = ${result[0]}F° 
${celsiusArray[1]}C° = ${result[1]}F°
${celsiusArray[2]}C° = ${result[2]}F°
${celsiusArray[3]}C° = ${result[3]}F°
${celsiusArray[4]}C° = ${result[4]}F°
${celsiusArray[5]}C° = ${result[5]}F°
${celsiusArray[6]}C° = ${result[6]}F°
${celsiusArray[7]}C° = ${result[7]}F°
${celsiusArray[8]}C° = ${result[8]}F°
${celsiusArray[9]}C° = ${result[9]}F°
`)
}

function exer37(){
    let soma = 0;
    let index = 1;

    while(index <= 10){
        let valor = parseInt(prompt("Digite um valor: "))
        soma += valor

        index++;
    }


    alert(`A soma total dos valores é: ${soma} 
A média aritmética dos valores é: ${soma / 10}`)
}

function exer38(){
    let soma = 0;
    let index = 50;

    while(index <= 70){
        soma += index;

        index += 2
    }

    alert(`A soma entre os valores pares dentro dessa faixa é: ${soma}
A média aritmética dos valores é: ${soma / 10}`)
}

function exer39(){
    let soma = null;
    let menu = null;
   
    while(menu !== "N"){
        let nome = prompt("Informe  o nome do comodo a ser calculado: ");
        let largura = parseInt(prompt("Largura² do comodo"));
        let comprimeiro = parseInt(prompt("Comprimento² do comodo"));
        let area = largura * comprimeiro
        alert(`A area de ${nome} é: ${area}cm²`) 

        soma += area
        menu = prompt(`Deseja calcular outro comodo ? [S] - SIM || [N] - NÃO`)
        menu = menu.toUpperCase();
    } 

    alert(`A residencia possui ${soma}cm² de area total`) 
}

function exer40(){
    let numero = 0;
    let maior = 0;
    let menor = 0;

    while(numero >= 0){
        numero = parseInt(prompt("Digite um numero POSITIVO para continuar ou NEGATIVO para encerrar: "))

        if(numero > 0){

            if(numero > maior) {
                maior = numero
            }else if(numero < menor){
                menor = numero
            }

        } else {
            menor = numero
        }
    }

    alert(`O maior número digitado foi: ${maior} 
        O menor número digitado foi: ${menor}`)
}

function exer41(){
    for(let i = 15; i <= 200; i++){
        let soma = i * i

        console.log(`${i}² = ${soma}`)

    }

    alert("Confira o console para ver  o resultado: ")
}

function exer42(){
    let soma = null;

    for(let i = 0; i <= 500; i+= 2){
        soma += i
    }

    alert(`A soma entre os valores pares existentes entre 1 até 500 é: ${soma}`)
}

function exer43(){
    for(let i = 1; i <= 200; i++){

        i % 4 == 0 ? console.log(`O valor ${i} é divisivel por 4 (${i} / 4 = ${i / 4})`) : null
    }

    alert("Verifique o console para ver o resultado!");
}

function exer44(){
    let soma = null;
    let grao = 1;

    for(let quad = 1; quad < 64; quad++){
        grao *= 2 
        soma += grao 
    }

    alert(`A soma dos grãos de trigo  em um tabuleiro é: ${soma}`)
}

function exer45(){
    let valor = Array(); 
    let acumulador = 1; 
    let acumuladorDois = 0; 

    for (let i = 0; i < 15; i++) {
        valor[i] = parseInt(prompt("Digite um valor"))

        for (let z = valor[i]; z >= 1; z--) {
            acumulador = acumulador * z;
            
            if (z == 1) {
                acumuladorDois += acumulador; 
                acumulador = 1; 
            }
        }
    }
    alert(`A soma total dos fatoriais foi de ${acumuladorDois}`);
}

function exer46(){
    let valor = Array(); 
    let acumulador = 1; 
    let acumuladorDois = 0; 

    for (let index = 1; index <= 5; index++) {
        if (index % 2 != 0) {
            valor.push(index) 
        }
    }

    for (let zindex = 0; zindex <= valor.length; zindex++) {
    
        for (let yindex = valor[zindex]; yindex >= 1; yindex--) {
            acumulador = acumulador * yindex;
           
            if (yindex == 1) {
                acumuladorDois += acumulador; 
               
                acumulador = 1; 
            }
        }
    }


    alert("A soma fatorial de todos os número ímpares de 1 até 10 é: " + acumuladorDois);
}

function exer47(){
    let soma = null;
    let menu = null;

    for(let i = menu; i !== "N"; i = menu){
        let nome = prompt("Informe  o nome do comodo a ser calculado: ");
        let largura = parseInt(prompt("Largura² do comodo"));
        let comprimeiro = parseInt(prompt("Comprimento² do comodo"));
        let area = largura * comprimeiro
        alert(`A area de ${nome} é: ${area}cm²`) 

        soma += area
        menu = prompt(`Deseja calcular outro comodo ? [S] - SIM || [N] - NÃO`)
        menu = menu.toUpperCase();
    }

    alert(`A residencia possui ${soma}cm² de area total`) 
    
}

function exer48(){
    let num = 0;
    let maior = 0;
    let menor = 0;

    for(let i = num; i >= 0; i = num){
        num = parseInt(prompt("Digite um valor: "));

        if(num > maior) {
            maior = num

        }else if(num < menor) {
            menor = num
        }
    }

    alert(`O maior valor digitado foi: ${maior} 
            O menor valor digitado foi: ${menor}`)
}

function exer49(){
    let result = 0;
    let dividendo = parseInt(prompt("Digite o valor do Dividendo: "));
    let divisor = parseInt(prompt("Digite o valor do Divisor: "));

    
}

function exer50(){
    let i = 15;
    let soma = null;

    do {
        soma = i * i
        console.log(`${i}² = ${soma}`)
        i++

    } while (i <= 200);

    alert("Verifique o console para ver  o resultado")
}

function exer51(){
    let num = parseInt(prompt("Digite um número"));
    let cont = 1
    let mult = null;

    do {
        mult = cont * num
        console.log(`${num} x ${cont} = ${mult}`)
        cont++

    } while (cont < 11);

    alert("Verifique o console para ver o resultado!")
}

function exer52(){
    let i = 1;
    let soma = 0;

    do {
        soma = soma + i
        i++
    } while (i <= 100);

    alert(`A soma total entre os numeros inteiros de 10 a 100 é: ${soma}`);
}

function exer53(){
    let cont = 1;
    let soma = null;

    do {
        if(cont % 2 === 0){
            soma = soma + cont
        }

        cont++
        
    } while (cont <= 500);

    alert("A soma total entre os valores pares é: " + soma)
}

function exer54(){
    let cont = 1;
    let result = [];

    do {
        if(cont % 2 !== 0){
            result.push(cont)
        }

        cont++;
    } while (cont < 21);

    alert(result)
}

function exer55(){
    let cont = 1;

    do {
        if(cont % 2 === 0){
            console.log(`${cont} é divisivel por 4! ${cont} / 4 = ${cont / 4}`);
        }

        cont++
    } while (cont <= 200);

    alert("Verifique o console para ver o resultado!")
}

function exer56(){
    let cont = 0;
    let result = null;
    
    do {
        result = Math.pow(3, cont);
        console.log(`${3}^${cont} = ${result}`);
        cont++;
    } while (cont <= 15);

    alert("Verifique o console para ver o resultado.") 
}

function exer57(){
    let base = parseInt(prompt("Digite um valor para a base: "));
    let expoente = parseInt(prompt("Digite um valor para o expoente"));
    let cont = 1;
    let potencia = 1;

    do {
        potencia = potencia * base
        cont++;
        
    } while (cont <= expoente);

    alert(`A soma final é: ${potencia}`)
}

function exer58(){
    let contador = 1;
    let anterior = 0;
    let atual = 0;
    let proximo = 1;
    result = Array();
    console.log(atual)

    do {
        result.push(proximo)
        anterior = atual
        atual =  proximo
        proximo = atual + anterior

        contador++;
        
    } while (contador <= 15);

    alert(`Sequencia: ${result}`)

}

function exer59(){
    let celsius = 10;
    let farh = Array();
    let result = Array();
    let celsiusArray = Array();

    do {
        farh = (9 * celsius + 160) / 5
        result.push(farh)
        celsiusArray.push(celsius)
        celsius +=10 
    } while (celsius <= 100);


    alert(`${celsiusArray[0]}C° = ${result[0]}F° 
${celsiusArray[1]}C° = ${result[1]}F°
${celsiusArray[2]}C° = ${result[2]}F°
${celsiusArray[3]}C° = ${result[3]}F°
${celsiusArray[4]}C° = ${result[4]}F°
${celsiusArray[5]}C° = ${result[5]}F°
${celsiusArray[6]}C° = ${result[6]}F°
${celsiusArray[7]}C° = ${result[7]}F°
${celsiusArray[8]}C° = ${result[8]}F°
${celsiusArray[9]}C° = ${result[9]}F°
`)
}

function exer60(){
    let valor = Array(); 
    let acumulador = 1; 
    let acumuladorDois = 0; 

    let index = 1;
    let zindex = 0;
    let yindex = valor[zindex];

    do {
        if(index % 2 !== 0) {
            valor.push(index)
        }

        index++;
    } while (index <= 5);


    do {
        do {
            acumulador = acumulador * yindex;
            if(yindex == 1) {
                acumuladorDois += acumulador;
                acumulador = 1;
            }

            yindex--
        } while (yindex >= 1);

        zindex++;
        
    } while (zindex <= valor.length);

    alert("A soma fatorial de todos os número ímpares de 1 até 10 é: " + acumuladorDois); 
}
