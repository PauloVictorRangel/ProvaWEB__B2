// Nome: Paulo Victor Rangel

                 /*Questão 1*/

/*Crie uma função que receba um número como parâmetro e determine se ele é primo ou não. Um número primo é aquele que é divisível apenas por 1 e por ele mesmo.
Liste todos os números primos entre 1 e 1000.*/

var numeroPrimo = (num) => {
    for (var i = 2; i < num; i++)
      if (num % i === 0) {
        return "Não é  número primo";
      }
    return num > 1, "É número primo";
  };
  
  function conjuntoPrimos() {
    var primosLista = [];
  
    for (let i = 2; i <= 1000; i++) {
      if (numeroPrimo(i) === "É número primo") {
        primosLista.push(i);
      }
    }
    return primosLista;
  }
  var primos = conjuntoPrimos();
     /*Teste Questão 1*/
resultado = numeroPrimo(25);//Testando se 25 é primo.
console.log(primos);//Mostrar todos os primos de 1 a 1000.

                 /*Questão 2*/

/* Crie uma função que receba uma senha como parâmetro e verifique se ela atende aos seguintes critérios: ter pelo menos 8 caracteres,
  conter pelo menos uma letra maiúscula, uma letra minúscula e um número. Sua função deve receber uma senha e dizer para o usuário se ela é valida.*/
  function criarSenha() {
    var senha = prompt("Insira a senha:");
  
    if (senha.length < 8) {
      alert("Invalida: deve conter no minimo 8 caracteres");
    } else if (!/[A-Z]/.test(senha)) {
      alert("Invalida: deve conter uma letra maiuscula");
    } else if (!/[a-z]/.test(senha)) {
      alert("Invalida: deve conter uma letra minuscula");
    } else if (!senha.match(/[0-9]/)) {
      alert("Invalida: deve conter um numero");
    } else {
      alert("A senha pode ser criada!");
    }
  }
    /*Teste Questão 2*/
criarSenha();//Chamando a função.


              /*Questão 3*/

/*Crie uma função que receba um número como parâmetro e retorne o fatorial desse número. O fatorial de um número é o produto de todos os números
inteiros positivos menores ou iguais a ele. Por exemplo, o fatorial de 5 é 5 * 4 * 3 * 2 * 1 = 120. Sua função deve calcular os fatoriais de 1 a 10.*/
  
  function Fatorial(num) {
    if (num == 0) {
      return 1;
    } else if (num > 10) {
      return "insira numeros de 1 a 10";
    } else {
      return num * Fatorial(num - 1);
    }
  }
  
  var fatoriais = [];
  for (var i = 1; i <= 10; i++) {
    fatoriais.push(Fatorial(i));
  }
       /*Teste Questão 3*/
console.log(fatorias);//Mostra os números fatoriais de 1 a 10
console.log(Fatorial(5));//Mostra o fatorial do 5 que é 120.

                /*Questão 4*/

/* Crie uma função que receba um número como parâmetro e determine se ele é um quadrado perfeito. Um quadrado perfeito é um número 
inteiro cuja raiz quadrada também é um número inteiro. Por exemplo, 25 é um quadrado perfeito porque a sua raiz quadrada é 5, um número inteiro.*/
  
  function quadradoPerfeito(numero) {
    var raizNumero = Math.floor(Math.sqrt(numero));
    return raizNumero * raizNumero === numero;
  }
  
  var num = prompt("Insira um número para verificação");
  
  num = parseInt(num);
  
  if (quadradoPerfeito(num)) {
    console.log(num + " é um quadrado perfeito.");
    alert("é um quadrado perfeito.");
  } else {
    console.log(num + " não é um quadrado perfeito.");
    alert("não é um quadrado perfeito.");
  }
     /*Teste Questão 4*/
   // O teste ja funciona ao rodar a função, aparece um prompt, você digita o numero e ele retorna se é um quadrado perfeito ou não.
console.log(quadradoPerfeito(4));//Teste usando o "console.log" se o numero 4 é um quadrado perfeito.
// A resposta retorna "true" or "false".
