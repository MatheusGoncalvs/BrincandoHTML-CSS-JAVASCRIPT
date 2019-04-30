//Front-End Web Development Quick Start With HTML5, CSS, and JavaScript
//JavaScript module

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
        login: "matheus",
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
            login: "matheus",
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

