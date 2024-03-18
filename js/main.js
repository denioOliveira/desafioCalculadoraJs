// Função para verificar se o valor é um número válido
function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

// Seleção de elementos do HTML
const inputNumber1 = document.getElementById('number1');
const inputNumber2 = document.getElementById('number2');
const resultBox = document.getElementById('result-box');
const btnPlus = document.getElementById('btn-plus');
const btnTimes = document.getElementById('btn-times');
const btnClear = document.getElementById('btn-clear');

// Adiciona eventos de input para validar enquanto o usuário digita
inputNumber1.addEventListener('input', validateInput);
inputNumber2.addEventListener('input', validateInput);

// Função para validar o input
function validateInput(event) {
  const input = event.target;
  const inputValue = input.value;

  // Remove a marcação de vermelho da caixa de texto
  input.classList.remove('input-error');

  // Verifica se o valor não é um número válido
  if (!isNumber(inputValue) && inputValue !== '') {
    // Adiciona a classe de erro e limpa o valor
    input.classList.add('input-error');
    input.value = '';
  }
}

// Função para calcular a soma
function calculateSum() {
  const n1 = inputNumber1.value;
  const n2 = inputNumber2.value;

  // Verifica se ambos os valores são números válidos
  if (isNumber(n1) && isNumber(n2)) {
    // Realiza a soma e exibe o resultado
    const sum = parseFloat(n1) + parseFloat(n2);
    resultBox.textContent = sum;
  } else {
    // Se algum valor não for válido, marca a caixa de texto de vermelho
    inputNumber1.classList.add('input-error');
    inputNumber2.classList.add('input-error');
  }
}

// Função para calcular a multiplicação
function calculateMultiplication() {
  const n1 = inputNumber1.value;
  const n2 = inputNumber2.value;

  // Verifica se ambos os valores são números válidos
  if (isNumber(n1) && isNumber(n2)) {
    // Realiza a multiplicação e exibe o resultado
    const multiplication = parseFloat(n1) * parseFloat(n2);
    resultBox.textContent = multiplication;
  } else {
    // Se algum valor não for válido, marca a caixa de texto de vermelho
    inputNumber1.classList.add('input-error');
    inputNumber2.classList.add('input-error');
  }
}

// Função para limpar o formulário
function clearForm() {
  // Remove a marcação de vermelho nas caixas de texto
  inputNumber1.classList.remove('input-error');
  inputNumber2.classList.remove('input-error');

  // Limpa as caixas de texto
  inputNumber1.value = '';
  inputNumber2.value = '';

  // Reseta a caixa de resultado para 0
  resultBox.textContent = '0';
}

// Chama a função clearForm para garantir que o formulário inicie limpo
clearForm();

// Adiciona os eventos aos botões
btnPlus.addEventListener('click', calculateSum);
btnTimes.addEventListener('click', calculateMultiplication);
btnClear.addEventListener('click', clearForm);
