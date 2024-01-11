document.getElementById('formCalc').addEventListener('submit', function(event) {
  const recomendacaoEbook = document.getElementById('inputPeso').value;

  localStorage.setItem('recomendacaoEbook', recomendacaoEbook);
});