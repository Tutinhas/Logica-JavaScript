let numero;

numero=parseInt(prompt("Digite a sua idade:") );


if(numero<16){
    alert("Com essa idade, não pode votar")
}else if(numero<18){
    alert("Com essa idade, o voto é opcional")
}else{
    alert("Com essa idade, o voto é obrigatório")
}