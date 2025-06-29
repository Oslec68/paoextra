
let lojas = {};

fetch('lojas.json')
  .then(resp => resp.json())
  .then(data => lojas = data);

function preencher(){
  const codigo = document.getElementById('cod').value.padStart(4,'0');
  const loja = lojas[codigo];
  if(loja){
    document.getElementById('nome').textContent = loja.nome;
    document.getElementById('cidade').textContent = loja.cidade;
    contar(); // reinicia contador se quiser
  } else {
    document.getElementById('nome').textContent = '';
    document.getElementById('cidade').textContent = '';
    document.getElementById('ckCounter').textContent = '📋 Checklist (0)';
  }
}

function contar(){
  const qt = [...document.querySelectorAll('#checklist input:checked')].length;
  document.getElementById('ckCounter').textContent = `📋 Checklist (${qt})`;
}
