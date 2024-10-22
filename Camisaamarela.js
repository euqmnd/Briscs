var botão = document.getElementById('Botão')
var menu = document.getElementById('menu')
function formatarCEP(cep) {
    let valor = cep.value.replace(/\D/g, ''); // Remove tudo o que não for dígito
    if (valor.length > 5) {
      valor = valor.replace(/(\d{5})(\d)/, '$1-$2'); // Adiciona o hífen no meio
    }
    cep.value = valor;
  }
  function formatarCPF(cpf) {
    let valor = cpf.value.replace(/\D/g, ''); // Remove tudo o que não for dígito
    if (valor.length > 9) {
      valor = valor.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4'); // Formata CPF (XXX.XXX.XXX-XX)
    } else if (valor.length > 6) {
      valor = valor.replace(/(\d{3})(\d{3})(\d{1,3})/, '$1.$2.$3'); // Formata até XXX.XXX.XXX
    } else if (valor.length > 3) {
      valor = valor.replace(/(\d{3})(\d{1,3})/, '$1.$2'); // Formata até XXX.XXX
    }
    cpf.value = valor;
  }
botão.addEventListener('click',comp)
function comp(){
    menu.style.display = 'block'
    menu.style.transitionTimingFunction = 'ease'
    menu.style.transitionDuration = '1s'
}
var button = document.getElementById('concluir')
button.addEventListener('click',hid)
function hid(){
    menu.style.display = 'none'
}
var pp = document.getElementById('TamanhoPP')
var p = document.getElementById('TamanhoP')
var m = document.getElementById('TamanhoM')
var g3 = document.getElementById('Tamanho3G')
var g4 = document.getElementById('Tamanho4G')
var g = document.getElementById('TamanhoG')
var gg = document.getElementById('TamanhoGG')
pp.addEventListener('click', PP)
p.addEventListener('click', P)
m.addEventListener('click', M)
g3.addEventListener('click', G3)
g4.addEventListener('click', G4)
g.addEventListener('click',G)
gg.addEventListener('click',GG)
function PP(){
  pp.style.backgroundColor =  'gray'
  pp.style.transitionDuration = '1s'
  pp.style.transitionTimingFunction = 'ease'
  p.style.backgroundColor = 'white'
  m.style.backgroundColor = 'white'
  g3.style.backgroundColor = 'white'
  g4.style.backgroundColor = 'white'
  g.style.backgroundColor = 'white'
  gg.style.backgroundColor = 'white'
}
function P(){
  p.style.backgroundColor = 'gray'
  p.style.transitionTimingFunction = 'ease'
  p.style.transitionDuration = '1s'
  pp.style.backgroundColor ='white'
  m.style.backgroundColor = 'white'
  g3.style.backgroundColor = 'white'
  g4.style.backgroundColor = 'white'
  g.style.backgroundColor = 'white'
  gg.style.backgroundColor = 'white'
}
function M(){
  m.style.backgroundColor = 'gray'
  m.style.transitionTimingFunction = 'ease'
  m.style.transitionDuration = '1s'
  g3.style.backgroundColor = 'white'
  g4.style.backgroundColor = 'white'
  g.style.backgroundColor = 'white'
  gg.style.backgroundColor = 'white'
  pp.style.backgroundColor = 'white'
  p.style.backgroundColor = 'white'
}
function G3(){
  g3.style.backgroundColor = 'gray'
  g3.style.transitionTimingFunction = 'ease'
  g3.style.transitionDuration = '1s'
  g4.style.backgroundColor = 'white'
  g.style.backgroundColor = 'white'
  gg.style.backgroundColor = 'white'
  pp.style.backgroundColor = 'white'
  p.style.backgroundColor = 'white'
  m.style.backgroundColor = 'white'
}
function G4(){
  g4.style.backgroundColor = 'gray'
  g4.style.transitionTimingFunction = 'ease'
  g4.style.transitionDuration = '1s'
  g.style.backgroundColor = 'white'
  gg.style.backgroundColor = 'white'
  pp.style.backgroundColor = 'white'
  p.style.backgroundColor = 'white'
  m.style.backgroundColor = 'white'
  g3.style.backgroundColor = 'white'
}
function G(){
  g.style.backgroundColor = 'gray'
  g.style.transitionTimingFunction = 'ease'
  g.style.transitionDuration = '1s'
  gg.style.backgroundColor = 'white'
  pp.style.backgroundColor = 'white'
  p.style.backgroundColor = 'white'
  m.style.backgroundColor = 'white'
  g3.style.backgroundColor = 'white'
  g4.style.backgroundColor = 'white'
}
function GG(){
  gg.style.backgroundColor = 'gray'
  gg.style.transitionTimingFunction = 'ease'
  gg.style.transitionDuration = '1s'
  pp.style.backgroundColor = 'white'
  p.style.backgroundColor = 'white'
  m.style.backgroundColor = 'white'
  g3.style.backgroundColor = 'white'
  g4.style.backgroundColor = 'white'
  g.style.backgroundColor = 'white'
}