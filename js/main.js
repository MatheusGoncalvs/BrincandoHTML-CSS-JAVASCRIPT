//Front-End Web Development Quick Start With HTML5, CSS, and JavaScript
//JavaScript module

$(document).ready(function(){//Garante que o doc html foi carregado antes de rodar o javascript:(Erro na manipulação do DOM)

"use strict"; //Essa string define regras para um uso mais estrito do código javascript. Faz com que não se possa utilizar, por exemplo, uma variável sem informar o "var".

var msg = "Hello JavaScript";
console.log(msg);

var informaNomeDiv = document.getElementById("informaNome");//Manipulação via DOM
informaNomeDiv.innerHTML = "<p>This is from JavaScript</p>";

console.log("msg is " + typeof(msg)); //exemplo do uso do typeof:Ele "diz" qual o tipo da variável
console.log("informaNomeDiv is " + typeof(informaNomeDiv));

//Funções
function showMsg(msg) {
    console.log("showMsg: " + msg);
}

showMsg("some information.");
//JavaScript não aceita sobre carga de funções (com o mesmo nome [ function show(msg), function show(msg, text) ])

function showMsg(msg, more) {//Uma alternativa para conseguir uma "sobrecarga" de função
    if(more){
        console.log("show msg " + msg + more);
    }else{
        console.log("Show msg " + msg);
    }
}
showMsg("Some information ");
showMsg("Some information " , "and more...");

var showIt = function(msg) {
    console.log(msg);
}
showIt("Some message"); 

//Chamando fuções de maneira assíncrona
function showItThen(msg, callback){
    showIt(msg);
    callback();
}
showItThen("showItThen called.", function(){
    console.log("callback called");
})

//Declarar um objeto: Ele pode ter funções e até objetos como atributos;
var result = {
    name: "JQuery",
    score: 4.5,
    showLog: function(){

    },
    owner: {
        login: "Matheus",
        senha: 123456
    }
};
result.phoneNumber = "123-154-2430"; //Atribuir uma nova propriedade ao objeto

//Definindo Arrays: Com uma coleção de objetos
var results = [
    {
        name: "JQuery",
        score: 4.5,
        showLog: function(){
    
        },
        owner: {
            login: "Shawn Mendes",
            senha: 123456
        }
    }, {
        name: "Bootstrap",
        score: 4,
        showLog: function(){
    
        },
        owner: {
            login: "Boot",
            senha: 12345
        }
    }
];
results.push(result);//adicionando item a tabela
console.log(results.length);
console.log(results[0].name);

//Modulo de JQuery
//Manipulando via DOM jQuery
var resultList = $("#resultList");//essa declaração pode ser assim: jQuery("#resultList"); ou assim: $("#resultList");
resultList.text("This is from JQuery");

//Ação javascript que faz desaparecer and aparecer..
var toggleButton = $("#toggleButton");
toggleButton.on("click", function () {
    resultList.toggle(500);

    //
    if(toggleButton.text() == "Hide")
        toggleButton.text("Show");
    else
        toggleButton.text("Hide");
});

//Manipulando o DOM dessa forma afetará todos os itens envolvidos
//$("header nav li").text("Testing jQuery.."); //var getList = $("header nav li") *Pode ser utilizada para receber uma collection desses intens

//$("header nav li").css("font-weight", "bold");

var listItens = $("header nav li");
listItens.css("font-weight", "bold");
listItens.css("font-family", "arial");

//Como definir uma cor diferente para o primeiro item da lista?
listItens.filter(":first").css("color", "aqua");

//Pegar uma coleção de objetos e manipula-los(Aqui utilizamos os seu atribudos numa lista rodando num loop)
resultList.empty();//Limpa a lista para utilizá-la
$.each(results, function(i, item){//O for do jQuery(cada resultado da lista passa por item)

    var newResult = $("<div class='result'>" + //Para poder adicionar uma função hover nessa lista, tive que transformá-la num objeto jQuery($(elemento para ser um objeto jQuery))
    "<div class='title'>" + item.name + "</div>" +
    "<div>Score: " + item.score + "</div>" +
    "<div>Owner: " + item.owner.login + "</div>"+
    "</div>");

    //Função jQuery que ao passar o mouse a cor da lista alterna entre cinza-claro e transparente.
    newResult.hover(function () {
        //make it darker
        $(this).css("background-color", "lightgray");
    }, function () {
        //reverse
        $(this).css("background-color", "transparent");
    });

resultList.append(newResult);
});

//JSON(JavaScript Object Notation)

var gitHubSearch = "https://api.github.com/search/repositories?q=" + encodeURIComponent(searchPhrase);

});