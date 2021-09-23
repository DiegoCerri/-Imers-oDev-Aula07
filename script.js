var listaNomes = ["Forthisara", "Dicles", "Mensa", "Reginbeorth", "Gar-ka", "Cynke", "Fleddan", "Sabert", "Sanliam", "Sanliam", "Sanloc"]
var carta0 = {Nome:"",
             Atributos: {Forca:0,
                        Destreza:0,
                        Constituicao:0,
                        Inteligencia:0,
                        Sabedoria:0,
                        Carisma:0}
            }
var carta1 = {Nome:"",
             Atributos: {Forca:0,
                        Destreza:0,
                        Constituicao:0,
                        Inteligencia:0,
                        Sabedoria:0,
                        Carisma:0}
            }
var carta2 = {Nome:"",
             Atributos: {Forca:0,
                        Destreza:0,
                        Constituicao:0,
                        Inteligencia:0,
                        Sabedoria:0,
                        Carisma:0}
            }
var carta3 = {Nome:"",
             Atributos: {Forca:0,
                        Destreza:0,
                        Constituicao:0,
                        Inteligencia:0,
                        Sabedoria:0,
                        Carisma:0}
            }
var carta4 = {Nome:"",
             Atributos: {Forca:0,
                        Destreza:0,
                        Constituicao:0,
                        Inteligencia:0,
                        Sabedoria:0,
                        Carisma:0}
            }
var carta5 = {Nome:"",
             Atributos: {Forca:0,
                        Destreza:0,
                        Constituicao:0,
                        Inteligencia:0,
                        Sabedoria:0,
                        Carisma:0}
            }
var carta6 = {Nome:"",
             Atributos: {Forca:0,
                        Destreza:0,
                        Constituicao:0,
                        Inteligencia:0,
                        Sabedoria:0,
                        Carisma:0}
            }
var carta7 = {Nome:"",
             Atributos: {Forca:0,
                        Destreza:0,
                        Constituicao:0,
                        Inteligencia:0,
                        Sabedoria:0,
                        Carisma:0}
            }
var carta8 = {Nome:"",
             Atributos: {Forca:0,
                        Destreza:0,
                        Constituicao:0,
                        Inteligencia:0,
                        Sabedoria:0,
                        Carisma:0}
            }
var carta9 = {Nome:"",
             Atributos: {Forca:0,
                        Destreza:0,
                        Constituicao:0,
                        Inteligencia:0,
                        Sabedoria:0,
                        Carisma:0}
            }

var cartas = [carta0,carta1,carta2,carta3,carta4,carta5,carta6,carta7,carta8,carta9]
var cartaDoJogador=cartas[0];
var cartaDoOponente=cartas[1];

function gerarNome(){
  var valorNome = parseInt(Math.random()*(listaNomes.length));
  var stringNome = listaNomes[valorNome];
  listaNomes.splice(valorNome, 1);
  return stringNome;
}

function gerarValorAtributo(){
  var valorAtributo = parseInt(Math.random()*20);
  while (valorAtributo<10){
    valorAtributo = parseInt(Math.random()*20);
  }
  return valorAtributo;
}

function gerarCarta(){
  for (var i=0; i<10; i++){
    cartas[i].Nome=gerarNome();
    cartas[i].Atributos.Forca=gerarValorAtributo();
    cartas[i].Atributos.Destreza=gerarValorAtributo();
    cartas[i].Atributos.Constituicao=gerarValorAtributo();
    cartas[i].Atributos.Inteligencia=gerarValorAtributo();
    cartas[i].Atributos.Sabedoria=gerarValorAtributo();
    cartas[i].Atributos.Carisma=gerarValorAtributo();
  }  
}

function sortearCarta(){
  gerarCarta()
  document.getElementById("btnSortear").disabled=true;
  document.getElementById("btnJogar").disabled=false;
  exibirOpcoes()
}

function exibirOpcoes(){
  var opcoes = document.getElementById("opcoes")
  var opcoesTexto = `<h3>Nome da Carta: ${cartaDoJogador.Nome}</h3>`;
  
  for (var atributo in cartaDoJogador.Atributos){
    var valorDoAtributo=cartaDoJogador.Atributos[atributo]
    opcoesTexto = opcoesTexto + `<input type='radio' name='atributo' value=${atributo}>${atributo} (${valorDoAtributo})</br>`
  }
  opcoes.innerHTML = opcoesTexto;
}

function obtemAtributoSelecionados(){
  var radioAtributos = document.getElementsByName("atributo");
//  var escolha=false;
  
  for (var i=0; i<radioAtributos.length;i++){
    if (radioAtributos[i].checked){
//      escolha=true;
      return atributoSelecionado = radioAtributos[i].value;
    }
  }
  
/*  if (escolha){
    return atributoSelecionado;
  } else {
    window.alert("Para jogar é necessário escolher um atributo!")
  }*/
}

function jogar(){
  var atributoSelecionado=obtemAtributoSelecionados();
  if(typeof atributoSelecionado === "undefined"){
    window.alert("Para jogar é necessário escolher um atributo!")
  } else {
    jogarOK(atributoSelecionado);
  }
}

function jogarOK(argumentoAtributoSelecionado){
  var atributoSelecionado = argumentoAtributoSelecionado; //obtemAtributoSelecionados();
  var elementoResultado = document.getElementById("resultado");
  var valorCartaDoJogador = cartaDoJogador.Atributos[atributoSelecionado]
  var valorCartaDoOponente = cartaDoOponente.Atributos[atributoSelecionado]
  var nomeCartaDoOponente = cartaDoOponente.Nome;
  
  if (valorCartaDoJogador>valorCartaDoOponente){
    elementoResultado.innerHTML = `<h3>Você escolheu o atributo:${atributoSelecionado}=${valorCartaDoJogador}. </br>Contra: ${valorCartaDoOponente} do oponente ${nomeCartaDoOponente}.</br>VITÓRIA!</h3>`
  } else if (valorCartaDoJogador>valorCartaDoOponente){
    elementoResultado.innerHTML = `<h3>Você escolheu o atributo:${atributoSelecionado}=${valorCartaDoJogador}. </br>Contra: ${valorCartaDoOponente} do oponente ${nomeCartaDoOponente}.</br>DERROTA!</h3>`
  } else {
    elementoResultado.innerHTML = `<h3>Você escolheu o atributo:${atributoSelecionado}=${valorCartaDoJogador}. </br>Contra: ${valorCartaDoOponente} do oponente ${nomeCartaDoOponente}.</br>EMPATE!</h3>`
  } 
}