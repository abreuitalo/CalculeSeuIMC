//pegar o evento de submit do form
const form = document.querySelector('.formulario');

form.addEventListener('submit', function (evento) {
   //prevenir o envento
   evento.preventDefault();
   console.log('Evento prevenido!');

   //pegar o value dos input's
   const inputPeso = document.querySelector('#peso');
   const inputAltura = document.querySelector('#altura');

   const peso = Number(inputPeso.value);
   const altura = Number(inputAltura.value);

   //validação caso seja desigual a Number
   if (!peso) {
      setResultado('Peso Inválido!', false);
      return;
   }
   if (!altura) {
      setResultado('Altura Inválida!', false);
      return;
   }

   const imc = getIMC(peso, altura);
   const nivelIMC = getNivelIMC(imc);

   const msg = `Seu IMC é ${imc} (${nivelIMC}).`;
   setResultado(msg, true);
});

function getIMC(peso, altura) {
   const imc = peso / altura ** 2;
   return imc.toFixed(2);
}

function getNivelIMC(imc) {
   const nivel = [
      'Abaixo do peso',
      'Peso normal',
      'Sobrepeso',
      'Obesidade Grau 1',
      'Obesidade Grau 2',
      'Obesidade Grau 3'
   ];

   if (imc >= 39.9) return nivel[5];
   if (imc >= 34.9) return nivel[4];
   if (imc >= 29.9) return nivel[3];
   if (imc >= 24.9) return nivel[2];
   if (imc >= 18.5) return nivel[1];
   if (imc <= 18.5) return nivel[0];
}

function setResultado(msg, isValid) {
   let resultado = document.querySelector('.resultado');
   resultado.innerHTML = '';

   const p = criaP();

   if (isValid) {
      p.classList.add('valid');
   } else {
      p.classList.add('invalid');
   }

   p.innerHTML = msg;
   resultado.appendChild(p);
}

//function cria um parágrafo
function criaP() {
   {
      const p = document.createElement('p');
      return p;
   }
}
